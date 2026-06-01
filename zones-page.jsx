// zones-page.jsx — Hub listing all served cities (internal-linking + SEO index)

function ZonesHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Zones desservies</span>
        </div>
        <h1>Où l'on <em>déménage.</em></h1>
        <p className="lede">
          Basés à Nice, on intervient dans toute la Côte d'Azur, la région PACA et partout en France pour les longues distances. <span className="ast">*</span>Chaque ville, sa page, ses spécificités.
        </p>
      </div>
    </section>
  );
}

function CityColumns({ title, sub, region }) {
  const list = Object.keys(CITIES).map(s => CITIES[s]).filter(c => c.region === region);
  return (
    <section className="sec" style={region === "france" ? { background: 'var(--paper-2)' } : null}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> {sub}</div></div>
          <h2 className="dim-em">{title}</h2>
        </div>
        <div className="seo-cities reveal" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '0 32px' }}>
          {list.map((c, i) => (
            <a key={i} href={c.file} style={{
              fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 600, color: 'var(--ink)',
              padding: '20px 0', borderBottom: '1px solid var(--rule)', display: 'flex',
              justifyContent: 'space-between', alignItems: 'center', gap: 16
            }}>
              <span>Déménagement {c.name}</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--sans)', fontSize: 18 }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Votre ville n'est pas listée ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Demandez quand même.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            On déménage partout en France au départ ou à destination de la Côte d'Azur.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>
  );
}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <ZonesHero />
        <CityColumns region="cote" sub="Côte d'Azur · PACA" title={<>24 villes de la Riviera,<br /><em>une équipe qui connaît le terrain.</em></>} />
        <CityColumns region="france" sub="Longue distance" title={<>Et partout en France,<br /><em>au départ de Nice.</em></>} />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
