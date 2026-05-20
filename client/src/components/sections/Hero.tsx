/**
 * Hero / Landing Section
 * Design: Asymmetric two-column layout - identity anchor left, substance right
 *
 * Design principles applied:
 *   - F-pattern reading: eyes scan left → right, then down. Left column is the anchor.
 *   - Gestalt proximity: related items grouped spatially, not just typographically
 *   - Visual hierarchy: photo → name → title → credibility → substance → action
 *   - Faces before text: photo is the first thing eyes land on (hardwired human cognition)
 *   - Whitespace as design: generous spacing between groups signals intentionality
 *   - Skill tags: flat pills, no card backgrounds - information, not decoration
 *
 * Layout:
 *   LEFT (30%): photo (circle) → green dot → location → open to relocation → F-1 OPT → social links
 *   RIGHT (65%): name (large) → title (accent) → role + degree (one credibility line) →
 *                summary → metric cards (2×2) → skill tags → CTAs
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, MapPin, GraduationCap,
  ArrowDown, Download, X, Briefcase, FileText,
  TrendingUp, DollarSign, Activity, Users, FolderOpen, Eye
} from 'lucide-react';
import { personal } from '@/lib/data';
import AnimatedBackground from '@/components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

const featuredResume = personal.resumes[0] ?? {
  role: 'Machine Learning Engineer',
  file: '/assets/Akash_Kore_Resume_ML_Engineer.pdf',
};

const metricIcons = [TrendingUp, DollarSign, Activity, Users];

export default function Hero() {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ minHeight: '100svh', backgroundColor: 'var(--background)' }}
      >
        <AnimatedBackground />

        {/* Main content - starts right below 64px navbar */}
        <div
          className="relative z-10 container"
          style={{ paddingTop: 'calc(4rem + 3rem)', paddingBottom: '5rem' }}
        >
          {/* ── Two-column asymmetric grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">

            {/* ══════════════════════════════════════
                LEFT COLUMN - Identity anchor
                Narrow, compact, stays in peripheral
                vision while right column is read
                ══════════════════════════════════════ */}
            <motion.div
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col items-start gap-4 lg:sticky lg:top-24"
            >
              {/* Profile photo */}
              <div className="relative self-center">
                <div
                  className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-border bg-muted flex items-center justify-center"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                >
                  {personal.profilePhoto ? (
                    <img
                      src={personal.profilePhoto}
                      alt={personal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground/25">
                      <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-muted-foreground/30">AK</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Location + availability meta */}
              <div className="flex flex-col items-center gap-1.5 self-center text-center">
                <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={13} className="flex-shrink-0 text-muted-foreground/60" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70 font-medium">
                  {/* Subtle availability indicator: soft green ring + inner dot with slow ping */}
                  <span className="relative flex-shrink-0 w-2.5 h-2.5" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping" style={{ animationDuration: '2.8s' }} />
                    <span className="relative block w-2.5 h-2.5 rounded-full bg-emerald-400/70 ring-1 ring-emerald-500/30" />
                  </span>
                  <span>{personal.availabilityNote}</span>
                </div>
              </div>

              {/* Social links - horizontal icon-only row, left-aligned */}
              <div className="flex flex-row items-center justify-center gap-2 self-center">
                <a
                  href={personal.github}
                  target="_blank" rel="noopener noreferrer"
                  title="GitHub"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-accent-brand hover:border-accent-brand transition-all duration-200 accent-transition group"
                >
                  <Github size={15} className="group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-accent-brand hover:border-accent-brand transition-all duration-200 accent-transition group"
                >
                  <Linkedin size={15} className="group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  title="Email"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-accent-brand hover:border-accent-brand transition-all duration-200 accent-transition group"
                >
                  <Mail size={15} className="group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>

              {/* CTA buttons - equal-width side-by-side row */}
              <div className="flex flex-row items-center gap-2 w-full">
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-brand text-white text-xs font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 accent-transition shadow-sm"
                >
                  <FolderOpen size={12} />
                  Projects
                </button>
                <button
                  onClick={() => setPdfOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-accent-brand hover:border-accent-brand transition-all duration-200 accent-transition"
                >
                  <Eye size={12} />
                  View Resume
                </button>
              </div>
            </motion.div>

            {/* ══════════════════════════════════════
                RIGHT COLUMN - Substance
                Wide, rich, the actual content
                ══════════════════════════════════════ */}
            <div className="flex flex-col gap-7">

              {/* Name + title */}
              <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-[1.0] mb-3">
                  {personal.firstName}
                  <span className="text-foreground/25 font-light">
                    {' '}{personal.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                <p className="text-lg lg:text-xl font-semibold text-accent-brand accent-transition">
                  {personal.title}
                </p>
              </motion.div>

              {/* Credibility line - current role + latest degree */}
              <motion.div
                custom={2} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-wrap gap-x-6 gap-y-2"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase size={13} className="text-accent-brand accent-transition flex-shrink-0" />
                  <span className="font-medium text-foreground/75">{personal.currentRole}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap size={13} className="text-accent-brand accent-transition flex-shrink-0" />
                  <span>{personal.latestDegree}</span>
                </div>
              </motion.div>

              {/* Summary */}
              <motion.p
                custom={3} initial="hidden" animate="visible" variants={fadeUp}
                className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl"
              >
                {personal.summary}
              </motion.p>

              {/* Metric cards - 2×2 grid */}
              <motion.div
                custom={4} initial="hidden" animate="visible" variants={fadeUp}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {personal.heroMetrics.map((metric, idx) => {
                  const Icon = metricIcons[idx];
                  return (
                    <div
                      key={metric.label}
                      className="flex flex-col p-4 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-accent-brand hover:shadow-md transition-all duration-300 accent-transition shadow-sm dark:shadow-none dark:bg-card/60 group cursor-default"
                    >
                      {/* Icon + tag */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-6 h-6 rounded-md bg-accent-muted flex items-center justify-center accent-transition group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                          <Icon size={11} className="text-accent-brand accent-transition" />
                        </div>
                        <span className="text-[9px] font-mono text-accent-brand/60 accent-transition tracking-wide text-right leading-tight max-w-[80px]">
                          {metric.tag}
                        </span>
                      </div>

                      {/* Value */}
                      <span className="font-mono text-2xl lg:text-3xl font-bold text-accent-brand accent-transition leading-none mb-1">
                        {metric.value}
                      </span>

                      {/* Label */}
                      <span className="text-[11px] font-semibold text-foreground leading-snug mb-2">
                        {metric.label}
                      </span>

                      {/* Description */}
                      <p className="text-[10px] text-muted-foreground leading-relaxed flex-1">
                        {metric.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>

              {/* Skill tags - flat pills, no card backgrounds */}
              <motion.div
                custom={5} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-wrap gap-2"
              >
                {personal.heroSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border text-muted-foreground hover:border-accent-brand hover:text-accent-brand transition-all duration-200 accent-transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium opacity-40">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={13} />
          </motion.div>
        </motion.button>
      </section>

      {/* ── PDF Viewer Modal ── */}
      <AnimatePresence>
        {pdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
            onClick={() => setPdfOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl h-[88vh] rounded-2xl overflow-hidden border border-border bg-card shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card flex-shrink-0">
                <div>
                  <p className="text-[10px] font-mono text-accent-brand accent-transition tracking-widest uppercase mb-0.5">
                    Resume
                  </p>
                  <p className="text-sm font-semibold text-foreground">{featuredResume.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={featuredResume.file}
                    download="Akash_Kore_Resume.pdf"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-accent-brand hover:border-accent-brand transition-all duration-200 accent-transition"
                  >
                    <Download size={12} />
                    Download
                  </a>
                  <button
                    onClick={() => setPdfOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-200"
                    aria-label="Close"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* PDF iframe */}
              <div className="flex-1 bg-muted/20">
                <iframe
                  src={`${featuredResume.file}#view=FitH`}
                  title="Akash Kore Resume"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
