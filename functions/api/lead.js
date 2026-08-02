// Cloudflare Pages Function — /api/lead
// Reçoit un lead depuis le site (même origine → jamais bloqué par les bloqueurs de pub / navigateurs privés)
// et l'insère côté serveur dans la table `leads` de Supabase. C'est ce qui fiabilise la capture des leads :
// avant, le navigateur du visiteur appelait supabase.co directement, ce qui était parfois bloqué (lead perdu).
//
// Règle d'or : un échec ne doit JAMAIS être silencieux. Si l'insert échoue, on renvoie un vrai code
// d'erreur HTTP (le site affiche alors un repli « appelez-nous » au lieu d'un faux « c'est envoyé »)
// ET on s'envoie une alerte par e-mail contenant le lead complet, pour pouvoir le rattraper à la main.
const SUPA_URL = "https://bxkzhyxdmtfutsaogxxk.supabase.co";
// Clé anon publique : insert-only sur la table leads (RLS). Aucun secret ici.
const SUPA_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4a3poeXhkbXRmdXRzYW9neHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNTQ5MTYsImV4cCI6MjA5NjgzMDkxNn0.IWdomNH2VYgkK7pxjf1C6vaiLAgmdZiiio6Q7-ElZuE";

// Alerte de dernier recours : appelée depuis Cloudflare (côté serveur), donc jamais bloquée par le
// navigateur du visiteur. Contient tout le lead : même si la base refuse, le prospect n'est pas perdu.
async function alerteLeadPerdu(env, detail, payload) {
  const c = (payload && payload.client) || {};
  const cle = env && env.RESEND_API_KEY;
  const corps =
    '<h2 style="color:#C2362B">Un lead n\'a PAS été enregistré</h2>' +
    '<p>La base a refusé l\'enregistrement. Ce prospect n\'est pas dans le cockpit, il faut le saisir à la main.</p>' +
    '<p><b>Erreur :</b> ' + esc(detail) + '</p>' +
    '<ul><li><b>Nom :</b> ' + esc(((c.prenom || '') + ' ' + (c.nom || '')).trim()) + '</li>' +
    '<li><b>Téléphone :</b> ' + esc(c.tel) + '</li><li><b>Email :</b> ' + esc(c.email) + '</li></ul>' +
    '<pre style="background:#F7F4EE;padding:12px;border-radius:8px;white-space:pre-wrap;font-size:12px">' +
    esc(JSON.stringify(payload || {}, null, 2).slice(0, 4000)) + '</pre>';
  if (!cle) { console.error("[lead] alerte impossible, RESEND_API_KEY absente"); return; }
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + cle, "Content-Type": "application/json" },
      body: JSON.stringify({ from: NOTIF_FROM, to: [NOTIF_TO], subject: "🚨 LEAD NON ENREGISTRÉ — à rattraper à la main", html: corps })
    });
  } catch (e) { console.error("[lead] alerte non envoyée", (e && e.message) || e); }
}

async function insert(payload) {
  return fetch(SUPA_URL + "/rest/v1/leads", {
    method: "POST",
    headers: { "apikey": SUPA_ANON, "Authorization": "Bearer " + SUPA_ANON, "Content-Type": "application/json", "Prefer": "return=minimal" },
    body: JSON.stringify({ payload })
  });
}

// ── Notification par e-mail, envoyée DEPUIS LE SERVEUR via Resend ─────────────
// Pourquoi pas formsubmit.co, utilisé jusqu'ici depuis le navigateur : c'est un relais
// tiers gratuit, sans garantie de livraison, bloqué par les bloqueurs de pub, et qui
// limite les envois rapprochés. Un même prospect déclenchait 3 envois en 2 minutes
// (étape 1, devis complet, rappel) et certains disparaissaient sans laisser de trace.
// Ici l'envoi part de Cloudflare, sur un domaine vérifié, avec des logs de livraison.
const NOTIF_TO = "contact@lbcdemenagement.com";
const NOTIF_FROM = "Site LBC <notifications@lbcdemenagement.com>";

