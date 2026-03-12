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
        className="content-panel content-panel--wavy"
      >
        <h2 id="about-camp-life-title">{aboutPage.campLife.heading}</h2>
        <p className="page-hero__intro">{aboutPage.campLife.summary}</p>
        <ul className="content-list">
          {aboutPage.campLife.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="content-stack content-stack--two-up">
        <article aria-labelledby="about-belonging-title" className="content-card content-card--affirming">
          <h2 id="about-belonging-title">{aboutPage.belonging.heading}</h2>
          <p>{aboutPage.belonging.body}</p>
          <ul className="content-list">
            {aboutPage.belonging.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="about-activities-title"
          className="content-card"
        >
          <h2 id="about-activities-title">{aboutPage.activities.heading}</h2>
          <p>{aboutPage.activities.summary}</p>
          <ul className="content-list">
            {aboutPage.activities.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>

      <div className="content-stack content-stack--two-up">
        <section
          aria-labelledby="community-care-title"
          className="content-card"
          id="community-care"
        >
          <h2 id="community-care-title">{aboutPage.communityCare.heading}</h2>
          <p>{aboutPage.communityCare.summary}</p>
          <ul className="content-list">
            {aboutPage.communityCare.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about-history-title" className="content-card">
          <h2 id="about-history-title">{aboutPage.history.heading}</h2>
          <p>{aboutPage.history.body}</p>
          <ul className="content-list">
            {aboutPage.history.milestones.map((milestone) => (
              <li key={milestone}>{milestone}</li>
            ))}
          </ul>
        </section>
      </div>
    </PageFrame>
  );
};

export default AboutRoute;
