// mutations-page.jsx — Mutation professionnelle (salariés)
const MI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const MUT_STEPS = [
{ n: "01", t: "Devis conforme sous 24h", d: "Vous décrivez votre déménagement, on revient sous 24h avec un devis détaillé et conforme, celui que votre employeur ou votre service RH attend pour valider la prise en charge." },
{ n: "02", t: "Transmission à votre RH", d: "Vous remettez le devis à votre service RH ou mobilité. On fournit plusieurs devis comparatifs si la procédure interne l'exige." },
{ n: "03", t: "On cale sur votre prise de poste", d: "La date de déménagement s'aligne sur votre date d'arrivée. Garde-meuble possible si le nouveau logement n'est pas encore prêt." },
{ n: "04", t: "Facture en règle", d: "Après le déménagement, vous recevez une facture conforme pour votre remboursement, la prise en charge directe ou votre déclaration aux impôts." }];


const MUT_PRISE = [
{ t: "L'employeur", d: "De nombreuses entreprises prennent en charge tout ou partie du déménagement lors d'une mutation, parfois via un budget mobilité ou un contrat cadre. Notre devis détaillé et nos comparatifs facilitent la validation par la RH." },
{ t: "Mobili-Pass (Action Logement)", d: "Une aide d'Action Logement pour les salariés du secteur privé qui changent de logement pour un motif professionnel, en général au-delà d'une certaine distance. On vous fournit les justificatifs et la facture nécessaires au dossier." },
{ t: "Frais réels / impôts", d: "Les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous optez pour les frais réels. Facture conforme fournie pour appuyer votre déclaration." }];


