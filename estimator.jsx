// estimator.jsx — "Votre déménagement en 10 secondes" : estimation animée
const { useState: useEstState, useEffect: useEstEffect, useRef: useEstRef } = React;

const EST_SURFACE = [
{ key: "studio", label: "Studio", sub: "< 30 m²", base: 690 },
{ key: "t2", label: "2 pièces", sub: "30–50 m²", base: 1020 },
{ key: "t3", label: "3 pièces", sub: "50–80 m²", base: 1560 },
{ key: "maison", label: "Maison", sub: "> 90 m²", base: 2500 }];

const EST_DIST = [
{ key: "local", label: "Local", sub: "Alpes-Maritimes", mult: 1 },
{ key: "regional", label: "Régional", sub: "PACA", mult: 1.45 },
{ key: "national", label: "National", sub: "Toute la France", mult: 2.35 }];

const EST_FORM = [
{ key: "standard", label: "Coup de main", mult: 1 },
{ key: "premium", label: "Mains libres", mult: 1.1 },
{ key: "luxe", label: "Mains dans les poches", mult: 1.72 }];

// Rolling number that eases toward its target
function RollingNum({ value }) {
  const [disp, setDisp] = useEstState(value);
  const ref = useEstRef(value);
  useEstEffect(() => {
    const from = ref.current, to = value, t0 = performance.now(), dur = 650;
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      const v = Math.round((from + (to - from) * e) / 10) * 10;
      setDisp(v);
      if (p < 1) raf = requestAnimationFrame(step);else {setDisp(to);ref.current = to;}
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <span>{disp.toLocaleString("fr-FR")}</span>;
}

function EstSeg({ items, value, onPick, cols }) {
  return (
    <div className="est-seg" style={{ gridTemplateColumns: "repeat(" + (cols || items.length) + ",1fr)" }}>
      {items.map((it) =>
      <button type="button" key={it.key} className={"est-opt" + (value === it.key ? " on" : "")} onClick={() => onPick(it.key)}>
          <span className="est-opt-label">{it.label}</span>
          {it.sub && <span className="est-opt-sub">{it.sub}</span>}
        </button>
      )}
    </div>);

}

function Estimator() {
  const [surface, setSurface] = useEstState("t2");
  const [dist, setDist] = useEstState("local");
  const [form, setForm] = useEstState("premium");

  const s = EST_SURFACE.find((x) => x.key === surface);
  const d = EST_DIST.find((x) => x.key === dist);
  const f = EST_FORM.find((x) => x.key === form);
  const center = s.base * d.mult * f.mult;
  const low = Math.round(center * 0.88 / 10) * 10;
  const high = Math.round(center * 1.15 / 10) * 10;

  return (
    <section className="sec est" id="estimateur">
      <div className="wrap">
        <div className="est-card reveal">
          <div className="est-head">
            <div className="sec-num"><span className="asterisk">*</span> Estimation express</div>
            <h2>Votre déménagement<br /><em>en 10 secondes.</em></h2>
            <p>Trois clics, une fourchette. Le prix ferme arrive ensuite par devis, sous 24h.</p>
          </div>

          <div className="est-controls">
            <div className="est-field">
              <label>Votre logement</label>
              <EstSeg items={EST_SURFACE} value={surface} onPick={setSurface} cols={2} />
            </div>
            <div className="est-field">
              <label>La distance</label>
              <EstSeg items={EST_DIST} value={dist} onPick={setDist} />
            </div>
            <div className="est-field est-field-full">
              <label>La formule</label>
              <EstSeg items={EST_FORM} value={form} onPick={setForm} />
            </div>
          </div>

          <div className="est-result">
            <div className="est-price">
              <span className="est-from">à partir de</span>
              <div className="est-range">
                <span className="est-amount"><RollingNum value={low} /><span className="est-cur">€</span></span>
                <span className="est-dash">–</span>
                <span className="est-amount"><RollingNum value={high} /><span className="est-cur">€</span></span>
                <span className="est-star">*</span>
              </div>
              <span className="est-note"><span className="ast">*</span>Estimation indicative, hors options. Votre devis, lui, est précis et définitif.</span>
            </div>
            <a href="Devis.html" className="btn btn-primary est-cta">Obtenir mon prix ferme<span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Estimator });
