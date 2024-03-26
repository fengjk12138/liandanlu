import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Overview",
    icon: "globe",
    link: "/overview"
  },
  {
    text: "服务器使用",
    icon: "computer",
    link: "/Userdocs/fast/login.md#注意事项"
  },
  {
    text: "管理员",
    icon: "hammer",
    
    children: [
      {
        text: "管理运维",
        // icon: "puzzle-piece",
        prefix: "/GPUdocs/",
        children: [ { text: "物理机配置", icon: "computer", link: "deploy/host.md" },  
                    { text: "模板构建、容器迁移", icon: "truck-moving", link: "deploy/container.md" },
                    { text: "新建个人容器", icon: "user-plus", link: "deploy/newuser.md" }
                    ],
      }
      // {
      //   text: "用户使用",
      //   icon: "more",
      //   children: [{ text: "快速上手", icon: "more", link: "user/fast.md" },
      //              { text: "国外资源加速、网络配置", icon: "network", link: "user/network.md" },
      //              { text: "NAS的使用", icon: "note", link: "user/nas.md" },
      //       ],
      // },
    ],
  },
  {
    text: "保留位 未来可期",
    icon: "wand-magic-sparkles",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
