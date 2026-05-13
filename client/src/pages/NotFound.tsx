import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <p className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground text-base mb-8">
          This page doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition border border-border hover:border-accent-brand px-4 py-2.5 rounded-lg"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}
