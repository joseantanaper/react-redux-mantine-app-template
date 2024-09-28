# react-redux-mantine-app-template

https://joseantanaper.github.io/react-redux-mantine-app-template/

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

```sh
npm install @mantine/core @mantine/hooks
npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars
```

postcss.config.cjs

```ts
module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
}
```

Import styles to App.tsx

```ts
import "@mantine/core/styles.css"
```
