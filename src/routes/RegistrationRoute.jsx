import PageFrame from "../components/site/PageFrame";
import { registrationPage } from "../content/registration";
import { usePageMetadata } from "../lib/metadata";

const RegistrationRoute = () => {
  usePageMetadata("registration");

  return (
    <PageFrame
      eyebrow="Registration"
      title={registrationPage.title}
      intro={registrationPage.intro}
      aside={
        <div className="content-card content-card--compact">
          <h2>{registrationPage.affordability.heading}</h2>
          <p>{registrationPage.affordability.promise}</p>
        </div>
      }
      cta={registrationPage.cta}
    >
      <section className="content-stack content-stack--two-up">
        <article
          aria-labelledby="registration-accommodations-title"
          className="content-card"
        >
          <h2 id="registration-accommodations-title">
            {registrationPage.accommodations.heading}
          </h2>
          <p>{registrationPage.accommodations.body}</p>
          <ul>
            {registrationPage.accommodations.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="registration-affordability-title"
          className="content-card"
        >
          <h2 id="registration-affordability-title">
            {registrationPage.affordability.heading}
          </h2>
          <p>{registrationPage.affordability.summary}</p>
          <ul>
            {registrationPage.affordability.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      </section>

      <section
        aria-labelledby="registration-handoff-title"
        className="content-card"
      >
        <h2 id="registration-handoff-title">{registrationPage.handoff.heading}</h2>
        <ul>
          {registrationPage.handoff.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
};

export default RegistrationRoute;
