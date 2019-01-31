# Babel Plugin Relative Import

![Deprecated](https://img.shields.io/badge/status-deprecated-red.svg)

**🚧 This module is deprecated and not maintained anymore 🚧**

**Please use [babel-plugin-module-name-mapper](https://github.com/mgcrea/babel-plugin-module-name-mapper) instead.**

## Readme

Import relative files with ease

```js
import fooHelper from '~/helpers/example.js';
// Gets compiled to:
import fooHelper from './../../../helpers/foo.js';
// No more relative path mess!
```

## Quickstart

```
npm install babel-plugin-relative-import --save-dev
```

Add a `.babelrc` file and write:
```js
{
  "plugins": [
    "babel-plugin-relative-import"
  ]
}
```

## Options

You can use a custom root with the `rootPathSuffix` option.

```js
{
  "plugins": [
    ["babel-plugin-relative-import", {
      "rootPathSuffix": "src/js"
    }]
  ]
}
```

You can also use a path starting with `%/` in your `rootPathSuffix` to automatically resolve the closest `package.json`.

## Inspiration

Inspired by the [babel-root-import](https://github.com/michaelzoidl/babel-root-import) from Michael J. Zoidl.
