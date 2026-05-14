import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Music, FileText, MessageSquare, Star, ExternalLink, ArrowUpRight } from 'lucide-react';
import { getAllSpaceItems, type SpaceMeta } from '@/lib/content';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Category = 'all' | 'books' | 'music' | 'articles' | 'thoughts';

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All', icon: null },
  { id: 'books', label: 'Books', icon: <BookOpen size={13} /> },
  { id: 'music', label: 'Music', icon: <Music size={13} /> },
  { id: 'articles', label: 'Articles', icon: <FileText size={13} /> },
  { id: 'thoughts', label: 'Thoughts', icon: <MessageSquare size={13} /> },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={11}
          className={i <= rating ? 'text-accent-brand fill-accent-brand accent-transition' : 'text-border'}
        />
      ))}
    </div>
  );
}

function SpaceCard({ item }: { item: SpaceMeta }) {
  const isExternal = item.url && (item.category === 'articles' || item.category === 'music');

  const cardContent = (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group p-5 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition hover-lift cursor-pointer"
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground capitalize">
          {item.category === 'books' && <BookOpen size={11} />}
          {item.category === 'music' && <Music size={11} />}
          {item.category === 'articles' && <FileText size={11} />}
          {item.category === 'thoughts' && <MessageSquare size={11} />}
          {item.category}
        </span>
        <span className="font-mono-custom text-xs text-muted-foreground">{item.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-foreground group-hover:text-accent-brand transition-colors duration-200 accent-transition mb-1 leading-snug">
        {item.title}
      </h3>

      {/* Subtitle (author/artist) */}
      {(item.author || item.artist) && (
        <p className="text-xs text-muted-foreground mb-2">
          {item.author || item.artist}
        </p>
      )}

      {/* Rating (books) */}
      {item.category === 'books' && item.rating && (
        <div className="mb-3">
          <StarRating rating={item.rating} />
        </div>
      )}

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono-custom text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* External link indicator */}
      {isExternal && (
        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent-brand transition-colors duration-200 accent-transition">
          <ExternalLink size={10} />
          <span>Open link</span>
        </div>
      )}
    </motion.div>
  );

  if (isExternal && item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default function SpacePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const allItems = getAllSpaceItems();

  const filtered = activeCategory === 'all'
    ? allItems
    : allItems.filter((item) => item.category === activeCategory);

  const counts = {
    all: allItems.length,
    books: allItems.filter((i) => i.category === 'books').length,
    music: allItems.filter((i) => i.category === 'music').length,
    articles: allItems.filter((i) => i.category === 'articles').length,
    thoughts: allItems.filter((i) => i.category === 'thoughts').length,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div className="container py-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
              My Space
            </h1>
            <p className="text-muted-foreground text-base max-w-xl">
              Things I read, listen to, think about, and find worth sharing. A window into how I think beyond code.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2 flex-wrap mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 text-sm px-3.5 py-1.5 rounded-lg border transition-all duration-200 accent-transition ${
                  activeCategory === cat.id
                    ? 'bg-accent-brand text-white border-accent-brand'
                    : 'border-border text-muted-foreground hover:border-accent-brand hover:text-accent-brand bg-transparent'
                }`}
              >
                {cat.icon}
                {cat.label}
                <span className={`font-mono-custom text-xs ml-0.5 ${activeCategory === cat.id ? 'opacity-70' : 'opacity-50'}`}>
                  {counts[cat.id]}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Cards Grid */}
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-muted-foreground"
            >
              <p className="text-sm">Nothing here yet - check back soon.</p>
            </motion.div>
          ) : (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <SpaceCard key={`${item.category}-${item.slug}`} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
