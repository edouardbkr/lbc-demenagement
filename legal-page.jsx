// legal-page.jsx — Pages légales (Mentions légales · Confidentialité · CGV)
// One file, three documents — selected via <body data-legal="...">.
// Placeholders [À COMPLÉTER : …] mark info the owner must fill with real data.

const LEGAL_UPDATED = "Août 2026";

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
          <li><strong>Dénomination&nbsp;:</strong> LBC DÉMÉNAGEMENT — SAS (société par actions simplifiée)</li>
          <li><strong>Capital social&nbsp;:</strong> 3 000&nbsp;€</li>
          <li><strong>Siège social&nbsp;:</strong> 12 rue d'Italie, 06000 Nice, France</li>
          <li><strong>SIREN&nbsp;:</strong> 106&nbsp;789&nbsp;860</li>
          <li><strong>SIRET&nbsp;:</strong> 106&nbsp;789&nbsp;860&nbsp;00017 (siège)</li>
          <li><strong>RCS&nbsp;:</strong> Nice 106&nbsp;789&nbsp;860</li>
          <li><strong>Code APE&nbsp;:</strong> 4942Z — services de déménagement</li>
          <li><strong>N° TVA intracommunautaire&nbsp;:</strong> FR29&nbsp;106&nbsp;789&nbsp;860</li>
          <li><strong>Directeur de la publication&nbsp;:</strong> Edouard Bakirian</li>
          <li><strong>Contact&nbsp;:</strong> <a href="tel:+33615976577">06 15 97 65 77</a> · <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a></li>
        </ul>
      </LBlock>

      <LBlock n="2" title="Hébergement">
        <p>Le site est hébergé par&nbsp;:</p>
        <ul className="legal-defs">
          <li><strong>Hébergeur&nbsp;:</strong> Cloudflare, Inc.</li>
          <li><strong>Adresse&nbsp;:</strong> 101 Townsend Street, San Francisco, CA 94107, États-Unis</li>
          <li><strong>Contact&nbsp;:</strong> <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a></li>
        </ul>
      </LBlock>

      <LBlock n="3" title="Propriété intellectuelle">
        <p>L'ensemble des éléments de ce site (textes, identité visuelle, logo, mascotte, photographies, mise en page) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de LBC Déménagement, sauf mention contraire. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite et constituerait une contrefaçon.</p>
      </LBlock>

      <LBlock n="4" title="Données personnelles">
        <p>Les informations transmises via les formulaires de devis et de contact sont traitées conformément à notre <a href="Confidentialite">politique de confidentialité</a>. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données — voir la page dédiée pour exercer vos droits.</p>
      </LBlock>

      <LBlock n="5" title="Cookies">
        <p>Ce site utilise uniquement les cookies strictement nécessaires à son fonctionnement et, le cas échéant, des outils de mesure d'audience. Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels. Pour en savoir plus, consultez la <a href="Confidentialite">politique de confidentialité</a>.</p>
      </LBlock>

      <LBlock n="6" title="Responsabilité">
        <p>LBC Déménagement s'efforce d'assurer l'exactitude des informations publiées sur ce site, sans garantie d'exhaustivité. Les tarifs et fourchettes de prix indiqués sont donnés à titre indicatif&nbsp;; seul le devis personnalisé et signé fait foi. LBC Déménagement ne saurait être tenue responsable d'une indisponibilité temporaire du site ou d'un dommage résultant d'un usage non conforme.</p>
      </LBlock>
    </React.Fragment>);

}

