import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";
import { staggerContainer, viewportConfig } from "../lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="PROJECTS" subtitle="— DUNGEON RAIDS —" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
