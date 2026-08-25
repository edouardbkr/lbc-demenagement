/* service-fond.jsx — compilé par build.js, ne pas éditer */
(function () {
const SERVICE_FOND = {
  "checklist": {
    titre: ["Douze semaines,", "et rien qui se découvre la veille."],
    intro: "Une checklist ne sert à rien si elle ne dit pas quand faire chaque chose. Celle-ci est organisée par échéance, à rebours de la date de déménagement, avec pour chaque étape ce qui se passe si on la rate. Les délais indiqués sont ceux que nous constatons réellement sur nos chantiers, pas des ordres de grandeur théoriques.",
    sections: [{
      t: "À douze semaines : la date et le préavis",
      d: "Tout part de deux documents : votre bail ou votre compromis, et le préavis qu'il impose. La durée légale varie selon le type de location et la zone, et c'est elle qui fixe la date à partir de laquelle vous êtes libre. Envoyez le congé en recommandé, gardez l'accusé. C'est aussi le moment de bloquer une date de déménagement : les samedis et les fins de mois partent en premier, et en été ils partent trois mois à l'avance. Une date réservée peut se décaler, une date jamais réservée ne se trouve pas."
    }, {
      t: "À huit semaines : le devis et le tri",
      d: "Faites établir un devis après visite, pas au téléphone. Un professionnel qui chiffre sans avoir vu l'accès, l'étage et le volume réel se trompe, et l'écart se règle le jour J à votre charge. Profitez de cette visite pour commencer le tri : ce que vous ne voulez plus ne doit pas être transporté, parce que le transport se paie au volume. Ce qui part en don ou en vente demande du temps, c'est maintenant ou jamais."
    }, {
      t: "À six semaines : les administrations",
      d: "Le changement d'adresse concerne plus d'organismes qu'on ne croit : employeur, banque, assurances, mutuelle, impôts, caisse d'allocations, énergie, internet, école. Certaines démarches ont un délai contraint, notamment la résiliation ou le transfert des contrats d'énergie et d'internet, dont le raccordement peut prendre plusieurs semaines. Une arrivée sans électricité ni connexion est une arrivée gâchée pour rien."
    }, {
      t: "À quatre semaines : les cartons et l'étiquetage",
      d: "Commencez par ce que vous n'utilisez pas : livres, décoration, vaisselle de réception, vêtements hors saison. Étiquetez sur le côté, pas sur le dessus, avec la pièce de destination et non le contenu. Numérotez et tenez une liste. Ce sont dix minutes par jour pendant un mois, ou trois jours de panique la dernière semaine. Prévoyez des cartons de petite taille pour les livres, les gros pour le léger, et jamais l'inverse."
    }, {
      t: "À deux semaines : les autorisations et l'accès",
      d: "Si votre rue ou celle d'arrivée demande une autorisation de stationnement, elle se dépose maintenant. Prévenez le syndic ou le gardien aux deux adresses, réservez l'ascenseur si le règlement l'impose, et récupérez les codes et les badges. Vérifiez la largeur des portes, la présence d'un monte-charge, et la possibilité de stationner un véhicule long. Ces vérifications prennent une heure et évitent la moitié des mauvaises surprises."
    }, {
      t: "La dernière semaine, et le jour J",
      d: "Vider le réfrigérateur et le dégivrer, débrancher et sécuriser la machine à laver, relever les compteurs, préparer un carton d'arrivée avec ce dont vous aurez besoin le premier soir : papier toilette, lampe, chargeurs, draps, de quoi manger. Le jour même, faites le tour complet du logement pièce par pièce, cave et balcon compris, avant que le camion ne ferme. C'est le quart d'heure le plus rentable de tout le déménagement."
    }],
    erreurs: [{
      t: "Réserver la date en dernier",
      d: "Les samedis et fins de mois partent des mois à l'avance en haute saison. C'est la première chose à bloquer, avant même d'avoir tout organisé."
    }, {
      t: "Oublier le délai de raccordement",
      d: "Internet et parfois l'électricité demandent plusieurs semaines. Une arrivée sans connexion se prépare, ou se subit."
    }, {
      t: "Étiqueter par contenu",
      d: "L'étiquette doit dire où poser le carton, pas ce qu'il contient. « Cuisine » fait gagner une heure, « vaisselle » ne sert à rien."
    }]
  },
  "formules": {
    titre: ["Trois formules,", "et comment savoir laquelle est la vôtre."],
    intro: "Le choix d'une formule ne se fait pas sur le prix mais sur ce que vous êtes prêt à faire vous-même, et sur le temps dont vous disposez avant la date. Un déménagement mal calibré coûte plus cher que la formule au-dessus, parce qu'il finit toujours par des heures supplémentaires ou par de la casse.",
    sections: [{
      t: "Ce que le prix recouvre réellement",
      d: "Un devis de déménagement additionne quatre choses : le volume, la distance, l'accès aux deux adresses, et le niveau de prestation. Le volume et la distance sont les seuls que vous puissiez estimer vous-même. L'accès, c'est-à-dire l'étage, la présence d'un ascenseur adapté, la distance de portage et la possibilité de stationner, pèse souvent autant que le volume et ne se devine pas à distance. C'est la raison pour laquelle nous nous déplaçons avant de chiffrer, et pourquoi le prix annoncé après visite ne bouge plus."
    }, {
      t: "Quand la formule économique suffit",
      d: "Elle convient si vous avez du temps devant vous, un volume modéré, et un accès simple aux deux adresses. Vous emballez, nous transportons. C'est le bon choix pour un studio ou un deux-pièces sans mobilier fragile, quand vous pouvez consacrer plusieurs soirées à préparer. Le piège est de la choisir pour le prix alors qu'on n'aura pas le temps : un emballage bâclé coûte plus cher en casse que la différence entre deux formules."
    }, {
      t: "Quand il faut passer à la formule complète",
      d: "Dès qu'il y a du démontage-remontage, du mobilier fragile ou de valeur, un étage sans ascenseur, ou un délai court. Le démontage d'un lit, d'une armoire ou d'une cuisine demande des outils et de la méthode, et un meuble démonté sans repérage ne se remonte pas toujours. Cette formule inclut la protection du mobilier, ce qui n'est pas un détail sur un accès difficile. C'est celle que nous recommandons dans la majorité des cas, et nous le disons franchement même quand ce n'est pas ce que le client espère entendre."
    }, {
      t: "Ce que change l'assurance",
      d: "Dans nos trois formules, vos meubles sont assurés du chargement à la livraison, jusqu'à un plafond par objet indiqué sur votre devis. Ce point mérite d'être vérifié chez tout prestataire que vous comparez : certaines offres à bas prix couvrent le camion et pas le contenu, ou plafonnent à un niveau qui ne couvre rien. Un devis moins cher sans assurance équivalente n'est pas un devis moins cher, c'est un devis différent."
    }, {
      t: "Comment comparer deux devis honnêtement",
      d: "Mettez côte à côte quatre lignes : le volume retenu, le nombre d'équipiers, ce qui est inclus en démontage et en emballage, et le plafond d'assurance par objet. Si l'un des devis a été fait sans visite, il est structurellement moins fiable que l'autre, quel que soit son montant. Et vérifiez si le prix est ferme ou révisable le jour J : c'est là que se creusent la plupart des écarts entre le devis signé et la facture finale."
    }],
    erreurs: [{
      t: "Choisir sur le seul montant affiché",
      d: "Deux devis ne couvrent presque jamais le même périmètre. Le moins cher est souvent celui qui inclut le moins, et l'écart se règle le jour J."
    }, {
      t: "Prendre l'économique par optimisme",
      d: "Si vous n'aurez pas le temps d'emballer correctement, la formule au-dessus coûte moins que la casse et les heures supplémentaires."
    }, {
      t: "Accepter un devis sans visite",
      d: "L'accès pèse autant que le volume et ne se devine pas. Un devis téléphonique est une estimation, pas un engagement."
    }]
  },
  "archivage": {
    titre: ["Des archives,", "ce n'est pas du mobilier en cartons."],
    intro: "Transférer ou stocker des archives professionnelles engage votre responsabilité bien au-delà du transport : obligations de conservation, confidentialité des données, traçabilité en cas de contrôle. C'est un travail d'inventaire et de chaîne de garde autant que de manutention, et il ne se traite pas comme un déménagement de bureaux ordinaire.",
    sections: [{
      t: "Ce que la loi vous impose de conserver",
      d: "Les durées de conservation varient selon la nature du document : pièces comptables, contrats, bulletins de paie, dossiers clients, documents fiscaux et sociaux n'ont pas les mêmes obligations. Avant de transférer, il est utile de savoir ce qui doit encore être conservé et ce qui peut être détruit, parce que stocker ce qui aurait pu partir coûte tous les mois. Nous ne sommes pas votre conseil juridique, mais nous organisons le transfert par catégorie pour que ce tri soit possible plutôt que d'entasser tout au même endroit."
    }, {
      t: "La confidentialité et la chaîne de garde",
      d: "Des dossiers clients, des données de santé ou des pièces de personnel ne se transportent pas dans des cartons ouverts posés dans un camion partagé. Nous travaillons en contenants scellés, numérotés, avec un bordereau signé au départ et à l'arrivée. Chaque contenant est rattaché à un lot identifié. En cas de question ultérieure, on peut établir qui a eu accès à quoi et quand, ce qui est exactement ce qu'on vous demandera en cas d'incident."
    }, {
      t: "L'inventaire, qui conditionne tout le reste",
      d: "Un carton d'archives sans référence est un carton perdu : on sait qu'il existe, on ne sait pas ce qu'il contient. Nous établissons un inventaire au niveau du contenant, avec la nature du contenu, l'année ou la plage d'années, et le service concerné. Cet inventaire vous est remis et vous permet de retrouver un document sans ouvrir vingt caisses. C'est le travail qui prend le plus de temps en préparation et qui en fait gagner le plus ensuite."
    }, {
      t: "Les conditions de stockage",
      d: "Le papier craint l'humidité, les écarts thermiques et la lumière. Un stockage en cave ou en local non ventilé abîme des documents que vous êtes tenu de conserver. Nous stockons en contenants fermés, sur rayonnage, dans des conditions adaptées, avec un accès organisé sur demande plutôt qu'un empilement où l'on ne retrouve rien. La durée de conservation se contractualise, et vous savez ce que vous payez et jusqu'à quand."
    }, {
      t: "La destruction, quand elle est possible",
      d: "Ce qui a dépassé sa durée de conservation obligatoire peut être détruit, et le faire libère du volume et donc du coût. Cette destruction doit être documentée quand les documents sont sensibles : on établit un certificat mentionnant la nature et le volume détruits. Nous vous indiquons ce que nous pouvons prendre en charge et ce qui relève d'un prestataire spécialisé, plutôt que de vous laisser croire que tout se règle avec une benne."
    }],
    erreurs: [{
      t: "Transférer sans trier",
      d: "Stocker des documents dont la durée de conservation est dépassée coûte chaque mois pour rien. Le tri se fait avant le transfert, pas après."
    }, {
      t: "Mélanger archives et mobilier",
      d: "Les contenants doivent être scellés, numérotés et suivis. Un carton d'archives dans un camion de déménagement classique n'a aucune traçabilité."
    }, {
      t: "Se passer d'inventaire",
      d: "Un carton sans référence est un carton introuvable. L'inventaire au contenant est ce qui rend le stockage utile plutôt que subi."
    }]
  },
  "urgence": {
    titre: ["Un déménagement en urgence,", "ce n'est pas un déménagement bâclé."],
    intro: "Une urgence ne change pas la méthode, elle change l'ordre des priorités et supprime les marges. Un déménagement en vingt-quatre à soixante-douze heures est réalisable, à condition de savoir immédiatement ce qui est bloquant et ce qui ne l'est pas, et d'accepter que certaines choses se règlent après.",
    sections: [{
      t: "Ce qui est vraiment bloquant en urgence",
      d: "Trois choses seulement peuvent empêcher un déménagement rapide : la disponibilité d'une équipe et d'un véhicule adaptés, l'accès aux deux adresses, et l'autorisation de stationnement quand la rue l'impose. Le reste, tri, cartons, administratif, peut se traiter en parallèle ou après. Lors du premier appel, nous vérifions ces trois points avant toute chose, parce que ce sont eux qui déterminent si la date est tenable. Nous préférons vous dire non tout de suite plutôt que d'accepter et de vous laisser sans solution."
    }, {
      t: "L'autorisation de voirie en délai court",
      d: "C'est le point le plus contraint. Certaines communes instruisent en quelques jours, d'autres demandent davantage, et sans emplacement réservé le camion n'a nulle part où se mettre. Nous engageons la demande dans l'heure qui suit votre accord, et nous identifions immédiatement une solution de repli quand le délai ne peut pas être tenu : report sur une rue voisine, créneau très matinal, ou portage plus long chiffré à l'avance."
    }, {
      t: "Emballer vite sans emballer mal",
      d: "En urgence, la tentation est de tout jeter dans des cartons. C'est ce qui produit la casse. Notre équipe emballe avec vous, en commençant par ce qui est fragile et par ce qui est vital à l'arrivée, et en laissant pour la fin ce qui supporte un traitement rapide. L'étiquetage est réduit au strict nécessaire, la pièce de destination, mais il est fait. Un carton non étiqueté en urgence est un carton qu'on ouvrira trois fois."
    }, {
      t: "Le garde-meuble, souvent la vraie solution",
      d: "Beaucoup d'urgences ne sont pas des urgences de déménagement mais des urgences de libération : il faut vider un logement à une date, sans que le logement d'arrivée soit prêt. Dans ce cas, la bonne réponse n'est pas de tout précipiter mais de charger, inventorier et stocker, puis de livrer à froid quand vous êtes prêt. Cela coûte moins qu'un déménagement bâclé et supprime la pression."
    }, {
      t: "Les situations que nous traitons le plus souvent",
      d: "Expulsion ou fin de bail non anticipée, mutation professionnelle annoncée tardivement, séparation, sinistre rendant le logement inhabitable, vente conclue plus vite que prévu. Ce sont des moments difficiles, et nous les traitons sans commentaire ni jugement. Ce que nous demandons en échange, c'est de savoir tout de suite ce qui doit partir et ce qui reste : c'est la seule information dont nous avons besoin pour aller vite."
    }],
    erreurs: [{
      t: "Attendre le dernier jour pour appeler",
      d: "Une équipe et un véhicule se libèrent, une autorisation de voirie non. Chaque jour gagné sur l'appel élargit les solutions possibles."
    }, {
      t: "Tout emballer sans étiqueter",
      d: "Le temps gagné au chargement se perd au triple à l'arrivée. Un mot par carton suffit, mais il faut ce mot."
    }, {
      t: "Forcer une arrivée qui n'est pas prête",
      d: "Charger, stocker et livrer plus tard coûte moins qu'un double déménagement précipité, et supprime la pression sur la date."
    }]
  },
  "devis": {
    titre: ["Un devis ferme,", "et ce qu'il faut nous dire pour l'obtenir."],
    intro: "Notre devis est ferme : le montant annoncé est celui que vous payez, sans supplément le jour J. Cette garantie n'est tenable que si le chiffrage repose sur des informations exactes. Voici précisément ce dont nous avons besoin, et pourquoi chaque élément compte.",
    sections: [{
      t: "Le volume, et pourquoi il se mesure",
      d: "Le volume est la base du calcul, et c'est celui que les clients sous-estiment le plus, en moyenne d'un tiers. La cause est presque toujours la même : on compte les pièces de vie et on oublie la cave, le grenier, le garage, le balcon et les placards. Une estimation en ligne donne un ordre de grandeur utile pour commencer, pas un chiffre sur lequel s'engager. C'est pour cela que nous nous déplaçons, et c'est pour cela que notre prix ne bouge pas ensuite."
    }, {
      t: "L'accès, qui pèse autant que le volume",
      d: "Étage, présence et taille de l'ascenseur, distance entre le point de stationnement possible et la porte, largeur de la rue, présence d'un escalier extérieur. Ces éléments déterminent le nombre d'équipiers et la durée, donc le prix, autant que les mètres cubes. Deux logements de même surface peuvent varier du simple au double selon l'accès. C'est l'information que les devis à distance ignorent, et c'est exactement là que naissent les suppléments le jour du déménagement."
    }, {
      t: "Ce qui demande un traitement particulier",
      d: "Piano, coffre-fort, œuvres, cave à vin, aquarium, mobilier sur mesure monté sur place, matériel professionnel. Chacun de ces éléments est une prestation à part, avec son matériel et parfois ses équipiers supplémentaires. Les signaler au relevé permet de les chiffrer une fois. Les découvrir le matin du déménagement décale toute la journée, et c'est la première cause de dépassement chez les prestataires qui chiffrent au téléphone."
    }, {
      t: "La date, qui a son propre effet sur le prix",
      d: "Un samedi de fin de mois en été n'a ni la même disponibilité ni le même coût qu'un mardi de novembre. Ce n'est pas une majoration arbitraire, c'est la conséquence d'une demande concentrée sur quelques créneaux. Quand votre date est souple, nous vous indiquons franchement les jours où le même chantier coûte moins cher. Quand elle ne l'est pas, nous le chiffrons sans commentaire."
    }, {
      t: "Ce que le devis contient, ligne par ligne",
      d: "Le volume retenu, le nombre d'équipiers, le véhicule, les prestations incluses en démontage et en emballage, les fournitures, l'assurance et son plafond par objet, et le cas échéant le monte-meuble ou l'autorisation de voirie. Tout est détaillé, parce qu'un devis global d'une seule ligne ne permet ni de comprendre ni de comparer. Vous pouvez le mettre en face de n'importe quel autre devis et voir exactement où sont les différences."
    }],
    erreurs: [{
      t: "Estimer soi-même son volume",
      d: "L'écart moyen est d'un tiers, cave et garage oubliés. Un devis bâti sur ce chiffre se corrige forcément le jour J."
    }, {
      t: "Ne pas signaler les objets particuliers",
      d: "Piano, coffre, œuvres : chacun est une prestation dédiée. Non annoncés, ils décalent la journée entière."
    }, {
      t: "Comparer deux devis sur le seul total",
      d: "Le périmètre change tout : équipiers, démontage, fournitures, plafond d'assurance. Le détail ligne à ligne est le seul comparateur valable."
    }]
  }
};
function FondPage({
  cle,
  depart
}) {
  const f = (window.SERVICE_FOND || {})[cle];
  if (!f) return null;
  const n0 = depart || 5;
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", String(n0).padStart(2, '0'), " / En d\xE9tail")), React.createElement("h2", {
    className: "dim-em"
  }, f.titre[0], " ", React.createElement("em", null, f.titre[1]))), React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 820
    }
  }, f.intro))), f.sections.map((s, i) => React.createElement("section", {
    className: "sec",
    key: i
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", String(n0 + 1 + i).padStart(2, '0'), " / Le d\xE9tail")), React.createElement("h2", {
    className: "dim-em"
  }, s.t)), React.createElement("p", {
    style: {
      maxWidth: 820,
      lineHeight: 1.78
    }
  }, s.d)))), f.erreurs && React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num",
    style: {
      fontFamily: "\"DM Sans\""
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " ", String(n0 + 1 + f.sections.length).padStart(2, '0'), " / \xC0 \xE9viter")), React.createElement("h2", {
    className: "dim-em"
  }, "Les trois erreurs ", React.createElement("em", null, "qu'on voit le plus souvent."))), React.createElement("div", {
    className: "about-grid",
    style: {
      marginTop: 8
    }
  }, f.erreurs.map((e, i) => React.createElement("div", {
    key: i,
    className: "ap-value"
  }, React.createElement("h3", {
    className: "ap-value-t"
  }, e.t), React.createElement("p", {
    className: "ap-value-d"
  }, e.d)))))));
}
Object.assign(window, {
  SERVICE_FOND,
  FondPage
});
  try { Object.assign(window, { FondPage }); } catch (e) {}
})();
