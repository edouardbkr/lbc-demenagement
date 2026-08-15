// site.jsx — Shared chrome: Nav, Footer, MarqueeBar, MascotStamp, QuickQuote, reveal hook
const { useState, useEffect, useRef } = React;

// ═══════════════════════════════════════════════════════════════════════════
// ATTRIBUTION — d'où vient chaque prospect
//
// Ce bloc s'exécute sur TOUTES les pages du site (site.jsx est chargé partout).
// Il détermine le canal d'acquisition à l'arrivée du visiteur et le mémorise, pour
// que le formulaire de devis puisse l'envoyer avec le lead.
//
// On garde DEUX attributions :
//   • premier contact (first touch) — jamais écrasé. C'est le canal qui a fait
//     découvrir LBC. C'est lui qui mérite le budget publicitaire.
//   • dernier contact (last touch) — mis à jour à chaque visite. C'est le canal
//     qui a déclenché la demande.
// Un prospect qui voit une pub Meta, puis revient trois jours plus tard via Google
// en tapant « les bras cassés » : le mérite revient à Meta, pas à Google.
//
// ⚠️ POINT CRITIQUE : le trafic Google Maps (fiche d'établissement) arrive avec le
// même référent que le référencement naturel. Impossible de les distinguer SANS
// ajouter un paramètre au lien « Site web » de la fiche Google Business Profile.
// ═══════════════════════════════════════════════════════════════════════════
(function () {
  const CLE = 'lbc_attrib';
  const PAYANT = ['cpc', 'ppc', 'paid', 'paidsocial', 'paid_social', 'display', 'ads'];

  function hote(url) {
    try { return new URL(url).hostname.replace(/^www\./, '').toLowerCase(); } catch (e) { return ''; }
  }

  // Détermine le canal à partir des paramètres d'URL et du référent.
  function detecter() {
    const p = new URLSearchParams(window.location.search);
    const g = (k) => (p.get(k) || '').trim().toLowerCase();
    const src = g('utm_source'), med = g('utm_medium'), camp = p.get('utm_campaign') || '';
    const gclid = p.get('gclid') || p.get('gbraid') || p.get('wbraid') || '';
    const fbclid = p.get('fbclid') || '';
    const ref = hote(document.referrer || '');
    const payant = PAYANT.indexOf(med.replace(/[-\s]/g, '_')) >= 0;

    let canal = '';
    // 1. Les identifiants de clic publicitaire sont la preuve la plus fiable : ils ne
    //    peuvent pas être présents sans un vrai clic sur une annonce payante.
    if (gclid) canal = 'google_ads';
    else if (fbclid && payant) canal = 'meta_ads';
    // 2. Balises UTM explicites
    else if (src === 'gmb' || src === 'google_maps' || src === 'maps' || med === 'maps' || med === 'gmb') canal = 'google_maps';
    else if (src.indexOf('google') >= 0) canal = payant ? 'google_ads' : 'google_seo';
    else if (['facebook', 'instagram', 'meta', 'fb', 'ig'].indexOf(src) >= 0) canal = payant ? 'meta_ads' : 'meta_social';
    else if (src.indexOf('leboncoin') >= 0) canal = 'leboncoin';
    else if (src) canal = 'autre';
    // 3. À défaut, le référent
    else if (fbclid) canal = 'meta_social';
    else if (ref.indexOf('google') >= 0) canal = (document.referrer.indexOf('/maps') >= 0 || document.referrer.indexOf('/local') >= 0) ? 'google_maps' : 'google_seo';
    else if (ref.indexOf('bing') >= 0 || ref.indexOf('yahoo') >= 0 || ref.indexOf('ecosia') >= 0 || ref.indexOf('duckduckgo') >= 0) canal = 'autre_seo';
    else if (ref.indexOf('facebook') >= 0 || ref.indexOf('instagram') >= 0 || ref.indexOf('fb.com') >= 0) canal = 'meta_social';
    else if (ref.indexOf('leboncoin') >= 0) canal = 'leboncoin';
    else if (ref && ref.indexOf('lbcdemenagement') < 0) canal = 'referral';
    else if (!ref) canal = 'direct';
    else return null; // navigation interne : on ne touche à rien

    return {
      canal: canal,
      source: src || (ref || 'direct'),
      medium: med || '',
      campagne: camp || '',
      gclid: gclid ? gclid.slice(0, 120) : '',
      fbclid: fbclid ? fbclid.slice(0, 120) : '',
      referent: (document.referrer || '').slice(0, 200),
      page: (window.location.pathname + window.location.search).slice(0, 200),
      date: new Date().toISOString().slice(0, 10)
    };
  }

  function lire() {
    try { return JSON.parse(localStorage.getItem(CLE) || 'null'); } catch (e) { return null; }
  }

  try {
    const vu = detecter();
    if (vu) {
      const stock = lire() || {};
      // Le premier contact ne s'écrase jamais.
      if (!stock.premier) stock.premier = vu;
      // Une navigation interne ne remplace pas le dernier contact connu.
      if (vu.canal !== 'direct' || !stock.dernier) stock.dernier = vu;
      try { localStorage.setItem(CLE, JSON.stringify(stock)); } catch (e) {}
    }
  } catch (e) {}

  // Consommé par les formulaires au moment de l'envoi du lead.
  window.LBC_ATTRIB = function () {
    const s = lire() || {};
    const d = s.dernier || s.premier || null;
    const p = s.premier || null;
    if (!d) return null;
    return {
      canal: d.canal,
      canalPremier: p ? p.canal : d.canal,
      source: d.source, medium: d.medium, campagne: d.campagne,
      gclid: d.gclid, fbclid: d.fbclid,
      referent: d.referent, pageArrivee: d.page,
      premierContactLe: p ? p.date : d.date,
      premiereCampagne: p ? p.campagne : ''
    };
  };
})();

