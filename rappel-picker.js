/* rappel-picker.jsx — compilé par build.js, ne pas éditer */
(function () {
(function () {
  const {
    useState
  } = React;
  const HEURES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const DELAI_MIN_MIN = 60;
  const JOURS = 14;
  const p2 = n => n < 10 ? "0" + n : "" + n;
  const ymd = d => d.getFullYear() + "-" + p2(d.getMonth() + 1) + "-" + p2(d.getDate());
  function heuresDispo(date, now) {
    if (ymd(date) !== ymd(now)) return HEURES;
    const limite = new Date(now.getTime() + DELAI_MIN_MIN * 60000);
    return HEURES.filter(h => {
      const [hh, mm] = h.split(":").map(Number);
      const t = new Date(date);
      t.setHours(hh, mm, 0, 0);
      return t > limite;
    });
  }
  function joursDispo(now) {
    const out = [];
    for (let i = 0; i < JOURS && out.length < 10; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const h = heuresDispo(d, now);
      if (!h.length) continue;
      out.push({
        date: d,
        key: ymd(d),
        heures: h
      });
    }
    return out;
  }
  function labelJour(d, now) {
    if (ymd(d) === ymd(now)) return {
      haut: "Auj.",
      bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", {
        month: "short"
      })
    };
    const demain = new Date(now);
    demain.setDate(now.getDate() + 1);
    if (ymd(d) === ymd(demain)) return {
      haut: "Demain",
      bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", {
        month: "short"
      })
    };
    return {
      haut: d.toLocaleDateString("fr-FR", {
        weekday: "short"
      }).replace(".", ""),
      bas: d.getDate() + " " + d.toLocaleDateString("fr-FR", {
        month: "short"
      })
    };
  }
  function RappelPicker({
    onConfirm,
    confirming
  }) {
    const now = new Date();
    const jours = joursDispo(now);
    const [jour, setJour] = useState(jours.length ? jours[0].key : "");
    const [heure, setHeure] = useState("");
    if (!jours.length) return null;
    const courant = jours.find(j => j.key === jour) || jours[0];
    const maintenant = () => {
      if (confirming) return;
      const n = new Date();
      onConfirm({
        date: ymd(n),
        heure: p2(n.getHours()) + ":" + p2(n.getMinutes()),
        label: "tout de suite",
        immediat: true
      });
    };
    const valider = () => {
      if (!heure || confirming) return;
      const d = courant.date;
      const phrase = d.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long"
      }) + " à " + heure.replace(":", "h");
      onConfirm({
        date: courant.key,
        heure: heure,
        label: phrase
      });
    };
    return React.createElement("div", {
      className: "rdv-box"
    }, React.createElement("div", {
      className: "rdv-head"
    }, React.createElement("h4", null, "Quand souhaitez-vous qu'on vous appelle\xA0?"), React.createElement("p", null, "On vous confirme votre prix exact en 5 minutes au t\xE9l\xE9phone. ", React.createElement("strong", null, "7 jours sur 7, jusqu'\xE0 22h"), " : choisissez votre moment, on s'adapte.")), React.createElement("button", {
      type: "button",
      className: "rdv-now",
      disabled: confirming,
      onClick: maintenant
    }, React.createElement("span", {
      className: "rdv-now-ic",
      "aria-hidden": "true"
    }, "\uD83D\uDCDE"), React.createElement("span", {
      className: "rdv-now-txt"
    }, React.createElement("strong", null, confirming ? "Enregistrement…" : "Rappelez-moi tout de suite"), React.createElement("span", null, "On vous appelle dans les minutes qui suivent"))), React.createElement("div", {
      className: "rdv-sep"
    }, React.createElement("span", null, "ou choisissez votre cr\xE9neau")), React.createElement("div", {
      className: "rdv-days",
      role: "group",
      "aria-label": "Choisir un jour"
    }, jours.map(j => {
      const l = labelJour(j.date, now);
      return React.createElement("button", {
        type: "button",
        key: j.key,
        className: "rdv-day" + (j.key === courant.key ? " on" : ""),
        onClick: () => {
          setJour(j.key);
          setHeure("");
        }
      }, React.createElement("span", {
        className: "rdv-day-top"
      }, l.haut), React.createElement("span", {
        className: "rdv-day-bot"
      }, l.bas));
    })), React.createElement("div", {
      className: "rdv-slots",
      role: "group",
      "aria-label": "Choisir une heure"
    }, courant.heures.map(h => React.createElement("button", {
      type: "button",
      key: h,
      className: "rdv-slot" + (h === heure ? " on" : ""),
      onClick: () => setHeure(h)
    }, h.replace(":", "h")))), React.createElement("button", {
      type: "button",
      className: "btn btn-primary rdv-confirm",
      disabled: !heure || confirming,
      onClick: valider
    }, confirming ? "Enregistrement…" : heure ? "Confirmer le rappel à " + heure.replace(":", "h") : "Choisissez une heure", !confirming && heure && React.createElement("span", {
      className: "arrow"
    }, "\u2192")), React.createElement("p", {
      className: "rdv-note"
    }, "Un emp\xEAchement\xA0? Vous pourrez d\xE9caler, on vous envoie un rappel avant l'appel."));
  }
  Object.assign(window, {
    RappelPicker
  });
})();
})();
