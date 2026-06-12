// site.jsx — Shared chrome: Nav, Footer, MarqueeBar, MascotStamp, QuickQuote, reveal hook
const { useState, useEffect, useRef } = React;

// Current page detection from <body data-page="...">
const CURRENT = document.body.getAttribute('data-page') || 'accueil';

const NAV = [
{ key: 'accueil', label: 'Accueil', href: 'Les Bras Cassés.html' },
{ key: 'formules', label: 'Formules', href: 'Formules.html' },
{ key: 'france', label: 'En France', mega: 'france' },
{ key: 'international', label: 'International', mega: 'intl' },
{ key: 'stockage', label: 'Stockage', href: 'Stockage.html' },
{ key: 'mutation', label: 'Mutation professionnelle', dropdown: [
  { label: "Je suis un salarié", href: "Mutations.html" },
  { label: "Je suis un militaire", href: "Militaire.html" },
  { label: "Je suis une entreprise", href: "Entreprise.html" }] },
{ key: 'apropos', label: 'À propos', href: 'Apropos.html' }];

// Mega-menu content for "En France" and "International"
const MEGA = {
  france: {
    eyebrow: "Déménagement en France",
    title: "De la Côte d'Azur\nà tout l'Hexagone.",
    blurb: "Implantés à Nice, on déménage dans toute la région et partout en France — même équipe, même soin, du studio au grand volume.",
    cta: { label: "Devis longue distance", href: "Devis.html" },
    columns: [
    { title: "Côte d'Azur", links: [
      ["Nice", "Demenagement-Nice.html"], ["Cannes", "Demenagement-Cannes.html"], ["Antibes", "Demenagement-Antibes.html"],
      ["Monaco", "Demenagement-Monaco.html"], ["Menton", "Demenagement-Menton.html"], ["Grasse", "Demenagement-Grasse.html"],
      ["Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer.html"], ["Le Cannet", "Demenagement-Le-Cannet.html"],
      ["Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var.html"], ["Mandelieu", "Demenagement-Mandelieu.html"]] },

    { title: "Longue distance", links: [
      ["Nice → Paris", "Demenagement-Nice-Paris.html"], ["Nice → Lyon", "Demenagement-Nice-Lyon.html"],
      ["Nice → Marseille", "Demenagement-Nice-Marseille.html"], ["Nice → Toulouse", "Demenagement-Nice-Toulouse.html"],
      ["Nice → Bordeaux", "Demenagement-Nice-Bordeaux.html"]] },

    { title: "Autres villes", links: [
      ["Déménagement La Rochelle", "Demenagement-La-Rochelle.html"]] }]


  },
  intl: {
    eyebrow: "Déménagement international",
    title: "Au-delà des\nfrontières.",
    blurb: "Suisse, Italie, Espagne, Benelux : on organise le transport, les formalités douanières et le suivi jusqu'à destination.",
    cta: { label: "Devis international", href: "Devis.html" },
    columns: [
    { title: "Suisse", links: [["Genève", "Demenagement-Nice-Geneve.html"], ["Lausanne", "Demenagement-Nice-Lausanne.html"]] },
    { title: "Italie", links: [["Milan", "Demenagement-Nice-Milan.html"], ["Turin", "Demenagement-Nice-Turin.html"]] },
    { title: "Espagne", links: [["Barcelone", "Demenagement-Nice-Barcelone.html"], ["Madrid", "Demenagement-Nice-Madrid.html"]] },
    { title: "Benelux", links: [["Bruxelles", "Demenagement-Nice-Bruxelles.html"], ["Luxembourg", "Demenagement-Nice-Luxembourg.html"]] }]

  }
};


