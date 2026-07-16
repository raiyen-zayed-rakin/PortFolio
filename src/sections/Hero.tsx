import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { identity, headlineStats, socials } from "../data/content";
import { GithubIcon, LinkedinIcon, InstagramIcon, ResearchGateIcon, EmailIcon } from "../components/BrandIcons";
import { staggerContainer, fadeInUp, fadeInRight, viewportConfig } from "../lib/animations";

const SOCIAL_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  ResearchGate: ResearchGateIcon,
  Email: EmailIcon,
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  // Typing animation
  useEffect(() => {
    const currentRole = identity.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = window.setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % identity.roles.length);
        return;
      }
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, speed);

    return () => {
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 40%, rgba(var(--glow-neon),0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(var(--glow-sakura),0.1) 0%, transparent 60%)",
          }}
        />
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              background: i % 2 === 0
                ? `rgba(var(--glow-sakura), 0.06)`
                : `rgba(var(--glow-electric), 0.05)`,
              filter: "blur(20px)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Floating sakura petals */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute text-[var(--nt-sakura)] opacity-20 select-none pointer-events-none text-lg"
            style={{ left: `${5 + i * 12}%`, top: `${-5}%` }}
            animate={{ y: ["0vh", "110vh"], rotate: [0, 360], x: [0, i % 2 === 0 ? 40 : -40] }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full"
      >
        {/* Left — Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
          {/* Japanese subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-sm tracking-[0.4em] text-[var(--nt-sakura)] font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {identity.japaneseSub}
          </motion.p>

          {/* Name */}
          <motion.div variants={fadeInUp}>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--nt-text)] leading-none"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
              data-text={identity.fullName}
            >
              <span className="text-glow">{identity.fullName}</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={fadeInUp} className="h-8 flex items-center">
            <span
              className="text-base sm:text-lg font-bold text-[var(--nt-electric)] tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-[var(--nt-sakura)] ml-0.5 align-middle"
                style={{ animation: "typingBlink 0.8s ease-in-out infinite" }}
              />
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={fadeInUp}
            className="text-[var(--nt-text-muted)] max-w-lg leading-relaxed text-base"
          >
            {identity.intro}
          </motion.p>

          {/* Headline stats */}
          <motion.div variants={fadeInUp} className="flex gap-8">
            {headlineStats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start">
                <span
                  className="text-2xl font-black text-[var(--nt-sakura)] text-glow"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </span>
                <span className="text-[10px] text-[var(--nt-text-muted)] tracking-widest font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <a
              href={identity.cvPath}
              download
              className="btn-sakura flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}
            >
              <Download size={16} />
              DOWNLOAD CV
            </a>
            <button
              onClick={scrollToContact}
              className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}
            >
              CONTACT ME
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {socials.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label];
              return Icon ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--nt-text-muted)] hover:text-[var(--nt-sakura)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(var(--glow-sakura),0.8)]"
                >
                  <Icon size={22} />
                </a>
              ) : null;
            })}
          </motion.div>
        </div>

        {/* Right — Ghibli Image */}
        <motion.div
          variants={fadeInRight}
          className="relative order-1 lg:order-2 flex-shrink-0"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full scale-110"
            style={{
              background: "radial-gradient(circle, rgba(var(--glow-sakura),0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          />
          <motion.img
            src={identity.heroImage}
            alt="Raiyen Zayed Rakin — Ghibli art"
            className="animate-float relative z-10 w-64 sm:w-80 lg:w-96 drop-shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          {/* Electric arc decorations */}
          <div className="absolute -top-4 -right-4 text-2xl animate-pulse select-none pointer-events-none opacity-60">⚡</div>
          <div className="absolute -bottom-4 -left-4 text-xl select-none pointer-events-none opacity-40"
            style={{ animation: "pulseGlow 2s ease-in-out infinite", animationDelay: "1s" }}>✨</div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--nt-text-muted)] hover:text-[var(--nt-sakura)] transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
