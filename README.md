# Levi Ceccato's Portfolio & Blog

## About

Welcome to the repository of Levi Ceccato's portfolio & blog. It’s built as an SPA using [Solid](https://www.solidjs.com) with rudimentary prerendering. Check it the live site at [leviceccato.au](https://leviceccato.au).

## Usage

### Requirements

- Node 14.18+, 16+

### Development

Make sure you run all commands from the root of this project.

Install dependencies.

```shell
npm i
```

Run development server.

```shell
npm start
```

Build and preview the site in production mode.

```shell
npm run preview
```

See `package.json#scripts` for more commands.

### Creating content

Pages in this project live in `src/routes` and are defined as Solid components. The structure of files and folders will map to the route structure of the app. Folders with an `_index.tsx` at their root will indicate a new folder in the URL, e.g. `src/routes/about/_index.tsx` will correspond to `https://leviceccato.au/about`. All files and folders should begin with optionally a number and then an underscore. Those with no number will not be treated as part of the navigation structure of the site for the purpose of listings or automated previous/next functionality. Index files will inherit this behaviour from their containing folder. Numbers will designate the position of the route in that order.

The `src/toolkit.tsx` module defines helpers for creating route components and other commonly used components. If a common component is made, it should be reexported from that module.

## Deployment

This app is hosted on Netlify. Commits to `main` will trigger a deploy.

## Licenses

All non-third-party source code is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php). Content and images are © 2023 Levi Ceccato.
