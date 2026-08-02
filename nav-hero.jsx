// nav-hero.jsx — Home hero (Nav/Footer/MascotStamp/MarqueeBar now live in site.jsx)

function Hero({ headlineVariant }) {
  const headlines = {
    a: {
      l1: <><span className="asterisk" style={{ fontFamily: "\"DM Sans\"" }}>*</span>Les Bras <span className="break-word"><span className="sr-only">Cassés?</span><span className="bw bw-top" aria-hidden="true">Cassés?</span><span className="bw bw-bot" aria-hidden="true">Cassés?</span><span className="bw-crack" aria-hidden="true"></span></span></>,
      l2: <><em style={{ opacity: "0.8", fontFamily: "Newsreader", fontSize: "clamp(38px, 11vw, 90px)" }}>Sûrement pas vos affaires.</em></>,
      scribble: "promis."
    },
    b: {
      l1: "Notre nom vous fait sourire.",
      l2: <>Notre service vous fera <em>confiance.</em></>,
      scribble: "pour de vrai."
    }
  };
  const h = headlines[headlineVariant] || headlines.a;
  const heroVideoRef = React.useRef(null);

  // La vidéo du hero pèse 13,5 Mo. Avant, elle était en preload="auto" : elle se téléchargeait
  // EN ENTIER, immédiatement, à chaque visite, y compris en 4G. Un visiteur venu d'une pub
  // Google repartait avant la fin du chargement, et la lenteur de la page fait baisser le
  // Quality Score, donc monter le coût par clic. On payait des clics pour rien.
  //
  // Désormais : l'image d'aperçu s'affiche tout de suite (58 Ko), et la vidéo n'est chargée
  // QUE sur grand écran, et seulement une fois la page entièrement prête. Sur mobile, elle ne
  // se charge jamais : le visiteur voit l'aperçu, télécharge 19 Mo de moins, et la page est
  // utilisable immédiatement.
  // La vidéo joue PARTOUT, mobile compris, mais pas dans la même version.
  // Sur mobile on sert un fichier de 1,3 Mo (568 × 320) au lieu des 13,5 Mo de l'original :
  // à la taille d'affichage d'un téléphone, la différence ne se voit pas, et la page reste
  // légère. Dans les deux cas la vidéo n'est chargée qu'une fois la page prête, pour ne pas
  // retarder l'affichage du premier écran.
  const [source, setSource] = React.useState(null);
  React.useEffect(() => {
    // On respecte le visiteur qui a demandé moins d'animations, ou qui économise ses données.
    const sobre = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const co = navigator.connection || {};
    const reseauFaible = co.saveData === true || /2g/.test(co.effectiveType || "");
    if (sobre || reseauFaible) return;

    const petitEcran = window.matchMedia("(max-width: 900px)").matches;
    const fichier = petitEcran ? "assets/hero-video-mobile.mp4" : "assets/hero-video.mp4";
    const lancer = () => setSource(fichier);
    if (document.readyState === "complete") setTimeout(lancer, 200);
    else window.addEventListener("load", () => setTimeout(lancer, 200), { once: true });
  }, []);

  React.useEffect(() => {
    const v = heroVideoRef.current;
    if (v) { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
  }, [source]);
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
              <a href="Formules" className="btn btn-primary hero-cta-link">Trouver ma formule idéale<span className="arrow">→</span></a>
            </div>
          </div>

          <div className="hero-photo reveal">
            <div className="scribble"><br /></div>
            <div className="hero-photo-frame">
              {source ?
              <video ref={heroVideoRef} className="hero-video" src={source} poster="assets/hero-poster.jpg" autoPlay muted loop playsInline preload="none" aria-label="LBC Déménagement en intervention" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> :
              <img className="hero-video" src="assets/hero-poster.jpg" alt="Déménageurs LBC protégeant un canapé avant transport" width="960" height="540" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
            </div>
          </div>
        </div>

        <MarqueeBar />

        <Estimator />
      </div>
    </section>);

}

Object.assign(window, { Hero });