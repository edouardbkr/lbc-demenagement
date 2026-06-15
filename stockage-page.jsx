// stockage-page.jsx — Service de stockage en entrepôt (offres S/M/L/XL)
const SI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const OFFERS = [
{ size: "S", surf: "1 – 5 m²", price: "119", ex: "Quelques cartons, un studio en transition.", boxes: "≈ 30 cartons" },
{ size: "M", surf: "6 – 10 m²", price: "199", ex: "Le contenu d'un 2 pièces meublé.", boxes: "≈ 1 camionnette" },
{ size: "L", surf: "11 – 15 m²", price: "299", ex: "Un 3 pièces complet, électroménager inclus.", boxes: "≈ 1 camion", popular: true },
{ size: "XL", surf: "16 – 20 m²", price: "399", ex: "Une maison ou des locaux professionnels.", boxes: "≈ 1 grand camion" }];


const STOCK_STEPS = [
{ n: "01", t: "On récupère", d: "Notre équipe emballe et charge chez vous, le même jour que votre déménagement si besoin." },
{ n: "02", t: "On inventorie", d: "Chaque carton et meuble est listé et photographié. Vous savez exactement ce qui part au stockage." },
{ n: "03", t: "On stocke", d: "Box individuel et fermé dans notre entrepôt sécurisé à Nice — au sec, à l'abri, sous alarme." },
{ n: "04", t: "On relivre", d: "Le jour J de votre choix, on ressort tout et on le réinstalle chez vous. Vous ne soulevez rien." }];


const STOCK_FEATS = [
{ t: "Entrepôt sécurisé 24/7", d: "Alarme, vidéosurveillance et accès contrôlé. Vos affaires dorment tranquilles.", icon: <SI><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /><path d="M9 11.5l2 2 4-4.5" /></SI> },
{ t: "Box individuel & propre", d: "Un espace fermé rien qu'à vous, au sec et à température stable. Ni humidité, ni nuisibles.", icon: <SI><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M3 7l9-4 9 4M8 20v-6h8v6" /></SI> },
{ t: "Sans engagement de durée", d: "Quelques jours entre deux logements ou plusieurs mois : vous arrêtez quand vous voulez.", icon: <SI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></SI> },
{ t: "Restitution à la date de votre choix", d: "Le jour venu, on ressort l'ensemble de vos affaires d'un coup et on vous les relivre. Vos biens restent groupés et scellés jusque-là.", icon: <SI><path d="M9 3v2M15 3v2M4 8h16M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path d="M8 13l2.5 2.5L16 11" /></SI> },
{ t: "Assurance incluse", d: "Vos biens sont couverts pendant toute la durée du stockage, comme pendant le transport.", icon: <SI><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /></SI> },
{ t: "Manutention par nos soins", d: "On porte, on cale, on range. Pas de location de camion ni de copains à mobiliser un dimanche.", icon: <SI><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V7a2 2 0 0 0-4 0v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3" /></SI> }];


function StockHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Stockage &amp; garde-meuble</span>
        </div>
        <h1>Vos affaires au chaud, <em>le temps qu'il vous faut.</em></h1>
        <p className="lede">
          Un trou entre deux logements ? Des travaux ? Un bien à libérer vite ? On récupère, on stocke en box sécurisé à Nice, et on relivre quand vous êtes prêt. <span className="ast">*</span>Vous ne portez rien.
        </p>
      </div>
    </section>);

}

function StockOffers() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos offres de stockage</div></div>
          <h2 className="dim-em">Quatre tailles de box.<br /><em>Un tarif clair, tout compris.</em></h2>
        </div>
        <div className="stock-grid reveal-stagger">
          {OFFERS.map((o) =>
          <div className={"stock-card" + (o.popular ? " popular" : "")} key={o.size}>
              {o.popular && <div className="stock-flag"><span className="stock-flag-star">★</span>LE PLUS DEMANDÉ</div>}
              <div className="stock-size">{o.size}</div>
              <div className="stock-surf">{o.surf}</div>
              <div className="stock-price"><span className="stock-amount">{o.price} €</span><span className="stock-per">/ mois</span></div>
              <div className="stock-boxes">{o.boxes}</div>
              <p className="stock-ex">{o.ex}</p>
              <a href={"Reservation.html?box=" + encodeURIComponent(o.size)} className="btn btn-ghost stock-cta">Réserver ce box</a>
            </div>
          )}
        </div>
        <p className="hint" style={{ marginTop: 20, textAlign: 'center' }}>Tarifs TTC, sans engagement de durée · Collecte et relivraison chiffrées avec votre déménagement · Pas sûr de la taille ? On vous conseille au moment du devis.</p>
      </div>
    </section>);

}

function StockSteps() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Comment ça marche</div></div>
          <h2 className="dim-em">Vous nous confiez tout.<br /><em>On gère le reste.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {STOCK_STEPS.map((s, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ ÉTAPE {s.n}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="value-body">{s.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function StockFeats() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Pourquoi notre entrepôt</div></div>
          <h2 className="dim-em">Un garde-meuble<br /><em>qu'on choisirait pour nos propres affaires.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {STOCK_FEATS.map((f, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-ic">{f.icon}</div>
              <div className="ap-value-t">{f.t}</div>
              <div className="ap-value-d">{f.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function QuoteBand() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Besoin de stocker ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>On a la place.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Dites-nous le volume et les dates — on vous conseille la bonne taille de box sous 24h.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <StockHero />
        <StockOffers />
        <StockSteps />
        <StockFeats />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
