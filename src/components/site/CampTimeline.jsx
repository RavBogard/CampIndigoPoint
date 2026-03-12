import { motion } from "framer-motion";

const CampTimeline = ({ schedule }) => {
  if (!schedule || schedule.length === 0) return null;

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-1 bg-[var(--color-camp-orange)]/20 md:-translate-x-1/2 rounded-full" aria-hidden="true" />

      <div className="grid gap-12">
        {schedule.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div 
                className="absolute left-[-2.25rem] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-camp-orange)] border-4 border-[var(--color-camp-sun)] shadow-md z-10" 
                aria-hidden="true"
              />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-white/95 border border-black/5 shadow-xl rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-camp-teal)]/10 text-[var(--color-camp-teal)] text-xs font-bold uppercase tracking-wider mb-3">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[var(--color-camp-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-camp-text)]/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CampTimeline;
