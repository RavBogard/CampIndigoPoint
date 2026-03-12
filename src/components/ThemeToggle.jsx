import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Dark Mode"
            style={{
                position: "fixed",
                top: "1.5rem",
                right: "1.5rem",
                zIndex: 50,
                background: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                border: "none",
                borderRadius: "50%",
                width: "3rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isDarkMode ? "#fbbf24" : "#1e293b",
                cursor: "pointer",
                backdropFilter: "blur(10px)"
            }}
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
};

export default ThemeToggle;
