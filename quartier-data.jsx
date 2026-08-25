// quartier-data.jsx — Contenu des pages quartier de Nice.
//
// POURQUOI CES PAGES
// ------------------
// Les pages villes visent « déménagement Nice ». Ces pages-ci visent l'échelon en dessous :
// « déménagement Vieux-Nice », « déménagement Cimiez »… Des recherches moins nombreuses mais
// beaucoup plus qualifiées, et sur lesquelles aucun concurrent ne se positionne sérieusement.
//
// La valeur de ces pages tient à une chose : elles répondent à ce que personne d'autre
// n'explique, la contrainte réelle du terrain quartier par quartier, et la bonne démarche
// administrative selon le lieu.
//
// PROCÉDURE OFFICIELLE — source : nice.fr, « Demander un stationnement pour un déménagement ».
// Trois cas, trois services, trois délais différents. C'est LE point que tout le monde rate.
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
    titre: "Déménagement Vieux-Nice : zone piétonne · LBC",
    description: "Déménagement dans le Vieux-Nice : zone piétonne à bornes escamotables, ruelles sans accès camion, portage systématique. Devis ferme sous 24 h.",
    accroche: "Le quartier le plus contraignant de Nice, et celui où l'improvisation coûte le plus cher.",
    intro: "Déménager dans le Vieux-Nice ne ressemble à aucun autre déménagement niçois. Le quartier est en zone piétonne, l'accès des véhicules est filtré par des bornes escamotables, et une bonne partie des ruelles ne laisse tout simplement pas passer un camion de déménagement. Ajoutez des immeubles anciens, souvent sans ascenseur, avec des cages d'escalier en colimaçon dans lesquelles une armoire ne tourne pas, et vous comprenez pourquoi un déménagement mal préparé ici se termine en journée perdue.",
    aot: "pietonne",
    contraintes: [
      { t: "Zone piétonne à accès filtré", d: "L'entrée des véhicules est commandée par des bornes escamotables. Il ne suffit pas d'avoir l'autorisation : il faut aussi appeler le centre de sécurité le jour J pour faire abaisser la borne. Un camion qui se présente sans cette double démarche repart." },
      { t: "Ruelles trop étroites pour un porteur", d: "Sur une partie du quartier, le camion de déménagement ne passe pas, ou ne peut pas manœuvrer. On travaille alors en navette : un petit véhicule fait le lien entre le logement et le camion stationné à l'extérieur du périmètre." },
      { t: "Escaliers anciens, ascenseurs rares", d: "Cages étroites, marches usées, paliers exigus. Les meubles volumineux passent rarement par l'escalier : on démonte davantage qu'ailleurs, et le monte-meuble n'est pas toujours déployable faute de recul dans la rue." },
      { t: "Voisinage et horaires", d: "Rues commerçantes, terrasses, livraisons : les créneaux du matin tôt sont les plus praticables, avant l'installation des terrasses et l'afflux touristique." }
    ],
    methode: [
      "Visite technique préalable systématique : on mesure l'accès, la cage d'escalier et le point de stationnement possible.",
      "Demande d'autorisation en zone piétonne déposée au moins 7 jours ouvrés avant, auprès du service dédié.",
      "Organisation en navette quand la rue est inaccessible, avec un véhicule adapté au gabarit des ruelles.",
      "Démontage plus poussé qu'ailleurs, et protection renforcée des angles dans les escaliers étroits."
    ],
    faq: [
      { q: "Peut-on garer un camion de déménagement dans le Vieux-Nice ?", a: "Pas librement. Le quartier est en zone piétonne à accès contrôlé par bornes escamotables. Il faut une autorisation d'occupation temporaire délivrée par la Ville, demandée au moins 7 jours ouvrés à l'avance, et appeler le centre de sécurité le jour J pour faire abaisser la borne." },
      { q: "Que se passe-t-il si la rue est trop étroite pour le camion ?", a: "On organise le déménagement en navette : un véhicule de petit gabarit fait l'aller-retour entre votre logement et le camion stationné en périphérie du secteur piéton. C'est plus long, cela se prévoit au devis, mais c'est la seule méthode fiable dans certaines ruelles." },
      { q: "Le monte-meuble est-il utilisable dans le Vieux-Nice ?", a: "Parfois seulement. Un monte-meuble a besoin de recul au sol pour être déployé en sécurité, ce que beaucoup de ruelles n'offrent pas. C'est précisément ce qu'on vérifie lors de la visite technique avant de vous annoncer un prix." }
    ],
    proches: ["le-port", "carre-d-or"]
  },

  "cimiez": {
    nom: "Cimiez",
    url: "Demenagement-Cimiez-Nice",
    titre: "Déménagement Cimiez : colline et grands volumes · LBC",
    description: "Déménagement à Cimiez : immeubles bourgeois, ascenseurs anciens et étroits, villas des hauteurs. Démontage prévu au devis. Prix ferme sous 24 h.",
    accroche: "De grands volumes, de belles pièces, et une colline qui complique tout.",
    intro: "Cimiez, c'est la colline bourgeoise de Nice : anciens palaces Belle Époque reconvertis en appartements, villas sous les oliviers, grands appartements aux plafonds hauts. Sur le papier, tout est plus confortable qu'en centre-ville. Dans les faits, un déménagement à Cimiez pose trois problèmes différents : les volumes sont importants, le mobilier a souvent de la valeur, et l'accès se fait par des routes en lacets où un semi-remorque n'a rien à faire.",
    aot: "standard",
    contraintes: [
      { t: "Accès en pente et en lacets", d: "Les voies qui montent à Cimiez sont sinueuses et parfois étroites en virage. Le choix du gabarit du camion se décide en fonction de l'adresse exacte, pas du volume seul." },
      { t: "Volumes supérieurs à la moyenne", d: "Grands appartements et villas : les volumes dépassent régulièrement ce qu'on rencontre en centre-ville. Cela change le nombre de déménageurs, la taille du camion, et parfois impose deux rotations." },
      { t: "Mobilier ancien et objets de valeur", d: "Meubles anciens, tableaux, pièces fragiles : l'emballage compte autant que le transport. La valeur déclarée à l'assurance se discute avant, pas après." },
      { t: "Immeubles Belle Époque", d: "Beaux volumes intérieurs, mais ascenseurs d'époque souvent trop petits pour un meuble monté. Le monte-meuble par la fenêtre est fréquemment la solution la plus sûre, et le recul disponible le permet généralement ici." }
    ],
    methode: [
      "Estimation du volume sur place ou en visite vidéo : à Cimiez, l'écart entre le volume estimé au doigt mouillé et le volume réel est le principal facteur de mauvaise surprise.",
      "Choix du gabarit selon l'adresse et la pente, pas seulement selon le volume.",
      "Emballage renforcé du mobilier ancien et des œuvres, avec inventaire valorisé.",
      "Monte-meuble prévu au devis quand l'ascenseur ne permet pas de sortir les pièces principales."
    ],
    faq: [
      { q: "Faut-il une autorisation de stationnement à Cimiez ?", a: "Oui, dès lors que vous occupez une place de stationnement sur la voie publique. La demande se fait auprès du service réservation stationnement de la Ville de Nice, au moins 5 jours ouvrés avant la date. Si vous devez occuper une voie de circulation ou un trottoir, le délai passe à 7 jours ouvrés et le service compétent n'est pas le même." },
      { q: "Pourquoi un déménagement à Cimiez coûte-t-il souvent plus cher qu'ailleurs à Nice ?", a: "Rarement à cause du quartier lui-même, presque toujours à cause du volume. Les logements y sont plus grands, donc le camion est plus gros et l'équipe plus nombreuse. À volume égal, le prix reste comparable au reste de Nice." },
      { q: "Comment sont protégés les meubles anciens ?", a: "Emballage individuel, protection des angles et des parties vernies, sanglage sans contact direct sur les bois fragiles, et inventaire valorisé pour l'assurance. Pour les pièces de grande valeur, la valeur déclarée est fixée avec vous avant le jour J." }
    ],
    proches: ["carre-d-or", "liberation"]
  },

  "carre-d-or": {
    nom: "Le Carré d'Or",
    url: "Demenagement-Carre-d-Or-Nice",
    titre: "Déménagement Carré d'Or Nice : monte-meuble · LBC",
    description: "Déménager dans le Carré d'Or à Nice : immeubles haussmanniens, ascenseurs anciens trop étroits, stationnement payant. La méthode et la démarche mairie.",
    accroche: "De beaux immeubles, de petits ascenseurs, et une circulation dense.",
    intro: "Le Carré d'Or, entre la place Masséna, la rue de France et la Promenade des Anglais, concentre les immeubles bourgeois les plus recherchés de Nice. Plafonds hauts, grandes pièces, parquets d'époque. Et, presque systématiquement, un ascenseur d'origine dans lequel une armoire ne rentre pas. C'est le quartier où le monte-meuble se justifie le plus souvent, et où le stationnement se prépare le plus sérieusement.",
    aot: "standard",
    contraintes: [
      { t: "Ascenseurs anciens sous-dimensionnés", d: "Cabines étroites, portes battantes, charge limitée. La plupart des meubles montés ne passent pas. Soit on démonte davantage, soit on sort par la fenêtre au monte-meuble." },
      { t: "Stationnement payant et circulation dense", d: "Le quartier est en stationnement réglementé quasi partout. Occuper une place pour un déménagement suppose une autorisation demandée à l'avance, sans quoi l'amende tombe." },
      { t: "Parquets et parties communes soignées", d: "Halls en marbre, parquets anciens, cages d'escalier ouvragées : la protection des sols et des parties communes n'est pas une option, c'est ce qui évite un litige avec le syndic." },
      { t: "Façades et fenêtres", d: "Le monte-meuble s'appuie sur la façade et passe par la fenêtre ou le balcon. On vérifie l'ouverture disponible et le recul au sol avant de s'engager sur la méthode." }
    ],
    methode: [
      "Relevé de l'ascenseur (dimensions cabine et porte) et des ouvertures avant le devis.",
      "Autorisation de stationnement demandée au moins 5 jours ouvrés avant, sur la place la plus proche possible de l'entrée.",
      "Protection systématique des parties communes : sols, rampes, angles de murs.",
      "Monte-meuble planifié dès le devis quand l'ascenseur ne permet pas les pièces principales."
    ],
    faq: [
      { q: "Comment savoir si mes meubles passent dans l'ascenseur ?", a: "En mesurant la cabine, la porte et la hauteur sous plafond de la cabine, puis en les comparant aux dimensions de vos meubles une fois démontés. C'est ce relevé qui décide entre démontage renforcé et monte-meuble, et il se fait avant le devis, pas le jour J." },
      { q: "Le monte-meuble abîme-t-il la façade ?", a: "Non lorsqu'il est correctement calé : l'appareil repose au sol sur des stabilisateurs, l'échelle s'appuie sans charge sur la façade et la plateforme reste à distance du balcon. Le point à vérifier est le recul disponible dans la rue, pas la solidité du mur." },
      { q: "Faut-il prévenir le syndic ?", a: "C'est vivement conseillé, et parfois obligatoire selon le règlement de copropriété. Beaucoup d'immeubles du Carré d'Or imposent des créneaux horaires pour l'usage de l'ascenseur ou l'occupation du hall." }
    ],
    proches: ["vieux-nice", "liberation"]
  },

  "liberation": {
    nom: "Libération",
    url: "Demenagement-Liberation-Nice",
    titre: "Déménagement Libération Nice : marché et tram · LBC",
    description: "Déménager quartier Libération à Nice : contraintes du marché, passage du tramway et stationnement en voirie. La bonne démarche selon votre rue.",
    accroche: "Un quartier vivant, donc un quartier où l'horaire fait tout.",
    intro: "Libération est l'un des quartiers les plus animés de Nice, organisé autour de son marché et traversé par le tramway. C'est un excellent endroit où vivre et un endroit où un déménagement mal calé dans la journée peut devenir compliqué : le matin, l'activité du marché et les livraisons occupent la voirie ; la ligne de tramway impose de ne pas empiéter sur sa plateforme ; et le stationnement est disputé toute la journée.",
    aot: "standard",
    contraintes: [
      { t: "Activité du marché le matin", d: "Sur les rues concernées par le marché, les créneaux du matin sont les plus difficiles. On privilégie soit un démarrage très tôt, soit l'après-midi, selon l'adresse exacte." },
      { t: "Plateforme du tramway", d: "Impossible d'occuper ou de traverser la plateforme du tramway avec du matériel. Le point de stationnement se choisit en conséquence, parfois plus loin de l'entrée que souhaité." },
      { t: "Stationnement disputé", d: "La réservation de place est indispensable, pas facultative. Sans autorisation, il n'y a tout simplement pas d'emplacement libre le jour J." },
      { t: "Immeubles de rapport", d: "Beaucoup d'immeubles de plusieurs étages sans ascenseur, ou avec un ascenseur de petite capacité. Le portage à l'étage est un poste de coût à anticiper." }
    ],
    methode: [
      "Choix du créneau horaire en fonction de la rue et de l'activité du marché.",
      "Réservation de place obtenue au moins 5 jours ouvrés avant, en tenant compte de la plateforme du tramway.",
      "Évaluation précise du portage : nombre d'étages, présence et taille de l'ascenseur, distance entre le camion et la porte.",
      "Matériel de signalisation loué et posé conformément à la réglementation, qui n'est pas fourni par la Ville."
    ],
    faq: [
      { q: "Peut-on déménager un jour de marché ?", a: "Oui, mais pas à n'importe quelle heure ni dans n'importe quelle rue. Selon l'adresse, on démarre très tôt avant l'installation, ou on bascule sur l'après-midi. C'est un point qu'on tranche à la visite, avant de fixer la date." },
      { q: "Qui fournit les panneaux de stationnement réservé ?", a: "Pas la Ville. La signalisation réglementaire est à la charge du demandeur et doit être louée auprès d'un professionnel, puis posée conformément aux consignes. C'est inclus dans nos prestations." },
      { q: "Combien de temps à l'avance faut-il s'y prendre ?", a: "Cinq jours ouvrés minimum pour une place de stationnement autorisée, sept jours ouvrés si l'occupation concerne une voie de circulation ou un trottoir. En pratique, on dépose la demande dès que la date est fixée." }
    ],
    proches: ["cimiez", "riquier"]
  },

  /* MONT BORON, ajouté le 24 août 2026. C'est le quartier le plus rentable de Nice pour un
     déménageur — pentes fortes, immeubles sans ascenseur adapté, monte-meuble presque
     systématique, panier élevé — et il n'avait aucune page. */
  "mont-boron": {
    nom: "Mont Boron",
    url: "Demenagement-Mont-Boron-Nice",
    titre: "Déménagement Mont Boron Nice : pentes et monte-meuble · LBC",
    description: "Déménager au Mont Boron : routes en lacets, villas en surplomb, monte-meuble presque systématique. La méthode adaptée à chaque accès.",
    accroche: "Le quartier où le monte-meuble n'est pas une option, c'est la méthode.",
    intro: "Le Mont Boron domine la rade de Villefranche et le port de Nice depuis ses lacets. On y trouve des villas en surplomb, des résidences accrochées à la pente et quelques immeubles anciens dont la cage d'escalier n'a jamais été pensée pour un canapé d'angle. C'est le quartier niçois où la question de l'accès prime sur toutes les autres : la distance jusqu'au centre-ville est dérisoire, mais les dix derniers mètres décident de la journée. On y travaille régulièrement et on y arrive équipé, plutôt que d'improviser au pied de la façade.",
    aot: "renforce",
    contraintes: [
      { t: "Routes en lacets", d: "Le boulevard Maurice Maeterlinck et les chemins qui s'y greffent enchaînent les virages serrés. Le gabarit du camion se décide sur le dernier virage, pas sur la largeur de la voie principale." },
      { t: "Villas en surplomb", d: "Beaucoup de propriétés sont en contrebas ou au-dessus de la route, avec des escaliers extérieurs. Le monte-meuble depuis la chaussée est souvent la seule méthode raisonnable." },
      { t: "Stationnement sur voie étroite", d: "Une autorisation d'occupation est indispensable : un camion à l'arrêt sur ces routes bloque la circulation dans les deux sens, sans possibilité de contournement." },
      { t: "Immeubles anciens sans ascenseur adapté", d: "Cages d'escalier étroites et paliers exigus dans le bâti ancien : démontage des meubles larges, ou passage par la façade." }
    ],
    methode: [
      "Repérage de l'accès avant le devis : dernier virage, pente, hauteur de façade et point de pose du monte-meuble.",
      "Autorisation d'occupation de la voie demandée au moins 5 jours ouvrés avant, avec la signalisation réglementaire louée et posée.",
      "Monte-meuble prévu au devis quand la façade est exploitable, plutôt qu'ajouté en supplément le jour du déménagement.",
      "Équipe renforcée sur les villas en terrasses, postée par paliers plutôt qu'en aller-retour complet."
    ],
    faq: [
      { q: "Le monte-meuble est-il vraiment nécessaire au Mont Boron ?", a: "Souvent, oui. Entre les villas en surplomb et les cages d'escalier anciennes, c'est fréquemment la seule méthode sûre. Il figure alors au devis initial, jamais en supplément de dernière minute." },
      { q: "Un camion peut-il monter jusqu'à chez moi ?", a: "Cela dépend du dernier virage, pas de la route principale. On vient mesurer avant de chiffrer et on adapte le gabarit, quitte à faire deux voyages avec un véhicule plus maniable." },
      { q: "Faut-il une autorisation pour stationner ?", a: "Indispensable : sur ces voies étroites, un camion à l'arrêt bloque les deux sens. Comptez cinq jours ouvrés pour l'obtenir, et la signalisation est à louer." },
      { q: "Le prix est-il plus élevé qu'ailleurs à Nice ?", a: "À volume égal, oui : le monte-meuble, l'équipe renforcée et le temps d'accès se paient. Tout est chiffré à l'avance, et le prix annoncé reste le prix payé." }
    ],
    proches: ["le-port", "riquier"]
  },

  /* ⚠️ RIQUIER ET LIBÉRATION SE RESSEMBLAIENT À 53 %, mesuré sur le contenu en ligne le
     24 août 2026. Deux quartiers voisins décrits par les mêmes quatre contraintes — rues
     étroites, pas d'ascenseur, stationnement rare — donnent deux pages que Google traite
     en doublons, et il n'en garde alors qu'une : tout le travail sur la seconde est perdu.
     Riquier a pourtant ce que Libération n'a pas, et c'est ce que la page raconte
     désormais : le port de commerce, les ateliers d'artisans, les caves voûtées du bâti
     ouvrier et la gare de marchandises. Ce sont des déménagements différents, avec des
     objets différents. */
  "riquier": {
    nom: "Riquier",
    url: "Demenagement-Riquier-Nice",
    titre: "Déménagement Riquier Nice : caves et rues étroites · LBC",
    description: "Déménager à Riquier : ateliers d'artisans, caves voûtées, immeubles ouvriers sans ascenseur. Les contraintes réelles de l'est niçois.",
    accroche: "Le quartier où l'on déménage autant d'ateliers que d'appartements.",
    intro: "Riquier s'est construit autour du port de commerce et de la gare de marchandises, et cela se voit encore dans ce qu'on y déménage. À côté des appartements du bâti ouvrier, on y charge des ateliers d'artisans, des établis, des machines-outils, des stocks de matériaux. C'est le quartier de Nice où un déménagement pèse le plus lourd au mètre cube, et où la question n'est presque jamais le volume mais le poids et la forme des objets. Les caves voûtées du quartier, elles, réservent souvent la vraie surprise du chantier.",
    aot: "standard",
    contraintes: [
      { t: "Ateliers, établis et machines", d: "Objets lourds, encombrants et souvent à démonter : on prévoit le matériel de levage et l'équipe en conséquence, plutôt que de découvrir une machine de 300 kg le matin même." },
      { t: "Caves voûtées et sous-sols", d: "Le bâti ouvrier de Riquier cache des caves basses de plafond, à escalier tournant. Vider une cave y prend souvent plus longtemps que vider l'appartement au-dessus." },
      { t: "Rues à sens unique et gabarit", d: "Autour de l'avenue Denis Séméria et des rues du bas quartier, un porteur standard ne passe pas partout. Le gabarit se décide sur l'adresse, pas sur le quartier." },
      { t: "Accès portuaires réglementés", d: "Certaines voies proches du port subissent des restrictions horaires liées au trafic de marchandises : l'adresse exacte détermine le créneau possible." }
    ],
    methode: [
      "Inventaire spécifique des objets lourds : établi, machines, stock, avec leur poids et leurs points de préhension.",
      "Visite de la cave au moment du devis, systématiquement : c'est là que se cache le temps de chantier.",
      "Repérage de la rue et choix du gabarit avant de fixer le prix, en tenant compte des restrictions portuaires.",
      "Réservation d'emplacement au plus près de l'entrée, demandée au moins 5 jours ouvrés avant."
    ],
    faq: [
      { q: "Déménagez-vous un atelier d'artisan ?", a: "Oui, c'est courant à Riquier. Établis, machines-outils et stocks sont inventoriés avec leur poids, et le matériel de levage est prévu au devis." },
      { q: "Ma cave est basse et l'escalier tourne, c'est un problème ?", a: "C'est la contrainte classique du quartier. On la regarde au moment du devis : vider une cave voûtée prend souvent plus de temps que l'appartement." },
      { q: "Un camion peut-il accéder à ma rue ?", a: "Cela dépend de la rue, pas du quartier. Certaines voies du bas Riquier n'acceptent qu'un gabarit réduit, et on adapte." },
      { q: "Les restrictions du port peuvent-elles bloquer le déménagement ?", a: "Elles imposent surtout des créneaux. On vérifie l'adresse à l'avance et on cale l'horaire en conséquence." },
      { q: "Le poids des objets change-t-il le prix ?", a: "Il change le matériel et l'équipe nécessaires, donc oui. Tout est chiffré avant : le prix annoncé reste le prix payé." }
    ],
    proches: ["le-port", "mont-boron"]
  },

  "le-port": {
    nom: "Le Port",
    url: "Demenagement-Port-Nice",
    titre: "Déménagement quartier du Port à Nice · LBC",
    description: "Déménager au Port de Nice : rues en pente, immeubles anciens, circulation contrainte autour du bassin. Contraintes concrètes et démarche mairie.",
    accroche: "Entre le bassin et la colline, un quartier magnifique et un accès à préparer.",
    intro: "Le quartier du Port a changé de visage : rénové, recherché, avec ses façades colorées autour du bassin Lympia. C'est aussi un secteur où la circulation est contrainte, où les rues montent vite dès qu'on s'écarte du quai, et où les immeubles anciens n'ont pas tous d'ascenseur. Un déménagement y demande surtout de choisir le bon point de stationnement, ce qui n'est jamais celui qu'on imagine depuis une carte.",
    aot: "hors",
    contraintes: [
      { t: "Circulation contrainte autour du bassin", d: "Les axes autour du port supportent un trafic dense et des restrictions selon les secteurs. L'itinéraire du camion se prépare, il ne s'improvise pas le matin même." },
      { t: "Rues en pente dès qu'on s'écarte du quai", d: "Le portage en pente est plus lent et plus risqué. Le choix de l'emplacement de stationnement pèse davantage ici qu'ailleurs sur la durée du chantier." },
      { t: "Immeubles anciens", d: "Cages d'escalier étroites, ascenseurs absents ou de petite taille. Le démontage est souvent nécessaire pour les pièces principales." },
      { t: "Stationnement à obtenir sur voirie", d: "Selon la rue, l'occupation se fait sur une voie de circulation ou un trottoir plutôt que sur une place matérialisée, ce qui change le service compétent et allonge le délai à 7 jours ouvrés." }
    ],
    methode: [
      "Repérage du point de stationnement réellement praticable, qui est rarement le plus proche à vol d'oiseau.",
      "Demande d'autorisation déposée au bon service selon la nature de l'occupation, 7 jours ouvrés avant si elle porte sur une voie ou un trottoir.",
      "Organisation du portage en tenant compte de la pente, avec des rotations plus courtes.",
      "Démontage anticipé des meubles qui ne passent pas dans les cages d'escalier anciennes."
    ],
    faq: [
      { q: "Pourquoi le délai d'autorisation est-il parfois de 7 jours et non de 5 ?", a: "Parce que le délai dépend de ce que vous occupez. Cinq jours ouvrés pour une place de stationnement autorisée, sept jours ouvrés si l'occupation concerne une voie de circulation, un trottoir, ou un endroit sans stationnement autorisé. Ce sont deux services différents de la Ville." },
      { q: "Le camion peut-il stationner sur le quai ?", a: "Cela dépend précisément de la section et des restrictions en vigueur. C'est un point qu'on vérifie au repérage, avant de déposer la demande, pour ne pas se retrouver avec une autorisation inutilisable." },
      { q: "Combien de temps prend un déménagement au Port ?", a: "Comptez plus de temps qu'à volume égal en plaine, à cause de la pente et de la distance de portage. C'est intégré au devis : chez nous le prix est ferme, donc ce temps supplémentaire est chiffré avant, pas facturé après." }
    ],
    proches: ["vieux-nice", "riquier"]
  }
};

