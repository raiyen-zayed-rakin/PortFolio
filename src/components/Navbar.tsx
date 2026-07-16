import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, identity } from "../data/content";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle background opacity/shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--nt-bg)]/80 backdrop-blur-md shadow-lg border-b border-[var(--nt-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <img
            src={identity.profileImage}
            alt="Rakin"
            className="w-9 h-9 rounded-full border-2 border-[var(--nt-sakura)] object-cover group-hover:shadow-[0_0_12px_rgba(var(--glow-sakura),0.6)] transition-shadow duration-300"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-3 py-1.5 text-sm font-semibold font-body tracking-widest transition-all duration-300 rounded-md ${
                activeSection === id
                  ? "text-[var(--nt-sakura)]"
                  : "text-[var(--nt-text-muted)] hover:text-[var(--nt-text)]"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {label}
              {activeSection === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--nt-sakura)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 rounded-md text-[var(--nt-text-muted)] hover:text-[var(--nt-sakura)] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[var(--nt-surface)]/95 backdrop-blur-md border-t border-[var(--nt-border)] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold tracking-widest transition-all duration-200 ${
                    activeSection === id
                      ? "text-[var(--nt-sakura)] bg-[rgba(var(--glow-sakura),0.1)]"
                      : "text-[var(--nt-text-muted)] hover:text-[var(--nt-text)] hover:bg-[var(--nt-surface-alt)]"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
