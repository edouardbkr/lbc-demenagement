// devis-page.jsx — Quote request page with multi-step form
const { useState, useEffect, useRef } = React;

// Lead notification endpoint (FormSubmit.co — kept in sync with site.jsx)
const LEAD_EMAIL = "contact@lbcdemenagement.com";
const LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

// Cockpit LBC : le site ne parle JAMAIS à Supabase directement depuis le navigateur (bloqué par les
// bloqueurs de pub → leads perdus). Tout passe par /api/lead, une fonction sur notre propre domaine.
// Formules site → clés app (libellés identiques côté app : Coup de main / Mains libres / Mains dans les poches)
const FORMULE_TO_APP = { standard: "eco", premium: "standard", luxe: "premium" };
const SURFACE_VOL = { studio: 14, t2: 25, t3: 40, t4: 60 };
// Capacité cabine ascenseur (site) → taille (app)
const ASC_CAP_TO_TAILLE = { "1 pers": "1 personne", "2 pers": "2 personnes", "3 pers": "3-4 personnes", "4 pers": "3-4 personnes", "5+ pers": "6+ personnes" };
// Distance de portage (site, fourchette) → mètres représentatifs (champ numérique app)
const PORTAGE_TO_M = { "Moins de 10 m": 5, "10 – 30 m": 20, "30 – 50 m": 40, "Plus de 50 m": 60 };
const CONTACT_LABEL = { tel: "Téléphone", mail: "Email", sms: "SMS" };
const etageNum = (v) => !v ? 0 : v === "RDC" ? 0 : parseInt(v) || 0;
const villeFrom = (addr) => {
  if (!addr) return "";
  const parts = String(addr).split(",").map((s) => s.trim()).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : addr;
};
const sideOf = (all, s) => ({
  adresse: all[s] || "",
  ville: villeFrom(all[s]),
  etage: etageNum(all[s + "_etage"]),
  ascenseur: all[s + "_asc"] === "Oui",
  ascTaille: all[s + "_asc"] === "Oui" ? ASC_CAP_TO_TAILLE[all[s + "_asc_cap"]] || "" : "Aucun",
  portage: PORTAGE_TO_M[all[s + "_portage"]] != null ? PORTAGE_TO_M[all[s + "_portage"]] : "",
  acces: all[s + "_acces"] || "" });

// Envoie la demande complète dans la table leads du cockpit (en plus de l'email).
// Étage/ascenseur/taille/portage/accès partent en champs structurés ; le reste (fragiles,
// à démonter, flexibilité, contact, détails) part en notes — pas de doublon.
function sendToCockpit(all, opts) {
  opts = opts || {};
  const np = (all.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const inventaire = window.buildInventoryArray ? window.buildInventoryArray(all) : [];
  const mapToList = (m) => Object.entries(m || {}).filter((x) => x[1] > 0).map((x) => ({ label: x[0], qty: x[1] }));
  // Canal d'acquisition mesuré à l'arrivée du visiteur (voir le bloc ATTRIBUTION de site.jsx).
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  // Les notes portent aussi la fourchette annoncée au client et le créneau de rappel choisi :
  // même si le cockpit n'exploite pas encore ces champs, l'info reste visible dans la fiche.
  const notes = [
    all.details ? "Détails client : " + all.details : "",
    opts.estimation ? "⚠️ Fourchette ANNONCÉE au client sur le site : " + opts.estimation.bas + " € – " + opts.estimation.haut + " € (volume retenu " + opts.estimation.volume + " m³, distance ~" + opts.estimation.km + " km). Ne pas chiffrer au-dessus sans l'expliquer." : "",
    opts.estimation && opts.estimation.detail ? "Coûts estimés " + opts.estimation.detail.couts + " € → bénéfice attendu " + (opts.estimation.bas - opts.estimation.detail.couts) + " à " + (opts.estimation.haut - opts.estimation.detail.couts) + " €." : "",
    opts.estimation && opts.estimation.detail && opts.estimation.detail.plancherApplique ?
      "🔎 INVENTAIRE À VÉRIFIER : le client n'a déclaré que " + opts.estimation.detail.volumeDeclare + " m³ de meubles, c'est peu pour son logement. Le volume a été relevé au plancher. À confirmer au téléphone avant de figer le prix." : "",
    opts.rdv ? "📞 Rappel demandé par le client : " + opts.rdv.label : "",
    at ? "🎯 Acquisition : " + at.canal + (at.campagne ? " · campagne « " + at.campagne + " »" : "") +
         (at.canalPremier && at.canalPremier !== at.canal ? " (1er contact via " + at.canalPremier + " le " + at.premierContactLe + ")" : "") +
         (at.referent ? " · venu de " + at.referent : "") : ""
  ].filter(Boolean).join("\n");
  const payload = {
    source: (at && at.canal) || "site_web",
    attribution: at || null,
    leadId: opts.leadId || null,
    statut: opts.partiel ? "Lead démarré (formulaire en cours)" : "Devis complet",
    client: { prenom, nom, tel: all.tel || "", email: all.email || "", contactPref: all.contact || "" },
    codeParrain: (all.codeParrain || "").trim().toUpperCase(),
    formule: FORMULE_TO_APP[all.formule] || "standard",
    formulaireType: opts.partiel ? "partiel" : (inventaire.length ? "detaille" : "basique"),
    // Volume : celui calculé par le moteur d'estimation (inventaire réel, marge incluse) s'il
    // existe, sinon le volume théorique de la surface déclarée.
    volumeEstime: opts.estimation ? opts.estimation.volume : (SURFACE_VOL[all.surface] != null ? SURFACE_VOL[all.surface] : null),
    // Fourchette annoncée au client + créneau de rappel choisi (repris dans la fiche du cockpit)
    estimationBasse: opts.estimation ? opts.estimation.bas : null,
    estimationHaute: opts.estimation ? opts.estimation.haut : null,
    km: opts.estimation ? opts.estimation.km : null,
    rdvDate: opts.rdv ? opts.rdv.date : "",
    rdvHeure: opts.rdv ? opts.rdv.heure : "",
    cartons: all.cartons || 0,
    dateSouhaitee: all.date || "",
    flexibilite: all.flex || "",
    contactPref: CONTACT_LABEL[all.contact] || all.contact || "",
    fragiles: mapToList(all.fragile),
    demonter: mapToList(all.demontage),
    inventaire,
    options: {
      demontage: !!(all.demontage && Object.keys(all.demontage).length),
      emballage: all.formule === "premium" || all.formule === "luxe",
      gardeMeuble: false },

    depart: sideOf(all, "depart"),
    arrivee: sideOf(all, "arrivee"),
    message: notes };

  // Envoi REST direct AVEC keepalive : la requête SURVIT même si le visiteur quitte la page juste
  // après l'étape 1 (avant, l'insert sans keepalive était annulé au départ → lead perdu côté cockpit,
  // alors que l'email, lui, avait keepalive et arrivait quand même).
  // Enregistrement via NOTRE domaine (/api/lead), pas directement vers supabase.co : une requête
  // même-origine n'est pas bloquée par les bloqueurs de pub / navigateurs privés (cas de leads perdus).
  // Renvoie la promesse fetch : submit() peut ATTENDRE la confirmation avant d'afficher l'écran WhatsApp.
  // Résout à true (enregistré), false (refus explicite du serveur) ou null (indéterminé : réseau coupé,
  // page quittée…). On ne traite QUE le false comme un échec : un indéterminé part souvent quand même
  // grâce à keepalive, inutile d'alarmer le visiteur pour rien.
  try {
    return fetch("/api/lead", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload })
    }).then((r) => r.ok).catch(() => null);
  } catch (e) { return Promise.resolve(null); }
}

function DevisHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <span>DEVIS GRATUIT · PRIX IMMÉDIAT</span>
        </div>
        <h1>Votre devis déménagement, <em>gratuit et sans engagement.</em></h1>
        <p className="lede">
          Deux minutes, cinq infos, et <strong>votre fourchette de prix s'affiche tout de suite</strong>. Vous choisissez ensuite quand on vous appelle pour la confirmer au centime près. <span className="ast">*</span>Pas de numéro surtaxé, pas de spam.
        </p>
        <p style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 999, background: 'rgba(215,91,61,0.10)', color: 'var(--accent, #D75B3D)', fontWeight: 700, fontSize: 14 }}>
          <span aria-hidden="true">💳</span> Déménagement payable en 3× sans frais (Klarna)
        </p>
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: '10px 18px', fontSize: 14, color: 'rgba(242,232,207,0.85)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)', fontWeight: 700 }}>★&nbsp;4,9/5</span> Google &amp; Trustpilot</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span> Assurance incluse</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span> Prix ferme, zéro surprise</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span> Prix affiché immédiatement</span>
        </div>
        <a href="#devis-form-top" className="btn btn-primary devis-hero-cta" style={{ marginTop: 26 }}>Commencer mon devis <span className="arrow">→</span></a>
      </div>
    </section>);

}

const STEPS = ["Coordonnées & logement", "Adresses & date", "Votre inventaire"];

function Stepper({ step }) {
  return (
    <div className="devis-steps">
      {STEPS.map((s, i) =>
      <div key={i} className={"devis-step" + (i === step ? " active" : "")}>
          <span className="n">{i + 1}</span>{s}
        </div>
      )}
    </div>);

}

function Choice({ name, value, label, sub, selected, onSelect }) {
  return (
    <label className={"choice" + (selected ? " sel" : "")}>
      <input type="radio" name={name} value={value} checked={selected} onChange={() => onSelect(value)} />
      <span>{label}</span>
      {sub && <span className="c-sub">{sub}</span>}
    </label>);

}

// Formule cards with their key inclusions — so the prospect can compare on this page.
function FormuleOption({ value, name, level, tag, badge, inherit, items, selected, onSelect }) {
  return (
    <label className={"formule-card" + (selected ? " sel" : "") + (badge ? " has-flag" : "")}>
      <input type="radio" name="form" value={value} checked={selected} onChange={() => onSelect(value)} />
      {badge && <span className="fc-flag">{badge}</span>}
      <div className="fc-top">
        <div className="fc-titles">
          {level && <span className="fc-level">{level}</span>}
          <span className="fc-name">{name}</span>
        </div>
        <span className="fc-radio" aria-hidden="true"></span>
      </div>
      <span className="fc-tag">{tag}</span>
      <ul className="fc-items">
        {inherit && <li className="fc-inherit">Tout le {inherit}, plus :</li>}
        {items.map((it, i) =>
        <li key={i}><span className="fc-chk">✓</span>{it}</li>
        )}
      </ul>
    </label>);

}

