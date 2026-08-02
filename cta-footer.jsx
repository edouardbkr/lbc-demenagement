// cta-footer.jsx — Home contact CTA band (Footer now lives in site.jsx)

const CTA_LEAD_EMAIL = "contact@lbcdemenagement.com";
const CTA_LEAD_ENDPOINT = "https://formsubmit.co/ajax/" + CTA_LEAD_EMAIL;

// Enregistrement du lead dans le cockpit via NOTRE domaine (/api/lead), en plus de l'e-mail.
// Indispensable : formsubmit.co est un domaine tiers, coupé par les bloqueurs de pub et les DNS
// filtrants. Quand il l'était, ce formulaire ne laissait AUCUNE trace nulle part. La requête
// même-origine, elle, passe toujours.
// Résout à true (enregistré), false (refus explicite) ou null (indéterminé — on ne l'alarme pas).
function ctaSendToCockpit(upd) {
  const np = (upd.nom || "").trim().split(/\s+/);
  const prenom = np.shift() || "";
  const nom = np.join(" ");
  const at = window.LBC_ATTRIB ? window.LBC_ATTRIB() : null;
  const payload = {
    source: (at && at.canal) || "site_web",
    attribution: at || null,
    statut: "Lead démarré (étape 1 depuis l'accueil)",
    client: { prenom, nom, tel: upd.tel || "", email: upd.email || "", contactPref: "Téléphone" },
    formule: "standard",
    formulaireType: "partiel",
    // Volume théorique déduit de la surface, comme le fait la page Devis : la fiche du
    // cockpit est ainsi exploitable même si le prospect s'arrête à l'étape 2.
    volumeEstime: ({ studio: 14, t2: 25, t3: 40, t4: 60 })[upd.surface] ?? null,
    contactPref: "Téléphone",
    message: [
      "Étape 1 remplie depuis le bandeau de la page d'accueil. Le prospect a été renvoyé à l'étape 2 du devis.",
      upd.type ? "Type de logement : " + upd.type : "",
      upd.surface ? "Surface déclarée : " + upd.surface : ""
    ].filter(Boolean).join("\n")
  };
  try {
    return fetch("/api/lead", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload })
    }).then((r) => r.ok).catch(() => null);
  } catch (e) { return Promise.resolve(null); }
}

