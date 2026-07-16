import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { socials } from "../data/content";
import { GithubIcon, LinkedinIcon, InstagramIcon, ResearchGateIcon, EmailIcon } from "../components/BrandIcons";

const SOCIAL_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  ResearchGate: ResearchGateIcon,
  Email: EmailIcon,
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--nt-border)] mt-12">
      {/* Wave divider */}
      <div className="wave-divider -mt-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "40px" }}>
          <path
            d="M0,40 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z"
            fill="rgba(var(--glow-sakura),0.06)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">


        {/* Center — Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, href }) => {
            const Icon = SOCIAL_ICONS[label];
            return Icon ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--nt-text-muted)] hover:text-[var(--nt-sakura)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(var(--glow-sakura),0.7)]"
              >
                <Icon size={20} />
              </a>
            ) : null;
          })}
        </div>

        {/* Right — Back to top */}
        <motion.button
          onClick={scrollTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full border border-[var(--nt-border)] bg-[var(--nt-surface)]
            flex items-center justify-center text-[var(--nt-text-muted)]
            hover:border-[var(--nt-sakura)] hover:text-[var(--nt-sakura)]
            hover:shadow-[0_0_12px_rgba(var(--glow-sakura),0.4)] transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>

      {/* Copyright */}
      <div className="text-center pb-4 text-xs text-[var(--nt-text-muted)] opacity-60">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}
