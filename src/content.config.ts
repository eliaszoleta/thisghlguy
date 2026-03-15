import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'gohighlevel-basics',
      'gohighlevel-features',
      'gohighlevel-automation',
      'gohighlevel-saas',
      'gohighlevel-comparisons',
      'gohighlevel-tutorials',
    ]),
    keywords: z.array(z.string()),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Editorial Team'),
    featured: z.boolean().default(false),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    relatedArticles: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
