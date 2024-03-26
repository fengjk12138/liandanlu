---
home: true
icon: home
title: 炼丹炉系统
heroImage: /logo.jpg
heroText: 炼丹炉
tagline: 一个先进的多机多GPU管理方案
actions:
  - text: 快速开始💡
    link: /Userdocs/fast/login
    type: primary

  - text: AList网页🔑
    link: http://linkdata.liandanlu.cn:40000
    type: secondary
  
  - text: 未来计划
    link: /overview/
  
  - text: 管理员文档🐠
    link: /GPUdocs/
  
  

features:
  - title: 容器管理
    icon: /assets/icon/容器.svg
    details: 以Linux容器为基础，管理各个用户空间，实现环境隔离与资源控制
    link: /Userdocs/fast/container.md

  - title: NAS同步
    icon: /assets/icon/NAS设备.svg
    details: 建立万兆核心NAS，每台机器与NAS互联，实现全局数据共享与超大存储空间
    link: /Userdocs/nas/whatis.md

  - title: 高密集群
    icon: /assets/icon/服务器.svg
    details: 使用可支持8卡的GPU准系统组建每一台服务器，提高服务器的计算密度，减少机房空间浪费
    link: /overview/README.md

  - title: 便宜实惠
    icon: /assets/icon/人民币.svg
    details: 以自建服务器准系统为基础，搭建所有的服务集群，价格压缩到最低，同时性能上也不逊色于高贵的成品方案，把钱花在刀刃上。
    link: /overview/gpu.md

  - title: 在做了在做了
    icon: /assets/icon/更多.svg
    details: 别问，问就是bug在修，新功能会出，文档开始写了
    link: /overview/

  # - title: Markdown Enhance
  #   icon: markdown
  #   details: Add align, sup/sub script, footnote, tasklist, tex, flowchart, diagram, mark and presentation support in markdown
  #   link: https://theme-hope.vuejs.press/guide/markdown/

  # - title: Slide page
  #   icon: slides
  #   details: Adding slide pages to display things you like
  #   link: https://theme-hope.vuejs.press/guide/layout/slides.html



  # - title: Pageviews and comments
  #   icon: comment
  #   details: Start pageview statistics and comment support with Waline
  #   link: https://theme-hope.vuejs.press/guide/feature/comment.html

  # - title: Article information
  #   icon: info
  #   details: Add author, writing date, reading time, word count and other information to your article
  #   link: https://theme-hope.vuejs.press/guide/feature/page-info.html

  # - title: Blog support
  #   icon: blog
  #   details: Listing your articles with their dates, tags and categories with some awesome layouts
  #   link: https://theme-hope.vuejs.press/guide/blog/

  # - title: Custom theme color
  #   icon: palette
  #   details: Supports custom theme colors and allows users to switch between preset theme colors
  #   link: https://theme-hope.vuejs.press/guide/interface/theme-color.html

  # - title: Dark Mode
  #   icon: contrast
  #   details: Switch between light and dark modes freely
  #   link: https://theme-hope.vuejs.press/guide/interface/darkmode.html



  # - title: Article Encryption
  #   icon: lock
  #   details: Encrypt you articles based on page links, so that only the one you want could see them
  #   link: https://theme-hope.vuejs.press/guide/feature/encrypt.html

  # - title: Copy button
  #   icon: copy
  #   details: Copy codes with one click in code blocks
  #   link: https://theme-hope.vuejs.press/guide/feature/copy-code.html

  # - title: Image preview
  #   icon: pic
  #   details: Support viewing, zooming, sharing your page images like a gallery
  #   link: https://theme-hope.vuejs.press/guide/feature/photo-swipe.html



  # - title: Sitemap
  #   icon: sitemap
  #   details: Generate a Sitemap for your site
  #   link: https://theme-hope.vuejs.press/guide/advanced/sitemap.html

  # - title: Feed support
  #   icon: rss
  #   details: Generate feed to allow users to subscribe it
  #   link: https://theme-hope.vuejs.press/guide/advanced/feed.html



 

copyright: false
footer: Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

---


## 项目内容

你还在为云盘速度拉胯而苦恼吗？你还在为多台服务器数据、代码不同步而焦躁吗？你还在为管理员不给你sudo权限而哭泣吗？还在为资金不足而心烦吗？

>**炼丹炉系统**都能解决你的问题

::: info 系统简述
本系统以NAS为核心文件存储存储器，所有GPU服务器都会与NAS进行万兆高速连接，从而实现所有服务器间的文件全互联。

所有服务器可以共同连接、访问、修改NAS上自己的数据文件，切换服务器所有文件、代码、数据集不用重新迁移，无缝切换。

:::

## 项目目的
本项目旨在在实验室的资源级别内，实现每个人高效、廉价、公平的使用GPU计算资源。
利用众多极棒的开源软件，搭建起属于实验中自己的计算集群；利用所学的硬件、系统、网络知识，为每个人构建自由的计算环境。