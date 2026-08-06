/* apropos-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const I = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const AP_VALUES = [{
  t: "L'honnêteté d'abord",
  d: "Le prix du devis est le prix payé. Pas d'astérisque en bas de page, pas de « surprise » le jour J.",
  icon: React.createElement(I, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }), React.createElement("path", {
    d: "M9 11.5l2 2 4-4.5"
  }))
}, {
  t: "Le geste juste",
  d: "Des déménageurs expérimentés, encadrés par les fondateurs eux-mêmes, qui savent porter un piano comme une boîte à souvenirs.",
  icon: React.createElement(I, null, React.createElement("path", {
    d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3L2.5 16a2 2 0 0 1 2.8-2.8L7 15"
  }), React.createElement("path", {
    d: "M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V7a2 2 0 0 0-4 0v8"
  }))
}, {
  t: "Vos affaires, comme les nôtres",
  d: "On protège et on réinstalle chaque meuble comme s'il dormait chez nous le soir.",
  icon: React.createElement(I, null, React.createElement("path", {
    d: "M11.5 8.2c-1-1.9-4-1.5-4 .9 0 1.7 2.2 3.2 4 4.2 1.8-1 4-2.5 4-4.2 0-2.4-3-2.8-4-.9z"
  }), React.createElement("path", {
    d: "M3.5 13.8a8.5 8.5 0 0 0 16 0"
  }), React.createElement("path", {
    d: "M3.5 13.8v-1.4M19.5 13.8v-1.4"
  }))
}, {
  t: "À l'heure, toujours",
  d: "Une fenêtre d'arrivée de 15 minutes. Votre journée démarre quand on l'a dit, pas deux heures plus tard.",
  icon: React.createElement(I, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3.5 2"
  }))
}];
const AP_TIMELINE = [{
  y: "01",
  t: "Le déclic",
  d: "Après un déménagement catastrophique — cartons écrasés, équipe fantôme à 8h — deux amis niçois en ont assez. Un constat simple : on peut tellement mieux faire."
}, {
  y: "02",
  t: "La promesse",
  d: "On fonde LBC* avec une règle non négociable : traiter les affaires des gens comme les nôtres. Un prix annoncé qu'on respecte, du matériel adapté, et jamais d'inconnu recruté la veille pour porter vos meubles."
}, {
  y: "03",
  t: "Plus loin que Nice",
  d: "Déménagements locaux, longues distances, entreprises : de Monaco à Paris, on s'organise pour tenir chaque délai et chaque promesse."
}, {
  y: "04",
  t: "Aujourd'hui",
  d: "Des centaines de déménagements menés avec soin, des équipes formées par les fondateurs, et des clients qui nous recommandent. Le nom fait sourire. Le travail, lui, reste sérieux."
}];
function AproposHero() {
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
  }, "/"), React.createElement("span", null, "Qui sommes-nous")), React.createElement("h1", null, "Deux amis, un camion, ", React.createElement("em", null, "et une vieille rancune contre les d\xE9m\xE9nagements rat\xE9s.")), React.createElement("p", {
    className: "lede"
  }, "On a appel\xE9 notre bo\xEEte \xAB Les Bras Cass\xE9s \xBB pour qu'on n'oublie jamais d'o\xF9 on vient \u2014 et pourquoi on fait ce m\xE9tier autrement. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Voici l'histoire.")));
}
function AproposStory() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "about-grid",
    style: {
      gridTemplateColumns: '1fr',
      maxWidth: 820
    }
  }, React.createElement("div", {
    className: "about-copy reveal"
  }, React.createElement("div", {
    className: "sec-num",
    style: {
      marginBottom: 22
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Notre histoire"), React.createElement("p", {
    className: "lead"
  }, "Un samedi, ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Edouard et Anthony"), " d\xE9m\xE9nagent un appartement ni\xE7ois avec une soci\xE9t\xE9 trouv\xE9e en ligne. R\xE9sultat : ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "deux heures de retard, un buffet de famille ray\xE9, et z\xE9ro excuse.")), React.createElement("p", null, "Ce jour-l\xE0, ils se regardent et se disent la m\xEAme chose : ", React.createElement("em", null, "\xAB On peut faire tellement mieux. \xBB"), " Pas avec des promesses marketing, mais avec du bon sens \u2014 des \xE9quipes exp\xE9riment\xE9es, du mat\xE9riel entretenu, un prix annonc\xE9 qu'on respecte, et le soin qu'on mettrait \xE0 transporter nos propres souvenirs."), React.createElement("p", null, "Aujourd'hui, LBC* a grandi \u2014 mais l'exigence n'a pas boug\xE9. ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Edouard et Anthony forment et encadrent chaque \xE9quipe"), ", pour qu'on vous traite toujours comme leur tout premier client : ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "que votre d\xE9m\xE9nagement arr\xEAte d'\xEAtre votre probl\xE8me.")), React.createElement("p", {
    className: "ap-quote"
  }, "\xAB On voulait b\xE2tir l'entreprise qu'on aurait r\xEAv\xE9 d'appeler le jour de notre propre gal\xE8re. \xBB", React.createElement("span", {
    className: "ap-quote-by"
  }, "\u2014 Edouard & Anthony, fondateurs de LBC*"))))));
}
function AproposValues() {
  return React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Nos valeurs")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qui ne se n\xE9gocie", React.createElement("br", null), React.createElement("em", null, "jamais."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, AP_VALUES.map((v, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-ic"
  }, v.icon), React.createElement("div", {
    className: "ap-value-t"
  }, v.t), React.createElement("div", {
    className: "ap-value-d"
  }, v.d))))));
}
function AproposTimeline() {
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)',
      paddingTop: 'clamp(56px,7vw,90px)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Notre parcours")), React.createElement("h2", {
    className: "dim-em"
  }, "De la gal\xE8re", React.createElement("br", null), React.createElement("em", null, "au camion qui roule droit."))), React.createElement("div", {
    className: "ap-timeline reveal-stagger"
  }, AP_TIMELINE.map((m, i) => React.createElement("div", {
    className: "ap-tl-item",
    key: i
  }, React.createElement("div", {
    className: "ap-tl-year"
  }, m.y), React.createElement("div", {
    className: "ap-tl-body"
  }, React.createElement("div", {
    className: "ap-tl-dot"
  }), React.createElement("div", {
    className: "ap-tl-t"
  }, m.t), React.createElement("div", {
    className: "ap-tl-d"
  }, m.d)))))));
}
function AproposStats() {
  const stats = [{
    n: "15",
    s: "min",
    l: "Fenêtre d'arrivée annoncée"
  }, {
    n: "24",
    s: "h",
    l: "Pour un devis détaillé"
  }, {
    n: "0",
    s: "",
    l: "Frais caché, jamais"
  }, {
    n: "Nice",
    s: "",
    l: "Niçois, et fiers de l'être"
  }];
  return React.createElement("section", {
    className: "sec cta-band"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "ap-statsband reveal-stagger"
  }, stats.map((st, i) => React.createElement("div", {
    className: "ap-stat",
    key: i
  }, React.createElement("div", {
    className: "ap-stat-n"
  }, st.n, React.createElement("sup", null, st.s)), React.createElement("div", {
    className: "ap-stat-l"
  }, st.l))))));
}
function QuoteBand() {
  return React.createElement("section", {
    className: "sec"
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
      color: 'var(--ink)',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "On se charge du reste. ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Vraiment.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-2)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Deux adresses, une surface, et on vous rappelle sous 24h avec un prix clair."), React.createElement(QuickQuote, {
    variant: "light"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(AproposHero, null), React.createElement(AproposStory, null), React.createElement(AproposValues, null), React.createElement(AproposTimeline, null), React.createElement(AproposStats, null), React.createElement(QuoteBand, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { AproposHero, AproposStory, AproposValues, AproposTimeline, AproposStats, QuoteBand, App }); } catch (e) {}
})();
