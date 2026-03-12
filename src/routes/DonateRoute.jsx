import PageFrame from "../components/site/PageFrame";
import { donatePage } from "../content/donate";
import { usePageMetadata } from "../lib/metadata";

const DonateRoute = () => {
  usePageMetadata("donate");

  return (
    <PageFrame
      eyebrow="Scholarship support"
      title={donatePage.title}
      intro={donatePage.intro}
      aside={
        <div className="content-card content-card--compact">
          <h2>{donatePage.fiscalSponsorship.heading}</h2>
          <p>{donatePage.fiscalSponsorship.body}</p>
        </div>
      }
      cta={donatePage.cta}
    >
      <section aria-labelledby="donate-impact-title" className="content-card">
        <h2 id="donate-impact-title">{donatePage.impact.heading}</h2>
        <p>{donatePage.impact.body}</p>
        <ul>
          {donatePage.impact.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="donate-fiscal-title"
        className="content-card"
      >
        <h2 id="donate-fiscal-title">{donatePage.fiscalSponsorship.heading}</h2>
        <ul>
          {donatePage.fiscalSponsorship.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="donate-handoff-title"
        className="content-card"
      >
        <h2 id="donate-handoff-title">What donors should know before the handoff</h2>
        <ul>
          {donatePage.donorReassurance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
};

export default DonateRoute;
