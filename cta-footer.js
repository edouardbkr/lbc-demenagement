/* cta-footer.jsx — compilé par build.js, ne pas éditer */
(function () {
const CTA_LEAD_EMAIL = "contact@lbcdemenagement.com";
const CTA_LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + CTA_LEAD_EMAIL;
function ctaSendToCockpit(upd) {
  const np = (upd.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const payload = {
    source: at && at.canal || "site_web",
    attribution: at || null,
    statut: "Demande de rappel (accueil)",
    client: {
      prenom,
      nom,
      tel: upd.tel || "",
      email: upd.email || "",
      contactPref: "Téléphone"
    },
    formule: "standard",
    formulaireType: "partiel",
    dateSouhaitee: upd.date || "",
    contactPref: "Téléphone",
    message: ["Demande de rappel captée sur le bandeau de la page d'accueil.", upd.type ? "Type de déménagement : " + upd.type : ""].filter(Boolean).join("\n")
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
function CTA() {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [last, setLast] = React.useState(null);
  const enregistrer = upd => Promise.race([ctaSendToCockpit(upd), new Promise(r => setTimeout(() => r(null), 6000))]);
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
      fetch(CTA_LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        keepalive: true,
        body: JSON.stringify({
          _subject: "📞 Demande de rappel (accueil) — Les Bras Cassés",
          _template: "table",
          "Nom": upd.nom || "—",
          "Téléphone": upd.tel || "—",
          "Email": upd.email || "—",
          "Date souhaitée": upd.date || "—",
          "Type de déménagement": upd.type || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    setSending(true);
    let ok = null;
    try {
      ok = await enregistrer(upd);
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
      ok = await enregistrer(last);
    } catch (err) {}
    setSending(false);
    if (ok === false) return;
    if (window.fbq) window.fbq("track", "Lead");
    setFailed(false);
    setSent(true);
  };
  return React.createElement("section", {
    className: "sec cta-band",
    id: "contact"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      color: 'var(--cream-on-dark)'
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " 04 / Parlons de votre d\xE9m\xE9nagement")), React.createElement("div", null)), React.createElement("div", {
    className: "cta-grid reveal"
  }, React.createElement("div", null, React.createElement("h2", null, "Pr\xEAt \xE0 d\xE9m\xE9nager ?", React.createElement("br", null), React.createElement("em", null, "Nous, on l'est ", React.createElement("span", {
    className: "scribble"
  }, "toujours."))), React.createElement("p", {
    className: "cta-side"
  }, "Laissez-nous vos coordonn\xE9es : on vous rappelle dans la journ\xE9e avec un prix pr\xE9cis et d\xE9finitif, pas un app\xE2t marketing. Vous voulez aller plus vite ? Le ", React.createElement("a", {
    href: "Devis.html"
  }, "formulaire de devis complet"), " prend deux minutes."), React.createElement("p", {
    className: "cta-side",
    style: {
      marginTop: 16
    }
  }, "Pr\xE9f\xE9rez de vive voix ? ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), React.createElement("br", null), "Un mail ? ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"))), failed ? React.createElement("div", {
    className: "cta-form cta-thanks"
  }, React.createElement("div", {
    className: "cta-thanks-mark",
    style: {
      color: '#E8846B'
    }
  }, "!"), React.createElement("h3", {
    style: {
      margin: '4px 0 8px'
    }
  }, "Nous n'avons pas pu enregistrer votre demande."), React.createElement("p", {
    className: "cta-side"
  }, "Un souci technique de notre c\xF4t\xE9. Le plus rapide : appelez-nous au ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), "."), React.createElement("button", {
    type: "button",
    className: "cta-submit",
    style: {
      marginTop: 14
    },
    disabled: sending,
    onClick: retry
  }, sending ? "Envoi en cours…" : "Réessayer l'envoi")) : sent ? React.createElement("div", {
    className: "cta-form cta-thanks"
  }, React.createElement("div", {
    className: "cta-thanks-mark"
  }, "\u2713"), React.createElement("h3", {
    style: {
      margin: '4px 0 8px'
    }
  }, "Demande envoy\xE9e."), React.createElement("p", {
    className: "cta-side"
  }, "Merci ! On vous rappelle dans la journ\xE9e ouvr\xE9e avec un prix pr\xE9cis. Pour une urgence, appelez-nous au ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), ".")) : React.createElement("form", {
    className: "cta-form",
    onSubmit: submit
  }, React.createElement("input", {
    type: "text",
    name: "_honey",
    className: "hp-field",
    tabIndex: "-1",
    autoComplete: "off",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "cta-row"
  }, React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "f-name"
  }, "Nom complet"), React.createElement("input", {
    id: "f-name",
    name: "nom",
    type: "text",
    placeholder: "Jean Dupont",
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "f-phone"
  }, "T\xE9l\xE9phone"), React.createElement("input", {
    id: "f-phone",
    name: "tel",
    type: "tel",
    autoComplete: "tel",
    placeholder: "06 12 34 56 78",
    required: true
  }))), React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "f-email"
  }, "Email"), React.createElement("input", {
    id: "f-email",
    name: "email",
    type: "email",
    placeholder: "jean@exemple.fr",
    required: true
  })), React.createElement("div", {
    className: "cta-row"
  }, React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "f-date"
  }, "Date souhait\xE9e"), React.createElement("input", {
    id: "f-date",
    name: "date",
    type: "date",
    style: {
      colorScheme: 'dark'
    },
    required: true
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "f-type"
  }, "Type de d\xE9m\xE9nagement"), React.createElement("select", {
    id: "f-type",
    name: "type",
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Choisir une formule\u2026"), React.createElement("option", null, "Coup de main"), React.createElement("option", null, "Mains libres"), React.createElement("option", null, "Mains dans les poches"), React.createElement("option", null, "Entreprise / bureaux")))), React.createElement("button", {
    type: "submit",
    className: "cta-submit",
    disabled: sending
  }, sending ? "Envoi en cours…" : "Être rappelé sous 24h", React.createElement("span", null, "\u2192"))))));
}
Object.assign(window, {
  CTA
});
  try { Object.assign(window, { ctaSendToCockpit, CTA }); } catch (e) {}
})();
