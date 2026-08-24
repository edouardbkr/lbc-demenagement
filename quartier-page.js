/* quartier-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function slugQuartier() {
  return document.body && document.body.dataset && document.body.dataset.quartier || "vieux-nice";
}
function QHero({
  q
}) {
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
  }, "/"), React.createElement("a", {
    href: "Demenagement-Nice"
  }, "D\xE9m\xE9nagement Nice"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, q.nom)), React.createElement("h1", null, "D\xE9m\xE9nagement ", React.createElement("em", null, q.nom)), React.createElement("p", {
    className: "lede"
  }, q.accroche), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 22
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis gratuit sous 24h", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"))));
}
function QIntro({
  q
}) {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 01 / Le quartier")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce que \xE7a change, ", React.createElement("em", null, "concr\xE8tement."))), React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 780
    }
  }, q.intro)));
}
function QContraintes({
  q
}) {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 02 / Les contraintes r\xE9elles")), React.createElement("h2", {
    className: "dim-em"
  }, "Les quatre points ", React.createElement("em", null, "qui font la diff\xE9rence."))), React.createElement("div", {
    className: "about-trust reveal-stagger",
    style: {
      display: 'grid',
      gap: 18
    }
  }, q.contraintes.map((c, i) => React.createElement("div", {
    key: i,
    style: {
      padding: '18px 20px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 17
    }
  }, c.t), React.createElement("p", {
    style: {
      margin: 0,
      opacity: 0.85
    }
  }, c.d))))));
}
function QStationnement({
  q
}) {
  const a = AOT[q.aot] || AOT.standard;
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 03 / L'autorisation de stationnement")), React.createElement("h2", {
    className: "dim-em"
  }, "La d\xE9marche mairie, ", React.createElement("em", null, "sans mauvaise surprise."))), React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 780
    }
  }, "R\xE9server un emplacement pour le camion n'est pas une formalit\xE9 facultative : sans autorisation, l'amende tombe et la place n'est pas libre le jour J. \xC0 Nice, le service comp\xE9tent et le d\xE9lai d\xE9pendent de ce que vous occupez."), React.createElement("div", {
    style: {
      marginTop: 22,
      padding: '20px 22px',
      borderRadius: 14,
      background: 'rgba(215,91,61,0.10)',
      border: '1px solid rgba(215,91,61,0.25)',
      maxWidth: 780
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 6
    }
  }, "Cas le plus courant \xE0 ", q.nom), React.createElement("p", {
    style: {
      margin: '0 0 10px'
    }
  }, a.libelle), React.createElement("p", {
    style: {
      margin: 0
    }
  }, React.createElement("strong", null, "D\xE9lai minimum : ", a.delai), " avant la date du d\xE9m\xE9nagement.", React.createElement("br", null), "Service de la Ville de Nice : ", React.createElement("strong", null, a.tel))), React.createElement("ul", {
    className: "about-trust",
    style: {
      marginTop: 20,
      maxWidth: 780
    }
  }, React.createElement("li", null, React.createElement("span", null, "La signalisation r\xE9glementaire ", React.createElement("strong", null, "n'est pas fournie par la Ville"), " : elle se loue et se pose selon les consignes. Nous nous en chargeons.")), React.createElement("li", null, React.createElement("span", null, "En zone pi\xE9tonne, l'autorisation ne suffit pas : il faut aussi ", React.createElement("strong", null, "appeler le centre de s\xE9curit\xE9 le jour J"), " pour faire abaisser les bornes.")), React.createElement("li", null, React.createElement("span", null, "Nous d\xE9posons la demande pour vous d\xE8s que la date est fix\xE9e, ce qui \xE9vite les refus pour d\xE9lai trop court.")))));
}
function QMethode({
  q
}) {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 04 / Notre m\xE9thode ici")), React.createElement("h2", {
    className: "dim-em"
  }, "Comment on s'y prend ", React.createElement("em", null, "\xE0 ", q.nom, "."))), React.createElement("ol", {
    style: {
      maxWidth: 780,
      lineHeight: 1.75,
      paddingLeft: 20
    }
  }, q.methode.map((m, i) => React.createElement("li", {
    key: i,
    style: {
      marginBottom: 10
    }
  }, m)))));
}
function QFaq({
  q
}) {
  const [open, setOpen] = React.useState(0);
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 05 / Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qu'on nous demande ", React.createElement("em", null, "le plus souvent."))), React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, q.faq.map((f, i) => React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      padding: '16px 0'
    }
  }, React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      width: '100%',
      fontWeight: 700,
      fontSize: 17
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, open === i ? '−' : '+'), f.q), open === i && React.createElement("p", {
    style: {
      margin: '10px 0 0 24px',
      opacity: 0.88
    }
  }, f.a))))));
}
function QProches({
  q
}) {
  const autres = (q.proches || []).map(s => QUARTIERS[s]).filter(Boolean);
  if (!autres.length) return null;
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 06 / \xC0 c\xF4t\xE9")), React.createElement("h2", {
    className: "dim-em"
  }, "Les quartiers ", React.createElement("em", null, "voisins."))), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, autres.map((a, i) => React.createElement("a", {
    key: i,
    href: a.url,
    className: "btn btn-ghost"
  }, "D\xE9m\xE9nagement ", a.nom, React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), React.createElement("a", {
    href: "Demenagement-Nice",
    className: "btn btn-ghost"
  }, "D\xE9m\xE9nagement Nice", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}
function QBandeau({
  q
}) {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    style: {
      padding: '34px 30px',
      borderRadius: 18,
      background: 'rgba(215,91,61,0.10)',
      border: '1px solid rgba(215,91,61,0.25)',
      textAlign: 'center'
    }
  }, React.createElement("h2", {
    style: {
      margin: '0 0 10px'
    }
  }, "Un d\xE9m\xE9nagement \xE0 ", q.nom, " ?"), React.createElement("p", {
    style: {
      margin: '0 0 20px',
      opacity: 0.88,
      maxWidth: 620,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "On rep\xE8re l'acc\xE8s, on d\xE9pose la demande de stationnement pour vous, et on vous donne un prix ferme sous 24 heures. Gratuit et sans engagement."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Demander mon devis", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77")))));
}
function App() {
  useScrollReveal();
  const q = getQuartier(slugQuartier());
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(QHero, {
    q: q
  }), React.createElement(QIntro, {
    q: q
  }), React.createElement(QContraintes, {
    q: q
  }), React.createElement(QStationnement, {
    q: q
  }), React.createElement(QMethode, {
    q: q
  }), React.createElement(QFaq, {
    q: q
  }), React.createElement(QProches, {
    q: q
  }), React.createElement(PreuveVille, {
    ville: q ? "à " + q.nom : ""
  }), React.createElement(QBandeau, {
    q: q
  }), React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "devis-hero-form"
  }, React.createElement(QuickQuote, null))))), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { slugQuartier, QHero, QIntro, QContraintes, QStationnement, QMethode, QFaq, QProches, QBandeau, App }); } catch (e) {}
})();
