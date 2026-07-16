import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { identity } from "../data/content";
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp, viewportConfig } from "../lib/animations";

const CONTACT_ITEMS = [
  { icon: <MapPin size={20} />, label: "Location", value: identity.location, href: undefined },
  { icon: <Mail size={20} />, label: "Email", value: identity.email, href: `mailto:${identity.email}` },
  { icon: <Phone size={20} />, label: "Phone", value: identity.phone, href: `tel:${identity.phone}` },
  { icon: <ExternalLink size={20} />, label: "LinkedIn", value: "Raiyen Zayed Rakin", href: "https://www.linkedin.com/in/raiyen-zayed-rakin-948100265/" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24">
      <SectionHeading title="CONTACT" subtitle="— SEND A MESSAGE —" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Left — Contact Info */}
        <motion.div variants={fadeInLeft} className="flex flex-col gap-6">
          <p className="text-[var(--nt-text-muted)] leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
              <div key={label}
                className="flex items-center gap-4 p-4 system-panel rounded-xl group hover:scale-[1.01] transition-transform">
                <div className="w-10 h-10 rounded-lg bg-[rgba(var(--glow-sakura),0.1)] flex items-center justify-center
                  text-[var(--nt-sakura)] group-hover:bg-[rgba(var(--glow-sakura),0.2)] transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-[var(--nt-text-muted)] font-semibold tracking-wider uppercase">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--nt-text)] hover:text-[var(--nt-sakura)] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[var(--nt-text)]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Visual Form */}
        <motion.div variants={fadeInRight}>
          <div className="system-panel rounded-2xl p-6 sm:p-8">
            {/* Panel title bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 flex-1"
                style={{ background: "linear-gradient(90deg, transparent, rgba(var(--glow-sakura),0.5))" }} />
              <span className="text-xs tracking-[0.3em] text-[var(--nt-sakura)] font-bold"
                style={{ fontFamily: "var(--font-display)" }}>
                SEND MESSAGE
              </span>
              <div className="h-0.5 flex-1"
                style={{ background: "linear-gradient(90deg, rgba(var(--glow-sakura),0.5), transparent)" }} />
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-bold tracking-widest text-[var(--nt-text-muted)] mb-2 uppercase">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Raiyen Zayed Rakin"
                  className="glass-input"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-bold tracking-widest text-[var(--nt-text-muted)] mb-2 uppercase">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="glass-input"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-bold tracking-widest text-[var(--nt-text-muted)] mb-2 uppercase">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="What's on your mind?"
                  className="glass-input resize-none"
                />
              </motion.div>

              <motion.button
                variants={fadeInUp}
                type="submit"
                className="btn-sakura w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                SEND MESSAGE
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
