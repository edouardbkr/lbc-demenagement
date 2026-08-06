// contact-page.jsx — Dedicated Contact page (form emails the lead via FormSubmit)
const { useState } = React;

// Lead notification endpoint (FormSubmit.co — kept in sync with site.jsx)

// Enregistrement du lead dans le cockpit via NOTRE domaine (/api/lead), en plus de l'e-mail.
// Indispensable : formsubmit.co est un domaine tiers, coupé par les bloqueurs de pub et les DNS
// filtrants. Quand il l'était, ce formulaire ne laissait AUCUNE trace nulle part. La requête
// même-origine, elle, passe toujours.
// Résout à true (enregistré), false (refus explicite) ou null (indéterminé — on ne l'alarme pas).
function sendContactToCockpit(upd) {
  const np = (upd.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const payload = {
    source: (at && at.canal) || "site_web",
    attribution: at || null,
    statut: "Message page Contact",
    client: { prenom, nom, tel: upd.tel || "", email: upd.email || "", contactPref: "" },
    formule: "standard",
    formulaireType: "partiel",
    dateSouhaitee: upd.date || "",
    message: [
      "Message envoyé depuis la page Contact.",
      upd.type ? "Type de déménagement : " + upd.type : "",
      upd.message ? "Message du client : " + upd.message : "",
      upd._honey ? "🤖 Piège anti-robot déclenché. C'est très souvent le remplissage automatique d'un navigateur intégré (Facebook, Instagram) sur un VRAI prospect. Appelle-le : ne le jette pas sans avoir vérifié." : ""
    ].filter(Boolean).join("\n")
  };
  try {
    return fetch("/api/lead", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload })
    }).then((r) => r.ok).catch(() => null);
  } catch (e) { return Promise.resolve(null); }
}

function ContactHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
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
  { k: "Téléphone", v: "06 15 97 65 77", href: "tel:+33615976577" },
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
        Vous voulez un chiffrage complet ? Le <a href="Devis">formulaire de devis</a> prend deux minutes.
      </p>
    </div>);

}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  // true = le serveur a explicitement refusé d'enregistrer. On le dit au visiteur plutôt que
  // d'afficher un « message envoyé » alors que rien n'est arrivé.
  const [failed, setFailed] = useState(false);
  // Données saisies, conservées pour permettre un nouvel essai sans rien retaper.
  const [last, setLast] = useState(null);
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const boxParam = params.get("box");
  const typeParam = params.get("type");
  const presetType = "";
  const presetMsg = boxParam ? "Bonjour, je souhaite réserver un box de stockage taille " + boxParam + ". Pouvez-vous me recontacter ? Merci." : "";
  const formatPhoneFR = (raw) => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);
    else if (d.startsWith("0033")) d = "0" + d.slice(4);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  const submit = async (e) => {
    e.preventDefault();
    const upd = {};
    for (const el of e.currentTarget.elements) {if (el.name) upd[el.name] = el.value;}
    // ⚠️ Le piège anti-robot ne fait plus disparaître le message. Les navigateurs intégrés
    // (Facebook, Instagram) et les gestionnaires de mots de passe remplissent tout seuls les
    // champs cachés : de vrais prospects étaient classés « robot » et jetés sans un mot, alors
    // que l'écran leur affichait « message envoyé ». On enregistre toujours, on signale.
    if (sending) return;
    // La notification e-mail part de /api/lead, depuis notre propre serveur (formsubmit.co,
    // service tiers, a été retiré : doublon, souvent bloqué, et destinataire non déclaré des
    // données personnelles de nos prospects).
    // On ATTEND l'enregistrement cockpit (6 s de sécurité) avant de dire au visiteur que c'est parti.
    setSending(true);
    let ok = null;
    try {
      ok = await Promise.race([
        sendContactToCockpit(upd),
        new Promise((r) => setTimeout(() => r(null), 6000))
      ]);
    } catch (err) {}
    setSending(false);
    if (ok === false) { setLast(upd); setFailed(true); return; }
    // Conversion Meta : message envoyé depuis la page Contact.
    if (window.fbq) window.fbq("track", "Lead");
    setSent(true);
  };

  // Nouvelle tentative d'enregistrement avec les données déjà saisies (rien à retaper).
  const retry = async () => {
    if (sending || !last) return;
    setSending(true);
    let ok = null;
    try {
      ok = await Promise.race([
        sendContactToCockpit(last),
        new Promise((r) => setTimeout(() => r(null), 6000))
      ]);
    } catch (err) {}
    setSending(false);
    if (ok === false) return;
    if (window.fbq) window.fbq("track", "Lead");
    setFailed(false);
    setSent(true);
  };

  if (failed) {
    return (
      <div className="form-card contact-card contact-thanks">
        <div className="contact-thanks-mark" style={{ background: 'rgba(194,54,43,.10)', color: '#C2362B' }}>!</div>
        <h3>Nous n'avons pas pu enregistrer votre message.</h3>
        <p>
          Un souci technique de notre côté. Le plus rapide&nbsp;: appelez-nous au <a href="tel:+33615976577">06 15 97 65 77</a>,
          ou écrivez-nous à <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>. On vous répond tout de suite.
        </p>
        <p style={{ marginTop: 12 }}>
          {/* Réessaie avec les données déjà saisies : le visiteur ne retape rien. */}
          <button type="button" className="btn btn-ghost" disabled={sending} onClick={retry}>
            {sending ? "Envoi en cours…" : "Réessayer l'envoi"}
          </button>
        </p>
      </div>);

  }

  if (sent) {
    return (
      <div className="form-card contact-card contact-thanks">
        <div className="contact-thanks-mark">✓</div>
        <h3>Message envoyé.</h3>
        <p>Merci ! On revient vers vous dans la journée ouvrée. Pour une urgence, appelez-nous au <a href="tel:+33615976577">06 15 97 65 77</a>.</p>
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
          </select>
        </div>
        <div className="lf full">
          <label htmlFor="c-message">Votre message</label>
          <textarea id="c-message" name="message" defaultValue={presetMsg} placeholder="Dites-nous tout : volume, accès, dates, objets particuliers…"></textarea>
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <button type="submit" className="form-submit" disabled={sending}>{sending ? "Envoi en cours…" : "Envoyer le message"}<span>→</span></button>
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
