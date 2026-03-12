import { motion } from "framer-motion";
import "./SocialProof.css";

const publications = [
    { name: "The Washington Post", url: "https://www.washingtonpost.com/health/2023/02/28/missouri-transgender-bills/" },
    { name: "MSNBC", url: "https://www.youtube.com/watch?v=43dvBUnNsoM" },
    { name: "Slate", url: "https://slate.com/news-and-politics/2023/06/missouri-anti-trans-legislation-judaism-testimony.html" },
    { name: "The St. Louis Post-Dispatch", url: "https://www.stltoday.com/news/local/column/aisha-sultan/article_c5a2ad98-213c-4dae-94c4-630faabdd124.html" },
    { name: "Kveller", url: "https://www.kveller.com/this-missouri-rabbi-wont-stop-fighting-for-his-trans-child/" },
    { name: "Georgetown Law Journal", url: "https://www.law.georgetown.edu/georgetown-law-journal/in-print/volume-112/volume-112-issue-3-march-2024/the-free-exercise-clause-in-transition-examining-religious-challenges-to-state-bans-on-gender-affirming-care/" },
    { name: "Boston University Law Review", url: "https://www.bu.edu/bulawreview/files/2024/05/CARILLO.pdf" }
];

const SocialProof = () => {
    return (
        <section className="social-proof-section">
            <div className="container">
                <p className="social-proof-label">As Seen In</p>
                <div className="social-proof-grid">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="social-proof-item"
                        >
                            {pub.url ? (
                                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="social-proof-link">
                                    <div className="social-proof-text-logo">{pub.name}</div>
                                </a>
                            ) : (
                                <div className="social-proof-text-logo">{pub.name}</div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
