// route-page.jsx — Gabarit page "trajet" (corridor). Lit document.body.dataset.route.
const LD_PROCESS = [
{ n: "01", t: "Devis & date", d: "On chiffre volume et distance, on bloque une date de chargement et une fenêtre de livraison réaliste." },
{ n: "02", t: "Chargement soigné", d: "Emballage, protection intégrale et calage : rien ne bouge sur la route." },
{ n: "03", t: "Transport direct", d: "Une seule équipe, un camion dédié et plombé. Pas de groupage, pas de transbordement." },
{ n: "04", t: "Livraison & installation", d: "À l'arrivée, on décharge, on remonte et on installe. Vous récupérez un logement prêt." }];


function RHero({ r }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="Les Bras Cassés.html">Accueil</a>
          <span className="sep">/</span>
          <span>{r.intl ? "International" : "Longue distance"}</span>
        </div>
        <h1>Déménagement <em>{r.from} → {r.to}</em></h1>
        <p className="lede" style={{ padding: "10px 0" }}>{r.lede}</p>
        <div className="route-stats">
          <div className="route-stat"><span className="rs-n">{r.km}</span><span className="rs-l">Distance</span></div>
          <div className="route-stat"><span className="rs-n">{r.duree}</span><span className="rs-l">Trajet</span></div>
          <div className="route-stat"><span className="rs-n">{r.pays}</span><span className="rs-l">{r.intl ? "Destination" : "France"}</span></div>
          <div className="route-stat"><span className="rs-n">24h</span><span className="rs-l">Devis</span></div>
        </div>
        <div className="devis-hero-form" style={{ marginTop: 30 }}>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}

function RIntro({ r }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="sec-num" style={{ marginBottom: 22 }}><span className="asterisk">*</span> Le trajet {r.from} → {r.to}</div>
            <p className="lead">{r.intro}</p>
            <p>
              Quelle que soit la formule — <strong style={{ color: 'var(--ink)' }}>Coup de main, Mains libres ou Mains dans les poches</strong> — des déménageurs déclarés et assurés, une assurance complète et un devis clair et définitif. {r.intl ? "À l'international comme en France, " : ""}le nom est la blague : le travail, lui, est sérieux.
            </p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="Devis.html" className="btn btn-primary">Devis {r.from} → {r.to}<span className="arrow">→</span></a>
              <a href="Formules.html" className="btn btn-ghost">Voir les formules</a>
            </div>
          </div>
          <div className="reveal">
            <div className="aside-card" style={{ background: 'var(--paper-2)', color: 'var(--ink)', border: '1px solid var(--rule)' }}>
              <h4 style={{ color: 'var(--ink)' }}>{r.from} → {r.to} en bref</h4>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
                <div><strong style={{ color: 'var(--ink)' }}>Distance</strong> · {r.km}</div>
                <div><strong style={{ color: 'var(--ink)' }}>Durée de route</strong> · {r.duree}</div>
                <div><strong style={{ color: 'var(--ink)' }}>Destination</strong> · {r.to} ({r.pays})</div>
                <div><strong style={{ color: 'var(--ink)' }}>Type</strong> · {r.intl ? "Déménagement international" : "Longue distance France"}</div>
                <div><strong style={{ color: 'var(--ink)' }}>Devis</strong> · gratuit sous 24h</div>
              </div>
              {r.intl &&
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--accent)' }}>International</strong> — inventaire valorisé et formalités préparés avec vous.
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function RPoints({ r }) {
  return (
    <section className="sec testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Notre expertise sur ce trajet</div></div>
          <h2 className="dim-em">{r.from} → {r.to},<br /><em>on connaît la route et l'arrivée.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {r.points.map((p, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ 0{i + 1}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{p.t}</div>
              <div className="value-body">{p.d}</div>
            </div>
          )}
          <div className="value">
            <div className="value-num">★ DEVIS</div>
            <div className="value-title" style={{ marginTop: 8 }}>Réponse sous 24h</div>
            <div className="value-body">Gratuit, transport compris, prix ferme pour votre {r.from} → {r.to}.</div>
          </div>
        </div>
      </div>
    </section>);

}

