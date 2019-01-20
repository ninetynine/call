const call = (fn, args) => {
  if (Array.isArray(fn)) {
    fn.forEach(fn => call(fn, args))

    return
  }

  if (typeof fn !== 'function') {
    return
  }

  fn(...args)
}

module.exports = call