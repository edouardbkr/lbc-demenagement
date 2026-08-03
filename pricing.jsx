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
    prixCarburant: 1.85,      // € par litre de gazole
    consoPetit: 12,           // L/100 km — camion < 20 m³
    consoMoyen: 18,           // L/100 km — camion 20 à 40 m³
    consoGrand: 22,           // L/100 km — camion > 40 m³
    peageKm: 0.18,            // € par km d'autoroute (classe 3/4)
    peageDesKm: 60,           // en dessous, trajet local sans autoroute payante

    // ── MAIN D'ŒUVRE ───────────────────────────────────────────────────────
    // Elle n'est un COÛT que lorsqu'il faut payer quelqu'un EN PLUS.
    //
    // Sur les petits et moyens chantiers, Edouard et Anthony font le travail eux-mêmes :
    // leur temps n'est pas une dépense, c'est leur revenu. Le compter en coût revenait à
    // déduire leur propre salaire du bénéfice affiché, donc à sous-estimer ce qui rentre
    // réellement. Au-delà du seuil ci-dessous, il faut du renfort, et là c'est une vraie
    // sortie d'argent.
    seuilRenfortM3: 35,       // au-delà, un troisième paire de bras est nécessaire
    mainOeuvreMin: 300,       // € — plancher de main d'œuvre quand il y a renfort
    mainOeuvreM3: 20,         // € par m³ manipulé (charge, porte, cale, décharge) — compté UNE fois
    tarifJourRoute: 300,      // € par journée de route supplémentaire (renfort mobilisé)
    // La formule change la charge de travail : tout emballer et tout réinstaller coûte
    // beaucoup plus d'heures que simplement charger et décharger.
    mainOeuvreFormule: { standard: 1.0, premium: 1.25, luxe: 1.6 },

    camionSeuilM3: 20,        // au-delà, il faut louer un camion
    camionLocation: 200,      // € — location de base (première journée)
    camionJourSup: 120,       // € par journée supplémentaire

    // ── MARGE CIBLE ────────────────────────────────────────────────────────
    // C'est ce qui reste APRÈS déduction de tous les coûts ci-dessus.
    //
    // Trois tranches de distance, et dans chacune une distinction petit / gros chantier.
    // Un déménagement de 25 m³ mobilise un camion, plus de bras et souvent une journée
    // entière : il ne peut pas rapporter la même chose qu'un studio.
    //
    //   local     ≤ 50 km    la journée, retour le soir
    //   régional  50–200 km  la ville d'à côté, souvent la journée mais tendue
    //   longue    > 200 km   2 à 3 jours de mobilisation
    //
    // ⚠️ Ces marges s'ajoutent aux coûts, elles ne les remplacent pas. Et la main d'œuvre
    // est comptée dans les coûts : si tu fais le chantier toi-même, ce qui rentre
    // réellement dans ta poche est la marge PLUS cette main d'œuvre.
    seuilGrosVolumeM3: 20,        // à partir de là, on bascule sur la grille « gros »
    // Depuis que la main d'œuvre interne n'est plus comptée en coût, ces marges sont bien
    // ce qui rentre RÉELLEMENT dans la poche.
    //
    // La marge est un socle PLUS une part au m³ (voir margeParM3). Sans cette part, un
    // 3 pièces de 33 m³ ressortait au même prix qu'un 2 pièces de 22 m³ : puisque le travail
    // n'est plus compté en coût, le volume ne pesait plus sur rien. Or 11 m³ de plus, c'est
    // une demi-journée de plus. Le prix doit le refléter, sinon il n'est pas crédible.
    margeParM3: 15,
    margeParDistance: [
      { jusquKm: 50,       petit: { min: 700,  max: 950  }, gros: { min: 800,  max: 1150 } },
      { jusquKm: 200,      petit: { min: 1150, max: 1400 }, gros: { min: 1300, max: 1650 } },
      { jusquKm: Infinity, petit: { min: 1550, max: 1900 }, gros: { min: 1600, max: 2100 } }
    ],
    seuilLongueDistanceKm: 200,   // au-delà : journées de route en plus, camion à la journée

    // La marge suit aussi la formule : emballer et réinstaller se vend plus cher.
    formuleMult: { standard: 1.0, premium: 1.2, luxe: 1.45 },

    // Marge de sécurité sur le volume. Les clients oublient TOUJOURS des choses (cave, garage,
    // placards, cartons sous-estimés). 10 % de coussin sur le volume final.
    margeVolume: 1.10,

    // Prix plancher affiché : en dessous, un déménagement n'est jamais rentable, même
    // pour trois cartons à 10 km. Filet de sécurité, rarement atteint.
    minimum: 900,

    // Surcoût d'accès (identique au cockpit) — main d'œuvre supplémentaire
    etageSansAscenseur: 20,   // € par étage
    etageAscenseur1p: 8,      // € par étage si la cabine ne prend qu'une personne
    portageOffert: 20,        // mètres de portage inclus
    portageParMetre: 3,       // € par mètre au-delà

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
      studio: { min: 5, typique: 12, max: 15 },
      t2: { min: 8, typique: 20, max: 25 },
      t3: { min: 12, typique: 30, max: 40 },
      t4: { min: 18, typique: 42, max: 65 }
    }
  };

  // Volumes de transport par meuble (m³) — table reprise du cockpit pour que le prix annoncé
  // au client et le devis calculé dans le cockpit partent de la MÊME base.
  const VOL = {
    'canapé 2 places': 1.5, 'canapé 3 places': 2.0, "canapé d'angle": 3.0, 'canapé convertible': 2.2, 'canapé': 1.8, 'fauteuil': 0.8, 'pouf': 0.3,
    'table basse': 0.5, 'meuble tv': 0.8, 'bibliothèque': 1.2, 'buffet': 1.3, 'vaisselier': 1.4, 'étagère': 0.7, 'meuble de rangement': 1.0,
    'lit simple': 1.0, 'lit double': 1.8, 'lit 2 places': 1.8, 'lit king size': 2.2, 'lit électrique': 2.0, 'lit coffre': 2.0, 'lit superposé': 2.0, 'lit 1 place': 1.0, 'sommier': 1.0, 'matelas double': 1.0, 'matelas': 0.8, 'lit': 1.5,
    'armoire 2 portes': 1.6, 'armoire 3 portes': 2.3, 'armoire': 1.8, 'dressing': 2.0, 'penderie': 1.5, 'commode': 0.7, 'table de chevet': 0.2, 'coiffeuse': 0.6, 'miroir': 0.3,
    'table à manger': 1.0, 'table + chaises': 1.6, 'table de salle à manger': 1.2, 'table': 0.8, 'chaise': 0.2, 'tabouret': 0.15, 'banc': 0.5,
    'bureau': 0.9, 'chaise de bureau': 0.4, 'caisson': 0.3,
    'réfrigérateur': 0.7, 'frigo américain': 1.1, 'frigo': 0.7, 'congélateur': 0.7, 'lave-linge': 0.6, 'machine à laver': 0.6, 'sèche-linge': 0.6, 'lave-vaisselle': 0.5, 'four': 0.3, 'cuisinière': 0.5, 'micro-ondes': 0.1, 'meuble de cuisine': 0.8,
    'télévision': 0.3, 'écran': 0.2, 'ordinateur': 0.1, 'tv': 0.3,
    'vélo': 0.6, 'tondeuse': 0.4, 'établi': 1.0, 'barbecue': 0.5, 'salon de jardin': 2.0, 'parasol': 0.3,
    'piano droit': 2.5, 'piano à queue': 4.0, 'piano': 2.5, 'coffre-fort': 0.8, 'aquarium': 0.5, 'machine de sport': 1.2, 'tapis de course': 1.0, 'billard': 2.5, 'baby-foot': 1.2, 'table de ping-pong': 1.5, 'jacuzzi': 3.0, 'spa': 3.0, 'cave à vin': 0.8, "borne d'arcade": 1.0, 'statue': 0.6,
    "œuvre d'art / tableau": 0.3, 'tableau': 0.3
  };

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

  // Surcoût d'accès pour un côté (départ ou arrivée), au format déjà converti par le formulaire :
  // { etage: 3, ascenseur: true, ascTaille: "1 personne", portage: 40 }
  function surcoutAcces(side) {
    if (!side) return 0;
    let s = 0;
    const et = Number(side.etage) || 0;
    if (!side.ascenseur) s += et * CFG.etageSansAscenseur;
    else if ((side.ascTaille || '') === '1 personne') s += et * CFG.etageAscenseur1p;
    const port = Number(side.portage) || 0;
    if (port > CFG.portageOffert) s += (port - CFG.portageOffert) * CFG.portageParMetre;
    return s;
  }

  // Consommation du camion nécessaire pour ce volume
  function conso(volume) {
    if (volume > 40) return CFG.consoGrand;
    if (volume >= CFG.camionSeuilM3) return CFG.consoMoyen;
    return CFG.consoPetit;
  }

  // Nombre de journées mobilisées. En local tout se fait dans la journée. En longue distance
  // il faut compter la route aller-retour (≈700 km par jour de conduite raisonnable) EN PLUS
  // de la journée de chargement/déchargement.
  function jours(km, volume) {
    if (km <= CFG.seuilLongueDistanceKm) return volume > 45 ? 2 : 1;
    return 1 + Math.ceil((km * 2) / 700);
  }

  const arrondi10 = (n) => Math.round(n / 10) * 10;

  // ─────────────────────────────────────────────────────────────────────────
  // Estimation. Renvoie { bas, haut, volume, km } — ou null si pas assez d'infos.
  // ─────────────────────────────────────────────────────────────────────────
  function estimer(o) {
    o = o || {};
    const volInv = volInventaire(o.inventaire, o.cartons);
    const aInventaire = (o.inventaire || []).length > 0;
    const plage = CFG.volumeSurface[o.surface] || null;

    // L'inventaire prime dès qu'il existe : c'est la seule donnée qui décrit vraiment le
    // déménagement. La surface ne sert qu'à poser un plancher de crédibilité (inventaire
    // bâclé) ou à combler l'absence totale d'inventaire (on prend alors le haut de fourchette).
    let volBase;
    if (aInventaire) volBase = Math.max(volInv, plage ? plage.min : 0);
    // Sans meubles déclarés on part du volume TYPIQUE de ce logement, pas du maximum : le
    // maximum chiffrait chaque 4 pièces comme une maison et faisait fuir avant le premier
    // appel. On prend quand même le dessus si le client a annoncé un gros paquet de cartons
    // (200 cartons dans un studio, ça arrive).
    else volBase = Math.max(plage ? (plage.typique || plage.max) : 0, volInv);

    if (!volBase) return null;
    const volume = Math.round(volBase * CFG.margeVolume);

    const km = (o.km != null && o.km > 0) ? Math.round(o.km) : CFG.kmParDefaut;
    const mult = CFG.formuleMult[o.formule] != null ? CFG.formuleMult[o.formule] : 1.2;
    const multMO = CFG.mainOeuvreFormule[o.formule] != null ? CFG.mainOeuvreFormule[o.formule] : 1.25;

    const nbJours = jours(km, volume);
    const kmAR = km * 2;   // le camion revient TOUJOURS : tout se compte en aller-retour

    // ── Coûts réels du chantier ──
    const carburant = kmAR * (conso(volume) / 100) * CFG.prixCarburant;
    const peage = km > CFG.peageDesKm ? kmAR * CFG.peageKm : 0;
    // Manutention : chargement + déchargement. Travail total, fait UNE fois, pas une dépense
    // qui se répète chaque jour. Les journées de route s'ajoutent séparément.
    //
    // ⚠️ Elle n'est comptée en COÛT que si le chantier dépasse le seuil de renfort. En dessous,
    // Edouard et Anthony s'en chargent : leur temps est leur revenu, pas une dépense, et le
    // déduire du bénéfice affiché fausserait la lecture de la rentabilité.
    const renfort = volume >= CFG.seuilRenfortM3;
    const manutention = renfort ? Math.max(CFG.mainOeuvreMin, volume * CFG.mainOeuvreM3 * multMO) : 0;
    const joursRoute = km > CFG.seuilLongueDistanceKm ? Math.ceil(kmAR / 700) : 0;
    const mainOeuvre = manutention + (renfort ? joursRoute * CFG.tarifJourRoute : 0);
    const camion = volume >= CFG.camionSeuilM3 ? CFG.camionLocation + (nbJours - 1) * CFG.camionJourSup : 0;
    const acces = surcoutAcces(o.depart) + surcoutAcces(o.arrivee);
    const couts = carburant + peage + mainOeuvre + camion + acces;

    // ── Marge cible, qui doit rester APRÈS déduction des coûts ──
    // On choisit la tranche de distance, puis la grille petit ou gros chantier.
    const tranche = CFG.margeParDistance.find((t) => km <= t.jusquKm) ||
                    CFG.margeParDistance[CFG.margeParDistance.length - 1];
    const grille = volume >= CFG.seuilGrosVolumeM3 ? tranche.gros : tranche.petit;
    // Socle + part au m³ : deux chantiers de volumes différents ne peuvent pas rapporter
    // la même chose, même quand c'est nous qui portons.
    const partVolume = volume * (CFG.margeParM3 || 0);
    const margeMin = (grille.min + partVolume) * mult;
    const margeMax = (grille.max + partVolume) * mult;

    let bas = arrondi10(couts + margeMin);
    let haut = arrondi10(couts + margeMax);
    if (bas < CFG.minimum) { bas = CFG.minimum; haut = Math.max(haut, arrondi10(CFG.minimum * 1.4)); }
    // La fourchette doit rester lisible : trop serrée elle n'a pas de sens, trop large elle
    // n'engage à rien et le prospect n'ose plus réserver. On vise 25 à 40 % d'écart.
    if (haut < arrondi10(bas * 1.25)) haut = arrondi10(bas * 1.25);
    if (haut > arrondi10(bas * 1.45)) haut = arrondi10(bas * 1.45);

    return {
      bas, haut, volume, km,
      // Détail interne, utile pour vérifier la rentabilité (jamais affiché au client)
      detail: { couts: Math.round(couts), carburant: Math.round(carburant), peage: Math.round(peage),
                mainOeuvre: Math.round(mainOeuvre), camion: camion, acces: acces, jours: nbJours,
                margeMin: Math.round(margeMin), margeMax: Math.round(margeMax),
                // Volume réellement déclaré par le client, et si le garde-fou a dû prendre le
                // relais : c'est le signal qu'il faut vérifier l'inventaire au téléphone.
                volumeDeclare: Math.round(volInv * 10) / 10,
                plancherApplique: aInventaire && volInv < (plage ? plage.min : 0) }
    };
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Distance entre deux adresses. Les coordonnées viennent du cache alimenté par
  // l'autocomplétion (window.LBC_GEO) ; si l'adresse a été tapée à la main, on géocode
  // à la volée via la Base Adresse Nationale (gratuit, sans clé). En cas d'échec on
  // renvoie null et l'estimation retombe sur la distance par défaut.
  // ─────────────────────────────────────────────────────────────────────────
  function coordsDe(adresse) {
    if (!adresse) return Promise.resolve(null);
    const cache = window.LBC_GEO || {};
    const hit = cache[String(adresse).trim().toLowerCase()];
    if (hit) return Promise.resolve(hit);
    return fetch("https://api-adresse.data.gouv.fr/search/?limit=1&q=" + encodeURIComponent(adresse))
      .then((r) => r.json())
      .then((d) => {
        const f = (d.features || [])[0];
        if (!f || !f.geometry || !f.geometry.coordinates) return null;
        return { lon: f.geometry.coordinates[0], lat: f.geometry.coordinates[1] };
      })
      .catch(() => null);
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

  window.LBC_PRICING = { estimer, distanceKm, CFG };
})();
