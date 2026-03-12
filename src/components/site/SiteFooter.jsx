import { Link } from "react-router-dom";
import {
  contactDirectory,
  organizationFacts,
  socialLinks,
} from "../../content/brand";
import { actionLinks } from "../../content/actions";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Registration", to: "/registration" },
  { label: "Donate", to: "/donate" },
  { label: "Staff", to: "/staff" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__column">
          <p className="site-footer__eyebrow">Camp Indigo Point</p>
          <h2>{organizationFacts.tagline}</h2>
          <p>
            Residential camp for queer and trans youth entering grades 2nd-11th.
          </p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__eyebrow">Explore</p>
          <nav className="site-footer__links" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__eyebrow">Take the next step</p>
          <div className="site-footer__actions">
            {Object.values(actionLinks).map((action) => (
              <a
                key={action.id}
                href={action.href}
                rel="noreferrer"
                target="_blank"
              >
                {action.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__eyebrow">Questions?</p>
          <a href={`mailto:${contactDirectory.general.email}`}>
            {contactDirectory.general.email}
          </a>
          <a href={`tel:${contactDirectory.general.phone.replace(/[^0-9]/g, "")}`}>
            {contactDirectory.general.phone}
          </a>
          <p>
            Instagram and Facebook links are ready to be updated from the
            centralized content layer.
          </p>
          <div className="site-footer__socials">
            <a href={socialLinks.instagram} rel="noreferrer" target="_blank">
              Instagram
            </a>
            <a href={socialLinks.facebook} rel="noreferrer" target="_blank">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
