/* archivage-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const AI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const ARC_STEPS = [{
  n: "01",
  t: "Enlèvement",
  d: "On récupère vos archives sur site — bureaux, cave, local — en cartons scellés et numérotés. Aucune boîte ne quitte vos locaux sans être tracée."
}, {
  n: "02",
  t: "Inventaire",
  d: "Chaque carton est référencé, indexé et consigné dans un registre. Vous savez en permanence ce qui est stocké, et où."
}, {
  n: "03",
  t: "Stockage sécurisé",
  d: "Conservation en entrepôt fermé, au sec, sous alarme et vidéosurveillance. Accès strictement contrôlé et journalisé."
}, {
  n: "04",
  t: "Destruction certifiée",
  d: "En fin de durée légale, destruction confidentielle de vos documents avec certificat à l'appui. Rien ne traîne, rien ne fuite."
}];
const ARC_FEATS = [{
  t: "Traçabilité totale",
  d: "Chaque carton porte une référence unique. Registre tenu à jour, consultable à tout moment : vous gardez la main sur vos archives.",
  icon: React.createElement(AI, null, React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "1"
  }), React.createElement("path", {
    d: "M8 7h8M8 11h8M8 15h5"
  }))
}, {
  t: "Confidentialité garantie",
  d: "Documents sensibles, RH, juridiques, médicaux : accès restreint, personnel engagé à la discrétion, locaux sécurisés.",
  icon: React.createElement(AI, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }), React.createElement("path", {
    d: "M9 11.5l2 2 4-4.5"
  }))
}, {
  t: "Conservation maîtrisée",
  d: "Entrepôt au sec, à température stable, à l'abri de l'humidité, des nuisibles et de la lumière. Vos papiers vieillissent bien.",
  icon: React.createElement(AI, null, React.createElement("path", {
    d: "M3 7l9-4 9 4v10l-9 4-9-4z"
  }), React.createElement("path", {
    d: "M3 7l9 4 9-4M12 11v10"
  }))
}, {
  t: "Récupération sur demande",
  d: "Besoin d'un dossier précis ? On le retrouve grâce à l'index et on vous le restitue ou le rapporte rapidement.",
  icon: React.createElement(AI, null, React.createElement("path", {
    d: "M21 21l-4.5-4.5"
  }), React.createElement("circle", {
    cx: "10.5",
    cy: "10.5",
    r: "6.5"
  }))
}, {
  t: "Respect des durées légales",
  d: "On vous aide à suivre les délais de conservation réglementaires avant archivage définitif ou destruction.",
  icon: React.createElement(AI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3.5 2"
  }))
}, {
  t: "Destruction certifiée",
  d: "Broyage sécurisé et certificat de destruction conforme : une traçabilité complète, du carton plein à la benne scellée.",
  icon: React.createElement(AI, null, React.createElement("path", {
    d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
  }), React.createElement("path", {
    d: "M10 11v6M14 11v6"
  }))
}];
const ARC_WHO = [{
  t: "Entreprises & PME",
  d: "Comptabilité, contrats, RH : libérez de la place au bureau sans rien perdre."
}, {
  t: "Cabinets & professions réglementées",
  d: "Avocats, notaires, experts-comptables, santé : conservation conforme et confidentielle."
}, {
  t: "Administrations & collectivités",
  d: "Volumes importants, durées légales strictes : on structure et on sécurise."
}, {
  t: "Déménagement d'entreprise",
  d: "On profite de votre transfert pour trier, archiver et alléger les nouveaux locaux."
}];
function ArcHero() {
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
  }, "/"), React.createElement("span", null, "Archivage")), React.createElement("h1", null, "Vos archives, ", React.createElement("em", null, "entre de bonnes mains \u2014 et sous cl\xE9.")), React.createElement("p", {
    className: "lede"
  }, "Enl\xE8vement, inventaire, stockage s\xE9curis\xE9 et destruction certifi\xE9e : on prend en charge le cycle de vie complet de vos documents, en toute confidentialit\xE9. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Vous gagnez de la place, pas en s\xE9r\xE9nit\xE9.")));
}
function ArcSteps() {
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
  }, "*"), " Le cycle complet")), React.createElement("h2", {
    className: "dim-em"
  }, "De l'enl\xE8vement \xE0 la destruction,", React.createElement("br", null), React.createElement("em", null, "une cha\xEEne sans maillon faible."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, ARC_STEPS.map((s, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 ", s.n), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, s.t), React.createElement("div", {
    className: "value-body"
  }, s.d))))));
}
function ArcFeats() {
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
  }, "*"), " Nos garanties")), React.createElement("h2", {
    className: "dim-em"
  }, "L'archivage s\xE9rieux,", React.createElement("br", null), React.createElement("em", null, "sans la paperasse de l'archivage."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, ARC_FEATS.map((f, i) => React.createElement("div", {
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
function ArcWho() {
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
  }, "*"), " Pour qui")), React.createElement("h2", {
    className: "dim-em"
  }, "Tous ceux qui croulent", React.createElement("br", null), React.createElement("em", null, "sous les bo\xEEtes d'archives."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, ARC_WHO.map((w, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, w.t), React.createElement("div", {
    className: "ap-value-d"
  }, w.d))))));
}
function ArcCTA() {
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
  }, "Des archives \xE0 externaliser ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "On s'en occupe.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Dites-nous le volume (en m\xE8tres lin\xE9aires ou en cartons) \u2014 on revient sous 24h avec une solution sur mesure."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(ArcHero, null), React.createElement(ArcSteps, null), React.createElement(ArcFeats, null), React.createElement(ArcWho, null), React.createElement(ArcCTA, null), React.createElement(FondPage, {
    cle: "archivage"
  })), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { ArcHero, ArcSteps, ArcFeats, ArcWho, ArcCTA, App }); } catch (e) {}
})();
