/* trust-testimonials.jsx — compilé par build.js, ne pas éditer */
(function () {
const ValueIcon = ({
  which
}) => {
  const props = {
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (which) {
    case "team":
      return React.createElement("svg", props, React.createElement("circle", {
        cx: "14",
        cy: "14",
        r: "5"
      }), React.createElement("circle", {
        cx: "27",
        cy: "16",
        r: "4"
      }), React.createElement("path", {
        d: "M5 32 C5 26 9 23 14 23 C19 23 23 26 23 32"
      }), React.createElement("path", {
        d: "M20 32 C20 28 23 26 27 26 C31 26 34 28 34 32"
      }));
    case "map":
      return React.createElement("svg", props, React.createElement("path", {
        d: "M20 5 C14 5 10 9 10 15 C10 22 20 34 20 34 C20 34 30 22 30 15 C30 9 26 5 20 5 Z"
      }), React.createElement("circle", {
        cx: "20",
        cy: "15",
        r: "3.5"
      }));
    case "clock":
      return React.createElement("svg", props, React.createElement("circle", {
        cx: "20",
        cy: "20",
        r: "14"
      }), React.createElement("path", {
        d: "M20 11 L20 20 L26 24"
      }));
    case "tag":
      return React.createElement("svg", props, React.createElement("path", {
        d: "M19 5 L34 5 L34 20 L20 34 L5 19 Z"
      }), React.createElement("circle", {
        cx: "27",
        cy: "12",
        r: "1.6"
      }));
    case "calendar":
      return React.createElement("svg", props, React.createElement("rect", {
        x: "6",
        y: "9",
        width: "28",
        height: "25",
        rx: "1"
      }), React.createElement("path", {
        d: "M6 16 L34 16"
      }), React.createElement("path", {
        d: "M14 5 L14 12"
      }), React.createElement("path", {
        d: "M26 5 L26 12"
      }), React.createElement("circle", {
        cx: "14",
        cy: "23",
        r: "1.2",
        fill: "currentColor"
      }), React.createElement("circle", {
        cx: "20",
        cy: "23",
        r: "1.2",
        fill: "currentColor"
      }), React.createElement("circle", {
        cx: "26",
        cy: "23",
        r: "1.2",
        fill: "currentColor"
      }));
    default:
      return null;
  }
};
function Values() {
  const values = [{
    num: "①",
    icon: "team",
    title: "Des professionnels qui prennent soin de tout",
    body: "Une équipe expérimentée, encadrée par les fondateurs Edouard et Anthony : impliquée du premier au dernier carton. Vos affaires sont entre de bonnes mains."
  }, {
    num: "②",
    icon: "map",
    title: "De Nice à toute la France",
    body: "Au quotidien sur la Côte d'Azur, Nice, Cannes, Antibes, Monaco… et sur les longues distances partout en France, jusqu'à l'international."
  }, {
    num: "③",
    icon: "clock",
    title: "Un devis clair sous 24h",
    body: "Estimation en ligne ou visite gratuite, puis un prix détaillé ligne par ligne dans la journée ouvrée. Sans engagement. On relance si vous ne répondez pas, sans jamais insister au-delà du raisonnable."
  }, {
    num: "④",
    icon: "tag",
    title: "Le prix annoncé est le prix payé",
    body: "Aucun supplément le jour J, aucun frais caché. On chiffre juste dès le départ. C'est écrit noir sur blanc, et on ne casse jamais notre parole."
  }, {
    num: "⑤",
    icon: "calendar",
    title: "À l'heure, pas à la demi-journée",
    body: "Un créneau d'arrivée précis, annoncé à l'avance, et on vous prévient si la route bouge. Votre journée démarre quand on l'a dit, pas deux heures plus tard."
  }];
  return React.createElement("section", {
    className: "sec",
    id: "pourquoi"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 03 / Pourquoi nous choisir")), React.createElement("h2", {
    className: "dim-em"
  }, "Cinq raisons pr\xE9cises.", React.createElement("br", null), React.createElement("em", null, "Rien de plus."))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 14
    }
  }, "Ce qui distingue un d\xE9m\xE9nageur \xE0 Nice d'un autre se v\xE9rifie avant le jour J : dans le devis, dans l'assurance, et dans l'heure d'arriv\xE9e qu'on vous annonce."), React.createElement("div", {
    className: "values-grid reveal-stagger"
  }, values.map((v, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 0", i + 1, " / 05"), React.createElement("div", {
    className: "value-icon"
  }, React.createElement(ValueIcon, {
    which: v.icon
  })), React.createElement("div", {
    className: "value-title"
  }, v.title), React.createElement("div", {
    className: "value-body"
  }, v.body))))));
}
function Testimonials() {
  const quotes = [{
    text: "Tous simplement génial un déménagement c’est toujours stressant. Mais la C’était hyper bien organisé orchestré ponctuelle, arrangeant je recommande fortement il seront sûrement prévu pour mon futur déménagement. Un grand merci",
    name: "Jonathan D.",
    city: "Avis Google · il y a 7 semaines",
    id: "g0"
  }, {
    text: "Très bonne expérience du début à la fin. L'équipe a été ponctuelle, organisée et très professionnelle. Tous nos meubles ont été parfaitement protégés et manipulés avec beaucoup de soin. Le déménagement s'est déroulé rapidement, dans une excellente ambiance, ce qui a rendu cette journée beaucoup moins stressante. Un grand merci pour votre sérieux et votre efficacité. Je recommande cette entreprise sans hésitation !",
    name: "Mari M.",
    city: "Avis Google · il y a 2 mois",
    id: "g1"
  }, {
    text: "Je suis très satisfait par le déménagement de mon appartement orchestré par LBC Déménagement, travail sérieux, efficace et soigné et répondant à mes attentes ! je les recommande !",
    name: "Damien D.",
    city: "Avis Google · il y a 4 semaines",
    id: "g2"
  }, {
    text: "Excellente prestation lors de mon déménagement l'an passé, merci pour votre professionnalisme et votre engagement !!!",
    name: "Nathalie P.",
    city: "Avis Google · il y a 7 semaines",
    id: "g3"
  }, {
    text: "Je recommande vivement !!! Travail soigné , efficacité, qualité et gentillesse , ce qui est appréciable aujourd’hui. Très professionnel !!!",
    name: "Karine S.",
    city: "Avis Google · il y a 7 semaines",
    id: "g4"
  }];
  const pinRef = React.useRef(null);
  const stickyRef = React.useRef(null);
  const trackRef = React.useRef(null);
  React.useEffect(() => {
    const pin = pinRef.current,
      track = trackRef.current;
    if (!pin || !track) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth >= 981;
    let maxX = 0,
      raf = null;
    const measure = () => {
      maxX = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
      pin.style.height = maxX + window.innerHeight + "px";
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = pin.getBoundingClientRect();
        const total = pin.offsetHeight - window.innerHeight;
        let p = total > 0 ? -rect.top / total : 0;
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        track.style.transform = "translateX(" + (-p * maxX).toFixed(1) + "px)";
      });
    };
    if (reduce) {
      pin.classList.add("no-pin");
      return;
    }
    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", measure);
    const t1 = setTimeout(() => {
      measure();
      onScroll();
    }, 400);
    const t2 = setTimeout(() => {
      measure();
      onScroll();
    }, 1400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  return React.createElement("section", {
    className: "testi-pin",
    id: "avis",
    ref: pinRef
  }, React.createElement("div", {
    className: "testi-sticky",
    ref: stickyRef
  }, React.createElement("div", {
    className: "wrap testi-head"
  }, React.createElement("span", {
    className: "testi-badge"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Avis clients"), React.createElement("h2", null, "Ce qu'en disent celles et ceux", React.createElement("br", null), React.createElement("em", null, "qui nous ont laiss\xE9 les cl\xE9s."))), React.createElement("div", {
    className: "testi-viewport"
  }, React.createElement("div", {
    className: "testi-track",
    ref: trackRef
  }, quotes.map((q, i) => React.createElement("article", {
    className: "testi-card",
    key: i
  }, React.createElement("header", {
    className: "tc-head"
  }, React.createElement("div", {
    className: "tc-id"
  }, React.createElement("div", {
    className: "tc-name"
  }, q.name), React.createElement("div", {
    className: "tc-city"
  }, q.city)), React.createElement("div", {
    className: "tc-stars",
    "aria-hidden": "true"
  }, "\u2605\u2605\u2605\u2605\u2605")), React.createElement("p", {
    className: "tc-text"
  }, q.text))), React.createElement("div", {
    className: "testi-end"
  }, React.createElement("div", {
    className: "te-inner"
  }, React.createElement("div", {
    className: "te-stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), React.createElement("p", null, "Et le prochain avis,", React.createElement("br", null), React.createElement("em", null, "c'est peut-\xEAtre le v\xF4tre.")), React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Demander un devis", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))))));
}
function HomeFaq() {
  const cats = [{
    cat: "Déménager à Nice",
    items: [{
      q: "Combien coûte un déménagement à Nice ?",
      a: prixNiceFaq()
    }, {
      q: "Faut-il une autorisation de stationnement pour déménager à Nice ?",
      a: "Oui, dès que le camion occupe la voie publique, c'est-à-dire presque partout dans Nice. Pour un déménagement à Nice, nous faisons la demande en mairie pour vous, à l'adresse de départ comme à l'arrivée, en tenant compte des délais réels de chaque service. C'est compris dans le devis."
    }, {
      q: "Déménagez-vous aussi en dehors de Nice ?",
      a: "Oui. Nous sommes une entreprise de déménagement niçoise, et nous intervenons dans toutes les Alpes-Maritimes, à Monaco et dans le Var, ainsi que sur la longue distance en France et à l'international au départ de Nice, avec la même équipe et le même devis ferme."
    }]
  }, {
    cat: "Tarifs",
    items: [{
      q: "Le prix annoncé peut-il changer le jour J ?",
      a: "Non. Le prix annoncé est le prix payé. On chiffre précisément à partir du volume et des accès — pas de supplément surprise sur la facture."
    }, {
      q: "Faut-il verser un acompte ?",
      a: "Un acompte raisonnable peut être demandé pour bloquer la date — jamais la totalité d'avance. Le solde est réglé le jour de la prestation. Tout est écrit sur votre devis."
    }]
  }, {
    cat: "Assurance & sécurité",
    items: [{
      q: "Et si un meuble est abîmé ou cassé ?",
      a: "Une assurance multirisque est incluse dans chaque formule. En cas de dommage, on le constate ensemble, on le déclare, et la couverture s'applique selon les plafonds indiqués au devis."
    }, {
      q: "Mes objets de valeur sont-ils couverts ?",
      a: "Oui. Pour les œuvres d'art, instruments ou objets précieux, on prévoit un emballage renforcé sur mesure et une assurance en valeur déclarée, convenue à l'avance."
    }]
  }, {
    cat: "L'équipe",
    items: [{
      q: "Comment choisir un déménageur à Nice ?",
      a: "Regardez trois choses. Un devis écrit qui détaille le volume, l'accès et le stationnement, parce qu'à Nice c'est l'accès qui fait le prix, pas les kilomètres. Une assurance nommée au contrat, avec ses plafonds. Et des avis Google récents, que vous pouvez lire vous-même. Un déménageur niçois sérieux vous demandera l'étage, l'ascenseur et la rue avant d'annoncer un chiffre."
    }, {
      q: "Qui vient réellement faire le déménagement ?",
      a: "Nos équipes, formées et encadrées par les fondateurs Edouard et Anthony. Des professionnels présents du premier au dernier carton — jamais d'inconnu recruté la veille."
    }, {
      q: "Êtes-vous une entreprise sérieuse et déclarée ?",
      a: "Oui : LBC* est une entreprise de déménagement immatriculée, avec SIRET, attestation de capacité de transport, assurance et adresse physique à Nice. Devis écrit, facture en règle, interlocuteur joignable avant, pendant et après."
    }]
  }, {
    cat: "Pratique",
    items: [{
      q: "Sous combien de temps puis-je réserver ?",
      a: "Vous recevez un devis détaillé sous 24h. Idéalement, réservez 2 à 3 semaines à l'avance (plus en haute saison) — mais on gère aussi les demandes serrées, alors appelez-nous."
    }, {
      q: "Travaillez-vous le week-end ?",
      a: "Oui, sur réservation. Les samedis et fins de mois partent vite, pensez à réserver tôt. Dimanches et jours fériés possibles selon les villes."
    }]
  }];
  const [catIdx, setCatIdx] = React.useState(0);
  const [open, setOpen] = React.useState(0);
  return React.createElement("section", {
    className: "sec home-faq",
    id: "faq"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "home-faq-top reveal"
  }, React.createElement("span", {
    className: "testi-badge"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Vos questions"), React.createElement("h2", null, "Questions fr\xE9quentes,", React.createElement("br", null), React.createElement("em", null, "r\xE9ponses droit au but.")), React.createElement("div", {
    className: "home-faq-cats"
  }, cats.map((c, i) => React.createElement("button", {
    key: i,
    className: "hfc-pill" + (i === catIdx ? " active" : ""),
    onClick: () => {
      setCatIdx(i);
      setOpen(0);
    }
  }, c.cat)))), cats.map((c, ci) => React.createElement("div", {
    className: "home-faq-list reveal",
    key: ci,
    hidden: ci !== catIdx
  }, c.items.map((it, i) => React.createElement("div", {
    className: "faq-item" + (ci === catIdx && open === i ? " open" : ""),
    key: ci + "-" + i
  }, React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "inherit",
      fontWeight: "inherit"
    }
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, React.createElement("span", null, it.q), React.createElement("span", {
    className: "ico"
  }, "+"))), React.createElement("div", {
    className: "faq-a"
  }, React.createElement("p", null, it.a)))))), React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": cats.flatMap(c => c.items.map(it => ({
          "@type": "Question",
          "name": it.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": it.a
          }
        })))
      })
    }
  }), React.createElement("div", {
    className: "home-faq-foot reveal"
  }, React.createElement("span", null, "Une question qui n'est pas l\xE0\xA0?"), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"), React.createElement("a", {
    href: "FAQ",
    className: "btn btn-primary"
  }, "Toutes les questions", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}
