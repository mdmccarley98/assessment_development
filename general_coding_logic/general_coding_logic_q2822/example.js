
const recursion_a = (num) => {
  if (num === 0 || num > 1000) return num

  if (num > 0) {
    return recursion_b((num + 1) * (-1))
  }

  return recursion_a(num + 1);

}

const recursion_b = (num) => {
  if (num === 0 || num > 1000) return num

  if (num < 0) {
    return recursion_a((num - 1) * (-1))
  }

  return recursion_b(num - 1)
}

console.log('' + recursion_a(100) + recursion_b(100))
