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
    { num: "①", icon: "team", title: "Deux pros, en personne", body: "Edouard et Anthony portent vos affaires eux-mêmes : déclarés, assurés, et impliqués du premier au dernier carton. Vos affaires sont entre de bonnes mains." },
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

  return (
    <section className="sec testimonials" id="avis">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num"><span className="asterisk">*</span> 04 / Avis clients</div>
          </div>
          <h2 className="dim-em">
            Ce que disent celles et ceux<br/>
            <em>qui nous ont déjà laissé les clés.</em>
          </h2>
        </div>

        <div className="testimonials-grid reveal-stagger">
          {quotes.map((q, i) => (
            <div className="quote" key={i}>
              <div className="quote-mark">"</div>
              <div className="quote-text">{q.text}</div>
              <div className="quote-author">
                <image-slot
                  id={"testi-" + q.id}
                  class="quote-avatar"
                  shape="circle"
                  src={"assets/avatars/" + q.id + ".png"}
                  placeholder="Photo"
                  style={{ width: "54px", height: "54px" }}
                ></image-slot>
                <div className="quote-author-meta">
                  <div className="quote-name">{q.name}</div>
                  <div className="quote-city">{q.city}</div>
                </div>
                <div className="quote-stars">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Values, Testimonials });
