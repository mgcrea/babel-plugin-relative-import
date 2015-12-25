# Babel Plugin Relative Import

Import relative files with ease<br>
[![Build Status](https://travis-ci.org/mgcrea/babel-plugin-relative-import.svg?branch=master)](https://travis-ci.org/mgcrea/babel-plugin-relative-import)
[![Dependency Status](https://david-dm.org/mgcrea/babel-plugin-relative-import.svg)](https://david-dm.org/mgcrea/babel-plugin-relative-import)
[![devDependency Status](https://david-dm.org/mgcrea/babel-plugin-relative-import/dev-status.svg)](https://david-dm.org/mgcrea/babel-plugin-relative-import#info=devDependencies)
[![https://github.com/mgcrea/babel-plugin-relative-import](https://img.shields.io/npm/dm/babel-plugin-relative-import.svg)](https://www.npmjs.com/package/babel-plugin-relative-import)

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

## Inspiration

Inspired by the [babel-root-import](https://github.com/michaelzoidl/babel-root-import) from Michael J. Zoidl.
