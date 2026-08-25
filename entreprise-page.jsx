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
{ t: "Vos quartiers d'affaires, on les connaît", p: "Notre vrai atout, c'est de connaître le terrain économique azuréen. Les bureaux de l'Arénas et de l'Éco-Vallée (Nice Méridia) près de l'aéroport, la technopole de Sophia Antipolis (Antibes, Valbonne), les sièges et commerces de la Croisette et de Cannes La Bocca, les bureaux de Monaco, la zone commerciale de Cap 3000 à Saint-Laurent-du-Var, les zones d'activité de Carros et de la Trinité : on sait où se garer, comment accéder aux parkings et aux quais, et quels créneaux d'immeuble respecter. Un transfert sur la Côte d'Azur sans perdre une heure à chercher un accès." },
{ t: "Commerce, cabinet, archives : chaque métier ses règles", p: "Un commerce veut une fermeture la plus courte possible : on planifie au plus serré, parfois de nuit, pour rouvrir vite. Un cabinet (avocat, médecin, expert-comptable) exige une confidentialité absolue des dossiers : cartons scellés, inventaire, traçabilité. Pour les archives et documents, on assure une chaîne de traçabilité complète, et on peut les mettre en <a href=\"Archivage\">archivage sécurisé</a> ou en <a href=\"Stockage\">garde-meuble</a> pendant la transition. À chaque métier sa contrainte, qu'on intègre dès le devis." }];


const PRO_FAQ = [
{ q: "Pouvez-vous intervenir le soir, le week-end ou les jours fériés ?", a: "Oui, c'est même la norme pour un déménagement d'entreprise : on travaille hors heures ouvrées pour ne pas interrompre votre activité. Vos équipes ferment le vendredi et retrouvent des bureaux prêts à l'emploi le lundi." },
{ q: "Combien de temps à l'avance faut-il réserver un transfert ?", a: "Pour un déménagement de bureaux, prévoyez idéalement quelques semaines : le temps de l'audit des locaux, du plan de transfert et du calage des créneaux d'immeuble. Mais on sait aussi gérer les délais serrés ; parlez-nous de vos dates." },
{ q: "Gérez-vous le matériel informatique et les serveurs ?", a: "Oui : débranchement, étiquetage des câbles, emballage antistatique, transport tracé et rebranchement selon le plan, en coordination avec votre service informatique. Le matériel critique peut être traité en priorité." },
{ q: "Fournissez-vous une facture conforme et la TVA est-elle récupérable ?", a: "Oui : devis détaillé et facture conforme, exploitables par vos services achats, comptabilité ou RH. La TVA sur un déménagement professionnel est en principe récupérable selon votre situation." },
{ q: "Comment garantissez-vous la confidentialité des dossiers ?", a: "Pour les cabinets et services sensibles, on travaille en cartons scellés, avec inventaire et chaîne de traçabilité. L'équipe est briefée sur la confidentialité, et les archives peuvent être mises en archivage ou garde-meuble sécurisé." },
{ q: "Sur quelles villes intervenez-vous, et en national ?", a: "On est basés à Nice et on transfère les entreprises sur toute la Côte d'Azur : Nice, Sophia Antipolis, Cannes, Antibes, Monaco, Saint-Laurent-du-Var, Grasse et les zones d'activité du 06. Et pour un transfert longue distance, on intervient partout en France, avec une seule équipe et un interlocuteur unique du devis à la reprise." }];


function EntHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <span>Déménagement d'entreprise</span>
        </div>
        <h1>Déménager vos bureaux à Nice <em>sans mettre l'activité en pause.</em></h1>
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
            <p className="lead">Déménager une entreprise, ce n'est pas déménager un appartement en plus grand. L'enjeu n'est pas votre mobilier, c'est votre <strong style={{ color: 'var(--ink)' }}>activité</strong> : chaque heure de bureaux fermés, de caisse éteinte ou de serveur débranché coûte de l'argent. On pilote votre <strong style={{ color: 'var(--ink)' }}>transfert de bureaux à Nice et sur la Côte d'Azur</strong> comme un projet, pour que vos équipes retrouvent des postes prêts à l'emploi sans perdre une journée de production.</p>
            <p>Un chef de projet unique, une intervention hors heures ouvrées, un matériel informatique et des archives traités avec méthode, et une facturation pro conforme : tout est pensé pour que votre transfert soit un non-événement pour votre activité. Du studio de trois personnes au plateau de deux cents, on adapte l'équipe et le planning.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis" className="btn btn-primary">Devis & planning sous 24h<span className="arrow">→</span></a>
              <a href="Formules" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h2 style={{ color: 'var(--ink)' }}>L'essentiel d'un transfert pro</h2>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Chef de projet</strong> · un interlocuteur unique</div>
                <div><strong style={{ color: 'var(--ink)' }}>Hors heures</strong> · soir, week-end, jours fériés</div>
                <div><strong style={{ color: 'var(--ink)' }}>Informatique</strong> · débranchement et rebranchement</div>
                <div><strong style={{ color: 'var(--ink)' }}>Facturation pro</strong> · conforme, TVA récupérable</div>
                <div><strong style={{ color: 'var(--ink)' }}>Zone</strong> · Nice, Côte d'Azur et national</div>
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Archives à transférer ? Voir aussi l'<a href="Archivage" style={{ color: 'var(--accent)', fontWeight: 600 }}>archivage sécurisé</a>.
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
          Besoin de reloger un collaborateur ? Voir aussi notre page <a href="Mutations" style={{ color: 'var(--accent)', fontWeight: 600 }}>Mutations professionnelles</a>.
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


/* ══════════════════════════════════════════════════════════════════════════════
   Contenu de fond ajoute le 25 aout 2026.

   MESURE QUI LE JUSTIFIE, faite sur les pages reellement servies :
     LBC        1 623 mots ·  9 titres
     AzurMove     982 mots · 24 titres   ← segmente par type d'activite
     NiceDem      803 mots ·  8 titres   ← tient l'angle retroplanning
     Mignani      753 mots · 11 titres

   Nous etions deja deux fois plus longs et deux fois moins structures. Les
   sections ci-dessous prennent les deux angles ou ils sont meilleurs, et les
   poussent plus loin, plus trois sujets qu'aucun d'eux ne traite : les
   obligations legales du transfert, la continuite informatique et telecom,
   et la construction du budget.

   FRONTIERE AVEC LA PAGE MUTATIONS : ici c'est l'ENTREPRISE qui demenage.
   La page Mutations traite du SALARIE dont le demenagement est finance.
   Aucun sujet ne doit passer d'une page a l'autre.
   ══════════════════════════════════════════════════════════════════════════════ */

const PRO_PLAN = [
  { j: "J-90", t: "Décision et périmètre", d: "Surface cible arrêtée, date souhaitée posée, budget cadré. C'est le moment où l'on visite vos locaux actuels et futurs, où l'on chiffre le volume réel et où l'on identifie les points durs : monte-charge, quai, ascenseur, créneaux d'immeuble, matériel sensible." },
  { j: "J-60", t: "Bail, préavis et notifications", d: "Le préavis du bail commercial part, la date est verrouillée avec les deux syndics ou bailleurs. On liste les organismes à prévenir et on prépare le plan d'implantation des postes dans les nouveaux locaux." },
  { j: "J-45", t: "Télécoms et informatique", d: "C'est le délai qu'il ne faut jamais rogner. Le raccordement d'une ligne professionnelle et le portage des numéros se commandent longtemps à l'avance. Une entreprise qui emménage sans lien montant travaille au partage de connexion mobile pendant des semaines." },
  { j: "J-30", t: "Tri, archives et mobilier", d: "On sépare ce qui part, ce qui se stocke et ce qui se jette. Les archives sont inventoriées et scellées. Le mobilier qui ne sera pas repris est identifié pour reprise ou évacuation, ce qui évite de payer le transport d'un bien destiné à la benne." },
  { j: "J-15", t: "Étiquetage et plan de salle", d: "Chaque poste reçoit son étiquette, au nom du service et de la personne. Le plan d'implantation est affiché dans les nouveaux locaux. C'est ce document qui permet à l'équipe de poser chaque carton au bon endroit sans poser de question." },
  { j: "J-7", t: "Confirmation et logistique", d: "Autorisations de voirie obtenues, monte-meuble réservé si nécessaire, ascenseurs bloqués aux deux adresses, badges et codes d'accès transmis. Les collaborateurs reçoivent la consigne de vider leurs affaires personnelles." },
  { j: "Jour J", t: "Transfert hors activité", d: "Le soir, le week-end ou un jour férié selon ce qui coûte le moins à votre activité. Démontage, transport, remontage, rebranchement. Un chef de projet reste joignable du début à la fin, et c'est le même que celui du devis." },
  { j: "J+1", t: "Reprise et levée des réserves", d: "Vos équipes se rassoient devant des postes qui fonctionnent. Nous restons disponibles pour les ajustements de la première semaine : un bureau à déplacer, une cloison à reprendre, un carton égaré." }
];

