/**
 * Projects Section - 2-column card grid
 * Design: Premium Minimal with Spatial Depth
 * - Each card has an image banner with gradient overlay
 * - Full card is clickable → /projects/[slug]
 * - GitHub + Live links are separate clickable elements (stopPropagation)
 * - Graceful fallback if no coverImage: accent-colored abstract gradient
 * - Hover: lift + border glow + image zoom + reveal arrow
 * To add a project: create content/projects/[slug].mdx - no code changes needed.
 */

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Zap } from 'lucide-react';
import { useLocation } from 'wouter';
import { getFeaturedProjects } from '@/lib/content';

const categoryLabel: Record<string, string> = {
  'ai-ml': 'AI / ML',
  'fullstack': 'Full Stack',
  'backend': 'Backend',
  'research': 'Research',
};

const categoryColor: Record<string, string> = {
  'ai-ml': 'from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-400',
  'fullstack': 'from-violet-500/20 to-purple-600/20 border-violet-500/30 text-violet-400',
  'backend': 'from-amber-500/20 to-orange-600/20 border-amber-500/30 text-amber-400',
  'research': 'from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-400',
};

// Fallback gradient backgrounds when no coverImage is present
const fallbackGradients = [
  'from-cyan-950 via-slate-900 to-blue-950',
  'from-violet-950 via-slate-900 to-purple-950',
  'from-amber-950 via-slate-900 to-orange-950',
];

export default function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">03</span>
            <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground mt-2 text-sm max-w-lg">Selected work showcasing depth in AI/ML and systems engineering. Click any card for the full case study.</p>
            </div>
            <a
              href="https://github.com/TheSelfSa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition border border-border hover:border-accent-brand px-4 py-2 rounded-lg flex-shrink-0 self-start sm:self-auto"
            >
              <Github size={13} />
              All projects on GitHub
              <ArrowUpRight size={11} />
            </a>
          </div>
        </motion.div>

        {/* 2-column card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {featured.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }: { project: ReturnType<typeof getFeaturedProjects>[0]; idx: number }) {
  const catColor = categoryColor[project.category] ?? categoryColor['ai-ml'];
  const fallbackGrad = fallbackGradients[idx % fallbackGradients.length];
  const [, navigate] = useLocation();

  function handleCardClick() {
    navigate(`/projects/${project.slug}`);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onClick={handleCardClick}
      className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden cursor-pointer
        hover:border-accent-brand hover:shadow-[0_8px_40px_-8px_var(--accent-brand-glow,rgba(34,211,238,0.25))]
        transition-all duration-350 accent-transition hover-lift"
      style={{ '--accent-brand-glow': 'color-mix(in srgb, var(--accent-brand-hex, #22d3ee) 30%, transparent)' } as React.CSSProperties}
    >
      {/* ── Image Banner ───────────────────────────────────────────── */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Fallback: animated gradient when no image */
          <div className={`w-full h-full bg-gradient-to-br ${fallbackGrad} flex items-center justify-center`}>
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Zap size={24} className="text-accent-brand accent-transition opacity-70" />
            </div>
          </div>
        )}

        {/* Gradient overlay - fades image into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Category badge - top-left */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r border backdrop-blur-sm ${catColor}`}>
            {categoryLabel[project.category] ?? project.category}
          </span>
        </div>

        {/* Date - top-right */}
        <div className="absolute top-3 right-3">
          <span className="font-mono-custom text-xs text-white/60 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-md">
            {project.date}
          </span>
        </div>
      </div>

      {/* ── Card Body ──────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title + subtitle */}
        <div>
          <h3 className="text-base font-semibold text-foreground group-hover:text-accent-brand transition-colors duration-200 accent-transition leading-snug">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5 font-medium">{project.subtitle}</p>
          )}
        </div>

        {/* Metrics - key impact stats */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.metrics.slice(0, 3).map((metric) => (
              <span
                key={metric}
                className="inline-flex items-center gap-1 text-xs text-foreground/80 bg-muted px-2.5 py-1 rounded-full border border-border"
              >
                <span className="w-1 h-1 rounded-full bg-accent-brand accent-transition flex-shrink-0" aria-hidden="true" />
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="font-mono-custom text-xs px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/60"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 6 && (
            <span className="font-mono-custom text-xs px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/60">
              +{project.tags.length - 6}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer: links */}
        <div className="flex items-center gap-2 pt-2 border-t border-border/60">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent-brand transition-colors duration-200 accent-transition px-3 py-1.5 rounded-md border border-border/80 bg-muted hover:border-accent-brand hover:bg-accent-muted shadow-sm"
            >
              <Github size={12} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-white bg-accent-brand hover:opacity-90 transition-all duration-200 accent-transition px-2.5 py-1.5 rounded-md"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          <span className="ml-auto text-muted-foreground/50 group-hover:text-accent-brand transition-colors duration-200 accent-transition">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
