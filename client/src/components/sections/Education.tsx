/**
 * Education Section — timeline card style matching Experience section
 * Design: Premium Minimal with Spatial Depth
 */

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const educationDetails = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    period: 'Aug. 2023 – May 2025',
    type: 'Graduate',
    focus: 'AI / Machine Learning',
    highlights: [
      'Specialized in machine learning systems, LLM research, and production AI engineering.',
      'Coursework: Machine Learning, Deep Learning, NLP, Neural Networks, Automated Learning & Data Analysis, Algorithms & Analysis.',
      'Graduate research focused on evaluation frameworks for AI/ML repositories and LLM-based automation pipelines.',
    ],
    tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Neural Networks', 'Algorithms'],
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    school: 'Walchand College of Engineering',
    location: 'Sangli, MH, India',
    period: 'Aug. 2017 – Jul. 2021',
    type: 'Undergraduate',
    focus: 'Software Engineering',
    highlights: [
      'Built strong CS fundamentals across systems, algorithms, and software engineering.',
      'Coursework: Data Structures & Algorithms, Operating Systems, Database Management, Computer Networks, Artificial Intelligence.',
      'Early exposure to distributed systems, software architecture, and applied AI concepts.',
    ],
    tags: ['DSA', 'Operating Systems', 'DBMS', 'Computer Networks', 'Software Engineering'],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">

        {/* Section header — matches Experience style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">03</span>
            <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Education</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Computer science built across two continents — from core engineering to graduate-level AI research.
          </p>
        </motion.div>

        {/* Timeline — identical structure to Experience */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-0">
            {educationDetails.map((edu, idx) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-14 sm:pl-20 pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background border-2 border-accent-brand flex items-center justify-center accent-transition z-10">
                  <GraduationCap size={13} className="text-accent-brand accent-transition" />
                </div>

                {/* Card */}
                <div className="group p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition hover-lift shadow-sm dark:shadow-none">

                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono-custom px-2 py-0.5 rounded-full bg-accent-muted text-accent-brand accent-transition border border-accent-brand/20">
                          {edu.type}
                        </span>
                        <span className="text-xs text-muted-foreground/60 font-medium">{edu.focus}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-accent-brand accent-transition mt-0.5">{edu.school}</p>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={10} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={10} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-brand accent-transition flex-shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
