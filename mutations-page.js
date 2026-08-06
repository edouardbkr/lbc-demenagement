/* mutations-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const MI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const MUT_STEPS = [{
  n: "01",
  t: "Devis conforme sous 24h",
  d: "Vous décrivez votre déménagement, on revient sous 24h avec un devis détaillé et conforme, celui que votre employeur ou votre service RH attend pour valider la prise en charge."
}, {
  n: "02",
  t: "Transmission à votre RH",
  d: "Vous remettez le devis à votre service RH ou mobilité. On fournit plusieurs devis comparatifs si la procédure interne l'exige."
}, {
  n: "03",
  t: "On cale sur votre prise de poste",
  d: "La date de déménagement s'aligne sur votre date d'arrivée. Garde-meuble possible si le nouveau logement n'est pas encore prêt."
}, {
  n: "04",
  t: "Facture en règle",
  d: "Après le déménagement, vous recevez une facture conforme pour votre remboursement, la prise en charge directe ou votre déclaration aux impôts."
}];
const MUT_PRISE = [{
  t: "L'employeur",
  d: "De nombreuses entreprises prennent en charge tout ou partie du déménagement lors d'une mutation, parfois via un budget mobilité ou un contrat cadre. Notre devis détaillé et nos comparatifs facilitent la validation par la RH."
}, {
  t: "Mobili-Pass (Action Logement)",
  d: "Une aide d'Action Logement pour les salariés du secteur privé qui changent de logement pour un motif professionnel, en général au-delà d'une certaine distance. On vous fournit les justificatifs et la facture nécessaires au dossier."
}, {
  t: "Frais réels / impôts",
  d: "Les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous optez pour les frais réels. Facture conforme fournie pour appuyer votre déclaration."
}];
const MUT_FEATS = [{
  t: "Devis accepté par les RH",
  d: "Détaillé, clair, conforme aux exigences des employeurs et organismes. Comparatifs fournis sur demande.",
  icon: React.createElement(MI, null, React.createElement("path", {
    d: "M6 2h9l5 5v15H6z"
  }), React.createElement("path", {
    d: "M9 12h6M9 16h6M9 8h2"
  }))
}, {
  t: "Coordination prise de poste",
  d: "On synchronise le déménagement avec votre date d'arrivée, même à l'autre bout de la France ou à l'étranger.",
  icon: React.createElement(MI, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3.5 2"
  }))
}, {
  t: "Transition entre deux logements",
  d: "Logement pas encore dispo ? On vous aide à trouver un box et on assure le transport, en box sécurisé le temps qu'il faut.",
  icon: React.createElement(MI, null, React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "13",
    rx: "1"
  }), React.createElement("path", {
    d: "M3 7l9-4 9 4M8 20v-6h8v6"
  }))
}, {
  t: "Accompagnement de bout en bout",
  d: "Un interlocuteur unique qui connaît la paperasse et vous évite les allers-retours administratifs.",
  icon: React.createElement(MI, null, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-8 0v2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))
}];
const MUT_DEEP = [{
  t: "Le devis conforme RH, la pièce qui débloque tout",
  p: "Dans une mutation, le déménagement ne démarre vraiment qu'une fois le devis validé par votre service RH ou mobilité. Encore faut-il qu'il soit présenté comme l'employeur l'attend : détaillé prestation par prestation, avec volume, distance, formule, options et assurance clairement indiqués. Beaucoup d'entreprises exigent aussi plusieurs devis comparatifs. On établit tout cela sous 24h, dans un format propre et lisible, pour que votre dossier passe du premier coup et que votre date ne prenne pas de retard administratif."
}, {
  t: "Synchroniser déménagement et prise de poste",
  p: "Une mutation impose un calendrier serré : une date d'arrivée, parfois une période d'essai, souvent un logement pas encore disponible. On cale le déménagement sur votre prise de poste plutôt que l'inverse, et on absorbe les décalages grâce au garde-meuble relais : vos affaires patientent en box sécurisé, à Nice avant le départ ou à destination, le temps que votre logement se libère. Vous arrivez l'esprit libre pour votre premier jour, pas en pleine logistique."
}, {
  t: "Mobili-Pass, frais réels : ce qu'il faut savoir",
  p: "Au-delà de l'employeur, deux dispositifs reviennent souvent. Le Mobili-Pass d'Action Logement aide les salariés du privé qui déménagent pour un motif professionnel, généralement au-delà d'une certaine distance domicile-travail. Et fiscalement, les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous déclarez vos frais réels. Dans les deux cas, c'est la facture conforme qui fait foi : on vous la fournit en règle. On ne décide pas de votre éligibilité (c'est Action Logement, votre RH ou le fisc qui tranchent), mais on vous donne tous les documents utiles."
}, {
  t: "Muté à Nice ou sur la Côte d'Azur",
  p: "La région attire les cadres : la technopole de Sophia Antipolis (Antibes, Valbonne) draine l'industrie tech et les sièges, Monaco concentre la finance et les emplois frontaliers, et Nice, Cannes et l'arrière-pays vivent du tourisme, de la santé et des services. Beaucoup de mutations se font donc VERS la Côte d'Azur. Et là, notre avantage est décisif : on connaît les quartiers, les accès et le stationnement de Nice, Cannes, Antibes, Monaco ou Grasse, donc votre arrivée se passe sans accroc, du Vieux-Nice à Sophia Antipolis."
}, {
  t: "Mutation longue distance : un camion dédié, une équipe",
  p: "Quand la mutation vous éloigne, on assure aussi les longues distances : un <a href=\"Demenagement-Nice-Paris\">Nice → Paris</a>, un <a href=\"Demenagement-Nice-Lyon\">Nice → Lyon</a>, un <a href=\"Demenagement-Nice-Toulouse\">Nice → Toulouse</a> vers l'aéronautique, ou un <a href=\"Demenagement-Nice-Luxembourg\">Nice → Luxembourg</a> dans la finance. Sur ces trajets, on travaille en camion dédié et plombé, une seule équipe du chargement à la livraison, sans groupage ni transbordement. Votre mobilier arrive à date, intact, pendant que vous vous concentrez sur votre nouveau poste."
}];
const MUT_FAQ = [{
  q: "Mon employeur peut-il payer directement le déménageur ?",
  a: "Oui, c'est fréquent : selon votre entreprise, la prise en charge se fait par paiement direct sur facture ou par remboursement sur justificatif. Dans les deux cas, on fournit un devis conforme en amont et une facture en règle après la prestation."
}, {
  q: "Pouvez-vous fournir plusieurs devis comparatifs pour ma RH ?",
  a: "Oui. Beaucoup de services mobilité exigent deux ou trois devis pour valider une mutation. On vous prépare des devis clairs et détaillés, faciles à comparer, dans le format attendu par votre employeur."
}, {
  q: "Qu'est-ce que le Mobili-Pass d'Action Logement ?",
  a: "C'est une aide d'Action Logement destinée aux salariés du secteur privé qui changent de logement pour un motif professionnel, en général au-delà d'une certaine distance. On vous remet les justificatifs et la facture nécessaires au dossier ; l'éligibilité est étudiée par Action Logement."
}, {
  q: "Les frais de déménagement sont-ils déductibles des impôts ?",
  a: "Les frais de déménagement liés à un changement d'emploi peuvent être déductibles si vous optez pour la déclaration aux frais réels, sous conditions. On vous fournit une facture conforme pour appuyer votre déclaration ; pour l'éligibilité exacte, référez-vous à l'administration fiscale."
}, {
  q: "Que faire si mon nouveau logement n'est pas encore disponible ?",
  a: "On vous aide à trouver un garde-meuble relais : vos affaires sont stockées en box sécurisé, à Nice ou à destination, le temps que le logement se libère. On cale ensuite la livraison sur votre disponibilité réelle."
}, {
  q: "Gérez-vous les mutations sur la Côte d'Azur, en France et à l'étranger ?",
  a: "Oui. Basés à Nice, on déménage sur toute la Côte d'Azur (Cannes, Antibes, Monaco, Sophia Antipolis, Grasse, Menton…), en longue distance partout en France, et à l'international (Suisse, Italie, Espagne, Benelux). Une seule équipe du départ à l'arrivée, formalités douanières comprises hors Union européenne."
}];
function MutHero() {
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
  }, "/"), React.createElement("span", null, "Mutation professionnelle")), React.createElement("h1", null, "Mut\xE9 pour le travail ? ", React.createElement("em", null, "On g\xE8re le d\xE9m\xE9nagement et la paperasse.")), React.createElement("p", {
    className: "lede"
  }, "Nouvelle affectation, prise de poste \xE0 l'autre bout du pays : on \xE9tablit un devis clair et conforme pour votre employeur, on cale la date sur votre arriv\xE9e, et on vous \xE9vite la double charge mentale. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Vous changez de ville, pas de tranquillit\xE9.")));
}
function MutIntro() {
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
  }, "*"), " Votre d\xE9m\xE9nagement de mutation"), React.createElement("p", {
    className: "lead"
  }, "Une mutation professionnelle, c'est d\xE9j\xE0 assez de stress comme \xE7a : un nouveau poste, une nouvelle ville, parfois toute une famille \xE0 r\xE9installer. Le d\xE9m\xE9nagement et sa paperasse ne devraient pas en rajouter. Que vous soyez mut\xE9 ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "\xE0 Nice et sur la C\xF4te d'Azur"), " ou que vous quittiez la r\xE9gion pour ailleurs en France, on prend en charge votre ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "d\xE9m\xE9nagement de mutation"), " de A \xE0 Z et on vous fournit exactement les documents qu'attendent votre service RH, Action Logement ou le fisc."), React.createElement("p", null, "Devis conforme accept\xE9 par les RH, coordination avec votre date de prise de poste, garde-meuble en transition et facture en r\xE8gle : tout est pens\xE9 pour qu'une seule chose vous occupe vraiment, votre nouveau travail. Quelle que soit la formule, du simple transport au cl\xE9 en main, vous avez des d\xE9m\xE9nageurs exp\xE9riment\xE9s, une assurance incluse et un interlocuteur unique."), React.createElement("div", {
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
  }, "L'essentiel d'une mutation"), React.createElement("div", {
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
  }, "Devis conforme"), " \xB7 accept\xE9 par les RH, sous 24h"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Comparatifs"), " \xB7 plusieurs devis sur demande"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Coordination"), " \xB7 cal\xE9e sur votre prise de poste"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Garde-meuble"), " \xB7 en transition, si besoin"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Zone"), " \xB7 Nice, C\xF4te d'Azur et toute la France")), React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, "Aussi pour les ", React.createElement("a", {
    href: "Militaire",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "militaires"), " et le ", React.createElement("a", {
    href: "Diplomatique",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "personnel diplomatique"), "."))))));
}
function MutSteps() {
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
  }, "*"), " Comment \xE7a se passe")), React.createElement("h2", {
    className: "dim-em"
  }, "De la mutation \xE0 l'emm\xE9nagement,", React.createElement("br", null), React.createElement("em", null, "sans paperasse perdue."))), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, MUT_STEPS.map((s, i) => React.createElement("div", {
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
function MutPrise() {
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
  }, "*"), " Qui prend en charge ?")), React.createElement("h2", {
    className: "dim-em"
  }, "Votre mutation peut \xEAtre", React.createElement("br", null), React.createElement("em", null, "financ\xE9e, en partie ou en totalit\xE9."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(3,1fr)'
    }
  }, MUT_PRISE.map((p, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, p.t), React.createElement("div", {
    className: "ap-value-d"
  }, p.d)))), React.createElement("p", {
    className: "hint",
    style: {
      marginTop: 18
    }
  }, "Les dispositifs et montants d\xE9pendent de votre situation et de votre employeur. On vous fournit tous les documents utiles, on ne se substitue pas \xE0 votre service RH, \xE0 Action Logement ou \xE0 l'administration fiscale pour l'\xE9ligibilit\xE9.")));
}
function MutDeep() {
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
  }, "*"), " La mutation en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "Un dossier carr\xE9,", React.createElement("br", null), React.createElement("em", null, "un d\xE9m\xE9nagement sans accroc."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }, MUT_DEEP.map((d, i) => React.createElement("div", {
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
function MutFeats() {
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
  }, "*"), " Ce qu'on vous apporte")), React.createElement("h2", {
    className: "dim-em"
  }, "Un d\xE9m\xE9nagement carr\xE9,", React.createElement("br", null), React.createElement("em", null, "un dossier qui passe du premier coup."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, MUT_FEATS.map((f, i) => React.createElement("div", {
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
function MutFaq() {
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
  }, "Mutation et d\xE9m\xE9nagement,", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, MUT_FAQ.map((f, i) => React.createElement("div", {
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
function MutCTA() {
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
  }, "Une mutation en vue ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "On pr\xE9pare le devis.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "On vous envoie sous 24h un devis d\xE9taill\xE9 et conforme \xE0 transmettre \xE0 votre employeur ou votre RH."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(MutHero, null), React.createElement(MutIntro, null), React.createElement(MutSteps, null), React.createElement(MutPrise, null), React.createElement(MutDeep, null), React.createElement(MutFeats, null), React.createElement(MutFaq, null), React.createElement(MutCTA, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { MutHero, MutIntro, MutSteps, MutPrise, MutDeep, MutFeats, MutFaq, MutCTA, App }); } catch (e) {}
})();
