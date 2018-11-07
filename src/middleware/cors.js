const { 'Access-Control-Allow-Origin': whitelist } = require('../config')
const koaCors = require('@koa/cors')

module.exports = koaCors({
  origin: function ({ header }) {
    const match = whitelist.indexOf(header.origin)
    if (whitelist.length === 0 || (match > -1 && whitelist[match] === header.origin)) {
      // allow cors if
      // cros-config-empty or matched in cros list
      return header.origin // return value of `Access-Control-Allow-Origin`
    }
  }
})
