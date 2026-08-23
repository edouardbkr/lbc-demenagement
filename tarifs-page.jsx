// tarifs-page.jsx — Combien coûte un déménagement à Nice.
//
// POURQUOI CETTE PAGE
// -------------------
// « Prix déménagement Nice » est une grosse recherche d'information, et Albonico est le
// seul du département à l'avoir traitée sérieusement — son article ressort. Tous les
// autres affichent « à partir de 350 € », ce qui est précisément ce qui a rendu ce marché
// méfiant : le client sait que ce chiffre est faux, et il se méfie du devis qui suivra.
//
// Publier de vraies fourchettes est un pari commercial : les concurrents sauront où LBC
// se situe. Le pari est que la transparence rapporte davantage que le secret ne protège.
//
// ⚠️ LES PRIX NE SONT PAS RECOPIÉS, ILS SONT CALCULÉS.
// La page interroge LBC_PRICING, le moteur qui alimente déjà l'estimateur d'accueil et le
// formulaire de devis. Recopier les montants aurait garanti qu'ils divergent à la
// première retouche de grille — et une page de tarifs qui contredit le simulateur de la
// même maison fait plus de dégâts que pas de page du tout. Un seul moteur, un seul prix.
const TARIF_LOGEMENTS = [
  { key: "studio", nom: "Studio", sub: "moins de 30 m²" },
  { key: "t2", nom: "2 pièces", sub: "30 à 50 m²" },
  { key: "t3", nom: "3 pièces", sub: "50 à 80 m²" },
  { key: "t4", nom: "4 pièces", sub: "80 à 100 m²" },
  { key: "maison", nom: "Maison", sub: "plus de 90 m²" }];

const TARIF_ZONES = [
  { km: 15, titre: "Déménagement local · Alpes-Maritimes",
    intro: "Nice, la Côte d'Azur et l'arrière-pays proche. Le trajet ne pèse presque rien : ce sont le volume et l'accès qui font le prix.", volumes: true },
  { km: 80, titre: "Déménagement régional · PACA",
    intro: "Marseille, Aix, Toulon, le Var. Le camion part et revient dans la journée, la distance commence à compter." },
  { km: 600, titre: "Longue distance · toute la France",
    intro: "Base de calcul : environ 600 km, soit un Nice–Lyon ou un Nice–Toulouse. Au-delà, le prix suit la distance, parce qu'elle mobilise le camion plusieurs jours." }];

const TARIF_FACTEURS = [
  { t: "L'étage sans ascenseur", d: "Chaque niveau ajoute du temps de portage. Un troisième étage sans ascenseur, c'est souvent une demi-journée d'équipe en plus.", p: "+++" },
  { t: "La distance de portage", d: "Quand le camion ne se gare pas devant la porte : vieille ville, village perché, allée privée. Elle se compte en mètres, parfois en marches.", p: "+++" },
  { t: "Le volume réel", d: "Le contenu de votre logement, pas sa surface. Une cave et un garage pleins ajoutent facilement 10 m³.", p: "++" },
  { t: "Le monte-meuble", d: "Nécessaire quand la cage d'escalier ne laisse pas passer les meubles. Souvent moins cher qu'une équipe supplémentaire sur la journée.", p: "++" },
  { t: "Le démontage", d: "Cuisine équipée, armoire, lit à lattes, dressing sur mesure. Inclus dès la formule Premium.", p: "++" },
  { t: "Les objets lourds ou fragiles", d: "Piano, coffre-fort, tableaux, machines d'atelier : matériel spécifique et parfois équipe renforcée.", p: "+" },
  { t: "La distance", d: "Sur du local, elle ne pèse presque rien. Sur de la longue distance, elle devient le premier poste.", p: "+ à +++" }];

