// nice-page.jsx — Déménager à Nice, quartier par quartier.
//
// POURQUOI CETTE PAGE EXISTE À PART DU GABARIT DES COMMUNES
// ---------------------------------------------------------
// Nice n'est pas une commune parmi dix-huit, c'est LE marché. La page tournait pourtant
// sur `ville-page.jsx`, le gabarit partagé : 1 410 mots, la même structure que Beaulieu ou
// Le Cannet. Mesuré le 24 août 2026, elle sortait en POSITION 100 sur « déménagement
// nice » — la page 10 de Google.
//
// La comparaison qui a déclenché cette refonte : la page « déménagement Paris » de
// Nextories fait 4 288 mots, 25 sous-sections, trois tableaux, trois cas chiffrés, et
// donne le détail des encombrants et du stationnement PAR ARRONDISSEMENT. Ce n'est pas une
// page de plus, c'est un service. À côté, un gabarit ne pèse rien.
//
// Ce qu'on a et qu'eux n'ont pas : les vrais chiffres. Les trois cas ci-dessous sont des
// devis réellement émis, anonymisés — pas des exemples inventés. Et les délais
// d'autorisation viennent de quartier-data.jsx, où ils sont vérifiés depuis des mois.
//
// ⚠️ L'ANGLE EST LE QUARTIER, PAS « DÉMÉNAGEMENT NICE ». L'accueil vise déjà cette
// requête depuis que son H1 dit « Déménageur à Nice ». Deux pages du même site sur le même
// mot-clé se concurrencent et Google n'en classe alors aucune correctement.

const NiceIc = (props) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{props.children}</svg>;

/* Les trois cas sont de VRAIS devis, repris de la base le 24 août 2026. Volume, étages,
   distance et montant sont ceux qui ont été chiffrés. Rien n'a été arrondi pour faire
   joli : c'est ce qui rend le tableau crédible, et vérifiable si un client le conteste. */
const NICE_CAS = [
  { qui: "Une personne seule", ou: "Dans Nice, Riquier → Cimiez",
    depart: "1er étage sans ascenseur", arrivee: "3e étage avec ascenseur",
    volume: "18 m³", distance: "1 km", formule: "Premium", prix: "1 490 €",
    note: "Le portage au départ a fait le prix, pas la distance." },
  { qui: "Un couple", ou: "Nice → Vence",
    depart: "5e étage avec ascenseur", arrivee: "Rez-de-chaussée",
    volume: "17 m³", distance: "17 km", formule: "Standard", prix: "950 €",
    note: "Ascenseur au départ, plain-pied à l'arrivée : le meilleur cas de figure." },
  { qui: "Une famille", ou: "Nice → Marseillan, Hérault",
    depart: "Rez-de-chaussée", arrivee: "2e étage",
    volume: "20 m³", distance: "380 km", formule: "Standard", prix: "1 690 €",
    note: "Sur cette distance, c'est le camion mobilisé deux jours qui pèse." }];

/* Les trois régimes d'autorisation de la Ville de Nice. Délais et numéros repris de
   quartier-data.jsx, où ils servent déjà les sept pages de quartier — une seule source,
   pour qu'une correction se propage partout. */
const NICE_AOT = [
  { cas: "Une place de stationnement", detail: "Gratuite, payante, aire de livraison ou dépose-minute.",
    delai: "5 jours ouvrés", tel: "04 97 13 22 86 ou 04 97 13 45 63" },
  { cas: "Une voie de circulation ou un trottoir", detail: "Quand il n'y a pas de stationnement autorisé devant l'immeuble.",
    delai: "7 jours ouvrés", tel: "04 97 13 26 53" },
  { cas: "Une zone piétonne", detail: "Vieux-Nice, une partie du Carré d'Or. Bornes escamotables à faire abaisser le jour même.",
    delai: "7 jours ouvrés", tel: "04 97 13 26 43" }];

