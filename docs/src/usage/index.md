---
title: "Usage"
nav_order: 2
---

# Getting Started with Lumocs

Lumocs requires you to set up at least four files: `_config.ts`, `data.json`,
`deno.json`, and your main Markdown content file (like `index.md`). Each of
these plays a critical role in configuring and presenting your content, and they
will be detailed in their respective sections.

To bootstrap your site quickly and get it up and running, we'll start with a
minimum version of each file. For better organization, it's recommended to place
the `_config.ts` and `deno.json` files in a `/docs` subfolder of your
repository, and then store the `_data.json` and your Markdown files within
`/docs/src`.

### 1. Configuration (`_config.ts`)

Set up Lumocs with Lume:

```typescript
import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const site = lume();
site.use(lumocs({
  location: new URL("https://public.url.to/page"),
}));

export default site;
```

Remember to specify the `location` option, especially if hosting from a
subdirectory like GitHub Pages' default address.

### 2. Deno Tasks (`deno.json`)

Ensure compatibility between Lumocs and the Lume version, currently `1.19.0`:

```json
{
  "tasks": {
    "lume": "echo \"import 'lume/cli.ts'\" | deno run --unstable -A -",
    "build": "deno task lume",
    "serve": "deno task lume -s --port=8000"
  },
  "imports": {
    "lume/": "https://deno.land/x/lume@v1.19.0/",
    "lumocs/": "https://deno.land/x/lumocs@0.0.6/"
  }
}
```

### 3. Metadata (`_data.json`)

Define essential metadata:

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

### 4. Creating Content with Markdown

Utilize Markdown for your content. Here's a simple `index.md`:

```markdown
---
title: "Overview"
nav_order: 1
---

# Overview

---

Your content goes here.
```

## Generating Your Site

To compile your site:

```bash
deno task lume
```

If you have followed the recommended file structure, this command produces the
output in the `/docs/_site` directory.

To serve your site with hot reload:

```bash
deno task serve
```

This will launch a server available at https://localhost:8000
