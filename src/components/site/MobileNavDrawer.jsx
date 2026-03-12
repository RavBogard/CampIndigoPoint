import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { siteSettings } from "../../content/site";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const MobileNavDrawer = ({ id, isOpen, onClose, returnFocusRef, titleId }) => {
  const { navigation, defaultCtas } = siteSettings;
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const actionLinks = [
    defaultCtas.primary,
    defaultCtas.secondary,
    defaultCtas.tertiary,
  ];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const returnFocusTarget = returnFocusRef?.current;
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll(focusableSelector);
      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("menu-open");
      returnFocusTarget?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}
      data-open={isOpen}
    >
      <div
        aria-hidden="true"
        className="mobile-nav__scrim"
        onClick={onClose}
      />
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className="mobile-nav__panel"
        id={id}
        ref={panelRef}
        role="dialog"
      >
        <div className="mobile-nav__header">
          <div>
            <p className="mobile-nav__eyebrow">Navigate</p>
            <h2 id={titleId}>Find the right path</h2>
          </div>
          <button
            aria-label="Close navigation"
            className="mobile-nav__close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-nav__section">
          <p className="mobile-nav__label">Audience paths</p>
          <nav className="mobile-nav__links" aria-label="Audience">
            {navigation.primary.map((link) => (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `mobile-nav__link ${isActive ? "is-active" : ""}`
                }
                onClick={onClose}
                to={link.to}
              >
                <span>{link.label}</span>
                <small>{link.summary}</small>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mobile-nav__section">
          <p className="mobile-nav__label">Explore</p>
          <nav className="mobile-nav__links" aria-label="Site sections">
            {navigation.secondary.map((link) =>
              link.to.includes("#") ? (
                <Link
                  key={link.id}
                  className="mobile-nav__link mobile-nav__link--simple"
                  onClick={onClose}
                  to={link.to}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.id}
                  className={({ isActive }) =>
                    `mobile-nav__link mobile-nav__link--simple ${isActive ? "is-active" : ""}`
                  }
                  onClick={onClose}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>
        </div>

        <div className="mobile-nav__section mobile-nav__section--actions">
          {actionLinks.map((action, index) => (
            <a
              key={action.id}
              className={`btn ${index === 0 ? "btn-primary" : "btn-secondary"}`}
              href={action.href}
              onClick={onClose}
              rel="noreferrer"
              target="_blank"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavDrawer;