// Read values pre-filled from the quick-quote bar (?depart=…&arrivee=…&date=…&surface=…)
function getPrefill() {
  const p = new URLSearchParams(window.location.search);
  return {
    depart: p.get("depart") || "",
    arrivee: p.get("arrivee") || "",
    date: p.get("date") || "",
    surface: p.get("surface") || "",
    tel: p.get("tel") || "",
    nom: p.get("nom") || "",
    lead: p.get("lead") || ""
  };
}
const SURFACE_LABEL = { studio: "Studio (< 30 m²)", t2: "2 pièces (30–50 m²)", t3: "3 pièces (50–80 m²)", t4: "4 pièces + (80 m² +)" };
const FORMULE_LABEL = { standard: "Coup de main", premium: "Mains libres", luxe: "Mains dans les poches" };

// Detailed access block per address (étage, ascenseur, portage, accès camion)
const ETAGE_OPTS = ["RDC", "1", "2", "3", "4", "5", "6", "7+"];
const ASC_OPTS = [{ v: "Non", l: "Non" }, { v: "Oui", l: "Oui" }];
const ASC_CAP_OPTS = ["1 pers", "2 pers", "3 pers", "4 pers", "5+ pers"];
const PORT_OPTS = [{ v: "Moins de 10 m", l: "< 10 m" }, { v: "10 – 30 m", l: "10–30 m" }, { v: "30 – 50 m", l: "30–50 m" }, { v: "Plus de 50 m", l: "> 50 m" }];

function SegSelect({ value, options, onSelect, numeric, error }) {
  return (
    <div className={"seg" + (numeric ? " seg-num" : "") + (error ? " seg-error" : "")}>
      {options.map((o) => {
        const v = o.v || o;const l = o.l || o;
        return <button type="button" key={v} className={"seg-opt" + (value === v ? " on" : "")} onClick={() => onSelect(v)}>{l}</button>;
      })}
    </div>);

}

function AccessBlock({ side, label, addrLabel, data, set, showErrors }) {
  const f = (k) => side + "_" + k;
  const v = (k) => data[f(k)] || "";
  const miss = (k) => showErrors && !v(k);
  const ascMiss = showErrors && (!v("asc") || v("asc") === "Oui" && !v("asc_cap"));
  return (
    <div className="access-block">
      <div className="access-head"><span className="access-dot"></span>{label}</div>
      <AddressField className="lf" name={side} label={addrLabel} placeholder="N°, rue, ville…" defaultValue={data[side]} onValue={(val) => set(side, val)} error={showErrors && !(data[side] || "").trim()} />
      <div className="access-field">
        <label>Étage {miss("etage") && <span className="req-hint">— à choisir</span>}</label>
        <SegSelect numeric error={miss("etage")} value={v("etage")} options={ETAGE_OPTS} onSelect={(x) => set(f("etage"), x)} />
      </div>
      <div className="access-field">
        <label>Ascenseur {ascMiss && <span className="req-hint">— à choisir</span>}</label>
        <SegSelect error={ascMiss && !v("asc")} value={v("asc")} options={ASC_OPTS} onSelect={(x) => {set(f("asc"), x);if (x === "Non") set(f("asc_cap"), "");}} />
        {v("asc") === "Oui" &&
        <div className="access-sub">
            <span className="access-sublabel">Capacité de la cabine</span>
            <SegSelect numeric error={showErrors && !v("asc_cap")} value={v("asc_cap")} options={ASC_CAP_OPTS} onSelect={(x) => set(f("asc_cap"), x)} />
          </div>
        }
      </div>
      <div className="access-field">
        <label>Distance de portage <span className="access-hint">— camion → porte</span> {miss("portage") && <span className="req-hint">— à choisir</span>}</label>
        <SegSelect error={miss("portage")} value={v("portage")} options={PORT_OPTS} onSelect={(x) => set(f("portage"), x)} />
      </div>
      <div className="access-field">
        <label>Accès camion {miss("acces") && <span className="req-hint">— à choisir</span>}</label>
        <select className={"access-sel" + (miss("acces") ? " field-error" : "")} name={f("acces")} defaultValue={v("acces")} onChange={(e) => set(f("acces"), e.target.value)}>
          <option value="" disabled>Choisir…</option>
          <option>Le camion se gare devant</option>
          <option>Rue étroite ou éloignée</option>
          <option>Zone piétonne</option>
          <option>Stationnement difficile</option>
          <option>Monte-meuble nécessaire</option>
          <option>Je ne sais pas</option>
        </select>
      </div>
    </div>);

}

