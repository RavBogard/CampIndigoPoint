import PageFrame from "../components/site/PageFrame";
import { contactDirectory, pressLinks, socialLinks } from "../content/brand";
import { siteSettings } from "../content/site";
import { usePageMetadata } from "../lib/metadata";

const ContactRoute = () => {
  usePageMetadata("contact");

  return (
    <PageFrame
      eyebrow="Contact & Press"
      title="We're Here to Help"
      intro="Whether you are a family with specific accommodation questions, a donor wanting to discuss foundation support, or a reporter looking for a quote, we want to hear from you."
    >
      <section
        aria-labelledby="contact-directory-title"
        className="content-panel content-panel--wavy"
      >
        <h2 id="contact-directory-title" className="content-title--underline">
          Who to Contact
        </h2>
        <div className="content-stack content-stack--three-up" style={{ marginTop: '2rem' }}>
          {contactDirectory.map((contact) => (
            <article
              key={contact.email}
              aria-labelledby={`contact-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="content-card content-card--affirming"
            >
              <h3 className="page-hero__eyebrow" style={{ marginBottom: '0.5rem' }}>{contact.intent}</h3>
              <h4 id={`contact-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {contact.name}
              </h4>
              <p>{contact.role}</p>
              <a href={`mailto:${contact.email}`} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                Email {contact.name.split(' ')[0]}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-stack content-stack--two-up">
        <article aria-labelledby="contact-press-title" className="content-card">
          <h2 id="contact-press-title">Camp Indigo Point in the Press</h2>
          <p>We are proud to have our sanctuary featured in national media. Read the stories below:</p>
          <ul className="content-list">
            {pressLinks.map((link) => (
              <li key={link.url}>
                <strong>{link.publication}:</strong> <br/>
                <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
              </li>
            ))}
          </ul>
        </article>

        <article aria-labelledby="contact-social-title" className="content-card">
          <h2 id="contact-social-title">Follow the Joy</h2>
          <p>See the magic of camp year-round on our social channels.</p>
          <div className="site-footer__socials" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href={socialLinks.instagram} className="btn btn-secondary" rel="noreferrer" target="_blank">
              Instagram
            </a>
            <a href={socialLinks.facebook} className="btn btn-secondary" rel="noreferrer" target="_blank">
              Facebook
            </a>
          </div>
        </article>
      </section>
    </PageFrame>
  );
};

export default ContactRoute;
