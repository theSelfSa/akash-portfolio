/**
 * Content Loader — reads MDX files from content/ directory
 * Uses Vite's import.meta.glob to statically import all content files at build time.
 * To add new content: create a .mdx file in content/projects/ or content/space/[category]/
 * No code changes needed.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  category: 'ai-ml' | 'fullstack' | 'backend' | 'research';
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  order?: number;
  coverImage?: string;
  metrics?: string[];
}

export interface ProjectMeta extends ProjectFrontmatter {
  slug: string;
}

export interface SpaceFrontmatter {
  title: string;
  category: 'books' | 'music' | 'articles' | 'thoughts';
  date: string;
  tags?: string[];
  // Books
  author?: string;
  rating?: number;
  coverImage?: string;
  // Music
  artist?: string;
  url?: string;
  // Articles
  // url is shared with music
}

export interface SpaceMeta extends SpaceFrontmatter {
  slug: string;
  excerpt?: string;
}

// ─── Raw MDX Modules ─────────────────────────────────────────────────────────

// Vite glob import — all MDX files are imported statically at build time
// Paths are relative to this file (client/src/lib/), going up to project root then into content/
const projectModules = import.meta.glob('../../../content/projects/*.mdx', {
  eager: true,
}) as Record<string, { frontmatter?: ProjectFrontmatter; default: React.ComponentType }>;

const spaceModules = import.meta.glob('../../../content/space/**/*.mdx', {
  eager: true,
}) as Record<string, { frontmatter?: SpaceFrontmatter; default: React.ComponentType }>;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugFromPath(path: string): string {
  return path.split('/').pop()?.replace(/\.mdx$/, '') ?? '';
}

// ─── Projects ────────────────────────────────────────────────────────────────

export function getAllProjects(): ProjectMeta[] {
  return Object.entries(projectModules)
    .map(([path, mod]) => ({
      slug: slugFromPath(path),
      ...(mod.frontmatter ?? ({} as ProjectFrontmatter)),
    }))
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): {
  meta: ProjectMeta;
  Component: React.ComponentType;
} | null {
  const entry = Object.entries(projectModules).find(([path]) => slugFromPath(path) === slug);
  if (!entry) return null;
  const [path, mod] = entry;
  return {
    meta: { slug: slugFromPath(path), ...(mod.frontmatter ?? ({} as ProjectFrontmatter)) },
    Component: mod.default,
  };
}

// ─── Space ───────────────────────────────────────────────────────────────────

export function getAllSpaceItems(): SpaceMeta[] {
  return Object.entries(spaceModules)
    .map(([path, mod]) => ({
      slug: slugFromPath(path),
      ...(mod.frontmatter ?? ({} as SpaceFrontmatter)),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getSpaceItemsByCategory(category: SpaceFrontmatter['category']): SpaceMeta[] {
  return getAllSpaceItems().filter((item) => item.category === category);
}

export function getRecentSpaceItems(count = 3): SpaceMeta[] {
  return getAllSpaceItems().slice(0, count);
}

export function getSpaceItemBySlug(slug: string): {
  meta: SpaceMeta;
  Component: React.ComponentType;
} | null {
  const entry = Object.entries(spaceModules).find(([path]) => slugFromPath(path) === slug);
  if (!entry) return null;
  const [path, mod] = entry;
  return {
    meta: { slug: slugFromPath(path), ...(mod.frontmatter ?? ({} as SpaceFrontmatter)) },
    Component: mod.default,
  };
}