const esc = (v) => String(v == null || v === "" ? "—" : v)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function construireNotif(p) {
  const c = p.client || {};
  const nom = ((c.prenom || "") + " " + (c.nom || "")).trim() || "prospect";
  const rdv = p.rdvDate ? (p.rdvDate + (p.rdvHeure ? " à " + p.rdvHeure.replace(":", "h") : "")) : "";
  const fourchette = (p.estimationBasse && p.estimationHaute) ? (p.estimationBasse + " € – " + p.estimationHaute + " €") : "";

  let sujet;
  if (rdv) sujet = "📞 Rappel " + rdv + " — " + nom;
  else if (p.statut === "Devis complet") sujet = "🚚 Devis complet — " + nom + (fourchette ? " — " + fourchette : "");
  else sujet = "🔔 " + (p.statut || "Nouveau lead") + " — " + nom;

  const trajet = [(p.depart || {}).ville || (p.depart || {}).adresse, (p.arrivee || {}).ville || (p.arrivee || {}).adresse].filter(Boolean).join(" → ");
  const lignes = [
    rdv ? ["📞 À rappeler", rdv] : null,
    ["Nom", nom], ["Téléphone", c.tel], ["Email", c.email],
    ["Contact préféré", c.contactPref || p.contactPref],
    ["Trajet", trajet], ["Date souhaitée", p.dateSouhaitee], ["Flexibilité", p.flexibilite],
    ["Formule", p.formule], ["Volume estimé", p.volumeEstime ? p.volumeEstime + " m³" : ""],
    ["Cartons", p.cartons], ["Distance", p.km ? "~" + p.km + " km" : ""],
    fourchette ? ["⚠️ Fourchette annoncée", fourchette] : null,
    ["🎯 Canal", (p.attribution && p.attribution.canal) || p.source],
    ["Campagne", p.attribution && p.attribution.campagne],
    ["Type de formulaire", p.formulaireType],
    ["Notes", p.message]
  ].filter(Boolean).filter((l) => l[1] != null && l[1] !== "" && l[1] !== 0);

  const html = '<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#17262F">' +
    '<h2 style="color:#14384E;margin:0 0 4px">' + esc(sujet) + '</h2>' +
    '<p style="color:#6B7785;font-size:13px;margin:0 0 16px">Demande déposée sur lbcdemenagement.com</p>' +
    '<table style="border-collapse:collapse;width:100%;max-width:620px">' +
    lignes.map((l, i) =>
      '<tr style="background:' + (i % 2 ? '#fff' : '#F7F4EE') + '">' +
      '<td style="padding:8px 10px;border:1px solid #E8E3DA;font-weight:600;width:190px">' + esc(l[0]) + '</td>' +
      '<td style="padding:8px 10px;border:1px solid #E8E3DA;white-space:pre-wrap">' + esc(l[1]) + '</td></tr>').join('') +
    '</table></div>';

  return { sujet, html };
}

async function envoyerNotif(env, payload) {
  const cle = env && env.RESEND_API_KEY;
  if (!cle) { console.warn("[lead] RESEND_API_KEY absente, notification non envoyée"); return; }
  try {
    const { sujet, html } = construireNotif(payload);
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + cle, "Content-Type": "application/json" },
      body: JSON.stringify({ from: NOTIF_FROM, to: [NOTIF_TO], subject: sujet, html: html,
                             reply_to: (payload.client && payload.client.email) || undefined })
    });
    if (!r.ok) console.error("[lead] Resend a refusé l'envoi", r.status, await r.text().catch(() => ""));
  } catch (e) { console.error("[lead] envoi notification", (e && e.message) || e); }
}

// Un lead normal fait quelques kilo-octets. Au-delà, ce n'est pas un prospect : c'est quelqu'un
// qui essaie de remplir la base ou de nous faire envoyer un e-mail géant. On coupe court avant
// de toucher à Supabase, donc sans rien consommer.
const TAILLE_MAX = 64 * 1024;   // 64 Ko

