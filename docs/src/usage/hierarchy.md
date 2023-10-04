---
title: "Sidebar Menu"
parent: "Getting Started"
nav_order: 2
---

# Sidebar Menu

---

In Lumocs, the hierarchical structure of your documentation is determined using
the `title` and `parent` front-matter in your Markdown files. This allows for
the creation of a structured navigation sidebar and organized content
presentation.

**Table of Content**

<!-- TOC -->

## First Level: Main Sections

The first level typically consists of main sections or categories. These are
top-level items that act as general buckets or categories for your content.

Example:

```markdown
---
title: "Getting Started"
nav_order: 1
---
```

## Second Level: Subsections

The second level includes subsections or specific topics under the main
sections. To define a second-level item, you need to specify the `parent`
front-matter and set its value to the `title` of the first-level item.

Example:

```markdown
---
title: "Installation"
parent: "Getting Started"
nav_order: 1
---
```

## Recommended File Structure

For easier maintenance and organization, it's beneficial to follow a recommended
file structure:

1. **First Level Pages:** These can either be saved with their title as the
   filename directly under `/docs/src/`, or if you intend to have a sub-level
   under this page, be saved as `index.md` within their respective directories.

   - `/docs/src/getting-started.md`
   - OR `/docs/src/getting-started/index.md`

2. **Second Level Pages:** Create a subdirectory within the first-level
   directory, named after the first-level topic. Save the second-level pages as
   separate `.md` files within these subdirectories.

   - `/docs/src/getting-started/installation.md`
   - `/docs/src/getting-started/configuration.md`

### Example File/Folder Hierarchy:

Here's an example showing a two-level hierarchy:

```bash
/docs/src/
|-- index.md
|-- contributing.md
|-- getting-started/
|   |-- index.md
|   |-- installation.md
|   |-- configuration.md
|-- usage/
|   |-- index.md
|   |-- hierarchical-structure.md
|   |-- another-subtopic.md
```

In this structure:

- `index.md` and `contributing.md` are first-level pages without children.
- `getting-started/index.md` and `usage/index.md` are first-level pages with
  children.
- `getting-started/installation.md`, `getting-started/configuration.md` etc. are
  second-level pages.

## Considerations

- Ensure that the `nav_order` is set appropriately to define the order of
  appearance in the navigation sidebar.
- While Lumocs supports up to three levels of hierarchy, always consider the
  user experience. Too many nested levels might make navigation confusing.

Remember, a clear and organized structure can enhance the readability and
usability of your documentation. Use the hierarchical capabilities and
recommended file structure wisely to create a seamless experience for your
readers.
