// urgence-page.jsx — Déménagement urgent, en 24 à 72 h.
//
// POURQUOI CETTE PAGE
// -------------------
// C'est la requête à l'intention la plus forte de tout le métier : quelqu'un qui cherche
// « déménagement urgent Nice » ne compare pas trois devis pendant deux semaines, il appelle
// et il décide. Personne ne la tient correctement sur Nice-est.
//
// Et c'est la page où la réactivité de LBC est un argument décisif plutôt qu'une formule :
// une petite structure qui décroche et qui peut déplacer un camion demain matin bat une
// grosse enseigne dont le planning est fait trois semaines à l'avance.
//
// ⚠️ ON NE PROMET PAS L'IMPOSSIBLE. La page dit franchement ce qui se fait en 24 h et ce
// qui ne se fait pas, parce qu'un client déçu dans l'urgence laisse un avis à une étoile
// le jour même.
const UI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const URG_STEPS = [
{ n: "01", t: "Vous appelez, on répond", d: "Pas de formulaire à remplir ni de rappel sous 48 h. On décroche, on pose cinq questions et on sait déjà si c'est faisable à votre date." },
{ n: "02", t: "Devis ferme dans l'heure", d: "En urgence, l'estimation se fait par téléphone et photos plutôt qu'en visite. Le prix est annoncé le jour même, et il ne bouge plus." },
{ n: "03", t: "Créneau confirmé, pas espéré", d: "On vous donne une heure d'arrivée précise, pas une demi-journée. Si le camion ne peut pas être là, on le dit tout de suite plutôt que de vous faire attendre." },
{ n: "04", t: "On charge et on livre", d: "Emballage sur place si vous n'avez rien préparé — c'est le cas le plus fréquent dans l'urgence — et livraison dans la foulée." }];

const URG_CAS = [
{ t: "Expulsion ou fin de bail", d: "Un jugement, un préavis dépassé, des clés à rendre demain. On sait charger vite et on connaît les délais qui ne se négocient pas.", icon: <UI><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 8h8M8 12h8" /></UI> },
{ t: "Mutation annoncée du jour au lendemain", d: "Une prise de poste avancée, un logement trouvé la veille. On cale le départ sur la date qui compte pour vous, pas sur notre planning.", icon: <UI><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></UI> },
{ t: "Vente conclue plus vite que prévu", d: "Un compromis signé avec une remise des clés serrée. On libère le bien à temps, cave et garage compris.", icon: <UI><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /></UI> },
{ t: "Séparation, départ précipité", d: "Il faut partir vite, souvent avec une partie seulement du mobilier. On travaille avec discrétion et sans poser de questions.", icon: <UI><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /></UI> },
{ t: "Déménageur qui vous a fait faux bond", d: "Annulation la veille, camion qui ne vient pas. On reprend le chantier quand on le peut, et on vous le dit franchement quand on ne le peut pas.", icon: <UI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></UI> },
{ t: "Sinistre, dégât des eaux, incendie", d: "Un logement à vider en urgence pour laisser travailler les artisans. Mise en garde-meuble le temps des travaux, puis retour.", icon: <UI><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></UI> }];

const URG_FAQ = [
{ q: "Pouvez-vous vraiment déménager en 24 h ?",
  a: ["Souvent oui, sur la Côte d'Azur et pour un volume courant. Cela dépend d'une seule chose : qu'un camion et une équipe soient libres à cette date.",
      "On vous le dit dans l'heure qui suit votre appel, pas après trois jours de réflexion. Dans l'urgence, une réponse rapide vaut plus qu'une réponse parfaite."] },
{ q: "Un déménagement urgent coûte-t-il plus cher ?",
  a: ["Il n'y a pas de majoration automatique parce que c'est urgent. Ce qui peut coûter plus cher, c'est l'emballage complet sur place quand rien n'est prêt, ou un samedi.",
      "C'est chiffré et annoncé avant de réserver, jamais ajouté après."] },
{ q: "Et si je n'ai rien emballé ?",
  a: ["C'est le cas le plus fréquent dans l'urgence, et c'est prévu. L'équipe arrive avec les cartons, le papier bulle et les housses, et emballe sur place.",
      "Comptez une demi-journée de plus pour un trois-pièces. Concentrez-vous sur les papiers et les objets de valeur : le reste, on s'en charge."] },
{ q: "Comment faites-vous un devis sans visite ?",
  a: ["Par téléphone et par photos. Vous filmez chaque pièce, la cave et le garage, on chiffre dans l'heure qui suit.",
      "Le prix est ferme. Si nous nous sommes trompés sur le volume à partir de vos images, c'est notre problème, pas le vôtre."] },
{ q: "Intervenez-vous le week-end ou un jour férié ?",
  a: ["Le samedi est courant. Le dimanche et les jours fériés dépendent de la disponibilité de l'équipe et se majorent, ce qui vous est dit avant de réserver."] },
{ q: "Que se passe-t-il si vous ne pouvez pas ?",
  a: ["On vous le dit tout de suite. Dans l'urgence, une réponse claire en dix minutes vaut mieux qu'un espoir entretenu pendant deux jours : vous avez encore le temps d'appeler quelqu'un d'autre.",
      "Quand nous le pouvons, nous indiquons un confrère susceptible d'être libre."] },
{ q: "Faut-il une autorisation de stationnement dans l'urgence ?",
  a: ["À Nice, elle se demande cinq à sept jours ouvrés à l'avance selon ce que le camion occupe. Sur un déménagement à 48 heures, ce délai n'est pas tenable.",
      "On se rabat alors sur une place libre au plus près, quitte à porter plus loin. C'est une contrainte réelle de l'urgence, et elle est chiffrée dans le devis."] },
{ q: "Pouvez-vous stocker mes affaires si mon logement n'est pas prêt ?",
  a: ["Oui. C'est fréquent quand il faut libérer un bien vite sans avoir encore les clés du suivant.",
      "Nous chargeons, nous stockons le temps nécessaire, et nous livrons quand vous êtes prêt. Le volume et la durée se calent au devis."] },
{ q: "Que faire si mon déménageur m'a fait faux bond ?",
  a: ["Appelez-nous en disant tout de suite la date et le volume : ce sont les deux informations qui décident si c'est possible.",
      "Nous reprenons régulièrement des chantiers abandonnés la veille. Gardez le devis et les échanges du prestataire défaillant, ils vous serviront pour vous faire rembourser."] },
{ q: "Combien de temps à l'avance faut-il appeler ?",
  a: ["Le plus tôt possible, même sans certitude sur la date. Un créneau bloqué se libère facilement, un créneau introuvable ne s'invente pas.",
      "En pratique, nous traitons des demandes à 24 heures toute l'année, mais elles passent plus difficilement les fins de mois de juin à septembre."] }];

function UrgHero() {
  return (
    <section className="page-hero" id="top">
      <div className="wrap">
        <div className="breadcrumb"><a href="/">Accueil</a> <span>›</span> <span>Déménagement urgent</span></div>
        <h1>Déménagement urgent <em className="dim-em">en 24 à 72 h.</em></h1>
        <p className="lede">Un préavis dépassé, une mutation avancée, un déménageur qui annule la veille. On décroche, on chiffre dans l'heure et on vous donne une réponse franche : oui à cette date, ou non tout de suite. Dans l'urgence, un « non » clair vaut mieux qu'un espoir entretenu pendant deux jours.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a href="Devis" className="btn btn-primary">Appeler maintenant<span className="arrow">→</span></a>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
      </div>
    </section>);
}

function UrgSteps() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Comment ça se passe</div></div>
        <h2 className="dim-em">De l'appel au camion, <em>en quatre étapes.</em></h2>
      </div>
      <div className="values-grid reveal-stagger">{URG_STEPS.map((s) =>
        <div className="value" key={s.n}>
          <div className="value-num">{s.n}</div>
          <div className="value-body"><div className="value-title">{s.t}</div><p>{s.d}</p></div>
        </div>)}
      </div>
    </div></section>);
}

