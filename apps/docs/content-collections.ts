import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const docs = defineCollection({
  name: "docs",
  directory: "src/docs",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export default defineConfig({
  collections: [docs],
});
