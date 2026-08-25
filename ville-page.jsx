// ville-page.jsx — Per-city SEO landing page. Reads document.body.dataset.ville.

function VilleHero({ c }) {
  const zone = c.region === "france" ? "Longue distance" : "Côte d'Azur";
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <a href="Zones">Zones desservies</a>
          <span className="sep">/</span>
          <span>{c.eyebrow || c.name}</span>
        </div>
        {/* Une commune peut porter son propre H1 : Nice le fait, parce que l'accueil
            vise déjà « déménageur à Nice » et que deux pages sur le même mot-clé se
            concurrencent. Voir le commentaire en tête de city-data.jsx. */}
        <h1>{c.h1 || <>Déménagement <em>{c.avecPrep || ((c.prep || "à") + " " + c.name)}</em></>}</h1>
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
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Votre déménageur {c.avecPrep || ((c.prep || "à") + " " + c.name)}</div>
            <p className="lead">{c.intro}</p>
            <p>
              Quelle que soit la formule — <strong style={{ color: 'var(--ink)' }}>Standard, Premium ou Luxe</strong> — vous bénéficiez de déménageurs expérimentés et soigneux, d'une assurance complète et d'un devis clair, sans surprise. {(() => { const f = c.avecPrep || ((c.prep || "à") + " " + c.name); return f.charAt(0).toUpperCase() + f.slice(1); })()} comme partout sur la Côte d'Azur, l'accès est repéré avant le chiffrage, et le prix annoncé est le prix payé.
            </p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis" className="btn btn-primary">Devis gratuit {c.avecPrep || ((c.prep || "à") + " " + c.name)}<span className="arrow">→</span></a>
              <a href="Formules" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h2 style={{ color: 'var(--ink)' }}>Quartiers desservis {c.avecPrep || ((c.prep || "à") + " " + c.name)}</h2>
              {/* ⚠️ SUR NICE, LES QUARTIERS SONT DES LIENS, PAS DU TEXTE. Sept d'entre eux
                  ont leur propre page, et c'est ce maillage qui les fait remonter : une
                  page profonde sans lien depuis une page plus forte reste invisible.
                  Ailleurs, les quartiers ne sont que des noms, et le texte suffit. */}

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px 0', marginTop: 8 }}>
                {c.quartiers.map((q, i) => {
                  const page = (window.QUARTIERS_PAGES || {})[q];
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <span aria-hidden="true" style={{ color: 'var(--muted)', opacity: .55, padding: '0 9px' }}>·</span>}
                      {page
                        ? <a href={page} style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>{q}</a>
                        : <span>{q}</span>}
                    </React.Fragment>);
                })}
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
          <h2 className="dim-em">Déménager {c.avecPrep || ((c.prep || "à") + " " + c.name)},<br /><em>on connaît le terrain.</em></h2>
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
            <div className="value-body">Gratuit, sans engagement, avec la formule conseillée pour votre volume {c.avecPrep || ((c.prep || "à") + " " + c.name)}.</div>
          </div>
        </div>
      </div>
    </section>);

}

function VilleFormules({ c }) {
  const tiers = [
  { n: "Standard", tag: "L'essentiel, bien fait." },
  { n: "Premium", tag: "Le confort, sans le stress." },
  { n: "Luxe", tag: "On s'occupe de tout." }];

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Nos formules {c.avecPrep || ((c.prep || "à") + " " + c.name)}</div></div>
          <h2 className="dim-em">Trois formules,<br /><em>vous choisissez jusqu'où on va.</em></h2>
        </div>
        <p className="lede" style={{ marginBottom: 26 }}>La grille est la même partout : votre déménageur {c.avecPrep || ((c.prep || "à") + " " + c.name)} applique le tarif qu'il applique à Nice, sans majoration de secteur. Seuls l'accès et le volume font varier le prix.</p>
        <div className="blog-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {tiers.map((t, i) =>
          <a key={i} href="Formules" className="article-card" style={{ padding: 0 }}>
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
        <p className="lede" style={{ marginBottom: 22 }}>Un déménagement {c.avecPrep || ((c.prep || "à") + " " + c.name)} finit souvent dans la commune d'à côté, ou en part. Vous cherchez une entreprise de déménagement {c.avecPrep || ((c.prep || "à") + " " + c.name)} qui couvre aussi les alentours : c'est la même équipe, le même camion et le même prix ferme.</p>
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
          <h2 className="dim-em">Déménager {c.avecPrep || ((c.prep || "à") + " " + c.name)},<br /><em>vos questions, nos réponses.</em></h2>
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
            Un déménagement {c.avecPrep || ((c.prep || "à") + " " + c.name)} ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Chiffrons-le.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Deux adresses, une surface — réponse gratuite sous 24h.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}


