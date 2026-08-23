/* la-rochelle-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState: useStateLR
} = React;
const LRI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const LR_QUARTIERS = ["Vieux-Port", "Le Gabut", "Saint-Nicolas", "Les Minimes", "La Pallice", "Tasdon", "Mireuil", "Laleu", "Villeneuve-les-Salines", "Le Centre Historique", "Port-Neuf", "La Genette"];
const LR_SPECIFICS = [{
  t: "Centre historique à arcades",
  d: "Rues piétonnes, arcades médiévales et pavés, immeubles anciens sans ascenseur : stationnement réservé en mairie, portage maîtrisé et monte-meuble au cœur de la vieille ville."
}, {
  t: "Quartier des Minimes",
  d: "Plus grand port de plaisance d'Europe : résidences étudiantes, copropriétés et accès marina coordonnés en amont avec gardiens et syndics."
}, {
  t: "Vers les îles",
  d: "Ré, Oléron, Aix : on déménage sur les îles, en intégrant pont, péage saisonnier, marées et navette bateau au planning et au devis."
}];
const LR_DEEP = [{
  t: "Une ville tournée vers l'eau",
  p: "La Rochelle se vit autour de son port : le Vieux-Port et ses tours médiévales (Saint-Nicolas, la Chaîne, la Lanterne), le Gabut coloré, l'immense marina des Minimes. Le centre historique est piéton, pavé, bordé d'arcades, et ses immeubles anciens en pierre de taille n'ont presque jamais d'ascenseur. On y déménage au portage soigné sous les arcades, on réserve l'emplacement camion auprès de la mairie et on installe un monte-meuble quand l'escalier ancien ne laisse pas passer le mobilier."
}, {
  t: "Étudiants, plaisanciers et familles",
  p: "Ville universitaire et capitale française de la voile, La Rochelle brasse des profils très variés : étudiants des résidences des Minimes, plaisanciers, jeunes actifs, familles installées à la Genette, à Port-Neuf ou à Tasdon, retraités venus pour la douceur de l'Atlantique. Studio meublé, maison rochelaise en pierre, appartement de copropriété ou résidence secondaire face à l'océan : on adapte la formule, l'équipe et le volume à chaque projet, du plus petit au plus exigeant."
}, {
  t: "Le pont vers les îles",
  p: "Île de Ré, Oléron, Aix : ces déménagements insulaires sont une spécialité locale qui ne s'improvise pas. On intègre le passage du pont de Ré et son péage, la circulation estivale qui sature l'accès aux îles, les marées, et pour l'Île d'Aix la logistique du bac, accessible uniquement par bateau. Le tout est anticipé dans le planning et chiffré au devis, pour livrer sans mauvaise surprise même au bout d'une route de sel."
}, {
  t: "La Rochelle ↔ Nice, et toute la France",
  p: "Si on connaît si bien La Rochelle, c'est qu'on y assure régulièrement la liaison longue distance depuis la Côte d'Azur, et inversement. La Rochelle–Nice, comme tout grand trajet, se fait en camion dédié et plombé, avec une seule équipe du chargement à la livraison, sans groupage ni transbordement. Mutations, rapprochements familiaux, changements de vie entre Atlantique et Méditerranée : on remet un devis ferme et, si vos dates décalent, un garde-meuble relais fait le pont."
}];
const LR_SERVICES = [{
  t: "Déménagement local",
  d: "Dans La Rochelle et l'agglomération (Aytré, Lagord, Périgny, Châtelaillon) : intervention rapide, tous volumes."
}, {
  t: "Longue distance",
  d: "La Rochelle ↔ toute la France, dont Nice et la Côte d'Azur : camion dédié, une seule équipe, délais tenus."
}, {
  t: "Vers les îles",
  d: "Ré, Oléron, Aix : déménagements insulaires planifiés selon ponts, marées et navettes."
}, {
  t: "Transport vers votre box",
  d: "Vous stockez entre deux logements ou pour une résidence secondaire."
}];
const LR_FAQ = [{
  q: "Intervenez-vous dans le centre historique piéton ?",
  a: "Oui. On réserve l'autorisation de stationnement au plus près, et on gère le portage sous les arcades ; un monte-meuble est prévu quand l'escalier ancien des immeubles en pierre ne passe pas."
}, {
  q: "Déménagez-vous sur l'Île de Ré et l'Île d'Oléron ?",
  a: "Oui, régulièrement. On intègre le passage du pont et son péage, la navette bateau pour l'Île d'Aix, les marées et la circulation estivale dans le planning et le devis."
}, {
  q: "Faites-vous La Rochelle – Nice et la longue distance ?",
  a: "Absolument : c'est l'une de nos liaisons longue distance. Camion dédié, une seule équipe du chargement à la livraison, sans groupage, et prix clair et ferme."
}, {
  q: "Gérez-vous les résidences des Minimes ?",
  a: "Oui : copropriétés, résidences étudiantes et accès marina sont coordonnés en amont avec gardiens et syndics, avec réservation d'ascenseur si besoin."
}, {
  q: "Déménagez-vous les étudiants à La Rochelle ?",
  a: "Bien sûr, c'est fréquent vu l'université et les résidences des Minimes : on gère les petits volumes et les studios meublés à un tarif honnête, surtout à la rentrée."
}, {
  q: "Proposez-vous un garde-meuble à La Rochelle ?",
  a: "Nous ne gérons pas de garde-meuble en propre. On vous aide à trouver un box adapté près de chez vous, et on se charge du transport dans les deux sens, à l'aller comme au retour."
}];
function LRHero() {
  return React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, "D\xE9m\xE9nagement La Rochelle")), React.createElement("h1", null, "D\xE9m\xE9nagement \xE0 ", React.createElement("em", null, "La Rochelle")), React.createElement("p", {
    className: "lede",
    style: {
      padding: "10px 0"
    }
  }, "Du Vieux-Port aux Minimes, du centre \xE0 arcades jusqu'aux \xEEles de R\xE9 et d'Ol\xE9ron : on d\xE9m\xE9nage La Rochelle et sa r\xE9gion avec le soin de d\xE9m\xE9nageurs exp\xE9riment\xE9s et soigneux. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Devis gratuit sous 24h."), React.createElement("div", {
    className: "devis-hero-form"
  }, React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function LRIntro() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "about-grid"
  }, React.createElement("div", {
    className: "about-copy reveal"
  }, React.createElement("div", {
    className: "sec-num",
    style: {
      marginBottom: 22
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Votre d\xE9m\xE9nageur \xE0 La Rochelle"), React.createElement("p", {
    className: "lead"
  }, "La Rochelle, ses trois tours, son Vieux-Port et ses arcades m\xE9di\xE9vales, est une ville maritime au charme unique et aux acc\xE8s parfois exigeants. Centre historique pi\xE9ton et pav\xE9, immeubles anciens sans ascenseur, plus grand port de plaisance d'Europe aux Minimes, et un pont vers les \xEEles de R\xE9 et d'Ol\xE9ron : chaque secteur a ses contraintes, qu'on conna\xEEt et qu'on anticipe. On y d\xE9m\xE9nage particuliers, \xE9tudiants, plaisanciers et entreprises, du studio au bord de l'eau \xE0 la maison rochelaise en pierre de taille."), React.createElement("p", null, "Quelle que soit la formule \u2014 ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Coup de main, Mains libres ou Mains dans les poches"), " \u2014 vous b\xE9n\xE9ficiez de d\xE9m\xE9nageurs exp\xE9riment\xE9s et soigneux, d'une assurance compl\xE8te et d'un devis clair et d\xE9finitif. Chaque \xE9tape est \xE9crite au devis, et ce devis ne bouge plus."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis gratuit \xE0 La Rochelle", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Formules",
    className: "btn btn-ghost"
  }, "Voir les formules"))), React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "aside-card",
    style: {
      background: 'var(--paper-2)',
      color: 'var(--ink)',
      border: '1px solid var(--rule)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--ink)'
    }
  }, "Quartiers desservis"), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 8
    }
  }, LR_QUARTIERS.map((q, i) => React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 14,
      fontWeight: 600,
      border: '1px solid var(--rule-strong)',
      padding: '8px 14px',
      color: 'var(--ink-2)'
    }
  }, q))), React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Code postal"), " \xB7 17000"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Secteur"), " \xB7 Charente-Maritime (17)"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Devis"), " \xB7 gratuit sous 24h")))))));
}
function LRSpecifics() {
  return React.createElement("section", {
    className: "sec testimonials"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Notre expertise locale")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nager \xE0 La Rochelle,", React.createElement("br", null), React.createElement("em", null, "on conna\xEEt le terrain (et la mar\xE9e)."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, LR_SPECIFICS.map((s, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 0", i + 1), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, s.t), React.createElement("div", {
    className: "value-body"
  }, s.d))), React.createElement("div", {
    className: "value"
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 DEVIS"), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, "R\xE9ponse sous 24h"), React.createElement("div", {
    className: "value-body"
  }, "Gratuit, sans engagement, avec la formule conseill\xE9e pour votre volume \xE0 La Rochelle.")))));
}
function LRDeep() {
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " La Rochelle en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "Une ville tourn\xE9e vers l'eau,", React.createElement("br", null), React.createElement("em", null, "un d\xE9m\xE9nagement qui suit le rythme."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }, LR_DEEP.map((d, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, d.t), React.createElement("div", {
    className: "ap-value-d",
    style: {
      fontSize: 15.5,
      lineHeight: 1.6
    }
  }, d.p))))));
}
function LRServices() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Nos services \xE0 La Rochelle")), React.createElement("h2", {
    className: "dim-em"
  }, "Local, longue distance,", React.createElement("br", null), React.createElement("em", null, "\xEEles et garde-meuble."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, LR_SERVICES.map((s, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, s.t), React.createElement("div", {
    className: "ap-value-d"
  }, s.d))))));
}
function LRFaq() {
  const [open, setOpen] = useStateLR(null);
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nager \xE0 La Rochelle,", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, LR_FAQ.map((f, i) => React.createElement("div", {
    className: "faq-item" + (open === i ? " open" : ""),
    key: i
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? null : i)
  }, React.createElement("span", null, f.q), React.createElement("span", {
    className: "ico"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, React.createElement("p", null, f.a)))))));
}
function LRCTA() {
  return React.createElement("section", {
    className: "sec cta-band"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 'clamp(34px,4vw,58px)',
      color: 'var(--cream-on-dark)',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "Un d\xE9m\xE9nagement \xE0 La Rochelle ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Chiffrons-le.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Deux adresses, une surface \u2014 r\xE9ponse gratuite sous 24h."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(LRHero, null), React.createElement(LRIntro, null), React.createElement(LRSpecifics, null), React.createElement(LRDeep, null), React.createElement(LRServices, null), React.createElement(LRFaq, null), React.createElement(LRCTA, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { LRHero, LRIntro, LRSpecifics, LRDeep, LRServices, LRFaq, LRCTA, App }); } catch (e) {}
})();