function getQuartier(slug) {
  /* Le slug voyage avec l'objet : sans lui, impossible de retrouver le contenu de
     fond dans QUARTIER_DETAIL, qui est indexe par slug. Le retenir ici evite que
     chaque appelant ait a le repasser en parametre. */
  const cle = QUARTIERS[slug] ? slug : "vieux-nice";
  return Object.assign({ slug: cle }, QUARTIERS[cle]);
}

function listeQuartiers() {
  return Object.keys(QUARTIERS).map((k) => Object.assign({ slug: k }, QUARTIERS[k]));
}



/* ══════════════════════════════════════════════════════════════════════════════
   QUARTIER_DETAIL — le contenu de fond, un territoire par quartier.

   POURQUOI CE BLOC EXISTE
   Les sept pages quartiers partageaient 28 % de leur contenu, le taux le plus haut
   du site et le seul au-dessus du seuil d'alerte. Elles disaient toutes la meme
   chose parce qu'elles etaient bornees aux memes champs : quatre contraintes,
   quatre etapes de methode, trois questions.

   REGLE D'ECRITURE
   Chaque quartier a un territoire, liste ci-dessous, et n'ecrit que sur le sien.
   Deux quartiers ne partagent jamais plus d'un sujet. Si une phrase pourrait etre
   recopiee telle quelle sur un autre quartier, elle n'a rien a faire ici.

     vieux-nice   rues pietonnes, horaires de livraison, absence d'ascenseur, portage
     carre-d-or   haussmannien, ascenseur ancien, monte-meuble, parquets
     cimiez       pente, immeuble de villegiature 1900, jardins, patrimoine
     liberation   marche, tramway, bati des annees 30 a 60, boulevard
     mont-boron   lacets, villas, gabarit du camion, gros volumes
     riquier      gare, faubourg populaire, rues etroites, sans ascenseur
     le-port      bassin Lympia, plaisance, pente vers le quai, restauration
   ══════════════════════════════════════════════════════════════════════════════ */

