import PageFrame from "../components/site/PageFrame";
import AudiencePathGrid from "../components/site/AudiencePathGrid";
import { homePage } from "../content/home";
import { usePageMetadata } from "../lib/metadata";

const HomeRoute = () => {
  usePageMetadata("home");

  return (
    <PageFrame
      eyebrow={homePage.hero.eyebrow}
      title={homePage.hero.heading}
      intro={homePage.hero.summary}
      media={{
        src: "/images/families/hero-collage.jpg",
        alt: "A collage of joyful moments from Camp Indigo Point.",
      }}
    >
      <section aria-labelledby="home-gateway-title" className="pb-8">
        <div className="grid gap-2 mb-6">
          <p className="uppercase tracking-[0.14em] text-[0.8rem] font-bold text-[var(--color-camp-teal)]">Choose your path</p>
          <h2 id="home-gateway-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight">
            Find the next right page for your journey.
          </h2>
        </div>
        <AudiencePathGrid paths={homePage.audiencePaths} />
      </section>

      <section
        aria-labelledby="home-why-title"
        className="bg-white/85 border border-black/5 shadow-2xl rounded-[1.75rem] p-6 md:p-10 grid gap-8"
      >
        <h2 id="home-why-title" className="text-3xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight content-title--underline">
          A place where you can truly be yourself
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {homePage.sections.map((section) => (
            <article
              key={section.id}
              aria-labelledby={`home-section-${section.id}`}
              className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
            >
              <h3 id={`home-section-${section.id}`} className="text-2xl font-bold font-serif">{section.heading}</h3>
              <p className="leading-relaxed">{section.body}</p>
              <ul className="grid gap-4 mt-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="pl-8 relative font-medium before:content-['✨'] before:absolute before:left-0 before:top-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
};

export default HomeRoute;
