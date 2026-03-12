import PageFrame from "../components/site/PageFrame";
import donatePage from "../content/data/donate.json";
import { actionLinks } from "../content/actions";
import { usePageMetadata } from "../lib/metadata";
import { Users, Map, Heart, Sun } from "lucide-react";

const iconMap = {
  Users: <Users className="text-[var(--color-camp-orange)] mb-2" size={32} />,
  Map: <Map className="text-[var(--color-camp-orange)] mb-2" size={32} />,
  Heart: <Heart className="text-[var(--color-camp-orange)] mb-2" size={32} />,
  Sun: <Sun className="text-[var(--color-camp-orange)] mb-2" size={32} />,
};

const DonateRoute = () => {
  usePageMetadata("donate");

  return (
    <PageFrame
      eyebrow="Scholarship Support"
      title={donatePage.title}
      intro={donatePage.intro}
      media={{
        src: "/images/gallery/camp-photo-2.jpg",
        alt: "Camp staff and campers sharing a joyful, intergenerational moment.",
      }}
      cta={donatePage.cta}
    >
      <section aria-labelledby="donate-dashboard-title" className="mb-8">
        <h2 id="donate-dashboard-title" className="sr-only">Impact Dashboard</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {donatePage.impactMetrics.map((metric) => (
            <div key={metric.label} className="bg-white/90 border-t-4 border-[var(--color-camp-teal)] shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              {iconMap[metric.icon]}
              <p className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-teal)] font-serif tracking-tight">{metric.value}</p>
              <p className="text-sm uppercase tracking-widest font-bold text-[var(--color-camp-muted)] mt-1">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="donate-lifeline-title"
        className="bg-[var(--color-camp-sun)] rounded-[3rem_1.5rem_4rem_2rem] p-8 md:p-14 border-b-8 border-[var(--color-camp-orange)] shadow-xl grid gap-4"
      >
        <h2 id="donate-lifeline-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight content-title--underline">
          {donatePage.lifeline.heading}
        </h2>
        <p className="text-lg text-[var(--color-camp-text)] leading-relaxed">{donatePage.lifeline.body}</p>
        <ul className="grid gap-4 mt-2">
          {donatePage.lifeline.bullets.map((bullet) => (
            <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          aria-labelledby="donate-ancestors-title"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start md:col-span-2"
        >
          <h2 id="donate-ancestors-title" className="text-2xl md:text-3xl font-bold font-serif">{donatePage.ancestors.heading}</h2>
          <p className="leading-relaxed">{donatePage.ancestors.body}</p>
          <ul className="grid gap-4 mt-2">
            {donatePage.ancestors.details.map((detail) => (
              <li key={detail} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {detail}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.4rem] overflow-hidden shadow-xl aspect-square md:aspect-auto h-full lg:col-span-1">
          <img src={donatePage.supportMedia.src} alt={donatePage.supportMedia.alt} className="w-full h-full object-cover" />
        </article>
      </section>

      <section className="grid gap-6 md:gap-8 md:grid-cols-2 mt-8">
        <article
          aria-labelledby="donate-impact-title"
          className="bg-pink-50 border-l-8 border-pink-600 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
        >
          <h2 id="donate-impact-title" className="text-2xl md:text-3xl font-bold font-serif text-pink-900">{donatePage.impactTiers.heading}</h2>
          <p className="leading-relaxed text-pink-950/80 font-medium">{donatePage.impactTiers.summary}</p>
          <ul className="grid gap-4 mt-2 text-pink-950">
            {donatePage.impactTiers.tiers.map((tier) => (
              <li key={tier.amount} className="pl-8 relative font-semibold before:content-['❤'] before:text-pink-600 before:absolute before:left-0 before:top-0">
                <strong>{tier.amount}:</strong> {tier.description}
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-6 md:gap-8">
          <section
            aria-labelledby="donate-partners-title"
            className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
          >
          <h2 id="donate-partners-title" className="text-2xl md:text-3xl font-bold font-serif">{donatePage.partnersInJoy.heading}</h2>
          <p className="leading-relaxed">{donatePage.partnersInJoy.body}</p>
          <ul className="grid gap-4 mt-2">
            {donatePage.partnersInJoy.bullets.map((bullet) => (
              <li key={bullet} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="donate-fiscal-title"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start"
        >
          <h2 id="donate-fiscal-title" className="text-2xl md:text-3xl font-bold font-serif">{donatePage.fiscalSponsorship.heading}</h2>
          <p className="leading-relaxed">{donatePage.fiscalSponsorship.body}</p>
          <ul className="grid gap-4 mt-2">
            {donatePage.fiscalSponsorship.details.map((detail) => (
              <li key={detail} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                {detail}
              </li>
            ))}
          </ul>
        </section>
      </div>
      </section>
    </PageFrame>
  );
};

export default DonateRoute;

