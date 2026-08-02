// article-page.jsx — Single article reader

/**
 * Quel article afficher ?
 *
 * Chaque article a désormais sa propre page (Article-<slug>.html), générée par gen-articles.js,
 * qui porte le slug dans l'attribut data-article du <body>. C'est la voie normale : une page,
 * une adresse, un titre, une canonique, un balisage.
 *
 * L'ancienne forme `Article?a=slug` reste acceptée pour ne pas casser les liens déjà partagés
 * ou déjà indexés par Google.
 */
function currentSlug() {
  const m = window.location.search.match(/[?&]a=([^&]+)/);
  if (m) return decodeURIComponent(m[1]);
  return (document.body && document.body.dataset && document.body.dataset.article) || null;
}

function ArticleHero({ a }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <a href="Blog">Blog</a>
          <span className="sep">/</span>
          <span>{a.cat}</span>
        </div>
        <h1>{a.title}</h1>
        <p className="lede art-hero-meta">
          <span className="amx amx-cat">{a.cat}</span>
          <span className="amx-sep">·</span>
          <span className="amx">{a.date}</span>
          <span className="amx-sep">·</span>
          <span className="amx">{a.read} de lecture</span>
        </p>

      </div>
    </section>
  );
}

function ArticleBody({ a }) {
  const Body = a.body;
  return (
    <article className="sec">
      <div className="wrap">
        <div className="prose reveal">
          {/* L'emplacement prévu par la maquette pour l'illustration de l'article. Il restait
              vide (un cadre gris avec un libellé) : c'est ici que l'image va, pas au-dessus
              du titre, sinon elle fait doublon et pousse tout le contenu vers le bas.

              Pas de loading="lazy" : c'est la plus grande image visible à l'ouverture, donc
              celle que Google mesure pour le LCP. La différer ralentirait la page.
              Le ratio 16/7 vient de la maquette, objectFit recadre proprement. */}
          <div style={{aspectRatio:'16/7', marginBottom: 48, overflow:'hidden', borderRadius: 14}}>
            {a.image ?
              <img src={a.image} alt={a.imageAlt || a.title} decoding="async" fetchPriority="high"
                   width="1200" height="800"
                   style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
              <div className="ph"><div className="ph-label">{a.thumb}</div></div>}
          </div>
          <Body />
          <div style={{marginTop: 56, paddingTop: 32, borderTop:'1px solid var(--rule)', display:'flex', gap:14, flexWrap:'wrap', alignItems:'center'}}>
            <a href="Devis" className="btn btn-primary">Obtenir mon devis gratuit<span className="arrow">→</span></a>
            <a href="Blog" className="btn btn-ghost">← Tous les articles</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function MoreArticles({ current }) {
  const others = ARTICLES.filter(a => a.slug !== current.slug).slice(0, 3);
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> À lire aussi</div></div>
          <h2 className="dim-em">D'autres conseils<br/><em>pour déménager serein.</em></h2>
        </div>
        <div className="blog-grid reveal-stagger">
          {others.map(a => (
            <a key={a.slug} href={"Article-" + a.slug} className="article-card">
              <div className="article-thumb">
                {/* Vignettes des articles liés : loading="lazy", elles sont en bas de page. */}
                {a.image ?
                  <img src={a.image} alt={a.imageAlt || a.title} loading="lazy" decoding="async"
                       width="1200" height="800"
                       style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
                  <div className="ph"><div className="ph-label">{a.thumb}</div></div>}
                <div className="article-cat">{a.cat}</div>
              </div>
              <div className="article-body">
                <div className="article-meta">{a.date} · {a.read}</div>
                <div className="article-title">{a.title}</div>
                <span className="article-link">Lire →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  useScrollReveal();
  const a = getArticle(currentSlug());
  // Sur la page générée, titre et canonique sont déjà justes dans le HTML : on n'y touche pas.
  // Sur l'ancienne adresse `Article?a=slug`, on les corrige et on pointe la canonique vers la
  // nouvelle page, pour que Google concentre le référencement sur une seule adresse par article.
  React.useEffect(() => {
    if (document.body.dataset.article) return;
    document.title = a.title;
    const url = "https://lbcdemenagement.com/Article-" + a.slug;
    let lien = document.querySelector('link[rel="canonical"]');
    if (!lien) { lien = document.createElement("link"); lien.rel = "canonical"; document.head.appendChild(lien); }
    lien.href = url;
  }, [a]);
  return (
    <React.Fragment>
      <Nav />
      <main>
        <ArticleHero a={a} />
        <ArticleBody a={a} />
        <MoreArticles current={a} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
