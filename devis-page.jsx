// devis-page.jsx — Quote request page with multi-step form
const { useState, useEffect, useRef } = React;

// Lead notification endpoint (FormSubmit.co — kept in sync with site.jsx)
// Plus aucun service tiers dans la boucle : la notification e-mail part de /api/lead,
// depuis notre propre serveur. formsubmit.co faisait doublon, était souvent bloqué par les
// bloqueurs de publicité, et recevait les coordonnées de nos prospects sans être déclaré.

// Cockpit LBC : le site ne parle JAMAIS à Supabase directement depuis le navigateur (bloqué par les
// bloqueurs de pub → leads perdus). Tout passe par /api/lead, une fonction sur notre propre domaine.
// Formules site → clés app (libellés identiques côté app : Standard / Premium / Luxe)
const FORMULE_TO_APP = { standard: "eco", premium: "standard", luxe: "premium" };
/* ⚠️ TABLE RETIRÉE LE 15 AOÛT 2026, NE PAS LA RÉTABLIR.
   Elle traduisait un type de logement en volume à l'étape 1. Ce volume n'était pas celui
   de l'estimateur — « T4 » valait 60 m³ ici et 20 m³ là, pour le même appartement — et le
   cockpit dimensionnait les camions sur le premier chiffre venu sans jamais le corriger
   quand le vrai arrivait. Le volume ne vient plus que de l'inventaire réel du client. */
// Capacité cabine ascenseur (site) → taille (app)
const ASC_CAP_TO_TAILLE = { "1 pers": "1 personne", "2 pers": "2 personnes", "3 pers": "3-4 personnes", "4 pers": "3-4 personnes", "5+ pers": "6+ personnes" };
// Distance de portage (site, fourchette) → mètres représentatifs (champ numérique app)
const PORTAGE_TO_M = { "Moins de 10 m": 5, "10 – 30 m": 20, "30 – 50 m": 40, "Plus de 50 m": 60 };
const CONTACT_LABEL = { tel: "Téléphone", mail: "Email", sms: "SMS" };
const etageNum = (v) => !v ? 0 : v === "RDC" ? 0 : parseInt(v) || 0;
const villeFrom = (addr) => {
  if (!addr) return "";
  const parts = String(addr).split(",").map((s) => s.trim()).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : addr;
};
/* ADRESSE COMPLÈTE = la rue saisie à l'étape 2 + la commune choisie à l'étape 1.
   ⚠️ Elles sont recollées ICI et nulle part ailleurs. Avant, le champ adresse de l'étape 2
   arrivait pré-rempli avec la ville ; le prospect cliquait dedans, tapait sa rue par-dessus,
   et la ville disparaissait. Il ne restait que « 12 rue des Lauriers », que la Base Adresse
   Nationale situe à Clermont-Ferrand. C'est ce qui a transformé un Nîmes → Nîmes en 45 km.
   La ville a désormais son propre champ, que la saisie de la rue ne peut plus effacer. */
const adresseComplete = (all, s) => {
  const rue = String(all[s] || "").trim();
  const ville = String(all[s + "_ville"] || "").trim();
  if (!rue) return ville;
  if (!ville) return rue;
  /* L'autocomplétion de rue renvoie déjà « 12 Rue des Lauriers 30000 Nîmes » : on ne
     recolle pas la commune dans ce cas, sinon l'adresse la contient deux fois.
     On se fie au CODE POSTAL, pas au nom : « Avenue de Nice » contient « Nice » sans
     être à Nice, et se faire duper là-dessus renverrait l'adresse à Antibes. */
  const cp = (ville.match(/\b\d{5}\b/) || [])[0];
  if (cp && rue.indexOf(cp) >= 0) return rue;
  // Sans code postal, on ne saute le recollage que si la rue se TERMINE par la commune.
  if (!cp) {
    const nu = ville.trim().toLowerCase();
    if (nu && rue.toLowerCase().endsWith(nu)) return rue;
  }
  /* Ordre postal français : « 12 rue d'Italie, 30000 Nîmes ». Le champ ville, lui, vaut
     « Nîmes 30000 » (le code postal est collé après le nom pour distinguer les communes
     homonymes dans la liste). On remet le code postal DEVANT en recollant : c'est le seul
     ordre que le découpage du cockpit sait lire, et celui qu'attend le géocodeur. */
  const m = ville.match(/^(.*?)[\s,]+(\d{5})$/);
  return rue + ", " + (m ? m[2] + " " + m[1].trim() : ville);
};
const sideOf = (all, s) => ({
  adresse: adresseComplete(all, s),
  // La ville vient du champ dédié de l'étape 1. villeFrom ne sert plus que de secours :
  // il découpait sur les virgules, or l'autocomplétion renvoie « 20 Avenue X 06000 Nice »
  // sans virgule — la ville valait donc l'adresse entière dans le cockpit.
  ville: (all[s + "_ville"] || "").trim() || villeFrom(all[s]),
  etage: etageNum(all[s + "_etage"]),
  ascenseur: all[s + "_asc"] === "Oui",
  ascTaille: all[s + "_asc"] === "Oui" ? ASC_CAP_TO_TAILLE[all[s + "_asc_cap"]] || "" : "Aucun",
  portage: PORTAGE_TO_M[all[s + "_portage"]] != null ? PORTAGE_TO_M[all[s + "_portage"]] : "",
  // Seul un « Oui » franc déclenche la facturation du monte-meuble. Un « Je ne sais
  // pas » ne doit surtout pas ajouter 400 € en silence : il se règle à l'appel, et
  // la note du cockpit le signale.
  monteMeuble: all[s + "_monte"] === "Oui",
  monteMeubleIncertain: all[s + "_monte"] === "Je ne sais pas",
  acces: all[s + "_acces"] || "" });

