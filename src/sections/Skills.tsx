import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillBar from "../components/SkillBar";
import { skills } from "../data/content";
import { staggerContainer, fadeInUp, viewportConfig } from "../lib/animations";

const CATEGORIES = ["All", "Languages", "Frontend", "Backend", "AI/ML", "Tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="SKILLS" subtitle="— ABILITY TREE —" />

      {/* Category Tabs */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="flex flex-wrap gap-2 mb-10"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[var(--nt-sakura)] border-[var(--nt-sakura)] text-white shadow-[0_0_12px_rgba(var(--glow-sakura),0.5)]"
                : "border-[rgba(var(--glow-sakura),0.3)] text-[var(--nt-text-muted)] hover:border-[var(--nt-sakura)] hover:text-[var(--nt-sakura)]"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            rank={skill.rank}
            value={skill.value}
            index={i}
          />
        ))}
      </motion.div>
    </section>
  );
}
