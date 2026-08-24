/* debarras-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const DB = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const DEB_STEPS = [{
  n: "01",
  t: "Visite et devis ferme",
  d: "On se déplace, on regarde chaque pièce, la cave et le grenier. Le devis est remis sous 24 h et il ne bouge plus, quoi qu'on trouve derrière une porte."
}, {
  n: "02",
  t: "Tri avec vous, à votre rythme",
  d: "Ce qui part, ce qui reste, ce qui se vend, ce qui se donne. Rien n'est jeté sans votre accord, et on peut s'arrêter à tout moment si c'est trop."
}, {
  n: "03",
  t: "Enlèvement complet",
  d: "Mobilier, électroménager, cartons, encombrants, jusqu'au dernier tiroir. Le logement est rendu vide et balayé."
}, {
  n: "04",
  t: "Filière et justificatifs",
  d: "Déchetterie, recyclage, dons aux associations. On vous remet les justificatifs, utiles pour la succession comme pour l'état des lieux."
}];
const DEB_CAS = [{
  t: "Après un décès",
  d: "Le vidage se fait souvent dans l'urgence d'un délai de bail ou d'une vente. On travaille avec discrétion et sans presser personne, et on peut mettre de côté tout ce que la famille souhaite garder.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }))
}, {
  t: "Succession et indivision",
  d: "Plusieurs héritiers, parfois éloignés, parfois en désaccord. On établit un état des lieux photographique avant enlèvement : chacun voit ce qui a été fait, et les discussions s'arrêtent là.",
  icon: React.createElement(DB, null, React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "1"
  }), React.createElement("path", {
    d: "M8 8h8M8 12h8M8 16h5"
  }))
}, {
  t: "Départ en maison de retraite",
  d: "Un logement à libérer, une chambre à meubler. On sépare les deux : ce qui accompagne la personne est déménagé et installé, le reste est débarrassé.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
  }))
}, {
  t: "Vente ou remise en location",
  d: "Un bien vide se vend mieux et se loue plus vite. Débarras complet, nettoyage de fin de chantier, logement prêt à visiter.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
  }))
}, {
  t: "Cave, grenier, garage",
  d: "Les volumes qu'on repousse depuis vingt ans. Souvent le plus lourd du chantier, et rarement ce qu'on avait estimé de tête.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M3 7l9-4 9 4v10l-9 4-9-4z"
  }), React.createElement("path", {
    d: "M3 7l9 4 9-4M12 11v10"
  }))
}, {
  t: "Encombrants isolés",
  d: "Un canapé, un piano, un frigo américain. On se déplace pour une pièce unique, sans exiger un chantier complet.",
  icon: React.createElement(DB, null, React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "9",
    rx: "1"
  }), React.createElement("path", {
    d: "M6 17v2M18 17v2M3 12h18"
  }))
}];
const DEB_FAQ = [{
  q: "Combien coûte un débarras d'appartement à Nice ?",
  a: ["Comme un déménagement : le volume et l'étage font le prix, pas la surface. Un deux-pièces encombré se situe généralement entre 600 et 1 200 €, une maison avec cave et grenier au-delà.", "Le devis est ferme après visite. On ne facture jamais un supplément parce que la cave était plus pleine que prévu : c'est précisément pour ça qu'on vient voir avant de chiffrer."]
}, {
  q: "Faut-il être présent pendant le débarras ?",
  a: ["Non. Beaucoup de nos clients habitent loin, et c'est souvent le cas dans une succession. Nous travaillons avec les clés remises par un notaire, un syndic ou un voisin de confiance.", "Chaque pièce est photographiée avant et après. Vous recevez le relevé complet le soir même."]
}, {
  q: "Rachetez-vous le mobilier ?",
  a: ["Quand des pièces ont une valeur de revente réelle — mobilier ancien, électroménager récent, outillage — elles viennent en déduction du devis.", "Il est rare que cela couvre tout le chantier, et nous le disons avant plutôt que de le laisser espérer. Un intérieur des années soixante-dix complet ne vaut presque rien à la revente, même en bon état."]
}, {
  q: "Que faites-vous des affaires personnelles trouvées ?",
  a: ["Papiers, photos, courrier, bijoux, livrets bancaires : tout ce qui a un caractère personnel est mis de côté dans un carton identifié et vous est remis. Jamais jeté.", "C'est la règle même quand la consigne est de tout vider — les familles retrouvent souvent dans ce carton des choses qu'elles cherchaient depuis des semaines."]
}, {
  q: "Intervenez-vous pour un notaire ou un mandataire de justice ?",
  a: ["Oui, régulièrement. Le dossier qu'on remet comprend l'état des lieux photographique avant et après, les justificatifs de dépôt en déchetterie et une facture détaillée par poste.", "Ce sont les trois pièces qu'un dossier de succession réclame, et celles qui manquent le plus souvent quand le débarras a été fait à la va-vite."]
}, {
  q: "En combien de temps pouvez-vous intervenir ?",
  a: ["48 à 72 heures pour la visite, et souvent dans la semaine pour le chantier lui-même.", "Si vous avez un délai de bail ou une date de vente serrée, dites-le au premier appel : c'est ce qui décide de l'ordre dans lequel on cale les chantiers."]
}, {
  q: "Le logement est-il nettoyé après le débarras ?",
  a: ["Il est rendu vide et balayé, prêt pour un état des lieux. Les traces au sol laissées par les meubles restent visibles, c'est normal.", "Un nettoyage complet de fin de chantier — sols, sanitaires, vitres — s'ajoute au devis si le bien doit être visité ou reloué tout de suite."]
}, {
  q: "Que deviennent les objets dont personne ne veut ?",
  a: ["Ce qui peut resservir part vers une association locale ou une ressourcerie ; le reste va en déchetterie, trié par filière : encombrants, électroménager, gravats, produits chimiques.", "Nous conservons les justificatifs de dépôt et vous les remettons avec la facture."]
}, {
  q: "Videz-vous aussi les caves, garages et greniers ?",
  a: ["Oui, et c'est même souvent l'essentiel du volume. Une cave voûtée niçoise ou un grenier de villa contiennent régulièrement plus que l'appartement lui-même.", "Nous les ouvrons pendant la visite : c'est là que se joue l'écart entre le volume estimé et le volume réel."]
}, {
  q: "Le débarras peut-il se faire le même jour qu'un déménagement ?",
  a: ["Oui, et c'est souvent le plus simple : on charge ce qui part avec vous, on vide le reste, et le logement est rendu dans la journée.", "Cela évite de rouvrir le bien une seconde fois et de payer deux déplacements."]
}];
function DebHero() {
  return React.createElement("section", {
    className: "page-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), " ", React.createElement("span", null, "\u203A"), " ", React.createElement("span", null, "D\xE9barras & succession")), React.createElement("h1", null, "D\xE9barras et vidage ", React.createElement("em", {
    className: "dim-em"
  }, "apr\xE8s succession.")), React.createElement("p", {
    className: "lede"
  }, "Vider le logement de quelqu'un qu'on a perdu n'est pas un chantier comme un autre. On vient voir, on chiffre une fois pour toutes, et on avance \xE0 votre rythme. Ce qui a un caract\xE8re personnel \u2014 papiers, photos, bijoux \u2014 vous est remis, jamais jet\xE9."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 18
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Demander une visite", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"))));
}
function DebSteps() {
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
  }, "*"), " Comment \xE7a se passe")), React.createElement("h2", {
    className: "dim-em"
  }, "Quatre \xE9tapes, ", React.createElement("em", null, "et un prix qui ne bouge pas."))), React.createElement("div", {
    className: "values-grid reveal-stagger"
  }, DEB_STEPS.map(s => React.createElement("div", {
    className: "value",
    key: s.n
  }, React.createElement("div", {
    className: "value-num"
  }, s.n), React.createElement("div", {
    className: "value-body"
  }, React.createElement("div", {
    className: "value-title"
  }, s.t), React.createElement("p", null, s.d)))))));
}
function DebCas() {
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
  }, "*"), " Les situations qu'on traite")), React.createElement("h2", {
    className: "dim-em"
  }, "Chaque d\xE9barras ", React.createElement("em", null, "a son histoire."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, DEB_CAS.map(f => React.createElement("div", {
    className: "ap-value",
    key: f.t
  }, React.createElement("span", {
    className: "ap-value-ic"
  }, f.icon), React.createElement("div", {
    className: "ap-value-t"
  }, f.t), React.createElement("p", {
    className: "ap-value-d"
  }, f.d))))));
}
function DebNotaire() {
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
  }, "*"), " Vous \xEAtes notaire, mandataire ou syndic")), React.createElement("h2", {
    className: "dim-em"
  }, "Un dossier propre, ", React.createElement("em", null, "pas seulement un logement vide."))), React.createElement("p", {
    className: "lede"
  }, "Ce qui vous manque dans un d\xE9barras, ce n'est pas la main-d'\u0153uvre, c'est la tra\xE7abilit\xE9. On fournit syst\xE9matiquement l'\xE9tat des lieux photographique avant et apr\xE8s, les justificatifs de d\xE9p\xF4t en d\xE9chetterie et une facture d\xE9taill\xE9e par poste. De quoi joindre au dossier de succession sans avoir \xE0 rappeler qui que ce soit."), React.createElement("p", {
    className: "lede"
  }, "En indivision, les photos r\xE8glent la plupart des d\xE9saccords avant qu'ils ne commencent : chaque h\xE9ritier voit ce qui se trouvait dans le logement et ce qui en est sorti. Et si un h\xE9ritier veut r\xE9cup\xE9rer une pi\xE8ce pr\xE9cise, elle est mise de c\xF4t\xE9 et non enlev\xE9e."), React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, React.createElement("a", {
    href: "Contact",
    className: "btn btn-primary"
  }, "Nous contacter", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}
function DebFAQ() {
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
  }, "*"), " Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qu'on nous demande ", React.createElement("em", null, "le plus souvent."))), React.createElement(FaqOuvrable, {
    items: DEB_FAQ
  })));
}
function FaqOuvrable({
  items
}) {
  const [ouvert, setOuvert] = React.useState(-1);
  return React.createElement("div", {
    className: "faq-list reveal"
  }, items.map((f, i) => React.createElement("div", {
    className: "faq-item" + (ouvert === i ? " open" : ""),
    key: i
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOuvert(ouvert === i ? -1 : i),
    "aria-expanded": ouvert === i
  }, React.createElement("span", null, f.q), React.createElement("span", {
    className: "ico",
    "aria-hidden": "true"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, Array.isArray(f.a) ? f.a.map((p, k) => React.createElement("p", {
    key: k
  }, p)) : React.createElement("p", null, f.a)))));
}
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", {
    id: "contenu"
  }, React.createElement(DebHero, null), React.createElement(DebSteps, null), React.createElement(DebCas, null), React.createElement(DebNotaire, null), React.createElement(DebFAQ, null), React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "devis-hero-form"
  }, React.createElement(QuickQuote, null))))), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { DebHero, DebSteps, DebCas, DebNotaire, DebFAQ, FaqOuvrable, App }); } catch (e) {}
})();
