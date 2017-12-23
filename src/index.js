const Global = (1, eval)('this') // eslint-disable-line no-eval

const isBrowser = !!(Global.document && document.createELement)
const isNode =
  Object.prototype.toString.call(Global.process && process) ===
  '[object process]'

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
