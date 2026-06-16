// militaire-page.jsx — Déménagement militaire (intro + deep + FAQ)
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


const MIL_DEEP = [
{ t: "Pris en charge ou indemnisé : on s'adapte", p: "Lors d'un changement de résidence commandé, votre déménagement peut être organisé à titre officiel ou indemnisé selon un barème, en fonction de votre statut et de l'organisme gestionnaire. Dans tous les cas, notre rôle est le même : vous remettre un devis conforme aux exigences administratives et, après la prestation, une facture et des attestations en règle pour votre dossier de prise en charge ou de remboursement. On ne décide pas de vos droits, mais on vous donne des pièces irréprochables pour les faire valoir." },
{ t: "Des délais qui ne se négocient pas", p: "Dans l'armée, une date d'affectation est un ordre, pas une suggestion. On le sait, et on cale le déménagement au cordeau : date de chargement, fenêtre de livraison, et garde-meuble relais si le logement de la nouvelle base ou la concession de logement n'est pas encore disponible. Vous prenez votre poste à l'heure, l'esprit dégagé, pendant qu'on s'occupe de la logistique. La ponctualité n'est pas une option, c'est notre engagement." },
{ t: "Outre-mer : le conditionnement maritime", p: "Une affectation aux Antilles, en Guyane, à La Réunion, à Mayotte ou en Polynésie, c'est une logistique à part. Le mobilier voyage par voie maritime, en caisses ou conteneurs, avec un conditionnement renforcé contre l'humidité et les manipulations portuaires, un inventaire valorisé et des délais d'acheminement à anticiper. On organise l'emballage, le transport jusqu'au port, l'embarquement et le suivi jusqu'à votre nouvelle affectation outre-mer." },
{ t: "OTAN, ambassades, étranger", p: "Pour une affectation à l'étranger (état-major OTAN, mission, poste en ambassade), on gère le transport international, l'inventaire et les formalités douanières de bout en bout, avec une seule équipe du départ à l'arrivée. C'est le même savoir-faire que pour le <a href=\"Diplomatique.html\">personnel diplomatique</a>, et plus largement pour toute <a href=\"Mutations.html\">mutation professionnelle</a>." }];


const MIL_FAQ = [
{ q: "Qui prend en charge un déménagement militaire ?", a: "Selon votre statut et le motif de la mutation, le déménagement peut être organisé à titre officiel ou indemnisé sur barème par l'administration. On vous fournit un devis conforme en amont et tous les justificatifs après la prestation ; l'éligibilité et les modalités relèvent de votre organisme gestionnaire." },
{ q: "Fournissez-vous un devis conforme aux barèmes ?", a: "Oui, c'est notre quotidien : un devis détaillé, clair et conforme aux exigences administratives, prêt à intégrer votre dossier de prise en charge ou de remboursement." },
{ q: "Gérez-vous les déménagements outre-mer ?", a: "Oui : Antilles, Guyane, Réunion, Mayotte, Polynésie. On organise le conditionnement maritime renforcé, l'inventaire valorisé, l'embarquement et le suivi jusqu'à destination, en tenant compte des délais d'acheminement." },
{ q: "Et les affectations à l'étranger (OTAN, ambassade) ?", a: "Oui : transport international, inventaire et formalités douanières gérés de bout en bout, avec une seule équipe du chargement à la livraison, comme pour le personnel diplomatique." },
{ q: "Que faire si mon logement sur la nouvelle base n'est pas prêt ?", a: "On utilise le garde-meuble relais : vos affaires sont stockées en box sécurisé le temps que votre logement ou votre concession se libère, puis livrées dès que vous êtes prêt." },
{ q: "Intervenez-vous dans toutes les garnisons ?", a: "Oui. Toulon est notre destination militaire n°1, mais on dessert toutes les bases de métropole (Draguignan, Hyères, Fréjus, Istres, Orange, Salon, Brest, Lorient, Cherbourg…), d'outre-mer et à l'étranger. Indiquez votre affectation, on s'occupe du reste." }];


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

function MilIntro() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménagement militaire</div>
            <p className="lead">Dans l'armée, une mutation ne se discute pas, elle s'exécute. Et un <strong style={{ color: 'var(--ink)' }}>déménagement militaire</strong> ne s'improvise pas non plus : barèmes, justificatifs précis, délais imposés, et parfois l'outre-mer ou l'étranger au bout de la route. On connaît ces procédures, on parle le même langage que votre dossier de prise en charge, et on respecte vos délais au cordeau.</p>
            <p>Basés à Nice, on dessert toutes les garnisons de la région PACA, à commencer par <strong style={{ color: 'var(--ink)' }}>Toulon</strong>, premier port militaire d'Europe, ainsi que Draguignan, Hyères, Fréjus, Istres ou Orange. Devis conforme aux barèmes, justificatifs complets pour votre remboursement, coordination avec votre date d'affectation et garde-meuble en transition : vous avez une seule chose à faire, rejoindre votre poste. Quelle que soit la formule, du simple transport au clé en main, vous avez des déménageurs expérimentés, une assurance incluse et un interlocuteur unique.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis.html" className="btn btn-primary">Devis conforme sous 24h<span className="arrow">→</span></a>
              <a href="Formules.html" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>L'essentiel d'une mutation militaire</h4>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Devis conforme</strong> · aux barèmes, sous 24h</div>
                <div><strong style={{ color: 'var(--ink)' }}>Justificatifs</strong> · complets pour le remboursement</div>
                <div><strong style={{ color: 'var(--ink)' }}>Délais</strong> · tenus, sans exception</div>
                <div><strong style={{ color: 'var(--ink)' }}>Zone</strong> · métropole, DOM-TOM, étranger</div>
                <div><strong style={{ color: 'var(--ink)' }}>Garnison n°1</strong> · Toulon</div>
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Aussi pour la <a href="Mutations.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>mutation professionnelle</a> et le <a href="Diplomatique.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>personnel diplomatique</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function MilDeep() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> La mutation militaire en profondeur</div></div>
          <h2 className="dim-em">Un dossier au carré,<br /><em>une logistique sous contrôle.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {MIL_DEEP.map((d, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{d.t}</div>
              <div className="ap-value-d" style={{ fontSize: 15.5, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: d.p }} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

function MilFaq() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
          <h2 className="dim-em">Déménagement militaire,<br /><em>vos questions, nos réponses.</em></h2>
        </div>
        <div className="faq-list reveal" style={{ maxWidth: 820 }}>
          {MIL_FAQ.map((f, i) =>
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
        <MilIntro />
        <MilSteps />
        <MilDest />
        <MilBases />
        <MilDeep />
        <MilFeats />
        <MilFaq />
        <MilCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
