import AudiencePathGrid from "../components/site/AudiencePathGrid";
import { homePage } from "../content/home";
import { siteSettings } from "../content/site";
import { usePageMetadata } from "../lib/metadata";

const HomeRoute = () => {
  usePageMetadata("home");

  return (
    <div className="page-frame page-frame--home">
      <section aria-labelledby="home-hero-title" className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="page-hero__eyebrow">{homePage.hero.eyebrow}</p>
            <h1 id="home-hero-title">{homePage.hero.heading}</h1>
            <p className="page-hero__intro">{homePage.hero.summary}</p>
            <nav
              aria-label="Primary camp actions"
              className="home-hero__actions"
            >
              {homePage.hero.ctas.map((cta, index) => (
                <a
                  key={cta.id}
                  className={`btn ${index === 0 ? "btn-primary" : "btn-secondary"}`}
                  href={cta.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {cta.label}
                </a>
              ))}
            </nav>
            <p className="home-hero__lead">{siteSettings.shellLead}</p>
          </div>

          <aside aria-labelledby="home-quick-facts-title" className="home-hero__aside">
            <div className="content-card content-card--compact">
              <h2 id="home-quick-facts-title">At a glance</h2>
              <ul className="page-hero__facts">
                {homePage.quickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="home-gateway-title" className="home-gateway">
        <div className="container home-gateway__inner">
          <div className="home-gateway__heading">
            <p className="page-hero__eyebrow">Choose your path</p>
            <h2 id="home-gateway-title">
              Families, donors, and staff can each find the next right page fast.
            </h2>
          </div>
          <AudiencePathGrid paths={homePage.audiencePaths} />
        </div>
      </section>

      <div className="container page-sections">
        <section
          aria-labelledby="home-why-title"
          className="content-panel"
        >
          <h2 id="home-why-title">Why families choose Camp Indigo Point</h2>
          <div className="content-stack">
            {homePage.sections.map((section) => (
              <article
                key={section.id}
                aria-labelledby={`home-section-${section.id}`}
                className="content-card"
              >
                <h3 id={`home-section-${section.id}`}>{section.heading}</h3>
                <p>{section.body}</p>
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeRoute;
