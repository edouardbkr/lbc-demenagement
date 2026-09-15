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
  t: "Un seul prix, du devis à la facture",
  d: "Le prix annoncé est le prix payé. Aucun supplément le jour J, aucune « surprise » à la facture.",
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
  t: "La transmission",
  d: "Anthony apprend le métier auprès de son père, déménageur. Le calage, la protection du mobilier ancien, la lecture d'un accès avant d'engager le camion. Un savoir-faire qui vient des chantiers, pas d'un manuel."
}, {
  y: "02",
  t: "Le constat",
  d: "Le métier a gardé le geste et perdu la rigueur. Devis approximatifs, créneaux à la demi-journée, suppléments annoncés le jour même. Le client subit une organisation qu'il ne peut ni vérifier ni contester."
}, {
  y: "03",
  t: "La méthode",
  d: "Edouard, venu du digital, construit ce qui manquait : chiffrage ligne par ligne sur l'inventaire réel, créneau d'arrivée à l'heure près, conditions écrites avant le chargement. Le geste ne change pas, ce qui l'entoure change entièrement."
}, {
  y: "04",
  t: "Aujourd'hui",
  d: "Des équipes formées et encadrées par les fondateurs, un prix ferme sur chaque devis, et une note de 5,0 sur Google. L'exigence n'est pas un mot d'accueil : elle se lit sur le devis."
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
  }, "/"), React.createElement("span", null, "Qui sommes-nous")), React.createElement("h1", null, "Un m\xE9tier qui se transmet, ", React.createElement("em", null, "une exigence qui se mesure.")), React.createElement("p", {
    className: "lede"
  }, "Anthony a appris le m\xE9tier aupr\xE8s de son p\xE8re, d\xE9m\xE9nageur. Edouard vient du digital et de la m\xE9thode. LBC* est n\xE9 de ce que les deux savent faire. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Voici l\u2019histoire.")));
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
  }, "Le d\xE9m\xE9nagement est un m\xE9tier, et ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Anthony l\u2019a appris aupr\xE8s de son p\xE8re, d\xE9m\xE9nageur."), " Sangler une armoire ancienne sans marquer le placage, juger d\u2019un escalier avant d\u2019y engager une \xE9quipe, charger un camion dans l\u2019ordre exact o\xF9 on le d\xE9chargera. Ce sont des gestes qui ne s\u2019apprennent pas en une saison. Ils se transmettent."), React.createElement("p", null, "Ce savoir-faire existe encore dans le m\xE9tier. Ce qui manque, c\u2019est la rigueur autour. ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Des devis approximatifs, des cr\xE9neaux \xE0 la demi-journ\xE9e, des suppl\xE9ments annonc\xE9s le matin m\xEAme"), ", quand le camion est d\xE9j\xE0 l\xE0 et qu\u2019il est trop tard pour dire non. Ce n\u2019est pas un d\xE9faut de comp\xE9tence, c\u2019est un d\xE9faut de m\xE9thode."), React.createElement("p", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Edouard vient du digital."), " Il a construit l\u2019outil qui manquait : un chiffrage ligne par ligne \xE0 partir de l\u2019inventaire r\xE9el, un cr\xE9neau d\u2019arriv\xE9e annonc\xE9 \xE0 l\u2019heure pr\xE8s, des conditions \xE9crites et lisibles avant qu\u2019un seul carton ne bouge. Rien qui remplace le geste, tout ce qui l\u2019entoure."), React.createElement("p", null, "LBC*, c\u2019est cette rencontre. ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Un m\xE9tier h\xE9rit\xE9, une m\xE9thode ajout\xE9e"), ", et une exigence que le client peut v\xE9rifier au lieu d\u2019avoir \xE0 la croire."), React.createElement("p", {
    className: "ap-quote"
  }, "\xAB Le geste, on l\u2019a appris. Ce qu\u2019on a chang\xE9, c\u2019est tout ce qu\u2019il y a autour : ce qu\u2019on \xE9crit, ce qu\u2019on annonce, et ce qu\u2019on tient. \xBB", React.createElement("span", {
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
  }, "D\u2019un m\xE9tier appris", React.createElement("br", null), React.createElement("em", null, "\xE0 une m\xE9thode construite."))), React.createElement("div", {
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
