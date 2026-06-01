// article-page.jsx — Single article reader (reads ?a=slug)

function currentSlug() {
  const m = window.location.search.match(/[?&]a=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function ArticleHero({ a }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <a href="Blog.html">Blog</a>
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
          <div style={{aspectRatio:'16/7', marginBottom: 48, overflow:'hidden'}}>
            <div className="ph"><div className="ph-label">{a.thumb}</div></div>
          </div>
          <Body />
          <div style={{marginTop: 56, paddingTop: 32, borderTop:'1px solid var(--rule)', display:'flex', gap:14, flexWrap:'wrap', alignItems:'center'}}>
            <a href="Devis.html" className="btn btn-primary">Obtenir mon devis gratuit<span className="arrow">→</span></a>
            <a href="Blog.html" className="btn btn-ghost">← Tous les articles</a>
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
            <a key={a.slug} href={"Article.html?a=" + a.slug} className="article-card">
              <div className="article-thumb">
                <div className="ph"><div className="ph-label">{a.thumb}</div></div>
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
  React.useEffect(() => { document.title = a.title + " · LBC* Les Bras Cassés"; }, [a]);
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
