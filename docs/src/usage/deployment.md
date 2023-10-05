---
title: "Deployment"
parent: "Getting Started"
nav_order: 6
---

# Deploying A Lumocs Site

---

## GitHub Pages Deployment

There's an example workflow included at
[`/demo-repository/.github/workflows/deploy-pages.yml`](https://github.com/hexagon/lumocs/blob/main/demo-repository/.github/workflows/deploy-pages.yml)
in the Lumocs GitHub repository. This workflow shows you how to set up GitHub
Actions to handle the deployment for you.

To utilize this:

1. Copy the `deploy-pages.yml` from the
   [`/demo-repository/.github/workflows/`](https://github.com/hexagon/lumocs/tree/main/demo-repository/.github/workflows)
   directory to your project's `.github/workflows/` directory.
2. In your GitHub repository, navigate to `Settings`.
3. Under the `Pages` section, set the source to `GitHub Actions`.

This configuration will automatically build and deploy your site to GitHub Pages
whenever you push to your main branch.

## Manual Deployment

To manually deploy Lumocs, you to to the documentation root, in this guide
`/docs`, and run `deno task lume`. This will create a new subfolder called
`_site` which contains all the files of your generated site. Move these to your
server using the prefered method.