// Envoie la demande complète dans la table leads du cockpit (en plus de l'email).
// Étage/ascenseur/taille/portage/accès partent en champs structurés ; le reste (fragiles,
// à démonter, flexibilité, contact, détails) part en notes — pas de doublon.
function sendToCockpit(all, opts) {
  opts = opts || {};
  const np = (all.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const inventaire = window.buildInventoryArray ? window.buildInventoryArray(all) : [];
  const mapToList = (m) => Object.entries(m || {}).filter((x) => x[1] > 0).map((x) => ({ label: x[0], qty: x[1] }));
  // Canal d'acquisition mesuré à l'arrivée du visiteur (voir le bloc ATTRIBUTION de site.jsx).
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  // Les notes portent aussi la fourchette annoncée au client et le créneau de rappel choisi :
  // même si le cockpit n'exploite pas encore ces champs, l'info reste visible dans la fiche.
  const notes = [
    /* Le type de logement remplace le volume inventé qu'on envoyait autrefois à l'étape 1.
       C'est une information vraie, elle suffit pour rappeler le prospect, et elle ne fait
       rien calculer de faux. */
    (opts.partiel && all.surface) ? "🏠 Logement déclaré : " + all.surface + " (aucun volume : le formulaire n'est pas allé jusqu'à l'inventaire)" : "",
    all.details ? "Détails client : " + all.details : "",
    opts.estimation && !opts.estimation.distanceFiable ? "🚨 DISTANCE NON CALCULÉE : aucun prix n'a été affiché au client. Vérifier le trajet et chiffrer à la main." : "",
    opts.estimation && opts.estimation.distanceFiable ? "⚠️ Fourchette ANNONCÉE au client sur le site : " + opts.estimation.bas + " € – " + opts.estimation.haut + " € (volume retenu " + opts.estimation.volume + " m³, distance ~" + opts.estimation.km + " km). Ne pas chiffrer au-dessus sans l'expliquer." : "",
    /* L'INVENTAIRE MAIGRE, DIT EN TOUTES LETTRES. Ajouté le 22 août 2026.
       Un client qui ne coche que des cartons, ou trois meubles pour un T3, produit une
       estimation honnête mais probablement fausse : il a rempli à moitié. Le prix ferme
       se joue alors entièrement au téléphone, et c'est la première chose à savoir en
       ouvrant la fiche. Sans cette ligne, la fourchette annoncée a l'air aussi solide
       qu'une autre. */
    (function () {
      if (!opts.estimation || !opts.estimation.distanceFiable) return "";
      var nbMeubles = (all.inventaire || []).length;
      var nbCartons = Number(all.cartons) || 0;
      if (nbMeubles === 0 && nbCartons > 0)
        return "🔍 INVENTAIRE MAIGRE : " + nbCartons + " carton" + (nbCartons > 1 ? "s" : "") +
               " et AUCUN meuble déclaré" + (all.surface ? " pour un " + all.surface : "") +
               ". La fourchette ci-dessus est calculée là-dessus. À refaire au téléphone, pièce par pièce.";
      if (nbMeubles > 0 && nbMeubles <= 3 && ["t3", "t4", "maison"].indexOf(all.surface) >= 0)
        return "🔍 INVENTAIRE MAIGRE : seulement " + nbMeubles + " meuble" + (nbMeubles > 1 ? "s" : "") +
               " déclaré" + (nbMeubles > 1 ? "s" : "") + " pour un " + all.surface +
               ". Probablement rempli à moitié : refaire l'inventaire au téléphone.";
      return "";
    })(),
    // Le client a demandé « Luxe » : la fourchette ci-dessus est celle de
    // « Premium », et il en a été prévenu à l'écran. Le prix de l'emballage se chiffre
    // après visio. Sans cette note, on risquerait de facturer l'emballage au prix affiché.
    // Le détail du démontage, ligne par ligne, avec ce qui a été facturé et ce qui est
    // compris dans la formule. Sans ce détail, impossible de savoir en reprenant la fiche
    // si les 350 € du dressing sont déjà dans la fourchette annoncée ou non.
    opts.estimation && opts.estimation.detail && (opts.estimation.detail.demontageLignes || []).length ?
      "🔧 Démontage déclaré : " + opts.estimation.detail.demontageLignes.map(function (l) {
        return l.label + (l.quantite > 1 ? " ×" + l.quantite : "") + " " +
          (l.facture ? "= " + l.montant + " €" : "(compris dans la formule)") + (l.connu ? "" : " ⚠️ tarif non répertorié, à vérifier");
      }).join(" · ") + ". Total facturé " + opts.estimation.detail.demontage + " €, DÉJÀ compris dans la fourchette ci-dessus." : "",
    opts.estimation && opts.estimation.detail && (opts.estimation.detail.speciauxLignes || []).length ?
      "🎹 Objets spéciaux : " + opts.estimation.detail.speciauxLignes.map(function (l) {
        return l.label + (l.quantite > 1 ? " ×" + l.quantite : "") + " = " + l.montant + " €";
      }).join(" · ") + ". Total " + opts.estimation.detail.speciaux + " €, déjà compris dans la fourchette." : "",
    opts.estimation && opts.estimation.detail && opts.estimation.detail.monteMeuble > 0 ?
      "🏗 MONTE-MEUBLE demandé par le client (" + opts.estimation.detail.monteMeubleNb + " façade" +
      (opts.estimation.detail.monteMeubleNb > 1 ? "s" : "") + ") : " + opts.estimation.detail.monteMeuble +
      " € refacturés au prix coûtant, déjà compris dans la fourchette. À réserver." : "",
    // Un « je ne sais pas » ne facture rien mais ne doit pas disparaître : c'est
    // 400 à 600 € qui se décideront au téléphone.
    (function () {
      const c = [];
      if (opts.estimation && all.depart_monte === "Je ne sais pas") c.push("au départ");
      if (opts.estimation && all.arrivee_monte === "Je ne sais pas") c.push("à l'arrivée");
      return c.length ? "🏗 Monte-meuble INCERTAIN " + c.join(" et ") + " : le client ne sait pas. Rien n'a été facturé. À trancher à l'appel, c'est 400 à 600 € par façade." : "";
    })(),
    opts.estimation && opts.estimation.visioRequise ?
      "📦 MAINS DANS LES POCHES demandée. Le prix ci-dessus est celui de MAINS LIBRES, l'emballage n'est pas compris. Le client a été prévenu à l'écran qu'une visio ou des photos sont nécessaires. À caler à l'appel." : "",
    // ⚠️ Ces chiffres ne valent QUE si la distance a été calculée. Sans elle, le moteur
    // retombe sur 30 km par défaut : les coûts et le bénéfice affichés ici étaient alors
    // bâtis sur un trajet qui n'existe pas, juste sous une note disant l'inverse.
    opts.estimation && opts.estimation.detail && opts.estimation.distanceFiable ? "Coûts estimés " + opts.estimation.detail.couts + " € → bénéfice attendu " + (opts.estimation.bas - opts.estimation.detail.couts) + " à " + (opts.estimation.haut - opts.estimation.detail.couts) + " €." : "",
    opts.estimation && opts.estimation.detail && opts.estimation.detail.plancherApplique ?
      "🔎 INVENTAIRE À VÉRIFIER : le client n'a déclaré que " + opts.estimation.detail.volumeDeclare + " m³ de meubles, c'est peu pour son logement. Le volume a été relevé au plancher. À confirmer au téléphone avant de figer le prix." : "",
    opts.estimation && opts.estimation.prixApproche > 0 ?
      "🚚 Approche facturée : " + opts.estimation.kmApproche + " km depuis Nice, soit " + opts.estimation.prixApproche + " € (50 km offerts, puis 0,90 €/km/camion). Sans ça, ce chantier partait à perte sur la route." : "",
    opts.rdv && opts.rdv.immediat ? "🔥 RAPPEL IMMÉDIAT DEMANDÉ. Le client a cliqué « rappelez-moi tout de suite » : il attend l'appel MAINTENANT. C'est le lead le plus chaud possible, chaque minute compte." :
    (opts.rdv ? "📞 Rappel demandé par le client : " + opts.rdv.label : ""),
    all && all._honey ? "🤖 Piège anti-robot déclenché. C'est très souvent le remplissage automatique d'un navigateur intégré (Facebook, Instagram) sur un VRAI prospect. Appelle-le : ne le jette pas sans avoir vérifié." : "",
    !opts.partiel && !opts.estimation ? "🚨 AUCUN PRIX N'A ÉTÉ AFFICHÉ à ce client : le moteur d'estimation n'a pas tourné. Chiffrer à la main." : "",
    at ? "🎯 Acquisition : " + at.canal + (at.campagne ? " · campagne « " + at.campagne + " »" : "") +
         (at.canalPremier && at.canalPremier !== at.canal ? " (1er contact via " + at.canalPremier + " le " + at.premierContactLe + ")" : "") +
         (at.referent ? " · venu de " + at.referent : "") : ""
  ].filter(Boolean).join("\n");
  const payload = {
    source: (at && at.canal) || "site_web",
    attribution: at || null,
    leadId: opts.leadId || null,
    statut: opts.partiel ? "Lead démarré (formulaire en cours)" : "Devis complet",
    client: { prenom, nom, tel: all.tel || "", email: all.email || "", contactPref: all.contact || "" },
    codeParrain: (all.codeParrain || "").trim().toUpperCase(),
    formule: FORMULE_TO_APP[all.formule] || "standard",
    formulaireType: opts.partiel ? "partiel" : (inventaire.length ? "detaille" : "basique"),
    /* Le volume vient du moteur d'estimation, donc de l'inventaire réel du client, et de
       nulle part ailleurs. Le repli sur « le volume théorique de la surface » a été retiré :
       il fabriquait un chiffre que personne n'avait déclaré, différent de celui de
       l'estimateur, et le cockpit dimensionnait les camions dessus.
       Pas d'estimation, pas de volume. Le type de logement part quand même. */
    volumeEstime: opts.estimation ? opts.estimation.volume : null,
    logementDeclare: all.surface || "",
    /* Le TYPE de logement, à côté de la surface. Il manquait, et c'est l'un des cinq
       champs sans lesquels le lien « Reprendre mon devis » ne peut pas rouvrir le
       formulaire à l'étape 2 : le visiteur repartirait du début après avoir cliqué sur
       un bouton qui promet le contraire. Ajouté le 23 août 2026. */
    typeLogement: all.type || "",
    // Fourchette annoncée au client + créneau de rappel choisi (repris dans la fiche du cockpit)
    estimationBasse: opts.estimation ? opts.estimation.bas : null,
    estimationHaute: opts.estimation ? opts.estimation.haut : null,
    km: opts.estimation ? opts.estimation.km : null,
    rdvDate: opts.rdv ? opts.rdv.date : "",
    rdvHeure: opts.rdv ? opts.rdv.heure : "",
    /* « Maintenant » n'est pas un rendez-vous : Edouard appelle dans la foulée, et un mail
       de confirmation arriverait APRÈS le coup de fil. Le serveur a besoin de le savoir,
       il ne peut pas le deviner d'une date et d'une heure. */
    rdvImmediat: !!(opts.rdv && opts.rdv.immediat),
    cartons: all.cartons || 0,
    dateSouhaitee: all.date || "",
    flexibilite: all.flex || "",
    contactPref: CONTACT_LABEL[all.contact] || all.contact || "",
    fragiles: mapToList(all.fragile),
    demonter: mapToList(all.demontage),
    inventaire,
    options: {
      demontage: !!(all.demontage && Object.keys(all.demontage).length),
      emballage: all.formule === "premium" || all.formule === "luxe",
      gardeMeuble: false },

    depart: sideOf(all, "depart"),
    arrivee: sideOf(all, "arrivee"),
    message: notes };

  // Envoi REST direct AVEC keepalive : la requête SURVIT même si le visiteur quitte la page juste
  // après l'étape 1 (avant, l'insert sans keepalive était annulé au départ → lead perdu côté cockpit,
  // alors que l'email, lui, avait keepalive et arrivait quand même).
  // Enregistrement via NOTRE domaine (/api/lead), pas directement vers supabase.co : une requête
  // même-origine n'est pas bloquée par les bloqueurs de pub / navigateurs privés (cas de leads perdus).
  // Renvoie la promesse fetch : submit() peut ATTENDRE la confirmation avant d'afficher l'écran WhatsApp.
  // Résout à true (enregistré), false (refus explicite du serveur) ou null (indéterminé : réseau coupé,
  // page quittée…). On ne traite QUE le false comme un échec : un indéterminé part souvent quand même
  // grâce à keepalive, inutile d'alarmer le visiteur pour rien.
  try {
    return fetch("/api/lead", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload })
    }).then((r) => r.ok).catch(() => null);
  } catch (e) { return Promise.resolve(null); }
}

function DevisHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <span>DEVIS GRATUIT · PRIX IMMÉDIAT</span>
        </div>
        <h1>Votre devis déménagement, <em>gratuit et sans engagement.</em></h1>
        <p className="lede">
          Deux minutes, cinq infos, et <strong>votre fourchette de prix s'affiche tout de suite</strong>. Vous choisissez ensuite quand on vous appelle pour la confirmer au centime près. <span className="ast">*</span>Pas de numéro surtaxé, pas de spam.
        </p>
        <p style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 999, background: 'rgba(215,91,61,0.10)', color: 'var(--accent, #D75B3D)', fontWeight: 700, fontSize: 14 }}>
          <span aria-hidden="true">💳</span> Déménagement payable en 3× sans frais (Klarna)
        </p>
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: '10px 18px', fontSize: 14, color: 'rgba(242,232,207,0.85)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)', fontWeight: 700 }}>★&nbsp;5,0/5</span> · +100 avis clients</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span> Assurance incluse</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span> Prix ferme, zéro surprise</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}>✓</span> Prix affiché immédiatement</span>
        </div>
        <a href="#devis-form-top" className="btn btn-primary devis-hero-cta" style={{ marginTop: 26 }}>Commencer mon devis <span className="arrow">→</span></a>
      </div>
    </section>);

}

const STEPS = ["Coordonnées & logement", "Adresses & date", "Votre inventaire"];

function Stepper({ step }) {
  return (
    <div className="devis-steps">
      {STEPS.map((s, i) =>
      <div key={i} className={"devis-step" + (i === step ? " active" : "")}>
          <span className="n">{i + 1}</span>{s}
        </div>
      )}
    </div>);

}

function Choice({ name, value, label, sub, selected, onSelect }) {
  return (
    <label className={"choice" + (selected ? " sel" : "")}>
      <input type="radio" name={name} value={value} checked={selected} onChange={() => onSelect(value)} />
      <span>{label}</span>
      {sub && <span className="c-sub">{sub}</span>}
    </label>);

}

// Formule cards with their key inclusions — so the prospect can compare on this page.
function FormuleOption({ value, name, level, tag, badge, inherit, items, selected, onSelect }) {
  return (
    <label className={"formule-card" + (selected ? " sel" : "") + (badge ? " has-flag" : "")}>
      <input type="radio" name="form" value={value} checked={selected} onChange={() => onSelect(value)} />
      {badge && <span className="fc-flag">{badge}</span>}
      <div className="fc-top">
        <div className="fc-titles">
          {level && <span className="fc-level">{level}</span>}
          <span className="fc-name">{name}</span>
        </div>
        <span className="fc-radio" aria-hidden="true"></span>
      </div>
      <span className="fc-tag">{tag}</span>
      <ul className="fc-items">
        {inherit && <li className="fc-inherit">Tout le {inherit}, plus :</li>}
        {items.map((it, i) =>
        <li key={i}><span className="fc-chk">✓</span>{it}</li>
        )}
      </ul>
    </label>);

}

// Valeurs transmises par les formulaires rapides du site (barre rapide, bloc de bas de page).
//
// Ces formulaires reprennent désormais exactement les champs de l'étape 1. Ils passent aussi
// `etape=2` : le visiteur reprend là où il s'est arrêté au lieu de resaisir son nom, son
// téléphone et son email qu'il vient déjà de donner. C'est là que se perdaient les prospects.
function getPrefill() {
  const p = new URLSearchParams(window.location.search);
  return {
    nom: p.get("nom") || "",
    tel: p.get("tel") || "",
    email: p.get("email") || "",
    type: p.get("type") || "",
    surface: p.get("surface") || "",
    /* Encore acceptés : d'anciens liens partagés ou indexés peuvent les porter. Ils ont
       toujours contenu une VILLE, jamais une rue : ils remplissent donc le champ ville,
       sinon on rangerait « Nice » dans la case « n° et rue ». */
    depart_ville: p.get("depart") || "",
    arrivee_ville: p.get("arrivee") || "",
    date: p.get("date") || "",
    lead: p.get("lead") || "",
    etape: p.get("etape") || ""
  };
}

/**
 * À quelle étape ouvrir le formulaire ?
 *
 * On saute l'étape 1 uniquement si elle est réellement complète. Sinon le visiteur se
 * retrouverait à l'étape 2 avec des champs obligatoires vides derrière lui, sans comprendre
 * pourquoi il ne peut pas aller au bout.
 */
