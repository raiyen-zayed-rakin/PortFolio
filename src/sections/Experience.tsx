import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/content";
import { staggerContainer, viewportConfig } from "../lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="EXPERIENCE" subtitle="— QUEST LOG —" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl"
      >
        {experience.map((exp, i) => (
          <TimelineItem
            key={`${exp.role}-${exp.org}`}
            role={exp.role}
            org={exp.org}
            period={exp.period}
            rank={exp.rank}
            points={exp.points}
            isLast={i === experience.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
