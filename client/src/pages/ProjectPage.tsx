import { useParams, Link } from 'wouter';
import { MDXProvider } from '@mdx-js/react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { getProjectBySlug } from '@/lib/content';
import { mdxComponents } from '@/components/MDXComponents';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

const categoryLabel: Record<string, string> = {
  'ai-ml': 'AI / ML',
  'fullstack': 'Full Stack',
  'backend': 'Backend',
  'research': 'Research',
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const result = slug ? getProjectBySlug(slug) : null;

  if (!result) return <NotFound />;

  const { meta, Component } = result;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="border-b border-border bg-background">
          <div className="container py-10">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition mb-6 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                Back to projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Category + date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent-muted text-accent-brand border border-accent-brand/20 accent-transition">
                  {categoryLabel[meta.category] ?? meta.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono-custom">
                  <Calendar size={11} />
                  {meta.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">
                {meta.title}
              </h1>
              {meta.subtitle && (
                <p className="text-lg text-muted-foreground mb-6">{meta.subtitle}</p>
              )}

              {/* Links */}
              <div className="flex items-center gap-3 mb-6">
                {meta.github && (
                  <a
                    href={meta.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border hover:border-accent-brand text-muted-foreground hover:text-accent-brand transition-all duration-200 accent-transition"
                  >
                    <Github size={14} />
                    View on GitHub
                  </a>
                )}
                {meta.demo && (
                  <a
                    href={meta.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-accent-brand text-white hover:opacity-90 transition-all duration-200 accent-transition"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Metrics */}
              {meta.metrics && meta.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {meta.metrics.map((m) => (
                    <span
                      key={m}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-muted border border-border text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-brand accent-transition" />
                      {m}
                    </span>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={12} className="text-muted-foreground" />
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-custom text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* MDX Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container py-12 max-w-3xl"
        >
          <MDXProvider components={mdxComponents}>
            <Component />
          </MDXProvider>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
