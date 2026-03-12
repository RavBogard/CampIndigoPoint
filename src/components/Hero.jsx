import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Abstract Background Element */}
            <div className="hero-bg-abstract" />

            <div className="container hero-container">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <div>
                        <h2 className="hero-subtitle">
                            Daniel Bogard
                        </h2>
                        <h1 className="hero-title">
                            Rabbi.<br />
                            <span className="hero-title-highlight">
                                Public Educator.
                            </span><br />
                            Activist. Geek.
                        </h1>
                    </div>

                    <p className="hero-bio">
                        Rabbi at <strong>Central Reform Congregation</strong>.
                        Founder of <strong>Camp Indigo Point</strong>.
                        Fighting for democracy and trans rights while building the future of Jewish EdTech.
                    </p>

                    <div className="hero-buttons">
                        <a
                            href="#portfolio"
                            className="btn btn-primary"
                        >
                            View My Work
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary"
                        >
                            Connect
                            <MessageCircle className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Visual / Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image-wrapper"
                >
                    <img
                        src="/headshot.png"
                        alt="Daniel Bogard"
                        className="w-full h-full object-contain object-bottom"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;


