# Lumocs Documentation Theme for Lume

Lumocs provides an elegant documentation theme for Lume, akin to "just-the-docs"
for Jekyll. Dive deeper into the
[Lumocs Documentation](https://lumocs.56k.guru).

## Features

- **Elegant Design**: A clean and professional look suitable for documentation.
- **Hierarchical Navigation**: Supports up to three levels of content hierarchy
  for organized navigation.
- **Responsive**: Fully mobile-friendly and adapts to various screen sizes.
- **Customizable**: Easily tailor the look and feel through `_data.json` and
  `_includes` directory.
- **Integrated Search**: Quick and efficient content search capability.
- **Dark Mode**: Built-in theme switcher for light and dark mode preferences.
- **Markdown Enhanced**: Supports `markdown-it` syntax for rich content
  creation.
- **Fast Performance**: Optimized for speed and efficiency.
- **Using Modern Tools**: Utilizes Deno and Lume, to reduce bloat and working
  efficiently.
- **Ready for GitHub Pages**: Automatically build and deploy the site on pushing
  to your repository.

## Setup

1. **Configuration**: Set up [`_config.ts`](./demo-repository/docs/_config.ts)
   to seamlessly integrate Lumocs with Lume.
2. **Metadata**: Define your site's metadata in
   [`_data.json`](./demo-repository/docs/src/_data.json).
3. **Deno Tasks**: Configure your Deno tasks within
   [`deno.json`](./demo-repository/docs/deno.json).
4. **Content**: Design your content using Markdown. See the example at
   [`index.md`](./demo-repository/docs/src/index.md).

## Commands

- To build your site, use the command: `deno task lume`

## Examples & Deployment

- For a comprehensive setup of Lumocs in a `/docs` directory, check out the
  [`demo-repository`](./demo-repository).
- To deploy on GitHub Pages, follow the guidelines provided in
  [`deploy-pages.yml`](./demo-repository/.github/workflows/deploy-pages.yml).

## License

Lumocs is available under the MIT License.
