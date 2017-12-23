const Global = (1, eval)('this') // eslint-disable-line no-eval

const isOf = (obj, type = '') =>
  `[object ${type}]` === Object.prototype.toString.call(obj)

const isBrowser = isOf(Global.document, 'HTMLDocument')
const isNode = isOf(Global.process, 'process')

const hasEnv = Global.process && process.env

const env = (hasEnv && process.env.NODE_ENV) || 'development'
const isDev = hasEnv && env === 'development'
const isProd = hasEnv && env === 'production'

if (!hasEnv) {
  console.error(
    "You don't have process.env. The `env`, `isDev` and `isProd` should be false",
  )
}

module.exports = Object.freeze({
  global: Global,
  env,
  isDev,
  isProd,
  isBrowser,
  isNode,
})
