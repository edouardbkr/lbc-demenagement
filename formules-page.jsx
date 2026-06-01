// formules-page.jsx — Formules page (reuses Formules section from about-formules.jsx)

function FormulesHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Nos formules</span>
        </div>
        <h1>Trois formules, <em>une seule exigence.</em></h1>
        <p className="lede">
          Coup de main, Mains libres ou Mains dans les poches : vous choisissez jusqu'où on va, jamais sur la qualité du geste. Chaque formule reprend la précédente et y ajoute le confort. <span className="ast">*</span>Et oui, c'est <span className="ast">*</span>Les Bras Cassés qui portent.
        </p>
      </div>
    </section>);

}

const COMPARE_ROWS = [
{ label: "Véhicule adapté + équipe dédiée", s: true, p: true, l: true },
{ label: "Chargement & déchargement", s: true, p: true, l: true },
{ label: "Local ou longue distance", s: true, p: true, l: true },
{ label: "Assurance multirisque incluse", s: true, p: true, l: true },
{ label: "Emballage des objets fragiles", s: false, p: true, l: true },
{ label: "Protection intégrale du mobilier", s: false, p: true, l: true },
{ label: "Démontage & remontage des meubles", s: false, p: true, l: true },
{ label: "Emballage de vos cartons", s: false, p: false, l: true },
{ label: "Déballage à l'arrivée", s: false, p: false, l: true },
{ label: "Protection œuvres d'art & vaisselle", s: false, p: false, l: true },
{ label: "Mise en place complète à l'arrivée", s: false, p: false, l: true },
{ label: "Service clé en main de A à Z", s: false, p: false, l: true }];


function Mark({ on }) {
  return on ?
  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 18 }}>✓</span> :
  <span style={{ color: 'var(--rule-strong)', opacity: 0.3 }}>—</span>;
}

function Compare() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Comparatif</div></div>
          <h2 className="dim-em">Ce qui est inclus,<br /><em>ligne par ligne.</em></h2>
        </div>
        <div className="reveal" style={{ overflowX: 'auto' }}>
          <table className="cost-table" style={{ minWidth: 640 }}>
            <thead>
              <tr>
                <th style={{ width: '46%' }}>Prestation</th>
                <th style={{ textAlign: 'center' }}>Coup de main</th>
                <th style={{ textAlign: 'center' }}>Mains libres</th>
                <th style={{ textAlign: 'center' }}>Mains dans les poches</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r, i) =>
              <tr key={i}>
                  <td>{r.label}</td>
                  <td style={{ textAlign: 'center' }}><Mark on={r.s} /></td>
                  <td style={{ textAlign: 'center' }}><Mark on={r.p} /></td>
                  <td style={{ textAlign: 'center' }}><Mark on={r.l} /></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

}

const STEPS = [
{ n: "01", t: "Le devis", d: "Vous décrivez votre déménagement en ligne ou par téléphone. On chiffre clair sous 24h, sans engagement." },
{ n: "02", t: "La visite", d: "Pour les gros volumes, on passe (ou on fait une visite vidéo) pour caler le camion, les accès et la date." },
{ n: "03", t: "Le jour J", d: "L'équipe arrive à l'heure, emballe, protège, charge. Vous suivez un café à la main." },
{ n: "04", t: "L'arrivée", d: "On décharge, on remonte, on met en place. Vous validez. On repart avec les cartons vides si vous voulez." }];


function Process() {
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Comment ça se passe</div></div>
          <h2 className="dim-em">Quatre étapes,<br /><em>zéro mauvaise surprise.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {STEPS.map((s, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ ÉTAPE {s.n}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="value-body">{s.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function QuoteBand() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(36px,4.5vw,64px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Une formule en tête ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Chiffrons-la.</span>
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 36, fontSize: 17, color: "rgb(242, 232, 207)" }}>
            Renseignez deux adresses et une surface — on s'occupe du reste.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}

const FINDER_NEEDS = [
{ label: "J'emballe mes cartons moi-même", tier: 0 },
{ label: "Protéger mes meubles (housses, film)", tier: 1 },
{ label: "Emballer mes objets fragiles", tier: 1 },
{ label: "Démonter & remonter les meubles", tier: 1 },
{ label: "Qu'on emballe tous mes cartons", tier: 2 },
{ label: "Déballage & installation à l'arrivée", tier: 2 },
{ label: "Protéger œuvres d'art / vaisselle", tier: 2 },
{ label: "Clé en main, je ne touche à rien", tier: 2 }];

const FINDER_RESULT = [
{ key: "standard", name: "Coup de main", tag: "L'essentiel, bien fait.", desc: "Vous gérez les cartons, on s'occupe du muscle, de la route et de la casse." },
{ key: "premium", name: "Mains libres", tag: "Le confort, sans le stress.", desc: "Emballage des fragiles, protection intégrale, démontage et remontage compris." },
{ key: "luxe", name: "Mains dans les poches", tag: "Clé en main, de A à Z.", desc: "On emballe tout, on déballe, on installe. Vous arrivez les mains dans les poches." }];


function FormulaFinder() {
  const [sel, setSel] = React.useState([]);
  const toggle = (i) => setSel((s) => s.includes(i) ? s.filter((x) => x !== i) : [...s, i]);
  const tier = sel.length ? Math.max(...sel.map((i) => FINDER_NEEDS[i].tier)) : -1;
  const res = tier >= 0 ? FINDER_RESULT[tier] : null;
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Trouvez votre formule</div></div>
          <h2 className="dim-em">Cochez vos besoins,<br /><em>on éclaire la bonne formule.</em></h2>
        </div>
        <div className="finder reveal">
          <div className="finder-needs">
            <div className="finder-label">De quoi avez-vous besoin&nbsp;?</div>
            <div className="inv-chips">
              {FINDER_NEEDS.map((n, i) =>
              <button type="button" key={i} className={"inv-chip" + (sel.includes(i) ? " on" : "")} onClick={() => toggle(i)}>{n.label}</button>
              )}
            </div>
          </div>
          <div className={"finder-result" + (res ? " has-res" : "")}>
            {res ?
            <React.Fragment>
                <div className="finder-res-eyebrow">Formule conseillée</div>
                <div className="finder-res-name">{res.name}</div>
                <div className="finder-res-tag">{res.tag}</div>
                <p className="finder-res-desc">{res.desc}</p>
                <a href="Devis.html" className="btn btn-primary">Demander cette formule<span className="arrow">→</span></a>
              </React.Fragment> :

            <div className="finder-empty">Sélectionnez ce qui compte pour vous — votre formule idéale s'affiche ici. 🦴</div>
            }
          </div>
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
        <FormulesHero />
        <Formules recommendedTier="premium" />
        <FormulaFinder />
        <Compare />
        <Process />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);