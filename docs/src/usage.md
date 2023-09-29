---
title: "Getting Started"
nav_order: 2
---

### 1. Setup Configuration (`_config.ts`)

```typescript
import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const site = lume();
site.use(lumocs({
  location: new URL("https://public.url.to/page"),
}));

export default site;
```

It is important to pass `location`-option if you host the site from a
subdirectory, like GitHub Pages default address.

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

Ensure you're using the version of Lume that's compatible with Lumocs, which is
currently `1.19.0`.

```json
{
  "tasks": {
    "lume": "echo \"import 'lume/cli.ts'\" | deno run --unstable -A -",
    "build": "deno task lume",
    "serve": "deno task lume -s --port=8000"
  },
  "imports": {
    "lume/": "https://deno.land/x/lume@v1.19.0/",
    "lumocs/": "https://deno.land/x/lumocs@0.0.5/"
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

`title:` will be the name of the page in the sidebar.

# Overview

---

Page content
```

## Generate

- To generate your site:

  ```bash
  deno task lume
  ```

  This will compile your site and output it to the `_site` directory.
