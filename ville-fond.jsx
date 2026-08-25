/**
 * ville-fond.jsx — le contenu de fond des pages villes, un territoire par commune.
 *
 * POURQUOI CE FICHIER EXISTE
 * Les 31 pages villes partageaient quatre H2 identiques mot pour mot sur trente
 * d'entre elles. A 1 400 mots le recouvrement mesure restait a 14 %. En triplant
 * le contenu sur ce meme squelette, il aurait double.
 *
 * REGLE, imposee par matrice-differenciation.js
 * Chaque commune recoit un angle et quatre modules qui n'appartiennent qu'a elle.
 * Deux communes ne partagent jamais plus de deux modules, et le controle est
 * automatique : `node matrice-differenciation.js` doit afficher 0 collision.
 *
 * REGLE D'ECRITURE
 * Si une phrase pourrait etre recopiee telle quelle sur une autre commune, elle
 * n'a rien a faire ici. Le nom de la ville qui change ne suffit pas a faire un
 * contenu unique : c'est exactement ce que font Mignani et Demeco, dont deux
 * pages sont identiques a 100 %.
 *
 * CONTROLE APRES CHAQUE VAGUE
 *   node audit-complet.js ville     doit rester sous 20 % de recouvrement
 */

const VILLE_FOND = {

  "beausoleil": {
    titreContexte: ["La ville qui loge Monte-Carlo,", "et qui monte de rue en rue."],
    titreJour: ["Une journée à Beausoleil,", "sur un immeuble à deux entrées."],
    titreErreurs: ["Ce qu'on découvre trop tard", "dans un immeuble à flanc de pente."],
    contexte: "Beausoleil prolonge Monte-Carlo côté français, sur un versant si raide que certains immeubles ont une entrée dans une rue et une autre trois étages plus haut dans la rue suivante. C'est une ville de locataires, largement peuplée de gens qui travaillent en Principauté, avec une rotation de baux importante et un parc collectif dense. Ici, on déménage souvent, et rarement de plain-pied.",
    sections: [
      { t: "Un parc locatif qui tourne vite", d: "Beausoleil loge une grande partie des salariés qui travaillent à Monaco, avec des baux qui se succèdent au rythme des contrats. Cela signifie des déménagements fréquents, souvent programmés à la journée près entre un départ et une arrivée, et parfois deux chantiers dans le même immeuble le même jour. Nous travaillons couramment avec les agences locales sur ces rotations, avec un état des lieux photographique à chaque bout. Quand le calendrier est serré, nous proposons un stockage court de quelques jours plutôt que de forcer un enchaînement qui ne tiendra pas." },
      { t: "Le syndic et les immeubles à deux niveaux d'entrée", d: "La particularité du bâti beausolois est qu'un même immeuble dessert parfois deux rues à des altitudes différentes. Savoir par quelle entrée passer change tout : le nombre d'étages à monter, la possibilité de stationner, la distance de portage. Le règlement de copropriété fixe par ailleurs les créneaux et impose la protection des communs. Nous appelons le syndic ou le gardien avant le jour J pour trancher ces deux points, et nous relevons l'entrée réellement utilisable plutôt que celle qui figure sur l'adresse postale." },
      { t: "Le monte-meuble, quand la rue le permet", d: "Sur des façades qui donnent directement sur une rue en pente, la pose d'un monte-meuble demande une emprise au sol que toutes les voies n'offrent pas, et un angle compatible avec les balcons et les câbles. Quand c'est possible, c'est souvent la solution la plus rapide et la moins risquée pour les volumineux. Nous vérifions la faisabilité au relevé et nous annonçons le coût dans le devis. Quand ce n'est pas possible, nous le disons aussi, et nous chiffrons le portage en conséquence." },
      { t: "La frontière, à cent mètres et pourtant réelle", d: "Beaucoup de nos chantiers beausolois relient la commune à la Principauté, parfois d'une rue à l'autre. La proximité ne supprime pas les formalités : liste de contenu, justificatifs, valeurs déclarées. Nous préparons ces documents à l'avance. La circulation aux abords de la frontière est par ailleurs très dense aux heures de bureau, et le même trajet peut prendre dix minutes ou quarante selon l'heure à laquelle on l'engage." }
    ],
    jour: [
      { h: "7 h 00", t: "Positionnement à l'entrée réellement utilisable de l'immeuble, repérée au relevé." },
      { h: "7 h 30", t: "Protection des communs, réservation d'ascenseur activée, ou montage du monte-meuble si la rue le permet." },
      { h: "11 h 30", t: "Chargement des volumineux par la façade ou par l'escalier, selon la méthode retenue." },
      { h: "14 h 00", t: "Passage vers la Principauté avec les documents préparés, ou livraison sur place." }
    ],
    erreurs: [
      { t: "Se fier à l'adresse postale pour l'accès", d: "Un immeuble beausolois dessert parfois deux rues à trois étages d'écart. Se tromper d'entrée ajoute une volée d'escaliers à chaque rotation." },
      { t: "Enchaîner deux baux sans marge", d: "Quand le départ et l'arrivée tombent le même jour, le moindre retard fait tout basculer. Un stockage de deux jours coûte moins qu'une journée perdue." },
      { t: "Traverser vers Monaco à l'heure de pointe", d: "Cent mètres à vol d'oiseau peuvent devenir quarante minutes de circulation. L'heure du passage se choisit, elle ne se subit pas." }
    ]
  },

  "la-turbie": {
    titreContexte: ["Un village d'altitude", "au-dessus de la Principauté."],
    titreJour: ["Une journée à La Turbie,", "et la montée se prépare."],
    titreErreurs: ["Ce que le dénivelé", "fait payer aux imprudents."],
    contexte: "La Turbie domine Monaco depuis près de cinq cents mètres d'altitude, sur la grande corniche. On y accède par une route de montagne, et le village lui-même s'organise autour de son Trophée d'Auguste en ruelles médiévales étroites. C'est une commune où deux paramètres décident de tout : la capacité du véhicule à monter, et la météo du jour.",
    sections: [
      { t: "La montée par la grande corniche", d: "L'accès se fait par des routes de montagne aux virages serrés, avec des portions où le croisement de deux véhicules larges est délicat. Un porteur de vingt mètres cubes monte, mais pas jusqu'à toutes les adresses, et la question décisive reste toujours la même : où fera-t-il demi-tour. Nous repérons l'itinéraire complet avant d'engager le chantier, montée et descente. Le trajet depuis Nice prend nettement plus longtemps que ne l'indique une carte, et cette différence doit figurer dans le planning de la journée plutôt que d'être découverte le matin." },
      { t: "L'altitude et le temps qu'il fait", d: "À cinq cents mètres, les conditions ne sont pas celles du littoral. Le vent y est plus fort, la température plus basse, et en hiver le sol peut être glissant tôt le matin alors que Nice est au sec. Ces conditions influent sur la sécurité du portage et sur l'adhérence d'un véhicule chargé en descente. Nous consultons les prévisions avant de confirmer une date d'hiver, et nous préférons décaler d'une journée plutôt que d'engager un camion chargé sur une route verglacée." },
      { t: "Le village médiéval et ses ruelles", d: "Autour du Trophée, le vieux village est fait de ruelles étroites et de passages où aucun véhicule de déménagement ne circule. Le portage y est manuel, sur des pavés irréguliers et parfois en pente. Les maisons anciennes ont des escaliers étroits et des portes basses qui n'acceptent pas tous les meubles montés. Nous relevons le parcours et les ouvertures avant le devis, et nous prévoyons le démontage quand il est nécessaire, plutôt que de le décider devant la porte." },
      { t: "Les axes et le tonnage", d: "Au-delà du gabarit, certains accès imposent des limitations de tonnage ou de hauteur qu'il faut connaître avant de charger. Un camion trop lourd pour une voie d'accès privative est un camion qui ne passe pas, et l'on ne s'en aperçoit pas depuis Nice. Nous vérifions ces limites au relevé et nous choisissons le véhicule en conséquence, quitte à faire deux rotations avec un utilitaire plutôt qu'une seule avec un porteur qui ne montera jamais." }
    ],
    jour: [
      { h: "7 h 00", t: "Départ anticipé de Nice, la montée par la corniche prend plus longtemps qu'une carte ne l'indique." },
      { h: "8 h 00", t: "Positionnement au plus près du village, repérage confirmé de l'aire de demi-tour." },
      { h: "11 h 30", t: "Portage manuel dans les ruelles, avec démontage des meubles qui ne franchissent pas les ouvertures." },
      { h: "15 h 00", t: "Descente à vide par l'itinéraire repéré, sans manœuvre improvisée." }
    ],
    erreurs: [
      { t: "Envoyer un porteur sans avoir vu la route", d: "Certains accès ne se remontent pas et ne se redescendent pas en marche arrière. Un camion bloqué dans un virage mobilise une dépanneuse et perd la journée." },
      { t: "Ignorer la météo d'altitude", d: "Il peut faire sec à Nice et glissant à La Turbie le même matin. Cinq cents mètres de dénivelé, ce n'est pas un détail." },
      { t: "Prévoir le même temps de trajet qu'en plaine", d: "La montée double facilement la durée annoncée par un calculateur d'itinéraire. Le planning doit l'intégrer." }
    ]
  },

  "roquebrune-cap-martin": {
    titreContexte: ["Un village médiéval en haut,", "un cap résidentiel en bas."],
    titreJour: ["Une journée à Roquebrune,", "selon qu'on monte ou qu'on descend."],
    titreErreurs: ["Deux communes, deux méthodes,", "et l'erreur de les confondre."],
    contexte: "Roquebrune-Cap-Martin superpose deux réalités qui n'ont presque rien en commun. En haut, un village médiéval accroché à son rocher, avec ses passages voûtés et ses escaliers. En bas, le Cap-Martin, quartier résidentiel de villas closes et de propriétés en bord de mer. Un devis établi sans savoir de laquelle des deux il s'agit ne veut rien dire.",
    sections: [
      { t: "Le village perché et ses passages voûtés", d: "Le vieux village de Roquebrune est l'un des mieux conservés de la région, et cette conservation est exactement ce qui le rend difficile. Les rues sont des calades étroites, certaines couvertes, avec des marches irrégulières et des portes basses. Aucun véhicule n'y accède au-delà des abords. Tout se porte à la main, sur des parcours qui se comptent en marches et en virages. Nous relevons ce parcours avant le devis, et nous identifions les meubles qui devront être démontés pour franchir une ouverture ancienne." },
      { t: "Le Cap-Martin et ses propriétés closes", d: "En contrebas, le Cap-Martin est un quartier de villas et de propriétés souvent gardées, avec des allées privées et des portails. L'accès s'y prépare avec le gardien ou le personnel de maison : identités des équipiers transmises à l'avance, créneau convenu, cheminement autorisé sur la propriété. Les allées sont dimensionnées pour des voitures et rarement pour un porteur, ce qui impose de vérifier la largeur, la hauteur sous la végétation et surtout la possibilité de faire demi-tour." },
      { t: "Un patrimoine sensible sur les deux niveaux", d: "La commune abrite un patrimoine architectural reconnu, du village médiéval jusqu'aux réalisations modernes du bord de mer. Cela se traduit par des contraintes concrètes : ce qu'on peut installer sur l'espace public, comment on protège un seuil ancien, où l'on peut poser une emprise. Nous vérifions ces points au relevé, et nous protégeons systématiquement les points de passage. Sur du bâti classé ou remarquable, une éraflure ne se répare pas comme sur une cloison récente." },
      { t: "Beaucoup de résidences secondaires", d: "Une part notable des logements du Cap-Martin n'est pas occupée à l'année. Nous travaillons alors avec un mandataire, une agence ou un gardien, sur instructions écrites : qui ouvre, qui signe l'inventaire, qui reçoit le compte rendu photographique. Cette organisation se cale avant le chantier et pas pendant. L'état des lieux photographique complet est transmis au propriétaire le jour même, quel que soit le fuseau horaire où il se trouve." }
    ],
    jour: [
      { h: "7 h 30", t: "Choix du véhicule selon le niveau concerné, village ou Cap-Martin, décidé au relevé." },
      { h: "8 h 00", t: "Présentation au gardien pour le Cap-Martin, ou mise en place du parcours de portage au village." },
      { h: "11 h 30", t: "Portage manuel sous les passages voûtés, ou chargement sur allée privée selon l'adresse." },
      { h: "15 h 00", t: "Inventaire photographié et transmis, état des lieux de sortie signé." }
    ],
    erreurs: [
      { t: "Traiter la commune comme un ensemble", d: "Village médiéval et Cap-Martin n'ont ni le même accès, ni la même méthode, ni le même prix. L'adresse exacte est la première question." },
      { t: "Croire qu'une allée privée accueille un porteur", d: "Elle est dimensionnée pour une voiture, bordée de murs anciens, et l'aire de retournement manque souvent. Cela se mesure avant." },
      { t: "Forcer un meuble dans une ouverture ancienne", d: "Les portes du vieux village sont basses et les encadrements fragiles. Le démontage se décide au relevé, pas dans l'escalier." }
    ]
  },

  "saint-paul-de-vence": {
    titreContexte: ["Un village classé et piéton,", "où le camion reste hors les murs."],
    titreJour: ["Une journée à Saint-Paul,", "tout se porte, sans exception."],
    titreErreurs: ["Ce qu'aucun devis à distance", "ne peut deviner ici."],
    contexte: "Saint-Paul-de-Vence est un village classé, entièrement piéton à l'intérieur de ses remparts, et l'un des plus visités de France. Aucun véhicule de déménagement n'entre dans les murs. Tout se porte, sur des calades en pente, entre des maisons anciennes aux ouvertures étroites, au milieu d'une fréquentation touristique qui ne s'interrompt pratiquement jamais. C'est le chantier le plus exigeant que nous traitons.",
    sections: [
      { t: "Le camion s'arrête aux remparts", d: "L'accès à l'intérieur du village est réservé et strictement encadré. Concrètement, le porteur stationne à l'extérieur, sur un emplacement obtenu à l'avance, et l'intégralité du mobilier fait le trajet à la main ou avec du matériel de roulage adapté aux pavés. Ce portage peut représenter plusieurs centaines de mètres, en pente, avec des marches. C'est lui qui détermine le nombre d'équipiers et la durée de la journée, très largement avant le volume à déplacer. Un devis qui ne l'a pas mesuré sur place est un devis faux." },
      { t: "Un village classé, donc des règles", d: "Le statut du village impose des contraintes précises sur ce qu'on peut installer, où et quand. Un monte-meuble n'est pas envisageable à l'intérieur des murs, et l'occupation de l'espace public aux abords se demande. Le bâti est ancien et protégé : seuils de pierre, encadrements sculptés, sols irréguliers. Nous protégeons systématiquement chaque point de contact, et nous adaptons la méthode au bâti plutôt que l'inverse. Sur ce type de patrimoine, une dégradation ne se répare pas, elle se constate." },
      { t: "Des œuvres, très souvent", d: "Saint-Paul est un village d'artistes et de galeries, et il est fréquent que le mobilier à déplacer s'accompagne de tableaux, de sculptures ou de pièces de collection. Ces objets se traitent à l'unité : caisse sur mesure quand la valeur ou la fragilité l'exige, protection des cadres et des arêtes, transport séparé, valeur déclarée au contrat. L'inventaire contradictoire est photographié et signé avant le chargement, ce qui est la seule base sérieuse en cas de discussion." },
      { t: "La rupture de charge, organisée à l'avance", d: "Entre le porteur garé à l'extérieur et la porte à l'intérieur des murs, il y a une chaîne complète à organiser : point de dépose, matériel de roulage, rotations, équipiers positionnés. Cette organisation se prépare la veille et se met en place avant l'arrivée des premiers visiteurs. Nous engageons systématiquement ces chantiers très tôt le matin, parce qu'en milieu de journée la fréquentation du village rend le portage à la fois lent et risqué." }
    ],
    jour: [
      { h: "6 h 30", t: "Positionnement du porteur sur l'emplacement obtenu, avant l'arrivée des visiteurs." },
      { h: "7 h 00", t: "Mise en place de la chaîne de portage et protection des seuils et des encadrements anciens." },
      { h: "10 h 30", t: "Rotations manuelles terminées avant la montée de la fréquentation touristique." },
      { h: "14 h 00", t: "Livraison à l'adresse d'arrivée, avec inventaire des pièces de valeur signé." }
    ],
    erreurs: [
      { t: "Demander un devis sans visite", d: "La distance de portage et le nombre de marches décident du prix. Aucun formulaire en ligne ne peut les connaître, et l'écart avec la réalité est considérable." },
      { t: "Espérer un accès véhicule aux remparts", d: "Le village est piéton et le restera. Le portage intégral n'est pas une contrainte négociable, c'est le cadre." },
      { t: "Commencer en milieu de matinée", d: "La fréquentation rend le portage lent et risqué. Un chantier engagé à six heures trente se termine, un chantier engagé à dix heures s'enlise." }
    ]
  },

  "vence": {
    titreContexte: ["Une cité historique", "entourée de villas et de collines."],
    titreJour: ["Une journée à Vence,", "de la cité aux hauteurs."],
    titreErreurs: ["Trois choses à vérifier", "avant de charger à Vence."],
    contexte: "Vence s'organise autour d'une cité historique compacte, ceinte de ses anciens remparts, elle-même entourée de quartiers de villas qui montent vers les Baous. C'est la porte de l'arrière-pays, avec une population installée de longue date et un patrimoine qui va de la vieille ville médiévale à la chapelle décorée par Matisse. Deux mondes coexistent : la cité, où l'on porte, et les collines, où l'on roule.",
    sections: [
      { t: "La cité historique, compacte et fermée", d: "Le centre ancien de Vence tient dans un périmètre réduit, desservi par des rues étroites dont plusieurs sont piétonnes ou soumises à horaires. Les immeubles y sont anciens, sans ascenseur, avec des cages d'escalier resserrées et des portes qui n'ont pas les dimensions actuelles. Le portage y est la règle, et le stationnement se demande sur les emplacements praticables en périphérie de la cité. Nous relevons le parcours complet avant le devis, parce que la distance entre la place obtenue et la porte détermine la durée du chantier." },
      { t: "Un patrimoine à ne pas abîmer", d: "La vieille ville et ses abords relèvent d'un cadre protégé, et le bâti ancien impose sa prudence : seuils de pierre, encadrements, escaliers usés, murs anciens. Nous protégeons chaque point de contact et nous adaptons la méthode au bâti. Sur l'espace public, l'installation d'une emprise ou d'un matériel se demande et n'est pas accordée partout. Ces points se vérifient au relevé, ce qui évite de découvrir un refus le matin du déménagement." },
      { t: "Du mobilier ancien, très fréquent ici", d: "Vence compte beaucoup de foyers installés depuis longtemps, avec du mobilier ancien, parfois de famille, souvent monté sur place. Ces meubles ne se traitent pas comme du mobilier contemporain : démontage raisonné plutôt que forcé, sanglage, protection des placages et des arêtes, aucun glissement au sol. Certains ne franchiront pas une porte ancienne en un seul morceau, et il vaut mieux le savoir au relevé qu'au troisième étage." },
      { t: "Accompagner un changement de vie", d: "Une part de nos interventions vençoises accompagne un départ vers un logement plus petit ou une résidence, avec le tri que cela suppose. Ces chantiers demandent du temps et de la patience, et souvent une coordination avec la famille. Ce qui ne rentre pas est stocké, donné ou évacué selon votre décision, jamais selon la nôtre. Nous prévoyons le temps réel que ce travail demande plutôt que de le comprimer dans une demi-journée." }
    ],
    jour: [
      { h: "8 h 00", t: "Positionnement sur l'emplacement obtenu en périphérie de la cité, ou dans l'allée pour les villas." },
      { h: "8 h 30", t: "Protection des seuils, des encadrements et de la cage d'escalier dans le bâti ancien." },
      { h: "11 h 30", t: "Démontage raisonné du mobilier ancien, sanglage et protection avant portage." },
      { h: "15 h 00", t: "Livraison, remontage, et mise en garde-meuble de ce qui ne rentre pas dans le nouveau logement." }
    ],
    erreurs: [
      { t: "Confondre la cité et les collines", d: "Dans la vieille ville on porte, dans les quartiers de villas on roule jusqu'à la porte. Le prix et la durée n'ont rien à voir." },
      { t: "Forcer un meuble ancien", d: "Un buffet monté sur place ne sort pas toujours entier. Le démontage se décide au relevé, avec les outils qu'il faut." },
      { t: "Comprimer un départ en résidence", d: "Le tri demande plus de temps que le transport. Le prévoir évite de décider dans la précipitation ce qu'on garde d'une vie." }
    ]
  },

  "beaulieu-sur-mer": {
    titreContexte: ["Une commune minuscule et plate,", "coincée entre falaise et voie ferrée."],
    titreJour: ["Une journée à Beaulieu,", "au rythme d'une petite ville."],
    titreErreurs: ["Ce qu'on oublie", "dans une commune qu'on croit facile."],
    contexte: "Beaulieu-sur-Mer tient sur moins d'un kilomètre carré, entre la falaise qui la surplombe, la voie ferrée qui la traverse et son port. C'est l'une des rares communes de la corniche où l'on déménage à plat, ce qui la fait passer pour facile. Elle ne l'est pas tout à fait : l'espace y est si compté que le stationnement d'un camion se prépare, et la population y est âgée, ce qui change souvent la nature du chantier.",
    sections: [
      { t: "Le syndic, presque toujours dans la boucle", d: "Beaulieu est une commune d'immeubles, avec un parc collectif dense où le règlement de copropriété encadre les déménagements de manière précise. Créneau horaire, réservation de l'ascenseur, protection obligatoire des parties communes, attestation d'assurance et parfois dépôt de garantie. Nous prenons contact avec le syndic ou le gardien dès que la date est arrêtée, et nous transmettons les pièces sans attendre qu'on nous les demande. Dans une commune où presque toutes les adresses relèvent d'une copropriété, cette étape n'est pas une option : c'est la condition pour commencer à l'heure." },
      { t: "Beaucoup de départs en résidence", d: "La population de Beaulieu est nettement plus âgée que la moyenne régionale, et une part importante de nos interventions accompagne une entrée en résidence ou un rapprochement familial. Ces chantiers demandent du temps : le volume se réduit fortement, chaque objet appelle une décision, et la famille est souvent loin. Nous travaillons au rythme de la personne, nous stockons ce qui doit l'être et nous évacuons le reste selon vos consignes. Nous ne pressons jamais ces déménagements, parce que les presser, c'est les rater." },
      { t: "Le port et ses contraintes d'accès", d: "Le port de plaisance structure une partie de la vie locale et amène ses propres demandes : logements compacts, calendriers liés aux contrats, matériel de bateau à déplacer. L'accès aux abords du quai est réglementé et le stationnement y est encore plus tendu qu'ailleurs dans la commune. Ces chantiers sont souvent de petit volume mais très contraints en horaires, et ils demandent d'avoir obtenu les accès la veille plutôt que de les négocier le matin." },
      { t: "La météo, à ne pas négliger ici", d: "Coincée entre mer et falaise, Beaulieu reçoit des épisodes de vent et de pluie qui rendent le portage extérieur délicat, particulièrement à l'automne. Un mobilier qui prend l'eau entre le camion et la porte est un mobilier abîmé. Nous protégeons systématiquement le parcours extérieur quand le temps l'exige, avec housses et chemins de circulation, et nous décalons plutôt que de charger sous une averse quand la date le permet." }
    ],
    jour: [
      { h: "8 h 00", t: "Présentation au gardien, remise de l'attestation, activation de la réservation d'ascenseur." },
      { h: "8 h 30", t: "État des lieux des parties communes, protection du hall et du parcours extérieur si le temps l'impose." },
      { h: "11 h 30", t: "Chargement, avec un rythme adapté quand le déménagement accompagne une entrée en résidence." },
      { h: "14 h 30", t: "Livraison, installation selon le plan convenu, état des lieux de sortie signé." }
    ],
    erreurs: [
      { t: "Croire qu'une commune plate est une commune simple", d: "L'espace y est si compté que sans emplacement réservé, le camion ne trouve pas de place. Le relief n'est pas la seule contrainte possible." },
      { t: "Prévoir une demi-journée pour une entrée en résidence", d: "Le tri prend plus de temps que le transport. Sous-estimer ce temps, c'est finir dans la précipitation le jour où il ne le faudrait pas." },
      { t: "Charger sous la pluie sans protection", d: "Entre le camion et la porte, quelques mètres suffisent à tremper un matelas ou à gondoler un plateau. Les housses se sortent avant, pas après." }
    ]
  },

  "villefranche-sur-mer": {
    titreContexte: ["Une rade magnifique", "et des ruelles où le camion n'entre pas."],
    titreJour: ["Une journée à Villefranche,", "en rupture de charge."],
    titreErreurs: ["Trois certitudes fausses", "sur une commune en escalier."],
    contexte: "Villefranche-sur-Mer descend en gradins vers l'une des plus belles rades de la Méditerranée, et c'est précisément ce qui la rend difficile à déménager. La vieille ville est un enchevêtrement de ruelles étroites, de passages voûtés et d'escaliers où aucun véhicule de déménagement ne circule. Ici, la question n'est jamais le volume : c'est la distance entre le point où le camion s'arrête et votre porte.",
    sections: [
      { t: "Une ville qui se monte à pied", d: "Le cœur historique est desservi par des venelles et des escaliers, dont la fameuse rue couverte qui traverse le quartier sous les maisons. Ces passages sont étroits, sombres, et parfois trop bas pour une armoire debout. On y travaille exclusivement à la main, avec des charges fractionnées et un matériel de portage adapté aux marches. Le parcours se relève avant le devis, marche par marche, parce que quatre-vingts marches et deux virages serrés ne se devinent pas depuis une photo satellite et changent complètement la durée du chantier." },
      { t: "La rupture de charge, méthode obligatoire", d: "Le principe de tout déménagement villefranchois est le même : un porteur stationné sur un emplacement praticable en contrebas ou en surplomb, et un petit utilitaire ou du portage manuel pour faire la navette jusqu'à la porte. Cette double manutention prend du temps et mobilise plus d'équipiers. Elle figure explicitement au devis, avec le nombre de rotations estimé. Un devis villefranchois qui ne mentionne pas la rupture de charge n'a pas été fait sur place." },
      { t: "Le port de la Santé et la darse", d: "La commune vit avec son port et l'ancienne darse militaire. Les abords sont contraints, le stationnement rare, et l'accès à certaines zones est réglementé. Les logements du bord de rade sont souvent anciens, compacts, avec des escaliers étroits. Nous préparons les accès et les autorisations la veille, et nous engageons le chantier tôt, avant que l'activité du port et la fréquentation touristique ne referment les quelques espaces disponibles." },
      { t: "L'autorisation, sans laquelle rien ne commence", d: "Le nombre d'emplacements où un véhicule de déménagement peut réellement stationner à Villefranche est très limité. L'autorisation de voirie n'est donc pas un confort mais le point de départ du chantier. Nous la déposons dès la date arrêtée, avec la longueur du véhicule et la plage horaire, et nous posons les panneaux la veille. Sans emplacement garanti, l'équipe passe la matinée à chercher une place et vous payez ce temps-là." }
    ],
    jour: [
      { h: "7 h 00", t: "Prise de l'emplacement réservé en contrebas ou en surplomb, avant l'arrivée des visiteurs." },
      { h: "7 h 30", t: "Mise en place du parcours de portage, protection des marches et des passages voûtés." },
      { h: "11 h 00", t: "Rotations en navette entre le point de rupture de charge et le porteur." },
      { h: "14 h 30", t: "Regroupement dans le porteur, puis livraison à l'adresse d'arrivée." }
    ],
    erreurs: [
      { t: "Croire qu'un utilitaire s'approche de la porte", d: "Une grande partie de la vieille ville est inaccessible aux véhicules. Le portage n'est pas une exception ici, c'est la règle." },
      { t: "Estimer le chantier au volume", d: "Ce qui fixe la durée, c'est le nombre de marches et de rotations, pas les mètres cubes. Deux adresses au même volume peuvent différer du simple au double." },
      { t: "Réserver l'emplacement au dernier moment", d: "Les places praticables se comptent sur les doigts d'une main. Sans arrêté obtenu à l'avance, la journée commence par une heure de recherche." }
    ]
  },

  "eze": {
    titreContexte: ["Trois Èze superposées,", "du bord de mer au nid d'aigle."],
    titreJour: ["Une journée à Èze,", "et l'altitude décide de tout."],
    titreErreurs: ["Ce que la carte ne montre pas", "sur une commune verticale."],
    contexte: "Èze n'est pas une commune, c'est trois niveaux empilés sur quatre cents mètres de dénivelé. Èze-bord-de-mer en bas, la moyenne corniche au milieu, et le village médiéval perché tout en haut. Entre les deux extrémités, il y a une route en lacets et une différence de méthode totale. Le nom de la commune sur un devis ne veut donc rien dire : c'est l'altitude de l'adresse qui compte.",
    sections: [
      { t: "Le village perché, où rien ne roule", d: "Èze-Village est un village médiéval entièrement piéton, organisé en calades et en escaliers autour de son rocher. Aucun véhicule n'y accède au-delà de l'entrée. Tout se porte, sur des passages étroits, en pente, souvent avec des marches irrégulières. C'est le cas de figure le plus exigeant de toute la Côte d'Azur, et il demande une équipe étoffée et du matériel adapté aux pavés. Nous relevons le parcours complet avant le devis, et nous disons franchement quand un meuble ne pourra pas sortir en un seul morceau." },
      { t: "Les corniches, et le gabarit qu'elles imposent", d: "La moyenne et la grande corniche desservent la commune par des routes étroites et sinueuses, avec des virages en épingle où un porteur de vingt mètres cubes ne passe pas partout. Certains accès privatifs sont encore plus contraints. Nous repérons l'itinéraire complet, montée et descente, avant d'engager le véhicule. Quand le gabarit ne convient pas, la navette en utilitaire est la seule solution, et elle est chiffrée dès le devis plutôt qu'ajoutée le jour même." },
      { t: "Un patrimoine et un bâti protégés", d: "Le village et ses abords relèvent d'un cadre protégé qui limite ce qu'on peut installer sur l'espace public. Un monte-meuble n'est pas posable, une emprise au sol se demande, et le bâti ancien impose sa prudence : encadrements de pierre, seuils usés, murs anciens. Nous protégeons systématiquement les points de passage, et nous adaptons la méthode plutôt que de forcer un meuble dans une ouverture qui n'a pas été conçue pour lui." },
      { t: "La saison, qui referme les accès", d: "Èze-Village est l'un des sites les plus visités de la région. En haute saison, l'affluence sature les abords et rend le stationnement d'un véhicule utilitaire quasiment impossible en journée. Le créneau utile se situe très tôt le matin, avant l'ouverture des commerces et l'arrivée des cars. Nous vous le disons dès le devis : à Èze, l'heure de début n'est pas un détail d'organisation, c'est ce qui détermine si la journée tient ou non." }
    ],
    jour: [
      { h: "6 h 30", t: "Montée par la corniche avec le véhicule au gabarit relevé, avant l'affluence touristique." },
      { h: "7 h 00", t: "Positionnement à l'entrée du village, mise en place du parcours de portage sur les calades." },
      { h: "11 h 00", t: "Portage manuel par rotations, avec protection des seuils et des encadrements anciens." },
      { h: "14 h 30", t: "Descente à vide par l'itinéraire repéré, puis livraison à l'adresse d'arrivée." }
    ],
    erreurs: [
      { t: "Donner l'adresse sans préciser le niveau", d: "Bord de mer, moyenne corniche et village n'ont rien en commun. Le même volume peut varier du simple au triple selon l'altitude." },
      { t: "Compter sur un accès véhicule au village", d: "Èze-Village est piéton. Tout se porte, sans exception, et cela se prévoit dès le devis." },
      { t: "Déménager en milieu de journée l'été", d: "L'affluence rend le stationnement impossible. Un départ à six heures trente n'est pas du zèle, c'est la condition pour finir." }
    ]
  },

  "saint-jean-cap-ferrat": {
    titreContexte: ["Une presqu'île de propriétés closes,", "où l'accès se négocie avant la date."],
    titreJour: ["Une journée au Cap-Ferrat,", "annoncée longtemps à l'avance."],
    titreErreurs: ["Ce qui fait échouer un chantier", "derrière un portail fermé."],
    contexte: "Saint-Jean-Cap-Ferrat est une presqu'île résidentielle où la majorité des propriétés sont closes, gardées, et souvent occupées par des propriétaires qui n'y résident pas à l'année. Le déménagement s'y prépare comme un rendez-vous : avec des noms d'équipiers transmis à l'avance, des créneaux convenus, et une discrétion qui fait partie du service autant que la manutention.",
    sections: [
      { t: "Le gardien avant le camion", d: "Sur le Cap-Ferrat, l'interlocuteur du jour J n'est pas toujours le propriétaire mais le gardien ou le personnel de maison. C'est avec lui que se règlent l'heure d'arrivée, l'ouverture du portail, le cheminement autorisé sur la propriété et l'usage éventuel d'un accès de service. Nous transmettons plusieurs jours à l'avance l'identité des équipiers et les immatriculations des véhicules, parce que c'est ce qu'on nous demande et que l'oublier signifie rester dehors. Aucun de nos équipiers ne se présente sans avoir été annoncé." },
      { t: "Des œuvres et du mobilier de valeur", d: "Les propriétés de la presqu'île abritent fréquemment des tableaux, des sculptures, du mobilier d'époque. Ce contenu se traite à l'unité : caisse sur mesure quand c'est nécessaire, protection des arêtes et des cadres, transport séparé du reste, valeur déclarée au contrat. Nous établissons un inventaire contradictoire avant chargement, photos à l'appui, signé des deux côtés. C'est la seule base sérieuse pour établir dans quel état une pièce est partie, et cela protège autant le propriétaire que nous." },
      { t: "Le propriétaire qui n'est pas sur place", d: "Beaucoup de ces logements sont des résidences secondaires. Nous travaillons alors avec un mandataire, une agence ou le gardien, sur la base d'instructions écrites : qui ouvre, qui signe l'inventaire, qui reçoit les photos et le compte rendu. Cette organisation se cale avant le chantier, jamais pendant. Un état des lieux photographique complet est transmis le jour même au propriétaire, où qu'il se trouve." },
      { t: "Des échanges à distance et souvent en anglais", d: "Une part notable des propriétaires de la presqu'île ne réside pas en France et ne parle pas français. Les échanges se font par écrit, sur des fuseaux horaires décalés, avec des délais de réponse qui allongent la préparation. Nous en tenons compte dans le calendrier : ce qui se règle en un appel avec un client local demande ici une semaine d'allers-retours. Anticiper cela évite de bloquer une date qu'on ne pourra pas confirmer." }
    ],
    jour: [
      { h: "8 h 00", t: "Présentation au gardien avec la liste d'équipiers et les immatriculations transmises plusieurs jours avant." },
      { h: "8 h 30", t: "Reconnaissance du cheminement autorisé sur la propriété, protection des accès et des sols." },
      { h: "11 h 30", t: "Traitement des pièces de valeur à l'unité, inventaire contradictoire photographié et signé." },
      { h: "15 h 00", t: "État des lieux de sortie, compte rendu et photos transmis au propriétaire le jour même." }
    ],
    erreurs: [
      { t: "Se présenter sans avoir été annoncé", d: "Sur une propriété gardée, une équipe non annoncée reste au portail. La liste des noms et des immatriculations se transmet plusieurs jours avant." },
      { t: "Compter les œuvres dans le volume global", d: "Un tableau ou une sculpture demande un traitement individuel qui n'a rien à voir avec des mètres cubes. Le signaler au relevé évite d'improviser." },
      { t: "Organiser à distance sans instructions écrites", d: "Qui ouvre, qui signe, qui reçoit le compte rendu. Sans réponse écrite, la journée commence par une heure d'appels." }
    ]
  },

  "cap-d-ail": {
    titreContexte: ["Une commune verticale", "adossée à la Principauté."],
    titreJour: ["Une journée à Cap-d'Ail,", "entre escaliers et façade."],
    titreErreurs: ["Trois erreurs", "qui coûtent cher sur une pente."],
    contexte: "Cap-d'Ail est une commune en pente continue, prise entre la mer et la falaise, adossée à Monaco dont elle prolonge le tissu urbain. Presque rien n'y est plat. Les adresses se rejoignent souvent par des escaliers publics, et beaucoup d'immeubles ont leur entrée à un niveau et leurs fenêtres sur un autre. C'est une commune où le monte-meuble n'est pas un luxe mais parfois la seule solution.",
    sections: [
      { t: "Une ville d'escaliers publics", d: "Le tissu de Cap-d'Ail est traversé de volées d'escaliers qui relient les rues entre elles, et un nombre significatif d'adresses ne sont accessibles que par ces cheminements. Le portage s'y compte en marches, avec des paliers de repos et une équipe dimensionnée en conséquence. Nous relevons le parcours complet avant le devis, du point de stationnement possible jusqu'à la porte. Une adresse à trente mètres du camion peut représenter soixante marches, et c'est cela, pas le volume, qui détermine la durée de la journée." },
      { t: "La frontière monégasque, à quelques mètres", d: "Beaucoup de nos chantiers à Cap-d'Ail relient la commune à la Principauté, parfois sur quelques centaines de mètres. La proximité ne supprime pas les formalités : liste de contenu, justificatifs, valeurs déclarées. Nous préparons ces documents en amont, et nous tenons compte de la circulation aux abords de la frontière, particulièrement dense aux heures de bureau. Un trajet de dix minutes peut en prendre quarante au mauvais moment de la journée." },
      { t: "Le monte-meuble, souvent la seule issue", d: "Quand l'escalier est trop étroit ou le nombre de marches trop élevé, le passage par la façade devient la solution la plus sûre et souvent la moins chère en temps. Encore faut-il qu'il soit posable : il exige une emprise au sol dégagée, un angle compatible avec les balcons et les câbles, et une autorisation d'occupation du domaine public. Ces trois conditions se vérifient au relevé. Nous vous disons avant le devis si le monte-meuble est envisageable, et ce qu'il coûte." },
      { t: "La rupture de charge sur les voies étroites", d: "Les rues qui desservent les hauteurs de la commune sont étroites et en pente, et le croisement y est souvent impossible. Un porteur ne monte pas partout. Nous organisons alors le chantier autour d'un point de rupture de charge, avec une navette en utilitaire entre le camion et la porte. Cette organisation allonge la journée et se chiffre à l'avance, plutôt que d'être découverte sur place au moment où il est trop tard pour s'adapter." }
    ],
    jour: [
      { h: "7 h 00", t: "Positionnement du porteur sur le point de rupture de charge repéré, calage sur la pente." },
      { h: "7 h 30", t: "Montage du monte-meuble si la façade et l'emprise le permettent, sinon mise en place du parcours d'escalier." },
      { h: "11 h 30", t: "Rotations en navette ou passage par la façade selon la méthode retenue au relevé." },
      { h: "14 h 30", t: "Passage de frontière avec les documents préparés, si le trajet rejoint la Principauté." }
    ],
    erreurs: [
      { t: "Mesurer la distance à vol d'oiseau", d: "Trente mètres sur une carte peuvent être soixante marches sur le terrain. Seul le parcours réel, relevé sur place, donne la durée du chantier." },
      { t: "Supposer que le monte-meuble sera posable", d: "Il faut une emprise dégagée, un angle libre et une autorisation. Les trois se vérifient avant, jamais le matin du déménagement." },
      { t: "Traverser vers Monaco sans papiers", d: "La frontière est à quelques centaines de mètres et les formalités restent entières. La liste de contenu se prépare la veille." }
    ]
  },

  "saint-laurent-du-var": {
    titreContexte: ["Une commune coupée en deux", "par la voie rapide et le fleuve."],
    titreJour: ["Une journée à Saint-Laurent,", "entre zone commerciale et pavillons."],
    titreErreurs: ["Ce qui transforme un déménagement simple", "en journée compliquée."],
    contexte: "Saint-Laurent-du-Var est l'une des rares communes de la Côte où l'on déménage sans grande difficulté topographique. Pas de village perché, pas de corniche, pas de ruelle médiévale. Sa difficulté est ailleurs : la commune est traversée par des axes très circulants, structurée par l'une des plus grandes zones commerciales de la région, et son parc de logements va du pavillon des années soixante à la résidence récente avec parking. Le devis se joue sur l'accès et sur le trafic, pas sur le relief.",
    sections: [
      { t: "Une zone commerciale qui dicte les horaires", d: "La concentration de commerces autour de Cap 3000 et des axes qui la desservent génère un trafic considérable, avec des pointes en fin de semaine et en période de soldes ou de fêtes. Un déménagement engagé un samedi après-midi dans ce secteur avance au pas. Nous préférons systématiquement les créneaux de début de matinée en semaine, et nous vous le disons franchement quand la date que vous proposez va coûter deux heures de circulation. Pour les transferts de commerces eux-mêmes, l'intervention se cale hors heures d'ouverture, avec un accès livraison négocié avec la galerie ou le bailleur." },
      { t: "Les axes, la vraie contrainte locale", d: "La commune est coupée par des voies rapides et bordée par le fleuve, ce qui limite le nombre de franchissements possibles. Un itinéraire mal choisi peut ajouter vingt minutes à chaque rotation, et il y en a plusieurs dans une journée. Nous repérons l'itinéraire d'approche et de sortie avant le chantier, en tenant compte de la hauteur sous les ouvrages, qui interdit certains passages aux porteurs. Le trajet le plus court sur une carte n'est presque jamais le plus rapide ici." },
      { t: "Un parc de logements très hétérogène", d: "On trouve à Saint-Laurent des pavillons individuels des années soixante et soixante-dix, des immeubles collectifs de la même époque souvent sans ascenseur ou avec un ascenseur d'origine, et des résidences récentes avec parking souterrain. Ces trois cas n'ont ni le même accès, ni le même temps de chargement, ni le même prix. Le parking souterrain notamment impose une hauteur limitée qui exclut le porteur et oblige à charger à l'extérieur, ce que beaucoup de devis à distance oublient de prévoir." },
      { t: "Le stockage, souvent nécessaire ici", d: "Beaucoup de nos clients laurentins passent d'un pavillon à un appartement, ou l'inverse, avec un décalage de dates. Nous proposons un garde-meuble relais : le mobilier est chargé, inventorié, stocké en caisses scellées, puis livré à la date de votre choix. Le volume reste dans les mêmes contenants du départ à l'arrivée, ce qui évite de payer deux manutentions complètes et limite les risques de casse liés aux manipulations supplémentaires." }
    ],
    jour: [
      { h: "7 h 00", t: "Approche par l'itinéraire repéré, avant la montée du trafic sur les axes principaux." },
      { h: "7 h 30", t: "Positionnement du véhicule, à l'extérieur si le parking souterrain limite la hauteur." },
      { h: "11 h 30", t: "Chargement terminé avant les pointes de circulation de la mi-journée." },
      { h: "14 h 00", t: "Livraison, ou mise en garde-meuble relais si les dates ne se recouvrent pas." }
    ],
    erreurs: [
      { t: "Déménager un samedi près de la zone commerciale", d: "Le trafic y transforme chaque rotation en épreuve. Un mardi matin coûte moins cher et se termine plus tôt, à prestation identique." },
      { t: "Compter sur le parking souterrain", d: "La hauteur libre y exclut presque toujours le porteur. Le chargement se fait dehors, avec une distance de portage qui doit figurer au devis." },
      { t: "Choisir l'itinéraire le plus court", d: "Les franchissements sont peu nombreux et les hauteurs sous ouvrage limitées. Le trajet se repère avant, sinon chaque rotation perd vingt minutes." }
    ]
  },

  "cagnes-sur-mer": {
    titreContexte: ["Trois communes en une,", "et trois façons de déménager."],
    titreJour: ["Une journée cagnoise,", "de la plage au village médiéval."],
    titreErreurs: ["Les trois pièges", "d'une commune à trois visages."],
    contexte: "Cagnes-sur-Mer n'est pas une ville, c'est trois. Le bord de mer et le Cros-de-Cagnes, denses et plats. Le centre, résidentiel et commerçant. Et le Haut-de-Cagnes, village médiéval perché, ceint de ruelles où aucun camion n'entre. Donner un prix sans savoir laquelle des trois est concernée n'a aucun sens, et pourtant c'est ce que font la plupart des devis obtenus en ligne.",
    sections: [
      { t: "Le Haut-de-Cagnes, où le camion reste en bas", d: "Le village médiéval s'organise autour de calades, de passages voûtés et d'escaliers. Les rues y sont souvent trop étroites pour un véhicule utilitaire, et certaines sections sont purement piétonnes. Le principe est simple : on stationne au plus près sur les emplacements praticables, et le reste se fait à la main ou avec du matériel de roulage adapté aux pavés. Le portage se compte en marches et en dénivelé, pas en mètres. C'est ce paramètre, et lui seul, qui détermine le nombre d'équipiers et la durée de la journée." },
      { t: "Un patrimoine qui impose ses règles", d: "Le château et les abords du vieux village relèvent d'un cadre protégé, avec des contraintes sur ce qu'on peut installer et où. Un monte-meuble n'est pas posable partout, et l'emprise au sol devant une façade ancienne se demande. Nous vérifions ces points au relevé plutôt que de le découvrir sur place. Le bâti lui-même impose sa prudence : murs anciens, encadrements de pierre, marches usées. Une protection systématique des angles et des seuils fait partie du travail, pas des options." },
      { t: "Le gabarit, question numéro un", d: "Entre le bord de mer accessible à un porteur de vingt mètres cubes et les ruelles du Haut-de-Cagnes où passe à peine un petit utilitaire, l'écart de méthode est total. Nous mesurons la largeur utile, la hauteur des passages voûtés et l'aire de retournement avant de choisir le véhicule. Quand le porteur ne monte pas, nous organisons une navette, et son coût figure au devis dès le départ. Envoyer un camion trop grand n'est pas une erreur d'appréciation, c'est une journée perdue." },
      { t: "Les rotations de location saisonnière", d: "Le bord de mer cagnois compte beaucoup de logements loués à la saison. Entre deux locataires, il faut parfois vider, stocker et réinstaller dans une fenêtre courte. Nous étiquetons par pièce, nous conservons l'inventaire d'un passage à l'autre, et nous replaçons le mobilier à l'identique. C'est un travail répétitif où la mémoire du chantier précédent fait gagner un temps considérable, à condition de l'avoir consignée." }
    ],
    jour: [
      { h: "7 h 30", t: "Choix du véhicule selon le secteur relevé, porteur en bas de ville, utilitaire pour le village." },
      { h: "8 h 00", t: "Protection des seuils et des encadrements anciens si l'adresse est dans le vieux village." },
      { h: "11 h 00", t: "Rotations à la main sur les calades, avec matériel de roulage adapté aux pavés." },
      { h: "14 h 30", t: "Livraison et remontage, ou mise en garde-meuble entre deux locations." }
    ],
    erreurs: [
      { t: "Demander un prix sans dire quel Cagnes", d: "Bord de mer, centre et Haut-de-Cagnes n'ont rien en commun. Le même volume peut varier du simple au double selon le secteur." },
      { t: "Croire qu'un utilitaire monte partout", d: "Certaines ruelles du village sont piétonnes et d'autres trop étroites. Le relevé tranche, l'estimation à distance se trompe." },
      { t: "Négliger la protection du bâti ancien", d: "Encadrements de pierre et marches usées ne se réparent pas. La protection systématique coûte quelques minutes, son absence coûte un litige." }
    ]
  },

  "grasse": {
    titreContexte: ["La ville des parfums", "et son centre médiéval vertical."],
    titreJour: ["Une journée grassoise,", "entre vieille ville et quartiers étalés."],
    titreErreurs: ["Ce qu'on découvre trop tard", "dans une ville en escalier."],
    contexte: "Grasse est une ville haute, construite en amphithéâtre sur son versant, avec un centre médiéval extrêmement dense et des quartiers résidentiels étalés sur plusieurs kilomètres autour. Le contraste est brutal : on peut y déménager une villa avec allée privée le matin et un troisième étage sans ascenseur au bout d'une ruelle en pente l'après-midi. Le mot Grasse sur un devis ne dit donc rien tant qu'on n'a pas l'adresse exacte.",
    sections: [
      { t: "Le centre ancien, dense et vertical", d: "La vieille ville de Grasse est un tissu médiéval serré, avec des rues en pente, des escaliers et des immeubles hauts sans ascenseur. Beaucoup d'adresses ne sont pas accessibles en véhicule, ou seulement par un utilitaire de petit gabarit sur un créneau horaire. Le portage y est la norme et se compte en volées de marches. Nous relevons le parcours complet avant le devis, du point de stationnement possible jusqu'à la porte, parce que c'est ce parcours qui fixe la durée et donc le prix. Aucun formulaire en ligne ne peut deviner soixante marches." },
      { t: "Un patrimoine bâti à protéger", d: "Le centre historique comporte du bâti ancien et des secteurs protégés, avec les contraintes qui vont avec : ce qu'on peut installer sur la voie publique, où l'on peut poser un monte-meuble, comment on protège un seuil ou un encadrement. Nous vérifions ces points en amont. Les cages d'escalier anciennes demandent par ailleurs une protection soignée : rampes, murs, marches. Ce n'est pas du zèle, c'est ce qui évite une retenue sur caution ou un litige avec le propriétaire." },
      { t: "Les commerces et l'activité du parfum", d: "Grasse vit de son industrie et de son commerce, et nous intervenons régulièrement pour des boutiques, des ateliers et des locaux professionnels du secteur. L'enjeu est toujours le même : limiter la fermeture. Nous chargeons le stock d'abord, l'agencement ensuite, et nous intervenons hors heures d'ouverture quand la rue le permet. Pour les locaux qui manipulent des produits sensibles, nous adaptons le conditionnement et l'ordre de chargement aux consignes que vous nous donnez." },
      { t: "Un parc immobilier très contrasté", d: "Entre les immeubles anciens du centre, les résidences des années soixante-dix des quartiers intermédiaires et les villas des hauteurs, Grasse offre presque tous les cas de figure. Chacun a sa contrainte dominante : l'escalier pour le centre, l'ascenseur d'origine pour les résidences, l'allée et le portail pour les villas. Nous nous déplaçons systématiquement avant de chiffrer, parce qu'une même surface peut demander trois équipiers ou six selon l'adresse." }
    ],
    jour: [
      { h: "7 h 30", t: "Positionnement au plus près du point de portage, souvent hors du centre ancien." },
      { h: "8 h 00", t: "Protection de la cage d'escalier, des rampes et des seuils dans le bâti ancien." },
      { h: "11 h 30", t: "Rotations organisées pour limiter la fatigue sur les volées de marches." },
      { h: "14 h 30", t: "Livraison et remontage, état des lieux des parties communes aux deux adresses." }
    ],
    erreurs: [
      { t: "Donner une adresse sans préciser l'étage", d: "Dans le centre grassois, l'étage sans ascenseur est le premier facteur de durée, bien avant le volume. C'est ce qui fait varier le devis du simple au double." },
      { t: "Croire que le camion s'approche", d: "Beaucoup de ruelles du centre sont inaccessibles ou soumises à créneau. Le point de stationnement réel se repère avant, pas le matin même." },
      { t: "Oublier la cave ou le grenier", d: "Le bâti ancien grassois en comporte souvent, et ils sont rarement vides. Non comptés au relevé, ils ajoutent des heures imprévues." }
    ]
  },

  "le-cannet": {
    titreContexte: ["Un balcon au-dessus de Cannes,", "et tout se joue sur la pente."],
    titreJour: ["Une journée au Cannet,", "d'un niveau à l'autre."],
    titreErreurs: ["Trois oublis fréquents", "sur une commune étagée."],
    contexte: "Le Cannet occupe le versant qui domine Cannes, et cette position commande tout. La commune s'étage du bas, presque continu avec Cannes, jusqu'aux hauteurs résidentielles et au vieux village. On y déménage rarement à plat : il y a presque toujours une pente, un escalier extérieur ou un accès en contrebas, et c'est cela qu'un devis sérieux doit avoir mesuré.",
    sections: [
      { t: "Des copropriétés nombreuses et réglementées", d: "Le parc cannettan est largement collectif, avec beaucoup de résidences des années soixante à quatre-vingt-dix disposant d'un règlement précis. Réservation d'ascenseur, créneau horaire, protection des parties communes et attestation d'assurance sont demandées presque systématiquement. Nous contactons le syndic ou le gardien dès l'acceptation du devis et nous fournissons les pièces sans attendre qu'on nous les réclame. C'est la différence entre une équipe qui commence à huit heures et une équipe qui attend dans la rue." },
      { t: "Un parc immobilier de plusieurs époques", d: "On trouve au Cannet des immeubles anciens dans le vieux village, un parc collectif abondant des décennies soixante à quatre-vingt-dix, et des résidences récentes. Les ascenseurs d'origine des immeubles les plus anciens sont souvent trop petits pour un canapé ou une armoire montée : ils servent aux cartons, pas au mobilier. Nous mesurons la cabine et la porte au relevé, et nous décidons alors entre portage et monte-meuble, plutôt que de l'improviser." },
      { t: "Accompagner les départs en résidence", d: "Une part significative de nos interventions cannettanes concerne des personnes âgées quittant un appartement occupé longtemps pour une structure adaptée, avec une réduction de surface importante. Ce travail se fait au rythme de la personne, avec le tri qu'il suppose et souvent la famille au téléphone. Ce qui ne rentre pas est stocké, donné ou évacué selon votre décision. Nous ne bousculons pas ces chantiers, et nous prévoyons le temps qu'ils demandent réellement." },
      { t: "Le gabarit sur des voies en pente", d: "Les rues qui montent vers le vieux village et les hauteurs sont étroites, sinueuses, et le stationnement y est difficile. Un porteur ne monte pas partout, et surtout ne redescend pas partout. Nous repérons l'itinéraire complet, y compris la sortie, et nous calons le véhicule sur la déclivité. Quand le gabarit ne passe pas, la navette en utilitaire est la solution, et son surcoût est annoncé au devis, jamais ajouté après." }
    ],
    jour: [
      { h: "8 h 00", t: "Présentation au gardien, activation de la réservation d'ascenseur, remise de l'attestation d'assurance." },
      { h: "8 h 30", t: "Protection des parties communes et de la cabine d'ascenseur, état des lieux d'entrée." },
      { h: "12 h 00", t: "Portage ou monte-meuble pour les volumineux, selon la mesure faite au relevé." },
      { h: "15 h 00", t: "Livraison, remontage et vérification des communs avec le gardien avant départ." }
    ],
    erreurs: [
      { t: "Se fier à l'ascenseur sans l'avoir mesuré", d: "Les cabines d'origine acceptent les cartons et refusent le mobilier. Le découvrir le matin ajoute une demi-journée de portage non prévue." },
      { t: "Oublier de prévenir le syndic", d: "Créneau imposé, attestation à fournir, communs à protéger. Trois exigences qui se règlent en amont ou bloquent l'accès." },
      { t: "Ignorer la pente à la sortie", d: "Monter est simple, redescendre chargé sur une voie étroite ne l'est pas. L'itinéraire de sortie se repère au même titre que celui d'approche." }
    ]
  },

  "villeneuve-loubet": {
    titreContexte: ["Une marina, un village, des collines,", "et trois logiques d'accès."],
    titreJour: ["Une journée à Villeneuve-Loubet,", "entre résidence fermée et village."],
    titreErreurs: ["Ce qui bloque un camion", "devant une résidence fermée."],
    contexte: "Villeneuve-Loubet réunit sur un même territoire une marina emblématique, un village perché autour de son château, et des quartiers de collines pavillonnaires. Trois mondes, trois modes d'accès, et une constante : la plupart des adresses de bord de mer se trouvent dans des ensembles fermés dont l'accès se prépare avant le jour J, jamais devant le portail.",
    sections: [
      { t: "Les grands ensembles du bord de mer", d: "La Marina Baie des Anges et les résidences voisines forment des ensembles fermés avec gardien, parkings dédiés et circulations internes. On n'y accède pas librement : il faut un créneau, parfois un badge, et la connaissance du cheminement interne jusqu'à l'entrée de l'immeuble concerné. Nous prenons contact avec le gardien ou la régie dès l'acceptation du devis pour obtenir ces éléments. La distance entre le point de stationnement autorisé et la porte peut atteindre plusieurs dizaines de mètres, ce qui doit figurer au devis, sous peine d'une mauvaise surprise pour tout le monde." },
      { t: "Le syndic, interlocuteur incontournable", d: "Dans ces copropriétés, le règlement encadre précisément les déménagements : jours et heures autorisés, protection des parties communes, ascenseur à réserver, parfois dépôt de garantie. Un état des lieux des communs avant et après est fréquemment demandé. Nous fournissons attestation d'assurance et liste des équipiers sans qu'on ait à les réclamer, et nous réalisons l'état des lieux contradictoire. C'est ce qui protège votre caution autant que notre réputation." },
      { t: "Le port et les logements de plaisance", d: "La proximité du port amène une clientèle spécifique, avec des logements souvent compacts, des calendriers dictés par les contrats et parfois du mobilier ou du matériel de bateau à transporter. L'accès aux zones portuaires est réglementé et se prépare la veille. Ces chantiers sont généralement de faible volume mais de forte contrainte horaire, et ils demandent une équipe qui ne découvre pas les lieux le matin même." },
      { t: "La saison, qui change tout au bord de mer", d: "L'été, les axes littoraux et les abords des résidences de bord de mer sont saturés, et les créneaux d'accès autorisés se réduisent. Un déménagement estival n'est pas impossible, il est plus lent, et cela doit se voir au planning. Nous vous indiquons les périodes où le même chantier prendra une heure de plus, et nous proposons systématiquement un départ matinal, seul moyen fiable de tenir la journée annoncée." }
    ],
    jour: [
      { h: "7 h 30", t: "Présentation au gardien avec la liste des équipiers transmise la veille, récupération du badge d'accès." },
      { h: "8 h 00", t: "État des lieux contradictoire des parties communes, réservation d'ascenseur activée, protections posées." },
      { h: "11 h 30", t: "Chargement avec portage sur la circulation interne jusqu'au point de stationnement autorisé." },
      { h: "14 h 30", t: "Livraison, remontage, état des lieux de sortie signé avec le gardien." }
    ],
    erreurs: [
      { t: "Arriver sans avoir prévenu le gardien", d: "Dans un ensemble fermé, l'accès sans créneau validé est refusé. Le camion attend, et la journée se termine avant d'avoir commencé." },
      { t: "Sous-estimer la distance de portage interne", d: "Entre le stationnement autorisé et la porte, il y a parfois cinquante mètres et deux circulations. Cela se mesure au relevé et se chiffre." },
      { t: "Déménager en plein été sans le prévoir", d: "Les accès se restreignent et les axes saturent. Ce n'est pas rédhibitoire, mais un départ à sept heures trente devient indispensable." }
    ]
  },

  "monaco": {
    titreContexte: ["Deux kilomètres carrés", "qui ne se traversent pas comme une ville."],
    titreJour: ["Une journée en Principauté,", "de la conciergerie à la frontière."],
    titreErreurs: ["Ce qui bloque un déménagement", "monégasque avant même qu'il commence."],
    contexte: "Déménager à Monaco n'est pas déménager dans une ville de plus. La Principauté est un État souverain de deux kilomètres carrés, bâti en hauteur sur une pente, où chaque mètre de voirie est compté et où l'accès aux immeubles obéit à des règles précises. Un déménageur qui découvre cela sur place perd sa journée, et vous avec.",
    sections: [
      { t: "Une frontière, donc des formalités", d: "Monaco n'appartient pas à l'Union européenne au sens douanier de la même façon que la France, et un déménagement qui traverse la frontière demande d'avoir ses papiers en ordre. Nous préparons la liste détaillée du contenu, en français, avec les valeurs déclarées. Ce document sert autant au passage qu'à l'assurance, et son absence transforme une formalité de quelques minutes en immobilisation d'une demi-journée. Pour un déménagement entre Monaco et une commune française voisine, la distance est ridicule et la paperasse ne l'est pas : c'est le paradoxe de cette destination, et la raison pour laquelle on ne l'improvise pas." },
      { t: "Des immeubles qui imposent leur créneau", d: "Le parc monégasque est majoritairement composé d'immeubles de standing gérés avec rigueur. Le règlement fixe presque toujours des plages horaires pour les déménagements, exige la réservation de l'ascenseur, impose la protection des parties communes et prévoit un état des lieux avant et après. Certaines résidences demandent aussi l'identité et l'immatriculation des équipes plusieurs jours à l'avance. Nous traitons ces demandes en amont avec la régie ou le concierge, parce qu'un dossier incomplet le matin même se solde par un refus d'accès, sans discussion possible." },
      { t: "Du mobilier qui vaut ce qu'il vaut", d: "Les logements monégasques abritent fréquemment des œuvres, du mobilier de créateur, des pièces de collection. Ce contenu ne se traite pas au volume mais à l'unité : caisse sur mesure, protection des arêtes, transport séparé quand c'est nécessaire, valeur déclarée au contrat. Nous établissons un inventaire contradictoire avant le chargement, signé des deux côtés. C'est la seule façon sérieuse de savoir dans quel état une pièce est partie, et donc la seule base solide en cas de litige." },
      { t: "La voirie, comptée au mètre", d: "Sur un territoire aussi dense, aucun stationnement long ne s'improvise. L'occupation de la voie publique se demande auprès des services compétents, avec la longueur exacte du véhicule, la date et la plage horaire. Les rues en pente et les tunnels imposent en outre des contraintes de gabarit et de hauteur qui interdisent certains itinéraires aux porteurs. Nous repérons le trajet complet, montée et sortie, avant d'engager quoi que ce soit." }
    ],
    jour: [
      { h: "7 h 00", t: "Présentation des équipes au poste de garde ou à la conciergerie, avec les pièces transmises à l'avance." },
      { h: "7 h 30", t: "Réservation de l'ascenseur activée, protection des parties communes posée, état des lieux d'entrée signé." },
      { h: "11 h 00", t: "Chargement des pièces de valeur en dernier, en caisses individuelles, inventaire contradictoire à l'appui." },
      { h: "14 h 00", t: "Passage de frontière avec la liste de contenu, puis livraison et remontage." }
    ],
    erreurs: [
      { t: "Croire que la proximité simplifie", d: "Beaulieu est à quinze minutes et pourtant la frontière change tout : documents, formalités, règles d'accès. Un déménagement Monaco-France se prépare comme un international court, pas comme un trajet local." },
      { t: "Réserver l'ascenseur le jour même", d: "La plupart des résidences exigent un préavis. Sans réservation validée, l'accès est refusé et la journée est perdue, camion chargé devant l'immeuble." },
      { t: "Déclarer un volume sans les pièces de valeur", d: "Une œuvre ou un meuble de créateur ne se compte pas en mètres cubes mais en traitement spécifique. Le découvrir le matin fait exploser la durée du chantier." }
    ]
  },

  "cannes": {
    titreContexte: ["Onze mois normaux,", "et quelques semaines impossibles."],
    titreJour: ["Une journée cannoise,", "calée avant le premier congrès."],
    titreErreurs: ["Trois façons de perdre", "une journée à Cannes."],
    contexte: "Cannes vit à deux rythmes. Onze mois par an, c'est une ville balnéaire dense où l'on déménage normalement. Pendant les congrès et le festival, la circulation, l'hébergement et le stationnement se referment presque complètement, et une date mal choisie coûte une journée entière. Savoir quand ne pas déménager fait ici partie du métier.",
    sections: [
      { t: "Le calendrier des congrès commande tout", d: "Le Palais des Festivals accueille des événements majeurs une bonne partie de l'année, et pas seulement en mai. Pendant ces périodes, les axes menant à la Croisette sont saturés, le stationnement disparaît, et les autorisations de voirie deviennent difficiles à obtenir sur certains secteurs. Nous consultons le calendrier avant de proposer une date, et nous préférons vous conseiller de décaler de quarante-huit heures plutôt que de vous facturer une journée passée à attendre. Un déménagement calé un mardi de basse saison coûte moins cher et se déroule mieux qu'un samedi de congrès, à prestation identique." },
      { t: "Des copropriétés fermées et réglementées", d: "Le parc cannois compte beaucoup de résidences avec gardien, portail et règlement intérieur précis. Réservation de l'ascenseur, créneau horaire imposé, protection obligatoire des parties communes, parfois caution : ces exigences ne sont pas négociables le matin même. Nous prenons contact avec le syndic ou le gardien dès l'acceptation du devis, et nous fournissons l'attestation d'assurance qui est presque toujours demandée. C'est ce qui fait la différence entre entrer à huit heures et attendre le retour du gardien à onze." },
      { t: "Les commerces et le Suquet", d: "Cannes est aussi une ville de commerces, et le vieux quartier du Suquet impose ses ruelles en pente, ses escaliers et ses accès réduits. Pour une boutique, l'enjeu est de rouvrir vite : nous chargeons le stock d'abord, l'agencement ensuite, la vitrine en dernier, et nous intervenons hors heures d'ouverture quand la rue le permet. Dans le Suquet, le porteur reste en bas et l'on travaille en navette, avec un portage qui se compte en marches et pas en mètres." },
      { t: "Le stationnement, à demander tôt", d: "Sur la Croisette et les axes du centre, l'emplacement réservé n'est pas un confort mais une condition d'exécution. La demande précise la longueur du véhicule, la date et la plage horaire, et les panneaux sont posés à l'avance pour que la place soit libre. En haute saison, ces demandes prennent plus de temps à instruire : c'est un argument de plus pour engager le dossier dès que la date est arrêtée." }
    ],
    jour: [
      { h: "7 h 00", t: "Prise de l'emplacement réservé avant l'arrivée du trafic pendulaire et des livraisons du centre." },
      { h: "7 h 30", t: "Présentation au gardien, activation de la réservation d'ascenseur, protection des communs." },
      { h: "11 h 30", t: "Fin des volumineux avant le pic de circulation de la mi-journée sur les axes du bord de mer." },
      { h: "14 h 30", t: "Livraison et remontage, état des lieux de sortie avec le gardien." }
    ],
    erreurs: [
      { t: "Choisir une date sans regarder le calendrier", d: "Un congrès au Palais transforme un déménagement d'une journée en chantier de deux. Décaler de quarante-huit heures ne coûte rien, subir coûte cher." },
      { t: "Ignorer le règlement de copropriété", d: "Créneau imposé, ascenseur à réserver, attestation d'assurance à fournir. Ces trois points se règlent en amont ou bloquent l'accès le matin." },
      { t: "Envoyer un porteur dans le Suquet", d: "Les ruelles et les escaliers du vieux quartier excluent les gros gabarits. La navette n'est pas une dégradation du service, c'est la seule méthode qui fonctionne." }
    ]
  },

  "menton": {
    titreContexte: ["La dernière ville avant l'Italie,", "et la plus âgée de la Côte."],
    titreJour: ["Une journée mentonnaise,", "au rythme de ceux qui partent."],
    titreErreurs: ["Ce qu'on nous appelle réparer", "quand il est déjà trop tard."],
    contexte: "Menton est la dernière ville avant l'Italie, et la plus âgée de la Côte d'Azur par sa population. Ces deux caractéristiques dessinent la plupart des déménagements qu'on nous y demande : des passages de frontière courts mais réels, et beaucoup de dossiers où le déménagement accompagne une étape de vie plutôt qu'un simple changement d'adresse.",
    sections: [
      { t: "Accompagner un départ en résidence", d: "Une partie importante de nos interventions à Menton concerne des personnes âgées qui quittent un logement occupé depuis trente ou quarante ans pour une résidence, souvent avec une surface divisée par trois. Ce n'est pas un déménagement, c'est un tri. Nous travaillons à un rythme adapté, nous laissons le temps de décider ce qui part, et nous coordonnons avec la famille quand elle est éloignée. Ce qui ne rentre pas dans le nouveau logement est stocké, donné ou évacué selon votre décision, jamais selon la nôtre. C'est un travail lent, et il doit l'être." },
      { t: "Le passage vers l'Italie", d: "Vintimille est à dix minutes, et beaucoup de Mentonnais déménagent d'un côté ou de l'autre de la frontière. Le trajet est court, la préparation ne l'est pas : liste de contenu, justificatif de domicile, valeurs déclarées. Nous préparons ces pièces avant le départ. La circulation aux abords du poste frontière est par ailleurs très chargée certains jours, notamment de marché, ce qui influe sur l'heure à laquelle on engage le camion." },
      { t: "La vieille ville en gradins", d: "Le centre historique de Menton monte en escaliers depuis le port jusqu'à la basilique. Les rues y sont étroites, souvent inaccessibles aux véhicules, et le portage se compte en volées de marches. On y travaille en navette, avec des charges réduites et une équipe renforcée. Nous mesurons le parcours au relevé, marche par marche s'il le faut, parce que c'est ce parcours et non le volume qui détermine la durée de la journée." },
      { t: "Vider une maison après un décès", d: "Les successions représentent une part réelle de notre activité mentonnaise. Il s'agit alors de vider entièrement un logement, en séparant ce que la famille conserve, ce qui peut être repris et ce qui part en déchetterie. Nous établissons un inventaire, nous respectons les délais fixés par le notaire, et nous rendons le logement propre. Nous savons que ces chantiers se déroulent dans un moment difficile, et nous n'en rajoutons pas." }
    ],
    jour: [
      { h: "8 h 30", t: "Point avec la personne concernée ou la famille, rappel de ce qui part, de ce qui reste et de ce qui se stocke." },
      { h: "9 h 00", t: "Chargement progressif, sans précipitation, en commençant par les pièces déjà triées." },
      { h: "13 h 00", t: "Vérification des documents de passage si le trajet franchit la frontière italienne." },
      { h: "15 h 00", t: "Installation dans le nouveau logement, mobilier positionné selon le plan convenu à l'avance." }
    ],
    erreurs: [
      { t: "Traiter une entrée en résidence comme un déménagement ordinaire", d: "Le volume diminue de deux tiers et chaque objet demande une décision. Prévoir une demi-journée pour ce travail garantit de le faire mal." },
      { t: "Partir vers l'Italie sans liste de contenu", d: "Dix minutes de route ne dispensent d'aucune formalité. Le document se prépare avant, pas au poste frontière." },
      { t: "Sous-estimer les escaliers de la vieille ville", d: "Une adresse à cent mètres du camion peut représenter quatre-vingts marches. C'est le vrai facteur de durée, bien avant le nombre de mètres cubes." }
    ]
  },

  "antibes": {
    titreContexte: ["Trois villes en une,", "et trois méthodes différentes."],
    titreJour: ["Une journée antiboise,", "du quai jusqu'aux remparts."],
    titreErreurs: ["Les trois questions", "qu'un devis antibois doit poser."],
    contexte: "Antibes cumule trois villes en une : un centre historique enfermé dans ses remparts, deux ports dont le plus grand de la Méditerranée pour les grandes unités, et des quartiers résidentiels étalés jusqu'à Juan-les-Pins. Trois secteurs, trois méthodes, et un devis qui n'a pas de sens tant qu'on ne sait pas duquel il s'agit.",
    sections: [
      { t: "Port Vauban et les gens de mer", d: "La présence du port structure une partie de la demande locale : équipages, personnels de yachts, résidents saisonniers qui déménagent au rythme des contrats. Ces déménagements ont leurs particularités, des volumes souvent modestes mais des calendriers serrés et parfois des départs décidés en quelques jours. L'accès aux quais est réglementé et demande un badge ou une autorisation, ce qui se prépare la veille et pas le matin. Nous avons l'habitude de ces chantiers courts et pressés, et nous savons qu'un jour de retard peut coûter un embarquement." },
      { t: "Le vieux Antibes dans ses remparts", d: "Le centre historique est ceint de remparts et desservi par des rues étroites où le stationnement est rare et le gabarit limité. Certaines portes d'accès sont contraintes en hauteur. Un porteur classique n'y entre pas partout, et l'on organise le chantier autour d'un point de rupture de charge, avec une navette en utilitaire. Le bâti ancien ajoute sa propre contrainte : escaliers étroits, paliers courts, portes basses. Tout cela se mesure avant, sur place, jamais au téléphone." },
      { t: "Les autorisations, secteur par secteur", d: "La demande d'occupation de la voie publique ne se traite pas de la même façon selon que l'adresse se trouve dans le centre ancien, sur le front de mer ou dans un quartier résidentiel. Les délais d'instruction et les emplacements possibles diffèrent. Nous déposons la demande adaptée au secteur concerné, avec la longueur exacte du véhicule, et nous posons les panneaux réglementaires à l'avance pour que la place soit effectivement libre à l'heure prévue." },
      { t: "Commerces et saisonnalité", d: "Antibes et Juan-les-Pins comptent de nombreux commerces dont l'activité suit fortement la saison. Pour une boutique ou un restaurant, la question n'est pas le prix du déménagement mais le nombre de jours de fermeture. Nous organisons le transfert hors heures d'ouverture, stock d'abord et agencement ensuite, avec l'objectif d'une réouverture le lendemain. Cela suppose un plan d'implantation validé avant le jour J, ce que nous préparons avec vous." }
    ],
    jour: [
      { h: "7 h 00", t: "Prise de l'emplacement réservé, adapté au secteur, avant l'ouverture des commerces." },
      { h: "7 h 30", t: "Mise en place du point de rupture de charge si l'adresse est intra-muros, protection du parcours." },
      { h: "11 h 00", t: "Rotations en navette pour le centre ancien, chargement direct ailleurs." },
      { h: "14 h 30", t: "Livraison, remontage et positionnement selon le plan convenu." }
    ],
    erreurs: [
      { t: "Demander un devis sans préciser le secteur", d: "Intra-muros, front de mer et quartiers résidentiels n'ont ni le même accès ni le même prix. Le même volume peut varier du simple au double selon l'adresse exacte." },
      { t: "Compter sur un accès au quai sans autorisation", d: "Les zones portuaires sont réglementées. Le badge ou l'autorisation se demande la veille, et sans lui le camion reste dehors." },
      { t: "Envoyer un porteur dans les remparts", d: "Largeur de rue et hauteur de porte excluent les gros gabarits sur une partie du centre ancien. La navette est la méthode, pas le pis-aller." }
    ]
  },

  "mandelieu": {
    titreContexte: ["Entre l'Estérel et les marinas,", "un déménagement souvent piloté à distance."],
    titreJour: ["Une journée à Mandelieu,", "quand le propriétaire n'est pas là."],
    titreErreurs: ["Ce qui fait attendre un camion", "devant un portail fermé."],
    contexte: "Mandelieu-la-Napoule s'étire entre le massif de l'Estérel et la mer, avec ses marinas, ses golfs et une part importante de résidences secondaires. La commune se déménage rarement en urgence et souvent à distance : beaucoup de propriétaires n'habitent pas sur place, et le chantier se pilote autant par téléphone que sur le terrain.",
    sections: [
      { t: "Les marinas et l'accès aux pontons", d: "Les résidences en bord de marina ont des accès spécifiques : voies privées, portails télécommandés, parfois passage par un ponton ou une passerelle. Le stationnement d'un véhicule long y est presque toujours contraint, et les gestionnaires imposent souvent des horaires. Nous prenons contact avec la gestion de la résidence avant le jour J pour obtenir les codes, les créneaux et les éventuelles restrictions de tonnage. Un portail qui ne s'ouvre pas est une journée perdue, et cela ne se règle pas depuis le trottoir." },
      { t: "Un calendrier dicté par la saison", d: "L'été, la circulation sur les axes littoraux et l'accès aux quartiers de bord de mer se dégradent nettement. Le mimosa amène par ailleurs sa propre affluence en fin d'hiver. Ces périodes ne sont pas impossibles, elles sont plus lentes, et cela doit se voir dans le planning plutôt que dans une mauvaise surprise. Nous vous indiquons franchement les créneaux où le même chantier prendra une heure de plus, et vous décidez." },
      { t: "Le propriétaire qui n'est pas là", d: "Une grande partie des logements de Mandelieu sont des résidences secondaires. Nous travaillons régulièrement avec un mandataire, un voisin ou une agence pour la remise des clés, et nous réalisons un état des lieux photographique à l'entrée comme à la sortie. L'inventaire est transmis au propriétaire le jour même. Cette organisation à distance demande d'être cadrée par écrit avant le chantier : qui ouvre, qui signe, qui reçoit les photos." },
      { t: "Les rotations de location saisonnière", d: "Entre deux locations, il faut parfois vider, stocker et réinstaller dans une fenêtre de quelques heures. C'est un exercice de logistique plus que de manutention : le mobilier part en garde-meuble étiqueté par pièce, et revient dans le même ordre. Nous conservons l'inventaire d'un passage à l'autre, ce qui évite de tout recompter à chaque rotation et réduit le coût des allers-retours." }
    ],
    jour: [
      { h: "8 h 00", t: "Récupération des clés auprès du mandataire ou de l'agence, état des lieux photographique d'entrée." },
      { h: "8 h 30", t: "Ouverture du portail avec les codes obtenus en amont, positionnement du véhicule selon les contraintes de la résidence." },
      { h: "12 h 00", t: "Chargement et étiquetage par pièce, inventaire transmis au propriétaire absent." },
      { h: "15 h 00", t: "Livraison ou mise en garde-meuble, état des lieux de sortie et restitution des clés." }
    ],
    erreurs: [
      { t: "Arriver sans les codes de la résidence", d: "Portails et voies privées se traversent avec un code ou pas du tout. L'obtenir la veille prend cinq minutes, le découvrir sur place coûte une matinée." },
      { t: "Déménager en pleine saison sans le savoir", d: "L'été et la période du mimosa allongent les temps de trajet et compliquent l'accès. Ce n'est pas rédhibitoire, mais cela doit être au planning." },
      { t: "Organiser à distance sans écrit", d: "Qui ouvre, qui signe, qui reçoit l'inventaire. Sans réponse écrite à ces trois questions, une remise de clés se transforme en attente." }
    ]
  }
};

Object.assign(window, { VILLE_FOND });
