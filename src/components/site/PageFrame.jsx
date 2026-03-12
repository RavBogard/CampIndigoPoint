const PageFrame = ({
  eyebrow,
  title,
  intro,
  children,
  aside,
  cta,
  media,
}) => {
  return (
    <div className="pb-16">
      <section className="pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:gap-12 lg:grid-cols-[1.5fr_1fr] items-center">
          <div className="bg-white/85 border border-black/5 shadow-2xl rounded-[1.75rem] p-6 md:p-10 grid gap-4">
            {eyebrow ? <p className="uppercase tracking-[0.14em] text-xs font-bold text-[var(--color-camp-teal)]">{eyebrow}</p> : null}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-camp-text)] font-serif leading-tight tracking-tight">{title}</h1>
            <p className="text-lg text-[var(--color-camp-text)] leading-relaxed">{intro}</p>

            {cta ? (
              <div className="mt-2">
                <a
                  className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-full transition-all hover:-translate-y-0.5 bg-[var(--color-camp-orange)] text-white hover:bg-[#f08b3e] shadow-lg hover:shadow-xl hover:shadow-[var(--color-camp-orange)]/20"
                  href={cta.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {cta.label}
                </a>
              </div>
            ) : null}
          </div>

          {media ? (
            <div className="rounded-[2rem] overflow-hidden shadow-2xl md:-rotate-2">
              {media.src ? (
                <img src={media.src} alt={media.alt} className="w-full h-full min-h-[300px] object-cover" />
              ) : (
                media 
              )}
            </div>
          ) : aside ? (
            <aside className="bg-white/85 border border-black/5 shadow-2xl rounded-[1.75rem] p-6 md:p-8">
              {aside}
            </aside>
          ) : null}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:gap-12">{children}</div>
    </div>
  );
};

export default PageFrame;
