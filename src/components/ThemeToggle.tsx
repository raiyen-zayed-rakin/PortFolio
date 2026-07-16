import { useTheme } from "../theme/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      id="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-[var(--nt-border)] bg-[var(--nt-surface)] transition-all duration-300 hover:border-[var(--nt-sakura)] hover:shadow-[0_0_12px_rgba(var(--glow-sakura),0.4)]"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun size={18} className="text-[var(--nt-gold)]" />
        ) : (
          <Moon size={18} className="text-[var(--nt-neon)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