function DevisForm() {
  const PRE = getPrefill();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    surface: PRE.surface || "",
    formule: "premium",
    depart: PRE.depart,
    arrivee: PRE.arrivee,
    date: PRE.date,
    tel: PRE.tel,
    nom: PRE.nom
  });
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const [tried0, setTried0] = useState(false);
  const [tried1, setTried1] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  // true = le serveur a explicitement refusé d'enregistrer le lead. On affiche alors un écran de repli
  // honnête (WhatsApp + téléphone) au lieu d'un « c'est bien reçu ! » mensonger.
  const [failed, setFailed] = useState(false);
  // Fourchette de prix calculée et affichée au prospect sur l'écran de fin
  const [estim, setEstim] = useState(null);
  // Créneau de rappel choisi par le prospect ({ date, heure, label }), et envoi en cours
  const [rdv, setRdv] = useState(null);
  const [rdvSending, setRdvSending] = useState(false);

  // Progressive French mobile formatting: "06 12 34 56 78" as you type.
  const formatPhoneFR = (raw) => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);
    else if (d.startsWith("0033")) d = "0" + d.slice(4);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  // Bring the form into view without jumping to the very top of the page (no friction).
  const scrollToForm = () => {
    const el = document.getElementById("devis-form-top");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y < 0 ? 0 : y, behavior: "smooth" });
  };
  // When arriving pre-filled from the home bar, land directly on the form.
  useEffect(() => {
    if (PRE.depart && PRE.arrivee) {
      const t = setTimeout(scrollToForm, 120);
      return () => clearTimeout(t);
    }
  }, []);

  const next = (e) => {if (e) e.preventDefault();setStep((s) => Math.min(2, s + 1));scrollToForm();};
  // Capture all named fields of the current form into state, then advance.
  const captureNext = (e) => {
    e.preventDefault();
    if (!step1Complete) {setTried1(true);return;}
    const upd = {};
    for (const el of e.currentTarget.elements) {if (el.name) upd[el.name] = el.value;}
    setData((d) => ({ ...d, ...upd }));
    setStep((s) => Math.min(2, s + 1));
    scrollToForm();
  };
  const back = () => {setStep((s) => Math.max(0, s - 1));scrollToForm();};

  // Step 2 (Adresses & date) can only advance once every field is filled.
  const sideComplete = (s) => {
    if (!(data[s] || "").trim()) return false;
    if (!data[s + "_etage"]) return false;
    if (!data[s + "_asc"]) return false;
    if (data[s + "_asc"] === "Oui" && !data[s + "_asc_cap"]) return false;
    if (!data[s + "_portage"]) return false;
    if (!data[s + "_acces"]) return false;
    return true;
  };
  const step1Complete = sideComplete("depart") && sideComplete("arrivee") && !!data.date && !!data.flex;
  // Step 0 (coordonnées + logement) — name + phone + email are the priority capture.
  const step0Complete = !!(data.nom || "").trim() && !!(data.tel || "").trim() && !!(data.email || "").trim() && !!data.type && !!data.surface;

  // Lien WhatsApp pré-rempli affiché sur l'écran de fin. Le prospect nous écrit en
  // premier, au pic d'intention : c'est LUI qui initie la conversation, ce qui évite
  // les relances à froid et crée de la proximité. Message pré-rédigé avec son nom,
  // son trajet et sa date pour qu'on l'identifie immédiatement.
  const waLead = () => {
    const who = (data.nom || "").trim();
    const dep = (data.depart || "").trim();
    const arr = (data.arrivee || "").trim();
    const dt = (data.date || "").trim();
    const trajet = dep && arr ? "Déménagement de " + dep + " vers " + arr : (dep ? "Déménagement depuis " + dep : "Déménagement");
    const quand = dt ? ", prévu le " + dt : "";
    const l2 = (who ? who + " — " : "") + trajet + quand + ".";
    const fin = rdv ? "Vous devez m'appeler " + rdv.label + ", mais je préfère qu'on échange ici. Merci !" : "J'aimerais recevoir mon devis. Merci !";
    const msg = "Bonjour, je viens de faire ma demande de devis sur votre site 🙂\n" + l2 + "\n" + fin;
    return "https://wa.me/33615976577?text=" + encodeURIComponent(msg);
  };

  // Fire a lead notification as soon as step 0 is validated — so an abandoned
  // quote still leaves us the prospect's name, phone & email to follow up.
  const earlySent = useRef(false);
  // Identifiant unique du lead, partagé entre l'enregistrement « étape 1 » et le
  // « devis complet » pour que le cockpit puisse relier les deux (même prospect).
  // S'il vient de la barre rapide (param ?lead=…), on le RÉUTILISE : le cockpit met alors
  // à jour le lead déjà déposé par la barre au lieu d'en créer un doublon.
  const leadIdRef = useRef(PRE.lead || null);
  const getLeadId = () => {
    if (!leadIdRef.current) leadIdRef.current = "L" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    return leadIdRef.current;
  };
  const sendEarly = (all) => {
    if (earlySent.current) return;
    if (all && all._honey) return;
    earlySent.current = true;
    // Conversion Meta : lead qualifié dès l'étape 1 (nom + tél + email capturés).
    if (window.fbq) window.fbq("track", "Lead");
    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "🔔 Nouveau contact devis (étape 1) — Les Bras Cassés",
          _template: "table",
          "Statut": "Lead démarré — à relancer si le devis n'est pas finalisé",
          "Nom": all.nom || "—",
          "Téléphone": all.tel || "—",
          "Email": all.email || "—",
          "Contact préféré": all.contact || "—",
          "Type de logement": all.type || "—",
          "Surface": SURFACE_LABEL[all.surface] || all.surface || "—",
          "Formule souhaitée": FORMULE_LABEL[all.formule] || all.formule || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    // Enregistrement dans le cockpit DÈS l'étape 1 : le lead (nom, tél, email) est
    // garanti côté base, même si le prospect abandonne l'inventaire ensuite.
    sendToCockpit(all, { partiel: true, leadId: getLeadId() });
  };

  const goStep0 = (e) => {
    e.preventDefault();
    if (!step0Complete) {setTried0(true);return;}
    const upd = {};
    for (const el of e.currentTarget.elements) {if (el.name) upd[el.name] = el.value;}
    const all = { ...data, ...upd };
    setData(all);
    sendEarly(all);
    setStep(1);
    scrollToForm();
  };

  const submit = async () => {
    const all = { ...data };
    if (all._honey) { setSent(true); return; }
    if (sending) return;
    const accessStr = (s) => [
    all[s],
    all[s + "_etage"] && "Étage " + all[s + "_etage"],
    all[s + "_asc"] && "Ascenseur : " + (all[s + "_asc"] === "Oui" ? "Oui" + (all[s + "_asc_cap"] ? " (" + all[s + "_asc_cap"] + ")" : "") : "Non"),
    all[s + "_portage"] && "Portage : " + all[s + "_portage"],
    all[s + "_acces"] && "Accès : " + all[s + "_acces"]].
    filter(Boolean).join(" · ") || "—";

    // ── Estimation du prix, calculée AVANT tout envoi pour qu'elle parte avec le lead ──
    // La distance vient des coordonnées mémorisées par l'autocomplétion d'adresse (instantané)
    // ou d'un géocodage à la volée. 3 s de garde-fou : sans distance, le moteur retombe sur sa
    // valeur par défaut, l'estimation reste affichable.
    setSending(true);
    let estim = null;
    try {
      if (window.LBC_PRICING) {
        const km = await Promise.race([
          window.LBC_PRICING.distanceKm(all.depart, all.arrivee),
          new Promise((r) => setTimeout(() => r(null), 3000))
        ]);
        estim = window.LBC_PRICING.estimer({
          surface: all.surface,
          inventaire: window.buildInventoryArray ? window.buildInventoryArray(all) : [],
          cartons: all.cartons,
          formule: all.formule,
          km: km,
          depart: sideOf(all, "depart"),
          arrivee: sideOf(all, "arrivee")
        });
      }
    } catch (e) {}
    setEstim(estim);

    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "🚚 Demande de devis complète — Les Bras Cassés",
          _template: "table",
          "Nom": all.nom || "—",
          "Téléphone": all.tel || "—",
          "Email": all.email || "—",
          "Contact préféré": all.contact || "—",
          "Type de logement": all.type || "—",
          "Surface": SURFACE_LABEL[all.surface] || all.surface || "—",
          "Formule souhaitée": FORMULE_LABEL[all.formule] || all.formule || "—",
          "Adresse de départ": accessStr("depart"),
          "Adresse d'arrivée": accessStr("arrivee"),
          "Date souhaitée": all.date || "—",
          "Flexibilité": all.flex || "—",
          "Inventaire meubles": formatInventory(all),
          "Cartons (est.)": all.cartons ? String(all.cartons) : "—",
          "Objets fragiles / précieux": formatTags(all.fragile),
          "À démonter / remonter": formatTags(all.demontage),
          "Détails": all.details || "—",
          "⚠️ Fourchette annoncée au client": estim ? estim.bas + " € – " + estim.haut + " €" : "non affichée",
          "Volume retenu / distance": estim ? estim.volume + " m³ · ~" + estim.km + " km" : "—",
          "🎯 Canal d'acquisition": (function(){ const a=window.LBC_ATTRIB&&window.LBC_ATTRIB(); return a?(a.canal+(a.campagne?" · "+a.campagne:"")):"inconnu"; })(),
          "Volume déclaré par le client": estim && estim.detail ? estim.detail.volumeDeclare + " m³" + (estim.detail.plancherApplique ? " 🔎 très peu pour ce logement, inventaire à vérifier au téléphone" : "") : "—",
          "Coûts estimés / bénéfice attendu": estim && estim.detail ? estim.detail.couts + " € → " + (estim.bas - estim.detail.couts) + " à " + (estim.haut - estim.detail.couts) + " €" : "—"
        })
      }).catch(() => {});
    } catch (err) {}
    // Conversion Meta : devis complet finalisé (événement d'insight, en plus du Lead).
    if (window.fbq) window.fbq("trackCustom", "DevisComplet");
    // On ATTEND la confirmation d'enregistrement du lead (max 6s de sécurité) AVANT d'afficher
    // l'écran WhatsApp : sinon, sur mobile, l'ouverture immédiate de WhatsApp met le navigateur
    // en arrière-plan et TUE la requête en vol → lead perdu (cas Cindy Arnold, 23/07).
    let ok = null;
    try {
      ok = await Promise.race([
        sendToCockpit(all, { leadId: getLeadId(), estimation: estim }),
        new Promise((r) => setTimeout(() => r(null), 6000))
      ]);
    } catch (e) {}
    setSending(false);
    setFailed(ok === false);
    setSent(true);
    scrollToForm();
  };

  // Le prospect a choisi son créneau de rappel. On renvoie le lead avec le MÊME leadId :
  // le cockpit reconnaît le lead existant et le complète au lieu de créer un doublon.
  const confirmRdv = async (choix) => {
    if (rdvSending) return;
    setRdvSending(true);
    const all = { ...data };
    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "📞 Rappel demandé — " + (all.nom || "prospect") + " — " + choix.label,
          _template: "table",
          "À rappeler": choix.label,
          "Nom": all.nom || "—",
          "Téléphone": all.tel || "—",
          "Email": all.email || "—",
          "Fourchette annoncée": estim ? estim.bas + " € – " + estim.haut + " €" : "—"
        })
      }).catch(() => {});
    } catch (err) {}
    try {
      await Promise.race([
        sendToCockpit(all, { leadId: getLeadId(), estimation: estim, rdv: choix }),
        new Promise((r) => setTimeout(() => r(null), 6000))
      ]);
    } catch (e) {}
    setRdvSending(false);
    setRdv(choix);
    scrollToForm();
  };

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Formulaire</div></div>
          <h2 className="dim-em">Décrivez votre déménagement.<br /><em>On fait le calcul.</em></h2>
        </div>

        <div className="devis-form reveal" id="devis-form-top">
          <div className="form-card">
            {sent ? (
              <div className="devis-success" role="status">
                <div className="ds-check" aria-hidden="true" style={failed ? { background: 'rgba(194,54,43,.10)', color: '#C2362B', borderColor: 'rgba(194,54,43,.35)' } : null}>
                  {failed ?
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.4 17.5a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg> :
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  }
                </div>
                {failed ?
                <React.Fragment>
                  <h3>Votre demande n'a pas pu être enregistrée.</h3>
                  <p>Un souci technique de notre côté, rien à voir avec vous. Ne perdez pas vos 2 minutes&nbsp;: envoyez-nous votre demande sur WhatsApp, elle est déjà pré-remplie&nbsp;👇</p>
                </React.Fragment> :
                <React.Fragment>
                  <h3>Votre demande est bien reçue&nbsp;!</h3>
                  {estim ?
                  <React.Fragment>
                    <p>Voici votre estimation, calculée sur ce que vous venez de nous décrire.</p>
                    <div className="ds-price">
                      <span className="ds-price-label">Votre déménagement</span>
                      <div className="ds-price-range">
                        <span>{estim.bas.toLocaleString("fr-FR")}<span className="cur">€</span></span>
                        <span className="dash">–</span>
                        <span>{estim.haut.toLocaleString("fr-FR")}<span className="cur">€</span></span>
                      </div>
                      <p className="ds-price-sub">
                        Fourchette basée sur <strong>{estim.volume}&nbsp;m³</strong> et <strong>~{estim.km}&nbsp;km</strong>.
                        Votre <strong>prix ferme et définitif</strong> est confirmé en 5 minutes au téléphone, et il ne bouge plus le jour J.
                      </p>
                    </div>
                  </React.Fragment> :
                  <p>On revient vers vous avec un prix précis et définitif.</p>
                  }
                  {rdv ?
                  <div className="rdv-done">
                    <p style={{ margin: 0 }}>📞 C'est noté. On vous appelle <strong>{rdv.label}</strong>{data.tel ? " au " + data.tel : ""}.</p>
                  </div> :
                  <RappelPicker onConfirm={confirmRdv} confirming={rdvSending} />
                  }
                </React.Fragment>
                }
                <div className="ds-actions">
                  <a className="btn btn-wa" href={waLead()} target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2zm5.86 14.15c-.25.7-1.45 1.33-2 1.4-.53.06-1.16.09-1.87-.12-.43-.14-.98-.32-1.7-.63-2.98-1.29-4.93-4.3-5.08-4.49-.15-.2-1.22-1.62-1.22-3.08 0-1.46.77-2.18 1.04-2.48.28-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.48.13.65-.07.17-.2.74-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.08.12.08.72-.17 1.42z"/></svg>
                    {failed ? "Envoyer ma demande sur WhatsApp" : rdv ? "Nous écrire sur WhatsApp" : "Je préfère en parler tout de suite sur WhatsApp"}
                  </a>
                </div>
                <p className="ds-sub">
                  {failed ? <React.Fragment>Ou appelez-nous directement au <a href="tel:+33615976577">06 15 97 65 77</a>, on prend votre demande en direct.</React.Fragment>
                          : <React.Fragment>Pas de WhatsApp&nbsp;? Appelez-nous au <a href="tel:+33615976577">06 15 97 65 77</a>.</React.Fragment>}
                </p>
              </div>
            ) : (
            <React.Fragment>
            <Stepper step={step} />

            {step === 0 &&
            <form onSubmit={goStep0}>
                <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <div className="form-grid">
                  <div className="lf full"><div className="form-section-head">Vos coordonnées <span>— pour vous envoyer le devis</span></div></div>
                  <div className="lf">
                    <label>Prénom & nom</label>
                    <input type="text" name="nom" className={(tried0 && !(data.nom || '').trim() ? 'field-error' : '') + ((data.nom || '').trim().length > 1 ? ' is-valid' : '')} defaultValue={data.nom} onChange={(e) => set('nom', e.target.value)} placeholder="Jean Dupont" autoComplete="name" />
                  </div>
                  <div className="lf">
                    <label>Téléphone</label>
                    <input type="tel" name="tel" className={(tried0 && !(data.tel || '').trim() ? 'field-error' : '') + ((data.tel || '').replace(/\D/g, '').length === 10 ? ' is-valid' : '')} value={data.tel || ''} onChange={(e) => set('tel', formatPhoneFR(e.target.value))} placeholder="06 12 34 56 78" inputMode="numeric" autoComplete="tel" />
                  </div>
                  <div className="lf full">
                    <label>Email</label>
                    <input type="email" name="email" className={(tried0 && !(data.email || '').trim() ? 'field-error' : '') + (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') ? ' is-valid' : '')} defaultValue={data.email} onChange={(e) => set('email', e.target.value)} placeholder="jean@exemple.fr" autoComplete="email" />
                  </div>
                  <div className="lf full"><div className="form-section-head">Votre logement</div></div>
                  <div className="lf full">
                    <label>Type de logement {tried0 && !data.type && <span className="req-hint">— à sélectionner</span>}</label>
                    <div className={"choice-row" + (tried0 && !data.type ? " field-error" : "")}>
                      <Choice name="type" value="appart" label="Appartement" selected={data.type === 'appart'} onSelect={(v) => set('type', v)} />
                      <Choice name="type" value="maison" label="Maison" selected={data.type === 'maison'} onSelect={(v) => set('type', v)} />
                      <Choice name="type" value="bureau" label="Bureaux" selected={data.type === 'bureau'} onSelect={(v) => set('type', v)} />
                    </div>
                  </div>
                  <div className="lf full">
                    <label>Surface actuelle {tried0 && !data.surface && <span className="req-hint">— à sélectionner</span>}</label>
                    <div className={"choice-row" + (tried0 && !data.surface ? " field-error" : "")}>
                      <Choice name="surf" value="studio" label="Studio" sub="< 30 m²" selected={data.surface === 'studio'} onSelect={(v) => set('surface', v)} />
                      <Choice name="surf" value="t2" label="2 pièces" sub="30–50 m²" selected={data.surface === 't2'} onSelect={(v) => set('surface', v)} />
                      <Choice name="surf" value="t3" label="3 pièces" sub="50–80 m²" selected={data.surface === 't3'} onSelect={(v) => set('surface', v)} />
                      <Choice name="surf" value="t4" label="4 pièces +" sub="80 m² +" selected={data.surface === 't4'} onSelect={(v) => set('surface', v)} />
                    </div>
                  </div>
                </div>
                <div className="form-nav" style={{ marginTop: 32 }}>
                  <button type="submit" className="form-submit">Continuer<span>→</span></button>
                  {tried0 && !step0Complete && <span className="form-incomplete">Il manque quelques infos — voir les champs en rouge.</span>}
                </div>
                <p style={{ marginTop: 14, fontSize: 13.5, color: 'var(--muted)' }}>Gratuit · sans engagement · sans carte bancaire · réponse sous 24h.</p>
              </form>
            }

            {step === 1 &&
            <form onSubmit={captureNext}>
                <div className="access-row">
                  <AccessBlock side="depart" label="Au départ" addrLabel="Adresse de départ" data={data} set={set} showErrors={tried1} />
                  <AccessBlock side="arrivee" label="À l'arrivée" addrLabel="Adresse d'arrivée" data={data} set={set} showErrors={tried1} />
                </div>
                <div className="form-grid" style={{ marginTop: 28 }}>
                  <div className="lf">
                    <label>Date souhaitée</label>
                    <input type="date" name="date" className={tried1 && !data.date ? 'field-error' : ''} defaultValue={data.date} onChange={(e) => set("date", e.target.value)} />
                  </div>
                  <div className="lf">
                    <label>Flexibilité</label>
                    <select name="flex" className={tried1 && !data.flex ? 'field-error' : ''} defaultValue={data.flex || ""} onChange={(e) => set("flex", e.target.value)}>
                      <option value="" disabled>Choisir…</option>
                      <option>Date ferme</option>
                      <option>± quelques jours</option>
                      <option>Dans le mois</option>
                      <option>Pas encore décidé</option>
                    </select>
                  </div>
                  <div className="lf full">
                    <label>Formule souhaitée</label>
                    <div className="formule-cards">
                      <FormuleOption
                      value="standard" name="Coup de main" tag="L'essentiel, bien fait."
                      items={["Transport & véhicule adapté", "Chargement & déchargement par l'équipe", "Déménagement local ou longue distance", "Assurance incluse"]}
                      selected={data.formule === 'standard'} onSelect={(v) => set('formule', v)} />
                      <FormuleOption
                      value="premium" name="Mains libres" badge="Le plus demandé" tag="Le confort, sans le stress."
                      items={["Protection intégrale du mobilier", "Démontage & remontage des meubles", "Emballage des objets fragiles", "Assurance incluse"]}
                      selected={data.formule === 'premium'} onSelect={(v) => set('formule', v)} />
                      <FormuleOption
                      value="luxe" name="Mains dans les poches" tag="Clé en main, de A à Z."
                      items={["Emballage de tous vos cartons", "Déballage & installation à l'arrivée", "Objets précieux & œuvres d'art protégés", "Assurance incluse"]}
                      selected={data.formule === 'luxe'} onSelect={(v) => set('formule', v)} />
                    </div>
                    <span className="hint" style={{ marginTop: 12 }}>Pas certain ? Prenez <strong>Mains libres</strong>. On ajuste ensemble au moment du devis. <a href="Formules" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontWeight: 600 }}>Comparatif détaillé →</a></span>
                    <span className="hint" style={{ marginTop: 8 }}>💳 Bon à savoir : votre <strong>déménagement est payable en 3× sans frais</strong> avec Klarna, au moment de la prestation et seulement si vous le souhaitez. <strong>Le devis, lui, est 100&nbsp;% gratuit</strong>, sans engagement ni carte bancaire.</span>
                  </div>
                  <div className="lf full">
                    <label>Détails utiles (optionnel)</label>
                    <textarea name="details" defaultValue={data.details} placeholder="Stationnement à réserver, animaux, garde-meuble, contrainte d'horaire… toute info qui évite une surprise le jour J."></textarea>
                  </div>
                </div>
                <div className="form-nav" style={{ marginTop: 32 }}>
                  <button type="button" className="btn btn-ghost" onClick={back}>← Retour</button>
                  <button type="submit" className="form-submit">Continuer<span>→</span></button>
                  {tried1 && !step1Complete && <span className="form-incomplete">Il manque quelques infos — voir les champs en rouge.</span>}
                </div>
              </form>
            }

            {step === 2 &&
            <InventoryStep data={data} set={set} onBack={back} onSubmit={submit} sending={sending} />
            }
            <p style={{ marginTop: 22, textAlign: 'center', fontSize: 15, color: 'var(--ink-2)' }}>
              Vous préférez en parler ? <a href="tel:+33615976577" style={{ color: 'var(--accent)', fontWeight: 700 }}>06 15 97 65 77</a>
            </p>
            </React.Fragment>
            )}
          </div>

          <aside className="devis-aside">
            <div className="aside-card">
              <h4>Ce que vous obtenez</h4>
              <ul>
                <li>Votre fourchette de prix immédiatement</li>
                <li>Le rappel à l'heure que vous choisissez</li>
                <li>La formule conseillée pour votre volume</li>
                <li>Un interlocuteur unique, joignable 24/7</li>
                <li>Aucun engagement, aucune carte bancaire</li>
              </ul>
            </div>
            <div className="aside-rating">
              <div className="big">4,9</div>
              <div className="stars">★★★★★</div>
              <div className="sub">Avis clients vérifiés · Google &amp; Trustpilot</div>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}

