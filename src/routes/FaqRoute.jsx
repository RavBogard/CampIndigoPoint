import PageFrame from "../components/site/PageFrame";
import { faqPage } from "../content/faq";
import { usePageMetadata } from "../lib/metadata";

const FaqRoute = () => {
  usePageMetadata("faq");

  return (
    <PageFrame
      eyebrow="Questions answered"
      title={faqPage.title}
      intro={faqPage.intro}
    >
      <div className="grid gap-8 md:gap-12">
        {Object.entries(faqPage.groups).map(([groupName, items]) => (
          <section
            key={groupName}
            aria-labelledby={`faq-group-${groupName.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-10 grid gap-6 content-start"
          >
            <h2 id={`faq-group-${groupName.toLowerCase().replace(/\s+/g, "-")}`} className="text-3xl font-extrabold font-serif capitalize text-[var(--color-camp-teal)]">
              {groupName}
            </h2>
            <div className="grid gap-4">
              {items.map((item) => (
                <article
                  key={item.question}
                  aria-labelledby={`faq-item-${item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="bg-white/90 border-l-4 border-[var(--color-camp-orange)] rounded-2xl p-6 shadow-sm grid gap-2"
                >
                  <h3 id={`faq-item-${item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-serif font-bold text-xl text-[var(--color-camp-text)]">
                    {item.question}
                  </h3>
                  <p className="leading-relaxed text-[var(--color-camp-text)]/90">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageFrame>
  );
};

export default FaqRoute;
