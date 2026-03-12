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
        className="content-panel content-panel--wavy"
      >
        <h2 id="staff-magic-title" className="content-title--underline">
          {staffPage.theMagic.heading}
        </h2>
        <p className="page-hero__intro">{staffPage.theMagic.body}</p>
        <ul className="content-list">
          {staffPage.theMagic.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="content-stack content-stack--two-up">
        <article
          aria-labelledby="staff-mud-title"
          className="content-card"
        >
          <h2 id="staff-mud-title">{staffPage.theMud.heading}</h2>
          <p>{staffPage.theMud.body}</p>
          <ul className="content-list">
            {staffPage.theMud.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article
          aria-labelledby="staff-community-title"
          className="content-card content-card--affirming"
        >
          <h2 id="staff-community-title">{staffPage.theCommunity.heading}</h2>
          <p>{staffPage.theCommunity.body}</p>
          <p><strong>Roles:</strong> {staffPage.theCommunity.rolesOverview}</p>
        </article>
      </section>

      <section
        aria-labelledby="staff-process-title"
        className="content-card"
      >
        <h2 id="staff-process-title">{staffPage.applicationProcess.heading}</h2>
        <ul className="content-list">
          {staffPage.applicationProcess.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
};

export default StaffRoute;
