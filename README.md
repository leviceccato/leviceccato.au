# Levi Ceccato's Portfolio & Blog

## About

Welcome to the repository of Levi Ceccato's portfolio & blog. It’s built as an SPA using [Solid](https://www.solidjs.com) with full prerendering, essentially making it a static site generator. Check it the live site at [leviceccato.au](https://leviceccato.au).

### Stack

Solid was chosen a couple of reasons, primarily its performance. In Solid it's okay to have a lot of nested components and that's generally the way I like to structure my apps. The developer experience is also quite nice when working with TypeScript, plus React has paved the way for acceptance of JSX which Solid also uses.

For styling I'm using vanilla-extract. This is a library which lets you define your styles with Typescript in special `.css.ts` files. These get precompiled by babel into CSS. Having your whole app in TypeScript, styles included, is such a productivity hack. There's no need for a preprocessor either, you can just use regular TypeScript and it will get compiled away.

Vite is used as the build tool. I chose it for its excellent performance, ecosystem, ease-of-use and general community adoption. There is another tool this project uses that is built on top of Vite called vite-node. This is what allows me to easily prerender all routes of the app. It's a content focused site, so no SSR is necessary, but the performance and SEO benefits of raw HTML can't be understated.

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

## Creating content

Pages in this project live in `src/routes` and are defined as Solid components. The structure of files and folders will map to the route structure of the app. Folders with an `_index.tsx` at their root will indicate a new folder in the URL, e.g. `src/routes/about/_index.tsx` will correspond to `https://leviceccato.au/about`. All files and folders should begin with optionally a number and then an underscore. Those with no number will not be treated as part of the navigation structure of the site for the purpose of listings or automated previous/next functionality. Index files will inherit this behaviour from their containing folder. Numbers will designate the position of the route in that order.

The `src/toolkit.tsx` module defines helpers for creating route components and other commonly used components. If a common component is made, it should be reexported from that module.

### Images

Images should be added to `src/public/images`. They do not get transformed during build so any optimisations must be manual.

## Deployment

This app is hosted on Netlify. Commits to `main` will trigger a deploy.

## Licenses

All non-third-party source code is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php). Content and images are © 2023 Levi Ceccato.
