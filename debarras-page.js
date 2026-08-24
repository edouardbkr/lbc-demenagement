/* debarras-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const DB = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const DEB_STEPS = [{
  n: "01",
  t: "Visite et devis ferme",
  d: "On se déplace, on regarde chaque pièce, la cave et le grenier. Le devis est remis sous 24 h et il ne bouge plus, quoi qu'on trouve derrière une porte."
}, {
  n: "02",
  t: "Tri avec vous, à votre rythme",
  d: "Ce qui part, ce qui reste, ce qui se vend, ce qui se donne. Rien n'est jeté sans votre accord, et on peut s'arrêter à tout moment si c'est trop."
}, {
  n: "03",
  t: "Enlèvement complet",
  d: "Mobilier, électroménager, cartons, encombrants, jusqu'au dernier tiroir. Le logement est rendu vide et balayé."
}, {
  n: "04",
  t: "Filière et justificatifs",
  d: "Déchetterie, recyclage, dons aux associations. On vous remet les justificatifs, utiles pour la succession comme pour l'état des lieux."
}];
const DEB_CAS = [{
  t: "Après un décès",
  d: "Le vidage se fait souvent dans l'urgence d'un délai de bail ou d'une vente. On travaille avec discrétion et sans presser personne, et on peut mettre de côté tout ce que la famille souhaite garder.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M12 21c-5-2.5-8-6-8-11V5l8-3 8 3v5c0 5-3 8.5-8 11z"
  }))
}, {
  t: "Succession et indivision",
  d: "Plusieurs héritiers, parfois éloignés, parfois en désaccord. On établit un état des lieux photographique avant enlèvement : chacun voit ce qui a été fait, et les discussions s'arrêtent là.",
  icon: React.createElement(DB, null, React.createElement("rect", {
    x: "4",
    y: "3",
    width: "16",
    height: "18",
    rx: "1"
  }), React.createElement("path", {
    d: "M8 8h8M8 12h8M8 16h5"
  }))
}, {
  t: "Départ en maison de retraite",
  d: "Un logement à libérer, une chambre à meubler. On sépare les deux : ce qui accompagne la personne est déménagé et installé, le reste est débarrassé.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
  }))
}, {
  t: "Vente ou remise en location",
  d: "Un bien vide se vend mieux et se loue plus vite. Débarras complet, nettoyage de fin de chantier, logement prêt à visiter.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
  }))
}, {
  t: "Cave, grenier, garage",
  d: "Les volumes qu'on repousse depuis vingt ans. Souvent le plus lourd du chantier, et rarement ce qu'on avait estimé de tête.",
  icon: React.createElement(DB, null, React.createElement("path", {
    d: "M3 7l9-4 9 4v10l-9 4-9-4z"
  }), React.createElement("path", {
    d: "M3 7l9 4 9-4M12 11v10"
  }))
}, {
  t: "Encombrants isolés",
  d: "Un canapé, un piano, un frigo américain. On se déplace pour une pièce unique, sans exiger un chantier complet.",
  icon: React.createElement(DB, null, React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "9",
    rx: "1"
  }), React.createElement("path", {
    d: "M6 17v2M18 17v2M3 12h18"
  }))
}];
const DEB_FAQ = [{
  q: "Combien coûte un débarras d'appartement à Nice ?",
  a: ["Comme un déménagement : le volume et l'étage font le prix, pas la surface. Un deux-pièces encombré se situe généralement entre 600 et 1 200 €, une maison avec cave et grenier au-delà.", "Le devis est ferme après visite. On ne facture jamais un supplément parce que la cave était plus pleine que prévu : c'est précisément pour ça qu'on vient voir avant de chiffrer."]
}, {
  q: "Faut-il être présent pendant le débarras ?",
  a: ["Non. Beaucoup de nos clients habitent loin, et c'est souvent le cas dans une succession. Nous travaillons avec les clés remises par un notaire, un syndic ou un voisin de confiance.", "Chaque pièce est photographiée avant et après. Vous recevez le relevé complet le soir même."]
}, {
  q: "Rachetez-vous le mobilier ?",
  a: ["Quand des pièces ont une valeur de revente réelle — mobilier ancien, électroménager récent, outillage — elles viennent en déduction du devis.", "Il est rare que cela couvre tout le chantier, et nous le disons avant plutôt que de le laisser espérer. Un intérieur des années soixante-dix complet ne vaut presque rien à la revente, même en bon état."]
}, {
  q: "Que faites-vous des affaires personnelles trouvées ?",
  a: ["Papiers, photos, courrier, bijoux, livrets bancaires : tout ce qui a un caractère personnel est mis de côté dans un carton identifié et vous est remis. Jamais jeté.", "C'est la règle même quand la consigne est de tout vider — les familles retrouvent souvent dans ce carton des choses qu'elles cherchaient depuis des semaines."]
}, {
  q: "Intervenez-vous pour un notaire ou un mandataire de justice ?",
  a: ["Oui, régulièrement. Le dossier qu'on remet comprend l'état des lieux photographique avant et après, les justificatifs de dépôt en déchetterie et une facture détaillée par poste.", "Ce sont les trois pièces qu'un dossier de succession réclame, et celles qui manquent le plus souvent quand le débarras a été fait à la va-vite."]
}, {
  q: "En combien de temps pouvez-vous intervenir ?",
  a: ["48 à 72 heures pour la visite, et souvent dans la semaine pour le chantier lui-même.", "Si vous avez un délai de bail ou une date de vente serrée, dites-le au premier appel : c'est ce qui décide de l'ordre dans lequel on cale les chantiers."]
}, {
  q: "Le logement est-il nettoyé après le débarras ?",
  a: ["Il est rendu vide et balayé, prêt pour un état des lieux. Les traces au sol laissées par les meubles restent visibles, c'est normal.", "Un nettoyage complet de fin de chantier — sols, sanitaires, vitres — s'ajoute au devis si le bien doit être visité ou reloué tout de suite."]
}, {
  q: "Que deviennent les objets dont personne ne veut ?",
  a: ["Ce qui peut resservir part vers une association locale ou une ressourcerie ; le reste va en déchetterie, trié par filière : encombrants, électroménager, gravats, produits chimiques.", "Nous conservons les justificatifs de dépôt et vous les remettons avec la facture."]
}, {
  q: "Videz-vous aussi les caves, garages et greniers ?",
  a: ["Oui, et c'est même souvent l'essentiel du volume. Une cave voûtée niçoise ou un grenier de villa contiennent régulièrement plus que l'appartement lui-même.", "Nous les ouvrons pendant la visite : c'est là que se joue l'écart entre le volume estimé et le volume réel."]
}, {
  q: "Le débarras peut-il se faire le même jour qu'un déménagement ?",
  a: ["Oui, et c'est souvent le plus simple : on charge ce qui part avec vous, on vide le reste, et le logement est rendu dans la journée.", "Cela évite de rouvrir le bien une seconde fois et de payer deux déplacements."]
}];
function DebHero() {
  return React.createElement("section", {
    className: "page-hero",
    id: "top"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), " ", React.createElement("span", null, "\u203A"), " ", React.createElement("span", null, "D\xE9barras & succession")), React.createElement("h1", null, "D\xE9barras et vidage ", React.createElement("em", {
    className: "dim-em"
  }, "apr\xE8s succession.")), React.createElement("p", {
    className: "lede"
  }, "Vider le logement de quelqu'un qu'on a perdu n'est pas un chantier comme un autre. On vient voir, on chiffre une fois pour toutes, et on avance \xE0 votre rythme. Ce qui a un caract\xE8re personnel \u2014 papiers, photos, bijoux \u2014 vous est remis, jamais jet\xE9."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 18
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Demander une visite", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "tel:+33615976577",
    className: "btn btn-ghost"
  }, "06 15 97 65 77"))));
}
function DebSteps() {
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
  }, "*"), " Comment \xE7a se passe")), React.createElement("h2", {
    className: "dim-em"
  }, "Quatre \xE9tapes, ", React.createElement("em", null, "et un prix qui ne bouge pas."))), React.createElement("div", {
    className: "values-grid reveal-stagger"
  }, DEB_STEPS.map(s => React.createElement("div", {
    className: "value",
    key: s.n
  }, React.createElement("div", {
    className: "value-num"
  }, s.n), React.createElement("div", {
    className: "value-body"
  }, React.createElement("div", {
    className: "value-title"
  }, s.t), React.createElement("p", null, s.d)))))));
}
function DebCas() {
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
  }, "*"), " Les situations qu'on traite")), React.createElement("h2", {
    className: "dim-em"
  }, "Chaque d\xE9barras ", React.createElement("em", null, "a son histoire."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, DEB_CAS.map(f => React.createElement("div", {
    className: "ap-value",
    key: f.t
  }, React.createElement("span", {
    className: "ap-value-ic"
  }, f.icon), React.createElement("div", {
    className: "ap-value-t"
  }, f.t), React.createElement("p", {
    className: "ap-value-d"
  }, f.d))))));
}
function DebNotaire() {
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
  }, "*"), " Vous \xEAtes notaire, mandataire ou syndic")), React.createElement("h2", {
    className: "dim-em"
  }, "Un dossier propre, ", React.createElement("em", null, "pas seulement un logement vide."))), React.createElement("p", {
    className: "lede"
  }, "Ce qui vous manque dans un d\xE9barras, ce n'est pas la main-d'\u0153uvre, c'est la tra\xE7abilit\xE9. On fournit syst\xE9matiquement l'\xE9tat des lieux photographique avant et apr\xE8s, les justificatifs de d\xE9p\xF4t en d\xE9chetterie et une facture d\xE9taill\xE9e par poste. De quoi joindre au dossier de succession sans avoir \xE0 rappeler qui que ce soit."), React.createElement("p", {
    className: "lede"
  }, "En indivision, les photos r\xE8glent la plupart des d\xE9saccords avant qu'ils ne commencent : chaque h\xE9ritier voit ce qui se trouvait dans le logement et ce qui en est sorti. Et si un h\xE9ritier veut r\xE9cup\xE9rer une pi\xE8ce pr\xE9cise, elle est mise de c\xF4t\xE9 et non enlev\xE9e."), React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, React.createElement("a", {
    href: "Contact",
    className: "btn btn-primary"
  }, "Nous contacter", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}
const DEB_PRIX = [{
  l: "Studio ou T1",
  v: "12 à 20 m³",
  p: "450 – 750 €",
  d: "Un logement meublé sans cave. La moitié du prix part en déchetterie."
}, {
  l: "Deux pièces",
  v: "20 à 35 m³",
  p: "600 – 1 200 €",
  d: "Le cas le plus courant. Cave ou grenier en plus : comptez le haut de la fourchette."
}, {
  l: "Trois pièces",
  v: "35 à 50 m³",
  p: "1 100 – 1 900 €",
  d: "Souvent deux jours d'équipe quand il n'y a pas d'ascenseur."
}, {
  l: "Maison",
  v: "50 à 90 m³",
  p: "1 800 – 3 200 €",
  d: "Garage, cave, grenier et jardin compris. C'est le tri qui prend le temps, pas le portage."
}];
const DEB_FACTEURS = [{
  t: "Le volume, pas la surface",
  d: "Un deux-pièces vidé en trente ans d'occupation contient plus qu'une maison meublée l'an dernier. C'est ce qu'il y a dedans qui compte, et c'est pour ça qu'on vient voir."
}, {
  t: "L'étage et l'ascenseur",
  d: "Un troisième sans ascenseur double le temps de portage. À Nice, entre le Vieux-Nice et les immeubles anciens de Libération, c'est la règle plutôt que l'exception."
}, {
  t: "Ce qui part en filière spéciale",
  d: "Peinture, solvants, batteries, gros électroménager : chaque filière a son point de dépôt et son tarif. C'est chiffré à part, jamais fondu dans un forfait."
}, {
  t: "Ce qui se revend",
  d: "Mobilier ancien, électroménager récent, outillage : la valeur de revente vient en déduction. Rarement de quoi couvrir le chantier, parfois de quoi l'alléger sérieusement."
}];
function DebPrix() {
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
  }, "*"), " Ce que \xE7a co\xFBte")), React.createElement("h2", {
    className: "dim-em"
  }, "Les prix, ", React.createElement("em", null, "avant m\xEAme de nous appeler."))), React.createElement("p", {
    className: "lede"
  }, "Personne n'affiche ses prix sur ce m\xE9tier, et c'est bien le probl\xE8me : on appelle trois entreprises pour d\xE9couvrir trois fourchettes incomparables. Voici les n\xF4tres, tir\xE9es des chantiers que nous avons r\xE9ellement faits."), React.createElement("div", {
    className: "tarif-tw",
    style: {
      marginTop: 26
    }
  }, React.createElement("table", {
    className: "tarif-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Logement"), React.createElement("th", null, "Volume"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Fourchette"))), React.createElement("tbody", null, DEB_PRIX.map(r => React.createElement("tr", {
    key: r.l
  }, React.createElement("td", null, React.createElement("strong", null, r.l), React.createElement("div", {
    className: "tarif-sub"
  }, r.d)), React.createElement("td", {
    className: "tarif-sub",
    style: {
      whiteSpace: "nowrap"
    }
  }, r.v), React.createElement("td", {
    className: "tarif-prix",
    style: {
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, r.p)))))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 20
    }
  }, "Ces montants supposent un acc\xE8s normal et un logement \xE0 vider enti\xE8rement. Le devis est ferme apr\xE8s visite : ", React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "on ne facture jamais un suppl\xE9ment parce que la cave \xE9tait plus pleine que pr\xE9vu"), ". C'est le sens m\xEAme du d\xE9placement pr\xE9alable."), React.createElement("h3", {
    className: "tarif-h3",
    style: {
      marginTop: 40
    }
  }, "Ce qui fait varier le prix"), React.createElement("div", {
    className: "values-grid reveal-stagger"
  }, DEB_FACTEURS.map((x, i) => React.createElement("div", {
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
function DebSuccession() {
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
  }, "*"), " Vider avant le partage")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qu'on a le droit de jeter, ", React.createElement("em", null, "et quand."))), React.createElement("p", {
    className: "lede"
  }, "C'est la question qui bloque le plus de familles, et celle sur laquelle on trouve le moins de r\xE9ponses claires. Voici ce que nous voyons faire, tous les mois, dans les successions que nous vidons."), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 26
    }
  }, React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Avant l'acceptation de la succession"), React.createElement("p", {
    className: "ap-value-d"
  }, "Tant que personne n'a accept\xE9, vider le logement peut \xEAtre compris comme un acte d'h\xE9ritier, avec les dettes qui vont avec. Un notaire vous le dira mieux que nous, mais dans les faits, la plupart des familles attendent ce feu vert avant de nous appeler.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Quand il y a plusieurs h\xE9ritiers"), React.createElement("p", {
    className: "ap-value-d"
  }, "Le d\xE9barras suppose l'accord de tous. C'est l\xE0 que l'\xE9tat des lieux photographique devient utile : chacun voit ce qui se trouvait dans le logement et ce qui en est sorti, sans avoir \xE0 se croire sur parole.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le logement est en location"), React.createElement("p", {
    className: "ap-value-d"
  }, "Le bail continue apr\xE8s le d\xE9c\xE8s et le loyer court. C'est ce qui met la pression : chaque mois de retard co\xFBte un loyer entier. Dites-le nous au premier appel, c'est ce qui d\xE9cide de l'ordre dans lequel on cale les chantiers.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Les papiers, jamais jet\xE9s"), React.createElement("p", {
    className: "ap-value-d"
  }, "Relev\xE9s bancaires, contrats d'assurance-vie, titres de propri\xE9t\xE9, livrets : tout ce qui ressemble \xE0 un document est mis de c\xF4t\xE9 dans un carton identifi\xE9. Une succession se r\xE8gle avec ces papiers-l\xE0, et ils r\xE9apparaissent souvent au fond d'un tiroir.")))));
}
function DebDechets() {
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
  }, "*"), " Faire soi-m\xEAme")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce que vous pouvez \xE9vacuer ", React.createElement("em", null, "sans nous."))), React.createElement("p", {
    className: "lede"
  }, "Autant le dire : une partie du travail peut se faire seul, et cela r\xE9duit d'autant le devis. Voici ce qui existe \xE0 Nice et ce que \xE7a vaut vraiment."), React.createElement("div", {
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
  }, "La M\xE9tropole Nice C\xF4te d'Azur l'assure sur rendez-vous, gratuitement, pour les particuliers. Vous sortez les meubles la veille au soir. Comptez plusieurs jours de d\xE9lai, et un volume limit\xE9 par passage : c'est utile pour cinq meubles, pas pour vider un appartement.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "La d\xE9chetterie"), React.createElement("p", {
    className: "ap-value-d"
  }, "Plusieurs d\xE9chetteries m\xE9tropolitaines accueillent les particuliers sur justificatif de domicile. Il faut un v\xE9hicule, du temps, et accepter de faire plusieurs voyages. Gravats, peinture et \xE9lectrom\xE9nager y ont chacun leur fili\xE8re.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le don"), React.createElement("p", {
    className: "ap-value-d"
  }, "Emma\xFCs et les ressourceries locales r\xE9cup\xE8rent le mobilier en bon \xE9tat, parfois \xE0 domicile. C'est la meilleure destination pour ce qui peut resservir, mais elles refusent ce qui est ab\xEEm\xE9 \u2014 et dans une succession, l'essentiel l'est.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "O\xF9 \xE7a coince"), React.createElement("p", {
    className: "ap-value-d"
  }, "Le piano, l'armoire du couloir, la cave vo\xFBt\xE9e, le grenier sans escalier fixe. C'est presque toujours l\xE0 que les familles s'arr\xEAtent apr\xE8s un week-end d'essai, et c'est pour \xE7a qu'on nous appelle le lundi."))), React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 22
    }
  }, React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "Notre conseil, sinc\xE8rement :"), " triez les papiers et les objets personnels vous-m\xEAme, personne ne peut le faire \xE0 votre place. Le reste \u2014 le volume, le poids, les escaliers \u2014 c'est notre m\xE9tier, et vous y passeriez trois week-ends.")));
}
function DebDelais() {
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
  }, "*"), " Le calendrier")), React.createElement("h2", {
    className: "dim-em"
  }, "Combien de temps ", React.createElement("em", null, "\xE7a prend vraiment."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 24
    }
  }, React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "De l'appel \xE0 la visite"), React.createElement("p", {
    className: "ap-value-d"
  }, "48 \xE0 72 heures. La visite dure trente \xE0 quarante-cinq minutes, cave et grenier ouverts, et le devis part le soir m\xEAme.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "De l'accord au chantier"), React.createElement("p", {
    className: "ap-value-d"
  }, "Souvent dans la semaine. Quand un d\xE9lai de bail ou une date de vente serre, dites-le : c'est ce qui d\xE9cide de l'ordre de passage.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le chantier lui-m\xEAme"), React.createElement("p", {
    className: "ap-value-d"
  }, "Une demi-journ\xE9e pour un studio, une journ\xE9e pour un deux ou trois-pi\xE8ces, deux jours pour une maison avec d\xE9pendances.")), React.createElement("div", {
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, "Le dossier remis"), React.createElement("p", {
    className: "ap-value-d"
  }, "Le soir m\xEAme : \xE9tat des lieux photographique avant et apr\xE8s, justificatifs de d\xE9p\xF4t, facture d\xE9taill\xE9e par poste.")))));
}
function DebFAQ() {
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
  }, "*"), " Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "Ce qu'on nous demande ", React.createElement("em", null, "le plus souvent."))), React.createElement(FaqOuvrable, {
    items: DEB_FAQ
  })));
}
function FaqOuvrable({
  items
}) {
  const [ouvert, setOuvert] = React.useState(-1);
  return React.createElement("div", {
    className: "faq-list reveal"
  }, items.map((f, i) => React.createElement("div", {
    className: "faq-item" + (ouvert === i ? " open" : ""),
    key: i
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOuvert(ouvert === i ? -1 : i),
    "aria-expanded": ouvert === i
  }, React.createElement("span", null, f.q), React.createElement("span", {
    className: "ico",
    "aria-hidden": "true"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, Array.isArray(f.a) ? f.a.map((p, k) => React.createElement("p", {
    key: k
  }, p)) : React.createElement("p", null, f.a)))));
}
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", {
    id: "contenu"
  }, React.createElement(DebHero, null), React.createElement(DebSteps, null), React.createElement(DebCas, null), React.createElement(DebPrix, null), React.createElement(DebSuccession, null), React.createElement(DebDechets, null), React.createElement(DebDelais, null), React.createElement(DebNotaire, null), React.createElement(DebFAQ, null), React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "devis-hero-form"
  }, React.createElement(QuickQuote, null))))), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { DebHero, DebSteps, DebCas, DebNotaire, DebPrix, DebSuccession, DebDechets, DebDelais, DebFAQ, FaqOuvrable, App }); } catch (e) {}
})();
