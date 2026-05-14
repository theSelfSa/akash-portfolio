/**
 * About Section - compact single-view layout
 * Design: Premium Minimal with Spatial Depth
 * Left: bio paragraph + key skill chips
 * Right: education cards (compact) + interests row
 * Everything fits in one viewport - no second scroll needed.
 */

import { motion } from 'framer-motion';
import { personal, education, skillGroups } from '@/lib/data';
import { GraduationCap, MapPin } from 'lucide-react';

// Pull top skills for the quick-view chips (first 2 groups, max 8 skills)
const quickSkills = [
  ...skillGroups[0].skills.slice(0, 4),  // AI/ML
  ...skillGroups[1].skills.slice(0, 4),  // LLMs
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">01</span>
            <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">About</h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left: Bio + Quick Skills */}
          <div className="lg:col-span-3 space-y-7">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                {personal.summary}
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin size={13} className="text-accent-brand accent-transition flex-shrink-0" />
              <span>{personal.location} · Open to remote and relocation</span>
            </motion.div>

            {/* Quick Skill Chips */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-xs text-muted-foreground font-mono-custom tracking-widest uppercase mb-3">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {quickSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-custom text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border hover:bg-accent-muted hover:text-accent-brand hover:border-accent-brand/30 transition-all duration-200 accent-transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Education */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-xs text-muted-foreground font-mono-custom tracking-widest uppercase mb-4">Education</p>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.school}
                    custom={4 + idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="p-4 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0 accent-transition mt-0.5">
                        <GraduationCap size={14} className="text-accent-brand accent-transition" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground leading-snug">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{edu.school}</p>
                        <p className="font-mono-custom text-xs text-muted-foreground/70 mt-1">{edu.period}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
