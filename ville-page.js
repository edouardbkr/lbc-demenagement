/* ville-page.jsx — compilé par build.js, ne pas éditer */
(function () {
function VilleHero({
  c
}) {
  const zone = c.region === "france" ? "Longue distance" : "Côte d'Azur";
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
    href: "Zones"
  }, "Zones desservies"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, c.eyebrow || c.name)), React.createElement("h1", null, c.h1 || React.createElement(React.Fragment, null, "D\xE9m\xE9nagement ", c.prep || "à", " ", React.createElement("em", null, c.name))), React.createElement("p", {
    className: "lede",
    style: {
      padding: "10px"
    }
  }, c.lede), React.createElement("div", {
    className: "devis-hero-form"
  }, React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function VilleIntro({
  c
}) {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "about-grid"
  }, React.createElement("div", {
    className: "about-copy reveal"
  }, React.createElement("div", {
    className: "sec-num",
    style: {
      marginBottom: 22
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Votre d\xE9m\xE9nageur \xE0 ", c.name), React.createElement("p", {
    className: "lead"
  }, c.intro), React.createElement("p", null, "Quelle que soit la formule \u2014 ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Standard, Premium ou Luxe"), " \u2014 vous b\xE9n\xE9ficiez de d\xE9m\xE9nageurs exp\xE9riment\xE9s et soigneux, d'une assurance compl\xE8te et d'un devis clair, sans surprise. \xC0 ", c.name, " comme partout sur la C\xF4te d'Azur, l'acc\xE8s est rep\xE9r\xE9 avant le chiffrage, et le prix annonc\xE9 est le prix pay\xE9."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis gratuit \xE0 ", c.name, React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Formules",
    className: "btn btn-ghost"
  }, "Voir les formules"))), React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "aside-card",
    style: {
      background: 'var(--paper-2)',
      color: 'var(--ink)',
      border: '1px solid var(--rule)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--ink)'
    }
  }, "Quartiers desservis \xE0 ", c.name), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 8
    }
  }, c.quartiers.map((q, i) => {
    const page = (window.QUARTIERS_PAGES || {})[q];
    return page ? React.createElement("a", {
      key: i,
      href: page,
      style: {
        color: 'var(--accent)',
        fontWeight: 600,
        textDecoration: 'none'
      }
    }, q) : React.createElement("span", {
      key: i
    }, q);
  })), React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Code postal"), " \xB7 ", c.cp), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Secteur"), " \xB7 ", c.dept), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Devis"), " \xB7 gratuit sous 24h")))))));
}
function VilleSpecifics({
  c
}) {
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
  }, "*"), " Notre expertise locale")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nager ", c.prep || "à", " ", c.name, ",", React.createElement("br", null), React.createElement("em", null, "on conna\xEEt le terrain."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(' + (c.specifics.length + 1) + ', 1fr)'
    }
  }, c.specifics.map((s, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 0", i + 1), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, s.t), React.createElement("div", {
    className: "value-body"
  }, s.d))), React.createElement("div", {
    className: "value"
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 DEVIS"), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, "R\xE9ponse sous 24h"), React.createElement("div", {
    className: "value-body"
  }, "Gratuit, sans engagement, avec la formule conseill\xE9e pour votre volume \xE0 ", c.name, ".")))));
}
function VilleFormules({
  c
}) {
  const tiers = [{
    n: "Standard",
    tag: "L'essentiel, bien fait."
  }, {
    n: "Premium",
    tag: "Le confort, sans le stress."
  }, {
    n: "Luxe",
    tag: "On s'occupe de tout."
  }];
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Nos formules ", c.prep || "à", " ", c.name)), React.createElement("h2", {
    className: "dim-em"
  }, "Trois formules,", React.createElement("br", null), React.createElement("em", null, "vous choisissez jusqu'o\xF9 on va."))), React.createElement("div", {
    className: "blog-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(3,1fr)'
    }
  }, tiers.map((t, i) => React.createElement("a", {
    key: i,
    href: "Formules",
    className: "article-card",
    style: {
      padding: 0
    }
  }, React.createElement("div", {
    className: "article-body",
    style: {
      padding: '32px 30px 34px'
    }
  }, React.createElement("div", {
    className: "article-meta"
  }, "Formule 0", i + 1), React.createElement("div", {
    className: "article-title"
  }, t.n), React.createElement("div", {
    className: "article-excerpt",
    style: {
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--muted)'
    }
  }, "\xAB ", t.tag, " \xBB"), React.createElement("span", {
    className: "article-link"
  }, "D\xE9tails & comparatif \u2192")))))));
}
function VilleNearby({
  c
}) {
  const items = (c.nearby || []).map(s => CITIES[s]).filter(Boolean);
  if (!items.length) return null;
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
  }, "*"), " \xC0 proximit\xE9")), React.createElement("h2", {
    className: "dim-em"
  }, "On d\xE9m\xE9nage aussi", React.createElement("br", null), React.createElement("em", null, "dans les environs."))), React.createElement("div", {
    className: "seo-cities reveal",
    style: {
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))'
    }
  }, items.map((n, i) => React.createElement("a", {
    key: i,
    href: n.file,
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--ink)',
      padding: '18px 0',
      borderBottom: '1px solid var(--rule)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement("span", null, "D\xE9m\xE9nagement ", n.name), React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2192"))))));
}
function VilleDeep({
  c
}) {
  if (!c.deep || !c.deep.length) return null;
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", c.name, " en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "Chaque quartier,", React.createElement("br", null), React.createElement("em", null, "ses r\xE8gles du jeu."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(' + Math.min(c.deep.length, 2) + ',1fr)'
    }
  }, c.deep.map((d, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, d.t), React.createElement("div", {
    className: "ap-value-d",
    style: {
      fontSize: 15.5,
      lineHeight: 1.6
    }
  }, d.p))))));
}
function VilleFaq({
  c
}) {
  if (!c.faq || !c.faq.length) return null;
  const [open, setOpen] = React.useState(null);
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nager ", c.prep || "à", " ", c.name, ",", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, c.faq.map((f, i) => React.createElement("div", {
    className: "faq-item" + (open === i ? " open" : ""),
    key: i
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? null : i)
  }, React.createElement("span", null, f.q), React.createElement("span", {
    className: "ico"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, React.createElement("p", null, f.a)))))));
}
function VilleQuoteBand({
  c
}) {
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
  }, "Un d\xE9m\xE9nagement ", c.prep || "à", " ", c.name, " ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Chiffrons-le.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Deux adresses, une surface \u2014 r\xE9ponse gratuite sous 24h."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  const slug = document.body.getAttribute('data-ville');
  const c = getCity(slug);
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(VilleHero, {
    c: c
  }), React.createElement(VilleIntro, {
    c: c
  }), React.createElement(VilleSpecifics, {
    c: c
  }), React.createElement(VilleDeep, {
    c: c
  }), React.createElement(VilleFormules, {
    c: c
  }), React.createElement(PreuveVille, {
    ville: c.name
  }), React.createElement(VilleNearby, {
    c: c
  }), React.createElement(VilleFaq, {
    c: c
  }), React.createElement(VilleQuoteBand, {
    c: c
  })), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { VilleHero, VilleIntro, VilleSpecifics, VilleFormules, VilleNearby, VilleDeep, VilleFaq, VilleQuoteBand, App }); } catch (e) {}
})();