function Logo() {
  return (
    <a href="Les Bras Cassés.html" className="logo" aria-label="LBC — Les Bras Cassés, accueil">
      <img src="assets/lbc-wordmark-sm.png" alt="LBC* — Les Bras Cassés" decoding="async" width="432" height="240" />
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
    <a href="#contenu" className="skip-link">Aller au contenu</a>
    <header className="nav" style={{ borderRadius: "0px", padding: "0px", borderWidth: "0px 0px 3px", margin: "10px" }} onMouseLeave={scheduleClose}>
      <div className="wrap nav-inner" style={{ borderRadius: "0px" }}>
        <Logo />
        <nav className="nav-links" aria-label="Navigation principale">
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
          <a href="tel:+33781961445" className="btn btn-ghost nav-call">
            <svg className="nav-call-ic" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z"/></svg>
            <span className="lbl-full">07 81 96 14 45</span>
            <span className="lbl-short">Appeler</span>
          </a>
          <a href="Devis.html" className="btn btn-primary nav-devis">
            <span className="lbl-full">Devis gratuit</span>
            <span className="lbl-short">Devis gratuit</span>
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
        <a href="Devis.html" style={{ color: 'var(--accent)' }}>Devis gratuit →</a>
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
        <img className="road-logo" src="assets/lbc-wordmark-sm.png" alt="LBC* Déménagement" />
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
          <img src="assets/lbc-mascot-sm.png" alt="Mascotte LBC* Les Bras Cassés" loading="lazy" decoding="async" width="560" height="560" />
        </div>
        <div className="mascot-stamp-aside right">
          <span className="mascot-stamp-kicker">Nice · PACA · France</span>
          <span className="mascot-stamp-line">Le travail est sérieux.</span>
        </div>
      </div>
    </div>);

}

// Email destination for lead notifications (FormSubmit.co — free, no account)
const LEAD_EMAIL = "contact@lbcdemenagement.com";
const LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

// Address autocomplete powered by the French Base Adresse Nationale
// (api-adresse.data.gouv.fr — free, no API key, CORS-enabled).
function AddressField({ name, label, placeholder, defaultValue = "", className = "qq-field", inputClassName, hint, required, onValue, error }) {
  const [val, setVal] = useState(defaultValue);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(-1);
  const timer = useRef(null);
  const blurTimer = useRef(null);

  const query = (q) => {
    if (q.trim().length < 3) {setItems([]);setOpen(false);return;}
    fetch("https://api-adresse.data.gouv.fr/search/?limit=5&q=" + encodeURIComponent(q)).
    then((r) => r.json()).
    then((d) => {
      const labels = (d.features || []).map((f) => f.properties.label);
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

// Quick quote bar — Nextories style. variant: "light" | "dark"
function QuickQuote({ variant = "light" }) {
  const go = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    // Anti-spam honeypot: real users never fill this hidden field.
    if (f._honey && f._honey.value) { window.location.href = "Devis.html"; return; }
    const depart = f.depart.value.trim();
    const arrivee = f.arrivee.value.trim();
    const date = f.date.value.trim();
    const tel = f.tel.value.trim();
    const nom = f.nom.value.trim();
    const surfaceEl = f.surface;
    const surface = surfaceEl.value;
    const surfaceLabel = surfaceEl.selectedIndex > 0 ? surfaceEl.options[surfaceEl.selectedIndex].text : "";

    // Notify the owner immediately (fire-and-forget — keepalive survives the redirect).
    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "🚚 Nouvelle demande de devis (barre rapide) — Les Bras Cassés",
          _template: "table",
          "Étape": "Barre rapide (page d'accueil)",
          "Nom": nom || "—",
          "Téléphone": tel || "—",
          "Adresse de départ": depart || "—",
          "Adresse d'arrivée": arrivee || "—",
          "Date souhaitée": date || "—",
          "Surface": surfaceLabel || "—"
        })
      }).catch(() => {});
    } catch (err) {}

    // Redirect to the full quote page with everything pre-filled.
    const p = new URLSearchParams();
    if (depart) p.set("depart", depart);
    if (arrivee) p.set("arrivee", arrivee);
    if (date) p.set("date", date);
    if (tel) p.set("tel", tel);
    if (nom) p.set("nom", nom);
    if (surface) p.set("surface", surface);
    const qs = p.toString();
    window.location.href = "Devis.html" + (qs ? "?" + qs : "");
  };
  return (
    <div style={{ opacity: "1" }}>
      <form className={"quick-quote" + (variant === "dark" ? " on-dark" : "")} onSubmit={go}>
        <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <AddressField name="depart" label="Départ" placeholder="Adresse de départ" className="qq-field qq-a-dep" />
        <AddressField name="arrivee" label="Arrivée" placeholder="Adresse d'arrivée" className="qq-field qq-a-arr" />
        <div className="qq-field qq-a-date">
          <label>Date</label>
          <input type="text" name="date" placeholder="JJ / MM / AAAA" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => {if (!e.target.value) e.target.type = 'text';}} />
        </div>
        <div className="qq-field is-select qq-a-surf">
          <label>Surface</label>
          <select name="surface" defaultValue="">
            <option value="" disabled>Surface actuelle</option>
            <option value="studio">Studio · &lt; 30 m²</option>
            <option value="t2">2 pièces · 30–50 m²</option>
            <option value="t3">3 pièces · 50–80 m²</option>
            <option value="t4">4 pièces · 80–110 m²</option>
            <option value="t4">Maison · &gt; 110 m²</option>
          </select>
        </div>
        <div className="qq-field qq-a-nom">
          <label>Nom & prénom</label>
          <input type="text" name="nom" placeholder="Jean Dupont" />
        </div>
        <div className="qq-field qq-a-tel">
          <label>Téléphone</label>
          <input type="tel" name="tel" inputMode="numeric" autoComplete="tel" placeholder="06 12 34 56 78" onInput={(e) => { let d = e.target.value.replace(/[^\d+]/g, ''); if (d.startsWith('+33')) d = '0' + d.slice(3); d = d.replace(/\D/g, '').slice(0, 10); e.target.value = d.replace(/(\d{2})(?=\d)/g, '$1 ').trim(); }} />
        </div>
        <button type="submit" className="qq-submit qq-a-btn">
          <span className="qq-submit-arrow" aria-hidden="true">→</span>
          <span className="qq-submit-label">Je déménage&nbsp;!</span>
        </button>
      </form>
      <div className={"qq-note" + (variant === "dark" ? " on-dark" : "")}>
        <span><span className="chk">✓</span> Gratuit &amp; sans engagement</span>
        <span><span className="chk">✓</span> Réponse sous 24h</span>
        <a href="tel:+33781961445" className="qq-phone">Ou appelez-nous : <strong>07 81 96 14 45</strong></a>
      </div>
    </div>);

}

