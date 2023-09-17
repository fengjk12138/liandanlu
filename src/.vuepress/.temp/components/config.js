import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/www/liandanlu/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useScriptTag } from "/www/liandanlu/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "/www/liandanlu/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/www/liandanlu/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/www/liandanlu/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/www/liandanlu/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
  ],
});
