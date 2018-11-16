const cache = {}
module.exports = (key, result, timeout = 0) => {
  if (cache[key]) return cache[key]
  // cache result
  result = typeof result === 'function' ? result() : result
  // cached
  cache[key] = result
  // cache timeout
  setTimeout(() => {
    delete cache[key]
  }, timeout)
}
