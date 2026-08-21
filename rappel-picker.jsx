// rappel-picker.jsx — « Quand voulez-vous qu'on vous appelle ? »
//
// Affiché juste après la fourchette de prix : le prospect vient de voir un chiffre, c'est le
// moment exact où il veut en parler. Il choisit son jour et son heure au lieu de subir un
// rappel au hasard, et nous on appelle quelqu'un qui attend l'appel. Bien meilleur taux de
// décroché qu'un rappel à froid.
(function () {
  const { useState } = React;

  // Créneaux d'appel proposés, 7 jours sur 7, de 7h à 22h par tranches d'une heure. Les
  // deux bouts comptent autant que le milieu de journée : certains ne sont joignables
  // qu'avant de partir travailler, d'autres qu'une fois les enfants couchés, et un appel
  // accepté à 7h ou à 22h vaut mieux qu'un prospect qu'on ne joint jamais.
  const HEURES = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Délai minimum avant un créneau à heure fixe : on ne propose pas 18h à 17h50. Le rappel
  // « Maintenant » ci-dessous existe justement pour le prospect trop pressé.
  const DELAI_MIN_MIN = 60;

  // Cinq jours, pas plus : au-delà, un rendez-vous téléphonique n'est plus tenu. Le
  // week-end est compris, LBC appelle 7 jours sur 7 comme le dit le texte au-dessus.
  const JOURS = 5;

  // Le rappel immédiat n'est proposé que pendant nos heures d'appel. Le promettre à 2h du
  // matin serait une promesse qu'on ne tient pas, et un prospect déçu dès le premier geste.
  const OUVERTURE = 7, FERMETURE = 22;
  function estOuvert(now) {
    const h = now.getHours();
    return h >= OUVERTURE && h < FERMETURE;
  }

  const p2 = (n) => (n < 10 ? "0" + n : "" + n);
  const ymd = (d) => d.getFullYear() + "-" + p2(d.getMonth() + 1) + "-" + p2(d.getDate());

  // Créneaux encore proposables pour une date donnée (filtre les heures passées aujourd'hui)
  function heuresDispo(date, now) {
    if (ymd(date) !== ymd(now)) return HEURES;
    const limite = new Date(now.getTime() + DELAI_MIN_MIN * 60000);
    return HEURES.filter((h) => {
      const [hh, mm] = h.split(":").map(Number);
      const t = new Date(date);
      t.setHours(hh, mm, 0, 0);
      return t > limite;
    });
  }

  // Les JOURS prochains jours, dimanche COMPRIS (LBC travaille 7j/7), en gardant seulement
  // ceux où il reste au moins un créneau. Aujourd'hui fait exception : tant qu'on est dans
  // les heures d'appel il reste proposable, même s'il ne reste plus une seule heure pleine,
  // parce que le rappel « dans les 30 minutes » y est toujours possible.
  function joursDispo(now) {
    const out = [];
    for (let i = 0; i < JOURS && out.length < 10; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const h = heuresDispo(d, now);
      const cestAujourdhui = i === 0;
      if (!h.length && !(cestAujourdhui && estOuvert(now))) continue;
      out.push({ date: d, key: ymd(d), heures: h, immediat: cestAujourdhui && estOuvert(now) });
    }
    return out;
  }

  function labelJour(d, now) {
    if (ymd(d) === ymd(now)) return { haut: "Auj.", bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", { month: "short" }) };
    const demain = new Date(now); demain.setDate(now.getDate() + 1);
    if (ymd(d) === ymd(demain)) return { haut: "Demain", bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", { month: "short" }) };
    return { haut: d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", ""), bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", { month: "short" }) };
  }

  // `milieu` : ce qu'on glisse ENTRE le rappel immédiat et la grille des créneaux. Le devis
  // y pose sa fourchette de prix. Le prospect lit donc, dans l'ordre : on vous rappelle
  // tout de suite, voici votre prix, ou sinon choisissez votre créneau. Le prix arrive
  // pile au moment où il hésite entre les deux.
  function RappelPicker({ onConfirm, confirming, milieu }) {
    const now = new Date();
    const jours = joursDispo(now);
    const [jour, setJour] = useState(jours.length ? jours[0].key : "");
    const [heure, setHeure] = useState("");

    if (!jours.length) return null;
    const courant = jours.find((j) => j.key === jour) || jours[0];

    /* « Maintenant » est traité comme une heure parmi les autres, valeur "now". Ce qu'on
       envoie au cockpit est l'heure COURANTE : l'échéance sert à faire remonter le dossier
       en tête des rappels dus, et la décaler ne ferait que retarder le moment où on le voit. */
    const valider = () => {
      if (!heure || confirming) return;
      if (heure === "now") {
        const n = new Date();
        onConfirm({
          date: ymd(n),
          heure: p2(n.getHours()) + ":" + p2(n.getMinutes()),
          label: "maintenant",
          immediat: true
        });
        return;
      }
      const d = courant.date;
      const phrase = d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }) + " à " + heure.replace(":", "h");
      onConfirm({ date: courant.key, heure: heure, label: phrase });
    };

    return (
      <div className="rdv-box">
        {/* Le prix vient EN PREMIER, la question du rappel juste après. La question doit
            toucher les jours et les heures qu'elle introduit : posée en haut du bloc, la
            carte de prix s'intercalait entre elle et sa réponse. L'ancien titre
            « Choisissez votre créneau » disparaît, ce h4 le remplace mot pour mot. */}
        {milieu}

        <div className="rdv-head">
          <h4>Quand souhaitez-vous qu'on vous appelle&nbsp;?</h4>
          <p>On vous confirme votre prix exact en 5 minutes au téléphone, <strong>7 jours sur 7, jusqu'à 22h</strong>.</p>
        </div>

        <div className="rdv-days" role="group" aria-label="Choisir un jour">
          {jours.map((j) => {
            const l = labelJour(j.date, now);
            return (
              <button
                type="button" key={j.key}
                className={"rdv-day" + (j.key === courant.key ? " on" : "")}
                onClick={() => { setJour(j.key); setHeure(""); }}>
                <span className="rdv-day-top">{l.haut}</span>
                <span className="rdv-day-bot">{l.bas}</span>
              </button>);
          })}
        </div>

        {/* Les heures du jour choisi. Quand ce jour est aujourd'hui et qu'on est encore
            joignable, « Maintenant » ouvre la liste : c'est le choix du prospect qui vient
            de voir son prix et qui veut en parler tout de suite. Il n'est pas dans un bloc
            à part, c'est un créneau comme les autres, simplement le premier. */}
        <div className="rdv-slots" role="group" aria-label="Choisir une heure">
          {courant.immediat &&
            <button
              type="button"
              className={"rdv-slot rdv-slot-vite" + (heure === "now" ? " on" : "")}
              onClick={() => setHeure("now")}>
              Maintenant
            </button>
          }
          {courant.heures.map((h) =>
            <button
              type="button" key={h}
              className={"rdv-slot" + (h === heure ? " on" : "")}
              onClick={() => setHeure(h)}>
              {h.replace(":", "h")}
            </button>
          )}
        </div>

        <button type="button" className="btn btn-primary rdv-confirm" disabled={!heure || confirming} onClick={valider}>
          {confirming ? "Enregistrement…" :
           heure === "now" ? "Me rappeler maintenant" :
           heure ? "Confirmer le rappel à " + heure.replace(":", "h") : "Choisissez une heure"}
          {!confirming && heure && <span className="arrow">→</span>}
        </button>
        <p className="rdv-note">Un empêchement&nbsp;? Vous pourrez décaler.</p>
      </div>);

  }

  Object.assign(window, { RappelPicker });
})();
