/* contact-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState
} = React;
const LEAD_EMAIL = "contact@lbcdemenagement.com";
const LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;
function sendContactToCockpit(upd) {
  const np = (upd.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const payload = {
    source: at && at.canal || "site_web",
    attribution: at || null,
    statut: "Message page Contact",
    client: {
      prenom,
      nom,
      tel: upd.tel || "",
      email: upd.email || "",
      contactPref: ""
    },
    formule: "standard",
    formulaireType: "partiel",
    dateSouhaitee: upd.date || "",
    message: ["Message envoyé depuis la page Contact.", upd.type ? "Type de déménagement : " + upd.type : "", upd.message ? "Message du client : " + upd.message : ""].filter(Boolean).join("\n")
  };
  try {
    return fetch("/api/lead", {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        payload
      })
    }).then(r => r.ok).catch(() => null);
  } catch (e) {
    return Promise.resolve(null);
  }
}
function ContactHero() {
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
  }, "/"), React.createElement("span", null, "CONTACT")), React.createElement("h1", null, "Parlons de votre ", React.createElement("em", null, "d\xE9m\xE9nagement.")), React.createElement("p", {
    className: "lede"
  }, "Une question, une date \xE0 caler, un volume \xE0 estimer ? Laissez-nous un message \u2014 on revient vers vous dans la journ\xE9e ouvr\xE9e. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Pas de num\xE9ro surtax\xE9, pas de spam.")));
}
function ContactInfo() {
  const items = [{
    k: "Téléphone",
    v: "06 15 97 65 77",
    href: "tel:+33615976577"
  }, {
    k: "Email",
    v: "contact@lbcdemenagement.com",
    href: "mailto:contact@lbcdemenagement.com"
  }, {
    k: "Adresse",
    v: "12 rue d'Italie, 06000 Nice"
  }, {
    k: "Horaires",
    v: "Lun–Sam · 8h–19h"
  }, {
    k: "Zone",
    v: "Nice · PACA · Toute la France"
  }];
  return React.createElement("div", {
    className: "contact-info"
  }, React.createElement("h2", {
    className: "dim-em"
  }, "On r\xE9pond ", React.createElement("em", null, "vite,"), React.createElement("br", null), "et par un humain."), React.createElement("p", {
    className: "contact-lede"
  }, "Le plus rapide reste le t\xE9l\xE9phone. Mais si vous pr\xE9f\xE9rez \xE9crire, ce formulaire arrive directement dans notre bo\xEEte \u2014 on vous rappelle avec un prix pr\xE9cis et d\xE9finitif, pas un app\xE2t marketing."), React.createElement("dl", {
    className: "contact-coords"
  }, items.map((it, i) => React.createElement("div", {
    key: i,
    className: "contact-coord"
  }, React.createElement("dt", null, it.k), React.createElement("dd", null, it.href ? React.createElement("a", {
    href: it.href
  }, it.v) : it.v)))), React.createElement("p", {
    className: "contact-quick"
  }, "Vous voulez un chiffrage complet ? Le ", React.createElement("a", {
    href: "Devis"
  }, "formulaire de devis"), " prend deux minutes."));
}
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [last, setLast] = useState(null);
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const boxParam = params.get("box");
  const typeParam = params.get("type");
  const presetType = boxParam || typeParam === "stockage" ? "Stockage / garde-meuble" : "";
  const presetMsg = boxParam ? "Bonjour, je souhaite réserver un box de stockage taille " + boxParam + ". Pouvez-vous me recontacter ? Merci." : "";
  const formatPhoneFR = raw => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);else if (d.startsWith("0033")) d = "0" + d.slice(4);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };
  const submit = async e => {
    e.preventDefault();
    const upd = {};
    for (const el of e.currentTarget.elements) {
      if (el.name) upd[el.name] = el.value;
    }
    if (upd._honey) {
      setSent(true);
      return;
    }
    if (sending) return;
    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        keepalive: true,
        body: JSON.stringify({
          _subject: "✉️ Nouveau message (page Contact) — Les Bras Cassés",
          _template: "table",
          "Nom": upd.nom || "—",
          "Téléphone": upd.tel || "—",
          "Email": upd.email || "—",
          "Date souhaitée": upd.date || "—",
          "Type de déménagement": upd.type || "—",
          "Message": upd.message || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    setSending(true);
    let ok = null;
    try {
      ok = await Promise.race([sendContactToCockpit(upd), new Promise(r => setTimeout(() => r(null), 6000))]);
    } catch (err) {}
    setSending(false);
    if (ok === false) {
      setLast(upd);
      setFailed(true);
      return;
    }
    if (window.fbq) window.fbq("track", "Lead");
    setSent(true);
  };
  const retry = async () => {
    if (sending || !last) return;
    setSending(true);
    let ok = null;
    try {
      ok = await Promise.race([sendContactToCockpit(last), new Promise(r => setTimeout(() => r(null), 6000))]);
    } catch (err) {}
    setSending(false);
    if (ok === false) return;
    if (window.fbq) window.fbq("track", "Lead");
    setFailed(false);
    setSent(true);
  };
  if (failed) {
    return React.createElement("div", {
      className: "form-card contact-card contact-thanks"
    }, React.createElement("div", {
      className: "contact-thanks-mark",
      style: {
        background: 'rgba(194,54,43,.10)',
        color: '#C2362B'
      }
    }, "!"), React.createElement("h3", null, "Nous n'avons pas pu enregistrer votre message."), React.createElement("p", null, "Un souci technique de notre c\xF4t\xE9. Le plus rapide\xA0: appelez-nous au ", React.createElement("a", {
      href: "tel:+33615976577"
    }, "06 15 97 65 77"), ", ou \xE9crivez-nous \xE0 ", React.createElement("a", {
      href: "mailto:contact@lbcdemenagement.com"
    }, "contact@lbcdemenagement.com"), ". On vous r\xE9pond tout de suite."), React.createElement("p", {
      style: {
        marginTop: 12
      }
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-ghost",
      disabled: sending,
      onClick: retry
    }, sending ? "Envoi en cours…" : "Réessayer l'envoi")));
  }
  if (sent) {
    return React.createElement("div", {
      className: "form-card contact-card contact-thanks"
    }, React.createElement("div", {
      className: "contact-thanks-mark"
    }, "\u2713"), React.createElement("h3", null, "Message envoy\xE9."), React.createElement("p", null, "Merci ! On revient vers vous dans la journ\xE9e ouvr\xE9e. Pour une urgence, appelez-nous au ", React.createElement("a", {
      href: "tel:+33615976577"
    }, "06 15 97 65 77"), "."));
  }
  return React.createElement("form", {
    className: "form-card contact-card",
    onSubmit: submit
  }, React.createElement("input", {
    type: "text",
    name: "_honey",
    className: "hp-field",
    tabIndex: "-1",
    autoComplete: "off",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "form-grid"
  }, React.createElement("div", {
    className: "lf"
  }, React.createElement("label", {
    htmlFor: "c-nom"
  }, "Nom & pr\xE9nom"), React.createElement("input", {
    id: "c-nom",
    name: "nom",
    type: "text",
    placeholder: "Jean Dupont",
    required: true
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", {
    htmlFor: "c-tel"
  }, "T\xE9l\xE9phone"), React.createElement("input", {
    id: "c-tel",
    name: "tel",
    type: "tel",
    inputMode: "numeric",
    autoComplete: "tel",
    placeholder: "06 12 34 56 78",
    required: true,
    onInput: e => {
      e.target.value = formatPhoneFR(e.target.value);
    }
  })), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", {
    htmlFor: "c-email"
  }, "Email"), React.createElement("input", {
    id: "c-email",
    name: "email",
    type: "email",
    placeholder: "jean@exemple.fr",
    required: true
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", {
    htmlFor: "c-date"
  }, "Date souhait\xE9e"), React.createElement("input", {
    id: "c-date",
    name: "date",
    type: "date"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", {
    htmlFor: "c-type"
  }, "Type de d\xE9m\xE9nagement"), React.createElement("select", {
    id: "c-type",
    name: "type",
    defaultValue: presetType
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Choisir\u2026"), React.createElement("option", null, "Coup de main"), React.createElement("option", null, "Mains libres"), React.createElement("option", null, "Mains dans les poches"), React.createElement("option", null, "Entreprise / bureaux"), React.createElement("option", null, "Stockage / garde-meuble"))), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", {
    htmlFor: "c-message"
  }, "Votre message"), React.createElement("textarea", {
    id: "c-message",
    name: "message",
    defaultValue: presetMsg,
    placeholder: "Dites-nous tout : volume, acc\xE8s, dates, objets particuliers\u2026"
  }))), React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, React.createElement("button", {
    type: "submit",
    className: "form-submit",
    disabled: sending
  }, sending ? "Envoi en cours…" : "Envoyer le message", React.createElement("span", null, "\u2192"))), React.createElement("p", {
    className: "contact-formnote"
  }, "R\xE9ponse sous 24h ouvr\xE9es \xB7 Aucune donn\xE9e revendue."));
}
function ContactSection() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "devis-form reveal contact-grid"
  }, React.createElement(ContactInfo, null), React.createElement(ContactForm, null))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(ContactHero, null), React.createElement(ContactSection, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { sendContactToCockpit, ContactHero, ContactInfo, ContactForm, ContactSection, App }); } catch (e) {}
})();
