export const data = JSON.parse("{\"key\":\"v-8e6b356c\",\"path\":\"/GPUdocs/deploy/host.html\",\"title\":\"如何配置新物理机系统\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"如何配置新物理机系统\",\"icon\":\"page\",\"order\":1,\"author\":\"fengjk\",\"date\":\"2023-04-08T00:00:00.000Z\",\"category\":[\"GPU服务器文档\"],\"tag\":[\"服务器部署\",\"GPU服务器\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\",\"description\":\"NEWS 2023/06/23修改， 引入新的端口映射方式与桥接方式，更加方便统一配置，减少工作量 安装系统 1. 系统安装过程 使用U盘启动盘安装系统，一般选择最新版本Ubuntu系统安装 选择系统进行安装; 设置硬盘模式，一般使用sata固态作为主系统盘。（至于其他盘，可以等装完系统之后使用zfs管理即可，不在这里处理）; 一定要选择安装opens...\"},\"headers\":[{\"level\":2,\"title\":\"NEWS\",\"slug\":\"news\",\"link\":\"#news\",\"children\":[]},{\"level\":2,\"title\":\"安装系统\",\"slug\":\"安装系统\",\"link\":\"#安装系统\",\"children\":[]},{\"level\":2,\"title\":\"1. 系统安装过程\",\"slug\":\"_1-系统安装过程\",\"link\":\"#_1-系统安装过程\",\"children\":[]},{\"level\":2,\"title\":\"2. 系统初始化\",\"slug\":\"_2-系统初始化\",\"link\":\"#_2-系统初始化\",\"children\":[{\"level\":3,\"title\":\"1.1 网桥配置\",\"slug\":\"_1-1-网桥配置\",\"link\":\"#_1-1-网桥配置\",\"children\":[]},{\"level\":3,\"title\":\"1.2 驱动安装\",\"slug\":\"_1-2-驱动安装\",\"link\":\"#_1-2-驱动安装\",\"children\":[]},{\"level\":3,\"title\":\"1.3 安装必要的软件\",\"slug\":\"_1-3-安装必要的软件\",\"link\":\"#_1-3-安装必要的软件\",\"children\":[]},{\"level\":3,\"title\":\"1.4 在/mnt下挂载NAS\",\"slug\":\"_1-4-在-mnt下挂载nas\",\"link\":\"#_1-4-在-mnt下挂载nas\",\"children\":[]}]},{\"level\":2,\"title\":\"容器管理器初始化\",\"slug\":\"容器管理器初始化\",\"link\":\"#容器管理器初始化\",\"children\":[]},{\"level\":2,\"title\":\"1.5 初始化lxd\",\"slug\":\"_1-5-初始化lxd\",\"link\":\"#_1-5-初始化lxd\",\"children\":[]},{\"level\":2,\"title\":\"1.6 配置容器基础profile\",\"slug\":\"_1-6-配置容器基础profile\",\"link\":\"#_1-6-配置容器基础profile\",\"children\":[]},{\"level\":2,\"title\":\"新创建用户容器初始化\",\"slug\":\"新创建用户容器初始化\",\"link\":\"#新创建用户容器初始化\",\"children\":[{\"level\":3,\"title\":\"将模板镜像导入\",\"slug\":\"将模板镜像导入\",\"link\":\"#将模板镜像导入\",\"children\":[]},{\"level\":3,\"title\":\"用户容器基础配置\",\"slug\":\"用户容器基础配置\",\"link\":\"#用户容器基础配置\",\"children\":[]}]},{\"level\":2,\"title\":\"端口映射容器的开启\",\"slug\":\"端口映射容器的开启\",\"link\":\"#端口映射容器的开启\",\"children\":[]}],\"readingTime\":{\"minutes\":6.47,\"words\":1940},\"filePathRelative\":\"GPUdocs/deploy/host.md\",\"localizedDate\":\"2023年4月8日\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
