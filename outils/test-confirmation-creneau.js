#!/usr/bin/env node
/* L'ACCUSÉ DE RÉCEPTION DU CLIENT NE PART QUE SUR UN CRÉNEAU RÉSERVÉ.
 *
 * C'est le seul message automatique envoyé au prospect. Trois façons de se tromper, et
 * chacune coûte cher :
 *   • l'envoyer sur un formulaire abandonné : « nous avons bien reçu votre demande »
 *     sonnerait faux, il n'a rien envoyé de complet ;
 *   • l'envoyer sur un devis sans rendez-vous : il a refusé le créneau, lui annoncer une
 *     heure serait lui imposer ce qu'il vient de décliner ;
 *   • l'envoyer sur un créneau « maintenant » : Edouard appelle dans la foulée, le mail
 *     arriverait après le coup de fil. */
const fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'functions', 'api', 'lead.js'), 'utf8');

/* On extrait les fonctions pures du module : il exporte onRequestPost et fait du réseau,
   on ne veut ni l'un ni l'autre sur un banc. */
const bout = (nom) => {
  const i = src.indexOf('function ' + nom);
  if (i < 0) throw new Error('introuvable : ' + nom);
  let p = 0, j = src.indexOf('{', i);
  for (let k = j; k < src.length; k++) {
    if (src[k] === '{') p++;
    else if (src[k] === '}') { p--; if (!p) return src.slice(i, k + 1); }
  }
  throw new Error('accolades : ' + nom);
};
const esc = (v) => String(v == null || v === "" ? "—" : v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
eval(bout('heureParis'));
eval(bout('dateEnToutesLettres'));
eval(bout('doitConfirmerCreneau'));
eval(bout('construireConfirmation'));
const heureLisible = (h) => String(h || "").replace(":", " h ").replace(/ h 00$/, " h");
const salutParis = () => (heureParis() >= 18 ? "Bonsoir" : "Bonjour");

let ok = 0, ko = 0;
const t = (nom, cond, detail) => { if (cond) { ok++; console.log('  ✅ ', nom); }
                                   else { ko++; console.log('  ❌ ', nom, detail ? '— ' + detail : ''); } };
const lead = (p) => Object.assign({
  client: { prenom: 'Zaïneb', nom: 'Boukhris', email: 'z@exemple.fr', tel: '0744878869' },
  statut: 'Devis complet', formulaireType: 'detaille',
  depart: { ville: 'Nice' }, arrivee: { ville: 'Toulouse' },
  dateSouhaitee: '2026-09-29', estimationBasse: 1460, estimationHaute: 1610,
  rdvDate: '2026-08-26', rdvHeure: '18:00', rdvImmediat: false
}, p || {});

console.log('\n── Il ne part QUE sur un créneau réservé ──');
t('créneau réservé + e-mail → il part', doitConfirmerCreneau(lead()));
t('formulaire abandonné (aucun créneau) → rien',
  !doitConfirmerCreneau(lead({ rdvDate: '', rdvHeure: '', formulaireType: 'partiel', estimationBasse: null, estimationHaute: null })));
t('devis complet SANS créneau → rien', !doitConfirmerCreneau(lead({ rdvDate: '', rdvHeure: '' })));
t('créneau « maintenant » → rien, Edouard appelle direct', !doitConfirmerCreneau(lead({ rdvImmediat: true })));

console.log('\n── Sans adresse valide, on n\'écrit nulle part ──');
[['', 'vide'], [null, 'absente'], ['pasunmail', 'sans @'], ['a@b', 'sans domaine'], ['  ', 'espaces']]
  .forEach(([mail, quoi]) => t('e-mail ' + quoi + ' → rien', !doitConfirmerCreneau(lead({ client: { prenom:'Z', email: mail } }))));
t('e-mail avec espaces autour → il part quand même',
  doitConfirmerCreneau(lead({ client: { prenom:'Z', email: '  z@exemple.fr  ' } })));

console.log('\n── Ce que le mail dit ──');
const m = construireConfirmation(lead());
t('le sujet annonce le rendez-vous', /C'est noté, je vous appelle mercredi 26 août à 18 h/.test(m.sujet), m.sujet);
t('la date est en toutes lettres, pas en ISO', !/2026-08-26/.test(m.sujet + m.html));
t('le prénom est là', /Zaïneb/.test(m.html));
const normal = (x) => String(x).replace(/[\u00A0\u202F]/g, ' ');
t('la fourchette y est, formatée', /1 460 € et 1 610 €/.test(normal(m.html)), normal(m.html).slice(0, 300));
t('la date souhaitée est en toutes lettres, pas en ISO', !/\d{4}-\d{2}-\d{2}/.test(m.html) && /29 septembre/.test(normal(m.html)), normal(m.html).slice(120, 260));
t('le trajet y est', /Nice → Toulouse/.test(m.html));
t('il promet le prix ferme', /prix ferme/.test(m.html));
t('il ouvre une porte de sortie', /Un empêchement/.test(m.html));
t('il est signé Edouard', /Edouard/.test(m.html));
t('il ne relance rien', !/relance|relancer/i.test(m.html));

console.log('\n── La version texte brut, que les filtres anti-spam attendent ──');
t('le mail porte une version texte', typeof m.texte === 'string' && m.texte.length > 80);
t('elle ne contient plus aucune balise', !/[<>]/.test(m.texte), m.texte.slice(0, 120));
t('elle dit la même chose que le HTML', /je vous appelle/i.test(m.texte) && /prix ferme/.test(m.texte));
t('elle est signée', /Edouard/.test(m.texte));
t('pas de trous de trois lignes vides', !/\n{3,}/.test(m.texte));

console.log('\n── Le cas sans prix affiché ──');
const sansPrix = construireConfirmation(lead({ estimationBasse: null, estimationHaute: null }));
t('aucune fourchette inventée', !/€/.test(sansPrix.html));
t('mais le rendez-vous est confirmé', /je vous appelle/i.test(sansPrix.html));

console.log('\n── Le salut suit l\'heure de Paris, pas celle du serveur ──');
t('salutParis rend Bonjour ou Bonsoir', ['Bonjour','Bonsoir'].includes(salutParis()));
t('heureParis rend une heure plausible', heureParis() >= 0 && heureParis() <= 23);
t('la fonction passe par la timezone Europe/Paris', /Europe\/Paris/.test(src));

console.log('\n── Rien ne casse sur un lead abîmé ──');
[[{ client: null }, 'client absent'], [{ rdvHeure: '' }, 'heure absente'],
 [{ depart: null, arrivee: null }, 'villes absentes'], [{ rdvDate: 'n\'importe quoi' }, 'date invalide']]
  .forEach(([patch, quoi]) => {
    let crash = null;
    try { const l = lead(patch); if (doitConfirmerCreneau(l)) construireConfirmation(l); } catch (e) { crash = e.message; }
    t(quoi + ' → aucun plantage', crash === null, crash); });

console.log('\n── Le formulaire transmet bien l\'info « maintenant » ──');
const dev = fs.readFileSync(path.join(__dirname, '..', 'devis-page.js'), 'utf8');
t('rdvImmediat part dans le payload', /rdvImmediat:/.test(dev));
t('il vient du choix du client', /opts\.rdv && opts\.rdv\.immediat/.test(dev));

console.log('\n  ' + ok + '/' + (ok + ko) + ' vérifications passées\n');
process.exit(ko ? 1 : 0);
