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
    title: "Des pros qui prennent soin de tout",
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
  }, "Cinq raisons pr\xE9cises.", React.createElement("br", null), React.createElement("em", null, "Pas de baratin."))), React.createElement("div", {
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
    text: "J'ai fait appel à LBC déménagement et j'ai eu une super expérience ! Edouard et Anthony sont très pros et super sympas. Ils ont pris soin de tous les meubles, démonté et même remonté le canapé puis installé la machine à laver ! Tout était bien sécurisé. Une prestation au top, je recommande !",
    name: "Khalid B.",
    city: "Avis Google",
    id: "khalid"
  }, {
    text: "Une force titanesque et un professionnalisme d'exception. Très bonne adaptation même avec de grosses contraintes : chemin sans route, grosse pente, gros escalier… Merci à vous.",
    name: "Jannick F.",
    city: "Avis Google",
    id: "jannick"
  }, {
    text: "Edouard et Anthony sont parfaits : ponctuels, disponibles, professionnels et agréables en plus. Je recommande chaudement cette entreprise. Vous ne serez pas déçus.",
    name: "Michèle A.",
    city: "Avis Google",
    id: "michele"
  }, {
    text: "Équipe bien managée par M. Edouard, bien équipée (camion, outils de roulage et de protection) et au top, tant au niveau de son professionnalisme (bonne évaluation préalable) que de son dynamisme et sa gentillesse. Je recommande sans hésitation !",
    name: "Denis E.",
    city: "Avis Google",
    id: "denis"
  }, {
    text: "Très bonne expérience du début à la fin. L'équipe a été ponctuelle, organisée et très professionnelle. Tous nos meubles ont été parfaitement protégés et manipulés avec beaucoup de soin. Le déménagement s'est déroulé rapidement, dans une excellente ambiance, ce qui a rendu cette journée beaucoup moins stressante.",
    name: "Mari M.",
    city: "Avis Google",
    id: "mari"
  }, {
    text: "Un service sans faute et exceptionnel à tout point de vue. Une gentillesse qui nous rassure et un professionnalisme qui nous donne confiance. Merci pour votre prestation !",
    name: "Nanou S.",
    city: "Avis Google",
    id: "nanou"
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
    cat: "Tarifs",
    items: [{
      q: "Le prix annoncé peut-il changer le jour J ?",
      a: "Non. Le prix du devis est le prix payé. On chiffre précisément à partir du volume et des accès — pas de supplément surprise sur la facture."
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
      q: "Qui vient réellement faire le déménagement ?",
      a: "Nos équipes, formées et encadrées par les fondateurs Edouard et Anthony. Des professionnels présents du premier au dernier carton — jamais d'inconnu recruté la veille."
    }, {
      q: "Êtes-vous une entreprise sérieuse et déclarée ?",
      a: "Oui : LBC* est une société immatriculée, avec SIRET, assurance et adresse physique à Nice. Devis écrit, facture en règle, interlocuteur joignable avant, pendant et après."
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
  const list = cats[catIdx].items;
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
  }, c.cat)))), React.createElement("div", {
    className: "home-faq-list reveal"
  }, list.map((it, i) => React.createElement("div", {
    className: "faq-item" + (open === i ? " open" : ""),
    key: catIdx + "-" + i
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, React.createElement("span", null, it.q), React.createElement("span", {
    className: "ico"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, React.createElement("p", null, it.a))))), React.createElement("div", {
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
Object.assign(window, {
  Values,
  Testimonials,
  HomeFaq
});
  try { Object.assign(window, { Values, Testimonials, HomeFaq }); } catch (e) {}
})();