function UrgCas() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Les situations qu'on traite</div></div>
        <h2 className="dim-em">Les urgences <em>qu'on voit passer.</em></h2>
      </div>
      <div className="ap-values reveal-stagger">{URG_CAS.map((f) =>
        <div className="ap-value" key={f.t}>
          <span className="ap-value-ic">{f.icon}</span>
          <div className="ap-value-t">{f.t}</div>
          <p className="ap-value-d">{f.d}</p>
        </div>)}
      </div>
    </div></section>);
}

function UrgQuoi() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Ce qu'on ne promet pas</div></div>
        <h2 className="dim-em">Un déménageur honnête <em>dit aussi non.</em></h2>
      </div>
      <p className="lede">Tout ne se fait pas en vingt-quatre heures, et prétendre le contraire ne rend service à personne. Une longue distance vers Brest ou Lille demande au minimum deux à trois jours : il faut caler le camion sur l'aller comme sur le retour. Un volume de plus de quarante mètres cubes avec monte-meuble ne se monte pas du jour au lendemain. Et un déménagement international ne se traite jamais dans l'urgence, à cause des formalités douanières.</p>
      <p className="lede">Dans ces cas-là, on vous le dit à l'appel. Vous perdez dix minutes au lieu de deux jours, et vous gardez le temps d'appeler quelqu'un d'autre. C'est aussi pour ça qu'on refuse de majorer un tarif « parce que c'est urgent » : si on prend le chantier, c'est qu'on peut le faire correctement.</p>
      <div style={{ marginTop: 18 }}>
        <a href="tel:+33615976577" className="btn btn-primary">06 15 97 65 77<span className="arrow">→</span></a>
      </div>
    </div></section>);
}

function UrgFAQ() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-head reveal">
        <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
        <h2 className="dim-em">Ce qu'on nous demande <em>le plus souvent.</em></h2>
      </div>
      <FaqOuvrable items={URG_FAQ} />
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
        <UrgHero />
        <UrgSteps />
        <UrgCas />
        <UrgQuoi />
        <UrgFAQ />
        <section className="sec"><div className="wrap">
          <div className="devis-hero-form"><QuickQuote /></div>
        </div></section>
      </main>
      <Footer />
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
