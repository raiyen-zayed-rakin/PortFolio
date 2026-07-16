import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { education } from "../data/content";
import { staggerContainer, viewportConfig } from "../lib/animations";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="EDUCATION" subtitle="— ACADEMIC RECORD —" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl"
      >
        {education.map((edu, i) => (
          <TimelineItem
            key={edu.institution}
            role={edu.degree}
            org={edu.institution}
            period={edu.period}
            image={edu.image}
            imageLink={edu.link}
            cgpa={edu.cgpa}
            coursework={edu.coursework}
            isLast={i === education.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
