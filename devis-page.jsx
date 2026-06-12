// devis-page.jsx — Quote request page with multi-step form
const { useState, useEffect, useRef } = React;

// Lead notification endpoint (FormSubmit.co — kept in sync with site.jsx)
const LEAD_EMAIL = "contact@lbcdemenagement.com";
const LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

function DevisHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>DEVIS GRATUIT SOUS 24H</span>
        </div>
        <h1>Votre devis déménagement, <em>gratuit et sans engagement.</em></h1>
        <p className="lede">
          Deux minutes, cinq infos. On revient vers vous sous 24h avec un prix précis et définitif, formule conseillée comprise. <span className="ast">*</span>Pas de numéro surtaxé, pas de spam.
        </p>
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
    nom: p.get("nom") || ""
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

  // Fire a lead notification as soon as step 0 is validated — so an abandoned
  // quote still leaves us the prospect's name, phone & email to follow up.
  const earlySent = useRef(false);
  const sendEarly = (all) => {
    if (earlySent.current) return;
    if (all && all._honey) return;
    earlySent.current = true;
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

  const submit = () => {
    const all = { ...data };
    if (all._honey) { setSent(true); return; }
    const accessStr = (s) => [
    all[s],
    all[s + "_etage"] && "Étage " + all[s + "_etage"],
    all[s + "_asc"] && "Ascenseur : " + (all[s + "_asc"] === "Oui" ? "Oui" + (all[s + "_asc_cap"] ? " (" + all[s + "_asc_cap"] + ")" : "") : "Non"),
    all[s + "_portage"] && "Portage : " + all[s + "_portage"],
    all[s + "_acces"] && "Accès : " + all[s + "_acces"]].
    filter(Boolean).join(" · ") || "—";
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
          "Détails": all.details || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    setSent(true);
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
                <div className="ds-check" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3>Demande envoyée, merci&nbsp;!</h3>
                <p>On a bien reçu votre demande. <strong>Notre équipe vous rappelle sous 24h</strong> avec un devis clair et définitif{data.nom ? ", " + data.nom.trim().split(" ")[0] : ""}.</p>
                <p className="ds-sub">Une question d'ici là&nbsp;? Appelez-nous au <a href="tel:+33781961445">07 81 96 14 45</a>.</p>
                <div className="ds-actions">
                  <a className="btn btn-primary" href="Les Bras Cassés.html">Retour à l'accueil<span className="arrow">→</span></a>
                  <a className="btn btn-ghost" href="Checklist.html">Voir la checklist déménagement</a>
                </div>
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
                  <div className="lf full">
                    <label>Comment préférez-vous être recontacté ?</label>
                    <div className="choice-row">
                      <Choice name="ct" value="tel" label="Téléphone" selected={data.contact === 'tel'} onSelect={(v) => set('contact', v)} />
                      <Choice name="ct" value="mail" label="Email" selected={data.contact === 'mail'} onSelect={(v) => set('contact', v)} />
                      <Choice name="ct" value="sms" label="SMS" selected={data.contact === 'sms'} onSelect={(v) => set('contact', v)} />
                    </div>
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
                    <span className="hint" style={{ marginTop: 12 }}>Pas certain ? Prenez <strong>Mains libres</strong>. On ajuste ensemble au moment du devis. <a href="Formules.html" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontWeight: 600 }}>Comparatif détaillé →</a></span>
                  </div>
                </div>
                <div className="form-nav" style={{ marginTop: 32 }}>
                  <button type="submit" className="form-submit">Continuer<span>→</span></button>
                  {tried0 && !step0Complete && <span className="form-incomplete">Il manque quelques infos — voir les champs en rouge.</span>}
                </div>
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
            <InventoryStep data={data} set={set} onBack={back} onSubmit={submit} />
            }
            </React.Fragment>
            )}
          </div>

          <aside className="devis-aside">
            <div className="aside-card">
              <h4>Ce que vous obtenez</h4>
              <ul>
                <li>Un prix précis et définitif sous 24h</li>
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

const COST = [
{ vol: "Studio · < 30 m²", local: "670 – 870 €", longue: "1 570 – 2 050 €" },
{ vol: "2 pièces · 30–50 m²", local: "990 – 1 290 €", longue: "2 320 – 3 030 €" },
{ vol: "3 pièces · 50–80 m²", local: "1 510 – 1 970 €", longue: "3 550 – 4 640 €" },
{ vol: "4 pièces + · 80 m² +", local: "2 420 – 3 160 €", longue: "5 690 – 7 430 €" }];


function CostSection() {
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Repères de prix</div></div>
          <h2 className="dim-em">Combien coûte un déménagement<br /><em>en 2026 ?</em></h2>
        </div>
        <div className="reveal">
          <p style={{ maxWidth: '60ch', color: 'var(--ink-2)', fontSize: 18, lineHeight: 1.6 }}>
            Voici quelques repères indicatifs du marché en formule Mains libres, hors options. Votre devis, lui, est <strong>précis et définitif</strong> : le prix annoncé est le prix payé, sans supplément le jour J.
          </p>
          <table className="cost-table">
            <thead>
              <tr><th style={{ width: '40%' }}>Volume</th><th>Local (&lt; 50 km)</th><th>Longue distance</th></tr>
            </thead>
            <tbody>
              {COST.map((r, i) =>
              <tr key={i}>
                  <td>{r.vol}</td>
                  <td><span className="price">{r.local}</span></td>
                  <td><span className="price">{r.longue}</span></td>
                </tr>
              )}
            </tbody>
          </table>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--muted)' }}>
            Estimations moyennes constatées · données indicatives, ne valent pas devis.
          </p>
        </div>
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
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);