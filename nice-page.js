/* nice-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const NiceIc = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const NICE_CAS = [{
  qui: "Une personne seule",
  ou: "Dans Nice, Riquier → Cimiez",
  depart: "1er étage sans ascenseur",
  arrivee: "3e étage avec ascenseur",
  volume: "18 m³",
  distance: "1 km",
  formule: "Premium",
  prix: "1 490 €",
  note: "Le portage au départ a fait le prix, pas la distance."
}, {
  qui: "Un couple",
  ou: "Nice → Vence",
  depart: "5e étage avec ascenseur",
  arrivee: "Rez-de-chaussée",
  volume: "17 m³",
  distance: "17 km",
  formule: "Standard",
  prix: "950 €",
  note: "Ascenseur au départ, plain-pied à l'arrivée : le meilleur cas de figure."
}, {
  qui: "Une famille",
  ou: "Nice → Marseillan, Hérault",
  depart: "Rez-de-chaussée",
  arrivee: "2e étage",
  volume: "20 m³",
  distance: "380 km",
  formule: "Standard",
  prix: "1 690 €",
  note: "Sur cette distance, c'est le camion mobilisé deux jours qui pèse."
}];
const NICE_AOT = [{
  cas: "Une place de stationnement",
  detail: "Gratuite, payante, aire de livraison ou dépose-minute.",
  delai: "5 jours ouvrés",
  tel: "04 97 13 22 86 ou 04 97 13 45 63"
}, {
  cas: "Une voie de circulation ou un trottoir",
  detail: "Quand il n'y a pas de stationnement autorisé devant l'immeuble.",
  delai: "7 jours ouvrés",
  tel: "04 97 13 26 53"
}, {
  cas: "Une zone piétonne",
  detail: "Vieux-Nice, une partie du Carré d'Or. Bornes escamotables à faire abaisser le jour même.",
  delai: "7 jours ouvrés",
  tel: "04 97 13 26 43"
}];
const NICE_QUARTIERS = [{
  nom: "Vieux-Nice",
  url: "Demenagement-Vieux-Nice",
  d: "Zone piétonne à bornes escamotables. L'autorisation ne suffit pas : il faut appeler le centre de sécurité le jour même pour faire abaisser la borne. Ruelles où le camion n'entre pas, portage systématique."
}, {
  nom: "Cimiez",
  url: "Demenagement-Cimiez-Nice",
  d: "Immeubles bourgeois et villas sur les hauteurs. Ascenseurs anciens et souvent étroits, cages d'escalier en colimaçon : le démontage est la règle plutôt que l'exception."
}, {
  nom: "Carré d'Or",
  url: "Demenagement-Carre-d-Or-Nice",
  d: "Stationnement réglementé partout, circulation dense, immeubles haussmanniens. C'est le quartier où l'autorisation décide de la journée entière."
}, {
  nom: "Libération",
  url: "Demenagement-Liberation-Nice",
  d: "Le marché occupe la rue chaque matin et le tramway coupe le quartier. On démarre très tôt ou on bascule l'après-midi, selon la rue exacte."
}, {
  nom: "Le Port",
  url: "Demenagement-Port-Nice",
  d: "Quais étroits, immeubles anciens sans ascenseur, et des restrictions de circulation liées aux accès portuaires sur certaines voies."
}, {
  nom: "Riquier",
  url: "Demenagement-Riquier-Nice",
  d: "Ateliers d'artisans, caves voûtées à escalier tournant, bâti ouvrier. C'est le quartier où un déménagement pèse le plus lourd au mètre cube."
}, {
  nom: "Mont Boron",
  url: "Demenagement-Mont-Boron-Nice",
  d: "Routes en lacets, villas en surplomb, monte-meuble presque systématique. Le gabarit du camion se décide sur le dernier virage, pas sur la route principale."
}];
const NICE_FACTEURS = [{
  t: "L'étage et l'ascenseur",
  d: "Le premier poste, avant le volume. Un troisième étage sans ascenseur ajoute souvent une demi-journée d'équipe. Un ascenseur trop petit pour un canapé revient au même : tout repasse par la cage d'escalier."
}, {
  t: "La distance de portage",
  d: "Entre le camion et la porte. Dans le Vieux-Nice elle se compte en dizaines de mètres et en marches ; à Fabron ou Saint-Isidore, le camion se gare devant."
}, {
  t: "Le volume réel",
  d: "Le contenu du logement, pas sa surface. Une cave et un garage pleins ajoutent facilement dix mètres cubes à un trois-pièces."
}, {
  t: "La formule choisie",
  d: "Standard, Premium ou Luxe. C'est le seul facteur que vous décidez entièrement, et l'écart entre les deux premières est d'environ 30 %."
}, {
  t: "La période",
  d: "Fins de mois, samedis et été partent en premier. Une date en milieu de mois et en semaine se réserve plus facilement, et l'équipe est moins contrainte."
}];
const NICE_FAQ = (typeof CITIES !== "undefined" && CITIES.nice && CITIES.nice.faq || []).map(f => ({
  q: f.q,
  r: [f.a]
}));
function NiceHero() {
  return React.createElement("section", {
    className: "page-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), " ", React.createElement("span", null, "\u203A"), " ", React.createElement("a", {
    href: "Zones"
  }, "Zones desservies"), " ", React.createElement("span", null, "\u203A"), " ", React.createElement("span", null, "Nice")), React.createElement("h1", null, "D\xE9m\xE9nager ", React.createElement("em", {
    className: "dim-em"
  }, "quartier par quartier"), " \xE0 Nice"), React.createElement("p", {
    className: "lede"
  }, "Nice n'est pas une ville, c'est dix quartiers qui n'ont rien \xE0 voir. Le Vieux-Nice ne se d\xE9m\xE9nage pas comme Fabron, et le Mont Boron encore moins. Cette page dit ce que chacun impose, ce que \xE7a co\xFBte r\xE9ellement, et quelles d\xE9marches sont \xE0 faire avant le jour J."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 18
    }
  }, React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77")), React.createElement("div", {
    className: "devis-hero-form",
    style: {
      marginTop: 22
    }
  }, React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function NiceSecHead({
  num,
  titre,
  em
}) {
  return React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", num)), React.createElement("h2", {
    className: "dim-em"
  }, titre, React.createElement("br", null), React.createElement("em", null, em)));
}
function NicePrix() {
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
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "01 / Les prix",
    titre: "Combien co\xFBte un d\xE9m\xE9nagement",
    em: "dans Nice."
  }), React.createElement("p", {
    className: "lede"
  }, "Ces fourchettes viennent de notre estimateur, cal\xE9 sur les devis que nous avons r\xE9ellement \xE9mis. Elles supposent un acc\xE8s neutre : rez-de-chauss\xE9e, camion devant la porte. L'\xE9tage et le portage se chiffrent ensuite, et c'est l\xE0 que se joue l'essentiel de l'\xE9cart."), React.createElement("div", {
    className: "tarif-tw",
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
    className: "lede",
    style: {
      marginTop: 20
    }
  }, "La formule Luxe, qui comprend l'emballage de vos cartons et la mise en place \xE0 l'arriv\xE9e, se chiffre apr\xE8s une visite : le contenu des cartons de quelqu'un ne se devine pas de l'ext\xE9rieur. ", React.createElement("a", {
    href: "Tarifs",
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, "Voir le d\xE9tail des trois formules \u2192")), React.createElement("h3", {
    className: "tarif-h3",
    style: {
      marginTop: 40
    }
  }, "Ce qui fait varier le prix, dans l'ordre"), React.createElement("div", {
    className: "values-grid reveal-stagger"
  }, NICE_FACTEURS.map((x, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, String(i + 1).padStart(2, "0")), React.createElement("div", {
    className: "value-body"
  }, React.createElement("div", {
    className: "value-title"
  }, x.t), React.createElement("p", null, x.d)))))));
}
function NiceCas() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "02 / Trois cas r\xE9els",
    titre: "Ce que nos clients",
    em: "ont r\xE9ellement pay\xE9."
  }), React.createElement("p", {
    className: "lede"
  }, "Trois devis que nous avons \xE9mis, anonymis\xE9s. Volume, \xE9tages, distance et montant sont ceux du dossier : rien n'a \xE9t\xE9 arrondi pour faire joli."), React.createElement("div", {
    className: "tarif-tw",
    style: {
      marginTop: 26
    }
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), NICE_CAS.map((c, i) => React.createElement("th", {
    key: i,
    style: {
      textAlign: "left"
    }
  }, "Cas ", i + 1)))), React.createElement("tbody", null, [["Qui", "qui"], ["Où", "ou"], ["Départ", "depart"], ["Arrivée", "arrivee"], ["Volume", "volume"], ["Distance", "distance"], ["Formule", "formule"]].map(([lib, cle]) => React.createElement("tr", {
    key: cle
  }, React.createElement("td", {
    className: "tarif-sub",
    style: {
      whiteSpace: "nowrap"
    }
  }, lib), NICE_CAS.map((c, i) => React.createElement("td", {
    key: i
  }, c[cle])))), React.createElement("tr", null, React.createElement("td", {
    className: "tarif-sub"
  }, React.createElement("strong", null, "Prix")), NICE_CAS.map((c, i) => React.createElement("td", {
    key: i,
    className: "tarif-prix",
    style: {
      fontSize: 17
    }
  }, c.prix))), React.createElement("tr", null, React.createElement("td", {
    className: "tarif-sub"
  }, "Ce qui a fait le prix"), NICE_CAS.map((c, i) => React.createElement("td", {
    key: i,
    style: {
      color: "var(--ink-2)",
      fontSize: 13.5
    }
  }, c.note)))))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20
    }
  }, "Le premier cas est le plus instructif : un kilom\xE8tre de trajet, et pourtant le devis le plus \xE9lev\xE9 des trois en local. Un premier \xE9tage sans ascenseur au d\xE9part, un troisi\xE8me \xE0 l'arriv\xE9e, et la journ\xE9e bascule. ", React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "\xC0 Nice, c'est l'escalier qui co\xFBte, pas la route."))));
}
function NiceStationnement() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "03 / Le stationnement",
    titre: "L'autorisation, la d\xE9marche",
    em: "et les d\xE9lais r\xE9els."
  }), React.createElement("p", {
    className: "lede"
  }, "C'est le vrai casse-t\xEAte ni\xE7ois, et la premi\xE8re cause de journ\xE9e perdue. D\xE8s que le camion occupe le domaine public \u2014 c'est-\xE0-dire presque partout dans Nice \u2014 il faut une autorisation. Trois r\xE9gimes existent, avec des d\xE9lais et des services diff\xE9rents."), React.createElement("div", {
    className: "tarif-tw",
    style: {
      marginTop: 26
    }
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Ce que vous occupez"), React.createElement("th", null, "D\xE9lai minimum"), React.createElement("th", null, "Service \xE0 contacter"))), React.createElement("tbody", null, NICE_AOT.map((a, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", null, React.createElement("strong", null, a.cas), React.createElement("div", {
    className: "tarif-sub"
  }, a.detail)), React.createElement("td", {
    className: "tarif-prix",
    style: {
      whiteSpace: "nowrap"
    }
  }, a.delai), React.createElement("td", {
    className: "tarif-sub",
    style: {
      whiteSpace: "nowrap"
    }
  }, a.tel)))))), React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 18
    }
  }, React.createElement("div", null, React.createElement("h3", {
    className: "tarif-h3"
  }, "Ce que la Ville ne fournit pas"), React.createElement("p", {
    className: "tarif-intro"
  }, "La signalisation r\xE9glementaire \u2014 panneaux d'interdiction de stationner pos\xE9s la veille \u2014 est \xE0 la charge du demandeur. Elle se loue aupr\xE8s d'un professionnel. Sans elle, l'autorisation ne vaut rien : les voitures seront l\xE0 le matin.")), React.createElement("div", null, React.createElement("h3", {
    className: "tarif-h3"
  }, "Le pi\xE8ge de la zone pi\xE9tonne"), React.createElement("p", {
    className: "tarif-intro"
  }, "Dans le Vieux-Nice et une partie du Carr\xE9 d'Or, l'acc\xE8s est command\xE9 par des bornes escamotables. Avoir l'autorisation ne suffit pas : il faut appeler le centre de s\xE9curit\xE9 le jour m\xEAme pour faire abaisser la borne. Un camion qui arrive sans cette seconde d\xE9marche repart.")), React.createElement("div", null, React.createElement("h3", {
    className: "tarif-h3"
  }, "Qui s'en occupe"), React.createElement("p", {
    className: "tarif-intro"
  }, "Nous, syst\xE9matiquement, d\xE8s que la date est bloqu\xE9e. C'est inclus dans les trois formules et cela ne se facture pas \xE0 part. Vous n'avez ni dossier \xE0 monter ni service \xE0 appeler.")))));
}
function NiceQuartiers() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "04 / Les quartiers",
    titre: "Dix quartiers,",
    em: "dix fa\xE7ons de d\xE9m\xE9nager."
  }), React.createElement("p", {
    className: "lede"
  }, "Chacun impose sa contrainte, et c'est elle qui d\xE9cide de la m\xE9thode et du prix. Sept d'entre eux ont leur page d\xE9taill\xE9e."), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 28
    }
  }, NICE_QUARTIERS.map(q => React.createElement("div", {
    className: "ap-value",
    key: q.nom
  }, React.createElement("span", {
    className: "ap-value-ic",
    "aria-hidden": "true"
  }, React.createElement(NiceIc, null, React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }))), React.createElement("h3", {
    className: "ap-value-t"
  }, React.createElement("a", {
    href: q.url,
    style: {
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, q.nom, " \u2192")), React.createElement("p", {
    className: "ap-value-d"
  }, q.d)))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24
    }
  }, "Nous intervenons aussi \xE0 Nice Nord, Fabron, Magnan, L'Ariane, Gambetta, Saint-Roch, Gairaut, Las Planas et Saint-Isidore. Ces quartiers-l\xE0 posent moins de probl\xE8mes d'acc\xE8s : le camion se gare devant l'immeuble et la journ\xE9e s'organise autour du volume plut\xF4t que du portage.")));
}
function NiceQuand() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "10 / Le calendrier",
    titre: "Quand d\xE9m\xE9nager,",
    em: "et quand s'y prendre."
  }), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 24
    }
  }, React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Les dates qui partent en premier"), React.createElement("p", {
    className: "ap-value-d"
  }, "Les fins de mois, les samedis, et toute la p\xE9riode de juin \xE0 septembre. Un samedi de fin ao\xFBt est la date la plus demand\xE9e de l'ann\xE9e sur la C\xF4te d'Azur : elle se r\xE9serve six semaines \xE0 l'avance, parfois plus.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Les dates les plus faciles"), React.createElement("p", {
    className: "ap-value-d"
  }, "Milieu de mois, en semaine, hors vacances scolaires. L'\xE9quipe est moins contrainte, le stationnement se trouve plus facilement, et la journ\xE9e d\xE9borde moins.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Combien de temps \xE0 l'avance"), React.createElement("p", {
    className: "ap-value-d"
  }, "Deux \xE0 trois semaines en p\xE9riode normale, quatre \xE0 six pour une fin de mois d'\xE9t\xE9. L'autorisation de stationnement, elle, ne se demande qu'\xE0 cinq ou sept jours ouvr\xE9s : elle n'est jamais le facteur limitant.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Ce qui bloque vraiment la date"), React.createElement("p", {
    className: "ap-value-d"
  }, "L'acompte. Tant qu'il n'est pas vers\xE9, le cr\xE9neau reste ouvert \xE0 quelqu'un d'autre. C'est ce qui nous permet de tenir nos horaires d'arriv\xE9e plut\xF4t que de promettre une demi-journ\xE9e d'attente.")))));
}
function NiceEncombrants() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "05 / Ce dont vous ne voulez plus",
    titre: "Encombrants, d\xE9chetterie",
    em: "et d\xE9barras."
  }), React.createElement("p", {
    className: "lede"
  }, "Un d\xE9m\xE9nagement, c'est d'abord un tri. Voil\xE0 les trois fa\xE7ons de se s\xE9parer de ce qui ne suit pas, de la plus \xE9conomique \xE0 la plus rapide."), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 26
    }
  }, React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le ramassage des encombrants"), React.createElement("p", {
    className: "ap-value-d"
  }, "La M\xE9tropole Nice C\xF4te d'Azur l'assure sur rendez-vous, gratuitement, pour les particuliers. On vous fixe un cr\xE9neau et vous sortez les meubles la veille au soir. Comptez plusieurs jours de d\xE9lai en p\xE9riode charg\xE9e : \xE0 prendre bien avant la date du d\xE9m\xE9nagement, pas la veille.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "La d\xE9chetterie"), React.createElement("p", {
    className: "ap-value-d"
  }, "Plusieurs d\xE9chetteries m\xE9tropolitaines accueillent les particuliers sur pr\xE9sentation d'un justificatif de domicile. C'est la solution imm\xE9diate quand on a un v\xE9hicule et que le volume reste raisonnable. Les gravats, la peinture et l'\xE9lectrom\xE9nager y ont chacun leur fili\xE8re.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le d\xE9barras complet"), React.createElement("p", {
    className: "ap-value-d"
  }, "Nous vidons le logement enti\xE8rement, du mobilier aux cartons oubli\xE9s dans la cave, et nous remettons les justificatifs de d\xE9p\xF4t. C'est chiffr\xE9 \xE0 part et souvent combin\xE9 au d\xE9m\xE9nagement le m\xEAme jour, ce qui \xE9vite de rouvrir le logement une seconde fois. ", React.createElement("a", {
    href: "Debarras-succession",
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, "Voir la page d\xE9barras \u2192")))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "Le conseil qui fait gagner le plus :"), " triez avant le devis, pas apr\xE8s. Chaque m\xE8tre cube qu'on ne charge pas est un m\xE8tre cube qu'on ne facture pas, et un vieux canap\xE9 compte autant qu'un canap\xE9 neuf dans le volume.")));
}
function NiceCartons() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "06 / Le mat\xE9riel",
    titre: "Les cartons,",
    em: "et le reste."
  }), React.createElement("p", {
    className: "lede"
  }, "C'est le poste o\xF9 l'on croit \xE9conomiser et o\xF9 l'on perd le plus. Un carton de supermarch\xE9 a d\xE9j\xE0 servi, il a voyag\xE9 plein et il c\xE8de au portage \u2014 presque toujours celui qui contenait la vaisselle."), React.createElement("div", {
    className: "tarif-tw",
    style: {
      marginTop: 26
    }
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Ce qu'il vous faut"), React.createElement("th", null, "Pour quoi"), React.createElement("th", null, "Combien"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Carton standard"), " ", React.createElement("span", {
    className: "tarif-sub"
  }, "55 \xD7 35 \xD7 30 cm")), React.createElement("td", null, "Vaisselle, petits objets, contenu des placards"), React.createElement("td", {
    className: "tarif-sub"
  }, "15 \xE0 20 pour un studio, 40 \xE0 60 pour un trois-pi\xE8ces")), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Carton livres"), " ", React.createElement("span", {
    className: "tarif-sub"
  }, "plus petit, renforc\xE9")), React.createElement("td", null, "Livres, dossiers, bouteilles. Un grand carton rempli de livres ne se porte pas"), React.createElement("td", {
    className: "tarif-sub"
  }, "5 \xE0 15 selon la biblioth\xE8que")), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Penderie"), " ", React.createElement("span", {
    className: "tarif-sub"
  }, "avec barre")), React.createElement("td", null, "V\xEAtements sur cintres, transport\xE9s sans pli"), React.createElement("td", {
    className: "tarif-sub"
  }, "1 \xE0 3")), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Papier bulle et papier de soie")), React.createElement("td", null, "Verres, assiettes, cadres, objets fragiles"), React.createElement("td", {
    className: "tarif-sub"
  }, "un rouleau pour deux cartons de vaisselle")), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Housses"), " ", React.createElement("span", {
    className: "tarif-sub"
  }, "matelas, canap\xE9")), React.createElement("td", null, "Ce qui ne rentre dans aucun carton et se salit au portage"), React.createElement("td", {
    className: "tarif-sub"
  }, "une par \xE9l\xE9ment"))))), React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 18
    }
  }, React.createElement("div", null, React.createElement("h3", {
    className: "tarif-h3"
  }, "O\xF9 les trouver"), React.createElement("p", {
    className: "tarif-intro"
  }, "Nous les livrons avant le d\xE9m\xE9nagement, inclus dans les formules Premium et Luxe, et vendus \xE0 prix co\xFBtant en Standard. Les commerces de quartier en donnent souvent, mais v\xE9rifiez qu'ils tiennent debout une fois remplis.")), React.createElement("div", null, React.createElement("h3", {
    className: "tarif-h3"
  }, "Comment les remplir"), React.createElement("p", {
    className: "tarif-intro"
  }, "Le lourd en bas, le l\xE9ger en haut, et jamais un carton qu'on ne peut pas soulever seul. \xC9crivez la pi\xE8ce de destination sur le C\xD4T\xC9, pas sur le dessus : une fois empil\xE9s, seuls les c\xF4t\xE9s se lisent.")), React.createElement("div", null, React.createElement("h3", {
    className: "tarif-h3"
  }, "Ce qu'on r\xE9cup\xE8re"), React.createElement("p", {
    className: "tarif-intro"
  }, "En formule Luxe, nous reprenons les cartons vides apr\xE8s le d\xE9ballage. Sinon, ils se donnent facilement \u2014 un d\xE9m\xE9nagement en attire toujours un autre dans l'immeuble.")))));
}
function NiceAides() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "07 / Les aides",
    titre: "Ce que vous pouvez",
    em: "faire financer."
  }), React.createElement("p", {
    className: "lede"
  }, "Peu de gens les demandent, souvent parce qu'ils ignorent y avoir droit. Aucune n'est automatique : toutes se demandent, et la plupart avant le d\xE9m\xE9nagement."), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 26
    }
  }, React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "La prime de d\xE9m\xE9nagement de la CAF"), React.createElement("p", {
    className: "ap-value-d"
  }, "Pour les familles nombreuses qui d\xE9m\xE9nagent \xE0 l'occasion d'une naissance ou de l'arriv\xE9e d'un troisi\xE8me enfant, sous conditions de droit \xE0 une aide au logement. Elle rembourse les frais r\xE9els dans une limite fix\xE9e. La demande se fait apr\xE8s le d\xE9m\xE9nagement, facture \xE0 l'appui, et dans un d\xE9lai strict \u2014 d'o\xF9 l'int\xE9r\xEAt de garder le devis et la facture.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Action Logement"), React.createElement("p", {
    className: "ap-value-d"
  }, "Pour les salari\xE9s du secteur priv\xE9 qui d\xE9m\xE9nagent pour raison professionnelle : mutation, embauche, rapprochement du lieu de travail. Plusieurs dispositifs coexistent selon la situation. La demande se fait en amont, avant la signature du bail ou l'acte de vente.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le Fonds de solidarit\xE9 logement"), React.createElement("p", {
    className: "ap-value-d"
  }, "G\xE9r\xE9 par le D\xE9partement des Alpes-Maritimes, il peut prendre en charge une partie des frais d'installation pour les m\xE9nages en difficult\xE9. L'instruction se fait par un travailleur social, ce qui suppose de s'y prendre plusieurs semaines \xE0 l'avance.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "La d\xE9duction fiscale"), React.createElement("p", {
    className: "ap-value-d"
  }, "Un d\xE9m\xE9nagement li\xE9 \xE0 un changement d'emploi peut ouvrir droit \xE0 une d\xE9duction au titre des frais r\xE9els. Elle suppose de conserver la facture et de pouvoir justifier le motif professionnel."))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, "Nous ne montons pas ces dossiers \xE0 votre place, mais nous fournissons toujours un devis d\xE9taill\xE9 et une facture nominative \u2014 c'est la pi\xE8ce que tous ces organismes r\xE9clament, et celle qui manque le plus souvent. Renseignez-vous aupr\xE8s de votre CAF, de votre employeur ou du D\xE9partement : les conditions changent r\xE9guli\xE8rement.")));
}
function NiceLimitrophes() {
  const V = ["saint-laurent-du-var", "cagnes-sur-mer", "villefranche-sur-mer", "beaulieu-sur-mer", "saint-jean-cap-ferrat"];
  if (typeof CITIES === "undefined") return null;
  const items = V.map(s => CITIES[s]).filter(Boolean);
  if (!items.length) return null;
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "08 / Autour de Nice",
    titre: "Les communes",
    em: "limitrophes."
  }), React.createElement("p", {
    className: "lede"
  }, "Un d\xE9m\xE9nagement ni\xE7ois d\xE9borde souvent sur la commune d'\xE0 c\xF4t\xE9. Sur ces cinq-l\xE0, nous sommes sur place en moins de vingt minutes depuis notre base."), React.createElement("div", {
    className: "seo-cities reveal",
    style: {
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      marginTop: 24
    }
  }, items.map((n, i) => React.createElement("a", {
    key: i,
    href: n.file,
    style: {
      fontFamily: "var(--serif)",
      fontSize: 21,
      fontWeight: 600,
      color: "var(--ink)",
      padding: "18px 0",
      borderBottom: "1px solid var(--rule)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: "none"
    }
  }, React.createElement("span", null, "D\xE9m\xE9nagement ", n.name), React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u2192"))))));
}
function NiceDepuisNice() {
  const T = [{
    v: "Paris",
    url: "Demenagement-Nice-Paris",
    d: "930 km, deux jours de camion"
  }, {
    v: "Lyon",
    url: "Demenagement-Nice-Lyon",
    d: "470 km, souvent en une journée"
  }, {
    v: "Marseille",
    url: "Demenagement-Nice-Marseille",
    d: "200 km, aller-retour dans la journée"
  }, {
    v: "Toulouse",
    url: "Demenagement-Nice-Toulouse",
    d: "560 km"
  }, {
    v: "Bordeaux",
    url: "Demenagement-Nice-Bordeaux",
    d: "790 km"
  }, {
    v: "Monaco",
    url: "Demenagement-Monaco",
    d: "autorisation de circulation à prévoir"
  }, {
    v: "Cannes",
    url: "Demenagement-Cannes",
    d: "35 km"
  }, {
    v: "Antibes",
    url: "Demenagement-Antibes",
    d: "25 km"
  }];
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "09 / Au d\xE9part de Nice",
    titre: "Nos trajets",
    em: "les plus fr\xE9quents."
  }), React.createElement("p", {
    className: "lede"
  }, "Le local repr\xE9sente la moiti\xE9 de notre activit\xE9, la longue distance l'autre moiti\xE9. Sur ces trajets, ce n'est plus l'escalier qui fait le prix mais le nombre de jours pendant lesquels le camion est mobilis\xE9."), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 26
    }
  }, T.map(t => React.createElement("div", {
    className: "ap-value",
    key: t.v
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, React.createElement("a", {
    href: t.url,
    style: {
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, "Nice \u2192 ", t.v, " \u2192")), React.createElement("p", {
    className: "ap-value-d"
  }, t.d))))));
}
function NiceFaqItem({
  item,
  open,
  onToggle
}) {
  return React.createElement("div", {
    className: "faq-item" + (open ? " open" : "")
  }, React.createElement("button", {
    className: "faq-q",
    onClick: onToggle,
    "aria-expanded": open
  }, React.createElement("span", null, item.q), React.createElement("span", {
    className: "ico",
    "aria-hidden": "true"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, item.r.map((p, i) => React.createElement("p", {
    key: i
  }, p))));
}
function NiceFAQ() {
  const [ouvert, setOuvert] = React.useState(-1);
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(NiceSecHead, {
    num: "11 / Questions fr\xE9quentes",
    titre: "Ce qu'on nous demande",
    em: "sur Nice."
  }), React.createElement("div", {
    className: "faq-list reveal"
  }, NICE_FAQ.map((f, i) => React.createElement(NiceFaqItem, {
    key: i,
    item: f,
    open: ouvert === i,
    onToggle: () => setOuvert(ouvert === i ? -1 : i)
  })))));
}
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", {
    id: "contenu"
  }, React.createElement(NiceHero, null), React.createElement(NicePrix, null), React.createElement(NiceCas, null), React.createElement(NiceStationnement, null), React.createElement(NiceQuartiers, null), React.createElement(NiceEncombrants, null), React.createElement(NiceCartons, null), React.createElement(NiceAides, null), React.createElement(PreuveVille, {
    ville: "Nice"
  }), React.createElement(NiceLimitrophes, null), React.createElement(NiceDepuisNice, null), React.createElement(NiceQuand, null), React.createElement(NiceFAQ, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { NiceHero, NiceSecHead, NicePrix, NiceCas, NiceStationnement, NiceQuartiers, NiceQuand, NiceEncombrants, NiceCartons, NiceAides, NiceLimitrophes, NiceDepuisNice, NiceFaqItem, NiceFAQ, App }); } catch (e) {}
})();
