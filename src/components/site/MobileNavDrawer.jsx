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
      returnFocusTarget?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  const activeLinkClass = "text-[var(--color-camp-teal)] ring-1 ring-inset ring-[var(--color-camp-teal)]/10";

  return (
    <div
      aria-hidden={!isOpen}
      className={`md:hidden fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      data-open={isOpen}
    >
      <div
        aria-hidden="true"
        className={`fixed inset-0 bg-slate-900/30 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className={`fixed top-0 right-0 w-[min(26rem,92vw)] h-screen p-6 bg-[var(--color-camp-sand)] shadow-2xl overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        id={id}
        ref={panelRef}
        role="dialog"
      >
        <div className="grid grid-cols-[1fr_auto] gap-4 items-start mb-8">
          <div>
            <p className="text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[var(--color-camp-teal)]">Navigate</p>
            <h2 id={titleId} className="text-2xl mt-1">Find the right path</h2>
          </div>
          <button
            aria-label="Close navigation"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white cursor-pointer hover:bg-black/5"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-4 mb-8">
          <p className="text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[var(--color-camp-teal)]">Audience paths</p>
          <nav className="grid gap-4" aria-label="Audience">
            {navigation.primary.map((link) => (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `grid gap-1 p-4 rounded-2xl bg-white/90 text-inherit no-underline shadow-sm ${isActive ? activeLinkClass : ""}`
                }
                onClick={onClose}
                to={link.to}
              >
                <span className="font-bold text-lg">{link.label}</span>
                <small className="text-[var(--color-camp-muted)] text-sm">{link.summary}</small>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="grid gap-4 mb-8">
          <p className="text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[var(--color-camp-teal)]">Explore</p>
          <nav className="grid gap-2" aria-label="Site sections">
            {navigation.secondary.map((link) =>
              link.to.includes("#") ? (
                <Link
                  key={link.id}
                  className="block p-4 rounded-2xl bg-white/90 text-inherit no-underline shadow-sm font-semibold"
                  onClick={onClose}
                  to={link.to}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.id}
                  className={({ isActive }) =>
                    `block p-4 rounded-2xl bg-white/90 text-inherit no-underline shadow-sm font-semibold ${isActive ? activeLinkClass : ""}`
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

        <div className="grid gap-4 mt-8 pt-8 border-t border-black/10">
          {actionLinks.map((action, index) => (
            <a
              key={action.id}
              className={`inline-flex items-center justify-center px-4 py-3 w-full font-bold rounded-full transition-all ${
                index === 0 
                  ? "bg-[var(--color-camp-orange)] text-white" 
                  : "bg-transparent border-2 border-[var(--color-camp-teal)] text-[var(--color-camp-teal)]"
              }`}
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
