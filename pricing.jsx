// pricing.jsx — Moteur d'estimation de prix affiché au prospect en fin de formulaire.
//
// PRINCIPE : on reprend EXACTEMENT la formule du cockpit (volume × tarif m³ + km × tarif km,
// ajusté par la formule, + surcoût d'accès), mais réglée du côté PRUDENT : le volume retenu est
// le plus élevé des deux calculs disponibles, majoré d'une marge, et la fourchette est large et
// tirée vers le haut. Objectif assumé : ne jamais annoncer moins cher que la réalité. On peut
// toujours descendre au téléphone, jamais monter.
//
// ⚠️ Les tarifs ci-dessous doivent rester alignés avec ceux du cockpit
// (Réglages → Tarification : « Tarif au m³ » et « Tarif au km »). Si tu les changes là-bas,
// change-les ici aussi, sinon le site annoncera un prix différent de ton devis.
(function () {

  // ─────────────────────────────────────────────────────────────────────────
  // RÉGLAGES — c'est ici, et nulle part ailleurs, qu'on ajuste les prix.
  // ─────────────────────────────────────────────────────────────────────────
  const CFG = {
    // ── COÛTS RÉELS ────────────────────────────────────────────────────────
    // Le prix se construit à partir de ce que le chantier COÛTE, jamais d'un tarif au m³
    // sorti du chapeau. Tout est compté en ALLER-RETOUR : le camion revient toujours.
    // Valeurs relevées avec Edouard le 6 août 2026. Les précédentes (1,85 €/L et
    // 18 L/100) étaient des estimations : elles surestimaient la conso et sous-estimaient
    // le prix du litre, deux erreurs qui se compensaient presque. Le carburant ne pèse
    // de toute façon que 16 % du coût d'un kilomètre ; les trois quarts sont du TEMPS
    // de conduite, et c'est lui qu'il faut surveiller.
    prixCarburant: 2.20,      // € par litre de gazole
    consoPetit: 10,           // L/100 km — le 12 m³ de LBC ⚠️ à confirmer par Edouard
    consoMoyen: 13,           // L/100 km — le 20 m³ loué (mesuré)
    consoGrand: 23,           // L/100 km — les deux camions ensemble (13 + 10)
    peageKm: 0.18,            // € par km d'autoroute ⚠️ classe 2 ; un 20 m³ de plus de 3 m
                              // de haut passe en classe 3, soit environ 0,26 €/km
    peageDesKm: 60,           // en dessous, trajet local sans autoroute payante

    // ── MAIN D'ŒUVRE ───────────────────────────────────────────────────────
    // Elle n'est un COÛT que lorsqu'il faut payer quelqu'un EN PLUS.
    //
    // Sur les petits et moyens chantiers, Edouard et Anthony font le travail eux-mêmes :
    // leur temps n'est pas une dépense, c'est leur revenu. Le compter en coût revenait à
    // déduire leur propre salaire du bénéfice affiché, donc à sous-estimer ce qui rentre
    // réellement. Au-delà du seuil ci-dessous, il faut du renfort, et là c'est une vraie
    // sortie d'argent.
    // ⚠️ CORRECTION DU 6 AOÛT 2026. L'ancien calcul facturait la main d'œuvre au m³
    // (20 €/m³, majoré par la formule, plancher 300 €), soit 1 000 € de renfort sur un
    // 40 m³ et 1 250 € sur un 50 m³. Ces valeurs n'avaient jamais été validées par
    // Edouard, et elles produisaient une absurdité : un 40 m³ rapportait 794 € quand un
    // 30 m³ en rapportait 1 605. Le calculateur conseillait donc de refuser les maisons.
    //
    // Le vrai chiffre, donné par Edouard : 150 € la journée pour une personne en renfort.
    seuilRenfortM3: 35,       // au-delà, une troisième personne
    seuilRenfort2M3: 55,      // au-delà, une quatrième
    tarifRenfortJour: 150,    // € par personne en renfort et par journée mobilisée

    // ── LA FLOTTE ──────────────────────────────────────────────────────────
    // Le 12 m³ APPARTIENT à LBC : il ne coûte que son carburant. Tout ce qui
    // dépasse sa capacité passe par un 20 m³ loué. C'est la vraie règle, et elle
    // change beaucoup de choses : un chantier de 12 m³ n'a aucun coût de camion,
    // et un 31 m³ n'en paie qu'un seul (un 20 loué, plus le 12 de la maison).
    // Le code précédent facturait 200 € de location dès 20 m³, sans distinguer.
    capacitePropre: 12,       // m³ — le camion de LBC, gratuit
    capaciteLouee: 20,        // m³ — chaque camion loué en renfort
    /* Location d'UN 20 m³ — grille réelle du loueur, fournie par Edouard le 6 août 2026.
       Elle se décompose en trois lignes :
         50 € par journée pour le camion
         39 € par journée pour l'assurance
         un forfait kilométrique sur la distance RÉELLEMENT parcourue (aller-retour)

       Le forfait kilométrique de ses 26 paliers suit exactement deux droites :
         jusqu'à 1 000 km :  38,50 € + 0,11 €/km   (100 km → 49,50 · 1 000 km → 148,50)
         au-delà          : 148,50 € + 0,28 €/km supplémentaire  (2 500 km → 568,50)
       Vérifié sur les 26 valeurs, au centime.

       ⚠️ Le forfait km est compté UNE fois sur le trajet total, pas par journée : c'est
       du kilométrage, pas de la durée. Seuls le camion et l'assurance se multiplient
       par le nombre de jours. */
    locationJourCamion: 50,     // € par journée et par camion
    locationJourAssurance: 39,  // € par journée et par camion
    locationKmBase: 38.5,       // € — ordonnée de la première droite
    locationKmTarif: 0.11,      // € par km jusqu'à 1 000 km
    locationKmSeuil: 1000,      // km — changement de pente
    locationKmTarif2: 0.28,     // € par km au-delà

    /* ══════════════════════ GRILLE DE VENTE — refonte du 6 août 2026 ══════════
       Le prix ne se construit plus en empilant des marges par tranches de distance.
       Il se construit comme Edouard le pense : un socle au m³ par formule, plus un
       tarif au kilomètre, plus les difficultés réelles.

       CE QUI A ÉTÉ SUPPRIMÉ, ET POURQUOI

       L'ancienne grille avait trois tranches de distance (700 / 1 150 / 1 550 € de
       marge) : deux chantiers de 49 et 51 km avaient 450 € d'écart. Une marche
       indéfendable, et invisible tant qu'on ne comparait pas deux devis.

       Le plancher de 900 € interdisait par construction tout petit déménagement
       local. Le studio d'Axel ressortait à 960 € quand Edouard l'a lui-même
       chiffré 550 €. C'est cette grille qui a produit 40 devis refusés sur 45.

       LE BARÈME RETENU, DONNÉ PAR EDOUARD

       Coup de main  35 à 50 €/m³      Mains libres  50 à 70 €/m³

       LA FOURCHETTE EST LA GRILLE — précision d'Edouard du 6 août 2026

       Le prix BAS est le m³ au tarif bas, le prix HAUT le m³ au tarif haut. La
       fourchette n'est pas une incertitude de calcul : c'est la marge de manœuvre
       qu'Edouard garde pour prendre la température au téléphone. Il annonce le bas
       à un client pressé, le haut à un chantier qui s'annonce difficile.

       LE PLANCHER, ET POURQUOI IL EST INDISPENSABLE

       Appliquée telle quelle, la règle donnerait 6 × 50 = 300 € pour un studio en
       Mains libres. Une demi-journée à deux ne se vend pas 300 €. En dessous d'une
       douzaine de m³, c'est donc le plancher qui prend le relais.

       Ces quatre nombres recoupent TOUS les repères donnés par Edouard :
         6 m³ Mains libres  → 550 €  (le prix qu'il a lui-même facturé à Axel)
        12 m³ Mains libres  → 600 à 840 €, milieu 720 €  (il annonçait 700 €)
        20 m³ Coup de main  → 700 à 1 000 €, milieu 850 €  (il annonçait 800-900 €)
        40 m³ Mains libres  → à partir de 2 000 €  (il annonçait 2 000 € minimum)  */
    /* ── BAISSE DU 9 AOÛT 2026, DÉCIDÉE PAR EDOUARD ──────────────────────────
       Le marché ne suit plus sur les volumes moyens : un 30 m³ à 155 km sortait à
       1 530 € alors qu'il fallait viser 1 300 à 1 600 €. On baisse donc le tarif au m³,
       MAIS UNIQUEMENT jusqu'à 32 m³.

       Pourquoi 32 et pas un autre nombre : c'est la capacité maximale d'Edouard SANS
       louer un SECOND camion (un 20 m³ loué + son 12 m³ à lui, qui ne coûte rien). À
       partir de 33 m³ il paie une deuxième location, une deuxième assurance, un deuxième
       forfait kilométrique et un deuxième plein. Baisser là aussi l'aurait fait
       travailler à moins de 300 € de marge par jour de camion sur les gros chantiers,
       ce qu'il a refusé, à raison.

       `m3Bas`/`m3Haut` s'appliquent jusqu'au seuil ; `m3BasGros`/`m3HautGros` au-delà,
       et ces derniers sont les tarifs d'AVANT la baisse, inchangés.

       ⚠️ Doit rester identique à I_GRILLE et I_SEUIL_2E_CAMION dans interne.jsx (cockpit).  */
    seuilDeuxiemeCamionM3: 32,
    grilleFormule: {
      standard: { m3Bas: 30, m3Haut: 40, m3BasGros: 35, m3HautGros: 50, plancherBas: 638, plancherHaut: 850 },  // Coup de main
      /* ⚠️ PLANCHERS RELEVÉS LE 24 AOÛT 2026. Ils étaient à 550–750 € alors qu'aucun
         devis local n'est jamais parti en dessous de 700 € et que la médiane d'un studio
         est à 1 045 €. Un plancher trop bas ne fait pas gagner de client : il fait
         afficher un prix qu'on ne pratique pas, et le vrai devis paraît ensuite gonflé. */
      premium:  { m3Bas: 40, m3Haut: 60, m3BasGros: 50, m3HautGros: 70, plancherBas: 850, plancherHaut: 1148 }, // Mains libres
      luxe:     { m3Bas: 40, m3Haut: 60, m3BasGros: 50, m3HautGros: 70, plancherBas: 950, plancherHaut: 1280 }  // chiffré sur Mains libres
    },

    /* ── LE KILOMÈTRE ────────────────────────────────────────────────────────
       En dessous de 15 km, c'est du local : rien n'est facturé, le carburant est
       déjà couvert par le socle.

       Au-delà, le barème est PROGRESSIF, pas par palier : les kilomètres 15 à 300
       se facturent 2,50 €, ceux d'après 2 €. Sans ça, on recréerait la marche
       qu'on vient justement de supprimer.

       LE TARIF SE DÉCOMPOSE EN DEUX, ET C'EST ESSENTIEL

       « frais » = carburant (0,57 €) + péage (0,36 €) sur l'aller-retour. Cette part
       se multiplie PAR CAMION MOBILISÉ : à 60 m³, trois camions roulent et brûlent
       chacun leur gazole.

       « temps » = la conduite et la marge. Cette part ne se multiplie PAS : les
       camions roulent EN MÊME TEMPS, le chantier dure deux jours et pas six. Le
       conducteur supplémentaire est déjà payé par le renfort, à 150 € la journée.

       Avec un seul camion on retrouve exactement 2,50 € puis 2,00 €/km.

       ⚠️ Avant cette décomposition (6 août 2026), le kilomètre était facturé UNE
       fois quel que soit le nombre de camions : un 60 m³ Nice-Paris rapportait 68 €
       pour deux jours de travail à quatre personnes. Autant dire rien.

       Repère : le coût réel d'un km aller-retour est de 0,95 €. En dessous de
       2,25 €/km, Edouard ne se paie même pas 25 €/h à deux. Son tarif implicite,
       extrait de ses 39 devis, était de 1,69 € : il travaillait sous son seuil.

       LA DÉGRESSIVITÉ AU-DELÀ DE 300 KM

       Elle se justifie par la vitesse : ~70 km/h de moyenne sur route mixte contre
       ~85 km/h sur autoroute, soit 18 % de temps en moins par kilomètre. La part
       temps devrait donc passer de 1,55 € à environ 1,27 €.
       Elle était fixée à 1,05 €, soit une remise de 32 % pour un gain réel de 18 % :
       trop généreuse. Portée à 1,35 € le 6 août 2026 sur proposition d'Edouard, ce
       qui donne 2,30 €/km pour un camion au lieu de 2,00 €.                        */
    /* ── L'APPROCHE DEPUIS LA BASE ────────────────────────────────────────────
       LBC part de Nice. Un chantier Marseille → Aix, c'est 30 km de déménagement mais
       200 km d'approche à vide, ALLER ET RETOUR : 400 km de camion que personne ne
       payait. Un chantier local à Lyon rapportait 940 € pour 940 km roulés à vide.

       Le camion d'approche coûte réellement ~1,00 €/km (gazole + péage sur l'aller-retour
       + forfait km du loueur). On facture 0,90 €, soit à peu près le coût, sans marge
       dessus : l'objectif est d'arrêter de perdre de l'argent, pas d'en gagner sur la
       route.

       50 km offerts, parce que c'est la zone naturelle : Nice, Cannes, Antibes, Monaco,
       Cagnes, Le Cannet ne bougent pas d'un euro. Décision d'Edouard du 10 août 2026.

       ⚠️ Doit rester identique à I_APPROCHE dans interne.jsx (cockpit).             */
    baseLat: 43.7102, baseLng: 7.2620,   // 12 rue d'Italie, 06000 Nice
    approcheFranchiseKm: 50,
    approcheTarifKm: 0.90,

    kmInclus: 15,
    /* UN SEUL TARIF PAR KILOMÈTRE ET PAR CAMION.
   ⚠️ REFONTE DU 9 AOÛT 2026, DÉCIDÉE PAR EDOUARD.
   Le tarif était décomposé en « temps » (1,55 € puis 1,35 €, compté UNE SEULE FOIS quel
   que soit le nombre de camions) et « frais » (0,95 € par camion). L'idée était que les
   camions roulent en même temps, donc que la conduite ne se facture pas trois fois.

   Elle était fausse : trois camions, ce sont trois conducteurs mobilisés, même
   simultanément. Et l'effet chiffré était brutal — à trois camions, chaque camion ne
   rapportait plus que 1,40 €/km alors que ses seuls frais (gazole, péage, forfait km du
   loueur) en coûtaient 1,35. Un Nice-Paris à 60 m³ dégageait 184 € de marge par jour de
   camion, contre 744 € sur un 20 m³ local.

   Un seul tarif par kilomètre et par camion, donc. Plus aucune notion de temps ni
   d'heures : le prix se compose du m³, du kilomètre par camion, du démontage-remontage,
   du portage et des étages. Rien d'autre.

   Conséquence assumée : les chantiers à UN camion baissent (2,50 € -> 1,80 €/km), ceux à
   deux ou trois montent (4,40 € -> 5,40 €/km à trois). C'est l'inverse exact du défaut.

       ⚠️ Doit rester identique à I_TARIF_KM dans interne.jsx (cockpit).            */
    tarifKm: [
      { jusquKm: 500,      parCamion: 1.80 },
      { jusquKm: Infinity, parCamion: 1.75 }
    ],

    /* Le 12 m³ appartient à LBC : il n'y a pas de location à répercuter, seulement du
       carburant, du péage et de l'usure. Son kilomètre est donc facturé moins cher que
       celui d'un 20 m³ loué. Ce n'est pas une remise commerciale, c'est le reflet d'un
       coût réellement plus bas — ce qui le rend défendable au téléphone.
       ⚠️ Doit rester identique à I_TARIF_KM_PROPRE dans interne.jsx. */
    tarifKmPropre: 1.50,

    // En dessous, sortir le camion n'a pas de sens. Remplace l'ancien plancher de
    // 900 €, qui rendait tout petit déménagement local impossible à vendre.
    prixMinimum: 400,

    // Marge de sécurité sur le volume. Les clients oublient TOUJOURS des choses (cave,
    // garage, placards, cartons sous-estimés). 10 % de coussin sur le volume final.
    margeVolume: 1.10,

    seuilLongueDistanceKm: 200,   // au-delà : péage et route significatifs
    // Au-delà, le chantier passe sur deux jours. En dessous, tout se fait dans la
    // journée : chargement, route, déchargement et retour à la maison le soir même.
    // 600 km, c'est Lyon ou Montpellier. Règle d'Edouard du 6 août 2026 : au-delà il
    // préfère compter deux jours même quand c'est faisable en un, pour ne pas vendre
    // une journée impossible à tenir si le chantier prend du retard.
    seuilJourneeUnique: 600,

    /* ── LES DIFFICULTÉS D'ACCÈS ─────────────────────────────────────────────
       Proportionnelles au VOLUME, et c'est le changement de fond : monter 30 m³ au
       troisième étage prend deux fois et demie plus de temps que d'y monter 12 m³.
       L'ancien barème facturait 20 € par étage quel que soit le volume, ce qui
       revenait à offrir le portage des gros chantiers.

       Les valeurs sont exprimées par étage et PAR TRANCHE DE 10 m³ (0,30 h à
       100 €/h pour un escalier, la moitié pour une cabine où rien ne rentre).      */
    // Vérification faite le 6 août 2026, en repartant du temps réel :
    //   1 étage  = ~40 s de plus par aller-retour × ~27 voyages pour 10 m³ = 0,30 h = 30 €  ✓
    //   1 mètre  = ~1,7 s de plus par aller-retour × ~27 voyages = 0,0125 h = 1,25 €
    // Le portage était à 2,50 €, soit le double du temps réellement passé : 100 m de
    // portage sur 40 m³ ressortaient à 800 € alors que le travail représente 4 heures.
    etageSansAscenseur: 30,   // € par étage, par tranche de 10 m³
    etageAscenseur1p: 15,     // € par étage si la cabine ne prend qu'une personne
    portageOffert: 20,        // mètres de portage inclus
    portageParMetre: 1.25,    // € par mètre au-delà, par tranche de 10 m³

    // Péage estimé au-delà de 60 km (identique au cockpit : ~0,18 €/km hors 30 km urbains)
    peageKm: 0.18,
    peageDesKm: 60,

    // Distance retenue quand on n'arrive pas à géocoder les adresses. Volontairement pas 0 :
    // mieux vaut annoncer un peu trop que pas assez.
    kmParDefaut: 30,

    // Coefficient route : distance à vol d'oiseau → distance réelle par la route.
    coefRoute: 1.25,

    // Fourchette de volume plausible selon la surface déclarée (m³).
    //
    // C'est l'INVENTAIRE qui commande : un T2 peut très bien contenir 40 m³, et deux T3
    // identiques n'ont rien à voir l'un avec l'autre. La surface ne sert donc qu'à deux choses :
    //
    //   • « typique » = volume retenu quand le client N'A PAS rempli d'inventaire. C'est ce
    //     qu'on rencontre réellement dans ce type de logement.
    //     On prenait « max » auparavant : tous les 4 pièces étaient alors chiffrés comme des
    //     maisons de 65 m³, soit près de 3 000 € pour un déménagement local. Le prix affiché
    //     faisait fuir avant le premier appel. Le prix ferme se confirme de toute façon au
    //     téléphone après vérification de l'inventaire : mieux vaut une estimation crédible
    //     qu'une estimation défensive que personne ne valide.
    //   • « min » = simple garde-fou anti-absurdité quand l'inventaire EST rempli.
    //
    // Ce plancher est volontairement BAS. La rentabilité n'est pas assurée par le volume mais
    // par la marge cible, qui s'ajoute de toute façon par-dessus les coûts : un client qui
    // sous-déclare ses meubles ne fait perdre que la part « coût » (main d'œuvre, camion),
    // pas le bénéfice. Un plancher élevé ne protégeait donc rien, il gonflait juste le prix
    // affiché et faisait fuir des clients. Il sert seulement à ne pas rater le seuil de
    // location de camion (20 m³) sur un inventaire manifestement bâclé.
    //
    // L'inventaire déclaré s'applique tel quel dès qu'il dépasse ce plancher, sans limite haute.
    volumeSurface: {
      /* ⚠️ CALIBRÉ SUR LES DEVIS RÉELS LE 24 AOÛT 2026 — CORRECTION MAJEURE.
         Ces volumes étaient très au-dessus de la réalité de LBC. « Maison » valait 48 m³
         alors que le PLUS GROS déménagement jamais chiffré fait 52 m³ et que 9 devis sur
         76 seulement dépassent 40 m³. Le volume médian réel est de 19 m³.
         Conséquence, l'estimateur annonçait 2 650–3 710 € pour une maison en local là où
         le devis réel médian est de 1 945 € : +63 %. Un visiteur qui simulait puis
         recevait un devis bien plus bas ne revenait pas — il était déjà parti, convaincu
         qu'on était hors de son budget. L'écart moyen entre estimation et devis réel
         tombe de 49 % à 8 %. */
      /* ⚠️ SECOND RÉGLAGE, 24 AOÛT : LA PROGRESSION PRIME SUR LA FIDÉLITÉ AUX DEVIS.
         Le premier calibrage collait au plus près des devis émis (8 % d'écart), mais il
         produisait un 3 pièces et un 4 pièces au MÊME PRIX — 27 et 28 m³. Illisible sur
         une page publique : un visiteur qui voit deux logements différents au même tarif
         cesse de croire au calcul.
         La cause est dans les devis eux-mêmes : leur médiane est identique pour T2, T3 et
         T4, à 1 490 €. C'est normal — le prix suit le volume RÉELLEMENT déclaré, pas la
         surface, et un T4 dont on ne déménage que le salon coûte comme un T2. Mais
         l'estimateur, lui, ne connaît que le type de logement : il doit donc progresser.
         L'écart moyen remonte à 25 %, et c'est un choix assumé : mieux vaut une grille
         qu'on comprend, resserrée ensuite par l'inventaire du formulaire de devis. */
      studio: { min: 5, typique: 9, max: 15 },
      t2: { min: 8, typique: 24, max: 25 },
      t3: { min: 12, typique: 28, max: 40 },
      t4: { min: 18, typique: 38, max: 65 },
      /* « Maison, plus de 90 m² » du widget d'accueil. Elle était chiffrée comme un
         4 pièces, soit 42 m³, alors qu'une maison de cette taille en fait couramment
         50 à 60 : le bouton des plus gros chantiers était celui qui sous-annonçait le
         plus. Clé distincte de t4, pour ne pas déplacer l'estimation du formulaire,
         où « 4 pièces + » désigne bien un appartement.
         48 et pas 55 : l'incident documenté plus haut rappelle qu'une estimation à
         65 m³ affichait près de 3 000 € en local et faisait fuir avant le premier
         appel. 48 m³ relève l'annonce sans repasser ce seuil, et le prix ferme se
         confirme de toute façon au téléphone, inventaire en main. */
      maison: { min: 22, typique: 50, max: 90 }
    }
  };

  // Volumes de transport par meuble (m³) — table reprise du cockpit pour que le prix annoncé
  // au client et le devis calculé dans le cockpit partent de la MÊME base.
  const VOL = {
  /* Ajoutés le 16 août 2026 : relevés dans les inventaires réels des clients, où ils
     tombaient tous sur les 0,80 m³ par défaut. Un lampadaire à 0,80 m³ pèse autant
     qu'une commode dans le total, et une gazinière à 0,80 m³ est surestimée de moitié.
     Valeurs calées sur les meubles voisins déjà présents. */
  'gazinière':0.5,'bahut':1.3,'console':0.4,'tapis':0.2,'lampadaire':0.15,'lustre':0.15,'imprimante':0.1,'coffre':0.5,'vitrine':0.8,'meuble à chaussures':0.3,'meuble bas':0.5,'meuble haut':0.4,'table extérieure':0.6,'plaque de cuisson':0.1,'climatiseur mobile':0.2,
    /* Libellés EXACTS du catalogue et des saisies manuelles. Sans eux, le repli à
       0,80 m³ s'appliquait : un pot de fleur pesait autant qu'une commode. Et
       « œuvre d'art / tableau » valait 1 m³ parce que le mot contient « table » —
       la recherche par morceaux retient la plus GROSSE valeur, pas la plus précise.
       Une clé exacte règle les deux cas : elle est consultée en premier. */
    'appareil de sport / tapis':1.2,
    'autre électroménager':0.5,
    'dressing sur mesure, plus de 2 m':3,
    'dressing à portes coulissantes':2.4,
    'mobilier de véranda':1.5,
    'plancha':0.3,
    'plantes / jardinières':0.15,
    'plante':0.15,
    'jardinière':0.15,
    "œuvre d'art / tableau":0.3,
    "oeuvre d'art / tableau":0.3,
    'tableau':0.3,
    'cheminée':0.3,
    'lampe':0.1,
    'paravent':0.2,
    'pot de fleur':0.08,
    'malle':0.15,
    /* ⚠️ LE CARTON N'EST PAS UN MEUBLE, ET IL MANQUAIT ICI.
       Toute ligne d'inventaire contenant le mot « carton » retombait sur la valeur par
       défaut de volMeuble, 0,80 m³, soit SEIZE FOIS le volume réel. Dix cartons de cave
       pesaient 8 m³ au lieu de 0,5. Sur le dossier Fatim Dabo, le site a retenu 27 m³ au
       lieu de 19, donc deux camions au lieu d'un, et a annoncé 3 850 € au lieu de 2 140 €.
       Ces valeurs sont celles d'I_MEUBLES_VOL dans le cockpit : les deux tables doivent
       dire la même chose du même meuble, sinon le prix du site et le devis divergent. */
    'carton':0.05, 'cartons':0.05, 'carton standard':0.05, 'carton livres':0.04,
    'canapé 2 places': 1.5, 'canapé 3 places': 2.0, "canapé d'angle": 3.0, 'canapé convertible': 2.2, 'canapé': 1.8, 'fauteuil': 0.8, 'pouf': 0.3,
    'table basse': 0.5, 'meuble tv': 0.8, 'bibliothèque': 1.2, 'buffet': 1.3, 'vaisselier': 1.4, 'étagère': 0.7, 'meuble de rangement': 1.0,
    'lit simple': 1.0, 'lit double': 1.8, 'lit 2 places': 1.8, 'lit king size': 2.2, 'lit électrique': 2.0, 'lit coffre': 2.0, 'lit superposé': 2.0, 'lit 1 place': 1.0, 'sommier': 1.0, 'matelas double': 1.0, 'matelas': 0.8, 'lit': 1.5,
    'armoire 2 portes': 1.6, 'armoire 3 portes': 2.3, 'armoire': 1.8,
    'dressing sur mesure': 3.0, 'dressing à portes coulissantes': 2.4, 'dressing': 2.0, 'penderie': 1.5, 'commode': 0.7, 'table de chevet': 0.2, 'coiffeuse': 0.6, 'miroir': 0.3,
    'table à manger': 1.0, 'table + chaises': 1.6, 'table de salle à manger': 1.2, 'table': 0.8, 'chaise': 0.2, 'tabouret': 0.15, 'banc': 0.5,
    'bureau': 0.9, 'chaise de bureau': 0.4, 'caisson': 0.3,
    'réfrigérateur': 0.7, 'frigo américain': 1.1, 'frigo': 0.7, 'congélateur': 0.7, 'lave-linge': 0.6, 'machine à laver': 0.6, 'sèche-linge': 0.6, 'lave-vaisselle': 0.5, 'four': 0.3, 'cuisinière': 0.5, 'micro-ondes': 0.1, 'meuble de cuisine': 0.8,
    'télévision': 0.3, 'écran': 0.2, 'ordinateur': 0.1, 'tv': 0.3,
    'vélo': 0.6, 'tondeuse': 0.4, 'établi': 1.0, 'barbecue': 0.5, 'salon de jardin': 2.0, 'parasol': 0.3,
    'piano droit': 2.5, 'piano à queue': 4.0, 'piano': 2.5, 'coffre-fort': 0.8, 'aquarium': 0.5, 'machine de sport': 1.2, 'tapis de course': 1.0, 'billard': 2.5, 'baby-foot': 1.2, 'table de ping-pong': 1.5, 'jacuzzi': 3.0, 'spa': 3.0, 'cave à vin': 0.8, "borne d'arcade": 1.0, 'statue': 0.6,
    "œuvre d'art / tableau": 0.3, 'tableau': 0.3
  };

  /* ═══════════════════════════════════ DÉMONTAGE ET REMONTAGE

     Tarifs établis le 6 août 2026 à partir de durées de métier, converties au taux
     d'équipe de 100 €/h (la règle d'Edouard : 10 cartons à emballer = 1 h = 100 €).
     Le temps est celui de l'aller-retour complet : démonter au départ ET remonter à
     l'arrivée. Si le client ne veut que le démontage, compter 40 % (le remontage est
     la partie longue).

     `courant: true` = compris dans la formule « Mains libres », qui annonce le
     démontage/remontage du mobilier courant. `false` = facturé en plus dans TOUTES
     les formules, parce que ce sont des chantiers à part entière : un dressing sur
     mesure, c'est 3 h 30 à deux, on ne peut pas l'offrir sans le savoir.

     L'ordre compte : le premier motif qui correspond gagne, donc du plus précis au
     plus général (« dressing sur mesure » avant « dressing »).

     ⚠️ Les intitulés de DEMONTAGE dans inventory-step.jsx doivent rester couverts par
     ces motifs. Un intitulé qui ne correspond à rien est facturé au tarif par défaut
     et signalé dans le détail, jamais ignoré en silence. */
  const DEMONTAGE_TARIF = [
    [/dressing.*(sur mesure|plus de 2)/, 350, false],
    [/dressing.*coulissant/,             300, false],
    [/dressing|penderie/,                250, false],
    [/lit.*superpos/,                    130, false],
    [/lit.*(électrique|electrique)/,     120, false],
    [/lit.*coffre/,                      120, false],
    // Un lit à baldaquin est un chantier ; un king size n'est qu'un lit un peu plus
    // grand, au même titre qu'une armoire 3 portes. Il reste donc dans le courant.
    [/lit.*baldaquin/,                   150, false],
    [/lit.*king/,                        150, true],
    [/armoire.*3/,                       140, true],
    [/armoire/,                          100, true],
    [/lit.*(1 place|enfant|simple)/,      40, true],
    [/lit/,                               60, true],
    [/table/,                             40, true],
    [/bureau/,                            60, true],
    [/(étag|etag|biblio)/,                80, true],
    [/meuble en kit/,                     80, true]
  ];
  const DEMONTAGE_DEFAUT = 80;

  // Tarif d'un meuble à démonter, et s'il est compris dans « Mains libres ».
  function tarifDemontage(label) {
    const s = String(label || '').toLowerCase();
    for (let i = 0; i < DEMONTAGE_TARIF.length; i++) {
      if (DEMONTAGE_TARIF[i][0].test(s)) return { prix: DEMONTAGE_TARIF[i][1], courant: DEMONTAGE_TARIF[i][2], connu: true };
    }
    return { prix: DEMONTAGE_DEFAUT, courant: true, connu: false };
  }

  // Supplément total de démontage/remontage.
  //   o.demontage = { "Lit coffre": 1, "Dressing à portes coulissantes": 2, … }
  //   formule     = celle retenue pour l'estimation (voir formuleEstimee)
  //
  // « Coup de main » ne comprend aucun démontage : tout est facturé. « Mains libres »
  // comprend le mobilier courant : seuls les postes lourds s'ajoutent.
  function supplementDemontage(demontage, formule) {
    const lignes = [];
    let total = 0;
    const toutFacture = (formule === 'standard');   // site 'standard' = Coup de main
    Object.keys(demontage || {}).forEach((label) => {
      const q = Number(demontage[label]) || 0;
      if (q <= 0) return;
      const t = tarifDemontage(label);
      const facture = toutFacture || !t.courant;
      const montant = facture ? t.prix * q : 0;
      total += montant;
      lignes.push({ label: label, quantite: q, prix: t.prix, montant: montant, facture: facture, connu: t.connu });
    });
    return { total: total, lignes: lignes };
  }

  /* ═══════════════════════════════════ OBJETS SPÉCIAUX

     Un piano à queue occupe 4 m³ : au tarif au m³, il coûtait 160 € de plus qu'une
     table de salle à manger. Or c'est un chantier à part, avec des sangles, une
     personne de plus et parfois un professionnel. Un coffre-fort de 300 kg était,
     lui, facturé exactement comme une table.

     Ces montants sont des SUPPLÉMENTS : ils s'ajoutent au volume déjà compté dans
     la grille, comme le font les déménageurs. Calés sur le haut des tarifs relevés
     en France (piano droit 250 à 400 € seul, piano à queue 400 à 900 €, billard
     400 à 900 € avec démontage et remise à niveau), conformément à la consigne
     d'Edouard de se placer sur les prix hauts du marché niçois.

     Les étages ne sont pas à ajouter ici : surcoutAcces les compte déjà, et il le
     fait proportionnellement au volume.

     L'ordre compte : le premier motif qui correspond gagne, donc du plus précis au
     plus général (« piano à queue » avant « piano »). */
  const OBJET_SPECIAL = [
    [/piano.*queue/,                                 700],
    [/piano/,                                        350],
    [/billard/,                                      600],
    [/(jacuzzi|spa)/,                                600],
    [/coffre-fort/,                                  350],
    [/(statue|sculpture)/,                           200],
    [/aquarium/,                                     200],
    [/(baby-foot|arcade)/,                           150],
    [/(machine de sport|tapis de course|appareil de sport)/, 150],
    // Les œuvres d'art et tableaux ne portent AUCUN supplément : décision d'Edouard
    // du 6 août 2026. Ils restent facturés à leur volume comme n'importe quel objet.
    // Ils continuent d'être traités comme fragiles dans le formulaire, ce qui relève
    // de l'emballage et donc de la formule, pas d'un tarif de manutention.
    [/ping-pong/,                                    120],
    [/cave à vin/,                                   120]
  ];

  // Supplément total des objets qui demandent un traitement particulier.
  function supplementSpeciaux(inventaire) {
    const lignes = [];
    let total = 0;
    (inventaire || []).forEach((it) => {
      const label = String((it && it.meuble) || '').toLowerCase();
      const q = Number(it && it.quantite) || 1;
      for (let i = 0; i < OBJET_SPECIAL.length; i++) {
        if (OBJET_SPECIAL[i][0].test(label)) {
          const montant = OBJET_SPECIAL[i][1] * q;
          total += montant;
          lignes.push({ label: (it && it.meuble) || '?', quantite: q, montant: montant });
          break;
        }
      }
    });
    return { total: total, lignes: lignes };
  }

  /* ═══════════════════════════════════ MONTE-MEUBLE

     400 € la demi-journée, 600 € la journée (tarifs d'Edouard, août 2026). C'est le
     CLIENT qui déclare s'il en faut un : lui seul voit sa façade, et le deviner
     depuis un formulaire produirait autant de faux positifs que d'oublis.

     Il peut être nécessaire des deux côtés, d'où un compte par côté. Au-delà de
     20 m³, on part sur la journée : on ne monte pas un T3 entier par la fenêtre en
     une après-midi.

     ⚠️ Refacturé au prix coûtant, sans marge. Si Edouard veut marger dessus, c'est
     ici qu'il faut le décider. */
  function coutMonteMeuble(depart, arrivee, volume) {
    const tarif = volume > 20 ? 600 : 400;
    let n = 0;
    if (depart && depart.monteMeuble) n++;
    if (arrivee && arrivee.monteMeuble) n++;
    return { total: n * tarif, nombre: n, tarif: tarif };
  }

  // Volume d'un meuble d'après son libellé. Recherche exacte puis partielle (« Canapé d'angle »
  // trouve « canapé d'angle »). Défaut 0,8 m³ : on préfère surestimer un meuble inconnu.
  function volMeuble(label) {
    if (!label) return 0.8;
    const s = String(label).toLowerCase().trim();
    if (VOL[s] != null) return VOL[s];
    let best = 0;
    for (const k in VOL) { if (s.includes(k) && VOL[k] > best) best = VOL[k]; }
    return best || 0.8;
  }

  // Volume total de l'inventaire déclaré + cartons (règle standard : 10 cartons ≈ 1 m³)
  function volInventaire(inventaire, cartons) {
    const meubles = (inventaire || []).reduce((a, it) => a + volMeuble(it && it.meuble) * (Number(it && it.quantite) || 1), 0);
    return meubles + (Number(cartons) || 0) * 0.1;
  }

  // Surcoût d'accès pour un côté (départ ou arrivée), au format déjà converti par le
  // formulaire : { etage: 3, ascenseur: true, ascTaille: "1 personne", portage: 40 }
  //
  // Le volume entre dans le calcul : ce sont des heures de portage, et porter 30 m³
  // au 3e prend deux fois et demie plus longtemps que d'y porter 12 m³. Un ascenseur
  // assez grand pour les meubles ne coûte rien de plus, c'est le cas normal.
  function surcoutAcces(side, volume) {
    if (!side) return 0;
    const parDix = Math.max(0.5, (Number(volume) || 0) / 10);   // jamais moins d'une demi-tranche
    let s = 0;
    const et = Number(side.etage) || 0;
    if (!side.ascenseur) s += et * CFG.etageSansAscenseur * parDix;
    else if ((side.ascTaille || '') === '1 personne') s += et * CFG.etageAscenseur1p * parDix;
    const port = Number(side.portage) || 0;
    if (port > CFG.portageOffert) s += (port - CFG.portageOffert) * CFG.portageParMetre * parDix;
    return Math.round(s);
  }

  // Supplément kilométrique, PROGRESSIF : les 15 premiers km sont inclus, puis chaque
  // tranche se facture à son tarif. Un trajet de 930 km paie donc 285 km à 2,50 €
  // puis 630 km à 2 €, et non 930 km au tarif de la dernière tranche.
  // Les kilomètres facturables d'UN camion loué, tranche par tranche.
  function kmUnCamionLoue(km) {
    let precedent = CFG.kmInclus, total = 0;
    for (let i = 0; i < CFG.tarifKm.length; i++) {
      const t = CFG.tarifKm[i];
      const borne = Math.min(km, t.jusquKm);
      if (borne > precedent) total += (borne - precedent) * t.parCamion;
      precedent = borne;
      if (km <= t.jusquKm) break;
    }
    return total;
  }
  /* ⚠️ LE KILOMÈTRE SE FACTURE PAR CAMION, ET PLUS AU MÊME PRIX SELON LE CAMION.
     On ne peut donc plus se contenter de compter les véhicules : il faut savoir lesquels.
     Un 20 m³ loué est à 1,80 € (1,75 € au-delà de 500 km), le 12 m³ de la maison à 1,50 €. */
  function supplementKm(km, fl) {
    if (!(km > CFG.kmInclus)) return 0;
    const f = (fl && typeof fl === 'object') ? fl : { loues: Math.max(1, fl || 1), propre: false };
    const total = kmUnCamionLoue(km) * Math.max(0, f.loues)
                + (f.propre ? (km - CFG.kmInclus) * CFG.tarifKmPropre : 0);
    return Math.round(total);
  }

  // Composition de la flotte pour un volume donné → { propre, loues }.
  //
  // On sert avec le MINIMUM de camions, et le 12 m³ de la maison ne sort que s'il est
  // utile : un camion qui roule à moitié vide consomme sans rien transporter de plus.
  // D'où la règle exacte décrite par Edouard : 20 m³ → un loué seul ; 31 m³ → un loué
  // PLUS le 12 de la maison, donc une seule location.
  function flotte(volume) {
    const P = CFG.capacitePropre, L = CFG.capaciteLouee;
    let loues = 0, propre = false;
    // Garde-fou : sur un volume aberrant, on s'arrête plutôt que de boucler sans fin.
    for (let i = 0; i < 20 && (loues * L + (propre ? P : 0)) < volume; i++) {
      const reste = volume - (loues * L + (propre ? P : 0));
      if (!propre && reste <= P) propre = true; else loues++;
    }
    return { propre: propre, loues: loues };
  }

  // Consommation cumulée des camions réellement mobilisés, en L/100 km.
  function conso(volume) {
    const f = flotte(volume);
    return (f.propre ? CFG.consoPetit : 0) + f.loues * CFG.consoMoyen;
  }

  // Forfait kilométrique du loueur, sur la distance réellement parcourue.
  function forfaitKmLoueur(kmParcourus) {
    if (kmParcourus <= CFG.locationKmSeuil) {
      return CFG.locationKmBase + CFG.locationKmTarif * kmParcourus;
    }
    return CFG.locationKmBase + CFG.locationKmTarif * CFG.locationKmSeuil +
           CFG.locationKmTarif2 * (kmParcourus - CFG.locationKmSeuil);
  }

  // Coût de location : zéro pour le camion de la maison, grille du loueur pour chaque
  // 20 m³ pris en renfort. Le camion et l'assurance se paient à la journée, le
  // kilométrage une seule fois sur le trajet total.
  // Coût de location : zéro pour le camion de la maison, grille du loueur pour chaque
  // 20 m³ pris en renfort.
  //
  // ⚠️ CORRIGÉ LE 10 AOÛT 2026. Le forfait kilométrique du loueur (49,50 € pour 100 km,
  // 72,60 € pour 310 km…) COMPREND DÉJÀ LA PREMIÈRE JOURNÉE DE CAMION. Les 50 € par jour
  // ne se paient qu'à partir de la DEUXIÈME journée. On les ajoutait à chaque location,
  // y compris sur un chantier d'une journée : 50 € de coût inventé par camion, donc une
  // marge affichée systématiquement trop basse sur tous les chantiers locaux.
  // L'assurance, elle, est bien due chaque jour.
  function coutLocation(volume, km, nbJours) {
    const f = flotte(volume);
    if (!f.loues) return 0;
    const jours = Math.max(1, nbJours);
    const parCamion = forfaitKmLoueur(km * 2)
                    + CFG.locationJourCamion * (jours - 1)
                    + CFG.locationJourAssurance * jours;
    return Math.round(f.loues * parCamion);
  }

  /* Journées de mobilisation. RÈGLE D'EDOUARD, 6 août 2026 : un chantier local se fait
     dans la journée, quel que soit le volume, et un chantier longue distance ne dépasse
     JAMAIS deux jours. Y compris Nice-Paris.

     ⚠️ Le calcul précédent estimait la route à 700 km par jour de conduite et sortait
     4 jours sur un Nice-Paris. Il facturait donc le double de location et de renfort, et
     surtout il divisait le bénéfice par quatre au lieu de deux : la longue distance
     paraissait deux fois moins rentable qu'elle ne l'est réellement. */
  function jours(km) {
    return km <= CFG.seuilJourneeUnique ? 1 : 2;
  }

  const arrondi10 = (n) => Math.round(n / 10) * 10;

  // ─────────────────────────────────────────────────────────────────────────
  // Estimation. Renvoie { bas, haut, volume, km } — ou null si pas assez d'infos.
  // ─────────────────────────────────────────────────────────────────────────
  function estimer(o) {
    o = o || {};
    const volInv = volInventaire(o.inventaire, o.cartons);
    /* ⚠️ DES CARTONS SEULS SONT UN INVENTAIRE. Corrigé le 22 août 2026.
       Cette condition ne regardait que la liste des meubles. Un client qui déclarait
       « 6 cartons et rien d'autre » était donc traité comme quelqu'un qui n'avait RIEN
       déclaré : on lui appliquait le volume typique de son logement, 12 m³ pour un
       studio, soit 13 m³ après la marge — vingt fois ses 0,6 m³.
       Le symptôme qui prouve l'absurdité : ajouter un lit double à ces 6 cartons faisait
       TOMBER l'estimation de 13 m³ à 3 m³. Plus le client déclarait, moins on comptait.
       C'est le même défaut que celui du 15 août sur l'autre branche : ce qu'il déclare
       est ce qu'on retient, et des cartons sont une déclaration. */
    const aInventaire = (o.inventaire || []).length > 0 || (Number(o.cartons) || 0) > 0;
    const plage = CFG.volumeSurface[o.surface] || null;

    // L'inventaire prime dès qu'il existe : c'est la seule donnée qui décrit vraiment le
    // déménagement. La surface ne sert qu'à poser un plancher de crédibilité (inventaire
    // bâclé) ou à combler l'absence totale d'inventaire (on prend alors le haut de fourchette).
    let volBase;
    /* ⚠️ L'INVENTAIRE DÉCLARÉ FAIT FOI, SANS PLANCHER. RÈGLE D'EDOUARD, 15 AOÛT 2026.
       Cette ligne relevait le volume au minimum du logement dès qu'il paraissait « trop
       faible ». Elle supposait que le client avait oublié des pièces. C'est faux : on
       peut habiter un T4 et ne faire déménager que son salon. Le client déclarait 8,2 m³
       et lisait « fourchette basée sur 20 m³ » sans jamais savoir qu'on avait multiplié
       son inventaire par 2,4 — 9 devis sur 69 étaient dans ce cas, jusqu'à ×4,2.
       Ce qu'il déclare est ce qu'on retient. */
    if (aInventaire) volBase = volInv;
    // Sans meubles déclarés on part du volume TYPIQUE de ce logement, pas du maximum : le
    // maximum chiffrait chaque 4 pièces comme une maison et faisait fuir avant le premier
    // appel. On prend quand même le dessus si le client a annoncé un gros paquet de cartons
    // (200 cartons dans un studio, ça arrive).
    else volBase = Math.max(plage ? (plage.typique || plage.max) : 0, volInv);

    if (!volBase) return null;
    const volume = Math.round(volBase * CFG.margeVolume);

    // ⚠️ INCIDENT DU 3 AOÛT 2026 — À NE JAMAIS REFAIRE.
    // Quand le géocodage échouait, on retombait en silence sur kmParDefaut (30 km) et on
    // affichait quand même un prix. Résultat : un Cannes → Honfleur de 1 038 km a été chiffré
    // comme un trajet de 30 km, et un Villes-sur-Auzon → Serdinya de 361 km aussi. Des clients
    // ont reçu une estimation très en dessous de la réalité, impossible à défendre au téléphone.
    // La cause était une politique de sécurité qui bloquait l'appel à l'API adresse.
    //
    // Désormais : si la distance n'est pas connue, on le DIT. Le prix n'est plus affiché sur
    // une distance inventée. Un prix manquant est gênant ; un prix faux coûte un client.
    // ⚠️ Une distance de ZÉRO est une distance VALIDE, pas une distance manquante.
    // C'est le cas d'un déménagement dans le même quartier, ou de deux adresses
    // saisies sans numéro de rue qui retombent sur le même point. Le test précédent
    // (`o.km > 0`) les rangeait avec les échecs de géocodage et masquait le prix.
    // Comme la distance est arrondie à l'entier, TOUT trajet de moins de 400 m
    // tombait dans ce trou : c'est-à-dire exactement les déménagements locaux qu'on
    // cherche à développer. Seule une distance réellement inconnue (null) masque
    // désormais le prix.
    const distanceFiable = (o.km != null);
    // Plancher à 3 km : sur une adresse imprécise, mieux vaut compter une course
    // urbaine minimale que zéro kilomètre de carburant.
    const km = distanceFiable ? Math.max(3, Math.round(o.km)) : CFG.kmParDefaut;

    // « Mains dans les poches » (luxe) N'EST PAS ESTIMABLE automatiquement. Son prix
    // dépend entièrement de ce qu'il y a à emballer — vaisselle, fragiles, nombre réel
    // de cartons — et personne ne peut le savoir sans l'avoir vu. On estime donc sur
    // la formule juste en dessous, « Mains libres », et on le DIT au client, plutôt
    // que d'annoncer un chiffre qu'il faudrait renier après la visite.
    // Celui qui affiche ce résultat doit reprendre `visioRequise` et l'expliquer.
    const formuleEstimee = (o.formule === 'luxe') ? 'premium' : o.formule;
    const visioRequise = (o.formule === 'luxe');
    // (le multiplicateur de main d'œuvre par formule a disparu avec le calcul au m³)

    const nbJours = jours(km);
    const kmAR = km * 2;   // le camion revient TOUJOURS : tout se compte en aller-retour

    /* ══════════════════════════ LE PRIX DE VENTE ═══════════════════════════
       Quatre lignes, chacune défendable au téléphone :
           socle de formule + volume × tarif au m³
         + kilomètres au-delà des 15 premiers
         + étages et portage, proportionnels au volume
         + démontage des meubles déclarés
       Les coûts (carburant, péage, location) ne s'ajoutent PAS : ils sont déjà
       couverts par le socle et par le tarif au kilomètre. Les additionner
       reviendrait à facturer la route deux fois. Ils restent calculés plus bas
       pour que le cockpit affiche la marge réelle.                            */
    const g = CFG.grilleFormule[formuleEstimee] || CFG.grilleFormule.premium;
    // Au-delà du seuil, un SECOND camion est loué : on revient au tarif d'avant la baisse.
    const deuxiemeCamion = volume > CFG.seuilDeuxiemeCamionM3;
    const tarifBas  = deuxiemeCamion ? g.m3BasGros  : g.m3Bas;
    const tarifHaut = deuxiemeCamion ? g.m3HautGros : g.m3Haut;
    const volumeBas = Math.max(g.plancherBas, volume * tarifBas);
    const volumeHaut = Math.max(g.plancherHaut, volume * tarifHaut);
    // Le nombre de camions commande la part « frais » du kilomètre : il doit donc
    // être connu AVANT de calculer le prix, pas seulement au moment des coûts.
    const fl = flotte(volume);
    const nbCamions = fl.loues + (fl.propre ? 1 : 0);
    const prixKm = supplementKm(km, fl);
    // Approche : ce qu'il en coûte d'aller travailler loin de la base. Facturée par camion,
    // comme le reste, et seulement au-delà de la franchise.
    const kmApp = Math.max(0, Math.round(o.kmApproche || 0) - CFG.approcheFranchiseKm);
    const prixApproche = kmApp > 0 ? Math.round(kmApp * CFG.approcheTarifKm * nbCamions) : 0;
    const acces = surcoutAcces(o.depart, volume) + surcoutAcces(o.arrivee, volume);
    const dem = supplementDemontage(o.demontage, formuleEstimee);
    const spe = supplementSpeciaux(o.inventaire);
    const mm = coutMonteMeuble(o.depart, o.arrivee, volume);

    /* Les options s'ajoutent IDENTIQUEMENT au bas et au haut. Un troisième étage
       et un dressing à démonter ne sont pas des incertitudes : ils sont là ou ils
       n'y sont pas. Les faire varier avec la fourchette laisserait croire qu'on
       hésite sur des faits que le client vient justement de déclarer. */
    const options = prixKm + prixApproche + acces + dem.total + spe.total + mm.total;
    const bas = arrondi10(volumeBas + options);
    const haut = arrondi10(volumeHaut + options);
    const prixVolume = Math.round(volumeBas);   // conservé pour le détail de la fiche

    /* ── Coûts réels, pour le cockpit uniquement. Jamais montrés au client. ──
       Ils servent à afficher la marge dans la fiche : sans eux, impossible de
       savoir jusqu'où descendre au téléphone sans travailler à perte. */
    // Le carburant additionne déjà la consommation de tous les camions mobilisés
    // (conso() cumule le 12 m³ de LBC et chaque 20 m³ loué).
    const carburant = kmAR * (conso(volume) / 100) * CFG.prixCarburant;
    // ⚠️ CORRECTION DU 6 AOÛT 2026 : le péage se paie PAR CAMION. À 30 m³, deux
    // camions roulent et passent chacun au péage, mais il n'était compté qu'une fois.
    // Sur un Nice-Paris à deux camions, c'était 335 € de coûts invisibles, donc une
    // marge surévaluée d'autant.
    const peage = km > CFG.peageDesKm ? kmAR * CFG.peageKm * nbCamions : 0;
    // La main d'œuvre n'est un COÛT que s'il faut payer quelqu'un EN PLUS. En dessous
    // du seuil de renfort, Edouard et Anthony s'en chargent : leur temps est leur
    // revenu, et le déduire fausserait la lecture de la rentabilité.
    // Une personne en renfort au-delà de 35 m³, deux au-delà de 55, payées à la journée
    // mobilisée (chantier et route comprises). C'est la seule main d'œuvre qui coûte
    // vraiment de l'argent.
    const nbRenforts = volume >= CFG.seuilRenfort2M3 ? 2 : (volume >= CFG.seuilRenfortM3 ? 1 : 0);
    // Le renfort est payé par journée mobilisée : une en local, deux en longue distance.
    const mainOeuvre = nbRenforts * CFG.tarifRenfortJour * Math.max(1, nbJours);
    const camion = coutLocation(volume, km, nbJours);
    // Le monte-meuble est une location réelle : il entre dans les coûts autant que
    // dans le prix. Ne le compter que dans le prix ferait apparaître une marge qui
    // n'existe pas.
    const couts = carburant + peage + mainOeuvre + camion + mm.total;

    return {
      bas, haut, volume, km,
      kmApproche: Math.round(o.kmApproche || 0), prixApproche,
      // false = la distance n'a pas pu être calculée. Celui qui affiche ce résultat DOIT
      // masquer le prix dans ce cas, et proposer un rappel plutôt qu'un chiffre inventé.
      distanceFiable,
      // true = le client a demandé « Mains dans les poches », mais la fourchette
      // ci-dessus est celle de « Mains libres ». À NE JAMAIS afficher sans l'expliquer :
      // le prix de l'emballage se chiffre après une visio ou des photos.
      visioRequise,
      formuleEstimee,
      // Détail interne, utile pour vérifier la rentabilité (jamais affiché au client)
      detail: { couts: Math.round(couts), carburant: Math.round(carburant), peage: Math.round(peage),
                mainOeuvre: Math.round(mainOeuvre), camion: camion, acces: acces, jours: nbJours,
                // Décomposition du prix de vente, ligne par ligne, pour pouvoir
                // l'expliquer au client au téléphone sans le recalculer de tête.
                prixVolume: Math.round(prixVolume), prixKm: prixKm,
                speciaux: spe.total, speciauxLignes: spe.lignes,
                monteMeuble: mm.total, monteMeubleNb: mm.nombre,
                // Démontage : le total facturé et le détail ligne par ligne, pour que le
                // devis du cockpit reprenne exactement ce qui a été annoncé au client.
                demontage: dem.total, demontageLignes: dem.lignes,
                // Marge réelle : ce qui reste une fois les coûts déduits du prix bas.
                // C'est le repère pour savoir jusqu'où négocier au téléphone.
                marge: Math.round(bas - couts),
                // Volume réellement déclaré par le client, et si le garde-fou a dû prendre le
                // relais : c'est le signal qu'il faut vérifier l'inventaire au téléphone.
                volumeDeclare: Math.round(volInv * 10) / 10,
                /* Conservé à false : plus aucun volume n'est relevé. Le champ reste pour
                   ne pas casser ce qui le lit encore. */
                plancherApplique: false }
    };
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Distance entre deux adresses. Les coordonnées viennent du cache alimenté par
  // l'autocomplétion (window.LBC_GEO) ; si l'adresse a été tapée à la main, on géocode
  // à la volée via la Base Adresse Nationale (gratuit, sans clé). En cas d'échec on
  // renvoie null et l'estimation retombe sur la distance par défaut.
  // ─────────────────────────────────────────────────────────────────────────
  /* ⚠️ ON NE RENONCE PAS AU PREMIER ÉCHEC.
     Une seule requête ratée et le client ne voyait AUCUN prix : la page annonçait
     « nous vous rappelons » à quelqu'un venu chercher un montant. C'est arrivé deux
     fois sur quatre-vingt-cinq demandes en deux mois, et les quatre adresses
     concernées étaient parfaitement valides — c'est le service d'annuaire qui n'avait
     pas répondu à cet instant.

     On essaie donc l'adresse complète, puis, à défaut, le code postal et la commune
     seuls : « 06250 Mougins » situe le chantier à un kilomètre près, ce qui est
     largement assez pour une FOURCHETTE. Et ce second appel rattrape au passage
     l'aléa réseau d'une seconde, qui est la cause la plus probable.

     Une distance approchée vaut infiniment mieux que pas de prix du tout. */
  function versionsDe(adresse) {
    const s = String(adresse || "").trim();
    if (!s) return [];
    const out = [s];
    /* ⚠️ LE CODE POSTAL D'ABORD, LA VIRGULE ENSUITE.
       Quand le client passe par l'autocomplétion, l'adresse revient d'un seul tenant :
       « 329 Rue Fontvieille 06250 Mougins », sans virgule. C'est le cas le PLUS
       fréquent, et un repli qui ne saurait couper que sur la virgule l'aurait raté
       précisément là où il sert le plus.
       On coupe donc au code postal, qui marque toujours le début de la commune. */
    const cp = s.match(/\b\d{5}\b/);
    if (cp) {
      const commune = s.slice(cp.index).trim();
      if (commune && commune !== s) out.push(commune);
    }
    const virgule = s.lastIndexOf(",");
    if (virgule > 0) {
      const commune = s.slice(virgule + 1).trim();
      if (commune && commune !== s && out.indexOf(commune) < 0) out.push(commune);
    }
    return out;
  }

  /* ⚠️ EN DESSOUS DE CE SCORE, LA BASE FRANÇAISE A DEVINÉ, PAS TROUVÉ.
     Elle répond toujours quelque chose, même pour une adresse étrangère : « Avenue
     Albert 62, Bruxelles » lui fait rendre « Avenue de Bruxelles, 81000 Albi », avec un
     score de 0,55. Une vraie adresse française monte à 0,98. Sans ce seuil, un
     déménagement vers la Belgique était chiffré sur Albi — moitié moins de kilomètres,
     et un prix annoncé au client qu'on ne pouvait pas tenir. */
  var SCORE_MINIMUM = 0.7;

  function geocoderFrance(requete) {
    return fetch("https://api-adresse.data.gouv.fr/search/?limit=1&q=" + encodeURIComponent(requete))
      .then((r) => r.json())
      .then((d) => {
        const f = (d.features || [])[0];
        if (!f || !f.geometry || !f.geometry.coordinates) return null;
        if (((f.properties || {}).score || 0) < SCORE_MINIMUM) return null;
        return { lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1] };
      })
      .catch(() => null);
  }

  /* Le reste du monde, via Photon (OpenStreetMap). On ne l'interroge qu'en second : la
     base nationale est meilleure sur les adresses françaises.
     ⚠️ Photon et pas Nominatim : Nominatim refuse les requêtes automatisées (403) et sa
     politique d'usage interdit ce type d'appel depuis une application. */
  function geocoderMonde(requete) {
    return fetch("https://photon.komoot.io/api/?limit=1&q=" + encodeURIComponent(requete))
      .then((r) => r.json())
      .then((d) => {
        const f = (d.features || [])[0];
        if (!f || !f.geometry || !f.geometry.coordinates) return null;
        return { lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1] };
      })
      .catch(() => null);
  }

  function geocoder(requete) {
    return geocoderFrance(requete).then((r) => r || geocoderMonde(requete));
  }

  function coordsDe(adresse) {
    if (!adresse) return Promise.resolve(null);
    const cache = window.LBC_GEO || {};
    const hit = cache[String(adresse).trim().toLowerCase()];
    if (hit) return Promise.resolve(hit);
    const essais = versionsDe(adresse);
    return essais.reduce(
      (chaine, requete) => chaine.then((trouve) => trouve || geocoder(requete)),
      Promise.resolve(null)
    );
  }

  function haversine(a, b) {
    const R = 6371, rad = (x) => x * Math.PI / 180;
    const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  // Distance routière estimée entre deux adresses, en km. null si indéterminable.
  function distanceKm(depart, arrivee) {
    return Promise.all([coordsDe(depart), coordsDe(arrivee)]).then(([a, b]) => {
      if (!a || !b) return null;
      return Math.round(haversine(a, b) * CFG.coefRoute);
    }).catch(() => null);
  }

  // Distance d'approche facturable : la base de Nice jusqu'à l'extrémité du chantier LA
  // PLUS PROCHE d'elle, départ ou arrivée.
  //
  // ⚠️ ON PREND LA PLUS COURTE DES DEUX, JAMAIS LE DÉPART SEUL.
  // Cette fonction ne regardait que l'adresse de départ. Sur un Bagnolet → Le Cannet, elle
  // renvoyait 855 km et facturait 725 € d'approche, alors que l'arrivée est à 31 km de la
  // base : le camion rentre chez lui à vide sur 31 km, pas sur 855. Le devis annoncé au
  // client sortait 840 € au-dessus du prix réel, et c'est justement le marché principal —
  // les gens qui s'installent sur la Côte. Douze dossiers en portaient la trace, jusqu'à
  // 1 296 € facturés à tort sur un Mazerolles-du-Razès → Toulon.
  // Le cockpit applique déjà cette règle (iRapprochementBase) : les deux doivent dire la
  // même chose, sinon le site annonce un prix que le devis contredit.
  //
  // Renvoie 0 si aucune adresse n'est reconnue : mieux vaut ne rien facturer qu'inventer.
  function distanceBase(depart, arrivee) {
    const base = { lat: CFG.baseLat, lon: CFG.baseLng };
    return Promise.all([coordsDe(depart), coordsDe(arrivee)]).then(([a, b]) => {
      const d = [a, b].filter(Boolean).map((p) => haversine(base, p) * CFG.coefRoute);
      return d.length ? Math.round(Math.min.apply(null, d)) : 0;
    }).catch(() => 0);
  }

  window.LBC_PRICING = { estimer, distanceKm, distanceBase, CFG };
})();