// ── 2. POLITIQUE DE CONFIDENTIALITÉ ───────────────────────────────────────
function Confidentialite() {
  return (
    <React.Fragment>
      <LBlock n="1" title="Responsable du traitement">
        <p>Le responsable du traitement des données collectées sur ce site est LBC Déménagement, 12 rue d'Italie, 06000 Nice. Pour toute question relative à vos données&nbsp;: <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>.</p>
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
        <p>Les données des prospects sont conservées <strong>3&nbsp;ans</strong> à compter du dernier contact. Les données des clients sont conservées le temps de la relation contractuelle puis archivées conformément aux obligations légales (notamment comptables).</p>
      </LBlock>

      <LBlock n="5" title="Destinataires">
        <p>Vos données sont destinées aux seules équipes de LBC Déménagement en charge du devis et de la prestation. Elles ne sont jamais vendues. Elles peuvent être transmises à nos sous-traitants techniques (hébergement, envoi d'e-mails) dans la stricte mesure nécessaire, et encadrées par contrat.</p>
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
//
// ⚠️ RÈGLE : ce texte, les conditions imprimées sur le devis (iDevisInnerHTML
//    dans l'application) et les promesses des pages du site doivent dire la
//    MÊME chose. Trois endroits, une seule vérité. Si l'un change, les trois
//    changent — sinon le client trouve la contradiction avant nous.
//
// Les montants d'assurance proviennent du contrat Generali IARD « Polytrans »
// (déménageur de particuliers et d'entreprises), souscrit par l'intermédiaire
// de SARL SYLCO. Ne jamais les modifier sans relire le contrat : ce sont les
// chiffres que l'assureur paiera, pas ceux qu'on aimerait annoncer.
function CGV() {
  return (
    <React.Fragment>
      <LBlock n="1" title="Objet et champ d'application">
        <p>Les présentes conditions générales de vente (CGV) régissent les prestations de déménagement et les services associés fournis par <strong>LBC DÉMÉNAGEMENT</strong>, SAS au capital de 3&nbsp;000&nbsp;€, dont le siège est 12 rue d'Italie, 06000 Nice, SIRET 106&nbsp;789&nbsp;860&nbsp;00017, RCS Nice, code APE 4942Z, à ses clients particuliers et professionnels.</p>
        <p>LBC Déménagement exerce sous l'attestation de capacité professionnelle en transport routier léger de marchandises n°&nbsp;JME932603100.</p>
        <p>Toute commande implique l'acceptation pleine et entière des présentes CGV. Elles sont remises au client avec le devis et sont consultables à tout moment sur <a href="CGV">lbcdemenagement.com</a>.</p>
      </LBlock>

      <LBlock n="2" title="Devis et commande">
        <p>Chaque prestation fait l'objet d'un devis gratuit, personnalisé et sans engagement, <strong>valable 30&nbsp;jours</strong>. Le devis détaille la formule retenue, l'inventaire déclaré, le volume estimé, les moyens engagés et le prix.</p>
        <p>La commande devient ferme à la signature du devis et au versement de l'acompte. Le devis signé prévaut sur toute estimation indicative affichée sur le site ou communiquée par téléphone.</p>
      </LBlock>

      <LBlock n="3" title="Prix et paiement">
        <p>Les prix sont indiqués en euros, <strong>nets de taxe</strong>&nbsp;: TVA non applicable, article 293&nbsp;B du Code général des impôts.</p>
        <p>Un <strong>acompte de 30&nbsp;%</strong> est demandé à la réservation pour bloquer la date. Le <strong>solde est exigible le jour de la prestation, à la fin du déchargement</strong>. Sur un déménagement réalisé sur plusieurs jours, le solde est exigible à la fin du déchargement du dernier jour, indiqué sur le devis.</p>
        <p>Moyens de paiement acceptés&nbsp;: carte bancaire, virement, chèque ou espèces.</p>
      </LBlock>

      <LBlock n="4" title="Prix ferme">
        <p><strong>Le prix du devis est le prix payé.</strong> Il est ferme et net&nbsp;: aucun supplément ne peut être ajouté le jour de la prestation.</p>
        <p>Ce prix ferme est établi sur la base de <strong>l'inventaire et des conditions d'accès déclarés par le client</strong> (volume, meubles, étages, ascenseur, distance de portage, stationnement). C'est la seule réserve, et elle joue dans un sens comme dans l'autre&nbsp;:</p>
        <ul className="legal-defs">
          <li>si la réalité correspond au devis, <strong>le prix ne bouge pas</strong>, quelles que soient les difficultés rencontrées par nos équipes&nbsp;;</li>
          <li>si la réalité s'en écarte nettement (mobilier non déclaré, étage ou portage différents, accès impraticable), <strong>l'ajustement est chiffré et convenu avec le client avant le début du chargement</strong>. Le client reste libre de le refuser et d'annuler sans frais à ce moment-là.</li>
        </ul>
        <p>Aucun ajustement ne peut être constaté, réclamé ou facturé une fois le chargement commencé.</p>
      </LBlock>

      <LBlock n="5" title="Droit de rétractation">
        <p>Un déménagement à date déterminée relève du transport de biens et n'ouvre pas, de plein droit, le délai de rétractation prévu à l'article L.221-18 du Code de la consommation (exclusion de l'article L.221-28, 3°).</p>
        <p><strong>LBC Déménagement l'accorde néanmoins à ses clients particuliers</strong>&nbsp;: le client qui a signé son devis à distance ou hors établissement dispose de <strong>14&nbsp;jours calendaires à compter de la signature</strong> pour se rétracter, sans motif et sans pénalité. L'acompte est alors <strong>intégralement remboursé sous 14&nbsp;jours</strong>.</p>
        <p>La rétractation s'exerce par simple courriel à <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a> ou par courrier. Si le client demande expressément que la prestation soit exécutée avant la fin de ce délai, il conserve son droit jusqu'au début du chargement.</p>
      </LBlock>

      <LBlock n="6" title="Annulation et report">
        <p>Passé le délai de rétractation, l'annulation par le client donne lieu aux retenues suivantes, calculées sur l'acompte versé et en fonction de la <strong>date du déménagement prévue au devis</strong>&nbsp;:</p>
        <ul className="legal-defs">
          <li><strong>Plus de 14&nbsp;jours avant</strong> — acompte intégralement remboursé.</li>
          <li><strong>Entre 14 et 7&nbsp;jours avant</strong> — 50&nbsp;% de l'acompte conservés, le reste remboursé.</li>
          <li><strong>Moins de 7&nbsp;jours avant</strong> — acompte conservé en totalité.</li>
        </ul>
        <p>Aucune somme autre que l'acompte n'est due en cas d'annulation, quel que soit le délai.</p>
        <p><strong>Le report est gratuit</strong> s'il est demandé plus de 7&nbsp;jours avant la date prévue, dans la limite des disponibilités&nbsp;; l'acompte est transféré sur la nouvelle date. Demandé à moins de 7&nbsp;jours, il est traité comme une annulation suivie d'une nouvelle commande.</p>
        <p>Si LBC Déménagement annule ou reporte de son fait, <strong>l'acompte est intégralement remboursé</strong> et une solution de remplacement est proposée au client.</p>
        <p>Les remboursements sont effectués sous 14&nbsp;jours par le moyen de paiement utilisé lors du versement.</p>
      </LBlock>

      <LBlock n="7" title="Obligations du client">
        <p>Le client s'engage à&nbsp;:</p>
        <ul className="legal-defs">
          <li>fournir des informations exactes et complètes sur le volume, le mobilier, les étages, l'ascenseur, la distance de portage et les conditions de stationnement&nbsp;;</li>
          <li>signaler tout objet fragile, précieux, de valeur, d'art ou de collection <strong>avant le déménagement</strong> (voir articles 8 et 12)&nbsp;;</li>
          <li>garantir l'accès aux lieux aux dates et heures convenues, et être présent ou représenté au chargement comme à la livraison&nbsp;;</li>
          <li>vider les meubles de leur contenu, sauf prestation d'emballage souscrite&nbsp;;</li>
          <li>conserver avec lui les biens listés à l'article 8.</li>
        </ul>
      </LBlock>

      <LBlock n="8" title="Biens exclus du transport">
        <p>Ne peuvent en aucun cas être confiés à LBC Déménagement, et ne sont couverts par aucune garantie s'ils l'étaient à notre insu&nbsp;:</p>
        <ul className="legal-defs">
          <li>les espèces, billets de banque, monnaies, titres, actions, obligations et valeurs de toute espèce&nbsp;;</li>
          <li>les bijoux, perles, pierres précieuses, orfèvrerie et métaux précieux&nbsp;;</li>
          <li>les documents irremplaçables (actes, papiers d'identité, contrats originaux)&nbsp;;</li>
          <li>les animaux vivants et les végétaux&nbsp;;</li>
          <li>les produits périssables&nbsp;;</li>
          <li>les produits inflammables, explosifs, corrosifs ou classés dangereux par la réglementation en vigueur.</li>
        </ul>
        <p>Le client conserve ces biens avec lui pendant toute la durée du déménagement.</p>
      </LBlock>

      <LBlock n="9" title="Obligations de LBC Déménagement">
        <p>LBC Déménagement s'engage à réaliser la prestation avec soin et professionnalisme, à la date convenue, avec un véhicule adapté aux biens déménagés, du matériel de protection en quantité suffisante et une équipe déclarée.</p>
        <p>Les prestations de démontage et de remontage portent sur des meubles meublants&nbsp;; elles n'incluent <strong>aucune fixation aux murs, plafonds ou planchers</strong>, ni aucun travail d'électricité, de plomberie ou d'installation de cuisine. Le branchement d'appareils électroménagers se limite au raccordement aux arrivées existantes, sans intervention sur les circuits, prises ou canalisations.</p>
        <p>En cas d'empêchement, LBC Déménagement en informe le client dans les meilleurs délais et lui propose une solution de remplacement, sans préjudice de l'article 6.</p>
      </LBlock>

      <LBlock n="10" title="Sous-traitance">
        <p>LBC Déménagement réalise ses prestations avec ses propres équipes. Elle se réserve la faculté, pour un chantier donné, de recourir à une entreprise de déménagement substituée.</p>
        <p>Dans ce cas, et conformément à ses engagements d'assurance&nbsp;: <strong>le client en est informé et donne son accord préalable</strong>, l'identité de l'entreprise substituée lui est communiquée, et LBC Déménagement vérifie sa qualité de déménageur professionnel ainsi que la validité de son assurance.</p>
        <p><strong>LBC Déménagement demeure seule responsable envers le client</strong> de la bonne exécution de la prestation.</p>
      </LBlock>

      <LBlock n="11" title="Assurance et indemnisation">
        <p>La prestation inclut, sans supplément, l'<strong>assurance de responsabilité contractuelle du déménageur</strong> souscrite par LBC Déménagement auprès de <strong>Generali IARD</strong> (contrat Polytrans, par l'intermédiaire de SARL SYLCO, 18 rue de Lépante, 06000 Nice) — police n°&nbsp;<Fill>numéro de police d'assurance figurant sur l'attestation</Fill>.</p>
        <p>Elle couvre les biens déménagés, y compris pendant les opérations de démontage, remontage, emballage et déballage, dans les limites suivantes&nbsp;:</p>
        <ul className="legal-defs">
          <li><strong>Déménagement de particuliers</strong> — indemnisation à concurrence de la valeur déclarée des biens, sans pouvoir excéder <strong>8&nbsp;000&nbsp;€ par objet</strong> et <strong>150&nbsp;000&nbsp;€ par déménagement</strong>. Franchise&nbsp;: <strong>350&nbsp;€</strong>.</li>
          <li><strong>Déménagement d'entreprises</strong> — mobilier et documents&nbsp;: <strong>230&nbsp;€ par m³</strong> confié&nbsp;; matériel et machines&nbsp;: 14&nbsp;€ par kilo, dans la limite de 15&nbsp;000&nbsp;€ par unité de charge&nbsp;; plafond de <strong>250&nbsp;000&nbsp;€ par déménagement</strong>. Franchise&nbsp;: <strong>750&nbsp;€</strong>.</li>
        </ul>
        <p>Sont exclus de cette garantie, conformément au contrat d'assurance&nbsp;: les dommages résultant d'une faute du client ou d'un emballage réalisé par lui, la vétusté et l'usure, les éraflures et craquellements de vernis, les meubles vermoulus, le désaccordement des instruments de musique, le décollement des meubles et des cadres, la panne d'un appareil qui ne résulte pas d'un événement caractérisé de transport, la perte de données sur support informatique, le coulage de liquides laissés dans des contenants mal fermés, ainsi que les biens visés à l'article 8.</p>
        <p><strong>Les objets d'art, sculptures, peintures, antiquités, fourrures, objets de curiosité ou de collection font l'objet de l'article 12&nbsp;: ils ne sont pas couverts par la garantie de base.</strong></p>
      </LBlock>

      <LBlock n="12" title="Objets d'art, de valeur et déclaration de valeur">
        <p>Les objets dont la valeur marchande est sans commune mesure avec leur valeur intrinsèque — <strong>tableaux, sculptures, objets d'art, antiquités, objets de collection, fourrures</strong> — sont exclus de la garantie de base du contrat d'assurance.</p>
        <p>Ils peuvent être couverts, et LBC Déménagement s'engage à en faire la demande, à la condition impérative que&nbsp;:</p>
        <ul className="legal-defs">
          <li>le client les déclare <strong>individuellement, avec leur valeur</strong>, sur la déclaration de valeur annexée au devis&nbsp;;</li>
          <li>cette déclaration soit établie <strong>avant le début du déménagement</strong>, pour permettre l'accord exprès de l'assureur&nbsp;;</li>
          <li>le client accepte la <strong>surprime correspondante, de 0,30&nbsp;% de la valeur déclarée</strong> (minimum 10&nbsp;€), qui lui est facturée à l'euro près, sans marge.</li>
        </ul>
        <p>Une fois cet accord obtenu, ces objets sont garantis <strong>sans franchise</strong>, dans la limite de 8&nbsp;000&nbsp;€ par objet et 150&nbsp;000&nbsp;€ par déménagement. Au-delà de ces plafonds, une extension reste possible sur demande formulée au moins deux jours ouvrés avant le déménagement.</p>
        <p><strong>À défaut de déclaration préalable, ces objets voyagent sans garantie.</strong> LBC Déménagement les protège et les cale avec le même soin, mais aucune indemnisation ne pourra être obtenue en cas de dommage. Cette information est rappelée sur chaque devis comportant des objets de cette nature.</p>
      </LBlock>

      <LBlock n="13" title="Livraison, réserves et réclamations">
        <p>La livraison s'effectue en présence du client ou de son représentant. Un état des lieux contradictoire est établi à la demande de l'une ou l'autre des parties.</p>
        <p>Toute avarie ou manquant doit être <strong>mentionné par écrit sur le document de livraison, le jour même</strong>. À défaut de réserves à la livraison, le client dispose d'un <strong>délai de 10&nbsp;jours</strong> pour adresser sa protestation motivée par lettre recommandée avec accusé de réception, conformément à l'article L.133-3 du Code de commerce.</p>
        <p>Toute réclamation peut également être adressée à <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>. LBC Déménagement s'engage à répondre sous 5&nbsp;jours ouvrés et à déclarer le sinistre à son assureur.</p>
      </LBlock>

      <LBlock n="14" title="Déménagement sur plusieurs jours">
        <p>Lorsque la distance ou le volume imposent un déménagement sur plusieurs jours, le devis indique la date de chargement et la date de livraison.</p>
        <p>Entre ces deux dates, <strong>le mobilier demeure sous la garde et la responsabilité de LBC Déménagement</strong>. Les véhicules sont fermés à clé, vitres closes, dispositifs antivol enclenchés, et stationnés en lieu clos ou gardienné. La garantie d'assurance court sans interruption du chargement à la livraison.</p>
      </LBlock>

      <LBlock n="15" title="Retard">
        <p>Les horaires communiqués sont des créneaux d'arrivée. En cas de retard prévisible, LBC Déménagement prévient le client dès qu'elle en a connaissance.</p>
        <p>Si un retard imputable à LBC Déménagement dépasse 24&nbsp;heures sur la date de livraison convenue, le client peut demander une indemnisation des frais directs qu'il a réellement engagés, sur justificatifs.</p>
        <p>Réciproquement, si l'équipe est immobilisée du fait du client (absence, accès non libéré, logement non prêt), le temps d'attente au-delà d'une heure peut être facturé au tarif horaire indiqué au devis, après information du client.</p>
      </LBlock>

      <LBlock n="16" title="Stationnement et accès">
        <p>Le client fait son affaire de la réservation de l'emplacement de stationnement auprès de sa mairie, aux deux adresses. LBC Déménagement l'assiste dans cette démarche sur simple demande et peut s'en charger, les frais d'autorisation restant à la charge du client et chiffrés au devis.</p>
        <p>Si le stationnement se révèle indisponible le jour J malgré l'autorisation obtenue, l'allongement de la distance de portage ne donne lieu à aucun supplément, conformément à l'article 4.</p>
      </LBlock>

      <LBlock n="17" title="Force majeure">
        <p>Aucune des parties n'est responsable d'un manquement résultant d'un événement de force majeure au sens de l'article 1218 du Code civil&nbsp;: notamment intempéries rendant la circulation dangereuse, catastrophe naturelle, incendie, blocage des voies, grève générale des transports, décision administrative.</p>
        <p>Dans ce cas, la prestation est reportée à la première date convenant aux deux parties, sans frais. Si le report est impossible, le contrat est résolu et <strong>l'acompte intégralement remboursé</strong>.</p>
      </LBlock>

      <LBlock n="18" title="Clients professionnels">
        <p>Pour les clients professionnels, tout retard de paiement entraîne de plein droit, sans mise en demeure préalable, des <strong>pénalités de retard</strong> au taux d'intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de 10&nbsp;points de pourcentage, ainsi qu'une <strong>indemnité forfaitaire de recouvrement de 40&nbsp;€</strong>, conformément à l'article L.441-10 du Code de commerce. Une indemnisation complémentaire peut être réclamée sur justificatifs si les frais de recouvrement exposés sont supérieurs.</p>
        <p>Le délai de paiement convenu ne peut excéder 30&nbsp;jours à compter de la date d'exécution de la prestation, sauf accord écrit contraire.</p>
      </LBlock>

      <LBlock n="19" title="Données personnelles">
        <p>Les données collectées sont nécessaires à l'établissement du devis et à l'exécution de la prestation. Leur traitement est décrit dans notre <a href="Confidentialite">politique de confidentialité</a>, qui précise les durées de conservation et les droits dont dispose le client.</p>
      </LBlock>

      <LBlock n="20" title="Médiation et litiges">
        <p>En cas de différend, le client adresse d'abord une réclamation écrite à <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>.</p>
        <p>À défaut de solution sous deux mois, le client consommateur peut recourir <strong>gratuitement</strong> au médiateur de la consommation dont relève LBC Déménagement&nbsp;: <Fill>nom du médiateur de la consommation, son adresse postale et l'adresse de son site internet</Fill>. La saisine du médiateur est possible dans un délai maximal d'un an à compter de la réclamation écrite.</p>
        <p>Le client peut également recourir à la plateforme européenne de règlement en ligne des litiges. À défaut d'accord amiable, les litiges relèvent des tribunaux compétents&nbsp;; le droit applicable est le droit français.</p>
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
              <a href="/">Accueil</a>
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
              {/* La note « mentions à compléter » a été retirée le 3 août 2026 : elle
                  s'adressait au propriétaire du site, pas aux clients, et affichée en
                  production elle annonçait au visiteur que le document légal était
                  incomplet, au moment précis où il vérifie qu'il a affaire à une vraie
                  entreprise. */}
              <nav className="legal-cross" aria-label="Autres pages légales">
                <a href="Mentions-legales">Mentions légales</a>
                <a href="Confidentialite">Confidentialité</a>
                <a href="CGV">CGV</a>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<LegalPage />);
