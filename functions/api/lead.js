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
      body: JSON.stringify({ from: NOTIF_FROM, to: NOTIF_TO, subject: "🚨 LEAD NON ENREGISTRÉ — à rattraper à la main", html: corps })
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
// ⚠️ DEUX DESTINATAIRES, ET C'EST VOLONTAIRE — correction du 6 août 2026.
//
// Ces notifications partaient de notifications@lbcdemenagement.com vers
// contact@lbcdemenagement.com : le domaine s'écrivait à lui-même, en passant par un
// serveur extérieur (Amazon SES, derrière Resend). Pour Hostinger, qui reçoit le
// courrier du domaine, c'est la signature exacte d'une usurpation, et il classait tout
// en spam MÊME AVEC un SPF et un DKIM valides. Vérifié : le DKIM est bien publié sur
// resend._domainkey, et send.lbcdemenagement.com porte le bon SPF. L'authentification
// n'était pas en cause.
//
// hPanel n'offre aucun réglage anti-spam sur le plan Starter : impossible de mettre
// l'expéditeur en liste blanche. D'où l'ajout de l'adresse Gmail, qui ne partage pas
// le domaine et reçoit donc normalement.
//
// Anthony, l'associé, ajouté le 8 août 2026 : il reçoit les mêmes leads pour pouvoir
// rappeler sans attendre. Adresse Hotmail, et c'est le point important — une adresse
// @lbcdemenagement.com serait tombée dans les indésirables pour la raison expliquée
// ci-dessus, comme contact@. Toute adresse ajoutée ici doit rester hors du domaine.
//
// ⚠️ contact@ RETIRÉ le 14 août 2026. Il avait été gardé « au cas où la boîte serait
// réparée », mais la lecture IMAP de la boîte a montré ce que ça coûtait : 144 des 159
// notifications depuis le 1er août classées en indésirables, la dernière le jour même.
// Aucune n'était perdue, les deux adresses hors domaine les reçoivent. En revanche :
//   - 144 messages de spam par quinzaine noient les VRAIS messages clients qui
//     tomberaient dans ce dossier, et il en tombe (un client a déjà répondu à un mail
//     dont l'objet portait « *** SPAM *** ») ;
//   - un filtre qui voit passer autant de courrier du même expéditeur classé
//     indésirable durcit sa règle, au détriment de tout ce que le domaine envoie.
// Le seul bénéfice d'une copie d'archive dans une boîte que personne ne lit ne justifie
// pas d'entraîner le filtre contre nous.
const NOTIF_TO = ["bkredouard@gmail.com", "anthonycem@hotmail.fr"];
const NOTIF_FROM = "Site LBC <notifications@lbcdemenagement.com>";

