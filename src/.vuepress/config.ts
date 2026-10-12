import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Blog Demo",
  description: "A blog demo for vuepress-theme-hope",

  author: "Neil Shah",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
