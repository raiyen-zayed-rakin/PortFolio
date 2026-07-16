import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../lib/animations";
import { rankClass, rankLabel } from "../lib/rank";
import type { Rank } from "../lib/rank";

interface TimelineItemProps {
  role: string;
  org: string;
  period: string;
  rank?: Rank;
  points?: string[];
  isLast?: boolean;
  image?: string;
  imageLink?: string;
  degree?: string;
  cgpa?: string;
  coursework?: string[];
}

export default function TimelineItem({
  role, org, period, rank, points, isLast = false,
  image, imageLink, degree, cgpa, coursework,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="flex gap-5"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-[var(--nt-sakura)] timeline-dot flex-shrink-0 mt-1.5
          shadow-[0_0_12px_rgba(var(--glow-sakura),0.6)]" />
        {!isLast && (
          <div className="flex-1 w-px bg-gradient-to-b from-[var(--nt-sakura)] to-transparent min-h-8 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 flex-1 ${isLast ? "pb-0" : ""}`}>
        <div className="system-panel rounded-xl p-5 flex flex-col gap-3">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex gap-4 items-start">
              {image && (
                <a href={imageLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img
                    src={image}
                    alt={org}
                    className="w-14 h-14 object-cover rounded-lg border border-[var(--nt-border)] hover:border-[var(--nt-sakura)] transition-colors"
                  />
                </a>
              )}
              <div>
                <h3 className="text-lg font-bold text-[var(--nt-text)]"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {role || degree}
                </h3>
                <p className="text-sm text-[var(--nt-sakura)] font-semibold">{org}</p>
                <p className="text-xs text-[var(--nt-text-muted)] mt-0.5">{period}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              {rank && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${rankClass[rank]}`}
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}>
                  {rankLabel[rank]}
                </span>
              )}
              {cgpa && (
                <span className="text-xs font-bold text-[var(--nt-gold)] bg-[rgba(var(--glow-gold),0.1)] px-2 py-0.5 rounded border border-[rgba(var(--glow-gold),0.3)]">
                  CGPA {cgpa}
                </span>
              )}
            </div>
          </div>

          {/* Bullet points */}
          {points && points.length > 0 && (
            <ul className="space-y-1.5">
              {points.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--nt-text-muted)] leading-relaxed">
                  <span className="text-[var(--nt-sakura)] mt-0.5 flex-shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          )}

          {/* Coursework tags */}
          {coursework && coursework.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {coursework.map((c) => (
                <span key={c}
                  className="text-xs px-2 py-0.5 rounded-full bg-[rgba(var(--glow-electric),0.08)] text-[var(--nt-electric)] border border-[rgba(var(--glow-electric),0.2)]">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
