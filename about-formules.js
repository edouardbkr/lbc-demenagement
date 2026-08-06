/* about-formules.jsx — compilé par build.js, ne pas éditer */
(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function About() {
  const aboutVidRef = React.useRef(null);
  const [source, setSource] = React.useState(null);
  React.useEffect(() => {
    const sobre = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const co = navigator.connection || {};
    const reseauFaible = co.saveData === true || /2g/.test(co.effectiveType || "");
    if (sobre || reseauFaible) return;
    const petitEcran = window.matchMedia("(max-width: 900px)").matches;
    const fichier = petitEcran ? "assets/about-video-mobile.mp4" : "assets/about-video.mp4";
    const lancer = () => setSource(fichier);
    if (document.readyState === "complete") setTimeout(lancer, 400);else window.addEventListener("load", () => setTimeout(lancer, 400), {
      once: true
    });
  }, []);
  React.useEffect(() => {
    const v = aboutVidRef.current;
    if (v) {
      v.muted = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [source]);
  return React.createElement("section", {
    className: "sec about",
    id: "about",
    style: {
      padding: "1px 0px 140px"
    }
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
  }, "*"), " 01 / Qui sommes-nous")), React.createElement("h2", {
    className: "dim-em"
  }, "Un nom qui fait sourire,", React.createElement("br", null), React.createElement("em", null, "un travail qui fait dormir tranquille."))), React.createElement("div", {
    className: "about-grid"
  }, React.createElement("div", {
    className: "about-copy reveal"
  }, React.createElement("p", {
    className: "lead"
  }, "Tout commence par un ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "d\xE9m\xE9nagement rat\xE9"), ". Le n\xF4tre. De cette gal\xE8re est n\xE9e une promesse\xA0: ", React.createElement("em", null, "plus jamais \xE7a.")), React.createElement("p", null, "Fond\xE9e \xE0 Nice par ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Edouard et Anthony"), ", LBC* traite vos affaires comme les siennes. Un devis ferme, du mat\xE9riel pro, et des gens qui savent ce que \xAB\xA0fragile\xA0\xBB veut dire."), React.createElement("p", {
    style: {
      color: 'var(--ink)'
    }
  }, "Le nom est la blague. ", React.createElement("strong", null, "Le travail est s\xE9rieux."), " ", React.createElement("a", {
    href: "Apropos",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "Lire notre histoire \u2192")), React.createElement("ul", {
    className: "about-trust reveal-stagger"
  }, React.createElement("li", null, React.createElement("span", {
    className: "at-ic",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), React.createElement("span", null, React.createElement("strong", null, "Prix ferme"), " \u2014 le devis est le prix pay\xE9, sur la base de l\u2019inventaire d\xE9clar\xE9.")), React.createElement("li", null, React.createElement("span", {
    className: "at-ic",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), React.createElement("span", null, React.createElement("strong", null, "Assurance incluse"), " dans chaque formule.")), React.createElement("li", null, React.createElement("span", {
    className: "at-ic",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), React.createElement("span", null, React.createElement("strong", null, "Devis sous 24h"), ", gratuit et sans engagement.")))), React.createElement("div", {
    className: "about-photo-stack reveal"
  }, React.createElement("div", {
    className: "about-photo portrait"
  }, source ? React.createElement("video", {
    ref: aboutVidRef,
    src: source,
    poster: "assets/about-poster.jpg",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none",
    "aria-label": "D\xE9m\xE9nageurs LBC prot\xE9geant le mobilier",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : React.createElement("img", {
    src: "assets/about-poster.jpg",
    alt: "D\xE9m\xE9nageurs LBC prot\xE9geant le mobilier",
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement("div", {
    className: "caption"
  }, "Protection soign\xE9e \xB7 Nice")), React.createElement("div", {
    className: "about-photo truck"
  }, React.createElement("img", {
    src: "assets/g-emballage.jpg",
    alt: "Emballage soign\xE9 des objets fragiles",
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement("div", {
    className: "caption"
  }, "Emballage soign\xE9")), React.createElement("div", {
    className: "about-photo detail"
  }, React.createElement("img", {
    src: "assets/gallery-chargement.jpg",
    alt: "Camion LBC en chargement \xE0 Nice",
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement("div", {
    className: "caption"
  }, "Camion LBC \xB7 Nice"))))));
}
const IconBox = () => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, React.createElement("path", {
  d: "M11.5 8.2c-1-1.9-4-1.5-4 .9 0 1.7 2.2 3.2 4 4.2 1.8-1 4-2.5 4-4.2 0-2.4-3-2.8-4-.9z"
}), React.createElement("path", {
  d: "M3.5 13.8a8.5 8.5 0 0 0 16 0"
}), React.createElement("path", {
  d: "M3.5 13.8v-1.4M19.5 13.8v-1.4"
}));
const IconShield = () => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, React.createElement("path", {
  d: "M20.2 12.2a6 6 0 0 0-8.5-8.5L4.8 10.6V19h8.4z"
}), React.createElement("path", {
  d: "M16 8 2.5 21.5"
}), React.createElement("path", {
  d: "M17.4 15H9"
}));
const IconDiamond = () => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, React.createElement("path", {
  d: "M9 3v2"
}), React.createElement("path", {
  d: "M13 3v2"
}), React.createElement("path", {
  d: "M6 3v2"
}), React.createElement("path", {
  d: "M16.5 8.5a1 1 0 0 1 1 1v6.5a4.5 4.5 0 0 1-4.5 4.5H7.5A4.5 4.5 0 0 1 3 16V9.5a1 1 0 0 1 1-1h12.5a4 4 0 1 1 0 8h-1"
}));
function Formule({
  tier,
  name,
  tag,
  pitch,
  items,
  inherits,
  recommended,
  icon,
  ideal
}) {
  return React.createElement("div", {
    className: "formula" + (recommended ? " is-recommended" : "")
  }, React.createElement("div", {
    className: "formula-head"
  }, React.createElement("div", {
    className: "formula-icon"
  }, icon), recommended && React.createElement("div", {
    className: "formula-badge"
  }, React.createElement("span", {
    className: "formula-badge-star"
  }, "\u2605"), "LA PLUS CHOISIE")), React.createElement("div", {
    className: "formula-dots",
    "aria-hidden": "true"
  }, React.createElement("i", {
    className: tier >= 1 ? "on" : ""
  }), React.createElement("i", {
    className: tier >= 2 ? "on" : ""
  }), React.createElement("i", {
    className: tier >= 3 ? "on" : ""
  })), React.createElement("div", {
    className: "formula-level"
  }, ["Niveau 1 · Économique", "Niveau 2 · Confort", "Niveau 3 · Clé en main"][tier - 1]), React.createElement("div", {
    className: "formula-name"
  }, name), React.createElement("div", {
    className: "formula-tag"
  }, "\xAB ", tag, " \xBB"), pitch && React.createElement("p", {
    className: "formula-pitch"
  }, pitch), ideal && React.createElement("div", {
    className: "formula-ideal"
  }, React.createElement("span", {
    className: "fi-label"
  }, "Id\xE9al pour"), ideal), React.createElement("ul", null, inherits && React.createElement("li", {
    className: "formula-inherits",
    style: {
      paddingLeft: 0
    }
  }, React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Tout ", React.createElement("strong", null, inherits), ", et en plus :")), items.map((it, i) => React.createElement("li", {
    key: i
  }, it))), React.createElement("div", {
    className: "formula-cta"
  }, React.createElement("a", {
    href: "Devis",
    className: "btn-formula"
  }, React.createElement("span", null, "Demander un devis"), React.createElement("span", {
    className: "btn-formula-arrow"
  }, "\u2192"))));
}
function Formules({
  recommendedTier
}) {
  const gridRef = React.useRef(null);
  const tiers = [{
    key: "standard",
    tier: 1,
    name: "Coup de main",
    tag: "L'essentiel, bien fait.",
    pitch: "Vous gérez vos cartons, on gère le muscle, la route et la casse. Le déménagement sans superflu, fait dans les règles.",
    ideal: "les petits budgets et celles et ceux qui aiment mettre la main à la pâte.",
    icon: React.createElement(IconBox, null),
    items: ["Transport de vos affaires avec véhicule adapté", "Chargement et déchargement par notre équipe", "Déménagement local ou longue distance", "Assurance du déménageur incluse — 8 000 € par objet"]
  }, {
    key: "premium",
    tier: 2,
    name: "Mains libres",
    tag: "Le confort, sans le stress.",
    pitch: "Notre formule la plus demandée. On protège, on démonte, on remonte — vous n'avez plus qu'à ouvrir la porte.",
    ideal: "un déménagement serein, sans vous fatiguer ni rien casser.",
    icon: React.createElement(IconShield, null),
    inherits: "Coup de main",
    items: ["Emballage des objets fragiles par notre équipe", "Protection intégrale du mobilier (couvertures, housses, film)", "Démontage et remontage des meubles", "Manutention soignée et sécurisée"]
  }, {
    key: "luxe",
    tier: 3,
    name: "Mains dans les poches",
    tag: "Vous ne touchez à rien. On s'occupe de tout.",
    pitch: "Le grand jeu. On emballe jusqu'à la dernière assiette et on installe tout à l'arrivée. Vous arrivez les mains dans les poches.",
    ideal: "les agendas chargés et les biens précieux ou volumineux.",
    icon: React.createElement(IconDiamond, null),
    inherits: "Mains libres",
    items: ["Emballage de tous vos cartons, objets fragiles compris", "Déballage complet et mise en place à l'arrivée", "Protection spécifique des objets précieux, œuvres d'art, vaisselle", "Service clé en main de A à Z"]
  }];
  React.useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.innerWidth > 640) return;
    let idx = tiers.findIndex(t => t.key === recommendedTier);
    if (idx < 0) idx = Math.floor(grid.children.length / 2);
    const target = grid.children[idx];
    if (!target) return;
    const center = () => {
      const g = grid.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      grid.scrollLeft = Math.max(0, grid.scrollLeft + (t.left - g.left) - (grid.clientWidth - t.width) / 2);
    };
    center();
    const id = setTimeout(center, 300);
    return () => clearTimeout(id);
  }, [recommendedTier]);
  return React.createElement("section", {
    className: "sec formules-section",
    id: "formules"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 02 / Nos formules")), React.createElement("h2", null, "Trois mani\xE8res de d\xE9m\xE9nager.", React.createElement("br", null), React.createElement("em", null, "Une seule mani\xE8re de bien faire."))), React.createElement("div", {
    className: "formules-grid reveal-stagger",
    ref: gridRef
  }, tiers.map(t => React.createElement(Formule, _extends({
    key: t.key
  }, t, {
    recommended: recommendedTier === t.key
  })))), React.createElement("div", {
    className: "formules-hint",
    "aria-hidden": "true"
  }, "\u2190 Glissez pour comparer les formules \u2192")));
}
function Gallery() {
  const colsFor = () => {
    if (typeof window === 'undefined' || !window.matchMedia) return 3;
    if (window.matchMedia('(max-width: 640px)').matches) return 1;
    if (window.matchMedia('(max-width: 1000px)').matches) return 2;
    return 3;
  };
  const [cols, setCols] = React.useState(colsFor);
  React.useEffect(() => {
    const calc = () => setCols(colsFor());
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  const imgStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };
  const tileStyle = {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '3 / 2'
  };
  const shots = [['assets/g-protection.jpg', 'Protection du mobilier', 'Protection intégrale du mobilier au film et aux housses'], ['assets/g-escalier.jpg', 'Manutention · escaliers', 'Portage soigné du mobilier dans les escaliers'], ['assets/g-machine.jpg', 'Électroménager', "Transport sécurisé de l'électroménager au diable"], ['assets/g-matelas.jpg', 'Chargement', 'Chargement méthodique dans le camion'], ['assets/gallery-montemeuble.jpg', 'Monte-meuble · accès étage', 'Monte-meuble pour desservir les étages']];
  return React.createElement("section", {
    className: "gallery"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "gallery-head reveal"
  }, React.createElement("h3", null, "En action.", React.createElement("br", null), React.createElement("em", null, "Vrais cartons, vrais clients, vrais sourires.")), React.createElement("div", {
    className: "meta"
  }, "Nos chantiers \xB7 Nice & C\xF4te d'Azur \u2192")), React.createElement("div", {
    className: "reveal-stagger",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ', 1fr)',
      gap: 14,
      marginTop: 26
    }
  }, shots.map((s, i) => React.createElement("div", {
    className: "gallery-tile",
    key: i,
    style: tileStyle
  }, React.createElement("img", {
    src: s[0],
    alt: s[2],
    loading: "lazy",
    style: imgStyle
  }), React.createElement("div", {
    className: "ph-label"
  }, s[1]))))));
}
Object.assign(window, {
  About,
  Formules,
  Gallery
});
  try { Object.assign(window, { _extends, About, Formule, Formules, Gallery }); } catch (e) {}
})();
