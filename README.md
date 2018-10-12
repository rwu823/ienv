<h1 align="center">
  <img width="180" src="./assets/logo.png" />
</h1>
<p align="center">
  <a href="https://github.com/rwu823/ienv/releases">
    <img src="https://flat.badgen.net/github/release/rwu823/ienv" />
  </a>
  <a href="https://www.npmjs.com/package/ienv">
    <img src="https://flat.badgen.net/npm/v/ienv" />
  </a>
  <a href="https://circleci.com/gh/rwu823/ienv" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/rwu823/ienv/master" />
  </a>
  <a href="https://codecov.io/gh/rwu823/ienv" alt="Coverage">
    <img src="https://flat.badgen.net/codecov/c/github/rwu823/ienv" />
  </a>
  <img src="https://flat.badgen.net/github/license/rwu823/ienv" />
</p>

## Installation

```sh
$ yarn add ienv
```

## Usage

```js
import env, { isNode, isDev } from 'ienv'
```

## Exports CONSTANTS

### env: string

Get `process.NODE_ENV` default is `development`

### isDev: boolean

```js
process.NODE_ENV === 'development'
```

### isProd: boolean

```js
process.NODE_ENV === 'production'
```

### isBrowser: boolean

Check if in browser

### isNode: boolean

Check if in Node

### Global

Returns `window` in browser, `global` in Node.
