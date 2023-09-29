# Lumocs Documentation Theme for Lume

Lumocs provides an elegant documentation theme for Lume, akin to "just-the-docs"
for Jekyll. Dive deeper into the
[Lumocs Documentation](https://lumocs.56k.guru).

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