// ── Limitation du débit ───────────────────────────────────────────────────────
// Rien n'oblige à passer par le formulaire : on peut appeler cette adresse en boucle. Et comme
// chaque lead déclenche un e-mail vers contact@lbcdemenagement.com, une simple boucle noierait
// la boîte et le cockpit sous des milliers de faux prospects, rendant les vrais introuvables.
//
// Un vrai visiteur envoie 3 à 4 demandes pour un même devis (étape 1, devis complet, rappel).
// La limite est fixée large pour ne jamais gêner plusieurs personnes derrière une même box ou
// un même réseau d'entreprise, tout en arrêtant net un envoi automatisé.
const FENETRE = 60;    // secondes
const MAX_PAR_FENETRE = 15;

// Le compteur est stocké dans le cache de Cloudflare : pas de base à installer, pas de
// configuration. Il est propre à chaque centre de données, ce qui suffit ici — une boucle part
// d'un endroit, donc elle frappe toujours le même.
async function tropDeRequetes(request) {
  const ip = request.headers.get("CF-Connecting-IP");
  if (!ip || typeof caches === "undefined" || !caches.default) return false;  // dans le doute, on laisse passer
  const cle = new Request("https://limite.interne/lead/" + encodeURIComponent(ip));
  try {
    const vu = await caches.default.match(cle);
    const n = vu ? Number(await vu.text()) || 0 : 0;
    if (n >= MAX_PAR_FENETRE) return true;
    await caches.default.put(cle, new Response(String(n + 1), {
      headers: { "cache-control": "max-age=" + FENETRE }
    }));
    return false;
  } catch (e) {
    return false;   // un souci de cache ne doit JAMAIS bloquer un vrai prospect
  }
}

export async function onRequestPost(context) {
  const json = (obj, status) => new Response(JSON.stringify(obj), { status: status || 200, headers: { "content-type": "application/json" } });
  let payload = null;
  try {
    // Trop de demandes depuis la même adresse : on refuse sans rien enregistrer et SANS envoyer
    // d'alerte « lead perdu » (ce n'en est pas un, et l'alerte serait le déni de service).
    if (await tropDeRequetes(context.request)) {
      return json({ error: "trop de demandes, réessayez dans une minute" }, 429);
    }

    // Refus immédiat si le corps annoncé est démesuré, avant même de le lire.
    const taille = Number(context.request.headers.get("content-length") || 0);
    if (taille > TAILLE_MAX) return json({ error: "payload trop volumineux" }, 413);

    const brut = await context.request.text().catch(() => "");
    // Le content-length peut mentir ou être absent : on revérifie sur le contenu réel.
    if (brut.length > TAILLE_MAX) return json({ error: "payload trop volumineux" }, 413);

    let body = null;
    try { body = JSON.parse(brut); } catch (e) { body = null; }
    if (!body || !body.payload || typeof body.payload !== "object") return json({ error: "payload requis" }, 400);
    payload = body.payload;

    let r = await insert(payload);
    // Un 5xx est souvent passager (Supabase qui hoquette) : on retente une fois avant d'abandonner.
    if (!r.ok && r.status >= 500) r = await insert(payload);

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("[lead] insert refusé", r.status, detail);
      await alerteLeadPerdu(context.env, "supabase_" + r.status + " " + detail, payload);
      // 502 et non 200 : le site DOIT savoir que ça a échoué pour afficher un repli au visiteur.
      return json({ error: "supabase_" + r.status, detail }, 502);
    }
    // La notification part en tâche de fond : le visiteur ne doit pas attendre l'e-mail
    // pour voir son écran de confirmation. waitUntil garantit que l'envoi va au bout
    // même après que la réponse a été renvoyée au navigateur.
    if (context.waitUntil) context.waitUntil(envoyerNotif(context.env, payload));
    else await envoyerNotif(context.env, payload);
    return json({ ok: true });
  } catch (e) {
    const detail = String((e && e.message) || e);
    console.error("[lead] exception", detail);
    await alerteLeadPerdu(context.env, detail, payload);
    return json({ error: detail }, 502);
  }
}
