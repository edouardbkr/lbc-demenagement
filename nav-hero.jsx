// nav-hero.jsx — Home hero (Nav/Footer/MascotStamp/MarqueeBar now live in site.jsx)

function Hero({ headlineVariant }) {
  const headlines = {
    a: {
      l1: <><span className="asterisk" style={{ fontFamily: "\"DM Sans\"" }}>*</span>Les Bras Cassés?</>,
      l2: <><em style={{ opacity: "0.8", fontFamily: "Newsreader", fontSize: "clamp(38px, 11vw, 90px)" }}>Surement pas vos affaires.</em></>,
      scribble: "promis."
    },
    b: {
      l1: "Notre nom vous fait sourire.",
      l2: <>Notre service vous fera <em>confiance.</em></>,
      scribble: "pour de vrai."
    }
  };
  const h = headlines[headlineVariant] || headlines.a;
  return (
    <section className="hero" id="top" style={{ paddingTop: "16px" }}>
      <div className="wrap" style={{ paddingTop: "20px" }}>
        <div className="hero-meta reveal">
          <span className="pill"><span className="dot"></span>Déménageurs à Nice</span>
          <span className="pill">PACA · Toute la France</span>
        </div>

        <div className="hero-grid">
          <div className="reveal">
            <h1 style={{ fontFamily: "\"DM Sans\"" }}>
              {h.l1}
              <span className="l2" style={{ opacity: "0.8", fontFamily: "Newsreader" }}>{h.l2}<span className="scribble">{h.scribble}</span></span>
            </h1>

            <p className="hero-sub">
              <strong style={{ fontWeight: 600, color: 'var(--ink)' }}></strong>On emballe, on porte, on cale, on remonte. Vous, vous regardez, ou vous filez prendre un café à Cimiez. Du studio niçois à la villa des hauteurs, votre déménagement arrête d'être votre problème. <em></em>
            </p>

            <div className="hero-ctas">
              <a href="Devis.html" className="btn btn-primary">
                Obtenir un devis gratuit
                <span className="arrow">→</span>
              </a>
              <a href="Formules.html" className="btn btn-ghost">Voir nos formules</a>
            </div>

            <div className="hero-trust">
              <span className="stars">★★★★★</span>
              <span><strong>4,9 / 5</strong> · Avis Google</span>
              <span style={{ color: 'var(--muted)' }}>·</span>
              <span><strong>Devis</strong> en 24h</span>
            </div>
          </div>

          <div className="hero-photo reveal">
            <div className="scribble"><br /></div>
            <div className="hero-photo-frame">
              <div className="ph">
                <div className="ph-label">Photo éditoriale — équipe en intervention</div>
              </div>
            </div>
            <div className="photo-tag"><span className="dot"></span>Nice · Cimiez</div>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 'clamp(32px, 4vw, 52px)' }}>
          <QuickQuote variant="light" />
        </div>

        <MarqueeBar />
      </div>
    </section>);

}

Object.assign(window, { Hero });