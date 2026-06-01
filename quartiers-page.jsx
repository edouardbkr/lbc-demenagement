// quartiers-page.jsx — Quartiers d'exception de la Côte d'Azur (Vieux-Nice en vedette)
const QUARTIERS = [
{ ville: "Nice", nom: "Le Carré d'Or", file: "Demenagement-Nice.html",
  desc: "Le triangle chic de Nice, entre Masséna et la Promenade : immeubles bourgeois, boutiques de luxe, plafonds hauts.",
  defi: "Façades classées, ascenseurs anciens trop petits pour les meubles : le monte-meuble par la fenêtre est souvent la solution." },
{ ville: "Nice", nom: "Cimiez", file: "Demenagement-Nice.html",
  desc: "La colline aristocratique de Nice, ses palais Belle Époque, ses musées et ses villas sous les oliviers.",
  defi: "Accès en lacets, grandes demeures, mobilier ancien et œuvres d'art : protection renforcée et main experte." },
{ ville: "Cannes", nom: "Le Suquet", file: "Demenagement-Cannes.html",
  desc: "Le vieux Cannes perché, ses ruelles en escaliers et sa vue sur la baie depuis le clocher.",
  defi: "Camion impossible jusqu'à la porte : portage à dos dans les escaliers et monte-meuble pour les volumes." },
{ ville: "Monaco", nom: "Monte-Carlo", file: "Demenagement-Monaco.html",
  desc: "L'adresse la plus prestigieuse de la Riviera : tours résidentielles, palaces, mobilier d'exception.",
  defi: "Créneaux de régie, ascenseurs à réserver, discrétion absolue et assurance en valeur déclarée." },
{ ville: "Antibes", nom: "Le Cap d'Antibes", file: "Demenagement-Antibes.html",
  desc: "Presqu'île de villas mythiques entre pins et mer, l'une des adresses les plus rares de la côte.",
  defi: "Propriétés fermées, allées privées, biens de grande valeur : intervention sur mesure et confidentielle." },
{ ville: "Cagnes-sur-Mer", nom: "Le Haut-de-Cagnes", file: "Demenagement-Cagnes-sur-Mer.html",
  desc: "Village médiéval en colimaçon autour de son château, pavés et ruelles d'artistes suspendues.",
  defi: "Dédale pavé inaccessible aux camions : navette en petit véhicule, portage et monte-meuble." }];


function QHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Quartiers d'exception</span>
        </div>
        <h1>Les quartiers qui ne se déménagent <em>pas comme les autres.</em></h1>
        <p className="lede">
          Vieille ville pavée, colline bourgeoise, presqu'île de villas : la Côte d'Azur regorge d'adresses magnifiques… et redoutables pour un déménageur. On les connaît par cœur. <span className="ast">*</span>À commencer par le Vieux-Nice.
        </p>
      </div>
    </section>);

}

function QVieuxNice() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Le quartier emblème · Vieux-Nice</div>
            <p className="lead">Le <strong style={{ color: 'var(--ink)' }}>Vieux-Nice</strong>, c'est le cœur battant de la ville : un lacis de ruelles piétonnes, de placettes et d'escaliers, du cours Saleya à la place Rossetti, où aucun camion ne s'aventure.</p>
            <p>Déménager ici ne s'improvise pas. On réserve l'emplacement au plus près des accès autorisés, on protège les passages, et on porte — parfois sur plusieurs dizaines de mètres et quelques étages sans ascenseur. Pour les pianos, armoires et canapés, le <strong style={{ color: 'var(--ink)' }}>monte-meuble par la façade</strong> fait gagner des heures et évite la casse.</p>
            <p>Marché du cours Saleya le matin, terrasses l'après-midi, festivités le soir : on cale aussi votre déménagement sur les bons créneaux pour ne pas se retrouver coincés derrière les étals.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Demenagement-Nice.html" className="btn btn-primary">Déménagement à Nice<span className="arrow">→</span></a>
              <a href="Devis.html" className="btn btn-ghost">Devis gratuit</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>Vieux-Nice · ce qu'on anticipe</h4>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                <div><strong style={{ color: 'var(--ink)' }}>Ruelles piétonnes</strong> — emplacement réservé au plus près, portage maîtrisé.</div>
                <div><strong style={{ color: 'var(--ink)' }}>Étages sans ascenseur</strong> — monte-meuble par la fenêtre quand il le faut.</div>
                <div><strong style={{ color: 'var(--ink)' }}>Marché &amp; affluence</strong> — créneaux choisis hors cours Saleya animé.</div>
                <div><strong style={{ color: 'var(--ink)' }}>Immeubles anciens</strong> — protection des parties communes et des escaliers.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function QGrid() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Autres quartiers d'exception</div></div>
          <h2 className="dim-em">Du Carré d'Or au Haut-de-Cagnes,<br /><em>chacun son défi.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {QUARTIERS.map((q, i) =>
          <a className="ap-value q-card" key={i} href={q.file} style={{ textDecoration: 'none' }}>
              <div className="q-ville">{q.ville}</div>
              <div className="ap-value-t">{q.nom}</div>
              <div className="ap-value-d">{q.desc}</div>
              <div className="q-defi"><span className="q-defi-tag">Le défi</span> {q.defi}</div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function QWhy() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Pourquoi un spécialiste</div></div>
          <h2 className="dim-em">Ces adresses-là<br /><em>ne pardonnent pas l'amateurisme.</em></h2>
        </div>
        <div className="reveal" style={{ maxWidth: '64ch', fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)' }}>
          <p>Ruelles où le camion ne passe pas, escaliers étroits, immeubles classés, mobilier de grande valeur, créneaux de stationnement minutés : les plus beaux quartiers de la Côte d'Azur sont aussi les plus techniques. Une équipe non préparée, c'est des heures perdues, une amende — ou un meuble abîmé.</p>
          <p style={{ marginTop: 18, color: 'var(--ink)' }}><strong>Nous, on repère, on anticipe et on prévoit le bon matériel dès le devis</strong> : monte-meuble, autorisations de voirie, protection sur mesure et équipe à la hauteur de l'adresse.</p>
        </div>
      </div>
    </section>);

}

function QCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Une adresse pas comme les autres ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>On adore ça.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Dites-nous le quartier et l'étage — on prévoit le monte-meuble et les autorisations dès le devis.
          </p>
          <QuickQuote variant="dark" />
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
        <QHero />
        <QVieuxNice />
        <QGrid />
        <QWhy />
        <QCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
