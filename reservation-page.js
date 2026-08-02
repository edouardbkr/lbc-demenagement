/* reservation-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState: useRState
} = React;
const BOXES = {
  S: {
    size: "S",
    surf: "1 – 5 m²",
    price: 119,
    ex: "Quelques cartons, un studio en transition.",
    boxes: "≈ 30 cartons"
  },
  M: {
    size: "M",
    surf: "6 – 10 m²",
    price: 199,
    ex: "Le contenu d'un 2 pièces meublé.",
    boxes: "≈ 1 camionnette"
  },
  L: {
    size: "L",
    surf: "11 – 15 m²",
    price: 299,
    ex: "Un 3 pièces complet, électroménager inclus.",
    boxes: "≈ 1 camion"
  },
  XL: {
    size: "XL",
    surf: "16 – 20 m²",
    price: 399,
    ex: "Une maison ou des locaux professionnels.",
    boxes: "≈ 1 grand camion"
  }
};
function ResaPage() {
  useScrollReveal();
  const params = new URLSearchParams(window.location.search);
  const initial = (params.get("box") || "L").toUpperCase();
  const [boxKey, setBoxKey] = useRState(BOXES[initial] ? initial : "L");
  const [data, setData] = useRState({
    nom: "",
    email: "",
    tel: "",
    date: "",
    duree: ""
  });
  const [card, setCard] = useRState({
    holder: "",
    number: "",
    exp: "",
    cvc: ""
  });
  const [tried, setTried] = useRState(false);
  const [done, setDone] = useRState(false);
  const box = BOXES[boxKey];
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const fmtPhone = raw => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };
  const fmtCard = raw => (raw || "").replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  const fmtExp = raw => {
    let d = (raw || "").replace(/\D/g, "").slice(0, 4);
    if (d.length >= 3) return d.slice(0, 2) + "/" + d.slice(2);
    return d;
  };
  const setCardField = (k, v) => setCard(c => ({
    ...c,
    [k]: v
  }));
  const okCoord = data.nom.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.tel.replace(/\D/g, "").length === 10 && data.date;
  const cardDigits = card.number.replace(/\D/g, "");
  const okCard = card.holder.trim().length > 1 && cardDigits.length === 16 && /^\d{2}\/\d{2}$/.test(card.exp) && card.cvc.replace(/\D/g, "").length >= 3;
  const canPay = okCoord && okCard;
  const pay = e => {
    e.preventDefault();
    if (!canPay) {
      setTried(true);
      return;
    }
    if (window.fbq) window.fbq("track", "Lead");
    setDone(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const ref = "LBC-" + box.size + "-" + Math.floor(100000 + Math.random() * 900000);
  const vErr = cond => tried && cond ? " field-error" : "";
  const vOk = cond => cond ? " is-valid" : "";
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement("section", {
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
    href: "Stockage"
  }, "Stockage"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, "R\xE9server")), React.createElement("h1", null, done ? "Réservation confirmée." : "Réservez votre box."), React.createElement("p", {
    className: "lede"
  }, done ? "Votre box est bloqué à votre nom. On vous contacte pour planifier l'enlèvement." : React.createElement(React.Fragment, null, "Bloquez votre box en quelques minutes. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Sans engagement de dur\xE9e \u2014 vous arr\xEAtez quand vous voulez.")))), React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, done ? React.createElement("div", {
    className: "form-card devis-success",
    role: "status"
  }, React.createElement("div", {
    className: "ds-check",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), React.createElement("h3", null, "Merci ", data.nom.trim().split(" ")[0], ", c'est r\xE9serv\xE9\xA0!"), React.createElement("p", null, "Votre ", React.createElement("strong", null, "box ", box.size, " (", box.surf, ")"), " est bloqu\xE9. R\xE9f\xE9rence\xA0: ", React.createElement("strong", null, ref), "."), React.createElement("p", {
    className: "ds-sub"
  }, "Un r\xE9capitulatif part sur ", React.createElement("strong", null, data.email), ". On vous appelle au ", data.tel, " pour fixer la date d'enl\xE8vement."), React.createElement("div", {
    className: "ds-actions"
  }, React.createElement("a", {
    className: "btn btn-primary",
    href: "/"
  }, "Retour \xE0 l'accueil", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    className: "btn btn-ghost",
    href: "Stockage"
  }, "Voir le service stockage"))) : React.createElement("form", {
    className: "devis-form resa-grid",
    onSubmit: pay
  }, React.createElement("div", {
    className: "form-card"
  }, React.createElement("div", {
    className: "form-section-head"
  }, "Votre box ", React.createElement("span", null, "\u2014 modifiable")), React.createElement("div", {
    className: "resa-boxpick"
  }, Object.keys(BOXES).map(k => React.createElement("button", {
    type: "button",
    key: k,
    className: "resa-box-opt" + (k === boxKey ? " sel" : ""),
    onClick: () => setBoxKey(k)
  }, React.createElement("span", {
    className: "rb-size"
  }, k), React.createElement("span", {
    className: "rb-surf"
  }, BOXES[k].surf), React.createElement("span", {
    className: "rb-price"
  }, BOXES[k].price, " \u20AC", React.createElement("small", null, "/mois"))))), React.createElement("div", {
    className: "form-section-head",
    style: {
      marginTop: 30
    }
  }, "Vos coordonn\xE9es"), React.createElement("div", {
    className: "form-grid"
  }, React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Pr\xE9nom & nom"), React.createElement("input", {
    type: "text",
    className: vErr(!data.nom.trim()) + vOk(data.nom.trim().length > 1),
    value: data.nom,
    onChange: e => set("nom", e.target.value),
    placeholder: "Jean Dupont",
    autoComplete: "name"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Email"), React.createElement("input", {
    type: "email",
    className: vErr(!data.email.trim()) + vOk(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)),
    value: data.email,
    onChange: e => set("email", e.target.value),
    placeholder: "jean@exemple.fr",
    autoComplete: "email"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "T\xE9l\xE9phone"), React.createElement("input", {
    type: "tel",
    inputMode: "numeric",
    className: vErr(!data.tel.trim()) + vOk(data.tel.replace(/\D/g, "").length === 10),
    value: data.tel,
    onChange: e => set("tel", fmtPhone(e.target.value)),
    placeholder: "06 12 34 56 78",
    autoComplete: "tel"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Date d'enl\xE8vement souhait\xE9e"), React.createElement("input", {
    type: "date",
    className: vErr(!data.date) + vOk(!!data.date),
    value: data.date,
    onChange: e => set("date", e.target.value)
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Dur\xE9e estim\xE9e"), React.createElement("select", {
    value: data.duree,
    onChange: e => set("duree", e.target.value)
  }, React.createElement("option", {
    value: ""
  }, "Sans id\xE9e pr\xE9cise"), React.createElement("option", null, "Moins d'1 mois"), React.createElement("option", null, "1 \xE0 3 mois"), React.createElement("option", null, "3 \xE0 6 mois"), React.createElement("option", null, "Plus de 6 mois")))), React.createElement("div", {
    className: "form-section-head",
    style: {
      marginTop: 30
    }
  }, "Paiement ", React.createElement("span", null, "\u2014 1er mois, sans engagement")), React.createElement("div", {
    className: "resa-pay"
  }, React.createElement("div", {
    className: "resa-pay-head"
  }, React.createElement("span", {
    className: "resa-lock",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "9",
    rx: "2"
  }), React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })), "Paiement s\xE9curis\xE9"), React.createElement("span", {
    className: "resa-cards",
    "aria-hidden": "true"
  }, "VISA \xB7 MC \xB7 CB")), React.createElement("div", {
    className: "form-grid"
  }, React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Titulaire de la carte"), React.createElement("input", {
    type: "text",
    className: vErr(!card.holder.trim()) + vOk(card.holder.trim().length > 1),
    value: card.holder,
    onChange: e => setCardField("holder", e.target.value),
    placeholder: "JEAN DUPONT",
    autoComplete: "cc-name"
  })), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Num\xE9ro de carte"), React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    className: vErr(cardDigits.length !== 16) + vOk(cardDigits.length === 16),
    value: card.number,
    onChange: e => setCardField("number", fmtCard(e.target.value)),
    placeholder: "1234 5678 9012 3456",
    autoComplete: "cc-number"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Expiration"), React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    className: vErr(!/^\d{2}\/\d{2}$/.test(card.exp)) + vOk(/^\d{2}\/\d{2}$/.test(card.exp)),
    value: card.exp,
    onChange: e => setCardField("exp", fmtExp(e.target.value)),
    placeholder: "MM/AA",
    autoComplete: "cc-exp"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "CVC"), React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    className: vErr(card.cvc.replace(/\D/g, "").length < 3) + vOk(card.cvc.replace(/\D/g, "").length >= 3),
    value: card.cvc,
    onChange: e => setCardField("cvc", e.target.value.replace(/\D/g, "").slice(0, 4)),
    placeholder: "123",
    autoComplete: "cc-csc"
  })))), tried && !canPay && React.createElement("p", {
    className: "resa-incomplete"
  }, "V\xE9rifiez les champs surlign\xE9s avant de valider.")), React.createElement("aside", {
    className: "devis-aside"
  }, React.createElement("div", {
    className: "aside-card resa-summary"
  }, React.createElement("h4", null, "R\xE9capitulatif"), React.createElement("div", {
    className: "resa-sum-box"
  }, React.createElement("span", {
    className: "resa-sum-size"
  }, box.size), React.createElement("div", null, React.createElement("div", {
    className: "resa-sum-surf"
  }, box.surf), React.createElement("div", {
    className: "resa-sum-ex"
  }, box.boxes))), React.createElement("ul", {
    className: "resa-lines"
  }, React.createElement("li", null, React.createElement("span", null, "Loyer mensuel"), React.createElement("span", null, box.price, " \u20AC")), React.createElement("li", null, React.createElement("span", null, "Frais de dossier"), React.createElement("span", {
    className: "resa-free"
  }, "Offerts")), React.createElement("li", null, React.createElement("span", null, "Caution"), React.createElement("span", {
    className: "resa-free"
  }, "Aucune"))), React.createElement("div", {
    className: "resa-total"
  }, React.createElement("span", null, "\xC0 r\xE9gler aujourd'hui"), React.createElement("strong", null, box.price, " \u20AC")), React.createElement("p", {
    className: "resa-note"
  }, "Puis ", box.price, " \u20AC/mois, ", React.createElement("strong", null, "sans engagement"), ". R\xE9siliable \xE0 tout moment avec 8 jours de pr\xE9avis."), React.createElement("button", {
    type: "submit",
    className: "form-submit resa-submit"
  }, "R\xE9server et payer ", box.price, " \u20AC", React.createElement("span", null, "\u2192")), React.createElement("p", {
    className: "resa-trust"
  }, React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "9",
    rx: "2"
  }), React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })), "Donn\xE9es chiffr\xE9es \xB7 Assurance incluse"))))))), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(ResaPage, null));
  try { Object.assign(window, { ResaPage }); } catch (e) {}
})();
