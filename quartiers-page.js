/* quartiers-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const QUARTIERS = [{
  ville: "Nice",
  nom: "Le Carré d'Or",
  file: "Demenagement-Nice.html",
  desc: "Le triangle chic de Nice, entre Masséna et la Promenade : immeubles bourgeois, boutiques de luxe, plafonds hauts.",
  defi: "Façades classées, ascenseurs anciens trop petits pour les meubles : le monte-meuble par la fenêtre est souvent la solution."
}, {
  ville: "Nice",
  nom: "Cimiez",
  file: "Demenagement-Nice.html",
  desc: "La colline aristocratique de Nice, ses palais Belle Époque, ses musées et ses villas sous les oliviers.",
  defi: "Accès en lacets, grandes demeures, mobilier ancien et œuvres d'art : protection renforcée et main experte."
}, {
  ville: "Cannes",
  nom: "Le Suquet",
  file: "Demenagement-Cannes.html",
  desc: "Le vieux Cannes perché, ses ruelles en escaliers et sa vue sur la baie depuis le clocher.",
  defi: "Camion impossible jusqu'à la porte : portage à dos dans les escaliers et monte-meuble pour les volumes."
}, {
  ville: "Monaco",
  nom: "Monte-Carlo",
  file: "Demenagement-Monaco.html",
  desc: "L'adresse la plus prestigieuse de la Riviera : tours résidentielles, palaces, mobilier d'exception.",
  defi: "Créneaux de régie, ascenseurs à réserver, discrétion absolue et assurance en valeur déclarée."
}, {
  ville: "Antibes",
  nom: "Le Cap d'Antibes",
  file: "Demenagement-Antibes.html",
  desc: "Presqu'île de villas mythiques entre pins et mer, l'une des adresses les plus rares de la côte.",
  defi: "Propriétés fermées, allées privées, biens de grande valeur : intervention sur mesure et confidentielle."
}, {
  ville: "Cagnes-sur-Mer",
  nom: "Le Haut-de-Cagnes",
  file: "Demenagement-Cagnes-sur-Mer.html",
  desc: "Village médiéval en colimaçon autour de son château, pavés et ruelles d'artistes suspendues.",
  defi: "Dédale pavé inaccessible aux camions : navette en petit véhicule, portage et monte-meuble."
}];
function QHero() {
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
  }, "/"), React.createElement("span", null, "Quartiers d'exception")), React.createElement("h1", null, "Les quartiers qui ne se d\xE9m\xE9nagent ", React.createElement("em", null, "pas comme les autres.")), React.createElement("p", {
    className: "lede"
  }, "Vieille ville pav\xE9e, colline bourgeoise, presqu'\xEEle de villas : la C\xF4te d'Azur regorge d'adresses magnifiques\u2026 et redoutables pour un d\xE9m\xE9nageur. On les conna\xEEt par c\u0153ur. ", React.createElement("span", {
    className: "ast"
  }, "*"), "\xC0 commencer par le Vieux-Nice.")));
}
function QVieuxNice() {
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
  }, "*"), " Le quartier embl\xE8me \xB7 Vieux-Nice"), React.createElement("p", {
    className: "lead"
  }, "Le ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Vieux-Nice"), ", c'est le c\u0153ur battant de la ville : un lacis de ruelles pi\xE9tonnes, de placettes et d'escaliers, du cours Saleya \xE0 la place Rossetti, o\xF9 aucun camion ne s'aventure."), React.createElement("p", null, "D\xE9m\xE9nager ici ne s'improvise pas. On r\xE9serve l'emplacement au plus pr\xE8s des acc\xE8s autoris\xE9s, on prot\xE8ge les passages, et on porte \u2014 parfois sur plusieurs dizaines de m\xE8tres et quelques \xE9tages sans ascenseur. Pour les pianos, armoires et canap\xE9s, le ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "monte-meuble par la fa\xE7ade"), " fait gagner des heures et \xE9vite la casse."), React.createElement("p", null, "March\xE9 du cours Saleya le matin, terrasses l'apr\xE8s-midi, festivit\xE9s le soir : on cale aussi votre d\xE9m\xE9nagement sur les bons cr\xE9neaux pour ne pas se retrouver coinc\xE9s derri\xE8re les \xE9tals."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Demenagement-Nice.html",
    className: "btn btn-primary"
  }, "D\xE9m\xE9nagement \xE0 Nice", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Devis.html",
    className: "btn btn-ghost"
  }, "Devis gratuit"))), React.createElement("div", {
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
  }, "Vieux-Nice \xB7 ce qu'on anticipe"), React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontSize: 15,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Ruelles pi\xE9tonnes"), " \u2014 emplacement r\xE9serv\xE9 au plus pr\xE8s, portage ma\xEEtris\xE9."), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "\xC9tages sans ascenseur"), " \u2014 monte-meuble par la fen\xEAtre quand il le faut."), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "March\xE9 & affluence"), " \u2014 cr\xE9neaux choisis hors cours Saleya anim\xE9."), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Immeubles anciens"), " \u2014 protection des parties communes et des escaliers.")))))));
}
function QGrid() {
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
  }, "*"), " Autres quartiers d'exception")), React.createElement("h2", {
    className: "dim-em"
  }, "Du Carr\xE9 d'Or au Haut-de-Cagnes,", React.createElement("br", null), React.createElement("em", null, "chacun son d\xE9fi."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(3,1fr)'
    }
  }, QUARTIERS.map((q, i) => React.createElement("a", {
    className: "ap-value q-card",
    key: i,
    href: q.file,
    style: {
      textDecoration: 'none'
    }
  }, React.createElement("div", {
    className: "q-ville"
  }, q.ville), React.createElement("div", {
    className: "ap-value-t"
  }, q.nom), React.createElement("div", {
    className: "ap-value-d"
  }, q.desc), React.createElement("div", {
    className: "q-defi"
  }, React.createElement("span", {
    className: "q-defi-tag"
  }, "Le d\xE9fi"), " ", q.defi))))));
}
function QWhy() {
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
  }, "*"), " Pourquoi un sp\xE9cialiste")), React.createElement("h2", {
    className: "dim-em"
  }, "Ces adresses-l\xE0", React.createElement("br", null), React.createElement("em", null, "ne pardonnent pas l'amateurisme."))), React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: '64ch',
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--ink-2)'
    }
  }, React.createElement("p", null, "Ruelles o\xF9 le camion ne passe pas, escaliers \xE9troits, immeubles class\xE9s, mobilier de grande valeur, cr\xE9neaux de stationnement minut\xE9s : les plus beaux quartiers de la C\xF4te d'Azur sont aussi les plus techniques. Une \xE9quipe non pr\xE9par\xE9e, c'est des heures perdues, une amende \u2014 ou un meuble ab\xEEm\xE9."), React.createElement("p", {
    style: {
      marginTop: 18,
      color: 'var(--ink)'
    }
  }, React.createElement("strong", null, "Nous, on rep\xE8re, on anticipe et on pr\xE9voit le bon mat\xE9riel d\xE8s le devis"), " : monte-meuble, autorisations de voirie, protection sur mesure et \xE9quipe \xE0 la hauteur de l'adresse."))));
}
function QCTA() {
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
  }, "Une adresse pas comme les autres ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "On adore \xE7a.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Dites-nous le quartier et l'\xE9tage \u2014 on pr\xE9voit le monte-meuble et les autorisations d\xE8s le devis."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(QHero, null), React.createElement(QVieuxNice, null), React.createElement(QGrid, null), React.createElement(QWhy, null), React.createElement(QCTA, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { QHero, QVieuxNice, QGrid, QWhy, QCTA, App }); } catch (e) {}
})();