function etapeInitiale(PRE) {
  const complet = PRE.nom && PRE.tel && PRE.email && PRE.type && PRE.surface;
  return (PRE.etape === "2" && complet) ? 1 : 0;
}
const SURFACE_LABEL = { studio: "Studio (< 30 m²)", t2: "2 pièces (30–50 m²)", t3: "3 pièces (50–80 m²)", t4: "4 pièces + (80 m² +)" };
const FORMULE_LABEL = { standard: "Standard", premium: "Premium", luxe: "Luxe" };

// Detailed access block per address (étage, ascenseur, portage, accès camion)
const ETAGE_OPTS = ["RDC", "1", "2", "3", "4", "5", "6", "7+"];
const ASC_OPTS = [{ v: "Non", l: "Non" }, { v: "Oui", l: "Oui" }];
const ASC_CAP_OPTS = ["1 pers", "2 pers", "3 pers", "4 pers", "5+ pers"];
const PORT_OPTS = [{ v: "Moins de 10 m", l: "< 10 m" }, { v: "10 – 30 m", l: "10–30 m" }, { v: "30 – 50 m", l: "30–50 m" }, { v: "Plus de 50 m", l: "> 50 m" }];

function SegSelect({ value, options, onSelect, numeric, error }) {
  return (
    <div className={"seg" + (numeric ? " seg-num" : "") + (error ? " seg-error" : "")}>
      {options.map((o) => {
        const v = o.v || o;const l = o.l || o;
        return <button type="button" key={v} className={"seg-opt" + (value === v ? " on" : "")} onClick={() => onSelect(v)}>{l}</button>;
      })}
    </div>);

}

function AccessBlock({ side, label, addrLabel, data, set, showErrors }) {
  const f = (k) => side + "_" + k;
  const v = (k) => data[f(k)] || "";
  const miss = (k) => showErrors && !v(k);
  const ascMiss = showErrors && (!v("asc") || v("asc") === "Oui" && !v("asc_cap"));
  return (
    <div className="access-block">
      <div className="access-head"><span className="access-dot"></span>{label}</div>
      {/* Deux champs distincts, et c'est volontaire. La ville arrive déjà remplie de
          l'étape 1 ; la rue reste vide et doit être saisie. Un seul champ « adresse »
          pré-rempli avec la ville se faisait écraser par la rue, et l'adresse partait
          sans commune : c'est l'origine des distances aberrantes. */}
      <AddressField className="lf" name={side + "_ville"} type="municipality"
        label={<>Ville {showErrors && !v("ville") && <span className="req-hint">— à remplir</span>}</>}
        placeholder="Nice" defaultValue={v("ville")} onValue={(val) => set(f("ville"), val)}
        error={showErrors && !v("ville")} />
      {/* Jamais une adresse d'exemple en repère : en gris clair, « 12 rue d'Italie » se
          lit comme un champ déjà rempli, et c'est en plus l'adresse de LBC. */}
      <AddressField className="lf" name={side} label={<>{addrLabel} <span className="access-hint">— n° et rue</span> {showErrors && !(data[side] || "").trim() && <span className="req-hint">— à remplir</span>}</>}
        placeholder="Numéro et nom de la rue" defaultValue={data[side]} pres={v("ville")}
        onValue={(val) => set(side, val)} error={showErrors && !(data[side] || "").trim()} />
      <div className="access-field">
        <label>Étage {miss("etage") && <span className="req-hint">— à choisir</span>}</label>
        <SegSelect numeric error={miss("etage")} value={v("etage")} options={ETAGE_OPTS} onSelect={(x) => set(f("etage"), x)} />
      </div>
      <div className="access-field">
        <label>Ascenseur {ascMiss && <span className="req-hint">— à choisir</span>}</label>
        <SegSelect error={ascMiss && !v("asc")} value={v("asc")} options={ASC_OPTS} onSelect={(x) => {set(f("asc"), x);if (x === "Non") set(f("asc_cap"), "");}} />
        {v("asc") === "Oui" &&
        <div className="access-sub">
            <span className="access-sublabel">Capacité de la cabine</span>
            <SegSelect numeric error={showErrors && !v("asc_cap")} value={v("asc_cap")} options={ASC_CAP_OPTS} onSelect={(x) => set(f("asc_cap"), x)} />
          </div>
        }
      </div>
      <div className="access-field">
        <label>Distance de portage <span className="access-hint">— camion → porte</span> {miss("portage") && <span className="req-hint">— à choisir</span>}</label>
        <SegSelect error={miss("portage")} value={v("portage")} options={PORT_OPTS} onSelect={(x) => set(f("portage"), x)} />
      </div>
      {/* Monte-meuble : c'est le client qui le déclare, lui seul voit sa façade et
          son escalier. Le deviner depuis un étage et une absence d'ascenseur
          produirait autant de fausses alertes que d'oublis.
          La question n'apparaît qu'à partir du 2e étage sans ascenseur : en dessous,
          elle n'a pas lieu d'être et allongerait le formulaire pour rien. */}
      {etageNum(v("etage")) >= 2 && v("asc") === "Non" &&
      <div className="access-field">
        <label>Faut-il un monte-meuble&nbsp;? <span className="access-hint">— si l'escalier ne passe pas</span></label>
        <SegSelect value={v("monte")} options={[{ v: "Non", l: "Non" }, { v: "Oui", l: "Oui" }, { v: "Je ne sais pas", l: "Je ne sais pas" }]}
          onSelect={(x) => set(f("monte"), x)} />
      </div>
      }
      <div className="access-field">
        <label>Accès camion {miss("acces") && <span className="req-hint">— à choisir</span>}</label>
        <select className={"access-sel" + (miss("acces") ? " field-error" : "")} name={f("acces")} defaultValue={v("acces")} onChange={(e) => set(f("acces"), e.target.value)}>
          <option value="" disabled>Choisir…</option>
          <option>Le camion se gare devant</option>
          <option>Rue étroite ou éloignée</option>
          <option>Zone piétonne</option>
          <option>Stationnement difficile</option>
          <option>Monte-meuble nécessaire</option>
          <option>Je ne sais pas</option>
        </select>
      </div>
    </div>);

}

