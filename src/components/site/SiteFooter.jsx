import { Link } from "react-router-dom";
import {
  organizationFacts,
  socialLinks,
} from "../../content/brand";
import { actionLinks } from "../../content/actions";
import { siteSettings } from "../../content/site";

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
    <footer className="border-t border-black/10 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="grid gap-3 content-start text-[var(--color-camp-muted)]">
          <p className="uppercase tracking-[0.14em] text-xs font-bold text-[var(--color-camp-teal)]">Camp Indigo Point</p>
          <h2 className="text-[var(--color-camp-text)] text-lg font-bold font-serif">{organizationFacts.tagline}</h2>
          <p>
            Residential camp for queer and trans youth entering grades 2nd-11th.
          </p>
        </div>

        <div className="grid gap-3 content-start text-[var(--color-camp-muted)]">
          <p className="uppercase tracking-[0.14em] text-xs font-bold text-[var(--color-camp-teal)]">Explore</p>
          <nav className="grid gap-2" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-inherit no-underline hover:text-[var(--color-camp-teal)] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="grid gap-3 content-start text-[var(--color-camp-muted)]">
          <p className="uppercase tracking-[0.14em] text-xs font-bold text-[var(--color-camp-teal)]">Take the next step</p>
          <div className="grid gap-2 items-start">
            {Object.values(actionLinks).map((action) => (
              <a
                key={action.id}
                href={action.href}
                rel="noreferrer"
                target="_blank"
                className="font-bold text-[var(--color-camp-teal)] hover:underline"
              >
                {action.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3 content-start text-[var(--color-camp-muted)]">
          <p className="uppercase tracking-[0.14em] text-xs font-bold text-[var(--color-camp-teal)]">Questions?</p>
          <a href={`mailto:${siteSettings.primaryEmail}`} className="text-inherit no-underline hover:text-[var(--color-camp-teal)]">
            {siteSettings.primaryEmail}
          </a>
          <a href={`tel:${siteSettings.primaryPhone.replace(/[^0-9]/g, "")}`} className="text-inherit no-underline hover:text-[var(--color-camp-teal)]">
            {siteSettings.primaryPhone}
          </a>
          <div className="flex gap-4 mt-2">
            <a href={socialLinks.instagram} rel="noreferrer" target="_blank" className="font-bold text-[var(--color-camp-teal)] hover:underline">
              Instagram
            </a>
            <a href={socialLinks.facebook} rel="noreferrer" target="_blank" className="font-bold text-[var(--color-camp-teal)] hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
