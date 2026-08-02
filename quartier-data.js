/* quartier-data.jsx — compilé par build.js, ne pas éditer */
(function () {
const AOT = {
  standard: {
    libelle: "Place de stationnement autorisée (gratuite, payante, aire de livraison ou dépose-minute)",
    delai: "5 jours ouvrés",
    tel: "04 97 13 22 86 ou 04 97 13 45 63"
  },
  hors: {
    libelle: "Voie de circulation, trottoir, ou endroit sans stationnement autorisé",
    delai: "7 jours ouvrés",
    tel: "04 97 13 26 53"
  },
  pietonne: {
    libelle: "Zone piétonne",
    delai: "7 jours ouvrés",
    tel: "04 97 13 26 43"
  }
};
const QUARTIERS = {
  "vieux-nice": {
    nom: "Vieux-Nice",
    url: "Demenagement-Vieux-Nice",
    titre: "Déménagement Vieux-Nice — Zone piétonne, bornes, monte-meuble",
    description: "Déménager dans le Vieux-Nice : zone piétonne, bornes escamotables, ruelles inaccessibles au camion et escaliers étroits. La méthode et la démarche mairie, expliquées.",
    accroche: "Le quartier le plus contraignant de Nice, et celui où l'improvisation coûte le plus cher.",
    intro: "Déménager dans le Vieux-Nice ne ressemble à aucun autre déménagement niçois. Le quartier est en zone piétonne, l'accès des véhicules est filtré par des bornes escamotables, et une bonne partie des ruelles ne laisse tout simplement pas passer un camion de déménagement. Ajoutez des immeubles anciens, souvent sans ascenseur, avec des cages d'escalier en colimaçon dans lesquelles une armoire ne tourne pas, et vous comprenez pourquoi un déménagement mal préparé ici se termine en journée perdue.",
    aot: "pietonne",
    contraintes: [{
      t: "Zone piétonne à accès filtré",
      d: "L'entrée des véhicules est commandée par des bornes escamotables. Il ne suffit pas d'avoir l'autorisation : il faut aussi appeler le centre de sécurité le jour J pour faire abaisser la borne. Un camion qui se présente sans cette double démarche repart."
    }, {
      t: "Ruelles trop étroites pour un porteur",
      d: "Sur une partie du quartier, le camion de déménagement ne passe pas, ou ne peut pas manœuvrer. On travaille alors en navette : un petit véhicule fait le lien entre le logement et le camion stationné à l'extérieur du périmètre."
    }, {
      t: "Escaliers anciens, ascenseurs rares",
      d: "Cages étroites, marches usées, paliers exigus. Les meubles volumineux passent rarement par l'escalier : on démonte davantage qu'ailleurs, et le monte-meuble n'est pas toujours déployable faute de recul dans la rue."
    }, {
      t: "Voisinage et horaires",
      d: "Rues commerçantes, terrasses, livraisons : les créneaux du matin tôt sont les plus praticables, avant l'installation des terrasses et l'afflux touristique."
    }],
    methode: ["Visite technique préalable systématique : on mesure l'accès, la cage d'escalier et le point de stationnement possible.", "Demande d'autorisation en zone piétonne déposée au moins 7 jours ouvrés avant, auprès du service dédié.", "Organisation en navette quand la rue est inaccessible, avec un véhicule adapté au gabarit des ruelles.", "Démontage plus poussé qu'ailleurs, et protection renforcée des angles dans les escaliers étroits."],
    faq: [{
      q: "Peut-on garer un camion de déménagement dans le Vieux-Nice ?",
      a: "Pas librement. Le quartier est en zone piétonne à accès contrôlé par bornes escamotables. Il faut une autorisation d'occupation temporaire délivrée par la Ville, demandée au moins 7 jours ouvrés à l'avance, et appeler le centre de sécurité le jour J pour faire abaisser la borne."
    }, {
      q: "Que se passe-t-il si la rue est trop étroite pour le camion ?",
      a: "On organise le déménagement en navette : un véhicule de petit gabarit fait l'aller-retour entre votre logement et le camion stationné en périphérie du secteur piéton. C'est plus long, cela se prévoit au devis, mais c'est la seule méthode fiable dans certaines ruelles."
    }, {
      q: "Le monte-meuble est-il utilisable dans le Vieux-Nice ?",
      a: "Parfois seulement. Un monte-meuble a besoin de recul au sol pour être déployé en sécurité, ce que beaucoup de ruelles n'offrent pas. C'est précisément ce qu'on vérifie lors de la visite technique avant de vous annoncer un prix."
    }],
    proches: ["le-port", "carre-d-or"]
  },
  "cimiez": {
    nom: "Cimiez",
    url: "Demenagement-Cimiez-Nice",
    titre: "Déménagement Cimiez — Colline, grandes demeures, mobilier ancien",
    description: "Déménager à Cimiez : accès en lacets, grandes surfaces Belle Époque, mobilier ancien et volumes importants. Ce que ça change concrètement pour votre déménagement.",
    accroche: "De grands volumes, de belles pièces, et une colline qui complique tout.",
    intro: "Cimiez, c'est la colline bourgeoise de Nice : anciens palaces Belle Époque reconvertis en appartements, villas sous les oliviers, grands appartements aux plafonds hauts. Sur le papier, tout est plus confortable qu'en centre-ville. Dans les faits, un déménagement à Cimiez pose trois problèmes différents : les volumes sont importants, le mobilier a souvent de la valeur, et l'accès se fait par des routes en lacets où un semi-remorque n'a rien à faire.",
    aot: "standard",
    contraintes: [{
      t: "Accès en pente et en lacets",
      d: "Les voies qui montent à Cimiez sont sinueuses et parfois étroites en virage. Le choix du gabarit du camion se décide en fonction de l'adresse exacte, pas du volume seul."
    }, {
      t: "Volumes supérieurs à la moyenne",
      d: "Grands appartements et villas : les volumes dépassent régulièrement ce qu'on rencontre en centre-ville. Cela change le nombre de déménageurs, la taille du camion, et parfois impose deux rotations."
    }, {
      t: "Mobilier ancien et objets de valeur",
      d: "Meubles anciens, tableaux, pièces fragiles : l'emballage compte autant que le transport. La valeur déclarée à l'assurance se discute avant, pas après."
    }, {
      t: "Immeubles Belle Époque",
      d: "Beaux volumes intérieurs, mais ascenseurs d'époque souvent trop petits pour un meuble monté. Le monte-meuble par la fenêtre est fréquemment la solution la plus sûre, et le recul disponible le permet généralement ici."
    }],
    methode: ["Estimation du volume sur place ou en visite vidéo : à Cimiez, l'écart entre le volume estimé au doigt mouillé et le volume réel est le principal facteur de mauvaise surprise.", "Choix du gabarit selon l'adresse et la pente, pas seulement selon le volume.", "Emballage renforcé du mobilier ancien et des œuvres, avec inventaire valorisé.", "Monte-meuble prévu au devis quand l'ascenseur ne permet pas de sortir les pièces principales."],
    faq: [{
      q: "Faut-il une autorisation de stationnement à Cimiez ?",
      a: "Oui, dès lors que vous occupez une place de stationnement sur la voie publique. La demande se fait auprès du service réservation stationnement de la Ville de Nice, au moins 5 jours ouvrés avant la date. Si vous devez occuper une voie de circulation ou un trottoir, le délai passe à 7 jours ouvrés et le service compétent n'est pas le même."
    }, {
      q: "Pourquoi un déménagement à Cimiez coûte-t-il souvent plus cher qu'ailleurs à Nice ?",
      a: "Rarement à cause du quartier lui-même, presque toujours à cause du volume. Les logements y sont plus grands, donc le camion est plus gros et l'équipe plus nombreuse. À volume égal, le prix reste comparable au reste de Nice."
    }, {
      q: "Comment sont protégés les meubles anciens ?",
      a: "Emballage individuel, protection des angles et des parties vernies, sanglage sans contact direct sur les bois fragiles, et inventaire valorisé pour l'assurance. Pour les pièces de grande valeur, la valeur déclarée est fixée avec vous avant le jour J."
    }],
    proches: ["carre-d-or", "liberation"]
  },
  "carre-d-or": {
    nom: "Le Carré d'Or",
    url: "Demenagement-Carre-d-Or-Nice",
    titre: "Déménagement Carré d'Or Nice — Immeubles bourgeois, monte-meuble",
    description: "Déménager dans le Carré d'Or à Nice : immeubles haussmanniens, ascenseurs anciens trop étroits, stationnement payant. La méthode et la démarche mairie.",
    accroche: "De beaux immeubles, de petits ascenseurs, et une circulation dense.",
    intro: "Le Carré d'Or, entre la place Masséna, la rue de France et la Promenade des Anglais, concentre les immeubles bourgeois les plus recherchés de Nice. Plafonds hauts, grandes pièces, parquets d'époque. Et, presque systématiquement, un ascenseur d'origine dans lequel une armoire ne rentre pas. C'est le quartier où le monte-meuble se justifie le plus souvent, et où le stationnement se prépare le plus sérieusement.",
    aot: "standard",
    contraintes: [{
      t: "Ascenseurs anciens sous-dimensionnés",
      d: "Cabines étroites, portes battantes, charge limitée. La plupart des meubles montés ne passent pas. Soit on démonte davantage, soit on sort par la fenêtre au monte-meuble."
    }, {
      t: "Stationnement payant et circulation dense",
      d: "Le quartier est en stationnement réglementé quasi partout. Occuper une place pour un déménagement suppose une autorisation demandée à l'avance, sans quoi l'amende tombe."
    }, {
      t: "Parquets et parties communes soignées",
      d: "Halls en marbre, parquets anciens, cages d'escalier ouvragées : la protection des sols et des parties communes n'est pas une option, c'est ce qui évite un litige avec le syndic."
    }, {
      t: "Façades et fenêtres",
      d: "Le monte-meuble s'appuie sur la façade et passe par la fenêtre ou le balcon. On vérifie l'ouverture disponible et le recul au sol avant de s'engager sur la méthode."
    }],
    methode: ["Relevé de l'ascenseur (dimensions cabine et porte) et des ouvertures avant le devis.", "Autorisation de stationnement demandée au moins 5 jours ouvrés avant, sur la place la plus proche possible de l'entrée.", "Protection systématique des parties communes : sols, rampes, angles de murs.", "Monte-meuble planifié dès le devis quand l'ascenseur ne permet pas les pièces principales."],
    faq: [{
      q: "Comment savoir si mes meubles passent dans l'ascenseur ?",
      a: "En mesurant la cabine, la porte et la hauteur sous plafond de la cabine, puis en les comparant aux dimensions de vos meubles une fois démontés. C'est ce relevé qui décide entre démontage renforcé et monte-meuble, et il se fait avant le devis, pas le jour J."
    }, {
      q: "Le monte-meuble abîme-t-il la façade ?",
      a: "Non lorsqu'il est correctement calé : l'appareil repose au sol sur des stabilisateurs, l'échelle s'appuie sans charge sur la façade et la plateforme reste à distance du balcon. Le point à vérifier est le recul disponible dans la rue, pas la solidité du mur."
    }, {
      q: "Faut-il prévenir le syndic ?",
      a: "C'est vivement conseillé, et parfois obligatoire selon le règlement de copropriété. Beaucoup d'immeubles du Carré d'Or imposent des créneaux horaires pour l'usage de l'ascenseur ou l'occupation du hall."
    }],
    proches: ["vieux-nice", "liberation"]
  },
  "liberation": {
    nom: "Libération",
    url: "Demenagement-Liberation-Nice",
    titre: "Déménagement Libération Nice — Marché, tramway, stationnement",
    description: "Déménager quartier Libération à Nice : contraintes du marché, passage du tramway et stationnement en voirie. La bonne démarche selon votre rue.",
    accroche: "Un quartier vivant, donc un quartier où l'horaire fait tout.",
    intro: "Libération est l'un des quartiers les plus animés de Nice, organisé autour de son marché et traversé par le tramway. C'est un excellent endroit où vivre et un endroit où un déménagement mal calé dans la journée peut devenir compliqué : le matin, l'activité du marché et les livraisons occupent la voirie ; la ligne de tramway impose de ne pas empiéter sur sa plateforme ; et le stationnement est disputé toute la journée.",
    aot: "standard",
    contraintes: [{
      t: "Activité du marché le matin",
      d: "Sur les rues concernées par le marché, les créneaux du matin sont les plus difficiles. On privilégie soit un démarrage très tôt, soit l'après-midi, selon l'adresse exacte."
    }, {
      t: "Plateforme du tramway",
      d: "Impossible d'occuper ou de traverser la plateforme du tramway avec du matériel. Le point de stationnement se choisit en conséquence, parfois plus loin de l'entrée que souhaité."
    }, {
      t: "Stationnement disputé",
      d: "La réservation de place est indispensable, pas facultative. Sans autorisation, il n'y a tout simplement pas d'emplacement libre le jour J."
    }, {
      t: "Immeubles de rapport",
      d: "Beaucoup d'immeubles de plusieurs étages sans ascenseur, ou avec un ascenseur de petite capacité. Le portage à l'étage est un poste de coût à anticiper."
    }],
    methode: ["Choix du créneau horaire en fonction de la rue et de l'activité du marché.", "Réservation de place obtenue au moins 5 jours ouvrés avant, en tenant compte de la plateforme du tramway.", "Évaluation précise du portage : nombre d'étages, présence et taille de l'ascenseur, distance entre le camion et la porte.", "Matériel de signalisation loué et posé conformément à la réglementation, qui n'est pas fourni par la Ville."],
    faq: [{
      q: "Peut-on déménager un jour de marché ?",
      a: "Oui, mais pas à n'importe quelle heure ni dans n'importe quelle rue. Selon l'adresse, on démarre très tôt avant l'installation, ou on bascule sur l'après-midi. C'est un point qu'on tranche à la visite, avant de fixer la date."
    }, {
      q: "Qui fournit les panneaux de stationnement réservé ?",
      a: "Pas la Ville. La signalisation réglementaire est à la charge du demandeur et doit être louée auprès d'un professionnel, puis posée conformément aux consignes. C'est inclus dans nos prestations."
    }, {
      q: "Combien de temps à l'avance faut-il s'y prendre ?",
      a: "Cinq jours ouvrés minimum pour une place de stationnement autorisée, sept jours ouvrés si l'occupation concerne une voie de circulation ou un trottoir. En pratique, on dépose la demande dès que la date est fixée."
    }],
    proches: ["cimiez", "riquier"]
  },
  "riquier": {
    nom: "Riquier",
    url: "Demenagement-Riquier-Nice",
    titre: "Déménagement Riquier Nice — Quartier dense, rues étroites",
    description: "Déménager à Riquier : quartier dense de l'est niçois, rues étroites, immeubles sans ascenseur. Contraintes réelles et démarche de stationnement.",
    accroche: "Le quartier populaire de l'est niçois, dense et pratique, à condition de bien caler l'accès.",
    intro: "Riquier, à l'est du port, est un quartier résidentiel dense et bien desservi. Les logements y sont souvent plus abordables qu'en centre-ville, ce qui en fait un point de chute fréquent pour les premiers emménagements et les familles. Les contraintes de déménagement y sont moins spectaculaires que dans le Vieux-Nice, mais bien réelles : rues étroites, immeubles anciens de plusieurs étages, et stationnement rare.",
    aot: "standard",
    contraintes: [{
      t: "Rues étroites et à sens unique",
      d: "Le gabarit du camion se choisit en fonction de la rue. Sur certains axes, un porteur standard passe difficilement et la manœuvre de stationnement demande de la place."
    }, {
      t: "Immeubles sans ascenseur",
      d: "Beaucoup d'immeubles anciens de trois à cinq étages sans ascenseur. Le portage devient le poste principal du chantier, et il se chiffre précisément."
    }, {
      t: "Stationnement rare",
      d: "Peu de places disponibles, très demandées. La réservation en amont est ce qui évite de porter les meubles sur cinquante mètres."
    }, {
      t: "Proximité du port et de la voie ferrée",
      d: "Certaines rues subissent des restrictions de circulation liées aux accès portuaires. L'adresse exacte détermine l'itinéraire du camion."
    }],
    methode: ["Repérage de la rue et choix du gabarit adapté avant de fixer le devis.", "Réservation d'emplacement au plus près de l'entrée, demandée au moins 5 jours ouvrés avant.", "Chiffrage explicite du portage : étages, ascenseur, distance de portage depuis le camion.", "Démontage des meubles volumineux quand la cage d'escalier ne permet pas le passage monté."],
    faq: [{
      q: "Le portage à l'étage coûte-t-il plus cher ?",
      a: "Oui, et c'est normal : c'est du temps et de la main-d'œuvre. Ce qui n'est pas normal, c'est de le découvrir le jour J. Chez nous, le nombre d'étages et la présence d'ascenseur sont dans le devis, et le prix ne bouge pas ensuite."
    }, {
      q: "Que faire si aucune place n'est libre devant chez moi ?",
      a: "C'est exactement ce que règle l'autorisation d'occupation temporaire : la Ville réserve l'emplacement, la signalisation est posée à l'avance, et la place est libre à votre arrivée. Sans cette démarche, on porte sur la distance disponible."
    }, {
      q: "Un monte-meuble est-il possible à Riquier ?",
      a: "Dans une partie du quartier oui, à condition d'avoir le recul nécessaire au sol pour déployer l'appareil. Dans les rues les plus étroites, on privilégie le démontage et le portage."
    }],
    proches: ["le-port", "liberation"]
  },
  "le-port": {
    nom: "Le Port",
    url: "Demenagement-Port-Nice",
    titre: "Déménagement quartier du Port à Nice — Accès et stationnement",
    description: "Déménager au Port de Nice : rues en pente, immeubles anciens, circulation contrainte autour du bassin. Contraintes concrètes et démarche mairie.",
    accroche: "Entre le bassin et la colline, un quartier magnifique et un accès à préparer.",
    intro: "Le quartier du Port a changé de visage : rénové, recherché, avec ses façades colorées autour du bassin Lympia. C'est aussi un secteur où la circulation est contrainte, où les rues montent vite dès qu'on s'écarte du quai, et où les immeubles anciens n'ont pas tous d'ascenseur. Un déménagement y demande surtout de choisir le bon point de stationnement, ce qui n'est jamais celui qu'on imagine depuis une carte.",
    aot: "hors",
    contraintes: [{
      t: "Circulation contrainte autour du bassin",
      d: "Les axes autour du port supportent un trafic dense et des restrictions selon les secteurs. L'itinéraire du camion se prépare, il ne s'improvise pas le matin même."
    }, {
      t: "Rues en pente dès qu'on s'écarte du quai",
      d: "Le portage en pente est plus lent et plus risqué. Le choix de l'emplacement de stationnement pèse davantage ici qu'ailleurs sur la durée du chantier."
    }, {
      t: "Immeubles anciens",
      d: "Cages d'escalier étroites, ascenseurs absents ou de petite taille. Le démontage est souvent nécessaire pour les pièces principales."
    }, {
      t: "Stationnement à obtenir sur voirie",
      d: "Selon la rue, l'occupation se fait sur une voie de circulation ou un trottoir plutôt que sur une place matérialisée, ce qui change le service compétent et allonge le délai à 7 jours ouvrés."
    }],
    methode: ["Repérage du point de stationnement réellement praticable, qui est rarement le plus proche à vol d'oiseau.", "Demande d'autorisation déposée au bon service selon la nature de l'occupation, 7 jours ouvrés avant si elle porte sur une voie ou un trottoir.", "Organisation du portage en tenant compte de la pente, avec des rotations plus courtes.", "Démontage anticipé des meubles qui ne passent pas dans les cages d'escalier anciennes."],
    faq: [{
      q: "Pourquoi le délai d'autorisation est-il parfois de 7 jours et non de 5 ?",
      a: "Parce que le délai dépend de ce que vous occupez. Cinq jours ouvrés pour une place de stationnement autorisée, sept jours ouvrés si l'occupation concerne une voie de circulation, un trottoir, ou un endroit sans stationnement autorisé. Ce sont deux services différents de la Ville."
    }, {
      q: "Le camion peut-il stationner sur le quai ?",
      a: "Cela dépend précisément de la section et des restrictions en vigueur. C'est un point qu'on vérifie au repérage, avant de déposer la demande, pour ne pas se retrouver avec une autorisation inutilisable."
    }, {
      q: "Combien de temps prend un déménagement au Port ?",
      a: "Comptez plus de temps qu'à volume égal en plaine, à cause de la pente et de la distance de portage. C'est intégré au devis : chez nous le prix est ferme, donc ce temps supplémentaire est chiffré avant, pas facturé après."
    }],
    proches: ["vieux-nice", "riquier"]
  }
};
function getQuartier(slug) {
  return QUARTIERS[slug] || QUARTIERS["vieux-nice"];
}
function listeQuartiers() {
  return Object.keys(QUARTIERS).map(k => Object.assign({
    slug: k
  }, QUARTIERS[k]));
}
Object.assign(window, {
  QUARTIERS,
  AOT,
  getQuartier,
  listeQuartiers
});
  try { Object.assign(window, { getQuartier, listeQuartiers }); } catch (e) {}
})();
