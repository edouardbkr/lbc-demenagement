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
    { num: "①", icon: "team", title: "Des pros qui prennent soin de tout", body: "Une équipe expérimentée, encadrée par les fondateurs Edouard et Anthony : impliquée du premier au dernier carton. Vos affaires sont entre de bonnes mains." },
    { num: "②", icon: "map", title: "De Nice à toute la France", body: "Au quotidien sur la Côte d'Azur, Nice, Cannes, Antibes, Monaco… et sur les longues distances partout en France, jusqu'à l'international." },
    { num: "③", icon: "clock", title: "Un devis clair sous 24h", body: "Estimation en ligne ou visite gratuite, puis un prix détaillé ligne par ligne dans la journée ouvrée. Sans engagement, sans relance commerciale." },
    { num: "④", icon: "tag", title: "Le prix annoncé est le prix payé", body: "Aucun supplément le jour J, aucun frais caché. On chiffre juste dès le départ. C'est écrit noir sur blanc, et on ne casse jamais notre parole." },
    { num: "⑤", icon: "calendar", title: "À l'heure, montre en main", body: "Une fenêtre d'arrivée de 15 minutes annoncée à l'avance. Votre journée démarre quand on l'a dit, pas deux heures plus tard." }
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
            <em>Pas de baratin.</em>
          </h2>
        </div>

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
  const quotes = [
    {
      text: "On craignait le jour J, on en est sorti détendus. L'équipe a emballé la vaisselle de ma grand-mère mieux que je ne l'aurais fait, pas une assiette ébréchée.",
      name: "Camille R.",
      city: "Nice",
      id: "camille"
    },
    {
      text: "Déménagement de nos bureaux un dimanche : lundi matin, tout le monde retrouvait son poste. Devis tenu au centime près, zéro mauvaise surprise. On les rappellera.",
      name: "Marc D.",
      city: "Antibes",
      id: "marc"
    },
    {
      text: "Trois étages sans ascenseur et une armoire normande de famille. Ils ont démonté, transporté et remonté sans une rayure. « Bras cassés » mon œil.",
      name: "Sophie L.",
      city: "Cannes",
      id: "sophie"
    },
    {
      text: "Réservé le mardi, déménagé le samedi. Studio étudiant bouclé en une matinée, et un prix honnête pour un petit volume. Edouard et Anthony sont adorables.",
      name: "Thomas B.",
      city: "Saint-Laurent-du-Var",
      id: "thomas"
    },
    {
      text: "Nice → Lyon avec deux enfants en bas âge. Tout est arrivé le lendemain, intact, et ils ont remonté les lits en premier pour qu'on puisse dormir. Mille mercis.",
      name: "Naïma K.",
      city: "Menton",
      id: "naima"
    },
    {
      text: "J'ai organisé le déménagement de ma mère à distance. Ponctuels, patients avec elle, et un compte-rendu photo à la fin. Exactement ce que j'espérais trouver.",
      name: "Élise V.",
      city: "Nice · Cimiez",
      id: "elise"
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
                  <image-slot
                    id={"testi-" + q.id}
                    class="tc-avatar"
                    shape="circle"
                    src={"assets/avatars/" + q.id + ".png"}
                    placeholder="Photo"
                    style={{ width: "46px", height: "46px" }}
                  ></image-slot>
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
                <a href="Devis.html" className="btn btn-primary">Demander un devis<span className="arrow">→</span></a>
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
      cat: "Tarifs",
      items: [
        { q: "Le prix annoncé peut-il changer le jour J ?", a: "Non. Le prix du devis est le prix payé. On chiffre précisément à partir du volume et des accès — pas de supplément surprise sur la facture." },
        { q: "Combien coûte un déménagement ?", a: "Comptez en moyenne 670–870 € pour un studio en local et 990–1 290 € pour un 2 pièces ; le double en longue distance. Ce ne sont que des repères : votre devis personnalisé, lui, est ferme et gratuit." },
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
        { q: "Qui vient réellement faire le déménagement ?", a: "Nos équipes, formées et encadrées par les fondateurs Edouard et Anthony. Des professionnels présents du premier au dernier carton — jamais d'inconnu recruté la veille." },
        { q: "Êtes-vous une entreprise sérieuse et déclarée ?", a: "Oui : LBC* est une société immatriculée, avec SIRET, assurance et adresse physique à Nice. Devis écrit, facture en règle, interlocuteur joignable avant, pendant et après." }
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
  const list = cats[catIdx].items;

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

        <div className="home-faq-list reveal">
          {list.map((it, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={catIdx + "-" + i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="ico">+</span>
              </button>
              <div className="faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>

        <div className="home-faq-foot reveal">
          <span>Une question qui n'est pas là&nbsp;?</span>
          <a href="tel:+33781961445" className="btn btn-ghost">07 81 96 14 45</a>
          <a href="FAQ.html" className="btn btn-primary">Toutes les questions<span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Values, Testimonials, HomeFaq });
