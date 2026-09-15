// apropos-page.jsx — "Qui sommes-nous" : histoire, valeurs, parcours
const I = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const AP_VALUES = [
{ t: "Un seul prix, du devis à la facture", d: "Le prix annoncé est le prix payé. Aucun supplément le jour J, aucune « surprise » à la facture.", icon:
  <I><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /><path d="M9 11.5l2 2 4-4.5" /></I> },
{ t: "Le geste juste", d: "Des déménageurs expérimentés, encadrés par les fondateurs eux-mêmes, qui savent porter un piano comme une boîte à souvenirs.", icon:
  <I><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3L2.5 16a2 2 0 0 1 2.8-2.8L7 15" /><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V7a2 2 0 0 0-4 0v8" /></I> },
{ t: "Vos affaires, comme les nôtres", d: "On protège et on réinstalle chaque meuble comme s'il dormait chez nous le soir.", icon:
  <I><path d="M11.5 8.2c-1-1.9-4-1.5-4 .9 0 1.7 2.2 3.2 4 4.2 1.8-1 4-2.5 4-4.2 0-2.4-3-2.8-4-.9z" /><path d="M3.5 13.8a8.5 8.5 0 0 0 16 0" /><path d="M3.5 13.8v-1.4M19.5 13.8v-1.4" /></I> },
{ t: "À l'heure, toujours", d: "Une fenêtre d'arrivée de 15 minutes. Votre journée démarre quand on l'a dit, pas deux heures plus tard.", icon:
  <I><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></I> }];

/* Parcours réécrit le 27 août 2026. L'ancienne version racontait « un déménagement raté,
   deux amis en colère » : c'est le récit que tout le secteur écrit, il ne dit rien de ce
   qu'on sait faire et il place les fondateurs en victimes. Le vrai actif est la
   transmission du métier, et la méthode qu'on lui ajoute. */
const AP_TIMELINE = [
{ y: "01", t: "La transmission", d: "Anthony apprend le métier auprès de son père, déménageur. Le calage, la protection du mobilier ancien, la lecture d'un accès avant d'engager le camion. Un savoir-faire qui vient des chantiers, pas d'un manuel." },
{ y: "02", t: "Le constat", d: "Le métier a gardé le geste et perdu la rigueur. Devis approximatifs, créneaux à la demi-journée, suppléments annoncés le jour même. Le client subit une organisation qu'il ne peut ni vérifier ni contester." },
{ y: "03", t: "La méthode", d: "Edouard, venu du digital, construit ce qui manquait : chiffrage ligne par ligne sur l'inventaire réel, créneau d'arrivée à l'heure près, conditions écrites avant le chargement. Le geste ne change pas, ce qui l'entoure change entièrement." },
{ y: "04", t: "Aujourd'hui", d: "Des équipes formées et encadrées par les fondateurs, un prix ferme sur chaque devis, et une note de 5,0 sur Google. L'exigence n'est pas un mot d'accueil : elle se lit sur le devis." }];


function AproposHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <span>Qui sommes-nous</span>
        </div>
        <h1>Un métier qui se transmet, <em>une exigence qui se mesure.</em></h1>
        <p className="lede">
          Anthony a appris le métier auprès de son père, déménageur. Edouard vient du digital et de la méthode. LBC* est né de ce que les deux savent faire. <span className="ast">*</span>Voici l’histoire.
        </p>
      </div>
    </section>);

}

function AproposStory() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid" style={{ gridTemplateColumns: '1fr', maxWidth: 820 }}>
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Notre histoire</div>
            <p className="lead">
              Le déménagement est un métier, et <strong style={{ color: 'var(--ink)' }}>Anthony l’a appris auprès de son père, déménageur.</strong> Sangler une armoire ancienne sans marquer le placage, juger d’un escalier avant d’y engager une équipe, charger un camion dans l’ordre exact où on le déchargera. Ce sont des gestes qui ne s’apprennent pas en une saison. Ils se transmettent.
            </p>
            <p>
              Ce savoir-faire existe encore dans le métier. Ce qui manque, c’est la rigueur autour. <strong style={{ color: 'var(--ink)' }}>Des devis approximatifs, des créneaux à la demi-journée, des suppléments annoncés le matin même</strong>, quand le camion est déjà là et qu’il est trop tard pour dire non. Ce n’est pas un défaut de compétence, c’est un défaut de méthode.
            </p>
            <p>
              <strong style={{ color: 'var(--ink)' }}>Edouard vient du digital.</strong> Il a construit l’outil qui manquait : un chiffrage ligne par ligne à partir de l’inventaire réel, un créneau d’arrivée annoncé à l’heure près, des conditions écrites et lisibles avant qu’un seul carton ne bouge. Rien qui remplace le geste, tout ce qui l’entoure.
            </p>
            <p>
              LBC*, c’est cette rencontre. <strong style={{ color: 'var(--ink)' }}>Un métier hérité, une méthode ajoutée</strong>, et une exigence que le client peut vérifier au lieu d’avoir à la croire.
            </p>
            <p className="ap-quote">
              « Le geste, on l’a appris. Ce qu’on a changé, c’est tout ce qu’il y a autour : ce qu’on écrit, ce qu’on annonce, et ce qu’on tient. »
              <span className="ap-quote-by">— Edouard & Anthony, fondateurs de LBC*</span>
            </p>
          </div>
        </div>
      </div>
    </section>);

}

function AproposValues() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos valeurs</div></div>
          <h2 className="dim-em">Ce qui ne se négocie<br /><em>jamais.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {AP_VALUES.map((v, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-ic">{v.icon}</div>
              <div className="ap-value-t">{v.t}</div>
              <div className="ap-value-d">{v.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function AproposTimeline() {
  return (
    <section className="sec" style={{ background: 'var(--paper)', paddingTop: 'clamp(56px,7vw,90px)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre parcours</div></div>
          <h2 className="dim-em">D’un métier appris<br /><em>à une méthode construite.</em></h2>
        </div>
        <div className="ap-timeline reveal-stagger">
          {AP_TIMELINE.map((m, i) =>
          <div className="ap-tl-item" key={i}>
              <div className="ap-tl-year">{m.y}</div>
              <div className="ap-tl-body">
                <div className="ap-tl-dot"></div>
                <div className="ap-tl-t">{m.t}</div>
                <div className="ap-tl-d">{m.d}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function AproposStats() {
  const stats = [
  { n: "15", s: "min", l: "Fenêtre d'arrivée annoncée" },
  { n: "24", s: "h", l: "Pour un devis détaillé" },
  { n: "0", s: "", l: "Frais caché, jamais" },
  { n: "Nice", s: "", l: "Niçois, et fiers de l'être" }];

  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="ap-statsband reveal-stagger">
          {stats.map((st, i) =>
          <div className="ap-stat" key={i}>
              <div className="ap-stat-n">{st.n}<sup>{st.s}</sup></div>
              <div className="ap-stat-l">{st.l}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function QuoteBand() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            On se charge du reste. <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Vraiment.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--ink-2)', marginBottom: 36, fontSize: 17 }}>
            Deux adresses, une surface, et on vous rappelle sous 24h avec un prix clair.
          </p>
          <QuickQuote variant="light" />
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
        <AproposHero />
        <AproposStory />
        <AproposValues />
        <AproposTimeline />
        <AproposStats />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