const MUT_FEATS = [
{ t: "Devis accepté par les RH", d: "Détaillé, clair, conforme aux exigences des employeurs et organismes. Comparatifs fournis sur demande.", icon: <MI><path d="M6 2h9l5 5v15H6z" /><path d="M9 12h6M9 16h6M9 8h2" /></MI> },
{ t: "Coordination prise de poste", d: "On synchronise le déménagement avec votre date d'arrivée, même à l'autre bout de la France ou à l'étranger.", icon: <MI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></MI> },
{ t: "Transition entre deux logements", d: "Logement pas encore dispo ? On vous aide à trouver un box et on assure le transport, en box sécurisé le temps qu'il faut.", icon: <MI><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M3 7l9-4 9 4M8 20v-6h8v6" /></MI> },
{ t: "Accompagnement de bout en bout", d: "Un interlocuteur unique qui connaît la paperasse et vous évite les allers-retours administratifs.", icon: <MI><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></MI> }];


const MUT_DEEP = [
{ t: "Le devis conforme RH, la pièce qui débloque tout", p: "Dans une mutation, le déménagement ne démarre vraiment qu'une fois le devis validé par votre service RH ou mobilité. Encore faut-il qu'il soit présenté comme l'employeur l'attend : détaillé prestation par prestation, avec volume, distance, formule, options et assurance clairement indiqués. Beaucoup d'entreprises exigent aussi plusieurs devis comparatifs. On établit tout cela sous 24h, dans un format propre et lisible, pour que votre dossier passe du premier coup et que votre date ne prenne pas de retard administratif." },
{ t: "Synchroniser déménagement et prise de poste", p: "Une mutation impose un calendrier serré : une date d'arrivée, parfois une période d'essai, souvent un logement pas encore disponible. On cale le déménagement sur votre prise de poste plutôt que l'inverse, et on absorbe les décalages grâce au garde-meuble relais : vos affaires patientent en box sécurisé, à Nice avant le départ ou à destination, le temps que votre logement se libère. Vous arrivez l'esprit libre pour votre premier jour, pas en pleine logistique." },
{ t: "Mobili-Pass, frais réels : ce qu'il faut savoir", p: "Au-delà de l'employeur, deux dispositifs reviennent souvent. Le Mobili-Pass d'Action Logement aide les salariés du privé qui déménagent pour un motif professionnel, généralement au-delà d'une certaine distance domicile-travail. Et fiscalement, les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous déclarez vos frais réels. Dans les deux cas, c'est la facture conforme qui fait foi : on vous la fournit en règle. On ne décide pas de votre éligibilité (c'est Action Logement, votre RH ou le fisc qui tranchent), mais on vous donne tous les documents utiles." },
{ t: "Muté à Nice ou sur la Côte d'Azur", p: "La région attire les cadres : la technopole de Sophia Antipolis (Antibes, Valbonne) draine l'industrie tech et les sièges, Monaco concentre la finance et les emplois frontaliers, et Nice, Cannes et l'arrière-pays vivent du tourisme, de la santé et des services. Beaucoup de mutations se font donc VERS la Côte d'Azur. Et là, notre avantage est décisif : on connaît les quartiers, les accès et le stationnement de Nice, Cannes, Antibes, Monaco ou Grasse, donc votre arrivée se passe sans accroc, du Vieux-Nice à Sophia Antipolis." },
{ t: "Mutation longue distance : un camion dédié, une équipe", p: "Quand la mutation vous éloigne, on assure aussi les longues distances : un <a href=\"Demenagement-Nice-Paris\">Nice → Paris</a>, un <a href=\"Demenagement-Nice-Lyon\">Nice → Lyon</a>, un <a href=\"Demenagement-Nice-Toulouse\">Nice → Toulouse</a> vers l'aéronautique, ou un <a href=\"Demenagement-Nice-Luxembourg\">Nice → Luxembourg</a> dans la finance. Sur ces trajets, on travaille en camion dédié et plombé, une seule équipe du chargement à la livraison, sans groupage ni transbordement. Votre mobilier arrive à date, intact, pendant que vous vous concentrez sur votre nouveau poste." }];


const MUT_FAQ = [
{ q: "Mon employeur peut-il payer directement le déménageur ?", a: "Oui, c'est fréquent : selon votre entreprise, la prise en charge se fait par paiement direct sur facture ou par remboursement sur justificatif. Dans les deux cas, on fournit un devis conforme en amont et une facture en règle après la prestation." },
{ q: "Pouvez-vous fournir plusieurs devis comparatifs pour ma RH ?", a: "Oui. Beaucoup de services mobilité exigent deux ou trois devis pour valider une mutation. On vous prépare des devis clairs et détaillés, faciles à comparer, dans le format attendu par votre employeur." },
{ q: "Qu'est-ce que le Mobili-Pass d'Action Logement ?", a: "C'est une aide d'Action Logement destinée aux salariés du secteur privé qui changent de logement pour un motif professionnel, en général au-delà d'une certaine distance. On vous remet les justificatifs et la facture nécessaires au dossier ; l'éligibilité est étudiée par Action Logement." },
{ q: "Les frais de déménagement sont-ils déductibles des impôts ?", a: "Les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous optez pour la déclaration aux frais réels, sous conditions. On vous fournit une facture conforme pour appuyer votre déclaration ; pour l'éligibilité exacte, référez-vous à l'administration fiscale." },
{ q: "Que faire si mon nouveau logement n'est pas encore disponible ?", a: "On vous aide à trouver un garde-meuble relais : vos affaires sont stockées en box sécurisé, à Nice ou à destination, le temps que le logement se libère. On cale ensuite la livraison sur votre disponibilité réelle." },
{ q: "Gérez-vous les mutations sur la Côte d'Azur, en France et à l'étranger ?", a: "Oui. Basés à Nice, on déménage sur toute la Côte d'Azur (Cannes, Antibes, Monaco, Sophia Antipolis, Grasse, Menton…), en longue distance partout en France, et à l'international (Suisse, Italie, Espagne, Benelux). Une seule équipe du départ à l'arrivée, formalités douanières comprises hors Union européenne." }];


function MutHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
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

function MutIntro() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménagement de mutation</div>
            <p className="lead">Une mutation professionnelle, c'est déjà assez de stress comme ça : un nouveau poste, une nouvelle ville, parfois toute une famille à réinstaller. Le déménagement et sa paperasse ne devraient pas en rajouter. Que vous soyez muté <strong style={{ color: 'var(--ink)' }}>à Nice et sur la Côte d'Azur</strong> ou que vous quittiez la région pour ailleurs en France, on prend en charge votre <strong style={{ color: 'var(--ink)' }}>déménagement de mutation</strong> de A à Z et on vous fournit exactement les documents qu'attendent votre service RH, Action Logement ou le fisc.</p>
            <p>Devis conforme accepté par les RH, coordination avec votre date de prise de poste, garde-meuble en transition et facture en règle : tout est pensé pour qu'une seule chose vous occupe vraiment, votre nouveau travail. Quelle que soit la formule, du simple transport au clé en main, vous avez des déménageurs expérimentés, une assurance incluse et un interlocuteur unique.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis" className="btn btn-primary">Devis conforme sous 24h<span className="arrow">→</span></a>
              <a href="Formules" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h2 style={{ color: 'var(--ink)' }}>L'essentiel d'une mutation</h2>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Devis conforme</strong> · accepté par les RH, sous 24h</div>
                <div><strong style={{ color: 'var(--ink)' }}>Comparatifs</strong> · plusieurs devis sur demande</div>
                <div><strong style={{ color: 'var(--ink)' }}>Coordination</strong> · calée sur votre prise de poste</div>
                <div><strong style={{ color: 'var(--ink)' }}>Garde-meuble</strong> · en transition, si besoin</div>
                <div><strong style={{ color: 'var(--ink)' }}>Zone</strong> · Nice, Côte d'Azur et toute la France</div>
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Aussi bien pour une <a href="Entreprise" style={{ color: 'var(--accent)', fontWeight: 600 }}>mutation d'entreprise</a> que pour un déménagement de particulier.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function MutSteps() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
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
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Qui prend en charge ?</div></div>
          <h2 className="dim-em">Votre mutation peut être<br /><em>financée, en partie ou en totalité.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {MUT_PRISE.map((p, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{p.t}</div>
              <div className="ap-value-d">{p.d}</div>
            </div>
          )}
        </div>
        <p className="hint" style={{ marginTop: 18 }}>Les dispositifs et montants dépendent de votre situation et de votre employeur. On vous fournit tous les documents utiles, on ne se substitue pas à votre service RH, à Action Logement ou à l'administration fiscale pour l'éligibilité.</p>
      </div>
    </section>);

}

