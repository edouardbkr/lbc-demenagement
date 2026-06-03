// about-formules.jsx — About section + Formules (3 tiers)

function About() {
  return (
    <section className="sec about" id="about" style={{ padding: "1px 0px 140px" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num" style={{ fontFamily: "\"DM Sans\"" }}><span className="asterisk">*</span> 01 / Qui sommes-nous</div>
          </div>
          <h2 className="dim-em">
            Un nom qui fait sourire,<br />
            <em>un travail qui fait dormir tranquille.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="lead">
              Tout commence par un <strong style={{ color: 'var(--ink)' }}>déménagement raté</strong>. Le nôtre. Cartons écrasés, canapé rayé, personne à 8h le jour J. De cette galère est née une promesse&nbsp;: <em>plus jamais ça — ni pour nous, ni pour vous.</em>
            </p>
            <p>
              Fondée à Nice par <strong style={{ color: 'var(--ink)' }}>Edouard et Anthony</strong>, LBC* applique une règle simple&nbsp;: traiter vos affaires comme les nôtres. Un devis ferme sans mauvaise surprise, du matériel professionnel, et des gens qui savent qu'un carton «&nbsp;fragile&nbsp;» veut dire quelque chose.
            </p>
            <p>
              De Nice à Monaco, de la Côte d'Azur jusqu'à Paris — studio ou grande maison, on adapte la formule à votre vie, pas l'inverse.
            </p>
            <p style={{ color: 'var(--ink)' }}>
              Le nom est la blague. <strong>Le travail est sérieux.</strong> <a href="Apropos.html" style={{ color: 'var(--accent)', fontWeight: 600 }}>Lire notre histoire →</a>
            </p>

            <ul className="about-trust reveal-stagger">
              <li>
                <span className="at-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                <span><strong>Prix ferme</strong> — le devis est le prix payé, zéro surprise.</span>
              </li>
              <li>
                <span className="at-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                <span><strong>Assurance incluse</strong> dans chaque formule.</span>
              </li>
              <li>
                <span className="at-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                <span><strong>Devis sous 24h</strong>, gratuit et sans engagement.</span>
              </li>
            </ul>
          </div>

          <div className="about-photo-stack reveal">
            <div className="about-photo portrait">
              <div className="ph">
                <div className="caption">Les fondateurs · Atelier Nice</div>
              </div>
            </div>
            <div className="about-photo truck">
              <div className="ph">
                <div className="caption">Camion LBC · Vieux-Nice</div>
              </div>
            </div>
            <div className="about-photo detail">
              <div className="ph">
                <div className="caption">Détail · Emballage soigné</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// Hand-themed line icons matching the formula names (Lucide-style, viewBox 24)
const IconBox = () =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.5 8.2c-1-1.9-4-1.5-4 .9 0 1.7 2.2 3.2 4 4.2 1.8-1 4-2.5 4-4.2 0-2.4-3-2.8-4-.9z" />
    <path d="M3.5 13.8a8.5 8.5 0 0 0 16 0" />
    <path d="M3.5 13.8v-1.4M19.5 13.8v-1.4" />
  </svg>;

const IconShield = () =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L4.8 10.6V19h8.4z" />
    <path d="M16 8 2.5 21.5" />
    <path d="M17.4 15H9" />
  </svg>;

const IconDiamond = () =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3v2" />
    <path d="M13 3v2" />
    <path d="M6 3v2" />
    <path d="M16.5 8.5a1 1 0 0 1 1 1v6.5a4.5 4.5 0 0 1-4.5 4.5H7.5A4.5 4.5 0 0 1 3 16V9.5a1 1 0 0 1 1-1h12.5a4 4 0 1 1 0 8h-1" />
  </svg>;


function Formule({ tier, name, tag, pitch, items, inherits, recommended, icon }) {
  return (
    <div className={"formula" + (recommended ? " is-recommended" : "")}>
      <div className="formula-head">
        <div className="formula-icon">{icon}</div>
        {recommended &&
        <div className="formula-badge"><span className="formula-badge-star">★</span>LA PLUS CHOISIE</div>
        }
      </div>
      <div className="formula-level">{["Standard", "Premium", "Luxe"][tier - 1]}</div>
      <div className="formula-name">{name}</div>
      <div className="formula-tag">« {tag} »</div>
      {pitch && <p className="formula-pitch">{pitch}</p>}

      <ul>
        {inherits &&
        <li className="formula-inherits" style={{ paddingLeft: 0 }}>
            <span style={{ flex: 1 }}>Tout ce qui est inclus dans {inherits}</span>
          </li>
        }
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>

      <div className="formula-cta">
        <a href="Devis.html" className="btn-formula">
          <span>Demander un devis</span>
          <span className="btn-formula-arrow">→</span>
        </a>
      </div>
    </div>);

}

function Formules({ recommendedTier }) {
  const tiers = [
  {
    key: "standard",
    tier: 1,
    name: "Coup de main",
    tag: "L'essentiel, bien fait.",
    pitch: "Vous gérez vos cartons, on gère le muscle, la route et la casse. Le déménagement sans superflu, fait dans les règles.",
    icon: <IconBox />,
    items: [
    "Transport de vos affaires avec véhicule adapté",
    "Chargement et déchargement par notre équipe",
    "Déménagement local ou longue distance",
    "Assurance multirisque incluse"]

  },
  {
    key: "premium",
    tier: 2,
    name: "Mains libres",
    tag: "Le confort, sans le stress.",
    pitch: "Notre formule la plus demandée. On protège, on démonte, on remonte — vous n'avez plus qu'à ouvrir la porte.",
    icon: <IconShield />,
    inherits: "Coup de main",
    items: [
    "Emballage des objets fragiles par notre équipe",
    "Protection intégrale du mobilier (couvertures, housses, film)",
    "Démontage et remontage des meubles",
    "Manutention soignée et sécurisée"]

  },
  {
    key: "luxe",
    tier: 3,
    name: "Mains dans les poches",
    tag: "Vous ne touchez à rien. On s'occupe de tout.",
    pitch: "Le grand jeu. On emballe jusqu'à la dernière assiette et on installe tout à l'arrivée. Vous arrivez les mains dans les poches.",
    icon: <IconDiamond />,
    inherits: "Mains libres",
    items: [
    "Emballage de tous vos cartons, objets fragiles compris",
    "Déballage complet et mise en place à l'arrivée",
    "Protection spécifique des objets précieux, œuvres d'art, vaisselle",
    "Service clé en main de A à Z"]

  }];


  return (
    <section className="sec formules-section" id="formules">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="sec-num"><span className="asterisk">*</span> 02 / Nos formules</div>
          </div>
          <h2>
            Trois manières de déménager.<br />
            <em>Une seule manière de bien faire.</em>
          </h2>
        </div>

        <div className="formules-grid reveal-stagger">
          {tiers.map((t) =>
          <Formule key={t.key} {...t} recommended={recommendedTier === t.key} />
          )}
        </div>
      </div>
    </section>);

}

function Gallery() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="gallery-head reveal">
          <h3>
            En action.<br />
            <em>Vrais cartons, vrais clients, vrais sourires.</em>
          </h3>
          <div className="meta">Sélection · Printemps 2026 →</div>
        </div>

        <div className="gallery-strip reveal-stagger">
          <div className="gallery-tile">
            <div className="ph"><div className="ph-label">Chargement · Cimiez</div></div>
          </div>
          <div className="gallery-tile">
            <div className="ph"><div className="ph-label">Démontage meuble</div></div>
          </div>
          <div className="gallery-tile">
            <div className="ph"><div className="ph-label">Emballage fragile</div></div>
          </div>
          <div className="gallery-tile">
            <div className="ph"><div className="ph-label">Camion · Promenade</div></div>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { About, Formules, Gallery });