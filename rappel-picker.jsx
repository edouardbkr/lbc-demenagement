// rappel-picker.jsx — « Quand voulez-vous qu'on vous appelle ? »
//
// Affiché juste après la fourchette de prix : le prospect vient de voir un chiffre, c'est le
// moment exact où il veut en parler. Il choisit son jour et son heure au lieu de subir un
// rappel au hasard, et nous on appelle quelqu'un qui attend l'appel. Bien meilleur taux de
// décroché qu'un rappel à froid.
(function () {
  const { useState } = React;

  // Créneaux d'appel proposés, 7 jours sur 7. Pas de 13h (pause), et soirée jusqu'à 22h :
  // beaucoup de prospects ne sont joignables qu'une fois les enfants couchés, et un appel
  // accepté à 22h vaut mieux qu'un prospect qu'on ne joint jamais.
  const HEURES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Délai minimum avant un rappel : on ne propose pas un créneau dans 5 minutes.
  const DELAI_MIN_MIN = 60;

  // Nombre de jours proposés
  const JOURS = 14;

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

  // Les JOURS prochains jours, dimanche COMPRIS (LBC travaille 7j/7), en gardant
  // seulement ceux où il reste au moins un créneau.
  function joursDispo(now) {
    const out = [];
    for (let i = 0; i < JOURS && out.length < 10; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const h = heuresDispo(d, now);
      if (!h.length) continue;
      out.push({ date: d, key: ymd(d), heures: h });
    }
    return out;
  }

  function labelJour(d, now) {
    if (ymd(d) === ymd(now)) return { haut: "Auj.", bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", { month: "short" }) };
    const demain = new Date(now); demain.setDate(now.getDate() + 1);
    if (ymd(d) === ymd(demain)) return { haut: "Demain", bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", { month: "short" }) };
    return { haut: d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", ""), bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", { month: "short" }) };
  }

  function RappelPicker({ onConfirm, confirming }) {
    const now = new Date();
    const jours = joursDispo(now);
    const [jour, setJour] = useState(jours.length ? jours[0].key : "");
    const [heure, setHeure] = useState("");

    if (!jours.length) return null;
    const courant = jours.find((j) => j.key === jour) || jours[0];

    const valider = () => {
      if (!heure || confirming) return;
      const d = courant.date;
      const phrase = d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }) + " à " + heure.replace(":", "h");
      onConfirm({ date: courant.key, heure: heure, label: phrase });
    };

    return (
      <div className="rdv-box">
        <div className="rdv-head">
          <h4>Quand souhaitez-vous qu'on vous appelle&nbsp;?</h4>
          <p>On vous confirme votre prix exact en 5 minutes au téléphone. <strong>7 jours sur 7, jusqu'à 22h</strong> : choisissez votre moment, on s'adapte.</p>
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

        <div className="rdv-slots" role="group" aria-label="Choisir une heure">
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
          {confirming ? "Enregistrement…" : heure ? "Confirmer le rappel à " + heure.replace(":", "h") : "Choisissez une heure"}
          {!confirming && heure && <span className="arrow">→</span>}
        </button>
        <p className="rdv-note">Un empêchement&nbsp;? Vous pourrez décaler, on vous envoie un rappel avant l'appel.</p>
      </div>);

  }

  Object.assign(window, { RappelPicker });
})();