// Current page detection from <body data-page="...">
const CURRENT = document.body.getAttribute('data-page') || 'accueil';

const NAV = [
{ key: 'accueil', label: t('Accueil'), href: '/' },
{ key: 'formules', label: t('Formules'), href: 'Formules' },
{ key: 'france', label: t('En France'), mega: 'france' },
{ key: 'international', label: t('International'), mega: 'intl' },
{ key: 'mutation', label: t('Mutation professionnelle'), dropdown: [
  { label: t("Je suis un salarié"), href: "Mutations" },
  { label: t("Je suis un militaire"), href: "Militaire" },
  { label: t("Je suis une entreprise"), href: "Entreprise" }] },
{ key: 'apropos', label: t('À propos'), href: 'Apropos' }];

// Mega-menu content for "En France" and "International"
const MEGA = {
  france: {
    eyebrow: t("Déménagement en France"),
    title: t("De la Côte d'Azur\nà tout l'Hexagone."),
    blurb: t("Implantés à Nice, on déménage dans toute la région et partout en France — même équipe, même soin, du studio au grand volume."),
    cta: { label: t("Devis longue distance"), href: "Devis" },
    columns: [
    { title: t("Côte d'Azur"), links: [
      ["Nice", "Demenagement-Nice"], ["Cannes", "Demenagement-Cannes"], ["Antibes", "Demenagement-Antibes"],
      ["Monaco", "Demenagement-Monaco"], ["Menton", "Demenagement-Menton"], ["Grasse", "Demenagement-Grasse"],
      ["Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer"], ["Le Cannet", "Demenagement-Le-Cannet"],
      ["Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var"], ["Mandelieu", "Demenagement-Mandelieu"]] },

    { title: t("Longue distance"), links: [
      ["Nice → Paris", "Demenagement-Nice-Paris"], ["Nice → Lyon", "Demenagement-Nice-Lyon"],
      ["Nice → Marseille", "Demenagement-Nice-Marseille"], ["Nice → Toulouse", "Demenagement-Nice-Toulouse"],
      ["Nice → Bordeaux", "Demenagement-Nice-Bordeaux"]] },
]


  },
  intl: {
    eyebrow: t("Déménagement international"),
    title: t("Au-delà des\nfrontières."),
    blurb: t("Suisse, Italie, Espagne, Benelux : on organise le transport, les formalités douanières et le suivi jusqu'à destination."),
    cta: { label: t("Devis international"), href: "Devis" },
    columns: [
    { title: t("Suisse"), links: [["Genève", "Demenagement-Nice-Geneve"], ["Lausanne", "Demenagement-Nice-Lausanne"]] },
    { title: t("Italie"), links: [["Milan", "Demenagement-Nice-Milan"], ["Turin", "Demenagement-Nice-Turin"]] },
    { title: t("Espagne"), links: [["Barcelone", "Demenagement-Nice-Barcelone"], ["Madrid", "Demenagement-Nice-Madrid"]] },
    { title: t("Benelux"), links: [["Bruxelles", "Demenagement-Nice-Bruxelles"], ["Luxembourg", "Demenagement-Nice-Luxembourg"]] }]

  }
};


function Logo() {
  return (
    <a href="/" className="logo" aria-label="LBC Déménagement, accueil">
      <img src="assets/lbc-wordmark-sm.png" alt="LBC Déménagement — déménageur à Nice" decoding="async" width="432" height="240" />
    </a>);

}

