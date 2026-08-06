/* partenaires-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const PARTENAIRES = [];
function PartenairesHero() {
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
  }, "/"), React.createElement("span", null, "Devenir partenaire")), React.createElement("h1", null, "Vos clients d\xE9m\xE9nagent.", React.createElement("br", null), React.createElement("em", null, "On s'en occupe bien.")), React.createElement("p", {
    className: "lede"
  }, "Box de stockage, agences immobili\xE8res, syndics : vos clients vous demandent r\xE9guli\xE8rement un d\xE9m\xE9nageur. Recommandez-nous, et suivez chaque dossier en direct. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Commission de 10 %, sans palier ni condition de volume."), React.createElement("div", {
    className: "hero-ctas"
  }, React.createElement("a", {
    href: "Contact",
    className: "btn btn-primary"
  }, "Devenir partenaire", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"))));
}
function PartenairesPourquoi() {
  const points = [{
    t: "Votre client passe avant tout",
    d: "Un client venu de chez vous ne vaut pas une prestation, il vaut toutes celles que vous nous enverrez ensuite. On a donc beaucoup plus à perdre qu'à gagner à bâcler un seul chantier. Ce n'est pas une promesse, c'est de l'arithmétique."
  }, {
    t: "Vous engagez votre nom, pas seulement le nôtre",
    d: "Quand vous recommandez un prestataire, c'est votre réputation qui est en jeu. Prix ferme, assurance multirisque incluse, créneau d'arrivée précis, interlocuteur unique : c'est ce à quoi vos clients ont droit, systématiquement."
  }, {
    t: "Vous êtes prévenu avant votre client",
    d: "Si quelque chose se passe mal sur un chantier venu de chez vous, vous l'apprendrez par nous, pas par lui. On vous appelle avant qu'il ne le fasse."
  }];
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
  }, "*"), " 01 / Pourquoi nous")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qui compte d'abord,", React.createElement("br", null), React.createElement("em", null, "c'est votre client."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, points.map((p, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, p.t), React.createElement("div", {
    className: "ap-value-d"
  }, p.d))))));
}
function PartenairesEspace() {
  const etapes = ["Lead reçu", "Client contacté", "Devis envoyé", "Devis accepté, avec le montant", "Déménagement effectué", "Commission versée, avec sa facture"];
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
  }, "*"), " 02 / L'espace partenaire")), React.createElement("h2", {
    className: "dim-em"
  }, "Vous n'avez pas \xE0 nous croire", React.createElement("br", null), React.createElement("em", null, "sur parole. Vous v\xE9rifiez."))), React.createElement("div", {
    className: "about-copy reveal"
  }, React.createElement("p", {
    className: "lead"
  }, "Vous nous envoyez un client en trente secondes depuis votre t\xE9l\xE9phone. Ensuite, vous suivez chaque \xE9tape en temps r\xE9el, sans avoir \xE0 nous relancer."), React.createElement("ul", {
    className: "faq-list reveal",
    style: {
      marginTop: 18
    }
  }, etapes.map((e, i) => React.createElement("li", {
    key: i,
    style: {
      padding: "10px 0",
      listStyle: "none"
    }
  }, React.createElement("span", {
    className: "ast"
  }, "\u2192"), " ", e))), React.createElement("p", null, "S'il refuse, vous le voyez. S'il accepte, vous voyez \xE0 quel prix, et donc quelle commission vous revient, calcul\xE9e automatiquement. Vous exportez l'historique quand vous voulez."))));
}
function PartenairesComment() {
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
  }, "*"), " 03 / Comment \xE7a marche")), React.createElement("h2", {
    className: "dim-em"
  }, "Trois \xE9tapes,", React.createElement("br", null), React.createElement("em", null, "et rien \xE0 avancer."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, React.createElement("div", {
    className: "ap-value"
  }, React.createElement("div", {
    className: "ap-value-t"
  }, "1. Vous nous pr\xE9sentez un client"), React.createElement("div", {
    className: "ap-value-d"
  }, "Par t\xE9l\xE9phone, par message, ou depuis votre espace partenaire. Son nom, son num\xE9ro, sa date approximative suffisent.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("div", {
    className: "ap-value-t"
  }, "2. On s'occupe de tout"), React.createElement("div", {
    className: "ap-value-d"
  }, "Devis d\xE9taill\xE9 sous 24h, prix ferme, assurance incluse. Vous suivez chaque \xE9tape sans intervenir.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("div", {
    className: "ap-value-t"
  }, "3. Vous touchez 10 %"), React.createElement("div", {
    className: "ap-value-d"
  }, "Dix pour cent du montant du d\xE9m\xE9nagement, sans palier ni condition de volume, vers\xE9s apr\xE8s la prestation avec leur facture.")))));
}
function PartenairesListe() {
  if (!PARTENAIRES.length) return null;
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
  }, "*"), " 04 / Ils travaillent avec nous")), React.createElement("h2", {
    className: "dim-em"
  }, "Nos partenaires.")), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, PARTENAIRES.map((p, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, p.site ? React.createElement("a", {
    href: p.site,
    target: "_blank",
    rel: "noopener"
  }, p.nom) : p.nom), React.createElement("div", {
    className: "ap-value-d"
  }, p.ville))))));
}
function PartenairesCta() {
  return React.createElement("section", {
    className: "sec cta-band"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", {
    className: "dim-em"
  }, "On peut passer vous voir", React.createElement("br", null), React.createElement("em", null, "cette semaine.")), React.createElement("p", {
    className: "lede"
  }, "Quinze minutes suffisent pour vous montrer l'outil et vous ouvrir votre espace. Et si vous pr\xE9f\xE9rez attendre, on vous l'ouvre le jour o\xF9 vous avez un premier client \xE0 nous confier."), React.createElement("div", {
    className: "hero-ctas"
  }, React.createElement("a", {
    href: "Contact",
    className: "btn btn-primary"
  }, "Nous \xE9crire", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", {
    id: "contenu",
    tabIndex: "-1"
  }, React.createElement(PartenairesHero, null), React.createElement(PartenairesPourquoi, null), React.createElement(PartenairesEspace, null), React.createElement(PartenairesComment, null), React.createElement(PartenairesListe, null), React.createElement(PartenairesCta, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { PartenairesHero, PartenairesPourquoi, PartenairesEspace, PartenairesComment, PartenairesListe, PartenairesCta, App }); } catch (e) {}
})();