const REVIEWS = [
{ name: "Mari", text: "Très bonne expérience du début à la fin. L'équipe a été ponctuelle, organisée et très professionnelle. Tous nos meubles ont été parfaitement protégés et manipulés avec beaucoup de soin. Le déménagement s'est déroulé rapidement, dans une excellente ambiance, ce qui a rendu cette journée beaucoup moins stressante. Un grand merci pour votre sérieux et votre efficacité. Je recommande cette entreprise sans hésitation !" },
{ name: "Jean", text: "Excellente prestation ! L'équipe a été très réactive, soigneuse et toujours à l'écoute. Tout a été transporté sans le moindre dommage et le déménagement s'est terminé plus rapidement que prévu. Un vrai service de qualité avec des personnes sympathiques et professionnelles. Merci encore !" },
{ name: "Eliza", text: "Je recommande cette entreprise les yeux fermés. Dès le premier contact, tout a été clair et bien organisé. Le jour du déménagement, l'équipe est arrivée à l'heure, a pris grand soin de nos affaires et a travaillé avec efficacité tout au long de la journée. Un service sérieux, des tarifs honnêtes et une équipe très agréable. Merci pour votre professionnalisme !" }];


function Testimonials() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Ils nous ont fait confiance</div></div>
          <h2 className="dim-em">Ce que disent<br /><em>nos clients.</em></h2>
        </div>
        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 40 }}>
          {REVIEWS.map((r, i) =>
          <figure key={i} style={{ margin: 0, background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ color: 'var(--accent)', fontSize: 18, letterSpacing: 2 }} aria-label="Note 5 sur 5">★★★★★</div>
              <blockquote style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>{r.text}</blockquote>
              <figcaption style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 'auto' }}>— {r.name}</figcaption>
            </figure>
          )}
        </div>
        <p style={{ marginTop: 24, fontSize: 14, color: 'var(--muted)' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>★ 4,9/5</span> · Avis clients vérifiés sur Google &amp; Trustpilot
        </p>
      </div>
    </section>);

}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <DevisHero />
        <DevisForm />
        <Testimonials />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);