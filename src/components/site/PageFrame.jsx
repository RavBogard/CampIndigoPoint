const PageFrame = ({
  eyebrow,
  title,
  intro,
  children,
  aside,
  cta,
}) => {
  return (
    <div className="page-frame">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <p className="page-hero__intro">{intro}</p>

            {cta ? (
              <a
                className="btn btn-primary"
                href={cta.href}
                rel="noreferrer"
                target="_blank"
              >
                {cta.label}
              </a>
            ) : null}
          </div>

          {aside ? <aside className="page-hero__aside">{aside}</aside> : null}
        </div>
      </section>

      <div className="container page-sections">{children}</div>
    </div>
  );
};

export default PageFrame;
