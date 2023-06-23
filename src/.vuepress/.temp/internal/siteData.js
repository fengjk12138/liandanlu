export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.jpg\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"炼丹炉系统\",\"description\":\"一个先进的多机多GPU管理方案\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"文档演示\",\"description\":\"vuepress-theme-hope 的文档演示\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
