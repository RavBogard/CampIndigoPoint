import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const getCardBorderColor = (id) => {
  if (id === 'donors') return 'border-b-[var(--color-camp-orange)]';
  if (id === 'staff') return 'border-b-sky-400';
  return 'border-b-[var(--color-camp-teal)]';
}

const AudiencePathGrid = ({ paths }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {paths.map((path) => (
        <article 
          key={path.id} 
          className={`bg-gradient-to-b from-white/95 to-slate-50/90 border border-black/5 rounded-[1.4rem] p-6 grid gap-4 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border-b-[6px] ${getCardBorderColor(path.id)}`}
        >
          <p className="uppercase tracking-[0.16em] text-[0.75rem] font-bold text-[var(--color-camp-teal)]">{path.label}</p>
          <p className="leading-relaxed">{path.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-auto pt-2">
            <Link className="inline-flex gap-2 items-center font-bold text-[var(--color-camp-orange)] no-underline hover:underline" to={path.route}>
              {path.routeLabel}
              <ArrowRight size={16} />
            </Link>
            <a 
              className="inline-flex items-center justify-center px-4 py-2 font-bold rounded-full transition-all bg-transparent border-2 border-[var(--color-camp-teal)] text-[var(--color-camp-teal)] hover:bg-[var(--color-camp-teal)] hover:text-white text-sm"
              href={path.action.href} 
              rel="noreferrer" 
              target="_blank"
            >
              {path.action.shortLabel}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AudiencePathGrid;
