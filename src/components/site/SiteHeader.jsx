import { useId, useRef } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { siteSettings } from "../../content/site";
import MobileNavDrawer from "./MobileNavDrawer";

const SiteHeader = ({
  isMobileNavOpen,
  onToggleMobileNav,
  onCloseMobileNav,
}) => {
  const { navigation, defaultCtas } = siteSettings;
  const mobileNavId = useId();
  const mobileNavTitleId = useId();
  const menuButtonRef = useRef(null);
  const actionLinks = [
    defaultCtas.primary,
    defaultCtas.secondary,
    defaultCtas.tertiary,
  ];

  const linkClass = "inline-flex items-center justify-center min-h-10 px-3 py-2 rounded-full text-inherit no-underline font-semibold transition-colors hover:bg-black/5";
  const activeLinkClass = "text-[var(--color-camp-teal)] ring-1 ring-inset ring-[var(--color-camp-teal)]/10 bg-black/5";

  return (
    <>
      <div className="flex gap-2 lg:gap-4 items-center justify-end w-full">
        <nav className="hidden md:flex gap-1 lg:gap-2 items-center" aria-label="Primary">
          {navigation.primary.map((link) => (
            <NavLink
              key={link.id}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeLinkClass : ""}`
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <nav className="hidden lg:flex gap-1 items-center justify-center flex-wrap" aria-label="Supporting pages">
          {navigation.secondary.map((link) =>
            link.to.includes("#") ? (
              <Link key={link.id} className={linkClass} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden md:flex gap-2 items-center" aria-label="Quick actions" role="group">
          {actionLinks.map((action, index) => (
            <a
              key={action.id}
              className={`inline-flex items-center justify-center px-4 py-2 font-bold rounded-full transition-all hover:-translate-y-0.5 ${
                index === 0 
                  ? "bg-[var(--color-camp-orange)] text-white hover:bg-[#f08b3e] shadow-lg hover:shadow-xl hover:shadow-[var(--color-camp-orange)]/20" 
                  : "bg-transparent border-2 border-[var(--color-camp-teal)] text-[var(--color-camp-teal)] hover:bg-[var(--color-camp-teal)] hover:text-white"
              }`}
              href={action.href}
              rel="noreferrer"
              target="_blank"
            >
              {action.shortLabel}
            </a>
          ))}
        </div>

        <button
          aria-controls={mobileNavId}
          aria-expanded={isMobileNavOpen}
          aria-haspopup="dialog"
          aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
          className="flex md:hidden gap-2 items-center justify-center px-4 py-2 border border-black/10 rounded-full bg-white/80 text-inherit cursor-pointer"
          onClick={onToggleMobileNav}
          ref={menuButtonRef}
          type="button"
        >
          <Menu size={20} />
          <span className="font-semibold">Menu</span>
        </button>
      </div>

      <MobileNavDrawer
        id={mobileNavId}
        isOpen={isMobileNavOpen}
        onClose={onCloseMobileNav}
        returnFocusRef={menuButtonRef}
        titleId={mobileNavTitleId}
      />
    </>
  );
};

export default SiteHeader;
