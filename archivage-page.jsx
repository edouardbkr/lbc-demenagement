// archivage-page.jsx — Service d'archivage : enlèvement, inventaire, stockage, destruction sécurisée
const AI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const ARC_STEPS = [
{ n: "01", t: "Enlèvement", d: "On récupère vos archives sur site — bureaux, cave, local — en cartons scellés et numérotés. Aucune boîte ne quitte vos locaux sans être tracée." },
{ n: "02", t: "Inventaire", d: "Chaque carton est référencé, indexé et consigné dans un registre. Vous savez en permanence ce qui est stocké, et où." },
{ n: "03", t: "Stockage sécurisé", d: "Conservation en entrepôt fermé, au sec, sous alarme et vidéosurveillance. Accès strictement contrôlé et journalisé." },
{ n: "04", t: "Destruction certifiée", d: "En fin de durée légale, destruction confidentielle de vos documents avec certificat à l'appui. Rien ne traîne, rien ne fuite." }];


const ARC_FEATS = [
{ t: "Traçabilité totale", d: "Chaque carton porte une référence unique. Registre tenu à jour, consultable à tout moment : vous gardez la main sur vos archives.", icon: <AI><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h8M8 11h8M8 15h5" /></AI> },
{ t: "Confidentialité garantie", d: "Documents sensibles, RH, juridiques, médicaux : accès restreint, personnel engagé à la discrétion, locaux sécurisés.", icon: <AI><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /><path d="M9 11.5l2 2 4-4.5" /></AI> },
{ t: "Conservation maîtrisée", d: "Entrepôt au sec, à température stable, à l'abri de l'humidité, des nuisibles et de la lumière. Vos papiers vieillissent bien.", icon: <AI><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></AI> },
{ t: "Récupération sur demande", d: "Besoin d'un dossier précis ? On le retrouve grâce à l'index et on vous le restitue ou le rapporte rapidement.", icon: <AI><path d="M21 21l-4.5-4.5" /><circle cx="10.5" cy="10.5" r="6.5" /></AI> },
{ t: "Respect des durées légales", d: "On vous aide à suivre les délais de conservation réglementaires avant archivage définitif ou destruction.", icon: <AI><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></AI> },
{ t: "Destruction certifiée", d: "Broyage sécurisé et certificat de destruction conforme : une traçabilité complète, du carton plein à la benne scellée.", icon: <AI><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /><path d="M10 11v6M14 11v6" /></AI> }];


const ARC_WHO = [
{ t: "Entreprises & PME", d: "Comptabilité, contrats, RH : libérez de la place au bureau sans rien perdre." },
{ t: "Cabinets & professions réglementées", d: "Avocats, notaires, experts-comptables, santé : conservation conforme et confidentielle." },
{ t: "Administrations & collectivités", d: "Volumes importants, durées légales strictes : on structure et on sécurise." },
{ t: "Déménagement d'entreprise", d: "On profite de votre transfert pour trier, archiver et alléger les nouveaux locaux." }];


function ArcHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Archivage</span>
        </div>
        <h1>Vos archives, <em>entre de bonnes mains — et sous clé.</em></h1>
        <p className="lede">
          Enlèvement, inventaire, stockage sécurisé et destruction certifiée : on prend en charge le cycle de vie complet de vos documents, en toute confidentialité. <span className="ast">*</span>Vous gagnez de la place, pas en sérénité.
        </p>
      </div>
    </section>);

}

function ArcSteps() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Le cycle complet</div></div>
          <h2 className="dim-em">De l'enlèvement à la destruction,<br /><em>une chaîne sans maillon faible.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {ARC_STEPS.map((s, i) =>
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

function ArcFeats() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos garanties</div></div>
          <h2 className="dim-em">L'archivage sérieux,<br /><em>sans la paperasse de l'archivage.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {ARC_FEATS.map((f, i) =>
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

function ArcWho() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Pour qui</div></div>
          <h2 className="dim-em">Tous ceux qui croulent<br /><em>sous les boîtes d'archives.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {ARC_WHO.map((w, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{w.t}</div>
              <div className="ap-value-d">{w.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function ArcCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Des archives à externaliser ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>On s'en occupe.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Dites-nous le volume (en mètres linéaires ou en cartons) — on revient sous 24h avec une solution sur mesure.
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
        <ArcHero />
        <ArcSteps />
        <ArcFeats />
        <ArcWho />
        <ArcCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
