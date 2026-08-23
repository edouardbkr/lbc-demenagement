#!/usr/bin/env node
/* LE LIEN « REPRENDRE MON DEVIS » ROUVRE-T-IL VRAIMENT LE FORMULAIRE PRÉ-REMPLI ?
 *
 * C'est le prérequis de l'accusé de réception du profil A, celui qui a lâché le formulaire
 * en route. Un lien de reprise qui repart de zéro est PIRE qu'aucun lien : le prospect se
 * dit qu'il a déjà perdu son temps une fois, et il ne recommence pas.
 *
 * On charge la vraie page en ligne dans un Chrome sans fenêtre, on la pilote en CDP direct
 * (aucune dépendance à installer) et on regarde ce que le visiteur verrait. */
const { spawn } = require('child_process');
const http = require('http');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

/* Le lead type : ce qu'on connaît d'un prospect qui s'est arrêté à l'inventaire. */
const LEAD = {
  lead: 'Ltest' + '000',
  etape: '2',
  nom: 'Zaïneb Boukhris',
  tel: '0744878869',
  email: 'zaineb@exemple.fr',
  type: 'appart',
  surface: 't3',
  depart: 'Nice',
  arrivee: 'Toulouse',
  date: '2026-09-29'
};
const URL = 'https://lbcdemenagement.com/Devis.html?' +
  Object.entries(LEAD).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&');

const attendre = (ms) => new Promise((r) => setTimeout(r, ms));
const getJSON = (chemin) => new Promise((ok, ko) => {
  http.get({ host: '127.0.0.1', port: PORT, path: chemin }, (r) => {
    let d = ''; r.on('data', (c) => d += c); r.on('end', () => { try { ok(JSON.parse(d)); } catch (e) { ko(e); } });
  }).on('error', ko);
});

async function main() {
  const chrome = spawn(CHROME, ['--headless=new', '--remote-debugging-port=' + PORT,
    '--no-first-run', '--disable-gpu', '--window-size=390,1400',
    '--user-data-dir=/tmp/chrome-lbc-reprise', 'about:blank'], { stdio: 'ignore' });
  let cible = null;
  for (let i = 0; i < 40 && !cible; i++) {
    await attendre(250);
    try { cible = (await getJSON('/json/list')).find((t) => t.type === 'page'); } catch (e) {}
  }
  if (!cible) { chrome.kill(); throw new Error('Chrome ne répond pas'); }

  const WebSocket = (await import('node:http')).default && null;   // pas de ws : on passe par le protocole HTTP + eval
  /* CDP en WebSocket sans dépendance : on utilise le module natif de Node 22+. */
  const ws = new (require('node:worker_threads') && globalThis.WebSocket)(cible.webSocketDebuggerUrl);
  let id = 0; const attentes = new Map();
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    if (m.id && attentes.has(m.id)) { attentes.get(m.id)(m); attentes.delete(m.id); }
  });
  await new Promise((r) => ws.addEventListener('open', r));
  const envoyer = (method, params) => new Promise((r) => { const n = ++id; attentes.set(n, r); ws.send(JSON.stringify({ id: n, method, params: params || {} })); });
  const evaluer = async (expr) => {
    const r = await envoyer('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return r.result && r.result.result && r.result.result.value;
  };

  await envoyer('Page.enable');
  await envoyer('Runtime.enable');
  await envoyer('Page.navigate', { url: URL });
  await attendre(6000);

  const vu = await evaluer(`(() => {
    /* ⚠️ UN RADIO NON COCHÉ PORTE QUAND MÊME UN value. La première version de ce banc
       relevait e.value sur tous les champs : elle rapportait « type = bureau » et
       « surf = t4 », qui sont simplement les DERNIÈRES options de chaque groupe, jamais
       la sélection du visiteur. On ne lit donc que ce qui est réellement coché. */
    const champs = {};
    document.querySelectorAll('input, select, textarea').forEach((e) => {
      const cle = e.name || e.id || e.getAttribute('placeholder') || '';
      if (!cle) return;
      if (e.type === 'radio' || e.type === 'checkbox') { if (e.checked) champs[cle] = e.value; }
      else if (e.value) champs[cle] = e.value;
    });
    /* L'étape réellement affichée : on la lit sur le fil d'étapes du formulaire, pas sur
       le texte du haut de page qui est le même à toutes les étapes. */
    const actif = document.querySelector('.devis-step.active');
    return {
      titre: document.title,
      texte: (document.body.innerText || '').slice(0, 2600),
      champs: champs,
      etapeAffichee: actif ? (actif.innerText || '').trim().slice(0, 60) : '',
      nbRemplis: Object.keys(champs).length,
      url: location.href
    };
  })()`);

  /* ⚠️ LA VRAIE QUESTION N'EST PAS CE QUI EST À L'ÉCRAN, C'EST CE QUI EST RETENU.
     À l'étape 2, les champs nom/tel/e-mail ne sont plus dans le DOM : c'est normal, ils
     appartiennent à l'étape précédente. Leur absence ne prouve rien. On revient donc en
     arrière et on regarde s'ils sont encore là — c'est la seule mesure qui dise si le
     prospect devra retaper ce qu'il a déjà donné. */
  await evaluer(`(() => {
    const b = [...document.querySelectorAll('button')].find((x) => /Retour/.test(x.textContent || ''));
    if (b) b.click();
    return !!b;
  })()`);
  await attendre(1200);
  const retour = await evaluer(`(() => {
    const champs = {};
    document.querySelectorAll('input, select, textarea').forEach((e) => {
      const cle = e.name || e.id || e.getAttribute('placeholder') || '';
      if (!cle) return;
      if (e.type === 'radio' || e.type === 'checkbox') { if (e.checked) champs[cle] = e.value; }
      else if (e.value) champs[cle] = e.value;
    });
    const actif = document.querySelector('.devis-step.active');
    return { champs: champs, etape: actif ? (actif.innerText || '').trim().slice(0, 40) : '' };
  })()`);
  vu.retour = retour;

  ws.close(); chrome.kill();
  return vu;
}