function MegaPanel({ data, onClose }) {
  return (
    <div className="mega" onMouseLeave={onClose}>
      <div className="mega-inner">
        <div className="mega-feature">
          <div className="mega-eyebrow"><span className="asterisk">*</span> {data.eyebrow}</div>
          <div className="mega-title">{data.title}</div>
          <p className="mega-blurb">{data.blurb}</p>
          <a href={data.cta.href} className="mega-cta">{data.cta.label}<span className="arrow">→</span></a>
        </div>
        <div className="mega-cols">
          {data.columns.map((col, i) =>
          <div className="mega-col" key={i}>
              <div className="mega-col-title">{col.title}</div>
              <ul>
                {col.links.map((l, j) =>
              <li key={j}><a href={l[1]}>{l[0]}<span className="mega-chev">›</span></a></li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>);

}

function Nav() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
  const [drop, setDrop] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const closeTimer = React.useRef(null);

  const openMega = (key) => {clearTimeout(closeTimer.current);setMega(key);setDrop(null);};
  const openDrop = (key) => {clearTimeout(closeTimer.current);setDrop(key);setMega(null);};
  const scheduleClose = () => {clearTimeout(closeTimer.current);closeTimer.current = setTimeout(() => {setMega(null);setDrop(null);}, 160);};

  useEffect(() => {
    const m = document.querySelector("main");
    if (m && !m.id) { m.id = "contenu"; m.setAttribute("tabindex", "-1"); }
  }, []);

  return (
    <React.Fragment>
    <a href="#contenu" className="skip-link">{t('Aller au contenu')}</a>
    <header className="nav" style={{ borderRadius: "0px", padding: "0px", borderWidth: "0px 0px 3px", margin: "10px" }} onMouseLeave={scheduleClose}>
      <div className="wrap nav-inner" style={{ borderRadius: "0px" }}>
        <Logo />
        <nav className="nav-links" aria-label={t('Navigation principale')}>
          {NAV.map((n) =>
          n.mega ?
          <button
            key={n.key}
            className={"nav-megabtn" + (mega === n.mega ? " is-open" : "")}
            aria-expanded={mega === n.mega}
            onMouseEnter={() => openMega(n.mega)}
            onFocus={() => openMega(n.mega)}
            onClick={() => setMega((m) => m === n.mega ? null : n.mega)}>

              {n.label}<span className="nav-caret" aria-hidden="true">▾</span>
            </button> :
          n.dropdown ?
          <div key={n.key} className="nav-dropwrap" onMouseEnter={() => openDrop(n.key)}>
              <button
              className={"nav-megabtn" + (drop === n.key ? " is-open" : "")}
              aria-expanded={drop === n.key}
              onClick={() => setDrop((d) => d === n.key ? null : n.key)}>

                {n.label}<span className="nav-caret" aria-hidden="true">▾</span>
              </button>
              {drop === n.key &&
            <div className="nav-drop" onMouseEnter={() => openDrop(n.key)}>
                  {n.dropdown.map((l, j) => <a key={j} href={l.href}>{l.label}<span className="mega-chev">›</span></a>)}
                </div>
            }
            </div> :

          <a key={n.key} href={n.href} className={n.key === CURRENT ? 'is-active' : ''} onMouseEnter={scheduleClose}>{n.label}</a>
          )}
        </nav>
        <div className="nav-actions">
          {/* La bascule FR / EN a été retirée le 3 août 2026.
              Elle envoyait vers /en/, qui ne contenait qu'UNE page alors que le site français
              en compte 60 : le visiteur anglophone arrivait sur une impasse. Les balises
              hreflang qui annonçaient une version anglaise complète ont été retirées aussi.
              À remettre le jour où la traduction sera réellement faite, avec les hreflang. */}
          <a href="tel:+33615976577" className="btn btn-ghost nav-call">
            <svg className="nav-call-ic" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z"/></svg>
            <span className="lbl-full">06 15 97 65 77</span>
            <span className="lbl-short">{t('Appeler')}</span>
          </a>
          <a href="Devis" className="btn btn-primary nav-devis">
            <span className="lbl-full">{t('Devis gratuit')}</span>
            <span className="lbl-short">{t('Devis gratuit')}</span>
            <span className="arrow">→</span>
          </a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {mega &&
      <div onMouseEnter={() => openMega(mega)}>
          <MegaPanel data={MEGA[mega]} onClose={scheduleClose} />
        </div>
      }

      <div className={"mobile-menu" + (open ? " open" : "")}>
        {NAV.map((n) =>
        n.mega ?
        <div key={n.key} className="mobile-group">
              <button className="mobile-grouphead" onClick={() => setMobileSub((s) => s === n.mega ? null : n.mega)}>
                {n.label}<span className="nav-caret">{mobileSub === n.mega ? "−" : "+"}</span>
              </button>
              {mobileSub === n.mega &&
          <div className="mobile-sub">
                  {MEGA[n.mega].columns.map((col, i) =>
            <React.Fragment key={i}>
                      <div className="mobile-sub-title">{col.title}</div>
                      {col.links.map((l, j) => <a key={j} href={l[1]}>{l[0]}</a>)}
                    </React.Fragment>
            )}
                </div>
          }
            </div> :
        n.dropdown ?
        <div key={n.key} className="mobile-group">
              <button className="mobile-grouphead" onClick={() => setMobileSub((s) => s === n.key ? null : n.key)}>
                {n.label}<span className="nav-caret">{mobileSub === n.key ? "−" : "+"}</span>
              </button>
              {mobileSub === n.key &&
          <div className="mobile-sub">
                  {n.dropdown.map((l, j) => <a key={j} href={l.href}>{l.label}</a>)}
                </div>
          }
            </div> :

        <a key={n.key} href={n.href}>{n.label}</a>
        )}
        <a href="Devis" style={{ color: 'var(--accent)' }}>Devis gratuit →</a>
      </div>
    </header>
    </React.Fragment>);

}

function MarqueeBar() {
  const items = ["Nice", "Cannes", "Antibes", "Monaco", "Saint-Tropez", "Marseille", "Aix-en-Provence", "Toulon", "Menton", "Toute la France", "Devis sous 24h", "Assurance incluse"];
  const Row = () =>
  <>
      {items.map((c, i) =>
    <React.Fragment key={i}>
          <span>{c}</span>
          <span className="sep" aria-hidden="true"></span>
        </React.Fragment>
    )}
    </>;

  return (
    <div className="marquee-bar" aria-label="Zones d'intervention" style={{ margin: "clamp(44px, 6vw, 60px) 0px 0px" }}>
      <div className="marquee-track">
        <Row /><Row />
      </div>
    </div>);

}

function RoadDivider() {
  return (
    <div className="road-divider" aria-hidden="true">
      <div className="road-line"></div>
      <div className="road-truck">
        <img className="road-logo" src="assets/lbc-wordmark-sm.png" alt="LBC Déménagement" />
        <svg viewBox="0 0 380 150" width="300" fill="none" stroke="var(--ink)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          <g className="road-speed" stroke="var(--accent)" strokeWidth="3.5">
            <path d="M52 56 H12" />
            <path d="M46 74 H6" />
            <path d="M52 92 H22" />
          </g>

          {/* Caisse de chargement (crème) */}
          <rect x="14" y="18" width="200" height="88" rx="6" fill="var(--paper)" />

          {/* Cabine (rouge) */}
          <path d="M214 106 V70 Q214 64 220 64 H268 L298 92 H304 Q310 92 310 98 V106 Z" fill="var(--accent)" />
          {/* Pare-brise / vitre cabine */}
          <path d="M242 72 H266 L288 92 H242 Z" fill="#cdd9df" />

          {/* Roues */}
          <circle cx="80" cy="113" r="18" fill="#fff" />
          <circle cx="80" cy="113" r="6" fill="var(--accent)" stroke="none" />
          <circle cx="276" cy="113" r="18" fill="#fff" />
          <circle cx="276" cy="113" r="6" fill="var(--accent)" stroke="none" />
        </svg>
      </div>
    </div>);

}

function MascotStamp() {
  return (
    <div className="wrap">
      <div className="mascot-stamp">
        <div className="mascot-stamp-aside left">
          <span className="mascot-stamp-kicker">Déménageurs niçois</span>
          <span className="mascot-stamp-line">Le nom est la blague.</span>
        </div>
        <div className="mascot-stamp-circle">
          <img src="assets/lbc-mascot-sm.png" alt="Mascotte LBC Déménagement" loading="lazy" decoding="async" width="560" height="560" />
        </div>
        <div className="mascot-stamp-aside right">
          <span className="mascot-stamp-kicker">Nice · PACA · France</span>
          <span className="mascot-stamp-line">Le travail est sérieux.</span>
        </div>
      </div>
    </div>);

}

// Email destination for lead notifications (FormSubmit.co — free, no account)

// Cockpit LBC (Supabase) — la barre rapide dépose AUSSI le lead dans le cockpit (pas seulement l'email),
// pour qu'un prospect qui ne termine pas la page Devis apparaisse quand même. Insert restreint à la table leads.
/* ⚠️ TABLE RETIRÉE LE 15 AOÛT 2026, NE PAS LA RÉTABLIR. Voir devis-page.jsx : la barre
   rapide ne déclare plus de volume, seulement un type de logement. */
const qqVilleFrom = (addr) => { if (!addr) return ""; const parts = String(addr).split(",").map((s) => s.trim()).filter(Boolean); return parts.length ? parts[parts.length - 1] : addr; };
// Dépose le lead de la barre rapide dans le cockpit. leadId partagé avec la page Devis (voir redirection)
// pour que, si le prospect termine ensuite le devis complet, le cockpit mette à jour CE lead (pas de doublon).
function qqSendToCockpit(fields, leadId) {
  const np = (fields.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const payload = {
    source: (at && at.canal) || "site_web",
    attribution: at || null,
    leadId: leadId || null,
    statut: "Lead démarré (barre rapide)",
    // L'email est désormais capté dès la barre rapide : c'est ce qui permet de relancer un
    // prospect qui abandonne avant l'étape 2, ce qui était impossible auparavant.
    client: { prenom, nom, tel: fields.tel || "", email: fields.email || "", contactPref: "" },
    formule: "standard",
    formulaireType: "partiel",
    /* ⚠️ AUCUN VOLUME À L'ÉTAPE 1, C'EST VOULU.
       Cette étape ne demande pas ce qu'il y a à déménager : elle demande un type de
       logement. En traduire un volume revenait à inventer un chiffre, et ce chiffre
       n'était pas le même que celui de l'estimateur — « T4 » valait 60 m³ ici et 20 à
       l'étape 3, pour le même appartement, à quatre minutes d'intervalle. Le cockpit
       fabriquait alors des camions sur cette valeur inventée, et ne les recalculait pas
       quand le vrai volume arrivait.
       Le type de logement est transmis tel quel : c'est une information vraie, elle suffit
       pour rappeler le prospect, et elle ne fait rien calculer de faux. */
    volumeEstime: null,
    logementDeclare: fields.surface || fields.type || "",
    dateSouhaitee: fields.date || "",
    depart: { adresse: fields.depart || "", ville: qqVilleFrom(fields.depart) },
    arrivee: { adresse: fields.arrivee || "", ville: qqVilleFrom(fields.arrivee) },
    message: "Lead capté via la barre rapide : étape 1 remplie" +
             (fields.type ? ", logement « " + fields.type + " »" : "") +
             ". Le prospect a été renvoyé à l'étape 2 du devis." };

  // Via NOTRE domaine (/api/lead) et non supabase.co directement : requête même-origine, non bloquée
  // par les bloqueurs de pub / navigateurs privés (fiabilise la capture du lead barre rapide).
  try {
    return fetch("/api/lead", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload })
    }).catch(() => {});
  } catch (e) { return Promise.resolve(); }
}

// Address autocomplete powered by the French Base Adresse Nationale
// (api-adresse.data.gouv.fr — free, no API key, CORS-enabled).
/* `pres` = la commune déjà choisie par le prospect. On la colle à la recherche sans
   l'afficher dans le champ. Sans ce contexte, taper « 12 rue des Lauriers » propose la
   rue de Clermont-Ferrand, et « 3 rue de la Gare » celle de Saint-Denis de La Réunion :
   c'est ainsi qu'un Nîmes → Nîmes s'est retrouvé à 45 km. */
function AddressField({ name, label, placeholder, defaultValue = "", className = "qq-field", inputClassName, hint, required, onValue, error, type, pres }) {
  const [val, setVal] = useState(defaultValue);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(-1);
  const timer = useRef(null);
  const blurTimer = useRef(null);

  const query = (q) => {
    if (q.trim().length < 3) {setItems([]);setOpen(false);return;}
    // type=municipality : le champ « ville » ne doit proposer que des communes, sinon
    // le prospect choisit une rue et on se retrouve avec une adresse dans la case ville.
    // La commune connue est ajoutée à la requête, jamais au texte saisi.
    const cherche = pres && String(pres).trim() ? q + " " + String(pres).trim() : q;
    fetch("https://api-adresse.data.gouv.fr/search/?limit=5&q=" + encodeURIComponent(cherche) + (type ? "&type=" + type : "")).
    then((r) => r.json()).
    then((d) => {
      const feats = d.features || [];
      // On mémorise les coordonnées de chaque adresse proposée : l'estimation de prix en fin de
      // formulaire s'en sert pour calculer la distance sans refaire d'appel réseau.
      window.LBC_GEO = window.LBC_GEO || {};
      feats.forEach((f) => {
        const lbl = f.properties && f.properties.label;
        const c = f.geometry && f.geometry.coordinates;
        if (lbl && c) window.LBC_GEO[lbl.trim().toLowerCase()] = { lon: c[0], lat: c[1] };
      });
      /* Pour une commune, le nom seul ne suffit pas : « Saint-Cyr » désigne quatre villes
         différentes, de l'Ardèche à la Haute-Vienne, et « Saint-Cyr-sur-Mer » est encore
         une cinquième. On colle donc le code postal à la suggestion. Effet secondaire
         voulu : la valeur enregistrée devient « Nice 06000 », que le cockpit sait
         découper en ville + code postal sans rien deviner. */
      const labels = feats.map((f) =>
        type === "municipality" && f.properties.postcode
          ? f.properties.label + " " + f.properties.postcode
          : f.properties.label);
      setItems(labels);setOpen(labels.length > 0);setHi(-1);
    }).
    catch(() => {});
  };

  const onChange = (e) => {
    const v = e.target.value;
    setVal(v);
    if (onValue) onValue(v);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => query(v), 250);
  };

  const pick = (label) => {setVal(label);if (onValue) onValue(label);setItems([]);setOpen(false);};

  const onKeyDown = (e) => {
    if (!open || items.length === 0) return;
    if (e.key === "ArrowDown") {e.preventDefault();setHi((i) => Math.min(items.length - 1, i + 1));} else
    if (e.key === "ArrowUp") {e.preventDefault();setHi((i) => Math.max(0, i - 1));} else
    if (e.key === "Enter" && hi >= 0) {e.preventDefault();pick(items[hi]);} else
    if (e.key === "Escape") {setOpen(false);}
  };

  return (
    <div className={className + " has-autocomplete"}>
      <label>{label}</label>
      <div className="addr-input-wrap">
        <input
          type="text" name={name} value={val} placeholder={placeholder}
          autoComplete="off" className={(inputClassName || "") + (error ? " field-error" : "")} required={required}
          onChange={onChange} onKeyDown={onKeyDown}
          onFocus={() => {if (items.length) setOpen(true);}}
          onBlur={() => {blurTimer.current = setTimeout(() => setOpen(false), 150);}} />
        {open &&
        <ul className="addr-suggest">
            {items.map((label, i) =>
          <li
            key={i}
            className={"addr-option" + (i === hi ? " is-hi" : "")}
            onMouseEnter={() => setHi(i)}
            onMouseDown={(e) => {e.preventDefault();clearTimeout(blurTimer.current);pick(label);}}>
                {label}
              </li>
          )}
          </ul>
        }
      </div>
      {hint && <span className="hint">{hint}</span>}
    </div>);

}

