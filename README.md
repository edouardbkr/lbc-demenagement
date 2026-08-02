# lbcdemenagement.com

Site React sans bundler. Chaque page est un `.html` autonome qui charge des scripts compilés.

## Mettre en ligne

```sh
cd ..          # dossier sites-web/
./deploy.sh
```

Seule méthode valable. Elle compile, vérifie, puis déploie, et **refuse de déployer** si quelque
chose cloche. Ne jamais lancer `wrangler pages deploy` à la main : ça contourne les vérifications.

## Développer

```sh
cd ..
node build.js --watch     # recompile à chaque modification d'un .jsx
```

Puis servir le dossier en local :

```sh
python3 -m http.server 8899
```

## La règle à ne pas oublier

**Le navigateur ne lit JAMAIS les `.jsx`, seulement les `.js` compilés.**

Modifier un `.jsx` sans recompiler met l'ancien code en ligne, en silence, sans erreur.
`deploy.sh` empêche ça.

## Partager du code entre fichiers

`build.js` isole chaque fichier. Donc :

- `function MonComposant() {}` en début de ligne → **visible partout**
- `const MonComposant = () => {}` → **privé à son fichier**

Pour partager une donnée ou un composant écrit en `const`, l'exposer explicitement en fin de
fichier, comme le font `blog-data.jsx` et `city-data.jsx` :

```js
Object.assign(window, { MES_DONNEES, maFonction });
```

Un oubli ne provoque **aucune erreur au build**, seulement une page blanche.

## Réinstaller React (dossier assets/vendor)

Si `build.js` signale React manquant :

```sh
mkdir -p assets/vendor
curl -sLo assets/vendor/react.production.min.js \
  https://unpkg.com/react@18.3.1/umd/react.production.min.js
curl -sLo assets/vendor/react-dom.production.min.js \
  https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js
```

Ces fichiers sont volontairement **enregistrés dans git** : sans eux le site ne démarre pas.

## Documentation complète

`context/lbc-technique.md` à la racine du workspace jarvis (cache, capture des leads,
état de l'app, procédure d'audit).
