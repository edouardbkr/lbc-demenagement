/* pricing.jsx — compilé par build.js, ne pas éditer */
(function () {
(function () {
  const CFG = {
    prixCarburant: 2.20,
    consoPetit: 10,
    consoMoyen: 13,
    consoGrand: 23,
    peageKm: 0.18,
    peageDesKm: 60,
    seuilRenfortM3: 35,
    seuilRenfort2M3: 55,
    tarifRenfortJour: 150,
    capacitePropre: 12,
    capaciteLouee: 20,
    locationJourCamion: 50,
    locationJourAssurance: 39,
    locationKmBase: 38.5,
    locationKmTarif: 0.11,
    locationKmSeuil: 1000,
    locationKmTarif2: 0.28,
    seuilDeuxiemeCamionM3: 32,
    grilleFormule: {
      standard: {
        m3Bas: 30,
        m3Haut: 40,
        m3BasGros: 35,
        m3HautGros: 50,
        plancherBas: 638,
        plancherHaut: 850
      },
      premium: {
        m3Bas: 40,
        m3Haut: 60,
        m3BasGros: 50,
        m3HautGros: 70,
        plancherBas: 850,
        plancherHaut: 1148
      },
      luxe: {
        m3Bas: 40,
        m3Haut: 60,
        m3BasGros: 50,
        m3HautGros: 70,
        plancherBas: 950,
        plancherHaut: 1280
      }
    },
    baseLat: 43.7102,
    baseLng: 7.2620,
    approcheFranchiseKm: 50,
    approcheTarifKm: 0.90,
    kmInclus: 15,
    tarifKm: [{
      jusquKm: 500,
      parCamion: 1.80
    }, {
      jusquKm: Infinity,
      parCamion: 1.75
    }],
    tarifKmPropre: 1.50,
    prixMinimum: 400,
    margeVolume: 1.10,
    seuilLongueDistanceKm: 200,
    seuilJourneeUnique: 600,
    etageSansAscenseur: 30,
    etageAscenseur1p: 15,
    portageOffert: 20,
    portageParMetre: 1.25,
    peageKm: 0.18,
    peageDesKm: 60,
    kmParDefaut: 30,
    coefRoute: 1.25,
    volumeSurface: {
      studio: {
        min: 5,
        typique: 9,
        max: 15
      },
      t2: {
        min: 8,
        typique: 24,
        max: 25
      },
      t3: {
        min: 12,
        typique: 28,
        max: 40
      },
      t4: {
        min: 18,
        typique: 38,
        max: 65
      },
      maison: {
        min: 22,
        typique: 50,
        max: 90
      }
    }
  };
  const VOL = {
    'gazinière': 0.5,
    'bahut': 1.3,
    'console': 0.4,
    'tapis': 0.2,
    'lampadaire': 0.15,
    'lustre': 0.15,
    'imprimante': 0.1,
    'coffre': 0.5,
    'vitrine': 0.8,
    'meuble à chaussures': 0.3,
    'meuble bas': 0.5,
    'meuble haut': 0.4,
    'table extérieure': 0.6,
    'plaque de cuisson': 0.1,
    'climatiseur mobile': 0.2,
    'appareil de sport / tapis': 1.2,
    'autre électroménager': 0.5,
    'dressing sur mesure, plus de 2 m': 3,
    'dressing à portes coulissantes': 2.4,
    'mobilier de véranda': 1.5,
    'plancha': 0.3,
    'plantes / jardinières': 0.15,
    'plante': 0.15,
    'jardinière': 0.15,
    "œuvre d'art / tableau": 0.3,
    "oeuvre d'art / tableau": 0.3,
    'tableau': 0.3,
    'cheminée': 0.3,
    'lampe': 0.1,
    'paravent': 0.2,
    'pot de fleur': 0.08,
    'malle': 0.15,
    'carton': 0.05,
    'cartons': 0.05,
    'carton standard': 0.05,
    'carton livres': 0.04,
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
    'dressing sur mesure': 3.0,
    'dressing à portes coulissantes': 2.4,
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
  const DEMONTAGE_TARIF = [[/dressing.*(sur mesure|plus de 2)/, 350, false], [/dressing.*coulissant/, 300, false], [/dressing|penderie/, 250, false], [/lit.*superpos/, 130, false], [/lit.*(électrique|electrique)/, 120, false], [/lit.*coffre/, 120, false], [/lit.*baldaquin/, 150, false], [/lit.*king/, 150, true], [/armoire.*3/, 140, true], [/armoire/, 100, true], [/lit.*(1 place|enfant|simple)/, 40, true], [/lit/, 60, true], [/table/, 40, true], [/bureau/, 60, true], [/(étag|etag|biblio)/, 80, true], [/meuble en kit/, 80, true]];
  const DEMONTAGE_DEFAUT = 80;
  function tarifDemontage(label) {
    const s = String(label || '').toLowerCase();
    for (let i = 0; i < DEMONTAGE_TARIF.length; i++) {
      if (DEMONTAGE_TARIF[i][0].test(s)) return {
        prix: DEMONTAGE_TARIF[i][1],
        courant: DEMONTAGE_TARIF[i][2],
        connu: true
      };
    }
    return {
      prix: DEMONTAGE_DEFAUT,
      courant: true,
      connu: false
    };
  }
  function supplementDemontage(demontage, formule) {
    const lignes = [];
    let total = 0;
    const toutFacture = formule === 'standard';
    Object.keys(demontage || {}).forEach(label => {
      const q = Number(demontage[label]) || 0;
      if (q <= 0) return;
      const t = tarifDemontage(label);
      const facture = toutFacture || !t.courant;
      const montant = facture ? t.prix * q : 0;
      total += montant;
      lignes.push({
        label: label,
        quantite: q,
        prix: t.prix,
        montant: montant,
        facture: facture,
        connu: t.connu
      });
    });
    return {
      total: total,
      lignes: lignes
    };
  }
  const OBJET_SPECIAL = [[/piano.*queue/, 700], [/piano/, 350], [/billard/, 600], [/(jacuzzi|spa)/, 600], [/coffre-fort/, 350], [/(statue|sculpture)/, 200], [/aquarium/, 200], [/(baby-foot|arcade)/, 150], [/(machine de sport|tapis de course|appareil de sport)/, 150], [/ping-pong/, 120], [/cave à vin/, 120]];
  function supplementSpeciaux(inventaire) {
    const lignes = [];
    let total = 0;
    (inventaire || []).forEach(it => {
      const label = String(it && it.meuble || '').toLowerCase();
      const q = Number(it && it.quantite) || 1;
      for (let i = 0; i < OBJET_SPECIAL.length; i++) {
        if (OBJET_SPECIAL[i][0].test(label)) {
          const montant = OBJET_SPECIAL[i][1] * q;
          total += montant;
          lignes.push({
            label: it && it.meuble || '?',
            quantite: q,
            montant: montant
          });
          break;
        }
      }
    });
    return {
      total: total,
      lignes: lignes
    };
  }
  function coutMonteMeuble(depart, arrivee, volume) {
    const tarif = volume > 20 ? 600 : 400;
    let n = 0;
    if (depart && depart.monteMeuble) n++;
    if (arrivee && arrivee.monteMeuble) n++;
    return {
      total: n * tarif,
      nombre: n,
      tarif: tarif
    };
  }
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
  function surcoutAcces(side, volume) {
    if (!side) return 0;
    const parDix = Math.max(0.5, (Number(volume) || 0) / 10);
    let s = 0;
    const et = Number(side.etage) || 0;
    if (!side.ascenseur) s += et * CFG.etageSansAscenseur * parDix;else if ((side.ascTaille || '') === '1 personne') s += et * CFG.etageAscenseur1p * parDix;
    const port = Number(side.portage) || 0;
    if (port > CFG.portageOffert) s += (port - CFG.portageOffert) * CFG.portageParMetre * parDix;
    return Math.round(s);
  }
  function kmUnCamionLoue(km) {
    let precedent = CFG.kmInclus,
      total = 0;
    for (let i = 0; i < CFG.tarifKm.length; i++) {
      const t = CFG.tarifKm[i];
      const borne = Math.min(km, t.jusquKm);
      if (borne > precedent) total += (borne - precedent) * t.parCamion;
      precedent = borne;
      if (km <= t.jusquKm) break;
    }
    return total;
  }
  function supplementKm(km, fl) {
    if (!(km > CFG.kmInclus)) return 0;
    const f = fl && typeof fl === 'object' ? fl : {
      loues: Math.max(1, fl || 1),
      propre: false
    };
    const total = kmUnCamionLoue(km) * Math.max(0, f.loues) + (f.propre ? (km - CFG.kmInclus) * CFG.tarifKmPropre : 0);
    return Math.round(total);
  }
  function flotte(volume) {
    const P = CFG.capacitePropre,
      L = CFG.capaciteLouee;
    let loues = 0,
      propre = false;
    for (let i = 0; i < 20 && loues * L + (propre ? P : 0) < volume; i++) {
      const reste = volume - (loues * L + (propre ? P : 0));
      if (!propre && reste <= P) propre = true;else loues++;
    }
    return {
      propre: propre,
      loues: loues
    };
  }
  function conso(volume) {
    const f = flotte(volume);
    return (f.propre ? CFG.consoPetit : 0) + f.loues * CFG.consoMoyen;
  }
  function forfaitKmLoueur(kmParcourus) {
    if (kmParcourus <= CFG.locationKmSeuil) {
      return CFG.locationKmBase + CFG.locationKmTarif * kmParcourus;
    }
    return CFG.locationKmBase + CFG.locationKmTarif * CFG.locationKmSeuil + CFG.locationKmTarif2 * (kmParcourus - CFG.locationKmSeuil);
  }
  function coutLocation(volume, km, nbJours) {
    const f = flotte(volume);
    if (!f.loues) return 0;
    const jours = Math.max(1, nbJours);
    const parCamion = forfaitKmLoueur(km * 2) + CFG.locationJourCamion * (jours - 1) + CFG.locationJourAssurance * jours;
    return Math.round(f.loues * parCamion);
  }
  function jours(km) {
    return km <= CFG.seuilJourneeUnique ? 1 : 2;
  }
  const arrondi10 = n => Math.round(n / 10) * 10;
  function estimer(o) {
    o = o || {};
    const volInv = volInventaire(o.inventaire, o.cartons);
    const aInventaire = (o.inventaire || []).length > 0 || (Number(o.cartons) || 0) > 0;
    const plage = CFG.volumeSurface[o.surface] || null;
    let volBase;
    if (aInventaire) volBase = volInv;else volBase = Math.max(plage ? plage.typique || plage.max : 0, volInv);
    if (!volBase) return null;
    const volume = Math.round(volBase * CFG.margeVolume);
    const distanceFiable = o.km != null;
    const km = distanceFiable ? Math.max(3, Math.round(o.km)) : CFG.kmParDefaut;
    const formuleEstimee = o.formule === 'luxe' ? 'premium' : o.formule;
    const visioRequise = o.formule === 'luxe';
    const nbJours = jours(km);
    const kmAR = km * 2;
    const g = CFG.grilleFormule[formuleEstimee] || CFG.grilleFormule.premium;
    const deuxiemeCamion = volume > CFG.seuilDeuxiemeCamionM3;
    const tarifBas = deuxiemeCamion ? g.m3BasGros : g.m3Bas;
    const tarifHaut = deuxiemeCamion ? g.m3HautGros : g.m3Haut;
    const volumeBas = Math.max(g.plancherBas, volume * tarifBas);
    const volumeHaut = Math.max(g.plancherHaut, volume * tarifHaut);
    const fl = flotte(volume);
    const nbCamions = fl.loues + (fl.propre ? 1 : 0);
    const prixKm = supplementKm(km, fl);
    const kmApp = Math.max(0, Math.round(o.kmApproche || 0) - CFG.approcheFranchiseKm);
    const prixApproche = kmApp > 0 ? Math.round(kmApp * CFG.approcheTarifKm * nbCamions) : 0;
    const acces = surcoutAcces(o.depart, volume) + surcoutAcces(o.arrivee, volume);
    const dem = supplementDemontage(o.demontage, formuleEstimee);
    const spe = supplementSpeciaux(o.inventaire);
    const mm = coutMonteMeuble(o.depart, o.arrivee, volume);
    const options = prixKm + prixApproche + acces + dem.total + spe.total + mm.total;
    const bas = arrondi10(volumeBas + options);
    const haut = arrondi10(volumeHaut + options);
    const prixVolume = Math.round(volumeBas);
    const carburant = kmAR * (conso(volume) / 100) * CFG.prixCarburant;
    const peage = km > CFG.peageDesKm ? kmAR * CFG.peageKm * nbCamions : 0;
    const nbRenforts = volume >= CFG.seuilRenfort2M3 ? 2 : volume >= CFG.seuilRenfortM3 ? 1 : 0;
    const mainOeuvre = nbRenforts * CFG.tarifRenfortJour * Math.max(1, nbJours);
    const camion = coutLocation(volume, km, nbJours);
    const couts = carburant + peage + mainOeuvre + camion + mm.total;
    return {
      bas,
      haut,
      volume,
      km,
      kmApproche: Math.round(o.kmApproche || 0),
      prixApproche,
      distanceFiable,
      visioRequise,
      formuleEstimee,
      detail: {
        couts: Math.round(couts),
        carburant: Math.round(carburant),
        peage: Math.round(peage),
        mainOeuvre: Math.round(mainOeuvre),
        camion: camion,
        acces: acces,
        jours: nbJours,
        prixVolume: Math.round(prixVolume),
        prixKm: prixKm,
        speciaux: spe.total,
        speciauxLignes: spe.lignes,
        monteMeuble: mm.total,
        monteMeubleNb: mm.nombre,
        demontage: dem.total,
        demontageLignes: dem.lignes,
        marge: Math.round(bas - couts),
        volumeDeclare: Math.round(volInv * 10) / 10,
        plancherApplique: false
      }
    };
  }
  function versionsDe(adresse) {
    const s = String(adresse || "").trim();
    if (!s) return [];
    const out = [s];
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
  var SCORE_MINIMUM = 0.7;
  function geocoderFrance(requete) {
    return fetch("https://api-adresse.data.gouv.fr/search/?limit=1&q=" + encodeURIComponent(requete)).then(r => r.json()).then(d => {
      const f = (d.features || [])[0];
      if (!f || !f.geometry || !f.geometry.coordinates) return null;
      if (((f.properties || {}).score || 0) < SCORE_MINIMUM) return null;
      return {
        lon: f.geometry.coordinates[0],
        lat: f.geometry.coordinates[1]
      };
    }).catch(() => null);
  }
  function geocoderMonde(requete) {
    return fetch("https://photon.komoot.io/api/?limit=1&q=" + encodeURIComponent(requete)).then(r => r.json()).then(d => {
      const f = (d.features || [])[0];
      if (!f || !f.geometry || !f.geometry.coordinates) return null;
      return {
        lon: f.geometry.coordinates[0],
        lat: f.geometry.coordinates[1]
      };
    }).catch(() => null);
  }
  function geocoder(requete) {
    return geocoderFrance(requete).then(r => r || geocoderMonde(requete));
  }
  function coordsDe(adresse) {
    if (!adresse) return Promise.resolve(null);
    const cache = window.LBC_GEO || {};
    const hit = cache[String(adresse).trim().toLowerCase()];
    if (hit) return Promise.resolve(hit);
    const essais = versionsDe(adresse);
    return essais.reduce((chaine, requete) => chaine.then(trouve => trouve || geocoder(requete)), Promise.resolve(null));
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
  function distanceBase(depart, arrivee) {
    const base = {
      lat: CFG.baseLat,
      lon: CFG.baseLng
    };
    return Promise.all([coordsDe(depart), coordsDe(arrivee)]).then(([a, b]) => {
      const d = [a, b].filter(Boolean).map(p => haversine(base, p) * CFG.coefRoute);
      return d.length ? Math.round(Math.min.apply(null, d)) : 0;
    }).catch(() => 0);
  }
  window.LBC_PRICING = {
    estimer,
    distanceKm,
    distanceBase,
    CFG
  };
})();
})();
