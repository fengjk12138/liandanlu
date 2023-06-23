import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "NAS文档",
      prefix: "NAS文档/",
      link: "NAS文档/",
      children: "structure",
    },
    // {
    //   text: "Docs",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    "slides",
  ],
});