const TARIF_FAQ = [
  { q: "Pourquoi une fourchette et pas un prix fixe ?",
    r: ["Parce que deux trois-pièces du même volume ne coûtent pas la même chose. L'un est au rez-de-chaussée avec le camion devant la porte, l'autre au quatrième sans ascenseur dans une rue où l'on ne se gare pas. Entre les deux, il y a une demi-journée d'équipe, un monte-meuble et une autorisation de stationnement.",
        "Annoncer un prix unique reviendrait soit à surfacturer le premier, soit à perdre de l'argent sur le second — et donc, dans les faits, à chercher un motif pour le rattraper le jour du déménagement. C'est exactement ce que nous refusons de faire.",
        "Un déménageur qui annonce un prix ferme sans avoir vu le logement n'annonce pas un prix : il annonce un point de départ."] },
  { q: "Que signifie « à partir de 350 € » chez vos concurrents ?",
    r: ["Que le devis réel sera plus élevé. Ce montant correspond en général à quelques meubles transportés sur cinq kilomètres, ce qui n'est pas un déménagement mais une course.",
        "Nous ne l'affichons pas, et c'est un choix commercial coûteux : un prix d'appel bas fait cliquer. Mais c'est ce qui a rendu ce marché méfiant, et chaque client déçu par un supplément de dernière minute rend le suivant plus difficile à convaincre."] },
  { q: "Comment est calculée l'estimation en ligne ?",
    r: ["Sur trois données : le type de logement, la distance et la formule. Le simulateur en déduit un volume moyen, applique un tarif au mètre cube et ajoute le coût de trajet.",
        "C'est une estimation, pas un devis : elle suppose un accès neutre, c'est-à-dire un rez-de-chaussée avec le camion devant la porte. Dès que vous détaillez votre inventaire dans le formulaire de devis, le volume devient le vôtre et la fourchette se resserre.",
        "Les montants de cette page sont issus du même moteur que le simulateur. Ils ne peuvent donc pas se contredire."] },
  { q: "Comment obtenir un prix ferme pour mon cas ?",
    r: ["Par une visite gratuite, à domicile ou en visio, sous 48 heures. On regarde chaque pièce, la cave, le garage, l'étage, l'ascenseur et l'endroit où le camion pourra se garer. Le devis part sous 24 heures et il est définitif.",
        "Pour un déménagement urgent, l'estimation se fait par téléphone et photos. Le prix est ferme quand même."] },
  { q: "Le devis est-il payant ? Engage-t-il à quelque chose ?",
    r: ["Le devis est gratuit et sans engagement. Aucune carte bancaire n'est demandée, aucun numéro surtaxé.",
        "Si vous ne donnez pas suite, nous revenons vers vous, mais jamais plus de trois fois, et nous nous arrêtons au premier refus. C'est écrit ici pour que vous puissiez nous le rappeler."] },
  { q: "Comment se passe le paiement ?",
    r: ["Un acompte à la réservation, qui bloque la date, et le solde à la fin du déménagement, une fois tout déchargé et vérifié.",
        "Tant que l'acompte n'est pas versé, la date n'est pas réservée. C'est ce qui nous permet de tenir nos créneaux : un camion bloqué pour quelqu'un qui ne viendra pas, c'est une journée perdue pour tout le monde."] },
  { q: "L'assurance est-elle vraiment incluse ?",
    r: ["Oui, dans les trois formules, à hauteur de 8 000 € par objet, et la franchise est à notre charge. Ce n'est pas une option facturée en supplément.",
        "Pour un mobilier de grande valeur — œuvres, pièces de collection, instruments — une déclaration de valeur est établie avant le chargement et une couverture spécifique peut être mise en place. Toujours avant, jamais après un incident."] },
  { q: "Facturez-vous plus cher le samedi, ou en été ?",
    r: ["Le samedi, non. Le dimanche et les jours fériés, oui, et cela vous est dit avant de réserver.",
        "La haute saison, de juin à septembre, ne change pas nos tarifs, mais elle change les disponibilités. Une date de fin août se réserve plusieurs semaines à l'avance."] },
  { q: "Un monte-meuble, ça coûte combien ?",
    r: ["Il est intégré au devis quand il est nécessaire, jamais facturé en supplément le jour même. Selon la hauteur et la durée, il représente en général entre 200 et 450 € sur le total.",
        "Beaucoup de clients le refusent en pensant économiser, puis paient davantage en heures de portage. Nous disons franchement lequel des deux revient le moins cher sur votre chantier."] },
  { q: "Est-ce moins cher si je fais mes cartons moi-même ?",
    r: ["Oui, c'est exactement la différence entre Premium et Luxe. Sur un trois-pièces, faire ses cartons soi-même représente en général une journée de travail pour vous, et plusieurs centaines d'euros d'écart sur le devis.",
        "En revanche, l'emballage des objets fragiles reste de notre côté dès la formule Premium : c'est là que la casse arrive, et c'est nous qui l'assurons."] },
  { q: "Vos prix sont-ils négociables ?",
    r: ["Le prix reflète le temps d'équipe, le camion et le matériel nécessaires à votre chantier. Il n'y a pas de marge cachée à récupérer dans une négociation.",
        "En revanche, la formule se discute : passer de Luxe à Premium, ou décaler la date sur un jour moins demandé, fait baisser le devis pour de vraies raisons. Nous préférons ajuster la prestation plutôt que de rogner sur ce qui garantit que rien ne casse."] }];

