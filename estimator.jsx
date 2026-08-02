// estimator.jsx — "Votre déménagement en 10 secondes" : estimation animée
const { useState: useEstState, useEffect: useEstEffect, useRef: useEstRef } = React;

// ⚠️ Cet estimateur utilise EXACTEMENT le même moteur que la fin du formulaire de devis
// (pricing.jsx). C'est indispensable : un prospect qui voit une fourchette ici puis une
// fourchette plus élevée à la fin du formulaire se sent piégé. Un seul moteur, un seul prix.
// Ici on n'a pas d'inventaire, donc le moteur retient le HAUT de la fourchette de volume :
// l'estimation d'accueil est donc toujours la plus prudente, et remplir le devis détaillé ne
// peut que la préciser.

// Les clés de surface correspondent à celles du moteur (« maison » = t4)
const EST_SURFACE = [
{ key: "studio", label: "Studio", sub: "< 30 m²" },
{ key: "t2", label: "2 pièces", sub: "30–50 m²" },
{ key: "t3", label: "3 pièces", sub: "50–80 m²" },
{ key: "t4", label: "Maison", sub: "> 90 m²" }];

// Distance représentative de chaque zone, en km réels (le moteur facture au km)
const EST_DIST = [
{ key: "local", label: "Local", sub: "Alpes-Maritimes", km: 25 },
{ key: "regional", label: "Régional", sub: "PACA", km: 130 },
{ key: "national", label: "National", sub: "Toute la France", km: 750 }];

const EST_FORM = [
{ key: "standard", label: "Coup de main" },
{ key: "premium", label: "Mains libres" },
{ key: "luxe", label: "Mains dans les poches" }];

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

  const d = EST_DIST.find((x) => x.key === dist);
  // Accès neutre (rez-de-chaussée, camion devant) : sans info, on n'ajoute pas de surcoût ici.
  const est = window.LBC_PRICING ?
    window.LBC_PRICING.estimer({ surface: surface, formule: form, km: d.km }) : null;
  const low = est ? est.bas : 0;
  const high = est ? est.haut : 0;

  return (
    <section className="sec est" id="estimateur">
      <div className="wrap">
        <div className="est-card reveal">
          <div className="est-head">
            <div className="sec-num"><span className="asterisk">*</span> Estimation express</div>
            <h2>Votre déménagement<br /><em>en 10 secondes.</em></h2>
            <p>Trois clics, une fourchette. Détaillez votre inventaire dans le devis et votre prix se précise immédiatement.</p>
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
            <a href="Devis" className="btn btn-primary est-cta">Obtenir mon prix ferme<span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Estimator });
