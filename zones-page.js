/* zones-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function ZonesHero() {
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
  }, "/"), React.createElement("span", null, "Zones desservies")), React.createElement("h1", null, "O\xF9 l'on ", React.createElement("em", null, "d\xE9m\xE9nage.")), React.createElement("p", {
    className: "lede"
  }, "Bas\xE9s \xE0 Nice, on intervient dans toute la C\xF4te d'Azur, la r\xE9gion PACA et partout en France pour les longues distances. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Chaque ville, sa page, ses sp\xE9cificit\xE9s.")));
}
function CityColumns({
  title,
  sub,
  region
}) {
  const list = Object.keys(CITIES).map(s => CITIES[s]).filter(c => c.region === region);
  return React.createElement("section", {
    className: "sec",
    style: region === "france" ? {
      background: 'var(--paper-2)'
    } : null
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", sub)), React.createElement("h2", {
    className: "dim-em"
  }, title)), React.createElement("div", {
    className: "seo-cities reveal",
    style: {
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: '0 32px'
    }
  }, list.map((c, i) => React.createElement("a", {
    key: i,
    href: c.file,
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--ink)',
      padding: '20px 0',
      borderBottom: '1px solid var(--rule)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement("span", null, "D\xE9m\xE9nagement ", c.name), React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontFamily: 'var(--sans)',
      fontSize: 18
    }
  }, "\u2192"))))));
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
  }, "Votre ville n'est pas list\xE9e ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Demandez quand m\xEAme.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "On d\xE9m\xE9nage partout en France au d\xE9part ou \xE0 destination de la C\xF4te d'Azur."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(ZonesHero, null), React.createElement(CityColumns, {
    region: "cote",
    sub: "C\xF4te d'Azur \xB7 PACA",
    title: React.createElement(React.Fragment, null, "24 villes de la Riviera,", React.createElement("br", null), React.createElement("em", null, "une \xE9quipe qui conna\xEEt le terrain."))
  }), React.createElement(CityColumns, {
    region: "france",
    sub: "Longue distance",
    title: React.createElement(React.Fragment, null, "Et partout en France,", React.createElement("br", null), React.createElement("em", null, "au d\xE9part de Nice."))
  }), React.createElement(QuoteBand, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { ZonesHero, CityColumns, QuoteBand, App }); } catch (e) {}
})();
