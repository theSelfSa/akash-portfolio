import { motion } from 'framer-motion';
import { personal } from '@/lib/data';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akashkore',
    href: personal.linkedin,
    description: 'Professional profile & updates',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/TheSelfSa',
    href: personal.github,
    description: 'Open source work & projects',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
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
            <span className="font-mono-custom text-xs text-accent-brand accent-transition tracking-widest uppercase">05</span>
            <div className="h-px flex-1 max-w-12 bg-accent-brand opacity-40 accent-transition" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently open to{' '}
              <span className="text-foreground font-medium">full-time ML Engineer and Software Engineer roles</span>.
              If you have an opportunity that aligns with my background, I'd love to hear from you.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether it's a quick question about my work, a project collaboration, or a job opportunity — my inbox is always open.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-accent-brand accent-transition" />
              <span>{personal.location} · Open to remote and relocation</span>
            </div>

            {/* Primary CTA */}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-brand text-white text-sm font-medium hover:opacity-90 transition-all duration-200 accent-transition shadow-sm"
            >
              <Mail size={14} />
              Say Hello
              <ArrowUpRight size={12} />
            </a>
          </motion.div>

          {/* Right: Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent-brand transition-all duration-300 accent-transition hover-lift shadow-sm dark:shadow-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0 accent-transition group-hover:bg-accent-brand transition-colors duration-300">
                    <Icon size={16} className="text-accent-brand group-hover:text-white transition-colors duration-300 accent-transition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground mb-0.5">{link.description}</div>
                    <div className="text-sm font-medium text-foreground truncate">{link.value}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent-brand transition-colors duration-200 accent-transition flex-shrink-0" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
