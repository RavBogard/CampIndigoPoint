import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { siteSettings } from "../../content/site";
import AnnouncementBar from "./AnnouncementBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_right,rgba(225,122,45,0.08),transparent_40%),radial-gradient(circle_at_top_left,rgba(31,95,122,0.08),transparent_40%),var(--color-camp-sand)] text-[var(--color-camp-text)] font-sans">
      <a className="absolute left-4 -top-12 z-30 px-4 py-3 rounded-full bg-[var(--color-camp-text)] text-white no-underline focus:top-4 transition-all" href="#main-content">
        Skip to content
      </a>

      <div className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <header className="sticky top-0 z-20 bg-[var(--color-camp-sand)]/85 backdrop-blur-md border-b-2 border-[var(--color-camp-teal)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center justify-between py-2 md:py-4">
            <div className="flex items-center justify-between">
              <Link
                aria-label={`${siteSettings.siteName} home`}
                className="inline-flex gap-3 items-center no-underline text-inherit"
                to="/"
              >
                <div className="inline-flex items-center h-9 md:h-14 transition-all duration-200">
                  <img
                    src="/brand/logo.png"
                    alt=""
                    className="h-full w-auto object-contain"
                    aria-hidden="true"
                  />
                </div>
                <span className="grid">
                  <strong className="text-sm md:text-base font-bold font-serif tracking-tight">{siteSettings.siteName}</strong>
                  <span className="text-[var(--color-camp-muted)] text-sm hidden md:block">{siteSettings.siteTagline}</span>
                </span>
              </Link>
              {/* Mobile Menu Button is now inside SiteHeader, which handles its own layout, but we need it positioned on mobile. We pass the state down. */}
              <div className="md:hidden">
                <SiteHeader
                  isMobileNavOpen={isMobileNavOpen}
                  onToggleMobileNav={() => setIsMobileNavOpen((open) => !open)}
                  onCloseMobileNav={() => setIsMobileNavOpen(false)}
                />
              </div>
            </div>
            <div className="hidden md:block w-full md:w-auto">
               <SiteHeader
                  isMobileNavOpen={isMobileNavOpen}
                  onToggleMobileNav={() => setIsMobileNavOpen((open) => !open)}
                  onCloseMobileNav={() => setIsMobileNavOpen(false)}
                />
            </div>
          </div>
        </header>

        <main className="flex-1 relative overflow-hidden focus:outline-none" id="main-content" tabIndex={-1}>
          <div className="absolute w-[30rem] h-[30rem] rounded-full blur-[80px] -z-10 opacity-10 top-[10%] -left-[10%] bg-[var(--color-camp-teal)]" aria-hidden="true" />
          <div className="absolute w-[30rem] h-[30rem] rounded-full blur-[80px] -z-10 opacity-10 bottom-[10%] -right-[10%] bg-[var(--color-camp-orange)]" aria-hidden="true" />
          <Outlet />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
};

export default SiteLayout;
