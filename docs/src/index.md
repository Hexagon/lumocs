---
title: "Overview"
nav_order: 1
---

# Lumocs: A Documentation Theme for Lume

Welcome to Lumocs — an elegant and intuitive documentation theme for the Lume
static site generator.

**Fun Fact**: This documentation is built by Lumocs itself.

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

## Demo Folder

For those who prefer a hands-on approach or want a quick start, check out the
[`demo` folder](https://github.com/hexagon/lumocs/tree/main/demo-repository) in
the Lumocs repository on GitHub. It contains a ready-made setup that showcases
how to integrate Lumocs in the `/docs` subfolder of an existing project
repository. It also contains an example GitHub Workflow for automatic deploy to
GitHub Pages.

## GitHub Pages Deployment

There's an example workflow included in the
[`/demo/.github/workflows/deploy-pages.yml`](https://github.com/hexagon/lumocs/blob/main/demo/.github/workflows/deploy-pages.yml)
directory of the Lumocs repository. This workflow shows you how to set up GitHub
Actions to handle the deployment for you.

To utilize this:

1. Copy the `deploy-pages.yml` from the
   [`/demo/.github/workflows/`](https://github.com/hexagon/lumocs/tree/main/demo/.github/workflows)
   directory to your project's `.github/workflows/` directory.
2. In your GitHub repository, navigate to `Settings`.
3. Under the `Pages` section, set the source to `GitHub Actions`.

This configuration will automatically build and deploy your site to GitHub Pages
whenever you push to your main branch.

## License

Lumocs is open-source and licensed under the MIT License. This ensures freedom
to use, modify, and distribute as you see fit, within the terms of the license.
