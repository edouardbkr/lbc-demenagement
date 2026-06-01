// faq-page.jsx — FAQ with category filter + accordion
const { useState } = React;

const FAQ_CATS = ["Devis & prix", "Nos formules", "Le jour J", "Emballage & objets spéciaux", "Assurance & sécurité", "Zones & villes", "Pratique"];

const FAQS = [
// ── Devis & prix ──
{ cat: "Devis & prix", q: "Le devis est-il vraiment gratuit ?", a: "Oui, totalement gratuit et sans engagement. Vous décrivez votre déménagement, on revient sous 24h avec un prix clair et définitif. Aucune carte bancaire, aucun numéro surtaxé, aucune relance commerciale agressive." },
{ cat: "Devis & prix", q: "Comment fixez-vous le prix ?", a: "Sur trois critères objectifs : le volume à déménager (en m³), la distance entre les deux adresses, et la formule choisie (Coup de main, Mains libres ou Mains dans les poches). S'ajoutent les contraintes d'accès : étage, ascenseur, distance de portage, autorisation de stationnement. Le devis détaille chaque ligne — vous savez exactement ce que vous payez." },
{ cat: "Devis & prix", q: "Combien coûte un déménagement en moyenne ?", a: "Sur la Côte d'Azur, comptez en moyenne 670–870 € pour un studio en local, 990–1 290 € pour un 2 pièces, et 1 510–1 970 € pour un 3 pièces. En longue distance (Nice–Paris par exemple), prévoyez plutôt le double. Ce ne sont que des repères : votre devis personnalisé, lui, est précis et ferme." },
{ cat: "Devis & prix", q: "Le prix annoncé peut-il changer le jour J ?", a: "Non. Le prix du devis est le prix payé, point. La seule exception : si le volume réel diffère nettement de ce qui a été décrit (deux fois plus de cartons que prévu, un meuble « oublié » de 200 kg). C'est tout l'intérêt de bien décrire votre inventaire en amont." },
{ cat: "Devis & prix", q: "Faut-il une visite à domicile ?", a: "Pas obligatoirement. Pour les petits volumes, le formulaire en ligne et quelques photos suffisent. Pour un 3 pièces et plus, ou en présence d'objets lourds/précieux, on propose une visite sur place (gratuite) pour un devis au plus juste." },
{ cat: "Devis & prix", q: "Y a-t-il des frais cachés (étage, monte-meuble) ?", a: "Non. Tout ce qui peut influer sur le prix — étage sans ascenseur, longue distance de portage, location d'un monte-meuble, autorisation de stationnement — est chiffré et visible dès le devis. Pas de mauvaise surprise sur la facture finale." },
{ cat: "Devis & prix", q: "Quels sont les moyens et délais de paiement ?", a: "Carte, virement, chèque ou espèces. Un acompte est demandé à la réservation pour bloquer la date, le solde se règle à la fin de la prestation, une fois que tout est en place et que vous avez validé." },
{ cat: "Devis & prix", q: "Mon déménagement est-il déductible ou aidé ?", a: "Dans certains cas oui : mutation professionnelle, déménagement lié à l'emploi, aides de la CAF ou d'Action Logement. On vous fournit une facture détaillée et conforme pour vos démarches." },

// ── Nos formules ──
{ cat: "Nos formules", q: "Quelles sont vos formules ?", a: "Trois, du plus autonome au tout compris : Coup de main (l'essentiel), Mains libres (le confort, la plus demandée) et Mains dans les poches (le clé en main de A à Z). Chacune reprend la précédente et ajoute du service." },
{ cat: "Nos formules", q: "Que comprend la formule Coup de main ?", a: "L'essentiel bien fait : transport avec véhicule adapté, chargement et déchargement par notre équipe, déménagement local ou longue distance, et assurance incluse. Vous préparez vos cartons, on gère le muscle, la route et la casse." },
{ cat: "Nos formules", q: "Que comprend la formule Mains libres ?", a: "Tout le Coup de main, plus : emballage des objets fragiles par notre équipe, protection intégrale du mobilier (couvertures, housses, film), démontage et remontage des meubles, et manutention sécurisée. C'est notre formule la plus choisie." },
{ cat: "Nos formules", q: "Que comprend la formule Mains dans les poches ?", a: "Le grand jeu : tout Mains libres, plus l'emballage de la totalité de vos cartons (objets fragiles compris), le déballage et la mise en place à l'arrivée, et une protection spécifique des objets précieux, œuvres d'art et vaisselle. Vous arrivez les mains dans les poches." },
{ cat: "Nos formules", q: "Quelle formule choisir ?", a: "Dans le doute, prenez Mains libres : c'est le meilleur rapport confort/prix pour la plupart des déménagements. On ajuste ensemble au moment du devis selon votre temps disponible et votre budget." },
{ cat: "Nos formules", q: "Puis-je changer de formule après le devis ?", a: "Oui, tant que la logistique le permet. On réajuste le devis en conséquence, sans pénalité. Mieux vaut nous prévenir quelques jours avant le jour J pour caler l'équipe et le matériel." },

// ── Le jour J ──
{ cat: "Le jour J", q: "À quelle heure arrive l'équipe ?", a: "À l'heure convenue, avec une fenêtre de 15 minutes. On vous prévient en cas d'imprévu de circulation, mais la ponctualité fait partie de notre engagement — votre journée commence quand on l'a dit." },
{ cat: "Le jour J", q: "Combien de déménageurs interviennent ?", a: "Cela dépend du volume et des accès : de 2 personnes pour un studio à 4–5 pour une grande maison. L'équipe et le camion sont dimensionnés au moment du devis pour tenir les délais sans précipitation." },
{ cat: "Le jour J", q: "Combien de temps dure un déménagement ?", a: "Un studio se boucle souvent en une demi-journée ; un 3 pièces en une journée ; une maison ou une longue distance peuvent demander deux jours. On vous donne une estimation horaire dès le devis." },
{ cat: "Le jour J", q: "Dois-je être présent le jour J ?", a: "Idéalement oui, ou un proche de confiance, pour ouvrir, indiquer les pièces à l'arrivée et valider en fin de prestation. Si vous ne pouvez pas, on s'organise avec un mandataire et un état des lieux précis." },
{ cat: "Le jour J", q: "Démontez-vous les meubles ?", a: "Oui, dès la formule Mains libres : démontage au départ, remontage à l'arrivée. Lit, armoire, dressing, table — on s'occupe de tout, revissé comme il faut. La visserie est repérée et conservée pièce par pièce." },
{ cat: "Le jour J", q: "Et s'il pleut le jour J ?", a: "On déménage par tous les temps. Housses imperméables, protection des sols et des passages, le matériel est prévu pour. La pluie niçoise ne décale pas votre planning." },
{ cat: "Le jour J", q: "Que faites-vous des cartons vides ?", a: "Sur demande, on repasse les récupérer après votre installation. Pas de montagne de cartons dans le salon pendant trois semaines." },

// ── Emballage & objets spéciaux ──
{ cat: "Emballage & objets spéciaux", q: "Dois-je emballer moi-même mes cartons ?", a: "Cela dépend de la formule. En Coup de main et Mains libres, vous préparez vos cartons (on protège le mobilier et on démonte). En Mains dans les poches, notre équipe emballe absolument tout pour vous, objets fragiles compris." },
{ cat: "Emballage & objets spéciaux", q: "Fournissez-vous les cartons et le matériel ?", a: "Oui : cartons standards et penderies, papier bulle, couvertures, film étirable, adhésif. On peut vous les livrer avant le jour J pour que vous preniez de l'avance, ou tout apporter le jour même." },
{ cat: "Emballage & objets spéciaux", q: "Comment protégez-vous les meubles fragiles ?", a: "Couvertures matelassées, housses, film plastique et cartons sur-mesure pour les angles et les écrans. Tout est calé et sanglé dans le camion pour qu'aucun meuble ne bouge sur la route." },
{ cat: "Emballage & objets spéciaux", q: "Déménagez-vous un piano ou un coffre-fort ?", a: "Oui. Piano droit, piano à queue, coffre-fort : ce sont des charges lourdes et délicates qu'on transporte avec le matériel adapté (sangles, chariots, parfois monte-meuble) et une équipe renforcée. Signalez-les au devis pour qu'on prévoie le bon dispositif." },
{ cat: "Emballage & objets spéciaux", q: "Et les objets très lourds (frigo américain, jacuzzi, billard) ?", a: "On en a l'habitude. Frigo américain, jacuzzi/spa, billard, baby-foot, appareils de sport : on les note à l'inventaire car ils pèsent et demandent un démontage ou une manutention spécifique. Mieux vaut les déclarer que de les découvrir le jour J." },
{ cat: "Emballage & objets spéciaux", q: "Gérez-vous les œuvres d'art et la vaisselle précieuse ?", a: "Oui, avec un emballage renforcé sur mesure (caisses, mousse, coins de protection) et une assurance valeur déclarée pour les pièces de grande valeur. C'est inclus en formule Mains dans les poches." },
{ cat: "Emballage & objets spéciaux", q: "Transportez-vous les plantes et l'électroménager ?", a: "Oui pour les deux. L'électroménager est débranché, sécurisé et calé. Les plantes voyagent protégées — on vous conseille juste de ne pas les arroser la veille pour limiter le poids et les dégâts." },

// ── Assurance & sécurité ──
{ cat: "Assurance & sécurité", q: "Mes affaires sont-elles assurées ?", a: "Oui, une assurance multirisque est incluse dans chaque formule. Pour les objets de valeur (œuvres d'art, instruments, vaisselle précieuse), une couverture renforcée en valeur déclarée est disponible." },
{ cat: "Assurance & sécurité", q: "Et en cas de casse ?", a: "On le constate ensemble, on le déclare, et l'assurance prend le relais selon les plafonds prévus. Tout est écrit noir sur blanc dans le contrat — rien n'est laissé au hasard, et on ne casse jamais notre parole." },
{ cat: "Assurance & sécurité", q: "Qui réalise le déménagement ?", a: "Edouard et Anthony, les deux fondateurs, en personne. Déclarés et assurés, présents du premier carton au dernier — pas d'inconnu recruté la veille pour porter vos affaires." },
{ cat: "Assurance & sécurité", q: "Et si un meuble ne passe pas (escalier étroit, porte basse) ?", a: "On anticipe au devis grâce aux infos d'accès (étage, ascenseur, portage). Si besoin, on loue un monte-meuble pour passer par la fenêtre ou le balcon — chiffré à l'avance, jamais imposé en surprise." },

// ── Zones & villes ──
{ cat: "Zones & villes", q: "Dans quelles villes intervenez-vous ?", a: "Toute la Côte d'Azur et la région PACA : Nice, Cannes, Antibes, Monaco, Menton, Grasse, Cagnes-sur-Mer, Saint-Laurent-du-Var, Vence, Mougins, Valbonne, Sophia Antipolis, Saint-Tropez, Fréjus… et bien au-delà." },
{ cat: "Zones & villes", q: "Gérez-vous les déménagements longue distance ?", a: "Absolument. Nice–Paris, Nice–Lyon, Nice–Marseille, Nice–Bordeaux, Nice–Toulouse, Nice–Lille, Nice–Nantes : on organise le trajet, on optimise le camion et on tient les délais annoncés." },
{ cat: "Zones & villes", q: "Intervenez-vous à Monaco ?", a: "Oui, régulièrement. On connaît les contraintes de la Principauté : créneaux de livraison, accès des immeubles, stationnement réglementé. On gère les autorisations nécessaires." },
{ cat: "Zones & villes", q: "Déménagez-vous à l'international ?", a: "Oui, pour les destinations européennes principalement (Italie, Suisse, Espagne…). On s'occupe de la logistique, des formalités de transport et du suivi jusqu'à l'arrivée." },
{ cat: "Zones & villes", q: "Et le stationnement à Nice ?", a: "On s'occupe des autorisations de stationnement auprès de la mairie. Vieux-Nice, Carré d'Or, Cimiez, Libération : on connaît les contraintes de chaque quartier et on réserve l'emplacement camion." },
{ cat: "Zones & villes", q: "Gérez-vous les accès difficiles de l'arrière-pays ?", a: "Oui : villages perchés, ruelles étroites, chemins de traverse autour de Vence, Èze, Saint-Paul ou Tourrettes. On adapte la taille du camion et, si nécessaire, on fait la navette avec un véhicule plus petit." },

// ── Pratique ──
{ cat: "Pratique", q: "Comment réserver une date ?", a: "Demandez votre devis en ligne ou par téléphone. Une fois le devis validé et l'acompte versé, la date est bloquée et vous recevez une confirmation écrite avec le déroulé du jour J." },
{ cat: "Pratique", q: "Quel délai pour réserver ?", a: "Idéalement 2 à 3 semaines à l'avance, surtout en haute saison (juin à septembre) et en fin de mois. Mais on gère aussi les demandes plus serrées — appelez-nous, on trouve souvent une solution." },
{ cat: "Pratique", q: "Gérez-vous les déménagements de dernière minute ?", a: "Souvent oui, selon nos disponibilités. Un imprévu, une date qui se libère : un coup de fil et on regarde tout de suite ce qu'on peut caler." },
{ cat: "Pratique", q: "Puis-je annuler ou reporter ?", a: "Oui. Un report est gratuit s'il est signalé à l'avance ; en cas d'annulation tardive, seul l'acompte peut rester dû. Les conditions exactes figurent sur votre devis, en clair." },
{ cat: "Pratique", q: "Proposez-vous du garde-meuble / stockage ?", a: "Oui, en box sécurisé pour quelques jours comme pour plusieurs mois — pratique quand les dates d'entrée et de sortie ne coïncident pas. On vous chiffre le stockage avec le déménagement." },
{ cat: "Pratique", q: "Travaillez-vous le week-end et les jours fériés ?", a: "Oui, sur réservation. Les samedis et fins de mois partent vite, pensez à réserver tôt. Les dimanches et fériés sont possibles selon les villes." },
{ cat: "Pratique", q: "Faut-il vider les meubles (tiroirs, penderie) ?", a: "Oui pour la plupart : commodes, bureaux, placards doivent être vidés pour le transport (sécurité et poids). On vous fournit des cartons-penderie pour les vêtements sur cintres, qui voyagent prêts à raccrocher." },
{ cat: "Pratique", q: "Faites-vous du déménagement d'entreprise ?", a: "Oui : bureaux, commerces, locaux professionnels. On planifie souvent en soirée ou le week-end pour limiter l'interruption d'activité, avec un interlocuteur dédié du début à la fin." }];


function FaqHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>FAQ</span>
        </div>
        <h1>Questions fréquentes, <em>réponses directes.</em></h1>
        <p className="lede">
          Tout ce qu'on nous demande le plus souvent, sans langue de bois. Une question qui n'est pas là ? <span className="ast">*</span>Appelez-nous, on adore en parler.
        </p>
      </div>
    </section>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="ico">+</span>
      </button>
      <div className="faq-a"><p>{item.a}</p></div>
    </div>
  );
}

function FaqSection() {
  const [cat, setCat] = useState(FAQ_CATS[0]);
  const [openKey, setOpenKey] = useState(null);
  const list = FAQS.filter(f => f.cat === cat);

  return (
    <section className="sec">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-cats reveal">
            {FAQ_CATS.map(c => (
              <button key={c} className={"faq-cat" + (c === cat ? " active" : "")} onClick={() => { setCat(c); setOpenKey(null); }}>
                {c}
              </button>
            ))}
          </div>
          <div className="faq-list reveal">
            {list.map((f, i) => (
              <FaqItem
                key={f.q}
                item={f}
                open={openKey === f.q}
                onToggle={() => setOpenKey(k => k === f.q ? null : f.q)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{fontFamily:'var(--serif)', fontWeight:600, fontSize:'clamp(34px,4vw,58px)', color:'var(--cream-on-dark)', letterSpacing:'-0.02em', marginBottom: 12, textAlign:'center'}}>
            Toujours une question ? <span className="scribble" style={{fontFamily:'var(--script)', color:'var(--accent)', display:'inline-block', transform:'rotate(-3deg)'}}>Parlons-en.</span>
          </h2>
          <p style={{textAlign:'center', color:'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17}}>
            Un devis gratuit répond souvent mieux qu'une FAQ. Deux minutes.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>
  );
}

function App() {
  useScrollReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <FaqHero />
        <FaqSection />
        <QuoteBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
