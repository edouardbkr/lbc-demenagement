/* entreprise-page.jsx — compilé par build.js, ne pas éditer */
(function () {
const EI = props => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props.children);
const PRO_STEPS = [{
  n: "01",
  t: "Audit & repérage",
  d: "On visite vos locaux, on chiffre le volume, on repère les contraintes : ascenseurs, monte-charge, accès quai, matériel sensible et créneaux d'immeuble."
}, {
  n: "02",
  t: "Plan de transfert",
  d: "Un planning précis validé avec vous : ordre des postes, étiquetage par service et par collaborateur, plan d'implantation à l'arrivée."
}, {
  n: "03",
  t: "Transfert hors activité",
  d: "On intervient le soir, le week-end ou les jours fériés, par lots si nécessaire, pour que vos équipes retrouvent des bureaux prêts à l'emploi."
}, {
  n: "04",
  t: "Remontage & reprise",
  d: "Mobilier remonté, postes informatiques rebranchés, cartons à la bonne place. Vous rouvrez sans perdre une journée de production."
}];
const PRO_TYPES = [{
  t: "Bureaux & open-spaces",
  d: "Postes de travail, cloisons, mobilier, salles de réunion — du studio de 3 personnes au plateau de 200."
}, {
  t: "Commerces & boutiques",
  d: "Agencement, stock, vitrines, mobilier de vente. On planifie pour réduire au minimum la fermeture."
}, {
  t: "Cabinets & professions libérales",
  d: "Avocats, médecins, experts-comptables : confidentialité des dossiers et matériel spécifique respectés."
}, {
  t: "Informatique & serveurs",
  d: "Postes, baies, serveurs : débranchement, emballage antistatique, transport calé et traçé, rebranchement."
}, {
  t: "Archives & documents",
  d: "Cartons scellés, inventaire, chaîne de traçabilité. Vos archives arrivent dans l'ordre et complètes."
}, {
  t: "Mobilier lourd & sur-mesure",
  d: "Coffres, mobilier de direction, œuvres d'art du hall : manutention renforcée et protection sur mesure."
}];
const PRO_FEATS = [{
  t: "Interlocuteur unique",
  d: "Un chef de projet dédié du premier devis à la dernière vis. Un seul numéro, zéro déperdition d'info.",
  icon: React.createElement(EI, null, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-8 0v2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))
}, {
  t: "Continuité d'activité",
  d: "Transfert planifié hors heures, par phases si besoin : votre entreprise ne s'arrête jamais vraiment.",
  icon: React.createElement(EI, null, React.createElement("path", {
    d: "M3 3v18h18"
  }), React.createElement("path", {
    d: "M7 15l4-4 3 3 5-6"
  }))
}, {
  t: "Matériel sensible maîtrisé",
  d: "Serveurs, postes, archives, mobilier de valeur : emballage et manutention spécifiques, traçés.",
  icon: React.createElement(EI, null, React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "8",
    rx: "1"
  }), React.createElement("rect", {
    x: "3",
    y: "14",
    width: "18",
    height: "6",
    rx: "1"
  }), React.createElement("path", {
    d: "M7 8h.01M7 17h.01"
  }))
}, {
  t: "Facturation pro & conforme",
  d: "Devis détaillé, facture conforme, gestion possible avec vos services achats ou RH. TVA récupérable.",
  icon: React.createElement(EI, null, React.createElement("path", {
    d: "M6 2h9l5 5v15H6z"
  }), React.createElement("path", {
    d: "M9 12h6M9 16h6M9 8h2"
  }))
}];
const PRO_DEEP = [{
  t: "La continuité d'activité, votre vraie priorité",
  p: "Déménager une entreprise, ce n'est pas déplacer des meubles, c'est déplacer une activité sans l'interrompre. Chaque heure de bureaux fermés, de caisse éteinte ou de serveur débranché a un coût. On construit donc un plan de transfert pensé pour la continuité : intervention le soir, le week-end ou les jours fériés, déménagement par lots ou par services quand il le faut, pour qu'une partie de l'équipe travaille pendant qu'on transfère l'autre. Objectif : vos collaborateurs ferment leur poste un vendredi et le retrouvent prêt à l'emploi le lundi."
}, {
  t: "Le transfert informatique et serveurs",
  p: "C'est le point le plus sensible d'un déménagement de bureaux. Postes de travail, écrans, baies de brassage, serveurs : on débranche méthodiquement, on étiquette chaque câble et chaque poste, on emballe en protection antistatique et on transporte calé et tracé. À l'arrivée, on replace et on rebranche selon le plan, en coordination avec votre service informatique ou votre prestataire. Le matériel critique peut être déménagé en premier et en priorité, pour que le réseau soit opérationnel dès la reprise."
}, {
  t: "Étiquetage et plan d'implantation",
  p: "Un transfert réussi se joue sur la rigueur de l'étiquetage. Chaque carton et chaque meuble est repéré par service et par collaborateur, et un plan d'implantation des nouveaux locaux est validé avec vous en amont. Résultat : à l'arrivée, rien n'est posé au hasard, chaque poste retrouve sa place et chacun récupère ses affaires sans chercher. C'est ce qui transforme une reprise chaotique en simple reprise de travail."
}, {
  t: "Vos quartiers d'affaires, on les connaît",
  p: "Notre vrai atout, c'est de connaître le terrain économique azuréen. Les bureaux de l'Arénas et de l'Éco-Vallée (Nice Méridia) près de l'aéroport, la technopole de Sophia Antipolis (Antibes, Valbonne), les sièges et commerces de la Croisette et de Cannes La Bocca, les bureaux de Monaco, la zone commerciale de Cap 3000 à Saint-Laurent-du-Var, les zones d'activité de Carros et de la Trinité : on sait où se garer, comment accéder aux parkings et aux quais, et quels créneaux d'immeuble respecter. Un transfert sur la Côte d'Azur sans perdre une heure à chercher un accès."
}, {
  t: "Commerce, cabinet, archives : chaque métier ses règles",
  p: "Un commerce veut une fermeture la plus courte possible : on planifie au plus serré, parfois de nuit, pour rouvrir vite. Un cabinet (avocat, médecin, expert-comptable) exige une confidentialité absolue des dossiers : cartons scellés, inventaire, traçabilité. Pour les archives et documents, on assure une chaîne de traçabilité complète, et on peut les mettre en <a href=\"Archivage.html\">archivage sécurisé</a> ou en <a href=\"Stockage.html\">garde-meuble</a> pendant la transition. À chaque métier sa contrainte, qu'on intègre dès le devis."
}];
const PRO_FAQ = [{
  q: "Pouvez-vous intervenir le soir, le week-end ou les jours fériés ?",
  a: "Oui, c'est même la norme pour un déménagement d'entreprise : on travaille hors heures ouvrées pour ne pas interrompre votre activité. Vos équipes ferment le vendredi et retrouvent des bureaux prêts à l'emploi le lundi."
}, {
  q: "Combien de temps à l'avance faut-il réserver un transfert ?",
  a: "Pour un déménagement de bureaux, prévoyez idéalement quelques semaines : le temps de l'audit des locaux, du plan de transfert et du calage des créneaux d'immeuble. Mais on sait aussi gérer les délais serrés ; parlez-nous de vos dates."
}, {
  q: "Gérez-vous le matériel informatique et les serveurs ?",
  a: "Oui : débranchement, étiquetage des câbles, emballage antistatique, transport tracé et rebranchement selon le plan, en coordination avec votre service informatique. Le matériel critique peut être traité en priorité."
}, {
  q: "Fournissez-vous une facture conforme et la TVA est-elle récupérable ?",
  a: "Oui : devis détaillé et facture conforme, exploitables par vos services achats, comptabilité ou RH. La TVA sur un déménagement professionnel est en principe récupérable selon votre situation."
}, {
  q: "Comment garantissez-vous la confidentialité des dossiers ?",
  a: "Pour les cabinets et services sensibles, on travaille en cartons scellés, avec inventaire et chaîne de traçabilité. L'équipe est briefée sur la confidentialité, et les archives peuvent être mises en archivage ou garde-meuble sécurisé."
}, {
  q: "Sur quelles villes intervenez-vous, et en national ?",
  a: "On est basés à Nice et on transfère les entreprises sur toute la Côte d'Azur : Nice, Sophia Antipolis, Cannes, Antibes, Monaco, Saint-Laurent-du-Var, Grasse et les zones d'activité du 06. Et pour un transfert longue distance, on intervient partout en France, avec une seule équipe et un interlocuteur unique du devis à la reprise."
}];
function EntHero() {
  return React.createElement("section", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "breadcrumb"
  }, React.createElement("a", {
    href: "Les Bras Cass\xE9s.html"
  }, "Accueil"), React.createElement("span", {
    className: "sep"
  }, "/"), React.createElement("span", null, "D\xE9m\xE9nagement d'entreprise")), React.createElement("h1", null, "D\xE9m\xE9nager vos bureaux ", React.createElement("em", null, "sans mettre l'activit\xE9 en pause.")), React.createElement("p", {
    className: "lede"
  }, "Transfert de bureaux, de commerce ou de cabinet : on planifie, on ex\xE9cute hors heures ouvr\xE9es, et on rouvre vos postes pr\xEAts \xE0 l'emploi. ", React.createElement("span", {
    className: "ast"
  }, "*"), "Un seul interlocuteur, du devis \xE0 la reprise.")));
}
function EntIntro() {
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
  }, "*"), " Votre d\xE9m\xE9nagement d'entreprise"), React.createElement("p", {
    className: "lead"
  }, "D\xE9m\xE9nager une entreprise, ce n'est pas d\xE9m\xE9nager un appartement en plus grand. L'enjeu n'est pas votre mobilier, c'est votre ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "activit\xE9"), " : chaque heure de bureaux ferm\xE9s, de caisse \xE9teinte ou de serveur d\xE9branch\xE9 co\xFBte de l'argent. On pilote votre ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "transfert de bureaux \xE0 Nice et sur la C\xF4te d'Azur"), " comme un projet, pour que vos \xE9quipes retrouvent des postes pr\xEAts \xE0 l'emploi sans perdre une journ\xE9e de production."), React.createElement("p", null, "Un chef de projet unique, une intervention hors heures ouvr\xE9es, un mat\xE9riel informatique et des archives trait\xE9s avec m\xE9thode, et une facturation pro conforme : tout est pens\xE9 pour que votre transfert soit un non-\xE9v\xE9nement pour votre activit\xE9. Du studio de trois personnes au plateau de deux cents, on adapte l'\xE9quipe et le planning."), React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 32
    }
  }, React.createElement("a", {
    href: "Devis.html",
    className: "btn btn-primary"
  }, "Devis & planning sous 24h", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "Formules.html",
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
  }, "L'essentiel d'un transfert pro"), React.createElement("div", {
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
  }, "Chef de projet"), " \xB7 un interlocuteur unique"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Hors heures"), " \xB7 soir, week-end, jours f\xE9ri\xE9s"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Informatique"), " \xB7 d\xE9branchement et rebranchement"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Facturation pro"), " \xB7 conforme, TVA r\xE9cup\xE9rable"), React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Zone"), " \xB7 Nice, C\xF4te d'Azur et national")), React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--rule)',
      fontSize: 13.5,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, "Archives \xE0 transf\xE9rer ? Voir aussi l'", React.createElement("a", {
    href: "Archivage.html",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "archivage s\xE9curis\xE9"), "."))))));
}
function EntDeep() {
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
  }, "*"), " Le transfert en profondeur")), React.createElement("h2", {
    className: "dim-em"
  }, "On ne d\xE9place pas des cartons,", React.createElement("br", null), React.createElement("em", null, "on d\xE9place une activit\xE9."))), React.createElement("div", {
    className: "ap-values reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }, PRO_DEEP.map((d, i) => React.createElement("div", {
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
function EntFaq() {
  const [open, setOpen] = React.useState(null);
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
  }, "*"), " Questions fr\xE9quentes")), React.createElement("h2", {
    className: "dim-em"
  }, "D\xE9m\xE9nagement d'entreprise,", React.createElement("br", null), React.createElement("em", null, "vos questions, nos r\xE9ponses."))), React.createElement("div", {
    className: "faq-list reveal",
    style: {
      maxWidth: 820
    }
  }, PRO_FAQ.map((f, i) => React.createElement("div", {
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
function EntProcess() {
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
  }, "*"), " Notre m\xE9thode")), React.createElement("h2", {
    className: "dim-em"
  }, "Un transfert, \xE7a se pilote.", React.createElement("br", null), React.createElement("em", null, "On en fait un projet, pas une journ\xE9e de chaos."))), React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: '64ch',
      color: 'var(--ink-2)',
      fontSize: 18,
      lineHeight: 1.6
    }
  }, React.createElement("p", null, "Un d\xE9m\xE9nagement professionnel ne se g\xE8re pas comme un appartement : l'enjeu, c'est la ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "continuit\xE9 de votre activit\xE9"), ". Voici notre m\xE9thode, rod\xE9e sur des dizaines de transferts en r\xE9gion ni\xE7oise et au-del\xE0.")), React.createElement("div", {
    className: "values-grid reveal-stagger",
    style: {
      gridTemplateColumns: 'repeat(4,1fr)',
      marginTop: 40
    }
  }, PRO_STEPS.map((s, i) => React.createElement("div", {
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
function EntTypes() {
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
  }, "*"), " Ce qu'on d\xE9m\xE9nage")), React.createElement("h2", {
    className: "dim-em"
  }, "Tous les locaux pro,", React.createElement("br", null), React.createElement("em", null, "chacun avec ses r\xE8gles."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, PRO_TYPES.map((t, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-t"
  }, t.t), React.createElement("div", {
    className: "ap-value-d"
  }, t.d))))));
}
function EntFeats() {
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
  }, "*"), " Ce qui change avec nous")), React.createElement("h2", {
    className: "dim-em"
  }, "Le s\xE9rieux d'un prestataire pro,", React.createElement("br", null), React.createElement("em", null, "la souplesse d'une \xE9quipe \xE0 taille humaine."))), React.createElement("div", {
    className: "ap-values reveal-stagger"
  }, PRO_FEATS.map((f, i) => React.createElement("div", {
    className: "ap-value",
    key: i
  }, React.createElement("div", {
    className: "ap-value-ic"
  }, f.icon), React.createElement("div", {
    className: "ap-value-t"
  }, f.t), React.createElement("div", {
    className: "ap-value-d"
  }, f.d)))), React.createElement("div", {
    className: "reveal",
    style: {
      marginTop: 36,
      fontSize: 15,
      color: 'var(--ink-2)'
    }
  }, "Besoin de reloger un collaborateur ? Voir aussi nos pages ", React.createElement("a", {
    href: "Mutations.html",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "Mutations professionnelles"), " et ", React.createElement("a", {
    href: "Militaire.html",
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "D\xE9m\xE9nagement militaire"), ".")));
}
function EntCTA() {
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
  }, "Un transfert \xE0 planifier ? ", React.createElement("span", {
    className: "scribble",
    style: {
      fontFamily: 'var(--script)',
      color: 'var(--accent)',
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "Parlons-en.")), React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(242,232,207,0.7)',
      marginBottom: 36,
      fontSize: 17
    }
  }, "D\xE9crivez vos locaux et vos contraintes \u2014 on revient sous 24h avec un devis d\xE9taill\xE9 et un planning."), React.createElement(QuickQuote, {
    variant: "dark"
  }))));
}
function App() {
  useScrollReveal();
  return React.createElement(React.Fragment, null, React.createElement(Nav, null), React.createElement("main", null, React.createElement(EntHero, null), React.createElement(EntIntro, null), React.createElement(EntProcess, null), React.createElement(EntTypes, null), React.createElement(EntFeats, null), React.createElement(EntDeep, null), React.createElement(EntFaq, null), React.createElement(EntCTA, null)), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
  try { Object.assign(window, { EntHero, EntIntro, EntDeep, EntFaq, EntProcess, EntTypes, EntFeats, EntCTA, App }); } catch (e) {}
})();
