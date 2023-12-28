import nunjucks from "lume/plugins/nunjucks.ts";
import date, { Options as DateOptions } from "lume/plugins/date.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import metas from "lume/plugins/metas.ts";
//import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import type { Page, Site } from "lume/core.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

import toc from "https://deno.land/x/lume_markdown_plugins@v0.5.1/toc.ts";

import { renderTOC } from "./toc.ts";

export interface Options {
  date?: Partial<DateOptions>;
  pagefind?: Partial<PagefindOptions>;
}

/** Configure the site */
export default function (options: Options = {}) {
  return (site: Site) => {
    site;

    // Set variables
    site
      .data("lang", "en")
      .data("priority", 1.0)
      .data("layout", "page.njk")
      .data("metas.title", "=title")
      .data("metas.lang", "=lang")
      .data("metas.description", "=description")
      .data("top_links", [])
      .data("nav_links", [])
      .use(nunjucks())
      .use(code_highlight())
      .use(basePath())
      .use(toc())
      .use(date(options.date))
      .use(metas())
      .use(resolveUrls())
      .use(relativeUrls())
      .use(slugifyUrls())
      //      .use(pagefind(options.pagefind))
      .use(sitemap({
        priority: "priority",
      }));

    // Basic CSS Design System
    site.remoteFile(
      "css/pico.min.css",
      "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css",
    );
    site.remoteFile(
      "css/github-dark.min.css",
      "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github-dark.min.css",
    );

    site.process([".md"], (pages: Page) => {
      pages.forEach((page) => {
        // Replace <!-- toc --> with the actual toc from page.data.toc_string
        if (page.data.toc && page.data.toc.length) {
          const tocPlaceholderRegex = /<!--\s*toc\s*-->/i;
          if (tocPlaceholderRegex.test(page.content as string)) {
            const tocHtml = renderTOC(page.data.toc);
            page.content = (page.content as string).replace(
              tocPlaceholderRegex,
              tocHtml,
            );
          }
        }
      });
    });

    // Substitution feature
    site.process([".md"], (pages: Page) => {
      pages.forEach((page) => {
        if (page.data.substitute) {
          for (const obj of Object.entries(page.data.substitute)) {
            const key = obj[0],
              value = obj[1];
            page.content = (page.content as string).replaceAll(
              key,
              value as string,
            );
          }
        }
      });
    });

    // Copy files
    site
      .copy("css")
      .copy("js");
  };
}
