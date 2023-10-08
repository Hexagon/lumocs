// Define Lume and Lumocs versions here
const lumeVersion = "v1.19.1";
const lumocsVersion = "0.0.22";

// deno.json template
const denoJsonTemplate = `{
  "tasks": {
    "lume": "echo \\"import 'lume/cli.ts'\\" | deno run --unstable -A -",
    "serve": "deno task lume -s --port=8000"
  },
  "imports": {
    "lume/": "https://deno.land/x/lume@${lumeVersion}/",
    "lumocs/": "https://deno.land/x/lumocs@${lumocsVersion}/"
  }
}
`;

// _config.ts template
const configTsTemplate = `import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const siteUrl = "https://url.of.site";

const site = lume({
  src: "src",
  location: new URL(siteUrl),
});

site.use(lumocs());

export default site;
`;

// src/_data.json template
const dataJsonTemplate = `{
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
      "title": "GitHub Repository",
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
      "title": "GitHub Repository",
      "url": "https://github.com/hexagon/lumocs"
    },
    {
      "title": "NPM Library",
      "url": "https://npmjs.com"
    }
  ]
}
`;

// src/index.md template
const indexMdTemplate = `---
title: "First Page"
nav_order: 1
---

# First Page

Hello Lumocs!
`;

async function createFileIfNotExists(
  filePath: string,
  content: string,
  isQuiet: boolean,
) {
  try {
    const existingContent = await Deno.readTextFile(filePath);
    if (existingContent) {
      console.error(` - Error: File already exists: ${filePath}`);
    }
  } catch (error) {
    try {
      await Deno.writeTextFile(filePath, content);
      if (!isQuiet) console.log(` - ${filePath}`);
    } catch (writeError) {
      console.error(` - Error: Could not write: ${filePath}`);
    }
  }
}

async function main() {
  // Check if the first argument exists and use it as the target folder
  const targetFolder = Deno.args[0];
  if (!targetFolder) {
    console.error(
      "Usage: deno run -A init.ts [--quiet | --help] <target_folder>",
    );
    return;
  }

  // Check for --quiet and --help options
  const isQuiet = Deno.args.includes("--quiet") || Deno.args.includes("-q");
  const isHelp = Deno.args.includes("--help") || Deno.args.includes("-h");

  if (isHelp) {
    console.log("Usage:");
    console.log(
      "  deno run --unstable -A init.ts [--quiet | --help] <target_folder>",
    );
    console.log("Options:");
    console.log("  --quiet    : Suppress output messages (optional)");
    console.log("  --help     : Show this help message (optional)");
    return;
  }

  // Directory structure
  const rootDir = `./${targetFolder}`;
  const srcDir = `./${targetFolder}/src`;

  // Check if the root directory exists
  try {
    await Deno.stat(rootDir);
    if (!isQuiet) {
      console.error("Project directory already exists.");
    }
    return;
  } catch (error) {
    // Directory doesn't exist, continue
  }

  // Create the root directory
  Deno.mkdirSync(rootDir);

  // Create the 'src' directory
  Deno.mkdirSync(srcDir);

  if (!isQuiet) {
    console.log("Creating files:");
  }

  // Create deno.json
  await createFileIfNotExists(
    `${rootDir}/deno.json`,
    denoJsonTemplate,
    isQuiet,
  );
  await createFileIfNotExists(
    `${rootDir}/_config.ts`,
    configTsTemplate,
    isQuiet,
  );
  await createFileIfNotExists(
    `${srcDir}/_data.json`,
    dataJsonTemplate,
    isQuiet,
  );
  await createFileIfNotExists(`${srcDir}/index.md`, indexMdTemplate, isQuiet);

  if (!isQuiet) {
    console.log(
      "Lumocs project initialized successfully in folder:",
      targetFolder,
    );
    console.log(
      "To navigate to your project folder, use the following command:",
    );
    console.log(`  cd ${targetFolder}\n`);
    console.log("To serve your site with hot reload, run:");
    console.log("  deno task serve\n");
    console.log("This will render the site to a new subfolder called _site.\n");
    console.log(
      "For more information, please refer to the Lumocs documentation: https://lumocs.56k.guru",
    );
  }
}

main();
