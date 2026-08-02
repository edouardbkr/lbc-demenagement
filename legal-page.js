/* legal-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const LEGAL_UPDATED = "Juin 2026";
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
  }, React.createElement("li", null, React.createElement("strong", null, "D\xE9nomination\xA0:"), " LBC* Les Bras Cass\xE9s \u2014 SAS"), React.createElement("li", null, React.createElement("strong", null, "Capital social\xA0:"), " 3 000\xA0\u20AC"), React.createElement("li", null, React.createElement("strong", null, "Si\xE8ge social\xA0:"), " 12 rue d'Italie, 06000 Nice, France"), React.createElement("li", null, React.createElement("strong", null, "SIRET\xA0:"), " ", React.createElement(Fill, null, "num\xE9ro SIRET \xE0 14 chiffres")), React.createElement("li", null, React.createElement("strong", null, "RCS\xA0:"), " ", React.createElement(Fill, null, "ville et num\xE9ro RCS")), React.createElement("li", null, React.createElement("strong", null, "N\xB0 TVA intracommunautaire\xA0:"), " ", React.createElement(Fill, null, "FR + num\xE9ro")), React.createElement("li", null, React.createElement("strong", null, "Directeur de la publication\xA0:"), " ", React.createElement(Fill, null, "nom du repr\xE9sentant l\xE9gal")), React.createElement("li", null, React.createElement("strong", null, "Contact\xA0:"), " ", React.createElement("a", {
    href: "tel:+33615976577"
  }, "06 15 97 65 77"), " \xB7 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com")))), React.createElement(LBlock, {
    n: "2",
    title: "H\xE9bergement"
  }, React.createElement("p", null, "Le site est h\xE9berg\xE9 par\xA0:"), React.createElement("ul", {
    className: "legal-defs"
  }, React.createElement("li", null, React.createElement("strong", null, "H\xE9bergeur\xA0:"), " ", React.createElement(Fill, null, "nom de l'h\xE9bergeur")), React.createElement("li", null, React.createElement("strong", null, "Adresse\xA0:"), " ", React.createElement(Fill, null, "adresse de l'h\xE9bergeur")), React.createElement("li", null, React.createElement("strong", null, "Contact\xA0:"), " ", React.createElement(Fill, null, "t\xE9l\xE9phone / e-mail de l'h\xE9bergeur")))), React.createElement(LBlock, {
    n: "3",
    title: "Propri\xE9t\xE9 intellectuelle"
  }, React.createElement("p", null, "L'ensemble des \xE9l\xE9ments de ce site (textes, identit\xE9 visuelle, logo, mascotte, photographies, mise en page) est prot\xE9g\xE9 par le droit de la propri\xE9t\xE9 intellectuelle et demeure la propri\xE9t\xE9 exclusive de LBC* Les Bras Cass\xE9s, sauf mention contraire. Toute reproduction, repr\xE9sentation ou exploitation, totale ou partielle, sans autorisation \xE9crite pr\xE9alable est interdite et constituerait une contrefa\xE7on.")), React.createElement(LBlock, {
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
  }, React.createElement("p", null, "LBC* s'efforce d'assurer l'exactitude des informations publi\xE9es sur ce site, sans garantie d'exhaustivit\xE9. Les tarifs et fourchettes de prix indiqu\xE9s sont donn\xE9s \xE0 titre indicatif\xA0; seul le devis personnalis\xE9 et sign\xE9 fait foi. LBC* ne saurait \xEAtre tenue responsable d'une indisponibilit\xE9 temporaire du site ou d'un dommage r\xE9sultant d'un usage non conforme.")));
}
function Confidentialite() {
  return React.createElement(React.Fragment, null, React.createElement(LBlock, {
    n: "1",
    title: "Responsable du traitement"
  }, React.createElement("p", null, "Le responsable du traitement des donn\xE9es collect\xE9es sur ce site est LBC* Les Bras Cass\xE9s, 12 rue d'Italie, 06000 Nice. Pour toute question relative \xE0 vos donn\xE9es\xA0: ", React.createElement("a", {
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
  }, React.createElement("p", null, "Les donn\xE9es des prospects sont conserv\xE9es ", React.createElement(Fill, null, "dur\xE9e, ex. 3 ans"), " \xE0 compter du dernier contact. Les donn\xE9es des clients sont conserv\xE9es le temps de la relation contractuelle puis archiv\xE9es conform\xE9ment aux obligations l\xE9gales (notamment comptables).")), React.createElement(LBlock, {
    n: "5",
    title: "Destinataires"
  }, React.createElement("p", null, "Vos donn\xE9es sont destin\xE9es aux seules \xE9quipes de LBC* en charge du devis et de la prestation. Elles ne sont jamais vendues. Elles peuvent \xEAtre transmises \xE0 nos sous-traitants techniques (h\xE9bergement, envoi d'e-mails) dans la stricte mesure n\xE9cessaire, et encadr\xE9es par contrat.")), React.createElement(LBlock, {
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
    title: "Objet"
  }, React.createElement("p", null, "Les pr\xE9sentes conditions g\xE9n\xE9rales de vente (CGV) r\xE9gissent les prestations de d\xE9m\xE9nagement, de stockage et services associ\xE9s fournis par LBC* Les Bras Cass\xE9s \xE0 ses clients particuliers et professionnels. Toute commande implique l'acceptation pleine et enti\xE8re des pr\xE9sentes CGV.")), React.createElement(LBlock, {
    n: "2",
    title: "Devis et commande"
  }, React.createElement("p", null, "Chaque prestation fait l'objet d'un devis gratuit et personnalis\xE9, valable ", React.createElement(Fill, null, "dur\xE9e de validit\xE9, ex. 30 jours"), ". La commande est ferme \xE0 la signature du devis et au versement de l'acompte \xE9ventuel. Le devis sign\xE9 pr\xE9vaut sur toute estimation indicative affich\xE9e sur le site.")), React.createElement(LBlock, {
    n: "3",
    title: "Prix et paiement"
  }, React.createElement("p", null, "Les prix sont indiqu\xE9s en euros, ", React.createElement(Fill, null, "HT ou TTC, pr\xE9ciser le taux de TVA"), ". Un acompte de ", React.createElement(Fill, null, "pourcentage, ex. 30 %"), " peut \xEAtre demand\xE9 \xE0 la r\xE9servation pour bloquer la date\xA0; le solde est exigible ", React.createElement(Fill, null, "\xE0 pr\xE9ciser, ex. le jour de la prestation"), ". Moyens de paiement accept\xE9s\xA0: carte, virement, ch\xE8que ou esp\xE8ces.")), React.createElement(LBlock, {
    n: "4",
    title: "Obligations du client"
  }, React.createElement("p", null, "Le client s'engage \xE0 fournir des informations exactes (volume, acc\xE8s, \xE9tages, stationnement), \xE0 garantir l'acc\xE8s aux lieux, \xE0 effectuer les d\xE9marches de stationnement n\xE9cessaires, et \xE0 signaler tout objet de valeur ou fragile. Les variations importantes par rapport au devis (volume, acc\xE8s) peuvent donner lieu \xE0 un r\xE9ajustement tarifaire convenu ensemble.")), React.createElement(LBlock, {
    n: "5",
    title: "Obligations de LBC*"
  }, React.createElement("p", null, "LBC* s'engage \xE0 r\xE9aliser la prestation avec soin et professionnalisme, dans le respect des d\xE9lais convenus, avec du mat\xE9riel adapt\xE9 et une \xE9quipe d\xE9clar\xE9e. En cas d'emp\xEAchement, LBC* en informe le client dans les meilleurs d\xE9lais et propose une solution de remplacement.")), React.createElement(LBlock, {
    n: "6",
    title: "Assurance et responsabilit\xE9"
  }, React.createElement("p", null, "La prestation inclut une assurance ", React.createElement(Fill, null, "nom de l'assureur et nature de la garantie"), " couvrant les biens transport\xE9s, dans les limites et plafonds pr\xE9cis\xE9s au contrat. Toute r\xE9serve doit \xEAtre formul\xE9e par \xE9crit le jour m\xEAme de la livraison. La responsabilit\xE9 de LBC* ne saurait \xEAtre engag\xE9e pour les dommages r\xE9sultant d'un cas de force majeure ou d'un emballage r\xE9alis\xE9 par le client.")), React.createElement(LBlock, {
    n: "7",
    title: "Annulation et report"
  }, React.createElement("p", null, "Toute annulation ou report doit \xEAtre notifi\xE9 ", React.createElement(Fill, null, "d\xE9lai, ex. 7 jours avant"), " la date pr\xE9vue. Les conditions de remboursement de l'acompte en cas d'annulation tardive sont pr\xE9cis\xE9es au devis.")), React.createElement(LBlock, {
    n: "8",
    title: "R\xE9clamations, m\xE9diation et litiges"
  }, React.createElement("p", null, "Toute r\xE9clamation peut \xEAtre adress\xE9e \xE0 ", React.createElement("a", {
    href: "mailto:contact@lbcdemenagement.com"
  }, "contact@lbcdemenagement.com"), ". Conform\xE9ment \xE0 la r\xE9glementation, le client consommateur peut recourir gratuitement \xE0 un m\xE9diateur de la consommation\xA0: ", React.createElement(Fill, null, "nom et coordonn\xE9es du m\xE9diateur"), ". \xC0 d\xE9faut d'accord amiable, les litiges rel\xE8vent des tribunaux comp\xE9tents\xA0; le droit applicable est le droit fran\xE7ais.")));
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
  }, "Derni\xE8re mise \xE0 jour\xA0: ", LEGAL_UPDATED), doc.body, React.createElement("div", {
    className: "legal-note reveal"
  }, React.createElement("strong", null, "Note\xA0:"), " les mentions signal\xE9es ", React.createElement("span", {
    className: "legal-fill"
  }, "[\xE0 compl\xE9ter]"), " doivent \xEAtre renseign\xE9es avec vos informations r\xE9elles (SIRET, RCS, h\xE9bergeur, assureur, d\xE9lais\u2026) avant la mise en ligne."), React.createElement("nav", {
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
