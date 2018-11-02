const { cors } = require('../config')
const koaCors = require('@koa/cors')

module.exports = koaCors({
  origin: function ({ header }) {
    const match = cors.indexOf(header.origin)
    if (!cors || cors.length === 0 || (match > -1 && cors[match] === header.origin)) {
      // allow cors if
      // no-cros-config or cros-config-empty
      // matched in cros list
      return header.origin // return value of `Access-Control-Allow-Origin`
    }
  }
})
