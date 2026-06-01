// checklist-page.jsx — Checklist interactive "Mon déménagement sans stress"
const { useState: useCkState, useEffect: useCkEffect } = React;

const CK_GROUPS = [
{ t: "8 semaines avant", k: "j8", items: [
  "Demander vos devis et bloquer la date",
  "Faire le tri : donner, vendre, jeter",
  "Réserver un garde-meuble si besoin",
  "Poser vos congés pour le jour J"] },

{ t: "1 mois avant", k: "j4", items: [
  "Résilier / transférer électricité, gaz, internet",
  "Faire suivre le courrier (réexpédition La Poste)",
  "Signaler le changement d'adresse (impôts, banque, CAF…)",
  "Inscrire / désinscrire les enfants à l'école",
  "Commander vos cartons et le matériel d'emballage"] },

{ t: "2 semaines avant", k: "j2", items: [
  "Réserver l'autorisation de stationnement (départ & arrivée)",
  "Prévenir le syndic / gardien de l'immeuble",
  "Commencer à emballer les pièces peu utilisées",
  "Étiqueter les cartons par pièce de destination",
  "Vider, dégivrer et nettoyer le réfrigérateur"] },

{ t: "La veille", k: "j1", items: [
  "Préparer une boîte « première nuit » (draps, trousse, chargeurs)",
  "Démonter ce qui peut l'être (sauf formule avec démontage)",
  "Charger vos appareils et faire le plein de liquidités",
  "Confirmer l'heure d'arrivée de l'équipe LBC"] },

{ t: "Le jour J", k: "jj", items: [
  "Faire un dernier tour de chaque pièce et placard",
  "Relever les compteurs (eau, électricité, gaz)",
  "Remettre les clés / faire l'état des lieux de sortie",
  "Vérifier l'inventaire à l'arrivée et valider la prestation"] }];


const CK_TOTAL = CK_GROUPS.reduce((s, g) => s + g.items.length, 0);
const CK_KEY = "lbc_checklist_v1";

function ChecklistHero({ done, total }) {
  const pct = Math.round(done / total * 100);
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Checklist déménagement</span>
        </div>
        <h1>Votre déménagement, <em>sans rien oublier.</em></h1>
        <p className="lede" style={{ padding: "8px 0 0" }}>
          La checklist que suivent nos clients, de 8 semaines avant jusqu'au jour J. Cochez au fur et à mesure — votre progression est sauvegardée sur cet appareil. <span className="ast">*</span>Imprimable pour l'afficher sur le frigo.
        </p>
        <div className="ck-progress ck-progress-hero">
          <div className="ck-bar"><div className="ck-bar-fill" style={{ width: pct + "%" }}></div></div>
          <div className="ck-progress-meta"><strong>{done}/{total}</strong> tâches · {pct}%</div>
        </div>
      </div>
    </section>);

}

function Checklist() {
  const [checked, setChecked] = useCkState({});
  useCkEffect(() => {
    try {const raw = localStorage.getItem(CK_KEY);if (raw) setChecked(JSON.parse(raw));} catch (e) {}
  }, []);
  const toggle = (id) => {
    setChecked((c) => {
      const n = { ...c, [id]: !c[id] };
      try {localStorage.setItem(CK_KEY, JSON.stringify(n));} catch (e) {}
      return n;
    });
  };
  const reset = () => {setChecked({});try {localStorage.removeItem(CK_KEY);} catch (e) {}};
  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <React.Fragment>
      <ChecklistHero done={doneCount} total={CK_TOTAL} />
      <section className="sec">
        <div className="wrap">
          <div className="ck-toolbar reveal">
            <span className="ck-toolbar-note">Astuce : commencez par le haut — chaque tâche cochée, c'est un peu de charge mentale en moins. 🦴</span>
            <div className="ck-toolbar-btns">
              <button type="button" className="btn btn-ghost" onClick={() => window.print()}>Imprimer<span className="arrow">↧</span></button>
              <button type="button" className="ck-reset" onClick={reset}>Tout décocher</button>
            </div>
          </div>
          <div className="ck-groups">
            {CK_GROUPS.map((g) => {
              const gd = g.items.filter((_, i) => checked[g.k + i]).length;
              return (
                <div className="ck-group reveal" key={g.k}>
                  <div className="ck-group-head">
                    <span className="ck-group-step">{g.t}</span>
                    <span className="ck-group-count">{gd}/{g.items.length}</span>
                  </div>
                  <ul className="ck-list">
                    {g.items.map((it, i) => {
                      const id = g.k + i;
                      return (
                        <li key={id} className={"ck-item" + (checked[id] ? " is-done" : "")}>
                          <label>
                            <input type="checkbox" checked={!!checked[id]} onChange={() => toggle(id)} />
                            <span className="ck-box" aria-hidden="true"></span>
                            <span className="ck-text">{it}</span>
                          </label>
                        </li>);

                    })}
                  </ul>
                </div>);

            })}
          </div>
          <div className="ck-cta reveal">
            <div>
              <div className="ck-cta-title">La première ligne, c'est le devis.</div>
              <div className="ck-cta-sub">Deux minutes, et on s'occupe du plus lourd de la liste.</div>
            </div>
            <a href="Devis.html" className="btn btn-primary">Obtenir mon devis<span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </React.Fragment>);

}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main><Checklist /></main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
