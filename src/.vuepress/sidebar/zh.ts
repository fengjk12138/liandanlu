import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": 
  [
    // {
    //   icon: "discover",
    //   text: "案例",
    //   prefix: "demo/",
    //   link: "demo/"
    // },
    {
      text:"炼丹炉系统Overview",
      icon: "info",
      prefix: "overview/",
      link: "overview/",
      collapsible: true

    },
    {
      text:"GPU服务器文档",
      icon: "page",
      prefix: "GPUdocs/",
      link: "GPUdocs/",
      collapsible: true

    },
    {
      text: "NAS文档",
      icon: "note",
      prefix: "NASdocs/",
      link: "NASdocs/",
      collapsible: true
    },
  ],
});
