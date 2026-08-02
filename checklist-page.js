/* checklist-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const {
  useState: useCkState,
  useEffect: useCkEffect
} = React;
const CK_GROUPS = [{
  t: "8 semaines avant",
  k: "j8",
  items: ["Demander vos devis et bloquer la date", "Faire le tri : donner, vendre, jeter", "Réserver un garde-meuble si besoin", "Poser vos congés pour le jour J"]
}, {
  t: "1 mois avant",
  k: "j4",
  items: ["Résilier / transférer électricité, gaz, internet", "Faire suivre le courrier (réexpédition La Poste)", "Signaler le changement d'adresse (impôts, banque, CAF…)", "Inscrire / désinscrire les enfants à l'école", "Commander vos cartons et le matériel d'emballage"]
}, {
  t: "2 semaines avant",
  k: "j2",
  items: ["Réserver l'autorisation de stationnement (départ & arrivée)", "Prévenir le syndic / gardien de l'immeuble", "Commencer à emballer les pièces peu utilisées", "Étiqueter les cartons par pièce de destination", "Vider, dégivrer et nettoyer le réfrigérateur"]
}, {
  t: "La veille",
  k: "j1",
  items: ["Préparer une boîte « première nuit » (draps, trousse, chargeurs)", "Démonter ce qui peut l'être (sauf formule avec démontage)", "Charger vos appareils et faire le plein de liquidités", "Confirmer l'heure d'arrivée de l'équipe LBC"]
}, {
  t: "Le jour J",
  k: "jj",
  items: ["Faire un dernier tour de chaque pièce et placard", "Relever les compteurs (eau, électricité, gaz)", "Remettre les clés / faire l'état des lieux de sortie", "Vérifier l'inventaire à l'arrivée et valider la prestation"]
}];
const CK_TOTAL = CK_GROUPS.reduce((s, g) => s + g.items.length, 0);
const CK_KEY = "lbc_checklist_v1";
function ChecklistHero({
  done,
  total
}) {
  const pct = Math.round(done / total * 100);
  return React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "/"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, "Checklist d\xE9m\xE9nagement")), React.createElement("h1", null, "Votre d\xE9m\xE9nagement, ", React.createElement("em", null, "sans rien oublier.")), React.createElement("p", {
    className: "lede",
    style: {
      padding: "8px 0 0"
    }
  }, "La checklist que suivent nos clients, de 8 semaines avant jusqu'au jour J. Cochez au fur et \xE0 mesure \u2014 votre progression est sauvegard\xE9e sur cet appareil. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Imprimable pour l'afficher sur le frigo."), React.createElement("div", {
    className: "ck-progress ck-progress-hero"
  }, React.createElement("div", {
    className: "ck-bar"
  }, React.createElement("div", {
    className: "ck-bar-fill",
    style: {
      width: pct + "%"
    }
  })), React.createElement("div", {
    className: "ck-progress-meta"
  }, React.createElement("strong", null, done, "/", total), " t\xE2ches \xB7 ", pct, "%"))));
}
function Checklist() {
  const [checked, setChecked] = useCkState({});
  useCkEffect(() => {
    try {
      const raw = localStorage.getItem(CK_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch (e) {}
  }, []);
  const toggle = id => {
    setChecked(c => {
      const n = {
        ...c,
        [id]: !c[id]
      };
      try {
        localStorage.setItem(CK_KEY, JSON.stringify(n));
      } catch (e) {}
      return n;
    });
  };
  const reset = () => {
    setChecked({});
    try {
      localStorage.removeItem(CK_KEY);
    } catch (e) {}
  };
  const doneCount = Object.values(checked).filter(Boolean).length;
  return React.createElement(React.Fragment, null, React.createElement(ChecklistHero, {
    done: doneCount,
    total: CK_TOTAL
  }), React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "ck-toolbar reveal"
  }, React.createElement("span", {
    className: "ck-toolbar-note"
  }, "Astuce : commencez par le haut \u2014 chaque t\xE2che coch\xE9e, c'est un peu de charge mentale en moins. \uD83E\uDDB4"), React.createElement("div", {
    className: "ck-toolbar-btns"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: () => window.print()
  }, "Imprimer", React.createElement("span", {
    className: "arrow"
  }, "\u21A7")), React.createElement("button", {
    type: "button",
    className: "ck-reset",
    onClick: reset
  }, "Tout d\xE9cocher"))), React.createElement("div", {
    className: "ck-groups"
  }, CK_GROUPS.map(g => {
    const gd = g.items.filter((_, i) => checked[g.k + i]).length;
    return React.createElement("div", {
      className: "ck-group reveal",
      key: g.k
    }, React.createElement("div", {
      className: "ck-group-head"
    }, React.createElement("span", {
      className: "ck-group-step"
    }, g.t), React.createElement("span", {
      className: "ck-group-count"
    }, gd, "/", g.items.length)), React.createElement("ul", {
      className: "ck-list"
    }, g.items.map((it, i) => {
      const id = g.k + i;
      return React.createElement("li", {
        key: id,
        className: "ck-item" + (checked[id] ? " is-done" : "")
      }, React.createElement("label", null, React.createElement("input", {
        type: "checkbox",
        checked: !!checked[id],
        onChange: () => toggle(id)
      }), React.createElement("span", {
        className: "ck-box",
        "aria-hidden": "true"
      }), React.createElement("span", {
        className: "ck-text"
      }, it)));
    })));
  })), React.createElement("div", {
    className: "ck-cta reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "ck-cta-title"
  }, "La premi\xE8re ligne, c'est le devis."), React.createElement("div", {
    className: "ck-cta-sub"
  }, "Deux minutes, et on s'occupe du plus lourd de la liste.")), React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Obtenir mon devis", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(Checklist, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { ChecklistHero, Checklist, App }); } catch (e) {}
})();