function DevisForm() {
  const PRE = getPrefill();
  const [step, setStep] = useState(etapeInitiale(PRE));
  const [data, setData] = useState({
    surface: PRE.surface || "",
    formule: "premium",
    depart: "",
    arrivee: "",
    depart_ville: PRE.depart_ville,
    arrivee_ville: PRE.arrivee_ville,
    date: PRE.date,
    tel: PRE.tel,
    nom: PRE.nom,
    email: PRE.email,
    type: PRE.type
  });
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const [tried0, setTried0] = useState(false);
  const [tried1, setTried1] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  // true = le serveur a explicitement refusé d'enregistrer le lead. On affiche alors un écran de repli
  // honnête (WhatsApp + téléphone) au lieu d'un « c'est bien reçu ! » mensonger.
  const [failed, setFailed] = useState(false);
  // Fourchette de prix calculée et affichée au prospect sur l'écran de fin
  const [estim, setEstim] = useState(null);
  // Créneau de rappel choisi par le prospect ({ date, heure, label }), et envoi en cours
  const [rdv, setRdv] = useState(null);
  const [rdvSending, setRdvSending] = useState(false);

  // Progressive French mobile formatting: "06 12 34 56 78" as you type.
  const formatPhoneFR = (raw) => {
    let d = (raw || "").replace(/[^\d+]/g, "");
    if (d.startsWith("+33")) d = "0" + d.slice(3);
    else if (d.startsWith("0033")) d = "0" + d.slice(4);
    d = d.replace(/\D/g, "").slice(0, 10);
    return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  // Bring the form into view without jumping to the very top of the page (no friction).
  const scrollToForm = () => {
    const el = document.getElementById("devis-form-top");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y < 0 ? 0 : y, behavior: "smooth" });
  };
  // When arriving pre-filled from the home bar, land directly on the form.
  useEffect(() => {
    if (PRE.depart && PRE.arrivee) {
      const t = setTimeout(scrollToForm, 120);
      return () => clearTimeout(t);
    }
  }, []);

  const next = (e) => {if (e) e.preventDefault();setStep((s) => Math.min(2, s + 1));scrollToForm();};
  // Capture all named fields of the current form into state, then advance.
  const captureNext = (e) => {
    e.preventDefault();
    if (!step1Complete) {setTried1(true);return;}
    const upd = {};
    for (const el of e.currentTarget.elements) {if (el.name) upd[el.name] = el.value;}
    setData((d) => ({ ...d, ...upd }));
    setStep((s) => Math.min(2, s + 1));
    scrollToForm();
  };
  const back = () => {setStep((s) => Math.max(0, s - 1));scrollToForm();};

  // Step 2 (Adresses & date) can only advance once every field is filled.
  const sideComplete = (s) => {
    if (!(data[s] || "").trim()) return false;
    // La commune est exigée elle aussi : sans elle, l'adresse n'est pas localisable et
    // Edouard se retrouve avec une rue sans ville dans sa fiche.
    if (!(data[s + "_ville"] || "").trim()) return false;
    if (!data[s + "_etage"]) return false;
    if (!data[s + "_asc"]) return false;
    if (data[s + "_asc"] === "Oui" && !data[s + "_asc_cap"]) return false;
    if (!data[s + "_portage"]) return false;
    if (!data[s + "_acces"]) return false;
    return true;
  };
  const step1Complete = sideComplete("depart") && sideComplete("arrivee") && !!data.date && !!data.flex;
  // Step 0 (coordonnées + logement) — name + phone + email are the priority capture.
  const step0Complete = !!(data.nom || "").trim() && !!(data.tel || "").trim() && !!(data.email || "").trim() && !!data.type && !!data.surface
    && !!(data.depart_ville || "").trim() && !!(data.arrivee_ville || "").trim();

  // Lien WhatsApp pré-rempli affiché sur l'écran de fin. Le prospect nous écrit en
  // premier, au pic d'intention : c'est LUI qui initie la conversation, ce qui évite
  // les relances à froid et crée de la proximité. Message pré-rédigé avec son nom,
  // son trajet et sa date pour qu'on l'identifie immédiatement.
  const waLead = () => {
    const who = (data.nom || "").trim();
    // Les VILLES, pas les rues : « Déménagement de Nîmes vers Montpellier » se lit d'un
    // coup d'œil dans WhatsApp, une adresse complète noie le message.
    const dep = (data.depart_ville || data.depart || "").trim();
    const arr = (data.arrivee_ville || data.arrivee || "").trim();
    const dt = (data.date || "").trim();
    const trajet = dep && arr ? "Déménagement de " + dep + " vers " + arr : (dep ? "Déménagement depuis " + dep : "Déménagement");
    const quand = dt ? ", prévu le " + dt : "";
    const l2 = (who ? who + " — " : "") + trajet + quand + ".";
    const fin = rdv ? "Vous devez m'appeler " + rdv.label + ", mais je préfère qu'on échange ici. Merci !" : "J'aimerais recevoir mon devis. Merci !";
    const msg = "Bonjour, je viens de faire ma demande de devis sur votre site 🙂\n" + l2 + "\n" + fin;
    return "https://wa.me/33615976577?text=" + encodeURIComponent(msg);
  };

  // Fire a lead notification as soon as step 0 is validated — so an abandoned
  // quote still leaves us the prospect's name, phone & email to follow up.
  const earlySent = useRef(false);
  // Identifiant unique du lead, partagé entre l'enregistrement « étape 1 » et le
  // « devis complet » pour que le cockpit puisse relier les deux (même prospect).
  // S'il vient de la barre rapide (param ?lead=…), on le RÉUTILISE : le cockpit met alors
  // à jour le lead déjà déposé par la barre au lieu d'en créer un doublon.
  const leadIdRef = useRef(PRE.lead || null);
  const getLeadId = () => {
    if (!leadIdRef.current) leadIdRef.current = "L" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    return leadIdRef.current;
  };
  const sendEarly = (all) => {
    if (earlySent.current) return;
    // ⚠️ Le piège anti-robot ne fait plus DISPARAÎTRE le lead. Les navigateurs intégrés
    // (Facebook, Instagram) et les gestionnaires de mots de passe remplissent tout seuls les
    // champs cachés : de vrais prospects étaient classés « robot » et jetés sans un mot, alors
    // que l'écran leur affichait « demande envoyée ». On enregistre toujours, on signale.
    earlySent.current = true;
    // Conversion Meta : lead qualifié dès l'étape 1 (nom + tél + email capturés).
    if (window.fbq) window.fbq("track", "Lead");
    // Enregistrement dans le cockpit DÈS l'étape 1 : le lead (nom, tél, email) est
    // garanti côté base, même si le prospect abandonne l'inventaire ensuite.
    sendToCockpit(all, { partiel: true, leadId: getLeadId() });
  };

  const goStep0 = (e) => {
    e.preventDefault();
    if (!step0Complete) {setTried0(true);return;}
    const upd = {};
    for (const el of e.currentTarget.elements) {if (el.name) upd[el.name] = el.value;}
    const all = { ...data, ...upd };
    /* On ne recopie plus la ville dans le champ adresse : l'étape 2 affiche la commune
       dans son propre champ, déjà remplie, et demande la rue à côté. Le prospect ne
       retape rien, et sa rue ne peut plus effacer sa ville. */
    setData(all);
    sendEarly(all);
    setStep(1);
    scrollToForm();
  };

  const submit = async () => {
    const all = { ...data };
    // Même raison qu'au-dessus : on n'abandonne plus l'envoi quand le piège se déclenche.
    // C'est ce retour silencieux qui a fait perdre le devis complet de Christian Allavena
    // (03/08, venu de Meta) : il a vu « envoyé », et rien n'est jamais parti.
    if (sending) return;
    const accessStr = (s) => [
    all[s],
    all[s + "_etage"] && "Étage " + all[s + "_etage"],
    all[s + "_asc"] && "Ascenseur : " + (all[s + "_asc"] === "Oui" ? "Oui" + (all[s + "_asc_cap"] ? " (" + all[s + "_asc_cap"] + ")" : "") : "Non"),
    all[s + "_portage"] && "Portage : " + all[s + "_portage"],
    all[s + "_acces"] && "Accès : " + all[s + "_acces"]].
    filter(Boolean).join(" · ") || "—";

    // ── Estimation du prix, calculée AVANT tout envoi pour qu'elle parte avec le lead ──
    // La distance vient des coordonnées mémorisées par l'autocomplétion d'adresse (instantané)
    // ou d'un géocodage à la volée. 3 s de garde-fou : sans distance, le moteur retombe sur sa
    // valeur par défaut, l'estimation reste affichable.
    setSending(true);
    let estim = null;
    try {
      if (window.LBC_PRICING) {
        const [km, kmApproche] = await Promise.all([
          Promise.race([
            // Toujours l'adresse COMPLÈTE : une rue seule se géocode à l'autre bout du pays.
            window.LBC_PRICING.distanceKm(adresseComplete(all, "depart"), adresseComplete(all, "arrivee")),
            new Promise((r) => setTimeout(() => r(null), 8000))
          ]),
          // Approche depuis la base de Nice, jusqu'à l'extrémité LA PLUS PROCHE d'elle.
          // Les DEUX adresses sont passées : n'envoyer que le départ facturait 855 km
          // d'approche sur un Bagnolet → Le Cannet dont l'arrivée est à 31 km de la base.
          // En cas d'échec on renvoie 0 : mieux vaut ne rien facturer qu'un supplément
          // bâti sur une adresse mal comprise.
          Promise.race([
            window.LBC_PRICING.distanceBase(adresseComplete(all, "depart"), adresseComplete(all, "arrivee")),
            new Promise((r) => setTimeout(() => r(0), 8000))
          ])
        ]);
        estim = window.LBC_PRICING.estimer({
          surface: all.surface,
          inventaire: window.buildInventoryArray ? window.buildInventoryArray(all) : [],
          cartons: all.cartons,
          formule: all.formule,
          // Les meubles que le client a déclaré vouloir faire démonter. Jusqu'ici cette
          // information partait dans la fiche du cockpit sans jamais entrer dans le prix :
          // trois heures de démontage d'un dressing ne pesaient rien sur l'estimation.
          demontage: all.demontage,
          km: km,
          kmApproche: kmApproche,
          depart: sideOf(all, "depart"),
          arrivee: sideOf(all, "arrivee")
        });
      }
    } catch (e) {}
    setEstim(estim);

    // Conversion Meta : devis complet finalisé (événement d'insight, en plus du Lead).
    if (window.fbq) window.fbq("trackCustom", "DevisComplet");
    // Conversion Analytics : sans cet événement, GA4 ne connaissait que « form_start » et ne
    // savait donc jamais qui allait au bout. L'entonnoir devait être reconstitué à la main en
    // croisant avec la base. On envoie aussi la fourchette annoncée : Meta et Google peuvent
    // alors optimiser sur la VALEUR du devis, pas sur le simple fait d'avoir ouvert le formulaire.
    if (window.gtag) window.gtag("event", "devis_termine", {
      value: estim ? estim.bas : undefined,
      currency: "EUR",
      volume_m3: estim ? estim.volume : undefined,
      distance_km: estim ? estim.km : undefined,
      formule: all.formule || ""
    });
    // On ATTEND la confirmation d'enregistrement du lead (max 6s de sécurité) AVANT d'afficher
    // l'écran WhatsApp : sinon, sur mobile, l'ouverture immédiate de WhatsApp met le navigateur
    // en arrière-plan et TUE la requête en vol → lead perdu (cas Cindy Arnold, 23/07).
    let ok = null;
    try {
      ok = await Promise.race([
        sendToCockpit(all, { leadId: getLeadId(), estimation: estim }),
        new Promise((r) => setTimeout(() => r(null), 6000))
      ]);
    } catch (e) {}
    setSending(false);
    setFailed(ok === false);
    setSent(true);
    scrollToForm();
  };

  // Le prospect a choisi son créneau de rappel. On renvoie le lead avec le MÊME leadId :
  // le cockpit reconnaît le lead existant et le complète au lieu de créer un doublon.
  const confirmRdv = async (choix) => {
    if (rdvSending) return;
    setRdvSending(true);
    const all = { ...data };
    try {
      await Promise.race([
        sendToCockpit(all, { leadId: getLeadId(), estimation: estim, rdv: choix }),
        new Promise((r) => setTimeout(() => r(null), 6000))
      ]);
    } catch (e) {}
    // Le prospect qui choisit un créneau est le plus chaud de tous : il attend notre appel.
    // C'est cet événement-là qui mérite de devenir l'objectif des campagnes Meta.
    if (window.fbq) window.fbq("trackCustom", choix.immediat ? "RappelImmediat" : "RappelDemande");
    if (window.gtag) window.gtag("event", "rappel_demande", {
      value: estim ? estim.bas : undefined, currency: "EUR", creneau: choix.label || ""
    });
    setRdvSending(false);
    setRdv(choix);
    scrollToForm();
  };
  /* ⚠️ LE RAPPEL DOIT ÊTRE VISIBLE SANS FAIRE DÉFILER.
     Il était placé APRÈS le prix et après la note « Luxe ». Sur mobile,
     le prospect voyait son prix puis un paragraphe d'explications, et devait faire défiler
     pour trouver le bouton. Or c'est à la seconde où il découvre son prix qu'il est le
     plus chaud : chaque geste supplémentaire lui laisse le temps d'aller voir ailleurs.
     Défini ici en variable pour être posé dans les deux branches — prix affiché ou
     trajet à vérifier — sans dupliquer le code. */

  /* On n'affiche le prix QUE si la distance a réellement été calculée. Le 3 août 2026, un
     géocodage bloqué faisait retomber le moteur sur une distance par défaut de 30 km : un
     Cannes → Honfleur de 1 038 km a été annoncé au prix d'un trajet local. Un prix manquant
     se rattrape en un appel ; un prix faux fait perdre le client ET la crédibilité. */
  const blocPrix = estim && estim.distanceFiable ? (
    <div className="ds-price">
      <span className="ds-price-label">
        {estim.visioRequise ? "Votre déménagement, formule Premium" : "Votre déménagement"}
      </span>
      <div className="ds-price-range">
        <span>{estim.bas.toLocaleString("fr-FR")}<span className="cur">€</span></span>
        <span className="dash">–</span>
        <span>{estim.haut.toLocaleString("fr-FR")}<span className="cur">€</span></span>
      </div>
      {/* Texte volontairement court : le titre du bloc de rappel, deux lignes plus haut,
          annonce déjà les 5 minutes au téléphone. Le répéter ici repoussait la grille des
          créneaux sous le pli sur mobile. */}
      <p className="ds-price-sub">
        Fourchette basée sur <strong>{estim.volume}&nbsp;m³</strong> et <strong>~{estim.km}&nbsp;km</strong>.
        Votre <strong>prix ferme</strong> ne bouge plus le jour J.
      </p>
    </div>
  ) : (
    <p className="ds-price-attente">Votre trajet demande une vérification de notre côté&nbsp;: on vous rappelle très vite avec un <strong>prix ferme et définitif</strong>, calculé sur votre distance réelle.</p>
  );

  const blocRappel = rdv ? (
    <React.Fragment>
      <div className="rdv-done">
        <p style={{ margin: 0 }}>📞 C'est noté. On vous appelle <strong>{rdv.label}</strong>{data.tel ? " au " + data.tel : ""}.</p>
      </div>
      {blocPrix}
    </React.Fragment>
  ) : <RappelPicker onConfirm={confirmRdv} confirming={rdvSending} milieu={blocPrix} />;



  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Formulaire</div></div>
          <h2 className="dim-em">Décrivez votre déménagement.<br /><em>On fait le calcul.</em></h2>
        </div>

        <div className="devis-form reveal" id="devis-form-top">
          <div className="form-card">
            {sent ? (
              <div className="devis-success" role="status">
                <div className="ds-check" aria-hidden="true" style={failed ? { background: 'rgba(194,54,43,.10)', color: '#C2362B', borderColor: 'rgba(194,54,43,.35)' } : null}>
                  {failed ?
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.4 17.5a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg> :
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  }
                </div>
                {failed ?
                <React.Fragment>
                  <h3>Votre demande n'a pas pu être enregistrée.</h3>
                  <p>Un souci technique de notre côté, rien à voir avec vous. Ne perdez pas vos 2 minutes&nbsp;: envoyez-nous votre demande sur WhatsApp, elle est déjà pré-remplie&nbsp;👇</p>
                </React.Fragment> :
                <React.Fragment>
                  <h3>Votre demande est bien reçue&nbsp;!</h3>
                  {/* Le fil d'étapes : le prospect voit d'un coup d'œil que sa demande est
                      derrière lui et qu'il ne reste qu'une chose à faire, fixer l'appel. */}
                  <ol className="ds-steps">
                    <li className="ds-step done"><span className="n">✓</span>Votre demande</li>
                    <li className="ds-step active"><span className="n">2</span>Votre rappel</li>
                  </ol>
                  {/* Tout tient dans le rappel : le bouton immédiat, PUIS le prix, PUIS la
                      grille des créneaux. Le prix arrive à la seconde où le prospect hésite
                      entre « appelez-moi maintenant » et « je choisis une heure ». */}
                  {blocRappel}
                  {/* « Luxe » n'est pas estimable en ligne : le prix dépend
                      de ce qu'il y a à emballer, et l'annoncer au jugé revient à le renier
                      après la visite. On le dit franchement, juste en dessous. Un client
                      prévenu accepte la visio ; un client qui découvre l'écart s'en va. */}
                  {estim && estim.distanceFiable && estim.visioRequise ?
                  <div className="ds-note-visio">
                    <p>
                      <strong>Vous avez choisi Luxe</strong>, où nous faisons
                      aussi tous vos cartons. Le montant ci-dessus est celui de la formule{" "}
                      <strong>Premium</strong>&nbsp;: il ne comprend pas encore l'emballage.
                    </p>
                    <p>
                      Ce chiffrage-là dépend entièrement de ce que vous avez à emballer, et nous
                      ne voulons pas vous annoncer un prix que nous devrions corriger ensuite.
                      <strong> Quelques photos ou 15 minutes en visio</strong> nous suffisent pour
                      voir la vaisselle, les fragiles et le volume réel de cartons, et vous
                      repartez avec un <strong>prix ferme</strong>.
                    </p>
                  </div> : null}
                </React.Fragment>
                }
                <div className="ds-actions">
                  <a className="btn btn-wa" href={waLead()} target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2zm5.86 14.15c-.25.7-1.45 1.33-2 1.4-.53.06-1.16.09-1.87-.12-.43-.14-.98-.32-1.7-.63-2.98-1.29-4.93-4.3-5.08-4.49-.15-.2-1.22-1.62-1.22-3.08 0-1.46.77-2.18 1.04-2.48.28-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.48.13.65-.07.17-.2.74-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.08.12.08.72-.17 1.42z"/></svg>
                    {failed ? "Envoyer ma demande sur WhatsApp" : rdv ? "Nous écrire sur WhatsApp" : "Je préfère en parler tout de suite sur WhatsApp"}
                  </a>
                </div>
                <p className="ds-sub">
                  {failed ? <React.Fragment>Ou appelez-nous directement au <a href="tel:+33615976577">06 15 97 65 77</a>, on prend votre demande en direct.</React.Fragment>
                          : <React.Fragment>Pas de WhatsApp&nbsp;? Appelez-nous au <a href="tel:+33615976577">06 15 97 65 77</a>.</React.Fragment>}
                </p>
              </div>
            ) : (
            <React.Fragment>
            <Stepper step={step} />

            {step === 0 &&
            <form onSubmit={goStep0}>
                <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <div className="form-grid">
                  <div className="lf full"><div className="form-section-head">Vos coordonnées <span>— pour vous envoyer le devis</span></div></div>
                  <div className="lf">
                    <label>Prénom & nom</label>
                    <input type="text" name="nom" className={(tried0 && !(data.nom || '').trim() ? 'field-error' : '') + ((data.nom || '').trim().length > 1 ? ' is-valid' : '')} defaultValue={data.nom} onChange={(e) => set('nom', e.target.value)} placeholder="Jean Dupont" autoComplete="name" />
                  </div>
                  <div className="lf">
                    <label>Téléphone</label>
                    <input type="tel" name="tel" className={(tried0 && !(data.tel || '').trim() ? 'field-error' : '') + ((data.tel || '').replace(/\D/g, '').length === 10 ? ' is-valid' : '')} value={data.tel || ''} onChange={(e) => set('tel', formatPhoneFR(e.target.value))} placeholder="06 12 34 56 78" inputMode="numeric" autoComplete="tel" />
                  </div>
                  <div className="lf full">
                    <label>Email</label>
                    <input type="email" name="email" className={(tried0 && !(data.email || '').trim() ? 'field-error' : '') + (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') ? ' is-valid' : '')} defaultValue={data.email} onChange={(e) => set('email', e.target.value)} placeholder="jean@exemple.fr" autoComplete="email" />
                  </div>
                  <div className="lf full"><div className="form-section-head">Votre logement</div></div>
                  <div className="lf full">
                    <label>Type de logement {tried0 && !data.type && <span className="req-hint">— à sélectionner</span>}</label>
                    <div className={"choice-row" + (tried0 && !data.type ? " field-error" : "")}>
                      <Choice name="type" value="appart" label="Appartement" selected={data.type === 'appart'} onSelect={(v) => set('type', v)} />
                      <Choice name="type" value="maison" label="Maison" selected={data.type === 'maison'} onSelect={(v) => set('type', v)} />
                      <Choice name="type" value="bureau" label="Bureaux" selected={data.type === 'bureau'} onSelect={(v) => set('type', v)} />
                    </div>
                  </div>
                  {/* LES DEUX VILLES DÈS L'ÉTAPE 1.
                      Un prospect qui abandonne ici n'envoyait qu'un nom et un téléphone :
                      impossible de savoir s'il déménage à Nice ou à Brest, donc impossible
                      de décider s'il faut le rappeler. Deux villes suffisent à trancher.
                      On ne demande PAS l'adresse complète : c'est le champ le plus pénible
                      à saisir sur un téléphone, et l'étape 1 est celle qu'il faut franchir. */}
                  <div className="lf full"><div className="form-section-head">Votre trajet <span>— pour situer votre déménagement</span></div></div>
                  <AddressField className="lf" name="depart_ville" type="municipality"
                    label={<>Ville de départ {tried0 && !(data.depart_ville || '').trim() && <span className="req-hint">— à remplir</span>}</>}
                    placeholder="Nice" defaultValue={data.depart_ville}
                    onValue={(v) => set('depart_ville', v)}
                    error={tried0 && !(data.depart_ville || '').trim()} />
                  <AddressField className="lf" name="arrivee_ville" type="municipality"
                    label={<>Ville d'arrivée {tried0 && !(data.arrivee_ville || '').trim() && <span className="req-hint">— à remplir</span>}</>}
                    placeholder="Marseille" defaultValue={data.arrivee_ville}
                    onValue={(v) => set('arrivee_ville', v)}
                    error={tried0 && !(data.arrivee_ville || '').trim()} />
                  <div className="lf full">
                    <label>Surface actuelle {tried0 && !data.surface && <span className="req-hint">— à sélectionner</span>}</label>
                    <div className={"choice-row" + (tried0 && !data.surface ? " field-error" : "")}>
                      <Choice name="surf" value="studio" label="Studio" sub="< 30 m²" selected={data.surface === 'studio'} onSelect={(v) => set('surface', v)} />
                      <Choice name="surf" value="t2" label="2 pièces" sub="30–50 m²" selected={data.surface === 't2'} onSelect={(v) => set('surface', v)} />
                      <Choice name="surf" value="t3" label="3 pièces" sub="50–80 m²" selected={data.surface === 't3'} onSelect={(v) => set('surface', v)} />
                      <Choice name="surf" value="t4" label="4 pièces +" sub="80 m² +" selected={data.surface === 't4'} onSelect={(v) => set('surface', v)} />
                    </div>
                  </div>
                </div>
                <div className="form-nav" style={{ marginTop: 32 }}>
                  <button type="submit" className="form-submit">Continuer<span>→</span></button>
                  {tried0 && !step0Complete && <span className="form-incomplete">Il manque quelques infos — voir les champs en rouge.</span>}
                </div>
                <p style={{ marginTop: 14, fontSize: 13.5, color: 'var(--muted)' }}>Gratuit · sans engagement · sans carte bancaire · réponse sous 24h.</p>
              </form>
            }

            {step === 1 &&
            <form onSubmit={captureNext}>
                <div className="access-row">
                  <AccessBlock side="depart" label="Au départ" addrLabel="Adresse de départ" data={data} set={set} showErrors={tried1} />
                  <AccessBlock side="arrivee" label="À l'arrivée" addrLabel="Adresse d'arrivée" data={data} set={set} showErrors={tried1} />
                </div>
                <div className="form-grid" style={{ marginTop: 28 }}>
                  <div className="lf">
                    <label>Date souhaitée</label>
                    <input type="date" name="date" className={tried1 && !data.date ? 'field-error' : ''} defaultValue={data.date} onChange={(e) => set("date", e.target.value)} />
                  </div>
                  <div className="lf">
                    <label>Flexibilité</label>
                    <select name="flex" className={tried1 && !data.flex ? 'field-error' : ''} defaultValue={data.flex || ""} onChange={(e) => set("flex", e.target.value)}>
                      <option value="" disabled>Choisir…</option>
                      <option>Date ferme</option>
                      <option>± quelques jours</option>
                      <option>Dans le mois</option>
                      <option>Pas encore décidé</option>
                    </select>
                  </div>
                  <div className="lf full">
                    <label>Formule souhaitée</label>
                    <div className="formule-cards">
                      <FormuleOption
                      value="standard" name="Standard" tag="L'essentiel, bien fait."
                      items={["Transport & véhicule adapté", "Chargement & déchargement par l'équipe", "Déménagement local ou longue distance", "Assurance incluse"]}
                      selected={data.formule === 'standard'} onSelect={(v) => set('formule', v)} />
                      <FormuleOption
                      value="premium" name="Premium" badge="Le plus demandé" tag="Le confort, sans le stress."
                      items={["Protection intégrale du mobilier", "Démontage & remontage des meubles", "Emballage des objets fragiles", "Assurance incluse"]}
                      selected={data.formule === 'premium'} onSelect={(v) => set('formule', v)} />
                      <FormuleOption
                      value="luxe" name="Luxe" tag="Clé en main, de A à Z."
                      items={["Emballage de tous vos cartons", "Déballage & installation à l'arrivée", "Objets précieux & œuvres d'art protégés", "Assurance incluse"]}
                      selected={data.formule === 'luxe'} onSelect={(v) => set('formule', v)} />
                    </div>
                    <span className="hint" style={{ marginTop: 12 }}>Pas certain ? Prenez <strong>Premium</strong>. On ajuste ensemble au moment du devis. <a href="Formules" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontWeight: 600 }}>Comparatif détaillé →</a></span>
                    <span className="hint" style={{ marginTop: 8 }}>💳 Bon à savoir : votre <strong>déménagement est payable en 3× sans frais</strong> avec Klarna, au moment de la prestation et seulement si vous le souhaitez. <strong>Le devis, lui, est 100&nbsp;% gratuit</strong>, sans engagement ni carte bancaire.</span>
                  </div>
                  <div className="lf full">
                    <label>Détails utiles (optionnel)</label>
                    <textarea name="details" defaultValue={data.details} placeholder="Stationnement à réserver, animaux, garde-meuble, contrainte d'horaire… toute info qui évite une surprise le jour J."></textarea>
                  </div>
                </div>
                <div className="form-nav" style={{ marginTop: 32 }}>
                  <button type="button" className="btn btn-ghost" onClick={back}>← Retour</button>
                  <button type="submit" className="form-submit">Continuer<span>→</span></button>
                  {tried1 && !step1Complete && <span className="form-incomplete">Il manque quelques infos — voir les champs en rouge.</span>}
                </div>
              </form>
            }

            {step === 2 &&
            <InventoryStep data={data} set={set} onBack={back} onSubmit={submit} sending={sending} />
            }
            <p style={{ marginTop: 22, textAlign: 'center', fontSize: 15, color: 'var(--ink-2)' }}>
              Vous préférez en parler ? <a href="tel:+33615976577" style={{ color: 'var(--accent)', fontWeight: 700 }}>06 15 97 65 77</a>
            </p>
            </React.Fragment>
            )}
          </div>

          <aside className="devis-aside">
            <div className="aside-card">
              <h4>Ce que vous obtenez</h4>
              <ul>
                <li>Votre fourchette de prix immédiatement</li>
                <li>Le rappel à l'heure que vous choisissez</li>
                <li>La formule conseillée pour votre volume</li>
                <li>Un interlocuteur unique, joignable 24/7</li>
                <li>Aucun engagement, aucune carte bancaire</li>
              </ul>
            </div>
            {/* Note réelle relevée sur la fiche Google Business : 5,0.
                Le total « +100 avis clients » couvre l'ensemble des plateformes où LBC est noté
                (Edouard le confirme). Deux précautions volontaires :
                  - on écrit « avis clients » et non « avis vérifiés » : « Avis Vérifiés » est une
                    marque déposée, et l'article L111-7-2 du code de la consommation impose de
                    préciser si les avis sont contrôlés et comment ;
                  - le chiffre du balisage AggregateRating reste, lui, celui de la fiche Google,
                    seul vérifiable par Google, qui sanctionne un total ne correspondant pas aux
                    avis affichés sur la page. */}
            <div className="aside-rating">
              <div className="big">5,0</div>
              <div className="stars">★★★★★</div>
              <div className="sub">
                +100 avis clients ·{' '}
                <a href="https://maps.app.goo.gl/8s8k2kZrFJpTn8e18" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  voir sur Google
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}