const NICE_QUARTIERS = [
  { nom: "Vieux-Nice", url: "Demenagement-Vieux-Nice", d: "Zone piétonne à bornes escamotables. L'autorisation ne suffit pas : il faut appeler le centre de sécurité le jour même pour faire abaisser la borne. Ruelles où le camion n'entre pas, portage systématique." },
  { nom: "Cimiez", url: "Demenagement-Cimiez-Nice", d: "Immeubles bourgeois et villas sur les hauteurs. Ascenseurs anciens et souvent étroits, cages d'escalier en colimaçon : le démontage est la règle plutôt que l'exception." },
  { nom: "Carré d'Or", url: "Demenagement-Carre-d-Or-Nice", d: "Stationnement réglementé partout, circulation dense, immeubles haussmanniens. C'est le quartier où l'autorisation décide de la journée entière." },
  { nom: "Libération", url: "Demenagement-Liberation-Nice", d: "Le marché occupe la rue chaque matin et le tramway coupe le quartier. On démarre très tôt ou on bascule l'après-midi, selon la rue exacte." },
  { nom: "Le Port", url: "Demenagement-Port-Nice", d: "Quais étroits, immeubles anciens sans ascenseur, et des restrictions de circulation liées aux accès portuaires sur certaines voies." },
  { nom: "Riquier", url: "Demenagement-Riquier-Nice", d: "Ateliers d'artisans, caves voûtées à escalier tournant, bâti ouvrier. C'est le quartier où un déménagement pèse le plus lourd au mètre cube." },
  { nom: "Mont Boron", url: "Demenagement-Mont-Boron-Nice", d: "Routes en lacets, villas en surplomb, monte-meuble presque systématique. Le gabarit du camion se décide sur le dernier virage, pas sur la route principale." }];

const NICE_FACTEURS = [
  { t: "L'étage et l'ascenseur", d: "Le premier poste, avant le volume. Un troisième étage sans ascenseur ajoute souvent une demi-journée d'équipe. Un ascenseur trop petit pour un canapé revient au même : tout repasse par la cage d'escalier." },
  { t: "La distance de portage", d: "Entre le camion et la porte. Dans le Vieux-Nice elle se compte en dizaines de mètres et en marches ; à Fabron ou Saint-Isidore, le camion se gare devant." },
  { t: "Le volume réel", d: "Le contenu du logement, pas sa surface. Une cave et un garage pleins ajoutent facilement dix mètres cubes à un trois-pièces." },
  { t: "La formule choisie", d: "Standard, Premium ou Luxe. C'est le seul facteur que vous décidez entièrement, et l'écart entre les deux premières est d'environ 30 %." },
  { t: "La période", d: "Fins de mois, samedis et été partent en premier. Une date en milieu de mois et en semaine se réserve plus facilement, et l'équipe est moins contrainte." }];

/* Les questions vivent dans city-data.jsx, avec celles des autres communes : c'est de là
   que gen-villes-seo.js tire le balisage FAQPage. Une seule source, sinon le balisage
   annonce à Google des questions que la page n'affiche pas — le rich snippet trompeur. */
const NICE_FAQ = ((typeof CITIES !== "undefined" && CITIES.nice && CITIES.nice.faq) || [])
  .map((f) => ({ q: f.q, r: [f.a] }));

function NiceHero() {
  return (
    <section className="page-hero" id="top">
      <div className="wrap">
        <div className="breadcrumb"><a href="/">Accueil</a> <span>›</span> <a href="Zones">Zones desservies</a> <span>›</span> <span>Nice</span></div>
        <h1>Déménager <em className="dim-em">quartier par quartier</em> à Nice</h1>
        <p className="lede">Nice n'est pas une ville, c'est dix quartiers qui n'ont rien à voir. Le Vieux-Nice ne se déménage pas comme Fabron, et le Mont Boron encore moins. Cette page dit ce que chacun impose, ce que ça coûte réellement, et quelles démarches sont à faire avant le jour J.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
        <div className="devis-hero-form" style={{ marginTop: 22 }}><QuickQuote variant="dark" /></div>
      </div>
    </section>);
}

function NiceSecHead({ num, titre, em }) {
  return (
    <div className="sec-head reveal">
      <div><div className="sec-num"><span className="asterisk">*</span> {num}</div></div>
      <h2 className="dim-em">{titre}<br /><em>{em}</em></h2>
    </div>);
}

