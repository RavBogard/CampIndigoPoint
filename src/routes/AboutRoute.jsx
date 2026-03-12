import PageFrame from "../components/site/PageFrame";
import { aboutPage } from "../content/about";
import { usePageMetadata } from "../lib/metadata";

const AboutRoute = () => {
  usePageMetadata("about");

  return (
    <PageFrame
      eyebrow="The Adventure"
      title={aboutPage.title}
      intro={aboutPage.intro}
      media={aboutPage.heroMedia}
      cta={aboutPage.cta}
    >
      <section
        aria-labelledby="about-camp-life-title"
        className="bg-[var(--color-camp-sun)] rounded-[3rem_1.5rem_4rem_2rem] p-8 md:p-14 border-b-8 border-[var(--color-camp-orange)] shadow-xl grid gap-4 mb-8"
      >
        <h2 id="about-camp-life-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight content-title--underline">
          {aboutPage.campLife.heading}
        </h2>
        <p className="text-lg text-[var(--color-camp-text)] leading-relaxed">{aboutPage.campLife.summary}</p>
        <ul className="grid gap-4 mt-2">
          {aboutPage.campLife.bullets.map((bullet) => (
            <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      {/* Media Grid */}
      <section aria-label="Camp Life Gallery" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {aboutPage.campLifePhotos.map((photo, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[minmax(160px,auto)]">
        {/* Story Block 1 - Belonging */}
        <article aria-labelledby="about-belonging-title" className="bg-pink-50 border-l-8 border-pink-600 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start md:col-span-2 lg:col-span-2 xl:col-span-2 lg:row-span-2">
          <h2 id="about-belonging-title" className="text-2xl md:text-3xl font-bold font-serif text-pink-900">{aboutPage.belonging.heading}</h2>
          <p className="leading-relaxed text-pink-950/80 font-medium">{aboutPage.belonging.body}</p>
          <ul className="grid gap-4 mt-2 text-pink-950">
            {aboutPage.belonging.details.map((detail) => (
              <li key={detail} className="pl-8 relative font-semibold before:content-['❤'] before:text-pink-600 before:absolute before:left-0 before:top-0">
                {detail}
              </li>
            ))}
          </ul>
        </article>

        {/* Quote Block 1 */}
        <article className="bg-[var(--color-camp-teal)] text-white shadow-xl rounded-[1.4rem] p-6 md:p-8 flex flex-col justify-center md:col-span-1 lg:col-span-1 xl:col-span-2">
          <blockquote className="text-2xl font-bold font-serif leading-tight">
            "{aboutPage.testimonials[0].quote}"
          </blockquote>
          <cite className="block mt-4 text-sm uppercase tracking-wider font-bold opacity-80 not-italic">
            — {aboutPage.testimonials[0].source}
          </cite>
        </article>

        {/* Quote Block 2 */}
        <article className="bg-[var(--color-camp-orange)] text-white shadow-xl rounded-[1.4rem] p-6 md:p-8 flex flex-col justify-center md:col-span-1 lg:col-span-1 xl:col-span-1">
          <blockquote className="text-xl font-bold font-serif leading-tight">
            "{aboutPage.testimonials[1].quote}"
          </blockquote>
          <cite className="block mt-4 text-sm uppercase tracking-wider font-bold opacity-80 not-italic">
            — {aboutPage.testimonials[1].source}
          </cite>
        </article>

        {/* Story Block 2 - Activities */}
        <article
          aria-labelledby="about-activities-title"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start md:col-span-2 lg:col-span-2 xl:col-span-3"
        >
          <h2 id="about-activities-title" className="text-2xl md:text-3xl font-bold font-serif">{aboutPage.activities.heading}</h2>
          <p className="leading-relaxed">{aboutPage.activities.summary}</p>
          <ul className="grid gap-3 mt-2 md:grid-cols-2">
            {aboutPage.activities.highlights.map((highlight) => (
              <li key={highlight} className="pl-8 relative text-sm font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 mt-8">
        <section
          aria-labelledby="community-care-title"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
          id="community-care"
        >
          <h2 id="community-care-title" className="text-2xl md:text-3xl font-bold font-serif">{aboutPage.communityCare.heading}</h2>
          <p className="leading-relaxed">{aboutPage.communityCare.summary}</p>
          <ul className="grid gap-4 mt-2">
            {aboutPage.communityCare.bullets.map((bullet) => (
              <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about-history-title" className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start">
          <h2 id="about-history-title" className="text-2xl md:text-3xl font-bold font-serif">{aboutPage.history.heading}</h2>
          <p className="leading-relaxed">{aboutPage.history.body}</p>
          <ul className="grid gap-4 mt-2">
            {aboutPage.history.milestones.map((milestone) => (
              <li key={milestone} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {milestone}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageFrame>
  );
};

export default AboutRoute;
