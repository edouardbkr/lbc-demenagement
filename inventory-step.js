/* inventory-step.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState
} = React;
const S = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const ICON = {
  canape: React.createElement(S, null, React.createElement("rect", {
    x: "2.5",
    y: "11",
    width: "19",
    height: "6",
    rx: "1.2"
  }), React.createElement("path", {
    d: "M5 11V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"
  }), React.createElement("path", {
    d: "M4.5 17v1.6M19.5 17v1.6"
  })),
  fauteuil: React.createElement(S, null, React.createElement("rect", {
    x: "6",
    y: "11",
    width: "12",
    height: "6",
    rx: "1.2"
  }), React.createElement("path", {
    d: "M7.5 11V9a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2"
  }), React.createElement("path", {
    d: "M7 17v1.6M17 17v1.6"
  })),
  tablebasse: React.createElement(S, null, React.createElement("rect", {
    x: "3.5",
    y: "9.5",
    width: "17",
    height: "3",
    rx: "0.8"
  }), React.createElement("path", {
    d: "M5.5 12.5v4.5M18.5 12.5v4.5"
  })),
  meubletv: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "10",
    width: "18",
    height: "7.5",
    rx: "1"
  }), React.createElement("path", {
    d: "M3 13.6h18M12 10v7.5"
  }), React.createElement("path", {
    d: "M5 17.5v1.4M19 17.5v1.4"
  })),
  tv: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "11",
    rx: "1.2"
  }), React.createElement("path", {
    d: "M9 20h6M12 16v4"
  })),
  biblio: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "3.5",
    width: "14",
    height: "17",
    rx: "1"
  }), React.createElement("path", {
    d: "M5 9h14M5 14.5h14"
  })),
  lit: React.createElement(S, null, React.createElement("path", {
    d: "M3 17v-3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V17"
  }), React.createElement("path", {
    d: "M3 17h18M3 19.2v-2.2M21 19.2v-2.2"
  }), React.createElement("path", {
    d: "M7 11.5V10a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 10v1.5"
  })),
  matelas: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "8.5",
    width: "18",
    height: "7",
    rx: "2.2"
  }), React.createElement("path", {
    d: "M3 12h18"
  })),
  armoire: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "3.5",
    width: "14",
    height: "17",
    rx: "1"
  }), React.createElement("path", {
    d: "M12 3.5v17M10.5 10.5v3M13.5 10.5v3"
  })),
  commode: React.createElement(S, null, React.createElement("rect", {
    x: "4",
    y: "5.5",
    width: "16",
    height: "13.5",
    rx: "1"
  }), React.createElement("path", {
    d: "M4 10h16M4 14.5h16M11 7.7h2M11 12.2h2M11 16.7h2"
  })),
  chevet: React.createElement(S, null, React.createElement("rect", {
    x: "7",
    y: "8",
    width: "10",
    height: "9",
    rx: "1"
  }), React.createElement("path", {
    d: "M7 12h10M11 9.8h2"
  }), React.createElement("path", {
    d: "M8.5 17v1.5M15.5 17v1.5"
  })),
  miroir: React.createElement(S, null, React.createElement("rect", {
    x: "7",
    y: "3",
    width: "10",
    height: "15.5",
    rx: "5"
  }), React.createElement("path", {
    d: "M9 19.5h6"
  })),
  frigo: React.createElement(S, null, React.createElement("rect", {
    x: "6",
    y: "3",
    width: "12",
    height: "18",
    rx: "1.5"
  }), React.createElement("path", {
    d: "M6 10h12M9 6.2v1.8M9 12v2.2"
  })),
  lavevaisselle: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "3.5",
    width: "14",
    height: "17",
    rx: "1"
  }), React.createElement("path", {
    d: "M5 8h14M8 5.6h3.5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "3"
  })),
  four: React.createElement(S, null, React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "1.5"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "8",
    r: "1.3"
  }), React.createElement("circle", {
    cx: "15.5",
    cy: "8",
    r: "1.3"
  }), React.createElement("rect", {
    x: "7",
    y: "12.5",
    width: "10",
    height: "5.5",
    rx: "0.8"
  })),
  micro: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "11",
    rx: "1.2"
  }), React.createElement("rect", {
    x: "5.5",
    y: "8.5",
    width: "9",
    height: "6",
    rx: "0.6"
  }), React.createElement("path", {
    d: "M17 9.2v3.4"
  })),
  tablemanger: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "9",
    width: "18",
    height: "2.6",
    rx: "0.6"
  }), React.createElement("path", {
    d: "M5 11.6v6M19 11.6v6"
  })),
  bureau: React.createElement(S, null, React.createElement("path", {
    d: "M3 7.5h18M4 7.5v11M20 7.5v11"
  }), React.createElement("rect", {
    x: "13",
    y: "7.5",
    width: "7",
    height: "5.5",
    rx: "0.5"
  }), React.createElement("path", {
    d: "M14.6 10.2h3.8"
  })),
  chaise: React.createElement(S, null, React.createElement("path", {
    d: "M8 3.5v9.5h7"
  }), React.createElement("path", {
    d: "M15 8v10"
  }), React.createElement("path", {
    d: "M8 13v5M8 8h7"
  })),
  ecran: React.createElement(S, null, React.createElement("rect", {
    x: "3.5",
    y: "4.5",
    width: "17",
    height: "11",
    rx: "1.2"
  }), React.createElement("path", {
    d: "M8 19h8M12 15.5v3.5"
  })),
  etagere: React.createElement(S, null, React.createElement("path", {
    d: "M5 4v16.5M19 4v16.5"
  }), React.createElement("path", {
    d: "M5 4h14M5 9.5h14M5 15h14M5 20.5h14"
  })),
  lavelinge: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "3.5",
    width: "14",
    height: "17",
    rx: "1.2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  }), React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "1.3"
  }), React.createElement("path", {
    d: "M8 6.6h3"
  })),
  sechelinge: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "3.5",
    width: "14",
    height: "17",
    rx: "1.2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  }), React.createElement("path", {
    d: "M10.3 13c.55-.8 1.1-.8 1.7 0s1.15.8 1.7 0M8 6.6h3"
  })),
  velo: React.createElement(S, null, React.createElement("circle", {
    cx: "6.5",
    cy: "15.5",
    r: "3.4"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "15.5",
    r: "3.4"
  }), React.createElement("path", {
    d: "M6.5 15.5l3-6h4M9.5 9.5h4.5M14 9.5l3.5 6"
  })),
  jardin: React.createElement(S, null, React.createElement("path", {
    d: "M12 4.5v15"
  }), React.createElement("path", {
    d: "M5 9.5a7 7 0 0 1 14 0z"
  }), React.createElement("path", {
    d: "M8.5 19.5h7"
  })),
  bbq: React.createElement(S, null, React.createElement("path", {
    d: "M5 8.5h14l-1.4 6a4 4 0 0 1-4 3h-3.2a4 4 0 0 1-4-3z"
  }), React.createElement("path", {
    d: "M8 17.5l-1 3.5M16 17.5l1 3.5"
  }), React.createElement("path", {
    d: "M9.5 5c0 1 1 1 1 2M13.5 5c0 1 1 1 1 2"
  })),
  etabli: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "3",
    rx: "0.5"
  }), React.createElement("path", {
    d: "M5 11v9M19 11v9M5 15h14"
  })),
  tree: React.createElement(S, null, React.createElement("path", {
    d: "M12 2.5L7 10h10z"
  }), React.createElement("path", {
    d: "M9 10l-3 6h12l-3-6"
  }), React.createElement("path", {
    d: "M12 16v5"
  })),
  piano: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "1"
  }), React.createElement("path", {
    d: "M3 13h18M7 6v7M11 6v7M15 6v7"
  })),
  coffre: React.createElement(S, null, React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "1.5"
  }), React.createElement("circle", {
    cx: "11",
    cy: "12",
    r: "3.4"
  }), React.createElement("path", {
    d: "M11 12V9.6M16.5 8v8"
  })),
  art: React.createElement(S, null, React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "1"
  }), React.createElement("path", {
    d: "M7 16l3.4-4 2.5 3 2-2.6 2.1 3.6"
  }), React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "1.2"
  })),
  elecmenager: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "4",
    width: "14",
    height: "16",
    rx: "1"
  }), React.createElement("path", {
    d: "M5 9h14"
  }), React.createElement("circle", {
    cx: "12",
    cy: "14.5",
    r: "2.4"
  })),
  jacuzzi: React.createElement(S, null, React.createElement("path", {
    d: "M3 11h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"
  }), React.createElement("path", {
    d: "M6.5 11V7.2a2 2 0 0 1 4 0"
  }), React.createElement("path", {
    d: "M9 8.2v.01M13 7.6v.01M16 8.6v.01"
  })),
  babyfoot: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "10",
    rx: "1.2"
  }), React.createElement("path", {
    d: "M3 12h18M8 4.5v15M14 4.5v15"
  })),
  gym: React.createElement(S, null, React.createElement("path", {
    d: "M6.5 8v8M3.5 9.8v4.4M17.5 8v8M20.5 9.8v4.4M6.5 12h11"
  })),
  aquarium: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "1.5"
  }), React.createElement("path", {
    d: "M3 9.5c3 1.4 6 1.4 9 0s6-1.4 9 0"
  }), React.createElement("circle", {
    cx: "8",
    cy: "14",
    r: "1"
  })),
  pingpong: React.createElement(S, null, React.createElement("rect", {
    x: "3",
    y: "9",
    width: "18",
    height: "2.4",
    rx: "0.5"
  }), React.createElement("path", {
    d: "M5 11.4v6M19 11.4v6M12 9V5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "4",
    r: "1"
  })),
  laptop: React.createElement(S, null, React.createElement("rect", {
    x: "5",
    y: "5",
    width: "14",
    height: "9",
    rx: "1"
  }), React.createElement("path", {
    d: "M3 18h18"
  })),
  star: React.createElement(S, null, React.createElement("path", {
    d: "M12 3l2.5 5.4 5.9.6-4.4 4 1.3 5.8L12 16l-5.3 2.8 1.3-5.8-4.4-4 5.9-.6z"
  })),
  carton: React.createElement(S, null, React.createElement("path", {
    d: "M3 8l9-4 9 4v8l-9 4-9-4z"
  }), React.createElement("path", {
    d: "M3 8l9 4 9-4M12 12v8"
  }))
};
const SALON_ITEMS = [{
  key: "canape2",
  label: "Canapé 2 places",
  icon: "canape"
}, {
  key: "canape3",
  label: "Canapé 3 places",
  icon: "canape"
}, {
  key: "canapeangle",
  label: "Canapé d'angle",
  icon: "canape"
}, {
  key: "fauteuil",
  label: "Fauteuil",
  icon: "fauteuil"
}, {
  key: "tablebasse",
  label: "Table basse",
  icon: "tablebasse"
}, {
  key: "meubletv",
  label: "Meuble TV",
  icon: "meubletv"
}, {
  key: "tv",
  label: "Télévision",
  icon: "tv"
}, {
  key: "biblio",
  label: "Bibliothèque",
  icon: "biblio"
}];
const CHAMBRE_ITEMS = [{
  key: "lit2",
  label: "Lit 2 places",
  icon: "lit"
}, {
  key: "litking",
  label: "Lit king size",
  icon: "lit"
}, {
  key: "litelec",
  label: "Lit électrique",
  icon: "lit"
}, {
  key: "litcoffre",
  label: "Lit coffre",
  icon: "lit"
}, {
  key: "lit1",
  label: "Lit 1 place / enfant",
  icon: "lit"
}, {
  key: "matelas",
  label: "Matelas",
  icon: "matelas"
}, {
  key: "armoire",
  label: "Armoire",
  icon: "armoire"
}, {
  key: "dressing",
  label: "Dressing",
  icon: "armoire"
}, {
  key: "commode",
  label: "Commode",
  icon: "commode"
}, {
  key: "chevet",
  label: "Table de chevet",
  icon: "chevet"
}, {
  key: "miroir",
  label: "Miroir",
  icon: "miroir"
}];
const CUISINE_ITEMS = [{
  key: "frigo",
  label: "Réfrigérateur",
  icon: "frigo"
}, {
  key: "frigoam",
  label: "Frigo américain",
  icon: "frigo"
}, {
  key: "congel",
  label: "Congélateur",
  icon: "frigo"
}, {
  key: "lavevaisselle",
  label: "Lave-vaisselle",
  icon: "lavevaisselle"
}, {
  key: "four",
  label: "Cuisinière / four",
  icon: "four"
}, {
  key: "micro",
  label: "Micro-ondes",
  icon: "micro"
}, {
  key: "tablemanger",
  label: "Table à manger",
  icon: "tablemanger"
}, {
  key: "chaise",
  label: "Chaise",
  icon: "chaise"
}, {
  key: "buffet",
  label: "Buffet / vaisselier",
  icon: "meubletv"
}];
const BUREAU_ITEMS = [{
  key: "bureau",
  label: "Bureau",
  icon: "bureau"
}, {
  key: "chaisebureau",
  label: "Chaise de bureau",
  icon: "chaise"
}, {
  key: "ecran",
  label: "Écran / ordinateur",
  icon: "ecran"
}, {
  key: "etagere",
  label: "Étagère",
  icon: "etagere"
}, {
  key: "caisson",
  label: "Caisson de rangement",
  icon: "commode"
}];
const BUANDERIE_ITEMS = [{
  key: "lavelinge",
  label: "Lave-linge",
  icon: "lavelinge"
}, {
  key: "sechelinge",
  label: "Sèche-linge",
  icon: "sechelinge"
}, {
  key: "elecmenager",
  label: "Autre électroménager",
  icon: "elecmenager"
}];
const TERRASSE_ITEMS = [{
  key: "jardin",
  label: "Salon de jardin",
  icon: "jardin"
}, {
  key: "tableext",
  label: "Table extérieure",
  icon: "tablemanger"
}, {
  key: "transat",
  label: "Chaise / transat",
  icon: "chaise"
}, {
  key: "bbq",
  label: "Barbecue",
  icon: "bbq"
}, {
  key: "plancha",
  label: "Plancha",
  icon: "bbq"
}, {
  key: "parasol",
  label: "Parasol",
  icon: "jardin"
}, {
  key: "plantes",
  label: "Plantes / jardinières",
  icon: "tree"
}];
const EXTERIEUR_ITEMS = [{
  key: "velo",
  label: "Vélo",
  icon: "velo"
}, {
  key: "etabli",
  label: "Établi / outils",
  icon: "etabli"
}, {
  key: "cartonscave",
  label: "Cartons de cave",
  icon: "carton"
}, {
  key: "etageregar",
  label: "Étagère / rangement",
  icon: "etagere"
}];
const SPECIAL_ITEMS = [{
  key: "piano",
  label: "Piano droit",
  icon: "piano"
}, {
  key: "pianoqueue",
  label: "Piano à queue",
  icon: "piano"
}, {
  key: "coffre",
  label: "Coffre-fort",
  icon: "coffre"
}, {
  key: "art",
  label: "Œuvre d'art / tableau",
  icon: "art"
}, {
  key: "statue",
  label: "Statue / sculpture",
  icon: "art"
}, {
  key: "billard",
  label: "Billard",
  icon: "tablebasse"
}, {
  key: "babyfoot",
  label: "Baby-foot",
  icon: "babyfoot"
}, {
  key: "pingpong",
  label: "Table de ping-pong",
  icon: "pingpong"
}, {
  key: "jacuzzi",
  label: "Jacuzzi / spa",
  icon: "jacuzzi"
}, {
  key: "aquarium",
  label: "Aquarium",
  icon: "aquarium"
}, {
  key: "cavevin",
  label: "Cave à vin",
  icon: "frigo"
}, {
  key: "gym",
  label: "Appareil de sport / tapis",
  icon: "gym"
}, {
  key: "arcade",
  label: "Borne d'arcade",
  icon: "tv"
}, {
  key: "veranda",
  label: "Mobilier de véranda",
  icon: "jardin"
}];
const DEFAULT_ITEMS = [{
  key: "canape",
  label: "Canapé",
  icon: "canape"
}, {
  key: "fauteuil",
  label: "Fauteuil",
  icon: "fauteuil"
}, {
  key: "table",
  label: "Table",
  icon: "tablemanger"
}, {
  key: "chaise",
  label: "Chaise",
  icon: "chaise"
}, {
  key: "lit",
  label: "Lit",
  icon: "lit"
}, {
  key: "armoire",
  label: "Armoire",
  icon: "armoire"
}, {
  key: "commode",
  label: "Rangement / commode",
  icon: "commode"
}, {
  key: "biblio",
  label: "Étagère",
  icon: "biblio"
}, {
  key: "carton",
  label: "Cartons",
  icon: "carton"
}];
const ROOMS = [{
  key: "salon",
  name: "Salon & séjour",
  icon: ICON.canape,
  items: SALON_ITEMS
}, {
  key: "chambre1",
  name: "Chambre 1",
  icon: ICON.lit,
  items: CHAMBRE_ITEMS
}, {
  key: "chambre2",
  name: "Chambre 2",
  icon: ICON.lit,
  items: CHAMBRE_ITEMS
}, {
  key: "chambre3",
  name: "Chambre 3",
  icon: ICON.lit,
  items: CHAMBRE_ITEMS
}, {
  key: "cuisine",
  name: "Cuisine & repas",
  icon: ICON.four,
  items: CUISINE_ITEMS
}, {
  key: "bureau",
  name: "Bureau",
  icon: ICON.laptop,
  items: BUREAU_ITEMS
}, {
  key: "buanderie",
  name: "Buanderie",
  icon: ICON.lavelinge,
  items: BUANDERIE_ITEMS
}, {
  key: "terrasse",
  name: "Terrasse",
  icon: ICON.tree,
  items: TERRASSE_ITEMS
}, {
  key: "exterieur",
  name: "Extérieur & cave",
  icon: ICON.velo,
  items: EXTERIEUR_ITEMS
}, {
  key: "special",
  name: "Objets spéciaux",
  icon: ICON.star,
  items: SPECIAL_ITEMS
}];
const FRAGILE = ["Vaisselle & verrerie", "Miroirs & vitres", "Œuvres d'art / tableaux", "TV & écrans", "Informatique", "Instruments de musique", "Luminaires", "Cave à vin"];
const DEMONTAGE = ["Lit", "Armoire / dressing", "Table", "Meuble en kit", "Cuisine équipée", "Étagères", "Bureau"];
function getAllRooms(data) {
  const custom = (data.customRooms || []).map(c => ({
    key: c.key,
    name: c.name,
    icon: ICON.star,
    items: []
  }));
  return ROOMS.concat(custom);
}
function AddInline({
  label,
  placeholder,
  onAdd
}) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState("");
  const commit = () => {
    const t = val.trim();
    if (t) onAdd(t);
    setVal("");
    setOpen(false);
  };
  if (!open) return React.createElement("button", {
    type: "button",
    className: "inv-add-btn",
    onClick: () => setOpen(true)
  }, "\uFF0B ", label);
  return React.createElement("span", {
    className: "inv-add-inline"
  }, React.createElement("input", {
    autoFocus: true,
    value: val,
    placeholder: placeholder,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        commit();
      }
      if (e.key === "Escape") setOpen(false);
    }
  }), React.createElement("button", {
    type: "button",
    className: "inv-add-ok",
    onClick: commit
  }, "OK"));
}
const CATALOG = (() => {
  const seen = {};
  const out = [];
  [SALON_ITEMS, CHAMBRE_ITEMS, CUISINE_ITEMS, BUREAU_ITEMS, BUANDERIE_ITEMS, TERRASSE_ITEMS, EXTERIEUR_ITEMS, SPECIAL_ITEMS, DEFAULT_ITEMS].forEach(arr => arr.forEach(it => {
    if (!seen[it.label]) {
      seen[it.label] = 1;
      out.push(it);
    }
  }));
  out.sort((a, b) => a.label.localeCompare(b.label, "fr"));
  return out;
})();
function ChipQ({
  label,
  qty,
  onSet
}) {
  if (qty <= 0) return React.createElement("button", {
    type: "button",
    className: "inv-chip",
    onClick: () => onSet(1)
  }, label);
  return React.createElement("span", {
    className: "inv-chip on inv-chip-q"
  }, React.createElement("span", {
    className: "inv-chip-q-label"
  }, label), React.createElement("button", {
    type: "button",
    className: "cq",
    "aria-label": "Moins",
    onClick: () => onSet(qty - 1)
  }, "\u2212"), React.createElement("b", null, qty), React.createElement("button", {
    type: "button",
    className: "cq",
    "aria-label": "Plus",
    onClick: () => onSet(qty + 1)
  }, "+"));
}
function AddFurniture({
  onAdd
}) {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const commitCustom = () => {
    const t = custom.trim();
    if (t) {
      onAdd({
        key: "cust" + Date.now(),
        label: t,
        icon: "star"
      });
      setCustom("");
    }
  };
  if (!open) return React.createElement("button", {
    type: "button",
    className: "inv-item inv-item-add",
    onClick: () => setOpen(true)
  }, React.createElement("span", {
    className: "inv-add-plus"
  }, "\uFF0B"), React.createElement("span", {
    className: "inv-label"
  }, "Ajouter un meuble"));
  return React.createElement("div", {
    className: "inv-addpanel"
  }, React.createElement("select", {
    className: "inv-add-select",
    defaultValue: "",
    onChange: e => {
      const it = CATALOG.find(c => c.label === e.target.value);
      if (it) onAdd({
        key: it.key,
        label: it.label,
        icon: it.icon
      });
      e.target.value = "";
    }
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Choisir un meuble\u2026"), CATALOG.map(c => React.createElement("option", {
    key: c.label
  }, c.label))), React.createElement("div", {
    className: "inv-addpanel-custom"
  }, React.createElement("input", {
    value: custom,
    placeholder: "Autre meuble\u2026",
    onChange: e => setCustom(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        commitCustom();
      }
    }
  }), React.createElement("button", {
    type: "button",
    className: "inv-add-ok",
    onClick: commitCustom
  }, "OK")), React.createElement("button", {
    type: "button",
    className: "inv-addpanel-close",
    onClick: () => setOpen(false)
  }, "Fermer"));
}
function InventoryStep({
  data,
  set,
  onBack,
  onNext,
  onSubmit,
  sending
}) {
  const allRooms = getAllRooms(data);
  const [room, setRoom] = useState(allRooms[0].key);
  const inv = data.inv || {};
  const qty = (rk, ik) => inv[rk + "::" + ik] || 0;
  const setQty = (rk, ik, n) => set("inv", {
    ...(data.inv || {}),
    [rk + "::" + ik]: Math.max(0, Math.min(99, n))
  });
  const cartons = data.cartons || 0;
  const roomItemsOf = rk => (data.roomItems || {})[rk] || [];
  const displayed = r => r.items.concat(roomItemsOf(r.key));
  const addItemToRoom = (rk, item) => {
    const roomObj = allRooms.find(r => r.key === rk);
    const exists = roomObj.items.some(x => x.key === item.key) || roomItemsOf(rk).some(x => x.key === item.key);
    if (!exists) set("roomItems", {
      ...(data.roomItems || {}),
      [rk]: [...roomItemsOf(rk), item]
    });
    setQty(rk, item.key, Math.max(1, qty(rk, item.key)));
  };
  const removeRoomItem = (rk, key) => {
    set("roomItems", {
      ...(data.roomItems || {}),
      [rk]: roomItemsOf(rk).filter(x => x.key !== key)
    });
    setQty(rk, key, 0);
  };
  const tagQty = (field, label) => (data[field] || {})[label] || 0;
  const setTag = (field, label, n) => {
    const m = {
      ...(data[field] || {})
    };
    if (n <= 0) delete m[label];else m[label] = Math.min(99, n);
    set(field, m);
  };
  const customTags = (field, base) => Object.keys(data[field] || {}).filter(k => !base.includes(k));
  const roomCount = r => displayed(r).reduce((s, it) => s + qty(r.key, it.key), 0);
  const totalItems = allRooms.reduce((s, r) => s + roomCount(r), 0);
  const sumTags = field => Object.values(data[field] || {}).reduce((a, b) => a + b, 0);
  const demontageCount = sumTags("demontage");
  const fragileCount = Object.keys(data.fragile || {}).length;
  const current = allRooms.find(r => r.key === room) || allRooms[0];
  const addedSet = roomItemsOf(current.key).reduce((m, it) => {
    m[it.key] = 1;
    return m;
  }, {});
  const addRoom = name => {
    const key = "piece" + Date.now();
    set("customRooms", [...(data.customRooms || []), {
      key,
      name
    }]);
    setRoom(key);
  };
  const renderChips = (field, base) => React.createElement("div", {
    className: "inv-chips"
  }, base.map(f => React.createElement(ChipQ, {
    key: f,
    label: f,
    qty: tagQty(field, f),
    onSet: n => setTag(field, f, n)
  })), customTags(field, base).map(f => React.createElement(ChipQ, {
    key: f,
    label: f,
    qty: tagQty(field, f),
    onSet: n => setTag(field, f, n)
  })), React.createElement(AddInline, {
    label: "Autre",
    placeholder: "Pr\xE9ciser\u2026",
    onAdd: v => setTag(field, v, 1)
  }));
  return React.createElement("div", {
    className: "inv-step"
  }, React.createElement("p", {
    className: "inv-intro"
  }, "Ajoutez vos meubles, pi\xE8ce par pi\xE8ce. Un ordre de grandeur suffit \u2014 on affine ensemble \xE0 la visite. ", React.createElement("strong", null, "Plus c'est pr\xE9cis, plus votre devis l'est.")), React.createElement("div", {
    className: "inv-rooms"
  }, allRooms.map(r => {
    const c = roomCount(r);
    return React.createElement("button", {
      type: "button",
      key: r.key,
      className: "inv-room" + (room === r.key ? " active" : ""),
      onClick: () => setRoom(r.key)
    }, React.createElement("span", {
      className: "inv-room-ic"
    }, r.icon), React.createElement("span", null, r.name), c > 0 && React.createElement("span", {
      className: "inv-room-badge"
    }, c));
  }), React.createElement(AddInline, {
    label: "Ajouter une pi\xE8ce",
    placeholder: "Ex. Chambre 4, Garage\u2026",
    onAdd: addRoom
  })), React.createElement("div", {
    className: "inv-grid"
  }, displayed(current).map(it => {
    const n = qty(current.key, it.key);
    return React.createElement("div", {
      key: it.key,
      className: "inv-item" + (n > 0 ? " on" : "")
    }, addedSet[it.key] && React.createElement("button", {
      type: "button",
      className: "inv-item-rm",
      "aria-label": "Retirer ce meuble",
      onClick: () => removeRoomItem(current.key, it.key)
    }, "\u2715"), React.createElement("div", {
      className: "inv-ic"
    }, ICON[it.icon]), React.createElement("div", {
      className: "inv-label"
    }, it.label), React.createElement("div", {
      className: "inv-ctrl"
    }, React.createElement("button", {
      type: "button",
      "aria-label": "Retirer",
      onClick: () => setQty(current.key, it.key, n - 1),
      disabled: n === 0
    }, "\u2212"), React.createElement("span", {
      className: "inv-n"
    }, n), React.createElement("button", {
      type: "button",
      "aria-label": "Ajouter",
      onClick: () => setQty(current.key, it.key, n + 1)
    }, "+")));
  }), React.createElement(AddFurniture, {
    onAdd: item => addItemToRoom(current.key, item)
  })), React.createElement("div", {
    className: "inv-cartons"
  }, React.createElement("div", {
    className: "inv-ic sm"
  }, ICON.carton), React.createElement("div", {
    className: "inv-cartons-txt"
  }, React.createElement("div", {
    className: "inv-label"
  }, "Cartons"), React.createElement("div", {
    className: "inv-sub"
  }, "Estimation du nombre de cartons")), React.createElement("div", {
    className: "inv-ctrl"
  }, React.createElement("button", {
    type: "button",
    "aria-label": "Retirer",
    onClick: () => set("cartons", Math.max(0, cartons - 1)),
    disabled: cartons === 0
  }, "\u2212"), React.createElement("input", {
    type: "number",
    min: "0",
    max: "500",
    inputMode: "numeric",
    className: "inv-num-input",
    value: cartons,
    "aria-label": "Nombre de cartons",
    onChange: e => set("cartons", Math.max(0, Math.min(500, parseInt(e.target.value, 10) || 0)))
  }), React.createElement("button", {
    type: "button",
    "aria-label": "Ajouter",
    onClick: () => set("cartons", Math.min(500, cartons + 1))
  }, "+"))), React.createElement("div", {
    className: "inv-section"
  }, React.createElement("div", {
    className: "inv-section-label"
  }, "Objets fragiles ou pr\xE9cieux ", React.createElement("span", {
    className: "inv-section-hint"
  }, "\u2014 pr\xE9cisez la quantit\xE9 si besoin")), renderChips("fragile", FRAGILE)), React.createElement("div", {
    className: "inv-section"
  }, React.createElement("div", {
    className: "inv-section-label"
  }, "\xC0 d\xE9monter & remonter ", React.createElement("span", {
    className: "inv-section-hint"
  }, "\u2014 pr\xE9cisez la quantit\xE9 si besoin")), renderChips("demontage", DEMONTAGE)), React.createElement("div", {
    className: "inv-foot"
  }, React.createElement("div", {
    className: "inv-summary"
  }, React.createElement("strong", null, totalItems), " meuble", totalItems > 1 ? "s" : "", " \xB7 ", React.createElement("strong", null, cartons), " carton", cartons > 1 ? "s" : "", " \xB7 ", React.createElement("strong", null, demontageCount), " \xE0 d\xE9monter", fragileCount > 0 && React.createElement(React.Fragment, null, " \xB7 ", React.createElement("strong", null, fragileCount), " type", fragileCount > 1 ? "s" : "", " fragile", fragileCount > 1 ? "s" : "")), React.createElement("div", {
    className: "inv-nav"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: onBack
  }, "\u2190 Retour"), onSubmit ? React.createElement("button", {
    type: "button",
    className: "form-submit",
    onClick: onSubmit,
    disabled: sending,
    style: sending ? {
      opacity: 0.75
    } : null
  }, sending ? "Calcul de votre prix…" : React.createElement(React.Fragment, null, "Voir mon prix", React.createElement("span", null, "\u2192"))) : React.createElement("button", {
    type: "button",
    className: "form-submit",
    onClick: onNext
  }, "Continuer", React.createElement("span", null, "\u2192")))));
}
function formatInventory(data) {
  const inv = data.inv || {};
  const parts = [];
  getAllRooms(data).forEach(r => {
    const items = r.items.concat((data.roomItems || {})[r.key] || []);
    const its = items.filter(it => (inv[r.key + "::" + it.key] || 0) > 0).map(it => inv[r.key + "::" + it.key] + "× " + it.label);
    if (its.length) parts.push(r.name + " — " + its.join(", "));
  });
  return parts.length ? parts.join(" | ") : "—";
}
function formatTags(map) {
  if (!map) return "—";
  const e = Object.entries(map).filter(x => x[1] > 0);
  if (!e.length) return "—";
  return e.map(x => x[1] > 1 ? x[0] + " ×" + x[1] : x[0]).join(", ");
}
function buildInventoryArray(data) {
  const inv = data.inv || {};
  const out = [];
  getAllRooms(data).forEach(r => {
    const items = r.items.concat((data.roomItems || {})[r.key] || []);
    items.forEach(it => {
      const q = inv[r.key + "::" + it.key] || 0;
      if (q > 0) out.push({
        piece: r.name,
        meuble: it.label,
        quantite: q
      });
    });
  });
  return out;
}
Object.assign(window, {
  InventoryStep,
  formatInventory,
  formatTags,
  buildInventoryArray
});
  try { Object.assign(window, { getAllRooms, AddInline, ChipQ, AddFurniture, InventoryStep, formatInventory, formatTags, buildInventoryArray }); } catch (e) {}
})();
