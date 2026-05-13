import { motion } from 'framer-motion';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
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
            <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">04</span>
            <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground mt-2 text-sm">Curated for ML Engineer and Software Engineer roles.</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group p-5 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition shadow-sm dark:shadow-none"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl leading-none">{group.icon}</span>
                <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-custom text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border hover:bg-accent-muted hover:text-accent-brand hover:border-accent-brand/30 transition-all duration-200 accent-transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