const PRO_METIERS = [
  { t: "Cabinet d'avocats et notariat", d: "Les dossiers clients relèvent du secret professionnel. Les cartons sont scellés, numérotés et suivis, et personne d'autre que vous ne les ouvre. La bibliothèque juridique se transporte à plat, pas debout : c'est ce qui abîme le moins les reliures." },
  { t: "Cabinet médical et paramédical", d: "Dossiers patients sous clé, matériel d'imagerie et de stérilisation transporté selon les prescriptions du fabricant, table d'examen démontée dans l'ordre. On planifie souvent en deux temps pour ne pas interrompre les consultations." },
  { t: "Restaurant et métiers de bouche", d: "Chambre froide, piano de cuisson, hotte, mobilier de salle. Le matériel froid se déplace vide et se remet en température avant remise en service. L'intervention se cale entre deux services ou sur le jour de fermeture." },
  { t: "Commerce et boutique", d: "Le stock d'abord, l'agencement ensuite, la vitrine en dernier. L'objectif est une réouverture le lendemain matin, pas dans trois jours. Les portants et gondoles se démontent et se remontent identiques." },
  { t: "Agence et bureaux d'études", d: "Plateaux de postes, traceurs grand format, échantillothèques et matériauthèques. Le format des plans et des maquettes impose des contenants sur mesure que l'on prépare à l'avance." },
  { t: "Atelier et petite production", d: "Machines-outils, établis, stock de matière première. Le calage et l'élingage sont la partie sensible, et le poids réel se vérifie avant, jamais au moment de soulever." },
  { t: "Laboratoire et matériel sensible", d: "Instruments calibrés, réfrigérateurs de conservation, consommables. On transporte selon les consignes du constructeur et l'on documente la chaîne, parce qu'un appareil déréglé coûte plus cher qu'un déménagement." },
  { t: "Association et organisme public", d: "Marchés publics, procédure de commande, facturation conforme et pièces justificatives. Nous fournissons les documents attendus sans qu'il faille les réclamer trois fois." }
];

const PRO_LEGAL = [
  { t: "Le bail commercial et son préavis", d: "La durée du préavis et la forme de la notification dépendent de votre bail. C'est le premier document à relire, avant même de choisir une date : un préavis mal calé décale tout le reste et se paie en loyers doubles." },
  { t: "L'information des salariés", d: "Un changement de lieu de travail se prépare avec les équipes, et selon la distance et votre organisation il peut relever d'une procédure d'information ou de consultation. Traité tôt, c'est un sujet réglé ; traité tard, c'est un conflit." },
  { t: "Le changement d'adresse officiel", d: "Greffe, INSEE, services fiscaux, organismes sociaux, banque, assurances, clients et fournisseurs. La liste est plus longue qu'il n'y paraît et certains délais sont contraints. Nous vous remettons la liste, vous gardez la main sur les démarches." },
  { t: "L'assurance des locaux", d: "La couverture du nouveau site doit être active au jour de la livraison, pas à la date d'entrée dans les lieux. Entre les deux, il y a parfois une semaine où votre matériel dort dans des locaux non assurés." }
];

const PRO_IT = [
  { t: "Le lien montant, à commander en premier", d: "Fibre professionnelle ou lien dédié, le raccordement se compte en semaines et parfois en mois quand des travaux de génie civil sont nécessaires. C'est le seul poste qui peut vous immobiliser malgré un déménagement parfait." },
  { t: "Le portage des numéros", d: "Conserver vos numéros fixes demande une demande de portabilité, avec son propre délai. Perdre le numéro affiché sur vos cartes et sur votre fiche Google, c'est perdre des appels pendant des mois." },
  { t: "Les postes et les serveurs", d: "Chaque poste est étiqueté au nom de son utilisateur, photographié branché avant démontage, et rebranché à l'identique. Les baies et serveurs voyagent calés, dans leur position de service quand le constructeur l'exige." },
  { t: "La sauvegarde avant le départ", d: "Une sauvegarde complète et vérifiée avant le démontage, c'est la seule assurance réelle contre l'incident de transport. Nous le rappelons systématiquement, même quand ce n'est pas notre périmètre." }
];

