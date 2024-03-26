import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "GPU服务器文档",
    icon: "creative",

    children: [
      {
        text: "管理运维",
        icon: "puzzle-piece",
        children: [ { text: "配置物理机", icon: "more", link: "" },  { text: "新建个人容器", icon: "more", link: "" }],
      },
      {
        text: "快速上手",
        icon: "more",
        children: [{ text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "NAS文档",
    icon: "creative",
    prefix: "/NASdocs/",
    
    children: [
      {

        text: "服务器的选型与系统设置",
        icon: "creative",
        link:"deploy/"
      },
      {
        text: "管理员日常维护",
        icon: "config",
        link: "maintain/"
      },
      {
        text: "使用文档",
        icon: "more",
        link: "user/"
      }
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
