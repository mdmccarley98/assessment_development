function curry(param) {
  function curried(...args) {
    if (args.length >= param.length) {
      return param.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }

  return curried
}

function sumThree(a, b, c) {
    return a + b + c
}

const curriedSumThree = curry(sumThree)

const result = curriedSumThree(1)(2, 3)

console.log(result)

// function
// string
// number
// boolean
