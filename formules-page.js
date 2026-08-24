/* formules-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function FormulesHero() {
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
  }, "/"), React.createElement("span", null, "Nos formules")), React.createElement("h1", null, "Trois formules, ", React.createElement("em", null, "une seule exigence.")), React.createElement("p", {
    className: "lede"
  }, "Standard, Premium ou Luxe : vous choisissez jusqu'o\xF9 on va, jamais sur la qualit\xE9 du geste. Chaque formule reprend la pr\xE9c\xE9dente et y ajoute du travail en moins pour vous. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Dans les trois, l'assurance et le prix ferme sont inclus.")));
}
const COMPARE_ROWS = [{
  label: "Véhicule adapté + équipe dédiée",
  s: true,
  p: true,
  l: true
}, {
  label: "Chargement & déchargement",
  s: true,
  p: true,
  l: true
}, {
  label: "Local ou longue distance",
  s: true,
  p: true,
  l: true
}, {
  label: "Assurance du déménageur incluse — 8 000 € par objet",
  s: true,
  p: true,
  l: true
}, {
  label: "Emballage des objets fragiles",
  s: false,
  p: true,
  l: true
}, {
  label: "Protection intégrale du mobilier",
  s: false,
  p: true,
  l: true
}, {
  label: "Démontage & remontage des meubles",
  s: false,
  p: true,
  l: true
}, {
  label: "Emballage de vos cartons",
  s: false,
  p: false,
  l: true
}, {
  label: "Déballage à l'arrivée",
  s: false,
  p: false,
  l: true
}, {
  label: "Protection œuvres d'art & vaisselle",
  s: false,
  p: false,
  l: true
}, {
  label: "Mise en place complète à l'arrivée",
  s: false,
  p: false,
  l: true
}, {
  label: "Service clé en main de A à Z",
  s: false,
  p: false,
  l: true
}];
function Mark({
  on
}) {
  return on ? React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "\u2713") : React.createElement("span", {
    style: {
      color: 'var(--rule-strong)',
      opacity: 0.3
    }
  }, "\u2014");
}
function Compare() {
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
  }, "*"), " Comparatif")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qui est inclus,", React.createElement("br", null), React.createElement("em", null, "ligne par ligne."))), React.createElement("div", {
    className: "reveal",
    style: {
      overflowX: 'auto'
    }
  }, React.createElement("table", {
    className: "cost-table",
    style: {
      minWidth: 640
    }
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: '46%'
    }
  }, "Prestation"), React.createElement("th", {
    style: {
      textAlign: 'center'
    }
  }, "Standard"), React.createElement("th", {
    style: {
      textAlign: 'center'
    }
  }, "Premium"), React.createElement("th", {
    style: {
      textAlign: 'center'
    }
  }, "Luxe"))), React.createElement("tbody", null, COMPARE_ROWS.map((r, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", null, r.label), React.createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement(Mark, {
    on: r.s
  })), React.createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement(Mark, {
    on: r.p
  })), React.createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement(Mark, {
    on: r.l
  })))))))));
}
const STEPS = [{
  n: "01",
  t: "Le devis",
  d: "Vous décrivez votre déménagement en ligne ou par téléphone. On chiffre clair sous 24h, sans engagement."
}, {
  n: "02",
  t: "La visite",
  d: "Pour les gros volumes, on passe (ou on fait une visite vidéo) pour caler le camion, les accès et la date."
}, {
  n: "03",
  t: "Le jour J",
  d: "L'équipe arrive à l'heure, emballe, protège, charge. Vous suivez un café à la main."
}, {
  n: "04",
  t: "L'arrivée",
  d: "On décharge, on remonte, on met en place. Vous validez. On repart avec les cartons vides si vous voulez."
}];
function Process() {
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
  }, "*"), " Comment \xE7a se passe")), React.createElement("h2", {
    className: "dim-em"
  }, "Quatre \xE9tapes,", React.createElement("br", null), React.createElement("em", null, "z\xE9ro mauvaise surprise."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, STEPS.map((s, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 \xC9TAPE ", s.n), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, s.t), React.createElement("div", {
    className: "value-body"
  }, s.d))))));
}
function QuoteBand() {
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
      fontSize: 'clamp(36px,4.5vw,64px)',
      color: 'var(--cream-on-dark)',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "Une formule en t\xEAte ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Chiffrons-la.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginBottom: 36,
      fontSize: 17,
      color: "rgb(242, 232, 207)"
    }
  }, "Renseignez deux adresses et une surface \u2014 on s'occupe du reste."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
const FINDER_NEEDS = [{
  label: "J'emballe mes cartons moi-même",
  tier: 0
}, {
  label: "Protéger mes meubles (housses, film)",
  tier: 1
}, {
  label: "Emballer mes objets fragiles",
  tier: 1
}, {
  label: "Démonter & remonter les meubles",
  tier: 1
}, {
  label: "Qu'on emballe tous mes cartons",
  tier: 2
}, {
  label: "Déballage & installation à l'arrivée",
  tier: 2
}, {
  label: "Protéger œuvres d'art / vaisselle",
  tier: 2
}, {
  label: "Clé en main, je ne touche à rien",
  tier: 2
}];
const FINDER_RESULT = [{
  key: "standard",
  name: "Standard",
  tag: "L'essentiel, bien fait.",
  desc: "Vous gérez les cartons, on s'occupe du muscle, de la route et de la casse."
}, {
  key: "premium",
  name: "Premium",
  tag: "Le confort, sans le stress.",
  desc: "Emballage des fragiles, protection intégrale, démontage et remontage compris."
}, {
  key: "luxe",
  name: "Luxe",
  tag: "Clé en main, de A à Z.",
  desc: "On emballe tout, on déballe, on installe. Vous n'avez qu'à ouvrir la porte."
}];
function FormulaFinder() {
  const [sel, setSel] = React.useState([]);
  const toggle = i => setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]);
  const tier = sel.length ? Math.max(...sel.map(i => FINDER_NEEDS[i].tier)) : -1;
  const res = tier >= 0 ? FINDER_RESULT[tier] : null;
  return React.createElement("section", {
    className: "sec finder-section",
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
  }, "*"), " Trouvez votre formule")), React.createElement("h2", {
    className: "dim-em"
  }, "Cochez vos besoins,", React.createElement("br", null), React.createElement("em", null, "on vous conseille la formule."))), React.createElement("div", {
    className: "finder reveal"
  }, React.createElement("div", {
    className: "finder-needs"
  }, React.createElement("div", {
    className: "finder-step"
  }, React.createElement("span", {
    className: "finder-step-n"
  }, "1"), "De quoi avez-vous besoin\xA0?"), React.createElement("div", {
    className: "finder-list"
  }, FINDER_NEEDS.map((n, i) => React.createElement("button", {
    type: "button",
    key: i,
    className: "finder-need" + (sel.includes(i) ? " on" : ""),
    onClick: () => toggle(i),
    "aria-pressed": sel.includes(i)
  }, React.createElement("span", {
    className: "fn-check",
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "fn-label"
  }, n.label))))), React.createElement("div", {
    className: "finder-result-col"
  }, React.createElement("div", {
    className: "finder-step"
  }, React.createElement("span", {
    className: "finder-step-n"
  }, "2"), "Votre formule conseill\xE9e"), React.createElement("div", {
    className: "finder-result" + (res ? " has-res" : "")
  }, res ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "finder-res-dots",
    "aria-hidden": "true"
  }, React.createElement("i", {
    className: tier >= 0 ? "on" : ""
  }), React.createElement("i", {
    className: tier >= 1 ? "on" : ""
  }), React.createElement("i", {
    className: tier >= 2 ? "on" : ""
  })), React.createElement("div", {
    className: "finder-res-name"
  }, res.name), React.createElement("div", {
    className: "finder-res-tag"
  }, "\xAB ", res.tag, " \xBB"), React.createElement("p", {
    className: "finder-res-desc"
  }, res.desc), React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Demander cette formule", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))) : React.createElement("div", {
    className: "finder-empty"
  }, React.createElement("div", {
    className: "finder-empty-ic",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M9 11l3 3L22 4"
  }), React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }))), "Cochez ce qui compte pour vous \u2014", React.createElement("br", null), "votre formule id\xE9ale appara\xEEt ici."))))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(FormulesHero, null), React.createElement(Formules, {
    recommendedTier: "premium"
  }), React.createElement(FormulaFinder, null), React.createElement(Compare, null), React.createElement(Process, null), React.createElement(QuoteBand, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { FormulesHero, Mark, Compare, Process, QuoteBand, FormulaFinder, App }); } catch (e) {}
})();