function EntPlan() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 05 / Le rétroplanning</div></div>
          <h2 className="dim-em">Trois mois avant, <em>et pas trois semaines.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 820, marginBottom: 28 }}>
          La plupart des transferts qui se passent mal n'ont pas été mal exécutés : ils ont été
          lancés trop tard. Voici le calendrier que nous appliquons, avec le poste qui ne se
          rattrape jamais quand on le rogne, le raccordement télécom.
        </p>
        <ol style={{ maxWidth: 860, listStyle: 'none', padding: 0, margin: 0 }}>
          {PRO_PLAN.map((e, i) => (
            <li key={i} style={{ display: 'flex', gap: 22, alignItems: 'baseline', padding: '16px 0', borderTop: i ? '1px solid var(--rule)' : 'none' }}>
              <span style={{ fontFamily: '"DM Sans"', fontWeight: 700, minWidth: 66, whiteSpace: 'nowrap' }}>{e.j}</span>
              <span>
                <strong style={{ display: 'block', marginBottom: 4 }}>{e.t}</strong>
                <span style={{ lineHeight: 1.72 }}>{e.d}</span>
              </span>
            </li>))}
        </ol>
      </div>
    </section>);
}

function EntMetiers() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 06 / Par métier</div></div>
          <h2 className="dim-em">Un cabinet médical ne se déménage pas <em>comme une boutique.</em></h2>
        </div>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {PRO_METIERS.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function EntLegal() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 07 / Les obligations</div></div>
          <h2 className="dim-em">Ce qu'un transfert vous impose, <em>au-delà des cartons.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 820, marginBottom: 26 }}>
          Nous ne sommes ni votre avocat ni votre expert-comptable, et nous ne prétendons pas
          l'être. Mais nous voyons ces quatre sujets tomber en retard à chaque transfert, et
          les signaler tôt fait partie du travail.
        </p>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {PRO_LEGAL.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function EntIT() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 08 / Continuité</div></div>
          <h2 className="dim-em">L'informatique et les lignes, <em>le seul vrai risque d'arrêt.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 820, marginBottom: 26 }}>
          Un meuble abîmé se remplace. Une entreprise sans connexion ni téléphone pendant trois
          semaines perd des clients qu'elle ne retrouvera pas. C'est le poste sur lequel nous
          insistons le plus, même quand une partie ne relève pas de nous.
        </p>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {PRO_IT.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function EntBudget() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 09 / Le budget</div></div>
          <h2 className="dim-em">Comment se construit un devis <em>de transfert professionnel.</em></h2>
        </div>
        <div style={{ maxWidth: 820, lineHeight: 1.78 }}>
          <p>
            Un devis d'entreprise ne se calcule pas au mètre cube comme un déménagement de
            particulier. Trois éléments pèsent davantage : le nombre de postes à traiter, la
            fenêtre d'intervention imposée, et le degré de démontage et de remontage attendu.
            Un plateau de quarante postes transféré un samedi coûte plus qu'un volume équivalent
            de mobilier domestique déplacé un mardi, parce qu'il mobilise plus d'équipiers sur
            une durée contrainte.
          </p>
          <p style={{ marginTop: 16 }}>
            Ce qui fait monter la note, dans l'ordre : l'intervention hors heures ouvrées, le
            démontage-remontage de cloisons et de mobilier sur mesure, le traitement individuel
            de l'informatique, et l'absence de monte-charge ou de quai à l'une des deux adresses.
            Ce qui la fait baisser : un tri sérieux en amont, un plan d'implantation validé, et
            une date choisie hors des pics de fin de mois.
          </p>
          <p style={{ marginTop: 16 }}>
            Nous chiffrons après visite des deux sites, jamais sur description téléphonique. Le
            devis détaille chaque poste, il est ferme, et il ne bouge pas le jour J. La
            facturation est conforme, la TVA récupérable dans les conditions habituelles, et
            les pièces justificatives sont fournies sans qu'il faille les demander.
          </p>
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
        <EntPlan />
        <EntTypes />
        <EntMetiers />
        <EntLegal />
        <EntIT />
        <EntBudget />
        <EntFeats />
        <EntDeep />
        <EntFaq />
        <EntCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
