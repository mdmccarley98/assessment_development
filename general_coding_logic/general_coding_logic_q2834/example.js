function is_prime_number(num) {
  let j = 2

  while (j * j <= num) {

    if (num % j === 0) {
      return false
    }

    j++
  }

  console.log(num)
  return true
}

for (let i = 2; i < 10000; i++) {
  is_prime_number(i)
}