/* article-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function currentSlug() {
  const m = window.location.search.match(/[?&]a=([^&]+)/);
  if (m) return decodeURIComponent(m[1]);
  return document.body && document.body.dataset && document.body.dataset.article || null;
}
function ArticleHero({
  a
}) {
  return React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("a", {
    href: "Blog"
  }, "Blog"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, a.cat)), React.createElement("h1", null, a.title), React.createElement("p", {
    className: "lede art-hero-meta"
  }, React.createElement("span", {
    className: "amx amx-cat"
  }, a.cat), React.createElement("span", {
    className: "amx-sep"
  }, "\xB7"), React.createElement("span", {
    className: "amx"
  }, a.date), React.createElement("span", {
    className: "amx-sep"
  }, "\xB7"), React.createElement("span", {
    className: "amx"
  }, a.read, " de lecture")), a.image && React.createElement("figure", {
    style: {
      margin: '28px 0 0',
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, React.createElement("img", {
    src: a.image,
    alt: a.imageAlt || a.title,
    decoding: "async",
    fetchPriority: "high",
    width: "1200",
    height: "800",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }))));
}
function ArticleBody({
  a
}) {
  const Body = a.body;
  return React.createElement("article", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "prose reveal"
  }, React.createElement("div", {
    style: {
      aspectRatio: '16/7',
      marginBottom: 48,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "ph"
  }, React.createElement("div", {
    className: "ph-label"
  }, a.thumb))), React.createElement(Body, null), React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 32,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Obtenir mon devis gratuit", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Blog",
    className: "btn btn-ghost"
  }, "\u2190 Tous les articles")))));
}
function MoreArticles({
  current
}) {
  const others = ARTICLES.filter(a => a.slug !== current.slug).slice(0, 3);
  return React.createElement("section", {
    className: "sec testimonials"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " \xC0 lire aussi")), React.createElement("h2", {
    className: "dim-em"
  }, "D'autres conseils", React.createElement("br", null), React.createElement("em", null, "pour d\xE9m\xE9nager serein."))), React.createElement("div", {
    className: "blog-grid reveal-stagger"
  }, others.map(a => React.createElement("a", {
    key: a.slug,
    href: "Article-" + a.slug,
    className: "article-card"
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
  }, a.date, " \xB7 ", a.read), React.createElement("div", {
    className: "article-title"
  }, a.title), React.createElement("span", {
    className: "article-link"
  }, "Lire \u2192")))))));
}
function App() {
  useScrollReveal();
  const a = getArticle(currentSlug());
  React.useEffect(() => {
    if (document.body.dataset.article) return;
    document.title = a.title;
    const url = "https://lbcdemenagement.com/Article-" + a.slug;
    let lien = document.querySelector('link[rel="canonical"]');
    if (!lien) {
      lien = document.createElement("link");
      lien.rel = "canonical";
      document.head.appendChild(lien);
    }
    lien.href = url;
  }, [a]);
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(ArticleHero, {
    a: a
  }), React.createElement(ArticleBody, {
    a: a
  }), React.createElement(MoreArticles, {
    current: a
  })), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { currentSlug, ArticleHero, ArticleBody, MoreArticles, App }); } catch (e) {}
})();