function RProcess() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Comment ça marche</div></div>
          <h2 className="dim-em">La distance ne change rien<br /><em>au soin qu'on met dans vos cartons.</em></h2>
        </div>
        <div className="values-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {LD_PROCESS.map((s, i) =>
          <div className="value" key={i}>
              <div className="value-num">★ {s.n}</div>
              <div className="value-title" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="value-body">{s.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function RFaq({ r }) {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> Questions fréquentes</div></div>
          <h2 className="dim-em">{r.from} → {r.to},<br /><em>vos questions, nos réponses.</em></h2>
        </div>
        <div className="faq-list reveal" style={{ maxWidth: 820 }}>
          {r.faq.map((f, i) =>
          <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span><span className="ico">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function RCTA({ r }) {
  return (
    <section className="sec cta-band">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4vw,58px)', color: 'var(--cream-on-dark)', letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            {r.from} → {r.to} ? <span className="scribble" style={{ fontFamily: 'var(--script)', color: 'var(--accent)', display: 'inline-block', transform: 'rotate(-3deg)' }}>Chiffrons le trajet.</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(242,232,207,0.7)', marginBottom: 36, fontSize: 17 }}>
            Deux adresses, une surface — réponse gratuite sous 24h, transport compris.
          </p>
          <QuickQuote variant="dark" />
        </div>
      </div>
    </section>);

}

function RouteMap({ r }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const trigger = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82 && rect.bottom > 0) {
        done = true;
        el.classList.add("is-drawn");
        const pathEl = el.querySelector(".route-line");
        const truck = el.querySelector(".rm-truck");
        if (pathEl && truck && pathEl.getPointAtLength) {
          const len = pathEl.getTotalLength();
          const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          // On phones the itinerary strip is narrow, so enlarge the truck
          // by scaling .rm-truck around its anchor (the current path point).
          const tk = window.innerWidth <= 560 ? 1.7 : 1;
          const place = (pt) => truck.setAttribute("transform", "translate(" + pt.x.toFixed(1) + "," + pt.y.toFixed(1) + ") scale(" + tk + ")");
          if (reduce) {
            place(pathEl.getPointAtLength(len));
            truck.classList.add("rm-arrived");
          } else {
            const dur = 7000;let t0 = null;
            const ease = (x) => 1 - Math.pow(1 - x, 3);
            const frame = (ts) => {
              if (!t0) t0 = ts;
              const p = Math.min(1, (ts - t0) / dur);
              place(pathEl.getPointAtLength(ease(p) * len));
              if (p < 1) {requestAnimationFrame(frame);} else {truck.classList.add("rm-arrived");}
            };
            requestAnimationFrame(frame);
          }
        }
        window.removeEventListener("scroll", trigger);
      }
    };
    window.addEventListener("scroll", trigger, { passive: true });
    trigger();
    const t = setTimeout(trigger, 400);
    return () => {window.removeEventListener("scroll", trigger);clearTimeout(t);};
  }, []);
  const D = "M52,118 C190,44 300,150 450,92 C530,60 576,66 596,56";
  return (
    <section className="sec route-map-sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div><div className="sec-num"><span className="asterisk">*</span> L'itinéraire</div></div>
          <h2 className="dim-em">{r.from} → {r.to},<br /><em>d'un bout à l'autre, sans transbordement.</em></h2>
        </div>
        <div className="route-map reveal" ref={ref}>
          <svg viewBox="0 0 640 170" className="route-map-svg" fill="none">
            <defs><clipPath id="rmCabWin"><rect x="232" y="54" width="60" height="42" rx="6" /></clipPath></defs>
            <path className="route-line" d={D} stroke="#D75B3D" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="0.5 12" />
            <g className="route-pin route-pin-mid" style={{ transitionDelay: ".5s" }}><circle cx="250" cy="96" r="6" fill="#1F3A4B" /></g>
            <g className="route-pin route-pin-mid" style={{ transitionDelay: ".8s" }}><circle cx="450" cy="92" r="6" fill="#1F3A4B" /></g>
            <g className="route-pin" style={{ transitionDelay: ".2s" }}>
              <path d="M52 118 C42 104 42 97 52 97 C62 97 62 104 52 118 Z" fill="#1F3A4B" />
              <circle cx="52" cy="103" r="3.6" fill="#fff" />
              <text x="52" y="142" textAnchor="middle" className="route-lbl">Nice</text>
            </g>
            <g className="route-pin" style={{ transitionDelay: "1.15s" }}>
              <path d="M596 56 C586 42 586 35 596 35 C606 35 606 42 596 56 Z" fill="#D75B3D" />
              <circle cx="596" cy="41" r="4" fill="#fff" />
              <text x="596" y="26" textAnchor="middle" className="route-lbl route-lbl-dest">{r.to}</text>
            </g>
            <g className="rm-truck" transform="translate(52,118)">
              <g transform="translate(-41,-30) scale(0.22)">
                <g className="rm-speed" stroke="#D75B3D" strokeWidth="4" strokeLinecap="round">
                  <path d="M8 44 H-48" /><path d="M0 70 H-60" /><path d="M8 96 H-36" />
                </g>
                <g stroke="#1F3A4B" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round">
                  <rect x="14" y="20" width="210" height="86" rx="8" fill="#EFE5CD" />
                  <path d="M224 106 V52 Q224 46 230 46 H300 L330 72 H352 Q360 72 360 80 V106 Z" fill="#EFE5CD" />
                  <rect x="232" y="54" width="60" height="42" rx="6" fill="#cdd9df" />
                </g>
                <image href="assets/lbc-wordmark-sm.png" x="59" y="32" width="120" height="67" preserveAspectRatio="xMidYMid meet" />
                <image href="assets/lbc-mascot-sm.png" x="184" y="20" width="191" height="191" clipPath="url(#rmCabWin)" preserveAspectRatio="xMidYMid slice" />
                <rect x="232" y="54" width="60" height="42" rx="6" fill="none" stroke="#1F3A4B" strokeWidth="4.5" />
                <g stroke="#1F3A4B" strokeWidth="4.5">
                  <circle cx="84" cy="122" r="17" fill="#fff" />
                  <circle cx="84" cy="122" r="6" fill="#D75B3D" stroke="none" />
                  <circle cx="306" cy="122" r="17" fill="#fff" />
                  <circle cx="306" cy="122" r="6" fill="#D75B3D" stroke="none" />
                </g>
              </g>
            </g>
          </svg>
          <div className="route-map-meta">
            <span><strong>{r.km}</strong> · {r.duree}</span>
            <span className="route-map-sep">·</span>
            <span>Un camion dédié, une seule équipe</span>
          </div>
        </div>
      </div>
    </section>);

}

function App() {
  useScrollReveal();
  const slug = document.body.getAttribute('data-route');
  const r = getRoute(slug);
  React.useEffect(() => {document.title = "Déménagement " + r.from + " → " + r.to + " · LBC* Les Bras Cassés";}, []);
  return (
    <React.Fragment>
      <Nav />
      <main>
        <RHero r={r} />
        <RouteMap r={r} />
        <RIntro r={r} />
        <RPoints r={r} />
        <RProcess />
        <RFaq r={r} />
        <RCTA r={r} />
      </main>
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
