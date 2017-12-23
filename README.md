<p align="center">
  <img width="180" src="./assets/logo.png" />
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/ienv">
    <img src="https://img.shields.io/npm/v/ienv/master.svg?style=flat-square&" />
  </a>
  <a href="https://travis-ci.org/ienv" alt="Build Status">
    <img src="https://img.shields.io/travis/rwu823/ienv.svg?style=flat-square&" />
  </a>
  <a href="https://codecov.io/gh/rwu823/ienv" alt="Coverage">
    <img src="https://img.shields.io/codecov/c/github/rwu823/ienv/master.svg?style=flat-square&" />
  </a>
  <img src="https://img.shields.io/github/license/rwu823/ienv.svg?style=flat-square&" />
</p>

## Installation

```sh
$ yarn add ienv
```

## Exports CONSTANTS

### env: string

Get `process.NODE_ENV` default is `development`

### isDev: bool

```js
process.NODE_ENV === 'development'
```

### isProd: bool

```js
process.NODE_ENV === 'production'
```

### isBrowser: bool

Check if in browser

### isNode: bool

Check if in Node

### global: Object

Returns `window` in browser, `global` in Node.
