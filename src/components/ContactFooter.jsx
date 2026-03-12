import { Instagram } from "lucide-react";
import "./ContactFooter.css";

// Check Icon for "Verified" badge imitation
const VerifiedBadge = () => (
    <svg className="verified-badge" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M12 3L14.7776 3.65522L17.2025 5.2975L19.4891 7.15241L21.0503 9.7776L21.6552 12.5552L21.0503 15.3328L19.4891 17.9576L17.2025 19.8125L14.7776 21.4548L12 22.11L9.22238 21.4548L6.7975 19.8125L4.51086 17.9576L2.94969 15.3328L2.3448 12.5552L2.94969 9.7776L4.51086 7.15241L6.7975 5.2975L9.22238 3.65522L12 3Z" fill="#3b82f6" />
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ContactFooter = () => {
    return (
        <footer id="contact" className="footer-section">
            <div className="container footer-container">

                <div className="footer-brand">
                    <h3>Daniel Bogard</h3>
                    <p>Rabbi. Educator. Activist. Technologist.</p>
                </div>

                <div className="footer-links">
                    <a href="https://www.tiktok.com/@ravbogard" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                        <span>TikTok</span>
                    </a>

                    <a href="https://twitter.com/ravbogard" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>Twitter / X</span>
                        <VerifiedBadge />
                    </a>

                    <a href="https://www.instagram.com/ravbogard" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Instagram size={18} />
                        <span>Instagram</span>
                        <VerifiedBadge />
                    </a>
                </div>

                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Daniel Bogard. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
