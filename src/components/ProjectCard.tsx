import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { rankClass, rankLabel } from "../lib/rank";
import type { Rank } from "../lib/rank";
import { scaleIn } from "../lib/animations";

interface ProjectCardProps {
  title: string;
  label: string;
  difficulty: Rank;
  blurb: string;
  tech: string[];
  link?: string;
  repoLink?: string;
  preview: string | null;
}

export default function ProjectCard({
  title, label, difficulty, blurb, tech, link, repoLink, preview,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      className="gate-card rounded-2xl flex flex-col h-full"
    >
      {/* Preview Image */}
      <div className="relative overflow-hidden rounded-t-2xl aspect-video bg-[var(--nt-surface-alt)] flex items-center justify-center">
        {preview ? (
          <img
            src={preview}
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
            <div
              className="text-4xl font-bold text-[var(--nt-sakura)] opacity-20"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title.charAt(0)}
            </div>
            <div className="text-center">
              <p className="text-[var(--nt-text-muted)] text-sm">{label}</p>
            </div>
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(var(--glow-sakura),0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--glow-sakura),0.5) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        )}

        {/* Rank badge overlay */}
        <span
          className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded border ${rankClass[difficulty]}`}
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}
        >
          {rankLabel[difficulty]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3 relative z-10">
        <div>
          <p className="text-xs text-[var(--nt-sakura)] font-semibold tracking-widest uppercase mb-1"
            style={{ fontFamily: "var(--font-body)" }}>
            {label}
          </p>
          <h3 className="text-xl font-bold text-[var(--nt-text)]"
            style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h3>
        </div>

        <p className="text-[var(--nt-text-muted)] text-sm leading-relaxed flex-1">
          {blurb}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-[rgba(var(--glow-electric),0.1)] text-[var(--nt-electric)] border border-[rgba(var(--glow-electric),0.2)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sakura flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg font-semibold flex-1 justify-center"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg font-semibold flex-1 justify-center"
            >
              <GitBranch size={14} />
              Code
            </a>
          )}
          {!link && !repoLink && (
            <span className="text-xs text-[var(--nt-text-muted)] italic">Private project</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
