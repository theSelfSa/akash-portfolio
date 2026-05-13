/**
 * Type declarations for MDX modules.
 * Allows TypeScript to understand .mdx file imports including frontmatter.
 */

declare module '*.mdx' {
  import type { ComponentType } from 'react';

  const MDXComponent: ComponentType;
  export default MDXComponent;

  // frontmatter is exported by @mdx-js/rollup when remark-frontmatter is used
  // with the vite-plugin-mdx frontmatter extraction
  export const frontmatter: Record<string, unknown>;
}
