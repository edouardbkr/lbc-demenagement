// distance.js — la VRAIE distance par la route entre deux adresses, pour l'estimateur du site.
//
// POURQUOI CETTE FONCTION EXISTE
// ------------------------------
// Le site n'appelait aucun calculateur d'itinéraire. Il prenait la distance à vol
// d'oiseau et la multipliait par 1,25 (CFG.coefRoute dans pricing.jsx), c'est-à-dire
// qu'il supposait la même sinuosité de route dans toutes les directions.
//
// Mesuré le 29 août 2026 sur 17 trajets au départ de Nice :
//
//   Vers l'OUEST le coefficient est juste, l'A8 longe la côte en ligne quasi droite.
//     Marseille +0 %, Cannes +0 %, Bordeaux +1 %, Milan +2 %,
//     Toulon / Aix / Montpellier / Toulouse −4 % (le site est même généreux).
//
//   Vers le NORD il s'effondre, il faut contourner les Alpes.
//     Bonneville  340 km annoncés contre 508 réels  → +49 %
//     Genève      364 km annoncés contre 534 réels  → +47 %
//     Lyon        373 km annoncés contre 471 réels  → +26 %
//
//   Et en LOCAL dans les collines il se trompe aussi, les corniches ne se voient pas
//   à vol d'oiseau : Monaco +24 %, Grasse +23 %, Menton +16 %.
//
// Conséquence concrète, dossier WEB-3664 (Nice → Bonneville) : le site a annoncé
// 1 450 – 1 670 € à la cliente sur la base de 340 km. À 508 km la grille donne
// 1 610 – 1 770 €. Il a fallu écrire à la cliente pour lui expliquer l'écart, ce qui
// est exactement ce que la signature du site promet de ne jamais faire.
//
// CE QU'ELLE FAIT
// ---------------
// Elle appelle le calculateur d'itinéraires de Google, côté serveur, et renvoie la
// distance en kilomètres et le péage estimé. C'est le même moteur que `/api/route` du
// cockpit : les deux doivent dire la même chose, sinon le prix annoncé sur le site ne
// correspond plus à celui que le devis calcule.
//
// ⚠️ LA CLÉ NE SORT JAMAIS DU SERVEUR. Elle vit dans la variable d'environnement
// GOOGLE_API_KEY du projet Cloudflare Pages, jamais dans le JavaScript de la page.
//
// ⚠️ ELLE NE DOIT JAMAIS FAIRE ÉCHOUER L'ESTIMATEUR. Toute erreur — clé absente,
// quota, adresse introuvable, panne Google — renvoie `{ km: null }` avec un HTTP 200.
// L'appelant retombe alors sur l'ancien calcul à vol d'oiseau. Un estimateur qui
// affiche une fourchette approximative vaut infiniment mieux qu'un estimateur muet.
// C'est aussi pour ça qu'on ne répond jamais en 5xx : Cloudflare masque les erreurs
// serveur des fonctions Pages, et le navigateur ne verrait qu'un échec sans message.

const CORS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'public, max-age=86400',
};

const rep = (obj) => new Response(JSON.stringify(obj), { status: 200, headers: CORS });

export async function onRequest(context) {
  const { request, env } = context;
  try {
    const p = new URL(request.url).searchParams;
    const from = (p.get('from') || '').trim();
    const to = (p.get('to') || '').trim();
    if (!from || !to) return rep({ km: null, motif: 'from/to requis' });

    const key = env.GOOGLE_API_KEY;
    if (!key) return rep({ km: null, motif: 'no_key' });

    const r = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'routes.distanceMeters,routes.travelAdvisory.tollInfo,routes.legs.travelAdvisory.tollInfo',
      },
      body: JSON.stringify({
        origin: { address: from },
        destination: { address: to },
        travelMode: 'DRIVE',
        routingPreference: 'TRAFFIC_UNAWARE',
        extraComputations: ['TOLLS'],
        regionCode: 'FR',
        languageCode: 'fr',
      }),
    });

    const j = await r.json();
    if (j.error) return rep({ km: null, motif: (j.error && j.error.message) || 'api_error' });

    const route = j.routes && j.routes[0];
    if (!route) return rep({ km: null, motif: 'no_route' });

    const km = Math.round((route.distanceMeters || 0) / 1000);
    if (!km) return rep({ km: null, motif: 'distance_nulle' });

    // Le péage arrive tantôt au niveau de l'itinéraire, tantôt par tronçon : on tente les
    // deux, sinon un Nice-Paris ressort « sans péage ». Repris tel quel de /api/route.
    const prixDe = (ti) => {
      if (!ti || !Array.isArray(ti.estimatedPrice) || !ti.estimatedPrice.length) return null;
      const x = ti.estimatedPrice.find((e) => e.currencyCode === 'EUR') || ti.estimatedPrice[0];
      return Number(x.units || 0) + Number(x.nanos || 0) / 1e9;
    };
    let peage = prixDe(route.travelAdvisory && route.travelAdvisory.tollInfo);
    if (peage == null && Array.isArray(route.legs)) {
      let somme = 0, trouve = false;
      route.legs.forEach((l) => {
        const v = prixDe(l.travelAdvisory && l.travelAdvisory.tollInfo);
        if (v != null) { somme += v; trouve = true; }
      });
      if (trouve) peage = somme;
    }

    return rep({ km, peage: peage == null ? null : Math.round(peage) });
  } catch (e) {
    return rep({ km: null, motif: (e && e.message) || 'err' });
  }
}
