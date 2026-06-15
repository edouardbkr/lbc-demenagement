// route-data.jsx — Pages "trajet" (corridors longue distance & international). Clé = data-route.
const ROUTES = {
  "nice-paris": {
    from: "Nice", to: "Paris", file: "Demenagement-Nice-Paris.html", km: "930 km", duree: "≈ 9 h de route", pays: "France",
    lede: "Déménagement Nice → Paris : notre liaison longue distance la plus fréquente. Camion dédié, une seule équipe, devis ferme sous 24h.",
    intro: "Quitter la Méditerranée pour la capitale, c'est notre trajet phare : on l'assure quasiment chaque semaine. On charge sur la Côte d'Azur et on livre dans Paris intra-muros ou en proche couronne, avec une seule équipe du départ à l'arrivée, un camion dédié et plombé. Pas de groupage, pas de transbordement dans un entrepôt, pas de vos cartons mélangés à ceux d'un autre. Le défi d'un Nice–Paris ne se joue pas sur la route, mais à l'arrivée : étages haussmanniens, cours exiguës et stationnement parisien réglementé, qu'on anticipe dès le devis.",
    points: [
      { t: "Stationnement parisien", d: "Autorisation d'occupation de voirie demandée en amont auprès de la Ville de Paris, emplacement réservé devant l'immeuble pour ne pas perdre une heure le jour J." },
      { t: "Immeubles haussmanniens", d: "Étages élevés sans ascenseur, cages d'escalier en colimaçon, cours étroites : on prévoit le monte-meuble par la façade dès le devis, jamais en surprise." },
      { t: "Trajet direct et plombé", d: "Camion dédié à votre seul chargement, scellé au départ de Nice et livré en une traite, avec une fenêtre d'arrivée annoncée et tenue." }
    ],
    deep: [
      { t: "Paris, le vrai défi est à l'arrivée", p: "Sur un Nice–Paris, la route est la partie facile. Le casse-tête, c'est l'arrivée parisienne : immeubles haussmanniens aux escaliers en colimaçon, derniers étages sans ascenseur, cours intérieures où le camion ne rentre pas, et un stationnement réglementé partout. On repère l'adresse en amont, on demande l'autorisation de voirie et on prévoit le monte-meuble par la façade quand l'escalier ne passe pas. Tout est chiffré au devis, pour qu'aucune contrainte parisienne ne devienne un supplément le jour même." },
      { t: "Intra-muros ou couronne, on connaît", p: "Que vous arriviez dans un studio du Marais, un familial du 15e, un appartement de Boulogne ou une maison de banlieue, la logistique change. Paris intra-muros impose des créneaux, des rues étroites et des stationnements minutés ; la proche couronne offre plus de place mais des trajets de portage parfois longs. On adapte le véhicule (un gros porteur ne rentre pas partout dans Paris) et on transborde avec un utilitaire plus maniable quand l'adresse l'exige." },
      { t: "Le camion dédié, pas le groupage", p: "Beaucoup de déménageurs longue distance font du groupage : vos affaires attendent en entrepôt qu'un camion se remplisse avec d'autres déménagements, puis sont transbordées. Résultat : des délais flous et des risques de casse à chaque manipulation. Nous, c'est un camion dédié à votre seul chargement, plombé au départ de Nice. Une seule équipe, une seule manipulation au départ, une seule à l'arrivée, et une date d'arrivée fiable." },
      { t: "Garde-meuble relais entre les deux", p: "Sur un grand déménagement, les dates de départ et d'arrivée ne coïncident pas toujours : un bail qui se termine avant que l'autre commence, des travaux en cours, une vente qui traîne. On propose un garde-meuble en box sécurisé pour faire le relais, à Nice avant le départ ou à l'arrivée, sans vous obliger à improviser. Vos affaires restent protégées et assurées le temps qu'il faut." }
    ],
    faq: [
      { q: "Combien de temps dure un déménagement Nice–Paris ?", a: "Le transport représente une journée de route (≈ 930 km). On charge un jour, on livre dans la foulée selon une fenêtre d'arrivée annoncée et tenue, sans attente en entrepôt." },
      { q: "Gérez-vous le monte-meuble à Paris ?", a: "Oui, et c'est souvent indispensable dans les immeubles haussmanniens à escaliers étroits. Il est repéré et chiffré dès le devis, jamais ajouté en surprise le jour J." },
      { q: "Faites-vous du groupage ou un camion dédié ?", a: "Un camion dédié à votre seul chargement, plombé au départ de Nice. Pas de groupage, pas de transbordement, pas de cartons mélangés à ceux d'un autre client." },
      { q: "Gérez-vous le stationnement à Paris ?", a: "Oui, on dépose la demande d'autorisation d'occupation de voirie auprès de la Ville de Paris pour réserver l'emplacement camion devant votre immeuble." },
      { q: "Puis-je stocker mes affaires entre le départ et l'arrivée ?", a: "Oui, on propose un garde-meuble relais en box sécurisé si vos dates ne coïncident pas, à Nice ou à l'arrivée, avec vos affaires assurées." }
    ]
  },
  "nice-lyon": {
    from: "Nice", to: "Lyon", file: "Demenagement-Nice-Lyon.html", km: "470 km", duree: "≈ 5 h de route", pays: "France",
    lede: "Déménagement Nice → Lyon : l'étape rhodanienne, à mi-chemin de la France. Camion dédié, devis gratuit sous 24h.",
    intro: "Entre la Méditerranée et le nord, Lyon est l'une de nos liaisons régulières, à seulement cinq heures de route. La capitale des Gaules a ses propres règles de déménagement : la ville aux deux collines (Fourvière et la Croix-Rousse) grimpe et se traverse de traboules, le Vieux Lyon aligne ses immeubles Renaissance aux cages étroites, et la Presqu'île est un hypercentre dense au stationnement compté. On charge le matin à Nice et on livre dans la foulée, avec une équipe qui connaît les contraintes lyonnaises.",
    points: [
      { t: "Pentes et traboules", d: "Portage adapté aux immeubles anciens de la Croix-Rousse et aux accès étroits du Vieux Lyon, avec monte-meuble quand l'escalier Renaissance ne passe pas." },
      { t: "Demi-journée de route", d: "≈ 470 km : chargement le matin à Nice, livraison possible dès le lendemain à Lyon, sans attente en entrepôt." },
      { t: "Presqu'île dense", d: "Stationnement réservé et créneaux maîtrisés dans l'hypercentre lyonnais, entre Bellecour, les Terreaux et la Confluence." }
    ],
    deep: [
      { t: "La ville aux deux collines", p: "Lyon ne se déménage pas à plat. La Croix-Rousse, ancien quartier des canuts, grimpe par des pentes raides et des immeubles hauts à escaliers étroits, souvent sans ascenseur. Fourvière domine le Vieux Lyon. Entre les deux, la Presqu'île concentre l'hypercentre. On repère à quel étage et dans quel type d'immeuble vous arrivez, et on prévoit portage, véhicule relais ou monte-meuble selon la colline et la cage d'escalier." },
      { t: "Vieux Lyon, traboules et Renaissance", p: "Classé au patrimoine mondial, le Vieux Lyon est un dédale d'immeubles Renaissance, de cours intérieures et de traboules, ces passages traversants typiquement lyonnais. Les cages d'escalier y sont étroites et anciennes, les rues parfois piétonnes. Déménager ici demande méthode et délicatesse : portage soigné, stationnement réservé au plus près et monte-meuble pour les volumes qui ne passent pas par l'escalier en vis." },
      { t: "Une métropole étudiante et professionnelle", p: "Lyon est l'une des premières villes étudiantes et économiques de France : beaucoup de nos Nice–Lyon sont des mutations professionnelles, des installations d'étudiants ou de jeunes actifs. Pour les mutations, on fournit un devis conforme à transmettre à l'employeur et une facture en règle. Studio à la Guillotière, familial à la Confluence ou aux Brotteaux : on s'adapte au volume comme au quartier." },
      { t: "Un trajet court pour une longue distance", p: "À ≈ 470 km, Lyon est à mi-chemin : un trajet assez court pour qu'un déménagement reste fluide et économique, livraison souvent possible dès le lendemain du chargement. Camion dédié et plombé, une seule équipe du départ à l'arrivée, pas de groupage ni de transbordement. Et si vos dates de départ et d'arrivée ne coïncident pas, on propose un garde-meuble relais en box sécurisé." }
    ],
    faq: [
      { q: "En combien de temps livrez-vous à Lyon ?", a: "Le trajet fait ≈ 470 km, soit une demi-journée de route. Chargement à Nice, livraison souvent possible dès le lendemain, avec une fenêtre annoncée au devis." },
      { q: "Gérez-vous les traboules et la Croix-Rousse ?", a: "Oui : portage adapté aux pentes et aux immeubles anciens, et monte-meuble pour les cages d'escalier Renaissance trop étroites. Tout est anticipé au devis." },
      { q: "Et le stationnement en Presqu'île ?", a: "On réserve l'emplacement au plus près et on gère les créneaux de l'hypercentre lyonnais, souvent contraint entre Bellecour et les Terreaux." },
      { q: "Gérez-vous les mutations professionnelles vers Lyon ?", a: "Oui, fréquent sur ce trajet : devis conforme pour votre employeur, facture en règle pour le remboursement, coordination avec votre prise de poste." },
      { q: "Faites-vous un camion dédié ou du groupage ?", a: "Un camion dédié à votre seul chargement, plombé au départ. Pas de groupage, pas de transbordement, une seule équipe jusqu'à Lyon." }
    ]
  },
  "nice-marseille": {
    from: "Nice", to: "Marseille", file: "Demenagement-Nice-Marseille.html", km: "200 km", duree: "≈ 2 h de route", pays: "France",
    lede: "Déménagement Nice → Marseille : la cité phocéenne à deux heures. Trajet court et fréquent, devis gratuit sous 24h.",
    intro: "À deux heures de Nice par l'autoroute, Marseille est une destination quasi quotidienne pour nous. La deuxième ville de France a un caractère bien à elle, et son déménagement aussi : du Vieux-Port aux collines, des ruelles du Panier aux immeubles haussmanniens de la Préfecture, des quartiers en pente aux résidences modernes du sud, les accès et le stationnement varient énormément d'un arrondissement à l'autre. La distance courte rend le trajet économique, même pour un studio, et souvent réalisable dans la journée.",
    points: [
      { t: "Trajet court et fréquent", d: "≈ 200 km : on intervient vite, idéal pour tous volumes et même les petites surfaces, souvent dans la journée et à coût de déplacement réduit." },
      { t: "Centre dense et en pente", d: "Stationnement et portage du Panier, de Castellane, de la Joliette ou de Notre-Dame-du-Mont anticipés, rue par rue." },
      { t: "Tous quartiers", d: "Du Vieux-Port aux collines et aux quartiers sud, on adapte le gabarit du camion aux ruelles étroites et aux pentes marseillaises." }
    ],
    deep: [
      { t: "Une ville d'arrondissements contrastés", p: "Marseille, ce sont seize arrondissements qui n'ont rien à voir. Le Panier et ses ruelles médiévales en pente, inaccessibles au camion ; les immeubles haussmanniens de la Préfecture et du Camas ; les quartiers populaires en hauteur ; les résidences modernes et les villas des quartiers sud vers le Roucas-Blanc et les Goudes. On repère votre arrondissement et le type d'immeuble pour prévoir le bon véhicule, le portage et l'éventuel monte-meuble." },
      { t: "Le Panier et l'hypercentre", p: "Le plus vieux quartier de Marseille, le Panier, grimpe en ruelles étroites souvent piétonnes où aucun camion ne s'aventure : portage, véhicule relais et stationnement réservé en contrebas. Autour du Vieux-Port, de la Canebière et de Noailles, c'est l'hypercentre dense, au stationnement très contraint. On réserve l'emplacement à l'avance et on gère les créneaux pour ne pas tourner pendant une heure à la recherche d'une place." },
      { t: "Le trajet le plus économique du sud", p: "À ≈ 200 km, Nice–Marseille est notre liaison longue distance la plus courte, donc la plus accessible. Le faible coût de déplacement rend le déménagement intéressant même pour un studio ou un petit volume, ce que les grosses enseignes facturent souvent au prix fort. Chargement et livraison sont fréquemment réalisables dans la même journée, avec une seule équipe et un camion dédié." },
      { t: "Étudiants, actifs et mutations", p: "Avec ses universités, son port et son tissu économique, Marseille attire étudiants, jeunes actifs et mutations professionnelles. On déménage aussi bien un studio d'étudiant près de Saint-Charles qu'un appartement familial à Castellane ou un transfert lié à une prise de poste. Pour les mutations, devis conforme et facture en règle. La proximité permet aussi les déménagements en plusieurs voyages quand c'est plus simple pour vous." }
    ],
    faq: [
      { q: "Un déménagement Nice–Marseille, c'est rapide ?", a: "Oui, ≈ 2 h de route seulement : chargement et livraison sont souvent réalisables dans la même journée selon le volume et les accès." },
      { q: "Gérez-vous le centre de Marseille et le Panier ?", a: "Oui : stationnement réservé et portage adaptés aux ruelles en pente du Panier et à l'hypercentre dense autour du Vieux-Port." },
      { q: "Les petits volumes sont-ils acceptés ?", a: "Bien sûr, et c'est même là que le trajet brille : la distance courte rend un studio ou un petit volume économique à déménager." },
      { q: "Faites-vous les mutations professionnelles vers Marseille ?", a: "Oui : devis conforme pour votre employeur et facture en règle, en plus des déménagements de particuliers et d'étudiants." },
      { q: "Le devis inclut-il le transport jusqu'à Marseille ?", a: "Oui, tout est compris et ferme : transport, équipe, protection. Aucun supplément kilométrique surprise sur la facture." }
    ]
  },
  "nice-toulouse": {
    from: "Nice", to: "Toulouse", file: "Demenagement-Nice-Toulouse.html", km: "560 km", duree: "≈ 6 h de route", pays: "France",
    lede: "Déménagement Nice → Toulouse : cap sur la ville rose. Camion dédié, une seule équipe, devis gratuit sous 24h.",
    intro: "On assure régulièrement la liaison Nice–Toulouse, qui traverse tout le sud de la France. La ville rose a son ambiance et ses contraintes : un centre historique tout en brique aux rues étroites autour du Capitole, les ruelles des Carmes et de Saint-Cyprien le long de la Garonne, et de vastes quartiers résidentiels et étudiants en périphérie. Votre déménagement est pris en charge de A à Z, avec les mêmes déménageurs sur les ≈ 560 km, du chargement niçois jusqu'à l'installation toulousaine.",
    points: [
      { t: "Centre en brique", d: "Stationnement et portage du Capitole, des Carmes et de Saint-Cyprien gérés en amont, dans des rues étroites où le camion ne passe pas toujours." },
      { t: "Une seule équipe", d: "Les mêmes déménageurs sur les ≈ 560 km, du chargement à Nice à la livraison à Toulouse, sans transbordement ni groupage." },
      { t: "Trajet optimisé", d: "Itinéraire et planning calés pour tenir la fenêtre de livraison annoncée au devis, à l'heure dite." }
    ],
    deep: [
      { t: "La ville rose, brique et rues étroites", p: "Toulouse se reconnaît à sa brique foraine et à son centre historique compact. Autour du Capitole, dans le quartier des Carmes ou à Saint-Cyprien sur l'autre rive de la Garonne, les rues sont étroites, parfois piétonnes, et les immeubles anciens ont des cages d'escalier exiguës. On stationne au plus près, on gère le portage et on prévoit un monte-meuble quand le mobilier ne passe pas, comme partout où le bâti ancien complique l'accès." },
      { t: "Une métropole en pleine expansion", p: "Portée par l'aéronautique et le spatial, Toulouse est l'une des villes les plus dynamiques de France et accueille des milliers de nouveaux arrivants chaque année. Beaucoup de nos Nice–Toulouse sont des mutations professionnelles, notamment dans l'industrie. On fournit un devis conforme pour l'employeur, une facture en règle, et on coordonne le déménagement avec votre date de prise de poste." },
      { t: "Du centre aux quartiers résidentiels", p: "Au-delà de l'hypercentre, Toulouse s'étend largement : quartiers résidentiels de Rangueil et de Côte Pavée, secteurs étudiants vers l'université, communes de la périphérie. Ces adresses sont généralement plus simples d'accès, avec parking et ascenseur, ce qui fluidifie le déménagement. On adapte le gabarit du camion à chaque cas, du gros porteur en périphérie au véhicule plus maniable en centre-ville." },
      { t: "Une longue distance maîtrisée", p: "À ≈ 560 km, Toulouse demande une bonne journée de route. On planifie l'itinéraire et le timing pour tenir la fenêtre de livraison annoncée. Camion dédié et plombé, pas de groupage : vos affaires ne stationnent pas dans un entrepôt en attendant un autre chargement. Et si vos dates ne coïncident pas, un garde-meuble relais en box sécurisé fait le pont." }
    ],
    faq: [
      { q: "Combien de temps pour un Nice–Toulouse ?", a: "≈ 560 km, soit une bonne journée de route. La fenêtre de livraison est annoncée au devis et tenue, sans attente en entrepôt." },
      { q: "Gérez-vous le centre historique toulousain ?", a: "Oui : stationnement réservé et portage adaptés aux rues étroites du centre en brique, autour du Capitole et des Carmes, avec monte-meuble si besoin." },
      { q: "Faites-vous les mutations dans l'aéronautique ?", a: "Oui, c'est fréquent sur ce trajet : devis conforme pour votre employeur, facture en règle et coordination avec votre prise de poste." },
      { q: "Le devis inclut-il le transport ?", a: "Oui, tout est compris et ferme : transport, équipe, protection. Aucun supplément kilométrique surprise." },
      { q: "Un garde-meuble est-il possible entre les deux ?", a: "Oui, en box sécurisé, à Nice avant le départ ou à l'arrivée, si vos dates de logement ne coïncident pas." }
    ]
  },
  "nice-bordeaux": {
    from: "Nice", to: "Bordeaux", file: "Demenagement-Nice-Bordeaux.html", km: "800 km", duree: "≈ 8 h de route", pays: "France",
    lede: "Déménagement Nice → Bordeaux : la grande traversée du sud. Camion dédié, mobilier arrimé, devis gratuit sous 24h.",
    intro: "Relier Nice à Bordeaux, c'est traverser tout le sud de la France d'une côte à l'autre. On organise ce déménagement longue distance avec un trajet optimisé et un mobilier protégé jusqu'au cœur de la ville. Capitale mondiale du vin, Bordeaux a un centre du XVIIIe siècle classé à l'UNESCO, avec ses immeubles en pierre blonde, et ses fameuses échoppes, ces maisons de ville basses des Chartrons, de Saint-Michel ou de la Bastide. On connaît ces accès typiquement bordelais et on les anticipe.",
    points: [
      { t: "Grande distance maîtrisée", d: "≈ 800 km : itinéraire optimisé, camion dédié et plombé, fenêtre de livraison annoncée et tenue." },
      { t: "Échoppes et centre classé", d: "Accès aux maisons de ville bordelaises, rues étroites des Chartrons et de Saint-Michel et centre du XVIIIe anticipés dès le devis." },
      { t: "Protection longue route", d: "Calage et arrimage renforcés : sur 800 km, rien ne bouge dans le camion, votre mobilier arrive comme il est parti." }
    ],
    deep: [
      { t: "Bordeaux et ses échoppes", p: "L'échoppe bordelaise est une particularité locale : une maison de ville basse, en pierre, souvent étroite et tout en longueur, typique des Chartrons, de Saint-Michel ou de la Bastide. Pas d'ascenseur, des couloirs parfois resserrés, une porte qui donne directement sur la rue : le déménagement s'y fait au portage soigné, avec un véhicule bien dimensionné stationné au plus près. On connaît ce bâti et on adapte la méthode plutôt que de forcer." },
      { t: "Un centre classé, des rues contraintes", p: "Le centre du XVIIIe siècle de Bordeaux est classé au patrimoine mondial : immeubles en pierre blonde, rues étroites, secteurs piétons et stationnement très réglementé autour des quais, de la place de la Bourse et des Quinconces. On réserve l'emplacement camion en amont, on gère les créneaux et on prévoit le monte-meuble pour les étages des immeubles anciens, fréquents dans l'hypercentre bordelais." },
      { t: "Une ville qui attire", p: "Devenue l'une des destinations préférées des actifs et des familles, Bordeaux accueille beaucoup d'arrivants venus du sud-est. Mutations professionnelles, changements de vie, retours en région : nos Nice–Bordeaux couvrent tous ces profils. Pour les mutations, on remet un devis conforme à l'employeur et une facture en règle. Du studio du centre à la maison de la périphérie, on dimensionne l'équipe et le camion au volume." },
      { t: "800 km sans transbordement", p: "Sur une grande distance comme Nice–Bordeaux, le risque, c'est le groupage : vos affaires transbordées d'un camion à l'autre, qui attendent en entrepôt qu'un véhicule se remplisse. À chaque manipulation, un risque de casse et un délai flou. Nous, c'est un camion dédié, plombé au départ de Nice, avec un arrimage renforcé pour la route. Une seule équipe, une livraison à date, et un garde-meuble relais possible si vos dates décalent." }
    ],
    faq: [
      { q: "Combien de jours pour un Nice–Bordeaux ?", a: "Le transport demande une journée complète (≈ 800 km). On annonce une fenêtre de livraison précise au devis et on la tient, sans attente en entrepôt." },
      { q: "Gérez-vous les échoppes bordelaises ?", a: "Oui : ces maisons de ville basses et étroites se déménagent au portage soigné, avec un véhicule stationné au plus près. C'est anticipé dès le devis." },
      { q: "Et le centre classé au stationnement réglementé ?", a: "On réserve l'emplacement camion en amont, on gère les créneaux et on prévoit le monte-meuble pour les étages des immeubles anciens." },
      { q: "Mon mobilier est-il bien protégé sur 800 km ?", a: "Oui : calage et arrimage renforcés pour la longue route, plus une assurance incluse du chargement à la livraison. Rien ne bouge en chemin." },
      { q: "Un garde-meuble est-il possible ?", a: "Oui, en box sécurisé, à Nice ou à l'arrivée, si vos dates de départ et d'arrivée ne coïncident pas." }
    ]
  },
  "nice-geneve": {
    from: "Nice", to: "Genève", file: "Demenagement-Nice-Geneve.html", km: "470 km", duree: "≈ 5 h de route", pays: "Suisse", intl: true,
    lede: "Déménagement Nice → Genève : international maîtrisé, formalités douanières comprises. Devis gratuit sous 24h.",
    intro: "Cap sur la Suisse : on relie régulièrement Nice et Genève. Un déménagement international vers la Confédération a une particularité de taille par rapport à un trajet français : la frontière. Inventaire valorisé pour la douane, formulaire de mobilier de déménagement, documents en règle : on prépare tout avec vous pour un passage fluide. À l'arrivée, on gère les accès des immeubles genevois, le stationnement contraint du centre et les créneaux des résidences, y compris autour des organisations internationales.",
    points: [
      { t: "Formalités douanières", d: "Inventaire détaillé et valorisé pour la douane suisse, documents de mobilier de déménagement préparés pour un passage de frontière fluide." },
      { t: "Trajet transalpin direct", d: "≈ 470 km via la vallée du Rhône : camion dédié et plombé, mobilier protégé tout du long, une seule équipe." },
      { t: "Accès genevois", d: "Stationnement et créneaux des immeubles du centre, des Eaux-Vives ou de Champel, et des résidences internationales, gérés en amont." }
    ],
    deep: [
      { t: "La frontière, ce qui change vraiment", p: "La Suisse n'étant pas dans l'Union européenne, un Nice–Genève implique un passage de douane que n'a pas un trajet français. Concrètement, il faut un inventaire détaillé et valorisé de vos biens et un formulaire douanier de mobilier de déménagement. C'est simple quand c'est bien préparé : on s'en charge avec vous en amont, on vous explique chaque document, et on cale le passage de frontière dans le planning pour éviter l'attente." },
      { t: "Genève, ville internationale et chère du m²", p: "Genève est dense, internationale et au foncier tendu : beaucoup d'appartements, des immeubles aux ascenseurs parfois étroits, un stationnement contraint et des résidences à créneaux. Autour des Eaux-Vives, de Champel ou du centre, on réserve l'emplacement et on coordonne avec les régies. La clientèle genevoise inclut fonctionnaires d'organisations internationales et expatriés, habitués à des standards d'organisation élevés qu'on respecte." },
      { t: "Expatriés et fonctionnaires internationaux", p: "Une bonne partie des Nice–Genève concerne des expatriations et des prises de poste, souvent dans les organisations internationales ou le secteur bancaire. On fournit un devis conforme à transmettre à votre employeur ou service RH, une facture en règle, et on coordonne le déménagement avec votre calendrier de prise de fonction. L'inventaire valorisé sert aussi de base à votre dossier d'installation et d'assurance." },
      { t: "Un trajet court, un prix ferme", p: "À ≈ 470 km par la vallée du Rhône, Genève est l'une de nos destinations internationales les plus proches : le trajet reste fluide et le déménagement maîtrisé. Camion dédié, une seule équipe du chargement à la livraison, mobilier protégé tout du long. Et malgré la frontière, le devis est détaillé et définitif, formalités comprises : pas de mauvaise surprise au passage de la douane." }
    ],
    faq: [
      { q: "Quelles formalités pour déménager en Suisse ?", a: "Un inventaire détaillé et valorisé de vos biens et un formulaire douanier de mobilier de déménagement. On prépare ces documents avec vous et on vous guide pas à pas." },
      { q: "Combien de temps dure le trajet Nice–Genève ?", a: "≈ 470 km, soit une demi-journée à une journée selon le passage de frontière et le déchargement. On annonce une fenêtre au devis." },
      { q: "Gérez-vous les expatriés et fonctionnaires internationaux ?", a: "Oui, c'est fréquent à Genève : devis conforme pour votre employeur, facture en règle et coordination avec votre prise de poste." },
      { q: "Le prix est-il ferme malgré la douane ?", a: "Oui, le devis est détaillé et définitif, formalités comprises. Pas de supplément surprise au passage de la frontière." },
      { q: "Un garde-meuble est-il possible des deux côtés ?", a: "Oui, en relais, à Nice ou à l'arrivée, si votre logement genevois n'est pas encore disponible. Vos affaires restent assurées." }
    ]
  },
  "nice-lausanne": {
    from: "Nice", to: "Lausanne", file: "Demenagement-Nice-Lausanne.html", km: "530 km", duree: "≈ 5 h 30 de route", pays: "Suisse", intl: true,
    lede: "Déménagement Nice → Lausanne : Suisse romande, bord du Léman. Formalités douanières incluses, devis gratuit sous 24h.",
    intro: "Au bord du Léman, Lausanne est une destination internationale régulière. Comme tout déménagement vers la Suisse, il implique un passage de douane qu'on prépare entièrement avec vous : inventaire valorisé et documents de mobilier. La ville a une autre particularité : elle est l'une des plus pentues de Suisse, étagée entre le lac et la colline, ce qui complique souvent l'accès aux immeubles. On organise le trajet, les formalités et le déménagement de bout en bout, frontière comprise.",
    points: [
      { t: "Douane et inventaire", d: "Documents douaniers et inventaire valorisé préparés pour l'entrée en Suisse, expliqués et remplis avec vous en amont." },
      { t: "Ville en pente", d: "Lausanne grimpe du lac à la colline : portage adapté et monte-meuble pour les immeubles en fort dénivelé, anticipés au devis." },
      { t: "Camion dédié", d: "≈ 530 km parcourus par une seule équipe, camion plombé, sans transbordement ni groupage en entrepôt." }
    ],
    deep: [
      { t: "Une ville verticale", p: "Lausanne est bâtie sur trois collines et descend en pente jusqu'au lac : du quartier d'Ouchy au bord de l'eau jusqu'aux hauteurs de la Sallaz, le dénivelé est partout. Beaucoup d'immeubles ont des accès en pente, des escaliers et des cages anciennes. On repère l'adresse pour prévoir le portage, un véhicule relais ou un monte-meuble, parce qu'à Lausanne, l'accès est souvent plus complexe que le trajet lui-même." },
      { t: "La frontière suisse, bien préparée", p: "La Suisse hors UE impose un passage de douane : inventaire détaillé et valorisé de vos biens, formulaire de mobilier de déménagement. Rien de compliqué quand c'est anticipé : on prépare les documents avec vous, on vous explique chaque ligne et on intègre le passage de frontière au planning. Le devis est ferme malgré la douane, sans surcoût qui apparaîtrait à la frontière." },
      { t: "Étudiants, chercheurs et expatriés", p: "Avec l'EPFL, l'université et un fort tissu international, Lausanne attire étudiants, chercheurs et cadres expatriés. Nos Nice–Lausanne sont souvent liés à une mutation, une thèse ou une prise de poste. On remet un devis conforme pour l'employeur ou l'institution, une facture en règle, et on coordonne avec votre calendrier. Du studio meublé à l'appartement familial, on adapte l'équipe au volume." },
      { t: "Bord du Léman, un trajet direct", p: "À ≈ 530 km, Lausanne reste une destination internationale accessible. Camion dédié et plombé, une seule équipe du chargement à la livraison, mobilier protégé sur toute la route. Pas de groupage : vos affaires ne patientent pas en entrepôt. Et si votre logement lausannois n'est pas prêt à temps, on propose un garde-meuble relais en box sécurisé, à Nice ou à l'arrivée." }
    ],
    faq: [
      { q: "Faut-il des papiers pour la Suisse ?", a: "Oui : un inventaire valorisé de vos biens et un formulaire douanier de mobilier de déménagement, qu'on prépare avec vous avant le départ." },
      { q: "Lausanne est en pente, est-ce un problème ?", a: "Non, on prévoit portage, véhicule relais et monte-meuble adaptés au dénivelé dès le devis. C'est l'une des particularités qu'on maîtrise sur cette ville." },
      { q: "Le prix est-il ferme malgré la frontière ?", a: "Oui, le devis est détaillé et définitif, formalités comprises. Aucun surcoût n'apparaît au passage de la douane." },
      { q: "Gérez-vous les mutations et installations académiques ?", a: "Oui : devis conforme pour votre employeur ou institution, facture en règle, coordination avec votre prise de poste ou votre rentrée." },
      { q: "Combien de temps dure le trajet ?", a: "≈ 530 km, soit une demi-journée à une journée selon le passage de frontière et le déchargement à Lausanne." }
    ]
  },
  "nice-bruxelles": {
    from: "Nice", to: "Bruxelles", file: "Demenagement-Nice-Bruxelles.html", km: "1 150 km", duree: "≈ 11 h de route", pays: "Belgique", intl: true,
    lede: "Déménagement Nice → Bruxelles : longue distance européenne. Une seule équipe, pas de groupage, devis gratuit sous 24h.",
    intro: "Du soleil méditerranéen au cœur de l'Europe : on assure le Nice–Bruxelles de bout en bout. Bonne nouvelle administrative, la Belgique étant dans l'Union européenne, il n'y a pas de douane : un inventaire détaillé suffit. Le vrai sujet, c'est l'arrivée. Bruxelles est une ville de maisons de maître étroites et hautes, aux escaliers raides et exigus typiquement belges, et au stationnement réglementé par communes. On connaît ces contraintes et on prévoit le monte-meuble dès le devis.",
    points: [
      { t: "Longue distance européenne", d: "≈ 1 150 km : trajet planifié, camion dédié et plombé, mobilier arrimé pour la longue route, fenêtre de livraison annoncée." },
      { t: "Maisons bruxelloises", d: "Escaliers raides et étroits typiques des maisons de maître belges : monte-meuble prévu dès le devis pour les volumes." },
      { t: "Union européenne", d: "Pas de douane : un inventaire détaillé suffit. On gère toute la logistique de la traversée, sans paperasse douanière." }
    ],
    deep: [
      { t: "Les maisons bruxelloises, le vrai défi", p: "Bruxelles est une ville de maisons de ville étroites et hautes, sur trois ou quatre niveaux, avec des escaliers raides, étroits et souvent en colimaçon : un classique belge qui complique tout déménagement. Les meubles volumineux ne passent presque jamais par l'escalier. On prévoit donc systématiquement le monte-meuble par la façade pour les armoires, canapés et électroménager, chiffré dès le devis, jamais découvert le jour J." },
      { t: "Une mosaïque de communes", p: "L'agglomération bruxelloise compte dix-neuf communes, chacune avec ses règles de stationnement et ses autorisations. Ixelles, Saint-Gilles, Etterbeek, le centre : le stationnement résidentiel y est réglementé et il faut souvent réserver un emplacement de déménagement à l'avance auprès de la commune. On gère cette démarche en amont pour garantir une place au camion devant chez vous, sans amende ni perte de temps." },
      { t: "Capitale européenne, beaucoup d'expatriés", p: "Siège des institutions européennes et de l'OTAN, Bruxelles attire fonctionnaires, lobbyistes, diplomates et cadres internationaux. Une grande part des Nice–Bruxelles relève de la mobilité professionnelle. On remet un devis conforme à transmettre à l'employeur ou à l'institution, une facture en règle, et on coordonne avec votre prise de poste. L'inventaire détaillé sert aussi à votre dossier d'installation." },
      { t: "1 150 km en direct, sans groupage", p: "Sur une distance européenne comme Nice–Bruxelles, le groupage est tentant pour les déménageurs, mais coûteux en délais et en risques pour vous. Nous, c'est un camion dédié, plombé au départ de Nice, avec un arrimage renforcé pour les onze heures de route. Une seule équipe assure le chargement et la livraison. Le transport demande une à deux journées selon le déchargement, avec une fenêtre annoncée et tenue." }
    ],
    faq: [
      { q: "Y a-t-il des formalités douanières pour la Belgique ?", a: "Non, la Belgique est dans l'Union européenne : pas de douane. On fournit un inventaire détaillé et on gère toute la logistique de la traversée." },
      { q: "Combien de temps de trajet pour un Nice–Bruxelles ?", a: "≈ 1 150 km : le transport demande une à deux journées selon le déchargement, avec une fenêtre de livraison annoncée au devis." },
      { q: "Gérez-vous les maisons à escaliers étroits ?", a: "Oui, c'est typique de Bruxelles : on prévoit le monte-meuble par la façade dès le devis pour les meubles qui ne passent pas par l'escalier." },
      { q: "Et le stationnement dans les communes bruxelloises ?", a: "On réserve un emplacement de déménagement à l'avance auprès de la commune concernée, pour garantir une place au camion devant chez vous." },
      { q: "Gérez-vous les mutations vers les institutions européennes ?", a: "Oui, fréquent à Bruxelles : devis conforme pour votre employeur ou institution, facture en règle et coordination avec votre prise de poste." }
    ]
  },
  "nice-luxembourg": {
    from: "Nice", to: "Luxembourg", file: "Demenagement-Nice-Luxembourg.html", km: "920 km", duree: "≈ 9 h de route", pays: "Luxembourg", intl: true,
    lede: "Déménagement Nice → Luxembourg : mobilité professionnelle et expatriation. Devis conforme employeur, gratuit sous 24h.",
    intro: "La grande majorité des déménagements Nice–Luxembourg sont liés à une mutation, une expatriation ou une prise de poste dans la finance, les institutions européennes ou le secteur tertiaire. Le Grand-Duché étant dans l'Union européenne, il n'y a pas de douane : un inventaire détaillé suffit. On fournit un devis conforme à transmettre à votre employeur ou service RH, et on gère tout le trajet européen, du chargement niçois jusqu'à l'installation, avec une seule équipe.",
    points: [
      { t: "Mobilité professionnelle", d: "Devis conforme pour votre employeur ou service RH et facture en règle pour le remboursement de vos frais de déménagement." },
      { t: "Trajet européen direct", d: "≈ 920 km : une seule équipe, camion dédié et plombé, délais tenus et fenêtre de livraison annoncée." },
      { t: "Union européenne", d: "Pas de douane : un inventaire détaillé suffit. On s'occupe de toute la logistique de la traversée." }
    ],
    deep: [
      { t: "Le déménagement de la prise de poste", p: "Luxembourg attire des actifs du monde entier, notamment dans la banque, l'assurance et les institutions européennes. Nos Nice–Luxembourg sont presque toujours des mobilités professionnelles, avec un calendrier dicté par une date d'embauche. On s'y adapte : devis conforme à transmettre à votre employeur ou service RH, facture en règle pour le remboursement, et un déménagement calé sur votre prise de fonction, sans risquer d'arriver après votre premier jour." },
      { t: "Une ville-centre dense et verticale", p: "La ville de Luxembourg est compacte et contrastée : la vieille ville perchée et ses ruelles, le plateau du Kirchberg et ses immeubles modernes où siègent banques et institutions, les quartiers résidentiels de Limpertsberg ou Belair. Accès, ascenseurs et stationnement varient fortement. On repère votre adresse pour prévoir le bon véhicule, le portage et, si besoin, un monte-meuble pour les immeubles anciens de la vieille ville." },
      { t: "Pas de douane, mais de la rigueur", p: "Le Luxembourg étant dans l'UE, aucune formalité douanière : un inventaire détaillé de vos biens suffit. Cela ne dispense pas de rigueur logistique sur 920 km. On planifie l'itinéraire, on arrime soigneusement pour la longue route et on annonce une fenêtre de livraison fiable. Camion dédié et plombé, pas de groupage : vos affaires ne transitent pas par un entrepôt en attendant un autre chargement." },
      { t: "Garde-meuble relais des deux côtés", p: "Une mutation s'accompagne souvent d'un décalage : logement luxembourgeois pas encore libre, période d'essai, recherche en cours. On propose un garde-meuble en box sécurisé, à Nice avant le départ ou à l'arrivée, pour faire le pont sans vous obliger à tout caser au même jour. Vos affaires restent protégées et assurées le temps que votre installation se concrétise." }
    ],
    faq: [
      { q: "C'est souvent une mutation, vous gérez ce cas ?", a: "Oui, c'est la majorité de nos Nice–Luxembourg : devis conforme à transmettre à votre employeur, facture en règle, et déménagement coordonné avec votre prise de poste." },
      { q: "Y a-t-il des formalités douanières ?", a: "Non, le Luxembourg est dans l'Union européenne : un inventaire détaillé suffit, on s'occupe de toute la logistique." },
      { q: "Combien de temps dure le trajet ?", a: "≈ 920 km : une bonne journée de route, avec une fenêtre de livraison annoncée au devis et tenue." },
      { q: "Garde-meuble possible des deux côtés ?", a: "Oui, en relais, à Nice ou à l'arrivée, si votre logement luxembourgeois n'est pas encore disponible. Vos affaires restent assurées." },
      { q: "Faites-vous un camion dédié ?", a: "Oui, un camion dédié à votre seul chargement, plombé au départ. Pas de groupage, une seule équipe jusqu'au Luxembourg." }
    ]
  },
  "nice-barcelone": {
    from: "Nice", to: "Barcelone", file: "Demenagement-Nice-Barcelone.html", km: "660 km", duree: "≈ 6 h 30 de route", pays: "Espagne", intl: true,
    lede: "Déménagement Nice → Barcelone : la Méditerranée d'une côte à l'autre. Formalités UE simples, devis gratuit sous 24h.",
    intro: "Le long de la Méditerranée, Nice–Barcelone est un trajet international qu'on affectionne : deux villes de bord de mer reliées par la côte. L'Espagne étant dans l'Union européenne, pas de douane, un inventaire détaillé suffit. À l'arrivée, la capitale catalane a ses propres contraintes : les immeubles de l'Eixample avec leurs ascenseurs minuscules, les ruelles médiévales du Barri Gòtic, et un stationnement très réglementé. On connaît ces particularités barcelonaises et on prévoit le monte-meuble quand il le faut.",
    points: [
      { t: "Eixample et Gòtic", d: "Cages d'ascenseur minuscules de l'Eixample et ruelles médiévales du Barri Gòtic : monte-meuble prévu pour les gros volumes." },
      { t: "Côte méditerranéenne", d: "≈ 660 km le long de la mer : trajet fluide, camion dédié, mobilier protégé tout du long." },
      { t: "Union européenne", d: "Pas de douane : un inventaire détaillé suffit. On gère toute la logistique jusqu'en Catalogne." }
    ],
    deep: [
      { t: "Les ascenseurs barcelonais, un classique", p: "L'Eixample, ce quadrillage d'immeubles du XIXe au charme fou, cache un piège pour les déménageurs : des cages d'ascenseur minuscules, souvent une vieille cabine pour deux personnes maximum. Canapés, armoires, électroménager n'y entrent jamais. La solution est connue des Barcelonais : le monte-meuble par le balcon ou la façade. On le prévoit dès le devis pour les volumes concernés, ce qui évite la mauvaise surprise une fois sur place." },
      { t: "Du Gòtic aux quartiers modernes", p: "Barcelone juxtapose des mondes : les ruelles médiévales et piétonnes du Barri Gòtic et d'El Born, où le camion n'entre pas ; l'Eixample quadrillé et dense ; les quartiers en hauteur de Gràcia ou de Sarrià ; le front de mer de la Barceloneta. Chaque secteur a sa logique d'accès et de stationnement. On adapte le véhicule et la méthode, du portage dans le Gòtic au monte-meuble dans l'Eixample." },
      { t: "Une ville d'expatriés et d'actifs", p: "Barcelone est l'une des villes les plus attractives d'Europe pour les actifs, les créatifs et les télétravailleurs. Nos Nice–Barcelone mêlent installations professionnelles, changements de vie et expatriations. Pour une mutation, on remet un devis conforme et une facture en règle. Du studio meublé à l'appartement familial, on dimensionne l'équipe au volume, et l'inventaire détaillé facilite votre installation administrative côté espagnol." },
      { t: "Un trajet côtier fluide", p: "À ≈ 660 km le long de la Méditerranée par la frontière de Le Perthus, Barcelone est une destination internationale relativement proche et un trajet agréable et direct. Camion dédié et plombé, une seule équipe du chargement à la livraison, mobilier protégé sur toute la route. Pas de groupage ni de transbordement, et un garde-meuble relais possible si votre logement barcelonais n'est pas prêt à temps." }
    ],
    faq: [
      { q: "Y a-t-il des formalités douanières pour l'Espagne ?", a: "Non, l'Espagne est dans l'Union européenne : pas de douane. On fournit un inventaire détaillé et on gère toute la logistique jusqu'à Barcelone." },
      { q: "Les ascenseurs barcelonais sont minuscules, comment faites-vous ?", a: "C'est le grand classique de l'Eixample : on prévoit le monte-meuble par le balcon ou la façade dès le devis pour les meubles qui n'entrent pas dans l'ascenseur." },
      { q: "Combien de temps de route jusqu'à Barcelone ?", a: "≈ 660 km le long de la côte, soit une bonne journée de route. La fenêtre de livraison est annoncée au devis." },
      { q: "Gérez-vous les ruelles du Barri Gòtic ?", a: "Oui : portage et stationnement réservé au plus près, puisque le camion n'entre pas dans les ruelles médiévales et piétonnes." },
      { q: "Faites-vous les mutations professionnelles vers Barcelone ?", a: "Oui : devis conforme pour votre employeur, facture en règle, et inventaire détaillé qui facilite aussi votre installation côté espagnol." }
    ]
  },
  "nice-madrid": {
    from: "Nice", to: "Madrid", file: "Demenagement-Nice-Madrid.html", km: "1 280 km", duree: "≈ 13 h de route", pays: "Espagne", intl: true,
    lede: "Déménagement Nice → Madrid : grande traversée vers la capitale espagnole. Camion dédié, formalités UE simples, devis sous 24h.",
    intro: "Direction le centre de la péninsule : Nice–Madrid est un déménagement international au long cours, l'un de nos plus longs trajets. L'Espagne étant dans l'Union européenne, pas de douane, un inventaire détaillé suffit. On planifie soigneusement l'itinéraire et le timing sur les ≈ 1 280 km, on protège et arrime tout pour la durée, et on livre jusqu'au cœur de la capitale, dans les immeubles du centre madrilène (Centro, Salamanca, Chamberí) souvent anciens et aux accès contraints.",
    points: [
      { t: "Très longue distance", d: "≈ 1 280 km : trajet planifié, camion dédié et plombé, arrimage renforcé pour tenir toute la durée de la route." },
      { t: "Centre madrilène", d: "Stationnement et accès des immeubles de Centro, Salamanca ou Chamberí anticipés, avec monte-meuble pour les étages anciens." },
      { t: "Union européenne", d: "Pas de douane : un inventaire détaillé suffit. On gère toute la logistique jusqu'à Madrid." }
    ],
    deep: [
      { t: "Madrid, une capitale dense", p: "Madrid est une grande capitale au centre très dense : immeubles anciens et hauts de Centro et de Malasaña, beaux ensembles bourgeois de Salamanca, quartiers résidentiels de Chamberí. Beaucoup d'immeubles ont des ascenseurs étroits ou des étages élevés, et le stationnement central est réglementé, avec des zones à accès restreint. On repère votre adresse pour prévoir le portage, le bon véhicule et un monte-meuble quand le mobilier ne passe pas par la cage d'escalier." },
      { t: "Un trajet qui se planifie", p: "À ≈ 1 280 km, Nice–Madrid est une vraie expédition logistique : comptez une à deux journées de transport selon le déchargement. On planifie l'itinéraire par la côte puis l'intérieur, on cale les temps de conduite réglementaires et on annonce une fenêtre de livraison réaliste. L'arrimage est renforcé pour la longue route : sur plus de mille kilomètres, le calage du mobilier ne se discute pas, et l'assurance couvre tout le parcours." },
      { t: "Installations et expatriations", p: "Capitale économique et administrative de l'Espagne, Madrid accueille cadres, fonctionnaires et familles en expatriation. Nos Nice–Madrid sont souvent des mobilités professionnelles ou des changements de vie. On remet un devis conforme à transmettre à l'employeur, une facture en règle, et l'inventaire détaillé sert de base à votre dossier d'installation. On coordonne le déménagement avec votre date de prise de poste pour éviter tout décalage." },
      { t: "Direct, sans transbordement", p: "Sur une distance pareille, le groupage est la norme chez beaucoup de déménageurs : vos affaires attendent en entrepôt et changent de camion en route. Nous faisons l'inverse : un camion dédié à votre seul chargement, plombé au départ de Nice, une seule équipe jusqu'à Madrid. Vos cartons ne sont jamais mélangés ni transbordés. Et si vos dates décalent, un garde-meuble relais en box sécurisé fait le pont." }
    ],
    faq: [
      { q: "Combien de jours pour un Nice–Madrid ?", a: "≈ 1 280 km : comptez une à deux journées de transport selon le déchargement, avec une fenêtre de livraison annoncée au devis." },
      { q: "Y a-t-il des papiers de douane ?", a: "Non, l'Espagne est dans l'Union européenne : un inventaire détaillé suffit, on s'occupe de toute la logistique." },
      { q: "Mon mobilier est-il assuré sur tout le trajet ?", a: "Oui, assurance incluse du chargement à la livraison, sur l'intégralité des 1 280 km, avec un arrimage renforcé pour la longue route." },
      { q: "Gérez-vous le centre de Madrid et ses ascenseurs étroits ?", a: "Oui : stationnement réservé, portage, et monte-meuble pour les immeubles anciens de Centro, Salamanca ou Chamberí." },
      { q: "Faites-vous du groupage ou un camion dédié ?", a: "Un camion dédié à votre seul chargement, plombé au départ. Pas de groupage ni de transbordement, une seule équipe jusqu'à Madrid." }
    ]
  },
  "nice-milan": {
    from: "Nice", to: "Milan", file: "Demenagement-Nice-Milan.html", km: "320 km", duree: "≈ 3 h 30 de route", pays: "Italie", intl: true,
    lede: "Déménagement Nice → Milan : l'Italie du nord à portée de camion. Trajet court, formalités UE simples, devis sous 24h.",
    intro: "L'Italie du nord est juste de l'autre côté de la frontière : Nice–Milan est un trajet international court et fréquent, souvent réalisable dans la journée. L'Italie étant dans l'Union européenne, pas de douane, un inventaire détaillé suffit. À l'arrivée, la capitale lombarde a ses particularités : immeubles à cortile (cours intérieures) et ascenseurs étroits, ZTL (zones à trafic limité) très réglementées dans le centre. On charge sur la côte et on livre à Milan en gérant ces contraintes.",
    points: [
      { t: "Frontière voisine", d: "≈ 320 km via la Riviera et l'autoroute des fleurs : trajet court, souvent réalisable dans la journée, camion dédié." },
      { t: "Cours et ascenseurs milanais", d: "Immeubles à cortile et ascenseurs étroits typiques de Milan : portage et monte-meuble anticipés dès le devis." },
      { t: "Union européenne", d: "Pas de douane : un inventaire détaillé suffit. On gère la logistique et les accès réglementés du centre." }
    ],
    deep: [
      { t: "Les cortile et la ZTL milanaise", p: "Milan a deux particularités que tout déménageur local connaît. D'abord les cortile, ces cours intérieures par lesquelles on accède à beaucoup d'immeubles, avec des passages voûtés et des ascenseurs souvent étroits : le monte-meuble est fréquemment nécessaire pour les gros volumes. Ensuite la ZTL, la zone à trafic limité du centre, à l'accès réglementé. On anticipe l'autorisation d'accès et on prévoit le bon équipement dès le devis." },
      { t: "Un trajet international express", p: "À ≈ 320 km par la Riviera et l'autoroute des fleurs, Milan est l'une de nos destinations internationales les plus proches : le chargement à Nice et la livraison à Milan sont souvent réalisables dans la même journée. La frontière italienne, au sein de l'UE, se passe sans formalité douanière. Camion dédié et plombé, une seule équipe : la proximité rend ce déménagement international aussi fluide qu'un long trajet français." },
      { t: "Capitale économique et de la mode", p: "Milan est le moteur économique de l'Italie et une capitale mondiale de la mode et du design : elle attire cadres, créatifs et expatriés. Nos Nice–Milan sont souvent des installations professionnelles. On remet un devis conforme pour l'employeur et une facture en règle, et on coordonne avec votre prise de poste. Du studio du centre à l'appartement familial des quartiers résidentiels, on adapte l'équipe au volume." },
      { t: "Proximité, prix maîtrisé", p: "La courte distance fait de Nice–Milan un déménagement international au coût contenu, même pour un petit volume. Pas d'attente en entrepôt, pas de groupage : un camion dédié, une livraison rapide et un devis ferme malgré la frontière. Et si votre logement milanais n'est pas prêt, on propose un garde-meuble relais en box sécurisé, à Nice ou à l'arrivée, le temps que tout se cale." }
    ],
    faq: [
      { q: "Un Nice–Milan se fait en une journée ?", a: "Souvent oui : ≈ 320 km, frontière voisine. Chargement et livraison sont fréquemment réalisables dans la même journée selon le volume." },
      { q: "Y a-t-il des formalités pour l'Italie ?", a: "Non, l'Italie est dans l'Union européenne : un inventaire détaillé suffit, on s'occupe du reste." },
      { q: "Gérez-vous les cours d'immeubles et la ZTL milanaises ?", a: "Oui : monte-meuble pour les cortile et ascenseurs étroits, et autorisation d'accès anticipée pour la zone à trafic limité du centre." },
      { q: "Le prix est-il ferme malgré la frontière ?", a: "Oui, le devis est détaillé et définitif. La proximité et l'absence de douane rendent ce trajet international simple et maîtrisé." },
      { q: "Faites-vous les mutations professionnelles vers Milan ?", a: "Oui : devis conforme pour votre employeur, facture en règle et coordination avec votre prise de poste." }
    ]
  },
  "nice-turin": {
    from: "Nice", to: "Turin", file: "Demenagement-Nice-Turin.html", km: "230 km", duree: "≈ 2 h 45 de route", pays: "Italie", intl: true,
    lede: "Déménagement Nice → Turin : le Piémont par la montagne, l'une de nos destinations italiennes les plus proches. Devis sous 24h.",
    intro: "Turin, capitale du Piémont, est l'une de nos destinations italiennes les plus proches : on franchit la frontière par la vallée de la Roya et le col ou le tunnel, et on livre dans la cité piémontaise en quelques heures. L'Italie étant dans l'Union européenne, pas de douane, un inventaire détaillé suffit. Ville à l'urbanisme élégant et régulier, Turin aligne de belles bâtisses anciennes à hauts plafonds et cages d'escalier étroites, qu'on aborde avec le matériel adapté.",
    points: [
      { t: "Trajet par la montagne", d: "≈ 230 km via le col de Tende ou le tunnel : chauffeurs habitués au passage transfrontalier alpin, planning calé en conséquence." },
      { t: "Immeubles turinois", d: "Bâtisses anciennes à hauts plafonds et cages d'escalier étroites : monte-meuble prévu dès le devis si besoin." },
      { t: "Union européenne", d: "Pas de douane : un inventaire détaillé suffit. On gère toute la logistique jusqu'à Turin." }
    ],
    deep: [
      { t: "Le passage des Alpes", p: "Contrairement aux autres trajets italiens côtiers, Nice–Turin se fait par la montagne : la vallée de la Roya, puis le col de Tende ou son tunnel pour basculer côté piémontais. Nos chauffeurs connaissent ce passage transfrontalier alpin et son éventuelle météo. On cale le planning en conséquence, surtout en hiver, pour que le trajet reste fluide et sûr. La frontière, au sein de l'UE, se passe sans formalité douanière." },
      { t: "Turin, l'élégance baroque", p: "Turin est une ville à l'urbanisme rigoureux et baroque : larges avenues à arcades, immeubles anciens aux hauts plafonds et aux belles cages d'escalier, mais souvent étroites pour les meubles modernes. Le centre, autour de la Mole et de la place San Carlo, est dense et en partie réglementé (ZTL). On repère l'accès pour prévoir le portage, le stationnement réservé et un monte-meuble quand l'escalier ancien ne laisse pas passer les volumes." },
      { t: "Une proximité méconnue", p: "Beaucoup ignorent que Turin n'est qu'à ≈ 230 km de Nice, soit moins de trois heures de route : c'est plus proche que Marseille n'est de certaines villes. Résultat, un déménagement international souvent réalisable dans la journée, au coût contenu même pour un petit volume. Camion dédié, une seule équipe, pas de groupage : la frontière ne complique rien quand on connaît le passage." },
      { t: "Familles, étudiants et mutations", p: "Ville universitaire et industrielle (berceau de Fiat), Turin accueille étudiants, actifs et familles, dont beaucoup de liens transfrontaliers avec la Côte d'Azur. Nos Nice–Turin couvrent installations professionnelles, rapprochements familiaux et retours au pays. Pour une mutation, devis conforme et facture en règle. Du studio à l'appartement familial, on adapte l'équipe, et un garde-meuble relais est possible si vos dates ne coïncident pas." }
    ],
    faq: [
      { q: "Combien de temps pour un Nice–Turin ?", a: "≈ 230 km, soit moins de 3 h de route par la montagne : c'est souvent réalisable dans la journée, chargement et livraison rapprochés." },
      { q: "Y a-t-il des formalités douanières ?", a: "Non, l'Italie est dans l'Union européenne : un inventaire détaillé suffit, on s'occupe de toute la logistique." },
      { q: "La montagne complique-t-elle le trajet ?", a: "Non : nos chauffeurs connaissent le passage transfrontalier par le col ou le tunnel. On cale le planning en conséquence, surtout en hiver." },
      { q: "Gérez-vous le centre de Turin et sa ZTL ?", a: "Oui : stationnement réservé, portage et monte-meuble pour les immeubles anciens, et autorisation anticipée pour la zone à trafic limité du centre." },
      { q: "Le déménagement reste-t-il économique ?", a: "Oui : la courte distance rend ce trajet international accessible, même pour un petit volume. Devis ferme, frontière comprise." }
    ]
  }
};

function getRoute(slug) {
  return ROUTES[slug] || ROUTES["nice-paris"];
}

Object.assign(window, { ROUTES, getRoute });
