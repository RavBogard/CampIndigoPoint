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
          <p className="uppercase tracking-[0.14em] text-[0.8rem] font-bold text-[var(--color-camp-teal)]">{homePage.gateway.eyebrow}</p>
          <h2 id="home-gateway-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight">
            {homePage.gateway.heading}
          </h2>
        </div>
        <AudiencePathGrid paths={homePage.audiencePaths} />
      </section>

      <section
        aria-labelledby="home-bento-title"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[minmax(180px,auto)]"
      >
        <h2 id="home-bento-title" className="sr-only">
          Why Camp Indigo Point
        </h2>

        {/* Story Block 1 - Large */}
        <article className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start md:col-span-2 lg:col-span-2 xl:col-span-2 lg:row-span-2">
          <h3 className="text-2xl md:text-3xl font-bold font-serif">{homePage.sections[0].heading}</h3>
          <p className="leading-relaxed text-lg">{homePage.sections[0].body}</p>
          <ul className="grid gap-4 mt-2">
            {homePage.sections[0].bullets.map((bullet) => (
              <li key={bullet} className="pl-8 relative font-medium before:content-['✨'] before:absolute before:left-0 before:top-0">
                {bullet}
              </li>
            ))}
          </ul>
        </article>

        {/* Quote Block 1 - Vibrant */}
        <article className="bg-[var(--color-camp-orange)] text-white shadow-xl rounded-[1.4rem] p-6 md:p-8 flex flex-col justify-center md:col-span-1 lg:col-span-1 xl:col-span-2">
          <blockquote className="text-2xl font-bold font-serif leading-tight">
            "{homePage.pressQuotes[0].quote}"
          </blockquote>
          <cite className="block mt-4 text-sm uppercase tracking-wider font-bold opacity-80 not-italic">
            — {homePage.pressQuotes[0].source}
          </cite>
        </article>

        {/* Quote Block 2 - Teal */}
        <article className="bg-[var(--color-camp-teal)] text-white shadow-xl rounded-[1.4rem] p-6 md:p-8 flex flex-col justify-center md:col-span-1 lg:col-span-2 xl:col-span-1">
          <blockquote className="text-xl font-bold font-serif leading-tight">
            "{homePage.pressQuotes[1].quote}"
          </blockquote>
          <cite className="block mt-4 text-sm uppercase tracking-wider font-bold opacity-80 not-italic">
            — {homePage.pressQuotes[1].source}
          </cite>
        </article>

        {/* Story Block 2 - Standard */}
        <article className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start md:col-span-2 lg:col-span-2 xl:col-span-3">
          <h3 className="text-2xl font-bold font-serif">{homePage.sections[1].heading}</h3>
          <p className="leading-relaxed">{homePage.sections[1].body}</p>
          <ul className="grid gap-3 mt-2 md:grid-cols-3">
            {homePage.sections[1].bullets.map((bullet) => (
              <li key={bullet} className="pl-6 relative text-sm font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-bold before:absolute before:left-0 before:-top-0.5">
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </PageFrame>
  );
};

export default HomeRoute;
