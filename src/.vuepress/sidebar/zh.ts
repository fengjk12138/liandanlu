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
      collapsible: true,
      children: ["README.md", "gpu.md"]

    },
    {
      text:"GPU服务器文档",
      icon: "page",
      prefix: "GPUdocs/",
      link: "GPUdocs/",
      collapsible: true,
      children: [
        {
          text:'用户文档',
          icon: "computer",
          prefix: 'user/',
          children:["fast.md", "network.md", "nas.md", 'acc.md']
        },
        {
          text: '管理员文档',
          icon: 'config',
          prefix: 'deploy',
          collapsible: true,
          children: ['host.md', 'newuser.md', 'container.md']

        }
      ]

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
