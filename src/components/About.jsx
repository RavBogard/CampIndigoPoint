import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import "./About.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="container about-container">

                {/* Narrative Side */}
                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h5 className="about-subtitle">Advocacy & Education</h5>
                        <h2 className="about-title">A Voice for Justice & Tradition</h2>

                        <div className="about-text space-y-4">
                            <p>
                                As a Rabbi at <strong>Central Reform Congregation</strong>, I work to build a Judaism that is radically inclusive and deeply rooted in tradition. My work is not just about teaching texts, but about translating ancient wisdom into modern action.
                            </p>
                            <p>
                                I founded <strong>Camp Indigo Point</strong> to provide a safe, affirming space for trans and non-binary youth — a direct response to the legislative attacks on our children.
                            </p>
                            <p>
                                Whether I'm testifying in the state legislature or teaching a coding bootcamp for Jewish educators, my mission is the same: to empower communities to build a more just and compassionate future.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Media / Video Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="about-media"
                >
                    <div className="video-placeholder">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/43dvBUnNsoM"
                            title="Rabbi Daniel Bogard on MSNBC"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        ></iframe>
                    </div>
                    <p className="media-caption">Featured on MSNBC, speaking on Trans Rights in Missouri.</p>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
