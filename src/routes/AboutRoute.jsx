import PageFrame from "../components/site/PageFrame";
import { aboutPage } from "../content/about";
import { usePageMetadata } from "../lib/metadata";

const AboutRoute = () => {
  usePageMetadata("about");

  return (
    <PageFrame
      eyebrow="About camp"
      title={aboutPage.title}
      intro={aboutPage.intro}
      aside={
        <div className="content-card content-card--compact">
          <h2>{aboutPage.history.heading}</h2>
          <p>{aboutPage.history.body}</p>
        </div>
      }
      cta={aboutPage.cta}
    >
      <section
        aria-labelledby="about-camp-life-title"
        className="content-panel"
      >
        <h2 id="about-camp-life-title">{aboutPage.campLife.heading}</h2>
        <ul className="content-list">
          {aboutPage.campLife.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="content-stack content-stack--two-up">
        <article aria-labelledby="about-activities-title" className="content-card">
          <h2 id="about-activities-title">{aboutPage.activities.heading}</h2>
          <p>{aboutPage.activities.summary}</p>
          <ul>
            {aboutPage.activities.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="about-accommodations-title"
          className="content-card"
        >
          <h2 id="about-accommodations-title">{aboutPage.accommodations.heading}</h2>
          <p>{aboutPage.accommodations.body}</p>
          <ul>
            {aboutPage.accommodations.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      </section>

      <section
        aria-labelledby="community-care-title"
        className="content-card"
        id="community-care"
      >
        <h2 id="community-care-title">{aboutPage.communityCare.heading}</h2>
        <p>{aboutPage.communityCare.summary}</p>
        <ul>
          {aboutPage.communityCare.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
};

export default AboutRoute;