function NicePrix() {
  const f = (s, fo) => { const P = window.LBC_PRICING;
    if (!P || !P.estimer) return "sur devis";
    const e = P.estimer({ surface: s, formule: fo, km: 8 });
    const n = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return e ? n(e.bas) + " – " + n(e.haut) + " €" : "sur devis"; };
  const L = [["studio", "Studio", "moins de 30 m²"], ["t2", "2 pièces", "30 à 50 m²"],
             ["t3", "3 pièces", "50 à 80 m²"], ["t4", "4 pièces", "80 à 100 m²"], ["maison", "Maison", "plus de 90 m²"]];
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="01 / Les prix" titre="Combien coûte un déménagement" em="dans Nice." />
      <p className="lede">Ces fourchettes viennent de notre estimateur, calé sur les devis que nous avons réellement émis. Elles supposent un accès neutre : rez-de-chaussée, camion devant la porte. L'étage et le portage se chiffrent ensuite, et c'est là que se joue l'essentiel de l'écart.</p>
      <div className="tarif-tw" style={{ marginTop: 26 }}>
        <table className="tarif-table">
          <thead><tr><th>Logement</th><th style={{ textAlign: "right" }}>Standard</th><th style={{ textAlign: "right" }}>Premium</th></tr></thead>
          <tbody>{L.map(([k, nom, sub]) =>
            <tr key={k}>
              <td><strong>{nom}</strong> <span className="tarif-sub">{sub}</span></td>
              <td style={{ textAlign: "right" }} className="tarif-prix">{f(k, "standard")}</td>
              <td style={{ textAlign: "right" }} className="tarif-prix">{f(k, "premium")}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <p className="lede" style={{ marginTop: 20 }}>La formule Luxe, qui comprend l'emballage de vos cartons et la mise en place à l'arrivée, se chiffre après une visite : le contenu des cartons de quelqu'un ne se devine pas de l'extérieur. <a href="Tarifs" style={{ color: "var(--accent)", fontWeight: 600 }}>Voir le détail des trois formules →</a></p>

      <h3 className="tarif-h3" style={{ marginTop: 40 }}>Ce qui fait varier le prix, dans l'ordre</h3>
      <div className="values-grid reveal-stagger">
        {NICE_FACTEURS.map((x, i) =>
          <div className="value" key={i}>
            <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="value-body"><div className="value-title">{x.t}</div><p>{x.d}</p></div>
          </div>)}
      </div>
    </div></section>);
}

function NiceCas() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="02 / Trois cas réels" titre="Ce que nos clients" em="ont réellement payé." />
      <p className="lede">Trois devis que nous avons émis, anonymisés. Volume, étages, distance et montant sont ceux du dossier : rien n'a été arrondi pour faire joli.</p>
      <div className="tarif-tw" style={{ marginTop: 26 }}>
        <table className="tarif-table">
          <thead><tr>
            <th></th>
            {NICE_CAS.map((c, i) => <th key={i} style={{ textAlign: "left" }}>Cas {i + 1}</th>)}
          </tr></thead>
          <tbody>
            {[["Qui", "qui"], ["Où", "ou"], ["Départ", "depart"], ["Arrivée", "arrivee"],
              ["Volume", "volume"], ["Distance", "distance"], ["Formule", "formule"]].map(([lib, cle]) =>
              <tr key={cle}>
                <td className="tarif-sub" style={{ whiteSpace: "nowrap" }}>{lib}</td>
                {NICE_CAS.map((c, i) => <td key={i}>{c[cle]}</td>)}
              </tr>)}
            <tr>
              <td className="tarif-sub"><strong>Prix</strong></td>
              {NICE_CAS.map((c, i) => <td key={i} className="tarif-prix" style={{ fontSize: 17 }}>{c.prix}</td>)}
            </tr>
            <tr>
              <td className="tarif-sub">Ce qui a fait le prix</td>
              {NICE_CAS.map((c, i) => <td key={i} style={{ color: "var(--ink-2)", fontSize: 13.5 }}>{c.note}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="lede" style={{ marginTop: 20 }}>Le premier cas est le plus instructif : un kilomètre de trajet, et pourtant le devis le plus élevé des trois en local. Un premier étage sans ascenseur au départ, un troisième à l'arrivée, et la journée bascule. <strong style={{ color: "var(--ink)" }}>À Nice, c'est l'escalier qui coûte, pas la route.</strong></p>
    </div></section>);
}

function NiceStationnement() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="03 / Le stationnement" titre="L'autorisation, la démarche" em="et les délais réels." />
      <p className="lede">C'est le vrai casse-tête niçois, et la première cause de journée perdue. Dès que le camion occupe le domaine public — c'est-à-dire presque partout dans Nice — il faut une autorisation. Trois régimes existent, avec des délais et des services différents.</p>
      <div className="tarif-tw" style={{ marginTop: 26 }}>
        <table className="tarif-table">
          <thead><tr><th>Ce que vous occupez</th><th>Délai minimum</th><th>Service à contacter</th></tr></thead>
          <tbody>{NICE_AOT.map((a, i) =>
            <tr key={i}>
              <td><strong>{a.cas}</strong><div className="tarif-sub">{a.detail}</div></td>
              <td className="tarif-prix" style={{ whiteSpace: "nowrap" }}>{a.delai}</td>
              <td className="tarif-sub" style={{ whiteSpace: "nowrap" }}>{a.tel}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
        <div>
          <h3 className="tarif-h3">Ce que la Ville ne fournit pas</h3>
          <p className="tarif-intro">La signalisation réglementaire — panneaux d'interdiction de stationner posés la veille — est à la charge du demandeur. Elle se loue auprès d'un professionnel. Sans elle, l'autorisation ne vaut rien : les voitures seront là le matin.</p>
        </div>
        <div>
          <h3 className="tarif-h3">Le piège de la zone piétonne</h3>
          <p className="tarif-intro">Dans le Vieux-Nice et une partie du Carré d'Or, l'accès est commandé par des bornes escamotables. Avoir l'autorisation ne suffit pas : il faut appeler le centre de sécurité le jour même pour faire abaisser la borne. Un camion qui arrive sans cette seconde démarche repart.</p>
        </div>
        <div>
          <h3 className="tarif-h3">Qui s'en occupe</h3>
          <p className="tarif-intro">Nous, systématiquement, dès que la date est bloquée. C'est inclus dans les trois formules et cela ne se facture pas à part. Vous n'avez ni dossier à monter ni service à appeler.</p>
        </div>
      </div>
    </div></section>);
}

function NiceQuartiers() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="04 / Les quartiers" titre="Dix quartiers," em="dix façons de déménager." />
      <p className="lede">Chacun impose sa contrainte, et c'est elle qui décide de la méthode et du prix. Sept d'entre eux ont leur page détaillée.</p>
      <div className="ap-values reveal-stagger" style={{ marginTop: 28 }}>
        {NICE_QUARTIERS.map((q) =>
          <div className="ap-value" key={q.nom}>
            <span className="ap-value-ic" aria-hidden="true">
              <NiceIc><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></NiceIc>
            </span>
            <h3 className="ap-value-t"><a href={q.url} style={{ color: "var(--ink)", textDecoration: "none" }}>{q.nom} →</a></h3>
            <p className="ap-value-d">{q.d}</p>
          </div>)}
      </div>
      <p className="lede" style={{ marginTop: 24 }}>Nous intervenons aussi à Nice Nord, Fabron, Magnan, L'Ariane, Gambetta, Saint-Roch, Gairaut, Las Planas et Saint-Isidore. Ces quartiers-là posent moins de problèmes d'accès : le camion se gare devant l'immeuble et la journée s'organise autour du volume plutôt que du portage.</p>
    </div></section>);
}