const QUARTIER_DETAIL = {

  "vieux-nice": {
    prep: "dans le Vieux-Nice",
    histoire: "Le Vieux-Nice s'est construit avant la voiture, et cela se voit encore chaque jour. Le tracé des rues remonte à l'époque où l'on circulait à pied et où les marchandises arrivaient à dos de mulet. Les immeubles ont été montés serrés, souvent surélevés d'un ou deux niveaux au fil des siècles, avec des escaliers qui n'ont jamais été prévus pour faire passer un canapé d'angle. Ce n'est pas un quartier difficile par accident : il est difficile par construction, et un déménageur qui découvre cela le jour J a déjà perdu sa journée.",
    bati: "L'immeuble typique du Vieux-Nice fait quatre à six niveaux sans ascenseur. La cage d'escalier est en colimaçon ou à volées courtes, avec un jour central trop étroit pour hisser quoi que ce soit à la corde. Les marches sont souvent en pierre, usées et creusées au milieu, ce qui rend le portage d'un objet lourd nettement moins sûr qu'il n'y paraît. Les paliers sont exigus et les portes d'appartement fréquemment plus basses que la norme actuelle : une armoire moderne de deux mètres dix ne franchit pas toujours l'huisserie. Les plafonds, en revanche, sont hauts, ce qui explique la présence de meubles anciens de grande taille qu'il faut démonter pour sortir.",
    acces: "La quasi-totalité du secteur est en zone piétonne réglementée. L'accès des véhicules utilitaires est possible mais encadré par des plages horaires, généralement le matin tôt, et les bornes escamotables commandent l'entrée de plusieurs axes. Concrètement, on ne se gare pas devant la porte : on obtient un créneau, on entre, on décharge, on ressort. Les rues du cœur historique font souvent moins de trois mètres de large utile, ce qui exclut le porteur de vingt mètres cubes. On travaille en navette avec un utilitaire de douze mètres cubes maximum, parfois moins.",
    stationnement: "L'autorisation de voirie ne suffit pas ici : il faut aussi que le créneau demandé tombe dans la plage d'accès autorisée au secteur piéton. Nous déposons la demande en amont, en précisant l'adresse exacte et la longueur de véhicule, et nous récupérons les arrêtés avant le jour J. Sans cet enchaînement, le camion attend à l'entrée de la zone pendant que le compteur tourne. Nous posons les panneaux la veille quand la réglementation l'exige, pour que l'emplacement soit libre à l'heure prévue.",
    jourJ: [
      { h: "7 h 00", t: "Arrivée en bordure de zone piétonne, transfert du matériel de protection à pied. Pose des protections de cage d'escalier et des angles de marches." },
      { h: "7 h 30", t: "Entrée de l'utilitaire sur le créneau autorisé. Chargement par rotations courtes, un équipier reste en permanence au véhicule." },
      { h: "11 h 00", t: "Sortie de la zone avant la fin de plage horaire. Regroupement dans le porteur stationné hors secteur." },
      { h: "14 h 00", t: "Livraison à l'adresse d'arrivée, remontage et calage. Dépose des protections et état des lieux des communs." }
    ],
    pieges: [
      { t: "Croire que la zone piétonne est un détail administratif", d: "C'est la contrainte qui commande tout le reste : le gabarit du véhicule, l'heure de début, le nombre de rotations et donc le prix. Un devis qui ne la mentionne pas n'a pas été fait sur place." },
      { t: "Compter sur l'escalier sans l'avoir mesuré", d: "Le jour central est presque toujours trop étroit pour hisser. Si un meuble ne passe pas par les volées, il ne passera pas du tout, et il faudra le démonter ou le laisser." },
      { t: "Oublier la hauteur des portes", d: "Les huisseries anciennes sont basses. Une armoire montée d'usine ne se démonte pas toujours : ça se vérifie avant, pas devant la porte." }
    ],
    cout: "Ce qui fait monter le prix dans le Vieux-Nice, ce n'est ni la distance ni le volume, c'est le nombre de rotations et les étages sans ascenseur. Un même trois-pièces coûte sensiblement plus cher ici que dans un immeuble récent avec parking, parce qu'il mobilise davantage d'équipiers pendant plus longtemps. Nous chiffrons ce surcoût dans le devis, une fois, et il ne bouge plus. Ce que nous ne faisons pas, c'est annoncer un tarif de plaine puis ajouter des suppléments d'étage le jour même.",
    faqPlus: [
      { q: "Peut-on déménager dans le Vieux-Nice sans autorisation ?", a: "Non, pas sérieusement. Même quand un stationnement semble libre, il n'est pas garanti à l'heure où vous en avez besoin, et l'accès à la zone piétonne reste soumis à des plages horaires. L'autorisation coûte peu et fait gagner des heures." },
      { q: "Que se passe-t-il si un meuble ne passe pas dans l'escalier ?", a: "Nous l'avons repéré au relevé, avant le devis, et nous avons prévu la solution : démontage, sortie par la fenêtre quand la rue le permet, ou remplacement de l'itinéraire. La mauvaise surprise le jour J vient toujours d'un devis fait au téléphone." },
      { q: "Le monte-meuble est-il utilisable ici ?", a: "Rarement. Il faut une emprise au sol devant la façade que les ruelles n'offrent presque jamais, et une autorisation d'occupation. Quand c'est possible nous le disons, sinon nous portons." },
      { q: "Combien de temps prévoir ?", a: "Comptez une journée entière pour un deux ou trois-pièces, contre une demi-journée dans un immeuble avec ascenseur et parking. La différence tient entièrement aux rotations et au portage." }
    ]
  },

  "carre-d-or": {
    prep: "au Carré d'Or",
    histoire: "Le Carré d'Or a été bâti d'un seul mouvement, entre la fin du dix-neuvième siècle et l'entre-deux-guerres, pour loger une clientèle aisée qui passait l'hiver à Nice. Les immeubles ont été conçus pour impressionner depuis la rue et pour être desservis par du personnel : escalier de service à l'arrière, ascenseur d'agrément installé plus tard dans la cage, souvent au chausse-pied. Cette logique d'origine explique la contrainte principale d'aujourd'hui, un ascenseur trop petit dans un immeuble par ailleurs cossu.",
    bati: "L'immeuble type compte cinq à sept niveaux, avec des plafonds de trois mètres et plus. La cage d'escalier est large et soignée, souvent en marbre ou en pierre claire, avec une rampe en fer forgé qui ne supporte aucun choc. L'ascenseur a fréquemment été ajouté dans le vide central : cabine étroite, portes battantes manuelles, charge limitée à deux ou trois personnes. Il accepte des cartons, rarement un meuble. Les appartements ont des parquets d'origine, parfois en point de Hongrie, et des moulures que le moindre coup de diable marque durablement.",
    acces: "Les rues du secteur sont larges mais la circulation y est dense toute la journée, et le stationnement en surface presque toujours saturé. La proximité de la Promenade des Anglais et de la place Masséna ajoute des flux touristiques qui ne s'interrompent pas. L'enjeu n'est pas de faire passer le camion, il passe : c'est de lui garantir une place devant l'entrée pendant plusieurs heures, ce qui ne s'improvise pas.",
    stationnement: "Nous demandons systématiquement un emplacement réservé sur la longueur nécessaire, y compris quand le client pense que « ça devrait aller ». Un porteur stationné en double file dans ce secteur bloque la rue en quelques minutes et finit déplacé. L'arrêté est affiché la veille par les panneaux réglementaires, ce qui laisse le temps aux véhicules garés de partir. C'est cette anticipation qui permet de commencer à l'heure annoncée.",
    jourJ: [
      { h: "8 h 00", t: "Mise en place de l'emplacement réservé, protection intégrale de la cage d'escalier, du sol et de la rampe." },
      { h: "8 h 30", t: "Montage du monte-meuble quand la façade et le trottoir le permettent, sinon organisation du portage par l'escalier." },
      { h: "12 h 00", t: "Sortie des volumineux par le monte-meuble, cartons et petits meubles par l'ascenseur en parallèle." },
      { h: "15 h 00", t: "Livraison, remontage, repose des protections retirées et vérification des communs avec le gardien." }
    ],
    pieges: [
      { t: "Se fier à l'ascenseur", d: "Une cabine de quatre-vingts centimètres de large avec portes battantes ne prend ni un canapé, ni un matelas en cent-soixante, ni une armoire. Elle sert aux cartons, et c'est déjà utile." },
      { t: "Négliger la protection des communs", d: "Marbre, moulures et rampe en fer forgé se rayent en une seconde et se réparent en semaines. Le syndic retient la caution, et il a raison." },
      { t: "Découvrir le monte-meuble le jour J", d: "Il exige une emprise sur le trottoir, une autorisation d'occupation du domaine public et un angle de pose compatible avec les balcons. Cela se prépare avant, pas devant l'immeuble." }
    ],
    cout: "Ici, le prix se joue sur le monte-meuble et sur la protection. Le monte-meuble représente une ligne identifiée dans le devis, et nous préférons l'annoncer que le découvrir. La protection des parties communes n'est pas une option facturée à part : elle fait partie du travail, parce qu'un immeuble du Carré d'Or ne se traverse pas comme un parking. Le devis intègre ces deux réalités dès le départ.",
    faqPlus: [
      { q: "Comment savoir si le monte-meuble est possible chez moi ?", a: "Il faut trois choses : une largeur de trottoir suffisante, une façade dégagée face à la fenêtre ou au balcon visé, et l'autorisation d'occupation. Nous vérifions les trois au relevé et nous vous le disons avant le devis." },
      { q: "Faut-il prévenir le syndic ?", a: "Oui, et nous le faisons volontiers avec vous. Beaucoup de règlements imposent un créneau, exigent la protection des communs et prévoient un état des lieux avant et après. Un syndic prévenu est un allié, un syndic surpris est un problème." },
      { q: "Mes parquets anciens risquent-ils quelque chose ?", a: "Pas si l'on travaille correctement. Chemins de protection sur tout le parcours, patins sous les pieds de meubles, aucun déplacement en glissant. Nous faisons l'état des lieux avec vous à l'arrivée comme au départ." },
      { q: "Le déménagement est-il plus long dans ce quartier ?", a: "Souvent oui, à cause de l'ascenseur inutilisable pour les volumineux. C'est précisément ce que le monte-meuble compense quand il est posable." }
    ]
  },

  "cimiez": {
    prep: "à Cimiez",
    histoire: "Cimiez est né du tourisme d'hiver de la Belle Époque, quand les grands hôtels de villégiature ont été construits sur la colline pour une clientèle qui fuyait les brumes du nord. Ces palaces ont été reconvertis en appartements dans la seconde moitié du vingtième siècle, souvent en découpant de très grands volumes. On y trouve donc aujourd'hui des logements atypiques dans des bâtiments qui n'ont jamais été pensés comme des immeubles d'habitation ordinaires, avec des circulations généreuses mais des accès véhicules restés modestes.",
    bati: "Le parc de Cimiez mélange d'anciens hôtels reconvertis, des immeubles de standing des années soixante et des villas avec jardin. Les appartements issus de reconversions ont des surfaces importantes, des plafonds très hauts et parfois des pièces en enfilade sans couloir de dégagement, ce qui complique la sortie des meubles longs. Les résidences des années soixante disposent d'ascenseurs corrects mais de halls étroits. Les villas, elles, posent la question de l'allée : longueur, pente et portail conditionnent tout le chantier.",
    acces: "La colline se monte, et c'est la donnée principale. Les voies qui desservent Cimiez sont en pente continue, avec des virages serrés et des portions où deux véhicules ne se croisent pas. Un porteur y monte, mais il faut avoir vérifié l'aire de retournement à l'arrivée, sans quoi la manœuvre de sortie devient un problème à elle seule. Les abords des musées et des arènes connaissent des pics de fréquentation qui rendent certains créneaux inutilisables.",
    stationnement: "Devant les résidences, l'espace disponible est souvent une contre-allée ou un renfoncement qui n'accueille pas un véhicule long. Nous mesurons l'emplacement réel au relevé, pas sur une vue aérienne, et nous demandons la réservation adaptée. Pour les villas, l'accès se joue au portail : largeur, hauteur libre sous les arbres et pente d'attaque déterminent si le camion entre ou si l'on fait la navette.",
    jourJ: [
      { h: "8 h 00", t: "Montée du porteur, positionnement et calage sur la pente. Repérage définitif de l'aire de manœuvre de sortie." },
      { h: "8 h 30", t: "Protection du hall et de l'ascenseur, ou du parcours extérieur pour les villas avec jardin." },
      { h: "12 h 00", t: "Traitement des volumes atypiques issus des grandes pièces : meubles longs, éléments démontés pièce par pièce." },
      { h: "15 h 00", t: "Livraison, remontage et vérification du calage avant redescente à vide." }
    ],
    pieges: [
      { t: "Sous-estimer la pente", d: "Charger et décharger sur une déclivité change la manutention et la sécurité. Un diable qui part tout seul dans une allée en pente, c'est un meuble détruit et parfois pire." },
      { t: "Oublier l'aire de retournement", d: "Monter est facile, redescendre en marche arrière sur trois cents mètres ne l'est pas. On vérifie la sortie avant d'engager le véhicule." },
      { t: "Traiter un ancien hôtel comme un immeuble ordinaire", d: "Les volumes reconvertis abritent des meubles hors norme, montés sur place et parfois impossibles à sortir en un seul morceau." }
    ],
    cout: "À Cimiez, le prix dépend surtout du volume réel, généralement plus élevé qu'ailleurs à surface égale, et de l'accessibilité du point de chargement. Une villa avec allée praticable coûte moins qu'un appartement de reconversion au troisième sans ascenseur adapté. Nous chiffrons après relevé sur place, parce qu'aucun formulaire en ligne ne devine la pente d'une allée ni la largeur d'un portail.",
    faqPlus: [
      { q: "Le camion peut-il monter jusqu'à ma villa ?", a: "Souvent oui, mais cela se vérifie : largeur du portail, hauteur libre sous la végétation, pente d'attaque et surtout possibilité de faire demi-tour. Quand ce n'est pas possible, nous organisons une navette en utilitaire." },
      { q: "J'ai des meubles très grands venus de l'ancien appartement, passeront-ils ?", a: "C'est la question typique de Cimiez. Nous mesurons les meubles et les ouvertures au relevé. Certains ont été montés sur place et devront être démontés, ce qui se prévoit et se chiffre à l'avance." },
      { q: "Y a-t-il des périodes à éviter ?", a: "Les abords des musées et des arènes sont chargés lors des événements. Nous consultons le calendrier avant de fixer la date, et nous décalons d'une journée plutôt que de perdre trois heures." },
      { q: "Mon jardin peut-il être abîmé ?", a: "Nous posons des plaques de répartition quand le sol est meuble et nous évitons de faire rouler un véhicule chargé sur une pelouse détrempée. Cela fait partie du repérage." }
    ]
  },

  "liberation": {
    prep: "à Libération",
    histoire: "Libération s'est développé autour de sa gare et de son marché, ce qui en a fait un quartier de vie plutôt qu'un quartier de villégiature. Le bâti s'est étoffé par vagues successives, des immeubles de rapport de l'entre-deux-guerres aux constructions des années cinquante et soixante. L'arrivée du tramway a redessiné la circulation de l'avenue et modifié durablement les conditions de stationnement. C'est un quartier où l'on déménage beaucoup, parce qu'on y entre et qu'on en sort au rythme des familles.",
    bati: "L'immeuble courant de Libération fait quatre à sept niveaux. Ceux d'avant-guerre ont des cages d'escalier correctes mais souvent aucun ascenseur, ou un ascenseur ajouté tardivement et de petite capacité. Les constructions des années cinquante et soixante offrent des ascenseurs plus fonctionnels et des halls plus larges, mais des paliers étroits et des portes standard. Les appartements sont majoritairement des deux et trois-pièces familiaux, avec des balcons qui servent souvent de réserve et qu'on oublie de vider avant le jour J.",
    acces: "L'avenue est structurée par la ligne de tramway, ce qui interdit l'arrêt sur une bonne partie du linéaire et déporte les possibilités de stationnement sur les rues adjacentes. Les jours de marché, la circulation et les emplacements disponibles changent complètement du matin au début d'après-midi. Un déménagement mal calé sur ce rythme perd deux heures avant d'avoir commencé.",
    stationnement: "Nous choisissons l'emplacement en fonction du jour de la semaine, pas seulement de l'adresse. Les rues perpendiculaires offrent des possibilités que l'avenue n'a plus, au prix de quelques mètres de portage supplémentaires qui sont largement rentables. La demande d'autorisation précise la rue de report quand l'adresse elle-même est inexploitable, ce qui évite de découvrir le problème sur place.",
    jourJ: [
      { h: "7 h 30", t: "Positionnement sur l'emplacement réservé, choisi hors de l'emprise du tramway et hors zone de marché." },
      { h: "8 h 00", t: "Protection des communs, vérification de l'ascenseur et de sa charge admissible." },
      { h: "11 h 30", t: "Chargement des volumineux avant le pic de circulation de la mi-journée." },
      { h: "14 h 30", t: "Livraison et remontage, avec évacuation du contenu des balcons trop souvent oublié." }
    ],
    pieges: [
      { t: "Ignorer le jour de marché", d: "Les conditions d'accès et de stationnement ne sont pas les mêmes le matin d'un jour de marché et un mardi après-midi. La date se choisit en connaissance de cause." },
      { t: "Oublier le balcon et la cave", d: "Ce sont les deux réserves du quartier. Elles ne figurent presque jamais dans l'estimation initiale et représentent parfois trois mètres cubes." },
      { t: "Croire que l'avenue est accessible", d: "L'emprise du tramway interdit l'arrêt sur une grande partie du linéaire. Le report en rue adjacente n'est pas un pis-aller, c'est la solution normale." }
    ],
    cout: "Libération est l'un des quartiers de Nice où le rapport volume-prix est le plus favorable, à condition d'avoir bien calé la date et l'emplacement. Le surcoût vient presque toujours de deux sources : un étage sans ascenseur et un volume sous-estimé parce que balcon et cave n'ont pas été comptés. Notre relevé les inclut systématiquement, ce qui explique que notre estimation soit parfois plus élevée au départ, et exacte à l'arrivée.",
    faqPlus: [
      { q: "Peut-on déménager un jour de marché ?", a: "Oui, mais en adaptant l'heure et l'emplacement. Nous préférons commencer tôt et charger avant l'affluence, ou décaler l'après-midi. Ce qui coûte cher, c'est de ne pas y avoir pensé." },
      { q: "Le tramway pose-t-il un problème ?", a: "Il interdit l'arrêt sur son emprise, donc il déplace le point de chargement, souvent de quelques dizaines de mètres. C'est une contrainte de portage, pas un obstacle." },
      { q: "Ma cave compte-t-elle dans le volume ?", a: "Oui, et c'est l'oubli numéro un du quartier. Une cave pleine représente couramment deux à trois mètres cubes, soit une différence réelle sur le devis et sur la durée." },
      { q: "Combien de temps pour un trois-pièces ?", a: "Une demi-journée à une journée selon l'étage et la présence d'un ascenseur. Sans ascenseur au quatrième, comptez la journée." }
    ]
  },

  "mont-boron": {
    prep: "au Mont Boron",
    histoire: "Mont Boron a été loti à flanc de colline pour la vue, et toute son organisation en découle. Les voies ont été tracées en lacets pour rattraper le dénivelé, les parcelles étagées les unes au-dessus des autres, et les maisons implantées le plus près possible du panorama, c'est-à-dire souvent le plus loin possible de la route. Ce qui fait la valeur du quartier fait aussi sa difficulté logistique : on y accède par des voies étroites et sinueuses, et l'on y termine fréquemment à pied.",
    bati: "Le quartier est dominé par les villas et les petites résidences de standing. Les surfaces sont importantes, les volumes à déménager souvent supérieurs à trente mètres cubes, avec du mobilier de qualité et parfois des pièces lourdes comme des pianos ou du mobilier de jardin en pierre. Beaucoup de maisons sont desservies par un escalier extérieur privatif entre le portail et la porte d'entrée, ce qui ajoute une manutention que personne ne compte spontanément.",
    acces: "Les voies de Mont Boron sont étroites, en pente et en lacets, avec des portions où le croisement est impossible. Un porteur de vingt mètres cubes y monte dans certains cas, mais pas partout, et la question décisive reste le demi-tour. Nous repérons l'itinéraire complet, montée et descente, avant d'engager quoi que ce soit. Quand le gabarit ne passe pas, nous travaillons en navette avec un utilitaire, ce qui allonge la journée et doit figurer au devis.",
    stationnement: "Il n'y a souvent rien à réserver au sens classique : la question n'est pas de trouver une place mais de disposer d'un point d'arrêt sûr sur une voie en pente, sans bloquer la circulation ni les riverains. Nous calons le véhicule, nous signalons, et nous limitons la durée d'immobilisation en organisant les rotations. Prévenir les voisins directs fait partie du travail et évite les tensions.",
    jourJ: [
      { h: "7 h 30", t: "Reconnaissance de l'itinéraire, montée du véhicule adapté au gabarit relevé, calage sur la pente." },
      { h: "8 h 00", t: "Mise en place du parcours entre le portail et la porte, protection de l'escalier extérieur." },
      { h: "12 h 00", t: "Traitement des pièces lourdes et volumineuses, à plusieurs équipiers, avec matériel de roulage adapté." },
      { h: "16 h 00", t: "Descente à vide par l'itinéraire repéré, sans manœuvre improvisée." }
    ],
    pieges: [
      { t: "Envoyer un porteur sans avoir vu la route", d: "Certaines voies ne se remontent pas et ne se redescendent pas en marche arrière. Un camion coincé dans un lacet mobilise une dépanneuse et fait perdre la journée." },
      { t: "Oublier l'escalier privatif", d: "Entre le portail et la porte, il y a parfois vingt marches. C'est une manutention entière que les devis rapides ignorent systématiquement." },
      { t: "Sous-estimer le volume", d: "Les maisons de Mont Boron dépassent souvent trente mètres cubes, garage et extérieur compris. Une estimation par téléphone se trompe presque toujours à la baisse." }
    ],
    cout: "Le prix à Mont Boron se construit sur trois éléments : le volume réel, le gabarit de véhicule que la voirie autorise, et la distance de portage entre le point d'arrêt et la porte. Ces trois éléments ne se devinent pas, ils se mesurent. C'est pourquoi nous nous déplaçons systématiquement avant de chiffrer, et pourquoi le prix annoncé après visite ne bouge plus.",
    faqPlus: [
      { q: "Un camion peut-il vraiment monter chez moi ?", a: "Cela dépend de la voie et de la possibilité de faire demi-tour. Nous faisons la reconnaissance avant le devis. Quand le porteur ne passe pas, la navette en utilitaire est la solution, et son coût est annoncé à l'avance." },
      { q: "J'ai un piano, est-ce un problème ?", a: "C'est une prestation spécifique, avec un matériel et un nombre d'équipiers adaptés. Elle se prépare et se chiffre séparément. Ce qu'il ne faut pas faire, c'est l'annoncer le matin même." },
      { q: "Le mobilier de jardin compte-t-il ?", a: "Oui, et il pèse lourd dans les deux sens du terme. Tables en pierre, bacs plantés et salons de teck représentent plusieurs mètres cubes que nous intégrons au relevé." },
      { q: "Faut-il prévenir les voisins ?", a: "Nous le recommandons et nous le faisons quand vous nous le demandez. Sur des voies où le croisement est impossible, une immobilisation non annoncée crée un conflit en dix minutes." }
    ]
  },

  "riquier": {
    prep: "à Riquier",
    histoire: "Riquier est un faubourg né autour de la gare et des activités qui l'accompagnaient, ateliers, entrepôts et logements ouvriers. Le bâti y est resté modeste et dense, avec des immeubles de rapport construits au plus près de la voie ferrée. Le quartier s'est transformé sans être reconstruit : on y trouve encore beaucoup d'immeubles anciens sans ascenseur, à côté d'opérations récentes. Cette juxtaposition fait que deux adresses distantes de cent mètres n'ont pas du tout les mêmes contraintes.",
    bati: "L'immeuble ancien de Riquier fait trois à cinq niveaux, sans ascenseur dans une large majorité des cas. Les cages d'escalier sont étroites, les paliers réduits, et les appartements souvent traversants avec des couloirs longs qui compliquent la sortie des meubles rigides. Les caves sont fréquentes et fréquemment pleines. Les constructions récentes du secteur offrent au contraire ascenseur et parking, ce qui change radicalement la durée du chantier.",
    acces: "Les rues sont étroites et le stationnement résidentiel très tendu, avec une pression supplémentaire liée à la proximité de la gare. Les axes principaux supportent un trafic de transit qui rend l'arrêt prolongé difficile aux heures de pointe. La marge de manœuvre se trouve tôt le matin, avant que le quartier ne se remplisse.",
    stationnement: "L'autorisation est ici particulièrement rentable, parce que la probabilité de trouver spontanément une place devant l'immeuble est faible. Nous demandons une longueur réservée suffisante et nous posons les panneaux la veille. Quand la rue est trop étroite pour immobiliser un porteur sans bloquer la circulation, nous prévoyons le report sur une rue voisine et nous en tenons compte dans le temps de portage.",
    jourJ: [
      { h: "7 h 00", t: "Prise de l'emplacement réservé avant l'arrivée du trafic de la gare." },
      { h: "7 h 30", t: "Protection de la cage d'escalier, souvent étroite, et repérage du passage des meubles longs dans le couloir." },
      { h: "11 h 00", t: "Descente des étages sans ascenseur, en rotations organisées pour limiter la fatigue et les chocs." },
      { h: "14 h 00", t: "Livraison, puis vidage de la cave si elle a été comptée au relevé." }
    ],
    pieges: [
      { t: "Confondre deux adresses voisines", d: "Un immeuble récent avec ascenseur et parking et un immeuble ancien au quatrième sans ascenseur ne se déménagent pas au même prix, même dans la même rue." },
      { t: "Laisser la cave pour la fin", d: "Elle est presque toujours plus pleine que prévu, et la traiter en dernier avec une équipe fatiguée est la meilleure façon de casser quelque chose." },
      { t: "Commencer trop tard", d: "La pression de stationnement monte avec la journée. Un départ à sept heures vaut deux heures gagnées sur un départ à neuf heures." }
    ],
    cout: "À Riquier, l'écart de prix entre deux logements de même surface tient à un seul facteur : l'étage et la présence d'un ascenseur. Un troisième sans ascenseur mobilise plus d'heures d'équipe qu'un cinquième avec ascenseur. Nous le disons clairement au devis plutôt que de l'ajouter après coup, et nous proposons souvent de commencer plus tôt pour réduire la durée totale.",
    faqPlus: [
      { q: "Mon immeuble n'a pas d'ascenseur, cela change-t-il beaucoup le prix ?", a: "Oui, c'est le premier facteur du quartier. Le nombre d'étages détermine directement le nombre d'heures d'équipe. Nous le chiffrons au relevé, une fois, et il n'y a pas de supplément le jour J." },
      { q: "Faut-il vraiment demander une autorisation ici ?", a: "Plus qu'ailleurs. Le stationnement résidentiel est saturé et la proximité de la gare ajoute du passage. Sans emplacement réservé, le camion tourne." },
      { q: "Ma cave est-elle incluse ?", a: "Uniquement si elle a été vue et mesurée au relevé. Nous la comptons systématiquement dans ce quartier, parce qu'elle y est presque toujours pleine." },
      { q: "Peut-on déménager en fin de journée ?", a: "C'est possible mais rarement optimal. Le trafic et la pression de stationnement sont au plus haut. Nous conseillons de commencer tôt." }
    ]
  },

  "le-port": {
    prep: "au Port",
    histoire: "Le quartier du port s'est organisé autour du bassin Lympia, creusé au dix-huitième siècle pour donner à Nice un abri qui lui manquait. Les immeubles qui l'entourent ont été construits face à l'eau, en gradins sur les pentes qui descendent vers le quai, avec des façades colorées devenues l'image du secteur. L'activité portuaire, la plaisance et la restauration cohabitent sur un espace contraint, et cette cohabitation détermine à quelle heure un déménagement peut commencer.",
    bati: "Les immeubles du pourtour du bassin sont anciens, de quatre à six niveaux, souvent sans ascenseur ou avec une cabine ajoutée de faible capacité. Les rez-de-chaussée sont fréquemment occupés par des commerces et des restaurants, ce qui signifie des livraisons, des terrasses et des horaires à respecter. Les appartements ont des vues recherchées et des accès étroits, la combinaison classique du front de mer historique.",
    acces: "Le pourtour du bassin supporte un trafic constant, auquel s'ajoutent les manœuvres liées à la plaisance et les rotations de livraison des restaurants. Les quais ne sont pas des zones de stationnement libre. Les rues qui montent depuis le port sont en pente et étroites, ce qui limite le gabarit. Le créneau utile se situe tôt le matin, avant l'ouverture des terrasses et les livraisons.",
    stationnement: "Nous demandons l'emplacement en tenant compte des terrasses et des zones de livraison existantes, qui ne se déplacent pas. Sur les quais, la réservation doit être précise et la durée maîtrisée. Dans les rues en pente qui desservent le quartier, le calage du véhicule et la sécurisation du parcours priment sur la proximité immédiate de la porte.",
    jourJ: [
      { h: "6 h 30", t: "Prise de position avant l'ouverture des commerces et les premières livraisons du quai." },
      { h: "7 h 00", t: "Protection du parcours et de la cage d'escalier, coordination avec les commerces du rez-de-chaussée si nécessaire." },
      { h: "10 h 30", t: "Fin du chargement des volumineux avant l'affluence de la mi-journée sur le pourtour du bassin." },
      { h: "14 h 00", t: "Livraison et remontage à l'adresse d'arrivée." }
    ],
    pieges: [
      { t: "Arriver après l'ouverture des terrasses", d: "L'espace disponible sur le pourtour se réduit fortement en milieu de matinée. Ce qui était faisable à sept heures ne l'est plus à dix." },
      { t: "Ignorer les livraisons des restaurants", d: "Elles occupent les mêmes espaces aux mêmes heures. Se coordonner évite d'attendre son tour pendant une heure." },
      { t: "Sous-estimer la pente des rues montantes", d: "Elles limitent le gabarit et imposent parfois la navette. Cela se vérifie au relevé, pas le matin même." }
    ],
    cout: "Le facteur de prix dominant au port est l'heure de départ. Un chantier engagé à six heures trente se déroule en continu, un chantier engagé à neuf heures subit l'affluence et s'allonge. À cela s'ajoutent les étages sans ascenseur, fréquents dans le bâti ancien du pourtour. Nous construisons le devis sur ces deux réalités, et nous proposons systématiquement le créneau matinal.",
    faqPlus: [
      { q: "Pourquoi commencer si tôt ?", a: "Parce que le pourtour du bassin se remplit vite : terrasses, livraisons et circulation. Une heure gagnée le matin en vaut deux en milieu de journée." },
      { q: "Peut-on stationner sur le quai ?", a: "Pas librement. Cela se demande, avec une durée précise, et cela s'organise autour des zones de livraison existantes qui, elles, ne bougent pas." },
      { q: "J'habite dans une rue qui monte depuis le port, est-ce un problème ?", a: "C'est une contrainte de gabarit. Selon la largeur, nous montons avec le porteur ou nous organisons une navette. Le repérage tranche, pas l'estimation à distance." },
      { q: "Le commerce en bas de mon immeuble peut-il bloquer le déménagement ?", a: "Rarement, si l'on se coordonne. Nous prévenons les commerces concernés en amont, ce qui règle la question avant qu'elle ne se pose." }
    ]
  }
};

Object.assign(window, { QUARTIERS, QUARTIER_DETAIL, AOT, getQuartier, listeQuartiers });
