import PageFrame from "../components/site/PageFrame";
import { staffPage } from "../content/staff";
import { usePageMetadata } from "../lib/metadata";

const StaffRoute = () => {
  usePageMetadata("staff");

  return (
    <PageFrame
      eyebrow="Join the staff"
      title={staffPage.title}
      intro={staffPage.intro}
      media={staffPage.heroMedia}
      cta={staffPage.cta}
    >
      <section
        aria-labelledby="staff-magic-title"
        className="bg-[var(--color-camp-sun)] rounded-[3rem_1.5rem_4rem_2rem] p-8 md:p-14 border-b-8 border-[var(--color-camp-orange)] shadow-xl grid gap-4"
      >
        <h2 id="staff-magic-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight content-title--underline">
          {staffPage.theMagic.heading}
        </h2>
        <p className="text-lg text-[var(--color-camp-text)] leading-relaxed">{staffPage.theMagic.body}</p>
        <ul className="grid gap-4 mt-2">
          {staffPage.theMagic.bullets.map((bullet) => (
            <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 md:gap-8 md:grid-cols-2">
        <article
          aria-labelledby="staff-mud-title"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
        >
          <h2 id="staff-mud-title" className="text-2xl md:text-3xl font-bold font-serif">{staffPage.theMud.heading}</h2>
          <p className="leading-relaxed">{staffPage.theMud.body}</p>
          <ul className="grid gap-4 mt-2">
            {staffPage.theMud.bullets.map((bullet) => (
              <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {bullet}
              </li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="staff-community-title"
          className="bg-pink-50 border-l-8 border-pink-600 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
        >
          <h2 id="staff-community-title" className="text-2xl md:text-3xl font-bold font-serif text-pink-900">{staffPage.theCommunity.heading}</h2>
          <p className="leading-relaxed text-pink-950/80 font-medium">{staffPage.theCommunity.body}</p>
          <p className="text-pink-950"><strong>Roles:</strong> {staffPage.theCommunity.rolesOverview}</p>
        </article>
      </section>

      <section
        aria-labelledby="staff-process-title"
        className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
      >
        <h2 id="staff-process-title" className="text-2xl md:text-3xl font-bold font-serif">{staffPage.applicationProcess.heading}</h2>
        <ul className="grid gap-4 mt-2">
          {staffPage.applicationProcess.steps.map((step) => (
            <li key={step} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
              {step}
            </li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
};

export default StaffRoute;
