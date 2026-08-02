/* route-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const LD_PROCESS = [{
  n: "01",
  t: "Devis & date",
  d: "On chiffre volume et distance, on bloque une date de chargement et une fenêtre de livraison réaliste."
}, {
  n: "02",
  t: "Chargement soigné",
  d: "Emballage, protection intégrale et calage : rien ne bouge sur la route."
}, {
  n: "03",
  t: "Transport direct",
  d: "Une seule équipe, un camion dédié et plombé. Pas de groupage, pas de transbordement."
}, {
  n: "04",
  t: "Livraison & installation",
  d: "À l'arrivée, on décharge, on remonte et on installe. Vous récupérez un logement prêt."
}];
function RHero({
  r
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
  }, "/"), React.createElement("span", null, r.intl ? "International" : "Longue distance")), React.createElement("h1", null, "D\xE9m\xE9nagement ", React.createElement("em", null, r.from, " \u2192 ", r.to)), React.createElement("p", {
    className: "lede",
    style: {
      padding: "10px 0"
    }
  }, r.lede), React.createElement("div", {
    className: "route-stats"
  }, React.createElement("div", {
    className: "route-stat"
  }, React.createElement("span", {
    className: "rs-n"
  }, r.km), React.createElement("span", {
    className: "rs-l"
  }, "Distance")), React.createElement("div", {
    className: "route-stat"
  }, React.createElement("span", {
    className: "rs-n"
  }, r.duree), React.createElement("span", {
    className: "rs-l"
  }, "Trajet")), React.createElement("div", {
    className: "route-stat"
  }, React.createElement("span", {
    className: "rs-n"
  }, r.pays), React.createElement("span", {
    className: "rs-l"
  }, r.intl ? "Destination" : "France")), React.createElement("div", {
    className: "route-stat"
  }, React.createElement("span", {
    className: "rs-n"
  }, "24h"), React.createElement("span", {
    className: "rs-l"
  }, "Devis"))), React.createElement("div", {
    className: "devis-hero-form",
    style: {
      marginTop: 30
    }
  }, React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function RIntro({
  r
}) {
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
  }, "*"), " Le trajet ", r.from, " \u2192 ", r.to), React.createElement("p", {
    className: "lead"
  }, r.intro), React.createElement("p", null, "Quelle que soit la formule \u2014 ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Coup de main, Mains libres ou Mains dans les poches"), " \u2014 des d\xE9m\xE9nageurs exp\xE9riment\xE9s et soigneux, une assurance compl\xE8te et un devis clair et d\xE9finitif. ", r.intl ? "À l'international comme en France, " : "", "le nom est la blague : le travail, lui, est s\xE9rieux."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis ", r.from, " \u2192 ", r.to, React.createElement("span", {
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
  }, r.from, " \u2192 ", r.to, " en bref"), React.createElement("div", {
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
  }, "Distance"), " \xB7 ", r.km), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Dur\xE9e de route"), " \xB7 ", r.duree), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Destination"), " \xB7 ", r.to, " (", r.pays, ")"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Type"), " \xB7 ", r.intl ? "Déménagement international" : "Longue distance France"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Devis"), " \xB7 gratuit sous 24h")), r.intl && React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, React.createElement("strong", {
    style: {
      color: 'var(--accent)'
    }
  }, "International"), " \u2014 inventaire valoris\xE9 et formalit\xE9s pr\xE9par\xE9s avec vous."))))));
}
function RDeep({
  r
}) {
  if (!r.deep || !r.deep.length) return null;
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
  }, "*"), " ", r.to, " en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "Arriver \xE0 ", r.to, ",", React.createElement("br", null), React.createElement("em", null, "on sait \xE0 quoi s'attendre."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(' + Math.min(r.deep.length, 2) + ',1fr)'
    }
  }, r.deep.map((d, i) => React.createElement("div", {
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
function RPoints({
  r
}) {
  return React.createElement("section", {
    className: "sec testimonials"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Notre expertise sur ce trajet")), React.createElement("h2", {
    className: "dim-em"
  }, r.from, " \u2192 ", r.to, ",", React.createElement("br", null), React.createElement("em", null, "on conna\xEEt la route et l'arriv\xE9e."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, r.points.map((p, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 0", i + 1), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, p.t), React.createElement("div", {
    className: "value-body"
  }, p.d))), React.createElement("div", {
    className: "value"
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 DEVIS"), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, "R\xE9ponse sous 24h"), React.createElement("div", {
    className: "value-body"
  }, "Gratuit, transport compris, prix ferme pour votre ", r.from, " \u2192 ", r.to, ".")))));
}
function RProcess() {
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
  }, "La distance ne change rien", React.createElement("br", null), React.createElement("em", null, "au soin qu'on met dans vos cartons."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, LD_PROCESS.map((s, i) => React.createElement("div", {
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
function RFaq({
  r
}) {
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
  }, r.from, " \u2192 ", r.to, ",", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, r.faq.map((f, i) => React.createElement("div", {
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
function RCTA({
  r
}) {
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
  }, r.from, " \u2192 ", r.to, " ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Chiffrons le trajet.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Deux adresses, une surface \u2014 r\xE9ponse gratuite sous 24h, transport compris."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function RouteMap({
  r
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const trigger = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82 && rect.bottom > 0) {
        done = true;
        el.classList.add("is-drawn");
        const pathEl = el.querySelector(".route-line");
        const truck = el.querySelector(".rm-truck");
        if (pathEl && truck && pathEl.getPointAtLength) {
          const len = pathEl.getTotalLength();
          const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          const tk = window.innerWidth <= 560 ? 1.7 : 1;
          const place = pt => truck.setAttribute("transform", "translate(" + pt.x.toFixed(1) + "," + pt.y.toFixed(1) + ") scale(" + tk + ")");
          if (reduce) {
            place(pathEl.getPointAtLength(len));
            truck.classList.add("rm-arrived");
          } else {
            const dur = 7000;
            let t0 = null;
            const ease = x => 1 - Math.pow(1 - x, 3);
            const frame = ts => {
              if (!t0) t0 = ts;
              const p = Math.min(1, (ts - t0) / dur);
              place(pathEl.getPointAtLength(ease(p) * len));
              if (p < 1) {
                requestAnimationFrame(frame);
              } else {
                truck.classList.add("rm-arrived");
              }
            };
            requestAnimationFrame(frame);
          }
        }
        window.removeEventListener("scroll", trigger);
      }
    };
    window.addEventListener("scroll", trigger, {
      passive: true
    });
    trigger();
    const t = setTimeout(trigger, 400);
    return () => {
      window.removeEventListener("scroll", trigger);
      clearTimeout(t);
    };
  }, []);
  const D = "M52,118 C190,44 300,150 450,92 C530,60 576,66 596,56";
  return React.createElement("section", {
    className: "sec route-map-sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " L'itin\xE9raire")), React.createElement("h2", {
    className: "dim-em"
  }, r.from, " \u2192 ", r.to, ",", React.createElement("br", null), React.createElement("em", null, "d'un bout \xE0 l'autre, sans transbordement."))), React.createElement("div", {
    className: "route-map reveal",
    ref: ref
  }, React.createElement("svg", {
    viewBox: "0 0 640 170",
    className: "route-map-svg",
    fill: "none"
  }, React.createElement("defs", null, React.createElement("clipPath", {
    id: "rmCabWin"
  }, React.createElement("rect", {
    x: "232",
    y: "54",
    width: "60",
    height: "42",
    rx: "6"
  }))), React.createElement("path", {
    className: "route-line",
    d: D,
    stroke: "#D75B3D",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeDasharray: "0.5 12"
  }), React.createElement("g", {
    className: "route-pin route-pin-mid",
    style: {
      transitionDelay: ".5s"
    }
  }, React.createElement("circle", {
    cx: "250",
    cy: "96",
    r: "6",
    fill: "#1F3A4B"
  })), React.createElement("g", {
    className: "route-pin route-pin-mid",
    style: {
      transitionDelay: ".8s"
    }
  }, React.createElement("circle", {
    cx: "450",
    cy: "92",
    r: "6",
    fill: "#1F3A4B"
  })), React.createElement("g", {
    className: "route-pin",
    style: {
      transitionDelay: ".2s"
    }
  }, React.createElement("path", {
    d: "M52 118 C42 104 42 97 52 97 C62 97 62 104 52 118 Z",
    fill: "#1F3A4B"
  }), React.createElement("circle", {
    cx: "52",
    cy: "103",
    r: "3.6",
    fill: "#fff"
  }), React.createElement("text", {
    x: "52",
    y: "142",
    textAnchor: "middle",
    className: "route-lbl"
  }, "Nice")), React.createElement("g", {
    className: "route-pin",
    style: {
      transitionDelay: "1.15s"
    }
  }, React.createElement("path", {
    d: "M596 56 C586 42 586 35 596 35 C606 35 606 42 596 56 Z",
    fill: "#D75B3D"
  }), React.createElement("circle", {
    cx: "596",
    cy: "41",
    r: "4",
    fill: "#fff"
  }), React.createElement("text", {
    x: "596",
    y: "26",
    textAnchor: "middle",
    className: "route-lbl route-lbl-dest"
  }, r.to)), React.createElement("g", {
    className: "rm-truck",
    transform: "translate(52,118)"
  }, React.createElement("g", {
    transform: "translate(-41,-30) scale(0.22)"
  }, React.createElement("g", {
    className: "rm-speed",
    stroke: "#D75B3D",
    strokeWidth: "4",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M8 44 H-48"
  }), React.createElement("path", {
    d: "M0 70 H-60"
  }), React.createElement("path", {
    d: "M8 96 H-36"
  })), React.createElement("g", {
    stroke: "#1F3A4B",
    strokeWidth: "4.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }, React.createElement("rect", {
    x: "14",
    y: "20",
    width: "210",
    height: "86",
    rx: "8",
    fill: "#EFE5CD"
  }), React.createElement("path", {
    d: "M224 106 V52 Q224 46 230 46 H300 L330 72 H352 Q360 72 360 80 V106 Z",
    fill: "#EFE5CD"
  }), React.createElement("rect", {
    x: "232",
    y: "54",
    width: "60",
    height: "42",
    rx: "6",
    fill: "#cdd9df"
  })), React.createElement("image", {
    href: "assets/lbc-wordmark-sm.png",
    x: "59",
    y: "32",
    width: "120",
    height: "67",
    preserveAspectRatio: "xMidYMid meet"
  }), React.createElement("image", {
    href: "assets/lbc-mascot-sm.png",
    x: "184",
    y: "20",
    width: "191",
    height: "191",
    clipPath: "url(#rmCabWin)",
    preserveAspectRatio: "xMidYMid slice"
  }), React.createElement("rect", {
    x: "232",
    y: "54",
    width: "60",
    height: "42",
    rx: "6",
    fill: "none",
    stroke: "#1F3A4B",
    strokeWidth: "4.5"
  }), React.createElement("g", {
    stroke: "#1F3A4B",
    strokeWidth: "4.5"
  }, React.createElement("circle", {
    cx: "84",
    cy: "122",
    r: "17",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: "84",
    cy: "122",
    r: "6",
    fill: "#D75B3D",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "306",
    cy: "122",
    r: "17",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: "306",
    cy: "122",
    r: "6",
    fill: "#D75B3D",
    stroke: "none"
  }))))), React.createElement("div", {
    className: "route-map-meta"
  }, React.createElement("span", null, React.createElement("strong", null, r.km), " \xB7 ", r.duree), React.createElement("span", {
    className: "route-map-sep"
  }, "\xB7"), React.createElement("span", null, "Un camion d\xE9di\xE9, une seule \xE9quipe")))));
}
function App() {
  useScrollReveal();
  const slug = document.body.getAttribute('data-route');
  const r = getRoute(slug);
  React.useEffect(() => {
    document.title = "Déménagement " + r.from + " → " + r.to + " · LBC* Les Bras Cassés";
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(RHero, {
    r: r
  }), React.createElement(RouteMap, {
    r: r
  }), React.createElement(RIntro, {
    r: r
  }), React.createElement(RDeep, {
    r: r
  }), React.createElement(RPoints, {
    r: r
  }), React.createElement(RProcess, null), React.createElement(RFaq, {
    r: r
  }), React.createElement(RCTA, {
    r: r
  })), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { RHero, RIntro, RDeep, RPoints, RProcess, RFaq, RCTA, RouteMap, App }); } catch (e) {}
})();
