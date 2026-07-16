import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp, viewportConfig } from "../lib/animations";

interface ResearchCardProps {
  title: string;
  journal: string;
  year: number;
  doi: string | null;
  type: string;
  index: number;
}

export default function ResearchCard({ title, journal, year, doi, type, index }: ResearchCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay: index * 0.1 }}
      className="gate-card rounded-xl p-6 flex flex-col gap-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full border ${
            type === "Article"
              ? "text-[var(--nt-sakura)] bg-[rgba(var(--glow-sakura),0.1)] border-[rgba(var(--glow-sakura),0.3)]"
              : "text-[var(--nt-electric)] bg-[rgba(var(--glow-electric),0.1)] border-[rgba(var(--glow-electric),0.3)]"
          }`}
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}
        >
          {type}
        </span>
        <span className="text-xs text-[var(--nt-text-muted)]">{year}</span>
        <span className="text-xs text-[var(--nt-gold)] font-semibold">{journal}</span>
      </div>

      <h3
        className="text-base sm:text-lg font-semibold text-[var(--nt-text)] leading-snug"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      {doi ? (
        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold self-start"
        >
          <ExternalLink size={14} />
          Read Paper
        </a>
      ) : (
        <span className="text-xs text-[var(--nt-text-muted)] italic self-start px-4 py-2">
          Under Review
        </span>
      )}
    </motion.div>
  );
}
