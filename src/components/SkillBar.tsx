import { motion } from "framer-motion";
import { rankClass, rankLabel } from "../lib/rank";
import type { Rank } from "../lib/rank";
import { fadeInUp, viewportConfig } from "../lib/animations";

interface SkillBarProps {
  name: string;
  rank: Rank;
  value: number;
  index: number;
}

export default function SkillBar({ name, rank, value, index }: SkillBarProps) {
  return (
    <motion.div
      variants={fadeInUp}
      viewport={viewportConfig}
      className="flex flex-col gap-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[var(--nt-text)]"
          style={{ fontFamily: "var(--font-body)" }}>
          {name}
        </span>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded border ${rankClass[rank]}`}
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}
        >
          {rankLabel[rank]}
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-[var(--nt-surface-alt)] rounded-full overflow-hidden">
        {/* Scan line */}
        <div
          className="absolute top-0 bottom-0 w-8 skill-scan opacity-50 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(var(--glow-sakura-b), 0.8), transparent)`,
            animationDelay: `${index * 0.1}s`,
            animationDuration: `${1.8 + (index % 3) * 0.3}s`,
          }}
        />
        <motion.div
          ref={undefined}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={viewportConfig}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--nt-neon), var(--nt-sakura), var(--nt-electric))`,
            boxShadow: `0 0 8px rgba(var(--glow-sakura), 0.4)`,
          }}
        />
      </div>
    </motion.div>
  );
}
