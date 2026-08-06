import { defineConfig, fontProviders } from "astro/config";
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
  trailingSlash: "never",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "General Sans",
      cssVariable: "--font-general-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/GeneralSans-Variable.woff2"],
            weight: "500 700",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/GeneralSans-VariableItalic.woff2"],
            weight: "500 700",
            style: "italic",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Variable.woff2"],
            weight: "400 800",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/JetBrainsMono-VariableItalic.woff2"],
            weight: "400 800",
            style: "italic",
          },
        ],
      },
    },
  ],
  integrations: [
    expressiveCode({
      theme: ["github-dark-default"],
      styleOverrides: {
        uiFontFamily:
          'var(--font-general-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        codeFontFamily:
          'var(--font-jetbrains-mono), "Courier New", Courier, monospace',
        codeFontSize: "calc(var(--body) * 0.9)",
      },
    }),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "aurora-x",
      },
    }),
    icon(),
    sitemap({
      serialize: (item) => {
        return {
          ...item,
          url: item.url === "/" ? item.url : item.url.replace(/\/$/, ""),
        };
      },
    }),
  ],
  adapter: vercel(),
});
