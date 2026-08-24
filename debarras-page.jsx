// debarras-page.jsx — Débarras d'appartement et vidage après succession.
//
// POURQUOI CETTE PAGE
// -------------------
// Azur Move s'est construit soixante et un avis sur cette seule niche à Antibes, et
// personne ne la tient sur Nice-est. Or c'est une demande à forte intention : quand un
// notaire ou une famille cherche « débarras succession Nice », la décision se prend dans
// la semaine.
//
// Elle est écrite pour DEUX lecteurs à la fois. La famille, qui vient de perdre quelqu'un
// et qui redoute autant le travail que le moment. Et le notaire, qui cherche un
// prestataire fiable à recommander et qui a besoin de savoir qu'on connaît l'indivision,
// l'inventaire et les délais. Le second est le vrai enjeu commercial : un notaire qui
// recommande une fois recommande vingt fois.
const DB = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const DEB_STEPS = [
{ n: "01", t: "Visite et devis ferme", d: "On se déplace, on regarde chaque pièce, la cave et le grenier. Le devis est remis sous 24 h et il ne bouge plus, quoi qu'on trouve derrière une porte." },
{ n: "02", t: "Tri avec vous, à votre rythme", d: "Ce qui part, ce qui reste, ce qui se vend, ce qui se donne. Rien n'est jeté sans votre accord, et on peut s'arrêter à tout moment si c'est trop." },
{ n: "03", t: "Enlèvement complet", d: "Mobilier, électroménager, cartons, encombrants, jusqu'au dernier tiroir. Le logement est rendu vide et balayé." },
{ n: "04", t: "Filière et justificatifs", d: "Déchetterie, recyclage, dons aux associations. On vous remet les justificatifs, utiles pour la succession comme pour l'état des lieux." }];

const DEB_CAS = [
{ t: "Après un décès", d: "Le vidage se fait souvent dans l'urgence d'un délai de bail ou d'une vente. On travaille avec discrétion et sans presser personne, et on peut mettre de côté tout ce que la famille souhaite garder.", icon: <DB><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /></DB> },
{ t: "Succession et indivision", d: "Plusieurs héritiers, parfois éloignés, parfois en désaccord. On établit un état des lieux photographique avant enlèvement : chacun voit ce qui a été fait, et les discussions s'arrêtent là.", icon: <DB><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 8h8M8 12h8M8 16h5" /></DB> },
{ t: "Départ en maison de retraite", d: "Un logement à libérer, une chambre à meubler. On sépare les deux : ce qui accompagne la personne est déménagé et installé, le reste est débarrassé.", icon: <DB><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></DB> },
{ t: "Vente ou remise en location", d: "Un bien vide se vend mieux et se loue plus vite. Débarras complet, nettoyage de fin de chantier, logement prêt à visiter.", icon: <DB><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /></DB> },
{ t: "Cave, grenier, garage", d: "Les volumes qu'on repousse depuis vingt ans. Souvent le plus lourd du chantier, et rarement ce qu'on avait estimé de tête.", icon: <DB><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></DB> },
{ t: "Encombrants isolés", d: "Un canapé, un piano, un frigo américain. On se déplace pour une pièce unique, sans exiger un chantier complet.", icon: <DB><rect x="3" y="8" width="18" height="9" rx="1" /><path d="M6 17v2M18 17v2M3 12h18" /></DB> }];

const DEB_FAQ = [
{ q: "Combien coûte un débarras d'appartement à Nice ?",
  a: ["Comme un déménagement : le volume et l'étage font le prix, pas la surface. Un deux-pièces encombré se situe généralement entre 600 et 1 200 €, une maison avec cave et grenier au-delà.",
      "Le devis est ferme après visite. On ne facture jamais un supplément parce que la cave était plus pleine que prévu : c'est précisément pour ça qu'on vient voir avant de chiffrer."] },
{ q: "Faut-il être présent pendant le débarras ?",
  a: ["Non. Beaucoup de nos clients habitent loin, et c'est souvent le cas dans une succession. Nous travaillons avec les clés remises par un notaire, un syndic ou un voisin de confiance.",
      "Chaque pièce est photographiée avant et après. Vous recevez le relevé complet le soir même."] },
{ q: "Rachetez-vous le mobilier ?",
  a: ["Quand des pièces ont une valeur de revente réelle — mobilier ancien, électroménager récent, outillage — elles viennent en déduction du devis.",
      "Il est rare que cela couvre tout le chantier, et nous le disons avant plutôt que de le laisser espérer. Un intérieur des années soixante-dix complet ne vaut presque rien à la revente, même en bon état."] },
{ q: "Que faites-vous des affaires personnelles trouvées ?",
  a: ["Papiers, photos, courrier, bijoux, livrets bancaires : tout ce qui a un caractère personnel est mis de côté dans un carton identifié et vous est remis. Jamais jeté.",
      "C'est la règle même quand la consigne est de tout vider — les familles retrouvent souvent dans ce carton des choses qu'elles cherchaient depuis des semaines."] },
{ q: "Intervenez-vous pour un notaire ou un mandataire de justice ?",
  a: ["Oui, régulièrement. Le dossier qu'on remet comprend l'état des lieux photographique avant et après, les justificatifs de dépôt en déchetterie et une facture détaillée par poste.",
      "Ce sont les trois pièces qu'un dossier de succession réclame, et celles qui manquent le plus souvent quand le débarras a été fait à la va-vite."] },
{ q: "En combien de temps pouvez-vous intervenir ?",
  a: ["48 à 72 heures pour la visite, et souvent dans la semaine pour le chantier lui-même.",
      "Si vous avez un délai de bail ou une date de vente serrée, dites-le au premier appel : c'est ce qui décide de l'ordre dans lequel on cale les chantiers."] },
{ q: "Le logement est-il nettoyé après le débarras ?",
  a: ["Il est rendu vide et balayé, prêt pour un état des lieux. Les traces au sol laissées par les meubles restent visibles, c'est normal.",
      "Un nettoyage complet de fin de chantier — sols, sanitaires, vitres — s'ajoute au devis si le bien doit être visité ou reloué tout de suite."] },
{ q: "Que deviennent les objets dont personne ne veut ?",
  a: ["Ce qui peut resservir part vers une association locale ou une ressourcerie ; le reste va en déchetterie, trié par filière : encombrants, électroménager, gravats, produits chimiques.",
      "Nous conservons les justificatifs de dépôt et vous les remettons avec la facture."] },
{ q: "Videz-vous aussi les caves, garages et greniers ?",
  a: ["Oui, et c'est même souvent l'essentiel du volume. Une cave voûtée niçoise ou un grenier de villa contiennent régulièrement plus que l'appartement lui-même.",
      "Nous les ouvrons pendant la visite : c'est là que se joue l'écart entre le volume estimé et le volume réel."] },
{ q: "Le débarras peut-il se faire le même jour qu'un déménagement ?",
  a: ["Oui, et c'est souvent le plus simple : on charge ce qui part avec vous, on vide le reste, et le logement est rendu dans la journée.",
      "Cela évite de rouvrir le bien une seconde fois et de payer deux déplacements."] }];

function DebHero() {
  return (
    <section className="page-hero" id="top">
      <div className="wrap">
        <div className="breadcrumb"><a href="/">Accueil</a> <span>›</span> <span>Débarras & succession</span></div>
        <h1>Débarras et vidage <em className="dim-em">après succession.</em></h1>
        <p className="lede">Vider le logement de quelqu'un qu'on a perdu n'est pas un chantier comme un autre. On vient voir, on chiffre une fois pour toutes, et on avance à votre rythme. Ce qui a un caractère personnel — papiers, photos, bijoux — vous est remis, jamais jeté.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a href="Devis" className="btn btn-primary">Demander une visite<span className="arrow">→</span></a>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
      </div>
    </section>);
}

function DebSteps() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Comment ça se passe</div></div>
        <h2 className="dim-em">Quatre étapes, <em>et un prix qui ne bouge pas.</em></h2>
      </div>
      <div className="values-grid reveal-stagger">{DEB_STEPS.map((s) =>
        <div className="value" key={s.n}>
          <div className="value-num">{s.n}</div>
          <div className="value-body"><div className="value-title">{s.t}</div><p>{s.d}</p></div>
        </div>)}
      </div>
    </div></section>);
}

