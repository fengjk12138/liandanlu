import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Overview",
    icon: "support",
    link: "/overview"
  },
  {
    text: "GPU服务器文档",
    icon: "computer",
    prefix: "/GPUdocs/",
    children: [
      {
        text: "管理运维",
        icon: "puzzle-piece",
        children: [ { text: "物理机配置", icon: "computer", link: "deploy/host.md" },  
                    { text: "新建个人容器", icon: "config", link: "deploy/newuser.md" },
                    { text: "模板构建、容器迁移", icon: "creative", link: "deploy/container.md" }],
      },
      {
        text: "用户使用",
        icon: "more",
        children: [{ text: "快速上手", icon: "more", link: "user/fast.md" },
                   { text: "国外资源加速、网络配置", icon: "network", link: "user/network.md" },
                   { text: "NAS的使用", icon: "note", link: "user/nas.md" },
            ],
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
