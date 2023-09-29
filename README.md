# Lumocs Documentation Theme for Lume

Lumocs offers an elegant documentation theme for Lume, comparable to
"just-the-docs" for Jekyll. For a detailed guide, visit
[Lumocs Documentation](https://lumocs.56k.guru).

## Setup

1. **Configuration**: Set up [`_config.ts`](./demo-repository/_config.ts) to
   incorporate Lumocs with Lume.
2. **Metadata**: Define your site's metadata in
   [`src/_data.json`](./demo-repository/src/_data.json).
3. **Deno Tasks**: Adjust Deno tasks in
   [`deno.json`](./demo-repository/deno.json).
4. **Customization**: Customize your site using the
   [`_includes`](./demo-repository/_includes) directory.
5. **Content**: Design your content using Markdown, example
   [`src/index.md`](./demo-repository/src/index.md) .

## Commands

- Build your site: `deno task lume`

## Examples & Deployment

- Refer to the [`demo-repository`](./demo-repository) for a full setup and
  example workflow.
- For deploying on GitHub Pages, follow the instructions in
  [`deploy-pages.yml`](./demo-repository/.github/workflows/deploy-pages.yml).

## License

Lumocs is licensed under the MIT License.
