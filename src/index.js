const call = (fn, args) => {
  if (Array.isArray(fn)) {
    fn.forEach(fn => call(fn, args))

    return
  }

  if (typeof fn !== 'function') {
    return
  }

  if (Array.isArray(args)) {
    fn(...args)

    return
  }

  fn(args)
}

module.exports = call
