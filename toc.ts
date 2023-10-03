// deno-lint-ignore no-explicit-any
export function renderTOC(toc: string | any[]) {
  if (!toc || toc.length === 0) {
    return "";
  }

  let tocHtml = '<ol class="toc">';

  for (const item of toc) {
    tocHtml += `<li><a href="#${item.slug}">${item.text}</a>`;

    if (item.children && item.children.length > 0) {
      tocHtml += "<ul>";
      for (const child of item.children) {
        tocHtml += `<li><a href="#${child.slug}">${child.text}</a></li>`;
      }
      tocHtml += "</ul>";
    }

    tocHtml += "</li>";
  }

  tocHtml += "</ol>";

  return tocHtml;
}
