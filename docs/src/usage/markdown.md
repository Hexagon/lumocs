---
title: "Markdown"
parent: "Getting Started"
nav_order: 3
---

# Markdown

---

Lumocs, being paired with Lume, uses the powerful `markdown-it` syntax for
content creation. If you're familiar with traditional Markdown, you'll find
`markdown-it` very intuitive with added capabilities.

## Typography

**Headers:**

```markdown
# H1 Header

## H2 Header

## H3 Header

### H4 Header
```

Example:

# H1 Header

## H2 Header

## H3 Header

### H4 Header

**Emphasis:**

```markdown
_italic_ or _italic_ **bold** or **bold**
```

Example:

_italic_ or _italic_ **bold** or **bold**

## Lists

```markdown
- Unordered item 1
- Unordered item 2
  - Nested item 2.1
  - Nested item 2.2

1. Ordered item 1
2. Ordered item 2
   1. Nested item 2.1
   2. Nested item 2.2
```

Example:

- Unordered item 1
- Unordered item 2
  - Nested item 2.1
  - Nested item 2.2

1. Ordered item 1
2. Ordered item 2
   1. Nested item 2.1
   2. Nested item 2.2

## Links

```markdown
[Link text](http://www.example.com)
```

## Images

```markdown
![Alt text](http://www.example.com/image.jpg)
```

> To include local images, create a subfolder named img and add site.copy("img")
> to your _config.ts file. This step will copy the img folder during the build
> process. { .note }

## Footnotes

```markdown
Here's a simple footnote[^1]. ... [^1]: This is the footnote.
```

## Tables

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Row1Col1 | Row1Col2 |
| Row2Col1 | Row2Col2 |
```

Example:

| Header 1 | Header 2 |
| -------- | -------- |
| Row1Col1 | Row1Col2 |
| Row2Col1 | Row2Col2 |

By adding class `.grid` you can get a striped Table.

## Blockquotes

Blockquotes are used to set apart a block of text from the main content. They
are typically rendered as indented blocks with a vertical line to the left of
the content.

You can create a blockquote by starting a line with a `>` character:

```markdown
> This is a blockquote.
```

Rendered as:

> This is a blockquote.

Lumocs provides specialized classes for blockquotes that convey different
meanings:

- `.note`: For informational notes.
- `.warning`: To provide warnings or cautions.
- `.success`: To indicate successful outcomes or beneficial information.
- `.error`: To denote errors or critical information.

To use these classes, you append a row containing the class name to your
blockquote, as `{ .note }`:

```markdown
> This is a note blockquote. { .note }
```

Rendered as:

> This is a note blockquote. { .note }

You can use similar code structures for `.warning`, `.success`, and `.error`
classes. Here are examples:

> This is a warning blockquote. { .warning }

> This is a success blockquote. { .success }

> This is a error blockquote. { .error }

## Embedding Code

When embedding code, specify the language immediately after the opening three
backticks (\`\`\`). This ensures that the built in library `highlight.js` knows
which syntax highlighting rules to apply.

For example:

<pre>```typescript
const greeting = 'Hello, World!';
console.log(greeting);
```</pre>

**Supported Languages**:

Lumocs supports all languages supported by `highlight.js`.

## Further Reading

For a comprehensive guide on `markdown-it` syntax, consider visiting the
[official markdown-it documentation](https://github.com/markdown-it/markdown-it).