function DebCas() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Les situations qu'on traite</div></div>
        <h2 className="dim-em">Chaque débarras <em>a son histoire.</em></h2>
      </div>
      <div className="ap-values reveal-stagger">{DEB_CAS.map((f) =>
        <div className="ap-value" key={f.t}>
          <span className="ap-value-ic">{f.icon}</span>
          <div className="ap-value-t">{f.t}</div>
          <p className="ap-value-d">{f.d}</p>
        </div>)}
      </div>
    </div></section>);
}

function DebNotaire() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Vous êtes notaire, mandataire ou syndic</div></div>
        <h2 className="dim-em">Un dossier propre, <em>pas seulement un logement vide.</em></h2>
      </div>
      <p className="lede">Ce qui vous manque dans un débarras, ce n'est pas la main-d'œuvre, c'est la traçabilité. On fournit systématiquement l'état des lieux photographique avant et après, les justificatifs de dépôt en déchetterie et une facture détaillée par poste. De quoi joindre au dossier de succession sans avoir à rappeler qui que ce soit.</p>
      <p className="lede">En indivision, les photos règlent la plupart des désaccords avant qu'ils ne commencent : chaque héritier voit ce qui se trouvait dans le logement et ce qui en est sorti. Et si un héritier veut récupérer une pièce précise, elle est mise de côté et non enlevée.</p>
      <div style={{ marginTop: 18 }}>
        <a href="Contact" className="btn btn-primary">Nous contacter<span className="arrow">→</span></a>
      </div>
    </div></section>);
}

function DebFAQ() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
        <h2 className="dim-em">Ce qu'on nous demande <em>le plus souvent.</em></h2>
      </div>
      <FaqOuvrable items={DEB_FAQ} />
    </div></section>);
}

function FaqOuvrable({ items }) {
  const [ouvert, setOuvert] = React.useState(-1);
  return (
    <div className="faq-list reveal">
      {items.map((f, i) => (
        <div className={"faq-item" + (ouvert === i ? " open" : "")} key={i}>
          <button className="faq-q" onClick={() => setOuvert(ouvert === i ? -1 : i)} aria-expanded={ouvert === i}>
            <span>{f.q}</span><span className="ico" aria-hidden="true">+</span>
          </button>
          <div className="faq-a">{Array.isArray(f.a) ? f.a.map((p, k) => <p key={k}>{p}</p>) : <p>{f.a}</p>}</div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main id="contenu">
        <DebHero />
        <DebSteps />
        <DebCas />
        <DebNotaire />
        <DebFAQ />
        <section className="sec"><div className="wrap">
          <div className="devis-hero-form"><QuickQuote /></div>
        </div></section>
      </main>
      <Footer />
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