// Barre rapide — reprend EXACTEMENT les champs de l'étape 1 du devis.
//
// POURQUOI CET ALIGNEMENT
// -----------------------
// Avant, la barre demandait départ, arrivée et date, c'est-à-dire des informations de
// l'étape 2, puis renvoyait le visiteur à l'étape 1 du devis où on lui redemandait son nom,
// son téléphone et son email. Double saisie, et beaucoup d'abandons à cet endroit.
//
// Désormais : les cinq champs de l'étape 1 (nom, téléphone, email, type de logement,
// surface). À la validation, Edouard reçoit son e-mail comme d'habitude, le lead est déposé
// dans le cockpit, et le visiteur arrive DIRECTEMENT à l'étape 2 du devis, déjà rempli.
// Il continue là où il s'est arrêté au lieu de recommencer.
//
// variant: "light" | "dark"
function QuickQuote({ variant = "light" }) {
  const go = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    // Anti-spam honeypot. ⚠️ Il ne fait PLUS disparaître la demande : « les robots le
    // remplissent, pas les humains » est faux sur les navigateurs intégrés Facebook et
    // Instagram, où le remplissage automatique renseigne aussi les champs cachés. De vrais
    // prospects étaient renvoyés vers /Devis sans que leur nom ni leur téléphone ne partent
    // nulle part. On enregistre toujours ; le déclenchement du piège est signalé dans la fiche.

    const nom = f.nom.value.trim();
    const tel = f.tel.value.trim();
    const email = f.email.value.trim();
    const type = f.type.value;
    const surface = f.surface.value;

    const TYPE_LABEL = { appart: "Appartement", maison: "Maison", bureau: "Bureaux" };
    const SURF_LABEL = { studio: "Studio (< 30 m²)", t2: "2 pièces (30–50 m²)",
                         t3: "3 pièces (50–80 m²)", t4: "4 pièces + (80 m² +)" };

    // La notification e-mail est envoyée par /api/lead, depuis notre propre serveur.
    // (Le service tiers formsubmit.co a été retiré : il faisait doublon avec cet envoi, il est
    // souvent bloqué par les bloqueurs de publicité, et il transmettait le nom, le téléphone et
    // l'e-mail de nos prospects à un sous-traitant que nous n'avons jamais déclaré.)

    // Meta : le Lead sera compté au devis complet, pour ne pas compter deux fois le prospect.
    if (window.fbq) window.fbq("trackCustom", "DevisDemarre");

    // Identifiant partagé barre rapide ↔ page Devis : le cockpit dédoublonne dessus.
    const leadId = "L" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    qqSendToCockpit({ nom, tel, email, type, surface }, leadId);

    // Redirection vers le devis, pré-rempli, à l'étape 2.
    const p = new URLSearchParams();
    if (nom) p.set("nom", nom);
    if (tel) p.set("tel", tel);
    if (email) p.set("email", email);
    if (type) p.set("type", type);
    if (surface) p.set("surface", surface);
    p.set("lead", leadId);
    p.set("etape", "2");
    window.location.href = "Devis?" + p.toString();
  };

  return (
    <div style={{ opacity: "1" }}>
      <form className={"quick-quote" + (variant === "dark" ? " on-dark" : "")} onSubmit={go}>
        <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <div className="qq-field qq-a-nom">
          <label>Prénom & nom</label>
          <input type="text" name="nom" placeholder="Jean Dupont" autoComplete="name" required />
        </div>
        <div className="qq-field qq-a-tel">
          <label>Téléphone</label>
          <input type="tel" name="tel" inputMode="numeric" autoComplete="tel" placeholder="06 12 34 56 78" required onInput={(e) => { let d = e.target.value.replace(/[^\d+]/g, ''); if (d.startsWith('+33')) d = '0' + d.slice(3); d = d.replace(/\D/g, '').slice(0, 10); e.target.value = d.replace(/(\d{2})(?=\d)/g, '$1 ').trim(); }} />
        </div>
        <div className="qq-field qq-a-email">
          <label>Email</label>
          <input type="email" name="email" placeholder="jean@exemple.fr" autoComplete="email" required />
        </div>
        <div className="qq-field is-select qq-a-type">
          <label>Type de logement</label>
          <select name="type" defaultValue="" required>
            <option value="" disabled>Appartement, maison…</option>
            <option value="appart">Appartement</option>
            <option value="maison">Maison</option>
            <option value="bureau">Bureaux</option>
          </select>
        </div>
        <div className="qq-field is-select qq-a-surf">
          <label>Surface actuelle</label>
          <select name="surface" defaultValue="" required>
            <option value="" disabled>Surface actuelle</option>
            <option value="studio">Studio · &lt; 30 m²</option>
            <option value="t2">2 pièces · 30–50 m²</option>
            <option value="t3">3 pièces · 50–80 m²</option>
            <option value="t4">4 pièces + · 80 m² +</option>
          </select>
        </div>
        <button type="submit" className="qq-submit qq-a-btn">
          <span className="qq-submit-arrow" aria-hidden="true">→</span>
          <span className="qq-submit-label">Étape suivante</span>
        </button>
      </form>
      <div className={"qq-note" + (variant === "dark" ? " on-dark" : "")}>
        <span><span className="chk">✓</span> Gratuit &amp; sans engagement</span>
        <span><span className="chk">✓</span> Réponse sous 24h</span>
        <a href="tel:+33615976577" className="qq-phone">Ou appelez-nous : <strong>06 15 97 65 77</strong></a>
      </div>
    </div>);

}

