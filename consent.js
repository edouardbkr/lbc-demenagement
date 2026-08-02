// consent.js — Bandeau de consentement RGPD (CNIL) + chargement conditionnel
// de la mesure d'audience. GA4 et Microsoft Clarity ne se chargent QU'APRÈS
// accord explicite du visiteur. Refus = aucun cookie de mesure déposé.
// Fichier unique inclus dans toutes les pages (<script src="consent.js" defer>).
(function () {
  var GA_ID = "G-6EB2NW1G4K";
  var CLARITY_ID = "x7jx6xsk0x";
  var META_PIXEL_ID = "1607921347678142";
  var STORAGE_KEY = "lbc-consent-v1";

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
  }

  function loadGA() {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
  }

  function loadClarity() {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }

  function loadMetaPixel() {
    // fbq() est déjà défini (stub dans le <head>). Ici on charge réellement
    // la librairie Meta et on déclenche le PageView — uniquement après accord.
    if (window._lbcPixelLoaded) return;
    window._lbcPixelLoaded = true;
    var t = document.createElement("script");
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(t, s);
    if (typeof window.fbq === "function") {
      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
    }
  }

  function loadTrackers() { loadGA(); loadClarity(); loadMetaPixel(); }

  function hideBanner() {
    var b = document.getElementById("lbc-consent");
    if (b && b.parentNode) b.parentNode.removeChild(b);
  }

  function showBanner() {
    if (document.getElementById("lbc-consent")) return;
    var style = document.createElement("style");
    style.textContent =
      "#lbc-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;" +
      "max-width:720px;margin:0 auto;background:var(--ink,#12303d);color:var(--paper,#f3ece1);" +
      "border-radius:16px;box-shadow:0 16px 48px rgba(0,0,0,.28);padding:18px 20px;" +
      "font-family:'DM Sans',system-ui,sans-serif;font-size:14px;line-height:1.5;" +
      "display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between}" +
      "#lbc-consent p{margin:0;flex:1 1 280px;opacity:.92}" +
      "#lbc-consent a{color:var(--accent,#D75B3D);font-weight:600;text-decoration:underline}" +
      "#lbc-consent .lbc-consent-actions{display:flex;gap:10px;flex:0 0 auto}" +
      "#lbc-consent button{cursor:pointer;border:0;border-radius:10px;padding:11px 18px;" +
      "font:inherit;font-weight:600}" +
      "#lbc-consent-refuse{background:transparent;color:var(--paper,#f3ece1);" +
      "border:1px solid rgba(255,255,255,.35)}" +
      "#lbc-consent-accept{background:var(--accent,#D75B3D);color:#fff}" +
      "@media(max-width:520px){#lbc-consent .lbc-consent-actions{flex:1 1 100%}" +
      "#lbc-consent button{flex:1}}";
    document.head.appendChild(style);

    var bar = document.createElement("div");
    bar.id = "lbc-consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Consentement aux cookies de mesure d'audience");
    bar.innerHTML =
      "<p>On utilise des cookies de mesure d'audience (Google Analytics, Microsoft " +
      "Clarity) et de mesure publicitaire (pixel Meta / Facebook) pour comprendre " +
      "comment le site est utilisé et améliorer nos campagnes. " +
      "Vous gardez la main. <a href=\"Confidentialite.html\">En savoir plus</a></p>" +
      "<div class=\"lbc-consent-actions\">" +
      "<button id=\"lbc-consent-refuse\" type=\"button\">Refuser</button>" +
      "<button id=\"lbc-consent-accept\" type=\"button\">Accepter</button>" +
      "</div>";
    document.body.appendChild(bar);

    document.getElementById("lbc-consent-accept").onclick = function () {
      setConsent("granted"); hideBanner(); loadTrackers();
    };
    document.getElementById("lbc-consent-refuse").onclick = function () {
      setConsent("denied"); hideBanner();
    };
  }

  var c = getConsent();
  if (c === "granted") {
    loadTrackers();
  } else if (c === "denied") {
    // Rien : le visiteur a refusé, aucun cookie de mesure.
  } else {
    if (document.body) showBanner();
    else document.addEventListener("DOMContentLoaded", showBanner);
  }
})();
