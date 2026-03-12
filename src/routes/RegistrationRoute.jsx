import PageFrame from "../components/site/PageFrame";
import { registrationPage } from "../content/registration";
import { usePageMetadata } from "../lib/metadata";

const RegistrationRoute = () => {
  usePageMetadata("registration");

  return (
    <PageFrame
      eyebrow="The Registration Path"
      title={registrationPage.title}
      intro={registrationPage.intro}
      media={registrationPage.heroMedia}
      cta={registrationPage.cta}
    >
      <section className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          aria-labelledby="registration-affordability-title"
          className="bg-pink-50 border-l-8 border-pink-600 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start md:col-span-2"
        >
          <h2 id="registration-affordability-title" className="text-2xl md:text-3xl font-bold font-serif text-pink-900">
            {registrationPage.affordability.heading}
          </h2>
          <p className="text-lg text-[var(--color-camp-text)] leading-relaxed font-semibold">{registrationPage.affordability.promise}</p>
          <p className="leading-relaxed text-pink-950/80 font-medium">{registrationPage.affordability.summary}</p>
          <ul className="grid gap-4 mt-2 text-pink-950">
            {registrationPage.affordability.details.map((detail) => (
              <li key={detail} className="pl-8 relative font-semibold before:content-['❤'] before:text-pink-600 before:absolute before:left-0 before:top-0">
                {detail}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.4rem] overflow-hidden shadow-xl aspect-square md:aspect-auto h-full lg:col-span-1">
          <img src={registrationPage.supportMedia.src} alt={registrationPage.supportMedia.alt} className="w-full h-full object-cover" />
        </article>
      </section>

      <section className="grid gap-6 md:gap-8 md:grid-cols-2 mt-8">
        <article
          aria-labelledby="registration-accommodations-title"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
        >
          <h2 id="registration-accommodations-title" className="text-2xl md:text-3xl font-bold font-serif">
            {registrationPage.accommodations.heading}
          </h2>
          <p className="leading-relaxed">{registrationPage.accommodations.body}</p>
          <ul className="grid gap-4 mt-2">
            {registrationPage.accommodations.details.map((detail) => (
              <li key={detail} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {detail}
              </li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="registration-handoff-title"
          className="bg-[var(--color-camp-sun)] rounded-[3rem_1.5rem_4rem_2rem] p-8 md:p-14 border-b-8 border-[var(--color-camp-orange)] shadow-xl grid gap-4 content-start"
        >
          <h2 id="registration-handoff-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight content-title--underline">{registrationPage.handoff.heading}</h2>
          <ul className="grid gap-4 mt-4">
            {registrationPage.handoff.bullets.map((bullet) => (
              <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </PageFrame>
  );
};

export default RegistrationRoute;
