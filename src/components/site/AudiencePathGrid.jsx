import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AudiencePathGrid = ({ paths }) => {
  return (
    <div className="audience-path-grid">
      {paths.map((path) => (
        <article key={path.id} className="audience-path-card">
          <p className="audience-path-card__eyebrow">{path.label}</p>
          <p>{path.description}</p>
          <div className="audience-path-card__actions">
            <Link className="audience-path-card__route" to={path.route}>
              {path.routeLabel}
              <ArrowRight size={16} />
            </Link>
            <a href={path.action.href} rel="noreferrer" target="_blank">
              {path.action.shortLabel}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AudiencePathGrid;
