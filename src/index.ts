const Global = (1, eval)('this')

const ofType = (o: any, type: string) =>
  `[object ${type}]` === Object.prototype.toString.call(o)

const isBrowser = ofType(Global.document, 'HTMLDocument')
const isNode = ofType(Global.process, 'process')

const hasEnv = typeof process === 'object' && process.env

if (!hasEnv) {
  console.warn(
    "You don't have the process.env. The `env`, `isDev` and `isProd` would be null",
  )
}

const env = hasEnv ? process.env.NODE_ENV || 'development' : null
const isDev = hasEnv ? env === 'development' : null
const isProd = hasEnv ? env === 'production' : null

export default env
export { isDev, isProd, isBrowser, isNode, Global }

exports = env
