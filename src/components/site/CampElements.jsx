import { Link } from "react-router-dom";
import brand from "../../content/data/brand.json";
import programs from "../../content/data/programs.json";

export function CampButton({ to, href, children, variant = "", ...props }) {
  const className = `camp-button ${variant ? `camp-button--${variant}` : ""}`;
  return to ? <Link className={className} to={to} {...props}>{children}<span aria-hidden="true">↗</span></Link>
    : <a className={className} href={href} {...props}>{children}<span aria-hidden="true">↗</span></a>;
}

export function CampPhoto({ number, src, alt, eager = false, className = "" }) {
  return <img className={`camp-photo ${className}`} src={src || `/images/gallery/camp-photo-${number}.jpg`} alt={alt} width="1080" height="1080" loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : "auto"} />;
}

export function PrideThread() {
  return <div className="pride-thread" aria-hidden="true">{Array.from({ length: 11 }, (_, i) => <span key={i} />)}</div>;
}

export function Sunrise() {
  return <svg className="poster-sun" viewBox="0 0 600 600" aria-hidden="true"><circle cx="300" cy="300" r="280" fill="#d62845" /><circle cx="300" cy="300" r="251" fill="#f99921" /><circle cx="300" cy="300" r="222" fill="#f9cc24" /></svg>;
}

export function PageHero({ eyebrow, title, intro, photo, children, color = "blue", className = "" }) {
  return <section className={`page-hero page-hero--${color} ${className}`}><div className="camp-wrap page-hero__grid"><div><p className="camp-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="camp-lead">{intro}</p>{children && <div className="camp-actions">{children}</div>}</div>{photo && <div className="page-hero__photo"><CampPhoto {...photo} eager /><span className="photo-corner" aria-hidden="true">✳</span></div>}</div></section>;
}

export function StorySection({ heading, body, bullets, children, id, eyebrow, color = "" }) {
  return <section id={id} className={`camp-section ${color ? `camp-section--${color}` : ""}`}><div className="camp-wrap story-grid"><div>{eyebrow && <p className="camp-eyebrow">{eyebrow}</p>}<h2>{heading}</h2></div><div className="camp-prose">{body && <p>{body}</p>}{bullets && <ul className="camp-list">{bullets.map(item => <li key={item}>{item}</li>)}</ul>}{children}</div></div></section>;
}

export function PressLinks({ full = false }) {
  return <div className={full ? "press-stories" : "camp-press"}>{!full && <p className="camp-eyebrow">Get to know Indigo Point</p>}<div>{(full ? brand.pressLinks : brand.pressLinks.slice(0, 4)).map(item => <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer"><span>{item.publication} <span aria-hidden="true">↗</span></span>{full && <strong>{item.title}</strong>}</a>)}</div></div>;
}

export function ProgramChoices() {
  return <section className="camp-section" id="programs"><div className="camp-wrap"><div className="section-heading"><div><p className="camp-eyebrow">Find your next adventure.</p><h2>Two ways to find<br />your people.</h2></div><p>Our overnight camp and Colorado teen program bring the Indigo Point community into different kinds of summer.</p></div><div className="program-grid"><article><p className="camp-eyebrow">01 / Overnight camp</p><Link to="/registration" className="program-image"><CampPhoto number={11} alt="Two campers jump from the dock into the lake" /></Link><h3>See you at camp.</h3><p className="program-facts">{programs.dates} · {programs.grades}</p><p>Two weeks in the Midwest, full of camp life, friends, and queer community. Scholarships available.</p><CampButton to="/registration">Explore overnight camp</CampButton></article><article><p className="camp-eyebrow">02 / Colorado teen program</p><Link to="/colorado" className="program-image"><CampPhoto number={12} alt="A group stands arm in arm beside a mountain lake" /></Link><h3>Take camp to the mountains.</h3><p className="program-facts">A mountain adventure for older campers</p><p>The Indigo Point community, in a different setting. Learn about the program and ask us about the next opportunity.</p><CampButton to="/colorado" variant="outline">Explore Colorado</CampButton></article></div></div></section>;
}

export function GivingInvite() {
  return <StorySection eyebrow="Big things happen through small things." heading={<>Marshmallows.<br />Arts & crafts.<br />Lives changed.</>} color="pink" body="We’re saving lives through ordinary camp experiences and intergenerational queer community. Your support helps kids get here, find their people, and see a future they can imagine themselves in."><p>Help us keep cost from standing between a kid and camp.</p><CampButton to="/donate">Give a kid camp</CampButton></StorySection>;
}
