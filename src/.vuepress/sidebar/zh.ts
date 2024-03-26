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
      link: "/Userdocs/fast/login",
      // collapsible: true,
      children: [
        {
          text:'快速开始',
          icon: "rocket",
          prefix: 'fast',
          link: "/Userdocs/fast/login",
          collapsible: true,
          children:["login.md", "container.md", "environment.md","network.md", 'faq.md']
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
          link: "/Userdocs/nas/whatis",
          collapsible: true,
          children:["whatis.md", "mount.md", "download.md", "alist.md", "show.md"]
        }
      ]

    },
    {
      text:"实验小工具",
      icon: "wrench",
      prefix: "tools/",
      link: "/tools/gpt",
      // collapsible: true,
      children: ["gpt.md"]
    }
  ],
});
