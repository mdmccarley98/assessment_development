const Runner = require('../../_runners/runner')

const convert = {
    0: 'A',
    1: 'C',
    2: 'G',
    3: 'T'
}

const toDNA = (num) => (
    num.toString(4).split('').map(digit => (
        convert[digit]
    )).join('')
)

const run = Runner(toDNA)

console.log('Public')
run([0], 'A', '1', 'Just one.')
run([10], 'GG', 'Ten.')
run([19], 'CAT', 'Cat.')
run([9156], 'GATTACA', 'Larger value.')

console.log('Private')
run([301], 'CAGTC', 'Random number, 301.')
run([676], 'GGGCA', 'Random number, 676.')
run([119], 'CTCT', 'Random number, 119.')
run([917], 'TGCCC', 'Random number, 917.')
run([195], 'TAAT', 'Random number, 195.')
run([600], 'GCCGA', 'Random number, 600.')
