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
{ t: "Garde-meuble en transition", d: "Logement pas encore dispo ? On stocke vos affaires en box sécurisé le temps qu'il faut.", icon: <MI><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M3 7l9-4 9 4M8 20v-6h8v6" /></MI> },
{ t: "Accompagnement de bout en bout", d: "Un interlocuteur unique qui connaît la paperasse et vous évite les allers-retours administratifs.", icon: <MI><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></MI> }];


const MUT_DEEP = [
{ t: "Le devis conforme RH, la pièce qui débloque tout", p: "Dans une mutation, le déménagement ne démarre vraiment qu'une fois le devis validé par votre service RH ou mobilité. Encore faut-il qu'il soit présenté comme l'employeur l'attend : détaillé prestation par prestation, avec volume, distance, formule, options et assurance clairement indiqués. Beaucoup d'entreprises exigent aussi plusieurs devis comparatifs. On établit tout cela sous 24h, dans un format propre et lisible, pour que votre dossier passe du premier coup et que votre date ne prenne pas de retard administratif." },
{ t: "Synchroniser déménagement et prise de poste", p: "Une mutation impose un calendrier serré : une date d'arrivée, parfois une période d'essai, souvent un logement pas encore disponible. On cale le déménagement sur votre prise de poste plutôt que l'inverse, et on absorbe les décalages grâce au garde-meuble relais : vos affaires patientent en box sécurisé, à Nice avant le départ ou à destination, le temps que votre logement se libère. Vous arrivez l'esprit libre pour votre premier jour, pas en pleine logistique." },
{ t: "Mobili-Pass, frais réels : ce qu'il faut savoir", p: "Au-delà de l'employeur, deux dispositifs reviennent souvent. Le Mobili-Pass d'Action Logement aide les salariés du privé qui déménagent pour un motif professionnel, généralement au-delà d'une certaine distance domicile-travail. Et fiscalement, les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous déclarez vos frais réels. Dans les deux cas, c'est la facture conforme qui fait foi : on vous la fournit en règle. On ne décide pas de votre éligibilité (c'est Action Logement, votre RH ou le fisc qui tranchent), mais on vous donne tous les documents utiles." },
{ t: "Mutation longue distance : un camion dédié, une équipe", p: "La plupart des mutations sont des déménagements longue distance : un <a href=\"Demenagement-Nice-Paris.html\">Nice → Paris</a>, un <a href=\"Demenagement-Nice-Lyon.html\">Nice → Lyon</a>, un <a href=\"Demenagement-Nice-Toulouse.html\">Nice → Toulouse</a> vers l'aéronautique, ou un <a href=\"Demenagement-Nice-Luxembourg.html\">Nice → Luxembourg</a> dans la finance. Sur ces trajets, on travaille en camion dédié et plombé, une seule équipe du chargement à la livraison, sans groupage ni transbordement. Votre mobilier arrive à date, intact, pendant que vous vous concentrez sur votre nouveau poste." }];


const MUT_FAQ = [
{ q: "Mon employeur peut-il payer directement le déménageur ?", a: "Oui, c'est fréquent : selon votre entreprise, la prise en charge se fait par paiement direct sur facture ou par remboursement sur justificatif. Dans les deux cas, on fournit un devis conforme en amont et une facture en règle après la prestation." },
{ q: "Pouvez-vous fournir plusieurs devis comparatifs pour ma RH ?", a: "Oui. Beaucoup de services mobilité exigent deux ou trois devis pour valider une mutation. On vous prépare des devis clairs et détaillés, faciles à comparer, dans le format attendu par votre employeur." },
{ q: "Qu'est-ce que le Mobili-Pass d'Action Logement ?", a: "C'est une aide d'Action Logement destinée aux salariés du secteur privé qui changent de logement pour un motif professionnel, en général au-delà d'une certaine distance. On vous remet les justificatifs et la facture nécessaires au dossier ; l'éligibilité est étudiée par Action Logement." },
{ q: "Les frais de déménagement sont-ils déductibles des impôts ?", a: "Les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous optez pour la déclaration aux frais réels, sous conditions. On vous fournit une facture conforme pour appuyer votre déclaration ; pour l'éligibilité exacte, référez-vous à l'administration fiscale." },
{ q: "Que faire si mon nouveau logement n'est pas encore disponible ?", a: "On utilise le garde-meuble relais : vos affaires sont stockées en box sécurisé, à Nice ou à destination, le temps que le logement se libère. On cale ensuite la livraison sur votre disponibilité réelle." },
{ q: "Gérez-vous les mutations partout en France et à l'étranger ?", a: "Oui : longue distance partout en France et déménagements internationaux (Suisse, Italie, Espagne, Benelux). Une seule équipe du départ à l'arrivée, formalités douanières comprises hors Union européenne." }];


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

function MutIntro() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménagement de mutation</div>
            <p className="lead">Une mutation professionnelle, c'est déjà assez de stress comme ça : un nouveau poste, une nouvelle ville, parfois toute une famille à réinstaller. Le déménagement et sa paperasse ne devraient pas en rajouter. On prend en charge votre <strong style={{ color: 'var(--ink)' }}>déménagement de mutation</strong> de A à Z et on vous fournit exactement les documents qu'attendent votre service RH, Action Logement ou le fisc.</p>
            <p>Devis conforme accepté par les RH, coordination avec votre date de prise de poste, garde-meuble en transition et facture en règle : tout est pensé pour qu'une seule chose vous occupe vraiment, votre nouveau travail. Quelle que soit la formule, du simple transport au clé en main, vous avez des déménageurs expérimentés, une assurance incluse et un interlocuteur unique.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis.html" className="btn btn-primary">Devis conforme sous 24h<span className="arrow">→</span></a>
              <a href="Formules.html" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>L'essentiel d'une mutation</h4>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Devis conforme</strong> · accepté par les RH, sous 24h</div>
                <div><strong style={{ color: 'var(--ink)' }}>Comparatifs</strong> · plusieurs devis sur demande</div>
                <div><strong style={{ color: 'var(--ink)' }}>Coordination</strong> · calée sur votre prise de poste</div>
                <div><strong style={{ color: 'var(--ink)' }}>Garde-meuble</strong> · en transition, si besoin</div>
                <div><strong style={{ color: 'var(--ink)' }}>Zone</strong> · toute la France et l'international</div>
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Aussi pour les <a href="Militaire.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>militaires</a> et le <a href="Diplomatique.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>personnel diplomatique</a>.
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
        <MutFeats />
        <MutFaq />
        <MutCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
