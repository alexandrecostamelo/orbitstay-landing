import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(180),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    author: z.object({
      name: z.string(),
      role: z.string(),
    }),
    category: z.enum([
      'gestao',
      'tecnologia',
      'tendencias',
      'revenue',
      'experiencia',
      'operacao',
    ]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    readTime: z.number(),
    tags: z.array(z.string()),
    seo: z
      .object({
        canonical: z.string().optional(),
        ogTitle: z.string().optional(),
        ogDescription: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
