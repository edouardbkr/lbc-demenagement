/* 404-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function NotFound() {
  React.useEffect(() => {
    const truck = document.querySelector(".nf-truck");
    if (!truck) return;
    let raf,
      t0 = null;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const loop = ts => {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 4200 % 1;
      const x = -160 + t * (window.innerWidth + 320);
      truck.style.transform = "translateX(" + x.toFixed(0) + "px)";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return React.createElement("section", {
    className: "nf"
  }, React.createElement("div", {
    className: "nf-road"
  }, React.createElement("div", {
    className: "nf-line"
  }), React.createElement("div", {
    className: "nf-truck"
  }, React.createElement("svg", {
    viewBox: "0 0 320 132",
    width: "230",
    fill: "none",
    stroke: "#EFE5CD",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "12",
    y: "20",
    width: "186",
    height: "72",
    rx: "6",
    fill: "rgba(239,229,205,0.05)"
  }), React.createElement("text", {
    x: "105",
    y: "58",
    fontFamily: "Newsreader, serif",
    fontSize: "34",
    fontWeight: "700",
    fill: "#EFE5CD",
    stroke: "none",
    textAnchor: "middle"
  }, "LBC", React.createElement("tspan", {
    fill: "#D75B3D"
  }, "*")), React.createElement("text", {
    x: "106",
    y: "78",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11",
    fontWeight: "700",
    letterSpacing: "3",
    fill: "#D75B3D",
    stroke: "none",
    textAnchor: "middle"
  }, "D\xC9M\xC9NAGEMENT"), React.createElement("path", {
    d: "M198 92 V46 Q198 40 204 40 H266 L296 64 H306 Q312 64 312 70 V92 Z",
    fill: "rgba(239,229,205,0.05)"
  }), React.createElement("rect", {
    x: "208",
    y: "48",
    width: "44",
    height: "26",
    rx: "4",
    fill: "#D8E4EA",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "70",
    cy: "104",
    r: "15",
    fill: "#15293A"
  }), React.createElement("circle", {
    cx: "70",
    cy: "104",
    r: "5",
    fill: "#D75B3D",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "258",
    cy: "104",
    r: "15",
    fill: "#15293A"
  }), React.createElement("circle", {
    cx: "258",
    cy: "104",
    r: "5",
    fill: "#D75B3D",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "309",
    cy: "72",
    r: "2.6",
    fill: "#D75B3D",
    stroke: "none"
  })))), React.createElement("div", {
    className: "wrap nf-inner"
  }, React.createElement("div", {
    className: "nf-eyebrow"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Erreur 404"), React.createElement("div", {
    className: "nf-big"
  }, React.createElement("span", {
    className: "nf-4"
  }, "4"), React.createElement("span", {
    className: "nf-box"
  }, React.createElement("img", {
    src: "assets/lbc-mascot-sm.png",
    alt: ""
  })), React.createElement("span", {
    className: "nf-4"
  }, "4")), React.createElement("h1", {
    className: "nf-title"
  }, "Cette page a ", React.createElement("em", null, "d\xE9m\xE9nag\xE9.")), React.createElement("p", {
    className: "nf-sub"
  }, "On a bien cherch\xE9 dans tous les cartons\u2026 introuvable. Mais pas de panique : on sait exactement o\xF9 vous ramener."), React.createElement("div", {
    className: "nf-ctas"
  }, React.createElement("a", {
    href: "Les Bras Cass\xE9s.html",
    className: "btn btn-primary"
  }, "Retour \xE0 l'accueil", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Devis.html",
    className: "btn btn-ghost"
  }, "Demander un devis")), React.createElement("div", {
    className: "nf-links"
  }, React.createElement("a", {
    href: "Formules.html"
  }, "Formules"), React.createElement("span", null, "\xB7"), React.createElement("a", {
    href: "Stockage.html"
  }, "Stockage"), React.createElement("span", null, "\xB7"), React.createElement("a", {
    href: "Checklist.html"
  }, "Checklist"), React.createElement("span", null, "\xB7"), React.createElement("a", {
    href: "Contact.html"
  }, "Contact"))));
}
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(NotFound, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { NotFound, App }); } catch (e) {}
})();
