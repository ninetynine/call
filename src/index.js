const argsToArray = args => (
  !Array.isArray(args)
    ? [args]
    : args
)

const isCallable = fn => (
  Array.isArray(fn) || typeof fn === 'function'
)

const call = (fn, args) => {
  if (!isCallable(fn)) {
    return
  }

  args = argsToArray(args)

  if (Array.isArray(fn)) {
    return (
      fn.map(fn => call(fn, args))
    )
  }

  return fn(...args)
}

const chain = (fn, args) => {
  let out

  if (!isCallable(fn)) {
    return out
  }

  args = argsToArray(args)

  if (Array.isArray(fn)) {
    fn.forEach((fn, key) => {
      if (key === 0) {
        out = chain(fn, args)

        return
      }

      out = chain(fn, [out, ...args])
    })

    return out
  }

  return call(fn, args)
}

export {
  call, chain,
  argsToArray, isCallable
}

export default call
