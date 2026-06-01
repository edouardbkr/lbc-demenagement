// ville-page.jsx — Per-city SEO landing page. Reads document.body.dataset.ville.

function VilleHero({ c }) {
  const zone = c.region === "france" ? "Longue distance" : "Côte d'Azur";
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <a href="Zones.html">Zones desservies</a>
          <span className="sep">/</span>
          <span>{c.name}</span>
        </div>
        <h1>Déménagement à <em>{c.name}</em></h1>
        <p className="lede" style={{ padding: "10px" }}>{c.lede}</p>
        <div className="devis-hero-form">
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}

function VilleIntro({ c }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménageur à {c.name}</div>
            <p className="lead">{c.intro}</p>
            <p>
              Quelle que soit la formule — <strong style={{ color: 'var(--ink)' }}>Standard, Premium ou Luxe</strong> — vous bénéficiez de déménageurs déclarés et assurés, d'une assurance complète et d'un devis clair, sans surprise. À {c.name} comme partout sur la Côte d'Azur, le nom est la blague : le travail, lui, est sérieux.
            </p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis.html" className="btn btn-primary">Devis gratuit à {c.name}<span className="arrow">→</span></a>
              <a href="Formules.html" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>Quartiers desservis à {c.name}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
                {c.quartiers.map((q, i) =>
                <span key={i} style={{
                  fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600,
                  border: '1px solid var(--rule-strong)', padding: '8px 14px', color: 'var(--ink-2)'
                }}>{q}</span>
                )}
              </div>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--rule)', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Code postal</strong> · {c.cp}</div>
                <div><strong style={{ color: 'var(--ink)' }}>Secteur</strong> · {c.dept}</div>
                <div><strong style={{ color: 'var(--ink)' }}>Devis</strong> · gratuit sous 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function VilleSpecifics({ c }) {
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre expertise locale</div></div>
          <h2 className="dim-em">Déménager à {c.name},<br /><em>on connaît le terrain.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(' + (c.specifics.length + 1) + ', 1fr)' }}>
          {c.specifics.map((s, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ 0{i + 1}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="value-body">{s.d}</div>
            </div>
          )}
          <div className="value">
            <div className="value-num">★ DEVIS</div>
            <div className="value-title" style={{ marginTop: 8 }}>Réponse sous 24h</div>
            <div className="value-body">Gratuit, sans engagement, avec la formule conseillée pour votre volume à {c.name}.</div>
          </div>
        </div>
      </div>
    </section>);

}

function VilleFormules({ c }) {
  const tiers = [
  { n: "Coup de main", tag: "L'essentiel, bien fait." },
  { n: "Mains libres", tag: "Le confort, sans le stress." },
  { n: "Mains dans les poches", tag: "On s'occupe de tout." }];

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos formules à {c.name}</div></div>
          <h2 className="dim-em">Trois formules,<br /><em>vous choisissez jusqu'où on va.</em></h2>
        </div>
        <div className="blog-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {tiers.map((t, i) =>
          <a key={i} href="Formules.html" className="article-card" style={{ padding: 0 }}>
              <div className="article-body" style={{ padding: '32px 30px 34px' }}>
                <div className="article-meta">Formule 0{i + 1}</div>
                <div className="article-title">{t.n}</div>
                <div className="article-excerpt" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--muted)' }}>« {t.tag} »</div>
                <span className="article-link">Détails &amp; comparatif →</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function VilleNearby({ c }) {
  const items = (c.nearby || []).map((s) => CITIES[s]).filter(Boolean);
  if (!items.length) return null;
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> À proximité</div></div>
          <h2 className="dim-em">On déménage aussi<br /><em>dans les environs.</em></h2>
        </div>
        <div className="seo-cities reveal" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          {items.map((n, i) =>
          <a key={i} href={n.file} style={{
            fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: 'var(--ink)',
            padding: '18px 0', borderBottom: '1px solid var(--rule)', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center'
          }}>
              <span>Déménagement {n.name}</span>
              <span style={{ color: 'var(--accent)' }}>→</span>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function VilleDeep({ c }) {
  if (!c.deep || !c.deep.length) return null;
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> {c.name} en profondeur</div></div>
          <h2 className="dim-em">Chaque quartier,<br /><em>ses règles du jeu.</em></h2>
        </div>
        <div className="ap-values reveal-stagger" style={{ gridTemplateColumns: 'repeat(' + Math.min(c.deep.length, 2) + ',1fr)' }}>
          {c.deep.map((d, i) =>
          <div className="ap-value" key={i}>
              <div className="ap-value-t">{d.t}</div>
              <div className="ap-value-d" style={{ fontSize: 15.5, lineHeight: 1.6 }}>{d.p}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function VilleFaq({ c }) {
  if (!c.faq || !c.faq.length) return null;
  const [open, setOpen] = React.useState(null);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
          <h2 className="dim-em">Déménager à {c.name},<br /><em>vos questions, nos réponses.</em></h2>
        </div>
        <div className="faq-list reveal" style={{ maxWidth: 820 }}>
          {c.faq.map((f, i) =>
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

function VilleQuoteBand({ c }) {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Un déménagement à {c.name} ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Chiffrons-le.</span>
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
  const slug = document.body.getAttribute('data-ville');
  const c = getCity(slug);
  React.useEffect(() => {document.title = "Déménagement " + c.name + " — Devis gratuit 24h · LBC* Les Bras Cassés";}, [c]);
  return (
    <React.Fragment>
      <Nav />
      <main>
        <VilleHero c={c} />
        <VilleIntro c={c} />
        <VilleSpecifics c={c} />
        <VilleDeep c={c} />
        <VilleFormules c={c} />
        <VilleNearby c={c} />
        <VilleFaq c={c} />
        <VilleQuoteBand c={c} />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);