function MutDeep() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> La mutation en profondeur</div></div>
          <h2 className="dim-em">Un dossier carré,<br /><em>un déménagement sans accroc.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {MUT_DEEP.map((d, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{d.t}</div>
              <div className="ap-value-d" style={{ fontSize: 15.5, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: d.p }} />
            </div>
          )}
        </div>
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

function MutFaq() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
          <h2 className="dim-em">Mutation et déménagement,<br /><em>vos questions, nos réponses.</em></h2>
        </div>
        <div className="faq-list reveal" style={{ maxWidth: 820 }}>
          {MUT_FAQ.map((f, i) =>
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

function MutCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Une mutation en vue ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>On prépare le devis.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            On vous envoie sous 24h un devis détaillé et conforme à transmettre à votre employeur ou votre RH.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}


/* ══════════════════════════════════════════════════════════════════════════════
   Contenu de fond ajoute le 25 aout 2026.

   FRONTIERE AVEC LA PAGE ENTREPRISE, a ne jamais franchir :
     Entreprise = l'ENTREPRISE demenage ses locaux. Retroplanning du transfert,
                  bail commercial, informatique, budget du chantier.
     Mutations  = un SALARIE demenage, et son employeur finance tout ou partie.
                  Aides, dossier, justificatifs, fiscalite de la prise en charge,
                  double logement, specificites du public et des militaires.

   Aucun sujet ne passe d'une page a l'autre. Si une section pouvait vivre sur
   les deux, c'est qu'elle est mal ecrite.

   ⚠️ PRUDENCE FACTUELLE. Les dispositifs d'aide et leurs baremes changent. On
   nomme les dispositifs et on decrit la logique, on ne cite AUCUN montant ni
   aucun plafond : un chiffre perime sur une page qui reste en ligne des annees
   est pire que pas de chiffre du tout.
   ══════════════════════════════════════════════════════════════════════════════ */

const MUT_AIDES = [
  { t: "La prise en charge par l'employeur", d: "C'est la première source, et la plus souvent sous-utilisée. Beaucoup de conventions collectives et d'accords d'entreprise prévoient une participation aux frais de déménagement en cas de mobilité demandée par l'employeur. Demandez l'accord applicable avant de négocier : on obtient rarement plus que ce qui est écrit, mais on obtient souvent moins que ce qui est prévu, faute de l'avoir lu." },
  { t: "Les dispositifs d'Action Logement", d: "Le Mobili-Pass et l'aide à la mobilité s'adressent aux salariés du secteur privé qui déménagent pour raison professionnelle. Les conditions portent sur la distance, la nature du changement de poste et la taille de l'entreprise. La demande se fait dans une fenêtre de temps limitée autour de la prise de poste : hors délai, le dossier est refusé même si vous remplissez tout le reste." },
  { t: "Le devis, pièce centrale du dossier", d: "Presque tous les dispositifs exigent un devis détaillé d'une entreprise déclarée, avec numéro de SIRET et attestation d'assurance. Un devis manuscrit ou une estimation par SMS ne passe pas. C'est la raison pour laquelle nous éditons systématiquement un document complet, même quand le client ne l'a pas demandé." },
  { t: "La facture, pièce finale", d: "Le remboursement intervient sur facture acquittée, pas sur devis. Gardez le justificatif de paiement avec la facture : c'est le couple des deux documents qui déclenche le versement, et son absence est le motif de blocage le plus fréquent." }
];

const MUT_FISCAL = [
  { t: "Ce que l'employeur verse", d: "Une prise en charge de frais de déménagement liée à une mobilité professionnelle n'a pas le même traitement qu'une prime de salaire. La distinction tient à la nature de la dépense et à la justification apportée. Concrètement, cela vaut la peine de demander à votre service paie sous quelle forme la somme sera versée, avant d'accepter." },
  { t: "Ce que vous avancez", d: "Quand vous payez d'abord et vous faites rembourser ensuite, la trésorerie est à votre charge pendant plusieurs semaines. Nous pouvons échelonner le règlement pour que l'avance ne pèse pas sur un seul mois, à condition d'en parler au moment du devis." },
  { t: "Les frais annexes qui comptent", d: "Le déménagement lui-même n'est pas le seul poste : garde-meuble entre deux logements, double loyer sur la période de transition, frais d'agence, résiliation anticipée. Certains dispositifs les couvrent, d'autres non. La liste des frais couverts se lit avant de signer, pas après." },
  { t: "Le justificatif de mutation", d: "Attestation de l'employeur, avenant au contrat ou arrêté d'affectation selon votre statut. C'est la pièce qui prouve le motif professionnel et sans laquelle aucun dossier n'avance. Demandez-la dès l'annonce, elle met parfois des semaines à arriver." }
];

const MUT_STATUTS = [
  { t: "Fonction publique d'État", d: "Un changement de résidence administrative peut ouvrir droit à une indemnité, avec des conditions tenant à la distance, à la durée passée dans le poste précédent et au caractère subi ou demandé de la mutation. La demande obéit à un calendrier strict à compter de l'installation." },
  { t: "Militaires et gendarmerie", d: "Les mutations sont fréquentes et le cadre de prise en charge est spécifique, avec ses propres formulaires et ses propres délais. Nous avons l'habitude des pièces attendues et nous les fournissons dans le format demandé, ce qui évite les allers-retours." },
  { t: "Hospitalière et territoriale", d: "Les règles diffèrent de la fonction publique d'État et dépendent souvent de l'établissement ou de la collectivité. Le service des ressources humaines reste la source à interroger en premier." },
  { t: "Secteur privé sans accord", d: "Quand aucun accord ne prévoit rien, tout se négocie. Un devis chiffré et détaillé, présenté tôt, obtient bien plus qu'une demande formulée en ordre de grandeur. C'est le seul levier réel dont vous disposez." }
];

const MUT_CALENDRIER = [
  { j: "L'annonce", t: "Réclamer l'attestation", d: "Dès que la mutation est actée, demandez l'attestation ou l'arrêté. C'est la pièce qui débloque tout le reste et celle qui arrive le plus lentement." },
  { j: "Semaine 1", t: "Lire l'accord applicable", d: "Convention collective, accord d'entreprise, statut. Vous saurez alors ce à quoi vous avez droit sans négocier, et où commence la négociation." },
  { j: "Semaine 2", t: "Faire établir le devis", d: "Un devis détaillé, avec SIRET et attestation d'assurance. Il sert au dossier d'aide et à la négociation avec l'employeur. Nous nous déplaçons pour le chiffrer, ce qui le rend opposable." },
  { j: "Semaine 3", t: "Déposer les demandes", d: "Dispositifs d'aide et demande de prise en charge employeur, en parallèle et pas l'un après l'autre. Les fenêtres de dépôt sont courtes et ne se rattrapent pas." },
  { j: "Semaine 4", t: "Verrouiller la date", d: "Une fois le financement cadré, la date se réserve. Les fins de mois et les samedis partent en premier, et une mutation ne se décale pas." },
  { j: "Après", t: "Envoyer la facture acquittée", d: "Facture et preuve de paiement ensemble. C'est ce couple de documents qui déclenche le versement." }
];

function MutAides() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 06 / Le financement</div></div>
          <h2 className="dim-em">Qui paie quoi, <em>et à quelles conditions.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 820, marginBottom: 26 }}>
          Nous ne citons volontairement aucun montant : les barèmes changent d'une année à
          l'autre et une page qui reste en ligne finit par mentir. Ce qui ne change pas, c'est
          la logique des dispositifs et la liste des pièces qui bloquent un dossier.
        </p>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {MUT_AIDES.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function MutFiscal() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 07 / L'argent</div></div>
          <h2 className="dim-em">Ce que vous avancez, <em>ce qu'on vous rembourse.</em></h2>
        </div>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {MUT_FISCAL.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function MutStatuts() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 08 / Selon votre statut</div></div>
          <h2 className="dim-em">Un militaire et un cadre du privé <em>ne montent pas le même dossier.</em></h2>
        </div>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {MUT_STATUTS.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function MutCalendrier() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 09 / Dans quel ordre</div></div>
          <h2 className="dim-em">Le dossier avant la date, <em>et la date avant les cartons.</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 820, marginBottom: 28 }}>
          L'erreur la plus coûteuse est de réserver le déménagement avant d'avoir cadré le
          financement. On se retrouve alors à payer seul ce qui aurait été pris en charge,
          faute d'avoir déposé une demande dans les délais.
        </p>
        <ol style={{ maxWidth: 860, listStyle: 'none', padding: 0, margin: 0 }}>
          {MUT_CALENDRIER.map((e, i) => (
            <li key={i} style={{ display: 'flex', gap: 22, alignItems: 'baseline', padding: '16px 0', borderTop: i ? '1px solid var(--rule)' : 'none' }}>
              <span style={{ fontFamily: '"DM Sans"', fontWeight: 700, minWidth: 92, whiteSpace: 'nowrap' }}>{e.j}</span>
              <span>
                <strong style={{ display: 'block', marginBottom: 4 }}>{e.t}</strong>
                <span style={{ lineHeight: 1.72 }}>{e.d}</span>
              </span>
            </li>))}
        </ol>
      </div>
    </section>);
}

