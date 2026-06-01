// cta-footer.jsx — Home contact CTA band (Footer now lives in site.jsx)

function CTA() {
  return (
    <section className="sec cta-band" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num" style={{ color: 'var(--cream-on-dark)' }}><span className="asterisk">*</span> 05 / Parlons de votre déménagement</div>
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
              Préférez de vive voix ? <a href="tel:+33493000000">+33 4 93 00 00 00</a><br />
              Un mail ? <a href="mailto:bonjour@lbc-demenagement.fr">contact@lbcdemenagement.com</a>
            </p>
          </div>

          <form className="cta-form" onSubmit={(e) => {e.preventDefault();alert("Merci ! On vous rappelle sous 24h.");}}>
            <div className="cta-row">
              <div className="field">
                <label htmlFor="f-name">Nom complet</label>
                <input id="f-name" type="text" placeholder="Jean Dupont" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Téléphone</label>
                <input id="f-phone" type="tel" placeholder="06 12 34 56 78" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" type="email" placeholder="jean@exemple.fr" required />
            </div>
            <div className="cta-row">
              <div className="field">
                <label htmlFor="f-date">Date souhaitée</label>
                <input id="f-date" type="date" style={{ colorScheme: 'dark' }} required />
              </div>
              <div className="field">
                <label htmlFor="f-type">Type de déménagement</label>
                <select id="f-type" defaultValue="">
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
          </form>
        </div>
      </div>
    </section>);

}

Object.assign(window, { CTA });