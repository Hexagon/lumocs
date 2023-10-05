---
title: "Soecial Features"
parent: "Getting Started"
nav_order: 6
---

# Special features of Lumocs

## Table of Content

To insert a TOC for the current page, place a HTML-comment with nothing but
`TOC` inside of it:

<pre>
&lt;!-- TOC --&gt;
</pre>

This will generate a complete TOC of the current page

---

## Value Substitution

By specifying substitutions in the `_data.json` file, you can simplify
repetitive content updates, especially handy for global parameters like version
numbers.

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
