// city-data.jsx — Rich, localized SEO content per city (10 grandes villes de la Côte d'Azur).
// The renderer (ville-page.jsx) reads document.body.dataset.ville and looks it up here.

const CITIES = {
  "nice": {
    name: "Nice", file: "Demenagement-Nice.html", cp: "06000 – 06300", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Nice par des déménageurs nés ici : du Vieux-Nice à Cimiez, on connaît chaque rue. Devis gratuit sous 24h, prix ferme.",
    intro: "On est des déménageurs niçois, pas une enseigne nationale qui sous-traite au plus offrant. On a grandi entre la Promenade et les collines, et on connaît Nice rue par rue : les ruelles piétonnes du Vieux-Nice où le camion ne rentre pas, les immeubles bourgeois du Carré d'Or, les résidences perchées de Cimiez et de Gairaut, les tours de l'Arénas et de la plaine du Var. Chaque secteur a ses contraintes d'accès, de stationnement et d'étage : on les anticipe dès le devis, pour qu'il n'y ait aucune mauvaise surprise le jour J.",
    quartiers: ["Vieux-Nice", "Carré d'Or", "Cimiez", "Libération", "Le Port", "Riquier", "Nice Nord", "Fabron", "Magnan", "L'Ariane", "Gambetta", "Saint-Roch", "Gairaut", "Las Planas", "Saint-Isidore"],
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
      { q: "Intervenez-vous dans le Vieux-Nice piéton ?", a: "Oui. On réserve l'emplacement au plus près de la zone piétonne, on gère le portage dans les ruelles, et on installe un monte-meuble quand l'escalier ne passe pas. C'est notre quotidien." },
      { q: "Gérez-vous le stationnement et les autorisations à Nice ?", a: "Oui, on s'occupe de la demande d'autorisation de stationnement auprès de la Ville de Nice, créneaux de zones piétonnes compris, pour que le camion soit au plus près de votre porte." },
      { q: "Un déménagement dans Nice prend combien de temps ?", a: "Pour un studio ou un deux-pièces, souvent une demi-journée. Pour un appartement familial ou une villa, une journée complète. On vous donne une estimation réaliste dès le devis." },
      { q: "Faites-vous les déménagements longue distance au départ de Nice ?", a: "Oui, c'est une grande partie de notre activité : Nice → Paris, Lyon, Marseille, mais aussi l'international vers la Suisse, l'Italie ou l'Espagne, avec la même équipe du départ à l'arrivée." },
      { q: "Proposez-vous un garde-meuble à Nice ?", a: "Oui, en box sécurisé, pratique entre deux logements, pour une vente en cours ou un chevauchement de dates. On peut stocker quelques cartons comme un appartement entier." },
      { q: "Le devis peut-il changer le jour du déménagement ?", a: "Non. Le prix annoncé est le prix payé. On chiffre à partir du volume et des accès réels (étage, ascenseur, distance de portage), et c'est écrit noir sur blanc." }
    ],
    nearby: ["cagnes-sur-mer", "saint-laurent-du-var", "cannes", "monaco"]
  },
  "cannes": {
    name: "Cannes", file: "Demenagement-Cannes.html", cp: "06400", dept: "Alpes-Maritimes (06)", region: "cote",
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
      { q: "Déménagez-vous les villas de La Californie ?", a: "Oui. Accès en hauteur, jardins, mobilier de valeur : on adapte le camion, on protège tout et on propose une assurance renforcée en formule Mains dans les poches." },
      { q: "Faites-vous le garde-meuble à Cannes ?", a: "Oui, en box sécurisé. Pratique pour les résidences secondaires, une vente en cours ou un décalage entre deux dates." },
      { q: "Un déménagement Cannes vers Nice ou Paris, vous le faites ?", a: "Bien sûr : local sur tout le bassin cannois, et longue distance vers Nice, Paris, Lyon ou l'international, avec une seule équipe du départ à l'arrivée." }
    ],
    nearby: ["mandelieu", "le-cannet", "antibes", "grasse"]
  },
  "antibes": {
    name: "Antibes", file: "Demenagement-Antibes.html", cp: "06600", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Antibes et Juan-les-Pins : du Vieil Antibes au Cap, de Port Vauban à la Fontonne. Devis gratuit sous 24h.",
    intro: "Antibes, c'est trois communes en une : la vieille ville fortifiée aux ruelles piétonnes, le Cap et ses villas d'exception, et Juan-les-Pins, station balnéaire saturée l'été. On adapte le camion, le portage et le planning à chacun de ces mondes. On gère aussi les accès particuliers d'Antibes : les abords de Port Vauban, le plus grand port de plaisance d'Europe, les résidences fermées de la Fontonne et des Semboules, et le mobilier de valeur fréquent au Cap d'Antibes.",
    quartiers: ["Vieil Antibes", "Cap d'Antibes", "Juan-les-Pins", "La Fontonne", "Les Semboules", "La Salis", "Port Vauban", "Les Combes", "La Croix-Rouge", "Le Ponteil", "Les Trois Moulins"],
    specifics: [
      { t: "Vieille ville piétonne", d: "Portage optimisé et stationnement réservé dans les ruelles du Vieil Antibes et autour du marché Provençal, avec monte-meuble quand l'accès l'exige." },
      { t: "Villas du Cap", d: "Mobilier de valeur, œuvres d'art, grands volumes : protection spécifique sur mesure et assurance renforcée en formule Mains dans les poches." },
      { t: "Saison à Juan-les-Pins", d: "On évite les pics estivaux du front de mer et de la pinède pour un déménagement fluide, sans rester coincé dans la circulation balnéaire." }
    ],
    deep: [
      { t: "Une commune aux mille visages", p: "Entre les remparts du Vieil Antibes, les ruelles autour du marché Provençal, le bord de mer de la Salis et du Ponteil, les villas du Cap et l'animation estivale de Juan-les-Pins, Antibes change de logique tous les kilomètres. Le déménageur qui ne connaît pas la commune se fait piéger par les accès. Nous, on sait quel secteur impose le portage, lequel demande un monte-meuble et lequel sature en été. On planifie en conséquence." },
      { t: "Le Cap d'Antibes, le standard du soin", p: "Le Cap, c'est l'un des secteurs résidentiels les plus prestigieux de la Côte. Villas d'exception, mobilier ancien, œuvres d'art, pianos, caves : nos clients y attendent un soin irréprochable. On déploie un emballage sur mesure, une protection renforcée et une assurance en valeur déclarée. Équipe expérimentée, pas d'intérimaire recruté la veille : sur ce type de bien, on ne laisse rien au hasard." },
      { t: "Plaisanciers, expats et résidences secondaires", p: "Beaucoup de nos clients antibois sont des plaisanciers de Port Vauban, des cadres internationaux ou des propriétaires de résidences secondaires. Ça implique des déménagements souvent partiels, des mises en garde-meuble saisonnières, des départs vers l'étranger et des coordinations à distance. On est rodés à ces scénarios : ouverture et fermeture de saison, stockage relais, déménagements internationaux organisés de bout en bout." },
      { t: "Juan-les-Pins et le piège de l'été", p: "Juan-les-Pins l'été, c'est la pinède, les festivals de jazz, les plages et une circulation qui se bloque. Déménager en plein mois d'août sur le front de mer, c'est s'exposer à des heures perdues. On privilégie les créneaux hors affluence, tôt le matin ou hors saison, et on réserve le stationnement à l'avance. Le déménagement va deux fois plus vite et personne ne s'énerve." }
    ],
    faq: [
      { q: "Déménagez-vous les villas du Cap d'Antibes ?", a: "Oui, avec un soin particulier pour le mobilier de valeur : protection sur mesure, emballage renforcé et assurance en valeur déclarée pour les œuvres d'art et les objets précieux." },
      { q: "Et la vieille ville d'Antibes, accessible au camion ?", a: "Rarement jusqu'à la porte. On stationne au plus près dans les ruelles, on gère le portage et on installe un monte-meuble quand l'escalier l'exige." },
      { q: "Intervenez-vous à Juan-les-Pins en été ?", a: "Oui, mais on privilégie les créneaux hors affluence pour éviter la circulation et le stationnement saturé du littoral. Le déménagement est plus rapide et plus serein." },
      { q: "Gérez-vous les résidences secondaires et le garde-meuble ?", a: "C'est une spécialité locale : ouvertures de saison, mises en box sécurisé, déménagements partiels coordonnés à distance. On s'adapte à votre calendrier." },
      { q: "Faites-vous les déménagements internationaux depuis Antibes ?", a: "Oui, fréquemment : vers l'Italie, la Suisse, l'Espagne et au-delà. Inventaire, logistique et formalités gérés de bout en bout." },
      { q: "Le devis est-il ferme à Antibes ?", a: "Oui, prix ferme. On chiffre selon le volume et les accès réels de votre adresse, sans supplément surprise le jour du déménagement." }
    ],
    nearby: ["cannes", "cagnes-sur-mer", "nice"]
  },
  "monaco": {
    name: "Monaco", file: "Demenagement-Monaco.html", cp: "98000", dept: "Principauté de Monaco", region: "cote",
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
    nearby: ["menton", "nice"]
  },
  "menton": {
    name: "Menton", file: "Demenagement-Menton.html", cp: "06500", dept: "Alpes-Maritimes (06)", region: "cote",
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
      { q: "Proposez-vous un garde-meuble à Menton ?", a: "Oui, en box sécurisé, idéal entre deux logements, pour une résidence secondaire ou une vente en cours." },
      { q: "Le prix est-il ferme malgré les accès difficiles ?", a: "Oui. Les escaliers, le portage, le monte-meuble éventuel et la frontière sont intégrés au devis. Le prix annoncé est le prix payé." }
    ],
    nearby: ["monaco", "nice"]
  },
  "grasse": {
    name: "Grasse", file: "Demenagement-Grasse.html", cp: "06130", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Grasse, capitale du parfum : vieille ville médiévale perchée, hameaux de l'arrière-pays. Devis gratuit sous 24h.",
    intro: "La vieille ville de Grasse, perchée et truffée de ruelles médiévales en forte pente, est un vrai défi pour tout déménageur qui ne la connaît pas. Mais Grasse, c'est aussi les quartiers résidentiels de Saint-Jacques et du Plan, et un arrière-pays de mas, de bastides et de hameaux dispersés (Magagnosc, Plascassier, Saint-Antoine). On intervient sur l'ensemble du territoire grassois avec le matériel adapté et une bonne dose d'expérience locale du dénivelé et des accès en lacets.",
    quartiers: ["Vieille Ville", "Saint-Jacques", "Le Plan", "Magagnosc", "Plascassier", "Saint-Antoine", "Les Aspres", "Le Petit Paris", "Saint-Claude", "La Paoute"],
    specifics: [
      { t: "Centre médiéval perché", d: "Stationnement au plus près et portage maîtrisé dans les ruelles en forte pente du vieux Grasse, avec monte-meuble quand l'escalier ne passe pas." },
      { t: "Arrière-pays grassois", d: "Hameaux, mas et bastides isolés desservis sans supplément surprise : accès en lacets, portails et chemins étroits anticipés dès le devis." },
      { t: "Villas et terrains en restanques", d: "Maisons individuelles avec jardins, terrains étagés et accès en pente pris en compte, avec transbordement par petit véhicule si nécessaire." }
    ],
    deep: [
      { t: "Le défi du vieux Grasse", p: "Le centre historique de Grasse est un labyrinthe médiéval en forte pente où le camion ne s'aventure tout simplement pas. Ici, le déménagement se gagne à l'organisation : on stationne au plus près, on porte sur des distances parfois longues, et on déploie un monte-meuble dès que la configuration l'exige. Tout est repéré et anticipé en amont, parce qu'à Grasse, le mauvais réflexe c'est de découvrir l'accès le jour J." },
      { t: "Entre ville et campagne", p: "Au-delà du centre, Grasse est l'une des communes les plus étendues du département. Magagnosc, Plascassier, Saint-Antoine, les Aspres : un arrière-pays de mas, de bastides et de villas perdues au bout de chemins étroits, derrière des portails, sur des terrains en restanques. Nos chauffeurs connaissent ces accès en lacets et adaptent le véhicule, quitte à transborder avec un utilitaire plus petit pour atteindre la porte." },
      { t: "Une ville de mutations professionnelles", p: "Capitale mondiale du parfum, Grasse vit au rythme de son industrie : parfumeurs, laboratoires, saisonniers de la fleur. On y croise régulièrement des déménagements liés à une mutation ou à une prise de poste, avec devis conforme à transmettre à un employeur. On gère ces dossiers proprement, facture en règle comprise, en plus des déménagements de particuliers classiques." },
      { t: "Garde-meuble et déménagements partiels", p: "Entre une vente en cours, un logement de l'arrière-pays pas encore prêt ou une résidence secondaire, beaucoup de déménagements grassois passent par une phase de stockage. On propose un garde-meuble en box sécurisé et on gère les déménagements partiels, en plusieurs temps si nécessaire, sans vous faire payer deux fois le déplacement." }
    ],
    faq: [
      { q: "Le camion accède-t-il au centre historique de Grasse ?", a: "Rarement jusqu'à la porte : les ruelles médiévales sont en forte pente et étroites. On stationne au plus près, on gère le portage et on installe un monte-meuble si besoin." },
      { q: "Desservez-vous les hameaux de l'arrière-pays grassois ?", a: "Oui : Magagnosc, Plascassier, Saint-Antoine, les mas et bastides isolés. Les accès en lacets et les chemins étroits sont anticipés, sans supplément caché." },
      { q: "Gérez-vous les déménagements liés à une mutation professionnelle ?", a: "Oui, fréquent à Grasse vu son industrie du parfum : devis conforme pour votre employeur, facture en règle pour le remboursement, coordination avec votre prise de poste." },
      { q: "Faites-vous le garde-meuble à Grasse ?", a: "Oui, en box sécurisé. Pratique entre deux logements, pour une vente en cours ou une résidence secondaire de l'arrière-pays." },
      { q: "Déménagez-vous les villas avec terrain en pente ?", a: "Oui. Jardins, restanques, accès en lacets et portails sont pris en compte dès le devis, avec transbordement par petit véhicule quand c'est nécessaire." },
      { q: "Un déménagement Grasse vers la côte ou plus loin, c'est possible ?", a: "Bien sûr : local vers Cannes, Nice et tout le bassin, ou longue distance partout en France et à l'international, avec la même équipe du départ à l'arrivée." }
    ],
    nearby: ["cannes", "le-cannet", "mandelieu"]
  },
  "cagnes-sur-mer": {
    name: "Cagnes-sur-Mer", file: "Demenagement-Cagnes-sur-Mer.html", cp: "06800", dept: "Alpes-Maritimes (06)", region: "cote",
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
      { q: "Proposez-vous un garde-meuble près de Cagnes ?", a: "Oui, en box sécurisé, pratique entre deux logements ou pour un décalage de dates. On stocke de quelques cartons à un appartement entier." }
    ],
    nearby: ["saint-laurent-du-var", "nice", "antibes"]
  },
  "le-cannet": {
    name: "Le Cannet", file: "Demenagement-Le-Cannet.html", cp: "06110", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement au Cannet : Rocheville, vieux village cher à Bonnard, hauteurs de Cannes. Rues en pente maîtrisées, devis gratuit sous 24h.",
    intro: "Le Cannet domine Cannes depuis ses collines. La ville mêle trois ambiances : le vieux village pittoresque et perché, cher au peintre Bonnard, le quartier vivant et commerçant de Rocheville, et des résidences modernes étagées à flanc de colline. Sa particularité de déménagement, ce sont ses rues en pente et ses virages serrés, qui imposent souvent un camion bien dimensionné ou un transbordement. On connaît ces hauteurs cannettanes et on adapte le matériel à chaque accès.",
    quartiers: ["Rocheville", "Le Vieux Cannet", "Les Tourrades", "La Croix des Gardes", "L'Aubarède", "Le Cannet Centre", "Garibondy", "Cheval Blanc", "Les Mûriers"],
    specifics: [
      { t: "Hauteurs et pentes", d: "Camions adaptés aux rues en pente et aux virages serrés des collines cannettanes, avec transbordement par véhicule maniable si l'accès se resserre." },
      { t: "Proximité Cannes", d: "Déménagements Le Cannet → Cannes réglés en une demi-journée : les deux villes se touchent, le coût de déplacement reste réduit." },
      { t: "Vieux village", d: "Portage et stationnement maîtrisés dans les ruelles pittoresques du Cannet historique, où le camion ne passe pas toujours." }
    ],
    deep: [
      { t: "Une ville en balcon sur Cannes", p: "Le Cannet, c'est Cannes vue d'en haut. Ses quartiers s'étagent à flanc de colline, entre rues pentues, virages serrés et résidences perchées. Le bon réflexe, c'est de choisir le gabarit de camion adapté et, quand l'accès se resserre vraiment, de faire la navette avec un véhicule plus maniable jusqu'à la porte. On repère l'adresse en amont pour ne pas se retrouver bloqué dans une montée trop étroite le jour du déménagement." },
      { t: "Le vieux village de Bonnard", p: "Le Cannet historique a séduit Pierre Bonnard, qui y a peint la lumière pendant des années. Ses ruelles pittoresques, en pente et étroites, ne se déménagent pas au camion : portage, véhicule relais et stationnement réservé au plus près. Le mobilier des vieilles maisons y est parfois ancien et délicat, on l'emballe et le protège avec attention. Un déménagement de patience et de méthode, pas de force brute." },
      { t: "Rocheville, le cœur qui bat", p: "Rocheville est le quartier vivant du Cannet : commerces, marché, vie de quartier, immeubles résidentiels. C'est là qu'on déménage le plus de familles et de retraités, souvent en copropriété. On coordonne avec les syndics, on réserve l'ascenseur, on protège les parties communes et on gère le stationnement sur des rues parfois passantes. Du déménagement urbain classique, qu'on connaît par cœur." },
      { t: "Le Cannet–Cannes, le déménagement de proximité", p: "La plupart des déménagements cannettans restent locaux, vers Cannes ou les communes voisines, à quelques minutes seulement. Résultat : des interventions rapides, souvent bouclées dans la demi-journée, et un coût de déplacement contenu. Pour un studio comme pour une villa, la proximité joue en votre faveur, et on la répercute sur un devis honnête, sans gonfler le kilométrage." }
    ],
    faq: [
      { q: "Les rues en pente du Cannet posent-elles problème ?", a: "Non, nos chauffeurs y sont habitués. On adapte le gabarit du camion et, si l'accès se resserre, on transborde avec un véhicule plus petit jusqu'à la porte." },
      { q: "Un Le Cannet–Cannes, ça prend combien de temps ?", a: "Souvent une demi-journée pour un volume courant : les deux villes se touchent, le déplacement est minime." },
      { q: "Intervenez-vous dans le vieux village du Cannet ?", a: "Oui, avec portage, véhicule relais et stationnement réservé au plus près, puisque le camion ne passe pas dans les ruelles pittoresques." },
      { q: "Déménagez-vous les copropriétés de Rocheville ?", a: "Oui : réservation d'ascenseur, protection des parties communes, coordination avec le syndic et gestion du stationnement sur les rues passantes." },
      { q: "Faites-vous les petits volumes au Cannet ?", a: "Bien sûr. La proximité de Cannes et de Nice rend les petites surfaces rapides et économiques à déménager." },
      { q: "Le devis est-il ferme malgré les pentes et les accès ?", a: "Oui. Le gabarit du camion, le transbordement éventuel et le portage sont intégrés au devis. Le prix annoncé est le prix payé." }
    ],
    nearby: ["cannes", "mandelieu", "grasse"]
  },
  "saint-laurent-du-var": {
    name: "Saint-Laurent-du-Var", file: "Demenagement-Saint-Laurent-du-Var.html", cp: "06700", dept: "Alpes-Maritimes (06)", region: "cote",
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
    nearby: ["nice", "cagnes-sur-mer", "cannes"]
  },
  "mandelieu": {
    name: "Mandelieu-la-Napoule", file: "Demenagement-Mandelieu.html", cp: "06210", dept: "Alpes-Maritimes (06)", region: "cote",
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
      { q: "Proposez-vous un garde-meuble à Mandelieu ?", a: "Oui, en box sécurisé, particulièrement utile pour les résidences secondaires, un décalage de dates ou une vente en cours." },
      { q: "Faites-vous les déménagements longue distance depuis Mandelieu ?", a: "Oui : vers Paris, Lyon, toute la France et l'international, avec une seule équipe du chargement à la livraison." },
      { q: "Le prix est-il ferme malgré les accès variés ?", a: "Oui. Quais, lacets, transbordement éventuel et étages sont intégrés au devis, qui est détaillé et définitif." }
    ],
    nearby: ["cannes", "le-cannet", "grasse"]
  }
};

function getCity(slug) {
  return CITIES[slug] || CITIES["nice"];
}

Object.assign(window, { CITIES, getCity });
