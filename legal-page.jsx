// legal-page.jsx — Pages légales (Mentions légales · Confidentialité · CGV)
// One file, three documents — selected via <body data-legal="...">.
// Placeholders [À COMPLÉTER : …] mark info the owner must fill with real data.

const LEGAL_UPDATED = "Juin 2026";

// Small helpers for consistent prose blocks --------------------------------
function LBlock({ n, title, children }) {
  return (
    <section className="legal-block reveal">
      <h2><span className="legal-n">{n}</span>{title}</h2>
      {children}
    </section>);

}
function Fill({ children }) {
  return <span className="legal-fill">[À compléter : {children}]</span>;
}

// ── 1. MENTIONS LÉGALES ───────────────────────────────────────────────────
function MentionsLegales() {
  return (
    <React.Fragment>
      <LBlock n="1" title="Éditeur du site">
        <p>Le présent site est édité par&nbsp;:</p>
        <ul className="legal-defs">
          <li><strong>Dénomination&nbsp;:</strong> LBC* Les Bras Cassés — SAS</li>
          <li><strong>Capital social&nbsp;:</strong> 3 000&nbsp;€</li>
          <li><strong>Siège social&nbsp;:</strong> 12 rue d'Italie, 06000 Nice, France</li>
          <li><strong>SIRET&nbsp;:</strong> <Fill>numéro SIRET à 14 chiffres</Fill></li>
          <li><strong>RCS&nbsp;:</strong> <Fill>ville et numéro RCS</Fill></li>
          <li><strong>N° TVA intracommunautaire&nbsp;:</strong> <Fill>FR + numéro</Fill></li>
          <li><strong>Directeur de la publication&nbsp;:</strong> <Fill>nom du représentant légal</Fill></li>
          <li><strong>Contact&nbsp;:</strong> <a href="tel:+33781961445">07 81 96 14 45</a> · <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a></li>
        </ul>
      </LBlock>

      <LBlock n="2" title="Hébergement">
        <p>Le site est hébergé par&nbsp;:</p>
        <ul className="legal-defs">
          <li><strong>Hébergeur&nbsp;:</strong> <Fill>nom de l'hébergeur</Fill></li>
          <li><strong>Adresse&nbsp;:</strong> <Fill>adresse de l'hébergeur</Fill></li>
          <li><strong>Contact&nbsp;:</strong> <Fill>téléphone / e-mail de l'hébergeur</Fill></li>
        </ul>
      </LBlock>

      <LBlock n="3" title="Propriété intellectuelle">
        <p>L'ensemble des éléments de ce site (textes, identité visuelle, logo, mascotte, photographies, mise en page) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de LBC* Les Bras Cassés, sauf mention contraire. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite et constituerait une contrefaçon.</p>
      </LBlock>

      <LBlock n="4" title="Données personnelles">
        <p>Les informations transmises via les formulaires de devis et de contact sont traitées conformément à notre <a href="Confidentialite.html">politique de confidentialité</a>. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données — voir la page dédiée pour exercer vos droits.</p>
      </LBlock>

      <LBlock n="5" title="Cookies">
        <p>Ce site utilise uniquement les cookies strictement nécessaires à son fonctionnement et, le cas échéant, des outils de mesure d'audience. Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels. Pour en savoir plus, consultez la <a href="Confidentialite.html">politique de confidentialité</a>.</p>
      </LBlock>

      <LBlock n="6" title="Responsabilité">
        <p>LBC* s'efforce d'assurer l'exactitude des informations publiées sur ce site, sans garantie d'exhaustivité. Les tarifs et fourchettes de prix indiqués sont donnés à titre indicatif&nbsp;; seul le devis personnalisé et signé fait foi. LBC* ne saurait être tenue responsable d'une indisponibilité temporaire du site ou d'un dommage résultant d'un usage non conforme.</p>
      </LBlock>
    </React.Fragment>);

}

