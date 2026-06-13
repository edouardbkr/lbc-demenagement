// blog-data.jsx — Article content store (shared by Blog listing + Article reader)

const ARTICLES = [
  {
    slug: "estimer-volume",
    cat: "Méthode",
    title: "Estimer le volume de votre déménagement, sans se tromper",
    date: "28 avril 2026",
    read: "5 min",
    excerpt: "La méthode pièce par pièce qu'utilisent les pros pour convertir vos meubles en m³ — et pourquoi une visite vidéo vaut mieux qu'un tableur.",
    thumb: "Mètre ruban sur meuble",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Le volume en mètres cubes, c'est le nerf de la guerre. Trop estimé, vous payez du vide. Sous-estimé, le camion est trop petit le jour J. Voici comment viser juste.</p>
        <h2>La règle du « pièce par pièce »</h2>
        <p>On ne compte pas objet par objet, on raisonne par pièce. Un salon meublé fait en moyenne 6 à 9 m³, une chambre 4 à 6 m³, une cuisine équipée 4 à 5 m³. Additionnez, ajoutez 10 % pour les cartons et le « on verra ».</p>
        <ul>
          <li>Listez les gros meubles par pièce (canapé, armoire, lit, électroménager).</li>
          <li>Estimez le nombre de cartons : comptez environ un carton standard pour 0,05 m³.</li>
          <li>N'oubliez ni la cave, ni le garage, ni le balcon — les grands oubliés.</li>
        </ul>
        <blockquote>Un déménageur expérimenté « voit » le volume d'une pièce en quelques secondes. C'est tout l'intérêt d'une visite.</blockquote>
        <h2>Pourquoi la visite vidéo a tout changé</h2>
        <p>Plus besoin d'attendre un rendez-vous physique : une visite vidéo de quinze minutes suffit à un pro pour estimer votre volume au m³ près, repérer les meubles à démonter et anticiper les accès. C'est rapide, gratuit, et bien plus fiable qu'un formulaire.</p>
      </React.Fragment>
    )
  },
  {
    slug: "demenager-nice",
    cat: "Côte d'Azur",
    title: "Déménager à Nice : stationnement, autorisations et bons réflexes",
    date: "9 avril 2026",
    read: "7 min",
    excerpt: "Vieux-Nice, Cimiez, Carré d'Or : chaque quartier a ses contraintes. Le guide pour ne pas finir avec un camion bloqué et une amende.",
    thumb: "Ruelle du Vieux-Nice",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Déménager à Nice, ce n'est pas déménager n'importe où. Entre les ruelles du Vieux-Nice, les immeubles haussmanniens du centre et les hauteurs de Cimiez, le stationnement se prépare.</p>
        <h2>L'autorisation de stationnement, l'étape qu'on oublie</h2>
        <p>Pour réserver l'emplacement du camion devant chez vous, il faut une autorisation de la mairie, à demander idéalement deux à trois semaines à l'avance. Sans elle, vous risquez de porter vos cartons sur cent mètres — ou pire, de bloquer la circulation.</p>
        <ul>
          <li><strong>Vieux-Nice</strong> — zones piétonnes, créneaux horaires stricts pour les véhicules.</li>
          <li><strong>Carré d'Or & centre</strong> — rues étroites, double file interdite, ascenseurs souvent petits.</li>
          <li><strong>Cimiez & hauteurs</strong> — accès en pente, parfois monte-meuble nécessaire.</li>
        </ul>
        <blockquote>Un bon déménageur local connaît déjà ces contraintes — et fait les démarches pour vous.</blockquote>
        <h2>Les bons réflexes niçois</h2>
        <p>Évitez les semaines de carnaval et de grands événements, anticipez la chaleur estivale pour les objets sensibles, et prévenez le syndic de l'immeuble. Un déménagement réussi à Nice, c'est 80 % de préparation et 20 % de muscles.</p>
      </React.Fragment>
    )
  },
  {
    slug: "choisir-demenageur",
    cat: "Conseils",
    title: "Choisir sa société de déménagement : 7 signaux qui ne trompent pas",
    date: "21 mars 2026",
    read: "6 min",
    excerpt: "Devis flou, acompte trop élevé, pas d'assurance affichée… Les drapeaux rouges à repérer, et les questions à poser avant de signer.",
    thumb: "Poignée de main · contrat",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Confier toutes ses affaires à des inconnus demande un minimum de confiance. Bonne nouvelle : on reconnaît un déménageur sérieux à quelques signaux très concrets.</p>
        <h2>Les 7 signaux d'un pro fiable</h2>
        <ul>
          <li>Un <strong>devis écrit et détaillé</strong>, prestation par prestation.</li>
          <li>Une <strong>assurance affichée</strong>, avec ses plafonds clairement indiqués.</li>
          <li>Un <strong>numéro SIRET</strong> et une adresse physique vérifiables.</li>
          <li>Des <strong>avis clients récents</strong> et vérifiables, pas trois étoiles anonymes.</li>
          <li>Des <strong>déménageurs déclarés</strong>, pas uniquement de l'intérim au jour le jour.</li>
          <li>Un <strong>acompte raisonnable</strong> (jamais la totalité d'avance).</li>
          <li>Un <strong>interlocuteur joignable</strong> avant, pendant et après.</li>
        </ul>
        <blockquote>Si le prix paraît trop beau pour être vrai, c'est souvent que quelque chose n'est pas dans le devis.</blockquote>
        <h2>Les questions à poser avant de signer</h2>
        <p>Qui sera sur place le jour J ? Que couvre exactement l'assurance ? Que se passe-t-il en cas de retard ou de casse ? Un professionnel sérieux répond sans hésiter — et le met par écrit.</p>
      </React.Fragment>
    )
  },
  {
    slug: "demenagement-nice-paris-prix-delais",
    cat: "Longue distance",
    title: "Déménagement Nice → Paris : délais et organisation en 2026",
    date: "26 mai 2026",
    read: "8 min",
    excerpt: "En combien de temps se fait un Nice-Paris, et comment éviter les pièges des 930 km qui séparent la Côte d'Azur de la capitale.",
    thumb: "Carte Nice–Paris · ruban d'autoroute",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Le <strong>déménagement Nice → Paris</strong> est l'un des trajets longue distance les plus demandés de France. 930 kilomètres, environ 9 heures de route, et une logistique qui ne s'improvise pas. Voici tout ce qu'il faut savoir pour le réussir, sans mauvaise surprise.</p>
        <blockquote>Le bon réflexe : un seul camion, une seule équipe du chargement niçois au déchargement parisien. Pas de groupage hasardeux, pas de transbordement qui abîme.</blockquote>
        <h2>Combien de temps pour un Nice-Paris ?</h2>
        <p>Le trajet routier dure une journée. Selon la formule, le déménagement complet (emballage, route, livraison) s'étale sur 1 à 3 jours. En <a href="Demenagement-Nice-Paris.html">déménagement Nice → Paris</a> dédié, on charge un jour et on livre le lendemain matin.</p>
        <h3>Les pièges parisiens à anticiper</h3>
        <p>À l'arrivée, Paris impose ses règles : autorisation de stationnement à demander en mairie d'arrondissement, immeubles haussmanniens sans ascenseur ou avec cage trop étroite (le monte-meuble par la façade devient indispensable), et créneaux de livraison serrés. Un déménageur qui connaît les deux villes vous évite l'amende et les heures perdues.</p>
        <h2>Bien préparer son Nice-Paris</h2>
        <p>Réservez 3 à 4 semaines à l'avance, évitez juin-septembre si possible, triez avant de partir, et comparez des devis qui décrivent <em>le même</em> service. Le garde-meuble relais peut aussi vous dépanner si vos dates de départ et d'arrivée ne coïncident pas.</p>
      </React.Fragment>
    )
  },
  {
    slug: "demenagement-nice-paris-reussir",
    cat: "Longue distance",
    title: "Réussir son déménagement Nice-Paris : le guide complet",
    date: "24 mai 2026",
    read: "7 min",
    excerpt: "Rétroplanning, cartons, formalités, jour J : la méthode pas-à-pas pour quitter la Côte d'Azur et s'installer à Paris sans stress.",
    thumb: "Cartons étiquetés · départ vers le nord",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Quitter la douceur niçoise pour l'effervescence parisienne, c'est un grand changement — et un déménagement de 930 km à orchestrer. Voici le <strong>guide pas-à-pas pour réussir votre déménagement Nice → Paris</strong>.</p>
        <h2>8 semaines avant : le rétroplanning</h2>
        <ul>
          <li><strong>J-8 semaines</strong> — demandez vos devis et bloquez la date. Les bons créneaux partent vite, surtout l'été.</li>
          <li><strong>J-6 semaines</strong> — triez, donnez, vendez. Chaque m³ en moins fait baisser la facture sur un long trajet.</li>
          <li><strong>J-4 semaines</strong> — résiliez/transférez vos contrats (énergie, internet, assurance) et lancez le changement d'adresse.</li>
          <li><strong>J-2 semaines</strong> — réservez l'autorisation de stationnement à Nice <em>et</em> à Paris.</li>
        </ul>
        <h2>Bien emballer pour la route</h2>
        <p>Sur 930 km, le calage est crucial : un carton mal rempli s'écrase, un meuble mal protégé se raye. Privilégiez des cartons pleins (mais pas trop lourds), protégez la vaisselle et les écrans, et étiquetez par pièce de destination. En formule <a href="Formules.html">Mains libres ou Mains dans les poches</a>, l'équipe s'occupe de tout.</p>
        <blockquote>Sur un long trajet, la qualité du chargement compte autant que la conduite. Rien ne doit bouger entre Nice et Paris.</blockquote>
        <h2>Le jour J, des deux côtés</h2>
        <p>Au départ de Nice, on charge tôt pour éviter la chaleur et la circulation. À l'arrivée à Paris, on décharge sur le créneau réservé, on remonte les meubles et on installe. Avec une <a href="Demenagement-Nice-Paris.html">équipe dédiée Nice-Paris</a>, ce sont les mêmes déménageurs du début à la fin.</p>
        <h3>Et après ?</h3>
        <p>Gardez une boîte « première nuit » (draps, trousse de toilette, chargeurs, cafetière) accessible. C'est le petit secret qui transforme une première nuit parisienne épuisante en simple emménagement.</p>
      </React.Fragment>
    )
  },
  {
    slug: "demenagement-la-rochelle-guide",
    cat: "Villes",
    title: "Déménager à La Rochelle : centre historique, Les Minimes et les îles",
    date: "22 mai 2026",
    read: "7 min",
    excerpt: "Arcades médiévales, plus grand port de plaisance d'Europe, îles de Ré et d'Oléron : le guide pour déménager à La Rochelle sans mauvaise surprise.",
    thumb: "Tours du Vieux-Port de La Rochelle",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Ville maritime au charme rare, <strong>La Rochelle</strong> séduit autant qu'elle complique un déménagement : centre historique piéton à arcades, immeubles anciens sans ascenseur, et un lien quotidien avec les îles. Voici comment s'y préparer.</p>
        <h2>Le centre historique : magnifique, exigeant</h2>
        <p>Le Vieux-Port, le quartier Saint-Nicolas et les rues à arcades sont en grande partie piétonniers. Le camion ne va pas jusqu'à la porte : il faut réserver un emplacement au plus près en mairie, prévoir le portage sous les arcades, et souvent un monte-meuble pour les étages d'immeubles en pierre de taille.</p>
        <h2>Les Minimes et le bord d'océan</h2>
        <p>Premier port de plaisance d'Europe, le quartier des Minimes concentre résidences étudiantes et copropriétés. Accès marina, gardiens, créneaux d'ascenseur : tout se coordonne en amont. À la Genette ou à Port-Neuf, ce sont plutôt des maisons rochelaises et des accès résidentiels.</p>
        <blockquote>À La Rochelle, on déménage au rythme de la mer — et parfois de la marée, quand on passe vers les îles.</blockquote>
        <h2>Déménager vers les îles de Ré, d'Oléron et d'Aix</h2>
        <p>Le pont de l'île de Ré, la circulation estivale, la navette pour l'île d'Aix : un déménagement insulaire se planifie avec soin. On intègre ces contraintes dès le <a href="Demenagement-La-Rochelle.html">devis La Rochelle</a> pour livrer sans accroc.</p>
        <h3>Local ou longue distance ?</h3>
        <p>Que vous bougiez dans l'agglomération (Aytré, Lagord, Périgny, Châtelaillon) ou que vous rejoigniez La Rochelle depuis l'autre bout du pays, on s'occupe de tout, du premier au dernier carton. <a href="Demenagement-La-Rochelle.html">Découvrez notre page dédiée à La Rochelle</a> pour le détail des services.</p>
      </React.Fragment>
    )
  },
  {
    slug: "demenagement-international-depuis-nice",
    cat: "International",
    title: "Déménagement international depuis Nice : formalités, douanes et conseils",
    date: "19 mai 2026",
    read: "8 min",
    excerpt: "Genève, Milan, Barcelone, Bruxelles… Quitter la Côte d'Azur pour l'étranger demande de la méthode. Le guide des formalités, douanes et bons réflexes.",
    thumb: "Frontière · panneaux multilingues",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Partir vivre à l'étranger depuis la Côte d'Azur est plus simple qu'il n'y paraît — à condition d'anticiper. Voici l'essentiel du <strong>déménagement international depuis Nice</strong> vers la Suisse, l'Italie, l'Espagne et le Benelux.</p>
        <h2>Union européenne : la libre circulation simplifie tout</h2>
        <p>Vers l'Italie (<a href="Demenagement-Nice-Milan.html">Milan</a>, <a href="Demenagement-Nice-Turin.html">Turin</a>), l'Espagne (<a href="Demenagement-Nice-Barcelone.html">Barcelone</a>, <a href="Demenagement-Nice-Madrid.html">Madrid</a>) ou le Benelux (<a href="Demenagement-Nice-Bruxelles.html">Bruxelles</a>, <a href="Demenagement-Nice-Luxembourg.html">Luxembourg</a>), pas de douane pour vos biens personnels : la libre circulation s'applique. Le vrai enjeu, c'est la logistique du trajet et l'organisation à l'arrivée.</p>
        <h2>Suisse : un pays hors UE, des formalités en plus</h2>
        <p>Vers <a href="Demenagement-Nice-Geneve.html">Genève</a> ou <a href="Demenagement-Nice-Lausanne.html">Lausanne</a>, la Suisse n'étant pas dans l'UE, vos effets personnels passent la douane. Il faut un inventaire détaillé et le formulaire 18.44 (effets de déménagement), généralement exonérés de droits si vous transférez votre résidence. Un déménageur habitué prépare ce dossier pour vous.</p>
        <blockquote>La clé d'un déménagement international réussi, c'est l'inventaire : précis, traduit si besoin, et conforme aux attentes de la douane.</blockquote>
        <h2>Les bons réflexes avant le grand départ</h2>
        <ul>
          <li><strong>Anticipez</strong> — comptez 4 à 6 semaines, davantage en haute saison.</li>
          <li><strong>Inventoriez tout</strong> — c'est la pièce maîtresse, pour la douane comme pour l'assurance.</li>
          <li><strong>Vérifiez l'assurance</strong> — couverture valeur déclarée pour les objets fragiles ou précieux sur longue distance.</li>
          <li><strong>Pensez au garde-meuble</strong> — utile si votre logement à l'étranger n'est pas prêt le jour du départ.</li>
        </ul>
        <p>Pour un chiffrage précis vers votre destination, demandez un <a href="Devis.html">devis international gratuit</a> : on s'occupe du transport, des formalités et du suivi jusqu'à la porte d'arrivée.</p>
      </React.Fragment>
    )
  },
  {
    slug: "villes-demarches-speciales-demenagement",
    cat: "Conseils",
    title: "Ces villes où déménager demande des démarches spéciales (et comment on s'en occupe)",
    date: "16 mai 2026",
    read: "6 min",
    excerpt: "Monaco, centres historiques, zones piétonnes, immeubles classés : certaines adresses exigent autorisations et matériel spécifique. On vous explique.",
    thumb: "Panneau zone réglementée · monte-meuble",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Toutes les adresses ne se déménagent pas de la même façon. Sur la Côte d'Azur, certaines villes et quartiers imposent des <strong>démarches spéciales</strong> : autorisations, créneaux, monte-meuble. Bonne nouvelle : on s'occupe de tout.</p>
        <h2>Monaco : la logistique du prestige</h2>
        <p>Déménager à <a href="Demenagement-Monaco.html">Monaco</a> demande méthode : créneaux de régie d'immeuble, réservation d'ascenseurs et de monte-charges, autorisations d'accès et stationnement minuté. On prépare l'intervention en amont avec la régie, dans la plus grande discrétion.</p>
        <h2>Les centres historiques piétons</h2>
        <p>Vieux-Nice, <a href="Quartiers.html">Le Suquet à Cannes</a>, vieille ville de Menton ou de Grasse : ruelles inaccessibles au camion, escaliers, pavés. La solution ? Emplacement réservé au plus près, portage maîtrisé, et monte-meuble par la façade quand l'escalier ne passe pas.</p>
        <blockquote>Une autorisation de stationnement oubliée, c'est une amende et des cartons portés sur cent mètres. On la demande pour vous.</blockquote>
        <h2>Immeubles classés, villas perchées, accès complexes</h2>
        <ul>
          <li><strong>Immeubles haussmanniens</strong> — cages d'escalier étroites, ascenseurs anciens : monte-meuble fréquent.</li>
          <li><strong>Villas du Cap, hauteurs de Cimiez</strong> — accès en lacets, mobilier de valeur, protection renforcée.</li>
          <li><strong>Zones réglementées</strong> — créneaux horaires, autorisations de voirie spécifiques.</li>
        </ul>
        <h2>Notre rôle : tout anticiper dès le devis</h2>
        <p>On repère les contraintes à la visite ou via les infos d'accès du <a href="Devis.html">formulaire de devis</a>, on commande le bon matériel et on fait les démarches administratives. Vous n'avez ni autorisation à courir, ni mauvaise surprise le jour J. Pour les adresses d'exception, voyez aussi notre page <a href="Quartiers.html">Quartiers d'exception</a>.</p>
      </React.Fragment>
    )
  },
  {
    slug: "demenagement-etudiant-nice",
    cat: "Côte d'Azur",
    title: "Déménagement étudiant à Nice : petit budget, gros soulagement",
    date: "14 mai 2026",
    read: "5 min",
    excerpt: "Studio à Valrose, coloc au centre, retour chez les parents en juin : le guide du déménagement étudiant à Nice, malin et pas cher.",
    thumb: "Studio étudiant · cartons et vélo",
    body: () => (
      <React.Fragment>
        <p className="lead-p">Ville universitaire majeure, Nice voit des milliers d'étudiants déménager chaque année — surtout entre juin et septembre. Petit volume, petit budget, gros stress de dernière minute : voici comment réussir son <strong>déménagement étudiant à Nice</strong> sans se ruiner.</p>
        <h2>Quand déménager (et quand éviter)</h2>
        <p>Les semaines de fin juin (libération des logements) et de début septembre (rentrée) sont les plus chargées et les plus chères. Si vous le pouvez, visez un jour de semaine en milieu de mois : c'est plus calme, plus dispo, et moins cher. Réservez au moins 2 semaines à l'avance.</p>
        <h2>Les quartiers étudiants et leurs pièges</h2>
        <ul>
          <li><strong>Valrose & Saint-Maurice</strong> — près des facs, mais rues en pente et petits immeubles sans ascenseur.</li>
          <li><strong>Le centre & Jean-Médecin</strong> — pratique, mais stationnement compliqué : <a href="Demenagement-Nice.html">autorisation de voirie</a> recommandée.</li>
          <li><strong>Le port & Riquier</strong> — colocations prisées, accès parfois étroits.</li>
        </ul>
        <blockquote>Un studio, c'est 8 à 12 m³ : pas besoin d'un gros camion, mais un vrai gain de temps avec deux déménageurs et le bon véhicule.</blockquote>
        <h2>Réduire la facture, sans porter seul</h2>
        <p>Triez avant (les meubles Ikea fatigués ne valent pas le transport), regroupez si un ami déménage la même semaine, et choisissez la formule <a href="Formules.html">Coup de main</a> : vous emballez, on porte et on transporte. Pour les meubles encombrants ou un étage sans ascenseur, on s'occupe du muscle.</p>
        <h3>Garde-meuble entre deux années</h3>
        <p>Vous rentrez chez vos parents l'été mais gardez le logement l'an prochain ? Le <a href="Stockage.html">garde-meuble</a> en box sécurisé évite de tout trimballer deux fois. Pratique, et souvent moins cher qu'un mois de loyer.</p>
      </React.Fragment>
    )
  }
];

function getArticle(slug) {
  return ARTICLES.find(a => a.slug === slug) || ARTICLES[0];
}

Object.assign(window, { ARTICLES, getArticle });
