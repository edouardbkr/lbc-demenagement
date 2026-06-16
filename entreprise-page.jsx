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


const PRO_DEEP = [
{ t: "La continuité d'activité, votre vraie priorité", p: "Déménager une entreprise, ce n'est pas déplacer des meubles, c'est déplacer une activité sans l'interrompre. Chaque heure de bureaux fermés, de caisse éteinte ou de serveur débranché a un coût. On construit donc un plan de transfert pensé pour la continuité : intervention le soir, le week-end ou les jours fériés, déménagement par lots ou par services quand il le faut, pour qu'une partie de l'équipe travaille pendant qu'on transfère l'autre. Objectif : vos collaborateurs ferment leur poste un vendredi et le retrouvent prêt à l'emploi le lundi." },
{ t: "Le transfert informatique et serveurs", p: "C'est le point le plus sensible d'un déménagement de bureaux. Postes de travail, écrans, baies de brassage, serveurs : on débranche méthodiquement, on étiquette chaque câble et chaque poste, on emballe en protection antistatique et on transporte calé et tracé. À l'arrivée, on replace et on rebranche selon le plan, en coordination avec votre service informatique ou votre prestataire. Le matériel critique peut être déménagé en premier et en priorité, pour que le réseau soit opérationnel dès la reprise." },
{ t: "Étiquetage et plan d'implantation", p: "Un transfert réussi se joue sur la rigueur de l'étiquetage. Chaque carton et chaque meuble est repéré par service et par collaborateur, et un plan d'implantation des nouveaux locaux est validé avec vous en amont. Résultat : à l'arrivée, rien n'est posé au hasard, chaque poste retrouve sa place et chacun récupère ses affaires sans chercher. C'est ce qui transforme une reprise chaotique en simple reprise de travail." },
{ t: "Commerce, cabinet, archives : chaque métier ses règles", p: "Un commerce veut une fermeture la plus courte possible : on planifie au plus serré, parfois de nuit, pour rouvrir vite. Un cabinet (avocat, médecin, expert-comptable) exige une confidentialité absolue des dossiers : cartons scellés, inventaire, traçabilité. Pour les archives et documents, on assure une chaîne de traçabilité complète, et on peut les mettre en <a href=\"Archivage.html\">archivage sécurisé</a> ou en <a href=\"Stockage.html\">garde-meuble</a> pendant la transition. À chaque métier sa contrainte, qu'on intègre dès le devis." }];


const PRO_FAQ = [
{ q: "Pouvez-vous intervenir le soir, le week-end ou les jours fériés ?", a: "Oui, c'est même la norme pour un déménagement d'entreprise : on travaille hors heures ouvrées pour ne pas interrompre votre activité. Vos équipes ferment le vendredi et retrouvent des bureaux prêts à l'emploi le lundi." },
{ q: "Combien de temps à l'avance faut-il réserver un transfert ?", a: "Pour un déménagement de bureaux, prévoyez idéalement quelques semaines : le temps de l'audit des locaux, du plan de transfert et du calage des créneaux d'immeuble. Mais on sait aussi gérer les délais serrés ; parlez-nous de vos dates." },
{ q: "Gérez-vous le matériel informatique et les serveurs ?", a: "Oui : débranchement, étiquetage des câbles, emballage antistatique, transport tracé et rebranchement selon le plan, en coordination avec votre service informatique. Le matériel critique peut être traité en priorité." },
{ q: "Fournissez-vous une facture conforme et la TVA est-elle récupérable ?", a: "Oui : devis détaillé et facture conforme, exploitables par vos services achats, comptabilité ou RH. La TVA sur un déménagement professionnel est en principe récupérable selon votre situation." },
{ q: "Comment garantissez-vous la confidentialité des dossiers ?", a: "Pour les cabinets et services sensibles, on travaille en cartons scellés, avec inventaire et chaîne de traçabilité. L'équipe est briefée sur la confidentialité, et les archives peuvent être mises en archivage ou garde-meuble sécurisé." },
{ q: "Déménagez-vous les entreprises hors de Nice et en national ?", a: "Oui : transfert local sur toute la Côte d'Azur et déménagement professionnel longue distance partout en France, avec une seule équipe et un interlocuteur unique du devis à la reprise." }];


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

function EntIntro() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménagement d'entreprise</div>
            <p className="lead">Déménager une entreprise, ce n'est pas déménager un appartement en plus grand. L'enjeu n'est pas votre mobilier, c'est votre <strong style={{ color: 'var(--ink)' }}>activité</strong> : chaque heure de bureaux fermés, de caisse éteinte ou de serveur débranché coûte de l'argent. On pilote votre <strong style={{ color: 'var(--ink)' }}>transfert de bureaux</strong> comme un projet, pour que vos équipes retrouvent des postes prêts à l'emploi sans perdre une journée de production.</p>
            <p>Un chef de projet unique, une intervention hors heures ouvrées, un matériel informatique et des archives traités avec méthode, et une facturation pro conforme : tout est pensé pour que votre transfert soit un non-événement pour votre activité. Du studio de trois personnes au plateau de deux cents, on adapte l'équipe et le planning.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis.html" className="btn btn-primary">Devis & planning sous 24h<span className="arrow">→</span></a>
              <a href="Formules.html" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>L'essentiel d'un transfert pro</h4>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Chef de projet</strong> · un interlocuteur unique</div>
                <div><strong style={{ color: 'var(--ink)' }}>Hors heures</strong> · soir, week-end, jours fériés</div>
                <div><strong style={{ color: 'var(--ink)' }}>Informatique</strong> · débranchement et rebranchement</div>
                <div><strong style={{ color: 'var(--ink)' }}>Facturation pro</strong> · conforme, TVA récupérable</div>
                <div><strong style={{ color: 'var(--ink)' }}>Zone</strong> · Côte d'Azur et national</div>
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Archives à transférer ? Voir aussi l'<a href="Archivage.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>archivage sécurisé</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function EntDeep() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Le transfert en profondeur</div></div>
          <h2 className="dim-em">On ne déplace pas des cartons,<br /><em>on déplace une activité.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {PRO_DEEP.map((d, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{d.t}</div>
              <div className="ap-value-d" style={{ fontSize: 15.5, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: d.p }} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

function EntFaq() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
          <h2 className="dim-em">Déménagement d'entreprise,<br /><em>vos questions, nos réponses.</em></h2>
        </div>
        <div className="faq-list reveal" style={{ maxWidth: 820 }}>
          {PRO_FAQ.map((f, i) =>
          <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span><span className="ico">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          )}
        </div>
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
        <EntIntro />
        <EntProcess />
        <EntTypes />
        <EntFeats />
        <EntDeep />
        <EntFaq />
        <EntCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
