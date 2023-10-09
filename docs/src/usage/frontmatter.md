---
title: "Configuration"
parent: "Getting Started"
nav_order: 2
---

# Configuration

---

## Introduction

Every page can be configured in two ways;

- Through the Front Matter - a block of YAML or JSON positioned at the top of a
  markdown file, encapsulated by `---`.
- Through `_data.json` - a file which holds global settings for every file in
  (and under) the directory it is placed in.

If a variable applies to all or most pages, you should place it in
`src/_data.json`, if it only applies to one page it should be placed in the
front matter.

## Configuration options

- **title**: The primary title of the page.
- **description**: Brief description, ideal for SEO.
- **meta**: Metadata of the current page used for site title, and SEO, holding a
  couple of subkeys:
  - **site:** Overall name of the entire documentation site, usually set
    globally through `_data.json`
  - **logo:** Logo of the site displayed just by the site name. Make sure to
    include `site.copy("img")` in your `_config.yaml` if you do place your icon
    in the `img`-folder.
  - **description:** Set from the `description` in the page's front matter.
  - **title:** Dynamically set from the `title` in the page's front matter.
- **parent**: The parent page title, used to organize pages hierarchically in
  the sidebar menu.
- **nav_order**: The position in navigation. A smaller number places it higher
  in the list.
- **collapse**: Set to `false` to prevent descendants of this page from being
  collapsed.
- **lang**: Language code (e.g., "en" for English), usually set globally through
  `_data.json`.
- **substitute**: YAML-based values for substitution on the page.

  Usage in front matter:

  ```markdown
  substitute:

  - $PAGE_VERSION: "2.5.1"
  ```

  Usage in `_data.json`
  ```json
  "substitue" {
     "$PAGE_VERSION": "2.5.1"
  }
  ```

- **top_links**: Important links at the page's top. Usually set in `_data.json`
  but can be overridden by front matter.

  ```markdown
  top_links:
  - icon: "fab fa-npm"
    title: "NPM Library"
    url: "https://npmjs.com"
  ```

- **nav_links**: Sidebar or main menu navigation links. Usually set in
  `_data.json` but can be overridden by front matter.

  ```markdown
  nav_links:
  - icon: "fab fa-npm"
    title: "NPM Library"
    url: "https://npmjs.com"
  ```

## Considerations

- Ensure your `_data.json` is correctly formatted. Invalid JSON can lead to
  rendering issues.
- Make use of dynamic fields like `=title` and `=description` to maintain
  content consistency.