// ---- SEO footer (cities + conseils) ----
const COTE_AZUR = [
["Déménagement Nice", "Demenagement-Nice.html"], ["Déménagement Cannes", "Demenagement-Cannes.html"], ["Déménagement Antibes", "Demenagement-Antibes.html"], ["Déménagement Monaco", "Demenagement-Monaco.html"],
["Déménagement Menton", "Demenagement-Menton.html"], ["Déménagement Grasse", "Demenagement-Grasse.html"], ["Déménagement Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer.html"], ["Déménagement Le Cannet", "Demenagement-Le-Cannet.html"],
["Déménagement Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var.html"], ["Déménagement Mandelieu", "Demenagement-Mandelieu.html"]];

const FRANCE = [];

const CONSEILS = [
{ label: "Combien coûte un déménagement en 2026 ?", href: "Article.html?a=cout-demenagement-2026" },
{ label: "Estimer le volume de votre déménagement", href: "Article.html?a=estimer-volume" },
{ label: "Déménagement Nice → Paris : prix & délais", href: "Article.html?a=demenagement-nice-paris-prix-delais" },
{ label: "Réussir son déménagement Nice-Paris", href: "Article.html?a=demenagement-nice-paris-reussir" },
{ label: "Déménagement international depuis Nice", href: "Article.html?a=demenagement-international-depuis-nice" },
{ label: "Déménager à La Rochelle", href: "Article.html?a=demenagement-la-rochelle-guide" },
{ label: "Villes aux démarches spéciales", href: "Article.html?a=villes-demarches-speciales-demenagement" },
{ label: "Déménagement étudiant à Nice", href: "Article.html?a=demenagement-etudiant-nice" },
{ label: "Déménager à Nice : stationnement & autorisations", href: "Article.html?a=demenager-nice" },
{ label: "Bien choisir sa société de déménagement", href: "Article.html?a=choisir-demenageur" }];


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
              <a href="Quartiers.html">Quartiers d'exception (Vieux-Nice…)</a>
            </div>
            <div className="seo-sub">Longue distance · France</div>
            <div className="seo-cities">
              <a href="Demenagement-Nice-Paris.html">Déménagement Nice → Paris</a>
              <a href="Demenagement-Nice-Lyon.html">Déménagement Nice → Lyon</a>
              <a href="Demenagement-Nice-Marseille.html">Déménagement Nice → Marseille</a>
              <a href="Demenagement-Nice-Toulouse.html">Déménagement Nice → Toulouse</a>
              <a href="Demenagement-Nice-Bordeaux.html">Déménagement Nice → Bordeaux</a>
              <a href="Demenagement-La-Rochelle.html">Déménagement La Rochelle</a>
            </div>
            <div className="seo-sub">Déménagement international</div>
            <div className="seo-cities">
              <a href="Demenagement-Nice-Geneve.html">Nice → Genève</a>
              <a href="Demenagement-Nice-Lausanne.html">Nice → Lausanne</a>
              <a href="Demenagement-Nice-Bruxelles.html">Nice → Bruxelles</a>
              <a href="Demenagement-Nice-Luxembourg.html">Nice → Luxembourg</a>
              <a href="Demenagement-Nice-Barcelone.html">Nice → Barcelone</a>
              <a href="Demenagement-Nice-Madrid.html">Nice → Madrid</a>
              <a href="Demenagement-Nice-Milan.html">Nice → Milan</a>
              <a href="Demenagement-Nice-Turin.html">Nice → Turin</a>
            </div>
          </div>
          <div>
            <h3>Nos conseils déménagement</h3>
            <div className="seo-conseils">
              {CONSEILS.map((c, i) => <a key={i} href={c.href}>{c.label}</a>)}
            </div>
            <div className="seo-sub">Besoin d'un chiffrage ?</div>
            <a href="Devis.html" className="btn btn-primary" style={{ marginTop: 4 }}>
              Obtenir mon devis gratuit<span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function FloatWhatsApp() {
  const phone = "33781961445";
  const msg = encodeURIComponent("Bonjour LBC ! Je souhaite un devis pour mon déménagement.");
  return (
    <a className="wa-float" href={"https://wa.me/" + phone + "?text=" + msg} target="_blank" rel="noopener" aria-label="Devis rapide par WhatsApp">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.358.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.448h.005c6.582 0 11.946-5.358 11.949-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="wa-float-label">Devis WhatsApp</span>
    </a>);

}

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
              <img src="assets/lbc-wordmark-sm.png" alt="LBC* — Les Bras Cassés" loading="lazy" decoding="async" width="432" height="240" />
              <p className="footer-tagline">
                Déménageurs professionnels basés à Nice. Particuliers et entreprises, PACA et toute la France.
              </p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Nos services</h4>
                <ul>
                  <li><a href="Formules.html">Nos formules</a></li>
                  <li><a href="Mutations.html">Mutation professionnelle</a></li>
                  <li><a href="Militaire.html">Déménagement militaire</a></li>
                  <li><a href="Diplomatique.html">Déménagement diplomatique</a></li>
                  <li><a href="Stockage.html">Stockage &amp; garde-meuble</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Le site</h4>
                <ul>
                  <li><a href="Les Bras Cassés.html">Accueil</a></li>
                  <li><a href="Blog.html">Blog &amp; conseils</a></li>
                  <li><a href="FAQ.html">Questions fréquentes</a></li>
                  <li><a href="Checklist.html">Checklist déménagement</a></li>
                  <li><a href="Devis.html">Devis gratuit</a></li>
                  <li><a href="Les Bras Cassés.html#avis">Avis clients</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:+33493000000">+33 4 93 00 00 00</a></li>
                  <li><a className="footer-email" href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a></li>
                  <li>12 rue d'Italie<br />06000 Nice</li>
                  <li style={{ marginTop: 6, color: 'var(--muted)' }}>Lun–Sam · 8h–19h</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Légal</h4>
                <ul>
                  <li><a href="Mentions-legales.html">Mentions légales</a></li>
                  <li><a href="Confidentialite.html">Confidentialité</a></li>
                  <li><a href="CGV.html">CGV</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 LBC* Déménagement — SAS au capital de 3 000€ · 12 rue d'Italie, 06000 Nice</div>
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

Object.assign(window, { Logo, Nav, MarqueeBar, MascotStamp, RoadDivider, QuickQuote, AddressField, FooterSEO, Footer, useScrollReveal });