import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Badge = resolveComponent("Badge");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><code>more</code> 注释之前的内容被视为文章摘要。</p><!-- more --><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息" aria-hidden="true">#</a> 页面信息</h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容" aria-hidden="true">#</a> 页面内容</h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>你可以将图片和 Markdown 文件放置在一起，但是你需要使用<strong>相对链接</strong><code>./</code> 进行引用。</p></li><li><p>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</p></li></ul></div><p>主题包含了一个自定义徽章可以使用:</p><blockquote><p>文字结尾应该有深蓝色的 徽章文字 徽章。 `);
  _push(ssrRenderComponent(_component_Badge, {
    text: "徽章文字",
    color: "#242378"
  }, null, _parent));
  _push(`</p></blockquote><h2 id="页面结构" tabindex="-1"><a class="header-anchor" href="#页面结构" aria-hidden="true">#</a> 页面结构</h2><p>此页面应当包含:</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html" target="_blank" rel="noopener noreferrer">路径导航`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/feature/page-info.html" target="_blank" rel="noopener noreferrer">标题和页面信息`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8" target="_blank" rel="noopener noreferrer">TOC (文章标题列表)`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/guide/feature/meta.html" target="_blank" rel="noopener noreferrer">贡献者、更新时间等页面元信息`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/feature/comment.html" target="_blank" rel="noopener noreferrer">评论`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>返回顶部按钮</li></ul><p>你可以通过主题选项和页面 Frontmatter 自定义它们。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/page.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "page.html.vue"]]);
export {
  page_html as default
};
