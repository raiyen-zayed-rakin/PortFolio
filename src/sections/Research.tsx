import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ResearchCard from "../components/ResearchCard";
import { publications } from "../data/content";
import { staggerContainer, viewportConfig } from "../lib/animations";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="RESEARCH" subtitle="— PUBLICATIONS —" />

      <div className="max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-5"
        >
          {publications.map((pub, i) => (
            <ResearchCard key={pub.title} {...pub} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
