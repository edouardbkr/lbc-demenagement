// trust-testimonials.jsx — "Pourquoi nous choisir" + Testimonials grid

const ValueIcon = ({ which }) => {
  const props = { viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (which) {
    case "team":
      return (
        <svg {...props}>
          <circle cx="14" cy="14" r="5"/>
          <circle cx="27" cy="16" r="4"/>
          <path d="M5 32 C5 26 9 23 14 23 C19 23 23 26 23 32"/>
          <path d="M20 32 C20 28 23 26 27 26 C31 26 34 28 34 32"/>
        </svg>
      );
    case "map":
      return (
        <svg {...props}>
          <path d="M20 5 C14 5 10 9 10 15 C10 22 20 34 20 34 C20 34 30 22 30 15 C30 9 26 5 20 5 Z"/>
          <circle cx="20" cy="15" r="3.5"/>
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="20" cy="20" r="14"/>
          <path d="M20 11 L20 20 L26 24"/>
        </svg>
      );
    case "tag":
      return (
        <svg {...props}>
          <path d="M19 5 L34 5 L34 20 L20 34 L5 19 Z"/>
          <circle cx="27" cy="12" r="1.6"/>
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="6" y="9" width="28" height="25" rx="1"/>
          <path d="M6 16 L34 16"/>
          <path d="M14 5 L14 12"/>
          <path d="M26 5 L26 12"/>
          <circle cx="14" cy="23" r="1.2" fill="currentColor"/>
          <circle cx="20" cy="23" r="1.2" fill="currentColor"/>
          <circle cx="26" cy="23" r="1.2" fill="currentColor"/>
        </svg>
      );
    default: return null;
  }
};

function Values() {
  const values = [
    { num: "①", icon: "team", title: "Des professionnels qui prennent soin de tout", body: "Une équipe expérimentée, encadrée par les fondateurs Edouard et Anthony : impliquée du premier au dernier carton. Vos affaires sont entre de bonnes mains." },
    { num: "②", icon: "map", title: "De Nice à toute la France", body: "Au quotidien sur la Côte d'Azur, Nice, Cannes, Antibes, Monaco… et sur les longues distances partout en France, jusqu'à l'international." },
    { num: "③", icon: "clock", title: "Un devis clair sous 24h", body: "Estimation en ligne ou visite gratuite, puis un prix détaillé ligne par ligne dans la journée ouvrée. Sans engagement. On relance si vous ne répondez pas, sans jamais insister au-delà du raisonnable." },
    { num: "④", icon: "tag", title: "Le prix annoncé est le prix payé", body: "Aucun supplément le jour J, aucun frais caché. On chiffre juste dès le départ. C'est écrit noir sur blanc, et on ne casse jamais notre parole." },
    { num: "⑤", icon: "calendar", title: "À l'heure, pas à la demi-journée", body: "Un créneau d'arrivée précis, annoncé à l'avance, et on vous prévient si la route bouge. Votre journée démarre quand on l'a dit, pas deux heures plus tard." }
  ];

  return (
    <section className="sec" id="pourquoi">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num"><span className="asterisk">*</span> 03 / Pourquoi nous choisir</div>
          </div>
          <h2 className="dim-em">
            Cinq raisons précises.<br/>
            <em>Rien de plus.</em>
          </h2>
        </div>
        {/* La phrase existe pour le mot « déménageur », absent de l'accueil alors que c'est
            la forme la plus tapée (« déménageur nice »). Mesuré le 22 septembre 2026 : 3
            occurrences ici, 6 à 28 chez les concurrents que Google met en avant. */}
        <p className="lede reveal" style={{ marginTop: 14 }}>Ce qui distingue un déménageur à Nice d'un autre se vérifie avant le jour J : dans le devis, dans l'assurance, et dans l'heure d'arrivée qu'on vous annonce.</p>

        <div className="values-grid reveal-stagger">
          {values.map((v, i) => (
            <div className="value" key={i}>
              <div className="value-num">★ 0{i+1} / 05</div>
              <div className="value-icon"><ValueIcon which={v.icon} /></div>
              <div className="value-title">{v.title}</div>
              <div className="value-body">{v.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  /* ⚠️ AVIS GOOGLE RÉELS, RELEVÉS LE 24 AOÛT 2026 VIA L'API PLACES.
     Ce ne sont pas des témoignages réécrits : le texte est celui que le client a publié,
     à la ponctuation près. On ne corrige rien, sinon ils sonnent faux — et un visiteur
     qui va vérifier sur la fiche Google trouverait des mots différents.
     Les cinq derniers avis sont notés 5 étoiles. Quand la fiche en accumulera d'autres,
     ils se rafraîchissent ici à la main : l'API ne renvoie que les cinq plus récents. */
  const quotes = [
    {
      text: "Tous simplement génial un déménagement c’est toujours stressant. Mais la C’était hyper bien organisé orchestré ponctuelle, arrangeant je recommande fortement il seront sûrement prévu pour mon futur déménagement. Un grand merci",
      name: "Jonathan D.",
      city: "Avis Google · il y a 7 semaines",
      id: "g0"
    },
    {
      text: "Très bonne expérience du début à la fin. L'équipe a été ponctuelle, organisée et très professionnelle. Tous nos meubles ont été parfaitement protégés et manipulés avec beaucoup de soin. Le déménagement s'est déroulé rapidement, dans une excellente ambiance, ce qui a rendu cette journée beaucoup moins stressante. Un grand merci pour votre sérieux et votre efficacité. Je recommande cette entreprise sans hésitation !",
      name: "Mari M.",
      city: "Avis Google · il y a 2 mois",
      id: "g1"
    },
    {
      text: "Je suis très satisfait par le déménagement de mon appartement orchestré par LBC Déménagement, travail sérieux, efficace et soigné et répondant à mes attentes ! je les recommande !",
      name: "Damien D.",
      city: "Avis Google · il y a 4 semaines",
      id: "g2"
    },
    {
      text: "Excellente prestation lors de mon déménagement l'an passé, merci pour votre professionnalisme et votre engagement !!!",
      name: "Nathalie P.",
      city: "Avis Google · il y a 7 semaines",
      id: "g3"
    },
    {
      text: "Je recommande vivement !!! Travail soigné , efficacité, qualité et gentillesse , ce qui est appréciable aujourd’hui. Très professionnel !!!",
      name: "Karine S.",
      city: "Avis Google · il y a 7 semaines",
      id: "g4"
    }
  ];

  const pinRef = React.useRef(null);
  const stickyRef = React.useRef(null);
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    const pin = pinRef.current, track = trackRef.current;
    if (!pin || !track) return;

    const reduce = (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) || window.innerWidth >= 981;
    let maxX = 0, raf = null;

    const measure = () => {
      // horizontal overflow distance of the track inside its viewport
      maxX = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
      // make the pinned section tall enough to "spend" that horizontal
      // distance with vertical scroll, plus one viewport to enter/exit
      pin.style.height = (maxX + window.innerHeight) + "px";
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = pin.getBoundingClientRect();
        const total = pin.offsetHeight - window.innerHeight;
        let p = total > 0 ? (-rect.top) / total : 0;
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        track.style.transform = "translateX(" + (-p * maxX).toFixed(1) + "px)";
      });
    };

    if (reduce) {
      pin.classList.add("no-pin");
      return;
    }

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    const t1 = setTimeout(() => { measure(); onScroll(); }, 400);
    const t2 = setTimeout(() => { measure(); onScroll(); }, 1400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, []);

  return (
    <section className="testi-pin" id="avis" ref={pinRef}>
      <div className="testi-sticky" ref={stickyRef}>
        <div className="wrap testi-head">
          <span className="testi-badge"><span className="asterisk">*</span> Avis clients</span>
          <h2>Ce qu'en disent celles et ceux<br/><em>qui nous ont laissé les clés.</em></h2>
        </div>
        <div className="testi-viewport">
          <div className="testi-track" ref={trackRef}>
            {quotes.map((q, i) => (
              <article className="testi-card" key={i}>
                <header className="tc-head">
                  {/* Les pastilles de photo ont été retirées le 2 août 2026 : elles affichaient
                      un cercle gris vide (aucun fichier dans assets/avatars/). Et il n'y a pas
                      de photo à y mettre : ce sont de vrais avis Google, on ne va pas inventer
                      des visages. Le nom et les étoiles suffisent. */}
                  <div className="tc-id">
                    <div className="tc-name">{q.name}</div>
                    <div className="tc-city">{q.city}</div>
                  </div>
                  <div className="tc-stars" aria-hidden="true">★★★★★</div>
                </header>
                <p className="tc-text">{q.text}</p>
              </article>
            ))}
            <div className="testi-end">
              <div className="te-inner">
                <div className="te-stars">★★★★★</div>
                <p>Et le prochain avis,<br/><em>c'est peut-être le vôtre.</em></p>
                <a href="Devis" className="btn btn-primary">Demander un devis<span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  const cats = [
    {
      /* Mesuré le 22 septembre 2026 face aux pages qui sortent en tête sur « déménagement
         nice » : la première a 11 questions visibles et un balisage FAQPage, l'accueil
         n'avait ni l'un ni l'autre. Les réponses ci-dessous sont celles du site, pas des
         promesses : le stationnement est demandé par LBC. ⚠️ Pas de stockage, LBC n'en propose pas. */
      cat: "Déménager à Nice",
      items: [
        { q: "Combien coûte un déménagement à Nice ?", a: prixNiceFaq() },
        { q: "Faut-il une autorisation de stationnement pour déménager à Nice ?", a: "Oui, dès que le camion occupe la voie publique, c'est-à-dire presque partout dans Nice. Pour un déménagement à Nice, nous faisons la demande en mairie pour vous, à l'adresse de départ comme à l'arrivée, en tenant compte des délais réels de chaque service. C'est compris dans le devis." },
        { q: "Déménagez-vous aussi en dehors de Nice ?", a: "Oui. Nous sommes une entreprise de déménagement niçoise, et nous intervenons dans toutes les Alpes-Maritimes, à Monaco et dans le Var, ainsi que sur la longue distance en France et à l'international au départ de Nice, avec la même équipe et le même devis ferme." }
      ]
    },
    {
      cat: "Tarifs",
      items: [
        { q: "Le prix annoncé peut-il changer le jour J ?", a: "Non. Le prix annoncé est le prix payé. On chiffre précisément à partir du volume et des accès — pas de supplément surprise sur la facture." },
        { q: "Faut-il verser un acompte ?", a: "Un acompte raisonnable peut être demandé pour bloquer la date — jamais la totalité d'avance. Le solde est réglé le jour de la prestation. Tout est écrit sur votre devis." }
      ]
    },
    {
      cat: "Assurance & sécurité",
      items: [
        { q: "Et si un meuble est abîmé ou cassé ?", a: "Une assurance multirisque est incluse dans chaque formule. En cas de dommage, on le constate ensemble, on le déclare, et la couverture s'applique selon les plafonds indiqués au devis." },
        { q: "Mes objets de valeur sont-ils couverts ?", a: "Oui. Pour les œuvres d'art, instruments ou objets précieux, on prévoit un emballage renforcé sur mesure et une assurance en valeur déclarée, convenue à l'avance." }
      ]
    },
    {
      cat: "L'équipe",
      items: [
        { q: "Comment choisir un déménageur à Nice ?", a: "Regardez trois choses. Un devis écrit qui détaille le volume, l'accès et le stationnement, parce qu'à Nice c'est l'accès qui fait le prix, pas les kilomètres. Une assurance nommée au contrat, avec ses plafonds. Et des avis Google récents, que vous pouvez lire vous-même. Un déménageur niçois sérieux vous demandera l'étage, l'ascenseur et la rue avant d'annoncer un chiffre." },
        { q: "Qui vient réellement faire le déménagement ?", a: "Nos équipes, formées et encadrées par les fondateurs Edouard et Anthony. Des professionnels présents du premier au dernier carton — jamais d'inconnu recruté la veille." },
        { q: "Êtes-vous une entreprise sérieuse et déclarée ?", a: "Oui : LBC* est une entreprise de déménagement immatriculée, avec SIRET, attestation de capacité de transport, assurance et adresse physique à Nice. Devis écrit, facture en règle, interlocuteur joignable avant, pendant et après." }
      ]
    },
    {
      cat: "Pratique",
      items: [
        { q: "Sous combien de temps puis-je réserver ?", a: "Vous recevez un devis détaillé sous 24h. Idéalement, réservez 2 à 3 semaines à l'avance (plus en haute saison) — mais on gère aussi les demandes serrées, alors appelez-nous." },
        { q: "Travaillez-vous le week-end ?", a: "Oui, sur réservation. Les samedis et fins de mois partent vite, pensez à réserver tôt. Dimanches et jours fériés possibles selon les villes." }
      ]
    }
  ];

  const [catIdx, setCatIdx] = React.useState(0);
  const [open, setOpen] = React.useState(0);

  return (
    <section className="sec home-faq" id="faq">
      <div className="wrap">
        <div className="home-faq-top reveal">
          <span className="testi-badge"><span className="asterisk">*</span> Vos questions</span>
          <h2>Questions fréquentes,<br/><em>réponses droit au but.</em></h2>
          <div className="home-faq-cats">
            {cats.map((c, i) => (
              <button key={i} className={"hfc-pill" + (i === catIdx ? " active" : "")} onClick={() => { setCatIdx(i); setOpen(0); }}>
                {c.cat}
              </button>
            ))}
          </div>
        </div>

        {/* ⚠️ TOUTES LES CATÉGORIES SONT DANS LE HTML, seule l'active est visible. Avant,
            seule la première était rendue : Google ne lisait que deux questions sur seize,
            et jamais celles sur Nice. Le pré-rendu écrit ce que React rend, pas ce que
            l'onglet montre. */}
        {cats.map((c, ci) => (
        <div className="home-faq-list reveal" key={ci} hidden={ci !== catIdx}>
          {c.items.map((it, i) => (
            <div className={"faq-item" + (ci === catIdx && open === i ? " open" : "")} key={ci + "-" + i}>
              {/* La question est un titre : Google lit la structure, pas seulement le texte. Le
                  bouton reste à l'intérieur, c'est lui qui ouvre la réponse. */}
              <h3 style={{ margin: 0, fontSize: "inherit", fontWeight: "inherit" }}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{it.q}</span>
                  <span className="ico">+</span>
                </button>
              </h3>
              <div className="faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
        ))}

        {/* Toutes les questions de toutes les catégories, pour Google, même celles que
            l'onglet n'affiche pas. Les réponses sont exactement celles qu'un visiteur lit. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": cats.flatMap((c) => c.items.map((it) => ({ "@type": "Question", "name": it.q,
            "acceptedAnswer": { "@type": "Answer", "text": it.a } }))) }) }} />
        <div className="home-faq-foot reveal">
          <span>Une question qui n'est pas là&nbsp;?</span>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
          <a href="FAQ" className="btn btn-primary">Toutes les questions<span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}


/* ── DÉMÉNAGEUR À NICE, QUARTIER PAR QUARTIER ──────────────────────────────────────
   L'accueil est la page que Google sort déjà sur « déménageur nice » (position 80 le
   22 septembre 2026), et le mot n'y figurait que trois fois. Cette section le porte, et
   envoie vers la page Nice et les pages quartiers avec des ancres qui disent ce qu'elles
   sont. Les contraintes citées sont celles des pages quartiers : rien d'inventé. */
function QuartiersNice() {
  const Q = [
    ["Vieux-Nice", "Demenagement-Vieux-Nice", "zone piétonne, portage systématique"],
    ["Cimiez", "Demenagement-Cimiez-Nice", "colline, ascenseurs anciens, grands volumes"],
    ["Carré d'Or", "Demenagement-Carre-d-Or-Nice", "immeubles haussmanniens, monte-meuble"],
    ["Libération", "Demenagement-Liberation-Nice", "marché, tramway, stationnement en voirie"],
    ["Le Port", "Demenagement-Port-Nice", "rues en pente, circulation contrainte"],
    ["Riquier", "Demenagement-Riquier-Nice", "caves voûtées, rues étroites"],
    ["Mont Boron", "Demenagement-Mont-Boron-Nice", "routes en lacets, villas, monte-meuble"]];
  return (
    <section className="sec" id="quartiers-nice">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 05 / Nice, quartier par quartier</div></div>
          <h2 className="dim-em">Déménageur à Nice,<br/><em>quartier par quartier.</em></h2>
        </div>
        <p className="lede reveal" style={{ marginTop: 14 }}>Un déménagement à Nice ne se passe pas de la même façon dans le Vieux-Nice, où le camion reste aux bornes, et au Mont Boron, où le monte-meuble est presque systématique. C'est ce qui fait un déménageur à Nice : connaître la rue avant d'y engager le camion. Nous connaissons chaque quartier, ses accès et ses règles de stationnement : c'est ce qui fait un devis juste et une journée sans surprise.</p>
        <div className="values-grid reveal-stagger" style={{ marginTop: 26 }}>
          {Q.map(([nom, href, sub], i) => (
            <a className="value" href={href} key={i} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="value-title">Déménagement {nom}</div>
              <div className="value-body">{sub}</div>
            </a>))}
        </div>
        <p className="reveal" style={{ marginTop: 22 }}>
          <a href="Demenagement-Nice" className="btn btn-ghost">Les dix quartiers de Nice : prix, accès et démarches<span className="arrow">→</span></a>
        </p>
      </div>
    </section>);
}


/* Le prix d'un 2 pièces, tel que l'estimateur le donne : la FAQ le dit en chiffres, pas en
   « ça dépend ». Sans estimateur chargé, une réponse honnête sans montant. */
function prixNiceFaq() {
  const P = window.LBC_PRICING;
  const n = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const e = P && P.estimer ? P.estimer({ surface: "t2", formule: "standard", km: 8 }) : null;
  const four = e ? "Entre " + n(e.bas) + " et " + n(e.haut) + " € pour un 2 pièces en formule Standard, avec un accès simple. " : "";
  return four + "À Nice, c'est l'accès qui fait le prix, bien plus que la distance : l'étage sans ascenseur, la rue piétonne, le stationnement à réserver. Le prix exact tient dans un devis ferme sous 24 h, et le prix annoncé est le prix payé.";
}

/* ── COMBIEN COÛTE UN DÉMÉNAGEUR À NICE ────────────────────────────────────────────
   Les pages en tête sur « déménagement nice » annoncent des tarifs indicatifs ; l'accueil
   renvoyait vers un formulaire. Le tableau vient de l'estimateur, calé sur les devis
   réellement émis, comme sur la page Nice. Rien n'est écrit en dur. */
function PrixNice() {
  const f = (s, fo) => { const P = window.LBC_PRICING;
    if (!P || !P.estimer) return "sur devis";
    const e = P.estimer({ surface: s, formule: fo, km: 8 });
    const n = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return e ? n(e.bas) + " – " + n(e.haut) + " €" : "sur devis"; };
  const L = [["studio", "Studio", "moins de 30 m²"], ["t2", "2 pièces", "30 à 50 m²"],
             ["t3", "3 pièces", "50 à 80 m²"], ["t4", "4 pièces", "80 à 100 m²"], ["maison", "Maison", "plus de 90 m²"]];
  return (
    <section className="sec" id="prix-nice">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 07 / Les prix</div></div>
          <h2 className="dim-em">Combien coûte un déménageur à Nice.<br/><em>Des fourchettes réelles, pas une promesse.</em></h2>
        </div>
        <p className="lede reveal" style={{ marginTop: 14 }}>Ces prix viennent de notre estimateur, calé sur les devis que notre entreprise de déménagement a réellement émis à Nice et dans les Alpes-Maritimes. Ils supposent un accès neutre : rez-de-chaussée ou ascenseur, camion devant la porte. À Nice, c'est l'accès qui fait varier le prix d'un déménagement à Nice, bien plus que les kilomètres : l'étage sans ascenseur, la rue piétonne du Vieux-Nice, le stationnement à réserver en mairie.</p>
        <div className="tarif-tw reveal" style={{ marginTop: 26 }}>
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
        <p className="lede reveal" style={{ marginTop: 20 }}>La formule Luxe, avec l'emballage de tous vos cartons au départ et la mise en place à l'arrivée, se chiffre après une visio de dix minutes : le contenu des placards de quelqu'un ne se devine pas de l'extérieur. Le stationnement, le monte-meuble et le portage sont écrits sur le devis d'un déménagement à Nice, jamais ajoutés le jour J.</p>
        <p className="reveal" style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="Devis" className="btn btn-primary">Mon prix pour Nice, sous 24 h<span className="arrow">→</span></a>
          <a href="Demenagement-Nice" className="btn btn-ghost">Prix, stationnement et démarches, quartier par quartier<span className="arrow">→</span></a>
        </p>
      </div>
    </section>);
}

/* ── UNE ENTREPRISE DE DÉMÉNAGEMENT À NICE, POUR TOUT CE QUI DOIT BOUGER ───────────
   Les concurrents en tête nomment leurs prestations : garde-meuble, monte-meuble,
   bureaux, longue distance (mesuré le 22 septembre 2026 : « garde-meuble/stockage » 9 à
   14 fois chez eux, 0 sur l'accueil). ⚠️ LBC NE PROPOSE PAS DE STOCKAGE NI DE GARDE-MEUBLE :
   une carte « Stockage entre deux logements » a été écrite ici le 22 septembre 2026 par
   déduction du module Stockage du cockpit, et retirée le soir même. Ne jamais l'écrire. */
function ServicesNice() {
  const S = [
    ["Déménagement d'appartement à Nice", "Du studio au cinq pièces, avec ou sans ascenseur. Un déménagement à Nice en appartement, c'est d'abord une cage d'escalier : protection du mobilier, démontage et remontage compris dès la formule Premium.", "Formules"],
    ["Déménagement de maison et de villa", "Cimiez, Mont Boron, les collines niçoises : monte-meuble, allées privées et gros volumes, chiffrés au devis, pas découverts le jour J.", "Demenagement-Nice"],
    ["Déménagement d'entreprise et de bureaux", "Plan d'implantation, informatique étiquetée poste par poste, travail le week-end ou en soirée pour ne pas arrêter l'activité.", "Entreprise"],
    ["Monte-meuble à Nice", "Pour les étages sans ascenseur et les fenêtres étroites du centre. Il se réserve au devis, par nos déménageurs professionnels : un monte-meuble ne se trouve pas le matin même.", "Devis"],
    ["Emballage et cartons", "Le matériel de protection est fourni dans toutes les formules. En formule Luxe, nos déménageurs emballent tout au départ et déballent tout à l'arrivée.", "Formules"],
    ["Longue distance et international depuis Nice", "Paris, Lyon, Genève, Milan, Barcelone : un seul interlocuteur du chargement à la livraison, et un créneau d'arrivée annoncé.", "Zones"]];
  const V = [["Saint-Laurent-du-Var", "Demenagement-Saint-Laurent-du-Var"], ["Cagnes-sur-Mer", "Demenagement-Cagnes-sur-Mer"], ["Antibes", "Demenagement-Antibes"], ["Villefranche-sur-Mer", "Demenagement-Villefranche-sur-Mer"], ["Saint-Jean-Cap-Ferrat", "Demenagement-Saint-Jean-Cap-Ferrat"], ["Monaco", "Demenagement-Monaco"]];
  return (
    <section className="sec" id="prestations-nice">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 06 / Nos prestations</div></div>
          <h2 className="dim-em">Une entreprise de déménagement à Nice,<br/><em>pour tout ce qui doit bouger.</em></h2>
        </div>
        <p className="lede reveal" style={{ marginTop: 14 }}>Société de déménagement installée rue d'Italie, au cœur de Nice, LBC déménage les particuliers et les entreprises dans toutes les Alpes-Maritimes et à Monaco, avec la même équipe de déménageurs professionnels formée par les fondateurs, et le même devis ferme. Un déménagement à Nice commence toujours par une question : par où passe le camion.</p>
        <div className="values-grid reveal-stagger" style={{ marginTop: 26 }}>
          {S.map(([t, d, href], i) => (
            <a className="value" href={href} key={i} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="value-title">{t}</div>
              <div className="value-body">{d}</div>
            </a>))}
        </div>
        <p className="lede reveal" style={{ marginTop: 26 }}>
          Déménageur à Nice, et tout autour de Nice : {V.map(([nom, href], i) => (
            <React.Fragment key={href}>{i > 0 ? (i === V.length - 1 ? " et " : ", ") : ""}<a href={href} style={{ color: "var(--accent)", fontWeight: 600 }}>{nom}</a></React.Fragment>))}.
          Chaque commune a sa page, avec ses accès et ses règles de stationnement, écrite par des déménageurs qui y travaillent chaque semaine. <a href="Zones" style={{ color: "var(--accent)", fontWeight: 600 }}>Toutes les communes des Alpes-Maritimes →</a>
        </p>
      </div>
    </section>);
}


/* ── CE QU'UNE ENTREPRISE DE DÉMÉNAGEMENT À NICE VOUS DOIT ─────────────────────────
   Le premier sur « déménagement nice » écrit « entreprise/société de déménagement » 9 fois,
   l'accueil 4 (mesuré le 22 septembre 2026). Edouard : « augmente ça avec du contenu de
   meilleure qualité que mes concurrents », pas en répétant. D'où six pièces à vérifier
   chez n'importe quel déménageur, avec nos numéros en face. ⚠️ Rien ici n'est une
   promesse : l'attestation et l'assureur sont dans les CGV, la lettre de voiture est
   remise à chaque chantier, l'encadrement par les fondateurs est sur la page À propos. */
function EntrepriseNice() {
  const G = [
    ["Une attestation de capacité de transport", "Sans elle, une entreprise de déménagement transporte vos affaires hors la loi, et son assurance ne vous couvre pas. La nôtre porte le numéro JME932603100 : elle figure sur chaque devis et dans nos conditions générales.", "CGV", "Lire nos conditions générales"],
    ["Un devis écrit, ferme, ligne par ligne", "Volume, étage, accès, stationnement, monte-meuble : tout est chiffré avant le jour J, et le prix annoncé est le prix payé. Une société de déménagement qui chiffre au téléphone découvre l'escalier le jour J, à vos frais.", "Devis", "Demander mon devis"],
    ["Une assurance nommée, avec ses plafonds", "L'assurance multirisque est comprise dans chaque formule ; l'assureur et les plafonds sont écrits dans nos conditions générales, jointes au devis. « On est assurés », sans contrat nommé, ne vous dit rien.", "CGV", "Voir l'assurance"],
    ["Une lettre de voiture le jour J", "C'est une obligation légale pour toute entreprise de déménagement : le document qui dit ce qui part, d'où, pour où, et qui engage le transporteur. Nous vous la remettons en deux exemplaires, signée, avant que le camion ne démarre.", "Formules", "Ce que comprend chaque formule"],
    ["Une équipe formée, encadrée, présente", "Nos déménageurs sont formés et encadrés par les fondateurs, Edouard et Anthony, présents du premier au dernier carton. Pas de renfort inconnu recruté la veille.", "Apropos", "Qui nous sommes"],
    ["Des avis publics, lisibles avant de signer", "Nos avis Google sont publiés par nos clients, sous leur nom, et vous pouvez les lire avant de nous appeler. Une entreprise de déménagement à Nice se juge sur ce qu'en disent ceux qu'elle a déménagés.", "https://maps.google.com/?cid=16541024533175288818", "Lire les avis sur Google"]];
  return (
    <section className="sec" id="entreprise-nice">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 04 / Ce qu'on vous doit</div></div>
          <h2 className="dim-em">Ce qu'une entreprise de déménagement à Nice vous doit.<br/><em>Et ce que LBC signe, noir sur blanc.</em></h2>
        </div>
        <p className="lede reveal" style={{ marginTop: 14 }}>Beaucoup de sociétés de déménagement promettent, peu écrivent. Voilà les six choses qu'une entreprise de déménagement sérieuse à Nice vous doit avant même de charger un carton, et où les vérifier chez nous.</p>
        <div className="values-grid reveal-stagger" style={{ marginTop: 26 }}>
          {G.map(([t, d, href, lien], i) => (
            <div className="value" key={i}>
              <div className="value-num">{String(i + 1).padStart(2, "0")} / 06</div>
              <div className="value-title">{t}</div>
              <div className="value-body">{d} <a href={href} style={{ color: "var(--accent)", fontWeight: 600 }} target={href.indexOf("http") === 0 ? "_blank" : undefined} rel={href.indexOf("http") === 0 ? "noopener noreferrer" : undefined}>{lien} →</a></div>
            </div>))}
        </div>
        <p className="lede reveal" style={{ marginTop: 22 }}>Voilà ce qui fait, à nos yeux, une entreprise de déménagement à Nice : pas des promesses, des pièces qu'on peut vérifier.</p>
      </div>
    </section>);
}

Object.assign(window, { Values, Testimonials, HomeFaq, QuartiersNice, PrixNice, ServicesNice, EntrepriseNice });
