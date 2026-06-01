// mutations-page.jsx — Mutation professionnelle (salariés)
const MI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const MUT_STEPS = [
{ n: "01", t: "Devis sous 24h", d: "Vous décrivez votre déménagement, on revient avec un devis détaillé et conforme — celui que votre employeur ou RH attend." },
{ n: "02", t: "Transmission RH", d: "Vous remettez le devis à votre service RH ou mobilité. On peut fournir plusieurs devis comparatifs si la procédure l'exige." },
{ n: "03", t: "On cale sur votre prise de poste", d: "La date de déménagement s'aligne sur votre date d'arrivée. Garde-meuble possible si le logement n'est pas encore prêt." },
{ n: "04", t: "Facture conforme", d: "Après le déménagement, vous recevez une facture en règle pour votre remboursement ou la prise en charge directe." }];


const MUT_PRISE = [
{ t: "L'employeur", d: "De nombreuses entreprises prennent en charge tout ou partie du déménagement lors d'une mutation. Notre devis détaillé facilite la validation." },
{ t: "Mobili-Pass (Action Logement)", d: "Une aide pour les salariés du privé qui changent de logement pour raisons pro. On vous fournit les justificatifs nécessaires." },
{ t: "Frais réels / impôts", d: "Les frais de déménagement liés à un changement d'emploi peuvent être déductibles. Facture conforme fournie pour vos démarches." }];


const MUT_FEATS = [
{ t: "Devis accepté par les RH", d: "Détaillé, clair, conforme aux exigences des employeurs et organismes. Comparatifs fournis sur demande.", icon: <MI><path d="M6 2h9l5 5v15H6z" /><path d="M9 12h6M9 16h6M9 8h2" /></MI> },
{ t: "Coordination prise de poste", d: "On synchronise le déménagement avec votre date d'arrivée, même à l'autre bout de la France.", icon: <MI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></MI> },
{ t: "Garde-meuble en transition", d: "Logement pas encore dispo ? On stocke vos affaires en box sécurisé le temps qu'il faut.", icon: <MI><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M3 7l9-4 9 4M8 20v-6h8v6" /></MI> },
{ t: "Accompagnement de bout en bout", d: "Un interlocuteur unique qui connaît la paperasse et vous évite les allers-retours administratifs.", icon: <MI><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></MI> }];


function MutHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Mutation professionnelle</span>
        </div>
        <h1>Muté pour le travail ? <em>On gère le déménagement et la paperasse.</em></h1>
        <p className="lede">
          Nouvelle affectation, prise de poste à l'autre bout du pays : on établit un devis clair et conforme pour votre employeur, on cale la date sur votre arrivée, et on vous évite la double charge mentale. <span className="ast">*</span>Vous changez de ville, pas de tranquillité.
        </p>
      </div>
    </section>);

}

function MutSteps() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Comment ça se passe</div></div>
          <h2 className="dim-em">De la mutation à l'emménagement,<br /><em>sans paperasse perdue.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {MUT_STEPS.map((s, i) =>
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

function MutPrise() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Qui prend en charge ?</div></div>
          <h2 className="dim-em">Votre mutation peut être<br /><em>financée — en partie ou en totalité.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {MUT_PRISE.map((p, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{p.t}</div>
              <div className="ap-value-d">{p.d}</div>
            </div>
          )}
        </div>
        <p className="hint" style={{ marginTop: 18 }}>Les dispositifs et montants dépendent de votre situation et de votre employeur. On vous fournit tous les documents utiles — on ne se substitue pas à votre service RH ou à Action Logement pour l'éligibilité.</p>
      </div>
    </section>);

}

function MutFeats() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Ce qu'on vous apporte</div></div>
          <h2 className="dim-em">Un déménagement carré,<br /><em>un dossier qui passe du premier coup.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {MUT_FEATS.map((f, i) =>
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

function MutCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Une mutation en vue ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>On prépare le devis.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            On vous envoie sous 24h un devis détaillé à transmettre à votre employeur ou votre RH.
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
        <MutHero />
        <MutSteps />
        <MutPrise />
        <MutFeats />
        <MutCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