// ---- SEO footer (cities + conseils) ----
const COTE_AZUR = [
["Déménagement Nice", "Demenagement-Nice"], ["Déménagement Cannes", "Demenagement-Cannes"], ["Déménagement Antibes", "Demenagement-Antibes"], ["Déménagement Monaco", "Demenagement-Monaco"],
["Déménagement Menton", "Demenagement-Menton"], ["Déménagement Grasse", "Demenagement-Grasse"], ["Déménagement Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer"], ["Déménagement Le Cannet", "Demenagement-Le-Cannet"],
["Déménagement Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var"], ["Déménagement Mandelieu", "Demenagement-Mandelieu"]];

const FRANCE = [];

const CONSEILS = [
{ label: "Estimer le volume de votre déménagement", href: "Article-estimer-volume" },
{ label: "Déménagement Nice → Paris : délais & organisation", href: "Article-demenagement-nice-paris-prix-delais" },
{ label: "Réussir son déménagement Nice-Paris", href: "Article-demenagement-nice-paris-reussir" },
{ label: "Déménagement international depuis Nice", href: "Article-demenagement-international-depuis-nice" },
{ label: "Villes aux démarches spéciales", href: "Article-villes-demarches-speciales-demenagement" },
{ label: "Déménagement étudiant à Nice", href: "Article-demenagement-etudiant-nice" },
{ label: "Déménager à Nice : stationnement & autorisations", href: "Article-demenager-nice" },
{ label: "Bien choisir sa société de déménagement", href: "Article-choisir-demenageur" }];


