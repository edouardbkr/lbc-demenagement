/* pricing.jsx — compilé par build.js, ne pas éditer */
(function () {
(function () {
  const CFG = {
    prixCarburant: 1.85,
    consoPetit: 12,
    consoMoyen: 18,
    consoGrand: 22,
    peageKm: 0.18,
    peageDesKm: 60,
    seuilRenfortM3: 35,
    mainOeuvreMin: 300,
    mainOeuvreM3: 20,
    tarifJourRoute: 300,
    mainOeuvreFormule: {
      standard: 1.0,
      premium: 1.25,
      luxe: 1.6
    },
    camionSeuilM3: 20,
    camionLocation: 200,
    camionJourSup: 120,
    seuilGrosVolumeM3: 20,
    margeParM3: 15,
    margeParDistance: [{
      jusquKm: 50,
      petit: {
        min: 700,
        max: 950
      },
      gros: {
        min: 800,
        max: 1150
      }
    }, {
      jusquKm: 200,
      petit: {
        min: 1150,
        max: 1400
      },
      gros: {
        min: 1300,
        max: 1650
      }
    }, {
      jusquKm: Infinity,
      petit: {
        min: 1550,
        max: 1900
      },
      gros: {
        min: 1600,
        max: 2100
      }
    }],
    seuilLongueDistanceKm: 200,
    formuleMult: {
      standard: 1.0,
      premium: 1.2,
      luxe: 1.45
    },
    margeVolume: 1.10,
    minimum: 900,
    etageSansAscenseur: 20,
    etageAscenseur1p: 8,
    portageOffert: 20,
    portageParMetre: 3,
    peageKm: 0.18,
    peageDesKm: 60,
    kmParDefaut: 30,
    coefRoute: 1.25,
    volumeSurface: {
      studio: {
        min: 5,
        typique: 12,
        max: 15
      },
      t2: {
        min: 8,
        typique: 20,
        max: 25
      },
      t3: {
        min: 12,
        typique: 30,
        max: 40
      },
      t4: {
        min: 18,
        typique: 42,
        max: 65
      }
    }
  };
  const VOL = {
    'canapé 2 places': 1.5,
    'canapé 3 places': 2.0,
    "canapé d'angle": 3.0,
    'canapé convertible': 2.2,
    'canapé': 1.8,
    'fauteuil': 0.8,
    'pouf': 0.3,
    'table basse': 0.5,
    'meuble tv': 0.8,
    'bibliothèque': 1.2,
    'buffet': 1.3,
    'vaisselier': 1.4,
    'étagère': 0.7,
    'meuble de rangement': 1.0,
    'lit simple': 1.0,
    'lit double': 1.8,
    'lit 2 places': 1.8,
    'lit king size': 2.2,
    'lit électrique': 2.0,
    'lit coffre': 2.0,
    'lit superposé': 2.0,
    'lit 1 place': 1.0,
    'sommier': 1.0,
    'matelas double': 1.0,
    'matelas': 0.8,
    'lit': 1.5,
    'armoire 2 portes': 1.6,
    'armoire 3 portes': 2.3,
    'armoire': 1.8,
    'dressing': 2.0,
    'penderie': 1.5,
    'commode': 0.7,
    'table de chevet': 0.2,
    'coiffeuse': 0.6,
    'miroir': 0.3,
    'table à manger': 1.0,
    'table + chaises': 1.6,
    'table de salle à manger': 1.2,
    'table': 0.8,
    'chaise': 0.2,
    'tabouret': 0.15,
    'banc': 0.5,
    'bureau': 0.9,
    'chaise de bureau': 0.4,
    'caisson': 0.3,
    'réfrigérateur': 0.7,
    'frigo américain': 1.1,
    'frigo': 0.7,
    'congélateur': 0.7,
    'lave-linge': 0.6,
    'machine à laver': 0.6,
    'sèche-linge': 0.6,
    'lave-vaisselle': 0.5,
    'four': 0.3,
    'cuisinière': 0.5,
    'micro-ondes': 0.1,
    'meuble de cuisine': 0.8,
    'télévision': 0.3,
    'écran': 0.2,
    'ordinateur': 0.1,
    'tv': 0.3,
    'vélo': 0.6,
    'tondeuse': 0.4,
    'établi': 1.0,
    'barbecue': 0.5,
    'salon de jardin': 2.0,
    'parasol': 0.3,
    'piano droit': 2.5,
    'piano à queue': 4.0,
    'piano': 2.5,
    'coffre-fort': 0.8,
    'aquarium': 0.5,
    'machine de sport': 1.2,
    'tapis de course': 1.0,
    'billard': 2.5,
    'baby-foot': 1.2,
    'table de ping-pong': 1.5,
    'jacuzzi': 3.0,
    'spa': 3.0,
    'cave à vin': 0.8,
    "borne d'arcade": 1.0,
    'statue': 0.6,
    "œuvre d'art / tableau": 0.3,
    'tableau': 0.3
  };
  function volMeuble(label) {
    if (!label) return 0.8;
    const s = String(label).toLowerCase().trim();
    if (VOL[s] != null) return VOL[s];
    let best = 0;
    for (const k in VOL) {
      if (s.includes(k) && VOL[k] > best) best = VOL[k];
    }
    return best || 0.8;
  }
  function volInventaire(inventaire, cartons) {
    const meubles = (inventaire || []).reduce((a, it) => a + volMeuble(it && it.meuble) * (Number(it && it.quantite) || 1), 0);
    return meubles + (Number(cartons) || 0) * 0.1;
  }
  function surcoutAcces(side) {
    if (!side) return 0;
    let s = 0;
    const et = Number(side.etage) || 0;
    if (!side.ascenseur) s += et * CFG.etageSansAscenseur;else if ((side.ascTaille || '') === '1 personne') s += et * CFG.etageAscenseur1p;
    const port = Number(side.portage) || 0;
    if (port > CFG.portageOffert) s += (port - CFG.portageOffert) * CFG.portageParMetre;
    return s;
  }
  function conso(volume) {
    if (volume > 40) return CFG.consoGrand;
    if (volume >= CFG.camionSeuilM3) return CFG.consoMoyen;
    return CFG.consoPetit;
  }
  function jours(km, volume) {
    if (km <= CFG.seuilLongueDistanceKm) return volume > 45 ? 2 : 1;
    return 1 + Math.ceil(km * 2 / 700);
  }
  const arrondi10 = n => Math.round(n / 10) * 10;
  function estimer(o) {
    o = o || {};
    const volInv = volInventaire(o.inventaire, o.cartons);
    const aInventaire = (o.inventaire || []).length > 0;
    const plage = CFG.volumeSurface[o.surface] || null;
    let volBase;
    if (aInventaire) volBase = Math.max(volInv, plage ? plage.min : 0);else volBase = Math.max(plage ? plage.typique || plage.max : 0, volInv);
    if (!volBase) return null;
    const volume = Math.round(volBase * CFG.margeVolume);
    const distanceFiable = o.km != null && o.km > 0;
    const km = distanceFiable ? Math.round(o.km) : CFG.kmParDefaut;
    const mult = CFG.formuleMult[o.formule] != null ? CFG.formuleMult[o.formule] : 1.2;
    const multMO = CFG.mainOeuvreFormule[o.formule] != null ? CFG.mainOeuvreFormule[o.formule] : 1.25;
    const nbJours = jours(km, volume);
    const kmAR = km * 2;
    const carburant = kmAR * (conso(volume) / 100) * CFG.prixCarburant;
    const peage = km > CFG.peageDesKm ? kmAR * CFG.peageKm : 0;
    const renfort = volume >= CFG.seuilRenfortM3;
    const manutention = renfort ? Math.max(CFG.mainOeuvreMin, volume * CFG.mainOeuvreM3 * multMO) : 0;
    const joursRoute = km > CFG.seuilLongueDistanceKm ? Math.ceil(kmAR / 700) : 0;
    const mainOeuvre = manutention + (renfort ? joursRoute * CFG.tarifJourRoute : 0);
    const camion = volume >= CFG.camionSeuilM3 ? CFG.camionLocation + (nbJours - 1) * CFG.camionJourSup : 0;
    const acces = surcoutAcces(o.depart) + surcoutAcces(o.arrivee);
    const couts = carburant + peage + mainOeuvre + camion + acces;
    const tranche = CFG.margeParDistance.find(t => km <= t.jusquKm) || CFG.margeParDistance[CFG.margeParDistance.length - 1];
    const grille = volume >= CFG.seuilGrosVolumeM3 ? tranche.gros : tranche.petit;
    const partVolume = volume * (CFG.margeParM3 || 0);
    const margeMin = (grille.min + partVolume) * mult;
    const margeMax = (grille.max + partVolume) * mult;
    let bas = arrondi10(couts + margeMin);
    let haut = arrondi10(couts + margeMax);
    if (bas < CFG.minimum) {
      bas = CFG.minimum;
      haut = Math.max(haut, arrondi10(CFG.minimum * 1.4));
    }
    if (haut < arrondi10(bas * 1.25)) haut = arrondi10(bas * 1.25);
    if (haut > arrondi10(bas * 1.45)) haut = arrondi10(bas * 1.45);
    return {
      bas,
      haut,
      volume,
      km,
      distanceFiable,
      detail: {
        couts: Math.round(couts),
        carburant: Math.round(carburant),
        peage: Math.round(peage),
        mainOeuvre: Math.round(mainOeuvre),
        camion: camion,
        acces: acces,
        jours: nbJours,
        margeMin: Math.round(margeMin),
        margeMax: Math.round(margeMax),
        volumeDeclare: Math.round(volInv * 10) / 10,
        plancherApplique: aInventaire && volInv < (plage ? plage.min : 0)
      }
    };
  }
  function coordsDe(adresse) {
    if (!adresse) return Promise.resolve(null);
    const cache = window.LBC_GEO || {};
    const hit = cache[String(adresse).trim().toLowerCase()];
    if (hit) return Promise.resolve(hit);
    return fetch("https://api-adresse.data.gouv.fr/search/?limit=1&q=" + encodeURIComponent(adresse)).then(r => r.json()).then(d => {
      const f = (d.features || [])[0];
      if (!f || !f.geometry || !f.geometry.coordinates) return null;
      return {
        lon: f.geometry.coordinates[0],
        lat: f.geometry.coordinates[1]
      };
    }).catch(() => null);
  }
  function haversine(a, b) {
    const R = 6371,
      rad = x => x * Math.PI / 180;
    const dLat = rad(b.lat - a.lat),
      dLon = rad(b.lon - a.lon);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function distanceKm(depart, arrivee) {
    return Promise.all([coordsDe(depart), coordsDe(arrivee)]).then(([a, b]) => {
      if (!a || !b) return null;
      return Math.round(haversine(a, b) * CFG.coefRoute);
    }).catch(() => null);
  }
  window.LBC_PRICING = {
    estimer,
    distanceKm,
    CFG
  };
})();
})();
