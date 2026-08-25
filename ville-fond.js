/* ville-fond.jsx — compilé par build.js, ne pas éditer */
(function () {
const VILLE_FOND = {
  "saint-laurent-du-var": {
    titreContexte: ["Une commune coupée en deux", "par la voie rapide et le fleuve."],
    titreJour: ["Une journée à Saint-Laurent,", "entre zone commerciale et pavillons."],
    titreErreurs: ["Ce qui transforme un déménagement simple", "en journée compliquée."],
    contexte: "Saint-Laurent-du-Var est l'une des rares communes de la Côte où l'on déménage sans grande difficulté topographique. Pas de village perché, pas de corniche, pas de ruelle médiévale. Sa difficulté est ailleurs : la commune est traversée par des axes très circulants, structurée par l'une des plus grandes zones commerciales de la région, et son parc de logements va du pavillon des années soixante à la résidence récente avec parking. Le devis se joue sur l'accès et sur le trafic, pas sur le relief.",
    sections: [{
      t: "Une zone commerciale qui dicte les horaires",
      d: "La concentration de commerces autour de Cap 3000 et des axes qui la desservent génère un trafic considérable, avec des pointes en fin de semaine et en période de soldes ou de fêtes. Un déménagement engagé un samedi après-midi dans ce secteur avance au pas. Nous préférons systématiquement les créneaux de début de matinée en semaine, et nous vous le disons franchement quand la date que vous proposez va coûter deux heures de circulation. Pour les transferts de commerces eux-mêmes, l'intervention se cale hors heures d'ouverture, avec un accès livraison négocié avec la galerie ou le bailleur."
    }, {
      t: "Les axes, la vraie contrainte locale",
      d: "La commune est coupée par des voies rapides et bordée par le fleuve, ce qui limite le nombre de franchissements possibles. Un itinéraire mal choisi peut ajouter vingt minutes à chaque rotation, et il y en a plusieurs dans une journée. Nous repérons l'itinéraire d'approche et de sortie avant le chantier, en tenant compte de la hauteur sous les ouvrages, qui interdit certains passages aux porteurs. Le trajet le plus court sur une carte n'est presque jamais le plus rapide ici."
    }, {
      t: "Un parc de logements très hétérogène",
      d: "On trouve à Saint-Laurent des pavillons individuels des années soixante et soixante-dix, des immeubles collectifs de la même époque souvent sans ascenseur ou avec un ascenseur d'origine, et des résidences récentes avec parking souterrain. Ces trois cas n'ont ni le même accès, ni le même temps de chargement, ni le même prix. Le parking souterrain notamment impose une hauteur limitée qui exclut le porteur et oblige à charger à l'extérieur, ce que beaucoup de devis à distance oublient de prévoir."
    }, {
      t: "Le stockage, souvent nécessaire ici",
      d: "Beaucoup de nos clients laurentins passent d'un pavillon à un appartement, ou l'inverse, avec un décalage de dates. Nous proposons un garde-meuble relais : le mobilier est chargé, inventorié, stocké en caisses scellées, puis livré à la date de votre choix. Le volume reste dans les mêmes contenants du départ à l'arrivée, ce qui évite de payer deux manutentions complètes et limite les risques de casse liés aux manipulations supplémentaires."
    }],
    jour: [{
      h: "7 h 00",
      t: "Approche par l'itinéraire repéré, avant la montée du trafic sur les axes principaux."
    }, {
      h: "7 h 30",
      t: "Positionnement du véhicule, à l'extérieur si le parking souterrain limite la hauteur."
    }, {
      h: "11 h 30",
      t: "Chargement terminé avant les pointes de circulation de la mi-journée."
    }, {
      h: "14 h 00",
      t: "Livraison, ou mise en garde-meuble relais si les dates ne se recouvrent pas."
    }],
    erreurs: [{
      t: "Déménager un samedi près de la zone commerciale",
      d: "Le trafic y transforme chaque rotation en épreuve. Un mardi matin coûte moins cher et se termine plus tôt, à prestation identique."
    }, {
      t: "Compter sur le parking souterrain",
      d: "La hauteur libre y exclut presque toujours le porteur. Le chargement se fait dehors, avec une distance de portage qui doit figurer au devis."
    }, {
      t: "Choisir l'itinéraire le plus court",
      d: "Les franchissements sont peu nombreux et les hauteurs sous ouvrage limitées. Le trajet se repère avant, sinon chaque rotation perd vingt minutes."
    }]
  },
  "cagnes-sur-mer": {
    titreContexte: ["Trois communes en une,", "et trois façons de déménager."],
    titreJour: ["Une journée cagnoise,", "de la plage au village médiéval."],
    titreErreurs: ["Les trois pièges", "d'une commune à trois visages."],
    contexte: "Cagnes-sur-Mer n'est pas une ville, c'est trois. Le bord de mer et le Cros-de-Cagnes, denses et plats. Le centre, résidentiel et commerçant. Et le Haut-de-Cagnes, village médiéval perché, ceint de ruelles où aucun camion n'entre. Donner un prix sans savoir laquelle des trois est concernée n'a aucun sens, et pourtant c'est ce que font la plupart des devis obtenus en ligne.",
    sections: [{
      t: "Le Haut-de-Cagnes, où le camion reste en bas",
      d: "Le village médiéval s'organise autour de calades, de passages voûtés et d'escaliers. Les rues y sont souvent trop étroites pour un véhicule utilitaire, et certaines sections sont purement piétonnes. Le principe est simple : on stationne au plus près sur les emplacements praticables, et le reste se fait à la main ou avec du matériel de roulage adapté aux pavés. Le portage se compte en marches et en dénivelé, pas en mètres. C'est ce paramètre, et lui seul, qui détermine le nombre d'équipiers et la durée de la journée."
    }, {
      t: "Un patrimoine qui impose ses règles",
      d: "Le château et les abords du vieux village relèvent d'un cadre protégé, avec des contraintes sur ce qu'on peut installer et où. Un monte-meuble n'est pas posable partout, et l'emprise au sol devant une façade ancienne se demande. Nous vérifions ces points au relevé plutôt que de le découvrir sur place. Le bâti lui-même impose sa prudence : murs anciens, encadrements de pierre, marches usées. Une protection systématique des angles et des seuils fait partie du travail, pas des options."
    }, {
      t: "Le gabarit, question numéro un",
      d: "Entre le bord de mer accessible à un porteur de vingt mètres cubes et les ruelles du Haut-de-Cagnes où passe à peine un petit utilitaire, l'écart de méthode est total. Nous mesurons la largeur utile, la hauteur des passages voûtés et l'aire de retournement avant de choisir le véhicule. Quand le porteur ne monte pas, nous organisons une navette, et son coût figure au devis dès le départ. Envoyer un camion trop grand n'est pas une erreur d'appréciation, c'est une journée perdue."
    }, {
      t: "Les rotations de location saisonnière",
      d: "Le bord de mer cagnois compte beaucoup de logements loués à la saison. Entre deux locataires, il faut parfois vider, stocker et réinstaller dans une fenêtre courte. Nous étiquetons par pièce, nous conservons l'inventaire d'un passage à l'autre, et nous replaçons le mobilier à l'identique. C'est un travail répétitif où la mémoire du chantier précédent fait gagner un temps considérable, à condition de l'avoir consignée."
    }],
    jour: [{
      h: "7 h 30",
      t: "Choix du véhicule selon le secteur relevé, porteur en bas de ville, utilitaire pour le village."
    }, {
      h: "8 h 00",
      t: "Protection des seuils et des encadrements anciens si l'adresse est dans le vieux village."
    }, {
      h: "11 h 00",
      t: "Rotations à la main sur les calades, avec matériel de roulage adapté aux pavés."
    }, {
      h: "14 h 30",
      t: "Livraison et remontage, ou mise en garde-meuble entre deux locations."
    }],
    erreurs: [{
      t: "Demander un prix sans dire quel Cagnes",
      d: "Bord de mer, centre et Haut-de-Cagnes n'ont rien en commun. Le même volume peut varier du simple au double selon le secteur."
    }, {
      t: "Croire qu'un utilitaire monte partout",
      d: "Certaines ruelles du village sont piétonnes et d'autres trop étroites. Le relevé tranche, l'estimation à distance se trompe."
    }, {
      t: "Négliger la protection du bâti ancien",
      d: "Encadrements de pierre et marches usées ne se réparent pas. La protection systématique coûte quelques minutes, son absence coûte un litige."
    }]
  },
  "grasse": {
    titreContexte: ["La ville des parfums", "et son centre médiéval vertical."],
    titreJour: ["Une journée grassoise,", "entre vieille ville et quartiers étalés."],
    titreErreurs: ["Ce qu'on découvre trop tard", "dans une ville en escalier."],
    contexte: "Grasse est une ville haute, construite en amphithéâtre sur son versant, avec un centre médiéval extrêmement dense et des quartiers résidentiels étalés sur plusieurs kilomètres autour. Le contraste est brutal : on peut y déménager une villa avec allée privée le matin et un troisième étage sans ascenseur au bout d'une ruelle en pente l'après-midi. Le mot Grasse sur un devis ne dit donc rien tant qu'on n'a pas l'adresse exacte.",
    sections: [{
      t: "Le centre ancien, dense et vertical",
      d: "La vieille ville de Grasse est un tissu médiéval serré, avec des rues en pente, des escaliers et des immeubles hauts sans ascenseur. Beaucoup d'adresses ne sont pas accessibles en véhicule, ou seulement par un utilitaire de petit gabarit sur un créneau horaire. Le portage y est la norme et se compte en volées de marches. Nous relevons le parcours complet avant le devis, du point de stationnement possible jusqu'à la porte, parce que c'est ce parcours qui fixe la durée et donc le prix. Aucun formulaire en ligne ne peut deviner soixante marches."
    }, {
      t: "Un patrimoine bâti à protéger",
      d: "Le centre historique comporte du bâti ancien et des secteurs protégés, avec les contraintes qui vont avec : ce qu'on peut installer sur la voie publique, où l'on peut poser un monte-meuble, comment on protège un seuil ou un encadrement. Nous vérifions ces points en amont. Les cages d'escalier anciennes demandent par ailleurs une protection soignée : rampes, murs, marches. Ce n'est pas du zèle, c'est ce qui évite une retenue sur caution ou un litige avec le propriétaire."
    }, {
      t: "Les commerces et l'activité du parfum",
      d: "Grasse vit de son industrie et de son commerce, et nous intervenons régulièrement pour des boutiques, des ateliers et des locaux professionnels du secteur. L'enjeu est toujours le même : limiter la fermeture. Nous chargeons le stock d'abord, l'agencement ensuite, et nous intervenons hors heures d'ouverture quand la rue le permet. Pour les locaux qui manipulent des produits sensibles, nous adaptons le conditionnement et l'ordre de chargement aux consignes que vous nous donnez."
    }, {
      t: "Un parc immobilier très contrasté",
      d: "Entre les immeubles anciens du centre, les résidences des années soixante-dix des quartiers intermédiaires et les villas des hauteurs, Grasse offre presque tous les cas de figure. Chacun a sa contrainte dominante : l'escalier pour le centre, l'ascenseur d'origine pour les résidences, l'allée et le portail pour les villas. Nous nous déplaçons systématiquement avant de chiffrer, parce qu'une même surface peut demander trois équipiers ou six selon l'adresse."
    }],
    jour: [{
      h: "7 h 30",
      t: "Positionnement au plus près du point de portage, souvent hors du centre ancien."
    }, {
      h: "8 h 00",
      t: "Protection de la cage d'escalier, des rampes et des seuils dans le bâti ancien."
    }, {
      h: "11 h 30",
      t: "Rotations organisées pour limiter la fatigue sur les volées de marches."
    }, {
      h: "14 h 30",
      t: "Livraison et remontage, état des lieux des parties communes aux deux adresses."
    }],
    erreurs: [{
      t: "Donner une adresse sans préciser l'étage",
      d: "Dans le centre grassois, l'étage sans ascenseur est le premier facteur de durée, bien avant le volume. C'est ce qui fait varier le devis du simple au double."
    }, {
      t: "Croire que le camion s'approche",
      d: "Beaucoup de ruelles du centre sont inaccessibles ou soumises à créneau. Le point de stationnement réel se repère avant, pas le matin même."
    }, {
      t: "Oublier la cave ou le grenier",
      d: "Le bâti ancien grassois en comporte souvent, et ils sont rarement vides. Non comptés au relevé, ils ajoutent des heures imprévues."
    }]
  },
  "le-cannet": {
    titreContexte: ["Un balcon au-dessus de Cannes,", "et tout se joue sur la pente."],
    titreJour: ["Une journée au Cannet,", "d'un niveau à l'autre."],
    titreErreurs: ["Trois oublis fréquents", "sur une commune étagée."],
    contexte: "Le Cannet occupe le versant qui domine Cannes, et cette position commande tout. La commune s'étage du bas, presque continu avec Cannes, jusqu'aux hauteurs résidentielles et au vieux village. On y déménage rarement à plat : il y a presque toujours une pente, un escalier extérieur ou un accès en contrebas, et c'est cela qu'un devis sérieux doit avoir mesuré.",
    sections: [{
      t: "Des copropriétés nombreuses et réglementées",
      d: "Le parc cannettan est largement collectif, avec beaucoup de résidences des années soixante à quatre-vingt-dix disposant d'un règlement précis. Réservation d'ascenseur, créneau horaire, protection des parties communes et attestation d'assurance sont demandées presque systématiquement. Nous contactons le syndic ou le gardien dès l'acceptation du devis et nous fournissons les pièces sans attendre qu'on nous les réclame. C'est la différence entre une équipe qui commence à huit heures et une équipe qui attend dans la rue."
    }, {
      t: "Un parc immobilier de plusieurs époques",
      d: "On trouve au Cannet des immeubles anciens dans le vieux village, un parc collectif abondant des décennies soixante à quatre-vingt-dix, et des résidences récentes. Les ascenseurs d'origine des immeubles les plus anciens sont souvent trop petits pour un canapé ou une armoire montée : ils servent aux cartons, pas au mobilier. Nous mesurons la cabine et la porte au relevé, et nous décidons alors entre portage et monte-meuble, plutôt que de l'improviser."
    }, {
      t: "Accompagner les départs en résidence",
      d: "Une part significative de nos interventions cannettanes concerne des personnes âgées quittant un appartement occupé longtemps pour une structure adaptée, avec une réduction de surface importante. Ce travail se fait au rythme de la personne, avec le tri qu'il suppose et souvent la famille au téléphone. Ce qui ne rentre pas est stocké, donné ou évacué selon votre décision. Nous ne bousculons pas ces chantiers, et nous prévoyons le temps qu'ils demandent réellement."
    }, {
      t: "Le gabarit sur des voies en pente",
      d: "Les rues qui montent vers le vieux village et les hauteurs sont étroites, sinueuses, et le stationnement y est difficile. Un porteur ne monte pas partout, et surtout ne redescend pas partout. Nous repérons l'itinéraire complet, y compris la sortie, et nous calons le véhicule sur la déclivité. Quand le gabarit ne passe pas, la navette en utilitaire est la solution, et son surcoût est annoncé au devis, jamais ajouté après."
    }],
    jour: [{
      h: "8 h 00",
      t: "Présentation au gardien, activation de la réservation d'ascenseur, remise de l'attestation d'assurance."
    }, {
      h: "8 h 30",
      t: "Protection des parties communes et de la cabine d'ascenseur, état des lieux d'entrée."
    }, {
      h: "12 h 00",
      t: "Portage ou monte-meuble pour les volumineux, selon la mesure faite au relevé."
    }, {
      h: "15 h 00",
      t: "Livraison, remontage et vérification des communs avec le gardien avant départ."
    }],
    erreurs: [{
      t: "Se fier à l'ascenseur sans l'avoir mesuré",
      d: "Les cabines d'origine acceptent les cartons et refusent le mobilier. Le découvrir le matin ajoute une demi-journée de portage non prévue."
    }, {
      t: "Oublier de prévenir le syndic",
      d: "Créneau imposé, attestation à fournir, communs à protéger. Trois exigences qui se règlent en amont ou bloquent l'accès."
    }, {
      t: "Ignorer la pente à la sortie",
      d: "Monter est simple, redescendre chargé sur une voie étroite ne l'est pas. L'itinéraire de sortie se repère au même titre que celui d'approche."
    }]
  },
  "villeneuve-loubet": {
    titreContexte: ["Une marina, un village, des collines,", "et trois logiques d'accès."],
    titreJour: ["Une journée à Villeneuve-Loubet,", "entre résidence fermée et village."],
    titreErreurs: ["Ce qui bloque un camion", "devant une résidence fermée."],
    contexte: "Villeneuve-Loubet réunit sur un même territoire une marina emblématique, un village perché autour de son château, et des quartiers de collines pavillonnaires. Trois mondes, trois modes d'accès, et une constante : la plupart des adresses de bord de mer se trouvent dans des ensembles fermés dont l'accès se prépare avant le jour J, jamais devant le portail.",
    sections: [{
      t: "Les grands ensembles du bord de mer",
      d: "La Marina Baie des Anges et les résidences voisines forment des ensembles fermés avec gardien, parkings dédiés et circulations internes. On n'y accède pas librement : il faut un créneau, parfois un badge, et la connaissance du cheminement interne jusqu'à l'entrée de l'immeuble concerné. Nous prenons contact avec le gardien ou la régie dès l'acceptation du devis pour obtenir ces éléments. La distance entre le point de stationnement autorisé et la porte peut atteindre plusieurs dizaines de mètres, ce qui doit figurer au devis, sous peine d'une mauvaise surprise pour tout le monde."
    }, {
      t: "Le syndic, interlocuteur incontournable",
      d: "Dans ces copropriétés, le règlement encadre précisément les déménagements : jours et heures autorisés, protection des parties communes, ascenseur à réserver, parfois dépôt de garantie. Un état des lieux des communs avant et après est fréquemment demandé. Nous fournissons attestation d'assurance et liste des équipiers sans qu'on ait à les réclamer, et nous réalisons l'état des lieux contradictoire. C'est ce qui protège votre caution autant que notre réputation."
    }, {
      t: "Le port et les logements de plaisance",
      d: "La proximité du port amène une clientèle spécifique, avec des logements souvent compacts, des calendriers dictés par les contrats et parfois du mobilier ou du matériel de bateau à transporter. L'accès aux zones portuaires est réglementé et se prépare la veille. Ces chantiers sont généralement de faible volume mais de forte contrainte horaire, et ils demandent une équipe qui ne découvre pas les lieux le matin même."
    }, {
      t: "La saison, qui change tout au bord de mer",
      d: "L'été, les axes littoraux et les abords des résidences de bord de mer sont saturés, et les créneaux d'accès autorisés se réduisent. Un déménagement estival n'est pas impossible, il est plus lent, et cela doit se voir au planning. Nous vous indiquons les périodes où le même chantier prendra une heure de plus, et nous proposons systématiquement un départ matinal, seul moyen fiable de tenir la journée annoncée."
    }],
    jour: [{
      h: "7 h 30",
      t: "Présentation au gardien avec la liste des équipiers transmise la veille, récupération du badge d'accès."
    }, {
      h: "8 h 00",
      t: "État des lieux contradictoire des parties communes, réservation d'ascenseur activée, protections posées."
    }, {
      h: "11 h 30",
      t: "Chargement avec portage sur la circulation interne jusqu'au point de stationnement autorisé."
    }, {
      h: "14 h 30",
      t: "Livraison, remontage, état des lieux de sortie signé avec le gardien."
    }],
    erreurs: [{
      t: "Arriver sans avoir prévenu le gardien",
      d: "Dans un ensemble fermé, l'accès sans créneau validé est refusé. Le camion attend, et la journée se termine avant d'avoir commencé."
    }, {
      t: "Sous-estimer la distance de portage interne",
      d: "Entre le stationnement autorisé et la porte, il y a parfois cinquante mètres et deux circulations. Cela se mesure au relevé et se chiffre."
    }, {
      t: "Déménager en plein été sans le prévoir",
      d: "Les accès se restreignent et les axes saturent. Ce n'est pas rédhibitoire, mais un départ à sept heures trente devient indispensable."
    }]
  },
  "monaco": {
    titreContexte: ["Deux kilomètres carrés", "qui ne se traversent pas comme une ville."],
    titreJour: ["Une journée en Principauté,", "de la conciergerie à la frontière."],
    titreErreurs: ["Ce qui bloque un déménagement", "monégasque avant même qu'il commence."],
    contexte: "Déménager à Monaco n'est pas déménager dans une ville de plus. La Principauté est un État souverain de deux kilomètres carrés, bâti en hauteur sur une pente, où chaque mètre de voirie est compté et où l'accès aux immeubles obéit à des règles précises. Un déménageur qui découvre cela sur place perd sa journée, et vous avec.",
    sections: [{
      t: "Une frontière, donc des formalités",
      d: "Monaco n'appartient pas à l'Union européenne au sens douanier de la même façon que la France, et un déménagement qui traverse la frontière demande d'avoir ses papiers en ordre. Nous préparons la liste détaillée du contenu, en français, avec les valeurs déclarées. Ce document sert autant au passage qu'à l'assurance, et son absence transforme une formalité de quelques minutes en immobilisation d'une demi-journée. Pour un déménagement entre Monaco et une commune française voisine, la distance est ridicule et la paperasse ne l'est pas : c'est le paradoxe de cette destination, et la raison pour laquelle on ne l'improvise pas."
    }, {
      t: "Des immeubles qui imposent leur créneau",
      d: "Le parc monégasque est majoritairement composé d'immeubles de standing gérés avec rigueur. Le règlement fixe presque toujours des plages horaires pour les déménagements, exige la réservation de l'ascenseur, impose la protection des parties communes et prévoit un état des lieux avant et après. Certaines résidences demandent aussi l'identité et l'immatriculation des équipes plusieurs jours à l'avance. Nous traitons ces demandes en amont avec la régie ou le concierge, parce qu'un dossier incomplet le matin même se solde par un refus d'accès, sans discussion possible."
    }, {
      t: "Du mobilier qui vaut ce qu'il vaut",
      d: "Les logements monégasques abritent fréquemment des œuvres, du mobilier de créateur, des pièces de collection. Ce contenu ne se traite pas au volume mais à l'unité : caisse sur mesure, protection des arêtes, transport séparé quand c'est nécessaire, valeur déclarée au contrat. Nous établissons un inventaire contradictoire avant le chargement, signé des deux côtés. C'est la seule façon sérieuse de savoir dans quel état une pièce est partie, et donc la seule base solide en cas de litige."
    }, {
      t: "La voirie, comptée au mètre",
      d: "Sur un territoire aussi dense, aucun stationnement long ne s'improvise. L'occupation de la voie publique se demande auprès des services compétents, avec la longueur exacte du véhicule, la date et la plage horaire. Les rues en pente et les tunnels imposent en outre des contraintes de gabarit et de hauteur qui interdisent certains itinéraires aux porteurs. Nous repérons le trajet complet, montée et sortie, avant d'engager quoi que ce soit."
    }],
    jour: [{
      h: "7 h 00",
      t: "Présentation des équipes au poste de garde ou à la conciergerie, avec les pièces transmises à l'avance."
    }, {
      h: "7 h 30",
      t: "Réservation de l'ascenseur activée, protection des parties communes posée, état des lieux d'entrée signé."
    }, {
      h: "11 h 00",
      t: "Chargement des pièces de valeur en dernier, en caisses individuelles, inventaire contradictoire à l'appui."
    }, {
      h: "14 h 00",
      t: "Passage de frontière avec la liste de contenu, puis livraison et remontage."
    }],
    erreurs: [{
      t: "Croire que la proximité simplifie",
      d: "Beaulieu est à quinze minutes et pourtant la frontière change tout : documents, formalités, règles d'accès. Un déménagement Monaco-France se prépare comme un international court, pas comme un trajet local."
    }, {
      t: "Réserver l'ascenseur le jour même",
      d: "La plupart des résidences exigent un préavis. Sans réservation validée, l'accès est refusé et la journée est perdue, camion chargé devant l'immeuble."
    }, {
      t: "Déclarer un volume sans les pièces de valeur",
      d: "Une œuvre ou un meuble de créateur ne se compte pas en mètres cubes mais en traitement spécifique. Le découvrir le matin fait exploser la durée du chantier."
    }]
  },
  "cannes": {
    titreContexte: ["Onze mois normaux,", "et quelques semaines impossibles."],
    titreJour: ["Une journée cannoise,", "calée avant le premier congrès."],
    titreErreurs: ["Trois façons de perdre", "une journée à Cannes."],
    contexte: "Cannes vit à deux rythmes. Onze mois par an, c'est une ville balnéaire dense où l'on déménage normalement. Pendant les congrès et le festival, la circulation, l'hébergement et le stationnement se referment presque complètement, et une date mal choisie coûte une journée entière. Savoir quand ne pas déménager fait ici partie du métier.",
    sections: [{
      t: "Le calendrier des congrès commande tout",
      d: "Le Palais des Festivals accueille des événements majeurs une bonne partie de l'année, et pas seulement en mai. Pendant ces périodes, les axes menant à la Croisette sont saturés, le stationnement disparaît, et les autorisations de voirie deviennent difficiles à obtenir sur certains secteurs. Nous consultons le calendrier avant de proposer une date, et nous préférons vous conseiller de décaler de quarante-huit heures plutôt que de vous facturer une journée passée à attendre. Un déménagement calé un mardi de basse saison coûte moins cher et se déroule mieux qu'un samedi de congrès, à prestation identique."
    }, {
      t: "Des copropriétés fermées et réglementées",
      d: "Le parc cannois compte beaucoup de résidences avec gardien, portail et règlement intérieur précis. Réservation de l'ascenseur, créneau horaire imposé, protection obligatoire des parties communes, parfois caution : ces exigences ne sont pas négociables le matin même. Nous prenons contact avec le syndic ou le gardien dès l'acceptation du devis, et nous fournissons l'attestation d'assurance qui est presque toujours demandée. C'est ce qui fait la différence entre entrer à huit heures et attendre le retour du gardien à onze."
    }, {
      t: "Les commerces et le Suquet",
      d: "Cannes est aussi une ville de commerces, et le vieux quartier du Suquet impose ses ruelles en pente, ses escaliers et ses accès réduits. Pour une boutique, l'enjeu est de rouvrir vite : nous chargeons le stock d'abord, l'agencement ensuite, la vitrine en dernier, et nous intervenons hors heures d'ouverture quand la rue le permet. Dans le Suquet, le porteur reste en bas et l'on travaille en navette, avec un portage qui se compte en marches et pas en mètres."
    }, {
      t: "Le stationnement, à demander tôt",
      d: "Sur la Croisette et les axes du centre, l'emplacement réservé n'est pas un confort mais une condition d'exécution. La demande précise la longueur du véhicule, la date et la plage horaire, et les panneaux sont posés à l'avance pour que la place soit libre. En haute saison, ces demandes prennent plus de temps à instruire : c'est un argument de plus pour engager le dossier dès que la date est arrêtée."
    }],
    jour: [{
      h: "7 h 00",
      t: "Prise de l'emplacement réservé avant l'arrivée du trafic pendulaire et des livraisons du centre."
    }, {
      h: "7 h 30",
      t: "Présentation au gardien, activation de la réservation d'ascenseur, protection des communs."
    }, {
      h: "11 h 30",
      t: "Fin des volumineux avant le pic de circulation de la mi-journée sur les axes du bord de mer."
    }, {
      h: "14 h 30",
      t: "Livraison et remontage, état des lieux de sortie avec le gardien."
    }],
    erreurs: [{
      t: "Choisir une date sans regarder le calendrier",
      d: "Un congrès au Palais transforme un déménagement d'une journée en chantier de deux. Décaler de quarante-huit heures ne coûte rien, subir coûte cher."
    }, {
      t: "Ignorer le règlement de copropriété",
      d: "Créneau imposé, ascenseur à réserver, attestation d'assurance à fournir. Ces trois points se règlent en amont ou bloquent l'accès le matin."
    }, {
      t: "Envoyer un porteur dans le Suquet",
      d: "Les ruelles et les escaliers du vieux quartier excluent les gros gabarits. La navette n'est pas une dégradation du service, c'est la seule méthode qui fonctionne."
    }]
  },
  "menton": {
    titreContexte: ["La dernière ville avant l'Italie,", "et la plus âgée de la Côte."],
    titreJour: ["Une journée mentonnaise,", "au rythme de ceux qui partent."],
    titreErreurs: ["Ce qu'on nous appelle réparer", "quand il est déjà trop tard."],
    contexte: "Menton est la dernière ville avant l'Italie, et la plus âgée de la Côte d'Azur par sa population. Ces deux caractéristiques dessinent la plupart des déménagements qu'on nous y demande : des passages de frontière courts mais réels, et beaucoup de dossiers où le déménagement accompagne une étape de vie plutôt qu'un simple changement d'adresse.",
    sections: [{
      t: "Accompagner un départ en résidence",
      d: "Une partie importante de nos interventions à Menton concerne des personnes âgées qui quittent un logement occupé depuis trente ou quarante ans pour une résidence, souvent avec une surface divisée par trois. Ce n'est pas un déménagement, c'est un tri. Nous travaillons à un rythme adapté, nous laissons le temps de décider ce qui part, et nous coordonnons avec la famille quand elle est éloignée. Ce qui ne rentre pas dans le nouveau logement est stocké, donné ou évacué selon votre décision, jamais selon la nôtre. C'est un travail lent, et il doit l'être."
    }, {
      t: "Le passage vers l'Italie",
      d: "Vintimille est à dix minutes, et beaucoup de Mentonnais déménagent d'un côté ou de l'autre de la frontière. Le trajet est court, la préparation ne l'est pas : liste de contenu, justificatif de domicile, valeurs déclarées. Nous préparons ces pièces avant le départ. La circulation aux abords du poste frontière est par ailleurs très chargée certains jours, notamment de marché, ce qui influe sur l'heure à laquelle on engage le camion."
    }, {
      t: "La vieille ville en gradins",
      d: "Le centre historique de Menton monte en escaliers depuis le port jusqu'à la basilique. Les rues y sont étroites, souvent inaccessibles aux véhicules, et le portage se compte en volées de marches. On y travaille en navette, avec des charges réduites et une équipe renforcée. Nous mesurons le parcours au relevé, marche par marche s'il le faut, parce que c'est ce parcours et non le volume qui détermine la durée de la journée."
    }, {
      t: "Vider une maison après un décès",
      d: "Les successions représentent une part réelle de notre activité mentonnaise. Il s'agit alors de vider entièrement un logement, en séparant ce que la famille conserve, ce qui peut être repris et ce qui part en déchetterie. Nous établissons un inventaire, nous respectons les délais fixés par le notaire, et nous rendons le logement propre. Nous savons que ces chantiers se déroulent dans un moment difficile, et nous n'en rajoutons pas."
    }],
    jour: [{
      h: "8 h 30",
      t: "Point avec la personne concernée ou la famille, rappel de ce qui part, de ce qui reste et de ce qui se stocke."
    }, {
      h: "9 h 00",
      t: "Chargement progressif, sans précipitation, en commençant par les pièces déjà triées."
    }, {
      h: "13 h 00",
      t: "Vérification des documents de passage si le trajet franchit la frontière italienne."
    }, {
      h: "15 h 00",
      t: "Installation dans le nouveau logement, mobilier positionné selon le plan convenu à l'avance."
    }],
    erreurs: [{
      t: "Traiter une entrée en résidence comme un déménagement ordinaire",
      d: "Le volume diminue de deux tiers et chaque objet demande une décision. Prévoir une demi-journée pour ce travail garantit de le faire mal."
    }, {
      t: "Partir vers l'Italie sans liste de contenu",
      d: "Dix minutes de route ne dispensent d'aucune formalité. Le document se prépare avant, pas au poste frontière."
    }, {
      t: "Sous-estimer les escaliers de la vieille ville",
      d: "Une adresse à cent mètres du camion peut représenter quatre-vingts marches. C'est le vrai facteur de durée, bien avant le nombre de mètres cubes."
    }]
  },
  "antibes": {
    titreContexte: ["Trois villes en une,", "et trois méthodes différentes."],
    titreJour: ["Une journée antiboise,", "du quai jusqu'aux remparts."],
    titreErreurs: ["Les trois questions", "qu'un devis antibois doit poser."],
    contexte: "Antibes cumule trois villes en une : un centre historique enfermé dans ses remparts, deux ports dont le plus grand de la Méditerranée pour les grandes unités, et des quartiers résidentiels étalés jusqu'à Juan-les-Pins. Trois secteurs, trois méthodes, et un devis qui n'a pas de sens tant qu'on ne sait pas duquel il s'agit.",
    sections: [{
      t: "Port Vauban et les gens de mer",
      d: "La présence du port structure une partie de la demande locale : équipages, personnels de yachts, résidents saisonniers qui déménagent au rythme des contrats. Ces déménagements ont leurs particularités, des volumes souvent modestes mais des calendriers serrés et parfois des départs décidés en quelques jours. L'accès aux quais est réglementé et demande un badge ou une autorisation, ce qui se prépare la veille et pas le matin. Nous avons l'habitude de ces chantiers courts et pressés, et nous savons qu'un jour de retard peut coûter un embarquement."
    }, {
      t: "Le vieux Antibes dans ses remparts",
      d: "Le centre historique est ceint de remparts et desservi par des rues étroites où le stationnement est rare et le gabarit limité. Certaines portes d'accès sont contraintes en hauteur. Un porteur classique n'y entre pas partout, et l'on organise le chantier autour d'un point de rupture de charge, avec une navette en utilitaire. Le bâti ancien ajoute sa propre contrainte : escaliers étroits, paliers courts, portes basses. Tout cela se mesure avant, sur place, jamais au téléphone."
    }, {
      t: "Les autorisations, secteur par secteur",
      d: "La demande d'occupation de la voie publique ne se traite pas de la même façon selon que l'adresse se trouve dans le centre ancien, sur le front de mer ou dans un quartier résidentiel. Les délais d'instruction et les emplacements possibles diffèrent. Nous déposons la demande adaptée au secteur concerné, avec la longueur exacte du véhicule, et nous posons les panneaux réglementaires à l'avance pour que la place soit effectivement libre à l'heure prévue."
    }, {
      t: "Commerces et saisonnalité",
      d: "Antibes et Juan-les-Pins comptent de nombreux commerces dont l'activité suit fortement la saison. Pour une boutique ou un restaurant, la question n'est pas le prix du déménagement mais le nombre de jours de fermeture. Nous organisons le transfert hors heures d'ouverture, stock d'abord et agencement ensuite, avec l'objectif d'une réouverture le lendemain. Cela suppose un plan d'implantation validé avant le jour J, ce que nous préparons avec vous."
    }],
    jour: [{
      h: "7 h 00",
      t: "Prise de l'emplacement réservé, adapté au secteur, avant l'ouverture des commerces."
    }, {
      h: "7 h 30",
      t: "Mise en place du point de rupture de charge si l'adresse est intra-muros, protection du parcours."
    }, {
      h: "11 h 00",
      t: "Rotations en navette pour le centre ancien, chargement direct ailleurs."
    }, {
      h: "14 h 30",
      t: "Livraison, remontage et positionnement selon le plan convenu."
    }],
    erreurs: [{
      t: "Demander un devis sans préciser le secteur",
      d: "Intra-muros, front de mer et quartiers résidentiels n'ont ni le même accès ni le même prix. Le même volume peut varier du simple au double selon l'adresse exacte."
    }, {
      t: "Compter sur un accès au quai sans autorisation",
      d: "Les zones portuaires sont réglementées. Le badge ou l'autorisation se demande la veille, et sans lui le camion reste dehors."
    }, {
      t: "Envoyer un porteur dans les remparts",
      d: "Largeur de rue et hauteur de porte excluent les gros gabarits sur une partie du centre ancien. La navette est la méthode, pas le pis-aller."
    }]
  },
  "mandelieu": {
    titreContexte: ["Entre l'Estérel et les marinas,", "un déménagement souvent piloté à distance."],
    titreJour: ["Une journée à Mandelieu,", "quand le propriétaire n'est pas là."],
    titreErreurs: ["Ce qui fait attendre un camion", "devant un portail fermé."],
    contexte: "Mandelieu-la-Napoule s'étire entre le massif de l'Estérel et la mer, avec ses marinas, ses golfs et une part importante de résidences secondaires. La commune se déménage rarement en urgence et souvent à distance : beaucoup de propriétaires n'habitent pas sur place, et le chantier se pilote autant par téléphone que sur le terrain.",
    sections: [{
      t: "Les marinas et l'accès aux pontons",
      d: "Les résidences en bord de marina ont des accès spécifiques : voies privées, portails télécommandés, parfois passage par un ponton ou une passerelle. Le stationnement d'un véhicule long y est presque toujours contraint, et les gestionnaires imposent souvent des horaires. Nous prenons contact avec la gestion de la résidence avant le jour J pour obtenir les codes, les créneaux et les éventuelles restrictions de tonnage. Un portail qui ne s'ouvre pas est une journée perdue, et cela ne se règle pas depuis le trottoir."
    }, {
      t: "Un calendrier dicté par la saison",
      d: "L'été, la circulation sur les axes littoraux et l'accès aux quartiers de bord de mer se dégradent nettement. Le mimosa amène par ailleurs sa propre affluence en fin d'hiver. Ces périodes ne sont pas impossibles, elles sont plus lentes, et cela doit se voir dans le planning plutôt que dans une mauvaise surprise. Nous vous indiquons franchement les créneaux où le même chantier prendra une heure de plus, et vous décidez."
    }, {
      t: "Le propriétaire qui n'est pas là",
      d: "Une grande partie des logements de Mandelieu sont des résidences secondaires. Nous travaillons régulièrement avec un mandataire, un voisin ou une agence pour la remise des clés, et nous réalisons un état des lieux photographique à l'entrée comme à la sortie. L'inventaire est transmis au propriétaire le jour même. Cette organisation à distance demande d'être cadrée par écrit avant le chantier : qui ouvre, qui signe, qui reçoit les photos."
    }, {
      t: "Les rotations de location saisonnière",
      d: "Entre deux locations, il faut parfois vider, stocker et réinstaller dans une fenêtre de quelques heures. C'est un exercice de logistique plus que de manutention : le mobilier part en garde-meuble étiqueté par pièce, et revient dans le même ordre. Nous conservons l'inventaire d'un passage à l'autre, ce qui évite de tout recompter à chaque rotation et réduit le coût des allers-retours."
    }],
    jour: [{
      h: "8 h 00",
      t: "Récupération des clés auprès du mandataire ou de l'agence, état des lieux photographique d'entrée."
    }, {
      h: "8 h 30",
      t: "Ouverture du portail avec les codes obtenus en amont, positionnement du véhicule selon les contraintes de la résidence."
    }, {
      h: "12 h 00",
      t: "Chargement et étiquetage par pièce, inventaire transmis au propriétaire absent."
    }, {
      h: "15 h 00",
      t: "Livraison ou mise en garde-meuble, état des lieux de sortie et restitution des clés."
    }],
    erreurs: [{
      t: "Arriver sans les codes de la résidence",
      d: "Portails et voies privées se traversent avec un code ou pas du tout. L'obtenir la veille prend cinq minutes, le découvrir sur place coûte une matinée."
    }, {
      t: "Déménager en pleine saison sans le savoir",
      d: "L'été et la période du mimosa allongent les temps de trajet et compliquent l'accès. Ce n'est pas rédhibitoire, mais cela doit être au planning."
    }, {
      t: "Organiser à distance sans écrit",
      d: "Qui ouvre, qui signe, qui reçoit l'inventaire. Sans réponse écrite à ces trois questions, une remise de clés se transforme en attente."
    }]
  }
};
Object.assign(window, {
  VILLE_FOND
});
})();