function FooterSEO() {
  return (
    <section className="footer-seo">
      <div className="wrap">
        <div className="footer-seo-grid">
          <div>
            <h3>Déménager partout sur la <span className="ast">*</span>Côte d'Azur</h3>
            <div className="seo-sub first">PACA · Région niçoise</div>
            <div className="seo-cities">
              {COTE_AZUR.map((c, i) => <a key={i} href={c[1]}>{c[0]}</a>)}
            </div>
            {/* Les 6 pages quartier ne recevaient que 1 à 4 liens, tous depuis la page
                Quartiers que Google n'a jamais crawlée : elles étaient donc hors d'atteinte.
                Elles sont listées ici, en clair, comme les villes. */}
            <div className="seo-sub">Quartiers de Nice</div>
            <div className="seo-cities">
              <a href="Demenagement-Vieux-Nice">Déménagement Vieux-Nice</a>
              <a href="Demenagement-Cimiez-Nice">Déménagement Cimiez</a>
              <a href="Demenagement-Carre-d-Or-Nice">Déménagement Carré d'Or</a>
              <a href="Demenagement-Liberation-Nice">Déménagement Libération</a>
              <a href="Demenagement-Port-Nice">Déménagement Port de Nice</a>
              <a href="Demenagement-Riquier-Nice">Déménagement Riquier</a>
              <a href="Quartiers">Tous les quartiers</a>
            </div>
            <div className="seo-sub">Longue distance · France</div>
            <div className="seo-cities">
              <a href="Demenagement-Nice-Paris">Déménagement Nice → Paris</a>
              <a href="Demenagement-Nice-Lyon">Déménagement Nice → Lyon</a>
              <a href="Demenagement-Nice-Marseille">Déménagement Nice → Marseille</a>
              <a href="Demenagement-Nice-Toulouse">Déménagement Nice → Toulouse</a>
              <a href="Demenagement-Nice-Bordeaux">Déménagement Nice → Bordeaux</a>
            </div>
            <div className="seo-sub">Déménagement international</div>
            <div className="seo-cities">
              <a href="Demenagement-Nice-Geneve">Nice → Genève</a>
              <a href="Demenagement-Nice-Lausanne">Nice → Lausanne</a>
              <a href="Demenagement-Nice-Bruxelles">Nice → Bruxelles</a>
              <a href="Demenagement-Nice-Luxembourg">Nice → Luxembourg</a>
              <a href="Demenagement-Nice-Barcelone">Nice → Barcelone</a>
              <a href="Demenagement-Nice-Madrid">Nice → Madrid</a>
              <a href="Demenagement-Nice-Milan">Nice → Milan</a>
              <a href="Demenagement-Nice-Turin">Nice → Turin</a>
            </div>
          </div>
          <div>
            <h3>Nos conseils déménagement</h3>
            <div className="seo-conseils">
              {CONSEILS.map((c, i) => <a key={i} href={c.href}>{c.label}</a>)}
            </div>
            <div className="seo-sub">Besoin d'un chiffrage ?</div>
            <a href="Devis" className="btn btn-primary" style={{ marginTop: 4 }}>
              Obtenir mon devis gratuit<span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function FloatWhatsApp() {
  const phone = "33615976577";
  const msg = encodeURIComponent("Bonjour LBC ! Je souhaite un devis pour mon déménagement.");
  return (
    <a className="wa-float" href={"https://wa.me/" + phone + "?text=" + msg} target="_blank" rel="noopener" aria-label="Devis rapide par WhatsApp">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.358.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.448h.005c6.582 0 11.946-5.358 11.949-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="wa-float-label">Devis WhatsApp</span>
    </a>);

}

// Les notifications d'activité récente ont été RETIRÉES le 2 août 2026.
//
// Elles affichaient « Bernard M. a réservé son déménagement, il y a 3 h » et neuf autres
// personnes qui n'ont jamais existé. Présenter une activité inventée comme réelle est une
// pratique commerciale trompeuse au sens de la DGCCRF. Et le jour où un visiteur s'en aperçoit,
// le coût en réputation dépasse largement ce que ces notifications rapportaient.
//
// Pour les remettre un jour : les alimenter depuis les VRAIS déménagements du cockpit, en
// n'affichant que le prénom, l'initiale et la ville. Les styles .sp-toast restent dans
// styles.css, il n'y aura que le composant à réécrire.

function useLiveliness() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const cleanups = [];

    // 1) Mascotte : animation d'ambiance (CSS) — plus de suivi du curseur.
    //    Les médaillons vivent via les keyframes bobble/sway/idle dans le CSS.

    // 2) Compteurs animés (stats) au scroll
    const counters = Array.from(document.querySelectorAll(".stat-num, .ap-stat-n, .stat-num-inline"));
    if (counters.length && "IntersectionObserver" in window) {
      const animate = (el) => {
        const node = Array.from(el.childNodes).find((n) => n.nodeType === 3 && /\d/.test(n.nodeValue));
        if (!node) return;
        const target = parseInt(node.nodeValue.replace(/\s/g, ""), 10);
        if (isNaN(target)) return;
        const dur = 1100, t0 = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          node.nodeValue = String(Math.round(e * target));
          if (p < 1) requestAnimationFrame(step);else node.nodeValue = String(target);
        };
        requestAnimationFrame(step);
      };
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {animate(en.target);io.unobserve(en.target);}
        });
      }, { threshold: 0.6 });
      counters.forEach((c) => io.observe(c));
      cleanups.push(() => io.disconnect());
    }

    // 3) Tilt 3D léger sur les cartes
    const tiltCards = Array.from(document.querySelectorAll(".q-card, .formule-card"));
    const tiltHandlers = [];
    tiltCards.forEach((card) => {
      card.style.transformStyle = "preserve-3d";
      card.style.transition = "transform .2s ease-out";
      const move = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(800px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg) translateY(-3px)";
      };
      const leave = () => {card.style.transform = "";};
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      tiltHandlers.push([card, move, leave]);
    });
    cleanups.push(() => tiltHandlers.forEach(([c, m, l]) => {c.removeEventListener("mousemove", m);c.removeEventListener("mouseleave", l);}));

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

