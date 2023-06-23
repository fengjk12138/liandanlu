import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h, inject, getCurrentInstance, camelize, capitalize, nextTick, Transition, resolveComponent, watch, onUnmounted, toRef, provide, TransitionGroup, useSSRContext, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isPlainObject, isLinkMailto, isLinkTel, ensureEndingSlash, isLinkExternal, removeEndingSlash } from "@vuepress/shared";
import { useWindowScroll, useStyleTag, useClipboard, useEventListener, useStorage, useToggle, useDebounceFn, useMutationObserver, useFullscreen, usePreferredDark, useScrollLock, useThrottleFn, useSessionStorage, onClickOutside } from "@vueuse/core";
import "ts-debounce";
import { useRouter, RouterLink, useRoute, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { pageviewCount } from "@waline/client/dist/pageview.mjs";
import { compareSync } from "bcrypt-ts/browser";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-55ccfcb7.js"
  ).then(({ data }) => data),
  // path: /slides.html
  "v-2e3eac9e": () => import(
    /* webpackChunkName: "v-2e3eac9e" */
    "./assets/slides.html-aee6f675.js"
  ).then(({ data }) => data),
  // path: /NASdocs/
  "v-7f11024d": () => import(
    /* webpackChunkName: "v-7f11024d" */
    "./assets/index.html-bc37ce16.js"
  ).then(({ data }) => data),
  // path: /zh/
  "v-2d0ad528": () => import(
    /* webpackChunkName: "v-2d0ad528" */
    "./assets/index.html-c3bf1d70.js"
  ).then(({ data }) => data),
  // path: /zh/slides.html
  "v-269ae70f": () => import(
    /* webpackChunkName: "v-269ae70f" */
    "./assets/slides.html-572d47c0.js"
  ).then(({ data }) => data),
  // path: /GPUdocs/deploy/
  "v-c4e44272": () => import(
    /* webpackChunkName: "v-c4e44272" */
    "./assets/index.html-ad14c817.js"
  ).then(({ data }) => data),
  // path: /GPUdocs/deploy/container.html
  "v-9a6cd902": () => import(
    /* webpackChunkName: "v-9a6cd902" */
    "./assets/container.html-9c0d3617.js"
  ).then(({ data }) => data),
  // path: /GPUdocs/user/
  "v-4ee8dc23": () => import(
    /* webpackChunkName: "v-4ee8dc23" */
    "./assets/index.html-6f891fe3.js"
  ).then(({ data }) => data),
  // path: /NASdocs/deploy/
  "v-0cee2d8a": () => import(
    /* webpackChunkName: "v-0cee2d8a" */
    "./assets/index.html-f3e99e80.js"
  ).then(({ data }) => data),
  // path: /NASdocs/maintain/
  "v-399d7f52": () => import(
    /* webpackChunkName: "v-399d7f52" */
    "./assets/index.html-bd06d89e.js"
  ).then(({ data }) => data),
  // path: /NASdocs/user/
  "v-374bf397": () => import(
    /* webpackChunkName: "v-374bf397" */
    "./assets/index.html-c7c4c75c.js"
  ).then(({ data }) => data),
  // path: /zh/demo/
  "v-2b64e284": () => import(
    /* webpackChunkName: "v-2b64e284" */
    "./assets/index.html-afa6b4e5.js"
  ).then(({ data }) => data),
  // path: /zh/demo/disable.html
  "v-c1942916": () => import(
    /* webpackChunkName: "v-c1942916" */
    "./assets/disable.html-e2913355.js"
  ).then(({ data }) => data),
  // path: /zh/demo/encrypt.html
  "v-65c00218": () => import(
    /* webpackChunkName: "v-65c00218" */
    "./assets/encrypt.html-ba2277c7.js"
  ).then(({ data }) => data),
  // path: /zh/demo/markdown.html
  "v-36295574": () => import(
    /* webpackChunkName: "v-36295574" */
    "./assets/markdown.html-5b6b1be0.js"
  ).then(({ data }) => data),
  // path: /zh/demo/page.html
  "v-62ced1a6": () => import(
    /* webpackChunkName: "v-62ced1a6" */
    "./assets/page.html-fee8ab65.js"
  ).then(({ data }) => data),
  // path: /zh/guide/
  "v-47357bdb": () => import(
    /* webpackChunkName: "v-47357bdb" */
    "./assets/index.html-27e7887e.js"
  ).then(({ data }) => data),
  // path: /zh/guide/bar/
  "v-763c1cd7": () => import(
    /* webpackChunkName: "v-763c1cd7" */
    "./assets/index.html-eae9912e.js"
  ).then(({ data }) => data),
  // path: /zh/guide/bar/baz.html
  "v-1e317375": () => import(
    /* webpackChunkName: "v-1e317375" */
    "./assets/baz.html-98ba29e2.js"
  ).then(({ data }) => data),
  // path: /zh/guide/foo/
  "v-763e2284": () => import(
    /* webpackChunkName: "v-763e2284" */
    "./assets/index.html-ac57d3d0.js"
  ).then(({ data }) => data),
  // path: /zh/guide/foo/ray.html
  "v-00fb7173": () => import(
    /* webpackChunkName: "v-00fb7173" */
    "./assets/ray.html-1d823138.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-2fff841c.js"
  ).then(({ data }) => data),
  // path: /GPUdocs/
  "v-76601b7e": () => import(
    /* webpackChunkName: "v-76601b7e" */
    "./assets/index.html-5c6eff34.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/favicon.jpg"}]],"locales":{"/":{"lang":"zh-CN","title":"炼丹炉系统","description":"一个先进的多机多GPU管理方案"},"/zh/":{"lang":"zh-CN","title":"文档演示","description":"vuepress-theme-hope 的文档演示"}}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-f5ed8df8.js"
  )),
  // path: /slides.html
  "v-2e3eac9e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e3eac9e" */
    "./assets/slides.html-b4414c5a.js"
  )),
  // path: /NASdocs/
  "v-7f11024d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7f11024d" */
    "./assets/index.html-e5657138.js"
  )),
  // path: /zh/
  "v-2d0ad528": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2d0ad528" */
    "./assets/index.html-2e6c355b.js"
  )),
  // path: /zh/slides.html
  "v-269ae70f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-269ae70f" */
    "./assets/slides.html-ebefa3b8.js"
  )),
  // path: /GPUdocs/deploy/
  "v-c4e44272": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c4e44272" */
    "./assets/index.html-6b55663a.js"
  )),
  // path: /GPUdocs/deploy/container.html
  "v-9a6cd902": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9a6cd902" */
    "./assets/container.html-3bea5b9d.js"
  )),
  // path: /GPUdocs/user/
  "v-4ee8dc23": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4ee8dc23" */
    "./assets/index.html-d400e975.js"
  )),
  // path: /NASdocs/deploy/
  "v-0cee2d8a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0cee2d8a" */
    "./assets/index.html-cafbbe2d.js"
  )),
  // path: /NASdocs/maintain/
  "v-399d7f52": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-399d7f52" */
    "./assets/index.html-d91fafc6.js"
  )),
  // path: /NASdocs/user/
  "v-374bf397": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-374bf397" */
    "./assets/index.html-975d9425.js"
  )),
  // path: /zh/demo/
  "v-2b64e284": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2b64e284" */
    "./assets/index.html-f91d94c3.js"
  )),
  // path: /zh/demo/disable.html
  "v-c1942916": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c1942916" */
    "./assets/disable.html-3ef03788.js"
  )),
  // path: /zh/demo/encrypt.html
  "v-65c00218": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-65c00218" */
    "./assets/encrypt.html-e9fedf26.js"
  )),
  // path: /zh/demo/markdown.html
  "v-36295574": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-36295574" */
    "./assets/markdown.html-7f98451e.js"
  )),
  // path: /zh/demo/page.html
  "v-62ced1a6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-62ced1a6" */
    "./assets/page.html-2af0b43c.js"
  )),
  // path: /zh/guide/
  "v-47357bdb": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-47357bdb" */
    "./assets/index.html-01fb20d2.js"
  )),
  // path: /zh/guide/bar/
  "v-763c1cd7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-763c1cd7" */
    "./assets/index.html-8aaaadd3.js"
  )),
  // path: /zh/guide/bar/baz.html
  "v-1e317375": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1e317375" */
    "./assets/baz.html-269aa9f6.js"
  )),
  // path: /zh/guide/foo/
  "v-763e2284": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-763e2284" */
    "./assets/index.html-d696ca9b.js"
  )),
  // path: /zh/guide/foo/ray.html
  "v-00fb7173": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-00fb7173" */
    "./assets/ray.html-8db5576d.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  )),
  // path: /GPUdocs/
  "v-76601b7e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-76601b7e" */
    "./assets/index.html-8c9f373a.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page2, siteLocale) => [page2.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page2) => page2.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page2, layouts) => {
    let layoutName;
    if (page2.path) {
      const frontmatterLayout = page2.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page2.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h(pageComponent.value)
    ) : (
      // fallback content
      h(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b2[i2]; j < b2[i2 + 1]; ++j) {
      r2[j] = j - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$4 = 0; i$4 < 32768; ++i$4) {
  var x$2 = (i$4 & 43690) >>> 1 | (i$4 & 21845) << 1;
  x$2 = (x$2 & 52428) >>> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >>> 4 | (x$2 & 3855) << 4;
  rev[i$4] = ((x$2 & 65280) >>> 8 | (x$2 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$4 = 0; i$4 < 144; ++i$4)
  flt[i$4] = 8;
for (var i$4 = 144; i$4 < 256; ++i$4)
  flt[i$4] = 9;
for (var i$4 = 256; i$4 < 280; ++i$4)
  flt[i$4] = 7;
for (var i$4 = 280; i$4 < 288; ++i$4)
  flt[i$4] = 8;
var fdt = new u8(32);
for (var i$4 = 0; i$4 < 32; ++i$4)
  fdt[i$4] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st2) {
  var sl = dat.length;
  if (!sl || st2 && st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2)
    st2 = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt2 = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt2);
        dbt = max(dt);
        lm = hMap(lt2, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 == buf.length ? buf : slc(buf, 0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const G$1 = ({ name: t2 = "", color: n2 = "currentColor" }, { slots: e2 }) => {
  var i2;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${t2} icon` }, (i2 = e2.default) == null ? void 0 : i2.call(e2));
};
G$1.displayName = "IconBase";
const vt = ({ size: t2 = 48, stroke: n2 = 4, wrapper: e2 = true, height: i2 = 2 * t2 }) => {
  const h$1 = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: t2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return e2 ? h("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, h$1) : h$1;
};
vt.displayName = "LoadingIcon";
const Rt = (t2, { slots: n2 }) => {
  var e2;
  return ((e2 = n2.default) == null ? void 0 : e2.call(n2)) || null;
}, gt = () => h(G$1, { name: "github" }, () => h("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
gt.displayName = "GitHubIcon";
const $t = () => h(G$1, { name: "gitlab" }, () => h("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
$t.displayName = "GitlabIcon";
const yt = () => h(G$1, { name: "gitee" }, () => h("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
yt.displayName = "GiteeIcon";
const bt = () => h(G$1, { name: "bitbucket" }, () => h("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
bt.displayName = "BitbucketIcon";
const wt = () => h(G$1, { name: "source" }, () => h("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
wt.displayName = "SourceIcon";
const et = Array.isArray, Gt = (t2) => typeof t2 == "function", P$1 = (t2) => typeof t2 == "string";
var Ot = (t2) => /^(https?:)?\/\//.test(t2), J$1 = (t2) => Object.prototype.toString.call(t2) === "[object Object]";
const Vt = (t2, n2) => {
  const e2 = n2 ? n2._instance : getCurrentInstance();
  return J$1(e2 == null ? void 0 : e2.appContext.components) && (t2 in e2.appContext.components || camelize(t2) in e2.appContext.components || capitalize(camelize(t2)) in e2.appContext.components);
};
function Ft(t2) {
  return t2;
}
function Zt(t2, n2 = true) {
  getCurrentInstance() ? onMounted(t2) : n2 ? t2() : nextTick(t2);
}
function Qt(t2, n2 = false) {
  const e2 = ref(), i2 = () => e2.value = !!t2();
  return i2(), Zt(i2, n2), e2;
}
const St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mt = "__vueuse_ssr_handlers__";
St[Mt] = St[Mt] || {};
var Dt;
(function(t2) {
  t2.UP = "UP", t2.RIGHT = "RIGHT", t2.DOWN = "DOWN", t2.LEFT = "LEFT", t2.NONE = "NONE";
})(Dt || (Dt = {}));
var Jt = Object.defineProperty, xt = Object.getOwnPropertySymbols, qt = Object.prototype.hasOwnProperty, Kt = Object.prototype.propertyIsEnumerable, It = (t2, n2, e2) => n2 in t2 ? Jt(t2, n2, { enumerable: true, configurable: true, writable: true, value: e2 }) : t2[n2] = e2, Xt = (t2, n2) => {
  for (var e2 in n2 || (n2 = {}))
    qt.call(n2, e2) && It(t2, e2, n2[e2]);
  if (xt)
    for (var e2 of xt(n2))
      Kt.call(n2, e2) && It(t2, e2, n2[e2]);
  return t2;
};
const te = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
Xt({ linear: Ft }, te);
const Et = () => Qt(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), ee = () => {
  const t2 = Et();
  return computed(() => t2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, ne = (t2) => {
  const n2 = useRouteLocale();
  return computed(() => t2[n2.value]);
}, fe = (t2, n2) => {
  let e2 = 1;
  for (let i2 = 0; i2 < t2.length; i2++)
    e2 += t2.charCodeAt(i2), e2 += e2 << 10, e2 ^= e2 >> 6;
  return e2 += e2 << 3, e2 ^= e2 >> 11, e2 % n2;
};
var K$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = {}, me = { get exports() {
  return nt;
}, set exports(t2) {
  nt = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    var e2 = 1e3, i2 = 6e4, h2 = 36e5, b2 = "millisecond", y2 = "second", w2 = "minute", p2 = "hour", S2 = "day", k2 = "week", x2 = "month", u2 = "quarter", l2 = "year", g2 = "date", r2 = "Invalid Date", c2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(d2) {
      var a2 = ["th", "st", "nd", "rd"], s2 = d2 % 100;
      return "[" + d2 + (a2[(s2 - 20) % 10] || a2[s2] || a2[0]) + "]";
    } }, E2 = function(d2, a2, s2) {
      var f2 = String(d2);
      return !f2 || f2.length >= a2 ? d2 : "" + Array(a2 + 1 - f2.length).join(s2) + d2;
    }, U2 = { s: E2, z: function(d2) {
      var a2 = -d2.utcOffset(), s2 = Math.abs(a2), f2 = Math.floor(s2 / 60), o2 = s2 % 60;
      return (a2 <= 0 ? "+" : "-") + E2(f2, 2, "0") + ":" + E2(o2, 2, "0");
    }, m: function d2(a2, s2) {
      if (a2.date() < s2.date())
        return -d2(s2, a2);
      var f2 = 12 * (s2.year() - a2.year()) + (s2.month() - a2.month()), o2 = a2.clone().add(f2, x2), v2 = s2 - o2 < 0, m2 = a2.clone().add(f2 + (v2 ? -1 : 1), x2);
      return +(-(f2 + (s2 - o2) / (v2 ? o2 - m2 : m2 - o2)) || 0);
    }, a: function(d2) {
      return d2 < 0 ? Math.ceil(d2) || 0 : Math.floor(d2);
    }, p: function(d2) {
      return { M: x2, y: l2, w: k2, d: S2, D: g2, h: p2, m: w2, s: y2, ms: b2, Q: u2 }[d2] || String(d2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(d2) {
      return d2 === void 0;
    } }, _ = "en", z = {};
    z[_] = M2;
    var H2 = function(d2) {
      return d2 instanceof A2;
    }, j = function d2(a2, s2, f2) {
      var o2;
      if (!a2)
        return _;
      if (typeof a2 == "string") {
        var v2 = a2.toLowerCase();
        z[v2] && (o2 = v2), s2 && (z[v2] = s2, o2 = v2);
        var m2 = a2.split("-");
        if (!o2 && m2.length > 1)
          return d2(m2[0]);
      } else {
        var D2 = a2.name;
        z[D2] = a2, o2 = D2;
      }
      return !f2 && o2 && (_ = o2), o2 || !f2 && _;
    }, O2 = function(d2, a2) {
      if (H2(d2))
        return d2.clone();
      var s2 = typeof a2 == "object" ? a2 : {};
      return s2.date = d2, s2.args = arguments, new A2(s2);
    }, $2 = U2;
    $2.l = j, $2.i = H2, $2.w = function(d2, a2) {
      return O2(d2, { locale: a2.$L, utc: a2.$u, x: a2.$x, $offset: a2.$offset });
    };
    var A2 = function() {
      function d2(s2) {
        this.$L = j(s2.locale, null, true), this.parse(s2);
      }
      var a2 = d2.prototype;
      return a2.parse = function(s2) {
        this.$d = function(f2) {
          var o2 = f2.date, v2 = f2.utc;
          if (o2 === null)
            return new Date(NaN);
          if ($2.u(o2))
            return new Date();
          if (o2 instanceof Date)
            return new Date(o2);
          if (typeof o2 == "string" && !/Z$/i.test(o2)) {
            var m2 = o2.match(c2);
            if (m2) {
              var D2 = m2[2] - 1 || 0, C2 = (m2[7] || "0").substring(0, 3);
              return v2 ? new Date(Date.UTC(m2[1], D2, m2[3] || 1, m2[4] || 0, m2[5] || 0, m2[6] || 0, C2)) : new Date(m2[1], D2, m2[3] || 1, m2[4] || 0, m2[5] || 0, m2[6] || 0, C2);
            }
          }
          return new Date(o2);
        }(s2), this.$x = s2.x || {}, this.init();
      }, a2.init = function() {
        var s2 = this.$d;
        this.$y = s2.getFullYear(), this.$M = s2.getMonth(), this.$D = s2.getDate(), this.$W = s2.getDay(), this.$H = s2.getHours(), this.$m = s2.getMinutes(), this.$s = s2.getSeconds(), this.$ms = s2.getMilliseconds();
      }, a2.$utils = function() {
        return $2;
      }, a2.isValid = function() {
        return this.$d.toString() !== r2;
      }, a2.isSame = function(s2, f2) {
        var o2 = O2(s2);
        return this.startOf(f2) <= o2 && o2 <= this.endOf(f2);
      }, a2.isAfter = function(s2, f2) {
        return O2(s2) < this.startOf(f2);
      }, a2.isBefore = function(s2, f2) {
        return this.endOf(f2) < O2(s2);
      }, a2.$g = function(s2, f2, o2) {
        return $2.u(s2) ? this[f2] : this.set(o2, s2);
      }, a2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a2.valueOf = function() {
        return this.$d.getTime();
      }, a2.startOf = function(s2, f2) {
        var o2 = this, v2 = !!$2.u(f2) || f2, m2 = $2.p(s2), D2 = function(F2, Y2) {
          var R = $2.w(o2.$u ? Date.UTC(o2.$y, Y2, F2) : new Date(o2.$y, Y2, F2), o2);
          return v2 ? R : R.endOf(S2);
        }, C2 = function(F2, Y2) {
          return $2.w(o2.toDate()[F2].apply(o2.toDate("s"), (v2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y2)), o2);
        }, T2 = this.$W, N = this.$M, B2 = this.$D, W2 = "set" + (this.$u ? "UTC" : "");
        switch (m2) {
          case l2:
            return v2 ? D2(1, 0) : D2(31, 11);
          case x2:
            return v2 ? D2(1, N) : D2(0, N + 1);
          case k2:
            var Z = this.$locale().weekStart || 0, Q = (T2 < Z ? T2 + 7 : T2) - Z;
            return D2(v2 ? B2 - Q : B2 + (6 - Q), N);
          case S2:
          case g2:
            return C2(W2 + "Hours", 0);
          case p2:
            return C2(W2 + "Minutes", 1);
          case w2:
            return C2(W2 + "Seconds", 2);
          case y2:
            return C2(W2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a2.endOf = function(s2) {
        return this.startOf(s2, false);
      }, a2.$set = function(s2, f2) {
        var o2, v2 = $2.p(s2), m2 = "set" + (this.$u ? "UTC" : ""), D2 = (o2 = {}, o2[S2] = m2 + "Date", o2[g2] = m2 + "Date", o2[x2] = m2 + "Month", o2[l2] = m2 + "FullYear", o2[p2] = m2 + "Hours", o2[w2] = m2 + "Minutes", o2[y2] = m2 + "Seconds", o2[b2] = m2 + "Milliseconds", o2)[v2], C2 = v2 === S2 ? this.$D + (f2 - this.$W) : f2;
        if (v2 === x2 || v2 === l2) {
          var T2 = this.clone().set(g2, 1);
          T2.$d[D2](C2), T2.init(), this.$d = T2.set(g2, Math.min(this.$D, T2.daysInMonth())).$d;
        } else
          D2 && this.$d[D2](C2);
        return this.init(), this;
      }, a2.set = function(s2, f2) {
        return this.clone().$set(s2, f2);
      }, a2.get = function(s2) {
        return this[$2.p(s2)]();
      }, a2.add = function(s2, f2) {
        var o2, v2 = this;
        s2 = Number(s2);
        var m2 = $2.p(f2), D2 = function(N) {
          var B2 = O2(v2);
          return $2.w(B2.date(B2.date() + Math.round(N * s2)), v2);
        };
        if (m2 === x2)
          return this.set(x2, this.$M + s2);
        if (m2 === l2)
          return this.set(l2, this.$y + s2);
        if (m2 === S2)
          return D2(1);
        if (m2 === k2)
          return D2(7);
        var C2 = (o2 = {}, o2[w2] = i2, o2[p2] = h2, o2[y2] = e2, o2)[m2] || 1, T2 = this.$d.getTime() + s2 * C2;
        return $2.w(T2, this);
      }, a2.subtract = function(s2, f2) {
        return this.add(-1 * s2, f2);
      }, a2.format = function(s2) {
        var f2 = this, o2 = this.$locale();
        if (!this.isValid())
          return o2.invalidDate || r2;
        var v2 = s2 || "YYYY-MM-DDTHH:mm:ssZ", m2 = $2.z(this), D2 = this.$H, C2 = this.$m, T2 = this.$M, N = o2.weekdays, B2 = o2.months, W2 = function(Y2, R, X, q2) {
          return Y2 && (Y2[R] || Y2(f2, v2)) || X[R].slice(0, q2);
        }, Z = function(Y2) {
          return $2.s(D2 % 12 || 12, Y2, "0");
        }, Q = o2.meridiem || function(Y2, R, X) {
          var q2 = Y2 < 12 ? "AM" : "PM";
          return X ? q2.toLowerCase() : q2;
        }, F2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: T2 + 1, MM: $2.s(T2 + 1, 2, "0"), MMM: W2(o2.monthsShort, T2, B2, 3), MMMM: W2(B2, T2), D: this.$D, DD: $2.s(this.$D, 2, "0"), d: String(this.$W), dd: W2(o2.weekdaysMin, this.$W, N, 2), ddd: W2(o2.weekdaysShort, this.$W, N, 3), dddd: N[this.$W], H: String(D2), HH: $2.s(D2, 2, "0"), h: Z(1), hh: Z(2), a: Q(D2, C2, true), A: Q(D2, C2, false), m: String(C2), mm: $2.s(C2, 2, "0"), s: String(this.$s), ss: $2.s(this.$s, 2, "0"), SSS: $2.s(this.$ms, 3, "0"), Z: m2 };
        return v2.replace(I2, function(Y2, R) {
          return R || F2[Y2] || m2.replace(":", "");
        });
      }, a2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a2.diff = function(s2, f2, o2) {
        var v2, m2 = $2.p(f2), D2 = O2(s2), C2 = (D2.utcOffset() - this.utcOffset()) * i2, T2 = this - D2, N = $2.m(this, D2);
        return N = (v2 = {}, v2[l2] = N / 12, v2[x2] = N, v2[u2] = N / 3, v2[k2] = (T2 - C2) / 6048e5, v2[S2] = (T2 - C2) / 864e5, v2[p2] = T2 / h2, v2[w2] = T2 / i2, v2[y2] = T2 / e2, v2)[m2] || T2, o2 ? N : $2.a(N);
      }, a2.daysInMonth = function() {
        return this.endOf(x2).$D;
      }, a2.$locale = function() {
        return z[this.$L];
      }, a2.locale = function(s2, f2) {
        if (!s2)
          return this.$L;
        var o2 = this.clone(), v2 = j(s2, f2, true);
        return v2 && (o2.$L = v2), o2;
      }, a2.clone = function() {
        return $2.w(this.$d, this);
      }, a2.toDate = function() {
        return new Date(this.valueOf());
      }, a2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a2.toISOString = function() {
        return this.$d.toISOString();
      }, a2.toString = function() {
        return this.$d.toUTCString();
      }, d2;
    }(), ht = A2.prototype;
    return O2.prototype = ht, [["$ms", b2], ["$s", y2], ["$m", w2], ["$H", p2], ["$W", S2], ["$M", x2], ["$y", l2], ["$D", g2]].forEach(function(d2) {
      ht[d2[1]] = function(a2) {
        return this.$g(a2, d2[0], d2[1]);
      };
    }), O2.extend = function(d2, a2) {
      return d2.$i || (d2(a2, A2, O2), d2.$i = true), O2;
    }, O2.locale = j, O2.isDayjs = H2, O2.unix = function(d2) {
      return O2(1e3 * d2);
    }, O2.en = z[_], O2.Ls = z, O2.p = {}, O2;
  });
})(me);
var V$1 = nt, it = {}, pe = { get exports() {
  return it;
}, set exports(t2) {
  it = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    return function(e2, i2, h2) {
      var b2 = i2.prototype, y2 = function(u2) {
        var l2, g2 = u2.date, r2 = u2.utc, c2 = {};
        if (!((l2 = g2) instanceof Date || l2 instanceof Array || b2.$utils().u(l2) || l2.constructor.name !== "Object")) {
          if (!Object.keys(g2).length)
            return new Date();
          var I2 = r2 ? h2.utc() : h2();
          Object.keys(g2).forEach(function(O2) {
            var $2, A2;
            c2[$2 = O2, A2 = b2.$utils().p($2), A2 === "date" ? "day" : A2] = g2[O2];
          });
          var M2 = c2.day || (c2.year || c2.month >= 0 ? 1 : I2.date()), E2 = c2.year || I2.year(), U2 = c2.month >= 0 ? c2.month : c2.year || c2.day ? 0 : I2.month(), _ = c2.hour || 0, z = c2.minute || 0, H2 = c2.second || 0, j = c2.millisecond || 0;
          return r2 ? new Date(Date.UTC(E2, U2, M2, _, z, H2, j)) : new Date(E2, U2, M2, _, z, H2, j);
        }
        return g2;
      }, w2 = b2.parse;
      b2.parse = function(u2) {
        u2.date = y2.bind(this)(u2), w2.bind(this)(u2);
      };
      var p2 = b2.set, S2 = b2.add, k2 = b2.subtract, x2 = function(u2, l2, g2, r2) {
        r2 === void 0 && (r2 = 1);
        var c2 = Object.keys(l2), I2 = this;
        return c2.forEach(function(M2) {
          I2 = u2.bind(I2)(l2[M2] * r2, M2);
        }), I2;
      };
      b2.set = function(u2, l2) {
        return l2 = l2 === void 0 ? u2 : l2, u2.constructor.name === "Object" ? x2.bind(this)(function(g2, r2) {
          return p2.bind(this)(r2, g2);
        }, l2, u2) : p2.bind(this)(u2, l2);
      }, b2.add = function(u2, l2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, l2) : S2.bind(this)(u2, l2);
      }, b2.subtract = function(u2, l2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, l2, -1) : k2.bind(this)(u2, l2);
      };
    };
  });
})(pe);
var ve = it, rt = {}, ge = { get exports() {
  return rt;
}, set exports(t2) {
  rt = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    var e2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, i2 = {};
    return function(h2, b2, y2) {
      var w2, p2 = function(u2, l2, g2) {
        g2 === void 0 && (g2 = {});
        var r2 = new Date(u2), c2 = function(I2, M2) {
          M2 === void 0 && (M2 = {});
          var E2 = M2.timeZoneName || "short", U2 = I2 + "|" + E2, _ = i2[U2];
          return _ || (_ = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: I2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: E2 }), i2[U2] = _), _;
        }(l2, g2);
        return c2.formatToParts(r2);
      }, S2 = function(u2, l2) {
        for (var g2 = p2(u2, l2), r2 = [], c2 = 0; c2 < g2.length; c2 += 1) {
          var I2 = g2[c2], M2 = I2.type, E2 = I2.value, U2 = e2[M2];
          U2 >= 0 && (r2[U2] = parseInt(E2, 10));
        }
        var _ = r2[3], z = _ === 24 ? 0 : _, H2 = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + z + ":" + r2[4] + ":" + r2[5] + ":000", j = +u2;
        return (y2.utc(H2).valueOf() - (j -= j % 1e3)) / 6e4;
      }, k2 = b2.prototype;
      k2.tz = function(u2, l2) {
        u2 === void 0 && (u2 = w2);
        var g2 = this.utcOffset(), r2 = this.toDate(), c2 = r2.toLocaleString("en-US", { timeZone: u2 }), I2 = Math.round((r2 - new Date(c2)) / 1e3 / 60), M2 = y2(c2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r2.getTimezoneOffset() / 15) - I2, true);
        if (l2) {
          var E2 = M2.utcOffset();
          M2 = M2.add(g2 - E2, "minute");
        }
        return M2.$x.$timezone = u2, M2;
      }, k2.offsetName = function(u2) {
        var l2 = this.$x.$timezone || y2.tz.guess(), g2 = p2(this.valueOf(), l2, { timeZoneName: u2 }).find(function(r2) {
          return r2.type.toLowerCase() === "timezonename";
        });
        return g2 && g2.value;
      };
      var x2 = k2.startOf;
      k2.startOf = function(u2, l2) {
        if (!this.$x || !this.$x.$timezone)
          return x2.call(this, u2, l2);
        var g2 = y2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return x2.call(g2, u2, l2).tz(this.$x.$timezone, true);
      }, y2.tz = function(u2, l2, g2) {
        var r2 = g2 && l2, c2 = g2 || l2 || w2, I2 = S2(+y2(), c2);
        if (typeof u2 != "string")
          return y2(u2).tz(c2);
        var M2 = function(z, H2, j) {
          var O2 = z - 60 * H2 * 1e3, $2 = S2(O2, j);
          if (H2 === $2)
            return [O2, H2];
          var A2 = S2(O2 -= 60 * ($2 - H2) * 1e3, j);
          return $2 === A2 ? [O2, $2] : [z - 60 * Math.min($2, A2) * 1e3, Math.max($2, A2)];
        }(y2.utc(u2, r2).valueOf(), I2, c2), E2 = M2[0], U2 = M2[1], _ = y2(E2).utcOffset(U2);
        return _.$x.$timezone = c2, _;
      }, y2.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, y2.tz.setDefault = function(u2) {
        w2 = u2;
      };
    };
  });
})(ge);
var $e = rt, st = {}, ye = { get exports() {
  return st;
}, set exports(t2) {
  st = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    var e2 = "minute", i2 = /[+-]\d\d(?::?\d\d)?/g, h2 = /([+-]|\d\d)/g;
    return function(b2, y2, w2) {
      var p2 = y2.prototype;
      w2.utc = function(r2) {
        var c2 = { date: r2, utc: true, args: arguments };
        return new y2(c2);
      }, p2.utc = function(r2) {
        var c2 = w2(this.toDate(), { locale: this.$L, utc: true });
        return r2 ? c2.add(this.utcOffset(), e2) : c2;
      }, p2.local = function() {
        return w2(this.toDate(), { locale: this.$L, utc: false });
      };
      var S2 = p2.parse;
      p2.parse = function(r2) {
        r2.utc && (this.$u = true), this.$utils().u(r2.$offset) || (this.$offset = r2.$offset), S2.call(this, r2);
      };
      var k2 = p2.init;
      p2.init = function() {
        if (this.$u) {
          var r2 = this.$d;
          this.$y = r2.getUTCFullYear(), this.$M = r2.getUTCMonth(), this.$D = r2.getUTCDate(), this.$W = r2.getUTCDay(), this.$H = r2.getUTCHours(), this.$m = r2.getUTCMinutes(), this.$s = r2.getUTCSeconds(), this.$ms = r2.getUTCMilliseconds();
        } else
          k2.call(this);
      };
      var x2 = p2.utcOffset;
      p2.utcOffset = function(r2, c2) {
        var I2 = this.$utils().u;
        if (I2(r2))
          return this.$u ? 0 : I2(this.$offset) ? x2.call(this) : this.$offset;
        if (typeof r2 == "string" && (r2 = function(_) {
          _ === void 0 && (_ = "");
          var z = _.match(i2);
          if (!z)
            return null;
          var H2 = ("" + z[0]).match(h2) || ["-", 0, 0], j = H2[0], O2 = 60 * +H2[1] + +H2[2];
          return O2 === 0 ? 0 : j === "+" ? O2 : -O2;
        }(r2), r2 === null))
          return this;
        var M2 = Math.abs(r2) <= 16 ? 60 * r2 : r2, E2 = this;
        if (c2)
          return E2.$offset = M2, E2.$u = r2 === 0, E2;
        if (r2 !== 0) {
          var U2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (E2 = this.local().add(M2 + U2, e2)).$offset = M2, E2.$x.$localOffset = U2;
        } else
          E2 = this.utc();
        return E2;
      };
      var u2 = p2.format;
      p2.format = function(r2) {
        var c2 = r2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return u2.call(this, c2);
      }, p2.valueOf = function() {
        var r2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * r2;
      }, p2.isUTC = function() {
        return !!this.$u;
      }, p2.toISOString = function() {
        return this.toDate().toISOString();
      }, p2.toString = function() {
        return this.toDate().toUTCString();
      };
      var l2 = p2.toDate;
      p2.toDate = function(r2) {
        return r2 === "s" && this.$offset ? w2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l2.call(this);
      };
      var g2 = p2.diff;
      p2.diff = function(r2, c2, I2) {
        if (r2 && this.$u === r2.$u)
          return g2.call(this, r2, c2, I2);
        var M2 = this.local(), E2 = w2(r2).local();
        return g2.call(M2, E2, c2, I2);
      };
    };
  });
})(ye);
var be = st;
V$1.extend(ve), V$1.extend(be), V$1.extend($e);
const ot = (t2, n2) => {
  if (t2) {
    if (V$1(t2 instanceof Date ? t2 : P$1(t2) ? t2.trim() : t2).isValid()) {
      const i2 = n2 ? V$1(t2).tz(n2) : V$1(t2), h2 = i2.year(), b2 = i2.month() + 1, y2 = i2.date(), w2 = i2.hour(), p2 = i2.minute(), S2 = i2.second(), k2 = i2.millisecond(), x2 = w2 === 0 && p2 === 0 && S2 === 0 && k2 === 0;
      return { value: i2.toDate(), info: { year: h2, month: b2, day: y2, ...x2 ? {} : { hour: w2, minute: p2, second: S2 } }, type: x2 ? "date" : "full" };
    }
    const e2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (e2) {
      const [, i2, h2, b2, y2, w2, p2] = e2, S2 = (c2) => typeof c2 > "u" ? void 0 : Number(c2), k2 = (c2) => c2 && c2 < 100 ? c2 + 2e3 : c2, x2 = (c2) => y2 && w2 && !p2 ? 0 : c2, u2 = { year: k2(S2(i2)), month: S2(h2), day: S2(b2), hour: S2(y2), minute: S2(w2), second: x2(S2(p2)) }, l2 = i2 === void 0 && h2 === void 0 && b2 === void 0, g2 = y2 === void 0 && w2 === void 0 && p2 === void 0, r2 = V$1({ ...u2, month: u2.month - 1 }).toDate();
      return { value: l2 ? void 0 : r2, info: g2 ? { year: u2.year, month: u2.month, day: u2.day } : l2 ? { hour: u2.hour, minute: u2.minute, second: u2.second } : u2, type: l2 ? "time" : g2 ? "date" : "full" };
    }
  }
  return null;
}, _t = (t2, n2) => P$1(t2) && t2.startsWith(n2), Oe = (t2, n2) => P$1(t2) && t2.endsWith(n2), Tt = Object.entries, at = Object.keys, ut = (t2, ...n2) => {
  if (n2.length === 0)
    return t2;
  const e2 = n2.shift() || null;
  return e2 && Tt(e2).forEach(([i2, h2]) => {
    i2 === "__proto__" || i2 === "constructor" || (J$1(t2[i2]) && J$1(h2) ? ut(t2[i2], h2) : et(h2) ? t2[i2] = [...h2] : J$1(h2) ? t2[i2] = { ...h2 } : t2[i2] = e2[i2]);
  }), ut(t2, ...n2);
}, Ct = (t2) => J$1(t2) && P$1(t2.name), De = (t2, n2 = false) => t2 ? et(t2) ? t2.map((e2) => P$1(e2) ? { name: e2 } : Ct(e2) ? e2 : null).filter((e2) => e2 !== null) : P$1(t2) ? [{ name: t2 }] : Ct(t2) ? [t2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, t2), []) : [], ct = (t2, n2) => {
  if (t2) {
    if (et(t2) && t2.every(P$1))
      return t2;
    if (P$1(t2))
      return [t2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, t2);
  }
  return [];
}, xe = (t2) => ct(t2, "category"), Ie = (t2) => ct(t2, "tag"), _e = (t2) => _t(t2, "/");
const zt = /#.*$/u, kt = (t2) => {
  const n2 = zt.exec(t2);
  return n2 ? n2[0] : "";
}, lt = (t2) => decodeURI(t2).replace(zt, "").replace(/(index)?\.(md|html)$/, ""), Ce = (t2, n2) => {
  if (n2 === void 0)
    return false;
  const e2 = lt(t2.path), i2 = lt(n2), h2 = kt(n2);
  return h2 ? h2 === t2.hash && (!i2 || e2 === i2) : e2 === i2;
};
const He = (t2) => {
  const n2 = Buffer.from(t2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(n2, true)));
}, Le = (t2) => Ot(t2) ? t2 : `https://github.com/${t2}`, Ne = (t2) => !Ot(t2) || /github\.com/.test(t2) ? "GitHub" : /bitbucket\.org/.test(t2) ? "Bitbucket" : /gitlab\.com/.test(t2) ? "GitLab" : /gitee\.com/.test(t2) ? "Gitee" : null, Ht = (t2, ...n2) => {
  const e2 = t2.resolve(...n2), i2 = e2.matched[e2.matched.length - 1];
  if (!(i2 != null && i2.redirect))
    return e2;
  const { redirect: h2 } = i2, b2 = Gt(h2) ? h2(e2) : h2, y2 = P$1(b2) ? { path: b2 } : b2;
  return Ht(t2, { hash: e2.hash, query: e2.query, params: e2.params, ...y2 });
};
const badge = "";
const t$1 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$1.displayName = "Badge";
const fontIcon = "";
var m$2 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"iconfont icon-"}${o2.icon}`;
    return n2.push(t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), at(n2).length ? n2 : null;
  });
  return () => o2.icon ? h("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const l$3 = () => h(G$1, { name: "back-to-top" }, () => [h("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$3.displayName = "BackToTopIcon";
const balloon = "";
const backToTop = "";
var T$3 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(a2) {
  const t2 = usePageFrontmatter(), e2 = ne({ "/zh/": { "backToTop": "返回顶部" }, "/": { "backToTop": "返回顶部" } }), { y: r2 } = useWindowScroll(), l2 = computed(() => t2.value.backToTop !== false && r2.value > a2.threshold);
  return () => h(Transition, { name: "fade" }, () => l2.value ? h("button", { class: "back-to-top", "aria-label": e2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, h(l$3)) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!Vt("Badge"))
      app.component("Badge", t$1);
    if (!Vt("FontIcon"))
      app.component("FontIcon", m$2);
  },
  setup: () => {
    useStyleTag(`  @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(T$3, { threshold: 300 })
  ]
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
const autoCatalog = "";
var D = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(c2, { slots: h$1 }) {
  const f2 = ne({ "/zh/": { "title": "目录" }, "/": { "title": "目录" } }), O2 = usePageData(), g2 = useRouter(), T2 = useSiteData(), v2 = (i2) => {
    const u2 = i2["I"];
    return typeof u2 > "u" || u2;
  }, E2 = () => {
    const i2 = c2.base || O2.value.path.replace(/\/[^/]+$/, "/"), u2 = g2.getRoutes(), p2 = [];
    return u2.filter(({ meta: l2, path: e2 }) => {
      if (!_t(e2, i2) || e2 === i2)
        return false;
      if (i2 === "/") {
        const t2 = at(T2.value.locales).filter((n2) => n2 !== "/");
        if (e2 === "/404.html" || t2.some((n2) => _t(e2, n2)))
          return false;
      }
      return (Oe(e2, ".html") && !Oe(e2, "/index.html") || Oe(e2, "/")) && v2(l2);
    }).map(({ path: l2, meta: e2 }) => {
      const t2 = l2.substring(i2.length).split("/").length;
      return { title: e2["t"] || "", icon: e2["i"], base: l2.replace(/\/[^/]+\/?$/, "/"), order: e2["O"] || null, level: Oe(l2, "/") ? t2 - 1 : t2, path: l2 };
    }).filter(({ title: l2, level: e2 }) => typeof l2 == "string" && l2 && e2 <= c2.level).sort(({ title: l2, level: e2, path: t2, order: n2 }, { title: r2, level: o2, path: d2, order: s2 }) => e2 - o2 || (Oe(t2, "/index.html") ? -1 : Oe(d2, "/index.html") ? 1 : n2 === null ? s2 === null ? l2.localeCompare(r2) : s2 : s2 === null ? n2 : n2 > 0 ? s2 > 0 ? n2 - s2 : -1 : s2 < 0 ? n2 - s2 : 1)).forEach((l2) => {
      var e2;
      const { base: t2, level: n2 } = l2;
      switch (n2) {
        case 1:
          p2.push(l2);
          break;
        case 2: {
          const r2 = p2.find((o2) => o2.path === t2);
          r2 && (r2.children ?? (r2.children = [])).push(l2);
          break;
        }
        default: {
          const r2 = p2.find((o2) => o2.path === t2.replace(/\/[^/]+\/$/, "/"));
          if (r2) {
            const o2 = (e2 = r2.children) == null ? void 0 : e2.find((d2) => d2.path === t2);
            o2 && (o2.children ?? (o2.children = [])).push(l2);
          }
        }
      }
    }), p2;
  }, b2 = computed(() => E2());
  return () => h("div", { class: "auto-catalog-wrapper" }, [h("h2", { class: "main-title" }, f2.value.title), ...b2.value.map(({ children: i2 = [], icon: u2, path: p2, title: l2 }, e2) => [h("h3", { id: l2, class: ["child-title", { "has-children": i2.length }] }, [h("a", { href: `#${l2}`, class: "header-anchor" }, "#"), h(RouterLink, { class: "catalog-title", to: p2 }, () => [c2.index ? `${e2 + 1}.` : null, u2 && h$1.icon ? h$1.icon({ icon: u2 }) : null, l2 || "Unknown"])]), i2.length ? h("ul", { class: "child-catalog-wrapper" }, i2.map(({ children: t2 = [], icon: n2, path: r2, title: o2 }, d2) => h("li", { class: "child-catalog-item" }, [h("div", { class: ["sub-title", { "has-children": t2.length }] }, [h("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h(RouterLink, { class: "catalog-title", to: r2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}` : null, n2 && h$1.icon ? h$1.icon({ icon: n2 }) : null, o2 || "Unknown"])]), t2.length ? h("div", { class: "sub-catalog-wrapper" }, t2.map(({ icon: s2, path: A2, title: L2 }, $2) => h(RouterLink, { class: "sub-catalog-item", to: A2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}.${$2 + 1}` : null, s2 && h$1.icon ? h$1.icon({ icon: s2 }) : null, L2 || "Unknown"]))) : null]))) : null])]);
} }), K$1 = defineClientConfig({ enhance: ({ app: c2 }) => {
  Vt("AutoCatalog", c2) || c2.component("AutoCatalog", (h$1) => h(D, h$1, { icon: ({ icon: f2 }) => h(resolveComponent("HopeIcon"), { icon: f2 }) }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$41TYJ8LyIJ01Zy3kGp.ROeeTvpP/5Mvygt/IGZrXsiHlsBodjF5Pm"],"/zh/demo/encrypt.html":["$2a$10$kgLzVNXklRfc6mlNJIAl6.YpxEVLw6cuo6vkAa5NBJM73ubH4f5Ba"]}},"locales":{"/zh/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"}},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"fengjk","url":"https://github.com/fengjk12138"},"logo":"/mama.jpg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"demo/theme-docs/src","navbar":["/",{"text":"GPU服务器文档","icon":"creative","prefix":"/GPUdocs/","children":[{"text":"管理运维","icon":"puzzle-piece","children":[{"text":"主机的配置","icon":"creative","link":"deploy"},{"text":"容器配置","icon":"config","link":"deploy/container"}]},{"text":"快速上手","icon":"more","children":[{"text":"GPU服务器使用文档","icon":"more","link":"user"}]}]},{"text":"NAS文档","icon":"creative","prefix":"/NASdocs/","children":[{"text":"管理运维","icon":"puzzle-piece","children":[{"text":"服务器的选型与系统设置","icon":"creative","link":"deploy"},{"text":"管理员日常维护","icon":"config","link":"maintain"}]},{"text":"快速上手","icon":"more","children":[{"text":"NAS使用文档","icon":"more","link":"user"}]}]},{"text":"保留位 未来可期","icon":"note","link":"https://theme-hope.vuejs.press/zh/"}],"sidebar":{"/":[{"text":"炼丹炉系统Overview","icon":"info","link":"overview/"},{"text":"GPU服务器文档","icon":"page","prefix":"GPUdocs/"},{"text":"NAS文档","icon":"note","prefix":"NASdocs/","link":"NASdocs/","collapsible":true}]},"footer":"默认页脚","displayFooter":true}}}');
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const waline$1 = "";
const waline = "";
const e$1 = { "provider": "Waline", "dark": 'html[data-theme="dark"]' }, I$2 = { "/zh/": { "placeholder": "请留言。(填写邮箱可在被回复时收到邮件提醒)" }, "/": { "placeholder": "请留言。(填写邮箱可在被回复时收到邮件提醒)" } }, i$3 = !!e$1.serverURL;
import("./assets/waline-meta-651f1b6d.js");
var M$1 = defineComponent({ name: "WalineComment", setup() {
  const u2 = usePageData(), l2 = usePageFrontmatter(), p2 = usePageLang(), s2 = ne(I$2);
  let n2;
  const v2 = computed(() => {
    if (!i$3)
      return false;
    const r2 = e$1.comment !== false, t2 = l2.value.comment;
    return !!t2 || r2 !== false && t2 !== false;
  }), c2 = computed(() => {
    if (!i$3)
      return false;
    const r2 = e$1.pageview !== false, t2 = l2.value.pageview;
    return !!t2 || r2 !== false && t2 !== false;
  }), o2 = computed(() => withBase(u2.value.path)), d2 = computed(() => ({ lang: p2.value === "zh-CN" ? "zh-CN" : "en", locale: s2.value, dark: "html.dark", ...e$1, path: o2.value }));
  return onMounted(() => {
    watch(o2, () => {
      n2 == null || n2(), c2.value && nextTick().then(() => {
        setTimeout(() => {
          n2 = pageviewCount({ serverURL: e$1.serverURL, path: o2.value });
        }, e$1.delay || 800);
      });
    }, { immediate: true });
  }), () => v2.value ? h("div", { class: "waline-wrapper", id: "comment" }, i$3 ? h(defineAsyncComponent({ loader: async () => (await import("@waline/client/dist/component.mjs")).Waline, loadingComponent: vt }), d2.value) : []) : null;
} });
const i$2 = { "provider": "Waline", "dark": 'html[data-theme="dark"]' }.comment !== false, d = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const o2 = usePageFrontmatter(), m2 = computed(() => o2.value.comment || i$2 && o2.value.comment !== false);
  return () => h(M$1, { darkmode: e2.darkmode, style: { display: m2.value ? "block" : "none" } });
} });
var l$2 = defineClientConfig({ enhance: ({ app: e2 }) => {
  e2.component("CommentService", d);
} });
const button = "";
const M = 800, u = 2e3, S$3 = { "/zh/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" }, "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, n = false, P = ['.theme-hope-content div[class*="language-"] pre'], m$1 = true;
const l$1 = /* @__PURE__ */ new Map(), T$2 = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = ne(S$3), g2 = usePageData(), i2 = ee();
  const E2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p2 = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P.forEach((e2) => {
        document.querySelectorAll(e2).forEach(E2);
      }), o2();
    }, M);
  })), d2 = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l$1.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l$1.delete(t2);
      }, u);
      if (l$1.set(t2, c2), n)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m$1) && p2(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d2(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d2(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m$1) && p2();
    });
  });
};
var Y$1 = defineClientConfig({ setup: () => {
  T$2();
} });
const chart = "";
const parseChartConfig = (config, type) => {
  if (type === "json")
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const r2 = ref(), o2 = ref(), t2 = ref(true);
  return onMounted(async () => {
    const [{ default: n2 }] = await Promise.all([import("chart.js/auto"), new Promise((s2) => setTimeout(s2, 800))]);
    n2.defaults.maintainAspectRatio = false;
    const a2 = parseChartConfig(He(e2.config), e2.type), i2 = o2.value.getContext("2d");
    new n2(i2, a2), t2.value = false;
  }), () => [e2.title ? h("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, t2.value ? h(vt, { class: "chart-loading", height: 192 }) : null, h("div", { ref: r2, class: "chart-wrapper", id: e2.id, style: { display: t2.value ? "none" : "block" } }, h("canvas", { ref: o2, height: 400 }))];
} });
const codeTabs = "";
const o$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$2 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(t2, { slots: v2 }) {
  const l2 = ref(t2.active), u2 = ref([]), c2 = () => {
    if (t2.tabId) {
      const { title: e2, id: a2 = e2 } = t2.data[l2.value];
      o$2.value[t2.tabId] = a2;
    }
  }, b2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (e2, a2) => {
    if (e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), b2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), f2()), t2.tabId) {
      const { title: d2, id: i2 = d2 } = t2.data[l2.value];
      o$2.value[t2.tabId] = i2;
    }
  }, m2 = () => {
    if (t2.tabId) {
      const e2 = t2.data.findIndex(({ title: a2, id: d2 = a2 }) => o$2.value[t2.tabId] === d2);
      if (e2 !== -1)
        return e2;
    }
    return t2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => o$2.value[t2.tabId], (e2, a2) => {
      if (t2.tabId && e2 !== a2) {
        const d2 = t2.data.findIndex(({ title: i2, id: r2 = i2 }) => r2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => t2.data.length ? h("div", { class: "code-tabs" }, [h("div", { class: "code-tabs-nav", role: "tablist" }, t2.data.map(({ title: e2 }, a2) => {
    const d2 = a2 === l2.value;
    return h("button", { ref: (i2) => {
      i2 && (u2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${t2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p2(i2, a2) }, e2);
  })), t2.data.map(({ title: e2, id: a2 = e2 }, d2) => {
    var i2;
    const r2 = d2 === l2.value;
    return h("div", { class: ["code-tab", { active: r2 }], id: `codetab-${t2.id}-${d2}`, role: "tabpanel", "aria-expanded": r2 }, (i2 = v2[`tab${d2}`]) == null ? void 0 : i2.call(v2, { title: e2, value: a2, isActive: r2 }));
  })]) : null;
} });
const codeGroup = "";
const c$1 = ({ active: p2 = false }, { slots: u2 }) => {
  var e2;
  return h("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c$1.displayName = "CodeGroupItem";
const y$1 = defineComponent({ name: "CodeGroup", setup(p2, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h("div", { class: "code-group" }, [h("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h("button", { ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m2(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$2 = "";
const q$1 = () => h(G$1, { name: "back" }, () => h("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$1 = () => h(G$1, { name: "home" }, () => h("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$1 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$3 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', l = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
const codeDemo = "";
const L = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, E = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, B = (e2, s2, t2) => {
  const n2 = document.createElement(e2);
  return isPlainObject(s2) && at(s2).forEach((a2) => {
    if (a2.indexOf("data"))
      n2[a2] = s2[a2];
    else {
      const o2 = a2.replace("data", "");
      n2.dataset[o2] = s2[a2];
    }
  }), t2 && t2.forEach((a2) => {
    n2.appendChild(a2);
  }), n2;
}, w = (e2) => ({ ...L, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L.cssLib || [], ...e2.cssLib || []])) }), m = (e2, s2) => {
  if (e2[s2] !== void 0)
    return e2[s2];
  const t2 = new Promise((n2) => {
    var a2;
    const o2 = document.createElement("script");
    o2.src = s2, (a2 = document.querySelector("body")) == null || a2.appendChild(o2), o2.onload = () => {
      n2();
    };
  });
  return e2[s2] = t2, t2;
}, k = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = B("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, V = (e2, s2, t2) => {
  const n2 = t2.getScript();
  if (n2 && Array.from(s2.childNodes).every((a2) => a2.nodeName !== "SCRIPT")) {
    const a2 = document.createElement("script");
    a2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .code-demo-container').shadowRoot;
${n2}}`)), s2.appendChild(a2);
  }
}, H$1 = (e2) => {
  const s2 = at(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((n2) => {
    const a2 = s2.filter((o2) => E[n2].types.includes(o2));
    if (a2.length) {
      const o2 = a2[0];
      t2[n2] = [e2[o2].replace(/^\n|\n$/g, ""), E[n2].map[o2] || o2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, $ = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), x$1 = (e2) => `<div id="app">
${$(e2)}
</div>`, I$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, J = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), O$1 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, q = (e2, s2) => {
  const t2 = w(s2), n2 = e2.js[0] || "";
  return { ...t2, html: $(e2.html[0] || ""), js: n2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var a2;
    return t2.useBabel ? ((a2 = window.Babel.transform(n2, { presets: ["es2015"] })) == null ? void 0 : a2.code) || "" : n2;
  } };
}, F$1 = (e2, s2) => {
  const t2 = w(s2), n2 = e2.html[0] || "", a2 = /<template>([\s\S]+)<\/template>/u.exec(n2), o2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(n2), d2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(n2), u2 = a2 ? a2[1].replace(/^\n|\n$/g, "") : "", [i2 = "", c2 = ""] = o2 ? [o2[4].replace(/^\n|\n$/g, ""), o2[3]] : [], [l2 = "", h2 = ""] = d2 ? [d2[4].replace(/^\n|\n$/g, ""), d2[3]] : [], f2 = c2 === "" && (h2 === "" || h2 === "css");
  return { ...t2, html: x$1(u2), js: J(i2), css: l2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var y2, p2;
    const g2 = s2.useBabel ? ((p2 = (y2 = window.Babel) == null ? void 0 : y2.transform(i2, { presets: ["es2015"] })) == null ? void 0 : p2.code) || "" : i2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${O$1(g2)};appOptions.template=\`${u2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, G = (e2, s2) => {
  const t2 = w(s2);
  return { ...t2, html: x$1(""), js: I$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var n2, a2;
    const o2 = ((a2 = (n2 = window.Babel) == null ? void 0 : n2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : a2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${O$1(o2)}))`;
  } };
}, v$2 = {}, Y = (e2) => Promise.all([m(v$2, e2.babel), m(v$2, e2.react), m(v$2, e2.reactDOM)]), K = (e2) => {
  const s2 = [m(v$2, e2.vue)];
  return e2.useBabel && s2.push(m(v$2, e2.babel)), Promise.all(s2);
}, U = (e2) => e2.useBabel ? m(v$2, e2.babel) : Promise.resolve();
var W = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: s2 }) {
  const [t2, n2] = useToggle(false), a2 = ref(), o2 = ref(), d2 = ref("0"), u2 = ref(false), i2 = computed(() => JSON.parse(e2.config ? He(e2.config) : "{}")), c2 = computed(() => {
    const p2 = JSON.parse(He(e2.code));
    return H$1(p2);
  }), l2 = computed(() => e2.type === "react" ? G(c2.value, i2.value) : e2.type === "vue" ? F$1(c2.value, i2.value) : q(c2.value, i2.value)), h$1 = computed(() => l2.value.isLegal), f2 = (p2 = false) => {
    const g2 = a2.value.attachShadow({ mode: "open" }), S2 = document.createElement("div");
    S2.classList.add("code-demo-app"), g2.appendChild(S2), h$1.value ? (p2 && (S2.innerHTML = l2.value.html), k(g2, l2.value), V(e2.id, g2, l2.value), d2.value = "0") : d2.value = "auto", u2.value = true;
  }, y2 = () => {
    switch (e2.type) {
      case "react":
        return Y(l2.value).then(() => f2());
      case "vue":
        return K(l2.value).then(() => f2());
      default:
        return U(l2.value).then(() => f2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      y2();
    }, 800);
  }), () => {
    var p2;
    return h("div", { class: "code-demo-wrapper", id: e2.id }, [h("div", { class: "code-demo-header" }, [l2.value.isLegal ? h("button", { class: ["toggle-button", t2.value ? "down" : "end"], onClick: () => {
      d2.value = t2.value ? "0" : `${o2.value.clientHeight + 13.8}px`, n2();
    } }) : null, e2.title ? h("span", { class: "title" }, decodeURIComponent(e2.title)) : null, l2.value.isLegal && l2.value.jsfiddle !== false ? h("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h("input", { type: "hidden", name: "html", value: l2.value.html }), h("input", { type: "hidden", name: "js", value: l2.value.js }), h("input", { type: "hidden", name: "css", value: l2.value.css }), h("input", { type: "hidden", name: "wrap", value: "1" }), h("input", { type: "hidden", name: "panel_js", value: "3" }), h("input", { type: "hidden", name: "resources", value: [...l2.value.cssLib, ...l2.value.jsLib].join(",") }), h("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$3, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !l2.value.isLegal || l2.value.codepen !== false ? h("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h("input", { type: "hidden", name: "data", value: JSON.stringify({ html: l2.value.html, js: l2.value.js, css: l2.value.css, js_external: l2.value.jsLib.join(";"), css_external: l2.value.cssLib.join(";"), layout: l2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : l2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: l2.value.codepenEditors }) }), h("button", { type: "submit", innerHTML: o$1, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), u2.value ? null : h(vt, { class: "code-demo-loading" }), h("div", { ref: a2, class: "code-demo-container", style: { display: h$1.value && u2.value ? "block" : "none" } }), h("div", { class: "code-demo-code-wrapper", style: { height: d2.value } }, h("div", { ref: o2, class: "code-demo-codes" }, (p2 = s2.default) == null ? void 0 : p2.call(s2)))]);
  };
} });
const echarts = "";
const parseEChartsConfig = (config, type) => {
  if (type === "js") {
    const exports = {}, module = { exports };
    return eval(config), module.exports;
  }
  return JSON.parse(config);
};
var ECharts = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(t2) {
  const o2 = ref();
  let e2;
  const r2 = ref(true);
  return useEventListener("resize", useDebounceFn(() => e2 == null ? void 0 : e2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((n2) => setTimeout(n2, 800))]).then(([n2]) => {
      const i2 = parseEChartsConfig(He(t2.config), t2.type);
      e2 = n2.init(o2.value), e2.setOption(i2), r2.value = false;
    });
  }), onUnmounted(() => {
    e2 == null || e2.dispose();
  }), () => [t2.title ? h("div", { class: "echarts-title" }, decodeURIComponent(t2.title)) : null, h("div", { class: "echarts-wrapper" }, [h("div", { ref: o2, class: "echarts-container", id: t2.id }), r2.value ? h(vt, { class: "echarts-loading", height: 360 }) : null])];
} });
const figure = "";
const flowchart = "";
var f = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, b$1 = { ...f, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, y = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, s = { ant: F, vue: y, pie: b$1 }, g = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(l2) {
  let o2 = null;
  const p2 = ref(), n2 = ref(true), t2 = ref(1), r2 = computed(() => s[l2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${l2.preset}`), s.vue)), c2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(He(l2.code)), t2.value = c2(window.innerWidth), n2.value = false, o2.draw(l2.id, { ...r2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = c2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(l2.id, { ...r2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h(vt, { class: "flowchart-loading", height: 192 }) : null, h("div", { ref: p2, class: ["flowchart-wrapper", l2.preset], id: l2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const b = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var T$1 = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const i2 = ref(), a2 = ref(""), t2 = ref(false), n2 = computed(() => He(e2.code)), f2 = async () => Promise.all([import("mermaid"), new Promise((o2) => setTimeout(o2, 800))]).then(async ([{ default: o2 }]) => {
    const r2 = { useMaxWidth: false };
    o2.initialize({ theme: "base", themeVariables: b(t2.value), flowchart: r2, sequence: r2, journey: r2, gantt: r2, er: r2, pie: r2, ...{}, startOnLoad: false }), a2.value = (await o2.render(e2.id, n2.value)).svg;
  });
  return onMounted(() => {
    const o2 = document.documentElement, r2 = () => o2.classList.contains("dark") || o2.getAttribute("data-theme") === "dark";
    t2.value = r2(), f2(), useMutationObserver(o2, () => {
      t2.value = r2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(t2, () => f2());
  }), () => h("div", { ref: i2, class: "mermaid-wrapper" }, a2.value ? h("div", { class: "mermaid-content", innerHTML: a2.value }) : h(vt, { class: "mermaid-loading", height: 96 }));
} });
const o = () => import("reveal.js/plugin/highlight/highlight.esm.js"), t = () => import("reveal.js/plugin/markdown/markdown.esm.js"), e = () => import("reveal.js/plugin/math/math.esm.js"), r = () => import("reveal.js/plugin/notes/notes.esm.js"), a = () => import("reveal.js/dist/reveal.esm.js"), i$1 = () => import("reveal.js/plugin/search/search.esm.js"), c = () => import("reveal.js/plugin/zoom/zoom.esm.js");
const useReveal = () => [a(), t(), o(), e(), i$1(), r(), c()];
const index$1 = "";
const leagueGothic = "";
const sourceSansPro = "";
var S$1 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const t2 = usePageFrontmatter(), s2 = ref(""), u2 = ref(true), d2 = ref();
  let i2 = null;
  const m2 = async (e2) => {
    const p2 = [new Promise((o2) => setTimeout(o2, 800)), ...useReveal()], [, c2, ...v2] = await Promise.all(p2), n2 = new c2.default(e2, { plugins: v2.map(({ default: o2 }) => o2) });
    return await n2.initialize({ backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...t2.value.reveal || {}, embedded: t2.value.layout !== "Slide" }), n2.configure({ backgroundTransition: "slide" }), n2;
  };
  return onMounted(async () => {
    const e2 = d2.value;
    e2 && (s2.value = He(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), i2 = await m2(e2), u2.value = false);
  }), onUnmounted(() => {
    i2 == null || i2.destroy();
  }), () => h("div", { class: "presentation-wrapper" }, [h("div", { ref: d2, class: ["reveal", "reveal-viewport"] }, h("div", { class: "slides", innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s2.value}<\/script></section>` })), u2.value ? h(vt, { class: "reveal-loading", height: 400 }) : null]);
} });
const playground = "";
var i = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(r2) {
  return () => [h("div", { class: "playground-wrapper" }, [h("div", { class: "title-wrapper" }, [r2.title ? h("div", { class: "title" }, decodeURIComponent(r2.title)) : null, h("div", { class: "actions" }, [h("a", { class: "action", href: decodeURIComponent(r2.link), target: "_blank", innerHTML: l })])]), h("div", { class: "playground-container" }, h("iframe", { src: decodeURIComponent(r2.link) }))])];
} });
const tabs = "";
const v$1 = useStorage("VUEPRESS_TAB_STORE", {});
var S = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: o2 }) {
  const l2 = ref(e2.active), u2 = ref([]), s2 = () => {
    if (e2.tabId) {
      const { title: a2, id: t2 = a2 } = e2.data[l2.value];
      v$1.value[e2.tabId] = t2;
    }
  }, b2 = (a2 = l2.value) => {
    l2.value = a2 < u2.value.length - 1 ? a2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (a2 = l2.value) => {
    l2.value = a2 > 0 ? a2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (a2, t2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), l2.value = t2) : a2.key === "ArrowRight" ? (a2.preventDefault(), b2()) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2()), s2();
  }, m2 = () => {
    if (e2.tabId) {
      const a2 = e2.data.findIndex(({ title: t2, id: i2 = t2 }) => v$1.value[e2.tabId] === i2);
      if (a2 !== -1)
        return a2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => v$1.value[e2.tabId], (a2, t2) => {
      if (e2.tabId && a2 !== t2) {
        const i2 = e2.data.findIndex(({ title: r2, id: d2 = r2 }) => d2 === a2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => e2.data.length ? h("div", { class: "tab-list" }, [h("div", { class: "tab-list-nav", role: "tablist" }, e2.data.map(({ title: a2 }, t2) => {
    const i2 = t2 === l2.value;
    return h("button", { ref: (r2) => {
      r2 && (u2.value[t2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${e2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (r2) => p2(r2, t2) }, a2);
  })), e2.data.map(({ title: a2, id: t2 = a2 }, i2) => {
    var r2;
    const d2 = i2 === l2.value;
    return h("div", { class: ["tab-item", { active: d2 }], id: `tab-${e2.id}-${i2}`, role: "tabpanel", "aria-expanded": d2 }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: a2, value: t2, isActive: d2 }));
  })]) : null;
} });
const tasklist = "";
const katex_min = "";
const katex = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", S$2);
    if (!Vt("CodeGroup", app))
      app.component("CodeGroup", y$1);
    if (!Vt("CodeGroupItem", app))
      app.component("CodeGroupItem", c$1);
    app.component("CodeDemo", W);
    app.component("ECharts", ECharts);
    app.component("FlowChart", g);
    app.component("Mermaid", T$1);
    app.component("Presentation", S$1);
    app.component("Playground", i);
    app.component("Tabs", S);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-409d28b3.js")));
  }
});
const photoswipe = "";
const photoSwipe = "";
const T = ".theme-hope-content :not(a) > img:not([no-view])", C = { "/zh/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" }, "/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" } }, O = 800, x = {}, A = (e2) => isString(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((t2) => Array.from(document.querySelectorAll(t2))).flat(), p = (e2) => new Promise((t2, n2) => {
  e2.complete ? t2({ src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt }) : (e2.onload = () => t2(p(e2)), e2.onerror = (s2) => n2(s2));
}), H = () => {
  const { isSupported: e2, toggle: t2 } = useFullscreen(), n2 = ne(C), s2 = usePageData(), c2 = () => Promise.all([import("photoswipe"), nextTick().then(() => new Promise((l2) => setTimeout(l2, O)).then(() => A(T)))]).then(([{ default: l2 }, m2]) => {
    const h2 = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
    m2.forEach((d2, v2) => {
      const u2 = () => {
        const a2 = Array(m2.length).fill({ html: h2 }), o2 = new l2({ dataSource: a2, preloaderDelay: 0, ...n2.value, ...x, index: v2 });
        o2.on("uiRegister", () => {
          e2 && o2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
            t2();
          } }), o2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, i2) => {
            r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), i2.on("change", () => {
              r2.href = i2.currSlide.data.src;
            });
          } });
        }), o2.init(), m2.forEach((r2, i2) => {
          p(r2).then((g2) => {
            a2.splice(i2, 1, g2), o2.refreshSlideContent(i2);
          });
        });
      };
      d2.style.cursor = "zoom-in", d2.addEventListener("click", () => {
        u2();
      }), d2.addEventListener("keypress", ({ key: a2 }) => {
        a2 === "Enter" && u2();
      });
    });
  });
  onMounted(() => {
    c2(), watch(() => s2.value.path, () => c2());
  });
};
var I = defineClientConfig({ setup: () => {
  H();
} });
const HopeIcon = (props) => {
  const { icon = "" } = props;
  return isLinkHttp(icon) ? h("img", { class: "icon", src: icon, "no-view": "" }) : _e(icon) ? h("img", { class: "icon", src: withBase(icon), "no-view": "" }) : h(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
const useAutoLink = (item, preferFull = false) => {
  const router = useRouter();
  const { fullPath, meta, name } = Ht(router, encodeURI(item));
  return {
    text: !preferFull && meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] ? meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] : meta[
      "t"
      /* ArticleInfoType.title */
    ] || item,
    link: name === "404" ? item : fullPath,
    ...meta[
      "i"
      /* ArticleInfoType.icon */
    ] ? { icon: meta[
      "i"
      /* ArticleInfoType.icon */
    ] } : {}
  };
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const useWindowSize = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const isWide = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
    isWide.value = window.innerWidth >= (themeData2.value.wideBreakPoint || 1440);
  };
  onMounted(() => {
    windowSizeHandler();
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
  });
  return {
    isMobile,
    isWide
  };
};
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (_e(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkHttp(url) || isLinkMailto(url)) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
  };
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return De(author);
    if (author === false)
      return [];
    return De(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => xe(frontmatter.value.category).map((name) => ({
    name,
    // this is a hack
    path: ""
  })));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => Ie(frontmatter.value.tag).map((name) => ({
    name,
    // this is a hack
    path: ""
  })));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return computed(() => {
    const { date } = frontmatter.value;
    if (date)
      return ot(date);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return ot(new Date(createdTime));
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime || null,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const darkModeSymbol = Symbol.for("darkMode");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode)
    throw new Error("useDarkmode() is called without provider.");
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const config2 = computed(() => themeData2.value.darkmode || "switch");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // force darkmode
      darkmode === "enable" ? true : (
        // auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { isDarkmode } = useDarkmode();
  const updateDOM = (isDark = isDarkmode.value) => document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  onMounted(() => {
    watch(isDarkmode, updateDOM, { immediate: true });
  });
};
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const siteData2 = useSiteData();
    const config2 = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config2.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(config2.value.link) || isLinkTel(config2.value.link));
    const linkTarget = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = at(siteData2.value.locales);
      return localeKeys.length ? (
        // check all the locales
        localeKeys.every((key) => key !== config2.value.link)
      ) : (
        // check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : (
      // if this link is active in subpath
      !shouldBeActiveInSubpath.value ? route.path === config2.value.link : _t(route.path, config2.value.link)
    ) : false);
    return () => {
      var _a2, _b2, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? h(RouterLink, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a3, _b3, _c2;
        return ((_a3 = slots["default"]) == null ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots["before"]) == null ? void 0 : _b3.call(slots)) || h(HopeIcon, { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : h("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
        ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || h(HopeIcon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h(ExternalLinkIcon),
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (Ce(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && Ce(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => config2.link ? (
  // if the item has link, render it as `<AutoLink>`
  h(AutoLink, {
    ...props,
    config: config2
  })
) : (
  // if the item only has text, render it as `<p>`
  h("p", props, [h(HopeIcon, { icon: config2.icon }), config2.text])
);
const renderChildren$1 = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = { "/zh/": ["", { "text": "主要功能与配置演示", "prefix": "demo/", "collapsible": true, "icon": "discover", "children": ["page", "markdown", "disable", "encrypt"] }, "slides", { "text": "指南", "prefix": "guide/", "collapsible": true, "icon": "creative", "children": ["", { "text": "Bar 功能", "prefix": "bar/", "collapsible": true, "icon": "creative", "children": ["", "baz"] }, { "text": "Foo 功能", "prefix": "foo/", "collapsible": true, "icon": "config", "children": ["", "ray"] }] }] };
const resolvePrefix = (prefix = "", path = "") => _e(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a2;
    const childItem = isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: (
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        childItem.link === page2.value.path ? headersToSidebarItemChildren(
          // skip h1 header
          ((_a2 = page2.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers,
          headerDepth
        ) : []
      )
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const page2 = usePageData();
  const sidebarRoutes = at(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes)
    if (_t(decodeURI(page2.value.path), base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : matchedConfig, headerDepth, base) : [];
    }
  console.warn(`${page2.value.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = () => {
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure";
  const headerDepth = frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");
  return sidebarItems;
};
const footer = "";
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : isString(footer2) ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright © ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h("footer", { class: "footer-wrapper" }, [
      content.value ? h("div", { class: "footer", innerHTML: content.value }) : null,
      copyright.value ? h("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const dropdownLink = "";
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots["title"]) == null ? void 0 : _a2.call(slots)) || h("span", { class: "title" }, [
            h(HopeIcon, { icon: config2.value.icon }),
            props.config.text
          ]),
          h("span", { class: "arrow" }),
          h("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return h("li", { class: "dropdown-item" }, "children" in child ? [
              h("h4", { class: "dropdown-subtitle" }, child.link ? h(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // no children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h("span", child.text)),
              h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h("li", { class: "dropdown-subitem" }, h(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const I18nIcon = () => h(G$1, { name: "i18n" }, () => [
  h("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = at(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, fullPath } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2, _c;
        const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
        const targetLang = targetSiteLocale.lang || "";
        const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = // try to link to the corresponding page of current page
          router.getRoutes().some((item) => item.path === targetLocalePage) ? (
            // try to keep current hash across languages
            fullPath.replace(path, targetLocalePage)
          ) : (
            // or fallback to homepage
            targetThemeLocale.home ?? targetLocalePath
          );
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink2 = computed(() => repo.value ? Le(repo.value) : null);
  const repoType = computed(() => repo.value ? Ne(repo.value) : null);
  const repoLabel = computed(() => repoLink2.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
const LanguageDropdown = defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h("div", { class: "nav-item" }, h(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const navScreenDropdown = "";
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h("span", { class: "title" }, [
          h(HopeIcon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => h("li", { class: "dropdown-item" }, "children" in child ? [
        h("h4", { class: "dropdown-subtitle" }, child.link ? h(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h("span", child.text)),
        h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h("li", { class: "dropdown-subitem" }, h(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const navScreenLinks = "";
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h("div", { class: "navbar-links-item" }, "children" in config2 ? h(NavScreenDropdown, { config: config2 }) : h(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h(G$1, { name: "dark" }, () => h("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h(G$1, { name: "light" }, () => h("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h(G$1, { name: "auto" }, () => h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h(G$1, { name: "enter-fullscreen" }, () => h("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h(G$1, { name: "cancel-fullscreen" }, () => h("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h(G$1, { name: "outlook" }, () => [
  h("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const appearanceSwitch = "";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config: config2, status } = useDarkmode();
    const toggleDarkMode = () => {
      if (config2.value === "switch")
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h("div", { class: "appearance-wrapper" }, [
      h("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h(AppearanceSwitch)
    ]) : null;
  }
});
const themeColorPicker = "";
const ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = at(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h("ul", { id: "theme-color-picker" }, [
      h("li", h("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Tt(props.themeColor).map(([color, value]) => h("li", h("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h("div", { class: "theme-color-wrapper" }, [
      h("label", { class: "theme-color-title", for: "theme-color-picker" }, locale.value),
      h(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
const toggleFullScreenButton = "";
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h("div", { class: "full-screen-wrapper" }, [
      h("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h(CancelFullScreenIcon) : h(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h(ClientOnly, () => [
      enableThemeColor.value ? h(ThemeColor) : null,
      h(AppearanceMode),
      enableFullScreen.value ? h(ToggleFullScreenButton) : null
    ]);
  }
});
const navScreen = "";
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const page2 = usePageData();
    const { isMobile } = useWindowSize();
    const body = ref();
    const isLocked = useScrollLock(body);
    onMounted(() => {
      body.value = document.body;
      watch(isMobile, (value) => {
        if (!value && props.show) {
          isLocked.value = false;
          emit("close");
        }
      });
      watch(() => page2.value.path, () => {
        isLocked.value = false;
        emit("close");
      });
    });
    onUnmounted(() => {
      isLocked.value = false;
    });
    return () => h(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.show ? h("div", { id: "nav-screen" }, h("div", { class: "container" }, [
        (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
        h(NavScreenLinks),
        h("div", { class: "outlook-wrapper" }, h(OutlookSettings)),
        (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const navbarBrand = "";
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h(RouterLink, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h("span", {
        class: [
          "site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const navbarLinks = "";
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => h("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? h(DropdownLink, { config: config2 }) : h(AutoLink, { config: config2 })))
    ]) : null;
  }
});
const repoLink = "";
const RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon: bt, GiteeIcon: yt, GitHubIcon: gt, GitlabIcon: $t, SourceIcon: wt },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h("div", { class: "nav-item" }, h("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => h("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h("span", { class: "button-container" }, [
  h("span", { class: "button-top" }),
  h("span", { class: "button-middle" }),
  h("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const toggleSidebarButton = "";
const ToggleSidebarButton = (_, { emit }) => h("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const outlookButton = "";
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const page2 = usePageData();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor.value ? h(
      "div",
      { class: "nav-item hide-in-mobile" },
      // only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor.value ? h(AppearanceSwitch) : (
        // only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor.value ? h(ToggleFullScreenButton) : h("button", {
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          ariaHidden: true
        }, [
          h(OutlookIcon),
          h("div", { class: "outlook-dropdown" }, h(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const navbar = "";
const Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggleSidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a2, _b2, _c, _d, _e2, _f;
      const map = {
        Brand: h(NavbarBrand),
        Language: h(LanguageDropdown),
        Links: h(NavbarLinks),
        Repo: h(RepoLink),
        Outlook: h(OutlookButton),
        Search: Vt("Docsearch") ? h(resolveComponent("Docsearch")) : Vt("SearchBox") ? h(resolveComponent("SearchBox")) : Vt("SearchBox") ? h(resolveComponent("SearchBox")) : null
      };
      return [
        h("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ],
          id: "navbar"
        }, [
          h("div", { class: "navbar-start" }, [
            // @ts-ignore
            h(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots["startBefore"]) == null ? void 0 : _a2.call(slots),
            ...(navbarLayout.value.start || []).map((item) => map[item]),
            (_b2 = slots["startAfter"]) == null ? void 0 : _b2.call(slots)
          ]),
          h("div", { class: "navbar-center" }, [
            (_c = slots["centerBefore"]) == null ? void 0 : _c.call(slots),
            ...(navbarLayout.value.center || []).map((item) => map[item]),
            (_d = slots["centerAfter"]) == null ? void 0 : _d.call(slots)
          ]),
          h("div", { class: "navbar-end" }, [
            (_e2 = slots["endBefore"]) == null ? void 0 : _e2.call(slots),
            ...(navbarLayout.value.end || []).map((item) => map[item]),
            (_f = slots["endAfter"]) == null ? void 0 : _f.call(slots),
            h(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["screenTop"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["screenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const sidebarChild = "";
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
const sidebarGroup = "";
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h("section", { class: "sidebar-group" }, [
        h(collapsible ? "button" : "p", {
          class: [
            "sidebar-heading",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // icon
          h(HopeIcon, { icon }),
          // title
          link ? h(RouterLink, { to: link, class: "title" }, () => text) : h("span", { class: "title" }, text),
          // arrow
          collapsible ? h("span", { class: ["arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const sidebarLinks = "";
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => route.path, () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true, flush: "post" });
    return () => h("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => h("li", config2.type === "group" ? h(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h(SidebarChild, { config: config2 }))));
  }
});
const sidebar = "";
const Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = ref();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a2, _b2, _c;
      return h("aside", {
        class: [
          "sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        id: "sidebar",
        ref: sidebar2
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || h(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const common = "";
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isWide } = useWindowSize();
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
    const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
    const sidebarItems = useSidebarItems();
    const body = ref();
    const isLocked = useScrollLock(body);
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      )
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
    };
    const enableToc = computed(() => frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (distance <= 58 || distance < lastDistance)
        hideNavbar.value = false;
      else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value)
        hideNavbar.value = true;
      lastDistance = distance;
    }, 300, true));
    watch(isMobileSidebarOpen, (value) => {
      isLocked.value = value;
    });
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      body.value = document.body;
      const unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      onUnmounted(() => {
        unregisterRouterHook();
      });
    });
    return () => h(Vt("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : Rt, () => {
      var _a2;
      return h("div", {
        class: [
          "theme-container",
          // classes
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-collapsed": !isMobile.value && !isWide.value && isDesktopSidebarCollapsed.value,
            "sidebar-open": isMobile.value && isMobileSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, [
        // navbar
        enableNavbar.value ? h(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
          startBefore: () => {
            var _a3;
            return (_a3 = slots["navbarStartBefore"]) == null ? void 0 : _a3.call(slots);
          },
          startAfter: () => {
            var _a3;
            return (_a3 = slots["navbarStartAfter"]) == null ? void 0 : _a3.call(slots);
          },
          centerBefore: () => {
            var _a3;
            return (_a3 = slots["navbarCenterBefore"]) == null ? void 0 : _a3.call(slots);
          },
          centerAfter: () => {
            var _a3;
            return (_a3 = slots["navbarCenterAfter"]) == null ? void 0 : _a3.call(slots);
          },
          endBefore: () => {
            var _a3;
            return (_a3 = slots["navbarEndBefore"]) == null ? void 0 : _a3.call(slots);
          },
          endAfter: () => {
            var _a3;
            return (_a3 = slots["navbarEndAfter"]) == null ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots["navScreenTop"]) == null ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots["navScreenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        // sidebar mask
        h(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        // toggle sidebar button
        h(Transition, { name: "fade" }, () => isMobile.value ? null : h("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "end" : "start"
          ]
        }))),
        // sidebar
        h(Sidebar, {}, {
          ...slots["sidebar"] ? {
            default: () => {
              var _a3;
              return (_a3 = slots["sidebar"]) == null ? void 0 : _a3.call(slots);
            }
          } : {},
          top: () => {
            var _a3;
            return (_a3 = slots["sidebarTop"]) == null ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots["sidebarBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }),
        (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots),
        h(PageFooter)
      ]);
    });
  }
});
const featurePanel = "";
const FeaturePanel = defineComponent({
  name: "FeaturePanel",
  props: {
    /**
     * Feature config
     */
    items: {
      type: Object,
      default: () => []
    },
    /**
     * Feature header
     */
    header: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => h("div", { class: "feature-panel" }, [
      props.header ? h("h2", { class: "feature-header" }, props.header) : null,
      props.items.length ? h("div", { class: "feature-wrapper" }, props.items.map((feature) => {
        const children = [
          h("h3", [
            h(HopeIcon, { icon: feature.icon }),
            h("span", { innerHTML: feature.title })
          ]),
          h("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h("a", {
          class: "feature-item link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h(RouterLink, {
          class: "feature-item link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h("div", { class: "feature-item" }, children);
      })) : null
    ]);
  }
});
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a2;
        return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
      }
    );
  }
});
const heroInfo = "";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2;
      return h("header", { class: "hero-info-wrapper" }, [
        ((_a2 = slots["heroImage"]) == null ? void 0 : _a2.call(slots)) || h(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? h("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b2 = slots["heroInfo"]) == null ? void 0 : _b2.call(slots)) || h("div", { class: "hero-info" }, [
          heroText.value ? h(DropTransition, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h(DropTransition, { appear: true, delay: 0.08 }, () => h("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h(DropTransition, { appear: true, delay: 0.12 }, () => h("p", { class: "actions" }, actions.value.map((action) => h(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            noExternalLinkIcon: true
          })))) : null
        ])
      ]);
    };
  }
});
const MarkdownContent = ({ custom }) => h(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const homePage = "";
const HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      if (isArray(features2))
        return features2.some((item) => !("items" in item)) ? [{ items: features2 }] : features2;
      return [];
    });
    return () => {
      var _a2, _b2, _c;
      return h("main", {
        class: ["home project", { pure: pure.value }],
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h(HeroInfo),
        features.value.map(({ header = "", items }, index2) => h(DropTransition, { appear: true, delay: 0.16 + index2 * 0.08 }, () => h(FeaturePanel, { header, items }))),
        (_b2 = slots["center"]) == null ? void 0 : _b2.call(slots),
        h(DropTransition, { appear: true, delay: 0.16 + features.value.length * 0.08 }, () => h(MarkdownContent)),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (path, routeLocale) => {
  const routePaths = path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const breadcrumb = "";
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter();
    const page2 = usePageData();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = ref([]);
    const enable = computed(() => (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1);
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(page2.value.path, routeLocale.value).map((link) => {
        const route = routes.find((route2) => route2.path === link);
        if (route) {
          const { meta, path } = Ht(router, route.path);
          const title = meta[
            "s"
            /* ArticleInfoType.shortTitle */
          ] || meta[
            "t"
            /* ArticleInfoType.title */
          ];
          if (title)
            return {
              title,
              icon: meta[
                "i"
                /* ArticleInfoType.icon */
              ],
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      getBreadCrumbConfig();
      watch(() => page2.value.path, getBreadCrumbConfig);
    });
    return () => h("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => h("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h(RouterLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // icon
        iconEnable.value ? h(HopeIcon, { icon: item.icon }) : null,
        // text
        h("span", { property: "name" }, item.title || "Unknown")
      ]),
      // meta
      h("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
const pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const page2 = usePageData();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h("nav", { class: "page-nav" }, [
      prevNavLink.value ? h(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h("div", { class: "hint" }, [
            h("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h("div", { class: "link" }, [
            h(HopeIcon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h("span", { class: "arrow end" })
          ]),
          h("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h(HopeIcon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h(G$1, { name: "author" }, () => h("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h(G$1, { name: "calendar" }, () => h("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon = () => h(G$1, { name: "category" }, () => h("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const EyeIcon = () => h(G$1, { name: "eye" }, () => h("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h(G$1, { name: "fire" }, () => h("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h(G$1, { name: "print" }, () => h("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon = () => h(G$1, { name: "tag" }, () => h("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimerIcon = () => h(G$1, { name: "timer" }, () => h("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h(G$1, { name: "word" }, () => [
  h("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/zh/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" }, "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = Ne(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page2.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page2.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page2.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const authorInfo = "";
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(AuthorIcon),
      h("span", props.author.map((item) => item.url ? h("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h("span", { class: "page-author-item" }, item.name))),
      h("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const categoryInfo = "";
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.category.length ? h("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(CategoryIcon),
      ...props.category.map(({ name, path }) => h("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${fe(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => {
      var _a2, _b2;
      return props.date ? h("span", {
        class: "page-date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        h(CalendarIcon),
        h("span", h(ClientOnly, () => {
          var _a3;
          return props.localizedDate || ((_a3 = props.date.value) == null ? void 0 : _a3.toLocaleDateString(lang.value));
        })),
        h("meta", {
          property: "datePublished",
          // ISO Format Date string
          content: ((_b2 = (_a2 = props.date) == null ? void 0 : _a2.value) == null ? void 0 : _b2.toISOString()) || ""
        })
      ]) : null;
    };
  }
});
const originalInfo = "";
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
const PageViewInfo = defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageviewElement = ref();
    const pageViews = ref(0);
    useMutationObserver(pageviewElement, () => {
      const count = pageviewElement.value.textContent;
      if (count && !isNaN(Number(count)))
        pageViews.value = Number(count);
    }, { childList: true });
    return () => props.pageview ? h("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h("span", {
        ref: pageviewElement,
        class: "waline-pageview-count",
        id: "ArtalkPV",
        /** visitorID */
        "data-path": isString(props.pageview) ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = ne(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h("span", {
      class: "page-reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(TimerIcon),
      h("span", readingTime.value.text),
      h("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
const tagInfo = "";
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.tag.length ? h("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(TagIcon),
      ...props.tag.map(({ name, path }) => h("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${fe(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = ne(readingTimeLocales);
    const words = computed(() => {
      var _a2;
      return (_a2 = props.readingTime) == null ? void 0 : _a2.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h("span", {
      class: "page-word-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(WordIcon),
      h("span", wordText.value),
      h("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
const pageInfo = "";
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h("div", { class: "page-info" }, props.items.map((item) => h(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const pageTitle = "";
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h("div", { class: "page-title" }, [
      h("h1", [
        themeLocale.value.titleIcon === false ? null : h(HopeIcon, { icon: frontmatter.value.icon }),
        page2.value.title
      ]),
      h(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h("hr")
    ]);
  }
});
const EditIcon = () => h(G$1, { name: "edit" }, () => [
  h("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const pageMeta = "";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h("footer", { class: "page-meta" }, [
        editLink.value ? h("div", { class: "meta-item edit-link" }, h(AutoLink, { class: "label", config: editLink.value }, { before: () => h(EditIcon) })) : null,
        h("div", { class: "meta-item git-info" }, [
          updateTime.value ? h("div", { class: "update-time" }, [
            h("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
            h(ClientOnly, () => h("span", { class: "info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h("div", { class: "contributors" }, [
            h("span", { class: "label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index2) => [
              h("span", { class: "contributor", title: `email: ${email}` }, name),
              index2 !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const printButton = "";
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    return () => themeData2.value.print === false ? null : h("button", {
      class: "print-button",
      title: themeLocale.value.metaLocales.print,
      onClick: () => {
        window.print();
      }
    }, h(PrintIcon));
  }
});
const toc = "";
const renderHeader = ({ title, level, slug }) => h(RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h("ul", { class: "toc-list" }, headers.map((header) => [
    h("li", {
      class: [
        "toc-item",
        { active: Ce(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = ref();
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc2.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      var _a2, _b2;
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? h("div", { class: "toc-place-holder" }, [
        h("aside", { id: "toc" }, [
          (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
          h("div", { class: "toc-header" }, [
            metaLocale.value.toc,
            h(PrintButton)
          ]),
          h("div", { class: "toc-wrapper", ref: toc2 }, tocHeaders),
          (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
        ])
      ]) : null;
    };
  }
});
const page = "";
const NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h("main", { class: "page", id: "main-content" }, h(Vt("LocalEncrypt") ? resolveComponent("LocalEncrypt") : Rt, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h(BreadCrumb),
        h(PageTitle),
        tocEnable.value ? h(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["tocBefore"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["tocAfter"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        (_b2 = slots["contentBefore"]) == null ? void 0 : _b2.call(slots),
        h(MarkdownContent),
        (_c = slots["contentAfter"]) == null ? void 0 : _c.call(slots),
        h(PageMeta),
        h(PageNav),
        Vt("CommentService") ? h(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots["bottom"]) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const skipLink = "";
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const page2 = usePageData();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = ref();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => page2.value.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const fadeSlideY = "";
const FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
    });
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  setup() {
    useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(() => "none");
    return () => [
      h(SkipLink),
      h(CommonWrapper, {}, {
        default: () => frontmatter.value.home ? h(HomePage) : h(FadeSlideY, () => h(NormalPage, { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => h(resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const notFoundHint = "";
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h("div", { class: "not-found-hint" }, [
      h("p", { class: "error-code" }, "404"),
      h("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const notFound = "";
const NotFound = defineComponent({
  name: "NotFound",
  setup(_props, { slots }) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const { navigate } = useLink({
      to: themeLocale.value.home ?? routeLocale.value
    });
    return () => [
      h(SkipLink),
      h(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h("main", { class: "page not-found", id: "main-content" }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          h(NotFoundHint),
          h("div", { class: "actions" }, [
            h("button", {
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const index = "";
const LockIcon = () => h(G$1, { name: "lock" }, () => h("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const passwordModal = "";
const PasswordModal = defineComponent({
  name: "PasswordModal",
  props: {
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: Boolean
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const remember = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h("div", {
      class: [
        "password-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, h("div", { class: "password-modal" }, [
      h("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : h(LockIcon, { "aria-label": locale.value.iconLabel })),
      h("div", { class: "password" }, [
        h("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      h("div", { class: "remember-password" }, [
        h("input", {
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        locale.value.remember
      ]),
      h("button", { class: "submit", onClick: () => verify() }, "OK")
    ]));
  }
});
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return computed(() => themeData2.value.encrypt || {});
};
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEncrypt = () => {
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY$1, "");
  const sessionToken = useSessionStorage(STORAGE_KEY$1, "");
  const isEncrypted = computed(() => {
    const { global: global2 = false, admin = [] } = encryptData.value;
    return global2 && admin.length > 0;
  });
  const isDecrypted = computed(() => {
    if (isEncrypted.value) {
      if (localToken.value)
        return encryptData.value.admin.some((hash) => compareSync(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.some((hash) => compareSync(sessionToken.value, hash));
    }
    return false;
  });
  const validate = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isEncrypted,
    isDecrypted,
    validate
  };
};
const checkToken = (token = "", hash) => Boolean(token) && compareSync(token, hash);
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
  const page2 = usePageData();
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY, {});
  const sessionToken = useSessionStorage(STORAGE_KEY, {});
  const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config) ? at(encryptData.value.config).filter((key) => _t(decodeURI(path), key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length > 0) {
      const { config: config2 = {} } = encryptData.value;
      return {
        isEncrypted: true,
        isDecrypted: matchedKeys.some((key) => localToken.value[key] && config2[key].some((token) => checkToken(localToken.value[key], token)) || sessionToken.value[key] && config2[key].some((token) => checkToken(sessionToken.value[key], token)))
      };
    }
    return {
      isDecrypted: false,
      isEncrypted: false
    };
  };
  const status = computed(() => getStatus(page2.value.path));
  const validate = (inputToken, keep = false) => {
    const { config: config2 = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(page2.value.path);
    for (const hitKey of matchedKeys)
      if (config2[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
  };
  return {
    status,
    getStatus,
    validate
  };
};
const GlobalEncrypt = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isDecrypted, isEncrypted, validate } = useGlobalEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => h(FadeSlideY, () => {
      var _a2, _b2;
      return isEncrypted.value ? isMounted.value ? isDecrypted.value ? (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots) : h(PasswordModal, { full: true, onVerify: validate }) : null : (_b2 = slots["default"]) == null ? void 0 : _b2.call(slots);
    });
  }
});
const LocalEncrypt = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { status, validate } = usePathEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      const { isEncrypted, isDecrypted } = status.value;
      return isEncrypted ? isMounted.value ? isDecrypted ? ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || null : h(PasswordModal, { full: true, onVerify: validate }) : null : ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || null;
    };
  }
});
const slidePage = "";
var v = defineComponent({ name: "SlidePage", setup() {
  const i2 = useRouter(), t2 = ref(false), n2 = ref(), s2 = () => {
    t2.value = !t2.value;
  }, e2 = () => {
    t2.value = false;
  }, r2 = () => {
    e2(), window.history.go(-1);
  }, u2 = () => {
    e2(), i2.push("/");
  };
  return onClickOutside(n2, e2), () => h("div", { class: "presentation" }, [h(Content), h("div", { ref: n2, class: ["menu", { active: t2.value }] }, [h("button", { class: "menu-button", onClick: () => s2() }, h("span", { class: "icon" })), h("button", { class: "back-button", onClick: () => r2() }, h(q$1)), h("button", { class: "home-button", onClick: () => u2() }, h(a$1))])]);
} });
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("HopeIcon", HopeIcon);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound,
    Slide: v
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  K$1,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  l$2,
  Y$1,
  clientConfig9,
  I,
  clientConfig11
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "炼丹炉系统", "i": "home" }, ["/index.html", "/README.md"]],
  ["v-2e3eac9e", "/slides.html", { "y": "s", "t": "Slide page", "i": "slides" }, ["/slides", "/slides.md"]],
  ["v-7f11024d", "/NASdocs/", { "y": "a", "t": "NAS文档", "i": "creative", "I": 0 }, ["/NASdocs/index.html", "/NASdocs/README.md"]],
  ["v-2d0ad528", "/zh/", { "y": "h", "t": "项目主页", "i": "home" }, ["/zh/index.html", "/zh/README.md"]],
  ["v-269ae70f", "/zh/slides.html", { "y": "s", "t": "幻灯片页", "i": "slides" }, ["/zh/slides", "/zh/slides.md"]],
  ["v-c4e44272", "/GPUdocs/deploy/", { "y": "a", "t": "如何配置主机系统", "i": "page", "O": 1 }, ["/GPUdocs/deploy/index.html", "/GPUdocs/deploy/README.md"]],
  ["v-9a6cd902", "/GPUdocs/deploy/container.html", { "y": "a", "t": "如何配置容器系统", "i": "page", "O": 1 }, ["/GPUdocs/deploy/container", "/GPUdocs/deploy/container.md"]],
  ["v-4ee8dc23", "/GPUdocs/user/", { "y": "a", "t": "如何使用GPU服务器", "i": "page", "O": 1 }, ["/GPUdocs/user/index.html", "/GPUdocs/user/README.md"]],
  ["v-0cee2d8a", "/NASdocs/deploy/", { "y": "a", "t": "NAS部署的细节文档" }, ["/NASdocs/deploy/index.html", "/NASdocs/deploy/README.md"]],
  ["v-399d7f52", "/NASdocs/maintain/", { "y": "a", "t": "NAS日常维护", "i": "config", "O": 2 }, ["/NASdocs/maintain/index.html", "/NASdocs/maintain/README.md"]],
  ["v-374bf397", "/NASdocs/user/", { "y": "a", "t": "如何使用NAS", "i": "page", "O": 1 }, ["/NASdocs/user/index.html", "/NASdocs/user/README.md"]],
  ["v-2b64e284", "/zh/demo/", { "y": "a", "t": "主要功能与配置演示", "i": "discover", "I": 0 }, ["/zh/demo/index.html", "/zh/demo/README.md"]],
  ["v-c1942916", "/zh/demo/disable.html", { "y": "a", "t": "布局与功能禁用", "i": "config", "O": 3 }, ["/zh/demo/disable", "/zh/demo/disable.md"]],
  ["v-65c00218", "/zh/demo/encrypt.html", { "y": "a", "t": "密码加密的文章", "i": "lock" }, ["/zh/demo/encrypt", "/zh/demo/encrypt.md"]],
  ["v-36295574", "/zh/demo/markdown.html", { "y": "a", "t": "Markdown 展示", "i": "markdown", "O": 2 }, ["/zh/demo/markdown", "/zh/demo/markdown.md"]],
  ["v-62ced1a6", "/zh/demo/page.html", { "y": "a", "t": "页面配置", "i": "page", "O": 1 }, ["/zh/demo/page", "/zh/demo/page.md"]],
  ["v-47357bdb", "/zh/guide/", { "y": "a", "t": "指南", "i": "creative" }, ["/zh/guide/index.html", "/zh/guide/README.md"]],
  ["v-763c1cd7", "/zh/guide/bar/", { "y": "a", "t": "Bar 功能", "i": "creative" }, ["/zh/guide/bar/index.html", "/zh/guide/bar/README.md"]],
  ["v-1e317375", "/zh/guide/bar/baz.html", { "y": "a", "t": "Baz", "i": "info" }, ["/zh/guide/bar/baz", "/zh/guide/bar/baz.md"]],
  ["v-763e2284", "/zh/guide/foo/", { "y": "a", "t": "Foo 功能", "i": "config" }, ["/zh/guide/foo/index.html", "/zh/guide/foo/README.md"]],
  ["v-00fb7173", "/zh/guide/foo/ray.html", { "y": "a", "t": "Ray", "i": "config" }, ["/zh/guide/foo/ray", "/zh/guide/foo/ray.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, ["/404"]],
  ["v-76601b7e", "/GPUdocs/", { "y": "p", "t": "G P Udocs" }, ["/GPUdocs/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp,
  ut as u,
  vt as v
};
