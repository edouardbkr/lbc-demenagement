/* stockage-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const SI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const OFFERS = [{
  size: "S",
  surf: "1 – 5 m²",
  price: "119",
  ex: "Quelques cartons, un studio en transition.",
  boxes: "≈ 30 cartons"
}, {
  size: "M",
  surf: "6 – 10 m²",
  price: "199",
  ex: "Le contenu d'un 2 pièces meublé.",
  boxes: "≈ 1 camionnette"
}, {
  size: "L",
  surf: "11 – 15 m²",
  price: "299",
  ex: "Un 3 pièces complet, électroménager inclus.",
  boxes: "≈ 1 camion",
  popular: true
}, {
  size: "XL",
  surf: "16 – 20 m²",
  price: "399",
  ex: "Une maison ou des locaux professionnels.",
  boxes: "≈ 1 grand camion"
}];
const STOCK_STEPS = [{
  n: "01",
  t: "On récupère",
  d: "Notre équipe emballe et charge chez vous, le même jour que votre déménagement si besoin."
}, {
  n: "02",
  t: "On inventorie",
  d: "Chaque carton et meuble est listé et photographié. Vous savez exactement ce qui part au stockage."
}, {
  n: "03",
  t: "On stocke",
  d: "Box individuel et fermé dans notre entrepôt sécurisé à Nice — au sec, à l'abri, sous alarme."
}, {
  n: "04",
  t: "On relivre",
  d: "Le jour J de votre choix, on ressort tout et on le réinstalle chez vous. Vous ne soulevez rien."
}];
const STOCK_FEATS = [{
  t: "Entrepôt sécurisé 24/7",
  d: "Alarme, vidéosurveillance et accès contrôlé. Vos affaires dorment tranquilles.",
  icon: React.createElement(SI, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }), React.createElement("path", {
    d: "M9 11.5l2 2 4-4.5"
  }))
}, {
  t: "Box individuel & propre",
  d: "Un espace fermé rien qu'à vous, au sec et à température stable. Ni humidité, ni nuisibles.",
  icon: React.createElement(SI, null, React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "13",
    rx: "1"
  }), React.createElement("path", {
    d: "M3 7l9-4 9 4M8 20v-6h8v6"
  }))
}, {
  t: "Sans engagement de durée",
  d: "Quelques jours entre deux logements ou plusieurs mois : vous arrêtez quand vous voulez.",
  icon: React.createElement(SI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3.5 2"
  }))
}, {
  t: "Restitution à la date de votre choix",
  d: "Le jour venu, on ressort l'ensemble de vos affaires d'un coup et on vous les relivre. Vos biens restent groupés et scellés jusque-là.",
  icon: React.createElement(SI, null, React.createElement("path", {
    d: "M9 3v2M15 3v2M4 8h16M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M8 13l2.5 2.5L16 11"
  }))
}, {
  t: "Assurance incluse",
  d: "Vos biens sont couverts pendant toute la durée du stockage, comme pendant le transport.",
  icon: React.createElement(SI, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }))
}, {
  t: "Manutention par nos soins",
  d: "On porte, on cale, on range. Pas de location de camion ni de copains à mobiliser un dimanche.",
  icon: React.createElement(SI, null, React.createElement("path", {
    d: "M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V7a2 2 0 0 0-4 0v8"
  }), React.createElement("path", {
    d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3"
  }))
}];
const STOCK_DEEP = [{
  t: "Quand on a besoin d'un garde-meuble",
  p: "Les raisons de stocker sont nombreuses, et on les gère toutes : un trou entre deux logements quand les dates ne s'enchaînent pas, des travaux ou une rénovation qui imposent de vider les pièces, une vente immobilière où il faut désencombrer pour les visites, une expatriation ou une mutation à l'étranger, une succession à gérer sans précipitation, une résidence secondaire à meubler par saison, ou tout simplement un manque de place. Du carton isolé à la maison entière, on adapte la taille du box à votre situation."
}, {
  t: "Vos affaires, inventoriées et scellées",
  p: "À la collecte, chaque carton et chaque meuble est listé et photographié : vous savez exactement ce qui part au stockage, et dans quel état. Vos biens sont ensuite rangés dans un box individuel et fermé, qui reste scellé jusqu'à la restitution. L'entrepôt est au sec et à température stable, à l'abri de l'humidité et des nuisibles, ce qui protège aussi bien le mobilier en bois que l'électronique, le linge ou les documents."
}, {
  t: "Sécurité et assurance, comprises",
  p: "Notre entrepôt à Nice est sous alarme, vidéosurveillance et accès contrôlé 24h/24 : vos affaires dorment tranquilles. Et contrairement à beaucoup de formules, l'assurance est incluse pendant toute la durée du stockage, exactement comme pendant le transport. Vos biens sont couverts du premier au dernier jour, sans démarche supplémentaire de votre part."
}, {
  t: "La différence avec un self-stockage classique",
  p: "Dans un self-stockage, vous louez un box vide et vous faites tout vous-même : louer un camion, porter, faire les allers-retours, remonter. Chez nous, c'est un service complet : on emballe et on charge chez vous, on inventorie, on stocke, et on relivre et réinstalle à la date de votre choix. Vous ne soulevez rien et vous ne mobilisez personne un dimanche. C'est du garde-meuble géré, pensé pour stocker sereinement puis tout récupérer d'un coup."
}];
const STOCK_FAQ = [{
  q: "Où se trouve l'entrepôt et quelles villes desservez-vous ?",
  a: "Notre entrepôt sécurisé est à Nice. On vient collecter et on relivre partout sur la Côte d'Azur et dans les Alpes-Maritimes : Nice, Cannes, Antibes, Monaco, Grasse, Menton, Cagnes-sur-Mer, Saint-Laurent-du-Var, Le Cannet, Mandelieu et les environs."
}, {
  q: "Y a-t-il une durée minimum de stockage ?",
  a: "Non, c'est sans engagement de durée. Quelques jours entre deux logements ou plusieurs mois : vous arrêtez quand vous voulez, on relivre à la date de votre choix."
}, {
  q: "Comment savoir quelle taille de box choisir ?",
  a: "On vous conseille au moment du devis, à partir de votre volume. En repère : S pour quelques cartons ou un studio, M pour un 2 pièces, L pour un 3 pièces complet, XL pour une maison ou des locaux pro. Pas de mauvaise surprise, on dimensionne juste."
}, {
  q: "Puis-je récupérer quelques affaires pendant le stockage ?",
  a: "Nos box sont scellés et pensés pour un stockage tranquille puis une restitution groupée. Un accès ponctuel reste possible sur demande, mais si vous avez besoin d'allers-retours fréquents, un self-stockage sera plus adapté. Dites-nous votre besoin, on vous oriente honnêtement."
}, {
  q: "Mes biens sont-ils assurés pendant le stockage ?",
  a: "Oui, l'assurance est incluse pendant toute la durée, comme pendant le transport. Vos affaires sont couvertes du premier au dernier jour."
}, {
  q: "La collecte et la relivraison sont-elles comprises ?",
  a: "On emballe et on charge chez vous (le même jour que votre déménagement si besoin), puis on ressort et on réinstalle à la date voulue. La collecte et la relivraison sont chiffrées avec votre déménagement, dans un devis clair."
}, {
  q: "Stockez-vous pour les professionnels (stock, archives) ?",
  a: "Oui : stock de commerce, mobilier de bureau en transition, archives. Pour les documents d'entreprise et leur traçabilité, voyez aussi notre service d'archivage. Devis et facture conformes fournis."
}];
function StockHero() {
  return React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "Les Bras Cass\xE9s.html"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, "Stockage & garde-meuble")), React.createElement("h1", null, "Vos affaires au chaud, ", React.createElement("em", null, "le temps qu'il vous faut.")), React.createElement("p", {
    className: "lede"
  }, "Un trou entre deux logements ? Des travaux ? Un bien \xE0 lib\xE9rer vite ? On r\xE9cup\xE8re, on stocke en box s\xE9curis\xE9 \xE0 Nice, et on relivre quand vous \xEAtes pr\xEAt. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Vous ne portez rien.")));
}
function StockIntro() {
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
  }, "*"), " Votre garde-meuble \xE0 Nice"), React.createElement("p", {
    className: "lead"
  }, "Besoin de mettre vos affaires \xE0 l'abri un moment ? Notre ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "garde-meuble \xE0 Nice"), " n'est pas un simple box vide \xE0 louer : c'est un service complet. Notre entrep\xF4t est \xE0 Nice, et on vient chercher vos affaires chez vous partout sur la ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "C\xF4te d'Azur"), " \u2014 Nice, Cannes, Antibes, Monaco, Grasse, Menton, Cagnes-sur-Mer, Saint-Laurent-du-Var. On emballe, on inventorie, on stocke, et on relivre quand vous \xEAtes pr\xEAt. Vous ne portez rien, vous ne louez aucun camion, vous ne mobilisez personne."), React.createElement("p", null, "Un trou entre deux logements sur le 06, des travaux, une vente immobili\xE8re \xE0 d\xE9sencombrer pour les visites, une r\xE9sidence secondaire \xE0 lib\xE9rer en fin de saison, une expatriation depuis Nice ou Monaco, un manque de place : du carton isol\xE9 \xE0 la maison enti\xE8re, on dimensionne le box \xE0 votre besoin, sans engagement de dur\xE9e et avec l'assurance incluse. Un stockage tranquille au c\u0153ur des Alpes-Maritimes, et tout qui ressort intact le jour voulu."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis.html",
    className: "btn btn-primary"
  }, "Devis stockage sous 24h", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Reservation.html",
    className: "btn btn-ghost"
  }, "R\xE9server un box"))), React.createElement("div", {
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
  }, "L'essentiel du stockage"), React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 15,
      color: 'var(--ink-2)'
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Entrep\xF4t \xE0 Nice"), " \xB7 alarme et vid\xE9o 24/7"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Collecte"), " \xB7 Nice et toute la C\xF4te d'Azur (06)"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Service complet"), " \xB7 on collecte et on relivre"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Sans engagement"), " \xB7 vous arr\xEAtez quand vous voulez"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "4 tailles"), " \xB7 de S (\u224830 cartons) \xE0 XL (une maison)")), React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, "Archives d'entreprise ? Voir aussi l'", React.createElement("a", {
    href: "Archivage.html",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "archivage s\xE9curis\xE9"), "."))))));
}
function StockDeep() {
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
  }, "*"), " Le garde-meuble en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "Pas un box vide \xE0 louer,", React.createElement("br", null), React.createElement("em", null, "un service o\xF9 l'on s'occupe de tout."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }, STOCK_DEEP.map((d, i) => React.createElement("div", {
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
function StockFaq() {
  const [open, setOpen] = React.useState(null);
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
  }, "Le stockage,", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, STOCK_FAQ.map((f, i) => React.createElement("div", {
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
function StockOffers() {
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
  }, "*"), " Nos offres de stockage")), React.createElement("h2", {
    className: "dim-em"
  }, "Quatre tailles de box.", React.createElement("br", null), React.createElement("em", null, "Un tarif clair, tout compris."))), React.createElement("div", {
    className: "stock-grid reveal-stagger"
  }, OFFERS.map(o => React.createElement("div", {
    className: "stock-card" + (o.popular ? " popular" : ""),
    key: o.size
  }, o.popular && React.createElement("div", {
    className: "stock-flag"
  }, React.createElement("span", {
    className: "stock-flag-star"
  }, "\u2605"), "LE PLUS DEMAND\xC9"), React.createElement("div", {
    className: "stock-size"
  }, o.size), React.createElement("div", {
    className: "stock-surf"
  }, o.surf), React.createElement("div", {
    className: "stock-price"
  }, React.createElement("span", {
    className: "stock-amount"
  }, o.price, " \u20AC"), React.createElement("span", {
    className: "stock-per"
  }, "/ mois")), React.createElement("div", {
    className: "stock-boxes"
  }, o.boxes), React.createElement("p", {
    className: "stock-ex"
  }, o.ex), React.createElement("a", {
    href: "Reservation.html?box=" + encodeURIComponent(o.size),
    className: "btn btn-ghost stock-cta"
  }, "R\xE9server ce box")))), React.createElement("p", {
    className: "hint",
    style: {
      marginTop: 20,
      textAlign: 'center'
    }
  }, "Tarifs TTC, sans engagement de dur\xE9e \xB7 Collecte et relivraison chiffr\xE9es avec votre d\xE9m\xE9nagement \xB7 Pas s\xFBr de la taille ? On vous conseille au moment du devis.")));
}
function StockSteps() {
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
  }, "*"), " Comment \xE7a marche")), React.createElement("h2", {
    className: "dim-em"
  }, "Vous nous confiez tout.", React.createElement("br", null), React.createElement("em", null, "On g\xE8re le reste."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, STOCK_STEPS.map((s, i) => React.createElement("div", {
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
function StockFeats() {
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
  }, "*"), " Pourquoi notre entrep\xF4t")), React.createElement("h2", {
    className: "dim-em"
  }, "Un garde-meuble", React.createElement("br", null), React.createElement("em", null, "qu'on choisirait pour nos propres affaires."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, STOCK_FEATS.map((f, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-ic"
  }, f.icon), React.createElement("div", {
    className: "ap-value-t"
  }, f.t), React.createElement("div", {
    className: "ap-value-d"
  }, f.d))))));
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
      fontSize: 'clamp(34px,4vw,58px)',
      color: 'var(--cream-on-dark)',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "Besoin de stocker ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "On a la place.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Dites-nous le volume et les dates \u2014 on vous conseille la bonne taille de box sous 24h."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(StockHero, null), React.createElement(StockIntro, null), React.createElement(StockOffers, null), React.createElement(StockSteps, null), React.createElement(StockFeats, null), React.createElement(StockDeep, null), React.createElement(StockFaq, null), React.createElement(QuoteBand, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { StockHero, StockIntro, StockDeep, StockFaq, StockOffers, StockSteps, StockFeats, QuoteBand, App }); } catch (e) {}
})();
