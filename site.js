/* site.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState,
  useEffect,
  useRef
} = React;
(function () {
  const CLE = 'lbc_attrib';
  const PAYANT = ['cpc', 'ppc', 'paid', 'paidsocial', 'paid_social', 'display', 'ads'];
  function hote(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
    } catch (e) {
      return '';
    }
  }
  function detecter() {
    const p = new URLSearchParams(window.location.search);
    const g = k => (p.get(k) || '').trim().toLowerCase();
    const src = g('utm_source'),
      med = g('utm_medium'),
      camp = p.get('utm_campaign') || '';
    const gclid = p.get('gclid') || p.get('gbraid') || p.get('wbraid') || '';
    const fbclid = p.get('fbclid') || '';
    const ref = hote(document.referrer || '');
    const payant = PAYANT.indexOf(med.replace(/[-\s]/g, '_')) >= 0;
    let canal = '';
    if (gclid) canal = 'google_ads';else if (fbclid && payant) canal = 'meta_ads';else if (src === 'gmb' || src === 'google_maps' || src === 'maps' || med === 'maps' || med === 'gmb') canal = 'google_maps';else if (src.indexOf('google') >= 0) canal = payant ? 'google_ads' : 'google_seo';else if (['facebook', 'instagram', 'meta', 'fb', 'ig'].indexOf(src) >= 0) canal = payant ? 'meta_ads' : 'meta_social';else if (src.indexOf('leboncoin') >= 0) canal = 'leboncoin';else if (src) canal = 'autre';else if (fbclid) canal = 'meta_social';else if (ref.indexOf('google') >= 0) canal = document.referrer.indexOf('/maps') >= 0 || document.referrer.indexOf('/local') >= 0 ? 'google_maps' : 'google_seo';else if (ref.indexOf('bing') >= 0 || ref.indexOf('yahoo') >= 0 || ref.indexOf('ecosia') >= 0 || ref.indexOf('duckduckgo') >= 0) canal = 'autre_seo';else if (ref.indexOf('facebook') >= 0 || ref.indexOf('instagram') >= 0 || ref.indexOf('fb.com') >= 0) canal = 'meta_social';else if (ref.indexOf('leboncoin') >= 0) canal = 'leboncoin';else if (ref && ref.indexOf('lbcdemenagement') < 0) canal = 'referral';else if (!ref) canal = 'direct';else return null;
    return {
      canal: canal,
      source: src || ref || 'direct',
      medium: med || '',
      campagne: camp || '',
      gclid: gclid ? gclid.slice(0, 120) : '',
      fbclid: fbclid ? fbclid.slice(0, 120) : '',
      referent: (document.referrer || '').slice(0, 200),
      page: (window.location.pathname + window.location.search).slice(0, 200),
      date: new Date().toISOString().slice(0, 10)
    };
  }
  function lire() {
    try {
      return JSON.parse(localStorage.getItem(CLE) || 'null');
    } catch (e) {
      return null;
    }
  }
  try {
    const vu = detecter();
    if (vu) {
      const stock = lire() || {};
      if (!stock.premier) stock.premier = vu;
      if (vu.canal !== 'direct' || !stock.dernier) stock.dernier = vu;
      try {
        localStorage.setItem(CLE, JSON.stringify(stock));
      } catch (e) {}
    }
  } catch (e) {}
  window.LBC_ATTRIB = function () {
    const s = lire() || {};
    const d = s.dernier || s.premier || null;
    const p = s.premier || null;
    if (!d) return null;
    return {
      canal: d.canal,
      canalPremier: p ? p.canal : d.canal,
      source: d.source,
      medium: d.medium,
      campagne: d.campagne,
      gclid: d.gclid,
      fbclid: d.fbclid,
      referent: d.referent,
      pageArrivee: d.page,
      premierContactLe: p ? p.date : d.date,
      premiereCampagne: p ? p.campagne : ''
    };
  };
})();
const CURRENT = document.body.getAttribute('data-page') || 'accueil';
const NAV = [{
  key: 'accueil',
  label: t('Accueil'),
  href: '/'
}, {
  key: 'formules',
  label: t('Formules'),
  href: 'Formules'
}, {
  key: 'france',
  label: t('En France'),
  mega: 'france'
}, {
  key: 'international',
  label: t('International'),
  mega: 'intl'
}, {
  key: 'mutation',
  label: t('Mutation professionnelle'),
  dropdown: [{
    label: t("Je suis un salarié"),
    href: "Mutations"
  }, {
    label: t("Je suis un militaire"),
    href: "Militaire"
  }, {
    label: t("Je suis une entreprise"),
    href: "Entreprise"
  }]
}, {
  key: 'apropos',
  label: t('À propos'),
  href: 'Apropos'
}];
const MEGA = {
  france: {
    eyebrow: t("Déménagement en France"),
    title: t("De la Côte d'Azur\nà tout l'Hexagone."),
    blurb: t("Implantés à Nice, on déménage dans toute la région et partout en France — même équipe, même soin, du studio au grand volume."),
    cta: {
      label: t("Devis longue distance"),
      href: "Devis"
    },
    columns: [{
      title: t("Côte d'Azur"),
      links: [["Nice", "Demenagement-Nice"], ["Cannes", "Demenagement-Cannes"], ["Antibes", "Demenagement-Antibes"], ["Monaco", "Demenagement-Monaco"], ["Menton", "Demenagement-Menton"], ["Grasse", "Demenagement-Grasse"], ["Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer"], ["Le Cannet", "Demenagement-Le-Cannet"], ["Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var"], ["Mandelieu", "Demenagement-Mandelieu"]]
    }, {
      title: t("Longue distance"),
      links: [["Nice → Paris", "Demenagement-Nice-Paris"], ["Nice → Lyon", "Demenagement-Nice-Lyon"], ["Nice → Marseille", "Demenagement-Nice-Marseille"], ["Nice → Toulouse", "Demenagement-Nice-Toulouse"], ["Nice → Bordeaux", "Demenagement-Nice-Bordeaux"]]
    }]
  },
  intl: {
    eyebrow: t("Déménagement international"),
    title: t("Au-delà des\nfrontières."),
    blurb: t("Suisse, Italie, Espagne, Benelux : on organise le transport, les formalités douanières et le suivi jusqu'à destination."),
    cta: {
      label: t("Devis international"),
      href: "Devis"
    },
    columns: [{
      title: t("Suisse"),
      links: [["Genève", "Demenagement-Nice-Geneve"], ["Lausanne", "Demenagement-Nice-Lausanne"]]
    }, {
      title: t("Italie"),
      links: [["Milan", "Demenagement-Nice-Milan"], ["Turin", "Demenagement-Nice-Turin"]]
    }, {
      title: t("Espagne"),
      links: [["Barcelone", "Demenagement-Nice-Barcelone"], ["Madrid", "Demenagement-Nice-Madrid"]]
    }, {
      title: t("Benelux"),
      links: [["Bruxelles", "Demenagement-Nice-Bruxelles"], ["Luxembourg", "Demenagement-Nice-Luxembourg"]]
    }]
  }
};
function Logo() {
  return React.createElement("a", {
    href: "/",
    className: "logo",
    "aria-label": "LBC \u2014 Les Bras Cass\xE9s, accueil"
  }, React.createElement("img", {
    src: "assets/lbc-wordmark-sm.png",
    alt: "LBC D\xE9m\xE9nagement \u2014 d\xE9m\xE9nageur \xE0 Nice",
    decoding: "async",
    width: "432",
    height: "240"
  }));
}
function MegaPanel({
  data,
  onClose
}) {
  return React.createElement("div", {
    className: "mega",
    onMouseLeave: onClose
  }, React.createElement("div", {
    className: "mega-inner"
  }, React.createElement("div", {
    className: "mega-feature"
  }, React.createElement("div", {
    className: "mega-eyebrow"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", data.eyebrow), React.createElement("div", {
    className: "mega-title"
  }, data.title), React.createElement("p", {
    className: "mega-blurb"
  }, data.blurb), React.createElement("a", {
    href: data.cta.href,
    className: "mega-cta"
  }, data.cta.label, React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), React.createElement("div", {
    className: "mega-cols"
  }, data.columns.map((col, i) => React.createElement("div", {
    className: "mega-col",
    key: i
  }, React.createElement("div", {
    className: "mega-col-title"
  }, col.title), React.createElement("ul", null, col.links.map((l, j) => React.createElement("li", {
    key: j
  }, React.createElement("a", {
    href: l[1]
  }, l[0], React.createElement("span", {
    className: "mega-chev"
  }, "\u203A"))))))))));
}
function Nav() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
  const [drop, setDrop] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const closeTimer = React.useRef(null);
  const openMega = key => {
    clearTimeout(closeTimer.current);
    setMega(key);
    setDrop(null);
  };
  const openDrop = key => {
    clearTimeout(closeTimer.current);
    setDrop(key);
    setMega(null);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setMega(null);
      setDrop(null);
    }, 160);
  };
  useEffect(() => {
    const m = document.querySelector("main");
    if (m && !m.id) {
      m.id = "contenu";
      m.setAttribute("tabindex", "-1");
    }
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("a", {
    href: "#contenu",
    className: "skip-link"
  }, t('Aller au contenu')), React.createElement("header", {
    className: "nav",
    style: {
      borderRadius: "0px",
      padding: "0px",
      borderWidth: "0px 0px 3px",
      margin: "10px"
    },
    onMouseLeave: scheduleClose
  }, React.createElement("div", {
    className: "wrap nav-inner",
    style: {
      borderRadius: "0px"
    }
  }, React.createElement(Logo, null), React.createElement("nav", {
    className: "nav-links",
    "aria-label": t('Navigation principale')
  }, NAV.map(n => n.mega ? React.createElement("button", {
    key: n.key,
    className: "nav-megabtn" + (mega === n.mega ? " is-open" : ""),
    "aria-expanded": mega === n.mega,
    onMouseEnter: () => openMega(n.mega),
    onFocus: () => openMega(n.mega),
    onClick: () => setMega(m => m === n.mega ? null : n.mega)
  }, n.label, React.createElement("span", {
    className: "nav-caret",
    "aria-hidden": "true"
  }, "\u25BE")) : n.dropdown ? React.createElement("div", {
    key: n.key,
    className: "nav-dropwrap",
    onMouseEnter: () => openDrop(n.key)
  }, React.createElement("button", {
    className: "nav-megabtn" + (drop === n.key ? " is-open" : ""),
    "aria-expanded": drop === n.key,
    onClick: () => setDrop(d => d === n.key ? null : n.key)
  }, n.label, React.createElement("span", {
    className: "nav-caret",
    "aria-hidden": "true"
  }, "\u25BE")), drop === n.key && React.createElement("div", {
    className: "nav-drop",
    onMouseEnter: () => openDrop(n.key)
  }, n.dropdown.map((l, j) => React.createElement("a", {
    key: j,
    href: l.href
  }, l.label, React.createElement("span", {
    className: "mega-chev"
  }, "\u203A"))))) : React.createElement("a", {
    key: n.key,
    href: n.href,
    className: n.key === CURRENT ? 'is-active' : '',
    onMouseEnter: scheduleClose
  }, n.label))), React.createElement("div", {
    className: "nav-actions"
  }, React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost nav-call"
  }, React.createElement("svg", {
    className: "nav-call-ic",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z"
  })), React.createElement("span", {
    className: "lbl-full"
  }, "06 15 97 65 77"), React.createElement("span", {
    className: "lbl-short"
  }, t('Appeler'))), React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary nav-devis"
  }, React.createElement("span", {
    className: "lbl-full"
  }, t('Devis gratuit')), React.createElement("span", {
    className: "lbl-short"
  }, t('Devis gratuit')), React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("button", {
    className: "nav-burger",
    "aria-label": "Menu",
    onClick: () => setOpen(o => !o)
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)))), mega && React.createElement("div", {
    onMouseEnter: () => openMega(mega)
  }, React.createElement(MegaPanel, {
    data: MEGA[mega],
    onClose: scheduleClose
  })), React.createElement("div", {
    className: "mobile-menu" + (open ? " open" : "")
  }, NAV.map(n => n.mega ? React.createElement("div", {
    key: n.key,
    className: "mobile-group"
  }, React.createElement("button", {
    className: "mobile-grouphead",
    onClick: () => setMobileSub(s => s === n.mega ? null : n.mega)
  }, n.label, React.createElement("span", {
    className: "nav-caret"
  }, mobileSub === n.mega ? "−" : "+")), mobileSub === n.mega && React.createElement("div", {
    className: "mobile-sub"
  }, MEGA[n.mega].columns.map((col, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("div", {
    className: "mobile-sub-title"
  }, col.title), col.links.map((l, j) => React.createElement("a", {
    key: j,
    href: l[1]
  }, l[0])))))) : n.dropdown ? React.createElement("div", {
    key: n.key,
    className: "mobile-group"
  }, React.createElement("button", {
    className: "mobile-grouphead",
    onClick: () => setMobileSub(s => s === n.key ? null : n.key)
  }, n.label, React.createElement("span", {
    className: "nav-caret"
  }, mobileSub === n.key ? "−" : "+")), mobileSub === n.key && React.createElement("div", {
    className: "mobile-sub"
  }, n.dropdown.map((l, j) => React.createElement("a", {
    key: j,
    href: l.href
  }, l.label)))) : React.createElement("a", {
    key: n.key,
    href: n.href
  }, n.label)), React.createElement("a", {
    href: "Devis",
    style: {
      color: 'var(--accent)'
    }
  }, "Devis gratuit \u2192"))));
}
function MarqueeBar() {
  const items = ["Nice", "Cannes", "Antibes", "Monaco", "Saint-Tropez", "Marseille", "Aix-en-Provence", "Toulon", "Menton", "Toute la France", "Devis sous 24h", "Assurance incluse"];
  const Row = () => React.createElement(React.Fragment, null, items.map((c, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("span", null, c), React.createElement("span", {
    className: "sep",
    "aria-hidden": "true"
  }))));
  return React.createElement("div", {
    className: "marquee-bar",
    "aria-label": "Zones d'intervention",
    style: {
      margin: "clamp(44px, 6vw, 60px) 0px 0px"
    }
  }, React.createElement("div", {
    className: "marquee-track"
  }, React.createElement(Row, null), React.createElement(Row, null)));
}
function RoadDivider() {
  return React.createElement("div", {
    className: "road-divider",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "road-line"
  }), React.createElement("div", {
    className: "road-truck"
  }, React.createElement("img", {
    className: "road-logo",
    src: "assets/lbc-wordmark-sm.png",
    alt: "LBC D\xE9m\xE9nagement"
  }), React.createElement("svg", {
    viewBox: "0 0 380 150",
    width: "300",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("g", {
    className: "road-speed",
    stroke: "var(--accent)",
    strokeWidth: "3.5"
  }, React.createElement("path", {
    d: "M52 56 H12"
  }), React.createElement("path", {
    d: "M46 74 H6"
  }), React.createElement("path", {
    d: "M52 92 H22"
  })), React.createElement("rect", {
    x: "14",
    y: "18",
    width: "200",
    height: "88",
    rx: "6",
    fill: "var(--paper)"
  }), React.createElement("path", {
    d: "M214 106 V70 Q214 64 220 64 H268 L298 92 H304 Q310 92 310 98 V106 Z",
    fill: "var(--accent)"
  }), React.createElement("path", {
    d: "M242 72 H266 L288 92 H242 Z",
    fill: "#cdd9df"
  }), React.createElement("circle", {
    cx: "80",
    cy: "113",
    r: "18",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: "80",
    cy: "113",
    r: "6",
    fill: "var(--accent)",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "276",
    cy: "113",
    r: "18",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: "276",
    cy: "113",
    r: "6",
    fill: "var(--accent)",
    stroke: "none"
  }))));
}
function MascotStamp() {
  return React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "mascot-stamp"
  }, React.createElement("div", {
    className: "mascot-stamp-aside left"
  }, React.createElement("span", {
    className: "mascot-stamp-kicker"
  }, "D\xE9m\xE9nageurs ni\xE7ois"), React.createElement("span", {
    className: "mascot-stamp-line"
  }, "Le nom est la blague.")), React.createElement("div", {
    className: "mascot-stamp-circle"
  }, React.createElement("img", {
    src: "assets/lbc-mascot-sm.png",
    alt: "Mascotte LBC D\xE9m\xE9nagement",
    loading: "lazy",
    decoding: "async",
    width: "560",
    height: "560"
  })), React.createElement("div", {
    className: "mascot-stamp-aside right"
  }, React.createElement("span", {
    className: "mascot-stamp-kicker"
  }, "Nice \xB7 PACA \xB7 France"), React.createElement("span", {
    className: "mascot-stamp-line"
  }, "Le travail est s\xE9rieux."))));
}
const QQ_SURFACE_VOL = {
  studio: 14,
  t2: 25,
  t3: 40,
  t4: 60
};
const qqVilleFrom = addr => {
  if (!addr) return "";
  const parts = String(addr).split(",").map(s => s.trim()).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : addr;
};
function qqSendToCockpit(fields, leadId) {
  const np = (fields.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const payload = {
    source: at && at.canal || "site_web",
    attribution: at || null,
    leadId: leadId || null,
    statut: "Lead démarré (barre rapide)",
    client: {
      prenom,
      nom,
      tel: fields.tel || "",
      email: fields.email || "",
      contactPref: ""
    },
    formule: "standard",
    formulaireType: "partiel",
    volumeEstime: QQ_SURFACE_VOL[fields.surface] != null ? QQ_SURFACE_VOL[fields.surface] : null,
    dateSouhaitee: fields.date || "",
    depart: {
      adresse: fields.depart || "",
      ville: qqVilleFrom(fields.depart)
    },
    arrivee: {
      adresse: fields.arrivee || "",
      ville: qqVilleFrom(fields.arrivee)
    },
    message: "Lead capté via la barre rapide : étape 1 remplie" + (fields.type ? ", logement « " + fields.type + " »" : "") + ". Le prospect a été renvoyé à l'étape 2 du devis."
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
    }).catch(() => {});
  } catch (e) {
    return Promise.resolve();
  }
}
function AddressField({
  name,
  label,
  placeholder,
  defaultValue = "",
  className = "qq-field",
  inputClassName,
  hint,
  required,
  onValue,
  error
}) {
  const [val, setVal] = useState(defaultValue);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(-1);
  const timer = useRef(null);
  const blurTimer = useRef(null);
  const query = q => {
    if (q.trim().length < 3) {
      setItems([]);
      setOpen(false);
      return;
    }
    fetch("https://api-adresse.data.gouv.fr/search/?limit=5&q=" + encodeURIComponent(q)).then(r => r.json()).then(d => {
      const feats = d.features || [];
      window.LBC_GEO = window.LBC_GEO || {};
      feats.forEach(f => {
        const lbl = f.properties && f.properties.label;
        const c = f.geometry && f.geometry.coordinates;
        if (lbl && c) window.LBC_GEO[lbl.trim().toLowerCase()] = {
          lon: c[0],
          lat: c[1]
        };
      });
      const labels = feats.map(f => f.properties.label);
      setItems(labels);
      setOpen(labels.length > 0);
      setHi(-1);
    }).catch(() => {});
  };
  const onChange = e => {
    const v = e.target.value;
    setVal(v);
    if (onValue) onValue(v);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => query(v), 250);
  };
  const pick = label => {
    setVal(label);
    if (onValue) onValue(label);
    setItems([]);
    setOpen(false);
  };
  const onKeyDown = e => {
    if (!open || items.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHi(i => Math.min(items.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHi(i => Math.max(0, i - 1));
    } else if (e.key === "Enter" && hi >= 0) {
      e.preventDefault();
      pick(items[hi]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };
  return React.createElement("div", {
    className: className + " has-autocomplete"
  }, React.createElement("label", null, label), React.createElement("div", {
    className: "addr-input-wrap"
  }, React.createElement("input", {
    type: "text",
    name: name,
    value: val,
    placeholder: placeholder,
    autoComplete: "off",
    className: (inputClassName || "") + (error ? " field-error" : ""),
    required: required,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onFocus: () => {
      if (items.length) setOpen(true);
    },
    onBlur: () => {
      blurTimer.current = setTimeout(() => setOpen(false), 150);
    }
  }), open && React.createElement("ul", {
    className: "addr-suggest"
  }, items.map((label, i) => React.createElement("li", {
    key: i,
    className: "addr-option" + (i === hi ? " is-hi" : ""),
    onMouseEnter: () => setHi(i),
    onMouseDown: e => {
      e.preventDefault();
      clearTimeout(blurTimer.current);
      pick(label);
    }
  }, label)))), hint && React.createElement("span", {
    className: "hint"
  }, hint));
}
function QuickQuote({
  variant = "light"
}) {
  const go = e => {
    e.preventDefault();
    const f = e.currentTarget;
    const nom = f.nom.value.trim();
    const tel = f.tel.value.trim();
    const email = f.email.value.trim();
    const type = f.type.value;
    const surface = f.surface.value;
    const TYPE_LABEL = {
      appart: "Appartement",
      maison: "Maison",
      bureau: "Bureaux"
    };
    const SURF_LABEL = {
      studio: "Studio (< 30 m²)",
      t2: "2 pièces (30–50 m²)",
      t3: "3 pièces (50–80 m²)",
      t4: "4 pièces + (80 m² +)"
    };
    if (window.fbq) window.fbq("trackCustom", "DevisDemarre");
    const leadId = "L" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    qqSendToCockpit({
      nom,
      tel,
      email,
      type,
      surface
    }, leadId);
    const p = new URLSearchParams();
    if (nom) p.set("nom", nom);
    if (tel) p.set("tel", tel);
    if (email) p.set("email", email);
    if (type) p.set("type", type);
    if (surface) p.set("surface", surface);
    p.set("lead", leadId);
    p.set("etape", "2");
    window.location.href = "Devis?" + p.toString();
  };
  return React.createElement("div", {
    style: {
      opacity: "1"
    }
  }, React.createElement("form", {
    className: "quick-quote" + (variant === "dark" ? " on-dark" : ""),
    onSubmit: go
  }, React.createElement("input", {
    type: "text",
    name: "_honey",
    className: "hp-field",
    tabIndex: "-1",
    autoComplete: "off",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "qq-field qq-a-nom"
  }, React.createElement("label", null, "Pr\xE9nom & nom"), React.createElement("input", {
    type: "text",
    name: "nom",
    placeholder: "Jean Dupont",
    autoComplete: "name",
    required: true
  })), React.createElement("div", {
    className: "qq-field qq-a-tel"
  }, React.createElement("label", null, "T\xE9l\xE9phone"), React.createElement("input", {
    type: "tel",
    name: "tel",
    inputMode: "numeric",
    autoComplete: "tel",
    placeholder: "06 12 34 56 78",
    required: true,
    onInput: e => {
      let d = e.target.value.replace(/[^\d+]/g, '');
      if (d.startsWith('+33')) d = '0' + d.slice(3);
      d = d.replace(/\D/g, '').slice(0, 10);
      e.target.value = d.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
    }
  })), React.createElement("div", {
    className: "qq-field qq-a-email"
  }, React.createElement("label", null, "Email"), React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "jean@exemple.fr",
    autoComplete: "email",
    required: true
  })), React.createElement("div", {
    className: "qq-field is-select qq-a-type"
  }, React.createElement("label", null, "Type de logement"), React.createElement("select", {
    name: "type",
    defaultValue: "",
    required: true
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Appartement, maison\u2026"), React.createElement("option", {
    value: "appart"
  }, "Appartement"), React.createElement("option", {
    value: "maison"
  }, "Maison"), React.createElement("option", {
    value: "bureau"
  }, "Bureaux"))), React.createElement("div", {
    className: "qq-field is-select qq-a-surf"
  }, React.createElement("label", null, "Surface actuelle"), React.createElement("select", {
    name: "surface",
    defaultValue: "",
    required: true
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Surface actuelle"), React.createElement("option", {
    value: "studio"
  }, "Studio \xB7 < 30 m\xB2"), React.createElement("option", {
    value: "t2"
  }, "2 pi\xE8ces \xB7 30\u201350 m\xB2"), React.createElement("option", {
    value: "t3"
  }, "3 pi\xE8ces \xB7 50\u201380 m\xB2"), React.createElement("option", {
    value: "t4"
  }, "4 pi\xE8ces + \xB7 80 m\xB2 +"))), React.createElement("button", {
    type: "submit",
    className: "qq-submit qq-a-btn"
  }, React.createElement("span", {
    className: "qq-submit-arrow",
    "aria-hidden": "true"
  }, "\u2192"), React.createElement("span", {
    className: "qq-submit-label"
  }, "\xC9tape suivante"))), React.createElement("div", {
    className: "qq-note" + (variant === "dark" ? " on-dark" : "")
  }, React.createElement("span", null, React.createElement("span", {
    className: "chk"
  }, "\u2713"), " Gratuit & sans engagement"), React.createElement("span", null, React.createElement("span", {
    className: "chk"
  }, "\u2713"), " R\xE9ponse sous 24h"), React.createElement("a", {
    href: "tel:+33615976577",
    className: "qq-phone"
  }, "Ou appelez-nous : ", React.createElement("strong", null, "06 15 97 65 77"))));
}
const COTE_AZUR = [["Déménagement Nice", "Demenagement-Nice"], ["Déménagement Cannes", "Demenagement-Cannes"], ["Déménagement Antibes", "Demenagement-Antibes"], ["Déménagement Monaco", "Demenagement-Monaco"], ["Déménagement Menton", "Demenagement-Menton"], ["Déménagement Grasse", "Demenagement-Grasse"], ["Déménagement Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer"], ["Déménagement Le Cannet", "Demenagement-Le-Cannet"], ["Déménagement Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var"], ["Déménagement Mandelieu", "Demenagement-Mandelieu"]];
const FRANCE = [];
const CONSEILS = [{
  label: "Estimer le volume de votre déménagement",
  href: "Article-estimer-volume"
}, {
  label: "Déménagement Nice → Paris : délais & organisation",
  href: "Article-demenagement-nice-paris-prix-delais"
}, {
  label: "Réussir son déménagement Nice-Paris",
  href: "Article-demenagement-nice-paris-reussir"
}, {
  label: "Déménagement international depuis Nice",
  href: "Article-demenagement-international-depuis-nice"
}, {
  label: "Villes aux démarches spéciales",
  href: "Article-villes-demarches-speciales-demenagement"
}, {
  label: "Déménagement étudiant à Nice",
  href: "Article-demenagement-etudiant-nice"
}, {
  label: "Déménager à Nice : stationnement & autorisations",
  href: "Article-demenager-nice"
}, {
  label: "Bien choisir sa société de déménagement",
  href: "Article-choisir-demenageur"
}];
function FooterSEO() {
  return React.createElement("section", {
    className: "footer-seo"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "footer-seo-grid"
  }, React.createElement("div", null, React.createElement("h3", null, "D\xE9m\xE9nager partout sur la ", React.createElement("span", {
    className: "ast"
  }, "*"), "C\xF4te d'Azur"), React.createElement("div", {
    className: "seo-sub first"
  }, "PACA \xB7 R\xE9gion ni\xE7oise"), React.createElement("div", {
    className: "seo-cities"
  }, COTE_AZUR.map((c, i) => React.createElement("a", {
    key: i,
    href: c[1]
  }, c[0])), React.createElement("a", {
    href: "Quartiers"
  }, "Quartiers d'exception (Vieux-Nice\u2026)")), React.createElement("div", {
    className: "seo-sub"
  }, "Longue distance \xB7 France"), React.createElement("div", {
    className: "seo-cities"
  }, React.createElement("a", {
    href: "Demenagement-Nice-Paris"
  }, "D\xE9m\xE9nagement Nice \u2192 Paris"), React.createElement("a", {
    href: "Demenagement-Nice-Lyon"
  }, "D\xE9m\xE9nagement Nice \u2192 Lyon"), React.createElement("a", {
    href: "Demenagement-Nice-Marseille"
  }, "D\xE9m\xE9nagement Nice \u2192 Marseille"), React.createElement("a", {
    href: "Demenagement-Nice-Toulouse"
  }, "D\xE9m\xE9nagement Nice \u2192 Toulouse"), React.createElement("a", {
    href: "Demenagement-Nice-Bordeaux"
  }, "D\xE9m\xE9nagement Nice \u2192 Bordeaux")), React.createElement("div", {
    className: "seo-sub"
  }, "D\xE9m\xE9nagement international"), React.createElement("div", {
    className: "seo-cities"
  }, React.createElement("a", {
    href: "Demenagement-Nice-Geneve"
  }, "Nice \u2192 Gen\xE8ve"), React.createElement("a", {
    href: "Demenagement-Nice-Lausanne"
  }, "Nice \u2192 Lausanne"), React.createElement("a", {
    href: "Demenagement-Nice-Bruxelles"
  }, "Nice \u2192 Bruxelles"), React.createElement("a", {
    href: "Demenagement-Nice-Luxembourg"
  }, "Nice \u2192 Luxembourg"), React.createElement("a", {
    href: "Demenagement-Nice-Barcelone"
  }, "Nice \u2192 Barcelone"), React.createElement("a", {
    href: "Demenagement-Nice-Madrid"
  }, "Nice \u2192 Madrid"), React.createElement("a", {
    href: "Demenagement-Nice-Milan"
  }, "Nice \u2192 Milan"), React.createElement("a", {
    href: "Demenagement-Nice-Turin"
  }, "Nice \u2192 Turin"))), React.createElement("div", null, React.createElement("h3", null, "Nos conseils d\xE9m\xE9nagement"), React.createElement("div", {
    className: "seo-conseils"
  }, CONSEILS.map((c, i) => React.createElement("a", {
    key: i,
    href: c.href
  }, c.label))), React.createElement("div", {
    className: "seo-sub"
  }, "Besoin d'un chiffrage ?"), React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary",
    style: {
      marginTop: 4
    }
  }, "Obtenir mon devis gratuit", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))));
}
function FloatWhatsApp() {
  const phone = "33615976577";
  const msg = encodeURIComponent("Bonjour LBC ! Je souhaite un devis pour mon déménagement.");
  return React.createElement("a", {
    className: "wa-float",
    href: "https://wa.me/" + phone + "?text=" + msg,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Devis rapide par WhatsApp"
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "30",
    height: "30",
    fill: "currentColor",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.358.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.448h.005c6.582 0 11.946-5.358 11.949-11.893a11.821 11.821 0 00-3.48-8.413z"
  })), React.createElement("span", {
    className: "wa-float-label"
  }, "Devis WhatsApp"));
}
function useLiveliness() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const cleanups = [];
    const counters = Array.from(document.querySelectorAll(".stat-num, .ap-stat-n, .stat-num-inline"));
    if (counters.length && "IntersectionObserver" in window) {
      const animate = el => {
        const node = Array.from(el.childNodes).find(n => n.nodeType === 3 && /\d/.test(n.nodeValue));
        if (!node) return;
        const target = parseInt(node.nodeValue.replace(/\s/g, ""), 10);
        if (isNaN(target)) return;
        const dur = 1100,
          t0 = performance.now();
        const step = t => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          node.nodeValue = String(Math.round(e * target));
          if (p < 1) requestAnimationFrame(step);else node.nodeValue = String(target);
        };
        requestAnimationFrame(step);
      };
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            animate(en.target);
            io.unobserve(en.target);
          }
        });
      }, {
        threshold: 0.6
      });
      counters.forEach(c => io.observe(c));
      cleanups.push(() => io.disconnect());
    }
    const tiltCards = Array.from(document.querySelectorAll(".q-card, .formule-card"));
    const tiltHandlers = [];
    tiltCards.forEach(card => {
      card.style.transformStyle = "preserve-3d";
      card.style.transition = "transform .2s ease-out";
      const move = e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(800px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg) translateY(-3px)";
      };
      const leave = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      tiltHandlers.push([card, move, leave]);
    });
    cleanups.push(() => tiltHandlers.forEach(([c, m, l]) => {
      c.removeEventListener("mousemove", m);
      c.removeEventListener("mouseleave", l);
    }));
    return () => cleanups.forEach(fn => fn());
  }, []);
}
function Footer() {
  useLiveliness();
  return React.createElement(React.Fragment, null, React.createElement(FloatWhatsApp, null), React.createElement(FooterSEO, null), React.createElement("footer", {
    className: "footer"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "footer-top"
  }, React.createElement("div", {
    className: "footer-brand"
  }, React.createElement("img", {
    src: "assets/lbc-wordmark-sm.png",
    alt: "LBC D\xE9m\xE9nagement \u2014 d\xE9m\xE9nageur \xE0 Nice",
    loading: "lazy",
    decoding: "async",
    width: "432",
    height: "240"
  }), React.createElement("p", {
    className: "footer-tagline"
  }, "D\xE9m\xE9nageurs professionnels bas\xE9s \xE0 Nice. Particuliers et entreprises, PACA et toute la France.")), React.createElement("div", {
    className: "footer-cols"
  }, React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Nos services"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "Formules"
  }, "Nos formules")), React.createElement("li", null, React.createElement("a", {
    href: "Mutations"
  }, "Mutation professionnelle")), React.createElement("li", null, React.createElement("a", {
    href: "Militaire"
  }, "D\xE9m\xE9nagement militaire")), React.createElement("li", null, React.createElement("a", {
    href: "Diplomatique"
  }, "D\xE9m\xE9nagement diplomatique")))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Le site"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/"
  }, "Accueil")), React.createElement("li", null, React.createElement("a", {
    href: "Blog"
  }, "Blog & conseils")), React.createElement("li", null, React.createElement("a", {
    href: "FAQ"
  }, "Questions fr\xE9quentes")), React.createElement("li", null, React.createElement("a", {
    href: "Checklist"
  }, "Checklist d\xE9m\xE9nagement")), React.createElement("li", null, React.createElement("a", {
    href: "Partenaires"
  }, "Devenir partenaire")), React.createElement("li", null, React.createElement("a", {
    href: "Devis"
  }, "Devis gratuit")), React.createElement("li", null, React.createElement("a", {
    href: "/#avis"
  }, "Avis clients")))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Contact"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77")), React.createElement("li", null, React.createElement("a", {
    className: "footer-email",
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com")), React.createElement("li", null, "12 rue d'Italie", React.createElement("br", null), "06000 Nice"), React.createElement("li", {
    style: {
      marginTop: 6,
      color: 'var(--muted)'
    }
  }, "Lun\u2013Sam \xB7 8h\u201319h"))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "L\xE9gal"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "Mentions-legales"
  }, "Mentions l\xE9gales")), React.createElement("li", null, React.createElement("a", {
    href: "Confidentialite"
  }, "Confidentialit\xE9")), React.createElement("li", null, React.createElement("a", {
    href: "CGV"
  }, "CGV")))))), React.createElement("div", {
    className: "footer-bottom"
  }, React.createElement("div", null, "\xA9 2026 LBC D\xE9m\xE9nagement \u2014 SAS au capital de 3 000\u20AC \xB7 12 rue d'Italie, 06000 Nice"), React.createElement("div", {
    className: "footer-made"
  }, "Les Bras Cass\xE9s. Le nom est la blague, le travail est s\xE9rieux.")))));
}
function useScrollReveal() {
  useEffect(() => {
    let io, safety;
    const promote = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add('is-in');
      });
    };
    const setup = () => {
      promote();
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              io.unobserve(e.target);
            }
          });
        }, {
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.05
        });
        document.querySelectorAll('.reveal:not(.is-in), .reveal-stagger:not(.is-in)').forEach(el => io.observe(el));
      }
      safety = setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('is-in'));
      }, 700);
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(setup));
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      if (io) io.disconnect();
    };
  }, []);
}
Object.assign(window, {
  Logo,
  Nav,
  MarqueeBar,
  MascotStamp,
  RoadDivider,
  QuickQuote,
  AddressField,
  FooterSEO,
  Footer,
  useScrollReveal
});
  try { Object.assign(window, { Logo, MegaPanel, Nav, MarqueeBar, RoadDivider, MascotStamp, qqSendToCockpit, AddressField, QuickQuote, FooterSEO, FloatWhatsApp, useLiveliness, Footer, useScrollReveal }); } catch (e) {}
})();