function NiceQuand() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="10 / Le calendrier" titre="Quand déménager," em="et quand s'y prendre." />
      <div className="ap-values reveal-stagger" style={{ marginTop: 24 }}>
        <div className="ap-value">
          <h3 className="ap-value-t">Les dates qui partent en premier</h3>
          <p className="ap-value-d">Les fins de mois, les samedis, et toute la période de juin à septembre. Un samedi de fin août est la date la plus demandée de l'année sur la Côte d'Azur : elle se réserve six semaines à l'avance, parfois plus.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">Les dates les plus faciles</h3>
          <p className="ap-value-d">Milieu de mois, en semaine, hors vacances scolaires. L'équipe est moins contrainte, le stationnement se trouve plus facilement, et la journée déborde moins.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">Combien de temps à l'avance</h3>
          <p className="ap-value-d">Deux à trois semaines en période normale, quatre à six pour une fin de mois d'été. L'autorisation de stationnement, elle, ne se demande qu'à cinq ou sept jours ouvrés : elle n'est jamais le facteur limitant.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">Ce qui bloque vraiment la date</h3>
          <p className="ap-value-d">L'acompte. Tant qu'il n'est pas versé, le créneau reste ouvert à quelqu'un d'autre. C'est ce qui nous permet de tenir nos horaires d'arrivée plutôt que de promettre une demi-journée d'attente.</p>
        </div>
      </div>
    </div></section>);
}

