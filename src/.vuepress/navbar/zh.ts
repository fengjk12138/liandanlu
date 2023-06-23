import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "GPU服务器文档",
    icon: "computer",
    prefix: "/GPUdocs/",
    children: [
      {
        text: "管理运维",
        icon: "puzzle-piece",
        children: [ { text: "主机的配置", icon: "creative", link: "deploy/host.md" },  { text: "容器配置", icon: "config", link: "deploy/container.md" }],
      },
      {
        text: "快速上手",
        icon: "more",
        children: [{ text: "GPU服务器使用文档", icon: "more", link: "user" }],
      },
    ],
  },
  {
    text: "NAS文档",
    icon: "creative",
    prefix: "/NASdocs/",
    
    children: [
      {

        text: "管理运维",
        icon: "puzzle-piece",
        children: [{
                    text: "服务器的选型与系统设置",
                    icon: "creative",
                    link:"deploy"
                  },{
                    text: "管理员日常维护",
                    icon: "config",
                    link: "maintain"
                  }]
        
      },
    
      {
        text: "快速上手",
        icon : "more",
        children:[{
                    text: "NAS使用文档",
                    icon: "more",
                    link: "user"
                  }]
      }
    ],
  },
  {
    text: "保留位 未来可期",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
