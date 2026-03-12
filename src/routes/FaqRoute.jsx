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
      <div className="content-stack">
        {Object.entries(faqPage.groups).map(([groupName, items]) => (
          <section
            key={groupName}
            aria-labelledby={`faq-group-${groupName.toLowerCase().replace(/\s+/g, "-")}`}
            className="content-card"
          >
            <h2 id={`faq-group-${groupName.toLowerCase().replace(/\s+/g, "-")}`}>
              {groupName}
            </h2>
            <div className="faq-list">
              {items.map((item) => (
                <article
                  key={item.question}
                  aria-labelledby={`faq-item-${item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <h3 id={`faq-item-${item.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
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