function MutTransition() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 10 / L'entre-deux</div></div>
          <h2 className="dim-em">Quand le nouveau logement <em>n'est pas prêt.</em></h2>
        </div>
        <div style={{ maxWidth: 820, lineHeight: 1.78 }}>
          <p>
            C'est la situation la plus fréquente des mutations : la prise de poste tombe avant
            la remise des clés. Vous devez libérer l'ancien logement à une date, et vous ne
            pouvez entrer dans le nouveau que deux semaines plus tard. Entre les deux, vos
            affaires doivent bien dormir quelque part.
          </p>
          <p style={{ marginTop: 16 }}>
            Nous prenons en charge cette période avec un garde-meuble relais : votre mobilier
            est chargé, inventorié, stocké en caisses scellées, puis livré à la date que vous
            fixez. Vous ne payez pas deux déménagements, parce que le mobilier reste dans les
            mêmes caisses du départ à l'arrivée. C'est aussi ce qui limite la casse, chaque
            manipulation supplémentaire étant une occasion de plus d'abîmer quelque chose.
          </p>
          <p style={{ marginTop: 16 }}>
            Pensez à vérifier si votre dispositif d'aide couvre le stockage et le double loyer
            de cette période. Certains le font, d'autres s'arrêtent au transport. Cela se lit
            avant de choisir la date de résiliation de votre ancien bail, pas après.
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
        <MutHero />
        <MutIntro />
        <MutSteps />
        <MutPrise />
        <MutDeep />
        <MutAides />
        <MutFiscal />
        <MutStatuts />
        <MutCalendrier />
        <MutTransition />
        <MutFeats />
        <MutFaq />
        <MutCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