/** Une fourchette formatée, ou null si le moteur n'est pas chargé. */
function tarifFourchette(surface, formule, km) {
  const P = window.LBC_PRICING;
  if (!P || !P.estimer) return null;
  const e = P.estimer({ surface: surface, formule: formule, km: km });
  if (!e) return null;
  const f = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return f(e.bas) + " – " + f(e.haut) + " €";
}

function TarifHero() {
  return (
    <section className="page-hero" id="top">
      <div className="wrap">
        <div className="breadcrumb"><a href="/">Accueil</a> <span>›</span> <span>Tarifs</span></div>
        <h1>Combien coûte un déménagement <em className="dim-em">à Nice ?</em></h1>
        <p className="lede">Des fourchettes réelles, issues du même calcul que notre devis. Pas de « à partir de » qui ne veut rien dire : vous voyez ce que paient nos clients, et ce qui fait varier le montant.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a href="Devis" className="btn btn-primary">Obtenir mon prix ferme<span className="arrow">→</span></a>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
      </div>
    </section>);
}

function TarifFormules() {
  const t3 = (f) => tarifFourchette("t3", f, 15);
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-num"><span className="asterisk">*</span> 01 / Les trois formules</div>
      <div className="sec-head reveal"><h2>Ce que vous déléguez, <em>et ce que ça change au prix.</em></h2></div>
      <p className="lede">C'est le premier facteur, avant le volume et avant la distance. Chaque formule reprend la précédente et y ajoute du travail en moins pour vous. Les montants ci-dessous sont ceux d'un trois-pièces en local, pour comparer à volume égal.</p>
      <div className="values-grid reveal-stagger" style={{ marginTop: 24 }}>
        <div className="value">
          <div className="value-num">01</div>
          <div className="value-body">
            <div className="value-title">Standard <span style={{ fontWeight: 400, color: "var(--muted)" }}>· {t3("standard") || "sur devis"}</span></div>
            <p>Véhicule adapté et équipe dédiée, chargement et déchargement, assurance incluse à 8 000 € par objet. <em>Vous emballez et démontez, nous portons et transportons.</em></p>
          </div>
        </div>
        <div className="value">
          <div className="value-num">02</div>
          <div className="value-body">
            <div className="value-title">Premium <span style={{ fontWeight: 400, color: "var(--muted)" }}>· {t3("premium") || "sur devis"}</span></div>
            <p>Tout ce que comprend Standard, plus l'emballage des objets fragiles, la protection intégrale du mobilier et le démontage-remontage des meubles. <em>Vous faites vos cartons, nous nous occupons du reste.</em> C'est la formule la plus choisie.</p>
          </div>
        </div>
        <div className="value">
          <div className="value-num">03</div>
          <div className="value-body">
            <div className="value-title">Luxe <span style={{ fontWeight: 400, color: "var(--muted)" }}>· après visite</span></div>
            <p>Tout ce que comprend Premium, plus l'emballage de vos cartons, le déballage et la mise en place à l'arrivée, et la protection des œuvres d'art et de la vaisselle. <em>Vous ouvrez la porte, et c'est fait.</em></p>
          </div>
        </div>
      </div>
      <p className="lede" style={{ marginTop: 22 }}><strong style={{ color: "var(--ink)" }}>Pourquoi Luxe n'a pas de fourchette&nbsp;:</strong> emballer <em>vos</em> cartons ne se devine pas de l'extérieur. Deux trois-pièces du même volume peuvent demander une journée d'écart selon la vaisselle, les livres et les bibelots. Annoncer une fourchette large reviendrait à annoncer un prix qu'on révisera — exactement ce que cette page cherche à éviter. Elle se chiffre après une visite, à domicile ou en visio de dix minutes, et le prix est ferme ensuite.</p>
    </div></section>);
}

