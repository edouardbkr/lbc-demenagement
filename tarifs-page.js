/* tarifs-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const TARIF_LOGEMENTS = [{
  key: "studio",
  nom: "Studio",
  sub: "moins de 30 m²"
}, {
  key: "t2",
  nom: "2 pièces",
  sub: "30 à 50 m²"
}, {
  key: "t3",
  nom: "3 pièces",
  sub: "50 à 80 m²"
}, {
  key: "t4",
  nom: "4 pièces",
  sub: "80 à 100 m²"
}, {
  key: "maison",
  nom: "Maison",
  sub: "plus de 90 m²"
}];
const TARIF_ZONES = [{
  km: 15,
  titre: "Déménagement local · Alpes-Maritimes",
  intro: "Nice, la Côte d'Azur et l'arrière-pays proche. Le trajet ne pèse presque rien : ce sont le volume et l'accès qui font le prix.",
  volumes: true
}, {
  km: 80,
  titre: "Déménagement régional · PACA",
  intro: "Marseille, Aix, Toulon, le Var. Le camion part et revient dans la journée, la distance commence à compter."
}, {
  km: 600,
  titre: "Longue distance · toute la France",
  intro: "Base de calcul : environ 600 km, soit un Nice–Lyon ou un Nice–Toulouse. Au-delà, le prix suit la distance, parce qu'elle mobilise le camion plusieurs jours."
}];
const TARIF_FACTEURS = [{
  t: "L'étage sans ascenseur",
  d: "Chaque niveau ajoute du temps de portage. Un troisième étage sans ascenseur, c'est souvent une demi-journée d'équipe en plus.",
  p: "+++"
}, {
  t: "La distance de portage",
  d: "Quand le camion ne se gare pas devant la porte : vieille ville, village perché, allée privée. Elle se compte en mètres, parfois en marches.",
  p: "+++"
}, {
  t: "Le volume réel",
  d: "Le contenu de votre logement, pas sa surface. Une cave et un garage pleins ajoutent facilement 10 m³.",
  p: "++"
}, {
  t: "Le monte-meuble",
  d: "Nécessaire quand la cage d'escalier ne laisse pas passer les meubles. Souvent moins cher qu'une équipe supplémentaire sur la journée.",
  p: "++"
}, {
  t: "Le démontage",
  d: "Cuisine équipée, armoire, lit à lattes, dressing sur mesure. Inclus dès la formule Premium.",
  p: "++"
}, {
  t: "Les objets lourds ou fragiles",
  d: "Piano, coffre-fort, tableaux, machines d'atelier : matériel spécifique et parfois équipe renforcée.",
  p: "+"
}, {
  t: "La distance",
  d: "Sur du local, elle ne pèse presque rien. Sur de la longue distance, elle devient le premier poste.",
  p: "+ à +++"
}];
const TARIF_FAQ = [{
  q: "Pourquoi une fourchette et pas un prix fixe ?",
  r: ["Parce que deux trois-pièces du même volume ne coûtent pas la même chose. L'un est au rez-de-chaussée avec le camion devant la porte, l'autre au quatrième sans ascenseur dans une rue où l'on ne se gare pas. Entre les deux, il y a une demi-journée d'équipe, un monte-meuble et une autorisation de stationnement.", "Annoncer un prix unique reviendrait soit à surfacturer le premier, soit à perdre de l'argent sur le second — et donc, dans les faits, à chercher un motif pour le rattraper le jour du déménagement. C'est exactement ce que nous refusons de faire.", "Un déménageur qui annonce un prix ferme sans avoir vu le logement n'annonce pas un prix : il annonce un point de départ."]
}, {
  q: "Que signifie « à partir de 350 € » chez vos concurrents ?",
  r: ["Que le devis réel sera plus élevé. Ce montant correspond en général à quelques meubles transportés sur cinq kilomètres, ce qui n'est pas un déménagement mais une course.", "Nous ne l'affichons pas, et c'est un choix commercial coûteux : un prix d'appel bas fait cliquer. Mais c'est ce qui a rendu ce marché méfiant, et chaque client déçu par un supplément de dernière minute rend le suivant plus difficile à convaincre."]
}, {
  q: "Comment est calculée l'estimation en ligne ?",
  r: ["Sur trois données : le type de logement, la distance et la formule. Le simulateur en déduit un volume moyen, applique un tarif au mètre cube et ajoute le coût de trajet.", "C'est une estimation, pas un devis : elle suppose un accès neutre, c'est-à-dire un rez-de-chaussée avec le camion devant la porte. Dès que vous détaillez votre inventaire dans le formulaire de devis, le volume devient le vôtre et la fourchette se resserre.", "Les montants de cette page sont issus du même moteur que le simulateur. Ils ne peuvent donc pas se contredire."]
}, {
  q: "Comment obtenir un prix ferme pour mon cas ?",
  r: ["Par une visite gratuite, à domicile ou en visio, sous 48 heures. On regarde chaque pièce, la cave, le garage, l'étage, l'ascenseur et l'endroit où le camion pourra se garer. Le devis part sous 24 heures et il est définitif.", "Pour un déménagement urgent, l'estimation se fait par téléphone et photos. Le prix est ferme quand même."]
}, {
  q: "Le devis est-il payant ? Engage-t-il à quelque chose ?",
  r: ["Le devis est gratuit et sans engagement. Aucune carte bancaire n'est demandée, aucun numéro surtaxé.", "Si vous ne donnez pas suite, nous revenons vers vous, mais jamais plus de trois fois, et nous nous arrêtons au premier refus. C'est écrit ici pour que vous puissiez nous le rappeler."]
}, {
  q: "Comment se passe le paiement ?",
  r: ["Un acompte à la réservation, qui bloque la date, et le solde à la fin du déménagement, une fois tout déchargé et vérifié.", "Tant que l'acompte n'est pas versé, la date n'est pas réservée. C'est ce qui nous permet de tenir nos créneaux : un camion bloqué pour quelqu'un qui ne viendra pas, c'est une journée perdue pour tout le monde."]
}, {
  q: "L'assurance est-elle vraiment incluse ?",
  r: ["Oui, dans les trois formules, à hauteur de 8 000 € par objet, et la franchise est à notre charge. Ce n'est pas une option facturée en supplément.", "Pour un mobilier de grande valeur — œuvres, pièces de collection, instruments — une déclaration de valeur est établie avant le chargement et une couverture spécifique peut être mise en place. Toujours avant, jamais après un incident."]
}, {
  q: "Facturez-vous plus cher le samedi, ou en été ?",
  r: ["Le samedi, non. Le dimanche et les jours fériés, oui, et cela vous est dit avant de réserver.", "La haute saison, de juin à septembre, ne change pas nos tarifs, mais elle change les disponibilités. Une date de fin août se réserve plusieurs semaines à l'avance."]
}, {
  q: "Un monte-meuble, ça coûte combien ?",
  r: ["Il est intégré au devis quand il est nécessaire, jamais facturé en supplément le jour même. Selon la hauteur et la durée, il représente en général entre 200 et 450 € sur le total.", "Beaucoup de clients le refusent en pensant économiser, puis paient davantage en heures de portage. Nous disons franchement lequel des deux revient le moins cher sur votre chantier."]
}, {
  q: "Est-ce moins cher si je fais mes cartons moi-même ?",
  r: ["Oui, c'est exactement la différence entre Premium et Luxe. Sur un trois-pièces, faire ses cartons soi-même représente en général une journée de travail pour vous, et plusieurs centaines d'euros d'écart sur le devis.", "En revanche, l'emballage des objets fragiles reste de notre côté dès la formule Premium : c'est là que la casse arrive, et c'est nous qui l'assurons."]
}, {
  q: "Vos prix sont-ils négociables ?",
  r: ["Le prix reflète le temps d'équipe, le camion et le matériel nécessaires à votre chantier. Il n'y a pas de marge cachée à récupérer dans une négociation.", "En revanche, la formule se discute : passer de Luxe à Premium, ou décaler la date sur un jour moins demandé, fait baisser le devis pour de vraies raisons. Nous préférons ajuster la prestation plutôt que de rogner sur ce qui garantit que rien ne casse."]
}];
function tarifFourchette(surface, formule, km) {
  const P = window.LBC_PRICING;
  if (!P || !P.estimer) return null;
  const e = P.estimer({
    surface: surface,
    formule: formule,
    km: km
  });
  if (!e) return null;
  const f = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return f(e.bas) + " – " + f(e.haut) + " €";
}
function TarifSecHead({
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
function TarifHero() {
  return React.createElement("section", {
    className: "page-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), " ", React.createElement("span", null, "\u203A"), " ", React.createElement("span", null, "Tarifs")), React.createElement("h1", null, "Combien co\xFBte un d\xE9m\xE9nagement ", React.createElement("em", {
    className: "dim-em"
  }, "\xE0 Nice ?")), React.createElement("p", {
    className: "lede"
  }, "Des fourchettes r\xE9elles, issues du m\xEAme calcul que notre devis. Pas de \xAB \xE0 partir de \xBB qui ne veut rien dire : vous voyez ce que paient nos clients, et ce qui fait varier le montant."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 18
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Obtenir mon prix ferme", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"))));
}
function TarifFormules() {
  const t3 = f => tarifFourchette("t3", f, 15);
  const F = [{
    n: "01",
    nom: "Standard",
    prix: t3("standard"),
    d: "Véhicule adapté et équipe dédiée, chargement et déchargement, assurance incluse à 8 000 € par objet. Vous emballez et démontez, nous portons et transportons."
  }, {
    n: "02",
    nom: "Premium",
    prix: t3("premium"),
    d: "Tout ce que comprend Standard, plus l'emballage des objets fragiles, la protection intégrale du mobilier et le démontage-remontage des meubles. Vous faites vos cartons, nous nous occupons du reste. C'est la formule la plus choisie."
  }, {
    n: "03",
    nom: "Luxe",
    prix: "après visite",
    d: "Tout ce que comprend Premium, plus l'emballage de vos cartons, le déballage et la mise en place à l'arrivée, et la protection des œuvres d'art et de la vaisselle. Vous ouvrez la porte, et c'est fait."
  }];
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(TarifSecHead, {
    num: "01 / Les trois formules",
    titre: "Ce que vous d\xE9l\xE9guez,",
    em: "et ce que \xE7a change au prix."
  }), React.createElement("p", {
    className: "lede"
  }, "C'est le premier facteur, avant le volume et avant la distance. Chaque formule reprend la pr\xE9c\xE9dente et y ajoute du travail en moins pour vous. Les montants ci-dessous sont ceux d'un trois-pi\xE8ces en local, pour comparer \xE0 volume \xE9gal."), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 28
    }
  }, F.map(f => React.createElement("div", {
    className: "ap-value",
    key: f.n
  }, React.createElement("span", {
    className: "ap-value-ic",
    "aria-hidden": "true"
  }, f.n), React.createElement("div", {
    className: "ap-value-t"
  }, f.nom, " ", React.createElement("span", {
    style: {
      fontWeight: 400,
      color: "var(--muted)"
    }
  }, "\xB7 ", f.prix || "sur devis")), React.createElement("p", {
    className: "ap-value-d"
  }, f.d)))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 26
    }
  }, React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "Pourquoi Luxe n'a pas de fourchette\xA0:"), " emballer ", React.createElement("em", null, "vos"), " cartons ne se devine pas de l'ext\xE9rieur. Deux trois-pi\xE8ces du m\xEAme volume peuvent demander une journ\xE9e d'\xE9cart selon la vaisselle, les livres et les bibelots. Annoncer une fourchette large reviendrait \xE0 annoncer un prix qu'on r\xE9visera \u2014 exactement ce que cette page cherche \xE0 \xE9viter. Elle se chiffre apr\xE8s une visite, \xE0 domicile ou en visio de dix minutes, et le prix est ferme ensuite.")));
}
function TarifTableaux() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(TarifSecHead, {
    num: "02 / Les prix",
    titre: "Par logement",
    em: "et par distance."
  }), React.createElement("p", {
    className: "lede"
  }, "Les deux formules chiffrables sont donn\xE9es c\xF4te \xE0 c\xF4te. Ces montants supposent un acc\xE8s neutre : rez-de-chauss\xE9e, camion devant la porte."), TARIF_ZONES.map(z => React.createElement("div", {
    key: z.km,
    style: {
      marginTop: 36
    }
  }, React.createElement("h3", {
    className: "tarif-h3"
  }, z.titre), React.createElement("p", {
    className: "tarif-intro"
  }, z.intro), React.createElement("div", {
    className: "tarif-tw"
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Logement"), z.volumes && React.createElement("th", null, "Volume estim\xE9"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Standard"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Premium"))), React.createElement("tbody", null, TARIF_LOGEMENTS.map(l => {
    const P = window.LBC_PRICING;
    const plage = P && P.CFG && P.CFG.volumeSurface[l.key];
    const vol = plage ? Math.round(plage.typique * P.CFG.margeVolume) : null;
    return React.createElement("tr", {
      key: l.key
    }, React.createElement("td", null, React.createElement("strong", null, l.nom), " ", React.createElement("span", {
      className: "tarif-sub"
    }, l.sub)), z.volumes && React.createElement("td", {
      className: "tarif-sub"
    }, vol ? vol + " m³" : "—"), React.createElement("td", {
      style: {
        textAlign: "right"
      },
      className: "tarif-prix"
    }, tarifFourchette(l.key, "standard", z.km) || "sur devis"), React.createElement("td", {
      style: {
        textAlign: "right"
      },
      className: "tarif-prix"
    }, tarifFourchette(l.key, "premium", z.km) || "sur devis"));
  }))))))));
}
function TarifFacteurs() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(TarifSecHead, {
    num: "03 / Ce qui fait varier le prix",
    titre: "\xC0 logement identique,",
    em: "deux devis peuvent diff\xE9rer de 40 %."
  }), React.createElement("p", {
    className: "lede"
  }, "Voici ce qui explique l'\xE9cart, dans l'ordre de son poids r\xE9el."), React.createElement("div", {
    className: "tarif-tw",
    style: {
      marginTop: 26
    }
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Facteur"), React.createElement("th", null, "Ce que \xE7a change"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Poids"))), React.createElement("tbody", null, TARIF_FACTEURS.map(f => React.createElement("tr", {
    key: f.t
  }, React.createElement("td", {
    style: {
      whiteSpace: "nowrap"
    }
  }, React.createElement("strong", null, f.t)), React.createElement("td", {
    style: {
      color: "var(--ink-2)"
    }
  }, f.d), React.createElement("td", {
    style: {
      textAlign: "right",
      color: "var(--accent)",
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, f.p))))))));
}
function TarifFerme() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(TarifSecHead, {
    num: "04 / Ce qui ne varie jamais",
    titre: "Le prix du devis",
    em: "est le prix final."
  }), React.createElement("p", {
    className: "lede"
  }, "Une fois le devis \xE9tabli, le montant ne bouge plus. Si nous avons sous-estim\xE9 le volume, le nombre d'\xE9tages ou la difficult\xE9 d'acc\xE8s, c'est notre erreur, pas votre facture. Aucun suppl\xE9ment le jour du d\xE9m\xE9nagement."), React.createElement("p", {
    className: "lede"
  }, "C'est la seule ligne de cette page qui n'a pas de fourchette, et c'est celle qui compte le plus.")));
}
function TarifFaqItem({
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
function TarifFAQ() {
  const [ouvert, setOuvert] = React.useState(-1);
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(TarifSecHead, {
    num: "05 / Questions de prix",
    titre: "Ce qu'on nous demande",
    em: "le plus souvent."
  }), React.createElement("div", {
    className: "faq-list reveal"
  }, TARIF_FAQ.map((f, i) => React.createElement(TarifFaqItem, {
    key: i,
    item: f,
    open: ouvert === i,
    onToggle: () => setOuvert(ouvert === i ? -1 : i)
  })))));
}
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", {
    id: "contenu"
  }, React.createElement(TarifHero, null), React.createElement(TarifFormules, null), React.createElement(TarifTableaux, null), React.createElement(TarifFacteurs, null), React.createElement(TarifFerme, null), React.createElement(TarifFAQ, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { tarifFourchette, TarifSecHead, TarifHero, TarifFormules, TarifTableaux, TarifFacteurs, TarifFerme, TarifFaqItem, TarifFAQ, App }); } catch (e) {}
})();
