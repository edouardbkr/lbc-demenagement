// city-data.jsx — Rich, localized SEO content per city (10 grandes villes de la Côte d'Azur).
// The renderer (ville-page.jsx) reads document.body.dataset.ville and looks it up here.

const CITIES = {
  "nice": {
    name: "Nice", file: "Demenagement-Nice.html", cp: "06000 – 06300", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménageurs nés à Nice : on connaît chaque rue, du Vieux-Nice à Cimiez. Devis gratuit sous 24h.",
    intro: "Nous sommes des déménageurs niçois et nous connaissons la ville par cœur. Ruelles piétonnes du Vieux-Nice, immeubles haussmanniens du Carré d'Or, résidences perchées de Cimiez, tours de l'Arénas : chaque quartier a ses contraintes d'accès et de stationnement, et nous les anticipons pour vous.",
    quartiers: ["Vieux-Nice", "Carré d'Or", "Cimiez", "Libération", "Le Port", "Riquier", "Nice Nord", "Fabron", "Magnan", "L'Ariane", "Gambetta", "Saint-Roch"],
    specifics: [
      { t: "Stationnement maîtrisé", d: "On demande l'autorisation de voirie en mairie et on connaît les créneaux des zones piétonnes du centre." },
      { t: "Accès difficiles", d: "Étages sans ascenseur, ruelles étroites, monte-meuble : on prévoit le bon matériel dès le devis." },
      { t: "Local ou longue distance", d: "Un déménagement dans Nice ou un Nice–Paris : même équipe, même soin." }
    ],
    deep: [
      { t: "Du Vieux-Nice aux collines", p: "Le Vieux-Nice et ses ruelles inaccessibles au camion imposent portage et stationnement réservé au plus près ; le Carré d'Or et ses immeubles bourgeois demandent souvent un monte-meuble par la façade ; Cimiez, Gairaut et Fabron alignent villas et résidences en hauteur aux accès en lacets. On adapte le véhicule et l'équipe à chaque adresse." },
      { t: "Étudiants, familles, sièges", p: "Studio meublé près de la fac de Valrose, appartement familial à Libération, transfert de bureaux dans l'Arénas ou l'Eco-Vallée : on déménage tous les profils niçois, en semaine comme le samedi, avec un devis détaillé ligne par ligne." }
    ],
    faq: [
      { q: "Intervenez-vous dans le Vieux-Nice piéton ?", a: "Oui. On réserve l'emplacement au plus près, et on gère le portage dans les ruelles ; un monte-meuble est prévu quand l'escalier ne passe pas." },
      { q: "Combien coûte un déménagement à Nice ?", a: "Comptez en moyenne 390–690 € pour un studio et 890–1 500 € pour un 3 pièces en local. Votre devis personnalisé reste précis et ferme." },
      { q: "Gérez-vous le stationnement en centre-ville ?", a: "Oui, on s'occupe de la demande d'autorisation de stationnement auprès de la Ville de Nice, créneaux de zones piétonnes compris." }
    ],
    nearby: ["cagnes-sur-mer", "saint-laurent-du-var", "cannes", "monaco"]
  },
  "cannes": {
    name: "Cannes", file: "Demenagement-Cannes.html", cp: "06400", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Cannes : de La Croisette au Suquet en passant par La Bocca. Service premium, devis gratuit.",
    intro: "À Cannes, on déménage aussi bien un studio à La Bocca qu'un appartement de standing sur La Croisette. Festival du film, saison estivale, ruelles étroites du Suquet : on planifie votre déménagement hors des pics de circulation pour éviter les blocages.",
    quartiers: ["La Croisette", "Le Suquet", "La Bocca", "Carnot", "Palm Beach", "La Californie", "Pointe Croisette", "Le Cannet-Rocheville", "Prado-République"],
    specifics: [
      { t: "Résidences de standing", d: "Protection intégrale du mobilier et coordination avec gardiens et syndics des immeubles de la Croisette." },
      { t: "Hors saison maîtrisée", d: "On évite les semaines de festival et les samedis d'été pour gagner du temps et éviter les amendes." },
      { t: "Le Suquet piéton", d: "Portage et monte-meuble dans les ruelles en pente du vieux Cannes, inaccessibles au camion." }
    ],
    deep: [
      { t: "Le calendrier, clé d'un déménagement cannois", p: "À Cannes, la date fait tout : entre le Festival, le MIPIM, les yachts et les samedis estivaux, certaines semaines paralysent le centre. On cale votre déménagement sur les bons créneaux et on réserve l'emplacement camion en amont pour ne pas perdre une heure." },
      { t: "Du front de mer aux hauteurs", p: "Appartements de prestige de la Croisette et de la Californie, résidences familiales de La Bocca, maisons des hauteurs : on dimensionne le camion et l'équipe à chaque accès, avec protection renforcée pour le mobilier de valeur." }
    ],
    faq: [
      { q: "Peut-on déménager pendant le Festival ?", a: "C'est possible mais déconseillé : circulation et stationnement saturés. On préfère caler une date hors événement pour vous faire gagner du temps." },
      { q: "Gérez-vous les immeubles avec syndic sur la Croisette ?", a: "Oui, on coordonne en amont avec gardiens et syndics : réservation d'ascenseur, créneaux et protection des parties communes." },
      { q: "Intervenez-vous au Suquet ?", a: "Oui, avec portage et monte-meuble adaptés aux ruelles en escaliers du vieux Cannes." }
    ],
    nearby: ["mandelieu", "le-cannet", "antibes", "grasse"]
  },
  "antibes": {
    name: "Antibes", file: "Demenagement-Antibes.html", cp: "06600", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Antibes et Juan-les-Pins : du Vieil Antibes au Cap. Devis gratuit sous 24h.",
    intro: "Entre les remparts du Vieil Antibes, les villas du Cap d'Antibes, la pinède de Juan-les-Pins et les résidences de la Fontonne, on adapte le camion et le portage à chaque adresse. On gère aussi les accès marina (Port Vauban) et les résidences fermées.",
    quartiers: ["Vieil Antibes", "Cap d'Antibes", "Juan-les-Pins", "La Fontonne", "Les Semboules", "La Salis", "Port Vauban", "Les Combes", "La Croix-Rouge"],
    specifics: [
      { t: "Vieille ville piétonne", d: "Portage optimisé et stationnement réservé dans les ruelles du Vieil Antibes et autour du marché Provençal." },
      { t: "Villas du Cap", d: "Mobilier de valeur, œuvres d'art : protection spécifique et assurance renforcée en formule Mains dans les poches." },
      { t: "Saison à Juan-les-Pins", d: "On évite les pics estivaux du front de mer et de la pinède pour un déménagement fluide." }
    ],
    deep: [
      { t: "Une commune aux mille visages", p: "Antibes, c'est trois mondes : la vieille ville fortifiée aux ruelles piétonnes, le Cap et ses villas d'exception, et Juan-les-Pins, station balnéaire saturée l'été. Chaque secteur a ses contraintes — on les connaît et on dimensionne l'intervention en conséquence." },
      { t: "Yachts, expats et résidences secondaires", p: "Beaucoup de nos clients antibois sont des cadres internationaux, des plaisanciers de Port Vauban ou des propriétaires de résidences secondaires. On gère garde-meuble, déménagements internationaux et mises en stockage saisonnières." }
    ],
    faq: [
      { q: "Déménagez-vous les villas du Cap d'Antibes ?", a: "Oui, avec un soin particulier pour le mobilier de valeur, protection sur mesure et assurance renforcée pour les œuvres d'art." },
      { q: "Et la vieille ville d'Antibes ?", a: "Portage et stationnement réservé dans les ruelles ; monte-meuble quand l'accès l'exige." },
      { q: "Intervenez-vous à Juan-les-Pins en été ?", a: "Oui, mais on privilégie les créneaux hors affluence pour éviter la circulation et le stationnement saturé du littoral." }
    ],
    nearby: ["cannes", "cagnes-sur-mer", "nice"]
  },
  "monaco": {
    name: "Monaco", file: "Demenagement-Monaco.html", cp: "98000", dept: "Principauté de Monaco", region: "cote",
    lede: "Déménagement à Monaco : Monte-Carlo, La Condamine, Fontvieille. Discrétion et précision, devis gratuit.",
    intro: "Déménager à Monaco demande méthode : circulation dense, immeubles de grande hauteur, accès réglementés et créneaux de livraison stricts. On coordonne ascenseurs, monte-charges et autorisations pour un déménagement fluide, dans la plus grande discrétion.",
    quartiers: ["Monte-Carlo", "La Condamine", "Fontvieille", "Larvotto", "Jardin Exotique", "Les Moneghetti", "La Rousse", "Le Larvotto"],
    specifics: [
      { t: "Immeubles de grande hauteur", d: "Réservation des ascenseurs et monte-charges en amont avec la régie de l'immeuble." },
      { t: "Discrétion absolue", d: "Mobilier de prestige, biens de valeur : soin renforcé, assurance adaptée, intervention confidentielle." },
      { t: "Accès réglementés", d: "Créneaux de livraison de la Principauté et autorisations gérés pour vous, sans accroc." }
    ],
    deep: [
      { t: "La logistique monégasque, un art", p: "À Monaco, rien n'est laissé au hasard : la régie impose des créneaux, les ascenseurs se réservent, le stationnement est minuté. On prépare le déménagement comme un projet — repérage, autorisations, coordination — pour que le jour J se déroule à la minute près." },
      { t: "Le standard du prestige", p: "Mobilier de grande valeur, œuvres d'art, cave à vin, coffre : nos clients monégasques exigent un soin irréprochable. Équipe réduite et expérimentée, emballage sur mesure, assurance en valeur déclarée et confidentialité totale." }
    ],
    faq: [
      { q: "Faut-il une autorisation pour déménager à Monaco ?", a: "Souvent oui : créneaux d'immeuble, réservation d'ascenseur, autorisations de stationnement. On s'en occupe en amont avec la régie." },
      { q: "Êtes-vous discrets pour les biens de prestige ?", a: "Absolument : équipe réduite, confidentialité totale, et assurance renforcée pour le mobilier et les objets de valeur." },
      { q: "Déménagez-vous Monaco vers l'étranger ?", a: "Oui, vers l'Italie, la Suisse et au-delà : on organise le transport international et les formalités." }
    ],
    nearby: ["menton", "nice"]
  },
  "menton": {
    name: "Menton", file: "Demenagement-Menton.html", cp: "06500", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Menton, la perle de la France : vieille ville perchée, Garavan. Devis gratuit sous 24h.",
    intro: "Menton et ses ruelles en escaliers de la vieille ville, ses villas de Garavan face à la frontière italienne, ses immeubles du centre et du bord de mer : on connaît les contraintes de portage et de stationnement de la ville la plus à l'est de la Côte d'Azur.",
    quartiers: ["Vieille Ville", "Garavan", "Borrigo", "Careï", "Carnolès", "Les Sablettes", "Monti", "Le Centre"],
    specifics: [
      { t: "Ruelles en escaliers", d: "Portage à dos et monte-meuble quand la rue de la vieille ville ne passe pas." },
      { t: "Proche frontière", d: "Déménagements transfrontaliers vers Vintimille et l'Italie organisés sans accroc." },
      { t: "Villas de Garavan", d: "Jardins en terrasses et accès en hauteur anticipés dès le devis." }
    ],
    deep: [
      { t: "Une ville en pente, un déménagement millimétré", p: "Menton grimpe : escaliers de la vieille ville, terrasses de Garavan, virages de Monti. Le camion ne passe pas partout, alors on prévoit portage, navette en petit véhicule ou monte-meuble selon l'adresse — toujours chiffré à l'avance." },
      { t: "À cheval sur deux pays", p: "Frontalière, Menton génère beaucoup de déménagements vers l'Italie voisine. On gère le passage de frontière, la logistique transfrontalière et les formalités, sans surcoût caché." }
    ],
    faq: [
      { q: "Déménagez-vous vers l'Italie depuis Menton ?", a: "Oui, vers Vintimille, San Remo et au-delà : déménagements transfrontaliers organisés de bout en bout." },
      { q: "Comment gérez-vous la vieille ville en escaliers ?", a: "Portage à dos sur les volumes raisonnables, monte-meuble pour le reste, et stationnement réservé au plus près." },
      { q: "Intervenez-vous à Garavan ?", a: "Oui, on connaît les villas en terrasses et leurs accès en hauteur, anticipés dès le devis." }
    ],
    nearby: ["monaco", "nice"]
  },
  "grasse": {
    name: "Grasse", file: "Demenagement-Grasse.html", cp: "06130", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Grasse, capitale du parfum : vieille ville perchée et ruelles en pente. Devis gratuit.",
    intro: "La vieille ville de Grasse, perchée et truffée de ruelles médiévales en pente, est un défi pour tout déménageur. Du centre historique aux quartiers résidentiels de Saint-Jacques et aux hameaux de l'arrière-pays, on intervient avec le matériel adapté et une bonne dose d'expérience locale.",
    quartiers: ["Vieille Ville", "Saint-Jacques", "Le Plan", "Magagnosc", "Plascassier", "Saint-Antoine", "Les Aspres", "Le Petit Paris"],
    specifics: [
      { t: "Centre médiéval perché", d: "Stationnement au plus près et portage maîtrisé dans les ruelles en pente du vieux Grasse." },
      { t: "Arrière-pays", d: "Hameaux, mas et bastides isolés desservis sans supplément surprise." },
      { t: "Villas et terrains", d: "Maisons individuelles avec jardins et accès en lacets pris en compte dès le devis." }
    ],
    deep: [
      { t: "Le défi du vieux Grasse", p: "Le centre historique de Grasse est un labyrinthe médiéval en pente où le camion ne s'aventure pas. On stationne au plus près, on porte, et on déploie un monte-meuble dès que la configuration l'exige — tout est anticipé pour éviter la mauvaise surprise." },
      { t: "Entre ville et campagne", p: "Au-delà du centre, Grasse, c'est aussi Magagnosc, Plascassier et un arrière-pays de mas et de bastides. Chemins étroits, portails, terrains en restanques : nos chauffeurs connaissent et adaptent le véhicule." }
    ],
    faq: [
      { q: "Le camion accède-t-il au centre historique ?", a: "Rarement jusqu'à la porte : on stationne au plus près et on gère le portage, avec monte-meuble si besoin." },
      { q: "Desservez-vous les hameaux de l'arrière-pays grassois ?", a: "Oui, Magagnosc, Plascassier, Saint-Antoine et les mas isolés : accès en lacets compris, sans supplément caché." },
      { q: "Faites-vous le garde-meuble ?", a: "Oui, en box sécurisé, pratique entre deux logements ou pour une vente en cours." }
    ],
    nearby: ["cannes", "le-cannet", "mandelieu"]
  },
  "cagnes-sur-mer": {
    name: "Cagnes-sur-Mer", file: "Demenagement-Cagnes-sur-Mer.html", cp: "06800", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Cagnes-sur-Mer : Haut-de-Cagnes, Cros-de-Cagnes, bord de mer. Devis gratuit sous 24h.",
    intro: "Du village perché du Haut-de-Cagnes au front de mer du Cros-de-Cagnes, on adapte chaque déménagement aux accès très variés de la commune. Hippodrome, résidences récentes du Béal, vieux village médiéval : on connaît chaque secteur.",
    quartiers: ["Haut-de-Cagnes", "Cros-de-Cagnes", "Le Béal", "Les Vespins", "Val Fleuri", "Les Bréguières", "Cagnes Centre", "Hippodrome"],
    specifics: [
      { t: "Village perché", d: "Accès étroits et pavés du Haut-de-Cagnes anticipés dès le devis, portage et monte-meuble prévus." },
      { t: "Front de mer", d: "Stationnement et créneaux gérés sur le bord de mer animé du Cros-de-Cagnes." },
      { t: "À deux pas de Nice", d: "Intervention rapide depuis notre base niçoise, idéale pour tous volumes." }
    ],
    deep: [
      { t: "Du médiéval au balnéaire", p: "Cagnes condense la Côte d'Azur : un village médiéval perché (le Haut-de-Cagnes) aux ruelles pavées, un front de mer animé (le Cros-de-Cagnes) et des quartiers résidentiels modernes. On bascule du portage minutieux au déménagement express selon l'adresse." },
      { t: "Idéale pour un déménagement local", p: "Voisine immédiate de Nice et de Saint-Laurent-du-Var, Cagnes est parfaite pour un déménagement courte distance : on intervient vite, à toute heure, pour un studio comme pour une villa." }
    ],
    faq: [
      { q: "Comment accéder au Haut-de-Cagnes ?", a: "Rues pavées étroites : on stationne au plus près et on porte, avec monte-meuble si l'escalier ne passe pas." },
      { q: "Un déménagement Cagnes–Nice, c'est rapide ?", a: "Oui, souvent une demi-journée pour un petit volume : on est basés juste à côté." },
      { q: "Gérez-vous le bord de mer du Cros ?", a: "Oui, stationnement et créneaux réservés malgré l'animation du front de mer." }
    ],
    nearby: ["saint-laurent-du-var", "nice", "antibes"]
  },
  "le-cannet": {
    name: "Le Cannet", file: "Demenagement-Le-Cannet.html", cp: "06110", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement au Cannet : Rocheville, vieux village, hauteurs de Cannes. Devis gratuit sous 24h.",
    intro: "Le Cannet, sur les hauteurs de Cannes, mêle vieux village pittoresque (cher à Bonnard), quartier vivant de Rocheville et résidences modernes à flanc de colline. On gère les rues pentues et les accès résidentiels avec le bon matériel.",
    quartiers: ["Rocheville", "Le Vieux Cannet", "Les Tourrades", "La Croix des Gardes", "L'Aubarède", "Le Cannet Centre", "Garibondy"],
    specifics: [
      { t: "Hauteurs et pentes", d: "Camions adaptés aux rues en pente et virages serrés des collines cannettanes." },
      { t: "Proximité Cannes", d: "Déménagements Le Cannet–Cannes réglés en une demi-journée." },
      { t: "Vieux village", d: "Portage et stationnement maîtrisés dans les ruelles du Cannet historique." }
    ],
    deep: [
      { t: "Une ville en balcon sur Cannes", p: "Le Cannet domine la baie : ses quartiers s'étagent à flanc de colline, entre rues pentues et virages serrés. On choisit le bon gabarit de camion et, quand l'accès se resserre, on fait la navette avec un véhicule plus maniable." },
      { t: "Vie de quartier et résidences", p: "De l'animation de Rocheville aux résidences calmes des hauteurs, Le Cannet est une ville résidentielle prisée. On y déménage familles et retraités, en coordination avec les syndics des copropriétés." }
    ],
    faq: [
      { q: "Les rues en pente posent-elles problème ?", a: "Non, nos chauffeurs y sont habitués ; on adapte le camion et, si besoin, on transborde avec un véhicule plus petit." },
      { q: "Un Le Cannet–Cannes, ça prend combien de temps ?", a: "Souvent une demi-journée pour un volume courant : les deux villes se touchent." },
      { q: "Intervenez-vous dans le vieux village ?", a: "Oui, avec portage et stationnement réservé dans les ruelles pittoresques." }
    ],
    nearby: ["cannes", "mandelieu", "grasse"]
  },
  "saint-laurent-du-var": {
    name: "Saint-Laurent-du-Var", file: "Demenagement-Saint-Laurent-du-Var.html", cp: "06700", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Saint-Laurent-du-Var : bord du Var, Cap 3000, centre. Devis gratuit sous 24h.",
    intro: "Entre l'embouchure du Var, le centre commercial Cap 3000, le port et les résidences du bord de mer, Saint-Laurent-du-Var est un carrefour que l'on connaît parfaitement, à deux pas de notre base niçoise.",
    quartiers: ["Centre-ville", "Les Pugets", "Tzanteleïna", "Bord de mer", "Le Point du Jour", "Les Vespins", "La Gare", "Montaleigne"],
    specifics: [
      { t: "À deux pas de Nice", d: "Intervention rapide depuis notre base, idéale pour les petits volumes et les déménagements express." },
      { t: "Résidences et commerces", d: "Déménagements de bureaux et locaux (zone Cap 3000) gérés en horaires décalés." },
      { t: "Bord de mer et port", d: "Stationnement et accès résidences du littoral coordonnés en amont." }
    ],
    deep: [
      { t: "Le carrefour de la métropole", p: "Coincée entre Nice, Cagnes et l'aéroport, Saint-Laurent-du-Var est un nœud résidentiel et commercial. On y intervient très vite — c'est quasiment notre arrière-cour — pour les particuliers comme pour les commerces de la zone Cap 3000." },
      { t: "Du Var au front de mer", p: "Quartiers pavillonnaires des Pugets, immeubles du centre, résidences du bord de mer : on adapte le déménagement à chaque configuration, avec coordination des syndics quand il le faut." }
    ],
    faq: [
      { q: "Êtes-vous rapides à Saint-Laurent-du-Var ?", a: "Très : on est basés juste à côté, à Nice. Idéal pour un déménagement local en quelques heures." },
      { q: "Déménagez-vous les commerces de Cap 3000 ?", a: "Oui, en horaires décalés pour ne pas perturber l'activité, avec interlocuteur unique." },
      { q: "Gérez-vous le stationnement en centre ?", a: "Oui, réservation d'emplacement et coordination avec les copropriétés." }
    ],
    nearby: ["nice", "cagnes-sur-mer", "cannes"]
  },
  "mandelieu": {
    name: "Mandelieu-la-Napoule", file: "Demenagement-Mandelieu.html", cp: "06210", dept: "Alpes-Maritimes (06)", region: "cote",
    lede: "Déménagement à Mandelieu-la-Napoule : La Napoule, port, Capitou. Devis gratuit sous 24h.",
    intro: "Entre le port de plaisance, le château de La Napoule, les golfs et les hauteurs boisées du Capitou, Mandelieu marie bord de mer et collines. On y déménage particuliers, résidences principales et secondaires toute l'année.",
    quartiers: ["La Napoule", "Capitou", "Cottage", "Les Termes", "Minelle", "Le Centre", "La Siagne", "Les Marines"],
    specifics: [
      { t: "Port et marinas", d: "Accès quais et résidences portuaires (Les Marines, Cannes-Marina) organisés en amont." },
      { t: "Résidences secondaires", d: "Mises en garde-meuble et déménagements saisonniers gérés sans accroc." },
      { t: "Hauteurs du Capitou", d: "Maisons en colline et accès en lacets anticipés dès le devis." }
    ],
    deep: [
      { t: "Mer, golf et collines", p: "Mandelieu se vit entre l'eau et les hauteurs : marinas de La Napoule, villas du bord de Siagne, maisons perchées du Capitou. On dimensionne le camion à chaque accès, des quais aux chemins de colline." },
      { t: "La capitale de la résidence secondaire", p: "Beaucoup de biens mandolociens sont des résidences secondaires : on est rodés aux ouvertures/fermetures de saison, aux mises en garde-meuble et aux déménagements partiels coordonnés à distance." }
    ],
    faq: [
      { q: "Déménagez-vous les résidences des marinas ?", a: "Oui, on coordonne accès quais, gardiens et créneaux des résidences portuaires en amont." },
      { q: "Gérez-vous les résidences secondaires ?", a: "C'est une spécialité locale : ouvertures de saison, garde-meuble et déménagements partiels organisés, même à distance." },
      { q: "Et les maisons du Capitou en hauteur ?", a: "Accès en lacets anticipés ; on adapte le véhicule et, si besoin, on transborde." }
    ],
    nearby: ["cannes", "le-cannet", "grasse"]
  }
};

function getCity(slug) {
  return CITIES[slug] || CITIES["nice"];
}

Object.assign(window, { CITIES, getCity });
