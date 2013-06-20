function concastack (err, err2) {
  if ((!err2.message || !err2.message.length) && err2.stack) {
    err2.stack = 'From' + err2.stack.slice(err2.stack.indexOf('\n'))
  }
  err.stack = err.stack + '\n' + err2.stack
  return err
}

module.exports = concastack