module.exports = (message, isError = false) => {
  if (isError) {
    process.stderr.write(`${message}\r\n`)
  } else {
    process.stdout.write(`${message}\r\n`)
  }
}
