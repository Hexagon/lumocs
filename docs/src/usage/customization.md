---
title: "Customization"
parent: "Getting Started"
nav_order: 5
---

# Customization

---

Lumocs provides flexibility in customizing various parts of your documentation.
Whether it's adding extra content between the `<head>` tags, changing the color, customizing the
footer, or altering the sidebar, Lumocs offers a straightforward approach to
achieve this.

### Changing the color

Lumocs supports changing the color (hue) of the entire site by changing a single css variable. Add the code below to your `_includes/head.njk` to change the color:

Move the slider to update the code and get a live demo:

<input type="range" min="0" max="255" oninput="javascript: setHue(this.value);">

<pre class="hljs language-html">
:root {
   --primary-h: <span class="hue-value">25</span>; /* Any value from 0 to 255 controlling the Hue */
}
</pre>

### Inserting Extra Content Between `<head>` Tags

To insert additional content, such as custom meta tags, stylesheets, or scripts,
between the `<head>` tags, modify the `_includes/head.njk` file.

#### Adding a favicon

To add favicon functionality and optionally include a manifest, follow these
steps:

1. Place all your favicon images (e.g., `favicon.png`, `favicon.ico`, etc.) in
   the "img" folder within your "src" directory.

2. Open the `_includes/head.njk` file.

3. Add the following code to the file:

   ```html
   <link rel="icon" type="image/png" href="/img/favicon.png" sizes="32x32">
   <link rel="icon" type="image/png" href="/img/favicon.png" sizes="192x192">
   <!-- Add more favicon sizes as needed -->
   <link rel="manifest" href="/img/manifest.json">
   ```

   Make sure to replace `'img/favicon.png'` with the correct path to your
   favicon image, and add more `<link>` elements for different favicon sizes if
   necessary.

4. Optionally, if you have a `manifest.json` file for the web app manifest,
   include it in the root folder, and add the appropriate `<link>` tag in
   `_includes/head.njk`:

   ```html
   <link rel="manifest" href="manifest.json">
   ```

5. Make sure to copy the `img` folder and optionally `manifest.json` to the
   output by including these lines in `_config.ts`:

```javascript
site.copy("img");
site.copy("manifest.json");
```

### Customizing the Footer

To tailor the footer of your documentation, edit the `_includes/footer.njk`
file. This could be useful for adding copyright notices, links to privacy
policies, or any other pertinent information.

### Adjusting the Sidebar

To add extra content to the sidebar, add the `_includes/sidebar.njk` file.

If you'd like to move the sidebar to the right side of the page, override the
`layout` key of the front matter or `_data.json` to `page_right.njk`.

### Advanced Customization: Overriding Templates

For those who require more advanced customization capabilities, Lumocs allows
you to override templates entirely:

1. Visit the Lumocs repository on GitHub:
   [https://github.com/Hexagon/lumocs/tree/main/src/_includes](https://github.com/Hexagon/lumocs/tree/main/src/_includes)

2. Download the template file you wish to modify.

3. Modify the file as per your requirements.

4. Place the modified copy in your project's `_includes` directory.

By supplying a modified copy of any of these files in the `_includes` directory,
Lumocs will prioritize your custom version over the default one.
