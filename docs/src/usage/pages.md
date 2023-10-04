---
title: "Creating Pages"
parent: "Getting Started"
nav_order: 3
---

# Creating Pages

---

To ensure that Lumocs correctly processes and displays your content, save your
Markdown files with the `.md` extension and place them in the `/docs/src`
directory. Every page consists of "front matter", and markdown, both these
topics will be covered further down, but let's look at a simple example:

```markdown
---
title: "Page Title"
description: "Page Description"
nav_order: 1
---

# Title

Text
```

**Table of Content**

<!-- TOC -->

### Front Matter

The front matter is the section at the top of every Markdown file, encapsulated
by `---`, that contains metadata about the page. In Lumocs, the front matter
allows users to provide specific configurations for individual pages and also
has the ability to override global settings defined in `_data.json`.

Most of the times, it will looks something like this:

#### Local Variables

These fields are generally specific to individual pages:

- **title**: The main title of the page.
- **description**: A brief description of the content, often used for SEO
  purposes.
- **parent**: Defines the parent of the current page. Learn more about
  hierarchical structures in Lumocs [here](/usage/hierarchy/).
- **nav_order**: Determines the order of the page in navigation. The lower the
  number, the higher up it appears in the list.

#### Global Variables

The following fields can be set globally in `_data.json`, but can be overridden
in the front matter for specific pages:

- **lang**: Specifies the language of the page content (e.g., "en" for English).
- **substitute**: Provides page-specific substitution values, specified in YAML.

  ```markdown
  substitute:

  - $PAGE_VERSION: "2.5.1"
  ```

- **top_links**: Defines specific links that appear at the top of the page.
  These are represented as an array of objects.

  ```markdown
  top_links:

  - title: "Home" url: "/"
  ```

- **nav_links**: Specifies additional links for the navigation sidebar,
  represented as an array of objects.

  ```markdown
  nav_links:

  - title: "Setup Guide" url: "/setup/"
  - title: "FAQ" url: "/faq/"
  ```

#### Examples

Here's an example of a page-specific front matter with both local and global
variables:

```markdown
---
title: "Getting Started"
description: "Introduction to the Lumocs documentation system."
lang: "fr"
parent: "Introduction"
nav_order: 1
substitute:
  $PAGE_VERSION: "2.5.1"
top_links: 
  - title: "Home"
    url: "/"
nav_links:
  - title: "Setup Guide"
    url: "/setup/"
  - title: "FAQ"
    url: "/faq/"
---
```

For more information on the distinction between local and global variables and
how to utilize global settings effectively, refer to
[site-wide settings](/usage/site/).

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

When embedding code, specify the language immediately after the opening three
backticks (\`\`\`). This ensures that the built in library `highlight.js` knows
which syntax highlighting rules to apply.

For example:

<pre>```typescript
const greeting = 'Hello, World!';
console.log(greeting);
```</pre>

**Supported Languages**:

Lumocs, through `highlight.js`, supports a myriad of programming languages.
Whether it's JavaScript, Python, C++, or any other popular programming language,
`highlight.js` has got you covered.

### Further Reading

For a comprehensive guide on `markdown-it` syntax, consider visiting the
[official markdown-it documentation](https://github.com/markdown-it/markdown-it).

## Special features of Lumocs

### Table of Content

To insert a TOC for the current page, place a HTML-comment with nothing but
`TOC` inside of it:

<pre>
&lt;!-- TOC --&gt;
</pre>

This will generate a complete TOC of the current page

---

### Value Substitution

A unique feature in Lumocs is the ability to perform content substitution
throughout your documentation. By specifying substitutions in the `_data.json`
file, you can simplify repetitive content updates, especially handy for global
parameters like version numbers.

#### How to Use Substitution

1. In your `_data.json` file, define substitutions using the following
   structure:

```json
{
  "substitute": [
    { "$NAME": "My Application" },
    { "$VERSION": "1.0.0" }
    // ... more substitutions
  ]
}
```

2. In your Markdown content, whenever you need to reference the substitution
   value, use the defined `$NAME`:

```markdown
Welcome to the documentation of $NAME, version $VERSION.
```

Upon processing, Lumocs will replace `$NAME` with `My Application` and
`$VERSION` with `1.0.0` as defined in the `_data.json` file.