/* ── LES SECTIONS DE SERVICE ─────────────────────────────────────────────────────
   C'est ce qui manquait pour être au niveau des meilleures pages du secteur. Un client
   qui déménage ne cherche pas qu'un prix : il cherche où jeter son vieux canapé, où
   trouver des cartons, et s'il a droit à une aide. Chacune de ces questions est une
   recherche Google à part entière, et les traiter ici évite qu'il aille les poser
   ailleurs — c'est-à-dire chez un concurrent.

   ⚠️ AUCUN NUMÉRO NI TARIF ADMINISTRATIF INVENTÉ. Les seuls numéros de cette page sont
   ceux de la Ville de Nice, vérifiés dans quartier-data.jsx. Pour le reste on décrit la
   démarche et on renvoie à la source officielle : une information administrative fausse
   fait plus de dégâts qu'une information absente. */
function NiceEncombrants() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="05 / Ce dont vous ne voulez plus" titre="Encombrants, déchetterie" em="et débarras." />
      <p className="lede">Un déménagement, c'est d'abord un tri. Voilà les trois façons de se séparer de ce qui ne suit pas, de la plus économique à la plus rapide.</p>
      <div className="ap-values reveal-stagger" style={{ marginTop: 26 }}>
        <div className="ap-value">
          <h3 className="ap-value-t">Le ramassage des encombrants</h3>
          <p className="ap-value-d">La Métropole Nice Côte d'Azur l'assure sur rendez-vous, gratuitement, pour les particuliers. On vous fixe un créneau et vous sortez les meubles la veille au soir. Comptez plusieurs jours de délai en période chargée : à prendre bien avant la date du déménagement, pas la veille.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">La déchetterie</h3>
          <p className="ap-value-d">Plusieurs déchetteries métropolitaines accueillent les particuliers sur présentation d'un justificatif de domicile. C'est la solution immédiate quand on a un véhicule et que le volume reste raisonnable. Les gravats, la peinture et l'électroménager y ont chacun leur filière.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">Le débarras complet</h3>
          <p className="ap-value-d">Nous vidons le logement entièrement, du mobilier aux cartons oubliés dans la cave, et nous remettons les justificatifs de dépôt. C'est chiffré à part et souvent combiné au déménagement le même jour, ce qui évite de rouvrir le logement une seconde fois. <a href="Debarras-succession" style={{ color: "var(--accent)", fontWeight: 600 }}>Voir la page débarras →</a></p>
        </div>
      </div>
      <p className="lede" style={{ marginTop: 22 }}><strong style={{ color: "var(--ink)" }}>Le conseil qui fait gagner le plus :</strong> triez avant le devis, pas après. Chaque mètre cube qu'on ne charge pas est un mètre cube qu'on ne facture pas, et un vieux canapé compte autant qu'un canapé neuf dans le volume.</p>
    </div></section>);
}

