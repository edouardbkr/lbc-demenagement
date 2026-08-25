// zones-page.jsx — Hub listing all served cities (internal-linking + SEO index)

function ZonesHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
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


/* La section « Et partout en France » filtrait CITIES sur region === "france".
   Aucune ville ne porte cette region : le H2 s'affichait au-dessus d'une grille
   vide, en production. Elle liste desormais les trajets longue distance, qui
   existent bel et bien et qui gagnent au passage un lien depuis cette page. */
function RouteColumns({ title, sub, pays, exclure }) {
  const R = window.ROUTES || {};
  const liste = Object.keys(R).map((k) => R[k])
    .filter((r) => (pays ? r.pays === pays : r.pays !== exclure))
    .sort((a, b) => (a.km || 0) - (b.km || 0));
  if (!liste.length) return null;
  return (
    <section className="sec" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> {sub}</div></div>
          <h2 className="dim-em">{title}</h2>
        </div>
        <p className="lead" style={{ maxWidth: 820, marginBottom: 26 }}>
          Sur ces distances, nous travaillons en camion dédié : une seule équipe du chargement
          à la livraison, aucun transbordement en plateforme, et une date d'arrivée ferme.
          C'est ce qui sépare un déménagement d'un groupage, où vos cartons attendent que le
          camion se remplisse avec ceux des autres.
        </p>
        <div className="seo-cities reveal" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '0 32px' }}>
          {liste.map((r, i) => (
            <a key={i} href={r.file} style={{
              fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 600, color: 'var(--ink)',
              textDecoration: 'none', display: 'block', padding: '10px 0', borderBottom: '1px solid var(--rule)'
            }}>Nice → {r.to}
              <span style={{ fontFamily: '"DM Sans"', fontSize: 13, fontWeight: 500, opacity: 0.6, marginLeft: 10 }}>
                {r.km} km · {r.duree}</span>
            </a>))}
        </div>
      </div>
    </section>);
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
        <RouteColumns pays="France" sub="Longue distance" title={<>Et partout en France,<br /><em>au départ de Nice.</em></>} />
        <RouteColumns exclure="France" sub="International" title={<>Et au-delà des frontières,<br /><em>en camion dédié.</em></>} />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