/* ── Contenu de fond, alimente par ville-fond.jsx.
   Chaque commune n'affiche que ses propres sections : une commune sans entree
   garde sa page courte plutot que d'afficher des titres vides. Le detail du
   pourquoi et la regle anti-cannibalisation sont en tete de ville-fond.jsx. */
const fond = (c) => (window.VILLE_FOND || {})[c && c.slug] || null;

function VilleContexte({ c }) {
  const f = fond(c); if (!f) return null;
  const ou = c.avecPrep || ((c.prep || "à") + " " + c.name);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 05 / Le terrain</div></div>
          {/* Le titre vient des donnees : un H2 identique d'une commune a l'autre
              recreerait le squelette partage qui a produit 28 % de recouvrement
              sur les quartiers. Chaque commune ecrit le sien. */}
          <h2 className="dim-em">{f.titreContexte ? f.titreContexte[0] : "Ce qui rend un déménagement"} <em>{f.titreContexte ? f.titreContexte[1] : (ou + " particulier.")}</em></h2>
        </div>
        <p className="lead" style={{ maxWidth: 820 }}>{f.contexte}</p>
      </div>
    </section>);
}

function VilleSections({ c }) {
  const f = fond(c); if (!f || !f.sections) return null;
  return (
    <React.Fragment>
      {f.sections.map((sec, i) => (
        <section className="sec" key={i}>
          <div className="wrap">
            <div className="sec-head reveal">
              <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}>
                <span className="asterisk">*</span> {String(6 + i).padStart(2, '0')} / Sur place</div></div>
              <h2 className="dim-em">{sec.t}</h2>
            </div>
            <p style={{ maxWidth: 820, lineHeight: 1.78 }}>{sec.d}</p>
          </div>
        </section>))}
    </React.Fragment>);
}

function VilleJour({ c }) {
  const f = fond(c); if (!f || !f.jour) return null;
  const ou = c.avecPrep || ((c.prep || "à") + " " + c.name);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 10 / Le jour J</div></div>
          <h2 className="dim-em">{f.titreJour ? f.titreJour[0] : ("Une journée " + ou + ",")} <em>{f.titreJour ? f.titreJour[1] : "heure par heure."}</em></h2>
        </div>
        <ol style={{ maxWidth: 840, listStyle: 'none', padding: 0, margin: 0 }}>
          {f.jour.map((e, i) => (
            <li key={i} style={{ display: 'flex', gap: 20, alignItems: 'baseline', padding: '14px 0', borderTop: i ? '1px solid var(--rule)' : 'none' }}>
              <span style={{ fontFamily: '"DM Sans"', fontWeight: 700, minWidth: 74, whiteSpace: 'nowrap' }}>{e.h}</span>
              <span style={{ lineHeight: 1.7 }}>{e.t}</span>
            </li>))}
        </ol>
      </div>
    </section>);
}

function VilleErreurs({ c }) {
  const f = fond(c); if (!f || !f.erreurs) return null;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 11 / À éviter</div></div>
          <h2 className="dim-em">{f.titreErreurs ? f.titreErreurs[0] : "Les trois erreurs qui coûtent"} <em>{f.titreErreurs ? f.titreErreurs[1] : "une journée entière."}</em></h2>
        </div>
        <div className="about-grid" style={{ marginTop: 8 }}>
          {f.erreurs.map((e, i) => (
            <div key={i} className="ap-value">
              <h3 className="ap-value-t">{e.t}</h3>
              <p className="ap-value-d">{e.d}</p>
            </div>))}
        </div>
      </div>
    </section>);
}

function App() {
  useScrollReveal();
  const slug = document.body.getAttribute('data-ville');
  const c = getCity(slug);
  // Le <title> vient du HTML, pose par gen-villes-seo.js. Il etait reecrit ici au
  // chargement par une formule generique identique sur les dix-huit pages, et comme
  // Google execute le JavaScript, c'est celle-la qu'il indexait.
  return (
    <React.Fragment>
      <Nav />
      <main>
        <VilleHero c={c} />
        <VilleIntro c={c} />
        <VilleSpecifics c={c} />
        <VilleDeep c={c} />
        <VilleContexte c={c} />
        <VilleSections c={c} />
        <VilleJour c={c} />
        <VilleErreurs c={c} />
        <VilleFormules c={c} />
        <PreuveVille ville={c.avecPrep || ((c.prep || "à") + " " + c.name)} />
        <VilleNearby c={c} />
        <VilleFaq c={c} />
        <VilleQuoteBand c={c} />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);