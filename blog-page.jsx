// blog-page.jsx — Blog listing

function BlogHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>Blog &amp; conseils</span>
        </div>
        <h1>Le carnet des <em>Bras Cassés.</em></h1>
        <p className="lede">
          Prix, méthode, démarches, astuces locales : tout ce qu'on aurait aimé qu'on nous explique avant notre premier déménagement. <span className="ast">*</span>Écrit par ceux qui portent les cartons.
        </p>
      </div>
    </section>
  );
}

function ArticleCard({ a, featured }) {
  const href = "Article.html?a=" + a.slug;
  return (
    <a href={href} className={featured ? "blog-featured" : "article-card"}>
      <div className="article-thumb">
        <div className="ph"><div className="ph-label">{a.thumb}</div></div>
        <div className="article-cat">{a.cat}</div>
      </div>
      <div className="article-body">
        <div className="article-meta">{a.date} · {a.read} de lecture</div>
        <div className="article-title">{a.title}</div>
        <div className="article-excerpt">{a.excerpt}</div>
        <span className="article-link">Lire l'article →</span>
      </div>
    </a>
  );
}

function BlogList() {
  const [featured, ...rest] = ARTICLES;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="reveal">
          <ArticleCard a={featured} featured />
        </div>
        <div className="blog-grid reveal-stagger">
          {rest.map(a => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{fontFamily:'var(--serif)', fontWeight:600, fontSize:'clamp(34px,4vw,58px)', color:'var(--cream-on-dark)', letterSpacing:'-0.02em', marginBottom: 12, textAlign:'center'}}>
            Assez lu ? <span className="scribble" style={{fontFamily:'var(--script)', color:'var(--accent)', display:'inline-block', transform:'rotate(-3deg)'}}>Déménageons.</span>
          </h2>
          <p style={{textAlign:'center', color:'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17}}>
            Votre devis gratuit, deux minutes chrono.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>
  );
}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <BlogHero />
        <BlogList />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
