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
      media={{
        src: "/images/gallery/camp-photo-9.jpg",
        alt: "A welcoming view of Camp Indigo Point.",
      }}
    >
      <section
        aria-labelledby="contact-directory-title"
        className="bg-[var(--color-camp-sun)] rounded-[3rem_1.5rem_4rem_2rem] p-8 md:p-14 border-b-8 border-[var(--color-camp-orange)] shadow-xl grid gap-4"
      >
        <h2 id="contact-directory-title" className="text-3xl md:text-4xl font-extrabold text-[var(--color-camp-text)] font-serif tracking-tight content-title--underline">
          Who to Contact
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {contactDirectory.map((contact) => (
            <article
              key={contact.email}
              aria-labelledby={`contact-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="bg-pink-50 border-l-8 border-pink-600 shadow-xl rounded-[1.4rem] p-6 grid gap-2 content-start"
            >
              <h3 className="uppercase tracking-[0.14em] text-[0.8rem] font-bold text-[var(--color-camp-teal)] mb-2">{contact.intent}</h3>
              <h4 id={`contact-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-xl font-bold font-serif text-pink-900">
                {contact.name}
              </h4>
              <p className="text-pink-950/80 font-medium">{contact.role}</p>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center px-4 py-2 mt-4 font-bold rounded-full transition-all bg-[var(--color-camp-orange)] text-white hover:bg-[#f08b3e] shadow-md w-full">
                Email {contact.name.split(' ')[0]}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:gap-8 md:grid-cols-2">
        <article aria-labelledby="contact-press-title" className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start">
          <h2 id="contact-press-title" className="text-2xl md:text-3xl font-bold font-serif">Camp Indigo Point in the Press</h2>
          <p className="leading-relaxed">We are proud to have our sanctuary featured in national media. Read the stories below:</p>
          <ul className="grid gap-4 mt-2">
            {pressLinks.map((link) => (
              <li key={link.url} className="pl-8 relative font-medium before:content-['→'] before:text-[var(--color-camp-orange)] before:font-extrabold before:text-xl before:absolute before:left-0 before:-top-1.5">
                <strong>{link.publication}:</strong> <br/>
                <a href={link.url} target="_blank" rel="noreferrer" className="text-[var(--color-camp-teal)] font-bold hover:underline">{link.title}</a>
              </li>
            ))}
          </ul>
        </article>

        <article aria-labelledby="contact-social-title" className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-8 grid gap-4 content-start">
          <h2 id="contact-social-title" className="text-2xl md:text-3xl font-bold font-serif">Follow the Joy</h2>
          <p className="leading-relaxed">See the magic of camp year-round on our social channels.</p>
          <div className="flex gap-4 mt-4">
            <a href={socialLinks.instagram} className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-full transition-all bg-transparent border-2 border-[var(--color-camp-teal)] text-[var(--color-camp-teal)] hover:bg-[var(--color-camp-teal)] hover:text-white" rel="noreferrer" target="_blank">
              Instagram
            </a>
            <a href={socialLinks.facebook} className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-full transition-all bg-transparent border-2 border-[var(--color-camp-teal)] text-[var(--color-camp-teal)] hover:bg-[var(--color-camp-teal)] hover:text-white" rel="noreferrer" target="_blank">
              Facebook
            </a>
          </div>
        </article>
      </section>
    </PageFrame>
  );
};

export default ContactRoute;
