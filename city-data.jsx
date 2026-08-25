// city-data.jsx — Rich, localized SEO content per city (10 grandes villes de la Côte d'Azur).
// The renderer (ville-page.jsx) reads document.body.dataset.ville and looks it up here.

const CITIES = {
  /* ⚠️ NICE EST LA SEULE COMMUNE À PORTER UN TITRE PROPRE, ET C'EST NÉCESSAIRE.
     Mesuré le 24 août 2026 : cette page ressortait en POSITION 100 sur « déménagement
     nice », « nice déménagement » et « déménagement particulier nice » — la page 10 de
     Google. La cause n'était pas son contenu, qui fait 1 410 mots, mais le fait que
     l'accueil vise exactement la même requête depuis que son H1 dit « Déménageur à Nice ».
     Deux pages du même site sur le même mot-clé se concurrencent, et Google n'en classe
     alors correctement aucune.
     L'accueil garde « déménageur nice », qui est la requête principale et la page la plus
     liée du site. Celle-ci se recentre sur ce que l'accueil ne traite pas : le quartier,
     les bureaux, le petit budget, l'étudiant. Ce sont les requêtes que Google associe
     DÉJÀ à cette page, sans qu'elle en parle. */
  /* ── VAGUE 3 : les pages secteur ────────────────────────────────────────────────
     Vingt-sept communes qui, prises une par une, n'ont pas de contrainte assez distinctive
     pour porter une page. Écrire vingt-sept pages reviendrait à décliner le même texte en
     changeant le nom : c'est la définition de la doorway page, et ça abîme le domaine
     entier, pas seulement la page fautive.

     Les quatre pages ci-dessous doivent aussi se distinguer ENTRE ELLES. Chacune tient donc
     sur une contrainte dominante différente : la route de montagne pour l'arrière-pays, la
     plaine pavillonnaire pour la vallée du Var, la villa avec terrain pour le pays de
     Grasse, la saison littorale pour le golfe. Elles sont plus longues que les pages
     communales, parce qu'elles couvrent plusieurs territoires. */

  "arriere-pays-nicois": {
    prep: "dans", name: "l'arrière-pays niçois", file: "Demenagement-Arriere-Pays-Nicois",
    cp: "06390", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement dans l'arrière-pays niçois : routes de montagne, transbordement, repérage préalable. Levens, Contes, Peille. Devis ferme sous 24h.",
    intro: "Derrière Nice, la montagne commence tout de suite. À vingt minutes du littoral, on roule déjà sur des routes départementales à une voie et demie, avec des murets d'un côté, du vide de l'autre, et des virages où un porteur de vingt mètres cubes ne passe pas. C'est la contrainte commune à Levens, Contes, Tourrette-Levens, Aspremont, Falicon, Coaraze, Peille, Lucéram, Berre-les-Alpes et Drap : ce n'est jamais le logement qui pose problème, c'est le dernier kilomètre pour l'atteindre. Nous traitons ces communes ensemble parce qu'elles imposent exactement la même méthode, et cette méthode commence par aller voir la route avant de promettre un prix.",
    quartiers: ["Levens", "Contes", "Tourrette-Levens", "Aspremont", "Falicon", "Coaraze", "Peille", "Lucéram", "Berre-les-Alpes", "Drap"],
    specifics: [
      { t: "Repérage de la route, systématique", d: "Nous montons voir le tracé avant de chiffrer : largeur utile, rayon des virages, hauteur des branches et possibilité de retournement. Aucun devis d'arrière-pays ne se fait au téléphone." },
      { t: "Transbordement quand le camion ne passe pas", d: "Le porteur reste au dernier point accessible et un utilitaire fait la navette. C'est plus long, c'est chiffré, et c'est annoncé au devis plutôt que découvert dans une épingle." },
      { t: "Aucun supplément le jour J", d: "La difficulté d'accès est intégrée au prix après repérage. C'est la contrepartie du déplacement préalable : ce qui est annoncé ne bouge plus." }
    ],
    deep: [
      { t: "Pourquoi nous montons voir avant de chiffrer", p: "Sur ces communes, la donnée qui décide du prix n'est ni la surface ni l'étage : c'est le dernier kilomètre. Une maison de Coaraze peut se rejoindre par une route large et bien tracée, et sa voisine par un chemin communal de deux mètres soixante terminé en cul-de-sac. Impossible de le savoir depuis un plan. Nous montons donc relever le tracé, la largeur utile, le rayon des épingles, la hauteur des branches et l'existence d'une aire de retournement. Ce déplacement coûte une demi-journée et il évite l'erreur qui coûte, elle, une journée entière : un camion engagé qui doit redescendre en marche arrière." },
      { t: "Le transbordement, comment ça se passe vraiment", p: "Quand la route refuse le porteur, nous le laissons au dernier point accessible, souvent la place du village ou un élargissement, et nous faisons la navette avec un utilitaire de vingt mètres cubes. Sur un déménagement de trois pièces, cela représente trois à cinq rotations et environ deux heures de plus. Nous préférons cette solution à la location d'un véhicule plus petit pour toute la journée, parce que le gros du trajet, entre l'arrière-pays et la côte, se fait alors dans un seul camion et non en trois voyages. Le calcul se fait au devis, avec le client." },
      { t: "Ce que la montagne change à la journée de travail", p: "Une équipe qui monte à Lucéram ou à Peille part plus tôt et rentre plus tard : la route n'est pas rapide et elle fatigue le chauffeur. Nous dimensionnons donc l'équipe pour finir dans la journée plutôt que de tabler sur des heures supplémentaires, et nous évitons de programmer deux chantiers d'arrière-pays le même jour. En hiver, le gel matinal sur les portions à l'ombre décale le départ. Une entreprise de déménagement dans l'arrière-pays niçois qui applique ses horaires de littoral se trompe systématiquement de deux heures." },
      { t: "Les maisons de village et les caves voûtées", p: "Dans les villages perchés, l'habitat est ancien : escaliers étroits sans palier, seuils surélevés, et très souvent une cave voûtée en sous-sol, accessible par un escalier tournant. Ces caves contiennent du vin, de l'outillage, des conserves, et parfois du mobilier stocké depuis des décennies. Elles se vident lentement, à la main, et elles représentent un volume que personne n'annonce spontanément. Nous ouvrons systématiquement ce sous-sol pendant la visite : c'est là que se cache l'écart entre le volume estimé et le volume réel." }
    ],
    faq: [
      { q: "Quelles communes couvre cette page ?", a: "Levens, Contes, Tourrette-Levens, Aspremont, Falicon, Coaraze, Peille, Lucéram, Berre-les-Alpes et Drap, et plus largement les villages accessibles par les routes de montagne au nord de Nice." },
      { q: "Pourquoi ne pas faire une page par village ?", a: "Parce que la contrainte est identique partout : la route. Écrire dix pages en changeant le nom du village n'apporterait rien au lecteur et serait sanctionné par Google." },
      { q: "Venez-vous vraiment repérer la route avant ?", a: "Oui, systématiquement. Un déménagement dans l'arrière-pays niçois ne se chiffre pas au téléphone : on relève la largeur utile, les épingles et l'aire de retournement." },
      { q: "Que se passe-t-il si le camion ne peut pas monter ?", a: "Il reste au dernier point accessible et un utilitaire fait la navette. Comptez trois à cinq rotations et deux heures de plus sur un trois-pièces, chiffrées au devis." },
      { q: "La difficulté d'accès est-elle facturée en supplément ?", a: "Non. Elle est intégrée au prix après le repérage. C'est la raison même de ce déplacement préalable : le montant annoncé ne bouge plus." },
      { q: "Déménagez-vous les caves voûtées des maisons de village ?", a: "Oui, et votre déménageur dans l'arrière-pays niçois les ouvre pendant la visite : c'est presque toujours là que se trouve l'écart entre le volume annoncé et le volume réel." }
    ],
    nearby: ["nice", "menton", "vence", "cagnes-sur-mer", "saint-laurent-du-var"]
  },

  "vallee-du-var": {
    prep: "dans", name: "la vallée du Var", file: "Demenagement-Vallee-du-Var",
    cp: "06510", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement dans la vallée du Var : Carros, Saint-Jeannet, La Gaude, Gattières. Villas avec sous-sol, zones d'activité. Devis ferme sous 24h.",
    intro: "La vallée du Var est la partie facile d'accès de notre secteur, et c'est justement ce qui la définit. La voie rapide dessert Carros, Le Broc, Gattières, Saint-Jeannet, La Gaude, Colomars et Castagniers sans jamais imposer de route étroite, et le camion se gare presque toujours devant la maison. La difficulté est ailleurs : l'habitat est dispersé, très majoritairement pavillonnaire, avec des sous-sols aménagés et des garages doubles qui doublent le volume annoncé. Et le secteur concentre les zones d'activité du département, ce qui en fait notre principal terrain de déménagements d'entreprise.",
    quartiers: ["Carros", "Le Broc", "Gattières", "Saint-Jeannet", "La Gaude", "Colomars", "Castagniers", "Carros-le-Neuf"],
    specifics: [
      { t: "Accès routier confortable", d: "La voie rapide dessert toute la vallée et le stationnement se trouve devant la maison. Ni portage long ni transbordement : la journée s'organise autour du volume." },
      { t: "Sous-sols et garages doubles", d: "Le pavillonnaire de la vallée cache un sous-sol aménagé et un garage double dans la majorité des cas. Comptés à la visite, ils ajoutent souvent dix à vingt mètres cubes." },
      { t: "Zones d'activité et déménagement d'entreprise", d: "Carros et Le Broc concentrent les locaux professionnels du secteur. Intervention hors horaires d'ouverture, mobilier de bureau et informatique traités à part." }
    ],
    deep: [
      { t: "Le volume, seul vrai sujet de la vallée", p: "Ici, pas de ruelle piétonne ni de corniche : le camion se gare devant le portail et l'équipe travaille de plain-pied. Toute la question devient donc le cubage, et c'est là que les estimations dérapent. Une villa de la Gaude annoncée à cent trente mètres carrés habitables cache régulièrement un sous-sol complet, un garage double et un abri de jardin. Le calcul fait sur la surface habitable sous-estime alors de quinze à vingt mètres cubes, soit une demi-journée de travail et parfois un camion de plus. Nous descendons donc systématiquement au sous-sol pendant la visite." },
      { t: "Les zones d'activité, un autre métier", p: "Carros et Le Broc regroupent l'essentiel des locaux professionnels du secteur. Un déménagement d'entreprise ne se traite pas comme un logement : il se fait souvent le week-end ou en soirée pour ne pas interrompre l'activité, le mobilier de bureau se démonte en série, et le matériel informatique voyage séparément, étiqueté poste par poste pour être remis en service dès le lundi. Nous établissons un plan d'implantation avec le client avant le déménagement, de façon que chaque carton arrive dans le bon bureau plutôt que dans un couloir." },
      { t: "L'habitat dispersé et le temps de trajet", p: "La vallée s'étire sur une vingtaine de kilomètres et les maisons sont éloignées les unes des autres, souvent au bout de chemins privés goudronnés. La conséquence est logistique : on ne peut pas enchaîner deux chantiers dans la même journée comme sur le littoral, parce que le temps de trajet entre deux adresses de la vallée dépasse celui d'un aller-retour Nice-Cannes. Nous en tenons compte au planning plutôt que de rogner sur le temps passé chez le client. C'est ce qui permet de tenir un créneau d'arrivée à l'heure près." },
      { t: "Les déménagements vers et depuis la vallée", p: "Beaucoup de nos clients de la vallée arrivent de Nice ou de la Côte pour un premier achat, avec plus de surface pour le même budget. Le déménagement se fait donc souvent depuis un appartement niçois en étage vers une maison de plain-pied : difficulté au départ, facilité à l'arrivée. Le devis reflète cette asymétrie, et le camion se dimensionne sur le point le plus contraint. Une entreprise de déménagement dans la vallée du Var travaille en réalité autant sur le littoral que dans la vallée elle-même." }
    ],
    faq: [
      { q: "Quelles communes couvre cette page ?", a: "Carros, Le Broc, Gattières, Saint-Jeannet, La Gaude, Colomars et Castagniers, soit la vallée du Var au nord de Saint-Laurent-du-Var." },
      { q: "L'accès est-il difficile dans la vallée du Var ?", a: "Non, c'est le secteur le plus confortable de notre zone : voie rapide, stationnement devant la maison, travail de plain-pied. La difficulté est le volume, pas le chemin." },
      { q: "Comptez-vous le sous-sol et le garage ?", a: "Oui, systématiquement, et nous y descendons pendant la visite. Ils ajoutent souvent quinze à vingt mètres cubes qu'une estimation sur la surface habitable ignore." },
      { q: "Déménagez-vous les entreprises de Carros ?", a: "Oui. Un déménagement dans la vallée du Var pour un professionnel se fait le week-end ou en soirée, avec un plan d'implantation établi à l'avance." },
      { q: "Comment traitez-vous le matériel informatique ?", a: "Séparément du mobilier, étiqueté poste par poste, pour que chaque machine retrouve son bureau et que l'activité reprenne dès la réouverture." },
      { q: "Faites-vous les déménagements depuis Nice vers la vallée ?", a: "C'est même notre trajet le plus courant : appartement en étage au départ, maison de plain-pied à l'arrivée. Votre déménageur dans la vallée du Var dimensionne le camion sur le point le plus contraint." }
    ],
    nearby: ["saint-laurent-du-var", "nice", "cagnes-sur-mer", "vence", "villeneuve-loubet"]
  },

  "pays-de-grasse": {
    prep: "dans", name: "le pays de Grasse", file: "Demenagement-Pays-de-Grasse",
    cp: "06650", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement dans le pays de Grasse : Le Rouret, Opio, Roquefort-les-Pins, Châteauneuf. Villas avec terrain, portage depuis le portail. Devis ferme sous 24h.",
    intro: "Entre Grasse et la mer s'étend un plateau de villas avec terrain : Le Rouret, Opio, Roquefort-les-Pins, Châteauneuf-Grasse et Peymeinade. On y déménage des maisons de plain-pied, ce qui est une bonne nouvelle pour la manutention, mais on les rejoint par des allées privées de cent à trois cents mètres, et le camion ne va pas toujours jusqu'à la porte. La distance entre le point où le véhicule s'arrête et l'entrée de la maison est ici le facteur numéro un du devis, avant le volume et avant tout le reste. C'est un secteur confortable à travailler à condition d'avoir mesuré cette distance avant.",
    quartiers: ["Le Rouret", "Opio", "Roquefort-les-Pins", "Châteauneuf-Grasse", "Peymeinade", "Le Val d'Opio", "Notre-Dame", "Les Ferrages"],
    specifics: [
      { t: "Portage depuis le portail", d: "Les allées privées font cent à trois cents mètres. Quand le camion ne peut pas remonter, tout se porte depuis le portail : c'est cette distance qui fixe l'équipe et la durée." },
      { t: "Maisons de plain-pied", d: "Peu d'étages, peu d'escaliers : la manutention est nettement moins pénible qu'en immeuble. À volume égal, la journée est plus courte qu'à Nice ou à Monaco." },
      { t: "Terrains, dépendances et mobilier d'extérieur", d: "Abri de jardin, atelier, local piscine et salon d'extérieur s'ajoutent au volume. Sur une villa avec terrain, ils représentent régulièrement dix à quinze mètres cubes." }
    ],
    deep: [
      { t: "La distance portail-maison, avant tout le reste", p: "Sur ce plateau, la question n'est jamais l'escalier mais le nombre de mètres à parcourir les bras chargés. Une allée de deux cents mètres transforme chaque aller-retour en quatre minutes de marche, et sur un volume de trente mètres cubes cela représente plusieurs heures cumulées. Nous mesurons donc systématiquement cette distance, et nous vérifions si le revêtement permet d'utiliser un chariot : sur du gravier, il est inutilisable, sur de l'enrobé il divise le temps par deux. Ce détail-là, invisible sur une photo, décide de la taille de l'équipe." },
      { t: "Faire monter le camion, ou pas", p: "Beaucoup d'allées du pays de Grasse sont goudronnées et assez larges, mais elles se terminent devant la maison sans aire de retournement, et redescendre trois cents mètres en marche arrière entre deux haies n'est pas raisonnable. Nous mesurons la largeur, la hauteur libre sous les arbres et l'espace de manœuvre. Quand le compte n'y est pas, le camion reste au portail et nous faisons la navette avec un utilitaire. Une entreprise de déménagement dans le pays de Grasse qui s'engage sans mesurer immobilise son véhicule et perd la journée." },
      { t: "Le plain-pied, un vrai avantage à ne pas gâcher", p: "Contrairement au littoral, on déménage ici sans escalier, sans ascenseur trop petit et sans cage tournante. À volume égal, la journée est plus courte et l'équipe moins usée. C'est ce qui permet, sur ces communes, de proposer des prix inférieurs à ceux d'un troisième étage niçois pour le même mobilier. Encore faut-il ne pas perdre le bénéfice dans le portage : d'où l'attention portée à l'allée, qui est le seul poste capable d'annuler l'avantage du plain-pied." },
      { t: "Ce qu'il y a dans le jardin", p: "Une villa avec terrain, c'est un abri de jardin, souvent un atelier, un local technique de piscine et un salon d'extérieur complet. Additionnés, ces éléments dépassent régulièrement douze mètres cubes, soit un tiers de camion que personne ne mentionne au téléphone. Le mobilier de jardin en résine ou en teck est volumineux et se démonte mal, les outils se conditionnent en caisses, et le barbecue maçonné reste sur place. Nous faisons le tour du terrain pendant la visite, pas seulement de la maison." }
    ],
    faq: [
      { q: "Quelles communes couvre cette page ?", a: "Le Rouret, Opio, Roquefort-les-Pins, Châteauneuf-Grasse et Peymeinade, sur le plateau entre Grasse et le littoral." },
      { q: "Pourquoi mesurez-vous l'allée avant de chiffrer ?", a: "Parce qu'elle fait cent à trois cents mètres et que c'est le premier poste du devis. Une allée en gravier interdit le chariot et double le temps de portage." },
      { q: "Le camion monte-t-il jusqu'à la maison ?", a: "Après mesure de la largeur, de la hauteur sous les arbres et de l'aire de retournement. Sans espace de manœuvre, il reste au portail et nous faisons la navette." },
      { q: "Un déménagement dans le pays de Grasse coûte-t-il moins cher ?", a: "Souvent oui, à volume égal, parce que le plain-pied évite l'escalier. Sauf si une longue allée annule cet avantage : c'est pour cela qu'on la mesure." },
      { q: "Le mobilier de jardin est-il compté ?", a: "Oui, et il pèse lourd : abri, atelier, local piscine et salon d'extérieur dépassent régulièrement douze mètres cubes à eux seuls." },
      { q: "Faites-vous le tour du terrain pendant la visite ?", a: "Systématiquement. Votre déménageur dans le pays de Grasse doit ouvrir l'abri de jardin et le local technique, pas seulement visiter la maison." }
    ],
    nearby: ["grasse", "valbonne-sophia-antipolis", "le-cannet", "cannes", "vence"]
  },

  "golfe-de-saint-tropez": {
    prep: "dans", name: "le golfe de Saint-Tropez", file: "Demenagement-Golfe-de-Saint-Tropez",
    cp: "83120", dept: "Var (83)", region: "cote",
    lede: "Déménagement dans le golfe de Saint-Tropez : Sainte-Maxime, Grimaud, Cogolin, Gassin, Ramatuelle. Hors saison, conciergeries. Devis ferme sous 24h.",
    intro: "Autour de Saint-Tropez, le golfe forme un ensemble cohérent : Sainte-Maxime, Grimaud, Cogolin, Gassin et Ramatuelle partagent la même contrainte de calendrier. De juin à septembre, la circulation autour du golfe s'effondre, et une intervention qui prend six heures en octobre peut en prendre dix en août. S'y ajoute une réalité de terrain : beaucoup de biens sont des résidences secondaires confiées à une conciergerie ou à un gardien, et le propriétaire n'est presque jamais présent le jour du déménagement. Nous organisons donc ces chantiers autour de deux choses, la saison et l'interlocuteur sur place.",
    quartiers: ["Sainte-Maxime", "Grimaud", "Port-Grimaud", "Cogolin", "Gassin", "Ramatuelle", "La Croix-Valmer", "Les Marines de Cogolin"],
    specifics: [
      { t: "Le calendrier avant le devis", d: "D'octobre à mai, une journée normale. De juin à septembre, la circulation du golfe allonge tout : nous proposons systématiquement de décaler quand la date n'est pas contrainte." },
      { t: "Conciergeries et gardiens", d: "Le propriétaire est rarement présent. Nous travaillons avec la conciergerie ou le gardien, sur inventaire photographique au chargement comme à la livraison." },
      { t: "Distance depuis Nice intégrée", d: "Cent vingt à cent quarante kilomètres selon la commune, chiffrés dès le devis. Aucun frais de route n'apparaît le jour du déménagement." }
    ],
    deep: [
      { t: "Pourquoi la saison commande le prix ici", p: "Le tour du golfe se fait par une route littorale unique, et de la mi-juin à la fin août elle sature aux heures ouvrables. Un camion qui met une heure à rejoindre Ramatuelle depuis Sainte-Maxime en octobre peut en mettre trois en plein mois d'août. Cela ne change pas la quantité de travail, cela change la durée de mobilisation du camion et de l'équipe, et c'est ce qui se facture. Quand la date est libre, nous conseillons franchement l'automne ou le printemps, et l'écart se voit sur le devis. Quand elle ne l'est pas, nous partons plus tôt et nous le disons." },
      { t: "Travailler avec une conciergerie", p: "Sur ce secteur, l'interlocuteur du jour est très souvent une conciergerie ou un gardien qui détient les clés et connaît la maison mieux que son propriétaire. Nous prenons contact en amont pour convenir de l'accès, des horaires et de l'état des lieux. Chaque pièce est photographiée avant le chargement et le même relevé est refait à la livraison, puis transmis au propriétaire. Sur un bien que celui-ci ne reverra peut-être pas avant plusieurs mois, ce dossier photographique vaut mieux que n'importe quelle déclaration." },
      { t: "Les domaines fermés et les ports résidentiels", p: "Port-Grimaud et les Marines de Cogolin fonctionnent comme des ensembles clos, avec des règles de circulation intérieures, des accès contrôlés et parfois un portage depuis un quai plutôt que depuis une rue. À Ramatuelle et Gassin, plusieurs domaines privés imposent une liste d'accès déposée à l'avance. Nous transmettons immatriculations et identités plusieurs jours avant, et nous calons la journée sur les créneaux autorisés. Une entreprise de déménagement dans le golfe de Saint-Tropez passe autant de temps sur cette préparation que sur le chargement lui-même." },
      { t: "Le mobilier des résidences secondaires", p: "Ces maisons sont meublées pour la belle saison : mobilier d'extérieur en teck, grandes tables, transats, parasols lestés, et à l'intérieur un ameublement souvent choisi avec soin. Le volume extérieur surprend toujours, et il se dégrade vite s'il est mal protégé. Nous housssons systématiquement plutôt que de couvrir, et nous chargeons ce mobilier en premier pour qu'il ne subisse pas le poids du reste. Les pièces de valeur et les œuvres se déclarent séparément avant le départ." }
    ],
    faq: [
      { q: "Quelles communes couvre cette page ?", a: "Sainte-Maxime, Grimaud, Port-Grimaud, Cogolin, Gassin, Ramatuelle et La Croix-Valmer, soit le pourtour du golfe hors Saint-Tropez, qui a sa page." },
      { q: "Faut-il éviter l'été pour un déménagement dans le golfe de Saint-Tropez ?", a: "Quand la date est libre, oui. La route littorale sature de mi-juin à fin août et un trajet d'une heure peut en prendre trois, ce qui allonge la mobilisation." },
      { q: "Le trajet depuis Nice est-il facturé à part ?", a: "Non. Les cent vingt à cent quarante kilomètres sont intégrés au devis dès le départ, sans frais de route ajouté le jour du déménagement." },
      { q: "Pouvez-vous travailler avec ma conciergerie ?", a: "Oui, c'est le cas le plus fréquent ici. Nous convenons de l'accès et des horaires en amont, et nous faisons un état des lieux photographique au chargement et à la livraison." },
      { q: "Comment accède-t-on à Port-Grimaud ou aux Marines de Cogolin ?", a: "Par les règles de circulation interne de l'ensemble, avec parfois un portage depuis un quai. Nous déposons la demande d'accès plusieurs jours avant." },
      { q: "Le mobilier de jardin est-il compté dans le volume ?", a: "Oui, et il surprend toujours : teck, grandes tables, transats et parasols lestés. Votre déménageur dans le golfe de Saint-Tropez le housse et le charge en premier." }
    ],
    nearby: ["saint-tropez", "cannes", "mandelieu", "grasse", "theoule-sur-mer"]
  },
  /* ── VAGUE 2 : les accès difficiles ─────────────────────────────────────────────
     Cinq communes où la contrainte n'est pas le volume mais le chemin. Chacune a la
     sienne : le classement et le transbordement pour Saint-Paul, le dénivelé de l'Estérel
     pour Théoule, le gardiennage et la discrétion pour le Cap d'Antibes, la double
     commune pour Biot, la corniche unique pour La Turbie. */

  "saint-paul-de-vence": {
    name: "Saint-Paul-de-Vence", file: "Demenagement-Saint-Paul-de-Vence",
    titre: "Entreprise de déménagement à Saint-Paul-de-Vence · village classé",
    cp: "06570", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Saint-Paul-de-Vence : village classé et piéton, transbordement obligatoire, œuvres d'art. Devis ferme sous 24h.",
    intro: "Saint-Paul-de-Vence est le seul endroit de notre zone où le déménagement se fait en deux véhicules. Le village est classé, entièrement piéton, et l'accès aux remparts passe par une autorisation municipale que l'on demande à l'avance. Notre camion reste au parking public : le mobilier est transbordé dans un utilitaire de faible gabarit, puis porté par les ruelles pavées. Autre particularité, et elle n'est pas anecdotique : la densité de galeries et de collectionneurs fait que les intérieurs contiennent souvent des toiles, des sculptures et des céramiques dont la valeur dépasse celle du reste du mobilier.",
    quartiers: ["Village intra-muros", "Les Remparts", "Les Gardettes", "Sainte-Claire", "Les Fumerates", "La Colle-Saint-Paul", "Les Espinets", "Le Malvan"],
    specifics: [
      { t: "Transbordement obligatoire", d: "Le camion reste au parking public. Le mobilier passe dans un utilitaire court pour approcher les remparts, puis se porte à la main par les ruelles pavées." },
      { t: "Autorisation municipale d'accès", d: "Le village classé n'admet aucun véhicule sans laissez-passer. La demande se dépose en mairie avec les immatriculations, plusieurs jours avant l'intervention." },
      { t: "Œuvres d'art et pièces de collection", d: "Toiles, sculptures et céramiques partent en caisse sur mesure et se déclarent séparément pour être couvertes à leur valeur réelle, pas au forfait mobilier." }
    ],
    deep: [
      { t: "Pourquoi il faut deux véhicules ici", p: "Un porteur de vingt mètres cubes ne s'approche pas des remparts : les abords sont étroits, la voirie est ancienne et l'affluence piétonne interdit les manœuvres longues. Nous stationnons donc le camion au parking public et nous faisons la navette avec un utilitaire de moins de trois mètres cinquante, qui peut approcher la porte du village dans le créneau autorisé. Ce double mouvement rallonge la journée d'environ deux heures sur un volume moyen. C'est prévu au devis, parce qu'une entreprise de déménagement à Saint-Paul-de-Vence qui l'oublie découvre le problème le matin même, avec le camion et le client sur place." },
      { t: "L'autorisation, et ce qu'elle n'autorise pas", p: "Le laissez-passer municipal ouvre l'accès à des heures précises, généralement en dehors des pics touristiques, et il ne dispense pas du respect de la circulation piétonne. Concrètement, un déménagement se cale tôt le matin. Nous déposons la demande avec les immatriculations et les dates, et nous confirmons la veille : un véhicule non déclaré est refoulé, et la journée est perdue. Cette contrainte administrative pèse plus lourd sur le planning que le portage lui-même." },
      { t: "Les ruelles, les seuils et les angles", p: "Les rues du village sont pavées, en pente douce, larges de deux mètres au mieux, avec des seuils de pierre surélevés et des passages voûtés qui descendent sous deux mètres de hauteur. Une armoire haute ne passe pas debout sous certaines voûtes, et un canapé d'angle se démonte plutôt que de tenter le virage. Nous mesurons le trajet exact entre la porte et le logement avant de chiffrer, en notant les points bas et les angles morts. C'est ce relevé qui détermine le nombre d'équipiers, pas le nombre de mètres carrés." },
      { t: "Transporter ce qui vaut plus que le mobilier", p: "Beaucoup de logements saint-paulois contiennent des œuvres, héritage d'une histoire artistique qui dure depuis les années trente. Une toile ne voyage pas emballée comme un miroir : caisse rigide sur mesure, calage sans contact avec la surface peinte, transport à plat ou sur chant selon la technique. Les céramiques et les bronzes partent en caisse individuelle. Ces pièces se déclarent nommément pour être assurées à leur valeur : le plafond de huit mille euros par objet couvre l'essentiel, au-delà on établit une déclaration de valeur spécifique." }
    ],
    faq: [
      { q: "Un camion peut-il entrer dans le village de Saint-Paul ?", a: "Non. Le village est classé et piéton. Nous transbordons dans un utilitaire court pour approcher les remparts, puis nous portons à la main par les ruelles." },
      { q: "Quelle autorisation faut-il pour un déménagement à Saint-Paul-de-Vence ?", a: "Un laissez-passer municipal, déposé plusieurs jours avant avec les immatriculations. Il fixe des créneaux horaires précis, souvent tôt le matin." },
      { q: "Combien de temps ce transbordement ajoute-t-il ?", a: "Environ deux heures sur un volume moyen. C'est intégré au devis dès le départ, jamais ajouté après coup." },
      { q: "Comment emballez-vous les tableaux et les sculptures ?", a: "En caisse rigide sur mesure, avec un calage qui ne touche pas la surface peinte. Les bronzes et céramiques partent en caisse individuelle." },
      { q: "Les œuvres sont-elles assurées à leur valeur ?", a: "Jusqu'à huit mille euros par objet sans démarche. Au-delà, on établit une déclaration de valeur nominative avant le déménagement." },
      { q: "Faut-il éviter certaines périodes ?", a: "L'affluence estivale et les week-ends prolongés compliquent l'accès aux remparts. Un déménageur à Saint-Paul-de-Vence privilégie les matinées de semaine hors saison." }
    ],
    nearby: ["vence", "cagnes-sur-mer", "villeneuve-loubet", "grasse", "saint-laurent-du-var"]
  },

  "theoule-sur-mer": {
    name: "Théoule-sur-Mer", file: "Demenagement-Theoule-sur-Mer",
    cp: "06590", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Théoule-sur-Mer : villas en escaliers sur l'Estérel, dénivelé, monte-meuble, corniche étroite. Devis ferme sous 24h.",
    intro: "Un déménagement à Théoule-sur-Mer ne bute ni sur le volume ni sur la distance, mais sur la verticale. Les villas sont bâties dans la roche rouge de l'Estérel, souvent en contrebas de la route, et l'on descend chez soi par un escalier extérieur de trente, cinquante, parfois quatre-vingts marches. Le camion reste en haut, sur une corniche à deux voies sans bas-côté, et tout le mobilier remonte à la main ou par monte-meuble. C'est le seul endroit de notre secteur où nous chiffrons systématiquement au nombre de marches plutôt qu'au nombre de mètres cubes, parce que c'est le dénivelé qui décide de la journée.",
    quartiers: ["Théoule village", "Miramar", "La Figueirette", "Port-la-Galère", "Le Trayas", "Pointe de l'Aiguille", "Les Terrasses de Théoule", "L'Estérel"],
    specifics: [
      { t: "Villas en contrebas de la route", d: "Le mobilier remonte par des escaliers extérieurs taillés dans la roche, de trente à quatre-vingts marches. On chiffre au nombre de marches, relevé sur place." },
      { t: "Monte-meuble quand la façade le permet", d: "Sur les villas à flanc, le monte-meuble évite des dizaines de remontées, à condition d'une assise stable pour le camion et d'une façade dégagée. On vérifie les deux avant." },
      { t: "Corniche à deux voies sans bas-côté", d: "L'arrêt d'un camion sur la corniche de l'Estérel bloque la circulation. Arrêté de stationnement obligatoire et positionnement du véhicule décidé à l'avance." }
    ],
    deep: [
      { t: "Chiffrer en marches, pas en mètres cubes", p: "Sur une villa théoulienne, deux logements de volume identique n'ont pas le même prix : l'un est de plain-pied avec le portail, l'autre se rejoint par soixante marches taillées dans la roche. Un équipier remonte entre huit et douze fois par mètre cube quand il n'y a pas de monte-meuble, et chaque remontée coûte du temps et de la fatigue. Nous venons donc compter les marches, mesurer la largeur de l'escalier et repérer les paliers de repos avant d'annoncer un prix. Ce relevé est la partie la plus utile de la visite." },
      { t: "Le monte-meuble, et quand il n'est pas possible", p: "Sur les villas à flanc de roche, le monte-meuble transforme la journée : ce qui demanderait quatre-vingts remontées se fait en une dizaine de rotations. Encore faut-il que le camion trouve une assise stable et de niveau, et que la façade soit dégagée jusqu'à la terrasse ou la fenêtre visée. À Miramar et à Port-la-Galère, la végétation et les avancées de balcon l'interdisent parfois. Nous vérifions ces deux points sur place, et quand le monte-meuble est écarté, nous renforçons l'équipe plutôt que d'allonger la journée." },
      { t: "S'arrêter sur la corniche de l'Estérel", p: "La route qui dessert Théoule est une corniche à deux voies, sans bande d'arrêt, avec des virages sans visibilité. Un camion à l'arrêt y crée un bouchon immédiat et un vrai danger. L'arrêté de stationnement se demande en mairie plusieurs jours avant, et le camion se positionne dans le sens qui évite toute marche arrière en courbe. Nous plaçons également un équipier en signalisation pendant les phases de chargement. Ce n'est pas de la précaution excessive : c'est la condition pour travailler ici en sécurité." },
      { t: "La roche, l'humidité et le mobilier", p: "Les escaliers extérieurs théouliens sont en pierre ou en béton, souvent bordés de végétation, et ils deviennent glissants après une pluie ou une nuit humide. Nous adaptons alors le rythme et l'équipement, et nous protégeons systématiquement les meubles avec des housses plutôt qu'avec des simples couvertures : un mobilier qui remonte quatre-vingts marches sous un crachin arrive mouillé si personne n'y a pensé. Sur ce type de chantier, un déménageur à Théoule-sur-Mer regarde la météo la veille au même titre que le planning." }
    ],
    faq: [
      { q: "Comment chiffrez-vous une villa en contrebas à Théoule ?", a: "Au nombre de marches relevé sur place, pas au volume seul. Deux logements identiques n'ont pas le même prix si l'un se rejoint par soixante marches." },
      { q: "Utilisez-vous un monte-meuble à Théoule-sur-Mer ?", a: "Dès que le camion trouve une assise stable et que la façade est dégagée. À Miramar et Port-la-Galère, la végétation l'interdit parfois : on renforce alors l'équipe." },
      { q: "Faut-il une autorisation pour stationner sur la corniche ?", a: "Oui, un arrêté municipal demandé plusieurs jours avant : toute entreprise de déménagement à Théoule-sur-Mer doit le faire. Un camion à l'arrêt sur cette route sans bas-côté bloque la circulation." },
      { q: "Que se passe-t-il s'il pleut le jour du déménagement ?", a: "Les escaliers de roche deviennent glissants. Nous ralentissons le rythme et housssons le mobilier plutôt que de le couvrir simplement." },
      { q: "Intervenez-vous au Trayas et à La Figueirette ?", a: "Oui, sur toute la commune. Ce sont les secteurs où le dénivelé est le plus marqué et où le repérage préalable compte le plus." },
      { q: "Le prix peut-il augmenter le jour du déménagement ?", a: "Non. Un déménagement à Théoule-sur-Mer se chiffre après avoir compté les marches sur place : le prix annoncé est alors définitif." }
    ],
    nearby: ["mandelieu", "cannes", "le-cannet", "grasse", "antibes"]
  },

  "cap-d-antibes": {
    name: "Cap d'Antibes", file: "Demenagement-Cap-d-Antibes", avecPrep: "au Cap d'Antibes",
    titre: "Entreprise de déménagement au Cap d'Antibes · propriétés gardées",
    cp: "06160", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement au Cap d'Antibes : propriétés gardiennées, allées privées, mobilier de valeur, discrétion. Devis ferme sous 24h.",
    intro: "Le Cap d'Antibes se déménage sur rendez-vous, au sens propre. Les propriétés sont closes, beaucoup ont un gardien ou un personnel de maison à demeure, et l'accès se négocie avec eux avant de se négocier avec la voirie. Les allées privées, bordées de pins et de murs anciens, sont dimensionnées pour des voitures et rarement pour un porteur de vingt mètres cubes. Enfin, le contenu impose sa propre méthode : mobilier ancien, tableaux, cave à vin parfois conséquente. Ce sont des chantiers lents, préparés, où l'improvisation coûte immédiatement cher.",
    quartiers: ["Cap d'Antibes", "La Garoupe", "Le Cap Gros", "La Salis", "Les Ondes", "Le Croûton", "Eden Roc", "La Groupe"],
    specifics: [
      { t: "Propriétés closes et gardiennées", d: "Accès négocié avec le gardien ou le personnel de maison, identités et immatriculations transmises avant, horaires convenus. Aucun équipier ne se présente sans être annoncé." },
      { t: "Allées privées au gabarit limité", d: "Murs anciens, virages serrés et aire de retournement dimensionnée pour une berline. On mesure avant d'engager le camion, quitte à faire la navette en utilitaire." },
      { t: "Cave à vin et mobilier ancien", d: "Les bouteilles voyagent debout, en caisses adaptées, à l'abri de la chaleur. Le mobilier ancien se sangle et se protège aux arêtes, sans démontage forcé." }
    ],
    deep: [
      { t: "L'accès se prépare avec les gens de la maison", p: "Sur une propriété du Cap, l'interlocuteur du jour n'est presque jamais le propriétaire : c'est un gardien, une gouvernante ou un régisseur. C'est lui qui ouvre le portail, indique par où passer sans abîmer les massifs et sait à quelle heure le portail automatique se referme. Nous prenons contact avec lui plusieurs jours avant, nous transmettons l'identité des équipiers et les immatriculations, et nous convenons d'un horaire. Une entreprise de déménagement au Cap d'Antibes qui arrive sans avoir fait ce travail reste devant le portail." },
      { t: "Le gabarit décide de tout", p: "Les allées du Cap sont bordées de murs de pierre et de pins parasols dont les branches basses descendent à trois mètres cinquante. Un porteur qui s'engage sans mesure peut se retrouver bloqué à mi-parcours, sans aire de retournement, contraint de reculer sur deux cents mètres entre deux murs. Nous mesurons systématiquement la largeur au portail, la hauteur libre sous les arbres et l'espace de manœuvre devant la maison. Quand le compte n'y est pas, le camion reste à l'extérieur et nous faisons la navette avec un utilitaire : plus long, mais sans risque pour le véhicule ni pour la propriété." },
      { t: "Une cave à vin ne se déménage pas comme des cartons", p: "Plusieurs propriétés du Cap ont une cave de quelques centaines à quelques milliers de bouteilles. Le vin voyage debout, dans des caisses à alvéoles, et il craint surtout la chaleur et les vibrations. Nous chargeons ces caisses en dernier et les livrons en premier, dans un camion qui ne stationne pas au soleil, et nous conseillons de laisser reposer plusieurs semaines avant d'ouvrir une bouteille. Sur une cave constituée, cette précaution vaut bien plus que le coût du transport." },
      { t: "La discrétion fait partie de la prestation", p: "Nos clients du Cap demandent souvent que rien ne s'affiche : pas de camion stationné une journée entière devant le portail, pas d'équipe qui déjeune sur le trottoir, pas de mention de l'adresse. Nous organisons la journée pour que le chargement soit groupé plutôt qu'étalé, et l'équipe est la même du début à la fin, sans intérimaire recruté la veille. Ce n'est pas un supplément de confort, c'est la condition pour travailler durablement sur ce secteur." }
    ],
    faq: [
      { q: "Comment accède-t-on à une propriété du Cap d'Antibes ?", a: "Par le gardien ou le personnel de maison, contacté plusieurs jours avant. Nous transmettons l'identité des équipiers et les immatriculations, et nous convenons d'un horaire." },
      { q: "Vos camions passent-ils les allées privées ?", a: "Après mesure de la largeur au portail, de la hauteur sous les pins et de l'aire de manœuvre. Sinon nous faisons la navette avec un utilitaire." },
      { q: "Déménagez-vous une cave à vin ?", a: "Oui, en caisses à alvéoles, bouteilles debout, chargées en dernier et livrées en premier. Nous conseillons de laisser reposer le vin plusieurs semaines." },
      { q: "Assurez-vous les tableaux et le mobilier ancien ?", a: "Jusqu'à huit mille euros par objet, franchise à notre charge. Au-delà, une déclaration de valeur nominative se fait avant le déménagement." },
      { q: "Peut-on éviter que le camion reste visible toute la journée ?", a: "Oui. Nous groupons le chargement plutôt que de l'étaler, avec une équipe renforcée. La discrétion est une contrainte d'organisation, pas une option." },
      { q: "Travaillez-vous avec des intérimaires ?", a: "Non. Un déménageur au Cap d'Antibes travaille chez des gens qui laissent leur maison ouverte : l'équipe est la même du début à la fin, et elle est connue." }
    ],
    nearby: ["antibes", "villeneuve-loubet", "le-cannet", "cannes", "cagnes-sur-mer"]
  },

  "biot": {
    name: "Biot", file: "Demenagement-Biot", cp: "06410", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Biot : village perché aux ruelles étroites, plaine résidentielle, verrerie et objets fragiles. Devis ferme sous 24h.",
    intro: "Biot est une commune coupée en deux par un dénivelé, et l'adresse exacte change tout au devis. En haut, le village médiéval s'organise autour de la place des Arcades, avec des rues d'un mètre cinquante, des passages voûtés et des maisons à escalier droit : le camion reste en bas et tout monte à la main. En contrebas, la plaine et les résidences des Bréguières se déménagent normalement, avec un stationnement devant l'immeuble. Une troisième particularité traverse les deux : la tradition verrière et l'artisanat d'art font qu'on y déménage beaucoup de pièces fragiles, souvent non emballables en carton standard.",
    quartiers: ["Village de Biot", "Place des Arcades", "Les Bréguières", "La Plaine", "Saint-Philippe", "Les Combes", "Les Clausonnes", "Le Val de Pome"],
    specifics: [
      { t: "Village médiéval en haut", d: "Ruelles d'un mètre cinquante, passages voûtés bas et escaliers droits. Le camion stationne aux abords et le mobilier monte à la main, sur cinquante à cent cinquante mètres." },
      { t: "Plaine résidentielle en bas", d: "Résidences et pavillons avec stationnement devant l'immeuble et ascenseurs. Un déménagement y ressemble à un chantier antibois classique." },
      { t: "Verrerie et pièces d'artisanat", d: "Verre soufflé, céramiques et pièces d'atelier ne tiennent pas dans un carton standard : caisses cloisonnées, calage individuel et transport séparé du reste." }
    ],
    deep: [
      { t: "Demander l'adresse avant d'annoncer un prix", p: "Sur cette commune plus qu'ailleurs, deux clients qui décrivent le même logement peuvent recevoir des devis très différents. Une maison de village près de la place des Arcades impose un portage de cent mètres par des ruelles en pente, avec un camion resté en contrebas. Un appartement des Bréguières se charge depuis le pied de l'immeuble, avec un ascenseur. Nous refusons donc de chiffrer sur la seule surface : l'adresse précise et la position dans la commune sont les premières questions que nous posons, et elles pèsent plus lourd que le nombre de pièces." },
      { t: "Le village, ses voûtes et ses escaliers droits", p: "Les rues du vieux Biot montent en courbe, pavées, avec des passages voûtés dont la hauteur libre descend sous deux mètres. Les maisons ont des escaliers droits et étroits, sans palier intermédiaire, ce qui interdit de tourner une armoire montée. On démonte davantage qu'ailleurs, et l'on sort parfois par la fenêtre les pièces qui ne passent pas l'angle du bas. Nous mesurons ces points avant, en notant la hauteur des voûtes sur le trajet retenu : un meuble haut peut passer par une rue et pas par l'autre." },
      { t: "Transporter du verre soufflé", p: "La verrerie biotoise, avec ses bulles caractéristiques, se retrouve dans beaucoup d'intérieurs de la commune, et les ateliers d'art produisent aussi des pièces de grande taille. Un carton standard, même à double cannelure, ne suffit pas : nous utilisons des caisses cloisonnées où chaque pièce est calée individuellement, sans contact entre les objets, et ces caisses voyagent séparément du mobilier lourd. Elles sont chargées en dernier et posées à plat, jamais empilées. C'est plus long à préparer, et c'est ce qui évite d'ouvrir une caisse pleine d'éclats à l'arrivée." },
      { t: "La plaine, le technopôle et les volumes de famille", p: "En contrebas, la commune touche Sophia Antipolis et accueille beaucoup de familles installées pour un poste au technopôle. Les logements y sont plus grands, souvent avec garage et cave, et les déménagements se font vers ou depuis d'autres régions. La logistique est simple, les volumes sont importants, et la question principale devient le calendrier plutôt que l'accès. Une entreprise de déménagement à Biot doit donc savoir faire les deux métiers : le portage patient du village et le gros volume longue distance de la plaine." }
    ],
    faq: [
      { q: "Le camion peut-il monter dans le village de Biot ?", a: "Non, les ruelles font un mètre cinquante et les voûtes descendent sous deux mètres. Le camion stationne aux abords et le mobilier monte à la main." },
      { q: "Pourquoi demandez-vous l'adresse exacte à Biot ?", a: "Parce que le village et la plaine n'ont rien à voir. Cent mètres de portage en pente d'un côté, un ascenseur et un stationnement de l'autre : le prix n'est pas le même." },
      { q: "Comment emballez-vous la verrerie de Biot ?", a: "En caisses cloisonnées, chaque pièce calée individuellement et sans contact avec les autres. Ces caisses voyagent à plat, chargées en dernier, jamais empilées." },
      { q: "Faut-il démonter les meubles dans le village ?", a: "Plus souvent qu'ailleurs : les escaliers sont droits et sans palier, donc on ne peut pas tourner une armoire montée. Parfois on sort par la fenêtre." },
      { q: "Intervenez-vous pour les familles du technopôle ?", a: "Oui, régulièrement. Ce sont des volumes importants avec garage et cave, souvent en longue distance, où la contrainte est le calendrier plutôt que l'accès." },
      { q: "Le verre est-il couvert par l'assurance ?", a: "Oui, jusqu'à huit mille euros par objet, franchise à notre charge. Votre déménageur à Biot vous fait déclarer nommément les pièces d'atelier de grande valeur avant le départ." }
    ],
    nearby: ["antibes", "villeneuve-loubet", "valbonne-sophia-antipolis", "cagnes-sur-mer", "le-cannet"]
  },

  "la-turbie": {
    name: "La Turbie", file: "Demenagement-La-Turbie", cp: "06320", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à La Turbie : accès par la Grande Corniche, virages serrés, gabarit limité, altitude. Devis ferme sous 24h.",
    intro: "La Turbie se rejoint par la Grande Corniche, et c'est cette route qui commande tout le reste. Quatre cent cinquante mètres d'altitude, une montée continue depuis le littoral, des virages en épingle et des passages où deux véhicules se croisent difficilement. Un semi-remorque n'y monte pas, et même un porteur de vingt mètres cubes demande un chauffeur qui connaît le tracé. Une fois en haut, le village s'organise autour du Trophée d'Auguste avec des rues étroites, et les villas s'étagent sur des terrains en pente. L'hiver ajoute sa part : à cette altitude, une matinée de gel change la façon de charger.",
    quartiers: ["Village de La Turbie", "Le Trophée", "La Tête de Chien", "Les Revoires", "Le Mont-Agel", "La Grande Corniche", "Cabrolles", "Sainte-Dévote"],
    specifics: [
      { t: "Montée par la Grande Corniche", d: "Virages en épingle et pente continue depuis le littoral. Le gabarit du camion se décide avant, et le chauffeur connaît le tracé : ce n'est pas une route qu'on découvre chargé." },
      { t: "Transbordement fréquent", d: "Quand le véhicule adapté à la route ne l'est pas au volume, on charge en deux rotations avec un utilitaire plutôt que d'immobiliser un camion trop grand." },
      { t: "Altitude et conditions hivernales", d: "À 450 mètres, le gel matinal est courant de décembre à février. On décale le départ plutôt que de charger sur une chaussée verglacée en pente." }
    ],
    deep: [
      { t: "La route décide du camion, pas l'inverse", p: "Ailleurs, on choisit le véhicule selon le volume. Ici, on le choisit selon la Grande Corniche. Les épingles au-dessus de Cap-d'Ail imposent un rayon de braquage que tous les porteurs n'ont pas, et certains passages ne permettent pas de croiser un bus. Nous décidons donc du gabarit avant tout le reste, et le chauffeur affecté connaît le tracé : un déménagement à La Turbie n'est pas une route qu'on découvre avec vingt mètres cubes derrière soi. Quand le volume dépasse ce que la route accepte, nous faisons deux rotations." },
      { t: "Le village en haut, autour du Trophée", p: "Le vieux village s'enroule autour du Trophée d'Auguste avec des rues d'un peu plus de deux mètres, en pente, et un stationnement rare. Le camion se place sur l'un des rares emplacements possibles, souvent en contrebas, et le portage se fait sur cinquante à cent mètres en montée. Nous demandons un arrêté de stationnement pour bloquer l'emplacement la veille : sans cela, il est occupé au petit matin, et il n'existe pas de solution de repli à proximité." },
      { t: "Les villas en pente et le monte-meuble", p: "Autour du village, les terrains descendent vers le sud avec des vues sur la Principauté, et les villas sont construites en paliers. On retrouve les escaliers extérieurs, les restanques et les accès par des chemins privés parfois plus étroits que la corniche elle-même. Le monte-meuble est utile quand la façade est dégagée, mais l'assise du camion doit être plane, ce qui est rare sur une parcelle en pente. Nous vérifions ce point à la visite, et nous prévoyons sinon une équipe postée par paliers." },
      { t: "L'hiver, à quatre cent cinquante mètres", p: "De décembre à février, la Grande Corniche gèle en matinée sur les portions à l'ombre, et une chaussée verglacée en montée n'est pas négociable avec un camion chargé. Nous décalons le départ de deux heures plutôt que de tenter, et nous le disons au client la veille. C'est aussi pour cette raison que nous évitons de programmer un chargement très tôt en plein hiver sur cette commune. Un déménageur à La Turbie qui ignore cette contrainte la découvre une fois, et une seule." }
    ],
    faq: [
      { q: "Un gros camion peut-il monter à La Turbie ?", a: "Pas toujours. Les épingles de la Grande Corniche imposent un rayon de braquage limité : une entreprise de déménagement à La Turbie choisit le gabarit selon la route, et fait deux rotations si le volume l'exige." },
      { q: "Faut-il un arrêté de stationnement au village ?", a: "Oui. Les emplacements sont rares et occupés dès le matin. Nous bloquons la place la veille, faute de quoi il n'existe aucune solution de repli à proximité." },
      { q: "Quelle distance de portage dans le village ?", a: "Cinquante à cent mètres en montée selon la maison, depuis l'emplacement disponible en contrebas. Nous mesurons ce trajet avant de chiffrer." },
      { q: "Le monte-meuble est-il possible sur les villas en pente ?", a: "Seulement si le camion trouve une assise plane, ce qui est rare sur une parcelle en paliers. Sinon nous postons une équipe par niveau." },
      { q: "Déménagez-vous en hiver à cette altitude ?", a: "Oui, mais nous décalons le départ quand la corniche gèle en matinée. Nous prévenons la veille plutôt que de charger sur une chaussée verglacée en pente." },
      { q: "Le prix tient-il compte de la difficulté d'accès ?", a: "Il est chiffré après repérage de la route et du stationnement, et il ne bouge plus ensuite. Aucun supplément d'accès n'apparaît le jour du déménagement." }
    ],
    nearby: ["cap-d-ail", "monaco", "beausoleil", "roquebrune-cap-martin", "eze"]
  },
  /* ── VAGUE 1 ────────────────────────────────────────────────────────────────────
     Quatre communes ajoutées le 24 août 2026. Chacune tient sur UNE contrainte que les
     dix-huit autres n'ont pas : le technopôle et ses mutations pour Valbonne, la vieille
     ville close pour Vence, la saison pour Saint-Tropez, le village piéton et les domaines
     gardés pour Mougins. Le texte ne doit jamais rester vrai si on remplace le nom de la
     commune par une autre : c'est le seul test qui distingue une page utile d'un gabarit
     décliné, et c'est exactement ce que Google sait détecter. */

  "valbonne-sophia-antipolis": {
    name: "Valbonne Sophia Antipolis", file: "Demenagement-Valbonne-Sophia-Antipolis",
    cp: "06560", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Valbonne Sophia Antipolis : mutations, prise de poste au technopôle, facturation entreprise. Devis ferme sous 24h.",
    intro: "Sophia Antipolis n'est pas un quartier résidentiel comme un autre : c'est un parc d'activités de deux mille hectares où l'on arrive pour un poste, souvent avec une date d'entrée en fonction non négociable. La moitié de nos clients valbonnais déménagent parce que leur employeur les mute, et beaucoup ne sont pas encore sur place quand il faut décider. Cela change tout au déroulé : l'interlocuteur est parfois un service des ressources humaines à Paris ou à l'étranger, la facture part à l'entreprise, et la date de livraison compte davantage que la date de chargement. À côté du technopôle, le village de Valbonne et ses hameaux se déménagent, eux, de façon très classique.",
    quartiers: ["Sophia Antipolis", "Valbonne village", "Garbejaire", "Les Clausonnes", "Les Bouillides", "Haut-Sartoux", "Font-Neuve", "Peidessale"],
    specifics: [
      { t: "Déménagement pris en charge par l'employeur", d: "Devis au nom de la société, bon de commande, facturation séparée et justificatifs pour le service des ressources humaines. Nous traitons directement avec le service mobilité quand le salarié n'est pas encore arrivé." },
      { t: "Date imposée par la prise de poste", d: "Un premier jour de travail ne se décale pas. Nous partons de cette date et remontons le calendrier, quitte à livrer avant que le salarié n'ait fini son préavis dans son ancien logement." },
      { t: "Résidences du parc, accès contrôlés", d: "Les résidences de Garbejaire et des Bouillides ont des barrières, des places visiteurs limitées et des règlements d'immeuble. Nous prévenons le syndic et réservons l'accès avant le jour du déménagement." }
    ],
    deep: [
      { t: "Le calendrier part de la prise de poste, pas du bail", p: "Chez un particulier, on cale le déménagement sur la remise des clés. Ici, le point fixe est la date d'entrée en fonction, et tout le reste s'y adapte. Il arrive qu'un salarié prenne son poste au technopôle trois semaines avant que sa famille n'emménage : on charge, on stocke le temps nécessaire, et on livre quand le logement est disponible. Cette souplesse-là se décide au devis, pas la veille, parce qu'elle mobilise un camion et un volume de stockage sur une période précise." },
      { t: "Facturer une entreprise n'est pas facturer un particulier", p: "Quand la mobilité est prise en charge, l'employeur veut un devis détaillé au nom de la société, un numéro de bon de commande reporté sur la facture et parfois une note distinguant ce qui relève de la prestation et ce qui relève des fournitures. Nous préparons ces pièces dès le devis, avec le montant de l'assurance indiqué noir sur blanc, parce que c'est la ligne que les services de mobilité vérifient en premier. Un dossier incomplet retarde le remboursement du salarié de plusieurs semaines." },
      { t: "Coordonner à distance, sans chiffrer à l'aveugle", p: "Beaucoup de nos clients n'ont pas encore vu leur futur logement, et certains sont à l'étranger. Nous faisons le repérage de l'adresse d'arrivée à leur place : largeur d'accès, stationnement, ascenseur et dimensions de la cage d'escalier, transmis avec des photos. C'est ce qui distingue une entreprise de déménagement à Valbonne Sophia Antipolis d'un devis fait au téléphone : personne ne découvre le jour de la livraison que le canapé ne passe pas la porte." },
      { t: "Le village et les hameaux, l'autre Valbonne", p: "À trois kilomètres du parc, le village de Valbonne est un damier de rues étroites du seizième siècle, avec une place centrale interdite aux véhicules les jours de marché. Les maisons de village y ont des escaliers droits et des paliers courts, et le camion se gare aux abords. Rien à voir avec les résidences du technopôle et leurs parkings dimensionnés pour des cadres motorisés. Nous demandons donc systématiquement l'adresse exacte avant de chiffrer : sur cette commune, deux points distants de quelques minutes n'ont pas le même prix." }
    ],
    faq: [
      { q: "Travaillez-vous avec les entreprises de Sophia Antipolis ?", a: "Oui, régulièrement. Devis au nom de la société, bon de commande et facturation séparée. Un déménagement à Valbonne Sophia Antipolis pris en charge par l'employeur se prépare avec le service mobilité, même si le salarié n'est pas encore sur place." },
      { q: "Pouvez-vous stocker entre le chargement et la livraison ?", a: "Oui. C'est fréquent quand la prise de poste précède la disponibilité du logement. Le volume et la durée se calent au devis, pas au dernier moment." },
      { q: "Le salarié doit-il être présent le jour du déménagement ?", a: "Non, à condition d'avoir désigné une personne de confiance et de nous avoir remis les clés. Nous transmettons un état des lieux photographique au chargement et à la livraison." },
      { q: "Faut-il prévenir la résidence à Garbejaire ou aux Bouillides ?", a: "Oui. Barrière, places visiteurs et créneaux d'accès sont réglementés. Nous contactons le syndic une semaine avant pour réserver l'emplacement." },
      { q: "Déménagez-vous aussi dans le village de Valbonne ?", a: "Bien sûr. Les rues y sont étroites et la place centrale est occupée les jours de marché : le camion stationne aux abords et le portage est plus long qu'au technopôle." },
      { q: "Le devis peut-il changer si l'entreprise modifie la date ?", a: "Le prix reste ferme. Seul un report très tardif en pleine saison peut affecter la disponibilité, et votre déménageur à Valbonne Sophia Antipolis vous le dit avant, jamais après." }
    ],
    nearby: ["antibes", "grasse", "le-cannet", "villeneuve-loubet", "cagnes-sur-mer"]
  },

  "vence": {
    name: "Vence", file: "Demenagement-Vence", cp: "06140", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Vence : cité historique fermée aux camions, villas avec dépendances, mobilier ancien. Devis ferme sous 24h.",
    intro: "Un déménagement à Vence se joue dans deux endroits qui n'ont rien de commun. La cité historique tient dans une enceinte médiévale percée de cinq portes, et aucune n'est franchissable par un camion de déménagement : tout ce qui sort de la vieille ville sort à la main, sur cinquante à deux cents mètres selon la porte utilisée. Autour, la commune s'étale sur les collines en villas avec terrain, dépendances, pool house et garages remplis de trente ans d'affaires. Ce sont deux métiers différents, et le second réserve plus de surprises que le premier : le volume déclaré est presque toujours sous-estimé quand il y a une dépendance.",
    quartiers: ["Cité historique", "Le Riou", "Les Baous", "La Sine", "Le Grand Jardin", "Passeprest", "Sainte-Colombe", "Les Salles"],
    specifics: [
      { t: "Cité historique fermée aux camions", d: "Les cinq portes de l'enceinte médiévale n'admettent aucun véhicule de déménagement. Le camion se poste au plus près et le portage se fait par les ruelles, jusqu'à deux cents mètres selon la porte." },
      { t: "Villas avec dépendances", d: "Pool house, atelier, cave, garage double : le volume réel dépasse presque toujours l'estimation faite sur la seule surface habitable. Nous comptons les annexes avant de chiffrer." },
      { t: "Mobilier ancien et pièces lourdes", d: "Armoires provençales, buffets en noyer, tables monastère : des meubles massifs qui se démontent rarement et passent difficilement les portes anciennes. Protection sur mesure et équipe renforcée." }
    ],
    deep: [
      { t: "Sortir un logement de la vieille ville", p: "Les rues de la cité sont larges d'un mètre cinquante à trois mètres et pavées, avec des seuils surélevés et des passages voûtés bas. Un déménagement s'y organise autour de la porte la plus proche : Porte du Peyra, Porte du Signadou ou Porte de l'Orient, chacune donnant sur une possibilité de stationnement différente. Nous repérons ce trajet avant de chiffrer et nous comptons la distance réelle de portage, parce que c'est elle, et non le volume, qui fixe le nombre d'équipiers et la durée de la journée." },
      { t: "Les dépendances, la vraie surprise du devis", p: "Une villa vençoise de cent quarante mètres carrés annoncés cache souvent un garage double plein, un abri de jardin, une cave et un local technique de piscine. Le mobilier de jardin, l'outillage, les vélos et les cartons stockés depuis l'emménagement précédent représentent facilement dix à quinze mètres cubes supplémentaires. Nous demandons donc à voir toutes les annexes lors de la visite, y compris celles dont le propriétaire dit qu'il n'y a rien dedans. C'est la seule façon de tenir un prix ferme sur ce type de bien." },
      { t: "Le mobilier ancien, et pourquoi il change la méthode", p: "Vence attire depuis longtemps une clientèle installée, et le mobilier suit : armoires à corniche, secrétaires, commodes en bois massif, parfois des pièces d'atelier héritées. Ces meubles ne se démontent pas comme du mobilier contemporain, leurs assemblages travaillent, et une armoire provençale pèse couramment cent vingt kilos à vide. On les sangle debout, on protège les arêtes et les pieds, et on prévoit le passage par une fenêtre quand l'escalier tourne trop court. C'est plus lent, et c'est prévu au devis." },
      { t: "Les chemins de colline et le gabarit du camion", p: "Au Riou, aux Baous ou du côté de Passeprest, les villas se rejoignent par des chemins privés en montée, bordés de murets et terminés par un portail de trois mètres. Un porteur de vingt mètres cubes n'y entre pas toujours. Nous repérons le dernier virage avant d'engager un véhicule : c'est ce qu'on attend d'un déménageur à Vence plutôt que d'un transporteur de passage, et cela évite la marche arrière sur cinq cents mètres." }
    ],
    faq: [
      { q: "Le camion peut-il entrer dans la vieille ville de Vence ?", a: "Non. Les portes de l'enceinte médiévale ne laissent pas passer un véhicule de déménagement. Le camion se poste au plus près et le mobilier sort à la main par les ruelles." },
      { q: "Quelle distance de portage faut-il prévoir dans la cité ?", a: "De cinquante à deux cents mètres selon la porte la plus proche et les possibilités de stationnement. Nous mesurons ce trajet avant de chiffrer." },
      { q: "Comptez-vous le garage et le pool house dans le volume ?", a: "Oui, systématiquement. Les dépendances représentent souvent dix à quinze mètres cubes qu'une estimation faite sur la surface habitable ignore complètement." },
      { q: "Comment transportez-vous une armoire provençale ?", a: "Sanglée debout, arêtes et pieds protégés, portée par quatre. Quand l'escalier tourne trop court, nous sortons par une fenêtre plutôt que de forcer un assemblage ancien." },
      { q: "Vos camions accèdent-ils aux villas des collines ?", a: "Après repérage du dernier virage et du portail. Si le gabarit ne passe pas, nous chargeons en deux rotations avec un utilitaire, ce qui revient moins cher qu'un camion immobilisé." },
      { q: "Faut-il une autorisation de stationnement à Vence ?", a: "Oui dès que le camion occupe la voie publique, ce qui est presque toujours le cas aux abords de la cité. Toute entreprise de déménagement à Vence doit la demander en mairie : nous nous en chargeons." }
    ],
    nearby: ["cagnes-sur-mer", "saint-laurent-du-var", "grasse", "villeneuve-loubet", "nice"]
  },

  "saint-tropez": {
    name: "Saint-Tropez", file: "Demenagement-Saint-Tropez", cp: "83990", dept: "Var (83)", region: "cote",
    lede: "Déménagement à Saint-Tropez : résidences secondaires, interventions hors saison, circulation réglementée l'été. Devis ferme sous 24h.",
    intro: "À Saint-Tropez, la question n'est pas de savoir comment on déménage mais quand. De juin à septembre, la presqu'île est saturée : la route d'accès est unique et régulièrement à l'arrêt, le stationnement d'un camion au centre relève de l'exploit, et une journée de travail se transforme en journée d'attente. Nous privilégions donc franchement les interventions d'octobre à mai, et nous le disons dès le premier appel même quand ce n'est pas ce que le client veut entendre. L'autre particularité tient au type de bien : beaucoup de résidences secondaires, souvent meublées avec soin, où l'on déménage un intérieur complet sans que le propriétaire soit présent.",
    quartiers: ["La Ponche", "Les Parcs de Saint-Tropez", "Les Salins", "La Bouillabaisse", "Les Canoubiers", "Le Pinet", "La Moutte", "Saint-Antoine"],
    specifics: [
      { t: "Saisonnalité qui commande tout", d: "D'octobre à mai, une journée normale. De juin à septembre, accès saturé et stationnement quasi impossible au centre : nous chiffrons en conséquence et proposons de décaler quand la date n'est pas contrainte." },
      { t: "Résidences secondaires sans propriétaire", d: "Inventaire photographique au chargement et à la livraison, coordination avec le gardien ou la conciergerie, remise de clés tracée. Le propriétaire suit à distance." },
      { t: "Distance intégrée au devis, pas ajoutée après", d: "Cent dix kilomètres depuis notre base niçoise : le trajet est chiffré dès le départ. C'est le poste que les devis à distance oublient et qui réapparaît en supplément le jour J." }
    ],
    deep: [
      { t: "Pourquoi nous poussons à déménager hors saison", p: "L'accès à la presqu'île se fait par une route unique, et de la mi-juin à la fin août elle est régulièrement bloquée plusieurs heures. Un camion qui arrive à midi au lieu de huit heures perd la journée, et le portage se fait alors dans une circulation où le moindre arrêt crée un bouchon. Hors saison, le même chantier se traite sans stress, avec un stationnement disponible et une équipe qui rentre le soir. Quand la date est libre, nous conseillons octobre à mai, et cela se voit sur le devis : la même prestation en pleine saison mobilise plus longtemps le camion et l'équipe." },
      { t: "Déménager une maison dont le propriétaire est absent", p: "Beaucoup de biens tropéziens sont des résidences secondaires. Le propriétaire vit ailleurs, parfois à l'étranger, et confie les clés à un gardien, une conciergerie ou une agence. Nous travaillons alors sur inventaire : chaque pièce est photographiée avant le chargement, les objets fragiles sont listés, et le même relevé est refait à la livraison. Ce n'est pas une formalité. Sur un intérieur meublé avec soin, où le propriétaire ne verra le résultat que des semaines plus tard, c'est la seule façon de lever tout doute sur ce qui est parti dans quel état." },
      { t: "Les Parcs et les domaines fermés", p: "Le domaine des Parcs fonctionne avec un poste de garde, une liste d'accès déposée à l'avance et des règles de circulation intérieures. On n'y entre pas en annonçant qu'on vient déménager au numéro douze. Une entreprise de déménagement à Saint-Tropez transmet donc les immatriculations et l'identité des équipiers plusieurs jours avant, et respecte les horaires autorisés, qui excluent souvent le début de matinée." },
      { t: "Le mobilier de bord de mer, et ce qu'il impose", p: "Les intérieurs tropéziens mêlent souvent du mobilier de valeur, des œuvres accrochées et du mobilier d'extérieur volumineux : grandes tables, transats, parasols déportés lestés. Les toiles et objets d'art partent en caisse ou en emballage renforcé, et se déclarent séparément pour l'assurance. Le mobilier de jardin, lui, occupe un volume que personne n'annonce spontanément : un salon d'extérieur complet et deux bains de soleil représentent facilement six mètres cubes. Nous les comptons à la visite." }
    ],
    faq: [
      { q: "Intervenez-vous à Saint-Tropez en plein été ?", a: "Oui, mais nous le déconseillons quand la date est libre. Un déménagement à Saint-Tropez en août dépend d'une route unique, régulièrement bloquée : une journée entière peut se perdre en attente." },
      { q: "Le trajet depuis Nice est-il facturé en supplément ?", a: "Non. Les cent dix kilomètres sont intégrés au devis dès le départ. Aucun frais de route n'apparaît le jour du déménagement." },
      { q: "Faut-il que je sois présent le jour du déménagement ?", a: "Non. Nous travaillons couramment avec un gardien ou une conciergerie, sur inventaire photographique au chargement et à la livraison." },
      { q: "Comment accède-t-on aux Parcs de Saint-Tropez ?", a: "Sur liste déposée à l'avance au poste de garde, avec les immatriculations et l'identité des équipiers, et dans les créneaux horaires autorisés par le domaine." },
      { q: "Prenez-vous en charge les œuvres d'art ?", a: "Oui, en caisse ou emballage renforcé selon la pièce. Elles se déclarent séparément pour être couvertes à leur valeur réelle." },
      { q: "Le mobilier de jardin compte-t-il dans le volume ?", a: "Oui, et il pèse plus que prévu : un salon d'extérieur avec bains de soleil atteint facilement six mètres cubes. Votre déménageur à Saint-Tropez doit le compter pendant la visite, pas le matin du chargement." }
    ],
    nearby: ["cannes", "mandelieu", "grasse", "antibes", "le-cannet"]
  },

  "mougins": {
    name: "Mougins", file: "Demenagement-Mougins", cp: "06250", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Mougins : village piéton, domaines fermés à gardien, villas avec dépendances. Accès repéré avant le devis, prix ferme sous 24 h.",
    intro: "Un déménagement à Mougins pose deux problèmes distincts, et il faut savoir lequel on traite avant de chiffrer. Le vieux village est un escargot de ruelles pavées interdit à la circulation, où le camion s'arrête au parking et où tout monte à pied par une rampe en colimaçon. Le reste de la commune est un chapelet de domaines résidentiels privés, fermés par des portails, gardés, avec des règlements intérieurs qui fixent les horaires d'intervention et les véhicules admis. Dans le premier cas on négocie avec la pente, dans le second avec une procédure. Les deux se préparent, mais pas du tout de la même façon.",
    quartiers: ["Mougins village", "Tournamy", "Font de Currault", "Les Bréguières", "Saint-Basile", "Val de Mougins", "La Peyrière", "Mougins-le-Haut"],
    specifics: [
      { t: "Vieux village entièrement piéton", d: "Aucun véhicule dans les ruelles du village. Chargement au parking et portage par la rampe en colimaçon, avec une équipe renforcée et un chiffrage à la distance réelle." },
      { t: "Domaines fermés et gardiennés", d: "Portail, poste de garde, liste d'accès à déposer et horaires imposés par le règlement intérieur. Nous transmettons immatriculations et identités plusieurs jours avant." },
      { t: "Villas avec piscine et dépendances", d: "Pool house, local technique, garage et abri de jardin s'ajoutent au volume habitable. Nous les comptons à la visite plutôt que de les découvrir le matin du chargement." }
    ],
    deep: [
      { t: "Le village, une spirale qui se monte à pied", p: "Le vieux Mougins s'enroule autour de sa butte en une rampe pavée que les véhicules ne franchissent pas. Depuis le parking, il faut compter entre cent et deux cent cinquante mètres de montée selon la maison, sur des pavés irréguliers et par des passages qui se resserrent à un mètre vingt. Un canapé trois places n'y passe pas horizontalement dans certains angles : il se sort debout, parfois par une fenêtre. Nous montons repérer le trajet et mesurer les points étroits avant d'annoncer un prix, et nous prévoyons deux équipiers de plus qu'ailleurs pour un volume équivalent." },
      { t: "Entrer dans un domaine privé, ça se prépare", p: "Les domaines résidentiels mouginois ne se visitent pas à l'improviste. Chacun a son poste de garde, sa liste d'accès à déposer à l'avance et son règlement intérieur, qui interdit souvent les manœuvres avant huit heures ou après dix-huit heures et limite le tonnage admis dans les allées. Nous fournissons les immatriculations et l'identité des équipiers plusieurs jours avant, et nous calons la journée sur les créneaux autorisés. Un camion refoulé au portail, c'est une journée perdue pour tout le monde et une pénalité de mobilisation que personne n'a envie de payer." },
      { t: "Les allées privées et le gabarit réel", p: "Une villa mouginoise se rejoint souvent par une allée goudronnée de trois cents mètres, bordée d'oliviers ou de cyprès, avec un rétrécissement au portail et une aire de retournement dimensionnée pour une berline. Un porteur de vingt mètres cubes qui s'y engage sans repérage se retrouve à reculer sur toute la longueur. Nous mesurons le passage du portail et l'aire de manœuvre avant d'engager le véhicule, et nous prévoyons au besoin une navette en utilitaire entre la maison et le camion resté en bas. Cela se décide au devis, jamais sur place." },
      { t: "Ce que cachent les dépendances", p: "Sur les villas avec piscine, le volume réel dépasse presque toujours ce que le propriétaire annonce. Le pool house contient du mobilier d'extérieur, le local technique de l'outillage, le garage des vélos et des cartons oubliés : quinze mètres cubes à eux trois, couramment. Une entreprise de déménagement à Mougins qui veut tenir son prix ouvre donc toutes les portes pendant la visite, y compris celles dont on lui assure qu'elles sont vides." }
    ],
    faq: [
      { q: "Le camion peut-il monter dans le vieux village de Mougins ?", a: "Non, les ruelles sont piétonnes. Le chargement se fait au parking et le mobilier monte à pied par la rampe pavée, sur cent à deux cent cinquante mètres." },
      { q: "Comment sortez-vous un canapé d'une maison de village ?", a: "Debout, et par une fenêtre quand un angle se resserre sous un mètre vingt. Nous repérons les points étroits avant de chiffrer pour ne pas improviser le jour même." },
      { q: "Que faut-il pour entrer dans un domaine gardé ?", a: "Une liste d'accès déposée à l'avance avec les immatriculations et l'identité des équipiers, et le respect des horaires du règlement intérieur, souvent de huit à dix-huit heures." },
      { q: "Vos camions passent-ils les allées privées ?", a: "Après mesure du portail et de l'aire de retournement. Si le gabarit ne passe pas, nous faisons la navette en utilitaire depuis le camion resté en bas." },
      { q: "Le pool house et le garage sont-ils comptés ?", a: "Oui. Ces annexes représentent souvent quinze mètres cubes à elles seules. Nous les ouvrons toutes pendant la visite pour que le prix tienne." },
      { q: "Peut-on déménager un piano au village ?", a: "Oui, avec un équipement spécifique et une équipe dédiée. La rampe pavée impose un portage lent : votre déménageur à Mougins le chiffre à part et l'annonce avant, jamais le jour J." }
    ],
    nearby: ["cannes", "le-cannet", "grasse", "mandelieu", "antibes"]
  },
  "nice": {
    name: "Nice", file: "Demenagement-Nice", cp: "06000 – 06300", dept: "Alpes-Maritimes (06)", region: "cote",
    h1: <>Déménager <em>quartier par quartier</em> à Nice</>,
    eyebrow: "Les 10 quartiers de Nice",
    lede: "Déménager dans les quartiers de Nice : Vieux-Nice piéton, Mont Boron en lacets, Cimiez et ses immeubles anciens. Accès repérés avant le devis, prix ferme.",
    intro: "On est des déménageurs niçois, pas une enseigne nationale qui sous-traite au plus offrant. On a grandi entre la Promenade et les collines, et on connaît Nice rue par rue : les ruelles piétonnes du Vieux-Nice où le camion ne rentre pas, les immeubles bourgeois du Carré d'Or, les résidences perchées de Cimiez et de Gairaut, les tours de l'Arénas et de la plaine du Var. Chaque secteur a ses contraintes d'accès, de stationnement et d'étage : on les anticipe dès le devis, pour qu'il n'y ait aucune mauvaise surprise le jour J.",
    /* ⚠️ LES SEPT PREMIERS ONT LEUR PROPRE PAGE et deviennent des liens, les autres
       restent du texte. Le nom doit être écrit EXACTEMENT comme dans QUARTIERS_PAGES en
       bas de ce fichier, sinon le lien ne se fait pas et rien ne le signale — Mont Boron
       manquait de cette liste et son lien n'aurait jamais été posé. */
    quartiers: ["Vieux-Nice", "Carré d'Or", "Cimiez", "Libération", "Le Port", "Riquier", "Mont Boron", "Nice Nord", "Fabron", "Magnan", "L'Ariane", "Gambetta", "Saint-Roch", "Gairaut", "Las Planas", "Saint-Isidore"],
    specifics: [
      { t: "Stationnement maîtrisé", d: "On dépose la demande d'autorisation auprès de la Ville de Nice et on connaît les créneaux des zones piétonnes du centre, pour réserver l'emplacement au plus près de votre porte." },
      { t: "Accès difficiles", d: "Étages sans ascenseur, ruelles étroites, cages d'escalier exiguës : on prévoit le monte-meuble et le bon véhicule dès le devis, jamais en supplément le jour même." },
      { t: "Local ou longue distance", d: "Un déménagement dans Nice, un Nice → Paris ou un Nice → Genève : même équipe niçoise, même soin, du premier carton au dernier meuble remonté." }
    ],
    deep: [
      { t: "Une ville à plusieurs vitesses", p: "Nice n'est pas une ville, c'est dix quartiers qui n'ont rien à voir. Le Vieux-Nice et ses ruelles inaccessibles au camion imposent portage et emplacement réservé au plus près. Le Carré d'Or et ses immeubles haussmanniens demandent souvent un monte-meuble par la façade. Cimiez, Gairaut et Fabron alignent villas et résidences en hauteur aux accès en lacets. On choisit le gabarit du camion et la taille de l'équipe adresse par adresse." },
      { t: "Le parc immobilier niçois, du studio au mas perché", p: "Studios meublés autour de la fac de Valrose et de Saint-Roch, deux-pièces de la Libération, appartements familiaux du Port et de Riquier, villas des collines, bureaux de l'Arénas et de l'Éco-Vallée : on déménage tous les types de logements niçois. Les immeubles anciens du centre sont rarement équipés de grands ascenseurs, on dimensionne donc le portage et le monte-meuble en conséquence, et on le chiffre noir sur blanc avant le jour J." },
      { t: "Quand déménager à Nice", p: "À Nice, le calendrier compte. Les fins de mois et les samedis partent vite, surtout entre juin et septembre quand les baux tournent et que la circulation du bord de mer se densifie. Pour un studio étudiant, la rentrée concentre la demande. On vous conseille de réserver deux à trois semaines à l'avance, davantage en haute saison, mais on sait aussi gérer les départs serrés quand un compromis se signe vite." },
      { t: "Stationnement et autorisations, on s'en charge", p: "Le vrai casse-tête niçois, c'est le stationnement. Zones piétonnes du Vieux-Nice, places rares du centre, voies à circulation réglementée : on dépose pour vous la demande d'occupation du domaine public auprès de la Ville de Nice et on réserve l'emplacement camion devant l'immeuble. Quand l'escalier ne passe pas, on installe un monte-meuble. Résultat : pas d'amende, pas d'heure perdue à tourner pour se garer." }
    ],
    faq: [
      { q: "Quel est le prix d'un déménagement à Nice ?",
        a: "Cela dépend d'abord de la formule. Pour un studio en local, comptez 640 à 850 € en Standard et 850 à 1 150 € en Premium. Pour un trois-pièces, 930 à 1 240 € en Standard et 1 240 à 1 860 € en Premium. Pour une maison, 1 930 à 2 750 € et 2 750 à 3 850 €. Ces montants supposent un accès neutre. Un troisième étage sans ascenseur dans le Vieux-Nice et un rez-de-chaussée à Fabron, à volume identique, n'ont pas le même prix — et c'est l'étage, pas le quartier, qui fait la différence." },
      { q: "Faut-il une autorisation pour garer le camion à Nice ?",
        a: "Oui, dès que vous occupez le domaine public, ce qui est le cas presque partout dans Nice. Trois régimes existent selon ce que vous occupez, avec des délais et des services différents : 5 jours ouvrés pour une place de stationnement, 7 pour une voie de circulation ou une zone piétonne. Nous nous en chargeons pour vous. La signalisation réglementaire, en revanche, n'est pas fournie par la Ville : elle se loue auprès d'un professionnel et se pose la veille." },
      { q: "Peut-on déménager dans le Vieux-Nice ?",
        a: "Oui, mais pas librement. Le quartier est en zone piétonne à accès contrôlé par bornes escamotables. Il faut l'autorisation, demandée sept jours ouvrés à l'avance, et il faut appeler le centre de sécurité le jour même pour faire abaisser la borne. Un camion qui se présente sans cette double démarche repart. C'est la première cause de journée perdue dans ce quartier." },
      { q: "Combien de temps dure un déménagement dans Nice ?",
        a: "Une demi-journée pour un studio ou un deux-pièces avec ascenseur. Une journée pleine pour un trois ou quatre-pièces. Une maison avec cave et garage peut demander deux jours. Ce qui allonge une journée à Nice, ce n'est jamais la distance : c'est l'escalier, le portage et le stationnement." },
      { q: "Quand faut-il s'y prendre pour réserver ?",
        a: "Deux à trois semaines en période normale, quatre à six pour une fin de mois entre juin et septembre. Les samedis de fin août sont les dates les plus demandées de l'année. L'autorisation de stationnement, elle, ne se demande qu'à cinq ou sept jours : c'est nous qui la déposons, une fois la date bloquée." },
      { q: "Où trouver des cartons à Nice ?",
        a: "Nous les vendons à prix coûtant et les livrons avant le déménagement, quelle que soit la formule. Seule la formule Luxe comprend l'emballage : nous faisons alors vos cartons à votre place. Les commerces de quartier en donnent souvent, mais attention : un carton de supermarché a déjà servi, il est rarement assez solide pour des livres ou de la vaisselle, et il cède au portage. C'est la fausse économie la plus courante." },
      { q: "Que faire des meubles dont on ne veut plus ?",
        a: "La Métropole Nice Côte d'Azur assure le ramassage des encombrants sur rendez-vous, et plusieurs déchetteries sont accessibles aux particuliers sur présentation d'un justificatif de domicile. Nous pouvons aussi vider le logement entièrement : c'est notre prestation de débarras, chiffrée à part et souvent combinée au déménagement le même jour." },
      { q: "Intervenez-vous en dehors de Nice ?",
        a: "Oui, sur toute la Côte d'Azur et dans toute la France. Notre corridor habituel va de Villeneuve-Loubet à Menton, en passant par Villefranche, Beaulieu, Saint-Jean-Cap-Ferrat, Èze, Cap-d'Ail, Beausoleil et Roquebrune. Les longues distances au départ de Nice représentent une grande partie de notre activité : Paris, Lyon, Marseille, Toulouse, Bordeaux." }
    ],
    nearby: ["saint-laurent-du-var", "cagnes-sur-mer", "villefranche-sur-mer", "beaulieu-sur-mer", "saint-jean-cap-ferrat"]
  },
  "cannes": {
    name: "Cannes", file: "Demenagement-Cannes", cp: "06400", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Cannes : de La Croisette au Suquet en passant par La Bocca. On déménage hors des pics du Festival, devis gratuit sous 24h.",
    intro: "À Cannes, on déménage aussi bien un studio à La Bocca qu'un appartement de standing sur La Croisette ou une villa à La Californie. La ville a une particularité que peu de déménageurs maîtrisent : son calendrier. Entre le Festival du film, le MIPIM, les régates et les samedis estivaux, certaines semaines paralysent le centre et le bord de mer. On planifie votre déménagement hors de ces pics, on réserve l'emplacement camion en amont et on coordonne avec les syndics des résidences, pour vous éviter les blocages et les amendes.",
    quartiers: ["La Croisette", "Le Suquet", "La Bocca", "Carnot", "Palm Beach", "La Californie", "Pointe Croisette", "Le Cannet-Rocheville", "Prado-République", "La Ferrage", "Petit Juas"],
    specifics: [
      { t: "Résidences de standing", d: "Protection intégrale du mobilier, coordination avec gardiens et syndics des immeubles de la Croisette, réservation des ascenseurs et protection des parties communes." },
      { t: "Hors saison maîtrisée", d: "On évite les semaines de Festival, de MIPIM et les samedis d'été : moins de circulation, pas d'amende, et un déménagement deux fois plus rapide." },
      { t: "Le Suquet piéton", d: "Portage et monte-meuble dans les ruelles en escaliers du vieux Cannes, inaccessibles au camion, avec stationnement réservé au plus près." }
    ],
    deep: [
      { t: "À Cannes, la date fait tout", p: "Aucune ville de la Côte ne dépend autant de son agenda. En mai, le Festival ferme la Croisette ; en mars, le MIPIM remplit les hôtels ; l'été, les samedis et les yachts saturent le front de mer. Déménager le mauvais jour, c'est perdre des heures coincé dans la circulation et risquer une amende de stationnement. On cale votre intervention sur les bons créneaux et on réserve l'emplacement camion en amont, pour que la journée se déroule sans accroc." },
      { t: "Du front de mer aux hauteurs", p: "Cannes s'étage de la mer à la colline. Appartements de prestige de la Croisette et de la Pointe, résidences familiales de La Bocca et de Prado-République, villas de La Californie sur les hauteurs : chaque adresse a son accès. On dimensionne le camion et l'équipe en conséquence, avec une protection renforcée pour le mobilier de valeur, fréquent dans les résidences cannoises de standing." },
      { t: "Le Suquet, un déménagement à la main", p: "Le vieux Cannes, c'est le Suquet : des ruelles en escaliers, en pente, où aucun camion ne s'aventure. Ici, le déménagement se fait en partie au portage, avec un véhicule relais plus maniable et un monte-meuble quand le mobilier ne passe pas par l'escalier. On connaît chaque montée, on stationne au plus près et on prévoit tout dès le devis, sans supplément de dernière minute." },
      { t: "Syndics, gardiens et résidences fermées", p: "Beaucoup d'immeubles cannois sont gérés par un syndic avec des règles strictes : créneaux de déménagement imposés, réservation d'ascenseur, protection obligatoire des parties communes, badges d'accès. On coordonne tout en amont avec les gardiens, on respecte les horaires et on protège les communs. Ça évite le déménagement refusé à l'entrée, un classique quand on n'a pas anticipé." }
    ],
    faq: [
      { q: "Peut-on déménager à Cannes pendant le Festival ?", a: "C'est possible mais déconseillé : circulation et stationnement saturés sur tout le centre. On préfère caler une date hors événement pour vous faire gagner des heures et éviter les amendes." },
      { q: "Gérez-vous les immeubles avec syndic sur la Croisette ?", a: "Oui, on coordonne en amont avec gardiens et syndics : réservation d'ascenseur, créneaux imposés, badges et protection des parties communes. Tout est calé avant le jour J." },
      { q: "Intervenez-vous dans le Suquet et ses ruelles ?", a: "Oui, avec portage, véhicule relais et monte-meuble adaptés aux ruelles en escaliers du vieux Cannes. C'est chiffré dès le devis." },
      { q: "Déménagez-vous les villas de La Californie, sur les hauteurs ?", a: "Oui. Accès en hauteur, jardins, mobilier de valeur : on adapte le camion, on protège tout et on propose une assurance renforcée en formule Luxe." },
      { q: "Un déménagement Cannes vers Nice ou Paris, vous le faites ?", a: "Bien sûr : local sur tout le bassin cannois, et longue distance vers Nice, Paris, Lyon ou l'international, avec une seule équipe du départ à l'arrivée." }
    ],
    nearby: ["le-cannet", "mandelieu", "antibes", "grasse"]
  },
  "antibes": {
    name: "Antibes", file: "Demenagement-Antibes", cp: "06600", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Antibes et Juan-les-Pins : du Vieil Antibes au Cap, de Port Vauban à la Fontonne. Devis gratuit sous 24h.",
    intro: "La commune, c'est trois villes en une : la vieille ville fortifiée aux ruelles piétonnes, le Cap et ses villas d'exception, et Juan-les-Pins, station balnéaire saturée l'été. On adapte le camion, le portage et le planning à chacun de ces mondes. On gère aussi les accès particuliers d'Antibes : les abords de Port Vauban, le plus grand port de plaisance d'Europe, les résidences fermées de la Fontonne et des Semboules, et le mobilier de valeur fréquent au Cap d'Antibes.",
    quartiers: ["Vieil Antibes", "Cap d'Antibes", "Juan-les-Pins", "La Fontonne", "Les Semboules", "La Salis", "Port Vauban", "Les Combes", "La Croix-Rouge", "Le Ponteil", "Les Trois Moulins"],
    specifics: [
      { t: "Vieille ville piétonne", d: "Portage optimisé et stationnement réservé dans les ruelles du Vieil Antibes et autour du marché Provençal, avec monte-meuble quand l'accès l'exige." },
      { t: "Villas du Cap", d: "Mobilier de valeur, œuvres d'art, grands volumes : protection spécifique sur mesure et assurance renforcée en formule Luxe." },
      { t: "Saison à Juan-les-Pins", d: "On évite les pics estivaux du front de mer et de la pinède pour un déménagement fluide, sans rester coincé dans la circulation balnéaire." }
    ],
    deep: [
      { t: "Une commune aux mille visages", p: "Entre les remparts du Vieil Antibes, les ruelles autour du marché Provençal, le bord de mer de la Salis et du Ponteil, les villas du Cap et l'animation estivale de Juan-les-Pins, la ville change de logique tous les kilomètres. Le déménageur qui ne connaît pas la commune se fait piéger par les accès. Nous, on sait quel secteur impose le portage, lequel demande un monte-meuble et lequel sature en été. On planifie en conséquence." },
      { t: "Le Cap, le standard du soin", p: "C'est l'un des secteurs résidentiels les plus prestigieux de la Côte. Villas d'exception, mobilier ancien, œuvres d'art, pianos, caves : nos clients y attendent un soin irréprochable. On déploie un emballage sur mesure, une protection renforcée et une assurance en valeur déclarée. Équipe expérimentée, pas d'intérimaire recruté la veille : sur ce type de bien, on ne laisse rien au hasard." },
      { t: "Plaisanciers, expats et résidences secondaires", p: "Beaucoup de nos clients antibois sont des plaisanciers de Port Vauban, des cadres internationaux ou des propriétaires de résidences secondaires. Ça implique des déménagements souvent partiels, des mises en garde-meuble saisonnières, des départs vers l'étranger et des coordinations à distance. On est rodés à ces scénarios : ouverture et fermeture de saison, stockage relais, déménagements internationaux organisés de bout en bout." },
      { t: "Juan-les-Pins et le piège de l'été", p: "Juan-les-Pins l'été, c'est la pinède, les festivals de jazz, les plages et une circulation qui se bloque. Déménager en plein mois d'août sur le front de mer, c'est s'exposer à des heures perdues. On privilégie les créneaux hors affluence, tôt le matin ou hors saison, et on réserve le stationnement à l'avance. Le déménagement va deux fois plus vite et personne ne s'énerve." }
    ],
    faq: [
      { q: "Déménagez-vous les villas du Cap ?", a: "Oui, avec un soin particulier pour le mobilier de valeur : protection sur mesure, emballage renforcé et assurance en valeur déclarée pour les œuvres d'art et les objets précieux." },
      { q: "Et la vieille ville, accessible au camion ?", a: "Rarement jusqu'à la porte. On stationne au plus près dans les ruelles, on gère le portage et on installe un monte-meuble quand l'escalier l'exige." },
      { q: "Intervenez-vous à Juan-les-Pins en été ?", a: "Oui, mais on privilégie les créneaux hors affluence pour éviter la circulation et le stationnement saturé du littoral. Le déménagement est plus rapide et plus serein." },
      { q: "Faites-vous les déménagements internationaux depuis Antibes ?", a: "Oui, fréquemment : vers l'Italie, la Suisse, l'Espagne et au-delà. Inventaire, logistique et formalités gérés de bout en bout." },
      { q: "Le devis est-il ferme à Antibes ?", a: "Oui, prix ferme. On chiffre selon le volume et les accès réels de votre adresse, sans supplément surprise le jour du déménagement." }
    ],
    nearby: ["villeneuve-loubet", "le-cannet", "cannes", "cagnes-sur-mer"]
  },
  "monaco": {
    name: "Monaco", file: "Demenagement-Monaco", cp: "98000", dept: "Principauté de Monaco", region: "cote",
    lede: "Déménagement à Monaco : Monte-Carlo, La Condamine, Fontvieille. Discrétion absolue, créneaux et ascenseurs gérés. Devis gratuit sous 24h.",
    intro: "Déménager à Monaco ne s'improvise pas. Circulation dense, immeubles de grande hauteur, ascenseurs et monte-charges à réserver, créneaux de livraison stricts imposés par les régies, stationnement minuté : c'est un déménagement qui se prépare comme un projet logistique. On coordonne en amont avec les syndics et les régies, on gère les autorisations de la Principauté, et on intervient avec discrétion, équipe réduite et expérimentée, pour le mobilier de prestige comme pour un studio d'employé frontalier.",
    quartiers: ["Monte-Carlo", "La Condamine", "Fontvieille", "Larvotto", "Jardin Exotique", "Les Moneghetti", "La Rousse", "Saint-Roman", "Les Spélugues"],
    specifics: [
      { t: "Immeubles de grande hauteur", d: "Réservation des ascenseurs et monte-charges en amont avec la régie de l'immeuble, respect des créneaux et des règles de copropriété monégasques." },
      { t: "Discrétion absolue", d: "Mobilier de prestige, biens de valeur, clientèle exigeante : soin renforcé, assurance en valeur déclarée et intervention confidentielle." },
      { t: "Accès réglementés", d: "Créneaux de livraison de la Principauté, autorisations de stationnement et coordination avec la sûreté publique gérés pour vous, sans accroc." }
    ],
    deep: [
      { t: "La logistique monégasque, un art", p: "À Monaco, rien n'est laissé au hasard et tout est minuté. Les régies imposent des créneaux de déménagement, les ascenseurs et monte-charges se réservent, le stationnement est strictement encadré sur un territoire minuscule et dense. On prépare l'intervention comme un projet : repérage des accès, demande d'autorisations, réservation des équipements, coordination avec la copropriété. Le jour J, tout se déroule à la minute près, sans improvisation." },
      { t: "Le standard du prestige", p: "Mobilier de grande valeur, œuvres d'art, cave à vin, coffre, pianos : la clientèle monégasque exige un soin irréprochable et une totale confidentialité. On intervient avec une équipe réduite et expérimentée, jamais d'intérimaire de dernière minute. Emballage sur mesure, protection renforcée, assurance en valeur déclarée convenue à l'avance : sur ce type de bien, le moindre détail compte et on l'assume." },
      { t: "Frontaliers, expatriés et grande hauteur", p: "Monaco, ce n'est pas que le prestige : c'est aussi des milliers d'actifs et de frontaliers qui s'y installent ou en partent. Studios et deux-pièces en tours de grande hauteur, déménagements liés à une prise de poste, départs vers la France voisine ou l'international : on gère tous les profils. La grande hauteur impose une rigueur particulière sur les ascenseurs et la sécurité, qu'on maîtrise." },
      { t: "Vers l'étranger, sans accroc", p: "Beaucoup de déménagements monégasques sont internationaux : vers l'Italie toute proche, la Suisse, ou plus loin en Europe. On organise le transport, l'inventaire valorisé et les formalités, et on coordonne avec votre calendrier et, si besoin, votre employeur. Une seule équipe du chargement à la livraison, pour ne jamais perdre le fil de vos affaires entre deux pays." }
    ],
    faq: [
      { q: "Faut-il une autorisation pour déménager à Monaco ?", a: "Souvent oui : créneaux d'immeuble imposés par la régie, réservation d'ascenseur ou de monte-charge, autorisations de stationnement. On s'en occupe en amont pour que tout soit prêt le jour J." },
      { q: "Êtes-vous discrets pour les biens de prestige ?", a: "Absolument : équipe réduite et expérimentée, confidentialité totale, et assurance renforcée pour le mobilier et les objets de valeur. C'est le standard que la clientèle monégasque attend." },
      { q: "Gérez-vous les immeubles de grande hauteur ?", a: "Oui. On réserve ascenseurs et monte-charges avec la régie, on respecte les règles de copropriété et les horaires, et on sécurise chaque manutention en hauteur." },
      { q: "Déménagez-vous de Monaco vers l'étranger ?", a: "Oui, fréquemment : vers l'Italie, la Suisse et au-delà. On organise le transport international, l'inventaire et les formalités de bout en bout." },
      { q: "Intervenez-vous pour les studios et petits volumes à Monaco ?", a: "Bien sûr. Frontaliers et actifs déménagent aussi des studios : on gère tous les volumes, avec la même rigueur sur les accès et les créneaux." },
      { q: "Le devis tient-il compte des contraintes monégasques ?", a: "Oui : créneaux, ascenseurs, distance de portage, stationnement. Tout est intégré au devis, qui est ferme et détaillé, sans supplément le jour du déménagement." }
    ],
    nearby: ["cap-d-ail", "beausoleil", "roquebrune-cap-martin", "menton", "eze"]
  },
  "menton": {
    name: "Menton", file: "Demenagement-Menton", cp: "06500", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Menton, la perle de la France : vieille ville en escaliers, villas de Garavan, frontière italienne. Devis gratuit sous 24h.",
    intro: "Menton est la ville la plus à l'est de la Côte d'Azur, à un jet de pierre de l'Italie, et elle grimpe. Sa vieille ville s'étage en escaliers jusqu'à la basilique, Garavan aligne ses villas en terrasses face à la frontière, et les quartiers du centre et du bord de mer concentrent immeubles et résidences. On connaît les contraintes de portage et de stationnement de chaque secteur, et on gère aussi les nombreux déménagements transfrontaliers vers Vintimille et la Riviera italienne.",
    quartiers: ["Vieille Ville", "Garavan", "Borrigo", "Careï", "Carnolès", "Les Sablettes", "Monti", "Le Centre", "Madone", "Val de Gorbio"],
    specifics: [
      { t: "Ruelles en escaliers", d: "Portage à dos et monte-meuble quand les rues en escaliers de la vieille ville ne laissent passer ni camion ni mobilier volumineux." },
      { t: "Proche frontière", d: "Déménagements transfrontaliers vers Vintimille, San Remo et l'Italie organisés de bout en bout, passage de frontière et logistique compris." },
      { t: "Villas de Garavan", d: "Jardins en terrasses, accès en hauteur et chemins étroits anticipés dès le devis, avec le bon véhicule et un transbordement si nécessaire." }
    ],
    deep: [
      { t: "Une ville en pente, un déménagement millimétré", p: "Menton ne se déménage pas comme une ville de plaine : elle grimpe partout. Escaliers de la vieille ville jusqu'à la basilique Saint-Michel, terrasses de Garavan, virages de Monti et du Val de Gorbio. Le camion ne passe pas partout, alors on prévoit le portage, une navette en petit véhicule ou un monte-meuble selon l'adresse. Tout est repéré et chiffré à l'avance, pour qu'aucune montée d'escalier ne devienne une mauvaise surprise." },
      { t: "À cheval sur deux pays", p: "Frontalière, Menton génère énormément de déménagements vers l'Italie voisine : Vintimille, Bordighera, San Remo ne sont qu'à quelques minutes. On gère le passage de frontière, la logistique transfrontalière et l'inventaire sans surcoût caché. Dans l'autre sens, on accueille aussi les Italiens qui s'installent côté français. C'est un savoir-faire local que peu de déménageurs maîtrisent vraiment." },
      { t: "Garavan, le quartier des villas en terrasses", p: "Garavan, c'est le visage chic de Menton : villas Belle Époque, jardins exotiques, terrasses étagées face à la mer et à la frontière. Les accès y sont en hauteur, souvent en lacets, parfois au bout d'un chemin étroit. On adapte le gabarit du camion, on transborde avec un véhicule plus maniable quand il le faut, et on protège un mobilier souvent ancien et de valeur." },
      { t: "Climat doux, retraités et résidences", p: "Réputée pour son microclimat, Menton attire beaucoup de retraités et de résidences secondaires. Ça se traduit par des déménagements souvent soignés, parfois partiels, avec du mobilier ancien à manipuler avec précaution et des mises en garde-meuble entre deux logements. On prend le temps qu'il faut, on emballe avec soin et on coordonne à distance quand la famille n'est pas sur place." }
    ],
    faq: [
      { q: "Déménagez-vous vers l'Italie depuis Menton ?", a: "Oui, c'est fréquent : vers Vintimille, Bordighera, San Remo et au-delà. On organise le passage de frontière et toute la logistique transfrontalière de bout en bout." },
      { q: "Comment gérez-vous la vieille ville en escaliers ?", a: "Portage à dos pour les volumes raisonnables, monte-meuble pour le reste, et stationnement réservé au plus près. On repère l'accès avant et on chiffre tout au devis." },
      { q: "Intervenez-vous à Garavan et ses villas en terrasses ?", a: "Oui, on connaît les accès en hauteur et les chemins étroits du quartier. On adapte le véhicule, on transborde si besoin et on protège le mobilier ancien." },
      { q: "Faites-vous les petits déménagements et les retraités ?", a: "Bien sûr. Beaucoup de nos clients mentonnais déménagent un appartement ou une partie de leur mobilier : on prend le temps, on emballe avec soin et on coordonne avec la famille à distance si besoin." },
      { q: "Le prix est-il ferme malgré les accès difficiles ?", a: "Oui. Les escaliers, le portage, le monte-meuble éventuel et la frontière sont intégrés au devis. Le prix annoncé est le prix payé." }
    ],
    nearby: ["roquebrune-cap-martin", "monaco", "beausoleil", "nice"]
  },
  "grasse": {
    name: "Grasse", file: "Demenagement-Grasse", cp: "06130", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Grasse, capitale du parfum : vieille ville médiévale perchée, hameaux de l'arrière-pays. Devis gratuit sous 24h.",
    intro: "La vieille ville de Grasse, perchée et truffée de ruelles médiévales en forte pente, est un vrai défi pour tout déménageur qui ne la connaît pas. Mais Grasse, c'est aussi les quartiers résidentiels de Saint-Jacques et du Plan, et un arrière-pays de mas, de bastides et de hameaux dispersés (Magagnosc, Plascassier, Saint-Antoine). On intervient sur l'ensemble du territoire grassois avec le matériel adapté et une bonne dose d'expérience locale du dénivelé et des accès en lacets.",
    quartiers: ["Vieille Ville", "Saint-Jacques", "Le Plan", "Magagnosc", "Plascassier", "Saint-Antoine", "Les Aspres", "Le Petit Paris", "Saint-Claude", "La Paoute"],
    specifics: [
      { t: "Centre médiéval perché", d: "Stationnement au plus près et portage maîtrisé dans les ruelles en forte pente du vieux Grasse, avec monte-meuble quand l'escalier ne passe pas." },
      { t: "Arrière-pays grassois", d: "Hameaux, mas et bastides isolés desservis sans supplément surprise : accès en lacets, portails et chemins étroits anticipés dès le devis." },
      { t: "Villas et terrains en restanques", d: "Maisons individuelles avec jardins, terrains étagés et accès en pente pris en compte, avec transbordement par petit véhicule si nécessaire." }
    ],
    deep: [
      { t: "Le défi du vieux Grasse", p: "Le centre historique est un labyrinthe médiéval en forte pente où le camion ne s'aventure tout simplement pas. Ici, le déménagement se gagne à l'organisation : on stationne au plus près, on porte sur des distances parfois longues, et on déploie un monte-meuble dès que la configuration l'exige. Tout est repéré et anticipé en amont, parce qu'à Grasse, le mauvais réflexe c'est de découvrir l'accès le jour J." },
      { t: "Entre ville et campagne", p: "Au-delà du centre, c'est l'une des communes les plus étendues du département. Magagnosc, Plascassier, Saint-Antoine, les Aspres : un arrière-pays de mas, de bastides et de villas perdues au bout de chemins étroits, derrière des portails, sur des terrains en restanques. Nos chauffeurs connaissent ces accès en lacets et adaptent le véhicule, quitte à transborder avec un utilitaire plus petit pour atteindre la porte." },
      { t: "Une ville de mutations professionnelles", p: "Capitale mondiale du parfum, Grasse vit au rythme de son industrie : parfumeurs, laboratoires, saisonniers de la fleur. On y croise régulièrement des déménagements liés à une mutation ou à une prise de poste, avec devis conforme à transmettre à un employeur. On gère ces dossiers proprement, facture en règle comprise, en plus des déménagements de particuliers classiques." },
      { t: "Déménagements partiels", p: "Entre une vente en cours, un logement de l'arrière-pays pas encore prêt ou une résidence secondaire, beaucoup de déménagements grassois passent par une phase de stockage. On propose un garde-meuble en box sécurisé et on gère les déménagements partiels, en plusieurs temps si nécessaire, sans vous faire payer deux fois le déplacement." }
    ],
    faq: [
      { q: "Le camion accède-t-il au centre historique de Grasse ?", a: "Rarement jusqu'à la porte : les ruelles médiévales sont en forte pente et étroites. On stationne au plus près, on gère le portage et on installe un monte-meuble si besoin." },
      { q: "Desservez-vous les hameaux de l'arrière-pays grassois ?", a: "Oui : Magagnosc, Plascassier, Saint-Antoine, les mas et bastides isolés. Les accès en lacets et les chemins étroits sont anticipés, sans supplément caché." },
      { q: "Gérez-vous les déménagements liés à une mutation professionnelle ?", a: "Oui, fréquent à Grasse vu son industrie du parfum : devis conforme pour votre employeur, facture en règle pour le remboursement, coordination avec votre prise de poste." },
      { q: "Déménagez-vous les villas avec terrain en pente ?", a: "Oui. Jardins, restanques, accès en lacets et portails sont pris en compte dès le devis, avec transbordement par petit véhicule quand c'est nécessaire." },
      { q: "Un déménagement Grasse vers la côte ou plus loin, c'est possible ?", a: "Bien sûr : local vers Cannes, Nice et tout le bassin, ou longue distance partout en France et à l'international, avec la même équipe du départ à l'arrivée." }
    ],
    nearby: ["le-cannet", "cannes", "mandelieu", "antibes"]
  },
  "cagnes-sur-mer": {
    name: "Cagnes-sur-Mer", file: "Demenagement-Cagnes-sur-Mer", cp: "06800", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Cagnes-sur-Mer : du village perché du Haut-de-Cagnes au front de mer du Cros. À deux pas de notre base niçoise. Devis sous 24h.",
    intro: "Cagnes-sur-Mer condense toute la Côte d'Azur sur une seule commune : un village médiéval perché (le Haut-de-Cagnes) aux ruelles pavées, un front de mer animé (le Cros-de-Cagnes) avec ses pêcheurs et ses restaurants, l'hippodrome, et des quartiers résidentiels modernes comme le Béal et les Vespins. On bascule du portage minutieux dans le vieux village au déménagement express en bord de mer selon l'adresse. Et comme on est basés juste à côté, à Nice, on intervient vite, à toute heure et pour tous les volumes.",
    quartiers: ["Haut-de-Cagnes", "Cros-de-Cagnes", "Le Béal", "Les Vespins", "Val Fleuri", "Les Bréguières", "Cagnes Centre", "Hippodrome", "Les Colettes", "Le Logis"],
    specifics: [
      { t: "Village perché", d: "Accès étroits et rues pavées du Haut-de-Cagnes anticipés dès le devis : portage, véhicule relais et monte-meuble prévus pour les ruelles médiévales." },
      { t: "Front de mer", d: "Stationnement et créneaux gérés sur le bord de mer animé du Cros-de-Cagnes, où la place est rare en saison." },
      { t: "À dix minutes de Nice", d: "Intervention rapide depuis notre base niçoise, idéale pour les petits volumes et les déménagements locaux bouclés en une demi-journée." }
    ],
    deep: [
      { t: "Du médiéval au balnéaire", p: "Peu de communes offrent autant de visages que Cagnes. Le Haut-de-Cagnes, village d'artistes perché aux ruelles pavées et pentues, impose un déménagement à la main, en partie au portage, avec un véhicule relais. Le Cros-de-Cagnes, c'est le bord de mer, ses immeubles et son stationnement saturé l'été. Le Béal et les Vespins, ce sont des résidences modernes plus simples d'accès. On adapte la méthode quartier par quartier." },
      { t: "La commune idéale pour un déménagement local", p: "Voisine immédiate de Nice et de Saint-Laurent-du-Var, Cagnes est parfaite pour un déménagement courte distance : on est sur place en quelques minutes depuis notre base. Studio étudiant, appartement familial ou villa, petit volume ou gros chargement, on intervient vite et souvent dans la journée. La proximité, c'est aussi un coût de déplacement réduit, qu'on répercute sur un devis honnête." },
      { t: "Le Haut-de-Cagnes, un déménagement d'orfèvre", p: "Le vieux village est classé, ses ruelles sont pavées, étroites et en pente, et le Château Grimaldi domine le tout. Aucun camion n'y monte facilement. On stationne au plus près, on porte avec précaution sur les pavés, et on transborde avec un utilitaire maniable pour les derniers mètres. Le mobilier des maisons d'artistes y est souvent ancien : on l'emballe et le protège avec le soin qu'il mérite." },
      { t: "Bord de mer et copropriétés", p: "Le long du Cros et dans les résidences récentes, on déménage beaucoup d'appartements en copropriété. Ça implique de réserver l'ascenseur, de protéger les parties communes, de respecter d'éventuels créneaux et de gérer un stationnement tendu en saison. On coordonne tout en amont avec le syndic ou le gardien, pour ne pas se faire refouler à l'entrée le jour J." }
    ],
    faq: [
      { q: "Comment accéder au Haut-de-Cagnes en déménagement ?", a: "Les rues pavées y sont étroites et en pente : on stationne au plus près, on porte, on transborde avec un petit véhicule et on installe un monte-meuble si l'escalier ne passe pas." },
      { q: "Un déménagement Cagnes-Nice, c'est rapide ?", a: "Très : on est basés juste à côté. Pour un petit volume, c'est souvent bouclé en une demi-journée, à un coût de déplacement réduit." },
      { q: "Gérez-vous le bord de mer du Cros-de-Cagnes ?", a: "Oui. On réserve le stationnement et on gère les créneaux malgré l'animation et la place rare du front de mer, surtout en saison." },
      { q: "Déménagez-vous les copropriétés du Béal et des Vespins ?", a: "Oui, on coordonne avec le syndic ou le gardien : réservation d'ascenseur, protection des parties communes et créneaux éventuels." },
      { q: "Faites-vous les petits volumes et les studios ?", a: "Bien sûr. La proximité de notre base rend même les petites surfaces rapides et économiques à déménager." },
      { q: "Proposez-vous un garde-meuble près de Cagnes ?", a: "Nous ne gérons pas de garde-meuble en propre. On vous aide à trouver un box adapté près de chez vous, et on se charge du transport dans les deux sens, à l'aller comme au retour." }
    ],
    nearby: ["saint-laurent-du-var", "villeneuve-loubet", "nice", "antibes"]
  },
  "le-cannet": {
    avecPrep: "au Cannet", name: "Le Cannet", file: "Demenagement-Le-Cannet", cp: "06110", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement au Cannet : Rocheville, vieux village cher à Bonnard, hauteurs de Cannes. Rues en pente maîtrisées, devis gratuit sous 24h.",
    intro: "La ville domine Cannes depuis ses collines. La ville mêle trois ambiances : le vieux village pittoresque et perché, cher au peintre Bonnard, le quartier vivant et commerçant de Rocheville, et des résidences modernes étagées à flanc de colline. Sa particularité de déménagement, ce sont ses rues en pente et ses virages serrés, qui imposent souvent un camion bien dimensionné ou un transbordement. On connaît ces hauteurs cannettanes et on adapte le matériel à chaque accès.",
    quartiers: ["Rocheville", "Le Vieux Cannet", "Les Tourrades", "La Croix des Gardes", "L'Aubarède", "Le Cannet Centre", "Garibondy", "Cheval Blanc", "Les Mûriers"],
    specifics: [
      { t: "Hauteurs et pentes", d: "Camions adaptés aux rues en pente et aux virages serrés des collines cannettanes, avec transbordement par véhicule maniable si l'accès se resserre." },
      { t: "Proximité Cannes", d: "Déménagements Le Cannet → Cannes réglés en une demi-journée : les deux villes se touchent, le coût de déplacement reste réduit." },
      { t: "Vieux village", d: "Portage et stationnement maîtrisés dans les ruelles pittoresques du vieux village, où le camion ne passe pas toujours." }
    ],
    deep: [
      { t: "Une ville en balcon sur Cannes", p: "C'est Cannes vue d'en haut. Ses quartiers s'étagent à flanc de colline, entre rues pentues, virages serrés et résidences perchées. Le bon réflexe, c'est de choisir le gabarit de camion adapté et, quand l'accès se resserre vraiment, de faire la navette avec un véhicule plus maniable jusqu'à la porte. On repère l'adresse en amont pour ne pas se retrouver bloqué dans une montée trop étroite le jour du déménagement." },
      { t: "Le vieux village de Bonnard", p: "Le Cannet historique a séduit Pierre Bonnard, qui y a peint la lumière pendant des années. Ses ruelles pittoresques, en pente et étroites, ne se déménagent pas au camion : portage, véhicule relais et stationnement réservé au plus près. Le mobilier des vieilles maisons y est parfois ancien et délicat, on l'emballe et le protège avec attention. Un déménagement de patience et de méthode, pas de force brute." },
      { t: "Rocheville, le cœur qui bat", p: "Rocheville en est le quartier vivant : commerces, marché, vie de quartier, immeubles résidentiels. C'est là qu'on déménage le plus de familles et de retraités, souvent en copropriété. On coordonne avec les syndics, on réserve l'ascenseur, on protège les parties communes et on gère le stationnement sur des rues parfois passantes. Du déménagement urbain classique, qu'on connaît par cœur." },
      { t: "Vers Cannes, le déménagement de proximité", p: "La plupart des déménagements d'ici restent locaux, vers Cannes ou les communes voisines, à quelques minutes seulement. Résultat : des interventions rapides, souvent bouclées dans la demi-journée, et un coût de déplacement contenu. Pour un studio comme pour une villa, la proximité joue en votre faveur, et on la répercute sur un devis honnête, sans gonfler le kilométrage." }
    ],
    faq: [
      { q: "Les rues en pente posent-elles problème ?", a: "Non, nos chauffeurs y sont habitués. On adapte le gabarit du camion et, si l'accès se resserre, on transborde avec un véhicule plus petit jusqu'à la porte." },
      { q: "Un Cannet–Cannes, ça prend combien de temps ?", a: "Souvent une demi-journée pour un volume courant : les deux villes se touchent, le déplacement est minime." },
      { q: "Intervenez-vous dans le vieux village du Cannet ?", a: "Oui, avec portage, véhicule relais et stationnement réservé au plus près, puisque le camion ne passe pas dans les ruelles pittoresques." },
      { q: "Déménagez-vous les copropriétés de Rocheville ?", a: "Oui : réservation d'ascenseur, protection des parties communes, coordination avec le syndic et gestion du stationnement sur les rues passantes." },
      { q: "Faites-vous les petits volumes au Cannet ?", a: "Bien sûr. La proximité de Cannes et de Nice rend les petites surfaces rapides et économiques à déménager." },
      { q: "Le devis est-il ferme malgré les pentes et les accès ?", a: "Oui. Le gabarit du camion, le transbordement éventuel et le portage sont intégrés au devis. Le prix annoncé est le prix payé." }
    ],
    nearby: ["cannes", "mandelieu", "grasse", "antibes"]
  },
  "saint-laurent-du-var": {
    name: "Saint-Laurent-du-Var", file: "Demenagement-Saint-Laurent-du-Var", cp: "06700", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Saint-Laurent-du-Var : bord du Var, Cap 3000, port et bord de mer. À deux pas de notre base niçoise. Devis sous 24h.",
    intro: "Coincée entre Nice, Cagnes et l'aéroport, à l'embouchure du Var, Saint-Laurent-du-Var est un carrefour résidentiel et commercial qu'on connaît parfaitement : c'est quasiment notre arrière-cour. Du centre-ville aux quartiers pavillonnaires des Pugets, des résidences du bord de mer aux commerces de la zone Cap 3000 et du port, on intervient très vite et pour tous les profils, particuliers comme professionnels. La proximité de notre base niçoise rend les déménagements laurentins rapides et économiques.",
    quartiers: ["Centre-ville", "Les Pugets", "Tzanteleïna", "Bord de mer", "Le Point du Jour", "Les Vespins", "La Gare", "Montaleigne", "Les Iscles", "Le Plan"],
    specifics: [
      { t: "À dix minutes de Nice", d: "Intervention rapide depuis notre base : idéale pour les petits volumes et les déménagements express bouclés dans la demi-journée." },
      { t: "Commerces et bureaux", d: "Déménagements de locaux et de bureaux de la zone Cap 3000 et du port gérés en horaires décalés, pour ne pas perturber l'activité." },
      { t: "Bord de mer et résidences", d: "Stationnement et accès des résidences du littoral coordonnés en amont, avec réservation d'ascenseur et protection des parties communes." }
    ],
    deep: [
      { t: "Le carrefour de la métropole", p: "Saint-Laurent-du-Var occupe une position stratégique : à la frontière de Nice, à côté de l'aéroport, au débouché de l'autoroute. C'est un nœud résidentiel et commercial dense, où l'on intervient très vite parce qu'on est basés juste de l'autre côté du Var. Particuliers du centre, familles des Pugets, commerces de Cap 3000 : on connaît les accès, la circulation et les créneaux à éviter aux heures de pointe." },
      { t: "Du Var au front de mer", p: "La commune va de l'embouchure du Var au bord de mer en passant par des collines pavillonnaires. Quartiers de maisons individuelles aux Pugets, immeubles du centre et de la gare, résidences face à la mer : chaque secteur a sa logique. Le bord de mer et le port concentrent les copropriétés, avec ascenseurs à réserver et stationnement tendu en saison, qu'on coordonne en amont avec les syndics." },
      { t: "Une commune commerçante", p: "Avec Cap 3000, l'un des plus grands centres commerciaux de la région, et la zone du port, Saint-Laurent est une ville d'activité. On y déménage régulièrement des bureaux, des locaux et des commerces. Pour ces interventions, on travaille en horaires décalés, le soir ou tôt le matin, on coordonne avec un interlocuteur unique et on minimise l'interruption d'activité. Devis pro, facture en règle, planning serré tenu." },
      { t: "Le déménagement express, c'est ici", p: "Parce qu'on est à dix minutes, Saint-Laurent est la commune où nos déménagements sont les plus rapides. Un studio peut être bouclé en quelques heures, un appartement dans la journée. Le faible coût de déplacement rend même les petits volumes intéressants, ce que les grosses enseignes nationales ne savent pas faire à un prix correct. On répercute cette proximité sur un devis honnête." }
    ],
    faq: [
      { q: "Êtes-vous rapides à Saint-Laurent-du-Var ?", a: "Très : on est basés juste à côté, à Nice. Idéal pour un déménagement local bouclé en quelques heures et à un coût de déplacement réduit." },
      { q: "Déménagez-vous les commerces et bureaux de Cap 3000 ?", a: "Oui, en horaires décalés pour ne pas perturber l'activité, avec un interlocuteur unique, un devis pro et une facture en règle." },
      { q: "Gérez-vous le stationnement et les résidences du bord de mer ?", a: "Oui : réservation d'emplacement, coordination avec les copropriétés, réservation d'ascenseur et protection des parties communes, même en saison." },
      { q: "Faites-vous les petits volumes et les studios ?", a: "Bien sûr. La proximité de notre base rend les petites surfaces particulièrement rapides et économiques à déménager." },
      { q: "Un déménagement Saint-Laurent vers une autre ville, possible ?", a: "Oui : local sur toute la métropole, et longue distance partout en France ou à l'international, avec la même équipe du départ à l'arrivée." },
      { q: "Le devis est-il ferme ?", a: "Oui, prix ferme. On chiffre selon le volume et les accès réels, sans supplément surprise le jour du déménagement." }
    ],
    nearby: ["cagnes-sur-mer", "nice", "villeneuve-loubet", "antibes"]
  },
  "mandelieu": {
    name: "Mandelieu-la-Napoule", file: "Demenagement-Mandelieu", cp: "06210", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Mandelieu-la-Napoule : marinas de La Napoule, golfs, hauteurs du Capitou. Résidences principales et secondaires. Devis sous 24h.",
    intro: "Mandelieu-la-Napoule se vit entre l'eau et les collines. D'un côté, le port de plaisance, le château de La Napoule, les marinas et les résidences du bord de Siagne ; de l'autre, les golfs, le massif de l'Estérel et les maisons perchées du Capitou aux accès en lacets. C'est aussi la capitale locale de la résidence secondaire, ce qui implique beaucoup de déménagements saisonniers, partiels ou coordonnés à distance. On déménage particuliers et résidents à l'année comme propriétaires de passage, toute l'année.",
    quartiers: ["La Napoule", "Capitou", "Cottage", "Les Termes", "Minelle", "Le Centre", "La Siagne", "Les Marines", "Cannes-Marina", "L'Estérel"],
    specifics: [
      { t: "Ports et marinas", d: "Accès aux quais et aux résidences portuaires (Les Marines, Cannes-Marina) organisés en amont avec gardiens et créneaux dédiés." },
      { t: "Résidences secondaires", d: "Mises en garde-meuble, ouvertures et fermetures de saison et déménagements partiels gérés sans accroc, même à distance." },
      { t: "Hauteurs du Capitou", d: "Maisons en colline, accès en lacets et terrains en pente anticipés dès le devis, avec transbordement par petit véhicule si nécessaire." }
    ],
    deep: [
      { t: "Mer, golf et collines", p: "Mandelieu, c'est trois décors en une commune : les marinas de La Napoule au ras de l'eau, les villas du bord de Siagne et des golfs, et les maisons perchées du Capitou, accrochées aux contreforts de l'Estérel. Chaque accès est différent, des quais plats aux chemins de colline en lacets. On dimensionne le camion à l'adresse et on transborde avec un utilitaire plus maniable quand la route se rétrécit dans les hauteurs." },
      { t: "La capitale de la résidence secondaire", p: "Beaucoup de biens mandolociens sont des résidences secondaires, occupées une partie de l'année seulement. Ça crée des besoins spécifiques : ouvertures et fermetures de saison, mises en garde-meuble entre deux périodes, déménagements partiels, coordination avec un propriétaire qui n'est pas sur place. On est rodés à ces scénarios et on gère le tout à distance quand il le faut, photos et points réguliers à l'appui." },
      { t: "Les marinas, un accès à part", p: "Les Marines de La Napoule et Cannes-Marina sont des résidences portuaires aux règles particulières : accès aux quais réglementé, gardiens, créneaux, badges, stationnement contraint au bord de l'eau. On coordonne tout en amont pour que le camion et l'équipe accèdent au plus près, sans perdre de temps à l'entrée. Le mobilier d'appartements en marina est souvent haut de gamme, on le protège en conséquence." },
      { t: "Un cadre prisé, un déménagement soigné", p: "Entre golfs, plage du Rivage et massif de l'Estérel, Mandelieu attire une clientèle qui tient à son cadre et à ses biens. Mobilier de qualité, parfois volumineux, terrains paysagers, villas avec étages : on déploie protection complète, démontage et remontage soignés et, sur demande, la formule clé en main où vous ne touchez à rien. Devis ferme, assurance incluse, zéro improvisation." }
    ],
    faq: [
      { q: "Déménagez-vous les résidences des marinas de Mandelieu ?", a: "Oui : on coordonne accès aux quais, gardiens, badges et créneaux des résidences portuaires en amont, pour accéder au plus près sans perdre de temps." },
      { q: "Gérez-vous les résidences secondaires ?", a: "C'est une spécialité locale : ouvertures et fermetures de saison, garde-meuble, déménagements partiels, le tout coordonné à distance si vous n'êtes pas sur place." },
      { q: "Et les maisons du Capitou en hauteur ?", a: "Les accès en lacets et les terrains en pente sont anticipés dès le devis. On adapte le véhicule et on transborde avec un petit utilitaire si la route se rétrécit." },
      { q: "Faites-vous les déménagements longue distance depuis Mandelieu ?", a: "Oui : vers Paris, Lyon, toute la France et l'international, avec une seule équipe du chargement à la livraison." },
      { q: "Le prix est-il ferme malgré les accès variés ?", a: "Oui. Quais, lacets, transbordement éventuel et étages sont intégrés au devis, qui est détaillé et définitif." }
    ],
    nearby: ["cannes", "le-cannet", "grasse", "antibes"]
  },
  /* ── LE CORRIDOR EST, AJOUTÉ LE 24 AOÛT 2026 ──────────────────────────────────────
     Les pages de commune couvraient Grasse, Mandelieu et Le Cannet : l'ouest, où LBC ne
     travaille pas et où Prestazur et Maxdem sont installés depuis des années. Le corridor
     réellement travaillé — Villefranche, Beaulieu, Saint-Jean, Èze, Cap-d'Ail,
     Roquebrune, Villeneuve-Loubet — n'avait aucune page. Ce sont les communes où l'argent
     est, où la concurrence est quasi nulle, et où les chantiers se font déjà.
     Chaque page dit une contrainte d'accès DIFFÉRENTE, parce que c'est vrai et parce que
     sept pages qui se ressemblent se font traiter en contenu dupliqué. */
  "beausoleil": {
    name: "Beausoleil", file: "Demenagement-Beausoleil", cp: "06240", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Beausoleil : rues en escalier, immeubles hauts, frontière monégasque. Portage et stationnement gérés. Devis ferme sous 24 h.",
    intro: "Beausoleil est la commune la plus verticale du département. Elle monte derrière Monaco sur une pente si forte que plusieurs de ses rues sont des escaliers, et que la ville a installé des ascenseurs publics pour relier les niveaux. Le bâti est dense, haut, souvent construit dans les années vingt, avec des cages d'escalier étroites et des ascenseurs minuscules quand il y en a. C'est un déménagement de verticalité pure : ici, ce ne sont ni la distance ni le volume qui font le prix, c'est le nombre de mètres à gravir entre le camion et la porte.",
    quartiers: ["Le Centre", "Moneghetti", "Le Tenao", "La Riviera", "Les Jardins", "Le Bas Moulins", "Saint-Antoine", "L'Escalier de l'Impératrice", "Le Boulevard de la République"],
    specifics: [
      { t: "Rues en escalier", d: "Plusieurs voies ne sont accessibles qu'à pied : portage depuis le point de stationnement le plus proche, mesuré en nombre de marches avant le devis." },
      { t: "Immeubles hauts, ascenseurs étroits", d: "Bâti des années vingt : cages d'escalier resserrées et ascenseurs de faible capacité. Démontage systématique des meubles larges, monte-meuble quand la façade le permet." },
      { t: "Frontière monégasque", d: "Beaucoup de trajets se font vers Monaco, à deux pas : autorisation de circulation et créneau horaire obtenus par nos soins." }
    ],
    deep: [
      { t: "Une ville qui se monte à pied", p: "Beausoleil est bâtie sur une pente qui dépasse par endroits vingt pour cent, et plusieurs de ses rues sont littéralement des escaliers, à commencer par l'escalier de l'Impératrice. Un camion ne s'en approche pas. La méthode consiste à trouver le point de stationnement le plus haut accessible, puis à porter — et ce portage se compte en marches, pas en mètres. On monte le mesurer avant de chiffrer, parce qu'une centaine de marches de plus, c'est une demi-journée d'écart." },
      { t: "Les ascenseurs publics, un atout méconnu", p: "La ville a installé des ascenseurs publics pour relier ses niveaux, et ils changent parfois complètement l'organisation d'un déménagement : au lieu de porter par un escalier de cinquante marches, on fait transiter les cartons par l'ascenseur et on gagne des heures. Encore faut-il connaître leurs emplacements, leurs dimensions et leurs horaires. C'est le genre de détail qui ne s'invente pas depuis un bureau." },
      { t: "Le bâti des années vingt", p: "Beausoleil s'est construite avec Monaco, dans les années vingt, et son bâti en garde les proportions : immeubles hauts, cages d'escalier étroites, ascenseurs ajoutés après coup et donc minuscules. Un canapé trois places ou une armoire deux portes n'y entrent pas montés. On démonte, on protège, on remonte — et quand la façade est dégagée, le monte-meuble règle la question en deux heures au lieu de six." },
      { t: "Beausoleil et Monaco, deux pas et deux réglementations", p: "La frontière passe au bas de la commune, et une grande partie des déménagements bellisoleillois se fait vers la Principauté ou depuis elle. Deux cents mètres de trajet, mais une autorisation de circulation, un créneau horaire imposé et parfois une escorte dans les rues étroites. On s'occupe du dossier monégasque : il demande une dizaine de jours, et son absence annule purement et simplement la journée." }
    ],
    faq: [
      { q: "Ma rue est un escalier, pouvez-vous déménager ?", a: "Oui. On se gare au point accessible le plus proche et on porte. Le nombre de marches est compté avant le devis, et il y figure." },
      { q: "Utilisez-vous les ascenseurs publics de la ville ?", a: "Quand ils desservent le bon niveau et acceptent le volume, oui : ils font gagner des heures par rapport à un portage d'escalier." },
      { q: "Mon ascenseur est très petit, comment faites-vous ?", a: "On le mesure avant. Les meubles qui n'y entrent pas passent par la cage d'escalier après démontage, ou par la façade au monte-meuble." },
      { q: "Un Beausoleil–Monaco est-il compliqué ?", a: "Deux cents mètres, mais une autorisation de circulation et un créneau imposé côté monégasque. On les obtient, comptez une dizaine de jours." },
      { q: "Le monte-meuble est-il souvent nécessaire ?", a: "Sur les immeubles hauts avec cage étroite, c'est souvent la solution la plus rapide et la plus sûre. Il est alors chiffré dès le devis initial." },
      { q: "Le prix change-t-il si le portage s'avère plus long ?", a: "Non. Les marches sont comptées et la hauteur relevée avant le chiffrage. Le prix annoncé est le prix payé." }
    ],
    nearby: ["monaco", "cap-d-ail", "roquebrune-cap-martin", "eze", "menton"]
  },
  "villefranche-sur-mer": {
    name: "Villefranche-sur-Mer", file: "Demenagement-Villefranche-sur-Mer", cp: "06230", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Villefranche-sur-Mer : vieille ville en escaliers, rue Obscure, Darse. Portage maîtrisé, devis ferme sous 24h.",
    intro: "Villefranche-sur-Mer tient dans un amphithéâtre de maisons ocre qui plongent vers l'une des rades les plus profondes de Méditerranée. Sa vieille ville médiévale ne se déménage pas comme le reste de la Côte : des ruelles larges d'un mètre cinquante, des volées d'escaliers à chaque angle, et la rue Obscure, entièrement couverte depuis le XIIIe siècle. Le camion s'arrête sur le quai, et le reste se fait à la main. On travaille cette commune régulièrement et on chiffre le portage à l'avance, au mètre près, plutôt que de le découvrir le jour J.",
    quartiers: ["La Vieille Ville", "La Darse", "Le Port de la Santé", "Basse Corniche", "L'Octroi", "Saint-Michel", "La Citadelle", "Pont Saint-Jean", "Les Moulins"],
    specifics: [
      { t: "Ruelles et escaliers", d: "Vieille ville inaccessible au camion : portage à la main depuis le quai, monte-meuble quand la façade le permet, et repérage de l'accès avant le devis." },
      { t: "Stationnement sur le port", d: "Réservation d'emplacement auprès de la mairie sur la Darse et le quai Courbet, où se garer relève autrement de la chance." },
      { t: "Immeubles anciens sans ascenseur", d: "Escaliers étroits à vis dans le bâti du vieux village : démontage systématique des meubles larges, sanglage et descente à deux." }
    ],
    deep: [
      { t: "La vieille ville, un déménagement à pied", p: "Entre la place du Conseil et la rue du Poilu, aucune adresse n'est accessible en camion. Les ruelles font parfois un mètre cinquante de large et s'interrompent par des marches. Concrètement, le camion se gare au plus près sur le quai et l'équipe fait la navette à la main, parfois sur cent cinquante mètres. Ce portage se chiffre, il ne s'improvise pas : on mesure la distance réelle depuis le point de stationnement avant d'annoncer un prix, et ce prix ne bouge plus." },
      { t: "La rue Obscure et le bâti médiéval", p: "La rue Obscure est une rue entièrement couverte, la seule de ce type sur la Côte, et les maisons qui la bordent ont des escaliers à vis d'un autre siècle. Un canapé trois places n'y passe pas monté. On démonte, on emballe, on remonte à l'arrivée : c'est plus long, c'est prévu au devis, et c'est la seule façon de ne rien abîmer dans des cages d'escalier classées." },
      { t: "La Darse et les résidences du port", p: "Autour de la Darse, l'ancien arsenal reconverti, le bâti est plus récent et les accès meilleurs. Le vrai sujet devient le stationnement : les quais sont saturés du printemps à l'automne. On demande l'arrêté de stationnement à la mairie une dizaine de jours avant, ce qui garantit l'emplacement le matin du déménagement au lieu de tourner une heure avec un vingt mètres cubes." },
      { t: "Villefranche vers Nice, la porte à côté", p: "Beaucoup de déménagements villefranchois se font vers Nice, à sept kilomètres par la Basse Corniche. La distance ne coûte rien, mais le temps de portage, lui, compte. C'est pourquoi un devis honnête sur cette commune se joue sur l'accès et pas sur le kilométrage. On le dit clairement plutôt que de gonfler une ligne de transport qui n'a pas lieu d'être." }
    ],
    faq: [
      { q: "Le camion peut-il monter dans la vieille ville ?", a: "Non, les ruelles ne le permettent pas. Le camion se gare sur le quai et l'équipe porte à la main. La distance de portage est mesurée avant le devis, et elle y figure." },
      { q: "Comment gérez-vous le stationnement sur le port ?", a: "On demande un arrêté de stationnement à la mairie de Villefranche une dizaine de jours avant, ce qui réserve l'emplacement le jour du déménagement." },
      { q: "Mes meubles passent-ils dans un escalier de vieille ville ?", a: "Les escaliers à vis imposent souvent un démontage. On le prévoit au devis, on démonte, on protège et on remonte à l'arrivée." },
      { q: "Utilisez-vous un monte-meuble à Villefranche ?", a: "Quand la façade est accessible et dégagée, oui : c'est plus rapide et plus sûr qu'un portage de cent mètres. Sinon on porte, et c'est chiffré." },
      { q: "Un Villefranche–Nice coûte-t-il cher ?", a: "Sept kilomètres, le transport ne pèse presque rien. Ce qui compte sur cette commune, c'est le temps d'accès, et on le chiffre honnêtement." },
      { q: "Le devis bouge-t-il si l'accès est plus dur que prévu ?", a: "Non. On repère l'accès avant de chiffrer, précisément pour que le prix annoncé soit le prix payé." }
    ],
    nearby: ["beaulieu-sur-mer", "saint-jean-cap-ferrat", "nice", "eze"]
  },
  "beaulieu-sur-mer": {
    name: "Beaulieu-sur-Mer", file: "Demenagement-Beaulieu-sur-Mer", cp: "06310", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Beaulieu-sur-Mer : Petite Afrique, Baie des Fourmis, villas Belle Époque. Accès repéré avant le devis, prix ferme sous 24 h.",
    intro: "Beaulieu-sur-Mer est la plus plate et la plus abritée des communes du corridor est, ce qui en fait paradoxalement la plus simple à déménager. Le relief y laisse respirer : rues droites, accès camion possible presque partout, immeubles bourgeois avec ascenseur. La difficulté est ailleurs — dans le mobilier. Entre les villas Belle Époque du quartier de la Petite Afrique et les appartements de la Baie des Fourmis, on transporte beaucoup d'ancien, de marqueterie et de tableaux. C'est un déménagement d'emballage et de soin, pas de force.",
    quartiers: ["La Petite Afrique", "La Baie des Fourmis", "Le Centre", "Le Port de plaisance", "Bel Horizon", "Les Jardins de l'Olivaie", "Le Boulevard Marinoni", "La Gare", "Saint-Michel"],
    specifics: [
      { t: "Mobilier ancien et objets de valeur", d: "Emballage renforcé, caisses sur mesure pour les tableaux et les pièces fragiles, assurance à 8 000 € par objet avec franchise à notre charge." },
      { t: "Copropriétés bourgeoises", d: "Coordination avec le syndic, réservation d'ascenseur, protection complète des parties communes : marbres, moquettes et boiseries d'origine." },
      { t: "Accès camion favorable", d: "Terrain plat et rues praticables : le vingt mètres cubes se gare au pied de la plupart des adresses, ce qui raccourcit le chantier et allège le devis." }
    ],
    deep: [
      { t: "La Petite Afrique et ses villas", p: "Le quartier doit son nom à un microclimat qui laisse pousser bananiers et citronniers à quelques mètres de la mer. Les villas Belle Époque qui s'y trouvent abritent souvent un mobilier ancien : commodes marquetées, pendules, toiles encadrées. Ces pièces se déménagent en caisses sur mesure, pas en cartons standards. On les recense à l'inventaire, on les emballe séparément, et la déclaration de valeur se fait avant le départ, pas après un incident." },
      { t: "Les copropriétés de la Baie des Fourmis", p: "Le front de mer aligne des immeubles des années trente aux années soixante-dix, tous en copropriété. Le déroulé y est réglé : accord du syndic, réservation de l'ascenseur sur un créneau, bâchage du hall et protection des paliers. Les parties communes de ces immeubles ont souvent des marbres d'origine qu'une roulette de diable raye en une seconde. On les protège systématiquement, sans qu'il faille le demander." },
      { t: "Une commune où le camion passe", p: "Après Villefranche et Èze, Beaulieu se déménage presque confortablement. Le relief est doux, les rues sont larges, et l'immense majorité des adresses accepte un vingt mètres cubes au pied de l'immeuble. Cela change tout sur le prix : moins de portage, moins d'heures, moins de matériel. Un déménagement bellilois coûte souvent moins cher qu'un déménagement niçois de volume équivalent, et on le dit plutôt que d'aligner tout le monde sur le même tarif." },
      { t: "Beaulieu, Monaco et le trajet des actifs", p: "Beaucoup de résidents travaillent à Monaco, à sept minutes en train. Les déménagements se font donc souvent sur un axe court, Beaulieu vers Monaco ou l'inverse, avec les contraintes monégasques d'un côté — autorisation de circulation, créneaux imposés — et la simplicité belliloise de l'autre. On gère les deux bouts du dossier, y compris les formalités côté Principauté, pour que le client n'ait pas à courir après une autorisation la veille." }
    ],
    faq: [
      { q: "Déménagez-vous les villas de la Petite Afrique ?", a: "Oui, régulièrement. Mobilier ancien en caisses sur mesure, tableaux emballés individuellement, et déclaration de valeur établie avant le départ." },
      { q: "Comment se passe l'accès en copropriété ?", a: "On prévient le syndic, on réserve l'ascenseur sur un créneau, et on bâche le hall et les paliers avant le premier carton." },
      { q: "Le camion peut-il se garer devant chez moi ?", a: "Sur la majorité des adresses belliloises, oui : le terrain est plat et les rues praticables. On vérifie l'adresse au moment du devis." },
      { q: "Un Beaulieu–Monaco est-il compliqué ?", a: "Il demande une autorisation de circulation côté monégasque et un créneau horaire. On s'en charge, le client n'a rien à faire." },
      { q: "Assurez-vous les objets de valeur ?", a: "Oui, à hauteur de 8 000 € par objet, franchise à notre charge. Les pièces concernées sont listées avant le déménagement." },
      { q: "Pourquoi un déménagement à Beaulieu est-il moins cher qu'ailleurs ?", a: "Parce que l'accès y est bon. Moins de portage et moins d'heures, donc un devis plus léger à volume égal. On répercute la réalité du chantier." }
    ],
    nearby: ["saint-jean-cap-ferrat", "villefranche-sur-mer", "eze", "nice"]
  },
  "saint-jean-cap-ferrat": {
    name: "Saint-Jean-Cap-Ferrat", file: "Demenagement-Saint-Jean-Cap-Ferrat", cp: "06230", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Saint-Jean-Cap-Ferrat : propriétés, allées privées, mobilier de valeur. Discrétion et devis ferme sous 24h.",
    intro: "Saint-Jean-Cap-Ferrat est un déménagement de propriété, pas d'appartement. Derrière les portails du chemin du Roy et de l'avenue Denis Séméria, on trouve des allées de cent mètres, des gardiens, des jardins en terrasses et un mobilier dont la valeur dépasse souvent celle du camion. Trois choses comptent ici et nulle part ailleurs : accéder à la porte sans abîmer un jardin, emballer des pièces qui ne se remplacent pas, et rester discret. C'est un chantier de préparation, où la moitié du travail se fait avant le jour J.",
    quartiers: ["Le Village", "La Pointe Saint-Hospice", "Passable", "Les Fossettes", "Le Chemin du Roy", "L'Avenue Denis Séméria", "Le Port", "La Paloma", "Les Cèdres"],
    specifics: [
      { t: "Allées privées et portails", d: "Repérage préalable du gabarit possible : beaucoup d'allées n'acceptent pas un vingt mètres cubes. On prévoit le véhicule relais et les plaques de roulage pour ne pas marquer les graviers." },
      { t: "Mobilier et œuvres de valeur", d: "Caisses en bois sur mesure, emballage individuel des œuvres, inventaire valorisé et déclaration de valeur signée avant le chargement." },
      { t: "Discrétion et coordination", d: "Équipe réduite et stable, coordination avec le gardien ou l'intendance, aucun marquage tapageur sur les véhicules d'intervention." }
    ],
    deep: [
      { t: "Accéder à la porte, le vrai sujet du Cap", p: "Sur le Cap-Ferrat, la difficulté n'est presque jamais l'escalier : c'est l'allée. Un portail de deux mètres soixante, un virage entre deux murs, cent mètres de graviers qu'un camion chargé creuse en une manœuvre. On vient repérer avant de chiffrer, on mesure le portail, et on décide alors du gabarit : parfois un douze mètres cubes fait deux voyages là où un vingt ne rentre pas du tout. Les plaques de roulage protègent les allées, et les massifs sont bâchés." },
      { t: "Ce qu'on transporte ici ne se rachète pas", p: "Toiles, bronzes, mobilier d'ébénisterie, pièces de collection : sur cette commune, l'inventaire vaut souvent plus que tout le reste du chantier. On construit des caisses en bois à la dimension des pièces, on emballe chaque œuvre individuellement, et on établit une déclaration de valeur signée avant le chargement. L'assurance couvre 8 000 € par objet avec la franchise à notre charge, et au-delà on met en place une couverture spécifique plutôt que de faire semblant." },
      { t: "Les propriétés en terrasses", p: "Beaucoup de villas du Cap descendent vers la mer par paliers successifs, avec des escaliers extérieurs entre chaque niveau et parfois un funiculaire privé. Un déménagement s'y organise du bas vers le haut, avec une équipe positionnée à chaque palier plutôt qu'un aller-retour complet à chaque meuble. C'est un travail d'organisation, et c'est ce qui distingue une journée maîtrisée d'une journée qui déborde." },
      { t: "La discrétion fait partie de la prestation", p: "Sur le Cap, les propriétaires ne souhaitent pas qu'un déménagement s'affiche. On travaille en équipe réduite et stable, on se coordonne avec le gardien ou l'intendance, et on n'arrive pas avec un camion couvert de publicités. Rien de tout cela ne change le prix : c'est simplement la façon normale de travailler sur cette commune." }
    ],
    faq: [
      { q: "Mon allée est étroite, le camion passe-t-il ?", a: "On vient mesurer avant de chiffrer. Selon le portail et les virages, on adapte le gabarit ou on fait la navette avec un véhicule relais jusqu'à la porte." },
      { q: "Comment protégez-vous les jardins et les allées ?", a: "Plaques de roulage sous les roues, bâchage des massifs proches et circulation limitée à un seul passage. Les graviers ne sont pas creusés." },
      { q: "Prenez-vous en charge les œuvres d'art ?", a: "Oui : caisses en bois sur mesure, emballage individuel, inventaire valorisé et déclaration de valeur signée avant le chargement." },
      { q: "Une villa en terrasses, comment ça s'organise ?", a: "En postant une équipe à chaque palier plutôt qu'en faisant l'aller-retour complet à chaque meuble. C'est plus rapide et beaucoup plus sûr." },
      { q: "Vos camions sont-ils discrets ?", a: "Oui. Équipe réduite et stable, coordination avec le gardien, et aucun marquage tapageur sur les véhicules." },
      { q: "L'assurance couvre-t-elle un mobilier de grande valeur ?", a: "8 000 € par objet avec franchise à notre charge, et une couverture spécifique au-delà. On l'établit avant, jamais après." }
    ],
    nearby: ["beaulieu-sur-mer", "villefranche-sur-mer", "eze", "nice"]
  },
  "eze": {
    name: "Èze", file: "Demenagement-Eze", cp: "06360", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Èze : village perché à 429 m, accès piéton, Moyenne Corniche, bord de mer. Chiffré après repérage, prix ferme sous 24 h.",
    intro: "C'est la commune la plus difficile du corridor, et de loin. Le village médiéval culmine à 429 mètres et se visite exclusivement à pied : aucun véhicule n'y entre, les ruelles sont des escaliers, et la dernière montée se fait sur des marches irrégulières. En contrebas, le bord de mer se déménage normalement, et entre les deux, les villas de la Moyenne Corniche posent la question du stationnement sur une route où l'on ne s'arrête pas. Trois terrains, trois méthodes. On les traite séparément parce qu'ils n'ont rien à voir.",
    quartiers: ["Èze Village", "Èze-Bord-de-Mer", "La Moyenne Corniche", "La Grande Corniche", "Le Col d'Èze", "Saint-Laurent d'Èze", "La Basse Corniche", "Les Hauts d'Èze", "La Revère"],
    specifics: [
      { t: "Village perché, accès piéton", d: "Aucun véhicule dans le village médiéval : portage intégral depuis le parking, par des escaliers, avec une équipe renforcée et un chiffrage au nombre de marches." },
      { t: "Stationnement sur corniche", d: "Arrêté de stationnement obligatoire sur la Moyenne et la Grande Corniche, où l'arrêt d'un camion sans autorisation bloque la circulation." },
      { t: "Villas en restanques", d: "Terrains en terrasses avec escaliers extérieurs : équipe postée par paliers, monte-meuble quand la pente et l'assise le permettent." }
    ],
    deep: [
      { t: "Le village, un déménagement à la main", p: "Aucun camion n'entre dans le village. Le chargement se fait au parking, et tout le reste se porte par des ruelles en escalier, parfois sur plus de deux cents marches. Un déménagement qui prendrait quatre heures ailleurs en prend huit ici, avec deux équipiers de plus. C'est le genre de chantier qu'on refuse de chiffrer à distance : on monte compter les marches et mesurer les passages, puis on annonce un prix qui ne bougera plus. Personne n'aime découvrir un supplément au pied d'un escalier." },
      { t: "La Moyenne Corniche et ses villas", p: "Entre le village et la mer, la Moyenne Corniche dessert des villas accrochées à la pente, avec des accès privés qui débouchent directement sur une route à double sens sans bas-côté. On ne s'y arrête pas au hasard : l'arrêté de stationnement est indispensable, et le camion se positionne dans le sens qui évite une marche arrière dans un virage. C'est un détail d'organisation qui décide de la sécurité de toute la journée." },
      { t: "Le bord de mer, l'autre commune", p: "En bas, au niveau de la voie ferrée et de la Basse Corniche, on retrouve des immeubles et des résidences avec des accès normaux, un stationnement possible et des ascenseurs. Un déménagement y ressemble à un déménagement niçois. Beaucoup de clients ignorent que les deux moitiés de la commune n'ont rien de commun sur le plan pratique : un devis pour le bord de mer et un devis pour le village n'ont pas la même tête, et c'est normal." },
      { t: "Les restanques et les jardins en paliers", p: "Les villas d'ici sont bâties en restanques, ces terrasses successives soutenues par des murets de pierre sèche. Le mobilier descend ou monte par des escaliers extérieurs souvent étroits et parfois glissants. On poste une équipe par palier, on protège les murets et on n'utilise le monte-meuble que si l'assise est franchement stable. Sur une pente pareille, la précipitation coûte toujours plus cher que la méthode." }
    ],
    faq: [
      { q: "Peut-on déménager dans le village d'Èze ?", a: "Oui, mais entièrement à la main : aucun véhicule n'entre. On charge au parking et on porte par les escaliers, avec une équipe renforcée." },
      { q: "Comment chiffrez-vous un déménagement au village ?", a: "En venant sur place compter les marches et mesurer les passages. Le prix annoncé après ce repérage est définitif." },
      { q: "Faut-il une autorisation pour stationner sur la corniche ?", a: "Oui, un arrêté de stationnement. On le demande à la mairie une dizaine de jours avant, sinon l'arrêt d'un camion bloque la route." },
      { q: "Èze-Bord-de-Mer est-il plus simple ?", a: "Beaucoup plus. Accès normaux, stationnement possible, ascenseurs : cela ressemble à un déménagement niçois classique." },
      { q: "Utilisez-vous un monte-meuble à Èze ?", a: "Seulement si l'assise est stable et la façade dégagée. Sur des restanques, on privilégie souvent une équipe postée par paliers." },
      { q: "Le devis peut-il augmenter le jour du déménagement ?", a: "Non. C'est précisément pour cela qu'on repère avant de chiffrer sur cette commune. Le prix annoncé est le prix payé." }
    ],
    nearby: ["villefranche-sur-mer", "cap-d-ail", "beaulieu-sur-mer", "monaco", "beausoleil", "saint-jean-cap-ferrat"]
  },
  "cap-d-ail": {
    name: "Cap-d'Ail", file: "Demenagement-Cap-d-Ail", cp: "06320", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Cap-d'Ail : résidences en pente, Marquet, frontière monégasque. Accès repéré avant le chiffrage, devis ferme sous 24 h.",
    intro: "Cap-d'Ail vit collée à Monaco, dont elle est séparée par une simple rue. La commune s'étage sur une pente forte, entre la Basse Corniche et la mer, avec des résidences desservies par des rampes étroites et des parkings souterrains à la hauteur limitée. Le déménagement y pose deux questions particulières : la hauteur sous plafond des sous-sols, qui interdit souvent le camion, et la proximité monégasque, qui impose ses propres règles dès qu'on franchit la frontière. On travaille les deux côtés régulièrement.",
    quartiers: ["Le Marquet", "Cap Mala", "Saint-Antoine", "La Plage Marquet", "Les Pins", "Le Bas Moulins", "La Gare", "Le Cap", "Les Fleurs"],
    specifics: [
      { t: "Parkings souterrains bas", d: "Hauteur limitée à 1,90 m dans beaucoup de résidences : navette avec un utilitaire bas jusqu'au camion garé en surface, plutôt qu'un portage interminable." },
      { t: "Rampes et pentes fortes", d: "Rampes d'accès raides et virages serrés : gabarit adapté, cales systématiques et manœuvres préparées avant l'arrivée du camion." },
      { t: "Passage vers Monaco", d: "Autorisation de circulation et créneau horaire côté monégasque, obtenus par nos soins pour les déménagements qui franchissent la frontière." }
    ],
    deep: [
      { t: "Le problème que personne n'anticipe : la hauteur", p: "Beaucoup de résidences de Cap-d'Ail n'ont de place de livraison qu'en sous-sol, avec une hauteur sous plafond de 1,90 m parfois moins. Un camion de déménagement mesure trois mètres. Résultat, l'équipe qui n'a pas vérifié se retrouve à porter sur cent cinquante mètres de rampe. La bonne méthode consiste à garer le camion en surface et à faire la navette avec un utilitaire bas jusqu'à la porte. On pose la question de la hauteur au moment du devis, systématiquement." },
      { t: "Une commune à flanc de falaise", p: "Cap-d'Ail descend vers la mer par une pente continue, coupée de rampes raides et de virages en épingle. Le gabarit du camion se choisit en fonction du dernier virage, pas de la largeur de la rue principale. On repère l'accès à l'avance, on cale systématiquement les roues sur les pentes, et on prépare les manœuvres avant l'arrivée plutôt que de découvrir un demi-tour impossible avec vingt mètres cubes chargés." },
      { t: "Monaco est à cent mètres", p: "La frontière passe au milieu du quartier. Un déménagement Cap-d'Ail vers Monaco fait deux kilomètres et demande pourtant une autorisation de circulation, un créneau horaire imposé et parfois une escorte pour les rues étroites de la Condamine. On s'occupe de ces formalités : elles prennent une dizaine de jours et un dossier oublié annule purement et simplement la journée." },
      { t: "Les résidences du Marquet", p: "Le Marquet aligne des immeubles des années soixante et soixante-dix, en copropriété, avec des ascenseurs souvent étroits et des paliers exigus. On mesure l'ascenseur avant le jour J : un canapé qui n'y entre pas doit passer par la cage d'escalier, ce qui change le temps de chantier et donc le devis. Mieux vaut le savoir une semaine avant que le matin même, le meuble sur le palier." }
    ],
    faq: [
      { q: "Mon parking fait moins de deux mètres de haut, c'est un problème ?", a: "Non, c'est fréquent ici. On gare le camion en surface et on fait la navette avec un utilitaire bas jusqu'à votre porte." },
      { q: "Les rampes de Cap-d'Ail posent-elles souci ?", a: "On choisit le gabarit en fonction du dernier virage et on prépare les manœuvres à l'avance. Les roues sont calées systématiquement sur les pentes." },
      { q: "Un Cap-d'Ail–Monaco est-il compliqué ?", a: "Deux kilomètres, mais une autorisation de circulation et un créneau imposé côté monégasque. On s'en charge, comptez une dizaine de jours." },
      { q: "Mesurez-vous l'ascenseur avant ?", a: "Oui. Un meuble qui n'entre pas dans l'ascenseur change le temps de chantier : autant l'avoir prévu au devis plutôt que de le découvrir sur le palier." },
      { q: "Intervenez-vous à Cap Mala ?", a: "Oui, comme sur tout Cap-d'Ail. L'accès y descend fortement, on adapte le véhicule et la méthode." },
      { q: "Le prix change-t-il si l'accès s'avère plus dur ?", a: "Non. La hauteur du parking, la pente et la taille de l'ascenseur sont vues au devis. Le prix annoncé est le prix payé." }
    ],
    nearby: ["monaco", "beausoleil", "eze", "roquebrune-cap-martin"]
  },
  "roquebrune-cap-martin": {
    name: "Roquebrune-Cap-Martin", file: "Demenagement-Roquebrune-Cap-Martin", cp: "06190", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Roquebrune-Cap-Martin : village médiéval, villas du Cap, Carnolès. Accès repéré avant le chiffrage, devis ferme sous 24 h.",
    intro: "Roquebrune-Cap-Martin est en réalité trois communes en une. Le village médiéval, accroché sous son donjon carolingien, ne se déménage qu'à pied par des ruelles voûtées. Le Cap Martin aligne des propriétés sous les pins, avec des allées privées et un patrimoine architectural rare — c'est là que Le Corbusier a bâti son Cabanon. Et Carnolès, en bas, ressemble à un quartier urbain de Menton, avec ses immeubles et ses commerces. Trois terrains qui n'ont ni les mêmes accès ni les mêmes prix.",
    quartiers: ["Le Village", "Le Cap Martin", "Carnolès", "Saint-Roman", "Le Cabanon", "Bon Voyage", "Les Terrasses", "La Gare", "Le Golfe Bleu"],
    specifics: [
      { t: "Village médiéval à pied", d: "Ruelles voûtées et escaliers dans le vieux village : portage intégral depuis le parking bas, avec chiffrage au nombre de marches." },
      { t: "Propriétés du Cap Martin", d: "Allées privées sous les pins, portails de gabarit limité, mobilier de valeur : repérage préalable et véhicule relais quand le camion ne passe pas." },
      { t: "Carnolès, accès urbains", d: "Immeubles avec ascenseur et stationnement possible : chantier classique, plus rapide, et devis allégé en conséquence." }
    ],
    deep: [
      { t: "Le village sous le donjon", p: "Le vieux Roquebrune s'organise autour du plus ancien donjon de France, et ses ruelles voûtées ne laissent passer ni camion ni monte-meuble. Le chargement se fait au parking bas, et le reste se porte par des escaliers et des passages couverts. Comme à Èze, on monte compter les marches avant de chiffrer : c'est la seule façon d'annoncer un prix qui tienne. Le mobilier des vieilles maisons y est souvent ancien, ce qui ajoute l'emballage au portage." },
      { t: "Le Cap Martin, entre pins et patrimoine", p: "Le Cap est un ensemble de propriétés bâties sous les pins, desservies par des allées privées et des chemins qu'un vingt mètres cubes n'emprunte pas toujours. On mesure le portail avant de choisir le gabarit, et on protège les allées comme au Cap-Ferrat. Le quartier abrite aussi un patrimoine sensible, du Cabanon de Le Corbusier à la villa E-1027 : sur ces adresses, la prudence n'est pas une option commerciale, c'est une obligation." },
      { t: "Carnolès, le quartier qui respire", p: "En bas, Carnolès touche Menton et fonctionne comme un quartier urbain : immeubles en copropriété, ascenseurs, rues où l'on peut poser un camion. C'est la partie la plus simple et la moins chère de la commune à déménager. On le dit franchement au moment du devis, plutôt que d'appliquer un tarif uniforme sur trois terrains qui n'ont rien à voir." },
      { t: "Roquebrune, Monaco et Menton", p: "La commune est coincée entre la Principauté et Menton, et la plupart des déménagements se font vers l'une ou l'autre, sur quelques kilomètres. Vers Monaco, il faut l'autorisation de circulation et le créneau horaire, que l'on obtient. Vers Menton, rien de particulier sinon le stationnement en centre-ville. Dans les deux cas, le transport ne pèse presque rien dans le devis : ce sont les accès qui font le prix." }
    ],
    faq: [
      { q: "Peut-on déménager dans le vieux village ?", a: "Oui, entièrement à pied. On charge au parking bas et on porte par les ruelles voûtées et les escaliers, avec une équipe renforcée." },
      { q: "Les allées du Cap Martin sont étroites, comment faites-vous ?", a: "On mesure le portail avant de choisir le gabarit, et on fait la navette avec un véhicule relais quand le camion ne passe pas." },
      { q: "Carnolès est-il plus simple à déménager ?", a: "Nettement. Ascenseurs, stationnement possible, accès urbains : le chantier est plus court et le devis plus léger." },
      { q: "Un Roquebrune–Monaco demande-t-il des formalités ?", a: "Oui, autorisation de circulation et créneau horaire côté monégasque. On les obtient, comptez une dizaine de jours." },
      { q: "Protégez-vous les allées et les jardins ?", a: "Plaques de roulage, bâchage des massifs et passage unique. Sur le Cap, les allées sous les pins ne se creusent pas." },
      { q: "Le devis est-il ferme sur les trois quartiers ?", a: "Oui, et il n'est pas le même : le village, le Cap et Carnolès n'ont ni les mêmes accès ni le même temps de chantier." }
    ],
    nearby: ["menton", "monaco", "beausoleil", "cap-d-ail"]
  },
  "villeneuve-loubet": {
    name: "Villeneuve-Loubet", file: "Demenagement-Villeneuve-Loubet", cp: "06270", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Villeneuve-Loubet : Marina Baie des Anges, village perché, Vaugrenier. Accès repéré avant le devis, prix ferme sous 24 h.",
    intro: "Villeneuve-Loubet est la commune la plus contrastée du corridor : d'un côté la Marina Baie des Anges, quatre immeubles en forme de vagues classés au patrimoine du XXe siècle, de l'autre un village médiéval perché autour de son château, et entre les deux des lotissements et des résidences de plain-pied. La Marina, à elle seule, justifie une méthode : ses coursives sont longues, ses parkings bas et ses ascenseurs comptés. On y déménage régulièrement, et on sait par quelle entrée passer.",
    quartiers: ["La Marina Baie des Anges", "Le Village", "Vaugrenier", "Les Maurettes", "Villeneuve-Loubet Plage", "Les Hauts de Vaugrenier", "L'Hippodrome", "Le Loup", "Saint-Marc"],
    specifics: [
      { t: "Marina Baie des Anges", d: "Coursives longues, ascenseurs partagés et parkings bas : réservation d'ascenseur auprès du syndic et chariots longue distance plutôt que des allers-retours à vide." },
      { t: "Village perché", d: "Ruelles étroites autour du château : stationnement au plus près et portage à la main sur la dernière portion, comme dans tout village médiéval." },
      { t: "Résidences et lotissements", d: "Vaugrenier, les Maurettes et le bord de mer offrent des accès camion normaux : chantier rapide et devis allégé en conséquence." }
    ],
    deep: [
      { t: "La Marina, un immeuble comme nulle part ailleurs", p: "Les quatre pyramides de la Marina Baie des Anges sont un ouvrage classé, et un déménagement y demande de la méthode. Les coursives sont longues, les ascenseurs sont partagés entre des dizaines d'appartements et les places de livraison sont en sous-sol, à hauteur limitée. On réserve l'ascenseur auprès du syndic sur un créneau, on travaille avec des chariots adaptés aux longues distances intérieures, et on prévoit un utilitaire bas pour le sous-sol. Sans cette préparation, une journée normale double." },
      { t: "Le village et son château", p: "Perché autour du château médiéval, le vieux Villeneuve a les contraintes classiques d'un village : ruelles étroites, stationnement rare, dernière portion à pied. Rien d'insurmontable comparé à Èze ou Roquebrune, mais assez pour qu'un devis établi au téléphone sans repérage se révèle faux. On regarde l'adresse avant de chiffrer, ici comme ailleurs." },
      { t: "Vaugrenier et les résidences familiales", p: "L'essentiel des déménagements villeneuvois se fait dans les lotissements et les résidences de Vaugrenier, des Maurettes et du bord de mer. Là, les accès sont bons, le camion se gare au pied, et le chantier ressemble à un déménagement classique de maison ou d'appartement familial. C'est aussi la partie de la commune où les volumes sont les plus importants, avec des maisons entières à charger, cave et garage compris." },
      { t: "Une commune de passage entre Nice et Antibes", p: "Villeneuve-Loubet est à mi-chemin entre Nice et Antibes, à une vingtaine de minutes de chacune. Les déménagements y sont donc rarement longs en distance, et le transport pèse peu dans le devis. Ce sont l'accès et le volume qui font le prix, et sur cette commune le volume l'emporte souvent : une maison de Vaugrenier avec garage et cave demande plus de camion qu'un studio de la Marina, même si le second est plus compliqué à charger." }
    ],
    faq: [
      { q: "Déménagez-vous à la Marina Baie des Anges ?", a: "Régulièrement. On réserve l'ascenseur auprès du syndic, on utilise des chariots adaptés aux longues coursives et un utilitaire bas pour le sous-sol." },
      { q: "Le parking de la Marina est bas, comment faites-vous ?", a: "Le camion reste en surface et la navette se fait avec un utilitaire qui passe sous la hauteur limite. On ne porte pas sur toute la rampe." },
      { q: "Le village perché est-il difficile d'accès ?", a: "Les ruelles autour du château imposent un portage sur la dernière portion. C'est plus simple qu'à Èze, mais cela se repère avant de chiffrer." },
      { q: "Les maisons de Vaugrenier posent-elles problème ?", a: "Non, les accès y sont bons. Le sujet est plutôt le volume : cave et garage compris, une maison remplit vite un vingt mètres cubes." },
      { q: "Un Villeneuve-Loubet–Nice coûte-t-il cher ?", a: "Une vingtaine de minutes, le transport pèse peu. Le prix se joue sur le volume et l'accès, pas sur le kilométrage." },
      { q: "Faut-il prévenir le syndic à l'avance ?", a: "Oui, surtout à la Marina : la réservation d'ascenseur se fait quelques jours avant, sinon le créneau peut être déjà pris." }
    ],
    nearby: ["cagnes-sur-mer", "antibes", "saint-laurent-du-var", "nice"]
  }
};

function getCity(slug) {
  return CITIES[slug] || CITIES["nice"];
}

/* Les quartiers de Nice qui ont leur propre page. Le nom doit être écrit EXACTEMENT
   comme dans la liste `quartiers` de Nice, sinon le lien ne se fait pas et personne ne
   s'en aperçoit — c'est du texte qui reste du texte. */
const QUARTIERS_PAGES = {
  "Vieux-Nice": "Demenagement-Vieux-Nice",
  "Cimiez": "Demenagement-Cimiez-Nice",
  "Carré d'Or": "Demenagement-Carre-d-Or-Nice",
  "Libération": "Demenagement-Liberation-Nice",
  "Le Port": "Demenagement-Port-Nice",
  "Riquier": "Demenagement-Riquier-Nice",
  "Mont Boron": "Demenagement-Mont-Boron-Nice"
};

Object.assign(window, { CITIES, getCity, QUARTIERS_PAGES });
