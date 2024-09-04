import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    topics: z.array(reference("topics")).optional(),
    image: z.string().optional(),
  }),
});

const topics = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  posts,
  topics,
};
