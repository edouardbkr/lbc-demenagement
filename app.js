/* app.jsx — compilé par build.js, ne pas éditer */
(function () {
const TWEAK_DEFAULTS = {
  "accent": "#D75B3D",
  "headline": "a",
  "recommended": "premium",
  "density": "airy"
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.body.classList.toggle('density-compact', t.density === 'compact');
  }, [t.density]);
  useScrollReveal();
  React.useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const jump = () => {
      const el = document.querySelector(hash);
      if (!el) return false;
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({
        top: y < 0 ? 0 : y,
        behavior: "auto"
      });
      return true;
    };
    let tries = 0;
    const tick = () => {
      if (!jump() && tries++ < 40) setTimeout(tick, 60);
    };
    setTimeout(tick, 120);
    const onLoad = () => setTimeout(jump, 80);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return React.createElement("div", {
    style: {
      "--accent": t.accent
    }
  }, React.createElement(Nav, null), React.createElement("main", null, React.createElement(Hero, {
    headlineVariant: t.headline
  }), React.createElement(MascotStamp, null), React.createElement(About, null), React.createElement(Formules, {
    recommendedTier: t.recommended
  }), React.createElement(RoadDivider, null), React.createElement(Gallery, null), React.createElement(Values, null), React.createElement(Testimonials, null), React.createElement(HomeFaq, null), React.createElement(CTA, null)), React.createElement(Footer, null), React.createElement(TweaksPanel, null, React.createElement(TweakSection, {
    label: "Couleur & rythme"
  }), React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ["#D75B3D", "#1F3A4B", "#E8A33B", "#3A6B5E"],
    onChange: v => setTweak('accent', v)
  }), React.createElement(TweakRadio, {
    label: "Densit\xE9",
    value: t.density,
    options: ["airy", "compact"],
    onChange: v => setTweak('density', v)
  }), React.createElement(TweakSection, {
    label: "Hero"
  }), React.createElement(TweakRadio, {
    label: "Titre",
    value: t.headline,
    options: [{
      value: "a",
      label: "Sourire"
    }, {
      value: "b",
      label: "Confiance"
    }],
    onChange: v => setTweak('headline', v)
  }), React.createElement(TweakSection, {
    label: "Formules"
  }), React.createElement(TweakSelect, {
    label: "Mise en avant",
    value: t.recommended,
    options: [{
      value: "standard",
      label: "Standard"
    }, {
      value: "premium",
      label: "Premium (par défaut)"
    }, {
      value: "luxe",
      label: "Luxe"
    }, {
      value: "none",
      label: "Aucune"
    }],
    onChange: v => setTweak('recommended', v)
  })));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
  try { Object.assign(window, { App }); } catch (e) {}
})();
