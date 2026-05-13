/**
 * Custom MDX component overrides.
 * These replace default HTML elements rendered by MDX with styled versions.
 * Used by both ProjectPage and SpacePage via MDXProvider.
 */

import type { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type CodeProps = ComponentPropsWithoutRef<'code'>;
type PreProps = ComponentPropsWithoutRef<'pre'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;
type ImgProps = ComponentPropsWithoutRef<'img'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;

export const mdxComponents = {
  h1: ({ children, ...props }: HeadingProps) => (
    <h1 {...props} className="text-3xl font-bold text-foreground mt-8 mb-4 tracking-tight">{children}</h1>
  ),
  h2: ({ children, id, ...props }: HeadingProps) => (
    <h2 id={id} {...props} className="text-2xl font-semibold text-foreground mt-10 mb-4 tracking-tight border-b border-border pb-2">
      {children}
    </h2>
  ),
  h3: ({ children, id, ...props }: HeadingProps) => (
    <h3 id={id} {...props} className="text-lg font-semibold text-foreground mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ParagraphProps) => (
    <p {...props} className="text-base text-muted-foreground leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children, ...props }: ListProps) => (
    <ul {...props} className="list-disc list-inside space-y-1.5 mb-4 text-muted-foreground">{children}</ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol {...props} className="list-decimal list-inside space-y-1.5 mb-4 text-muted-foreground">{children}</ol>
  ),
  li: ({ children, ...props }: ListItemProps) => (
    <li {...props} className="text-base text-muted-foreground leading-relaxed">{children}</li>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
    <strong {...props} className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children, ...props }: ComponentPropsWithoutRef<'em'>) => (
    <em {...props} className="italic text-muted-foreground">{children}</em>
  ),
  a: ({ children, href, ...props }: AnchorProps) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
      className="text-accent-brand underline underline-offset-2 hover:opacity-80 transition-opacity accent-transition"
    >
      {children}
    </a>
  ),
  code: ({ children, className, ...props }: CodeProps) => {
    if (className) {
      return <code {...props} className={`${className} text-sm`}>{children}</code>;
    }
    return (
      <code {...props} className="font-mono-custom text-sm bg-muted text-accent-brand px-1.5 py-0.5 rounded-md border border-border accent-transition">
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: PreProps) => (
    <pre {...props} className="bg-muted border border-border rounded-xl p-5 overflow-x-auto mb-6 text-sm font-mono-custom">
      {children}
    </pre>
  ),
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote {...props} className="border-l-2 border-accent-brand pl-4 py-1 my-4 text-muted-foreground italic accent-transition">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-border my-8" />,
  img: ({ src, alt, ...props }: ImgProps) => (
    <img
      src={src}
      alt={alt}
      {...props}
      className="rounded-xl border border-border w-full my-6 object-cover"
    />
  ),
};
