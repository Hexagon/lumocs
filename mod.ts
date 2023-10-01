import plugins, { Options } from "./plugins.ts";

import type { Site } from "lume/core.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      // Static content
      "css/style.css",
      "js/theme-switcher.js",
      "js/hamburger.js",

      // Overridable
      "_includes/footer.njk",
      "_includes/head.njk",
      "_includes/sidebar.njk",

      // Internal
      "_includes/components/search.njk",
      "_includes/components/breadcrumbs.njk",
      "_includes/layout/body.njk",
      "_includes/layout/html.njk",
      "_includes/partials/nav.njk",
      "_includes/partials/footer.njk",
      "_includes/partials/sidebar.njk",
      "_includes/page.njk",
      "_data.json",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
