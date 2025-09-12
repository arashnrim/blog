import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import codeTheme from "./config/code-theme.json";
import remarkToc from "remark-toc";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.arash.codes",
  integrations: [
    expressiveCode({
      theme: ["github-dark-default"],
      styleOverrides: {
        uiFontFamily:
          '"General Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        codeFontFamily: '"JetBrains Mono", "Courier New", Courier, monospace',
        codeFontSize: "calc(var(--body) * 0.9)",
      },
    }),
    mdx({
      // syntaxHighlight: "shiki",
      // shikiConfig: {
      //   theme: "aurora-x",
      // },
      remarkPlugins: [remarkToc],
    }),
    icon(),
    sitemap(),
  ],
  adapter: vercel(),
});
