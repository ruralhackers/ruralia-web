import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string().default('Rural GPT'),
  keywords: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
  /** Matches the corresponding post in the other locale (use the base filename without extension) */
  translationKey: z.string().optional(),
});

/** Spanish blog posts — live under src/content/blog/es/ */
const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/es' }),
  schema: blogSchema,
});

/** Galician blog posts — live under src/content/blog/gl/ */
const blogGl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/gl' }),
  schema: blogSchema,
});

export const collections = { blogEs, blogGl };
