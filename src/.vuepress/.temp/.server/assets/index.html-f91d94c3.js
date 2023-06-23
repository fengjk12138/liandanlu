import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/zh/demo/markdown.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Markdown 展示`);
      } else {
        return [
          createTextVNode("Markdown 展示")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/zh/demo/page.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`页面展示`);
      } else {
        return [
          createTextVNode("页面展示")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/zh/demo/disable.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`禁用展示`);
      } else {
        return [
          createTextVNode("禁用展示")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/zh/demo/encrypt.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`加密展示`);
      } else {
        return [
          createTextVNode("加密展示")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
