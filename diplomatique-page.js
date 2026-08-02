/* diplomatique-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const DI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const DIP_STEPS = [{
  n: "01",
  t: "Cadrage protocolaire",
  d: "On étudie votre statut (franchise diplomatique, immunités, valise) et les exigences du poste d'origine et de destination."
}, {
  n: "02",
  t: "Inventaire & douane",
  d: "Inventaire valorisé, listes douanières, carnets ATA et documents de franchise : on prépare un dossier qui passe sans accroc."
}, {
  n: "03",
  t: "Emballage & transport",
  d: "Emballage musée pour le mobilier et les œuvres, transport routier, maritime ou aérien selon la destination."
}, {
  n: "04",
  t: "Livraison & installation",
  d: "Dédouanement à l'arrivée, livraison à la résidence ou à la chancellerie, déballage et mise en place discrète."
}];
const DIP_WHO = [{
  t: "Ambassades & chancelleries",
  d: "Transfert de résidences d'ambassadeurs, bureaux et mobilier officiel, dans le respect du protocole et des délais d'État."
}, {
  t: "Consulats",
  d: "Déménagement de postes consulaires, archives protégées et matériel sensible, avec confidentialité absolue."
}, {
  t: "Diplomates & familles",
  d: "Mobilité des agents en poste : effets personnels, mobilier, véhicules, dans le cadre de la franchise diplomatique."
}, {
  t: "Organisations internationales",
  d: "ONU, OCDE, UE, OTAN, ONG : déménagements de fonctionnaires internationaux et de bureaux, partout dans le monde."
}];
const DIP_FEATS = [{
  t: "Maîtrise douanière",
  d: "Franchises diplomatiques, carnets ATA, listes valorisées multilingues : un dossier complet qui évite blocages et frais.",
  icon: React.createElement(DI, null, React.createElement("path", {
    d: "M3 7l9-4 9 4-9 4z"
  }), React.createElement("path", {
    d: "M5 11v5c0 1 3 3 7 3s7-2 7-3v-5"
  }))
}, {
  t: "Confidentialité d'État",
  d: "Documents classifiés, valise, mobilier officiel : personnel discret, chaîne sécurisée, aucune fuite d'information.",
  icon: React.createElement(DI, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }), React.createElement("path", {
    d: "M9 11.5l2 2 4-4.5"
  }))
}, {
  t: "Emballage musée",
  d: "Œuvres d'art, objets protocolaires, mobilier de valeur : caisses sur mesure, mousse technique, assurance valeur déclarée.",
  icon: React.createElement(DI, null, React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "1"
  }), React.createElement("path", {
    d: "M7 16l3.5-4 2.5 3 2-2.5 2 3.5"
  }), React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "1.3"
  }))
}, {
  t: "Logistique mondiale",
  d: "Routier, maritime, aérien : on achemine vers et depuis n'importe quelle capitale, avec correspondants locaux de confiance.",
  icon: React.createElement(DI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"
  }))
}, {
  t: "Interlocuteur dédié",
  d: "Un chef de projet unique, joignable, multilingue, qui coordonne tout — du protocole au dernier carton.",
  icon: React.createElement(DI, null, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-8 0v2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))
}, {
  t: "Délais d'État tenus",
  d: "Prise de poste, fin de mission, événement officiel : on s'aligne sur votre calendrier, sans approximation.",
  icon: React.createElement(DI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3.5 2"
  }))
}];
function DipHero() {
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
  }, "/"), React.createElement("span", null, "D\xE9m\xE9nagement diplomatique")), React.createElement("h1", null, "D\xE9m\xE9nagement diplomatique, ", React.createElement("em", null, "au millim\xE8tre du protocole.")), React.createElement("p", {
    className: "lede"
  }, "Des consulats de Nice aux missions de Monaco, jusqu'aux ambassades du monde entier : franchise douani\xE8re, confidentialit\xE9 d'\xC9tat et emballage mus\xE9e. On d\xE9m\xE9nage la diplomatie comme elle l'exige. ", React.createElement("span", {
    className: "ast"
  }, "*"), "De la C\xF4te d'Azur vers le monde, en toute discr\xE9tion.")));
}
function DipIntro() {
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
  }, "*"), " D\xE9m\xE9nagement diplomatique \xE0 Nice & Monaco"), React.createElement("p", {
    className: "lead"
  }, "La C\xF4te d'Azur est une terre diplomatique \xE0 part. ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Nice"), " abrite l'un des plus importants corps consulaires de France, avec des consulats de dizaines de pays, et la Principaut\xE9 de ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Monaco"), " concentre missions, consulats et organisations internationales. On conna\xEEt ce terrain, ses exigences protocolaires et sa discr\xE9tion, et on d\xE9m\xE9nage pour lui comme pour n'importe quelle capitale du monde."), React.createElement("p", null, "Prise de poste d'un consul \xE0 Nice, fin de mission d'un diplomate \xE0 Monaco, transfert de r\xE9sidence d'un fonctionnaire international, mutation vers une ambassade \xE0 l'\xE9tranger : franchise douani\xE8re, inventaire valoris\xE9 multilingue, emballage mus\xE9e et confidentialit\xE9 d'\xC9tat. Un chef de projet unique coordonne tout, du protocole au dernier carton."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis confidentiel sous 24h", React.createElement("span", {
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
  }, "Notre terrain diplomatique"), React.createElement("div", {
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
  }, "Nice"), " \xB7 l'un des plus grands corps consulaires de France"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Monaco"), " \xB7 missions, consulats et organisations"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Douane"), " \xB7 franchise diplomatique, carnets ATA"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Confidentialit\xE9"), " \xB7 personnel discret, cha\xEEne s\xE9curis\xE9e"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Port\xE9e"), " \xB7 de la C\xF4te d'Azur vers le monde")), React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, "Voir aussi le ", React.createElement("a", {
    href: "Militaire",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "d\xE9m\xE9nagement militaire"), " et la ", React.createElement("a", {
    href: "Mutations",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "mutation professionnelle"), "."))))));
}
function DipWho() {
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
  }, "*"), " Nos clients diplomatiques")), React.createElement("h2", {
    className: "dim-em"
  }, "Du corps diplomatique", React.createElement("br", null), React.createElement("em", null, "aux institutions internationales."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, DIP_WHO.map((w, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, w.t), React.createElement("div", {
    className: "ap-value-d"
  }, w.d))))));
}
function DipSteps() {
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
  }, "*"), " Notre processus")), React.createElement("h2", {
    className: "dim-em"
  }, "Un d\xE9m\xE9nagement d'\xC9tat,", React.createElement("br", null), React.createElement("em", null, "orchestr\xE9 comme une mission."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, DIP_STEPS.map((s, i) => React.createElement("div", {
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
function DipFeats() {
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
  }, "*"), " Notre expertise")), React.createElement("h2", {
    className: "dim-em"
  }, "Le niveau d'exigence", React.createElement("br", null), React.createElement("em", null, "que la fonction impose."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, DIP_FEATS.map((f, i) => React.createElement("div", {
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
function DipCTA() {
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
  }, "Une mission diplomatique \xE0 d\xE9m\xE9nager ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "En toute discr\xE9tion.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "D\xE9crivez le poste, l'origine et la destination \u2014 un chef de projet d\xE9di\xE9 vous r\xE9pond sous 24h."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(DipHero, null), React.createElement(DipIntro, null), React.createElement(DipWho, null), React.createElement(DipSteps, null), React.createElement(DipFeats, null), React.createElement(DipCTA, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { DipHero, DipIntro, DipWho, DipSteps, DipFeats, DipCTA, App }); } catch (e) {}
})();
