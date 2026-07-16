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

const logoMap: Record<string, string> = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "HTML / CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  "Git / GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
};

export default function SkillBar({ name, rank, value, index }: SkillBarProps) {
  const logoUrl = logoMap[name];

  return (
    <motion.div
      variants={fadeInUp}
      viewport={viewportConfig}
      className="flex flex-col gap-1.5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {logoUrl && (
            <img
              src={logoUrl}
              alt={`${name} icon`}
              className={`w-5 h-5 object-contain flex-shrink-0 ${
                name === "Next.js" ? "theme-nextjs-logo" : ""
              }`}
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          )}
          <span className="text-sm font-semibold text-[var(--nt-text)]"
            style={{ fontFamily: "var(--font-body)" }}>
            {name}
          </span>
        </div>
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
