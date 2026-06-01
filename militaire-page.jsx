// militaire-page.jsx — Déménagement militaire
const LI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const MIL_STEPS = [
{ n: "01", t: "Ordre de mutation", d: "Dès réception de votre changement d'affectation, contactez-nous : on cale tout de suite une date et un devis conforme." },
{ n: "02", t: "Devis aux normes", d: "Un devis détaillé et conforme aux barèmes et exigences administratives, prêt pour votre dossier de prise en charge." },
{ n: "03", t: "Déménagement & suivi", d: "Emballage, transport et livraison dans les délais — en métropole, outre-mer ou à l'étranger selon votre affectation." },
{ n: "04", t: "Justificatifs fournis", d: "Facture et attestations conformes pour le remboursement par l'administration. Votre dossier est complet." }];


const MIL_DEST = [
{ t: "Métropole", d: "D'une base à l'autre, de Nice à Brest ou Mourmelon : on connaît les longues distances et on tient les délais." },
{ t: "Outre-mer", d: "Antilles, Guyane, Réunion, Mayotte, Polynésie : organisation du conditionnement maritime et du suivi jusqu'à destination." },
{ t: "Étranger", d: "Affectation OTAN ou ambassade : transport international, formalités douanières et coordination de bout en bout." }];


// Villes de garnison fréquentes — Toulon en tête (1er port militaire d'Europe)
const MIL_BASES = [
{ v: "Toulon", d: "1er port militaire d'Europe : base navale, Préfecture maritime, Mourillon. Notre destination militaire n°1." },
{ v: "Draguignan", d: "« Ville de l'artillerie » : École et camp de Canjuers, mutations fréquentes vers le Var intérieur." },
{ v: "Hyères", d: "Base d'aéronautique navale et 54e régiment : déménagements réguliers sur la presqu'île." },
{ v: "Fréjus – Saint-Raphaël", d: "Garnison historique (troupes de marine) : on dessert toute la base Var-Est." },
{ v: "Istres", d: "Base aérienne 125 : mutations Armée de l'air vers l'étang de Berre." },
{ v: "Orange", d: "Base aérienne 115 et Légion étrangère : trajets fréquents vers le Vaucluse." },
{ v: "Salon-de-Provence", d: "École de l'air (BA 701) : affectations des officiers et élèves." },
{ v: "Brest – Lorient – Cherbourg", d: "Grands ports de la Marine nationale : nos liaisons longue distance vers l'Atlantique et la Manche." }];


const MIL_FEATS = [
{ t: "Devis conforme aux barèmes", d: "Établi selon les exigences de l'administration militaire, avec le détail attendu pour votre dossier.", icon: <LI><path d="M6 2h9l5 5v15H6z" /><path d="M9 12h6M9 16h6M9 8h2" /></LI> },
{ t: "Justificatifs complets", d: "Facture, attestations et pièces conformes pour votre remboursement, sans relance ni pièce manquante.", icon: <LI><path d="M9 11l3 3 7-7" /><path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" /></LI> },
{ t: "Délais tenus, sans exception", d: "Dans l'armée, une date est une date. La ponctualité fait partie de notre engagement de toujours.", icon: <LI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></LI> },
{ t: "Partout où vous êtes affecté", d: "Métropole, DOM-TOM, étranger : on organise le trajet et la logistique de A à Z.", icon: <LI><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" /></LI> }];


function MilHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Déménagement militaire</span>
        </div>
        <h1>Mutation militaire ? <em>Un dossier carré, des délais tenus.</em></h1>
        <p className="lede">
          Changement d'affectation, mobilité commandée : on connaît les procédures, les justificatifs attendus et le sens du mot « délai ». Devis conforme aux barèmes, et une équipe qui sait qu'un ordre, ça se respecte. <span className="ast">*</span>Métropole, outre-mer, étranger.
        </p>
      </div>
    </section>);

}

function MilSteps() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> De l'ordre à l'installation</div></div>
          <h2 className="dim-em">Une mobilité commandée,<br /><em>un déménagement au cordeau.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {MIL_STEPS.map((s, i) =>
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

function MilDest() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Vos destinations</div></div>
          <h2 className="dim-em">Où que l'on vous affecte,<br /><em>on vous y emmène.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {MIL_DEST.map((d, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{d.t}</div>
              <div className="ap-value-d">{d.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function MilBases() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Villes de garnison</div></div>
          <h2 className="dim-em">Cap sur Toulon —<br /><em>et toutes les bases où l'on vous affecte.</em></h2>
        </div>
        <div className="mil-toulon reveal">
          <div className="mil-toulon-tag">Destination militaire n°1</div>
          <h3>Déménagement militaire à Toulon</h3>
          <p>Premier port militaire d'Europe, Toulon concentre une grande part des mutations de la Marine nationale. On y déménage chaque mois : base navale, Préfecture maritime, quartiers du Mourillon et de Saint-Roch, logements de fonction et résidences. Stationnement, accès aux enceintes et créneaux : on connaît le terrain toulonnais et on cale tout au cordeau.</p>
          <div className="hero-ctas" style={{ marginTop: 24 }}>
            <a href="Devis.html" className="btn btn-primary">Devis pour Toulon<span className="arrow">→</span></a>
          </div>
        </div>
        <div className="ap-values reveal-stagger" style={{ marginTop: 36 }}>
          {MIL_BASES.filter((b) => b.v !== "Toulon").map((b, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{b.v}</div>
              <div className="ap-value-d">{b.d}</div>
            </div>
          )}
        </div>
        <p className="hint" style={{ marginTop: 20 }}>Votre garnison n'est pas listée ? On dessert <strong>toutes les bases de métropole, d'outre-mer et à l'étranger</strong>. Indiquez votre affectation, on s'occupe du reste.</p>
      </div>
    </section>);

}

function MilFeats() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Pourquoi nous confier votre mutation</div></div>
          <h2 className="dim-em">Le dossier impeccable,<br /><em>le déménagement irréprochable.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {MIL_FEATS.map((f, i) =>
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

function MilCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Ordre de mutation reçu ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>À vos cartons.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Envoyez-nous votre destination et vos dates — devis conforme aux barèmes sous 24h.
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
        <MilHero />
        <MilSteps />
        <MilDest />
        <MilBases />
        <MilFeats />
        <MilCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
