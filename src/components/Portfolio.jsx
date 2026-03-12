import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Portfolio.css";
import chevrutaPreview from "../assets/chevruta-screenshot.png";
import chevrutaPreviewDark from "../assets/chevruta-screenshot-dark.png";
import torahHeatmapPreview from "../assets/torah-heatmap-screenshot.png";
import torahHeatmapPreviewDark from "../assets/torah-heatmap-screenshot-dark.png";

const projects = [
    {
        title: "Chevruta.ai",
        description: "An AI-powered study partner for Jewish texts. Bridging ancient wisdom with modern LLM capabilities to democratize access to Torah study.",
        tags: ["React", "AI/LLM", "EdTech"],
        link: "https://chevruta.ai",
        github: "https://github.com/RavBogard/ChevrutAI",
        image: chevrutaPreview,
        imageDark: chevrutaPreviewDark
    },
    {
        title: "TorahHeatmap.org",
        description: "Visualizing the Torah for accessibility and study. A data visualization tool that maps text density and complexity across the Pentateuch.",
        tags: ["Data Viz", "D3.js", "Public API"],
        link: "https://torahheatmap.org",
        github: "https://github.com/RavBogard/TorahHeatMap",
        image: torahHeatmapPreview,
        imageDark: torahHeatmapPreviewDark
    }
];

const Portfolio = ({ isDarkMode }) => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="portfolio-header"
                >
                    <h2 className="portfolio-title">Building at the Intersection of <span className="text-highlight">Torah & Tech</span></h2>
                    <p className="portfolio-intro">
                        Leveraging modern technology to create new pathways for Jewish education and connection.
                    </p>
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="project-card"
                        >
                            <div className="project-card-image">
                                <img
                                    src={isDarkMode ? project.imageDark : project.image}
                                    alt={`${project.title} Preview`}
                                    className="project-image"
                                />
                            </div>

                            <div className="project-card-content">
                                <div className="project-display-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-links">
                                        <a href={project.link} className="icon-link"><ExternalLink size={20} /></a>
                                        <a href={project.github} className="icon-link"><Github size={20} /></a>
                                    </div>
                                </div>

                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                <a href={project.link} className="btn-project">View Project</a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
