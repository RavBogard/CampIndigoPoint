import PageFrame from "../components/site/PageFrame";
import AudiencePathGrid from "../components/site/AudiencePathGrid";
import { homePage } from "../content/home";
import { siteSettings } from "../content/site";
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
      <section aria-labelledby="home-gateway-title" className="home-gateway">
        <div className="home-gateway__heading">
          <p className="page-hero__eyebrow">Choose your path</p>
          <h2 id="home-gateway-title">
            Find the next right page for your journey.
          </h2>
        </div>
        <AudiencePathGrid paths={homePage.audiencePaths} />
      </section>

      <section
        aria-labelledby="home-why-title"
        className="content-panel"
      >
        <h2 id="home-why-title">A place where you can truly be yourself</h2>
        <div className="content-stack content-stack--two-up">
          {homePage.sections.map((section) => (
            <article
              key={section.id}
              aria-labelledby={`home-section-${section.id}`}
              className="content-card"
            >
              <h3 id={`home-section-${section.id}`}>{section.heading}</h3>
              <p>{section.body}</p>
              <ul className="content-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
};

export default HomeRoute;
