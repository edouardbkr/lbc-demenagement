#!/usr/bin/env node
/* CE QUE LE CLIENT DÉCLARE EST CE QU'ON RETIENT — y compris quand il ne déclare que des cartons.
 *
 * Le 22 août 2026, le dossier de Zaïneb Boukhris annonçait « volume retenu 13 m³ » alors
 * qu'elle avait coché 6 cartons et rien d'autre. La condition qui décide si un inventaire
 * existe ne regardait que la liste des meubles : des cartons seuls valaient « rien déclaré »,
 * et le volume TYPIQUE du logement s'appliquait — 12 m³ pour un studio, 13 après la marge.
 *
 * Le symptôme qui prouvait l'absurdité : AJOUTER un lit double à ces 6 cartons faisait
 * TOMBER l'estimation de 13 m³ à 3 m³. Plus le client déclarait, moins on comptait.
 *
 * C'est le même défaut que celui du 15 août sur l'autre branche, où un plancher relevait
 * l'inventaire déclaré. La règle est la même des deux côtés. */
const fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'pricing.js'), 'utf8');
global.window = {}; eval(src);
const P = window.LBC_PRICING;

let ok = 0, ko = 0;
const t = (nom, cond, detail) => { if (cond) { ok++; console.log('  ✅ ', nom); }
                                   else { ko++; console.log('  ❌ ', nom, detail ? '— ' + detail : ''); } };
const base = { km: 585, formule: 'coup_de_main', dep: { etage: 0, ascenseur: true }, arr: { etage: 0, ascenseur: true } };
const vol = (patch) => { const e = P.estimer(Object.assign({}, base, patch)); return e ? e.volume : null; };

console.log('\n── Des cartons seuls sont un inventaire ──');
t('studio, 6 cartons, aucun meuble → 1 m³ et non 13',
  vol({ surface: 'studio', cartons: 6, inventaire: [] }) === 1,
  'obtenu : ' + vol({ surface: 'studio', cartons: 6, inventaire: [] }) + ' m³');
t('t2, 6 cartons, aucun meuble → 1 m³ et non 22',
  vol({ surface: 't2', cartons: 6, inventaire: [] }) === 1);
t('maison, 10 cartons, aucun meuble → 1 m³ et non 53',
  vol({ surface: 'maison', cartons: 10, inventaire: [] }) === 1);

console.log('\n── Déclarer PLUS ne doit jamais faire baisser le volume ──');
const c6 = vol({ surface: 'studio', cartons: 6, inventaire: [] });
const c6lit = vol({ surface: 'studio', cartons: 6, inventaire: [{ meuble: 'lit double', quantite: 1 }] });
t('6 cartons + un lit ≥ 6 cartons seuls', c6lit >= c6, c6 + ' m³ puis ' + c6lit + ' m³');
const c6lit2 = vol({ surface: 'studio', cartons: 6, inventaire: [{ meuble: 'lit double', quantite: 2 }] });
t('deux lits ≥ un lit', c6lit2 >= c6lit, c6lit + ' m³ puis ' + c6lit2 + ' m³');
const c60 = vol({ surface: 'studio', cartons: 60, inventaire: [] });
t('60 cartons > 6 cartons', c60 > c6, c6 + ' m³ puis ' + c60 + ' m³');

console.log('\n── Rien du tout : le volume typique du logement, comme avant ──');
t('studio vide → 13 m³ (12 typique + 10 % de marge)',
  vol({ surface: 'studio', cartons: 0, inventaire: [] }) === 13);
t('t3 vide → 33 m³', vol({ surface: 't3', cartons: 0, inventaire: [] }) === 33);
t('maison vide → 53 m³', vol({ surface: 'maison', cartons: 0, inventaire: [] }) === 53);

console.log('\n── L\'inventaire de meubles fait toujours foi, sans plancher ──');
t('T4 avec un seul canapé → pas relevé à 18 m³',
  vol({ surface: 't4', cartons: 0, inventaire: [{ meuble: 'canapé 3 places', quantite: 1 }] }) < 5);

console.log('\n── La note du cockpit signale un inventaire maigre ──');
const dev = fs.readFileSync(path.join(__dirname, '..', 'devis-page.js'), 'utf8');
t('la note « INVENTAIRE MAIGRE » existe', /INVENTAIRE MAIGRE/.test(dev));
t('elle couvre le cas « aucun meuble »', /AUCUN meuble déclaré/.test(dev));
t('elle couvre le cas « trois meubles pour un T3 »', /rempli à moitié/.test(dev));

console.log('\n  ' + ok + '/' + (ok + ko) + ' vérifications passées\n');
process.exit(ko ? 1 : 0);
