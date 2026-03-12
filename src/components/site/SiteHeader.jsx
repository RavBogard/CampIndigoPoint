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

  return (
    <>
      <div className="site-header">
        <nav className="site-header__nav" aria-label="Primary">
          {navigation.primary.map((link) => (
            <NavLink
              key={link.id}
              className={({ isActive }) =>
                `site-header__nav-link ${isActive ? "is-active" : ""}`
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <nav className="site-header__support" aria-label="Supporting pages">
          {navigation.secondary.map((link) =>
            link.to.includes("#") ? (
              <Link key={link.id} className="site-header__support-link" to={link.to}>
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `site-header__support-link ${isActive ? "is-active" : ""}`
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="site-header__actions" aria-label="Quick actions" role="group">
          {actionLinks.map((action, index) => (
            <a
              key={action.id}
              className={`btn ${index === 0 ? "btn-primary" : "btn-secondary"}`}
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
          className="site-header__menu-button"
          onClick={onToggleMobileNav}
          ref={menuButtonRef}
          type="button"
        >
          <Menu size={20} />
          <span>Menu</span>
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
