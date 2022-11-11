const fp_operation = (...functions) => {
  const [first, ...restOfFuncs] = functions.reverse()
  return (...args) => restOfFuncs.reduce((res, fn) => fn(res), first(...args))
}

const result = fp_operation(
    x => x + 1,
    x => x * 10   
)(5)

console.log(result)
