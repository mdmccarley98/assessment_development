function f1(a) {
    if(a === 0) return 1
    return a * f1(a - 1)
}

function main() {
    const f2 = (a, b) => Math.abs(2 * a - 3 * b)
    console.log(f1(f2(2, 3)))
}