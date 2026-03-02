import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { revealJsPlugin } from "@vuepress/plugin-revealjs";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  bundler: viteBundler({
    viteOptions: {
      server: {
        allowedHosts: ["docs.heartbreaker.icu"],
        fs: {
          allow: [process.cwd(), "/www/liandanlu"],
        },
      },
    },
  }),

  plugins: [
    revealJsPlugin({ layout: "Slide" }),
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "炼丹炉系统",
      description: "一个先进的多机多GPU管理方案",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
