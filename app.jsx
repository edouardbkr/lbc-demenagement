// app.jsx — Home page shell (Nav/Footer/MascotStamp from site.jsx)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#D75B3D",
  /* ⚠️ VARIANTE « c » : LE H1 DIT LE MÉTIER ET LA VILLE.
     Le H1 est le signal le plus fort qu'une page envoie à Google sur son sujet. Celui de
     l'accueil disait « Les Bras Cassés ? Sûrement pas vos affaires » — ni « déménageur »,
     ni « Nice », ni aucun service. Mesuré dans Search Console le 24 août 2026, sur
     90 jours : la page d'accueil ne récoltait que 126 impressions, dont 89 % sur le NOM
     de la marque. Quatorze impressions métier en trois mois, et « demenagement nice »
     une seule impression, position 13, zéro clic.
     Le jeu de mots n'a pas disparu : il est passé en accroche au-dessus du titre. */
  "headline": "c",
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