function NiceCartons() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="06 / Le matériel" titre="Les cartons," em="et le reste." />
      <p className="lede">C'est le poste où l'on croit économiser et où l'on perd le plus. Un carton de supermarché a déjà servi, il a voyagé plein et il cède au portage — presque toujours celui qui contenait la vaisselle.</p>
      <div className="tarif-tw" style={{ marginTop: 26 }}>
        <table className="tarif-table">
          <thead><tr><th>Ce qu'il vous faut</th><th>Pour quoi</th><th>Combien</th></tr></thead>
          <tbody>
            <tr><td><strong>Carton standard</strong> <span className="tarif-sub">55 × 35 × 30 cm</span></td><td>Vaisselle, petits objets, contenu des placards</td><td className="tarif-sub">15 à 20 pour un studio, 40 à 60 pour un trois-pièces</td></tr>
            <tr><td><strong>Carton livres</strong> <span className="tarif-sub">plus petit, renforcé</span></td><td>Livres, dossiers, bouteilles. Un grand carton rempli de livres ne se porte pas</td><td className="tarif-sub">5 à 15 selon la bibliothèque</td></tr>
            <tr><td><strong>Penderie</strong> <span className="tarif-sub">avec barre</span></td><td>Vêtements sur cintres, transportés sans pli</td><td className="tarif-sub">1 à 3</td></tr>
            <tr><td><strong>Papier bulle et papier de soie</strong></td><td>Verres, assiettes, cadres, objets fragiles</td><td className="tarif-sub">un rouleau pour deux cartons de vaisselle</td></tr>
            <tr><td><strong>Housses</strong> <span className="tarif-sub">matelas, canapé</span></td><td>Ce qui ne rentre dans aucun carton et se salit au portage</td><td className="tarif-sub">une par élément</td></tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
        <div>
          <h3 className="tarif-h3">Où les trouver</h3>
          <p className="tarif-intro">Nous les livrons avant le déménagement, inclus dans les formules Premium et Luxe, et vendus à prix coûtant en Standard. Les commerces de quartier en donnent souvent, mais vérifiez qu'ils tiennent debout une fois remplis.</p>
        </div>
        <div>
          <h3 className="tarif-h3">Comment les remplir</h3>
          <p className="tarif-intro">Le lourd en bas, le léger en haut, et jamais un carton qu'on ne peut pas soulever seul. Écrivez la pièce de destination sur le CÔTÉ, pas sur le dessus : une fois empilés, seuls les côtés se lisent.</p>
        </div>
        <div>
          <h3 className="tarif-h3">Ce qu'on récupère</h3>
          <p className="tarif-intro">En formule Luxe, nous reprenons les cartons vides après le déballage. Sinon, ils se donnent facilement — un déménagement en attire toujours un autre dans l'immeuble.</p>
        </div>
      </div>
    </div></section>);
}

function NiceAides() {
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="07 / Les aides" titre="Ce que vous pouvez" em="faire financer." />
      <p className="lede">Peu de gens les demandent, souvent parce qu'ils ignorent y avoir droit. Aucune n'est automatique : toutes se demandent, et la plupart avant le déménagement.</p>
      <div className="ap-values reveal-stagger" style={{ marginTop: 26 }}>
        <div className="ap-value">
          <h3 className="ap-value-t">La prime de déménagement de la CAF</h3>
          <p className="ap-value-d">Pour les familles nombreuses qui déménagent à l'occasion d'une naissance ou de l'arrivée d'un troisième enfant, sous conditions de droit à une aide au logement. Elle rembourse les frais réels dans une limite fixée. La demande se fait après le déménagement, facture à l'appui, et dans un délai strict — d'où l'intérêt de garder le devis et la facture.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">Action Logement</h3>
          <p className="ap-value-d">Pour les salariés du secteur privé qui déménagent pour raison professionnelle : mutation, embauche, rapprochement du lieu de travail. Plusieurs dispositifs coexistent selon la situation. La demande se fait en amont, avant la signature du bail ou l'acte de vente.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">Le Fonds de solidarité logement</h3>
          <p className="ap-value-d">Géré par le Département des Alpes-Maritimes, il peut prendre en charge une partie des frais d'installation pour les ménages en difficulté. L'instruction se fait par un travailleur social, ce qui suppose de s'y prendre plusieurs semaines à l'avance.</p>
        </div>
        <div className="ap-value">
          <h3 className="ap-value-t">La déduction fiscale</h3>
          <p className="ap-value-d">Un déménagement lié à un changement d'emploi peut ouvrir droit à une déduction au titre des frais réels. Elle suppose de conserver la facture et de pouvoir justifier le motif professionnel.</p>
        </div>
      </div>
      <p className="lede" style={{ marginTop: 22 }}>Nous ne montons pas ces dossiers à votre place, mais nous fournissons toujours un devis détaillé et une facture nominative — c'est la pièce que tous ces organismes réclament, et celle qui manque le plus souvent. Renseignez-vous auprès de votre CAF, de votre employeur ou du Département : les conditions changent régulièrement.</p>
    </div></section>);
}

