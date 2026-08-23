// nav-hero.jsx — Home hero (Nav/Footer/MascotStamp/MarqueeBar now live in site.jsx)

/* La note Google, relevée sur la fiche LBC DÉMÉNAGEMENT (12 rue d'Italie, 06000 Nice)
   le 24 août 2026 via l'API Places. À vérifier de temps en temps : une note affichée qui
   ne correspond plus à la fiche se retourne contre nous, c'est le contraire de l'effet
   recherché. Un seul endroit à modifier, ici. */
const AVIS_GOOGLE = { note: "5,0", nombre: 26, lien: "https://maps.google.com/?cid=16541024533175288818" };

function Hero({ headlineVariant }) {
  const headlines = {
    a: {
      l1: <><span className="asterisk" style={{ fontFamily: "\"DM Sans\"" }}>*</span>Les Bras <span className="break-word"><span className="sr-only">Cassés?</span><span className="bw bw-top" aria-hidden="true">Cassés?</span><span className="bw bw-bot" aria-hidden="true">Cassés?</span><span className="bw-crack" aria-hidden="true"></span></span></>,
      l2: <><em style={{ opacity: "0.8", fontFamily: "Newsreader", fontSize: "clamp(38px, 11vw, 90px)" }}>Sûrement pas vos affaires.</em></>,
      scribble: "promis."
    },
    b: {
      l1: "Déménageur à Nice.",
      l2: <>Une équipe formée, <em>un devis qui ne bouge pas.</em></>,
      scribble: null
    },
    // Variante c — le jeu de mots garde sa place à l'écran, mais il n'est plus
    // le H1. Le H1 est le signal le plus fort qu'une page envoie à Google sur
    // son sujet : celui de l'accueil ne contenait ni « déménagement », ni
    // « Nice », ni aucun service. Il annonce maintenant les deux, plus
    // l'engagement le plus différenciant.
    //
    // Pour essayer un autre titre, remplace l1 et l2 :
    //   « Déménageurs à Nice. » / « Vos affaires arrivent comme elles sont parties. »
    //   « Déménager à Nice, » / « sans mauvaise surprise le jour J. »
    c: {
      /* ⚠️ LA VANNE NE PEUT PAS ÊTRE LA PREMIÈRE CHOSE QU'ON LIT.
         « Les Bras Cassés ? Sûrement pas vos affaires » demande de savoir déjà comment
         s'appelle la boîte : un visiteur venu de Google ne le sait pas. Il lisait donc une
         négation et le mot « cassé » dans les deux premières secondes — précisément sa
         peur, et un cerveau qui lit « pas de casse » retient « casse ». L'astérisque
         n'arrangeait rien : elle annonçait une note de bas de page qui n'existait pas.
         La formule passe sous le titre et à l'AFFIRMATIVE. À ce moment-là le lecteur a vu
         le logo, il sait que la boîte s'appelle LBC, et le jeu de mots fait son effet
         sans jamais prononcer le mot qu'on cherche à chasser de son esprit. */
      /* Le sous-titre a été retiré le 24 août : trois lignes avant les preuves, c'est une
         de trop. Le H1 dit qui on est et ce qu'on promet, les puces le démontrent, et la
         formule sur le nom vit déjà plus bas dans la page. Le mécanisme de sousTitre est
         conservé pour pouvoir remettre une ligne le jour où elle apporte quelque chose. */
      accroche: null,
      sousTitre: null,
      /* Espace insécable entre « à » et « Nice » : sans elle, le titre se coupe en
         « Déménageur à » / « Nice. » et laisse la préposition orpheline en fin de ligne.
         Elle passe désormais à la ligne avec le nom de la ville. */
      l1: "Déménageur\u00A0à\u00A0Nice.",
      /* Insécable entre « le » et « prix » : sans elle, la ligne se coupait en
         « Le prix annoncé est le » / « prix payé. » et laissait l'article orphelin,
         le même défaut que « Déménageur à / Nice » corrigé plus haut. */
      l2: <><em style={{ opacity: "0.8", fontFamily: "Newsreader", fontSize: "clamp(34px, 9vw, 76px)" }}>{"Le prix annonc\u00E9 est\u00A0le\u00A0prix\u00A0pay\u00E9."}</em></>,
      scribble: null
    }
  };
  const h = headlines[headlineVariant] || headlines.a;
  const heroVideoRef = React.useRef(null);

  // La vidéo du hero pèse 13,5 Mo. Avant, elle était en preload="auto" : elle se téléchargeait
  // EN ENTIER, immédiatement, à chaque visite, y compris en 4G. Un visiteur venu d'une pub
  // Google repartait avant la fin du chargement, et la lenteur de la page fait baisser le
  // Quality Score, donc monter le coût par clic. On payait des clics pour rien.
  //
  // Désormais : l'image d'aperçu s'affiche tout de suite (58 Ko), et la vidéo n'est chargée
  // QUE sur grand écran, et seulement une fois la page entièrement prête. Sur mobile, elle ne
  // se charge jamais : le visiteur voit l'aperçu, télécharge 19 Mo de moins, et la page est
  // utilisable immédiatement.
  // La vidéo joue PARTOUT, mobile compris, mais pas dans la même version.
  // Sur mobile on sert un fichier de 1,3 Mo (568 × 320) au lieu des 13,5 Mo de l'original :
  // à la taille d'affichage d'un téléphone, la différence ne se voit pas, et la page reste
  // légère. Dans les deux cas la vidéo n'est chargée qu'une fois la page prête, pour ne pas
  // retarder l'affichage du premier écran.
  const [source, setSource] = React.useState(null);
  React.useEffect(() => {
    // On respecte le visiteur qui a demandé moins d'animations, ou qui économise ses données.
    const sobre = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const co = navigator.connection || {};
    const reseauFaible = co.saveData === true || /2g/.test(co.effectiveType || "");
    if (sobre || reseauFaible) return;

    /* ⚠️ LA VIDÉO NE SE CHARGE PLUS QUE SUR MOBILE — décision d'Edouard, 24 août 2026.
       C'est l'inverse de l'usage, et c'est justifié ici : la version desktop pèse 13,5 Mo
       pour une zone que le visiteur d'ordinateur regarde à peine, pendant que la version
       mobile n'en pèse que 1,3. Sur grand écran, l'image d'aperçu de 58 Ko fait le même
       travail. Le premier écran s'affiche donc plus vite là où la page est la plus lourde,
       et la vidéo reste là où elle occupe vraiment l'attention. */
    const petitEcran = window.matchMedia("(max-width: 900px)").matches;
    if (!petitEcran) return;
    const lancer = () => setSource("assets/hero-video-mobile.mp4");
    if (document.readyState === "complete") setTimeout(lancer, 200);
    else window.addEventListener("load", () => setTimeout(lancer, 200), { once: true });
  }, []);

  React.useEffect(() => {
    const v = heroVideoRef.current;
    if (v) { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
  }, [source]);
  return (
    <section className="hero" id="top" style={{ paddingTop: "16px" }}>
      <div className="wrap" style={{ paddingTop: "20px" }}>
        <div className="hero-meta reveal">
          {/* La pastille disait « Déménageurs à Nice », mot pour mot le H1 situé trois
              centimètres plus bas. Elle porte désormais le seul avantage qu'une petite
              structure a sur une grosse enseigne, et qu'aucun concurrent du département
              n'affiche : la disponibilité immédiate. Prestazur et Maxdem ont des plannings
              faits trois semaines à l'avance.
              ⚠️ « POSSIBLE », ET PAS « GARANTI ». La page Déménagement urgent dit
              exactement la même chose et pose la même limite — cela dépend qu'un camion
              soit libre à la date demandée. Les deux formulations doivent rester
              cohérentes : promettre ici ce qu'on nuance là-bas, c'est se faire prendre en
              défaut par le premier visiteur qui lit les deux pages. */}
          <span className="pill pill-live"><span className="dot"></span>Devis en 24 h</span>
          <span className="pill"><svg className="pill-ic" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>PACA · Toute la France</span>
        </div>

        <div className="hero-grid">
          <div className="reveal">
            {h.accroche && <p className="hero-accroche">{h.accroche}</p>}
            <h1 style={{ fontFamily: "\"DM Sans\"" }}>
              {h.l1}
              <span className="l2" style={{ opacity: "0.8", fontFamily: "Newsreader" }}>{h.l2}{h.scribble && <span className="scribble">{h.scribble}</span>}</span>
            </h1>
            {h.sousTitre && <p className="hero-sous">{h.sousTitre}</p>}

            {/* ── LES PREUVES, AU PREMIER ÉCRAN ────────────────────────────────
                Le hero n'affichait qu'un bouton : rien qui dise pourquoi faire confiance
                à ce déménageur plutôt qu'à un autre, alors que c'est exactement ce que
                le visiteur cherche dans les trois premières secondes.
                Les trois faits retenus sont VÉRIFIABLES, et c'est ce qui les rend utiles :
                la note Google est publique, le délai s'engage, et la couverture
                d'assurance figure au contrat. Rien qui ressemble à un slogan.

                ⚠️ AUCUN BALISAGE AggregateRating ICI. Depuis 2019, Google ignore les avis
                qu'un site publie sur lui-même, et un tel balisage peut valoir une action
                manuelle. La note est affichée pour le VISITEUR, avec un lien vers la
                fiche Google où il peut la vérifier lui-même — c'est ce lien qui lui donne
                sa valeur, pas une déclaration dans le code. */}
            <div className="hero-preuves">
              <a className="hero-note" href={AVIS_GOOGLE.lien} target="_blank" rel="noopener noreferrer"
                 title="Voir les avis sur Google">
                <span className="hero-etoiles" aria-hidden="true">★★★★★</span>
                <span><b>{AVIS_GOOGLE.note}</b> sur Google · {AVIS_GOOGLE.nombre} avis</span>
              </a>
              {/* L'ASSURANCE EN PREMIER. C'est la réponse au premier motif de
                  mécontentement du secteur, la casse : elle pèse plus lourd qu'un délai
                  de devis, et c'est elle qu'on veut lire en premier. */}
              {/* Trois engagements, dans l'ordre des peurs du client : la casse d'abord,
                  le supplément ensuite, l'attente enfin. Le créneau d'arrivée précis est
                  celui que personne n'annonce dans le secteur — c'est pour ça qu'il est
                  là. Un déménageur qui dit « entre 8 h et 13 h » vous prend la matinée. */}
              <ul className="hero-faits">
                <li>Chaque objet assuré jusqu'à 8 000 €, la franchise, c'est pour nous</li>
                <li>Le prix du devis est le prix final. Aucun supplément le jour J</li>
                <li>Un créneau d'arrivée à l'heure près, pas une demi-journée</li>
              </ul>
            </div>

            <div className="hero-ctas">
              <a href="Formules" className="btn btn-primary hero-cta-link">Trouver ma formule idéale<span className="arrow">→</span></a>
            </div>
          </div>

          <div className="hero-photo reveal">
            <div className="scribble"><br /></div>
            <div className="hero-photo-frame">
              {source ?
              <video ref={heroVideoRef} className="hero-video" src={source} poster="assets/hero-poster.jpg" autoPlay muted loop playsInline preload="none" aria-label="LBC Déménagement en intervention" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> :
              <img className="hero-video" src="assets/hero-poster.jpg" alt="Déménageurs LBC protégeant un canapé avant transport" width="960" height="540" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
            </div>
          </div>
        </div>

        <MarqueeBar />

        <Estimator />
      </div>
    </section>);

}

Object.assign(window, { Hero });