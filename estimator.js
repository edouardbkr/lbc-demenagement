/* estimator.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState: useEstState,
  useEffect: useEstEffect,
  useRef: useEstRef
} = React;
const EST_SURFACE = [{
  key: "studio",
  label: "Studio",
  sub: "< 30 m²"
}, {
  key: "t2",
  label: "2 pièces",
  sub: "30–50 m²"
}, {
  key: "t3",
  label: "3 pièces",
  sub: "50–80 m²"
}, {
  key: "maison",
  label: "Maison",
  sub: "> 90 m²"
}];
const EST_DIST = [{
  key: "local",
  label: "Local",
  sub: "Alpes-Maritimes",
  km: 25
}, {
  key: "regional",
  label: "Régional",
  sub: "PACA",
  km: 130
}, {
  key: "national",
  label: "National",
  sub: "Toute la France",
  km: 750
}];
const EST_FORM = [{
  key: "standard",
  label: "Coup de main"
}, {
  key: "premium",
  label: "Mains libres"
}, {
  key: "luxe",
  label: "Mains dans les poches"
}];
function RollingNum({
  value
}) {
  const [disp, setDisp] = useEstState(value);
  const ref = useEstRef(value);
  useEstEffect(() => {
    const from = ref.current,
      to = value,
      t0 = performance.now(),
      dur = 650;
    let raf;
    const step = t => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      const v = Math.round((from + (to - from) * e) / 10) * 10;
      setDisp(v);
      if (p < 1) raf = requestAnimationFrame(step);else {
        setDisp(to);
        ref.current = to;
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return React.createElement("span", null, disp.toLocaleString("fr-FR"));
}
function EstSeg({
  items,
  value,
  onPick,
  cols
}) {
  return React.createElement("div", {
    className: "est-seg",
    style: {
      gridTemplateColumns: "repeat(" + (cols || items.length) + ",1fr)"
    }
  }, items.map(it => React.createElement("button", {
    type: "button",
    key: it.key,
    className: "est-opt" + (value === it.key ? " on" : ""),
    onClick: () => onPick(it.key)
  }, React.createElement("span", {
    className: "est-opt-label"
  }, it.label), it.sub && React.createElement("span", {
    className: "est-opt-sub"
  }, it.sub))));
}
function Estimator() {
  const [surface, setSurface] = useEstState("t2");
  const [dist, setDist] = useEstState("local");
  const [form, setForm] = useEstState("premium");
  const d = EST_DIST.find(x => x.key === dist);
  const est = window.LBC_PRICING ? window.LBC_PRICING.estimer({
    surface: surface,
    formule: form,
    km: d.km
  }) : null;
  const low = est ? est.bas : 0;
  const high = est ? est.haut : 0;
  const surDevis = form === "luxe";
  return React.createElement("section", {
    className: "sec est",
    id: "estimateur"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "est-card reveal"
  }, React.createElement("div", {
    className: "est-head"
  }, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Estimation express"), React.createElement("h2", null, "Votre d\xE9m\xE9nagement", React.createElement("br", null), React.createElement("em", null, "en 10 secondes.")), React.createElement("p", null, "Trois clics, une fourchette. D\xE9taillez votre inventaire dans le devis et votre prix se pr\xE9cise imm\xE9diatement.")), React.createElement("div", {
    className: "est-controls"
  }, React.createElement("div", {
    className: "est-field"
  }, React.createElement("label", null, "Votre logement"), React.createElement(EstSeg, {
    items: EST_SURFACE,
    value: surface,
    onPick: setSurface,
    cols: 2
  })), React.createElement("div", {
    className: "est-field"
  }, React.createElement("label", null, "La distance"), React.createElement(EstSeg, {
    items: EST_DIST,
    value: dist,
    onPick: setDist
  })), React.createElement("div", {
    className: "est-field est-field-full"
  }, React.createElement("label", null, "La formule"), React.createElement(EstSeg, {
    items: EST_FORM,
    value: form,
    onPick: setForm
  }))), React.createElement("div", {
    className: "est-result"
  }, React.createElement("div", {
    className: "est-price"
  }, React.createElement("span", {
    className: "est-from"
  }, "\xE0 partir de"), React.createElement("div", {
    className: "est-range"
  }, React.createElement("span", {
    className: "est-amount"
  }, React.createElement(RollingNum, {
    value: low
  }), React.createElement("span", {
    className: "est-cur"
  }, "\u20AC")), !surDevis && React.createElement("span", {
    className: "est-dash"
  }, "\u2013"), !surDevis && React.createElement("span", {
    className: "est-amount"
  }, React.createElement(RollingNum, {
    value: high
  }), React.createElement("span", {
    className: "est-cur"
  }, "\u20AC")), React.createElement("span", {
    className: "est-star"
  }, "*")), React.createElement("span", {
    className: "est-note"
  }, React.createElement("span", {
    className: "ast"
  }, "*"), surDevis ? "L'emballage de tous vos cartons se chiffre après une visite en visio de 10 minutes : c'est le seul moyen de vous annoncer un prix ferme plutôt qu'une fourchette large." : "Estimation indicative, hors options. Votre devis, lui, est précis et définitif.")), React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary est-cta"
  }, "Obtenir mon prix ferme", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))));
}
Object.assign(window, {
  Estimator
});
  try { Object.assign(window, { RollingNum, EstSeg, Estimator }); } catch (e) {}
})();
