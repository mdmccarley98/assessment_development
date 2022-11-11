function* gen1() {
    yield 'a'
    yield 'b'
    yield 'c'
}

function* gen2() {
    yield* gen1()
    yield* [1, 2, 3]

    return true
}

for (const element of gen2()) {
    console.log(element)
}