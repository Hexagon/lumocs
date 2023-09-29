---
title: "Creating Pages"
parent: "Usage"
nav_order: 2
---

## Creating Pages

To ensure that Lumocs correctly processes and displays your content, save your
Markdown files with the `.md` extension and place them in the `/docs/src`
directory.

## Markdown

Lumocs, being paired with Lume, uses the powerful `markdown-it` syntax for
content creation. If you're familiar with traditional Markdown, you'll find
`markdown-it` very intuitive with added capabilities.

### Basic Syntax

**Headers:**

```markdown
# H1 Header

## H2 Header

### H3 Header

#### H4 Header
```

**Emphasis:**

```markdown
_italic_ or _italic_ **bold** or **bold**
```

**Lists:**

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

**Links:**

```markdown
[Link text](http://www.example.com)
```

**Images:**

```markdown
![Alt text](http://www.example.com/image.jpg)
```

### Advanced Syntax

Markdown-it also comes with some extensions for more advanced content:

**Footnotes:**

```markdown
Here's a simple footnote[^1]. ... [^1]: This is the footnote.
```

**Tables:**

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Row1Col1 | Row1Col2 |
| Row2Col1 | Row2Col2 |
```

**Task Lists:**

```markdown
- [x] Completed task
- [ ] Uncompleted task
```

### Embedding Code

You can also embed code snippets:

```javascript
const greet = () => {
  console.log("Hello, Lumocs!");
};
```

To display code blocks in the actual output, ensure you use three backticks
(\```) to start and end your code.

### Further Reading

For a comprehensive guide on `markdown-it` syntax, consider visiting the
[official markdown-it documentation](https://github.com/markdown-it/markdown-it).

Remember to save your Markdown files with the `.md` extension and place them in
the `/docs/src` directory. Lumocs will then process and convert them into
beautifully rendered web pages.
