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
      icon: "globe",
      prefix: "overview/",
      link: "overview/",
      // collapsible: true,
      children: ["README.md", "gpu.md"]

    },
    {
      text:"服务器使用",
      icon: "lightbulb",
      prefix: "Userdocs/",
      link: "/Userdocs/fast/00-login",
      // collapsible: true,
      children: [
        {
          text:'快速开始',
          icon: "rocket",
          prefix: 'fast',
          link: "/Userdocs/fast/00-login",
          collapsible: true,
          children:["00-login.md", 
                    "01-container.md", 
                    "02-environment.md",
                    "03-network.md", 
                    "04-faq.md"]
        },
        // {
        //   text: '管理员文档',
        //   icon: 'config',
        //   prefix: 'deploy',
        //   collapsible: true,
        //   children: ['host.md', 'newuser.md', 'container.md']

        // }
        {
          text:'存储NAS使用',
          icon: "database",
          prefix: 'nas',
          link: "/Userdocs/nas/00-whatis",
          collapsible: true,
          children:["00-whatis.md", "01-mount.md", "02-download.md", "03-alist.md", "04-show.md"]
        }
      ]

    },
    {
      text:"实验小工具",
      icon: "wrench",
      prefix: "tools/",
      link: "/tools/00-gpt",
      // collapsible: true,
      children: ["00-gpt.md", "01-sslvpn.md"]
    },
    {
      text:"环境配置TIPS",
      icon: "screwdriver",
      prefix: "env_config/",
      link: "/env_config/00-cuda.md",
      // collapsible: true,
      children: ["00-cuda.md"]
    }
  ],





});
