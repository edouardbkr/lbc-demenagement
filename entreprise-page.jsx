// entreprise-page.jsx — Déménagement d'entreprise & bureaux (page dédiée)
const EI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const PRO_STEPS = [
{ n: "01", t: "Audit & repérage", d: "On visite vos locaux, on chiffre le volume, on repère les contraintes : ascenseurs, monte-charge, accès quai, matériel sensible et créneaux d'immeuble." },
{ n: "02", t: "Plan de transfert", d: "Un planning précis validé avec vous : ordre des postes, étiquetage par service et par collaborateur, plan d'implantation à l'arrivée." },
{ n: "03", t: "Transfert hors activité", d: "On intervient le soir, le week-end ou les jours fériés, par lots si nécessaire, pour que vos équipes retrouvent des bureaux prêts à l'emploi." },
{ n: "04", t: "Remontage & reprise", d: "Mobilier remonté, postes informatiques rebranchés, cartons à la bonne place. Vous rouvrez sans perdre une journée de production." }];


const PRO_TYPES = [
{ t: "Bureaux & open-spaces", d: "Postes de travail, cloisons, mobilier, salles de réunion — du studio de 3 personnes au plateau de 200." },
{ t: "Commerces & boutiques", d: "Agencement, stock, vitrines, mobilier de vente. On planifie pour réduire au minimum la fermeture." },
{ t: "Cabinets & professions libérales", d: "Avocats, médecins, experts-comptables : confidentialité des dossiers et matériel spécifique respectés." },
{ t: "Informatique & serveurs", d: "Postes, baies, serveurs : débranchement, emballage antistatique, transport calé et traçé, rebranchement." },
{ t: "Archives & documents", d: "Cartons scellés, inventaire, chaîne de traçabilité. Vos archives arrivent dans l'ordre et complètes." },
{ t: "Mobilier lourd & sur-mesure", d: "Coffres, mobilier de direction, œuvres d'art du hall : manutention renforcée et protection sur mesure." }];


const PRO_FEATS = [
{ t: "Interlocuteur unique", d: "Un chef de projet dédié du premier devis à la dernière vis. Un seul numéro, zéro déperdition d'info.", icon: <EI><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></EI> },
{ t: "Continuité d'activité", d: "Transfert planifié hors heures, par phases si besoin : votre entreprise ne s'arrête jamais vraiment.", icon: <EI><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></EI> },
{ t: "Matériel sensible maîtrisé", d: "Serveurs, postes, archives, mobilier de valeur : emballage et manutention spécifiques, traçés.", icon: <EI><rect x="3" y="4" width="18" height="8" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 8h.01M7 17h.01" /></EI> },
{ t: "Facturation pro & conforme", d: "Devis détaillé, facture conforme, gestion possible avec vos services achats ou RH. TVA récupérable.", icon: <EI><path d="M6 2h9l5 5v15H6z" /><path d="M9 12h6M9 16h6M9 8h2" /></EI> }];


function EntHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Déménagement d'entreprise</span>
        </div>
        <h1>Déménager vos bureaux <em>sans mettre l'activité en pause.</em></h1>
        <p className="lede">
          Transfert de bureaux, de commerce ou de cabinet : on planifie, on exécute hors heures ouvrées, et on rouvre vos postes prêts à l'emploi. <span className="ast">*</span>Un seul interlocuteur, du devis à la reprise.
        </p>
      </div>
    </section>);

}

function EntProcess() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre méthode</div></div>
          <h2 className="dim-em">Un transfert, ça se pilote.<br /><em>On en fait un projet, pas une journée de chaos.</em></h2>
        </div>
        <div className="reveal" style={{ maxWidth: '64ch', color: 'var(--ink-2)', fontSize: 18, lineHeight: 1.6 }}>
          <p>Un déménagement professionnel ne se gère pas comme un appartement : l'enjeu, c'est la <strong style={{ color: 'var(--ink)' }}>continuité de votre activité</strong>. Voici notre méthode, rodée sur des dizaines de transferts en région niçoise et au-delà.</p>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginTop: 40 }}>
          {PRO_STEPS.map((s, i) =>
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

function EntTypes() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Ce qu'on déménage</div></div>
          <h2 className="dim-em">Tous les locaux pro,<br /><em>chacun avec ses règles.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {PRO_TYPES.map((t, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{t.t}</div>
              <div className="ap-value-d">{t.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function EntFeats() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Ce qui change avec nous</div></div>
          <h2 className="dim-em">Le sérieux d'un prestataire pro,<br /><em>la souplesse d'une équipe à taille humaine.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {PRO_FEATS.map((f, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-ic">{f.icon}</div>
              <div className="ap-value-t">{f.t}</div>
              <div className="ap-value-d">{f.d}</div>
            </div>
          )}
        </div>
        <div className="reveal" style={{ marginTop: 36, fontSize: 15, color: 'var(--ink-2)' }}>
          Besoin de reloger un collaborateur ? Voir aussi nos pages <a href="Mutations.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>Mutations professionnelles</a> et <a href="Militaire.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>Déménagement militaire</a>.
        </div>
      </div>
    </section>);

}

function EntCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Un transfert à planifier ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Parlons-en.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Décrivez vos locaux et vos contraintes — on revient sous 24h avec un devis détaillé et un planning.
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
        <EntHero />
        <EntProcess />
        <EntTypes />
        <EntFeats />
        <EntCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
