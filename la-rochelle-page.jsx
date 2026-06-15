// la-rochelle-page.jsx — Page dédiée très complète : Déménagement La Rochelle
const { useState: useStateLR } = React;
const LRI = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const LR_QUARTIERS = ["Vieux-Port", "Le Gabut", "Saint-Nicolas", "Les Minimes", "La Pallice", "Tasdon", "Mireuil", "Laleu", "Villeneuve-les-Salines", "Le Centre Historique", "Port-Neuf", "La Genette"];

const LR_SPECIFICS = [
{ t: "Centre historique à arcades", d: "Rues piétonnes, arcades médiévales et pavés, immeubles anciens sans ascenseur : stationnement réservé en mairie, portage maîtrisé et monte-meuble au cœur de la vieille ville." },
{ t: "Quartier des Minimes", d: "Plus grand port de plaisance d'Europe : résidences étudiantes, copropriétés et accès marina coordonnés en amont avec gardiens et syndics." },
{ t: "Vers les îles", d: "Ré, Oléron, Aix : on déménage sur les îles, en intégrant pont, péage saisonnier, marées et navette bateau au planning et au devis." }];


const LR_DEEP = [
{ t: "Une ville tournée vers l'eau", p: "La Rochelle se vit autour de son port : le Vieux-Port et ses tours médiévales (Saint-Nicolas, la Chaîne, la Lanterne), le Gabut coloré, l'immense marina des Minimes. Le centre historique est piéton, pavé, bordé d'arcades, et ses immeubles anciens en pierre de taille n'ont presque jamais d'ascenseur. On y déménage au portage soigné sous les arcades, on réserve l'emplacement camion auprès de la mairie et on installe un monte-meuble quand l'escalier ancien ne laisse pas passer le mobilier." },
{ t: "Étudiants, plaisanciers et familles", p: "Ville universitaire et capitale française de la voile, La Rochelle brasse des profils très variés : étudiants des résidences des Minimes, plaisanciers, jeunes actifs, familles installées à la Genette, à Port-Neuf ou à Tasdon, retraités venus pour la douceur de l'Atlantique. Studio meublé, maison rochelaise en pierre, appartement de copropriété ou résidence secondaire face à l'océan : on adapte la formule, l'équipe et le volume à chaque projet, du plus petit au plus exigeant." },
{ t: "Le pont vers les îles", p: "Île de Ré, Oléron, Aix : ces déménagements insulaires sont une spécialité locale qui ne s'improvise pas. On intègre le passage du pont de Ré et son péage, la circulation estivale qui sature l'accès aux îles, les marées, et pour l'Île d'Aix la logistique du bac, accessible uniquement par bateau. Le tout est anticipé dans le planning et chiffré au devis, pour livrer sans mauvaise surprise même au bout d'une route de sel." },
{ t: "La Rochelle ↔ Nice, et toute la France", p: "Si on connaît si bien La Rochelle, c'est qu'on y assure régulièrement la liaison longue distance depuis la Côte d'Azur, et inversement. La Rochelle–Nice, comme tout grand trajet, se fait en camion dédié et plombé, avec une seule équipe du chargement à la livraison, sans groupage ni transbordement. Mutations, rapprochements familiaux, changements de vie entre Atlantique et Méditerranée : on remet un devis ferme et, si vos dates décalent, un garde-meuble relais fait le pont." }];


const LR_SERVICES = [
{ t: "Déménagement local", d: "Dans La Rochelle et l'agglomération (Aytré, Lagord, Périgny, Châtelaillon) : intervention rapide, tous volumes." },
{ t: "Longue distance", d: "La Rochelle ↔ toute la France, dont Nice et la Côte d'Azur : camion dédié, une seule équipe, délais tenus." },
{ t: "Vers les îles", d: "Ré, Oléron, Aix : déménagements insulaires planifiés selon ponts, marées et navettes." },
{ t: "Garde-meuble", d: "Box sécurisé pour une transition entre deux logements ou une résidence secondaire." }];


const LR_FAQ = [
{ q: "Intervenez-vous dans le centre historique piéton ?", a: "Oui. On réserve l'autorisation de stationnement au plus près, et on gère le portage sous les arcades ; un monte-meuble est prévu quand l'escalier ancien des immeubles en pierre ne passe pas." },
{ q: "Déménagez-vous sur l'Île de Ré et l'Île d'Oléron ?", a: "Oui, régulièrement. On intègre le passage du pont et son péage, la navette bateau pour l'Île d'Aix, les marées et la circulation estivale dans le planning et le devis." },
{ q: "Faites-vous La Rochelle – Nice et la longue distance ?", a: "Absolument : c'est l'une de nos liaisons longue distance. Camion dédié, une seule équipe du chargement à la livraison, sans groupage, et prix clair et ferme." },
{ q: "Gérez-vous les résidences des Minimes ?", a: "Oui : copropriétés, résidences étudiantes et accès marina sont coordonnés en amont avec gardiens et syndics, avec réservation d'ascenseur si besoin." },
{ q: "Déménagez-vous les étudiants à La Rochelle ?", a: "Bien sûr, c'est fréquent vu l'université et les résidences des Minimes : on gère les petits volumes et les studios meublés à un tarif honnête, surtout à la rentrée." },
{ q: "Proposez-vous un garde-meuble à La Rochelle ?", a: "Oui, en box sécurisé : idéal pour une transition entre deux logements, une résidence secondaire ou un décalage de dates sur un trajet longue distance." }];


function LRHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Déménagement La Rochelle</span>
        </div>
        <h1>Déménagement à <em>La Rochelle</em></h1>
        <p className="lede" style={{ padding: "10px 0" }}>
          Du Vieux-Port aux Minimes, du centre à arcades jusqu'aux îles de Ré et d'Oléron : on déménage La Rochelle et sa région avec le soin de déménageurs expérimentés et soigneux. <span className="ast">*</span>Devis gratuit sous 24h.
        </p>
        <div className="devis-hero-form">
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}

function LRIntro() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménageur à La Rochelle</div>
            <p className="lead">La Rochelle, ses trois tours, son Vieux-Port et ses arcades médiévales, est une ville maritime au charme unique et aux accès parfois exigeants. Centre historique piéton et pavé, immeubles anciens sans ascenseur, plus grand port de plaisance d'Europe aux Minimes, et un pont vers les îles de Ré et d'Oléron : chaque secteur a ses contraintes, qu'on connaît et qu'on anticipe. On y déménage particuliers, étudiants, plaisanciers et entreprises, du studio au bord de l'eau à la maison rochelaise en pierre de taille.</p>
            <p>Quelle que soit la formule — <strong style={{ color: 'var(--ink)' }}>Coup de main, Mains libres ou Mains dans les poches</strong> — vous bénéficiez de déménageurs expérimentés et soigneux, d'une assurance complète et d'un devis clair et définitif. Le nom est la blague : le travail, lui, est sérieux.</p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis.html" className="btn btn-primary">Devis gratuit à La Rochelle<span className="arrow">→</span></a>
              <a href="Formules.html" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>Quartiers desservis</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
                {LR_QUARTIERS.map((q, i) =>
                <span key={i} style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, border: '1px solid var(--rule-strong)', padding: '8px 14px', color: 'var(--ink-2)' }}>{q}</span>
                )}
              </div>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--rule)', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Code postal</strong> · 17000</div>
                <div><strong style={{ color: 'var(--ink)' }}>Secteur</strong> · Charente-Maritime (17)</div>
                <div><strong style={{ color: 'var(--ink)' }}>Devis</strong> · gratuit sous 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function LRSpecifics() {
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre expertise locale</div></div>
          <h2 className="dim-em">Déménager à La Rochelle,<br /><em>on connaît le terrain (et la marée).</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {LR_SPECIFICS.map((s, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ 0{i + 1}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="value-body">{s.d}</div>
            </div>
          )}
          <div className="value">
            <div className="value-num">★ DEVIS</div>
            <div className="value-title" style={{ marginTop: 8 }}>Réponse sous 24h</div>
            <div className="value-body">Gratuit, sans engagement, avec la formule conseillée pour votre volume à La Rochelle.</div>
          </div>
        </div>
      </div>
    </section>);

}

function LRDeep() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> La Rochelle en profondeur</div></div>
          <h2 className="dim-em">Une ville tournée vers l'eau,<br /><em>un déménagement qui suit le rythme.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {LR_DEEP.map((d, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{d.t}</div>
              <div className="ap-value-d" style={{ fontSize: 15.5, lineHeight: 1.6 }}>{d.p}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function LRServices() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos services à La Rochelle</div></div>
          <h2 className="dim-em">Local, longue distance,<br /><em>îles et garde-meuble.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {LR_SERVICES.map((s, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{s.t}</div>
              <div className="ap-value-d">{s.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function LRFaq() {
  const [open, setOpen] = useStateLR(null);
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
          <h2 className="dim-em">Déménager à La Rochelle,<br /><em>vos questions, nos réponses.</em></h2>
        </div>
        <div className="faq-list reveal" style={{ maxWidth: 820 }}>
          {LR_FAQ.map((f, i) =>
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

function LRCTA() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Un déménagement à La Rochelle ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Chiffrons-le.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Deux adresses, une surface — réponse gratuite sous 24h.
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
        <LRHero />
        <LRIntro />
        <LRSpecifics />
        <LRDeep />
        <LRServices />
        <LRFaq />
        <LRCTA />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
