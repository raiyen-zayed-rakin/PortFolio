import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { about, identity } from "../data/content";
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp, viewportConfig } from "../lib/animations";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="ABOUT ME" subtitle="— ORIGINS —" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left — Bio */}
        <motion.div variants={fadeInLeft} className="flex flex-col gap-6">
          <div className="flex gap-6 items-start">
            <img
              src={identity.profileImage}
              alt="Raiyen Zayed Rakin"
              className="w-20 h-20 rounded-full border-2 border-[var(--nt-sakura)] object-cover flex-shrink-0
                shadow-[0_0_20px_rgba(var(--glow-sakura),0.4)]"
            />
            <div>
              <h3 className="text-2xl font-bold text-[var(--nt-text)]"
                style={{ fontFamily: "var(--font-display)" }}>
                {identity.fullName}
              </h3>
              <p className="text-[var(--nt-sakura)] font-semibold text-sm mt-1 tracking-wider">
                {identity.tagline}
              </p>
            </div>
          </div>

          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[var(--nt-text-muted)] leading-relaxed text-base">
              {p}
            </p>
          ))}

          {/* Quick contact info */}
          <div className="flex flex-col gap-2 text-sm">
            {[
              { icon: "📍", text: identity.location },
              { icon: "📧", text: identity.email },
              { icon: "📞", text: identity.phone },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-[var(--nt-text-muted)]">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Stat Panel */}
        <motion.div variants={fadeInRight}>
          <div className="system-panel rounded-xl overflow-hidden relative">
            {/* Animated glow overlay — avoids ::after conflict with corner brackets */}
            <div className="absolute inset-0 rounded-xl pointer-events-none z-0"
              style={{
                boxShadow: "0 0 40px rgba(var(--glow-sakura-b), 0.3), 0 0 80px rgba(var(--glow-sakura), 0.2)",
                animation: "borderPulse 3s ease-in-out infinite",
              }}
            />
            {/* Title bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(var(--glow-sakura),0.2)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
              </div>
              <span
                className="text-xs tracking-[0.3em] text-[var(--nt-sakura)] font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                PLAYER STATUS
              </span>
            </div>

            <div className="p-6 flex flex-col gap-3">
              {about.panel.map(({ icon, k, v }) => (
                <motion.div
                  key={k}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-3 rounded-lg bg-[rgba(var(--glow-sakura),0.05)]
                    border border-[rgba(var(--glow-sakura),0.1)] hover:border-[rgba(var(--glow-sakura),0.3)]
                    transition-all duration-200 hover:bg-[rgba(var(--glow-sakura),0.08)]"
                >
                  <span className="text-xl w-8 flex-shrink-0 text-center">{icon}</span>
                  <div className="flex flex-1 items-center justify-between gap-4">
                    <span className="text-xs font-bold tracking-[0.2em] text-[var(--nt-text-muted)] uppercase flex-shrink-0"
                      style={{ fontFamily: "var(--font-body)" }}>
                      {k}
                    </span>
                    <span className="text-sm font-semibold text-[var(--nt-text)] text-right"
                      style={{ fontFamily: "var(--font-display)" }}>
                      {v}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom decorative bar */}
            <div className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, var(--nt-neon), var(--nt-sakura), var(--nt-electric))" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
