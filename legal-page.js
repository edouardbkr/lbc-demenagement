/* legal-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const LEGAL_UPDATED = "Août 2026";
function LBlock({
  n,
  title,
  children
}) {
  return React.createElement("section", {
    className: "legal-block reveal"
  }, React.createElement("h2", null, React.createElement("span", {
    className: "legal-n"
  }, n), title), children);
}
function Fill({
  children
}) {
  return React.createElement("span", {
    className: "legal-fill"
  }, "[\xC0 compl\xE9ter : ", children, "]");
}
function MentionsLegales() {
  return React.createElement(React.Fragment, null, React.createElement(LBlock, {
    n: "1",
    title: "\xC9diteur du site"
  }, React.createElement("p", null, "Le pr\xE9sent site est \xE9dit\xE9 par\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, React.createElement("strong", null, "D\xE9nomination\xA0:"), " LBC D\xC9M\xC9NAGEMENT \u2014 SAS (soci\xE9t\xE9 par actions simplifi\xE9e)"), React.createElement("li", null, React.createElement("strong", null, "Capital social\xA0:"), " 3 000\xA0\u20AC"), React.createElement("li", null, React.createElement("strong", null, "Si\xE8ge social\xA0:"), " 12 rue d'Italie, 06000 Nice, France"), React.createElement("li", null, React.createElement("strong", null, "SIREN\xA0:"), " 106\xA0789\xA0860"), React.createElement("li", null, React.createElement("strong", null, "SIRET\xA0:"), " 106\xA0789\xA0860\xA000017 (si\xE8ge)"), React.createElement("li", null, React.createElement("strong", null, "RCS\xA0:"), " Nice 106\xA0789\xA0860"), React.createElement("li", null, React.createElement("strong", null, "Code APE\xA0:"), " 4942Z \u2014 services de d\xE9m\xE9nagement"), React.createElement("li", null, React.createElement("strong", null, "N\xB0 TVA intracommunautaire\xA0:"), " FR29\xA0106\xA0789\xA0860"), React.createElement("li", null, React.createElement("strong", null, "Directeur de la publication\xA0:"), " Edouard Bakirian"), React.createElement("li", null, React.createElement("strong", null, "Contact\xA0:"), " ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), " \xB7 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com")))), React.createElement(LBlock, {
    n: "2",
    title: "H\xE9bergement"
  }, React.createElement("p", null, "Le site est h\xE9berg\xE9 par\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, React.createElement("strong", null, "H\xE9bergeur\xA0:"), " Cloudflare, Inc."), React.createElement("li", null, React.createElement("strong", null, "Adresse\xA0:"), " 101 Townsend Street, San Francisco, CA 94107, \xC9tats-Unis"), React.createElement("li", null, React.createElement("strong", null, "Contact\xA0:"), " ", React.createElement("a", {
    href: "https://www.cloudflare.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "cloudflare.com")))), React.createElement(LBlock, {
    n: "3",
    title: "Propri\xE9t\xE9 intellectuelle"
  }, React.createElement("p", null, "L'ensemble des \xE9l\xE9ments de ce site (textes, identit\xE9 visuelle, logo, mascotte, photographies, mise en page) est prot\xE9g\xE9 par le droit de la propri\xE9t\xE9 intellectuelle et demeure la propri\xE9t\xE9 exclusive de LBC D\xE9m\xE9nagement, sauf mention contraire. Toute reproduction, repr\xE9sentation ou exploitation, totale ou partielle, sans autorisation \xE9crite pr\xE9alable est interdite et constituerait une contrefa\xE7on.")), React.createElement(LBlock, {
    n: "4",
    title: "Donn\xE9es personnelles"
  }, React.createElement("p", null, "Les informations transmises via les formulaires de devis et de contact sont trait\xE9es conform\xE9ment \xE0 notre ", React.createElement("a", {
    href: "Confidentialite"
  }, "politique de confidentialit\xE9"), ". Vous disposez d'un droit d'acc\xE8s, de rectification et de suppression de vos donn\xE9es \u2014 voir la page d\xE9di\xE9e pour exercer vos droits.")), React.createElement(LBlock, {
    n: "5",
    title: "Cookies"
  }, React.createElement("p", null, "Ce site utilise uniquement les cookies strictement n\xE9cessaires \xE0 son fonctionnement et, le cas \xE9ch\xE9ant, des outils de mesure d'audience. Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels. Pour en savoir plus, consultez la ", React.createElement("a", {
    href: "Confidentialite"
  }, "politique de confidentialit\xE9"), ".")), React.createElement(LBlock, {
    n: "6",
    title: "Responsabilit\xE9"
  }, React.createElement("p", null, "LBC D\xE9m\xE9nagement s'efforce d'assurer l'exactitude des informations publi\xE9es sur ce site, sans garantie d'exhaustivit\xE9. Les tarifs et fourchettes de prix indiqu\xE9s sont donn\xE9s \xE0 titre indicatif\xA0; seul le devis personnalis\xE9 et sign\xE9 fait foi. LBC D\xE9m\xE9nagement ne saurait \xEAtre tenue responsable d'une indisponibilit\xE9 temporaire du site ou d'un dommage r\xE9sultant d'un usage non conforme.")));
}
function Confidentialite() {
  return React.createElement(React.Fragment, null, React.createElement(LBlock, {
    n: "1",
    title: "Responsable du traitement"
  }, React.createElement("p", null, "Le responsable du traitement des donn\xE9es collect\xE9es sur ce site est LBC D\xE9m\xE9nagement, 12 rue d'Italie, 06000 Nice. Pour toute question relative \xE0 vos donn\xE9es\xA0: ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"), ".")), React.createElement(LBlock, {
    n: "2",
    title: "Donn\xE9es collect\xE9es"
  }, React.createElement("p", null, "Nous ne collectons que les donn\xE9es que vous nous transmettez volontairement via nos formulaires\xA0:"), React.createElement("ul", {
    className: "legal-list"
  }, React.createElement("li", null, "Identit\xE9\xA0: nom, pr\xE9nom\xA0;"), React.createElement("li", null, "Coordonn\xE9es\xA0: t\xE9l\xE9phone, e-mail\xA0;"), React.createElement("li", null, "D\xE9tails du projet\xA0: adresses de d\xE9part et d'arriv\xE9e, surface, formule, date, inventaire et informations utiles au devis."))), React.createElement(LBlock, {
    n: "3",
    title: "Finalit\xE9s et base l\xE9gale"
  }, React.createElement("p", null, "Ces donn\xE9es sont utilis\xE9es pour\xA0: \xE9tablir votre devis, vous recontacter, organiser la prestation et assurer le suivi commercial. La base l\xE9gale est l'ex\xE9cution de mesures pr\xE9contractuelles et contractuelles \xE0 votre demande, ainsi que notre int\xE9r\xEAt l\xE9gitime \xE0 r\xE9pondre \xE0 vos sollicitations.")), React.createElement(LBlock, {
    n: "4",
    title: "Dur\xE9e de conservation"
  }, React.createElement("p", null, "Les donn\xE9es des prospects sont conserv\xE9es ", React.createElement("strong", null, "3\xA0ans"), " \xE0 compter du dernier contact. Les donn\xE9es des clients sont conserv\xE9es le temps de la relation contractuelle puis archiv\xE9es conform\xE9ment aux obligations l\xE9gales (notamment comptables).")), React.createElement(LBlock, {
    n: "5",
    title: "Destinataires"
  }, React.createElement("p", null, "Vos donn\xE9es sont destin\xE9es aux seules \xE9quipes de LBC D\xE9m\xE9nagement en charge du devis et de la prestation. Elles ne sont jamais vendues. Elles peuvent \xEAtre transmises \xE0 nos sous-traitants techniques (h\xE9bergement, envoi d'e-mails) dans la stricte mesure n\xE9cessaire, et encadr\xE9es par contrat.")), React.createElement(LBlock, {
    n: "6",
    title: "Vos droits"
  }, React.createElement("p", null, "Conform\xE9ment au RGPD, vous disposez des droits d'acc\xE8s, de rectification, d'effacement, de limitation, d'opposition et de portabilit\xE9 de vos donn\xE9es. Pour les exercer, \xE9crivez \xE0 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"), " en justifiant de votre identit\xE9."), React.createElement("p", null, "Vous pouvez \xE9galement introduire une r\xE9clamation aupr\xE8s de la CNIL (", React.createElement("a", {
    href: "https://www.cnil.fr",
    target: "_blank",
    rel: "noopener"
  }, "www.cnil.fr"), ") si vous estimez que vos droits ne sont pas respect\xE9s.")), React.createElement(LBlock, {
    n: "7",
    title: "Cookies"
  }, React.createElement("p", null, "Seuls les cookies n\xE9cessaires au bon fonctionnement du site et, le cas \xE9ch\xE9ant, \xE0 la mesure d'audience anonymis\xE9e sont d\xE9pos\xE9s. Vous gardez la ma\xEEtrise des cookies via les r\xE9glages de votre navigateur.")));
}
function CGV() {
  return React.createElement(React.Fragment, null, React.createElement(LBlock, {
    n: "1",
    title: "Objet et champ d'application"
  }, React.createElement("p", null, "Les pr\xE9sentes conditions g\xE9n\xE9rales de vente (CGV) r\xE9gissent les prestations de d\xE9m\xE9nagement et les services associ\xE9s fournis par ", React.createElement("strong", null, "LBC D\xC9M\xC9NAGEMENT"), ", SAS au capital de 3\xA0000\xA0\u20AC, dont le si\xE8ge est 12 rue d'Italie, 06000 Nice, SIRET 106\xA0789\xA0860\xA000017, RCS Nice, code APE 4942Z, \xE0 ses clients particuliers et professionnels."), React.createElement("p", null, "LBC D\xE9m\xE9nagement exerce sous l'attestation de capacit\xE9 professionnelle en transport routier l\xE9ger de marchandises n\xB0\xA0JME932603100."), React.createElement("p", null, "Toute commande implique l'acceptation pleine et enti\xE8re des pr\xE9sentes CGV. Elles sont remises au client avec le devis et sont consultables \xE0 tout moment sur ", React.createElement("a", {
    href: "CGV"
  }, "lbcdemenagement.com"), ".")), React.createElement(LBlock, {
    n: "2",
    title: "Devis et commande"
  }, React.createElement("p", null, "Chaque prestation fait l'objet d'un devis gratuit, personnalis\xE9 et sans engagement, ", React.createElement("strong", null, "valable 30\xA0jours"), ". Le devis d\xE9taille la formule retenue, l'inventaire d\xE9clar\xE9, le volume estim\xE9, les moyens engag\xE9s et le prix."), React.createElement("p", null, "La commande devient ferme \xE0 la signature du devis et au versement de l'acompte. Le devis sign\xE9 pr\xE9vaut sur toute estimation indicative affich\xE9e sur le site ou communiqu\xE9e par t\xE9l\xE9phone.")), React.createElement(LBlock, {
    n: "3",
    title: "Prix et paiement"
  }, React.createElement("p", null, "Les prix sont indiqu\xE9s en euros, ", React.createElement("strong", null, "nets de taxe"), "\xA0: TVA non applicable, article 293\xA0B du Code g\xE9n\xE9ral des imp\xF4ts."), React.createElement("p", null, "Un ", React.createElement("strong", null, "acompte de 30\xA0%"), " est demand\xE9 \xE0 la r\xE9servation pour bloquer la date. Le ", React.createElement("strong", null, "solde est exigible le jour de la prestation, \xE0 la fin du d\xE9chargement"), ". Sur un d\xE9m\xE9nagement r\xE9alis\xE9 sur plusieurs jours, le solde est exigible \xE0 la fin du d\xE9chargement du dernier jour, indiqu\xE9 sur le devis."), React.createElement("p", null, "Moyens de paiement accept\xE9s\xA0: carte bancaire, virement, ch\xE8que ou esp\xE8ces.")), React.createElement(LBlock, {
    n: "4",
    title: "Prix ferme"
  }, React.createElement("p", null, React.createElement("strong", null, "Le prix du devis est le prix pay\xE9."), " Il est ferme et net\xA0: aucun suppl\xE9ment ne peut \xEAtre ajout\xE9 le jour de la prestation."), React.createElement("p", null, "Ce prix ferme est \xE9tabli sur la base de ", React.createElement("strong", null, "l'inventaire et des conditions d'acc\xE8s d\xE9clar\xE9s par le client"), " (volume, meubles, \xE9tages, ascenseur, distance de portage, stationnement). C'est la seule r\xE9serve, et elle joue dans un sens comme dans l'autre\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, "si la r\xE9alit\xE9 correspond au devis, ", React.createElement("strong", null, "le prix ne bouge pas"), ", quelles que soient les difficult\xE9s rencontr\xE9es par nos \xE9quipes\xA0;"), React.createElement("li", null, "si la r\xE9alit\xE9 s'en \xE9carte nettement (mobilier non d\xE9clar\xE9, \xE9tage ou portage diff\xE9rents, acc\xE8s impraticable), ", React.createElement("strong", null, "l'ajustement est chiffr\xE9 et convenu avec le client avant le d\xE9but du chargement"), ". Le client reste libre de le refuser et d'annuler sans frais \xE0 ce moment-l\xE0.")), React.createElement("p", null, "Aucun ajustement ne peut \xEAtre constat\xE9, r\xE9clam\xE9 ou factur\xE9 une fois le chargement commenc\xE9.")), React.createElement(LBlock, {
    n: "5",
    title: "Droit de r\xE9tractation"
  }, React.createElement("p", null, "Un d\xE9m\xE9nagement \xE0 date d\xE9termin\xE9e rel\xE8ve du transport de biens et n'ouvre pas, de plein droit, le d\xE9lai de r\xE9tractation pr\xE9vu \xE0 l'article L.221-18 du Code de la consommation (exclusion de l'article L.221-28, 3\xB0)."), React.createElement("p", null, React.createElement("strong", null, "LBC D\xE9m\xE9nagement l'accorde n\xE9anmoins \xE0 ses clients particuliers"), "\xA0: le client qui a sign\xE9 son devis \xE0 distance ou hors \xE9tablissement dispose de ", React.createElement("strong", null, "14\xA0jours calendaires \xE0 compter de la signature"), " pour se r\xE9tracter, sans motif et sans p\xE9nalit\xE9. L'acompte est alors ", React.createElement("strong", null, "int\xE9gralement rembours\xE9 sous 14\xA0jours"), "."), React.createElement("p", null, "La r\xE9tractation s'exerce par simple courriel \xE0 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"), " ou par courrier. Si le client demande express\xE9ment que la prestation soit ex\xE9cut\xE9e avant la fin de ce d\xE9lai, il conserve son droit jusqu'au d\xE9but du chargement.")), React.createElement(LBlock, {
    n: "6",
    title: "Annulation et report"
  }, React.createElement("p", null, "Pass\xE9 le d\xE9lai de r\xE9tractation, l'annulation par le client donne lieu aux retenues suivantes, calcul\xE9es sur l'acompte vers\xE9 et en fonction de la ", React.createElement("strong", null, "date du d\xE9m\xE9nagement pr\xE9vue au devis"), "\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, React.createElement("strong", null, "Plus de 14\xA0jours avant"), " \u2014 acompte int\xE9gralement rembours\xE9."), React.createElement("li", null, React.createElement("strong", null, "Entre 14 et 7\xA0jours avant"), " \u2014 50\xA0% de l'acompte conserv\xE9s, le reste rembours\xE9."), React.createElement("li", null, React.createElement("strong", null, "Moins de 7\xA0jours avant"), " \u2014 acompte conserv\xE9 en totalit\xE9.")), React.createElement("p", null, "Aucune somme autre que l'acompte n'est due en cas d'annulation, quel que soit le d\xE9lai."), React.createElement("p", null, React.createElement("strong", null, "Le report est gratuit"), " s'il est demand\xE9 plus de 7\xA0jours avant la date pr\xE9vue, dans la limite des disponibilit\xE9s\xA0; l'acompte est transf\xE9r\xE9 sur la nouvelle date. Demand\xE9 \xE0 moins de 7\xA0jours, il est trait\xE9 comme une annulation suivie d'une nouvelle commande."), React.createElement("p", null, "Si LBC D\xE9m\xE9nagement annule ou reporte de son fait, ", React.createElement("strong", null, "l'acompte est int\xE9gralement rembours\xE9"), " et une solution de remplacement est propos\xE9e au client."), React.createElement("p", null, "Les remboursements sont effectu\xE9s sous 14\xA0jours par le moyen de paiement utilis\xE9 lors du versement.")), React.createElement(LBlock, {
    n: "7",
    title: "Obligations du client"
  }, React.createElement("p", null, "Le client s'engage \xE0\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, "fournir des informations exactes et compl\xE8tes sur le volume, le mobilier, les \xE9tages, l'ascenseur, la distance de portage et les conditions de stationnement\xA0;"), React.createElement("li", null, "signaler tout objet fragile, pr\xE9cieux, de valeur, d'art ou de collection ", React.createElement("strong", null, "avant le d\xE9m\xE9nagement"), " (voir articles 8 et 12)\xA0;"), React.createElement("li", null, "garantir l'acc\xE8s aux lieux aux dates et heures convenues, et \xEAtre pr\xE9sent ou repr\xE9sent\xE9 au chargement comme \xE0 la livraison\xA0;"), React.createElement("li", null, "vider les meubles de leur contenu, sauf prestation d'emballage souscrite\xA0;"), React.createElement("li", null, "conserver avec lui les biens list\xE9s \xE0 l'article 8."))), React.createElement(LBlock, {
    n: "8",
    title: "Biens exclus du transport"
  }, React.createElement("p", null, "Ne peuvent en aucun cas \xEAtre confi\xE9s \xE0 LBC D\xE9m\xE9nagement, et ne sont couverts par aucune garantie s'ils l'\xE9taient \xE0 notre insu\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, "les esp\xE8ces, billets de banque, monnaies, titres, actions, obligations et valeurs de toute esp\xE8ce\xA0;"), React.createElement("li", null, "les bijoux, perles, pierres pr\xE9cieuses, orf\xE8vrerie et m\xE9taux pr\xE9cieux\xA0;"), React.createElement("li", null, "les documents irrempla\xE7ables (actes, papiers d'identit\xE9, contrats originaux)\xA0;"), React.createElement("li", null, "les animaux vivants et les v\xE9g\xE9taux\xA0;"), React.createElement("li", null, "les produits p\xE9rissables\xA0;"), React.createElement("li", null, "les produits inflammables, explosifs, corrosifs ou class\xE9s dangereux par la r\xE9glementation en vigueur.")), React.createElement("p", null, "Le client conserve ces biens avec lui pendant toute la dur\xE9e du d\xE9m\xE9nagement.")), React.createElement(LBlock, {
    n: "9",
    title: "Obligations de LBC D\xE9m\xE9nagement"
  }, React.createElement("p", null, "LBC D\xE9m\xE9nagement s'engage \xE0 r\xE9aliser la prestation avec soin et professionnalisme, \xE0 la date convenue, avec un v\xE9hicule adapt\xE9 aux biens d\xE9m\xE9nag\xE9s, du mat\xE9riel de protection en quantit\xE9 suffisante et une \xE9quipe d\xE9clar\xE9e."), React.createElement("p", null, "Les prestations de d\xE9montage et de remontage portent sur des meubles meublants\xA0; elles n'incluent ", React.createElement("strong", null, "aucune fixation aux murs, plafonds ou planchers"), ", ni aucun travail d'\xE9lectricit\xE9, de plomberie ou d'installation de cuisine. Le branchement d'appareils \xE9lectrom\xE9nagers se limite au raccordement aux arriv\xE9es existantes, sans intervention sur les circuits, prises ou canalisations."), React.createElement("p", null, "En cas d'emp\xEAchement, LBC D\xE9m\xE9nagement en informe le client dans les meilleurs d\xE9lais et lui propose une solution de remplacement, sans pr\xE9judice de l'article 6.")), React.createElement(LBlock, {
    n: "10",
    title: "Sous-traitance"
  }, React.createElement("p", null, "LBC D\xE9m\xE9nagement r\xE9alise ses prestations avec ses propres \xE9quipes. Elle se r\xE9serve la facult\xE9, pour un chantier donn\xE9, de recourir \xE0 une entreprise de d\xE9m\xE9nagement substitu\xE9e."), React.createElement("p", null, "Dans ce cas, et conform\xE9ment \xE0 ses engagements d'assurance\xA0: ", React.createElement("strong", null, "le client en est inform\xE9 et donne son accord pr\xE9alable"), ", l'identit\xE9 de l'entreprise substitu\xE9e lui est communiqu\xE9e, et LBC D\xE9m\xE9nagement v\xE9rifie sa qualit\xE9 de d\xE9m\xE9nageur professionnel ainsi que la validit\xE9 de son assurance."), React.createElement("p", null, React.createElement("strong", null, "LBC D\xE9m\xE9nagement demeure seule responsable envers le client"), " de la bonne ex\xE9cution de la prestation.")), React.createElement(LBlock, {
    n: "11",
    title: "Assurance et indemnisation"
  }, React.createElement("p", null, "La prestation inclut, sans suppl\xE9ment, l'", React.createElement("strong", null, "assurance de responsabilit\xE9 contractuelle du d\xE9m\xE9nageur"), " souscrite par LBC D\xE9m\xE9nagement aupr\xE8s de ", React.createElement("strong", null, "Generali IARD"), " (contrat Polytrans, par l'interm\xE9diaire de SARL SYLCO, 18 rue de L\xE9pante, 06000 Nice) \u2014 police n\xB0\xA0", React.createElement(Fill, null, "num\xE9ro de police d'assurance figurant sur l'attestation"), "."), React.createElement("p", null, "Elle couvre les biens d\xE9m\xE9nag\xE9s, y compris pendant les op\xE9rations de d\xE9montage, remontage, emballage et d\xE9ballage, dans les limites suivantes\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, React.createElement("strong", null, "D\xE9m\xE9nagement de particuliers"), " \u2014 indemnisation \xE0 concurrence de la valeur d\xE9clar\xE9e des biens, sans pouvoir exc\xE9der ", React.createElement("strong", null, "8\xA0000\xA0\u20AC par objet"), " et ", React.createElement("strong", null, "150\xA0000\xA0\u20AC par d\xE9m\xE9nagement"), ". Franchise\xA0: ", React.createElement("strong", null, "350\xA0\u20AC"), "."), React.createElement("li", null, React.createElement("strong", null, "D\xE9m\xE9nagement d'entreprises"), " \u2014 mobilier et documents\xA0: ", React.createElement("strong", null, "230\xA0\u20AC par m\xB3"), " confi\xE9\xA0; mat\xE9riel et machines\xA0: 14\xA0\u20AC par kilo, dans la limite de 15\xA0000\xA0\u20AC par unit\xE9 de charge\xA0; plafond de ", React.createElement("strong", null, "250\xA0000\xA0\u20AC par d\xE9m\xE9nagement"), ". Franchise\xA0: ", React.createElement("strong", null, "750\xA0\u20AC"), ".")), React.createElement("p", null, "Sont exclus de cette garantie, conform\xE9ment au contrat d'assurance\xA0: les dommages r\xE9sultant d'une faute du client ou d'un emballage r\xE9alis\xE9 par lui, la v\xE9tust\xE9 et l'usure, les \xE9raflures et craquellements de vernis, les meubles vermoulus, le d\xE9saccordement des instruments de musique, le d\xE9collement des meubles et des cadres, la panne d'un appareil qui ne r\xE9sulte pas d'un \xE9v\xE9nement caract\xE9ris\xE9 de transport, la perte de donn\xE9es sur support informatique, le coulage de liquides laiss\xE9s dans des contenants mal ferm\xE9s, ainsi que les biens vis\xE9s \xE0 l'article 8."), React.createElement("p", null, React.createElement("strong", null, "Les objets d'art, sculptures, peintures, antiquit\xE9s, fourrures, objets de curiosit\xE9 ou de collection font l'objet de l'article 12\xA0: ils ne sont pas couverts par la garantie de base."))), React.createElement(LBlock, {
    n: "12",
    title: "Objets d'art, de valeur et d\xE9claration de valeur"
  }, React.createElement("p", null, "Les objets dont la valeur marchande est sans commune mesure avec leur valeur intrins\xE8que \u2014 ", React.createElement("strong", null, "tableaux, sculptures, objets d'art, antiquit\xE9s, objets de collection, fourrures"), " \u2014 sont exclus de la garantie de base du contrat d'assurance."), React.createElement("p", null, "Ils peuvent \xEAtre couverts, et LBC D\xE9m\xE9nagement s'engage \xE0 en faire la demande, \xE0 la condition imp\xE9rative que\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, "le client les d\xE9clare ", React.createElement("strong", null, "individuellement, avec leur valeur"), ", sur la d\xE9claration de valeur annex\xE9e au devis\xA0;"), React.createElement("li", null, "cette d\xE9claration soit \xE9tablie ", React.createElement("strong", null, "avant le d\xE9but du d\xE9m\xE9nagement"), ", pour permettre l'accord expr\xE8s de l'assureur\xA0;"), React.createElement("li", null, "le client accepte la ", React.createElement("strong", null, "surprime correspondante, de 0,30\xA0% de la valeur d\xE9clar\xE9e"), " (minimum 10\xA0\u20AC), qui lui est factur\xE9e \xE0 l'euro pr\xE8s, sans marge.")), React.createElement("p", null, "Une fois cet accord obtenu, ces objets sont garantis ", React.createElement("strong", null, "sans franchise"), ", dans la limite de 8\xA0000\xA0\u20AC par objet et 150\xA0000\xA0\u20AC par d\xE9m\xE9nagement. Au-del\xE0 de ces plafonds, une extension reste possible sur demande formul\xE9e au moins deux jours ouvr\xE9s avant le d\xE9m\xE9nagement."), React.createElement("p", null, React.createElement("strong", null, "\xC0 d\xE9faut de d\xE9claration pr\xE9alable, ces objets voyagent sans garantie."), " LBC D\xE9m\xE9nagement les prot\xE8ge et les cale avec le m\xEAme soin, mais aucune indemnisation ne pourra \xEAtre obtenue en cas de dommage. Cette information est rappel\xE9e sur chaque devis comportant des objets de cette nature.")), React.createElement(LBlock, {
    n: "13",
    title: "Livraison, r\xE9serves et r\xE9clamations"
  }, React.createElement("p", null, "La livraison s'effectue en pr\xE9sence du client ou de son repr\xE9sentant. Un \xE9tat des lieux contradictoire est \xE9tabli \xE0 la demande de l'une ou l'autre des parties."), React.createElement("p", null, "Toute avarie ou manquant doit \xEAtre ", React.createElement("strong", null, "mentionn\xE9 par \xE9crit sur le document de livraison, le jour m\xEAme"), ". \xC0 d\xE9faut de r\xE9serves \xE0 la livraison, le client dispose d'un ", React.createElement("strong", null, "d\xE9lai de 10\xA0jours"), " pour adresser sa protestation motiv\xE9e par lettre recommand\xE9e avec accus\xE9 de r\xE9ception, conform\xE9ment \xE0 l'article L.133-3 du Code de commerce."), React.createElement("p", null, "Toute r\xE9clamation peut \xE9galement \xEAtre adress\xE9e \xE0 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"), ". LBC D\xE9m\xE9nagement s'engage \xE0 r\xE9pondre sous 5\xA0jours ouvr\xE9s et \xE0 d\xE9clarer le sinistre \xE0 son assureur.")), React.createElement(LBlock, {
    n: "14",
    title: "D\xE9m\xE9nagement sur plusieurs jours"
  }, React.createElement("p", null, "Lorsque la distance ou le volume imposent un d\xE9m\xE9nagement sur plusieurs jours, le devis indique la date de chargement et la date de livraison."), React.createElement("p", null, "Entre ces deux dates, ", React.createElement("strong", null, "le mobilier demeure sous la garde et la responsabilit\xE9 de LBC D\xE9m\xE9nagement"), ". Les v\xE9hicules sont ferm\xE9s \xE0 cl\xE9, vitres closes, dispositifs antivol enclench\xE9s, et stationn\xE9s en lieu clos ou gardienn\xE9. La garantie d'assurance court sans interruption du chargement \xE0 la livraison.")), React.createElement(LBlock, {
    n: "15",
    title: "Retard"
  }, React.createElement("p", null, "Les horaires communiqu\xE9s sont des cr\xE9neaux d'arriv\xE9e. En cas de retard pr\xE9visible, LBC D\xE9m\xE9nagement pr\xE9vient le client d\xE8s qu'elle en a connaissance."), React.createElement("p", null, "Si un retard imputable \xE0 LBC D\xE9m\xE9nagement d\xE9passe 24\xA0heures sur la date de livraison convenue, le client peut demander une indemnisation des frais directs qu'il a r\xE9ellement engag\xE9s, sur justificatifs."), React.createElement("p", null, "R\xE9ciproquement, si l'\xE9quipe est immobilis\xE9e du fait du client (absence, acc\xE8s non lib\xE9r\xE9, logement non pr\xEAt), le temps d'attente au-del\xE0 d'une heure peut \xEAtre factur\xE9 au tarif horaire indiqu\xE9 au devis, apr\xE8s information du client.")), React.createElement(LBlock, {
    n: "16",
    title: "Stationnement et acc\xE8s"
  }, React.createElement("p", null, "Le client fait son affaire de la r\xE9servation de l'emplacement de stationnement aupr\xE8s de sa mairie, aux deux adresses. LBC D\xE9m\xE9nagement l'assiste dans cette d\xE9marche sur simple demande et peut s'en charger, les frais d'autorisation restant \xE0 la charge du client et chiffr\xE9s au devis."), React.createElement("p", null, "Si le stationnement se r\xE9v\xE8le indisponible le jour J malgr\xE9 l'autorisation obtenue, l'allongement de la distance de portage ne donne lieu \xE0 aucun suppl\xE9ment, conform\xE9ment \xE0 l'article 4.")), React.createElement(LBlock, {
    n: "17",
    title: "Force majeure"
  }, React.createElement("p", null, "Aucune des parties n'est responsable d'un manquement r\xE9sultant d'un \xE9v\xE9nement de force majeure au sens de l'article 1218 du Code civil\xA0: notamment intemp\xE9ries rendant la circulation dangereuse, catastrophe naturelle, incendie, blocage des voies, gr\xE8ve g\xE9n\xE9rale des transports, d\xE9cision administrative."), React.createElement("p", null, "Dans ce cas, la prestation est report\xE9e \xE0 la premi\xE8re date convenant aux deux parties, sans frais. Si le report est impossible, le contrat est r\xE9solu et ", React.createElement("strong", null, "l'acompte int\xE9gralement rembours\xE9"), ".")), React.createElement(LBlock, {
    n: "18",
    title: "Clients professionnels"
  }, React.createElement("p", null, "Pour les clients professionnels, tout retard de paiement entra\xEEne de plein droit, sans mise en demeure pr\xE9alable, des ", React.createElement("strong", null, "p\xE9nalit\xE9s de retard"), " au taux d'int\xE9r\xEAt appliqu\xE9 par la Banque centrale europ\xE9enne \xE0 son op\xE9ration de refinancement la plus r\xE9cente, major\xE9 de 10\xA0points de pourcentage, ainsi qu'une ", React.createElement("strong", null, "indemnit\xE9 forfaitaire de recouvrement de 40\xA0\u20AC"), ", conform\xE9ment \xE0 l'article L.441-10 du Code de commerce. Une indemnisation compl\xE9mentaire peut \xEAtre r\xE9clam\xE9e sur justificatifs si les frais de recouvrement expos\xE9s sont sup\xE9rieurs."), React.createElement("p", null, "Le d\xE9lai de paiement convenu ne peut exc\xE9der 30\xA0jours \xE0 compter de la date d'ex\xE9cution de la prestation, sauf accord \xE9crit contraire.")), React.createElement(LBlock, {
    n: "19",
    title: "Donn\xE9es personnelles"
  }, React.createElement("p", null, "Les donn\xE9es collect\xE9es sont n\xE9cessaires \xE0 l'\xE9tablissement du devis et \xE0 l'ex\xE9cution de la prestation. Leur traitement est d\xE9crit dans notre ", React.createElement("a", {
    href: "Confidentialite"
  }, "politique de confidentialit\xE9"), ", qui pr\xE9cise les dur\xE9es de conservation et les droits dont dispose le client.")), React.createElement(LBlock, {
    n: "20",
    title: "M\xE9diation et litiges"
  }, React.createElement("p", null, "En cas de diff\xE9rend, le client adresse d'abord une r\xE9clamation \xE9crite \xE0 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"), "."), React.createElement("p", null, "\xC0 d\xE9faut de solution sous deux mois, le client consommateur peut recourir ", React.createElement("strong", null, "gratuitement"), " au m\xE9diateur de la consommation dont rel\xE8ve LBC D\xE9m\xE9nagement\xA0: ", React.createElement(Fill, null, "nom du m\xE9diateur de la consommation, son adresse postale et l'adresse de son site internet"), ". La saisine du m\xE9diateur est possible dans un d\xE9lai maximal d'un an \xE0 compter de la r\xE9clamation \xE9crite."), React.createElement("p", null, "Le client peut \xE9galement recourir \xE0 la plateforme europ\xE9enne de r\xE8glement en ligne des litiges. \xC0 d\xE9faut d'accord amiable, les litiges rel\xE8vent des tribunaux comp\xE9tents\xA0; le droit applicable est le droit fran\xE7ais.")));
}
const LEGAL_DOCS = {
  mentions: {
    crumb: "Mentions légales",
    title: "Mentions légales",
    lede: "Les informations légales relatives à l'éditeur de ce site et à son hébergement.",
    body: React.createElement(MentionsLegales, null)
  },
  confidentialite: {
    crumb: "Confidentialité",
    title: "Politique de confidentialité",
    lede: "Comment nous collectons, utilisons et protégeons vos données personnelles — et les droits dont vous disposez.",
    body: React.createElement(Confidentialite, null)
  },
  cgv: {
    crumb: "CGV",
    title: "Conditions générales de vente",
    lede: "Les conditions qui encadrent nos prestations de déménagement et services associés.",
    body: React.createElement(CGV, null)
  }
};
function LegalPage() {
  useScrollReveal();
  const key = document.body.dataset.legal || "mentions";
  const doc = LEGAL_DOCS[key] || LEGAL_DOCS.mentions;
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, doc.crumb)), React.createElement("h1", null, doc.title), React.createElement("p", {
    className: "lede"
  }, doc.lede))), React.createElement("section", {
    className: "sec legal-sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "legal-doc"
  }, React.createElement("p", {
    className: "legal-updated"
  }, "Derni\xE8re mise \xE0 jour\xA0: ", LEGAL_UPDATED), doc.body, React.createElement("nav", {
    className: "legal-cross",
    "aria-label": "Autres pages l\xE9gales"
  }, React.createElement("a", {
    href: "Mentions-legales"
  }, "Mentions l\xE9gales"), React.createElement("a", {
    href: "Confidentialite"
  }, "Confidentialit\xE9"), React.createElement("a", {
    href: "CGV"
  }, "CGV")))))), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(LegalPage, null));
  try { Object.assign(window, { LBlock, Fill, MentionsLegales, Confidentialite, CGV, LegalPage }); } catch (e) {}
})();
