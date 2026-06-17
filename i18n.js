// i18n.js — Couche multilingue. FR par défaut. Sur une page /en/ (<html lang="en">),
// t("texte FR") renvoie la traduction anglaise si elle existe, sinon le texte FR.
// Principe : on garde le FR à l'identique (t renvoie son argument en FR) => zéro risque pour le site français.
(function () {
  var raw = (document.documentElement.getAttribute("lang") || "fr").slice(0, 2).toLowerCase();
  window.LANG = raw === "en" ? "en" : "fr";
  window.IS_EN = window.LANG === "en";

  // Dictionnaire FR -> EN (interface partagée : nav, footer, boutons, libellés).
  var EN = {
    // Nav
    "Accueil": "Home",
    "Formules": "Services",
    "En France": "In France",
    "International": "International",
    "Stockage": "Storage",
    "Mutation professionnelle": "Professional relocation",
    "Je suis un salarié": "I'm an employee",
    "Je suis un militaire": "I'm in the military",
    "Je suis une entreprise": "I'm a business",
    "À propos": "About",
    "Devis gratuit": "Free quote",
    "Appeler": "Call",
    "Aller au contenu": "Skip to content",
    "Navigation principale": "Main navigation",
    "Devis gratuit →": "Free quote →",
    // Mega "En France"
    "Déménagement en France": "Moving within France",
    "De la Côte d'Azur\nà tout l'Hexagone.": "From the French Riviera\nto all of France.",
    "Implantés à Nice, on déménage dans toute la région et partout en France — même équipe, même soin, du studio au grand volume.": "Based in Nice, we move across the whole region and all of France — same team, same care, from a studio to a large home.",
    "Devis longue distance": "Long-distance quote",
    "Côte d'Azur": "French Riviera",
    "Longue distance": "Long distance",
    "Autres villes": "Other cities",
    "Déménagement La Rochelle": "Moving to La Rochelle",
    // Mega "International"
    "Déménagement international": "International moving",
    "Au-delà des\nfrontières.": "Beyond\nborders.",
    "Suisse, Italie, Espagne, Benelux : on organise le transport, les formalités douanières et le suivi jusqu'à destination.": "Switzerland, Italy, Spain, Benelux: we handle transport, customs formalities and tracking all the way to destination.",
    "Devis international": "International quote",
    "Suisse": "Switzerland",
    "Italie": "Italy",
    "Espagne": "Spain",
    "Benelux": "Benelux",
    // Footer (libellés courants)
    "Nos formules": "Our services",
    "Zones desservies": "Areas served",
    "Contact": "Contact",
    "Mentions légales": "Legal notice",
    "Confidentialité": "Privacy",
    "CGV": "Terms",
    "Le nom est la blague.": "The name is the joke.",
    "Le travail est sérieux.": "The work is serious.",
    // Boutons / CTA récurrents
    "Demander un devis": "Request a quote",
    "Obtenir mon devis gratuit": "Get my free quote",
    "Voir les formules": "View our services",
    "Toutes les questions": "All questions",
    "← Tous les articles": "← All articles",
    "Réserver un box": "Book a unit"
  };
  window.T_EN = EN;

  window.t = function (fr) {
    if (window.LANG === "en") return EN.hasOwnProperty(fr) ? EN[fr] : fr;
    return fr;
  };

  // Lien vers la même page dans l'autre langue (pour le sélecteur FR/EN et hreflang).
  // FR vit à la racine, EN sous /en/. On bascule le préfixe /en/ du chemin courant.
  window.altLangHref = function (targetLang) {
    var path = window.location.pathname;
    var inEn = path.indexOf("/en/") === 0 || path === "/en";
    if (targetLang === "en") {
      return inEn ? path : "/en" + (path === "/" ? "/" : path);
    }
    // targetLang === fr
    if (!inEn) return path;
    var p = path.replace(/^\/en/, "");
    return p === "" ? "/" : p;
  };
})();
