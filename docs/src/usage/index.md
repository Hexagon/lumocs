---
title: "Getting Started"
nav_order: 2
---

# Getting started with Lumocs

Lumocs requires you to set up at least four files: `_config.ts`, `data.json`,
`deno.json`, and your main Markdown content file (like `index.md`). Each of
these plays a critical role in configuring and presenting your content, and they
will be detailed in their respective sections.

To bootstrap your site quickly and get it up and running, we'll start with a
minimum version of each file. For better organization, it's recommended to use
this file structure:

```bash
/                         # Your repository root
├── /docs                 # The documentation folder
│   ├── _config.ts        # Lume configuration file
│   ├── deno.json         # Deno configuration file
│   └── /src              # Documentation source
│       ├── _data.json    # Lumocs configuration file
│       ├── index.md      # Documentation index, will become index.html
│       └── <other pages  #Documentation index, will become index.html
├── <other files...>
```

**Table of Content**

<!-- TOC -->

### Configuration (`_config.ts`)

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

### Deno Tasks (`deno.json`)

Ensure compatibility between Lumocs and the Lume version, currently `1.19.1`:

```json
{
  "tasks": {
    "lume": "echo \"import 'lume/cli.ts'\" | deno run --unstable -A -",
    "build": "deno task lume",
    "serve": "deno task lume -s --port=8000"
  },
  "imports": {
    "lume/": "https://deno.land/x/lume@$LUME_VERSION/",
    "lumocs/": "https://deno.land/x/lumocs@$LUMOCS_VERSION/"
  }
}
```

### Metadata (`src/_data.json`)

Define essential metadata, everything but `metas.site` are optional, but it is
recommended to always transfer the page name, description and language to the
metadata for SEO purposes:

```json
{
  "metas": {
    "site": "Site Name",
    "title": "=title",
    "description": "=description",
    "lang": "=lang"
  }
}
```

### Creating Content with Markdown

Utilize Markdown for your content. Here's a simple `src/index.md`:

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

To compile your site, enter the the documentation root (`/docs` in this
example), and run:

```bash
deno task lume
```

If you have followed the recommended file structure, this command produces the
output in the `/docs/_site` directory.

To serve your site with hot reload:

```bash
deno task serve
```

This will launch a server available at http://localhost:8000