function QuartiersNice() {
  const Q = [["Vieux-Nice", "Demenagement-Vieux-Nice", "zone piétonne, portage systématique"], ["Cimiez", "Demenagement-Cimiez-Nice", "colline, ascenseurs anciens, grands volumes"], ["Carré d'Or", "Demenagement-Carre-d-Or-Nice", "immeubles haussmanniens, monte-meuble"], ["Libération", "Demenagement-Liberation-Nice", "marché, tramway, stationnement en voirie"], ["Le Port", "Demenagement-Port-Nice", "rues en pente, circulation contrainte"], ["Riquier", "Demenagement-Riquier-Nice", "caves voûtées, rues étroites"], ["Mont Boron", "Demenagement-Mont-Boron-Nice", "routes en lacets, villas, monte-meuble"]];
  return React.createElement("section", {
    className: "sec",
    id: "quartiers-nice"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 05 / Nice, quartier par quartier")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nageur \xE0 Nice,", React.createElement("br", null), React.createElement("em", null, "quartier par quartier."))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 14
    }
  }, "Un d\xE9m\xE9nagement \xE0 Nice ne se passe pas de la m\xEAme fa\xE7on dans le Vieux-Nice, o\xF9 le camion reste aux bornes, et au Mont Boron, o\xF9 le monte-meuble est presque syst\xE9matique. C'est ce qui fait un d\xE9m\xE9nageur \xE0 Nice : conna\xEEtre la rue avant d'y engager le camion. Nous connaissons chaque quartier, ses acc\xE8s et ses r\xE8gles de stationnement : c'est ce qui fait un devis juste et une journ\xE9e sans surprise."), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      marginTop: 26
    }
  }, Q.map(([nom, href, sub], i) => React.createElement("a", {
    className: "value",
    href: href,
    key: i,
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, React.createElement("div", {
    className: "value-title"
  }, "D\xE9m\xE9nagement ", nom), React.createElement("div", {
    className: "value-body"
  }, sub)))), React.createElement("p", {
    className: "reveal",
    style: {
      marginTop: 22
    }
  }, React.createElement("a", {
    href: "Demenagement-Nice",
    className: "btn btn-ghost"
  }, "Les dix quartiers de Nice : prix, acc\xE8s et d\xE9marches", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}
function prixNiceFaq() {
  const P = window.LBC_PRICING;
  const n = x => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const e = P && P.estimer ? P.estimer({
    surface: "t2",
    formule: "standard",
    km: 8
  }) : null;
  const four = e ? "Entre " + n(e.bas) + " et " + n(e.haut) + " € pour un 2 pièces en formule Standard, avec un accès simple. " : "";
  return four + "À Nice, c'est l'accès qui fait le prix, bien plus que la distance : l'étage sans ascenseur, la rue piétonne, le stationnement à réserver. Le prix exact tient dans un devis ferme sous 24 h, et le prix annoncé est le prix payé.";
}
function PrixNice() {
  const f = (s, fo) => {
    const P = window.LBC_PRICING;
    if (!P || !P.estimer) return "sur devis";
    const e = P.estimer({
      surface: s,
      formule: fo,
      km: 8
    });
    const n = x => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return e ? n(e.bas) + " – " + n(e.haut) + " €" : "sur devis";
  };
  const L = [["studio", "Studio", "moins de 30 m²"], ["t2", "2 pièces", "30 à 50 m²"], ["t3", "3 pièces", "50 à 80 m²"], ["t4", "4 pièces", "80 à 100 m²"], ["maison", "Maison", "plus de 90 m²"]];
  return React.createElement("section", {
    className: "sec",
    id: "prix-nice"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 07 / Les prix")), React.createElement("h2", {
    className: "dim-em"
  }, "Combien co\xFBte un d\xE9m\xE9nageur \xE0 Nice.", React.createElement("br", null), React.createElement("em", null, "Des fourchettes r\xE9elles, pas une promesse."))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 14
    }
  }, "Ces prix viennent de notre estimateur, cal\xE9 sur les devis que notre entreprise de d\xE9m\xE9nagement a r\xE9ellement \xE9mis \xE0 Nice et dans les Alpes-Maritimes. Ils supposent un acc\xE8s neutre : rez-de-chauss\xE9e ou ascenseur, camion devant la porte. \xC0 Nice, c'est l'acc\xE8s qui fait varier le prix d'un d\xE9m\xE9nagement \xE0 Nice, bien plus que les kilom\xE8tres : l'\xE9tage sans ascenseur, la rue pi\xE9tonne du Vieux-Nice, le stationnement \xE0 r\xE9server en mairie."), React.createElement("div", {
    className: "tarif-tw reveal",
    style: {
      marginTop: 26
    }
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Logement"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Standard"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Premium"))), React.createElement("tbody", null, L.map(([k, nom, sub]) => React.createElement("tr", {
    key: k
  }, React.createElement("td", null, React.createElement("strong", null, nom), " ", React.createElement("span", {
    className: "tarif-sub"
  }, sub)), React.createElement("td", {
    style: {
      textAlign: "right"
    },
    className: "tarif-prix"
  }, f(k, "standard")), React.createElement("td", {
    style: {
      textAlign: "right"
    },
    className: "tarif-prix"
  }, f(k, "premium"))))))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 20
    }
  }, "La formule Luxe, avec l'emballage de tous vos cartons au d\xE9part et la mise en place \xE0 l'arriv\xE9e, se chiffre apr\xE8s une visio de dix minutes : le contenu des placards de quelqu'un ne se devine pas de l'ext\xE9rieur. Le stationnement, le monte-meuble et le portage sont \xE9crits sur le devis d'un d\xE9m\xE9nagement \xE0 Nice, jamais ajout\xE9s le jour J."), React.createElement("p", {
    className: "reveal",
    style: {
      marginTop: 16,
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Mon prix pour Nice, sous 24 h", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Demenagement-Nice",
    className: "btn btn-ghost"
  }, "Prix, stationnement et d\xE9marches, quartier par quartier", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}
function ServicesNice() {
  const S = [["Déménagement d'appartement à Nice", "Du studio au cinq pièces, avec ou sans ascenseur. Un déménagement à Nice en appartement, c'est d'abord une cage d'escalier : protection du mobilier, démontage et remontage compris dès la formule Premium.", "Formules"], ["Déménagement de maison et de villa", "Cimiez, Mont Boron, les collines niçoises : monte-meuble, allées privées et gros volumes, chiffrés au devis, pas découverts le jour J.", "Demenagement-Nice"], ["Déménagement d'entreprise et de bureaux", "Plan d'implantation, informatique étiquetée poste par poste, travail le week-end ou en soirée pour ne pas arrêter l'activité.", "Entreprise"], ["Monte-meuble à Nice", "Pour les étages sans ascenseur et les fenêtres étroites du centre. Il se réserve au devis, par nos déménageurs professionnels : un monte-meuble ne se trouve pas le matin même.", "Devis"], ["Emballage et cartons", "Le matériel de protection est fourni dans toutes les formules. En formule Luxe, nos déménageurs emballent tout au départ et déballent tout à l'arrivée.", "Formules"], ["Longue distance et international depuis Nice", "Paris, Lyon, Genève, Milan, Barcelone : un seul interlocuteur du chargement à la livraison, et un créneau d'arrivée annoncé.", "Zones"]];
  const V = [["Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var"], ["Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer"], ["Antibes", "Demenagement-Antibes"], ["Villefranche-sur-Mer", "Demenagement-Villefranche-sur-Mer"], ["Saint-Jean-Cap-Ferrat", "Demenagement-Saint-Jean-Cap-Ferrat"], ["Monaco", "Demenagement-Monaco"]];
  return React.createElement("section", {
    className: "sec",
    id: "prestations-nice"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 06 / Nos prestations")), React.createElement("h2", {
    className: "dim-em"
  }, "Une entreprise de d\xE9m\xE9nagement \xE0 Nice,", React.createElement("br", null), React.createElement("em", null, "pour tout ce qui doit bouger."))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 14
    }
  }, "Soci\xE9t\xE9 de d\xE9m\xE9nagement install\xE9e rue d'Italie, au c\u0153ur de Nice, LBC* d\xE9m\xE9nage les particuliers et les entreprises dans toutes les Alpes-Maritimes et \xE0 Monaco, avec la m\xEAme \xE9quipe de d\xE9m\xE9nageurs professionnels form\xE9e par les fondateurs, et le m\xEAme devis ferme. Un d\xE9m\xE9nagement \xE0 Nice commence toujours par une question : par o\xF9 passe le camion."), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      marginTop: 26
    }
  }, S.map(([t, d, href], i) => React.createElement("a", {
    className: "value",
    href: href,
    key: i,
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, React.createElement("div", {
    className: "value-title"
  }, t), React.createElement("div", {
    className: "value-body"
  }, d)))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 26
    }
  }, "D\xE9m\xE9nageur \xE0 Nice, et tout autour de Nice : ", V.map(([nom, href], i) => React.createElement(React.Fragment, {
    key: href
  }, i > 0 ? i === V.length - 1 ? " et " : ", " : "", React.createElement("a", {
    href: href,
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, nom))), ". Chaque commune a sa page, avec ses acc\xE8s et ses r\xE8gles de stationnement, \xE9crite par des d\xE9m\xE9nageurs qui y travaillent chaque semaine. ", React.createElement("a", {
    href: "Zones",
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, "Toutes les communes des Alpes-Maritimes \u2192"))));
}
function EntrepriseNice() {
  const G = [["Une attestation de capacité de transport", "Sans elle, une entreprise de déménagement transporte vos affaires hors la loi, et son assurance ne vous couvre pas. La nôtre porte le numéro JME932603100 : elle figure sur chaque devis et dans nos conditions générales.", "CGV", "Lire nos conditions générales"], ["Un devis écrit, ferme, ligne par ligne", "Volume, étage, accès, stationnement, monte-meuble : tout est chiffré avant le jour J, et le prix annoncé est le prix payé. Une société de déménagement qui chiffre au téléphone découvre l'escalier le jour J, à vos frais.", "Devis", "Demander mon devis"], ["Une assurance nommée, avec ses plafonds", "L'assurance multirisque est comprise dans chaque formule ; l'assureur et les plafonds sont écrits dans nos conditions générales, jointes au devis. « On est assurés », sans contrat nommé, ne vous dit rien.", "CGV", "Voir l'assurance"], ["Une équipe formée, encadrée, présente", "Nos déménageurs sont formés et encadrés par les fondateurs, Edouard et Anthony, présents du premier au dernier carton. Pas de renfort inconnu recruté la veille.", "Apropos", "Qui nous sommes"], ["Des avis publics, lisibles avant de signer", "Nos avis Google sont publiés par nos clients, sous leur nom, et vous pouvez les lire avant de nous appeler. Une entreprise de déménagement à Nice se juge sur ce qu'en disent ceux qu'elle a déménagés.", "https://maps.google.com/?cid=16541024533175288818", "Lire les avis sur Google"]];
  return React.createElement("section", {
    className: "sec",
    id: "entreprise-nice"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 04 / Ce qu'on vous doit")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qu'une entreprise de d\xE9m\xE9nagement \xE0 Nice vous doit.", React.createElement("br", null), React.createElement("em", null, "Et ce que LBC* signe, noir sur blanc."))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 14
    }
  }, "Beaucoup de soci\xE9t\xE9s de d\xE9m\xE9nagement promettent, peu \xE9crivent. Voil\xE0 les cinq choses qu'une entreprise de d\xE9m\xE9nagement s\xE9rieuse \xE0 Nice vous doit avant m\xEAme de charger un carton, et o\xF9 les v\xE9rifier chez nous."), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      marginTop: 26
    }
  }, G.map(([t, d, href, lien], i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, String(i + 1).padStart(2, "0"), " / 05"), React.createElement("div", {
    className: "value-title"
  }, t), React.createElement("div", {
    className: "value-body"
  }, d, " ", React.createElement("a", {
    href: href,
    style: {
      color: "var(--accent)",
      fontWeight: 600
    },
    target: href.indexOf("http") === 0 ? "_blank" : undefined,
    rel: href.indexOf("http") === 0 ? "noopener noreferrer" : undefined
  }, lien, " \u2192"))))), React.createElement("p", {
    className: "lede reveal",
    style: {
      marginTop: 22
    }
  }, "Voil\xE0 ce qui fait, \xE0 nos yeux, une entreprise de d\xE9m\xE9nagement \xE0 Nice : pas des promesses, des pi\xE8ces qu'on peut v\xE9rifier.")));
}
Object.assign(window, {
  Values,
  Testimonials,
  HomeFaq,
  QuartiersNice,
  PrixNice,
  ServicesNice,
  EntrepriseNice
});
  try { Object.assign(window, { Values, Testimonials, HomeFaq, QuartiersNice, prixNiceFaq, PrixNice, ServicesNice, EntrepriseNice }); } catch (e) {}
})();