function TarifTableaux() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-num"><span className="asterisk">*</span> 02 / Les prix</div>
      <div className="sec-head reveal"><h2>Par logement <em>et par distance.</em></h2></div>
      <p className="lede">Les deux formules chiffrables sont données côte à côte. Ces montants supposent un accès neutre : rez-de-chaussée, camion devant la porte.</p>
      {TARIF_ZONES.map((z) =>
        <div key={z.km} style={{ marginTop: 30 }}>
          <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 6px" }}>{z.titre}</h3>
          <p style={{ color: "var(--muted)", fontSize: 14.5, margin: "0 0 14px", maxWidth: "68ch" }}>{z.intro}</p>
          <div className="tarif-tw">
            <table className="tarif-table">
              <thead><tr>
                <th>Logement</th>
                {z.volumes && <th>Volume estimé</th>}
                <th style={{ textAlign: "right" }}>Standard</th>
                <th style={{ textAlign: "right" }}>Premium</th>
              </tr></thead>
              <tbody>
                {TARIF_LOGEMENTS.map((l) => {
                  const P = window.LBC_PRICING;
                  const plage = P && P.CFG && P.CFG.volumeSurface[l.key];
                  const vol = plage ? Math.round(plage.typique * P.CFG.margeVolume) : null;
                  return (
                    <tr key={l.key}>
                      <td><strong>{l.nom}</strong> <span className="tarif-sub">{l.sub}</span></td>
                      {z.volumes && <td className="tarif-sub">{vol ? vol + " m³" : "—"}</td>}
                      <td style={{ textAlign: "right" }} className="tarif-prix">{tarifFourchette(l.key, "standard", z.km) || "sur devis"}</td>
                      <td style={{ textAlign: "right" }} className="tarif-prix">{tarifFourchette(l.key, "premium", z.km) || "sur devis"}</td>
                    </tr>);
                })}
              </tbody>
            </table>
          </div>
        </div>)}
    </div></section>);
}

function TarifFacteurs() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-num"><span className="asterisk">*</span> 03 / Ce qui fait varier le prix</div>
      <div className="sec-head reveal"><h2>À logement identique, <em>deux devis peuvent différer de 40 %.</em></h2></div>
      <p className="lede">Voici exactement ce qui explique l'écart, dans l'ordre de son poids réel.</p>
      <div className="tarif-tw" style={{ marginTop: 20 }}>
        <table className="tarif-table">
          <thead><tr><th>Facteur</th><th>Ce que ça change</th><th style={{ textAlign: "right" }}>Poids</th></tr></thead>
          <tbody>
            {TARIF_FACTEURS.map((f) =>
              <tr key={f.t}>
                <td><strong>{f.t}</strong></td>
                <td style={{ color: "var(--ink-2)" }}>{f.d}</td>
                <td style={{ textAlign: "right", color: "var(--accent)", fontWeight: 700, whiteSpace: "nowrap" }}>{f.p}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div></section>);
}

function TarifFerme() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-num"><span className="asterisk">*</span> 04 / Ce qui ne varie jamais</div>
      <div className="sec-head reveal"><h2>Le prix du devis <em>est le prix final.</em></h2></div>
      <p className="lede">Une fois le devis établi, le montant ne bouge plus. Si nous avons sous-estimé le volume, le nombre d'étages ou la difficulté d'accès, c'est notre erreur, pas votre facture. Aucun supplément le jour du déménagement.</p>
      <p className="lede">C'est la seule ligne de cette page qui n'a pas de fourchette, et c'est celle qui compte le plus.</p>
    </div></section>);
}

function TarifFAQ() {
  return (
    <section className="sec"><div className="wrap">
      <div className="sec-num"><span className="asterisk">*</span> 05 / Questions de prix</div>
      <div className="sec-head reveal"><h2>Ce qu'on nous demande <em>le plus souvent.</em></h2></div>
      <div className="faq-list" style={{ marginTop: 20 }}>
        {TARIF_FAQ.map((f, i) =>
          <details className="faq-item" key={i}>
            <summary>{f.q}</summary>
            {f.r.map((p, j) => <p key={j}>{p}</p>)}
          </details>)}
      </div>
    </div></section>);
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main id="contenu">
        <TarifHero />
        <TarifFormules />
        <TarifTableaux />
        <TarifFacteurs />
        <TarifFerme />
        <TarifFAQ />
      </main>
      <Footer />
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
