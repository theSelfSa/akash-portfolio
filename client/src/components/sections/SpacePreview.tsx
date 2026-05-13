/**
 * Space Preview Section — home page teaser for /space
 * Shows 3 most recent items across all categories.
 * Design: Premium Minimal with Spatial Depth
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Music, FileText, MessageSquare, Star } from 'lucide-react';
import { getRecentSpaceItems, type SpaceMeta } from '@/lib/content';

const categoryIcon: Record<string, React.ReactNode> = {
  books: <BookOpen size={12} />,
  music: <Music size={12} />,
  articles: <FileText size={12} />,
  thoughts: <MessageSquare size={12} />,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={10}
          className={i <= rating ? 'text-accent-brand fill-accent-brand accent-transition' : 'text-border'}
        />
      ))}
    </div>
  );
}

function MiniCard({ item, idx }: { item: SpaceMeta; idx: number }) {
  const isExternal = item.url && (item.category === 'articles' || item.category === 'music');

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className="group p-4 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition hover-lift h-full shadow-sm dark:shadow-none"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground capitalize">
          {categoryIcon[item.category]}
          {item.category}
        </span>
        <span className="font-mono-custom text-xs text-muted-foreground/60">{item.date}</span>
      </div>
      <h4 className="text-sm font-semibold text-foreground group-hover:text-accent-brand transition-colors duration-200 accent-transition leading-snug mb-1">
        {item.title}
      </h4>
      {(item.author || item.artist) && (
        <p className="text-xs text-muted-foreground">{item.author || item.artist}</p>
      )}
      {item.category === 'books' && item.rating && (
        <div className="mt-2">
          <StarRating rating={item.rating} />
        </div>
      )}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="font-mono-custom text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );

  if (isExternal && item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }

  return inner;
}

export default function SpacePreview() {
  const items = getRecentSpaceItems(3);

  if (items.length === 0) return null;

  return (
    <section id="space-preview" className="section-padding bg-muted/20">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">06</span>
              <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">My Space</h2>
            <p className="text-muted-foreground mt-2 text-sm">Books, music, articles, and thoughts — beyond the code.</p>
          </div>
          <Link
            href="/space"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition"
          >
            Explore all
            <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <MiniCard key={`${item.category}-${item.slug}`} item={item} idx={idx} />
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 sm:hidden text-center"
        >
          <Link
            href="/space"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition border border-border hover:border-accent-brand px-4 py-2 rounded-lg"
          >
            Explore my space
            <ArrowUpRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
