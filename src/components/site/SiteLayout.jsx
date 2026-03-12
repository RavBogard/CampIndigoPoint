import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { siteSettings } from "../../content/site";
import AnnouncementBar from "./AnnouncementBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell__frame">
        <AnnouncementBar />
        <header className="site-shell__header">
          <div className="container site-shell__header-inner">
            <Link
              aria-label={`${siteSettings.siteName} home`}
              className="site-shell__brand"
              to="/"
            >
              <div className="site-shell__brand-mark">
                <img
                  src="/brand/logo.png"
                  alt=""
                  className="site-shell__brand-logo"
                  aria-hidden="true"
                />
              </div>
              <span className="site-shell__brand-copy">
                <strong>{siteSettings.siteName}</strong>
                <span>{siteSettings.siteTagline}</span>
              </span>
            </Link>
            <SiteHeader
              isMobileNavOpen={isMobileNavOpen}
              onToggleMobileNav={() => setIsMobileNavOpen((open) => !open)}
              onCloseMobileNav={() => setIsMobileNavOpen(false)}
            />
          </div>
        </header>

        <main className="site-shell__main" id="main-content" tabIndex={-1}>
          <Outlet />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
};

export default SiteLayout;
