/* blog-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function BlogHero() {
  return React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "Les Bras Cass\xE9s.html"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, "Blog & conseils")), React.createElement("h1", null, "Le carnet des ", React.createElement("em", null, "Bras Cass\xE9s.")), React.createElement("p", {
    className: "lede"
  }, "Prix, m\xE9thode, d\xE9marches, astuces locales : tout ce qu'on aurait aim\xE9 qu'on nous explique avant notre premier d\xE9m\xE9nagement. ", React.createElement("span", {
    className: "ast"
  }, "*"), "\xC9crit par ceux qui portent les cartons.")));
}
function ArticleCard({
  a,
  featured
}) {
  const href = "Article.html?a=" + a.slug;
  return React.createElement("a", {
    href: href,
    className: featured ? "blog-featured" : "article-card"
  }, React.createElement("div", {
    className: "article-thumb"
  }, React.createElement("div", {
    className: "ph"
  }, React.createElement("div", {
    className: "ph-label"
  }, a.thumb)), React.createElement("div", {
    className: "article-cat"
  }, a.cat)), React.createElement("div", {
    className: "article-body"
  }, React.createElement("div", {
    className: "article-meta"
  }, a.date, " \xB7 ", a.read, " de lecture"), React.createElement("div", {
    className: "article-title"
  }, a.title), React.createElement("div", {
    className: "article-excerpt"
  }, a.excerpt), React.createElement("span", {
    className: "article-link"
  }, "Lire l'article \u2192")));
}
function BlogList() {
  const [featured, ...rest] = ARTICLES;
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement(ArticleCard, {
    a: featured,
    featured: true
  })), React.createElement("div", {
    className: "blog-grid reveal-stagger"
  }, rest.map(a => React.createElement(ArticleCard, {
    key: a.slug,
    a: a
  })))));
}
function QuoteBand() {
  return React.createElement("section", {
    className: "sec cta-band"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 'clamp(34px,4vw,58px)',
      color: 'var(--cream-on-dark)',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "Assez lu ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "D\xE9m\xE9nageons.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Votre devis gratuit, deux minutes chrono."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(BlogHero, null), React.createElement(BlogList, null), React.createElement(QuoteBand, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { BlogHero, ArticleCard, BlogList, QuoteBand, App }); } catch (e) {}
})();
