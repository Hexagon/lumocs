---
title: "Customization"
parent: "Getting Started"
nav_order: 4
---

## Customization in Lumocs

Lumocs provides flexibility in customizing various parts of your documentation.
Whether it's adding extra content between the `<head>` tags, customizing the
footer, or altering the sidebar, Lumocs offers a straightforward approach to
achieve this.

### Inserting Extra Content Between `<head>` Tags

To insert additional content, such as custom meta tags, stylesheets, or scripts,
between the `<head>` tags, modify the `_includes/head.njk` file.

### Customizing the Footer

To tailor the footer of your documentation, edit the `_includes/footer.njk`
file. This could be useful for adding copyright notices, links to privacy
policies, or any other pertinent information.

### Adjusting the Sidebar

To make changes to the sidebar, which might include adding new sections or
adjusting the layout, modify the `_includes/sidebar.njk` file.

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

### Considerations

- Always backup your customizations, especially if you're updating Lumocs. This
  ensures you don't lose any tailored configurations.
- Test your documentation thoroughly after making changes to ensure everything
  is displayed correctly and functions as expected.

Customizing your documentation can greatly enhance the user experience, aligning
it closer to your brand or specific requirements. Utilize the tools and
flexibility Lumocs offers to create a unique and functional documentation
portal.
