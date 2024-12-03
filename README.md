# **iARM Docs**

Welcome to **iARM Documentation**, a centralized platform for seamlessly accessing, managing, and exploring documentation.

---

## **Features**

### **Overview**
- Interactive cards for easy navigation through documentation sections.
- Responsive grid layout for optimized display on all devices.

### **Key Sections**
1. **Overview** 
2. **Data Explorer** 
3. **My Data** 
4. **My Disposable Dashboard** 
5. **Workspace Governance** 
6. **Universal Retention**
7. **PRM** 
8. **Audit Log Sync**

---

### Editing Documentation

You can easily modify the documentation by editing .md files in the app.

1. Locating .md Files
All documentation files are located in the docs folder.

2. Editing an .md File
Navigate to the docs directory.
Find the .md file you want to edit.
Make the required changes using Markdown syntax. 

Example:
```
# Title

## Subtitle
Description here.

- Bullet 1
- Bullet 2

[Link to More Info](https://example.com)

```
3. Adding Metadata
Each .md file must have metadata at the top. Example:

```
id: example-page
title: Example Page
sidebar_label: Example
```
4. Adding a New Page
Create a new .md file in the docs folder.
Add metadata and content to the file.
Update the sidebar configuration in sidebars.js to include the new page:

```
{
  type: 'doc',
  id: 'example-page', // ID of the new page
}
```

5. Customizing Navigation
The navigation bar can be modified in the configuration file. Example:

```
navbar: {
  title: 'iARM Docs',
  items: [
    { to: '/docs/intro', label: 'Documentation', position: 'left' },
    { to: '/blog', label: 'Blog', position: 'left' },
  ],
},
```

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
