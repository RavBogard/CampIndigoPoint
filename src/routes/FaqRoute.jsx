import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageFrame from "../components/site/PageFrame";
import faqPage from "../content/data/faq.json";
import { usePageMetadata } from "../lib/metadata";

const FaqRoute = () => {
  usePageMetadata("faq");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqPage.categories];
  const filteredItems = activeCategory === "All" 
    ? faqPage.items 
    : faqPage.items.filter(item => item.category === activeCategory);

  return (
    <PageFrame
      eyebrow="Questions answered"
      title={faqPage.title}
      intro={faqPage.intro}
      media={{
        src: "/images/gallery/camp-photo-8.jpg",
        alt: "Campers enjoying a moment together.",
      }}
    >
      <div className="grid gap-8 md:gap-12">
        
        {/* Filter Chips */}
        <section aria-label="FAQ Categories" className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-bold transition-all ${
                activeCategory === category
                  ? "bg-[var(--color-camp-teal)] text-white shadow-md"
                  : "bg-white/80 text-[var(--color-camp-teal)] hover:bg-[var(--color-camp-teal)] hover:text-white border border-[var(--color-camp-teal)]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Filterable List */}
        <section
          aria-live="polite"
          className="bg-white/85 border border-black/5 shadow-xl rounded-[1.4rem] p-6 md:p-10"
        >
          <motion.div layout className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  key={item.question}
                  layout
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                  className="bg-white/90 border-l-4 border-[var(--color-camp-orange)] rounded-2xl p-6 shadow-sm grid gap-2"
                >
                  <h3 className="font-serif font-bold text-xl text-[var(--color-camp-text)]">
                    {item.question}
                  </h3>
                  <p className="leading-relaxed text-[var(--color-camp-text)]/90">{item.answer}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </PageFrame>
  );
};

export default FaqRoute;
