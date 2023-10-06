---
title: "Getting Started"
nav_order: 2
collapse: false
---

# Getting Started With Lumocs

---

To bootstrap a Lumocs site, you'll need to set up three essential files:
`_config.ts`, `_data.json`, `deno.json`, and add your first content `index.md`.

It is recommended to organize the files like this:

```bash
/                          # Your repository root
├── /docs                  # The documentation folder
│   ├── _config.ts         # Lume configuration file
│   ├── deno.json          # Deno configuration file
│   └── /src               # Documentation source
│       ├── _data.json     # Global variables
│       ├── index.md       # Documentation index, will become index.html
│       └── <other pages>  # Documentation other pages
```

Everything related to Lumocs is placed in a `/docs` subfolder in this example.
The actual content and global variables are then placed in another subfolder
called `/docs/src`.

## Prerequisites

Before we start, make sure that you have Deno (version 1.37 or higher) installed
on your system. If not, refer to the [official instructions] to install Deno.

## Automated Bootstrapping

Run the following command to bootstrap a Lumocs site automatically:

`deno run -Ar https://deno.land/x/lumocs/init.ts docs`

This will create all required files in the subfolder `/docs` of current
directory. To test your site, `cd docs` and `deno task serve`. Then visit
`http://localhost:8000`.

## Manual Bootstrapping

### `deno.json`

This file controls which version of Lume and Lumocs should be used, and set up
the scripts to build your site.

```json
{
  "tasks": {
    "lume": "echo \"import 'lume/cli.ts'\" | deno run --unstable -A -",
    "serve": "deno task lume -s --port=8000"
  },
  "imports": {
    "lume/": "https://deno.land/x/lume@v1.19.1/",
    "lumocs/": "../"
  }
}
```

### `_config.ts`

The only thing you need to do in this file, is to set the public url of your
site, to have the sitemap show complete URLs.

Advanced users can activate additional Lume plugins here, more on that later.

```typescript
import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const siteUrl = "https://url.of.site";

const site = lume({
  src: "src",
  location: new URL(siteUrl),
});

site.use(lumocs());

export default site;
```

### `src/_data.json`

This can be seen as the global configuration for the site, all parameters in
this file is used as the default front matter for each generated page.

```json
{
  "lang": "en",
  "layout": "page.njk",

  "metas": {
    "title": "=title",
    "site": "Site Name",
    "lang": "en",
    "description": "=description"
  },

  "top_links": [
    {
      "icon": "fab fa-github",
      "title": "GitHub Repsitory",
      "url": "https://github.com/hexagon/lumocs"
    },
    {
      "icon": "fab fa-npm",
      "title": "NPM Library",
      "url": "https://npmjs.com"
    }
  ],

  "nav_links": [
    {
      "title": "GitHub Repsitory",
      "url": "https://github.com/hexagon/lumocs"
    },
    {
      "title": "NPM Library",
      "url": "https://npmjs.com"
    }
  ]
}
```

### `src/index.md`

Now you are ready to add content; Add the following markdown, including front
matter, to `src/index.md`.

```markdown
---
title: "First Page"
nav_order: 1
---

# First Page

Hello Lumocs!
```

## Generating Your Site

To serve your site with hot reload, navigate to the documentation root (`/docs`
in this example) and run:

```bash
deno task serve
```

You can access your live site at http://localhost:8000.

To compile your site, run:

```bash
deno task lume
```

This will render the site to a new subfolder to `/docs` called `_site`. The
`lume` command is useful when you want to deploy your site, and is run
automatically if you [deploy](./deployment.md) using the supplied GitHub Pages
workflow.
