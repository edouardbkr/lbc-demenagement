// apropos-page.jsx — "Qui sommes-nous" : histoire, valeurs, parcours
const I = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

const AP_VALUES = [
{ t: "L'honnêteté d'abord", d: "Le prix du devis est le prix payé. Pas d'astérisque en bas de page, pas de « surprise » le jour J.", icon:
  <I><path d="M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z" /><path d="M9 11.5l2 2 4-4.5" /></I> },
{ t: "Le geste juste", d: "Edouard et Anthony portent vos meubles eux-mêmes : deux déménageurs déclarés et assurés, qui savent porter un piano comme une boîte à souvenirs.", icon:
  <I><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3L2.5 16a2 2 0 0 1 2.8-2.8L7 15" /><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V7a2 2 0 0 0-4 0v8" /></I> },
{ t: "Vos affaires, comme les nôtres", d: "On protège, on cale, on remonte chaque meuble comme s'il dormait chez nous le soir.", icon:
  <I><path d="M11.5 8.2c-1-1.9-4-1.5-4 .9 0 1.7 2.2 3.2 4 4.2 1.8-1 4-2.5 4-4.2 0-2.4-3-2.8-4-.9z" /><path d="M3.5 13.8a8.5 8.5 0 0 0 16 0" /><path d="M3.5 13.8v-1.4M19.5 13.8v-1.4" /></I> },
{ t: "À l'heure, toujours", d: "Une fenêtre d'arrivée de 15 minutes. Votre journée démarre quand on l'a dit, pas deux heures plus tard.", icon:
  <I><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></I> }];

const AP_TIMELINE = [
{ y: "01", t: "Le déclic", d: "Après un déménagement catastrophique — cartons écrasés, équipe fantôme à 8h — deux amis niçois en ont assez. Un constat simple : on peut tellement mieux faire." },
{ y: "02", t: "La promesse", d: "On fonde LBC* avec une règle non négociable : traiter les affaires des gens comme les nôtres. C'est nous qui portons vos cartons — déclarés, assurés, jamais d'inconnu recruté la veille — et un prix annoncé qu'on respecte." },
{ y: "03", t: "Plus loin que Nice", d: "Déménagements locaux, longues distances, entreprises et garde-meuble sécurisé : de Monaco à Paris, on s'organise pour tenir chaque délai et chaque promesse." },
{ y: "04", t: "Aujourd'hui", d: "Des dizaines de déménagements menés avec soin, notre camion et nos deux paires de bras, et des clients qui nous recommandent. Le nom fait sourire. Le travail, lui, reste sérieux." }];


function AproposHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Qui sommes-nous</span>
        </div>
        <h1>Deux amis, un camion, <em>et une vieille rancune contre les déménagements ratés.</em></h1>
        <p className="lede">
          On a appelé notre boîte « Les Bras Cassés » pour qu'on n'oublie jamais d'où on vient — et pourquoi on fait ce métier autrement. <span className="ast">*</span>Voici l'histoire.
        </p>
      </div>
    </section>);

}

function AproposStory() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Notre histoire</div>
            <p className="lead">
              Un samedi, <strong style={{ color: 'var(--ink)' }}>Edouard et Anthony</strong> déménagent un appartement niçois avec une société trouvée en ligne. Résultat : <strong style={{ color: 'var(--ink)' }}>deux heures de retard, un buffet de famille rayé, et zéro excuse.</strong>
            </p>
            <p>
              Ce jour-là, ils se regardent et se disent la même chose : <em>« On peut faire tellement mieux. »</em> Pas avec des promesses marketing, mais avec du bon sens — deux gars déclarés et assurés, du matériel entretenu, un prix annoncé qu'on respecte, et le soin qu'on mettrait à transporter nos propres souvenirs.
            </p>
            <p>
              Aujourd'hui, c'est toujours <strong style={{ color: 'var(--ink)' }}>Edouard et Anthony</strong> qui viennent porter vos cartons — pas des inconnus envoyés à leur place. À deux, un camion, et une obsession qui n'a pas bougé : <strong style={{ color: 'var(--ink)' }}>que votre déménagement arrête d'être votre problème.</strong>
            </p>
            <p className="ap-quote">
              « On voulait bâtir l'entreprise qu'on aurait rêvé d'appeler le jour de notre propre galère. »
              <span className="ap-quote-by">— Edouard & Anthony, fondateurs de LBC*</span>
            </p>
          </div>
          <div className="about-photo-stack reveal">
            <image-slot id="ap-founders" class="ap-slot portrait" shape="rounded" radius="2" placeholder="Edouard & Anthony"></image-slot>
            <image-slot id="ap-truck" class="ap-slot truck" shape="rounded" radius="2" placeholder="Le camion LBC"></image-slot>
            <image-slot id="ap-detail" class="ap-slot detail" shape="rounded" radius="2" placeholder="En plein déménagement"></image-slot>
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
          <h2 className="dim-em">De la galère<br /><em>au camion qui roule droit.</em></h2>
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
  { n: "2", s: "", l: "Edouard & Anthony, en personne" },
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
