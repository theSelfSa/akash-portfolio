import { personal } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Name + tagline */}
          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold text-foreground">
              {personal.name}
              <span className="text-accent-brand accent-transition">.</span>
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">{personal.title}</div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-muted-foreground hover:text-accent-brand transition-colors duration-200 accent-transition"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground text-center sm:text-right">
            © {year} {personal.name}. Designed & built with care.
          </div>
        </div>
      </div>
    </footer>
  );
}
