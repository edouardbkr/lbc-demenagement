// contact-page.jsx — Dedicated Contact page (form emails the lead via FormSubmit)
const { useState } = React;

// Lead notification endpoint (FormSubmit.co — kept in sync with site.jsx)
const LEAD_EMAIL = "contact@lbcdemenagement.com";
const LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

function ContactHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>CONTACT</span>
        </div>
        <h1>Parlons de votre <em>déménagement.</em></h1>
        <p className="lede">
          Une question, une date à caler, un volume à estimer ? Laissez-nous un message — on revient vers vous dans la journée ouvrée. <span className="ast">*</span>Pas de numéro surtaxé, pas de spam.
        </p>
      </div>
    </section>);

}

function ContactInfo() {
  const items = [
  { k: "Téléphone", v: "07 81 96 14 45", href: "tel:+33781961445" },
  { k: "Email", v: "contact@lbcdemenagement.com", href: "mailto:contact@lbcdemenagement.com" },
  { k: "Adresse", v: "12 rue d'Italie, 06000 Nice" },
  { k: "Horaires", v: "Lun–Sam · 8h–19h" },
  { k: "Zone", v: "Nice · PACA · Toute la France" }];

  return (
    <div className="contact-info">
      <h2 className="dim-em">On répond <em>vite,</em><br />et par un humain.</h2>
      <p className="contact-lede">
        Le plus rapide reste le téléphone. Mais si vous préférez écrire, ce formulaire arrive directement dans notre boîte — on vous rappelle avec un prix précis et définitif, pas un appât marketing.
      </p>
      <dl className="contact-coords">
        {items.map((it, i) =>
        <div key={i} className="contact-coord">
            <dt>{it.k}</dt>
            <dd>{it.href ? <a href={it.href}>{it.v}</a> : it.v}</dd>
          </div>
        )}
      </dl>
      <p className="contact-quick">
        Vous voulez un chiffrage complet ? Le <a href="Devis.html">formulaire de devis</a> prend deux minutes.
      </p>
    </div>);

}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const boxParam = params.get("box");
  const typeParam = params.get("type");
  const presetType = (boxParam || typeParam === "stockage") ? "Stockage / garde-meuble" : "";
  const presetMsg = boxParam ? "Bonjour, je souhaite réserver un box de stockage taille " + boxParam + ". Pouvez-vous me recontacter ? Merci." : "";
  const formatPhoneFR = (raw) => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);
    else if (d.startsWith("0033")) d = "0" + d.slice(4);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  const submit = (e) => {
    e.preventDefault();
    const upd = {};
    for (const el of e.currentTarget.elements) {if (el.name) upd[el.name] = el.value;}
    // Anti-spam honeypot: bots fill it, humans don't — silently accept & drop.
    if (upd._honey) { setSent(true); return; }
    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "✉️ Nouveau message (page Contact) — Les Bras Cassés",
          _template: "table",
          "Nom": upd.nom || "—",
          "Téléphone": upd.tel || "—",
          "Email": upd.email || "—",
          "Date souhaitée": upd.date || "—",
          "Type de déménagement": upd.type || "—",
          "Message": upd.message || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card contact-card contact-thanks">
        <div className="contact-thanks-mark">✓</div>
        <h3>Message envoyé.</h3>
        <p>Merci ! On revient vers vous dans la journée ouvrée. Pour une urgence, appelez-nous au <a href="tel:+33781961445">07 81 96 14 45</a>.</p>
      </div>);

  }

  return (
    <form className="form-card contact-card" onSubmit={submit}>
      <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <div className="lf">
          <label htmlFor="c-nom">Nom & prénom</label>
          <input id="c-nom" name="nom" type="text" placeholder="Jean Dupont" required />
        </div>
        <div className="lf">
          <label htmlFor="c-tel">Téléphone</label>
          <input id="c-tel" name="tel" type="tel" inputMode="numeric" autoComplete="tel" placeholder="06 12 34 56 78" required onInput={(e) => { e.target.value = formatPhoneFR(e.target.value); }} />
        </div>
        <div className="lf full">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" placeholder="jean@exemple.fr" required />
        </div>
        <div className="lf">
          <label htmlFor="c-date">Date souhaitée</label>
          <input id="c-date" name="date" type="date" />
        </div>
        <div className="lf">
          <label htmlFor="c-type">Type de déménagement</label>
          <select id="c-type" name="type" defaultValue={presetType}>
            <option value="" disabled>Choisir…</option>
            <option>Coup de main</option>
            <option>Mains libres</option>
            <option>Mains dans les poches</option>
            <option>Entreprise / bureaux</option>
            <option>Stockage / garde-meuble</option>
          </select>
        </div>
        <div className="lf full">
          <label htmlFor="c-message">Votre message</label>
          <textarea id="c-message" name="message" defaultValue={presetMsg} placeholder="Dites-nous tout : volume, accès, dates, objets particuliers…"></textarea>
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <button type="submit" className="form-submit">Envoyer le message<span>→</span></button>
      </div>
      <p className="contact-formnote">Réponse sous 24h ouvrées · Aucune donnée revendue.</p>
    </form>);

}

function ContactSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="devis-form reveal contact-grid">
          <ContactInfo />
          <ContactForm />
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
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
