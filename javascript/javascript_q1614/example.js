function* gen1() {
    console.log(yield 1)
    console.log(yield 2)
    console.log(yield 3)
}

const iterator = gen1()

console.log(iterator.next('a').value)
console.log(iterator.next('b').value)
console.log(iterator.next('c').value)