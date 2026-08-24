// quartier-page.jsx — Gabarit des pages quartier de Nice.
//
// Le slug est porté par l'attribut data-quartier du <body> : une page HTML par quartier,
// donc une adresse, un titre, une canonique et un balisage propres à chacun.
// Le contenu vient de quartier-data.jsx.

function slugQuartier() {
  return (document.body && document.body.dataset && document.body.dataset.quartier) || "vieux-nice";
}

function QHero({ q }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <a href="Demenagement-Nice">Déménagement Nice</a>
          <span className="sep">/</span>
          <span>{q.nom}</span>
        </div>
        <h1>Déménagement <em>{q.nom}</em></h1>
        <p className="lede">{q.accroche}</p>
        <div className="hero-ctas" style={{ marginTop: 22 }}>
          <a href="Devis" className="btn btn-primary">Devis gratuit sous 24h<span className="arrow">→</span></a>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
      </div>
    </section>);
}

function QIntro({ q }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 01 / Le quartier</div></div>
          <h2 className="dim-em">Ce que ça change, <em>concrètement.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 780 }}>{q.intro}</p>
      </div>
    </section>);
}

function QContraintes({ q }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 02 / Les contraintes réelles</div></div>
          <h2 className="dim-em">Les quatre points <em>qui font la différence.</em></h2>
        </div>
        <div className="about-trust reveal-stagger" style={{ display: 'grid', gap: 18 }}>
          {q.contraintes.map((c, i) =>
            <div key={i} style={{ padding: '18px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: 17 }}>{c.t}</h3>
              <p style={{ margin: 0, opacity: 0.85 }}>{c.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);
}

/**
 * La démarche administrative, exposée en clair.
 *
 * C'est le contenu le plus utile de la page, et celui qu'aucun concurrent ne donne :
 * le service compétent et le délai dépendent de CE QUE vous occupez, pas de la ville.
 * Source : nice.fr, « Demander un stationnement pour un déménagement ».
 */
function QStationnement({ q }) {
  const a = AOT[q.aot] || AOT.standard;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 03 / L'autorisation de stationnement</div></div>
          <h2 className="dim-em">La démarche mairie, <em>sans mauvaise surprise.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 780 }}>
          Réserver un emplacement pour le camion n'est pas une formalité facultative : sans
          autorisation, l'amende tombe et la place n'est pas libre le jour J. À Nice, le service
          compétent et le délai dépendent de ce que vous occupez.
        </p>
        <div style={{ marginTop: 22, padding: '20px 22px', borderRadius: 14, background: 'rgba(215,91,61,0.10)', border: '1px solid rgba(215,91,61,0.25)', maxWidth: 780 }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Cas le plus courant à {q.nom}</div>
          <p style={{ margin: '0 0 10px' }}>{a.libelle}</p>
          <p style={{ margin: 0 }}>
            <strong>Délai minimum : {a.delai}</strong> avant la date du déménagement.<br />
            Service de la Ville de Nice : <strong>{a.tel}</strong>
          </p>
        </div>
        <ul className="about-trust" style={{ marginTop: 20, maxWidth: 780 }}>
          <li><span>La signalisation réglementaire <strong>n'est pas fournie par la Ville</strong> : elle se loue et se pose selon les consignes. Nous nous en chargeons.</span></li>
          <li><span>En zone piétonne, l'autorisation ne suffit pas : il faut aussi <strong>appeler le centre de sécurité le jour J</strong> pour faire abaisser les bornes.</span></li>
          <li><span>Nous déposons la demande pour vous dès que la date est fixée, ce qui évite les refus pour délai trop court.</span></li>
        </ul>
      </div>
    </section>);
}

function QMethode({ q }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 04 / Notre méthode ici</div></div>
          <h2 className="dim-em">Comment on s'y prend <em>à {q.nom}.</em></h2>
        </div>
        <ol style={{ maxWidth: 780, lineHeight: 1.75, paddingLeft: 20 }}>
          {q.methode.map((m, i) => <li key={i} style={{ marginBottom: 10 }}>{m}</li>)}
        </ol>
      </div>
    </section>);
}

function QFaq({ q }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 05 / Questions fréquentes</div></div>
          <h2 className="dim-em">Ce qu'on nous demande <em>le plus souvent.</em></h2>
        </div>
        <div style={{ maxWidth: 820 }}>
          {q.faq.map((f, i) =>
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '16px 0' }}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)}
                style={{ all: 'unset', cursor: 'pointer', display: 'flex', gap: 12, width: '100%', fontWeight: 700, fontSize: 17 }}>
                <span style={{ color: 'var(--accent)' }}>{open === i ? '−' : '+'}</span>{f.q}
              </button>
              {open === i && <p style={{ margin: '10px 0 0 24px', opacity: 0.88 }}>{f.a}</p>}
            </div>
          )}
        </div>
      </div>
    </section>);
}

function QProches({ q }) {
  const autres = (q.proches || []).map((s) => QUARTIERS[s]).filter(Boolean);
  if (!autres.length) return null;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 06 / À côté</div></div>
          <h2 className="dim-em">Les quartiers <em>voisins.</em></h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {autres.map((a, i) =>
            <a key={i} href={a.url} className="btn btn-ghost">Déménagement {a.nom}<span className="arrow">→</span></a>
          )}
          <a href="Demenagement-Nice" className="btn btn-ghost">Déménagement Nice<span className="arrow">→</span></a>
        </div>
      </div>
    </section>);
}

/**
 * Bloc d'appel à l'action autonome.
 *
 * On n'utilise pas le composant <CTA /> du reste du site : il vit dans cta-footer.jsx, qui
 * n'est pas chargé sur ce type de page. L'appeler quand même provoquait un ReferenceError et
 * une page blanche, détecté à l'audit avant mise en ligne.
 */
function QBandeau({ q }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div style={{ padding: '34px 30px', borderRadius: 18, background: 'rgba(215,91,61,0.10)', border: '1px solid rgba(215,91,61,0.25)', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 10px' }}>Un déménagement à {q.nom} ?</h2>
          <p style={{ margin: '0 0 20px', opacity: 0.88, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            On repère l'accès, on dépose la demande de stationnement pour vous, et on vous donne
            un prix ferme sous 24 heures. Gratuit et sans engagement.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="Devis" className="btn btn-primary">Demander mon devis<span className="arrow">→</span></a>
            <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
          </div>
        </div>
      </div>
    </section>);
}

function App() {
  useScrollReveal();
  const q = getQuartier(slugQuartier());
  return (
    <React.Fragment>
      <Nav />
      <main>
        <QHero q={q} />
        <QIntro q={q} />
        <QContraintes q={q} />
        <QStationnement q={q} />
        <QMethode q={q} />
        <QFaq q={q} />
        <QProches q={q} />
        <PreuveVille ville={q ? "à " + q.nom : ""} />
        <QBandeau q={q} />
        <section className="sec"><div className="wrap">
          <div className="devis-hero-form"><QuickQuote variant="dark" /></div>
        </div></section>
      </main>
      <Footer />
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
