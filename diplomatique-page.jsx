// diplomatique-page.jsx — Déménagement diplomatique : ambassades, consulats, diplomates, OI
const DI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const DIP_STEPS = [
{ n: "01", t: "Cadrage protocolaire", d: "On étudie votre statut (franchise diplomatique, immunités, valise) et les exigences du poste d'origine et de destination." },
{ n: "02", t: "Inventaire & douane", d: "Inventaire valorisé, listes douanières, carnets ATA et documents de franchise : on prépare un dossier qui passe sans accroc." },
{ n: "03", t: "Emballage & transport", d: "Emballage musée pour le mobilier et les œuvres, transport routier, maritime ou aérien selon la destination." },
{ n: "04", t: "Livraison & installation", d: "Dédouanement à l'arrivée, livraison à la résidence ou à la chancellerie, déballage et mise en place discrète." }];


const DIP_WHO = [
{ t: "Ambassades & chancelleries", d: "Transfert de résidences d'ambassadeurs, bureaux et mobilier officiel, dans le respect du protocole et des délais d'État." },
{ t: "Consulats", d: "Déménagement de postes consulaires, archives protégées et matériel sensible, avec confidentialité absolue." },
{ t: "Diplomates & familles", d: "Mobilité des agents en poste : effets personnels, mobilier, véhicules, dans le cadre de la franchise diplomatique." },
{ t: "Organisations internationales", d: "ONU, OCDE, UE, OTAN, ONG : déménagements de fonctionnaires internationaux et de bureaux, partout dans le monde." }];


const DIP_FEATS = [
{ t: "Maîtrise douanière", d: "Franchises diplomatiques, carnets ATA, listes valorisées multilingues : un dossier complet qui évite blocages et frais.", icon: <DI><path d="M3 7l9-4 9 4-9 4z" /><path d="M5 11v5c0 1 3 3 7 3s7-2 7-3v-5" /></DI> },
{ t: "Confidentialité d'État", d: "Documents classifiés, valise, mobilier officiel : personnel discret, chaîne sécurisée, aucune fuite d'information.", icon: <DI><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /><path d="M9 11.5l2 2 4-4.5" /></DI> },
{ t: "Emballage musée", d: "Œuvres d'art, objets protocolaires, mobilier de valeur : caisses sur mesure, mousse technique, assurance valeur déclarée.", icon: <DI><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M7 16l3.5-4 2.5 3 2-2.5 2 3.5" /><circle cx="9" cy="9" r="1.3" /></DI> },
{ t: "Logistique mondiale", d: "Routier, maritime, aérien : on achemine vers et depuis n'importe quelle capitale, avec correspondants locaux de confiance.", icon: <DI><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" /></DI> },
{ t: "Interlocuteur dédié", d: "Un chef de projet unique, joignable, multilingue, qui coordonne tout — du protocole au dernier carton.", icon: <DI><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></DI> },
{ t: "Délais d'État tenus", d: "Prise de poste, fin de mission, événement officiel : on s'aligne sur votre calendrier, sans approximation.", icon: <DI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></DI> }];


function DipHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Déménagement diplomatique</span>
        </div>
        <h1>Déménagement diplomatique, <em>au millimètre du protocole.</em></h1>
        <p className="lede">
          Ambassades, consulats, diplomates en poste, organisations internationales : franchise douanière, confidentialité d'État et emballage musée. On déménage la diplomatie comme elle l'exige. <span className="ast">*</span>Discrétion absolue, partout dans le monde.
        </p>
      </div>
    </section>);

}

function DipWho() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos clients diplomatiques</div></div>
          <h2 className="dim-em">Du corps diplomatique<br /><em>aux institutions internationales.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {DIP_WHO.map((w, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{w.t}</div>
              <div className="ap-value-d">{w.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function DipSteps() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre processus</div></div>
          <h2 className="dim-em">Un déménagement d'État,<br /><em>orchestré comme une mission.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {DIP_STEPS.map((s, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ {s.n}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="value-body">{s.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function DipFeats() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre expertise</div></div>
          <h2 className="dim-em">Le niveau d'exigence<br /><em>que la fonction impose.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {DIP_FEATS.map((f, i) =>
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

function DipCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Une mission diplomatique à déménager ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>En toute discrétion.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Décrivez le poste, l'origine et la destination — un chef de projet dédié vous répond sous 24h.
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
        <DipHero />
        <DipWho />
        <DipSteps />
        <DipFeats />
        <DipCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
