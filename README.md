# Lumocs: A Documentation Theme for Lume

**NOTE: THIS IS STILL WORK IN PROGRESS**

Welcome to Lumocs — an elegant and intuitive documentation theme tailored specifically for the Lume static site generator. Lumocs places your content front and center, ensuring a smooth and accessible experience for your readers.

## 🚀 Getting Started

Easily integrate Lumocs into your Lume project by following these steps:

### 1. Setup Configuration (`_config.ts`)

```typescript
import lume from "lume/mod.ts";
import theme from "lumocs/mod.ts";

const site = lume();
site.use(theme());

export default site;
```

### 2. Define Metadata (`data.json`)

```json
{
  "lang": "en",
  "layout": "page.njk",
  "metas": {
    "title": "=title",
    "site": "Site Header",
    "lang": "en",
    "description": "=description"
  }
}
```

### 3. Create Deno Tasks (`deno.json`)

Ensure you're using the version of Lume that's compatible with Lumocs, which is currently `1.19.0`.

```json
{
  "tasks": {
    "lume": "echo \"import 'lume/cli.ts'\" | deno run --unstable -A -",
    "build": "deno task lume",
    "serve": "deno task lume -s --port=8000"
  },
  "imports": {
    "lume/": "https://deno.land/x/lume@v1.19.0/",
    "lumocs/": "https://deno.land/x/lumocs@0.0.1/"
  }
}
```

### 4. Customization Points

Personalize Lumocs for your needs:

- `_includes/footer.njk`: Add content at the top of the footer.
- `_includes/head.njk`: Inject custom elements into the `<head>` tag.
- `_includes/sidebar.njk`: Append content at the bottom of the sidebar.

### 5. Crafting Content with Markdown

Use Markdown to design your pages. A basic `index.md` example:

```markdown
---
title: "Overview"
nav_order: 1
---

# Overview

---

Page content
```

## 🛠 Generate and Deploy

- To generate your site:
  ```bash
  deno task lume
  ```

  This will compile your site and output it to the `_site` directory.

For an automated workflow that handles generation and deployment to GitHub Pages, explore the [gh-pages-lume-boilerplate](https://github.com/hexagon/gh-pages-lume-boilerplate) repository.

## 🎉 Demo Folder

For those who prefer a hands-on approach or want a quick start, check out the `demo` folder. It contains a ready-made setup that showcases the capabilities of Lumocs. Simply clone and run!

## 📜 License

Lumocs is open-source and licensed under the MIT License. This ensures freedom to use, modify, and distribute as you see fit, within the terms of the license.
