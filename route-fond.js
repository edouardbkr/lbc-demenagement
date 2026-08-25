/* route-fond.jsx — compilé par build.js, ne pas éditer */
(function () {
const ROUTE_FOND = {
  "nice-paris": {
    titreContexte: ["Six cents kilomètres,", "et une arrivée qui se prépare."],
    titreEtapes: ["Un Nice-Paris,", "de la veille au lendemain."],
    titreErreurs: ["Ce qui rate", "sur un déménagement vers Paris."],
    contexte: "Nice-Paris est notre trajet longue distance le plus demandé, et paradoxalement celui où la route est le moindre problème. L'autoroute se fait en une journée de conduite avec les temps de repos réglementaires. La difficulté est à l'arrivée : Paris est la ville de France où stationner un camion de déménagement est le plus contraint, et où les immeubles sont le plus souvent inaccessibles à autre chose qu'un monte-meuble.",
    sections: [{
      t: "Le stationnement parisien, à demander des semaines avant",
      d: "Paris impose une demande d'autorisation d'occupation temporaire de la voie publique pour stationner un véhicule de déménagement, avec un délai d'instruction qui se compte en semaines et non en jours. La demande précise l'adresse, la longueur du véhicule, la date et la plage horaire. Sans arrêté et sans les panneaux posés à l'avance, l'emplacement n'est pas garanti et le camion se retrouve en double file dans une rue où il bloque tout. Nous engageons cette démarche dès que la date est arrêtée, parce que c'est le poste qui conditionne toute la journée d'arrivée et qu'il ne se rattrape pas."
    }, {
      t: "L'immeuble haussmannien et son ascenseur",
      d: "Une grande partie du parc parisien est constituée d'immeubles anciens dont l'ascenseur, quand il existe, a été ajouté dans la cage d'escalier : cabine étroite, portes battantes, charge limitée. Il prend des cartons, pas un canapé ni une armoire. À cela s'ajoutent des escaliers en colimaçon, des paliers courts et un règlement de copropriété qui impose souvent créneau et protection des communs. Nous demandons les cotes de la cabine et de la cage avant le devis, et nous décidons alors entre portage et monte-meuble plutôt que de l'improviser sur place."
    }, {
      t: "Le monte-meuble, souvent indispensable",
      d: "À Paris, le monte-meuble est fréquemment la seule solution pour les volumineux. Il exige trois conditions : une largeur de trottoir suffisante, une façade dégagée face à l'ouverture visée, et une autorisation d'occupation du domaine public qui se demande en même temps que le stationnement. Nous vérifions les trois avant le devis et nous annonçons le coût dès le départ. Découvrir sur place que le monte-meuble n'est pas posable, c'est transformer une journée de livraison en deux."
    }, {
      t: "Camion dédié, pas groupage",
      d: "Sur cette distance, beaucoup d'opérateurs pratiquent le groupage : vos affaires attendent que le camion se remplisse avec celles d'autres clients, puis transitent par une ou plusieurs plateformes. Cela réduit le prix et multiplie les manipulations, donc les risques, et rend la date d'arrivée approximative. Nous travaillons en camion dédié : une seule équipe du chargement à la livraison, aucun transbordement, et une date d'arrivée ferme. C'est plus cher au départ et cela évite les mauvaises surprises."
    }],
    etapes: [{
      h: "J-30",
      t: "Dépôt de la demande de stationnement à Paris, avec la longueur du véhicule et la plage horaire."
    }, {
      h: "J-7",
      t: "Confirmation de l'arrêté, réservation du monte-meuble, prise de contact avec le syndic parisien."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, calage et sanglage pour la route, départ en fin de matinée."
    }, {
      h: "Jour 2",
      t: "Livraison à Paris sur l'emplacement réservé, remontage et état des lieux des communs."
    }],
    erreurs: [{
      t: "Demander le stationnement trop tard",
      d: "L'instruction parisienne se compte en semaines. Sans arrêté, le camion n'a nulle part où se mettre et la journée est perdue."
    }, {
      t: "Compter sur l'ascenseur haussmannien",
      d: "Il accepte les cartons et refuse le mobilier. Les cotes se relèvent avant, sinon le monte-meuble se décide dans l'urgence."
    }, {
      t: "Choisir le groupage pour économiser",
      d: "Deux à trois manipulations supplémentaires et une date d'arrivée approximative. L'économie se paie en casse et en attente."
    }]
  },
  "nice-lyon": {
    titreContexte: ["Quatre cents kilomètres,", "et une ville à deux niveaux."],
    titreEtapes: ["Un Nice-Lyon,", "souvent bouclé en deux jours."],
    titreErreurs: ["Les pièges lyonnais", "qu'on ne voit pas depuis Nice."],
    contexte: "Nice-Lyon se fait par la vallée du Rhône, sur un axe qui supporte un trafic considérable et qui sature aux périodes de départs et de retours. La distance permet souvent de charger et de livrer sur deux journées consécutives. À l'arrivée, Lyon pose sa propre question : la ville est bâtie sur deux collines et une presqu'île, et l'adresse détermine tout.",
    sections: [{
      t: "La vallée du Rhône et ses saturations",
      d: "L'axe qui relie Nice à Lyon supporte un trafic de transit européen et se sature à dates connues : week-ends de départs, retours de vacances, jours fériés. Un camion de déménagement bloqué trois heures dans la vallée arrive hors du créneau réservé à l'arrivée, ce qui remet en cause toute l'organisation de la livraison. Nous calons les départs en dehors de ces périodes quand la date le permet, et nous prévoyons systématiquement une marge sur l'heure d'arrivée annoncée plutôt que de promettre une précision que la route ne permet pas de tenir."
    }, {
      t: "La Croix-Rousse et ses pentes",
      d: "Les pentes de la Croix-Rousse comptent parmi les adresses les plus exigeantes de Lyon : rues étroites en forte déclivité, immeubles hauts de canuts avec des plafonds démesurés et des escaliers étroits, cours intérieures fermées. Certains meubles conçus pour ces volumes ne sortent pas par l'escalier. Nous demandons les cotes de la cage et des ouvertures avant le devis, et nous vérifions la déclivité de la rue, qui conditionne la possibilité même de caler un camion en sécurité."
    }, {
      t: "La Presqu'île et le stationnement contraint",
      d: "Entre Rhône et Saône, la Presqu'île concentre commerces, bureaux et logements anciens, avec une circulation dense et un stationnement très encadré. L'autorisation d'occupation se demande à l'avance auprès de la ville, et certains axes ne sont accessibles qu'en dehors de plages horaires précises. Nous préparons ces demandes dès la date arrêtée. C'est un secteur où arriver sans emplacement réservé signifie tourner, et où tourner avec un porteur chargé n'est pas une option."
    }, {
      t: "Une livraison sur deux jours",
      d: "La distance autorise un schéma en deux temps confortable : chargement complet à Nice dans la journée, route et repos réglementaire, livraison le lendemain matin à Lyon. Cela permet d'arriver en début de créneau plutôt qu'en fin de journée fatiguée, ce qui change la qualité du remontage. Nous privilégions ce schéma et nous l'annonçons au devis, avec la date de livraison ferme qui va avec."
    }],
    etapes: [{
      h: "J-15",
      t: "Demande d'autorisation de stationnement à Lyon, adaptée au secteur concerné."
    }, {
      h: "J-3",
      t: "Vérification des cotes de cage d'escalier et de la déclivité de la rue à l'arrivée."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, calage pour la route, départ hors des créneaux de saturation."
    }, {
      h: "Jour 2",
      t: "Livraison lyonnaise en début de matinée, remontage à l'équipe reposée."
    }],
    erreurs: [{
      t: "Partir un vendredi de chassé-croisé",
      d: "La vallée du Rhône se bloque à dates connues. Trois heures perdues sur la route font manquer le créneau d'arrivée."
    }, {
      t: "Sous-estimer les pentes de la Croix-Rousse",
      d: "Rues en déclivité et escaliers de canuts : caler un camion et sortir un meuble n'y vont pas de soi. Cela se vérifie avant."
    }, {
      t: "Livrer en fin de journée",
      d: "Après six heures de route, un remontage se fait moins bien. Le schéma sur deux jours coûte peu et change le résultat."
    }]
  },
  "nice-marseille": {
    titreContexte: ["Deux cents kilomètres,", "le plus court de nos longs trajets."],
    titreEtapes: ["Un Nice-Marseille,", "bouclé dans la journée."],
    titreErreurs: ["Ce que la proximité", "fait oublier."],
    contexte: "Nice-Marseille est le seul de nos trajets longue distance qui se boucle dans la journée : chargement le matin, route, livraison l'après-midi, avec la même équipe du début à la fin. Cette proximité est un avantage réel sur le prix et sur le risque. Elle a aussi un effet pervers : elle fait croire que le chantier est simple, alors que Marseille pose des contraintes d'accès parmi les plus fortes de la région.",
    sections: [{
      t: "Un aller-retour dans la journée",
      d: "Deux cents kilomètres d'autoroute permettent de charger à Nice en matinée et de livrer à Marseille l'après-midi, sans nuit intermédiaire et sans stockage. Une seule équipe traite le chantier de bout en bout, ce qui supprime toute manipulation supplémentaire et rend la date d'arrivée certaine à l'heure près. C'est le format que nous recommandons systématiquement sur cette destination : il coûte moins cher qu'un schéma sur deux jours et réduit les risques, puisque le mobilier n'est déchargé qu'une seule fois."
    }, {
      t: "Les collines et les rues en pente",
      d: "Marseille est bâtie sur des collines, et une grande partie des quartiers résidentiels se trouvent sur des versants desservis par des rues étroites et pentues, avec des accès privatifs parfois en escalier. Le gabarit du véhicule et la possibilité de faire demi-tour se vérifient avant. Comme sur les hauteurs niçoises, monter est rarement le problème, redescendre chargé sur une voie étroite l'est souvent. Nous relevons l'itinéraire complet à l'arrivée, pas seulement l'adresse."
    }, {
      t: "Le centre ancien et ses contraintes",
      d: "Le Panier et les quartiers anciens du centre présentent des ruelles étroites, des escaliers et des zones à circulation restreinte où un porteur n'entre pas. On y travaille en rupture de charge, avec une navette en utilitaire depuis un point de stationnement obtenu à l'avance. Le stationnement marseillais se demande auprès de la ville, avec la longueur du véhicule et la plage horaire, et l'anticipation vaut ici autant qu'ailleurs même si la distance est courte."
    }, {
      t: "La même équipe aux deux bouts",
      d: "Sur ce trajet, l'équipe qui emballe est celle qui remonte. Cela paraît anecdotique et c'est le facteur qui réduit le plus la casse : les équipiers savent ce qu'ils ont mis dans quel carton, comment un meuble a été démonté, et ce qui est fragile. Sur un groupage avec transbordement, cette continuité disparaît et personne n'est plus responsable de rien entre le départ et l'arrivée."
    }],
    etapes: [{
      h: "J-10",
      t: "Demande de stationnement à Marseille, adaptée au quartier d'arrivée."
    }, {
      h: "7 h 00",
      t: "Chargement à Nice, calage et sanglage pour la route."
    }, {
      h: "12 h 00",
      t: "Route par l'autoroute, avec le temps de pause réglementaire."
    }, {
      h: "14 h 30",
      t: "Livraison marseillaise, remontage par la même équipe, fin de chantier le soir."
    }],
    erreurs: [{
      t: "Croire qu'un trajet court est un chantier facile",
      d: "Les collines marseillaises et le centre ancien posent des contraintes d'accès aussi fortes qu'à Nice. La distance ne dit rien de la difficulté."
    }, {
      t: "Négliger l'autorisation parce que c'est proche",
      d: "Le stationnement marseillais se demande comme ailleurs. Deux cents kilomètres ne dispensent d'aucune démarche."
    }, {
      t: "Accepter un transbordement sur 200 km",
      d: "Sur cette distance, le camion dédié est la norme. Un groupage n'a aucune justification et multiplie les manipulations."
    }]
  },
  "nice-toulouse": {
    titreContexte: ["Cinq cents kilomètres par le Languedoc,", "et une ville qui s'étale."],
    titreEtapes: ["Un Nice-Toulouse,", "en deux journées."],
    titreErreurs: ["Ce qu'on découvre", "en arrivant à Toulouse."],
    contexte: "Nice-Toulouse se fait par le littoral languedocien puis l'autoroute des Deux Mers, sur un axe moins saturé que la vallée du Rhône mais plus long qu'il n'y paraît. À l'arrivée, Toulouse est une ville étalée, où l'habitat individuel domine largement dès qu'on quitte le centre, ce qui change complètement la nature du chantier de livraison.",
    sections: [{
      t: "Une ville d'habitat individuel",
      d: "Contrairement à Paris ou Lyon, Toulouse et sa périphérie sont dominées par la maison individuelle, souvent avec jardin, garage et dépendances. Cela signifie des volumes à la livraison supérieurs à ce que laisse penser une surface habitable, et un accès généralement bien plus simple : allée, portail, place devant la maison. Le point à vérifier n'est pas l'ascenseur mais la largeur du portail, la pente d'attaque et la nature du sol, qui peut être meuble après une période de pluie. Nous demandons ces éléments avant le devis."
    }, {
      t: "Le centre en brique et ses immeubles anciens",
      d: "Le cœur toulousain est fait d'immeubles anciens en brique, avec des cages d'escalier étroites, des paliers courts et rarement un ascenseur adapté au mobilier. Les rues du centre sont étroites et le stationnement contraint, avec des secteurs à circulation limitée. Pour ces adresses, l'autorisation se demande à l'avance et le monte-meuble est souvent la meilleure solution quand la rue offre l'emprise nécessaire."
    }, {
      t: "La chaleur, un paramètre réel l'été",
      d: "Toulouse connaît en été des températures nettement supérieures à celles du littoral, et un camion à l'arrêt en plein soleil devient un four. Cela concerne le mobilier sensible, les bougies et cosmétiques, les instruments, l'électronique et les disques. Nous calons les livraisons estivales sur la matinée, nous évitons les stationnements prolongés en plein soleil et nous signalons ce qui ne doit pas rester dans le camion. Ce sont des précautions simples que la distance rend nécessaires."
    }, {
      t: "Deux jours, pour arriver frais",
      d: "Cinq cents kilomètres imposent un schéma en deux temps : chargement complet à Nice, route et repos réglementaire, livraison le lendemain. Nous privilégions une arrivée en début de matinée, quand l'équipe est reposée et que la chaleur n'est pas encore installée. La date de livraison est ferme et figure au devis, sans la fourchette de plusieurs jours qui accompagne les formules de groupage."
    }],
    etapes: [{
      h: "J-15",
      t: "Vérification de l'accès à l'arrivée : portail, pente, sol, ou autorisation si l'adresse est en centre-ville."
    }, {
      h: "J-2",
      t: "Point sur ce qui ne doit pas voyager à la chaleur, mis de côté ou emballé différemment."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, calage pour la route, départ en fin de matinée."
    }, {
      h: "Jour 2",
      t: "Livraison toulousaine en début de matinée, avant la montée des températures."
    }],
    erreurs: [{
      t: "Estimer une maison sur sa surface habitable",
      d: "Garage, jardin et dépendances ajoutent régulièrement un tiers du volume. Cela se relève avant le départ, pas à l'arrivée."
    }, {
      t: "Livrer l'après-midi en plein été",
      d: "Un camion à l'arrêt au soleil dépasse largement les températures acceptables pour une partie du contenu. La matinée s'impose."
    }, {
      t: "Accepter une fourchette d'arrivée",
      d: "Une livraison annoncée « entre le 12 et le 16 » est une formule de groupage. En camion dédié, la date est ferme."
    }]
  },
  "nice-bordeaux": {
    titreContexte: ["Sept cents kilomètres,", "notre plus long trajet national."],
    titreEtapes: ["Un Nice-Bordeaux,", "préparé comme un international."],
    titreErreurs: ["Ce que la distance", "ne pardonne pas."],
    contexte: "Nice-Bordeaux est le plus long de nos trajets à l'intérieur de la France, avec sept cents kilomètres qui traversent tout le sud du pays. Sur cette distance, la préparation compte davantage que sur n'importe quel autre trajet national : ce qui a été oublié au chargement ne se rattrape pas, et un aller-retour pour un carton coûte deux jours.",
    sections: [{
      t: "Une distance qui interdit l'oubli",
      d: "Sept cents kilomètres signifient qu'aucun retour n'est envisageable pour récupérer ce qui aurait été laissé. L'inventaire prend donc une importance particulière : nous listons ce qui part, nous vérifions les caves, greniers, garages et extérieurs avant le chargement, et nous faisons un tour complet du logement avec vous avant de fermer les portes du camion. Ce contrôle final prend un quart d'heure et évite la situation la plus désagréable qui soit, celle où l'on découvre à l'arrivée qu'il manque un carton resté dans une cave."
    }, {
      t: "Les échoppes et le bâti bordelais",
      d: "Bordeaux compte un habitat très particulier, l'échoppe, maison basse de plain-pied ou à un niveau, souvent étroite et profonde, avec un couloir central qui commande toutes les pièces. Ce couloir est la contrainte : les meubles longs y tournent mal et certains ne franchissent pas les angles. À cela s'ajoute le centre ancien, avec ses immeubles en pierre, ses escaliers étroits et son stationnement encadré. Nous demandons la configuration exacte du logement d'arrivée avant le devis, parce qu'une échoppe et un appartement haussmannien ne se livrent pas de la même façon."
    }, {
      t: "Le calage, décisif sur cette distance",
      d: "Plus la route est longue, plus le calage compte. Un chargement mal arrimé bouge pendant sept heures de conduite, et ce sont les vibrations continues qui abîment, pas les freinages. Nous chargeons en respectant la répartition des masses, nous sanglons par rangées, et nous remplissons les vides avec du matériel de protection plutôt que de laisser du jeu. C'est invisible pour le client et c'est ce qui explique la différence d'état du mobilier à l'arrivée."
    }, {
      t: "Un camion dédié, sans exception",
      d: "Sur cette distance, le groupage est la norme du marché et c'est précisément ce qu'il faut éviter. Vos affaires attendraient qu'un camion se remplisse, transiteraient par une plateforme, seraient rechargées, avec une fourchette de livraison de plusieurs jours. Nous fonctionnons en camion dédié et plombé, avec la même équipe du chargement à la livraison et une date ferme. Sur sept cents kilomètres, c'est la seule façon de savoir où sont vos affaires à tout instant."
    }],
    etapes: [{
      h: "J-20",
      t: "Relevé complet, dépendances comprises, et vérification de la configuration du logement d'arrivée."
    }, {
      h: "J-1",
      t: "Emballage terminé, inventaire établi, dernier tour du logement avec vous."
    }, {
      h: "Jour 1",
      t: "Chargement, calage par rangées et sanglage renforcé pour la distance, départ."
    }, {
      h: "Jour 2",
      t: "Livraison bordelaise, remontage et vérification de l'inventaire à l'arrivée."
    }],
    erreurs: [{
      t: "Ne pas faire le tour final du logement",
      d: "Sur sept cents kilomètres, un carton oublié dans une cave est un carton perdu. Le quart d'heure de vérification n'est pas négociable."
    }, {
      t: "Oublier de décrire le logement d'arrivée",
      d: "Une échoppe bordelaise avec couloir central ne se livre pas comme un appartement. Cela conditionne le matériel emporté."
    }, {
      t: "Prendre un groupage sur cette distance",
      d: "Plateforme, rechargement, fourchette de plusieurs jours. C'est là que la casse et les litiges se produisent."
    }]
  },
  "nice-geneve": {
    titreContexte: ["Une frontière hors Union européenne,", "et un dossier qui commande tout."],
    titreEtapes: ["Un Nice-Genève,", "et la douane d'abord."],
    titreErreurs: ["Ce qui bloque un camion", "au poste de douane."],
    contexte: "La Suisse n'appartient pas à l'Union européenne, et c'est le fait central de ce trajet. La route est simple, la logistique aussi, mais un dossier douanier incomplet immobilise le camion au poste avec toutes vos affaires dedans. Sur Nice-Genève, la préparation administrative pèse davantage que la manutention, et c'est elle qui décide si la journée se déroule ou non.",
    sections: [{
      t: "Le dossier de déménagement, pièce par pièce",
      d: "L'entrée d'effets personnels en Suisse suppose un dossier constitué avant le départ : inventaire détaillé et valorisé du contenu, justificatif de la prise de domicile en Suisse, pièce d'identité, et le formulaire de déclaration prévu pour les effets de déménagement. Les biens doivent avoir été utilisés et vous appartenir. Nous préparons l'inventaire dans le format attendu, nous vérifions avec vous les pièces à fournir, et nous ne partons pas tant que le dossier est incomplet. Un camion refoulé au poste, c'est deux jours perdus et un stockage à payer."
    }, {
      t: "Ce qui ne passe pas ou passe mal",
      d: "Certaines catégories demandent une attention particulière : alcools et tabac au-delà de certaines quantités, denrées, plantes, armes de collection, véhicules et pièces détachées. D'autres biens, achetés récemment, peuvent être considérés comme neufs et traités différemment des effets usagés. Nous passons cette liste en revue avec vous lors du relevé, et nous mettons de côté ce qui doit être déclaré séparément. Découvrir le problème au poste frontière, c'est le découvrir au pire moment."
    }, {
      t: "Genève, ville d'expatriation",
      d: "Une grande partie de nos clients genevois arrivent pour une organisation internationale, une mission ou un poste à durée déterminée. Cela implique des calendriers imposés, des prises en charge par l'employeur qui demandent un devis conforme avec numéro d'entreprise et attestation d'assurance, et parfois un logement d'arrivée non disponible à la date du départ. Nous éditons systématiquement le document dans le format attendu par les services du personnel, et nous proposons un garde-meuble relais quand les dates ne se recouvrent pas."
    }, {
      t: "Camion dédié et plombé",
      d: "Sur un passage de frontière hors Union, le groupage est particulièrement mal adapté : chaque transbordement ouvre le chargement et complique la correspondance entre l'inventaire douanier et le contenu réel. Nous travaillons en camion dédié et plombé, une seule équipe du chargement à la livraison, ce qui garantit que ce qui est déclaré est exactement ce qui voyage. C'est aussi ce qui permet d'annoncer une date d'arrivée ferme plutôt qu'une fourchette."
    }],
    etapes: [{
      h: "J-30",
      t: "Constitution du dossier douanier : inventaire valorisé, justificatif de domicile, formulaire de déclaration."
    }, {
      h: "J-10",
      t: "Revue des biens à statut particulier, mise de côté de ce qui se déclare séparément."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, camion plombé, inventaire final signé."
    }, {
      h: "Jour 2",
      t: "Passage de douane avec le dossier complet, puis livraison genevoise."
    }],
    erreurs: [{
      t: "Partir avec un inventaire approximatif",
      d: "La douane suisse attend un détail valorisé. Une liste vague suffit à immobiliser le camion et à faire perdre deux jours."
    }, {
      t: "Oublier les biens à statut particulier",
      d: "Alcools, plantes, objets récents : ils se traitent séparément. Les mélanger au reste crée un problème au poste."
    }, {
      t: "Choisir un groupage vers la Suisse",
      d: "Chaque transbordement décorrèle l'inventaire du contenu réel. Sur un passage hors Union, c'est ce qu'il faut éviter avant tout."
    }]
  },
  "nice-lausanne": {
    titreContexte: ["Le canton de Vaud,", "et une ville en pente au bord du lac."],
    titreEtapes: ["Un Nice-Lausanne,", "en deux journées pleines."],
    titreErreurs: ["Ce qu'on sous-estime", "sur la rive nord du Léman."],
    contexte: "Lausanne se trouve plus loin que Genève, dans un autre canton, et sur un site nettement plus accidenté. La ville monte du bord du lac jusqu'aux hauteurs sur près de cinq cents mètres de dénivelé, avec des quartiers en forte pente et des rues étroites dans la vieille ville. Le passage de frontière reste le même que pour toute la Suisse, mais l'arrivée n'a rien de comparable.",
    sections: [{
      t: "Une ville qui monte de la gare à la cathédrale",
      d: "Lausanne est construite sur des collines, et le dénivelé entre le bord du lac à Ouchy et les hauteurs dépasse largement ce qu'on imagine. Les rues de la vieille ville sont étroites, en pente, parfois en escalier, et l'accès véhicule y est limité. Le point de stationnement praticable peut se trouver loin de la porte, avec un portage en montée. Nous relevons ce parcours avant le devis, parce qu'il détermine le nombre d'équipiers, et nous vérifions la déclivité de la rue, qui conditionne la sécurité du calage."
    }, {
      t: "Un autre canton, d'autres interlocuteurs",
      d: "La Suisse est fédérale, et les démarches d'annonce d'arrivée, d'inscription au contrôle des habitants et de permis se traitent au niveau communal et cantonal. Ce qui vaut pour Genève ne se transpose pas mécaniquement à Vaud. Nous ne sommes pas votre conseil administratif, mais nous vous indiquons ce que le dossier douanier exige de votre côté et nous adaptons les documents que nous fournissons. Ce point se règle avant le départ, jamais depuis Lausanne."
    }, {
      t: "Neuf cents kilomètres, deux journées",
      d: "La distance impose un schéma en deux temps avec repos réglementaire, et une arrivée en début de journée plutôt qu'en fin d'après-midi. Sur cette longueur, le calage compte : nous chargeons en respectant la répartition des masses, nous sanglons par rangées et nous comblons les vides, parce que ce sont les vibrations continues qui abîment sur la durée, pas les freinages. La date de livraison est ferme et figure au devis."
    }, {
      t: "Le stockage de part et d'autre",
      d: "Les prises de poste lausannoises s'accompagnent fréquemment d'un décalage entre la libération du logement niçois et la disponibilité du logement suisse. Nous proposons un garde-meuble relais côté français, avec mobilier inventorié en caisses scellées, livré à la date que vous fixez. Cela évite un double loyer international et, surtout, cela évite de forcer un calendrier qui ne tient pas."
    }],
    etapes: [{
      h: "J-30",
      t: "Dossier douanier constitué, inventaire valorisé et justificatif de prise de domicile vaudoise."
    }, {
      h: "J-7",
      t: "Relevé du parcours de portage à Lausanne : pente, distance, accès véhicule réel."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, calage renforcé pour la distance, camion plombé."
    }, {
      h: "Jour 2",
      t: "Passage de douane, puis livraison lausannoise en journée."
    }],
    erreurs: [{
      t: "Croire que Lausanne ressemble à Genève",
      d: "Autre canton, autre relief. La pente lausannoise change la méthode de livraison, et les démarches ne sont pas les mêmes."
    }, {
      t: "Négliger le calage sur neuf cents kilomètres",
      d: "Ce sont les vibrations continues qui abîment. Un chargement qui a du jeu arrive marqué, sans qu'aucun incident ne se soit produit."
    }, {
      t: "Forcer des dates qui ne se recouvrent pas",
      d: "Un garde-meuble relais coûte moins qu'un double loyer international et supprime la contrainte de calendrier."
    }]
  },
  "nice-bruxelles": {
    titreContexte: ["Mille kilomètres,", "et des escaliers parmi les plus raides d'Europe."],
    titreEtapes: ["Un Nice-Bruxelles,", "avec le monte-meuble prévu."],
    titreErreurs: ["Ce qui surprend", "dans une maison bruxelloise."],
    contexte: "Bruxelles est à l'intérieur de l'Union européenne, donc sans formalité douanière, et c'est le seul point simple de ce trajet. À l'arrivée, la ville présente une particularité que personne n'anticipe depuis Nice : la maison bruxelloise typique est étroite, haute, et desservie par un escalier si raide et si tournant que le mobilier ne passe presque jamais par là.",
    sections: [{
      t: "La maison bruxelloise et son escalier",
      d: "Le bâti résidentiel bruxellois est dominé par la maison de rangée, étroite en façade, profonde, montant sur trois ou quatre niveaux. L'escalier intérieur est raide, souvent tournant, avec des marches courtes et un jour central inexistant. Un canapé, une armoire ou un matelas grand format n'y passent pas. C'est la raison pour laquelle le monte-meuble est d'usage courant à Bruxelles et non exceptionnel comme ailleurs. Nous prévoyons cette solution dès le devis, avec la réservation de l'emplacement qui va avec."
    }, {
      t: "L'emplacement de stationnement, à réserver auprès de la commune",
      d: "Bruxelles est divisée en communes qui gèrent chacune leurs autorisations de stationnement pour déménagement, avec leurs propres formulaires, délais et tarifs. La demande se fait auprès de la commune de l'adresse, et les délais varient. Nous engageons la démarche dès que la date est arrêtée, en identifiant la bonne commune, ce qui est la première source d'erreur pour un opérateur qui ne connaît pas la ville. Sans emplacement réservé, ni le camion ni le monte-meuble ne peuvent se poser."
    }, {
      t: "Une ville d'expatriation professionnelle",
      d: "Les institutions européennes et les organisations qui gravitent autour concentrent une population expatriée avec des calendriers imposés et des prises en charge par l'employeur. Cela suppose un devis conforme, détaillé, avec numéro d'entreprise et attestation d'assurance, apte à entrer dans un dossier de remboursement. Nous l'éditons systématiquement dans ce format. Les délais de dépôt de ces dossiers sont courts, et un devis à refaire fait perdre la fenêtre."
    }, {
      t: "Mille kilomètres, deux jours et un calage soigné",
      d: "La distance impose un schéma sur deux journées avec repos réglementaire. Sur cette longueur, le calage détermine l'état du mobilier à l'arrivée bien plus que la conduite : répartition des masses, sanglage par rangées, vides comblés. Nous fonctionnons en camion dédié, sans transbordement, avec une date de livraison ferme et non une fourchette de plusieurs jours comme le pratiquent les formules de groupage sur cette destination."
    }],
    etapes: [{
      h: "J-25",
      t: "Identification de la commune bruxelloise et dépôt de la demande d'emplacement."
    }, {
      h: "J-15",
      t: "Réservation du monte-meuble et vérification de l'emprise disponible en façade."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, calage renforcé, départ en fin de matinée."
    }, {
      h: "Jour 2",
      t: "Livraison bruxelloise par la façade, remontage et vérification de l'inventaire."
    }],
    erreurs: [{
      t: "Croire que le mobilier passera par l'escalier",
      d: "L'escalier bruxellois est raide et tournant. Le monte-meuble n'est pas une option de confort, c'est la méthode normale sur place."
    }, {
      t: "Se tromper de commune pour l'autorisation",
      d: "Chaque commune bruxelloise gère la sienne, avec ses délais. Une demande déposée au mauvais endroit ne vaut rien."
    }, {
      t: "Présenter un devis non conforme à l'employeur",
      d: "Sans numéro d'entreprise ni attestation, le dossier de prise en charge est refusé et la fenêtre de dépôt se referme."
    }]
  },
  "nice-luxembourg": {
    titreContexte: ["Un pays petit et dense,", "où les mobilités sont courtes."],
    titreEtapes: ["Un Nice-Luxembourg,", "cadré par l'employeur."],
    titreErreurs: ["Ce qui coince", "sur une mobilité professionnelle."],
    contexte: "Le Luxembourg est dans l'Union européenne, donc sans formalité douanière, et à un peu plus de neuf cents kilomètres de Nice. Ce qui caractérise cette destination n'est ni la route ni la douane, c'est le profil des déménagements : des mobilités professionnelles courtes, souvent financées par l'employeur, avec des calendriers imposés et des logements d'arrivée qui se libèrent à date fixe.",
    sections: [{
      t: "Une mobilité qui se prépare avec le service du personnel",
      d: "La plupart de nos clients luxembourgeois déménagent pour une prise de poste, avec une participation de l'employeur aux frais. Cela suppose un devis détaillé et conforme, comportant le numéro d'entreprise, l'attestation d'assurance et le détail des prestations, apte à entrer dans un dossier de remboursement sans être refusé pour un motif de forme. Nous éditons ce document dans le format attendu dès le premier échange. Les délais de dépôt de ces dossiers sont courts et se calculent souvent à partir de la date de prise de fonction."
    }, {
      t: "Des séjours parfois courts, et un retour à prévoir",
      d: "Une partie de ces mobilités durent deux à quatre ans, ce qui change la façon d'organiser le déménagement. Il est souvent judicieux de ne pas tout emmener : le mobilier volumineux ou peu adapté à un logement locatif peut rester en garde-meuble en France, inventorié en caisses scellées, plutôt que de faire deux fois neuf cents kilomètres. Nous chiffrons les deux options au devis, avec le coût du stockage sur la durée envisagée, et vous décidez sur des chiffres et non sur une impression."
    }, {
      t: "Un parc locatif tendu et des dates fermes",
      d: "Le marché locatif luxembourgeois est tendu, les baux se prennent vite et les dates d'entrée ne se négocient guère. Cela signifie que la date de livraison doit être ferme, pas approximative. Les formules de groupage annoncent une fourchette de plusieurs jours, ce qui est incompatible avec un état des lieux d'entrée fixé à une date précise. Nous fonctionnons en camion dédié, avec une date d'arrivée engagée au devis."
    }, {
      t: "Trois frontières, aucune formalité",
      d: "Le trajet traverse plusieurs pays de l'Union sans aucune formalité douanière, ce qui simplifie considérablement les choses par rapport à la Suisse. En revanche les règles de circulation des poids lourds, les restrictions de week-end et de jours fériés varient d'un pays à l'autre et peuvent immobiliser un camion une journée entière. Nous calons le trajet en tenant compte de ces restrictions, ce qui explique que nous refusions parfois un départ un vendredi."
    }],
    etapes: [{
      h: "J-30",
      t: "Devis conforme édité pour le dossier employeur, avec numéro d'entreprise et attestation."
    }, {
      h: "J-20",
      t: "Arbitrage entre ce qui part et ce qui reste en garde-meuble, chiffré sur la durée du séjour."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, départ calé hors des restrictions de circulation poids lourds."
    }, {
      h: "Jour 2",
      t: "Livraison luxembourgeoise à date ferme, compatible avec l'état des lieux d'entrée."
    }],
    erreurs: [{
      t: "Tout emmener pour un séjour de trois ans",
      d: "Deux fois neuf cents kilomètres pour du mobilier qui ne servira pas coûte plus que trois ans de garde-meuble. Cela se chiffre."
    }, {
      t: "Accepter une fourchette de livraison",
      d: "Un état des lieux d'entrée est fixé à une date. Une arrivée « entre le 8 et le 12 » est incompatible avec le marché locatif local."
    }, {
      t: "Partir un vendredi",
      d: "Les restrictions de circulation des poids lourds varient d'un pays à l'autre et peuvent coûter une journée entière d'immobilisation."
    }]
  },
  "nice-barcelone": {
    titreContexte: ["Six cent cinquante kilomètres de côte,", "et des ascenseurs minuscules."],
    titreEtapes: ["Un Nice-Barcelone,", "sur deux journées."],
    titreErreurs: ["Ce qui bloque", "dans un immeuble de l'Eixample."],
    contexte: "Barcelone est l'une de nos destinations internationales les plus proches, à peine plus loin que Paris, par un trajet côtier fluide et sans formalité douanière puisque l'Espagne est dans l'Union. La difficulté est entièrement à l'arrivée, et elle est très concrète : les immeubles barcelonais, notamment dans l'Eixample, ont des ascenseurs parmi les plus étroits d'Europe.",
    sections: [{
      t: "L'ascenseur de l'Eixample",
      d: "Les immeubles du quartier de l'Eixample, comme une grande partie du bâti barcelonais d'avant-guerre, ont reçu leur ascenseur bien après leur construction, installé dans le vide de la cage d'escalier. La cabine y est souvent minuscule, avec des portes battantes et une charge limitée : elle prend deux personnes ou quelques cartons, jamais un meuble. Les escaliers, eux, sont étroits et tournants. Le résultat est que le monte-meuble par la façade ou par le balcon est la méthode courante à Barcelone, et nous la prévoyons au devis plutôt que de la découvrir sur place."
    }, {
      t: "L'autorisation de stationnement et les zones réglementées",
      d: "Barcelone encadre le stationnement des véhicules de déménagement et applique par ailleurs des restrictions de circulation dans une large zone urbaine, avec des critères sur les véhicules autorisés. Ces deux points se vérifient avant le départ, pas à l'entrée de la ville. Nous obtenons l'autorisation de stationnement pour la durée nécessaire et nous vérifions l'éligibilité du véhicule à la zone concernée. Un camion non conforme à la réglementation locale, c'est une livraison qui n'a pas lieu."
    }, {
      t: "Un trajet côtier sans transbordement",
      d: "La route longe la Méditerranée par le littoral languedocien et la frontière du Perthus, sur un axe qui reste fluide hors périodes de pointe. La distance permet un chargement complet le premier jour et une livraison le lendemain. Nous travaillons en camion dédié et plombé, une seule équipe du chargement à la livraison, sans passage par une plateforme de groupage. Sur un trajet international, c'est ce qui garantit qu'aucune manipulation n'a lieu hors de notre contrôle."
    }, {
      t: "Le garde-meuble relais, souvent utile",
      d: "Le marché locatif barcelonais impose fréquemment des dates d'entrée qui ne coïncident pas avec la libération du logement niçois. Nous stockons alors le mobilier en caisses scellées et inventoriées côté français, et nous livrons à la date que vous fixez. Cela évite de payer un double loyer international et de forcer un calendrier que le marché local ne permet pas de tenir."
    }],
    etapes: [{
      h: "J-25",
      t: "Vérification de l'éligibilité du véhicule aux zones réglementées et demande de stationnement."
    }, {
      h: "J-10",
      t: "Relevé des cotes de cabine et de cage à l'arrivée, réservation du monte-meuble si nécessaire."
    }, {
      h: "Jour 1",
      t: "Chargement à Nice, camion plombé, route côtière par le Perthus."
    }, {
      h: "Jour 2",
      t: "Livraison barcelonaise, le plus souvent par la façade ou le balcon."
    }],
    erreurs: [{
      t: "Compter sur l'ascenseur barcelonais",
      d: "Il prend deux personnes et quelques cartons. Le mobilier passe par la façade, et cela se prévoit au devis."
    }, {
      t: "Ignorer les zones à circulation réglementée",
      d: "Un véhicule non éligible ne rentre pas dans la ville. Cela se vérifie avant le départ de Nice, pas à l'arrivée."
    }, {
      t: "Caler deux dates qui ne se recouvrent pas",
      d: "Le marché locatif barcelonais impose ses dates. Le garde-meuble relais coûte moins qu'un double loyer."
    }]
  },
  "nice-madrid": {
    titreContexte: ["Mille trois cents kilomètres,", "et six cents mètres d'altitude."],
    titreEtapes: ["Un Nice-Madrid,", "en deux journées longues."],
    titreErreurs: ["Ce que la distance et la chaleur", "font payer."],
    contexte: "Madrid est notre destination la plus lointaine en distance de conduite continue, au cœur de la péninsule, à plus de six cents mètres d'altitude sur le plateau castillan. C'est un trajet où deux paramètres pèsent bien plus qu'ailleurs : la longueur de route, qui impose un calage irréprochable, et la chaleur, qui devient un vrai sujet une bonne partie de l'année.",
    sections: [{
      t: "La chaleur, un paramètre de premier ordre",
      d: "Madrid connaît des étés longs et très chauds, avec des températures qui dépassent largement celles du littoral méditerranéen, et un camion à l'arrêt en plein soleil atteint des valeurs qui abîment durablement une partie du contenu. Cela concerne les instruments de musique, l'électronique, les disques, les bougies et cosmétiques, certains meubles plaqués et les œuvres. Nous calons les livraisons estivales très tôt le matin, nous évitons les stationnements prolongés au soleil et nous identifions au relevé ce qui ne doit pas rester dans le camion."
    }, {
      t: "Un calage pensé pour treize cents kilomètres",
      d: "Sur cette distance, ce ne sont pas les freinages qui abîment mais les vibrations continues, heure après heure. Le chargement se fait en respectant la répartition des masses, avec un sanglage par rangées et des vides systématiquement comblés par du matériel de protection. Rien ne doit avoir de jeu. C'est la partie du travail que le client ne voit pas et qui explique la différence d'état du mobilier à l'arrivée entre deux prestataires au même prix affiché."
    }, {
      t: "L'altitude et les conditions de route",
      d: "Le trajet quitte le littoral pour remonter sur le plateau central, avec un dénivelé significatif et des conditions qui changent : vent, écarts de température entre le jour et la nuit, et en hiver la possibilité de conditions hivernales sur les portions élevées. Nous suivons les prévisions sur l'itinéraire complet avant le départ et nous adaptons le calendrier plutôt que de subir. Sur deux journées de route, une immobilisation coûte cher à tout le monde."
    }, {
      t: "Camion dédié, du départ à l'arrivée",
      d: "Sur une destination aussi lointaine, le groupage est la formule dominante du marché et celle qui produit le plus de litiges : plusieurs transbordements, une fourchette de livraison de plusieurs jours, et une chaîne de responsabilité impossible à établir en cas de dommage. Nous fonctionnons en camion dédié et plombé, avec la même équipe aux deux bouts et une date d'arrivée ferme. Sur treize cents kilomètres, savoir où sont ses affaires à tout instant n'est pas un luxe."
    }],
    etapes: [{
      h: "J-30",
      t: "Relevé complet et identification de ce qui ne doit pas voyager à la chaleur."
    }, {
      h: "J-2",
      t: "Emballage terminé, inventaire établi, dernier tour du logement avec vous."
    }, {
      h: "Jour 1",
      t: "Chargement, calage par rangées et sanglage renforcé, départ."
    }, {
      h: "Jour 2",
      t: "Livraison madrilène tôt le matin, avant la montée des températures."
    }],
    erreurs: [{
      t: "Livrer en journée l'été",
      d: "Un camion à l'arrêt au soleil madrilène atteint des températures qui abîment durablement une partie du contenu. La livraison se fait tôt."
    }, {
      t: "Négliger le calage sur treize cents kilomètres",
      d: "Les vibrations continues font le dommage. Un chargement avec du jeu arrive marqué sans qu'aucun incident n'ait eu lieu."
    }, {
      t: "Choisir un groupage sur cette distance",
      d: "Plusieurs transbordements, une fourchette de plusieurs jours, aucune chaîne de responsabilité claire. C'est là que naissent les litiges."
    }]
  },
  "nice-milan": {
    titreContexte: ["Trois cents kilomètres,", "et une zone à trafic limité."],
    titreEtapes: ["Un Nice-Milan,", "avec l'autorisation d'entrée."],
    titreErreurs: ["Ce qui coûte une amende", "à Milan."],
    contexte: "Milan est proche, à trois cents kilomètres par l'autoroute des Fleurs, et la distance se couvre facilement dans la journée. La difficulté est réglementaire : le centre de Milan est soumis à une zone à trafic limité et à une zone à faibles émissions, avec des conditions d'accès précises pour les véhicules utilitaires. Entrer sans autorisation se solde par une amende, parfois plusieurs, relevées automatiquement.",
    sections: [{
      t: "La zone à trafic limité, à traiter avant de partir",
      d: "Le centre de Milan est encadré par des dispositifs de restriction d'accès, contrôlés par caméras, avec des règles portant à la fois sur le type de véhicule, ses émissions et les horaires. Un utilitaire de déménagement doit disposer de l'autorisation appropriée pour entrer, et cette autorisation se demande à l'avance auprès des services municipaux. Nous engageons cette démarche dès que la date est arrêtée, avec les caractéristiques exactes du véhicule. Une entrée non autorisée est relevée automatiquement et facturée, sans qu'aucune discussion sur place ne soit possible."
    }, {
      t: "Les immeubles milanais et leur cour intérieure",
      d: "Le bâti résidentiel milanais s'organise fréquemment autour d'une cour intérieure, avec un porche d'entrée dont la hauteur et la largeur conditionnent l'accès. Certains porches acceptent un utilitaire, d'autres non, et cette information ne figure sur aucune carte. Les ascenseurs sont souvent d'origine, étroits, avec des portes battantes. Nous demandons les cotes du porche, de la cour et de la cabine avant le devis, parce que ces trois mesures déterminent si la livraison se fait en dix minutes ou en trois heures de portage."
    }, {
      t: "Un trajet court, sans formalité",
      d: "L'Italie étant dans l'Union européenne, aucune formalité douanière n'est requise. La route par l'autoroute des Fleurs longe la Riviera puis remonte vers la plaine du Pô, et se couvre confortablement dans la journée. Cette proximité permet un chargement le matin et une livraison l'après-midi, avec la même équipe de bout en bout et sans nuit intermédiaire. C'est le format que nous recommandons, il coûte moins et réduit les manipulations."
    }, {
      t: "Les restrictions de circulation, à connaître",
      d: "L'Italie applique des restrictions de circulation aux poids lourds certains jours, notamment les dimanches et jours fériés, avec un calendrier publié à l'avance. Un camion immobilisé une journée à la frontière ou sur une aire coûte cette journée à tout le monde. Nous calons le trajet en fonction de ce calendrier, ce qui explique que certaines dates soient écartées d'emblée quand vous nous les proposez."
    }],
    etapes: [{
      h: "J-20",
      t: "Demande d'autorisation d'accès à la zone réglementée, avec les caractéristiques du véhicule."
    }, {
      h: "J-7",
      t: "Relevé des cotes du porche, de la cour intérieure et de l'ascenseur à l'arrivée."
    }, {
      h: "7 h 00",
      t: "Chargement à Nice, départ par l'autoroute des Fleurs."
    }, {
      h: "15 h 00",
      t: "Livraison milanaise, avec accès autorisé et créneau respecté."
    }],
    erreurs: [{
      t: "Entrer dans la zone sans autorisation",
      d: "Le contrôle est automatique par caméra et l'amende tombe sans discussion. L'autorisation se demande des semaines avant."
    }, {
      t: "Ignorer la hauteur du porche",
      d: "Un utilitaire qui ne franchit pas le porche transforme la livraison en portage depuis la rue. Les cotes se demandent avant."
    }, {
      t: "Rouler un dimanche ou un jour férié",
      d: "Les restrictions italiennes immobilisent le camion une journée entière. Le calendrier est publié, il suffit de le consulter."
    }]
  },
  "nice-turin": {
    titreContexte: ["Deux cents kilomètres par les Alpes,", "et une arrivée en damier."],
    titreEtapes: ["Un Nice-Turin,", "dans la journée."],
    titreErreurs: ["Ce que le passage alpin", "impose de vérifier."],
    contexte: "Turin est notre destination italienne la plus proche, à un peu plus de deux cents kilomètres, mais ces kilomètres ne se valent pas : le trajet franchit les Alpes, par un itinéraire dont le choix dépend de la saison et du gabarit. À l'arrivée, la ville est organisée en damier régulier avec de larges avenues, ce qui la rend nettement plus simple à livrer que Milan, à une réserve près.",
    sections: [{
      t: "Le franchissement alpin, selon la saison",
      d: "Le passage vers le Piémont se fait par des itinéraires de montagne dont les conditions varient fortement selon la période. Certains cols peuvent être fermés ou soumis à équipements en hiver, et les contraintes de gabarit et de tonnage diffèrent d'un passage à l'autre. Nous choisissons l'itinéraire en fonction de la saison, du véhicule et des conditions du jour, et nous vérifions l'état des routes la veille du départ. C'est un trajet court en distance et exigeant en préparation, exactement l'inverse de ce qu'on attend."
    }, {
      t: "Une ville en damier, mais réglementée",
      d: "Turin est bâtie sur un plan régulier avec de larges avenues et des cours intérieures, ce qui facilite considérablement l'approche par rapport aux centres médiévaux. En revanche le centre est également soumis à des restrictions d'accès contrôlées, avec des conditions portant sur le véhicule et les horaires. L'autorisation se demande à l'avance auprès des services municipaux. La facilité de circulation ne dispense donc pas de la démarche administrative, et c'est l'erreur classique sur cette destination."
    }, {
      t: "Les immeubles à cour et leurs porches",
      d: "Comme à Milan, le bâti turinois s'organise souvent autour de cours intérieures accessibles par un porche dont la hauteur limite l'entrée d'un utilitaire. Les ascenseurs des immeubles anciens sont étroits. Nous demandons les cotes du porche et de la cabine avant le devis. Quand le porche ne passe pas, le portage se fait depuis la rue et cette différence doit figurer au devis plutôt que d'être découverte le jour de la livraison."
    }, {
      t: "Un aller-retour possible dans la journée",
      d: "La proximité permet, pour des volumes modérés, un chargement le matin à Nice et une livraison l'après-midi à Turin, avec la même équipe de bout en bout et sans nuit intermédiaire. C'est le format le plus économique et le moins risqué, puisque le mobilier n'est déchargé qu'une seule fois. Nous le proposons systématiquement quand le volume et les contraintes d'accès le permettent, et nous le disons quand ce n'est pas réaliste."
    }],
    etapes: [{
      h: "J-20",
      t: "Demande d'autorisation d'accès au centre de Turin, avec les caractéristiques du véhicule."
    }, {
      h: "J-1",
      t: "Vérification de l'état du passage alpin et choix définitif de l'itinéraire."
    }, {
      h: "6 h 30",
      t: "Chargement à Nice, départ par l'itinéraire retenu selon la saison."
    }, {
      h: "14 h 00",
      t: "Livraison turinoise, accès à la cour si le porche le permet, sinon portage depuis la rue."
    }],
    erreurs: [{
      t: "Choisir l'itinéraire sans regarder la saison",
      d: "Les passages alpins n'ont pas les mêmes conditions en janvier et en juillet. L'itinéraire se décide la veille, pas un mois avant."
    }, {
      t: "Croire qu'une ville facile dispense d'autorisation",
      d: "Turin est simple à circuler et son centre reste réglementé. L'autorisation se demande comme ailleurs."
    }, {
      t: "Ne pas mesurer le porche",
      d: "Il décide si le camion entre dans la cour ou si tout se porte depuis la rue. C'est la différence entre une heure et une demi-journée."
    }]
  }
};
Object.assign(window, {
  ROUTE_FOND
});
})();
