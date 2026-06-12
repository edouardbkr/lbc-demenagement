// nav-hero.jsx — Home hero (Nav/Footer/MascotStamp/MarqueeBar now live in site.jsx)

function Hero({ headlineVariant }) {
  const headlines = {
    a: {
      l1: <><span className="asterisk" style={{ fontFamily: "\"DM Sans\"" }}>*</span>Les Bras <span className="break-word"><span className="sr-only">Cassés?</span><span className="bw bw-top" aria-hidden="true">Cassés?</span><span className="bw bw-bot" aria-hidden="true">Cassés?</span><span className="bw-crack" aria-hidden="true"></span></span></>,
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
          <span className="pill pill-live"><span className="dot"></span>Déménageurs à Nice</span>
          <span className="pill"><svg className="pill-ic" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>PACA · Toute la France</span>
        </div>

        <div className="hero-grid">
          <div className="reveal">
            <h1 style={{ fontFamily: "\"DM Sans\"" }}>
              {h.l1}
              <span className="l2" style={{ opacity: "0.8", fontFamily: "Newsreader" }}>{h.l2}<span className="scribble">{h.scribble}</span></span>
            </h1>

            <div className="hero-ctas">
              <a href="Formules.html" className="btn btn-primary hero-cta-link">Trouver ma formule idéale<span className="arrow">→</span></a>
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

        <MarqueeBar />

        <Estimator />
      </div>
    </section>);

}

Object.assign(window, { Hero });