const esc = (v) => String(v == null || v === "" ? "—" : v)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function construireNotif(p) {
  const c = p.client || {};
  const nom = ((c.prenom || "") + " " + (c.nom || "")).trim() || "prospect";
  const rdv = p.rdvDate ? (p.rdvDate + (p.rdvHeure ? " à " + p.rdvHeure.replace(":", "h") : "")) : "";
  const fourchette = (p.estimationBasse && p.estimationHaute) ? (p.estimationBasse + " € – " + p.estimationHaute + " €") : "";

  // Le rappel est une INFO EN PLUS, pas un type de lead : quand un prospect finit son devis
  // et demande à être rappelé, l'ancien sujet n'affichait que « Rappel » et masquait le fait
  // qu'un devis complet venait d'arriver. Les deux doivent tenir dans le même sujet.
  const nature = p.statut === "Devis complet" ? "🚚 Devis complet" : "🔔 " + (p.statut || "Nouveau lead");
  const sujet = nature + " — " + nom
    + (fourchette ? " — " + fourchette : "")
    + (rdv ? " · 📞 à rappeler " + rdv : "");

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

/* ══════════════════════════════════════════════════════════════════════════════
   L'ACCUSÉ DE RÉCEPTION DU CLIENT — uniquement quand il a RÉSERVÉ UN CRÉNEAU.

   Posé le 23 août 2026. Jusque-là, le prospect ne recevait jamais rien : toutes les
   notifications partaient vers Edouard et Anthony. Quelqu'un qui cliquait « rappelez-moi
   mardi à 18 h » n'avait aucune preuve que son clic avait marché.

   POURQUOI CELUI-LÀ ET PAS LES AUTRES :
     • il confirme une PROMESSE que le client vient de prendre, et c'est le seul des trois
       profils où l'absence de message est un vrai trou ;
     • il est entièrement calculable (date, heure, trajet) : rien à juger, donc rien à
       se tromper ;
     • il ne parle pas du prix comme d'un engagement, il ne relance rien ;
     • et il doit partir en SECONDES. Le pic de demandes est à 22 h : une confirmation qui
       attend le réveil d'Edouard ne confirme plus rien.

   Il ne part JAMAIS pour un créneau « maintenant » : dans ce cas Edouard appelle tout de
   suite, et le mail arriverait après le coup de fil.                                     */
const CLIENT_FROM = "Edouard de LBC Déménagement <contact@lbcdemenagement.com>";

/* L'heure de Paris, pas celle du serveur. Un Worker Cloudflare tourne en UTC : sans cette
   conversion, « Bonsoir » basculerait à 20 h heure française en été. */
function heureParis() {
  try {
    /* ⚠️ formatToParts, PAS format(). En « fr-FR », `format()` rend « 12 h » — avec l'unité —
       et Number("12 h") vaut NaN. Le salut serait alors toujours « Bonjour », même à 23 h.
       Trouvé par le banc le 23 août 2026, avant la première mise en ligne. */
    const parts = new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", hour: "2-digit", hour12: false }).formatToParts(new Date());
    const h = Number((parts.find((x) => x.type === "hour") || {}).value);
    return Number.isFinite(h) ? (h === 24 ? 0 : h) : 12;   // certains ICU rendent « 24 » à minuit
  } catch (e) { return 12; }
}
/* Bonjour avant 18 h, Bonsoir après. Même règle que le cockpit : un « Bonjour » à 22 h est
   la signature d'un envoi automatique, et c'est précisément ce qu'on cherche à ne pas être. */
const salutParis = () => (heureParis() >= 18 ? "Bonsoir" : "Bonjour");

/* « mardi 26 août ». Sans année : le rendez-vous est dans les cinq jours. */
function dateEnToutesLettres(iso) {
  if (!/^\d{4}-\d{2}-\d{2}/.test(String(iso || ""))) return "";
  try {
    return new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", weekday: "long", day: "numeric", month: "long" })
      .format(new Date(iso.slice(0, 10) + "T12:00:00Z"));
  } catch (e) { return iso; }
}
const heureLisible = (h) => String(h || "").replace(":", " h ").replace(/ h 00$/, " h");

/* Le mail ne part que si les trois conditions sont réunies. Chacune a sa raison :
   sans créneau il n'y a rien à confirmer, sans e-mail il n'y a nulle part où écrire, et
   un créneau « maintenant » se traite au téléphone, pas par écrit. */
function doitConfirmerCreneau(p) {
  const c = (p && p.client) || {};
  if (!p || !p.rdvDate) return false;
  if (p.rdvImmediat) return false;
  return /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(String(c.email || "").trim());
}

function construireConfirmation(p) {
  const c = p.client || {};
  const prenom = (c.prenom || "").trim();
  const civil = prenom ? " " + prenom : "";
  const quand = dateEnToutesLettres(p.rdvDate) + (p.rdvHeure ? " à " + heureLisible(p.rdvHeure) : "");
  const trajet = [(p.depart || {}).ville, (p.arrivee || {}).ville].filter(Boolean).join(" → ");
  const fourchette = (p.estimationBasse && p.estimationHaute)
    ? (Number(p.estimationBasse).toLocaleString("fr-FR") + " € et " + Number(p.estimationHaute).toLocaleString("fr-FR") + " €")
    : "";
  const sujet = "C'est noté, je vous appelle " + quand;

  const par = (t) => '<p style="margin:0 0 14px">' + t + '</p>';
  const corps =
    par(esc(salutParis()) + esc(civil) + ",") +
    (fourchette
      /* ⚠️ JAMAIS D'ISO DANS UN MAIL CLIENT. « Votre estimation pour le 2026-09-29 » : c'est
         lisible par une machine, pas par quelqu'un qui déménage. dateEnToutesLettres existe
         déjà juste au-dessus, elle n'était simplement pas appelée ici. */
      ? par("Votre estimation" + (dateEnToutesLettres(p.dateSouhaitee) ? " pour le " + esc(dateEnToutesLettres(p.dateSouhaitee)) : "") +
            (trajet ? ", " + esc(trajet) : "") + " : entre <strong>" + esc(fourchette) + "</strong> selon la formule.")
      : par("J'ai bien reçu votre demande" + (trajet ? " pour votre déménagement " + esc(trajet) : "") + ".")) +
    par("Je vous appelle <strong>" + esc(quand) + "</strong>, comme vous l'avez demandé. Cinq minutes suffisent : on confirme l'étage, l'ascenseur et l'accès camion, et je vous donne le <strong>prix ferme</strong>, celui qui ne bouge plus le jour J.") +
    par("Un empêchement ? Répondez à ce message, on décale sans problème.") +
    '<p style="margin:24px 0 0;color:#6B7785">Bien à vous,<br>Edouard</p>';

  const html = '<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#17262F;font-size:15px;line-height:1.62;max-width:560px">' +
    corps + '</div>';

  /* ⚠️ TOUJOURS UNE VERSION TEXTE BRUT À CÔTÉ DU HTML.
     Un message HTML seul, sans alternative texte, est un signal que tous les filtres
     anti-spam pénalisent : les vrais messages écrits par un humain en ont une, les envois
     de masse mal outillés n'en ont pas. Elle coûte trois lignes et se dérive du même
     contenu, donc les deux ne peuvent pas diverger.
     Elle sert aussi pour de bon : montres connectées, lecteurs d'écran, clients en mode
     texte, et aperçus de notification. */
  const texte = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return { sujet, html, texte };
}

async function envoyerConfirmationClient(env, payload) {
  if (!doitConfirmerCreneau(payload)) return;
  const cle = env && env.RESEND_API_KEY;
  if (!cle) { console.warn("[lead] RESEND_API_KEY absente, confirmation client non envoyée"); return; }
  try {
    const { sujet, html, texte } = construireConfirmation(payload);
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + cle, "Content-Type": "application/json" },
      body: JSON.stringify({ from: CLIENT_FROM, to: [String(payload.client.email).trim()], subject: sujet, html: html, text: texte })
    });
    if (!r.ok) console.error("[lead] confirmation client refusée", r.status, await r.text().catch(() => ""));
  } catch (e) { console.error("[lead] envoi confirmation client", (e && e.message) || e); }
}

async function envoyerNotif(env, payload) {
  const cle = env && env.RESEND_API_KEY;
  if (!cle) { console.warn("[lead] RESEND_API_KEY absente, notification non envoyée"); return; }
  try {
    const { sujet, html } = construireNotif(payload);
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + cle, "Content-Type": "application/json" },
      body: JSON.stringify({ from: NOTIF_FROM, to: NOTIF_TO, subject: sujet, html: html,
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
    /* Les deux envois partent en tâche de fond, et SÉPARÉMENT : si Resend refuse la
       confirmation au client, l'alerte interne doit partir quand même, et l'inverse. */
    if (context.waitUntil) {
      context.waitUntil(envoyerNotif(context.env, payload));
      context.waitUntil(envoyerConfirmationClient(context.env, payload));
    } else {
      await envoyerNotif(context.env, payload);
      await envoyerConfirmationClient(context.env, payload);
    }
    return json({ ok: true });
  } catch (e) {
    const detail = String((e && e.message) || e);
    console.error("[lead] exception", detail);
    await alerteLeadPerdu(context.env, detail, payload);
    return json({ error: detail }, 502);
  }
}
