// 404-page.jsx — Page 404 "cette page a déménagé"
function NotFound() {
  React.useEffect(() => {
    const truck = document.querySelector(".nf-truck");
    if (!truck) return;
    let raf, t0 = null;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const loop = (ts) => {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 4200 % 1;
      const x = -160 + t * (window.innerWidth + 320);
      truck.style.transform = "translateX(" + x.toFixed(0) + "px)";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="nf">
      <div className="nf-road"><div className="nf-line"></div>
        <div className="nf-truck">
          <svg viewBox="0 0 320 132" width="230" fill="none" stroke="#EFE5CD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="12" y="20" width="186" height="72" rx="6" fill="rgba(239,229,205,0.05)" />
            <text x="105" y="58" fontFamily="Newsreader, serif" fontSize="34" fontWeight="700" fill="#EFE5CD" stroke="none" textAnchor="middle">LBC<tspan fill="#D75B3D">*</tspan></text>
            <text x="106" y="78" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="3" fill="#D75B3D" stroke="none" textAnchor="middle">DÉMÉNAGEMENT</text>
            <path d="M198 92 V46 Q198 40 204 40 H266 L296 64 H306 Q312 64 312 70 V92 Z" fill="rgba(239,229,205,0.05)" />
            <rect x="208" y="48" width="44" height="26" rx="4" fill="#D8E4EA" stroke="none" />
            <circle cx="70" cy="104" r="15" fill="#15293A" /><circle cx="70" cy="104" r="5" fill="#D75B3D" stroke="none" />
            <circle cx="258" cy="104" r="15" fill="#15293A" /><circle cx="258" cy="104" r="5" fill="#D75B3D" stroke="none" />
            <circle cx="309" cy="72" r="2.6" fill="#D75B3D" stroke="none" />
          </svg>
        </div>
      </div>

      <div className="wrap nf-inner">
        <div className="nf-eyebrow"><span className="asterisk">*</span> Erreur 404</div>
        <div className="nf-big">
          <span className="nf-4">4</span>
          <span className="nf-box">
            <img src="assets/lbc-mascot-sm.png" alt="" />
          </span>
          <span className="nf-4">4</span>
        </div>
        <h1 className="nf-title">Cette page a <em>déménagé.</em></h1>
        <p className="nf-sub">
          On a bien cherché dans tous les cartons… introuvable. Mais pas de panique : on sait exactement où vous ramener.
        </p>
        <div className="nf-ctas">
          <a href="Les Bras Cassés.html" className="btn btn-primary">Retour à l'accueil<span className="arrow">→</span></a>
          <a href="Devis.html" className="btn btn-ghost">Demander un devis</a>
        </div>
        <div className="nf-links">
          <a href="Formules.html">Formules</a><span>·</span>
          <a href="Stockage.html">Stockage</a><span>·</span>
          <a href="Checklist.html">Checklist</a><span>·</span>
          <a href="Contact.html">Contact</a>
        </div>
      </div>
    </section>);

}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main><NotFound /></main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
