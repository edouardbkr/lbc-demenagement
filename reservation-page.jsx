// reservation-page.jsx — Réservation + paiement d'un box de stockage
// NB: l'encaissement réel nécessite un prestataire (Stripe) + backend.
// Ici : interface complète + validation + confirmation simulée.
const { useState: useRState } = React;

const BOXES = {
  S: { size: "S", surf: "1 – 5 m²", price: 119, ex: "Quelques cartons, un studio en transition.", boxes: "≈ 30 cartons" },
  M: { size: "M", surf: "6 – 10 m²", price: 199, ex: "Le contenu d'un 2 pièces meublé.", boxes: "≈ 1 camionnette" },
  L: { size: "L", surf: "11 – 15 m²", price: 299, ex: "Un 3 pièces complet, électroménager inclus.", boxes: "≈ 1 camion" },
  XL: { size: "XL", surf: "16 – 20 m²", price: 399, ex: "Une maison ou des locaux professionnels.", boxes: "≈ 1 grand camion" } };


function ResaPage() {
  useScrollReveal();
  const params = new URLSearchParams(window.location.search);
  const initial = (params.get("box") || "L").toUpperCase();
  const [boxKey, setBoxKey] = useRState(BOXES[initial] ? initial : "L");
  const [data, setData] = useRState({ nom: "", email: "", tel: "", date: "", duree: "" });
  const [card, setCard] = useRState({ holder: "", number: "", exp: "", cvc: "" });
  const [tried, setTried] = useRState(false);
  const [done, setDone] = useRState(false);
  const box = BOXES[boxKey];

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  // ---- input formatters ----
  const fmtPhone = (raw) => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };
  const fmtCard = (raw) => (raw || "").replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  const fmtExp = (raw) => {
    let d = (raw || "").replace(/\D/g, "").slice(0, 4);
    if (d.length >= 3) return d.slice(0, 2) + "/" + d.slice(2);
    return d;
  };
  const setCardField = (k, v) => setCard((c) => ({ ...c, [k]: v }));

  // ---- validation ----
  const okCoord = data.nom.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.tel.replace(/\D/g, "").length === 10 && data.date;
  const cardDigits = card.number.replace(/\D/g, "");
  const okCard = card.holder.trim().length > 1 && cardDigits.length === 16 && /^\d{2}\/\d{2}$/.test(card.exp) && card.cvc.replace(/\D/g, "").length >= 3;
  const canPay = okCoord && okCard;

  const pay = (e) => {
    e.preventDefault();
    if (!canPay) { setTried(true); return; }
    // NB: aucun appel de paiement réel ici — brancher Stripe côté serveur.
    // Conversion Meta : réservation d'un box de stockage.
    if (window.fbq) window.fbq("track", "Lead");
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ref = "LBC-" + box.size + "-" + Math.floor(100000 + Math.random() * 900000);
  const vErr = (cond) => tried && cond ? " field-error" : "";
  const vOk = (cond) => cond ? " is-valid" : "";

  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <a href="Les Bras Cassés.html">Accueil</a>
              <span className="sep">/</span>
              <a href="Stockage.html">Stockage</a>
              <span className="sep">/</span>
              <span>Réserver</span>
            </div>
            <h1>{done ? "Réservation confirmée." : "Réservez votre box."}</h1>
            <p className="lede">{done ? "Votre box est bloqué à votre nom. On vous contacte pour planifier l'enlèvement." : <React.Fragment>Bloquez votre box en quelques minutes. <span className="ast">*</span>Sans engagement de durée — vous arrêtez quand vous voulez.</React.Fragment>}</p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            {done ?
            <div className="form-card devis-success" role="status">
                <div className="ds-check" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3>Merci {data.nom.trim().split(" ")[0]}, c'est réservé&nbsp;!</h3>
                <p>Votre <strong>box {box.size} ({box.surf})</strong> est bloqué. Référence&nbsp;: <strong>{ref}</strong>.</p>
                <p className="ds-sub">Un récapitulatif part sur <strong>{data.email}</strong>. On vous appelle au {data.tel} pour fixer la date d'enlèvement.</p>
                <div className="ds-actions">
                  <a className="btn btn-primary" href="Les Bras Cassés.html">Retour à l'accueil<span className="arrow">→</span></a>
                  <a className="btn btn-ghost" href="Stockage.html">Voir le service stockage</a>
                </div>
              </div> :

            <form className="devis-form resa-grid" onSubmit={pay}>
                <div className="form-card">
                  {/* 1 — Box */}
                  <div className="form-section-head">Votre box <span>— modifiable</span></div>
                  <div className="resa-boxpick">
                    {Object.keys(BOXES).map((k) =>
                  <button type="button" key={k} className={"resa-box-opt" + (k === boxKey ? " sel" : "")} onClick={() => setBoxKey(k)}>
                        <span className="rb-size">{k}</span>
                        <span className="rb-surf">{BOXES[k].surf}</span>
                        <span className="rb-price">{BOXES[k].price} €<small>/mois</small></span>
                      </button>
                  )}
                  </div>

                  {/* 2 — Coordonnées */}
                  <div className="form-section-head" style={{ marginTop: 30 }}>Vos coordonnées</div>
                  <div className="form-grid">
                    <div className="lf full">
                      <label>Prénom & nom</label>
                      <input type="text" className={vErr(!data.nom.trim()) + vOk(data.nom.trim().length > 1)} value={data.nom} onChange={(e) => set("nom", e.target.value)} placeholder="Jean Dupont" autoComplete="name" />
                    </div>
                    <div className="lf">
                      <label>Email</label>
                      <input type="email" className={vErr(!data.email.trim()) + vOk(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))} value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="jean@exemple.fr" autoComplete="email" />
                    </div>
                    <div className="lf">
                      <label>Téléphone</label>
                      <input type="tel" inputMode="numeric" className={vErr(!data.tel.trim()) + vOk(data.tel.replace(/\D/g, "").length === 10)} value={data.tel} onChange={(e) => set("tel", fmtPhone(e.target.value))} placeholder="06 12 34 56 78" autoComplete="tel" />
                    </div>
                    <div className="lf">
                      <label>Date d'enlèvement souhaitée</label>
                      <input type="date" className={vErr(!data.date) + vOk(!!data.date)} value={data.date} onChange={(e) => set("date", e.target.value)} />
                    </div>
                    <div className="lf">
                      <label>Durée estimée</label>
                      <select value={data.duree} onChange={(e) => set("duree", e.target.value)}>
                        <option value="">Sans idée précise</option>
                        <option>Moins d'1 mois</option>
                        <option>1 à 3 mois</option>
                        <option>3 à 6 mois</option>
                        <option>Plus de 6 mois</option>
                      </select>
                    </div>
                  </div>

                  {/* 3 — Paiement */}
                  <div className="form-section-head" style={{ marginTop: 30 }}>Paiement <span>— 1er mois, sans engagement</span></div>
                  <div className="resa-pay">
                    <div className="resa-pay-head">
                      <span className="resa-lock" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                        Paiement sécurisé
                      </span>
                      <span className="resa-cards" aria-hidden="true">VISA · MC · CB</span>
                    </div>
                    <div className="form-grid">
                      <div className="lf full">
                        <label>Titulaire de la carte</label>
                        <input type="text" className={vErr(!card.holder.trim()) + vOk(card.holder.trim().length > 1)} value={card.holder} onChange={(e) => setCardField("holder", e.target.value)} placeholder="JEAN DUPONT" autoComplete="cc-name" />
                      </div>
                      <div className="lf full">
                        <label>Numéro de carte</label>
                        <input type="text" inputMode="numeric" className={vErr(cardDigits.length !== 16) + vOk(cardDigits.length === 16)} value={card.number} onChange={(e) => setCardField("number", fmtCard(e.target.value))} placeholder="1234 5678 9012 3456" autoComplete="cc-number" />
                      </div>
                      <div className="lf">
                        <label>Expiration</label>
                        <input type="text" inputMode="numeric" className={vErr(!/^\d{2}\/\d{2}$/.test(card.exp)) + vOk(/^\d{2}\/\d{2}$/.test(card.exp))} value={card.exp} onChange={(e) => setCardField("exp", fmtExp(e.target.value))} placeholder="MM/AA" autoComplete="cc-exp" />
                      </div>
                      <div className="lf">
                        <label>CVC</label>
                        <input type="text" inputMode="numeric" className={vErr(card.cvc.replace(/\D/g, "").length < 3) + vOk(card.cvc.replace(/\D/g, "").length >= 3)} value={card.cvc} onChange={(e) => setCardField("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))} placeholder="123" autoComplete="cc-csc" />
                      </div>
                    </div>
                  </div>

                  {tried && !canPay && <p className="resa-incomplete">Vérifiez les champs surlignés avant de valider.</p>}
                </div>

                {/* Récapitulatif */}
                <aside className="devis-aside">
                  <div className="aside-card resa-summary">
                    <h4>Récapitulatif</h4>
                    <div className="resa-sum-box">
                      <span className="resa-sum-size">{box.size}</span>
                      <div>
                        <div className="resa-sum-surf">{box.surf}</div>
                        <div className="resa-sum-ex">{box.boxes}</div>
                      </div>
                    </div>
                    <ul className="resa-lines">
                      <li><span>Loyer mensuel</span><span>{box.price} €</span></li>
                      <li><span>Frais de dossier</span><span className="resa-free">Offerts</span></li>
                      <li><span>Caution</span><span className="resa-free">Aucune</span></li>
                    </ul>
                    <div className="resa-total">
                      <span>À régler aujourd'hui</span>
                      <strong>{box.price} €</strong>
                    </div>
                    <p className="resa-note">Puis {box.price} €/mois, <strong>sans engagement</strong>. Résiliable à tout moment avec 8 jours de préavis.</p>
                    <button type="submit" className="form-submit resa-submit">Réserver et payer {box.price} €<span>→</span></button>
                    <p className="resa-trust">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                      Données chiffrées · Assurance incluse
                    </p>
                  </div>
                </aside>
              </form>
            }
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<ResaPage />);
