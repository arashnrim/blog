import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import codeTheme from "./config/code-theme.json";
import remarkToc from "remark-toc";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://blog.arash.codes",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: codeTheme,
      },
      remarkPlugins: [remarkToc],
    }),
    icon(),
    sitemap(),
  ],
  adapter: vercel(),
});