function NiceLimitrophes() {
  const V = ["saint-laurent-du-var","cagnes-sur-mer","villefranche-sur-mer","beaulieu-sur-mer","saint-jean-cap-ferrat"];
  if (typeof CITIES === "undefined") return null;   // city-data.js absent : on n'affiche rien plutôt que de planter
  const items = V.map((s) => CITIES[s]).filter(Boolean);
  if (!items.length) return null;
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="08 / Autour de Nice" titre="Les communes" em="limitrophes." />
      <p className="lede">Un déménagement niçois déborde souvent sur la commune d'à côté. Sur ces cinq-là, nous sommes sur place en moins de vingt minutes depuis notre base.</p>
      <div className="seo-cities reveal" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: 24 }}>
        {items.map((n, i) =>
          <a key={i} href={n.file} style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 600,
            color: "var(--ink)", padding: "18px 0", borderBottom: "1px solid var(--rule)",
            display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none" }}>
            <span>Déménagement {n.name}</span><span style={{ color: "var(--accent)" }}>→</span>
          </a>)}
      </div>
    </div></section>);
}

function NiceDepuisNice() {
  const T = [
    { v: "Paris", url: "Demenagement-Nice-Paris", d: "930 km, deux jours de camion" },
    { v: "Lyon", url: "Demenagement-Nice-Lyon", d: "470 km, souvent en une journée" },
    { v: "Marseille", url: "Demenagement-Nice-Marseille", d: "200 km, aller-retour dans la journée" },
    { v: "Toulouse", url: "Demenagement-Nice-Toulouse", d: "560 km" },
    { v: "Bordeaux", url: "Demenagement-Nice-Bordeaux", d: "790 km" },
    { v: "Monaco", url: "Demenagement-Monaco", d: "autorisation de circulation à prévoir" },
    { v: "Cannes", url: "Demenagement-Cannes", d: "35 km" },
    { v: "Antibes", url: "Demenagement-Antibes", d: "25 km" }];
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="09 / Au départ de Nice" titre="Nos trajets" em="les plus fréquents." />
      <p className="lede">Le local représente la moitié de notre activité, la longue distance l'autre moitié. Sur ces trajets, ce n'est plus l'escalier qui fait le prix mais le nombre de jours pendant lesquels le camion est mobilisé.</p>
      <div className="ap-values reveal-stagger" style={{ marginTop: 26 }}>
        {T.map((t) =>
          <div className="ap-value" key={t.v}>
            <h3 className="ap-value-t"><a href={t.url} style={{ color: "var(--ink)", textDecoration: "none" }}>Nice → {t.v} →</a></h3>
            <p className="ap-value-d">{t.d}</p>
          </div>)}
      </div>
    </div></section>);
}

function NiceFaqItem({ item, open, onToggle }) {
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span><span className="ico" aria-hidden="true">+</span>
      </button>
      <div className="faq-a">{item.r.map((p, i) => <p key={i}>{p}</p>)}</div>
    </div>);
}

function NiceFAQ() {
  const [ouvert, setOuvert] = React.useState(-1);
  return (
    <section className="sec"><div className="wrap">
      <NiceSecHead num="11 / Questions fréquentes" titre="Ce qu'on nous demande" em="sur Nice." />
      <div className="faq-list reveal">
        {NICE_FAQ.map((f, i) =>
          <NiceFaqItem key={i} item={f} open={ouvert === i} onToggle={() => setOuvert(ouvert === i ? -1 : i)} />)}
      </div>
    </div></section>);
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main id="contenu">
        <NiceHero />
        <NicePrix />
        <NiceCas />
        <NiceStationnement />
        <NiceQuartiers />
        <NiceEncombrants />
        <NiceCartons />
        <NiceAides />
        <PreuveVille ville="à Nice" />
        <NiceLimitrophes />
        <NiceDepuisNice />
        <NiceQuand />
        <NiceFAQ />
      </main>
      <Footer />
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
