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
      aside={
        <div className="content-card content-card--compact">
          <h2>{staffPage.applicationProcess.heading}</h2>
          <p>Questions for the team? {staffPage.applicationProcess.contact}</p>
        </div>
      }
      cta={staffPage.cta}
    >
      <section aria-labelledby="staff-roles-title" className="content-panel">
        <h2 id="staff-roles-title">Staff roles</h2>
        <div className="content-stack content-stack--three-up">
          {staffPage.roles.map((role) => (
            <article
              key={role.id}
              aria-labelledby={`staff-role-${role.id}`}
              className="content-card"
            >
              <h3 id={`staff-role-${role.id}`}>{role.label}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="staff-culture-title" className="content-card">
        <h2 id="staff-culture-title">{staffPage.culture.heading}</h2>
        <p>{staffPage.culture.body}</p>
        <ul>
          {staffPage.culture.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="staff-process-title"
        className="content-card"
      >
        <h2 id="staff-process-title">{staffPage.applicationProcess.heading}</h2>
        <ol>
          {staffPage.applicationProcess.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </PageFrame>
  );
};

export default StaffRoute;
