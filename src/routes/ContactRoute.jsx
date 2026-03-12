import PageFrame from "../components/site/PageFrame";
import { contactDirectory, socialLinks } from "../content/brand";
import { siteSettings } from "../content/site";
import { usePageMetadata } from "../lib/metadata";

const contacts = Object.values(contactDirectory);

const ContactRoute = () => {
  usePageMetadata("contact");

  return (
    <PageFrame
      eyebrow="Contact"
      title="Contact Camp Indigo Point"
      intro="Reach out before or after the registration, donation, or application handoff if a conversation would help."
      aside={
        <div className="content-card content-card--compact">
          <h2>General camp info</h2>
          <p>{siteSettings.primaryEmail}</p>
          <p>{siteSettings.primaryPhone}</p>
        </div>
      }
    >
      <section
        aria-labelledby="contact-directory-title"
        className="content-stack content-stack--three-up"
      >
        <h2 className="sr-only" id="contact-directory-title">
          Contact directory
        </h2>
        {contacts.map((contact) => (
          <article
            key={contact.email}
            aria-labelledby={`contact-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="content-card"
          >
            <h2 id={`contact-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              {contact.name}
            </h2>
            <p>{contact.role}</p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </article>
        ))}
      </section>

      <section aria-labelledby="contact-social-title" className="content-card">
        <h2 id="contact-social-title">Follow camp updates</h2>
        <div className="site-footer__socials">
          <a href={socialLinks.instagram} rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href={socialLinks.facebook} rel="noreferrer" target="_blank">
            Facebook
          </a>
        </div>
      </section>
    </PageFrame>
  );
};

export default ContactRoute;
