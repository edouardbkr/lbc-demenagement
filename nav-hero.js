/* nav-hero.jsx — compilé par build.js, ne pas éditer */
(function () {
function Hero({
  headlineVariant
}) {
  const headlines = {
    a: {
      l1: React.createElement(React.Fragment, null, React.createElement("span", {
        className: "asterisk",
        style: {
          fontFamily: "\"DM Sans\""
        }
      }, "*"), "Les Bras ", React.createElement("span", {
        className: "break-word"
      }, React.createElement("span", {
        className: "sr-only"
      }, "Cass\xE9s?"), React.createElement("span", {
        className: "bw bw-top",
        "aria-hidden": "true"
      }, "Cass\xE9s?"), React.createElement("span", {
        className: "bw bw-bot",
        "aria-hidden": "true"
      }, "Cass\xE9s?"), React.createElement("span", {
        className: "bw-crack",
        "aria-hidden": "true"
      }))),
      l2: React.createElement(React.Fragment, null, React.createElement("em", {
        style: {
          opacity: "0.8",
          fontFamily: "Newsreader",
          fontSize: "clamp(38px, 11vw, 90px)"
        }
      }, "S\xFBrement pas vos affaires.")),
      scribble: "promis."
    },
    b: {
      l1: "Notre nom vous fait sourire.",
      l2: React.createElement(React.Fragment, null, "Notre service vous fera ", React.createElement("em", null, "confiance.")),
      scribble: "pour de vrai."
    }
  };
  const h = headlines[headlineVariant] || headlines.a;
  const heroVideoRef = React.useRef(null);
  const [source, setSource] = React.useState(null);
  React.useEffect(() => {
    const sobre = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const co = navigator.connection || {};
    const reseauFaible = co.saveData === true || /2g/.test(co.effectiveType || "");
    if (sobre || reseauFaible) return;
    const petitEcran = window.matchMedia("(max-width: 900px)").matches;
    const fichier = petitEcran ? "assets/hero-video-mobile.mp4" : "assets/hero-video.mp4";
    const lancer = () => setSource(fichier);
    if (document.readyState === "complete") setTimeout(lancer, 200);else window.addEventListener("load", () => setTimeout(lancer, 200), {
      once: true
    });
  }, []);
  React.useEffect(() => {
    const v = heroVideoRef.current;
    if (v) {
      v.muted = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [source]);
  return React.createElement("section", {
    className: "hero",
    id: "top",
    style: {
      paddingTop: "16px"
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      paddingTop: "20px"
    }
  }, React.createElement("div", {
    className: "hero-meta reveal"
  }, React.createElement("span", {
    className: "pill pill-live"
  }, React.createElement("span", {
    className: "dot"
  }), "D\xE9m\xE9nageurs \xE0 Nice"), React.createElement("span", {
    className: "pill"
  }, React.createElement("svg", {
    className: "pill-ic",
    viewBox: "0 0 24 24",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), "PACA \xB7 Toute la France")), React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement("h1", {
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, h.l1, React.createElement("span", {
    className: "l2",
    style: {
      opacity: "0.8",
      fontFamily: "Newsreader"
    }
  }, h.l2, React.createElement("span", {
    className: "scribble"
  }, h.scribble))), React.createElement("div", {
    className: "hero-ctas"
  }, React.createElement("a", {
    href: "Formules",
    className: "btn btn-primary hero-cta-link"
  }, "Trouver ma formule id\xE9ale", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), React.createElement("div", {
    className: "hero-photo reveal"
  }, React.createElement("div", {
    className: "scribble"
  }, React.createElement("br", null)), React.createElement("div", {
    className: "hero-photo-frame"
  }, source ? React.createElement("video", {
    ref: heroVideoRef,
    className: "hero-video",
    src: source,
    poster: "assets/hero-poster.jpg",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none",
    "aria-label": "LBC D\xE9m\xE9nagement en intervention",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : React.createElement("img", {
    className: "hero-video",
    src: "assets/hero-poster.jpg",
    alt: "D\xE9m\xE9nageurs LBC prot\xE9geant un canap\xE9 avant transport",
    width: "960",
    height: "540",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), React.createElement(MarqueeBar, null), React.createElement(Estimator, null)));
}
Object.assign(window, {
  Hero
});
  try { Object.assign(window, { Hero }); } catch (e) {}
})();
