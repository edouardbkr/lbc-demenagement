// route-data.jsx — Pages "trajet" (corridors longue distance & international). Clé = data-route.
const ROUTES = {
  "nice-paris": {
    from: "Nice", to: "Paris", file: "Demenagement-Nice-Paris.html", km: "930 km", duree: "≈ 9 h de route", pays: "France",
    lede: "Déménagement Nice → Paris : la liaison longue distance que l'on assure le plus souvent. Camion dédié, devis sous 24h.",
    intro: "Quitter la Méditerranée pour la capitale, c'est notre trajet phare. On charge sur la Côte d'Azur et on livre dans Paris intra-muros ou en proche couronne, avec une seule équipe du départ à l'arrivée — pas de groupage, pas de transbordement.",
    points: [
      { t: "Stationnement parisien", d: "Autorisation de voirie demandée en amont auprès de la Ville de Paris, emplacement réservé devant l'immeuble." },
      { t: "Immeubles haussmanniens", d: "Étages élevés sans ascenseur ou cages exiguës : on prévoit le monte-meuble par la façade dès le devis." },
      { t: "Trajet direct & plombé", d: "Camion dédié à votre seul chargement, scellé au départ de Nice, livré en une traite." }
    ],
    faq: [
      { q: "Combien de temps dure un Nice–Paris ?", a: "Le transport prend une journée (≈ 930 km). On annonce une fenêtre de livraison claire et on s'y tient." },
      { q: "Gérez-vous le monte-meuble à Paris ?", a: "Oui, indispensable dans beaucoup d'immeubles haussmanniens. Il est chiffré dès le devis, jamais en surprise." },
      { q: "Puis-je stocker entre les deux ?", a: "Oui, garde-meuble relais possible si vos dates de départ et d'arrivée ne coïncident pas." }
    ]
  },
  "nice-lyon": {
    from: "Nice", to: "Lyon", file: "Demenagement-Nice-Lyon.html", km: "470 km", duree: "≈ 5 h de route", pays: "France",
    lede: "Déménagement Nice → Lyon : l'étape rhodanienne, à mi-chemin de la France. Devis gratuit sous 24h.",
    intro: "Entre la Méditerranée et le nord, Lyon est l'une de nos liaisons régulières. Pentes de la Croix-Rousse, traboules, immeubles anciens du Vieux Lyon : on s'adapte à la ville aux deux collines.",
    points: [
      { t: "Pentes & traboules", d: "Portage adapté aux immeubles anciens de la Croix-Rousse et aux accès étroits du Vieux Lyon." },
      { t: "Demi-journée de route", d: "≈ 470 km : chargement le matin à Nice, livraison possible le lendemain à Lyon." },
      { t: "Presqu'île dense", d: "Stationnement réservé et créneaux maîtrisés dans l'hypercentre lyonnais." }
    ],
    faq: [
      { q: "En combien de temps livrez-vous à Lyon ?", a: "Le trajet fait ≈ 470 km ; on cale une fenêtre de livraison précise dès le devis." },
      { q: "Gérez-vous les traboules et la Croix-Rousse ?", a: "Oui, portage adapté et, si besoin, monte-meuble pour les immeubles anciens en pente." },
      { q: "Et le stationnement en Presqu'île ?", a: "On réserve l'emplacement au plus près et on gère les créneaux de l'hypercentre." }
    ]
  },
  "nice-marseille": {
    from: "Nice", to: "Marseille", file: "Demenagement-Nice-Marseille.html", km: "200 km", duree: "≈ 2 h de route", pays: "France",
    lede: "Déménagement Nice → Marseille : la cité phocéenne à deux heures. Devis gratuit sous 24h.",
    intro: "À deux heures de Nice, Marseille est une destination quasi quotidienne. Du Vieux-Port aux quartiers en pente, on connaît les contraintes de stationnement et d'accès de la deuxième ville de France.",
    points: [
      { t: "Trajet court & fréquent", d: "≈ 200 km : on intervient vite, idéal pour tous volumes et même les petites surfaces." },
      { t: "Centre dense", d: "Stationnement et portage du Panier, de Castellane ou de la Joliette anticipés." },
      { t: "Tous quartiers", d: "Du Vieux-Port aux collines, on adapte le camion aux ruelles et aux pentes marseillaises." }
    ],
    faq: [
      { q: "Un Nice–Marseille, c'est rapide ?", a: "Oui, ≈ 2 h de route : souvent réalisable dans la journée selon le volume." },
      { q: "Gérez-vous le centre de Marseille ?", a: "Oui, stationnement réservé et portage adaptés aux ruelles du Panier et à l'hypercentre." },
      { q: "Petits volumes acceptés ?", a: "Bien sûr : la distance courte rend le trajet économique même pour un studio." }
    ]
  },
  "nice-toulouse": {
    from: "Nice", to: "Toulouse", file: "Demenagement-Nice-Toulouse.html", km: "560 km", duree: "≈ 6 h de route", pays: "France",
    lede: "Déménagement Nice → Toulouse : cap sur la ville rose. Camion dédié, devis gratuit sous 24h.",
    intro: "On assure régulièrement la liaison Nice–Toulouse. Centre historique en brique, rues étroites autour du Capitole, résidences récentes des quartiers périphériques : votre déménagement est pris en charge de A à Z.",
    points: [
      { t: "Centre en brique", d: "Stationnement et portage du Capitole, des Carmes et de Saint-Cyprien gérés en amont." },
      { t: "Une seule équipe", d: "Les mêmes déménageurs sur les ≈ 560 km, du chargement niçois à la livraison toulousaine." },
      { t: "Trajet optimisé", d: "Itinéraire et planning calés pour tenir la fenêtre de livraison annoncée." }
    ],
    faq: [
      { q: "Combien de temps pour un Nice–Toulouse ?", a: "≈ 560 km, soit une bonne journée de route ; fenêtre de livraison annoncée au devis." },
      { q: "Gérez-vous le centre historique toulousain ?", a: "Oui, stationnement réservé et portage adaptés aux rues étroites du centre en brique." },
      { q: "Le devis inclut-il le transport ?", a: "Oui, tout est compris et ferme : aucun supplément kilométrique surprise." }
    ]
  },
  "nice-bordeaux": {
    from: "Nice", to: "Bordeaux", file: "Demenagement-Nice-Bordeaux.html", km: "800 km", duree: "≈ 8 h de route", pays: "France",
    lede: "Déménagement Nice → Bordeaux : la grande traversée du sud. Devis gratuit sous 24h.",
    intro: "Relier Nice à Bordeaux, c'est traverser tout le sud de la France. On organise ce déménagement longue distance avec un trajet optimisé et un mobilier protégé jusqu'au cœur des échoppes bordelaises.",
    points: [
      { t: "Grande distance maîtrisée", d: "≈ 800 km : itinéraire optimisé, camion dédié, délais garantis." },
      { t: "Échoppes & centre", d: "Accès aux maisons de ville, rues étroites des Chartrons et de Saint-Michel anticipés." },
      { t: "Protection longue route", d: "Calage et arrimage renforcés : rien ne bouge sur les 800 km." }
    ],
    faq: [
      { q: "Combien de jours pour un Nice–Bordeaux ?", a: "Le transport demande une journée complète (≈ 800 km) ; on annonce une fenêtre précise." },
      { q: "Gérez-vous les échoppes bordelaises ?", a: "Oui, accès aux maisons de ville et rues étroites anticipés dès le devis." },
      { q: "Garde-meuble possible ?", a: "Oui, en box sécurisé si les dates de départ et d'arrivée ne coïncident pas." }
    ]
  },
  "nice-geneve": {
    from: "Nice", to: "Genève", file: "Demenagement-Nice-Geneve.html", km: "470 km", duree: "≈ 5 h de route", pays: "Suisse", intl: true,
    lede: "Déménagement Nice → Genève : international maîtrisé, formalités comprises. Devis gratuit sous 24h.",
    intro: "Cap sur la Suisse : on relie régulièrement Nice et Genève. Passage de frontière, formalités douanières et accès des immeubles genevois : on gère l'ensemble pour un déménagement international sans accroc.",
    points: [
      { t: "Formalités douanières", d: "Inventaire valorisé et documents de douane préparés pour un passage de frontière fluide." },
      { t: "Trajet transalpin", d: "≈ 470 km via la vallée du Rhône : camion dédié, mobilier protégé tout du long." },
      { t: "Accès genevois", d: "Stationnement et créneaux d'immeubles du centre et des organisations internationales gérés." }
    ],
    faq: [
      { q: "Quelles formalités pour la Suisse ?", a: "Un inventaire détaillé et valorisé pour la douane ; on prépare les documents et on vous guide pas à pas." },
      { q: "Combien de temps de route ?", a: "≈ 470 km, soit une demi-journée à une journée selon la frontière et le déchargement." },
      { q: "Gérez-vous les expatriés / fonctionnaires internationaux ?", a: "Oui, c'est fréquent à Genève : devis conforme et coordination avec votre employeur si besoin." }
    ]
  },
  "nice-lausanne": {
    from: "Nice", to: "Lausanne", file: "Demenagement-Nice-Lausanne.html", km: "530 km", duree: "≈ 5 h 30 de route", pays: "Suisse", intl: true,
    lede: "Déménagement Nice → Lausanne : Suisse romande, bord du Léman. Devis gratuit, formalités incluses.",
    intro: "Au bord du Léman, Lausanne est une destination internationale régulière. On organise le passage de frontière, les formalités et l'accès aux immeubles lausannois, souvent en pente.",
    points: [
      { t: "Douane & inventaire", d: "Documents douaniers et inventaire valorisé préparés pour l'entrée en Suisse." },
      { t: "Ville en pente", d: "Lausanne grimpe : portage adapté et monte-meuble pour les immeubles en dénivelé." },
      { t: "Camion dédié", d: "≈ 530 km parcourus par une seule équipe, sans transbordement." }
    ],
    faq: [
      { q: "Faut-il des papiers pour la Suisse ?", a: "Oui : inventaire valorisé et documents de douane, qu'on prépare avec vous avant le départ." },
      { q: "Lausanne est en pente, est-ce un souci ?", a: "Non, on prévoit portage et monte-meuble adaptés au dénivelé dès le devis." },
      { q: "Le prix est-il ferme malgré la frontière ?", a: "Oui, le devis est détaillé et définitif, formalités comprises." }
    ]
  },
  "nice-bruxelles": {
    from: "Nice", to: "Bruxelles", file: "Demenagement-Nice-Bruxelles.html", km: "1 150 km", duree: "≈ 11 h de route", pays: "Belgique", intl: true,
    lede: "Déménagement Nice → Bruxelles : longue distance européenne. Une seule équipe, devis gratuit sous 24h.",
    intro: "Du soleil méditerranéen au cœur de l'Europe : on assure le Nice–Bruxelles de bout en bout. Maisons de maître à étages, rues étroites et stationnement réglementé de la capitale belge : on connaît.",
    points: [
      { t: "Longue distance européenne", d: "≈ 1 150 km : trajet planifié, camion dédié, mobilier arrimé pour la route." },
      { t: "Maisons bruxelloises", d: "Escaliers raides et étroits typiques : monte-meuble prévu pour les volumes." },
      { t: "Union européenne", d: "Pas de douane à proprement parler, mais inventaire et logistique soignés pour la traversée." }
    ],
    faq: [
      { q: "Y a-t-il des formalités pour la Belgique ?", a: "Au sein de l'UE, pas de douane : on fournit un inventaire détaillé et on gère toute la logistique." },
      { q: "Combien de temps de trajet ?", a: "≈ 1 150 km : le transport demande une à deux journées selon le déchargement." },
      { q: "Gérez-vous les maisons à escaliers étroits ?", a: "Oui, c'est typique de Bruxelles : monte-meuble et portage adaptés, prévus au devis." }
    ]
  },
  "nice-luxembourg": {
    from: "Nice", to: "Luxembourg", file: "Demenagement-Nice-Luxembourg.html", km: "920 km", duree: "≈ 9 h de route", pays: "Luxembourg", intl: true,
    lede: "Déménagement Nice → Luxembourg : mobilité internationale et professionnelle. Devis gratuit sous 24h.",
    intro: "Beaucoup de déménagements Nice–Luxembourg sont liés à une mutation ou une expatriation professionnelle. On fournit un devis conforme et on gère tout le trajet européen, du chargement à l'installation.",
    points: [
      { t: "Mobilité professionnelle", d: "Devis conforme pour votre employeur ou service RH, facture en règle pour le remboursement." },
      { t: "Trajet européen", d: "≈ 920 km : une seule équipe, camion dédié, délais tenus." },
      { t: "Union européenne", d: "Pas de douane : inventaire soigné et logistique calée pour la traversée." }
    ],
    faq: [
      { q: "C'est souvent une mutation, vous gérez ?", a: "Oui : devis conforme à transmettre à votre employeur, coordination avec votre prise de poste." },
      { q: "Des formalités douanières ?", a: "Non, le Luxembourg est dans l'UE : inventaire détaillé suffisant, on s'occupe de tout." },
      { q: "Garde-meuble possible des deux côtés ?", a: "Oui, en relais, si votre logement luxembourgeois n'est pas encore disponible." }
    ]
  },
  "nice-barcelone": {
    from: "Nice", to: "Barcelone", file: "Demenagement-Nice-Barcelone.html", km: "660 km", duree: "≈ 6 h 30 de route", pays: "Espagne", intl: true,
    lede: "Déménagement Nice → Barcelone : la Méditerranée d'une côte à l'autre. Devis gratuit sous 24h.",
    intro: "Le long de la Méditerranée, Nice–Barcelone est un trajet international que l'on affectionne. Immeubles de l'Eixample, ruelles du Gòtic, ascenseurs minuscules : on connaît les contraintes catalanes.",
    points: [
      { t: "Eixample & Gòtic", d: "Cages d'ascenseur minuscules et ruelles médiévales : monte-meuble prévu pour les gros volumes." },
      { t: "Côte méditerranéenne", d: "≈ 660 km le long de la mer : trajet fluide, mobilier protégé tout du long." },
      { t: "Union européenne", d: "Pas de douane : inventaire détaillé et logistique soignée jusqu'en Catalogne." }
    ],
    faq: [
      { q: "Des formalités pour l'Espagne ?", a: "Non, pays de l'UE : on fournit un inventaire détaillé et on gère toute la logistique." },
      { q: "Les ascenseurs barcelonais sont petits…", a: "Exact : on prévoit le monte-meuble dès le devis pour les meubles qui ne passent pas." },
      { q: "Combien de temps de route ?", a: "≈ 660 km le long de la côte, soit une bonne journée jusqu'à Barcelone." }
    ]
  },
  "nice-madrid": {
    from: "Nice", to: "Madrid", file: "Demenagement-Nice-Madrid.html", km: "1 280 km", duree: "≈ 13 h de route", pays: "Espagne", intl: true,
    lede: "Déménagement Nice → Madrid : grande traversée vers la capitale espagnole. Devis gratuit sous 24h.",
    intro: "Direction le centre de l'Espagne : Nice–Madrid est un déménagement international au long cours. On planifie le trajet, on protège tout pour la route et on livre jusqu'au cœur de la capitale.",
    points: [
      { t: "Très longue distance", d: "≈ 1 280 km : trajet planifié, camion dédié, arrimage renforcé pour la durée." },
      { t: "Centre madrilène", d: "Stationnement et accès des immeubles de Centro, Salamanca ou Chamberí anticipés." },
      { t: "Union européenne", d: "Pas de douane : inventaire détaillé et logistique calée jusqu'à Madrid." }
    ],
    faq: [
      { q: "Combien de jours pour un Nice–Madrid ?", a: "≈ 1 280 km : comptez une à deux journées de transport selon le déchargement." },
      { q: "Des papiers de douane ?", a: "Non, l'Espagne est dans l'UE : un inventaire détaillé suffit, on s'en occupe." },
      { q: "Le mobilier est-il assuré sur tout le trajet ?", a: "Oui, assurance incluse du chargement à la livraison, sur l'intégralité du parcours." }
    ]
  },
  "nice-milan": {
    from: "Nice", to: "Milan", file: "Demenagement-Nice-Milan.html", km: "320 km", duree: "≈ 3 h 30 de route", pays: "Italie", intl: true,
    lede: "Déménagement Nice → Milan : l'Italie voisine, à portée de camion. Devis gratuit sous 24h.",
    intro: "L'Italie du nord est juste de l'autre côté de la frontière. Nice–Milan est un trajet international court et fréquent : on charge sur la côte et on livre dans la capitale lombarde en une journée.",
    points: [
      { t: "Frontière voisine", d: "≈ 320 km via la Riviera : trajet court, souvent réalisable dans la journée." },
      { t: "Cours intérieures milanaises", d: "Immeubles à cortile et ascenseurs étroits : portage et monte-meuble anticipés." },
      { t: "Union européenne", d: "Pas de douane : inventaire détaillé et logistique soignée jusqu'à Milan." }
    ],
    faq: [
      { q: "Un Nice–Milan se fait en une journée ?", a: "Souvent oui : ≈ 320 km, frontière voisine. Chargement et livraison rapprochés." },
      { q: "Des formalités pour l'Italie ?", a: "Non, pays de l'UE : un inventaire détaillé suffit, on gère le reste." },
      { q: "Gérez-vous les cours d'immeubles milanaises ?", a: "Oui, portage et monte-meuble adaptés aux cortile et ascenseurs étroits." }
    ]
  },
  "nice-turin": {
    from: "Nice", to: "Turin", file: "Demenagement-Nice-Turin.html", km: "230 km", duree: "≈ 2 h 45 de route", pays: "Italie", intl: true,
    lede: "Déménagement Nice → Turin : le Piémont par la montagne, devis gratuit sous 24h.",
    intro: "Turin, capitale du Piémont, est l'une de nos destinations italiennes les plus proches. On franchit la frontière par la vallée et on livre dans la cité savoyarde en quelques heures.",
    points: [
      { t: "Trajet par la montagne", d: "≈ 230 km via le col ou le tunnel : chauffeurs habitués au passage transfrontalier." },
      { t: "Immeubles turinois", d: "Bâtisses anciennes à hauts plafonds et cages étroites : monte-meuble prévu si besoin." },
      { t: "Union européenne", d: "Pas de douane : inventaire détaillé et logistique calée jusqu'à Turin." }
    ],
    faq: [
      { q: "Combien de temps pour un Nice–Turin ?", a: "≈ 230 km, soit environ 3 h de route : souvent réalisable dans la journée." },
      { q: "Des formalités douanières ?", a: "Non, l'Italie est dans l'UE : inventaire détaillé suffisant, on s'occupe de tout." },
      { q: "La montagne complique-t-elle le trajet ?", a: "Non, nos chauffeurs connaissent le passage transfrontalier ; on cale le planning en conséquence." }
    ]
  }
};

function getRoute(slug) {
  return ROUTES[slug] || ROUTES["nice-paris"];
}

Object.assign(window, { ROUTES, getRoute });