main().then((v) => {
  let ok = 0, ko = 0;
  const t = (nom, cond, detail) => { if (cond) { ok++; console.log('  ✅ ', nom); }
                                     else { ko++; console.log('  ❌ ', nom, detail ? '\n        ' + detail : ''); } };
  console.log('\n  LE LIEN DE REPRISE, VU PAR LE PROSPECT\n');
  console.log('  ' + v.url.slice(0, 110) + '…\n');

  t('la page se charge', !!v.titre, v.titre);
  t('elle s\'ouvre à l\'étape 2, pas à l\'étape 1', /2\b/.test(v.etapeAffichee) || /inventaire|meubles|logement/i.test(v.etapeAffichee),
    'étape affichée : « ' + v.etapeAffichee + ' »');

  t('les villes sont reprises', JSON.stringify(v.champs).includes('Nice') && JSON.stringify(v.champs).includes('Toulouse'));
  t('la date souhaitée est reprise', JSON.stringify(v.champs).includes('2026-09-29'));

  const r = JSON.stringify((v.retour || {}).champs || {});
  console.log('\n  ── ET EN REVENANT À L\'ÉTAPE 1 ──\n');
  t('on revient bien à l\'étape 1', /1|Coordonnées/.test((v.retour || {}).etape || ''), 'étape : « ' + ((v.retour || {}).etape || '') + ' »');
  t('le nom a survécu', /Boukhris|Za/.test(r), r.slice(0, 200));
  t('le téléphone a survécu', r.includes('0744878869'));
  t('l\'e-mail a survécu', r.includes('zaineb@exemple.fr'));
  t('le type de logement a survécu', /"type":"appart"/.test(r));
  t('la surface a survécu', /"surf":"t3"|"surface":"t3"/.test(r));

  console.log('\n  étape affichée : « ' + v.etapeAffichee + ' »');
  console.log('\n  ── CE QUE LA PAGE AFFICHE ──\n');
  console.log(v.texte.split('\n').filter(Boolean).slice(0, 22).map((l) => '    ' + l).join('\n'));
  console.log('\n  ── CHAMPS PRÉ-REMPLIS ──\n');
  Object.entries(v.champs).forEach(([k, val]) => console.log('    ' + k.padEnd(24) + ' = ' + val));
  console.log('\n  ' + ok + '/' + (ok + ko) + ' vérifications passées\n');
  process.exit(ko ? 1 : 0);
}).catch((e) => { console.error('\n  ❌ ' + e.message + '\n'); process.exit(1); });
