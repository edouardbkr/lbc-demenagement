// partenaires-page.jsx — Page « Devenir partenaire ».
//
// Elle sert deux choses à la fois :
//
//   1. Un argument commercial. C'est la page qu'on met en lien dans les mails
//      de démarchage aux box de stockage, agences et syndics, pour éviter de
//      tout réexpliquer dans le corps du message.
//   2. Un support de liens. Chaque partenaire cité ici avec un lien vers son
//      site peut, en retour, nous citer sur le sien. Un lien réciproque entre
//      deux entreprises locales qui travaillent vraiment ensemble est
//      parfaitement légitime, et c'est le meilleur gisement de backlinks
//      pour une entreprise locale.
//
// ⚠️ Le taux de commission (10 %) est un engagement commercial écrit. Il doit
//    rester identique ici, dans les mails de démarchage et dans l'application
//    partenaire. Si l'un change, les trois changent.

// Les partenaires actifs. Tant que le tableau est vide, la section ne
// s'affiche pas : une rubrique « Nos partenaires » sans partenaire fait plus
// de mal que pas de rubrique du tout.
//
// Pour en ajouter un :
//   { nom: "Centrum Box", ville: "Nice", site: "https://centrumbox.fr" }
const PARTENAIRES = [];

function PartenairesHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <span>Devenir partenaire</span>
        </div>
        <h1>Vos clients déménagent.<br /><em>On s'en occupe bien.</em></h1>
        <p className="lede">
          Box de stockage, agences immobilières, syndics : vos clients vous demandent
          régulièrement un déménageur. Recommandez-nous, et suivez chaque dossier en
          direct. <span className="ast">*</span>Commission de 10 %, sans palier ni
          condition de volume.
        </p>
        <div className="hero-ctas">
          <a href="Contact" className="btn btn-primary">Devenir partenaire<span className="arrow">→</span></a>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
      </div>
    </section>);

}

function PartenairesPourquoi() {
  const points = [
    {
      t: "Votre client passe avant tout",
      d: "Un client venu de chez vous ne vaut pas une prestation, il vaut toutes celles que vous nous enverrez ensuite. On a donc beaucoup plus à perdre qu'à gagner à bâcler un seul chantier. Ce n'est pas une promesse, c'est de l'arithmétique."
    },
    {
      t: "Vous engagez votre nom, pas seulement le nôtre",
      d: "Quand vous recommandez un prestataire, c'est votre réputation qui est en jeu. Prix ferme, assurance multirisque incluse, créneau d'arrivée précis, interlocuteur unique : c'est ce à quoi vos clients ont droit, systématiquement."
    },
    {
      t: "Vous êtes prévenu avant votre client",
      d: "Si quelque chose se passe mal sur un chantier venu de chez vous, vous l'apprendrez par nous, pas par lui. On vous appelle avant qu'il ne le fasse."
    }
  ];
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 01 / Pourquoi nous</div></div>
          <h2 className="dim-em">Ce qui compte d'abord,<br /><em>c'est votre client.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          {points.map((p, i) =>
            <div className="ap-value" key={i}>
              <div className="ap-value-t">{p.t}</div>
              <div className="ap-value-d">{p.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function PartenairesEspace() {
  const etapes = [
    "Lead reçu",
    "Client contacté",
    "Devis envoyé",
    "Devis accepté, avec le montant",
    "Déménagement effectué",
    "Commission versée, avec sa facture"
  ];
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 02 / L'espace partenaire</div></div>
          <h2 className="dim-em">Vous n'avez pas à nous croire<br /><em>sur parole. Vous vérifiez.</em></h2>
        </div>
        <div className="about-copy reveal">
          <p className="lead">
            Vous nous envoyez un client en trente secondes depuis votre téléphone.
            Ensuite, vous suivez chaque étape en temps réel, sans avoir à nous relancer.
          </p>
          <ul className="faq-list reveal" style={{ marginTop: 18 }}>
            {etapes.map((e, i) =>
              <li key={i} style={{ padding: "10px 0", listStyle: "none" }}>
                <span className="ast">→</span> {e}
              </li>
            )}
          </ul>
          <p>
            S'il refuse, vous le voyez. S'il accepte, vous voyez à quel prix, et donc
            quelle commission vous revient, calculée automatiquement. Vous exportez
            l'historique quand vous voulez.
          </p>
        </div>
      </div>
    </section>);

}

function PartenairesComment() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 03 / Comment ça marche</div></div>
          <h2 className="dim-em">Trois étapes,<br /><em>et rien à avancer.</em></h2>
        </div>
        <div className="ap-values reveal-stagger">
          <div className="ap-value">
            <div className="ap-value-t">1. Vous nous présentez un client</div>
            <div className="ap-value-d">Par téléphone, par message, ou depuis votre espace partenaire. Son nom, son numéro, sa date approximative suffisent.</div>
          </div>
          <div className="ap-value">
            <div className="ap-value-t">2. On s'occupe de tout</div>
            <div className="ap-value-d">Devis détaillé sous 24h, prix ferme, assurance incluse. Vous suivez chaque étape sans intervenir.</div>
          </div>
          <div className="ap-value">
            <div className="ap-value-t">3. Vous touchez 10 %</div>
            <div className="ap-value-d">Dix pour cent du montant du déménagement, sans palier ni condition de volume, versés après la prestation avec leur facture.</div>
          </div>
        </div>
      </div>
    </section>);

}

function PartenairesListe() {
  // Section volontairement masquée tant qu'il n'y a aucun partenaire.
  if (!PARTENAIRES.length) return null;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> 04 / Ils travaillent avec nous</div></div>
          <h2 className="dim-em">Nos partenaires.</h2>
        </div>
        <div className="ap-values reveal-stagger">
          {PARTENAIRES.map((p, i) =>
            <div className="ap-value" key={i}>
              <div className="ap-value-t">
                {p.site ? <a href={p.site} target="_blank" rel="noopener">{p.nom}</a> : p.nom}
              </div>
              <div className="ap-value-d">{p.ville}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function PartenairesCta() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <h2 className="dim-em">On peut passer vous voir<br /><em>cette semaine.</em></h2>
        <p className="lede">
          Quinze minutes suffisent pour vous montrer l'outil et vous ouvrir votre espace.
          Et si vous préférez attendre, on vous l'ouvre le jour où vous avez un premier
          client à nous confier.
        </p>
        <div className="hero-ctas">
          <a href="Contact" className="btn btn-primary">Nous écrire<span className="arrow">→</span></a>
          <a href="tel:+33615976577" className="btn btn-ghost">06 15 97 65 77</a>
        </div>
      </div>
    </section>);

}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main id="contenu" tabIndex="-1">
        <PartenairesHero />
        <PartenairesPourquoi />
        <PartenairesEspace />
        <PartenairesComment />
        <PartenairesListe />
        <PartenairesCta />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
