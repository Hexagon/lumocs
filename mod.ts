import plugins, { Options } from "./plugins.ts";

import type { Site } from "lume/core.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      // CSS
      "css/general.css",
      "css/sidebar.css",
      "css/blockquotes.css",
      "css/palette.css",
      "css/font-awesome.css",

      // JS
      "js/theme-switcher.js",
      "js/hamburger.js",
      "js/hierarchy.js",

      // Overridable
      "_includes/footer.njk",
      "_includes/head.njk",
      "_includes/sidebar.njk",

      // Internal
      "_includes/components/search.njk",
      "_includes/components/toc.njk",
      "_includes/components/breadcrumbs.njk",
      "_includes/layout/body.njk",
      "_includes/layout/html.njk",
      "_includes/partials/nav.njk",
      "_includes/partials/footer.njk",
      "_includes/partials/sidebar.njk",
      "_includes/page.njk",
      "_includes/page_right.njk",
      "_data.json",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
