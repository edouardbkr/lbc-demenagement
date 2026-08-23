/* devis-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState,
  useEffect,
  useRef
} = React;
const FORMULE_TO_APP = {
  standard: "eco",
  premium: "standard",
  luxe: "premium"
};
const ASC_CAP_TO_TAILLE = {
  "1 pers": "1 personne",
  "2 pers": "2 personnes",
  "3 pers": "3-4 personnes",
  "4 pers": "3-4 personnes",
  "5+ pers": "6+ personnes"
};
const PORTAGE_TO_M = {
  "Moins de 10 m": 5,
  "10 – 30 m": 20,
  "30 – 50 m": 40,
  "Plus de 50 m": 60
};
const CONTACT_LABEL = {
  tel: "Téléphone",
  mail: "Email",
  sms: "SMS"
};
const etageNum = v => !v ? 0 : v === "RDC" ? 0 : parseInt(v) || 0;
const villeFrom = addr => {
  if (!addr) return "";
  const parts = String(addr).split(",").map(s => s.trim()).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : addr;
};
const adresseComplete = (all, s) => {
  const rue = String(all[s] || "").trim();
  const ville = String(all[s + "_ville"] || "").trim();
  if (!rue) return ville;
  if (!ville) return rue;
  const cp = (ville.match(/\b\d{5}\b/) || [])[0];
  if (cp && rue.indexOf(cp) >= 0) return rue;
  if (!cp) {
    const nu = ville.trim().toLowerCase();
    if (nu && rue.toLowerCase().endsWith(nu)) return rue;
  }
  const m = ville.match(/^(.*?)[\s,]+(\d{5})$/);
  return rue + ", " + (m ? m[2] + " " + m[1].trim() : ville);
};
const sideOf = (all, s) => ({
  adresse: adresseComplete(all, s),
  ville: (all[s + "_ville"] || "").trim() || villeFrom(all[s]),
  etage: etageNum(all[s + "_etage"]),
  ascenseur: all[s + "_asc"] === "Oui",
  ascTaille: all[s + "_asc"] === "Oui" ? ASC_CAP_TO_TAILLE[all[s + "_asc_cap"]] || "" : "Aucun",
  portage: PORTAGE_TO_M[all[s + "_portage"]] != null ? PORTAGE_TO_M[all[s + "_portage"]] : "",
  monteMeuble: all[s + "_monte"] === "Oui",
  monteMeubleIncertain: all[s + "_monte"] === "Je ne sais pas",
  acces: all[s + "_acces"] || ""
});
function sendToCockpit(all, opts) {
  opts = opts || {};
  const np = (all.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const inventaire = window.buildInventoryArray ? window.buildInventoryArray(all) : [];
  const mapToList = m => Object.entries(m || {}).filter(x => x[1] > 0).map(x => ({
    label: x[0],
    qty: x[1]
  }));
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const notes = [opts.partiel && all.surface ? "🏠 Logement déclaré : " + all.surface + " (aucun volume : le formulaire n'est pas allé jusqu'à l'inventaire)" : "", all.details ? "Détails client : " + all.details : "", opts.estimation && !opts.estimation.distanceFiable ? "🚨 DISTANCE NON CALCULÉE : aucun prix n'a été affiché au client. Vérifier le trajet et chiffrer à la main." : "", opts.estimation && opts.estimation.distanceFiable ? "⚠️ Fourchette ANNONCÉE au client sur le site : " + opts.estimation.bas + " € – " + opts.estimation.haut + " € (volume retenu " + opts.estimation.volume + " m³, distance ~" + opts.estimation.km + " km). Ne pas chiffrer au-dessus sans l'expliquer." : "", function () {
    if (!opts.estimation || !opts.estimation.distanceFiable) return "";
    var nbMeubles = (all.inventaire || []).length;
    var nbCartons = Number(all.cartons) || 0;
    if (nbMeubles === 0 && nbCartons > 0) return "🔍 INVENTAIRE MAIGRE : " + nbCartons + " carton" + (nbCartons > 1 ? "s" : "") + " et AUCUN meuble déclaré" + (all.surface ? " pour un " + all.surface : "") + ". La fourchette ci-dessus est calculée là-dessus. À refaire au téléphone, pièce par pièce.";
    if (nbMeubles > 0 && nbMeubles <= 3 && ["t3", "t4", "maison"].indexOf(all.surface) >= 0) return "🔍 INVENTAIRE MAIGRE : seulement " + nbMeubles + " meuble" + (nbMeubles > 1 ? "s" : "") + " déclaré" + (nbMeubles > 1 ? "s" : "") + " pour un " + all.surface + ". Probablement rempli à moitié : refaire l'inventaire au téléphone.";
    return "";
  }(), opts.estimation && opts.estimation.detail && (opts.estimation.detail.demontageLignes || []).length ? "🔧 Démontage déclaré : " + opts.estimation.detail.demontageLignes.map(function (l) {
    return l.label + (l.quantite > 1 ? " ×" + l.quantite : "") + " " + (l.facture ? "= " + l.montant + " €" : "(compris dans la formule)") + (l.connu ? "" : " ⚠️ tarif non répertorié, à vérifier");
  }).join(" · ") + ". Total facturé " + opts.estimation.detail.demontage + " €, DÉJÀ compris dans la fourchette ci-dessus." : "", opts.estimation && opts.estimation.detail && (opts.estimation.detail.speciauxLignes || []).length ? "🎹 Objets spéciaux : " + opts.estimation.detail.speciauxLignes.map(function (l) {
    return l.label + (l.quantite > 1 ? " ×" + l.quantite : "") + " = " + l.montant + " €";
  }).join(" · ") + ". Total " + opts.estimation.detail.speciaux + " €, déjà compris dans la fourchette." : "", opts.estimation && opts.estimation.detail && opts.estimation.detail.monteMeuble > 0 ? "🏗 MONTE-MEUBLE demandé par le client (" + opts.estimation.detail.monteMeubleNb + " façade" + (opts.estimation.detail.monteMeubleNb > 1 ? "s" : "") + ") : " + opts.estimation.detail.monteMeuble + " € refacturés au prix coûtant, déjà compris dans la fourchette. À réserver." : "", function () {
    const c = [];
    if (opts.estimation && all.depart_monte === "Je ne sais pas") c.push("au départ");
    if (opts.estimation && all.arrivee_monte === "Je ne sais pas") c.push("à l'arrivée");
    return c.length ? "🏗 Monte-meuble INCERTAIN " + c.join(" et ") + " : le client ne sait pas. Rien n'a été facturé. À trancher à l'appel, c'est 400 à 600 € par façade." : "";
  }(), opts.estimation && opts.estimation.visioRequise ? "📦 MAINS DANS LES POCHES demandée. Le prix ci-dessus est celui de MAINS LIBRES, l'emballage n'est pas compris. Le client a été prévenu à l'écran qu'une visio ou des photos sont nécessaires. À caler à l'appel." : "", opts.estimation && opts.estimation.detail && opts.estimation.distanceFiable ? "Coûts estimés " + opts.estimation.detail.couts + " € → bénéfice attendu " + (opts.estimation.bas - opts.estimation.detail.couts) + " à " + (opts.estimation.haut - opts.estimation.detail.couts) + " €." : "", opts.estimation && opts.estimation.detail && opts.estimation.detail.plancherApplique ? "🔎 INVENTAIRE À VÉRIFIER : le client n'a déclaré que " + opts.estimation.detail.volumeDeclare + " m³ de meubles, c'est peu pour son logement. Le volume a été relevé au plancher. À confirmer au téléphone avant de figer le prix." : "", opts.estimation && opts.estimation.prixApproche > 0 ? "🚚 Approche facturée : " + opts.estimation.kmApproche + " km depuis Nice, soit " + opts.estimation.prixApproche + " € (50 km offerts, puis 0,90 €/km/camion). Sans ça, ce chantier partait à perte sur la route." : "", opts.rdv && opts.rdv.immediat ? "🔥 RAPPEL IMMÉDIAT DEMANDÉ. Le client a cliqué « rappelez-moi tout de suite » : il attend l'appel MAINTENANT. C'est le lead le plus chaud possible, chaque minute compte." : opts.rdv ? "📞 Rappel demandé par le client : " + opts.rdv.label : "", all && all._honey ? "🤖 Piège anti-robot déclenché. C'est très souvent le remplissage automatique d'un navigateur intégré (Facebook, Instagram) sur un VRAI prospect. Appelle-le : ne le jette pas sans avoir vérifié." : "", !opts.partiel && !opts.estimation ? "🚨 AUCUN PRIX N'A ÉTÉ AFFICHÉ à ce client : le moteur d'estimation n'a pas tourné. Chiffrer à la main." : "", at ? "🎯 Acquisition : " + at.canal + (at.campagne ? " · campagne « " + at.campagne + " »" : "") + (at.canalPremier && at.canalPremier !== at.canal ? " (1er contact via " + at.canalPremier + " le " + at.premierContactLe + ")" : "") + (at.referent ? " · venu de " + at.referent : "") : ""].filter(Boolean).join("\n");
  const payload = {
    source: at && at.canal || "site_web",
    attribution: at || null,
    leadId: opts.leadId || null,
    statut: opts.partiel ? "Lead démarré (formulaire en cours)" : "Devis complet",
    client: {
      prenom,
      nom,
      tel: all.tel || "",
      email: all.email || "",
      contactPref: all.contact || ""
    },
    codeParrain: (all.codeParrain || "").trim().toUpperCase(),
    formule: FORMULE_TO_APP[all.formule] || "standard",
    formulaireType: opts.partiel ? "partiel" : inventaire.length ? "detaille" : "basique",
    volumeEstime: opts.estimation ? opts.estimation.volume : null,
    logementDeclare: all.surface || "",
    typeLogement: all.type || "",
    estimationBasse: opts.estimation ? opts.estimation.bas : null,
    estimationHaute: opts.estimation ? opts.estimation.haut : null,
    km: opts.estimation ? opts.estimation.km : null,
    rdvDate: opts.rdv ? opts.rdv.date : "",
    rdvHeure: opts.rdv ? opts.rdv.heure : "",
    rdvImmediat: !!(opts.rdv && opts.rdv.immediat),
    cartons: all.cartons || 0,
    dateSouhaitee: all.date || "",
    flexibilite: all.flex || "",
    contactPref: CONTACT_LABEL[all.contact] || all.contact || "",
    fragiles: mapToList(all.fragile),
    demonter: mapToList(all.demontage),
    inventaire,
    options: {
      demontage: !!(all.demontage && Object.keys(all.demontage).length),
      emballage: all.formule === "premium" || all.formule === "luxe",
      gardeMeuble: false
    },
    depart: sideOf(all, "depart"),
    arrivee: sideOf(all, "arrivee"),
    message: notes
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
function DevisHero() {
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
  }, "/"), React.createElement("span", null, "DEVIS GRATUIT \xB7 PRIX IMM\xC9DIAT")), React.createElement("h1", null, "Votre devis d\xE9m\xE9nagement, ", React.createElement("em", null, "gratuit et sans engagement.")), React.createElement("p", {
    className: "lede"
  }, "Deux minutes, cinq infos, et ", React.createElement("strong", null, "votre fourchette de prix s'affiche tout de suite"), ". Vous choisissez ensuite quand on vous appelle pour la confirmer au centime pr\xE8s. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Pas de num\xE9ro surtax\xE9, pas de spam."), React.createElement("p", {
    style: {
      marginTop: 18,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '9px 16px',
      borderRadius: 999,
      background: 'rgba(215,91,61,0.10)',
      color: 'var(--accent, #D75B3D)',
      fontWeight: 700,
      fontSize: 14
    }
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83D\uDCB3"), " D\xE9m\xE9nagement payable en 3\xD7 sans frais (Klarna)"), React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 18px',
      fontSize: 14,
      color: 'rgba(242,232,207,0.85)'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "\u2605\xA05,0/5"), " \xB7 +100 avis clients"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2713"), " Assurance incluse"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2713"), " Prix ferme, z\xE9ro surprise"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2713"), " Prix affich\xE9 imm\xE9diatement")), React.createElement("a", {
    href: "#devis-form-top",
    className: "btn btn-primary devis-hero-cta",
    style: {
      marginTop: 26
    }
  }, "Commencer mon devis ", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))));
}
const STEPS = ["Coordonnées & logement", "Adresses & date", "Votre inventaire"];
function Stepper({
  step
}) {
  return React.createElement("div", {
    className: "devis-steps"
  }, STEPS.map((s, i) => React.createElement("div", {
    key: i,
    className: "devis-step" + (i === step ? " active" : "")
  }, React.createElement("span", {
    className: "n"
  }, i + 1), s)));
}
function Choice({
  name,
  value,
  label,
  sub,
  selected,
  onSelect
}) {
  return React.createElement("label", {
    className: "choice" + (selected ? " sel" : "")
  }, React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: selected,
    onChange: () => onSelect(value)
  }), React.createElement("span", null, label), sub && React.createElement("span", {
    className: "c-sub"
  }, sub));
}
function FormuleOption({
  value,
  name,
  level,
  tag,
  badge,
  inherit,
  items,
  selected,
  onSelect
}) {
  return React.createElement("label", {
    className: "formule-card" + (selected ? " sel" : "") + (badge ? " has-flag" : "")
  }, React.createElement("input", {
    type: "radio",
    name: "form",
    value: value,
    checked: selected,
    onChange: () => onSelect(value)
  }), badge && React.createElement("span", {
    className: "fc-flag"
  }, badge), React.createElement("div", {
    className: "fc-top"
  }, React.createElement("div", {
    className: "fc-titles"
  }, level && React.createElement("span", {
    className: "fc-level"
  }, level), React.createElement("span", {
    className: "fc-name"
  }, name)), React.createElement("span", {
    className: "fc-radio",
    "aria-hidden": "true"
  })), React.createElement("span", {
    className: "fc-tag"
  }, tag), React.createElement("ul", {
    className: "fc-items"
  }, inherit && React.createElement("li", {
    className: "fc-inherit"
  }, "Tout le ", inherit, ", plus :"), items.map((it, i) => React.createElement("li", {
    key: i
  }, React.createElement("span", {
    className: "fc-chk"
  }, "\u2713"), it))));
}
function getPrefill() {
  const p = new URLSearchParams(window.location.search);
  return {
    nom: p.get("nom") || "",
    tel: p.get("tel") || "",
    email: p.get("email") || "",
    type: p.get("type") || "",
    surface: p.get("surface") || "",
    depart_ville: p.get("depart") || "",
    arrivee_ville: p.get("arrivee") || "",
    date: p.get("date") || "",
    lead: p.get("lead") || "",
    etape: p.get("etape") || ""
  };
}
function etapeInitiale(PRE) {
  const complet = PRE.nom && PRE.tel && PRE.email && PRE.type && PRE.surface;
  return PRE.etape === "2" && complet ? 1 : 0;
}
const SURFACE_LABEL = {
  studio: "Studio (< 30 m²)",
  t2: "2 pièces (30–50 m²)",
  t3: "3 pièces (50–80 m²)",
  t4: "4 pièces + (80 m² +)"
};
const FORMULE_LABEL = {
  standard: "Coup de main",
  premium: "Mains libres",
  luxe: "Mains dans les poches"
};
const ETAGE_OPTS = ["RDC", "1", "2", "3", "4", "5", "6", "7+"];
const ASC_OPTS = [{
  v: "Non",
  l: "Non"
}, {
  v: "Oui",
  l: "Oui"
}];
const ASC_CAP_OPTS = ["1 pers", "2 pers", "3 pers", "4 pers", "5+ pers"];
const PORT_OPTS = [{
  v: "Moins de 10 m",
  l: "< 10 m"
}, {
  v: "10 – 30 m",
  l: "10–30 m"
}, {
  v: "30 – 50 m",
  l: "30–50 m"
}, {
  v: "Plus de 50 m",
  l: "> 50 m"
}];
function SegSelect({
  value,
  options,
  onSelect,
  numeric,
  error
}) {
  return React.createElement("div", {
    className: "seg" + (numeric ? " seg-num" : "") + (error ? " seg-error" : "")
  }, options.map(o => {
    const v = o.v || o;
    const l = o.l || o;
    return React.createElement("button", {
      type: "button",
      key: v,
      className: "seg-opt" + (value === v ? " on" : ""),
      onClick: () => onSelect(v)
    }, l);
  }));
}
function AccessBlock({
  side,
  label,
  addrLabel,
  data,
  set,
  showErrors
}) {
  const f = k => side + "_" + k;
  const v = k => data[f(k)] || "";
  const miss = k => showErrors && !v(k);
  const ascMiss = showErrors && (!v("asc") || v("asc") === "Oui" && !v("asc_cap"));
  return React.createElement("div", {
    className: "access-block"
  }, React.createElement("div", {
    className: "access-head"
  }, React.createElement("span", {
    className: "access-dot"
  }), label), React.createElement(AddressField, {
    className: "lf",
    name: side + "_ville",
    type: "municipality",
    label: React.createElement(React.Fragment, null, "Ville ", showErrors && !v("ville") && React.createElement("span", {
      className: "req-hint"
    }, "\u2014 \xE0 remplir")),
    placeholder: "Nice",
    defaultValue: v("ville"),
    onValue: val => set(f("ville"), val),
    error: showErrors && !v("ville")
  }), React.createElement(AddressField, {
    className: "lf",
    name: side,
    label: React.createElement(React.Fragment, null, addrLabel, " ", React.createElement("span", {
      className: "access-hint"
    }, "\u2014 n\xB0 et rue"), " ", showErrors && !(data[side] || "").trim() && React.createElement("span", {
      className: "req-hint"
    }, "\u2014 \xE0 remplir")),
    placeholder: "Num\xE9ro et nom de la rue",
    defaultValue: data[side],
    pres: v("ville"),
    onValue: val => set(side, val),
    error: showErrors && !(data[side] || "").trim()
  }), React.createElement("div", {
    className: "access-field"
  }, React.createElement("label", null, "\xC9tage ", miss("etage") && React.createElement("span", {
    className: "req-hint"
  }, "\u2014 \xE0 choisir")), React.createElement(SegSelect, {
    numeric: true,
    error: miss("etage"),
    value: v("etage"),
    options: ETAGE_OPTS,
    onSelect: x => set(f("etage"), x)
  })), React.createElement("div", {
    className: "access-field"
  }, React.createElement("label", null, "Ascenseur ", ascMiss && React.createElement("span", {
    className: "req-hint"
  }, "\u2014 \xE0 choisir")), React.createElement(SegSelect, {
    error: ascMiss && !v("asc"),
    value: v("asc"),
    options: ASC_OPTS,
    onSelect: x => {
      set(f("asc"), x);
      if (x === "Non") set(f("asc_cap"), "");
    }
  }), v("asc") === "Oui" && React.createElement("div", {
    className: "access-sub"
  }, React.createElement("span", {
    className: "access-sublabel"
  }, "Capacit\xE9 de la cabine"), React.createElement(SegSelect, {
    numeric: true,
    error: showErrors && !v("asc_cap"),
    value: v("asc_cap"),
    options: ASC_CAP_OPTS,
    onSelect: x => set(f("asc_cap"), x)
  }))), React.createElement("div", {
    className: "access-field"
  }, React.createElement("label", null, "Distance de portage ", React.createElement("span", {
    className: "access-hint"
  }, "\u2014 camion \u2192 porte"), " ", miss("portage") && React.createElement("span", {
    className: "req-hint"
  }, "\u2014 \xE0 choisir")), React.createElement(SegSelect, {
    error: miss("portage"),
    value: v("portage"),
    options: PORT_OPTS,
    onSelect: x => set(f("portage"), x)
  })), etageNum(v("etage")) >= 2 && v("asc") === "Non" && React.createElement("div", {
    className: "access-field"
  }, React.createElement("label", null, "Faut-il un monte-meuble\xA0? ", React.createElement("span", {
    className: "access-hint"
  }, "\u2014 si l'escalier ne passe pas")), React.createElement(SegSelect, {
    value: v("monte"),
    options: [{
      v: "Non",
      l: "Non"
    }, {
      v: "Oui",
      l: "Oui"
    }, {
      v: "Je ne sais pas",
      l: "Je ne sais pas"
    }],
    onSelect: x => set(f("monte"), x)
  })), React.createElement("div", {
    className: "access-field"
  }, React.createElement("label", null, "Acc\xE8s camion ", miss("acces") && React.createElement("span", {
    className: "req-hint"
  }, "\u2014 \xE0 choisir")), React.createElement("select", {
    className: "access-sel" + (miss("acces") ? " field-error" : ""),
    name: f("acces"),
    defaultValue: v("acces"),
    onChange: e => set(f("acces"), e.target.value)
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Choisir\u2026"), React.createElement("option", null, "Le camion se gare devant"), React.createElement("option", null, "Rue \xE9troite ou \xE9loign\xE9e"), React.createElement("option", null, "Zone pi\xE9tonne"), React.createElement("option", null, "Stationnement difficile"), React.createElement("option", null, "Monte-meuble n\xE9cessaire"), React.createElement("option", null, "Je ne sais pas"))));
}
function DevisForm() {
  const PRE = getPrefill();
  const [step, setStep] = useState(etapeInitiale(PRE));
  const [data, setData] = useState({
    surface: PRE.surface || "",
    formule: "premium",
    depart: "",
    arrivee: "",
    depart_ville: PRE.depart_ville,
    arrivee_ville: PRE.arrivee_ville,
    date: PRE.date,
    tel: PRE.tel,
    nom: PRE.nom,
    email: PRE.email,
    type: PRE.type
  });
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const [tried0, setTried0] = useState(false);
  const [tried1, setTried1] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [estim, setEstim] = useState(null);
  const [rdv, setRdv] = useState(null);
  const [rdvSending, setRdvSending] = useState(false);
  const formatPhoneFR = raw => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);else if (d.startsWith("0033")) d = "0" + d.slice(4);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };
  const scrollToForm = () => {
    const el = document.getElementById("devis-form-top");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({
      top: y < 0 ? 0 : y,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    if (PRE.depart && PRE.arrivee) {
      const t = setTimeout(scrollToForm, 120);
      return () => clearTimeout(t);
    }
  }, []);
  const next = e => {
    if (e) e.preventDefault();
    setStep(s => Math.min(2, s + 1));
    scrollToForm();
  };
  const captureNext = e => {
    e.preventDefault();
    if (!step1Complete) {
      setTried1(true);
      return;
    }
    const upd = {};
    for (const el of e.currentTarget.elements) {
      if (el.name) upd[el.name] = el.value;
    }
    setData(d => ({
      ...d,
      ...upd
    }));
    setStep(s => Math.min(2, s + 1));
    scrollToForm();
  };
  const back = () => {
    setStep(s => Math.max(0, s - 1));
    scrollToForm();
  };
  const sideComplete = s => {
    if (!(data[s] || "").trim()) return false;
    if (!(data[s + "_ville"] || "").trim()) return false;
    if (!data[s + "_etage"]) return false;
    if (!data[s + "_asc"]) return false;
    if (data[s + "_asc"] === "Oui" && !data[s + "_asc_cap"]) return false;
    if (!data[s + "_portage"]) return false;
    if (!data[s + "_acces"]) return false;
    return true;
  };
  const step1Complete = sideComplete("depart") && sideComplete("arrivee") && !!data.date && !!data.flex;
  const step0Complete = !!(data.nom || "").trim() && !!(data.tel || "").trim() && !!(data.email || "").trim() && !!data.type && !!data.surface && !!(data.depart_ville || "").trim() && !!(data.arrivee_ville || "").trim();
  const waLead = () => {
    const who = (data.nom || "").trim();
    const dep = (data.depart_ville || data.depart || "").trim();
    const arr = (data.arrivee_ville || data.arrivee || "").trim();
    const dt = (data.date || "").trim();
    const trajet = dep && arr ? "Déménagement de " + dep + " vers " + arr : dep ? "Déménagement depuis " + dep : "Déménagement";
    const quand = dt ? ", prévu le " + dt : "";
    const l2 = (who ? who + " — " : "") + trajet + quand + ".";
    const fin = rdv ? "Vous devez m'appeler " + rdv.label + ", mais je préfère qu'on échange ici. Merci !" : "J'aimerais recevoir mon devis. Merci !";
    const msg = "Bonjour, je viens de faire ma demande de devis sur votre site 🙂\n" + l2 + "\n" + fin;
    return "https://wa.me/33615976577?text=" + encodeURIComponent(msg);
  };
  const earlySent = useRef(false);
  const leadIdRef = useRef(PRE.lead || null);
  const getLeadId = () => {
    if (!leadIdRef.current) leadIdRef.current = "L" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    return leadIdRef.current;
  };
  const sendEarly = all => {
    if (earlySent.current) return;
    earlySent.current = true;
    if (window.fbq) window.fbq("track", "Lead");
    sendToCockpit(all, {
      partiel: true,
      leadId: getLeadId()
    });
  };
  const goStep0 = e => {
    e.preventDefault();
    if (!step0Complete) {
      setTried0(true);
      return;
    }
    const upd = {};
    for (const el of e.currentTarget.elements) {
      if (el.name) upd[el.name] = el.value;
    }
    const all = {
      ...data,
      ...upd
    };
    setData(all);
    sendEarly(all);
    setStep(1);
    scrollToForm();
  };
  const submit = async () => {
    const all = {
      ...data
    };
    if (sending) return;
    const accessStr = s => [all[s], all[s + "_etage"] && "Étage " + all[s + "_etage"], all[s + "_asc"] && "Ascenseur : " + (all[s + "_asc"] === "Oui" ? "Oui" + (all[s + "_asc_cap"] ? " (" + all[s + "_asc_cap"] + ")" : "") : "Non"), all[s + "_portage"] && "Portage : " + all[s + "_portage"], all[s + "_acces"] && "Accès : " + all[s + "_acces"]].filter(Boolean).join(" · ") || "—";
    setSending(true);
    let estim = null;
    try {
      if (window.LBC_PRICING) {
        const [km, kmApproche] = await Promise.all([Promise.race([window.LBC_PRICING.distanceKm(adresseComplete(all, "depart"), adresseComplete(all, "arrivee")), new Promise(r => setTimeout(() => r(null), 8000))]), Promise.race([window.LBC_PRICING.distanceBase(adresseComplete(all, "depart"), adresseComplete(all, "arrivee")), new Promise(r => setTimeout(() => r(0), 8000))])]);
        estim = window.LBC_PRICING.estimer({
          surface: all.surface,
          inventaire: window.buildInventoryArray ? window.buildInventoryArray(all) : [],
          cartons: all.cartons,
          formule: all.formule,
          demontage: all.demontage,
          km: km,
          kmApproche: kmApproche,
          depart: sideOf(all, "depart"),
          arrivee: sideOf(all, "arrivee")
        });
      }
    } catch (e) {}
    setEstim(estim);
    if (window.fbq) window.fbq("trackCustom", "DevisComplet");
    if (window.gtag) window.gtag("event", "devis_termine", {
      value: estim ? estim.bas : undefined,
      currency: "EUR",
      volume_m3: estim ? estim.volume : undefined,
      distance_km: estim ? estim.km : undefined,
      formule: all.formule || ""
    });
    let ok = null;
    try {
      ok = await Promise.race([sendToCockpit(all, {
        leadId: getLeadId(),
        estimation: estim
      }), new Promise(r => setTimeout(() => r(null), 6000))]);
    } catch (e) {}
    setSending(false);
    setFailed(ok === false);
    setSent(true);
    scrollToForm();
  };
  const confirmRdv = async choix => {
    if (rdvSending) return;
    setRdvSending(true);
    const all = {
      ...data
    };
    try {
      await Promise.race([sendToCockpit(all, {
        leadId: getLeadId(),
        estimation: estim,
        rdv: choix
      }), new Promise(r => setTimeout(() => r(null), 6000))]);
    } catch (e) {}
    if (window.fbq) window.fbq("trackCustom", choix.immediat ? "RappelImmediat" : "RappelDemande");
    if (window.gtag) window.gtag("event", "rappel_demande", {
      value: estim ? estim.bas : undefined,
      currency: "EUR",
      creneau: choix.label || ""
    });
    setRdvSending(false);
    setRdv(choix);
    scrollToForm();
  };
  const blocPrix = estim && estim.distanceFiable ? React.createElement("div", {
    className: "ds-price"
  }, React.createElement("span", {
    className: "ds-price-label"
  }, estim.visioRequise ? "Votre déménagement, formule Mains libres" : "Votre déménagement"), React.createElement("div", {
    className: "ds-price-range"
  }, React.createElement("span", null, estim.bas.toLocaleString("fr-FR"), React.createElement("span", {
    className: "cur"
  }, "\u20AC")), React.createElement("span", {
    className: "dash"
  }, "\u2013"), React.createElement("span", null, estim.haut.toLocaleString("fr-FR"), React.createElement("span", {
    className: "cur"
  }, "\u20AC"))), React.createElement("p", {
    className: "ds-price-sub"
  }, "Fourchette bas\xE9e sur ", React.createElement("strong", null, estim.volume, "\xA0m\xB3"), " et ", React.createElement("strong", null, "~", estim.km, "\xA0km"), ". Votre ", React.createElement("strong", null, "prix ferme"), " ne bouge plus le jour J.")) : React.createElement("p", {
    className: "ds-price-attente"
  }, "Votre trajet demande une v\xE9rification de notre c\xF4t\xE9\xA0: on vous rappelle tr\xE8s vite avec un ", React.createElement("strong", null, "prix ferme et d\xE9finitif"), ", calcul\xE9 sur votre distance r\xE9elle.");
  const blocRappel = rdv ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "rdv-done"
  }, React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\uD83D\uDCDE C'est not\xE9. On vous appelle ", React.createElement("strong", null, rdv.label), data.tel ? " au " + data.tel : "", ".")), blocPrix) : React.createElement(RappelPicker, {
    onConfirm: confirmRdv,
    confirming: rdvSending,
    milieu: blocPrix
  });
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
  }, "*"), " Formulaire")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9crivez votre d\xE9m\xE9nagement.", React.createElement("br", null), React.createElement("em", null, "On fait le calcul."))), React.createElement("div", {
    className: "devis-form reveal",
    id: "devis-form-top"
  }, React.createElement("div", {
    className: "form-card"
  }, sent ? React.createElement("div", {
    className: "devis-success",
    role: "status"
  }, React.createElement("div", {
    className: "ds-check",
    "aria-hidden": "true",
    style: failed ? {
      background: 'rgba(194,54,43,.10)',
      color: '#C2362B',
      borderColor: 'rgba(194,54,43,.35)'
    } : null
  }, failed ? React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M12 8v5"
  }), React.createElement("path", {
    d: "M12 17h.01"
  }), React.createElement("path", {
    d: "M10.3 3.9 2.4 17.5a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  })) : React.createElement("svg", {
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
  }))), failed ? React.createElement(React.Fragment, null, React.createElement("h3", null, "Votre demande n'a pas pu \xEAtre enregistr\xE9e."), React.createElement("p", null, "Un souci technique de notre c\xF4t\xE9, rien \xE0 voir avec vous. Ne perdez pas vos 2 minutes\xA0: envoyez-nous votre demande sur WhatsApp, elle est d\xE9j\xE0 pr\xE9-remplie\xA0\uD83D\uDC47")) : React.createElement(React.Fragment, null, React.createElement("h3", null, "Votre demande est bien re\xE7ue\xA0!"), React.createElement("ol", {
    className: "ds-steps"
  }, React.createElement("li", {
    className: "ds-step done"
  }, React.createElement("span", {
    className: "n"
  }, "\u2713"), "Votre demande"), React.createElement("li", {
    className: "ds-step active"
  }, React.createElement("span", {
    className: "n"
  }, "2"), "Votre rappel")), blocRappel, estim && estim.distanceFiable && estim.visioRequise ? React.createElement("div", {
    className: "ds-note-visio"
  }, React.createElement("p", null, React.createElement("strong", null, "Vous avez choisi Mains dans les poches"), ", o\xF9 nous faisons aussi tous vos cartons. Le montant ci-dessus est celui de la formule", " ", React.createElement("strong", null, "Mains libres"), "\xA0: il ne comprend pas encore l'emballage."), React.createElement("p", null, "Ce chiffrage-l\xE0 d\xE9pend enti\xE8rement de ce que vous avez \xE0 emballer, et nous ne voulons pas vous annoncer un prix que nous devrions corriger ensuite.", React.createElement("strong", null, " Quelques photos ou 15 minutes en visio"), " nous suffisent pour voir la vaisselle, les fragiles et le volume r\xE9el de cartons, et vous repartez avec un ", React.createElement("strong", null, "prix ferme"), ".")) : null), React.createElement("div", {
    className: "ds-actions"
  }, React.createElement("a", {
    className: "btn btn-wa",
    href: waLead(),
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2zm5.86 14.15c-.25.7-1.45 1.33-2 1.4-.53.06-1.16.09-1.87-.12-.43-.14-.98-.32-1.7-.63-2.98-1.29-4.93-4.3-5.08-4.49-.15-.2-1.22-1.62-1.22-3.08 0-1.46.77-2.18 1.04-2.48.28-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.48.13.65-.07.17-.2.74-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.08.12.08.72-.17 1.42z"
  })), failed ? "Envoyer ma demande sur WhatsApp" : rdv ? "Nous écrire sur WhatsApp" : "Je préfère en parler tout de suite sur WhatsApp")), React.createElement("p", {
    className: "ds-sub"
  }, failed ? React.createElement(React.Fragment, null, "Ou appelez-nous directement au ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), ", on prend votre demande en direct.") : React.createElement(React.Fragment, null, "Pas de WhatsApp\xA0? Appelez-nous au ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), "."))) : React.createElement(React.Fragment, null, React.createElement(Stepper, {
    step: step
  }), step === 0 && React.createElement("form", {
    onSubmit: goStep0
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
    className: "lf full"
  }, React.createElement("div", {
    className: "form-section-head"
  }, "Vos coordonn\xE9es ", React.createElement("span", null, "\u2014 pour vous envoyer le devis"))), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Pr\xE9nom & nom"), React.createElement("input", {
    type: "text",
    name: "nom",
    className: (tried0 && !(data.nom || '').trim() ? 'field-error' : '') + ((data.nom || '').trim().length > 1 ? ' is-valid' : ''),
    defaultValue: data.nom,
    onChange: e => set('nom', e.target.value),
    placeholder: "Jean Dupont",
    autoComplete: "name"
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "T\xE9l\xE9phone"), React.createElement("input", {
    type: "tel",
    name: "tel",
    className: (tried0 && !(data.tel || '').trim() ? 'field-error' : '') + ((data.tel || '').replace(/\D/g, '').length === 10 ? ' is-valid' : ''),
    value: data.tel || '',
    onChange: e => set('tel', formatPhoneFR(e.target.value)),
    placeholder: "06 12 34 56 78",
    inputMode: "numeric",
    autoComplete: "tel"
  })), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Email"), React.createElement("input", {
    type: "email",
    name: "email",
    className: (tried0 && !(data.email || '').trim() ? 'field-error' : '') + (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') ? ' is-valid' : ''),
    defaultValue: data.email,
    onChange: e => set('email', e.target.value),
    placeholder: "jean@exemple.fr",
    autoComplete: "email"
  })), React.createElement("div", {
    className: "lf full"
  }, React.createElement("div", {
    className: "form-section-head"
  }, "Votre logement")), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Type de logement ", tried0 && !data.type && React.createElement("span", {
    className: "req-hint"
  }, "\u2014 \xE0 s\xE9lectionner")), React.createElement("div", {
    className: "choice-row" + (tried0 && !data.type ? " field-error" : "")
  }, React.createElement(Choice, {
    name: "type",
    value: "appart",
    label: "Appartement",
    selected: data.type === 'appart',
    onSelect: v => set('type', v)
  }), React.createElement(Choice, {
    name: "type",
    value: "maison",
    label: "Maison",
    selected: data.type === 'maison',
    onSelect: v => set('type', v)
  }), React.createElement(Choice, {
    name: "type",
    value: "bureau",
    label: "Bureaux",
    selected: data.type === 'bureau',
    onSelect: v => set('type', v)
  }))), React.createElement("div", {
    className: "lf full"
  }, React.createElement("div", {
    className: "form-section-head"
  }, "Votre trajet ", React.createElement("span", null, "\u2014 pour situer votre d\xE9m\xE9nagement"))), React.createElement(AddressField, {
    className: "lf",
    name: "depart_ville",
    type: "municipality",
    label: React.createElement(React.Fragment, null, "Ville de d\xE9part ", tried0 && !(data.depart_ville || '').trim() && React.createElement("span", {
      className: "req-hint"
    }, "\u2014 \xE0 remplir")),
    placeholder: "Nice",
    defaultValue: data.depart_ville,
    onValue: v => set('depart_ville', v),
    error: tried0 && !(data.depart_ville || '').trim()
  }), React.createElement(AddressField, {
    className: "lf",
    name: "arrivee_ville",
    type: "municipality",
    label: React.createElement(React.Fragment, null, "Ville d'arriv\xE9e ", tried0 && !(data.arrivee_ville || '').trim() && React.createElement("span", {
      className: "req-hint"
    }, "\u2014 \xE0 remplir")),
    placeholder: "Marseille",
    defaultValue: data.arrivee_ville,
    onValue: v => set('arrivee_ville', v),
    error: tried0 && !(data.arrivee_ville || '').trim()
  }), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Surface actuelle ", tried0 && !data.surface && React.createElement("span", {
    className: "req-hint"
  }, "\u2014 \xE0 s\xE9lectionner")), React.createElement("div", {
    className: "choice-row" + (tried0 && !data.surface ? " field-error" : "")
  }, React.createElement(Choice, {
    name: "surf",
    value: "studio",
    label: "Studio",
    sub: "< 30 m\xB2",
    selected: data.surface === 'studio',
    onSelect: v => set('surface', v)
  }), React.createElement(Choice, {
    name: "surf",
    value: "t2",
    label: "2 pi\xE8ces",
    sub: "30\u201350 m\xB2",
    selected: data.surface === 't2',
    onSelect: v => set('surface', v)
  }), React.createElement(Choice, {
    name: "surf",
    value: "t3",
    label: "3 pi\xE8ces",
    sub: "50\u201380 m\xB2",
    selected: data.surface === 't3',
    onSelect: v => set('surface', v)
  }), React.createElement(Choice, {
    name: "surf",
    value: "t4",
    label: "4 pi\xE8ces +",
    sub: "80 m\xB2 +",
    selected: data.surface === 't4',
    onSelect: v => set('surface', v)
  })))), React.createElement("div", {
    className: "form-nav",
    style: {
      marginTop: 32
    }
  }, React.createElement("button", {
    type: "submit",
    className: "form-submit"
  }, "Continuer", React.createElement("span", null, "\u2192")), tried0 && !step0Complete && React.createElement("span", {
    className: "form-incomplete"
  }, "Il manque quelques infos \u2014 voir les champs en rouge.")), React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 13.5,
      color: 'var(--muted)'
    }
  }, "Gratuit \xB7 sans engagement \xB7 sans carte bancaire \xB7 r\xE9ponse sous 24h.")), step === 1 && React.createElement("form", {
    onSubmit: captureNext
  }, React.createElement("div", {
    className: "access-row"
  }, React.createElement(AccessBlock, {
    side: "depart",
    label: "Au d\xE9part",
    addrLabel: "Adresse de d\xE9part",
    data: data,
    set: set,
    showErrors: tried1
  }), React.createElement(AccessBlock, {
    side: "arrivee",
    label: "\xC0 l'arriv\xE9e",
    addrLabel: "Adresse d'arriv\xE9e",
    data: data,
    set: set,
    showErrors: tried1
  })), React.createElement("div", {
    className: "form-grid",
    style: {
      marginTop: 28
    }
  }, React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Date souhait\xE9e"), React.createElement("input", {
    type: "date",
    name: "date",
    className: tried1 && !data.date ? 'field-error' : '',
    defaultValue: data.date,
    onChange: e => set("date", e.target.value)
  })), React.createElement("div", {
    className: "lf"
  }, React.createElement("label", null, "Flexibilit\xE9"), React.createElement("select", {
    name: "flex",
    className: tried1 && !data.flex ? 'field-error' : '',
    defaultValue: data.flex || "",
    onChange: e => set("flex", e.target.value)
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Choisir\u2026"), React.createElement("option", null, "Date ferme"), React.createElement("option", null, "\xB1 quelques jours"), React.createElement("option", null, "Dans le mois"), React.createElement("option", null, "Pas encore d\xE9cid\xE9"))), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "Formule souhait\xE9e"), React.createElement("div", {
    className: "formule-cards"
  }, React.createElement(FormuleOption, {
    value: "standard",
    name: "Coup de main",
    tag: "L'essentiel, bien fait.",
    items: ["Transport & véhicule adapté", "Chargement & déchargement par l'équipe", "Déménagement local ou longue distance", "Assurance incluse"],
    selected: data.formule === 'standard',
    onSelect: v => set('formule', v)
  }), React.createElement(FormuleOption, {
    value: "premium",
    name: "Mains libres",
    badge: "Le plus demand\xE9",
    tag: "Le confort, sans le stress.",
    items: ["Protection intégrale du mobilier", "Démontage & remontage des meubles", "Emballage des objets fragiles", "Assurance incluse"],
    selected: data.formule === 'premium',
    onSelect: v => set('formule', v)
  }), React.createElement(FormuleOption, {
    value: "luxe",
    name: "Mains dans les poches",
    tag: "Cl\xE9 en main, de A \xE0 Z.",
    items: ["Emballage de tous vos cartons", "Déballage & installation à l'arrivée", "Objets précieux & œuvres d'art protégés", "Assurance incluse"],
    selected: data.formule === 'luxe',
    onSelect: v => set('formule', v)
  })), React.createElement("span", {
    className: "hint",
    style: {
      marginTop: 12
    }
  }, "Pas certain ? Prenez ", React.createElement("strong", null, "Mains libres"), ". On ajuste ensemble au moment du devis. ", React.createElement("a", {
    href: "Formules",
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "Comparatif d\xE9taill\xE9 \u2192")), React.createElement("span", {
    className: "hint",
    style: {
      marginTop: 8
    }
  }, "\uD83D\uDCB3 Bon \xE0 savoir : votre ", React.createElement("strong", null, "d\xE9m\xE9nagement est payable en 3\xD7 sans frais"), " avec Klarna, au moment de la prestation et seulement si vous le souhaitez. ", React.createElement("strong", null, "Le devis, lui, est 100\xA0% gratuit"), ", sans engagement ni carte bancaire.")), React.createElement("div", {
    className: "lf full"
  }, React.createElement("label", null, "D\xE9tails utiles (optionnel)"), React.createElement("textarea", {
    name: "details",
    defaultValue: data.details,
    placeholder: "Stationnement \xE0 r\xE9server, animaux, garde-meuble, contrainte d'horaire\u2026 toute info qui \xE9vite une surprise le jour J."
  }))), React.createElement("div", {
    className: "form-nav",
    style: {
      marginTop: 32
    }
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: back
  }, "\u2190 Retour"), React.createElement("button", {
    type: "submit",
    className: "form-submit"
  }, "Continuer", React.createElement("span", null, "\u2192")), tried1 && !step1Complete && React.createElement("span", {
    className: "form-incomplete"
  }, "Il manque quelques infos \u2014 voir les champs en rouge."))), step === 2 && React.createElement(InventoryStep, {
    data: data,
    set: set,
    onBack: back,
    onSubmit: submit,
    sending: sending
  }), React.createElement("p", {
    style: {
      marginTop: 22,
      textAlign: 'center',
      fontSize: 15,
      color: 'var(--ink-2)'
    }
  }, "Vous pr\xE9f\xE9rez en parler ? ", React.createElement("a", {
    href: "tel:+33615976577",
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "06 15 97 65 77")))), React.createElement("aside", {
    className: "devis-aside"
  }, React.createElement("div", {
    className: "aside-card"
  }, React.createElement("h4", null, "Ce que vous obtenez"), React.createElement("ul", null, React.createElement("li", null, "Votre fourchette de prix imm\xE9diatement"), React.createElement("li", null, "Le rappel \xE0 l'heure que vous choisissez"), React.createElement("li", null, "La formule conseill\xE9e pour votre volume"), React.createElement("li", null, "Un interlocuteur unique, joignable 24/7"), React.createElement("li", null, "Aucun engagement, aucune carte bancaire"))), React.createElement("div", {
    className: "aside-rating"
  }, React.createElement("div", {
    className: "big"
  }, "5,0"), React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), React.createElement("div", {
    className: "sub"
  }, "+100 avis clients \xB7", ' ', React.createElement("a", {
    href: "https://maps.app.goo.gl/8s8k2kZrFJpTn8e18",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit'
    }
  }, "voir sur Google")))))));
}
const REVIEWS = [{
  name: "Mari",
  text: "Très bonne expérience du début à la fin. L'équipe a été ponctuelle, organisée et très professionnelle. Tous nos meubles ont été parfaitement protégés et manipulés avec beaucoup de soin. Le déménagement s'est déroulé rapidement, dans une excellente ambiance, ce qui a rendu cette journée beaucoup moins stressante. Un grand merci pour votre sérieux et votre efficacité. Je recommande cette entreprise sans hésitation !"
}, {
  name: "Jean",
  text: "Excellente prestation ! L'équipe a été très réactive, soigneuse et toujours à l'écoute. Tout a été transporté sans le moindre dommage et le déménagement s'est terminé plus rapidement que prévu. Un vrai service de qualité avec des personnes sympathiques et professionnelles. Merci encore !"
}, {
  name: "Eliza",
  text: "Je recommande cette entreprise les yeux fermés. Dès le premier contact, tout a été clair et bien organisé. Le jour du déménagement, l'équipe est arrivée à l'heure, a pris grand soin de nos affaires et a travaillé avec efficacité tout au long de la journée. Un service sérieux, des tarifs honnêtes et une équipe très agréable. Merci pour votre professionnalisme !"
}];
function Testimonials() {
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
  }, "*"), " Ils nous ont fait confiance")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce que disent", React.createElement("br", null), React.createElement("em", null, "nos clients."))), React.createElement("div", {
    className: "reveal-stagger",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24,
      marginTop: 40
    }
  }, REVIEWS.map((r, i) => React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      background: 'var(--paper-2)',
      border: '1px solid var(--rule)',
      borderRadius: 16,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontSize: 18,
      letterSpacing: 2
    },
    "aria-label": "Note 5 sur 5"
  }, "\u2605\u2605\u2605\u2605\u2605"), React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, r.text), React.createElement("figcaption", {
    style: {
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 'auto'
    }
  }, "\u2014 ", r.name)))), React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "\u2605 5,0/5"), " \xB7 +100 avis clients")));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(DevisHero, null), React.createElement(DevisForm, null), React.createElement(Testimonials, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { sendToCockpit, DevisHero, Stepper, Choice, FormuleOption, getPrefill, etapeInitiale, SegSelect, AccessBlock, DevisForm, Testimonials, App }); } catch (e) {}
})();
