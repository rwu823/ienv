const Global = (1, eval)('this') // eslint-disable-line no-eval

const isOf = (obj, type = '') =>
  `[object ${type}]` === Object.prototype.toString.call(obj)

const isBrowser = isOf(Global.document, 'HTMLDocument')
const isNode = isOf(Global.process, 'process')

const hasEnv = typeof process === 'object' && process.env

if (!hasEnv) {
  console.warn(
    "You don't have process.env. The `env`, `isDev` and `isProd` would be null",
  )
}

const env = hasEnv ? process.env.NODE_ENV || 'development' : null
const isDev = hasEnv ? env === 'development' : null
const isProd = hasEnv ? env === 'production' : null

module.exports = Object.freeze({
  global: Global,
  env,
  isDev,
  isProd,
  isBrowser,
  isNode,
})
