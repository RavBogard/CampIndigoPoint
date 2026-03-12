import PageFrame from "../components/site/PageFrame";
import { donatePage } from "../content/donate";
import { usePageMetadata } from "../lib/metadata";

const DonateRoute = () => {
  usePageMetadata("donate");

  return (
    <PageFrame
      eyebrow="Scholarship Support"
      title={donatePage.title}
      intro={donatePage.intro}
      media={{
        src: "/images/families/hero-collage.jpg",
        alt: "Camp staff and campers sharing a joyful, intergenerational moment.",
      }}
      cta={donatePage.cta}
    >
      <section
        aria-labelledby="donate-lifeline-title"
        className="content-panel content-panel--wavy"
      >
        <h2 id="donate-lifeline-title" className="content-title--underline">
          {donatePage.lifeline.heading}
        </h2>
        <p className="page-hero__intro">{donatePage.lifeline.body}</p>
        <ul className="content-list">
          {donatePage.lifeline.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="content-stack content-stack--two-up">
        <article
          aria-labelledby="donate-ancestors-title"
          className="content-card"
        >
          <h2 id="donate-ancestors-title">{donatePage.ancestors.heading}</h2>
          <p>{donatePage.ancestors.body}</p>
          <ul className="content-list">
            {donatePage.ancestors.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="donate-impact-title"
          className="content-card content-card--affirming"
        >
          <h2 id="donate-impact-title">{donatePage.impactTiers.heading}</h2>
          <p>{donatePage.impactTiers.summary}</p>
          <ul className="content-list">
            {donatePage.impactTiers.tiers.map((tier) => (
              <li key={tier.amount}>
                <strong>{tier.amount}:</strong> {tier.description}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <div className="content-stack content-stack--two-up">
        <section
          aria-labelledby="donate-partners-title"
          className="content-card"
        >
          <h2 id="donate-partners-title">{donatePage.partnersInJoy.heading}</h2>
          <p>{donatePage.partnersInJoy.body}</p>
          <ul className="content-list">
            {donatePage.partnersInJoy.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="donate-fiscal-title"
          className="content-card"
        >
          <h2 id="donate-fiscal-title">{donatePage.fiscalSponsorship.heading}</h2>
          <p>{donatePage.fiscalSponsorship.body}</p>
          <ul className="content-list">
            {donatePage.fiscalSponsorship.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>
      </div>
    </PageFrame>
  );
};

export default DonateRoute;