const REVIEWS = [
{ name: "Mari", text: "Très bonne expérience du début à la fin. L'équipe a été ponctuelle, organisée et très professionnelle. Tous nos meubles ont été parfaitement protégés et manipulés avec beaucoup de soin. Le déménagement s'est déroulé rapidement, dans une excellente ambiance, ce qui a rendu cette journée beaucoup moins stressante. Un grand merci pour votre sérieux et votre efficacité. Je recommande cette entreprise sans hésitation !" },
{ name: "Jean", text: "Excellente prestation ! L'équipe a été très réactive, soigneuse et toujours à l'écoute. Tout a été transporté sans le moindre dommage et le déménagement s'est terminé plus rapidement que prévu. Un vrai service de qualité avec des personnes sympathiques et professionnelles. Merci encore !" },
{ name: "Eliza", text: "Je recommande cette entreprise les yeux fermés. Dès le premier contact, tout a été clair et bien organisé. Le jour du déménagement, l'équipe est arrivée à l'heure, a pris grand soin de nos affaires et a travaillé avec efficacité tout au long de la journée. Un service sérieux, des tarifs honnêtes et une équipe très agréable. Merci pour votre professionnalisme !" }];


function Testimonials() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Ils nous ont fait confiance</div></div>
          <h2 className="dim-em">Ce que disent<br /><em>nos clients.</em></h2>
        </div>
        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 40 }}>
          {REVIEWS.map((r, i) =>
          <figure key={i} style={{ margin: 0, background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ color: 'var(--accent)', fontSize: 18, letterSpacing: 2 }} aria-label="Note 5 sur 5">★★★★★</div>
              <blockquote style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>{r.text}</blockquote>
              <figcaption style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 'auto' }}>— {r.name}</figcaption>
            </figure>
          )}
        </div>
        <p style={{ marginTop: 24, fontSize: 14, color: 'var(--muted)' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>★ 5,0/5</span> · +100 avis clients
        </p>
      </div>
    </section>);

}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <DevisHero />
        <DevisForm />
        <Testimonials />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);