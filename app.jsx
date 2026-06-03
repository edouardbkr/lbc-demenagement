// app.jsx — Home page shell (Nav/Footer/MascotStamp from site.jsx)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#D75B3D",
  "headline": "a",
  "recommended": "premium",
  "density": "airy"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.classList.toggle('density-compact', t.density === 'compact');
  }, [t.density]);

  useScrollReveal();

  // Jump to a #hash target after React has rendered (e.g. arriving from the
  // footer "Avis clients" link → #avis). The element doesn't exist at initial
  // HTML parse, and on this long page a smooth scroll gets interrupted by
  // images loading — so we jump instantly, then re-correct once everything
  // has settled (image loads can shift the target's position).
  React.useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const jump = () => {
      const el = document.querySelector(hash);
      if (!el) return false;
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y < 0 ? 0 : y, behavior: "auto" });
      return true;
    };
    let tries = 0;
    const tick = () => { if (!jump() && tries++ < 40) setTimeout(tick, 60); };
    setTimeout(tick, 120);
    const onLoad = () => setTimeout(jump, 80);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);


  return (
    <div style={{ "--accent": t.accent }}>
      <Nav />
      <main>
        <Hero headlineVariant={t.headline} />
        <MascotStamp />
        <About />
        <Formules recommendedTier={t.recommended} />
        <Estimator />
        <RoadDivider />
        <Gallery />
        <Values />
        <Testimonials />
        <HomeFaq />
        <CTA />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Couleur & rythme" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={["#D75B3D", "#1F3A4B", "#E8A33B", "#3A6B5E"]}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakRadio
          label="Densité"
          value={t.density}
          options={["airy", "compact"]}
          onChange={(v) => setTweak('density', v)}
        />

        <TweakSection label="Hero" />
        <TweakRadio
          label="Titre"
          value={t.headline}
          options={[
            { value: "a", label: "Sourire" },
            { value: "b", label: "Confiance" }
          ]}
          onChange={(v) => setTweak('headline', v)}
        />

        <TweakSection label="Formules" />
        <TweakSelect
          label="Mise en avant"
          value={t.recommended}
          options={[
            { value: "standard", label: "Standard" },
            { value: "premium", label: "Premium (par défaut)" },
            { value: "luxe", label: "Luxe" },
            { value: "none", label: "Aucune" }
          ]}
          onChange={(v) => setTweak('recommended', v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
