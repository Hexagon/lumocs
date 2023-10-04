---
title: "Site Configuration"
parent: "Getting Started"
nav_order: 6
---

# Site Configuration using `_data.json`

---

In Lumocs, the `_data.json` file is central to configuring global settings for
your documentation. It provides a centralized location to define meta tags, set
default layouts, specify language settings, and more. This guide will delve into
its various functionalities.

## Language and Layout

- **lang:** Defines the default language for your documentation. Example:
  `"en"`.
- **layout:** Specifies the default layout template. Default is `"page.njk"` but
  can be overridden to `"page_right.njk"` to place the sidebar to the left.

## Meta Tags Configuration

The `metas` object allows you to set meta tags for your documentation pages:

- **title:** This is dynamically set based on the `title` front-matter of each
  page.
- **site:** Sets the name or title for the entire documentation site. Example:
  `"Lumocs Documentation"`.
- **lang:** Sets the language of the content. Example: `"en"`.
- **description:** Dynamically set based on the `description` front-matter of
  each page.

## Top Links

The `top_links` array is designed to create a list of important links that can
be displayed at the top of your documentation:

- **icon:** Defines the icon class for the link. It uses the Font Awesome
  classes as a standard.
- **title:** The visible name or label of the link.
- **url:** The URL the link points to.

Example:

```json
"top_links": [
    {
      "icon": "fas fa-globe me-2",
      "title": "Web",
      "url": "https://lumocs.56k.guru"
    }
]
```

## Navigation Links

The `nav_links` array helps you create a list of navigation links. These are
typically used in sidebars or main menus:

- **title:** The name or label of the navigation item.
- **url:** The URL the navigation item points to.

Example:

```json
"nav_links": [
    {
      "title": "Web",
      "url": "https://lumocs.56k.guru"
    }
]
```

## Considerations

- Always validate your `_data.json` file to ensure it's correctly formatted.
  Invalid JSON can cause rendering issues or errors.
- Utilize the dynamic fields (like `=title` or `=description`) to ensure content
  consistency across your documentation.

Remember, a well-configured `_data.json` file can greatly enhance the user
experience and maintainability of your documentation. Adjust settings as needed
to align with your project's requirements and branding.