// ── 2. POLITIQUE DE CONFIDENTIALITÉ ───────────────────────────────────────
function Confidentialite() {
  return (
    <React.Fragment>
      <LBlock n="1" title="Responsable du traitement">
        <p>Le responsable du traitement des données collectées sur ce site est LBC* Les Bras Cassés, 12 rue d'Italie, 06000 Nice. Pour toute question relative à vos données&nbsp;: <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>.</p>
      </LBlock>

      <LBlock n="2" title="Données collectées">
        <p>Nous ne collectons que les données que vous nous transmettez volontairement via nos formulaires&nbsp;:</p>
        <ul className="legal-list">
          <li>Identité&nbsp;: nom, prénom&nbsp;;</li>
          <li>Coordonnées&nbsp;: téléphone, e-mail&nbsp;;</li>
          <li>Détails du projet&nbsp;: adresses de départ et d'arrivée, surface, formule, date, inventaire et informations utiles au devis.</li>
        </ul>
      </LBlock>

      <LBlock n="3" title="Finalités et base légale">
        <p>Ces données sont utilisées pour&nbsp;: établir votre devis, vous recontacter, organiser la prestation et assurer le suivi commercial. La base légale est l'exécution de mesures précontractuelles et contractuelles à votre demande, ainsi que notre intérêt légitime à répondre à vos sollicitations.</p>
      </LBlock>

      <LBlock n="4" title="Durée de conservation">
        <p>Les données des prospects sont conservées <Fill>durée, ex. 3 ans</Fill> à compter du dernier contact. Les données des clients sont conservées le temps de la relation contractuelle puis archivées conformément aux obligations légales (notamment comptables).</p>
      </LBlock>

      <LBlock n="5" title="Destinataires">
        <p>Vos données sont destinées aux seules équipes de LBC* en charge du devis et de la prestation. Elles ne sont jamais vendues. Elles peuvent être transmises à nos sous-traitants techniques (hébergement, envoi d'e-mails) dans la stricte mesure nécessaire, et encadrées par contrat.</p>
      </LBlock>

      <LBlock n="6" title="Vos droits">
        <p>Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour les exercer, écrivez à <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a> en justifiant de votre identité.</p>
        <p>Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>) si vous estimez que vos droits ne sont pas respectés.</p>
      </LBlock>

      <LBlock n="7" title="Cookies">
        <p>Seuls les cookies nécessaires au bon fonctionnement du site et, le cas échéant, à la mesure d'audience anonymisée sont déposés. Vous gardez la maîtrise des cookies via les réglages de votre navigateur.</p>
      </LBlock>
    </React.Fragment>);

}

