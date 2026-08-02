/* militaire-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const LI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const MIL_STEPS = [{
  n: "01",
  t: "Ordre de mutation",
  d: "Dès réception de votre changement d'affectation, contactez-nous : on cale tout de suite une date et un devis conforme."
}, {
  n: "02",
  t: "Devis aux normes",
  d: "Un devis détaillé et conforme aux barèmes et exigences administratives, prêt pour votre dossier de prise en charge."
}, {
  n: "03",
  t: "Déménagement & suivi",
  d: "Emballage, transport et livraison dans les délais — en métropole, outre-mer ou à l'étranger selon votre affectation."
}, {
  n: "04",
  t: "Justificatifs fournis",
  d: "Facture et attestations conformes pour le remboursement par l'administration. Votre dossier est complet."
}];
const MIL_DEST = [{
  t: "Métropole",
  d: "D'une base à l'autre, de Nice à Brest ou Mourmelon : on connaît les longues distances et on tient les délais."
}, {
  t: "Outre-mer",
  d: "Antilles, Guyane, Réunion, Mayotte, Polynésie : organisation du conditionnement maritime et du suivi jusqu'à destination."
}, {
  t: "Étranger",
  d: "Affectation OTAN ou ambassade : transport international, formalités douanières et coordination de bout en bout."
}];
const MIL_BASES = [{
  v: "Toulon",
  d: "1er port militaire d'Europe : base navale, Préfecture maritime, Mourillon. Notre destination militaire n°1."
}, {
  v: "Draguignan",
  d: "« Ville de l'artillerie » : École et camp de Canjuers, mutations fréquentes vers le Var intérieur."
}, {
  v: "Hyères",
  d: "Base d'aéronautique navale et 54e régiment : déménagements réguliers sur la presqu'île."
}, {
  v: "Fréjus – Saint-Raphaël",
  d: "Garnison historique (troupes de marine) : on dessert toute la base Var-Est."
}, {
  v: "Istres",
  d: "Base aérienne 125 : mutations Armée de l'air vers l'étang de Berre."
}, {
  v: "Orange",
  d: "Base aérienne 115 et Légion étrangère : trajets fréquents vers le Vaucluse."
}, {
  v: "Salon-de-Provence",
  d: "École de l'air (BA 701) : affectations des officiers et élèves."
}, {
  v: "Brest – Lorient – Cherbourg",
  d: "Grands ports de la Marine nationale : nos liaisons longue distance vers l'Atlantique et la Manche."
}];
const MIL_FEATS = [{
  t: "Devis conforme aux barèmes",
  d: "Établi selon les exigences de l'administration militaire, avec le détail attendu pour votre dossier.",
  icon: React.createElement(LI, null, React.createElement("path", {
    d: "M6 2h9l5 5v15H6z"
  }), React.createElement("path", {
    d: "M9 12h6M9 16h6M9 8h2"
  }))
}, {
  t: "Justificatifs complets",
  d: "Facture, attestations et pièces conformes pour votre remboursement, sans relance ni pièce manquante.",
  icon: React.createElement(LI, null, React.createElement("path", {
    d: "M9 11l3 3 7-7"
  }), React.createElement("path", {
    d: "M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"
  }))
}, {
  t: "Délais tenus, sans exception",
  d: "Dans l'armée, une date est une date. La ponctualité fait partie de notre engagement de toujours.",
  icon: React.createElement(LI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3.5 2"
  }))
}, {
  t: "Partout où vous êtes affecté",
  d: "Métropole, DOM-TOM, étranger : on organise le trajet et la logistique de A à Z.",
  icon: React.createElement(LI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"
  }))
}];
const MIL_DEEP = [{
  t: "Pris en charge ou indemnisé : on s'adapte",
  p: "Lors d'un changement de résidence commandé, votre déménagement peut être organisé à titre officiel ou indemnisé selon un barème, en fonction de votre statut et de l'organisme gestionnaire. Dans tous les cas, notre rôle est le même : vous remettre un devis conforme aux exigences administratives et, après la prestation, une facture et des attestations en règle pour votre dossier de prise en charge ou de remboursement. On ne décide pas de vos droits, mais on vous donne des pièces irréprochables pour les faire valoir."
}, {
  t: "Des délais qui ne se négocient pas",
  p: "Dans l'armée, une date d'affectation est un ordre, pas une suggestion. On le sait, et on cale le déménagement au cordeau : date de chargement, fenêtre de livraison, et garde-meuble relais si le logement de la nouvelle base ou la concession de logement n'est pas encore disponible. Vous prenez votre poste à l'heure, l'esprit dégagé, pendant qu'on s'occupe de la logistique. La ponctualité n'est pas une option, c'est notre engagement."
}, {
  t: "Outre-mer : le conditionnement maritime",
  p: "Une affectation aux Antilles, en Guyane, à La Réunion, à Mayotte ou en Polynésie, c'est une logistique à part. Le mobilier voyage par voie maritime, en caisses ou conteneurs, avec un conditionnement renforcé contre l'humidité et les manipulations portuaires, un inventaire valorisé et des délais d'acheminement à anticiper. On organise l'emballage, le transport jusqu'au port, l'embarquement et le suivi jusqu'à votre nouvelle affectation outre-mer."
}, {
  t: "OTAN, ambassades, étranger",
  p: "Pour une affectation à l'étranger (état-major OTAN, mission, poste en ambassade), on gère le transport international, l'inventaire et les formalités douanières de bout en bout, avec une seule équipe du départ à l'arrivée. C'est le même savoir-faire que pour le <a href=\"Diplomatique\">personnel diplomatique</a>, et plus largement pour toute <a href=\"Mutations\">mutation professionnelle</a>."
}];
const MIL_FAQ = [{
  q: "Qui prend en charge un déménagement militaire ?",
  a: "Selon votre statut et le motif de la mutation, le déménagement peut être organisé à titre officiel ou indemnisé sur barème par l'administration. On vous fournit un devis conforme en amont et tous les justificatifs après la prestation ; l'éligibilité et les modalités relèvent de votre organisme gestionnaire."
}, {
  q: "Fournissez-vous un devis conforme aux barèmes ?",
  a: "Oui, c'est notre quotidien : un devis détaillé, clair et conforme aux exigences administratives, prêt à intégrer votre dossier de prise en charge ou de remboursement."
}, {
  q: "Gérez-vous les déménagements outre-mer ?",
  a: "Oui : Antilles, Guyane, Réunion, Mayotte, Polynésie. On organise le conditionnement maritime renforcé, l'inventaire valorisé, l'embarquement et le suivi jusqu'à destination, en tenant compte des délais d'acheminement."
}, {
  q: "Et les affectations à l'étranger (OTAN, ambassade) ?",
  a: "Oui : transport international, inventaire et formalités douanières gérés de bout en bout, avec une seule équipe du chargement à la livraison, comme pour le personnel diplomatique."
}, {
  q: "Que faire si mon logement sur la nouvelle base n'est pas prêt ?",
  a: "On utilise le garde-meuble relais : vos affaires sont stockées en box sécurisé le temps que votre logement ou votre concession se libère, puis livrées dès que vous êtes prêt."
}, {
  q: "Intervenez-vous dans toutes les garnisons ?",
  a: "Oui. Toulon est notre destination militaire n°1, mais on dessert toutes les bases de métropole (Draguignan, Hyères, Fréjus, Istres, Orange, Salon, Brest, Lorient, Cherbourg…), d'outre-mer et à l'étranger. Indiquez votre affectation, on s'occupe du reste."
}];
function MilHero() {
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
  }, "/"), React.createElement("span", null, "D\xE9m\xE9nagement militaire")), React.createElement("h1", null, "Mutation militaire ? ", React.createElement("em", null, "Un dossier carr\xE9, des d\xE9lais tenus.")), React.createElement("p", {
    className: "lede"
  }, "Changement d'affectation, mobilit\xE9 command\xE9e : on conna\xEEt les proc\xE9dures, les justificatifs attendus et le sens du mot \xAB d\xE9lai \xBB. Devis conforme aux bar\xE8mes, et une \xE9quipe qui sait qu'un ordre, \xE7a se respecte. ", React.createElement("span", {
    className: "ast"
  }, "*"), "M\xE9tropole, outre-mer, \xE9tranger.")));
}
function MilIntro() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "about-grid"
  }, React.createElement("div", {
    className: "about-copy reveal"
  }, React.createElement("div", {
    className: "sec-num",
    style: {
      marginBottom: 22
    }
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Votre d\xE9m\xE9nagement militaire"), React.createElement("p", {
    className: "lead"
  }, "Dans l'arm\xE9e, une mutation ne se discute pas, elle s'ex\xE9cute. Et un ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "d\xE9m\xE9nagement militaire"), " ne s'improvise pas non plus : bar\xE8mes, justificatifs pr\xE9cis, d\xE9lais impos\xE9s, et parfois l'outre-mer ou l'\xE9tranger au bout de la route. On conna\xEEt ces proc\xE9dures, on parle le m\xEAme langage que votre dossier de prise en charge, et on respecte vos d\xE9lais au cordeau."), React.createElement("p", null, "Bas\xE9s \xE0 Nice, on dessert toutes les garnisons de la r\xE9gion PACA, \xE0 commencer par ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Toulon"), ", premier port militaire d'Europe, ainsi que Draguignan, Hy\xE8res, Fr\xE9jus, Istres ou Orange. Devis conforme aux bar\xE8mes, justificatifs complets pour votre remboursement, coordination avec votre date d'affectation et garde-meuble en transition : vous avez une seule chose \xE0 faire, rejoindre votre poste. Quelle que soit la formule, du simple transport au cl\xE9 en main, vous avez des d\xE9m\xE9nageurs exp\xE9riment\xE9s, une assurance incluse et un interlocuteur unique."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis conforme sous 24h", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Formules",
    className: "btn btn-ghost"
  }, "Voir les formules"))), React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "aside-card",
    style: {
      background: 'var(--paper-2)',
      color: 'var(--ink)',
      border: '1px solid var(--rule)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--ink)'
    }
  }, "L'essentiel d'une mutation militaire"), React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 15,
      color: 'var(--ink-2)'
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Devis conforme"), " \xB7 aux bar\xE8mes, sous 24h"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Justificatifs"), " \xB7 complets pour le remboursement"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "D\xE9lais"), " \xB7 tenus, sans exception"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Zone"), " \xB7 m\xE9tropole, DOM-TOM, \xE9tranger"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Garnison n\xB01"), " \xB7 Toulon")), React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, "Aussi pour la ", React.createElement("a", {
    href: "Mutations",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "mutation professionnelle"), " et le ", React.createElement("a", {
    href: "Diplomatique",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "personnel diplomatique"), "."))))));
}
function MilDeep() {
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " La mutation militaire en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "Un dossier au carr\xE9,", React.createElement("br", null), React.createElement("em", null, "une logistique sous contr\xF4le."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }, MIL_DEEP.map((d, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, d.t), React.createElement("div", {
    className: "ap-value-d",
    style: {
      fontSize: 15.5,
      lineHeight: 1.6
    },
    dangerouslySetInnerHTML: {
      __html: d.p
    }
  }))))));
}
function MilFaq() {
  const [open, setOpen] = React.useState(null);
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nagement militaire,", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, MIL_FAQ.map((f, i) => React.createElement("div", {
    className: "faq-item" + (open === i ? " open" : ""),
    key: i
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? null : i)
  }, React.createElement("span", null, f.q), React.createElement("span", {
    className: "ico"
  }, "+")), React.createElement("div", {
    className: "faq-a"
  }, React.createElement("p", null, f.a)))))));
}
function MilSteps() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " De l'ordre \xE0 l'installation")), React.createElement("h2", {
    className: "dim-em"
  }, "Une mobilit\xE9 command\xE9e,", React.createElement("br", null), React.createElement("em", null, "un d\xE9m\xE9nagement au cordeau."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, MIL_STEPS.map((s, i) => React.createElement("div", {
    className: "value",
    key: i
  }, React.createElement("div", {
    className: "value-num"
  }, "\u2605 ", s.n), React.createElement("div", {
    className: "value-title",
    style: {
      marginTop: 8
    }
  }, s.t), React.createElement("div", {
    className: "value-body"
  }, s.d))))));
}
function MilDest() {
  return React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Vos destinations")), React.createElement("h2", {
    className: "dim-em"
  }, "O\xF9 que l'on vous affecte,", React.createElement("br", null), React.createElement("em", null, "on vous y emm\xE8ne."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(3,1fr)'
    }
  }, MIL_DEST.map((d, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, d.t), React.createElement("div", {
    className: "ap-value-d"
  }, d.d))))));
}
function MilBases() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Villes de garnison")), React.createElement("h2", {
    className: "dim-em"
  }, "Cap sur Toulon \u2014", React.createElement("br", null), React.createElement("em", null, "et toutes les bases o\xF9 l'on vous affecte."))), React.createElement("div", {
    className: "mil-toulon reveal"
  }, React.createElement("div", {
    className: "mil-toulon-tag"
  }, "Destination militaire n\xB01"), React.createElement("h3", null, "D\xE9m\xE9nagement militaire \xE0 Toulon"), React.createElement("p", null, "Premier port militaire d'Europe, Toulon concentre une grande part des mutations de la Marine nationale. On y d\xE9m\xE9nage chaque mois : base navale, Pr\xE9fecture maritime, quartiers du Mourillon et de Saint-Roch, logements de fonction et r\xE9sidences. Stationnement, acc\xE8s aux enceintes et cr\xE9neaux : on conna\xEEt le terrain toulonnais et on cale tout au cordeau."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 24
    }
  }, React.createElement("a", {
    href: "Devis",
    className: "btn btn-primary"
  }, "Devis pour Toulon", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      marginTop: 36
    }
  }, MIL_BASES.filter(b => b.v !== "Toulon").map((b, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, b.v), React.createElement("div", {
    className: "ap-value-d"
  }, b.d)))), React.createElement("p", {
    className: "hint",
    style: {
      marginTop: 20
    }
  }, "Votre garnison n'est pas list\xE9e ? On dessert ", React.createElement("strong", null, "toutes les bases de m\xE9tropole, d'outre-mer et \xE0 l'\xE9tranger"), ". Indiquez votre affectation, on s'occupe du reste.")));
}
function MilFeats() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sec-num"
  }, React.createElement("span", {
    className: "asterisk"
  }, "*"), " Pourquoi nous confier votre mutation")), React.createElement("h2", {
    className: "dim-em"
  }, "Le dossier impeccable,", React.createElement("br", null), React.createElement("em", null, "le d\xE9m\xE9nagement irr\xE9prochable."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, MIL_FEATS.map((f, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-ic"
  }, f.icon), React.createElement("div", {
    className: "ap-value-t"
  }, f.t), React.createElement("div", {
    className: "ap-value-d"
  }, f.d))))));
}
function MilCTA() {
  return React.createElement("section", {
    className: "sec cta-band"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 600,
      fontSize: 'clamp(34px,4vw,58px)',
      color: 'var(--cream-on-dark)',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "Ordre de mutation re\xE7u ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "\xC0 vos cartons.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "Envoyez-nous votre destination et vos dates \u2014 devis conforme aux bar\xE8mes sous 24h."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(MilHero, null), React.createElement(MilIntro, null), React.createElement(MilSteps, null), React.createElement(MilDest, null), React.createElement(MilBases, null), React.createElement(MilDeep, null), React.createElement(MilFeats, null), React.createElement(MilFaq, null), React.createElement(MilCTA, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { MilHero, MilIntro, MilDeep, MilFaq, MilSteps, MilDest, MilBases, MilFeats, MilCTA, App }); } catch (e) {}
})();