function Footer() {
  useLiveliness();
  return (
    <React.Fragment>
      <FloatWhatsApp />
      <FooterSEO />
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="assets/lbc-wordmark-sm.png" alt="LBC Déménagement — déménageur à Nice" loading="lazy" decoding="async" width="432" height="240" />
              <p className="footer-tagline">
                Déménageurs professionnels basés à Nice. Particuliers et entreprises, PACA et toute la France.
              </p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Nos services</h4>
                <ul>
                  <li><a href="Formules">Nos formules</a></li>
                  {/* Entreprise et Archivage n'étaient liées depuis AUCUNE page du site :
                      Google ne les avait donc jamais crawlées. Ajoutées ici le 7 août 2026. */}
                  <li><a href="Entreprise">Déménagement d'entreprise</a></li>
                  <li><a href="Archivage">Archivage de documents</a></li>
                  <li><a href="Mutations">Mutation professionnelle</a></li>
                  <li><a href="Militaire">Déménagement militaire</a></li>
                  <li><a href="Diplomatique">Déménagement diplomatique</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Le site</h4>
                <ul>
                  <li><a href="/">Accueil</a></li>
                  <li><a href="Blog">Blog &amp; conseils</a></li>
                  <li><a href="FAQ">Questions fréquentes</a></li>
                  <li><a href="Checklist">Checklist déménagement</a></li>
                  <li><a href="Partenaires">Devenir partenaire</a></li>
                  <li><a href="Devis">Devis gratuit</a></li>
                  <li><a href="/#avis">Avis clients</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:+33615976577">06 15 97 65 77</a></li>
                  <li><a className="footer-email" href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a></li>
                  {/* La colonne s'appelait « Contact » mais ne menait pas à la page Contact :
                      seule Partenaires y renvoyait, et Partenaires n'est pas indexée. */}
                  <li><a href="Contact">Nous écrire</a></li>
                  <li>12 rue d'Italie<br />06000 Nice</li>
                  <li style={{ marginTop: 6, color: 'var(--muted)' }}>Lun–Sam · 8h–19h</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Légal</h4>
                <ul>
                  <li><a href="Mentions-legales">Mentions légales</a></li>
                  <li><a href="Confidentialite">Confidentialité</a></li>
                  <li><a href="CGV">CGV</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 LBC Déménagement — SAS au capital de 3 000€ · 12 rue d'Italie, 06000 Nice</div>
            <div className="footer-made">Les Bras Cassés. Le nom est la blague, le travail est sérieux.</div>
          </div>
        </div>
      </footer>
    </React.Fragment>);

}

// Scroll reveal — robust (immediate promote + observer + safety net)
function useScrollReveal() {
  useEffect(() => {
    let io, safety;
    const promote = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add('is-in');
      });
    };
    const setup = () => {
      promote();
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add('is-in');io.unobserve(e.target);}});
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
        document.querySelectorAll('.reveal:not(.is-in), .reveal-stagger:not(.is-in)').forEach((el) => io.observe(el));
      }
      safety = setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => el.classList.add('is-in'));
      }, 700);
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(setup));
    return () => {cancelAnimationFrame(raf);clearTimeout(safety);if (io) io.disconnect();};
  }, []);
}

Object.assign(window, { Logo, Nav, MarqueeBar, MascotStamp, RoadDivider, QuickQuote, AddressField, FooterSEO, Footer,  useScrollReveal });