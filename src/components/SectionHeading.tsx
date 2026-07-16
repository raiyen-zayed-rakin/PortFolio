import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {subtitle && (
        <p
          className="text-sm font-semibold tracking-[0.35em] text-[var(--nt-sakura)] mb-2 uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl font-bold text-[var(--nt-text)]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
      >
        {title}
      </h2>
      <div className={`mt-3 h-0.5 w-24 section-line ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
