import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { CampButton, PrideThread } from "./CampElements";
import brand from "../../content/data/brand.json";
import programs from "../../content/data/programs.json";

const links = [["/camp-life", "Camp life"], ["/registration", "Overnight camp"], ["/colorado", "Colorado"], ["/families", "For families"], ["/staff", "Work at camp"]];

function Navigation({ close }) {
  return <>{links.map(([to, label]) => <NavLink key={to} to={to} onClick={close}>{label}</NavLink>)}<CampButton to="/donate" variant="sun" onClick={close}>Give camp</CampButton></>;
}

export default function PosterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const main = useRef(null);
  const menuButton = useRef(null);
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      main.current?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
    }
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" }));
    } else { window.scrollTo?.({ top: 0, behavior: "instant" }); }
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = event => { if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);
  return <div className="camp-site">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="season-note"><Link to="/registration">Summer {programs.season} · {programs.dates} <span>Registration is open ↗</span></Link></div>
    <header className="camp-header"><div className="camp-wrap header-inner"><Link to="/" aria-label="Camp Indigo Point home" onClick={() => setMenuOpen(false)}><img className="camp-logo" src="/brand/logo.png" alt="Camp Indigo Point — sun, trees, tent, and water" width="138" height="138" /></Link><nav className="desktop-nav" aria-label="Main navigation"><Navigation /></nav><div className="mobile-actions"><CampButton to="/donate" variant="sun">Give camp</CampButton><button className="menu-button" ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button></div></div>{<nav hidden={!menuOpen} id="mobile-navigation" className="mobile-nav camp-wrap" aria-label="Mobile navigation"><Navigation close={() => setMenuOpen(false)} /><Link to="/about" onClick={() => setMenuOpen(false)}>Our story</Link><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></nav>}</header>
    <PrideThread /><main id="main-content" tabIndex="-1" ref={main}><Outlet /></main>
    <footer className="camp-footer"><div className="camp-wrap footer-grid"><div className="footer-brand"><img className="camp-logo" src="/brand/logo.png" alt="Camp Indigo Point" width="120" height="120" /><p>Summer camp.<br />Queer community.<br />A future you can see.</p></div><nav aria-label="Footer navigation"><Link to="/about">Our story</Link><Link to="/families">For families</Link><Link to="/faq">Questions & answers</Link><Link to="/staff">Work at camp</Link><Link to="/registration">Register</Link><Link to="/donate">Donate</Link><Link to="/colorado">Colorado</Link><Link to="/contact">Contact</Link></nav><div><a href="mailto:info@campindigopoint.org">info@campindigopoint.org</a><a href="tel:3143486412">314-348-6412</a><div className="footer-social"><a href={brand.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={brand.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a></div><p className="footer-small">Fiscally sponsored by the Ashrei Foundation.</p></div></div><div className="camp-wrap footer-bottom"><span>© {new Date().getFullYear()} Camp Indigo Point</span><span>Come as you are. We’re glad you’re here.</span></div></footer>
  </div>;
}

