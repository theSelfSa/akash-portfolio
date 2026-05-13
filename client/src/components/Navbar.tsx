/**
 * Navbar — top navigation with theme toggle, accent picker, and smooth scroll
 * Design: Premium Minimal with Spatial Depth
 * - Primary nav: Experience, Projects, Skills, Contact, My Space
 * - Right controls: Accent picker + Theme toggle (always visible)
 * - Space is in the main nav, styled subtly with a compass icon
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Compass } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAccent, ACCENT_OPTIONS, type AccentOption } from '@/contexts/AccentContext';
import { personal } from '@/lib/data';

const navLinks = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

function scrollToSection(href: string) {
  if (href.startsWith('/#')) {
    const id = href.slice(2);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
  }
  return false;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { accent, setAccent } = useAccent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      scrollToSection(href);
      setMobileOpen(false);
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_var(--border),0_4px_16px_oklch(0_0_0/0.06)] dark:shadow-[0_1px_0_0_var(--border),0_4px_16px_oklch(0_0_0/0.25)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 gap-6">

            {/* Logo — clean wordmark */}
            <Link
              href="/"
              className="flex-shrink-0 group"
            >
              <span className="text-base font-bold text-foreground group-hover:text-accent-brand transition-colors duration-200 accent-transition tracking-tight">
                Akash<span className="text-accent-brand accent-transition">.</span>
              </span>
            </Link>

            {/* Desktop Nav — centered */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              {/* My Space — in main nav with subtle styling */}
              <Link
                href="/space"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition rounded-md hover:bg-muted whitespace-nowrap"
              >
                <Compass size={13} />
                <span>My Space</span>
              </Link>
            </nav>

            {/* Right Controls */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              {/* Say Hello CTA */}
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-brand text-white text-xs font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 accent-transition shadow-sm whitespace-nowrap"
              >
                Say Hello
              </a>

              {/* Accent Picker */}
              <div className="flex items-center gap-1 px-1.5 py-1 rounded-lg bg-muted/50 border border-border/50" aria-label="Accent color picker">
                {ACCENT_OPTIONS.map((opt: AccentOption) => (
                  <button
                    key={opt.id}
                    onClick={() => setAccent(opt.id)}
                    title={opt.label}
                    aria-label={`Set accent to ${opt.label}`}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                      accent === opt.id
                        ? 'ring-2 ring-offset-1 ring-offset-background scale-125'
                        : 'opacity-50 hover:opacity-90 hover:scale-110'
                    }`}
                    style={{ backgroundColor: opt.dark }}
                  />
                ))}
              </div>

              {/* Theme Toggle — always visible */}
              <button
                onClick={toggleTheme ?? undefined}
                className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>

            {/* Mobile right side: Say Hello + hamburger — always visible */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-brand text-white text-xs font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 accent-transition shadow-sm whitespace-nowrap"
              >
                Say Hello
              </a>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg md:hidden"
          >
            <div className="container py-4 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/space"
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-accent-brand hover:bg-muted rounded-lg transition-all duration-200 accent-transition"
              >
                <Compass size={13} />
                My Space
              </Link>

              {/* Mobile controls */}
              <div className="flex items-center justify-between px-3 pt-3 border-t border-border mt-2">
                <div className="flex items-center gap-2">
                  {ACCENT_OPTIONS.map((opt: AccentOption) => (
                    <button
                      key={opt.id}
                      onClick={() => setAccent(opt.id)}
                      title={opt.label}
                      className={`w-5 h-5 rounded-full transition-all duration-200 ${
                        accent === opt.id ? 'ring-2 ring-offset-1 ring-offset-background scale-110' : 'opacity-50'
                      }`}
                      style={{ backgroundColor: opt.dark }}
                    />
                  ))}
                </div>
                <button
                  onClick={toggleTheme ?? undefined}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