function CTA() {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  // true = le serveur a explicitement refusé d'enregistrer. On le dit au visiteur plutôt que
  // d'afficher un « demande envoyée » alors que rien n'est arrivé.
  const [failed, setFailed] = React.useState(false);
  const [last, setLast] = React.useState(null);

  const enregistrer = (upd) => Promise.race([
    ctaSendToCockpit(upd),
    new Promise((r) => setTimeout(() => r(null), 6000))
  ]);

  const submit = async (e) => {
    e.preventDefault();
    const upd = {};
    for (const el of e.currentTarget.elements) { if (el.name) upd[el.name] = el.value; }
    // Anti-spam honeypot : les bots le remplissent, pas les humains.
    if (upd._honey) { setSent(true); return; }
    if (sending) return;
    try {
      fetch(CTA_LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          _subject: "🚚 Nouvelle demande de devis (accueil) — Les Bras Cassés",
          _template: "table",
          "Nom": upd.nom || "—",
          "Téléphone": upd.tel || "—",
          "Email": upd.email || "—",
          "Type de logement": upd.type || "—",
          "Surface": upd.surface || "—"
        })
      }).catch(() => {});
    } catch (err) {}
    // On ATTEND l'enregistrement cockpit (6 s de sécurité) avant de dire au visiteur que c'est parti.
    setSending(true);
    let ok = null;
    try { ok = await enregistrer(upd); } catch (err) {}
    setSending(false);
    if (ok === false) { setLast(upd); setFailed(true); return; }
    if (window.fbq) window.fbq("trackCustom", "DevisDemarre");

    // Ce bloc reprend exactement les champs de l'étape 1 du devis : plutôt que d'afficher un
    // simple « c'est envoyé », on emmène le visiteur à l'étape 2, déjà remplie. Il continue
    // son devis au lieu d'attendre un rappel, et Edouard a déjà reçu l'e-mail et le lead.
    const p = new URLSearchParams();
    ["nom", "tel", "email", "type", "surface"].forEach((k) => { if (upd[k]) p.set(k, upd[k]); });
    p.set("etape", "2");
    window.location.href = "Devis?" + p.toString();
  };

  // Nouvelle tentative avec les données déjà saisies (rien à retaper).
  const retry = async () => {
    if (sending || !last) return;
    setSending(true);
    let ok = null;
    try { ok = await enregistrer(last); } catch (err) {}
    setSending(false);
    if (ok === false) return;
    if (window.fbq) window.fbq("track", "Lead");
    setFailed(false);
    setSent(true);
  };

  return (
    <section className="sec cta-band" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num" style={{ color: 'var(--cream-on-dark)' }}><span className="asterisk">*</span> 04 / Parlons de votre déménagement</div>
          </div>
          <div></div>
        </div>

        <div className="cta-grid reveal">
          <div>
            <h2>
              Prêt à déménager ?<br />
              <em>Nous, on l'est <span className="scribble">toujours.</span></em>
            </h2>
            <p className="cta-side">
              Commencez ici : ces cinq informations suffisent pour démarrer. On enchaîne ensuite sur les adresses et votre inventaire, et vous obtenez une fourchette de prix immédiate. Deux minutes en tout, sans engagement.
            </p>
            <p className="cta-side" style={{ marginTop: 16 }}>
              Préférez de vive voix ? <a href="tel:+33615976577">06 15 97 65 77</a><br />
              Un mail ? <a href="mailto:contact@lbcdemenagement.com">contact@lbcdemenagement.com</a>
            </p>
          </div>

          {failed ?
          <div className="cta-form cta-thanks">
            <div className="cta-thanks-mark" style={{ color: '#E8846B' }}>!</div>
            <h3 style={{ margin: '4px 0 8px' }}>Nous n'avons pas pu enregistrer votre demande.</h3>
            <p className="cta-side">
              Un souci technique de notre côté. Le plus rapide : appelez-nous au <a href="tel:+33615976577">06 15 97 65 77</a>.
            </p>
            <button type="button" className="cta-submit" style={{ marginTop: 14 }} disabled={sending} onClick={retry}>
              {sending ? "Envoi en cours…" : "Réessayer l'envoi"}
            </button>
          </div> :
          sent ?
          <div className="cta-form cta-thanks">
            <div className="cta-thanks-mark">✓</div>
            <h3 style={{ margin: '4px 0 8px' }}>Demande envoyée.</h3>
            <p className="cta-side">Merci ! On vous rappelle dans la journée ouvrée avec un prix précis. Pour une urgence, appelez-nous au <a href="tel:+33615976577">06 15 97 65 77</a>.</p>
          </div> :
          <form className="cta-form" onSubmit={submit}>
            <input type="text" name="_honey" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <div className="cta-row">
              <div className="field">
                <label htmlFor="f-name">Nom complet</label>
                <input id="f-name" name="nom" type="text" placeholder="Jean Dupont" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Téléphone</label>
                <input id="f-phone" name="tel" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" placeholder="jean@exemple.fr" required />
            </div>
            {/* Mêmes champs que l'étape 1 du devis : type de LOGEMENT et surface, pas la
                formule (elle se choisit plus loin, une fois le volume connu) et pas la date
                (elle est demandée à l'étape 2, avec les adresses). */}
            <div className="cta-row">
              <div className="field">
                <label htmlFor="f-type">Type de logement</label>
                <select id="f-type" name="type" defaultValue="" required>
                  <option value="" disabled>Appartement, maison…</option>
                  <option value="appart">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="bureau">Bureaux</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-surface">Surface actuelle</label>
                <select id="f-surface" name="surface" defaultValue="" required>
                  <option value="" disabled>Choisir une surface…</option>
                  <option value="studio">Studio · &lt; 30 m²</option>
                  <option value="t2">2 pièces · 30–50 m²</option>
                  <option value="t3">3 pièces · 50–80 m²</option>
                  <option value="t4">4 pièces + · 80 m² +</option>
                </select>
              </div>
            </div>
            <button type="submit" className="cta-submit" disabled={sending}>
              {sending ? "Envoi en cours…" : "Étape suivante"}
              <span>→</span>
            </button>
          </form>}
        </div>
      </div>
    </section>);

}

Object.assign(window, { CTA });