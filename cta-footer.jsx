// cta-footer.jsx — Home contact CTA band (Footer now lives in site.jsx)

const CTA_LEAD_EMAIL = "contact@lbcdemenagement.com";
const CTA_LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + CTA_LEAD_EMAIL;

function CTA() {
  const [sent, setSent] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    const upd = {};
    for (const el of e.currentTarget.elements) { if (el.name) upd[el.name] = el.value; }
    // Anti-spam honeypot : les bots le remplissent, pas les humains.
    if (upd._honey) { setSent(true); return; }
    try {
      fetch(CTA_LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "📞 Demande de rappel (accueil) — Les Bras Cassés",
          _template: "table",
          "Nom": upd.nom || "—",
          "Téléphone": upd.tel || "—",
          "Email": upd.email || "—",
          "Date souhaitée": upd.date || "—",
          "Type de déménagement": upd.type || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    // Conversion Meta : demande de rappel depuis l'accueil.
    if (window.fbq) window.fbq("track", "Lead");
    setSent(true);
  };

  return (
    <section className="sec cta-band" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num" style={{ color: 'var(--cream-on-dark)' }}><span className="asterisk">*</span> 04 / Parlons de votre déménagement</div>
          </div>
          <div></div>
        </div>

        <div className="cta-grid reveal">
          <div>
            <h2>
              Prêt à déménager ?<br />
              <em>Nous, on l'est <span className="scribble">toujours.</span></em>
            </h2>
            <p className="cta-side">
              Laissez-nous vos coordonnées : on vous rappelle dans la journée avec un prix précis et définitif, pas un appât marketing. Vous voulez aller plus vite ? Le <a href="Devis.html">formulaire de devis complet</a> prend deux minutes.
            </p>
            <p className="cta-side" style={{ marginTop: 16 }}>
              Préférez de vive voix ? <a href="tel:+33781961445">07 81 96 14 45</a><br />
              Un mail ? <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>
            </p>
          </div>

          {sent ?
          <div className="cta-form cta-thanks">
            <div className="cta-thanks-mark">✓</div>
            <h3 style={{ margin: '4px 0 8px' }}>Demande envoyée.</h3>
            <p className="cta-side">Merci ! On vous rappelle dans la journée ouvrée avec un prix précis. Pour une urgence, appelez-nous au <a href="tel:+33781961445">07 81 96 14 45</a>.</p>
          </div> :
          <form className="cta-form" onSubmit={submit}>
            <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <div className="cta-row">
              <div className="field">
                <label htmlFor="f-name">Nom complet</label>
                <input id="f-name" name="nom" type="text" placeholder="Jean Dupont" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Téléphone</label>
                <input id="f-phone" name="tel" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" placeholder="jean@exemple.fr" required />
            </div>
            <div className="cta-row">
              <div className="field">
                <label htmlFor="f-date">Date souhaitée</label>
                <input id="f-date" name="date" type="date" style={{ colorScheme: 'dark' }} required />
              </div>
              <div className="field">
                <label htmlFor="f-type">Type de déménagement</label>
                <select id="f-type" name="type" defaultValue="">
                  <option value="" disabled>Choisir une formule…</option>
                  <option>Coup de main</option>
                  <option>Mains libres</option>
                  <option>Mains dans les poches</option>
                  <option>Entreprise / bureaux</option>
                </select>
              </div>
            </div>
            <button type="submit" className="cta-submit">
              Être rappelé sous 24h
              <span>→</span>
            </button>
          </form>}
        </div>
      </div>
    </section>);

}

Object.assign(window, { CTA });