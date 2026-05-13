import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { Briefcase, FlaskConical, BookOpen } from 'lucide-react';

const typeIcon = {
  'full-time': Briefcase,
  'intern': FlaskConical,
  'research': BookOpen,
};

const typeLabel = {
  'full-time': 'Full-time',
  'intern': 'Internship',
  'research': 'Research',
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">02</span>
            <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Experience</h2>
          <p className="text-muted-foreground mt-2 text-sm">4+ years across AI/ML, backend engineering, and cloud infrastructure.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-0">
            {experience.map((exp, idx) => {
              const Icon = typeIcon[exp.type];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative pl-14 sm:pl-20 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background border-2 border-accent-brand flex items-center justify-center accent-transition z-10">
                    <Icon size={13} className="text-accent-brand accent-transition" />
                  </div>

                  {/* Card */}
                  <div className="group p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition hover-lift shadow-sm dark:shadow-none">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                        <div className="text-sm text-accent-brand accent-transition font-medium mt-0.5">{exp.company}</div>
                        <div className="text-xs text-muted-foreground mt-1">{exp.location}</div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="font-mono-custom text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent-muted text-accent-brand border border-accent-brand/20 accent-transition">
                          {typeLabel[exp.type]}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-accent-brand flex-shrink-0 accent-transition" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-custom text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
