# @ianwalter/eslint-config-react
> Ian's [ESLint][eslintUrl] configuration

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/eslint-config-react --dev
```

## Usage

In `package.json`, for React:

```js
  "eslintConfig": {
    "root": true,
    "extends": [
      "@ianwalter/eslint-config-react"
    ]
  }
```

For Preact:

```js
  "eslintConfig": {
    "root": true,
    "extends": [
      "@ianwalter/eslint-config-react/preact"
    ]
  }
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[eslintUrl]: https://eslint.org/
[npmImage]: https://img.shields.io/npm/v/@ianwalter/eslint-config-react.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/eslint-config-react
[licenseUrl]: https://github.com/ianwalter/eslint-config-react/blob/master/LICENSE