// ── 3. CONDITIONS GÉNÉRALES DE VENTE ──────────────────────────────────────
function CGV() {
  return (
    <React.Fragment>
      <LBlock n="1" title="Objet">
        <p>Les présentes conditions générales de vente (CGV) régissent les prestations de déménagement, de stockage et services associés fournis par LBC* Les Bras Cassés à ses clients particuliers et professionnels. Toute commande implique l'acceptation pleine et entière des présentes CGV.</p>
      </LBlock>

      <LBlock n="2" title="Devis et commande">
        <p>Chaque prestation fait l'objet d'un devis gratuit et personnalisé, valable <Fill>durée de validité, ex. 30 jours</Fill>. La commande est ferme à la signature du devis et au versement de l'acompte éventuel. Le devis signé prévaut sur toute estimation indicative affichée sur le site.</p>
      </LBlock>

      <LBlock n="3" title="Prix et paiement">
        <p>Les prix sont indiqués en euros, <Fill>HT ou TTC, préciser le taux de TVA</Fill>. Un acompte de <Fill>pourcentage, ex. 30 %</Fill> peut être demandé à la réservation pour bloquer la date&nbsp;; le solde est exigible <Fill>à préciser, ex. le jour de la prestation</Fill>. Moyens de paiement acceptés&nbsp;: carte, virement, chèque ou espèces.</p>
      </LBlock>

      <LBlock n="4" title="Obligations du client">
        <p>Le client s'engage à fournir des informations exactes (volume, accès, étages, stationnement), à garantir l'accès aux lieux, à effectuer les démarches de stationnement nécessaires, et à signaler tout objet de valeur ou fragile. Les variations importantes par rapport au devis (volume, accès) peuvent donner lieu à un réajustement tarifaire convenu ensemble.</p>
      </LBlock>

      <LBlock n="5" title="Obligations de LBC*">
        <p>LBC* s'engage à réaliser la prestation avec soin et professionnalisme, dans le respect des délais convenus, avec du matériel adapté et une équipe déclarée. En cas d'empêchement, LBC* en informe le client dans les meilleurs délais et propose une solution de remplacement.</p>
      </LBlock>

      <LBlock n="6" title="Assurance et responsabilité">
        <p>La prestation inclut une assurance <Fill>nom de l'assureur et nature de la garantie</Fill> couvrant les biens transportés, dans les limites et plafonds précisés au contrat. Toute réserve doit être formulée par écrit le jour même de la livraison. La responsabilité de LBC* ne saurait être engagée pour les dommages résultant d'un cas de force majeure ou d'un emballage réalisé par le client.</p>
      </LBlock>

      <LBlock n="7" title="Annulation et report">
        <p>Toute annulation ou report doit être notifié <Fill>délai, ex. 7 jours avant</Fill> la date prévue. Les conditions de remboursement de l'acompte en cas d'annulation tardive sont précisées au devis.</p>
      </LBlock>

      <LBlock n="8" title="Réclamations, médiation et litiges">
        <p>Toute réclamation peut être adressée à <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>. Conformément à la réglementation, le client consommateur peut recourir gratuitement à un médiateur de la consommation&nbsp;: <Fill>nom et coordonnées du médiateur</Fill>. À défaut d'accord amiable, les litiges relèvent des tribunaux compétents&nbsp;; le droit applicable est le droit français.</p>
      </LBlock>
    </React.Fragment>);

}

// Document registry --------------------------------------------------------
const LEGAL_DOCS = {
  mentions: { crumb: "Mentions légales", title: "Mentions légales", lede: "Les informations légales relatives à l'éditeur de ce site et à son hébergement.", body: <MentionsLegales /> },
  confidentialite: { crumb: "Confidentialité", title: "Politique de confidentialité", lede: "Comment nous collectons, utilisons et protégeons vos données personnelles — et les droits dont vous disposez.", body: <Confidentialite /> },
  cgv: { crumb: "CGV", title: "Conditions générales de vente", lede: "Les conditions qui encadrent nos prestations de déménagement et services associés.", body: <CGV /> } };


function LegalPage() {
  useScrollReveal();
  const key = (document.body.dataset.legal || "mentions");
  const doc = LEGAL_DOCS[key] || LEGAL_DOCS.mentions;
  return (
    <React.Fragment>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <a href="Les Bras Cassés.html">Accueil</a>
              <span className="sep">/</span>
              <span>{doc.crumb}</span>
            </div>
            <h1>{doc.title}</h1>
            <p className="lede">{doc.lede}</p>
          </div>
        </section>

        <section className="sec legal-sec">
          <div className="wrap">
            <div className="legal-doc">
              <p className="legal-updated">Dernière mise à jour&nbsp;: {LEGAL_UPDATED}</p>
              {doc.body}
              <div className="legal-note reveal">
                <strong>Note&nbsp;:</strong> les mentions signalées <span className="legal-fill">[à compléter]</span> doivent être renseignées avec vos informations réelles (SIRET, RCS, hébergeur, assureur, délais…) avant la mise en ligne.
              </div>
              <nav className="legal-cross" aria-label="Autres pages légales">
                <a href="Mentions-legales.html">Mentions légales</a>
                <a href="Confidentialite.html">Confidentialité</a>
                <a href="CGV.html">CGV</a>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<LegalPage />);
