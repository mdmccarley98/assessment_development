const Runner = require('../../_runners/runner.js')

const HOURS_IN_DAY = 24
const MINUTES_IN_DAY = HOURS_IN_DAY * 60
const SECONDS_IN_DAY = MINUTES_IN_DAY * 60

const zeroPad = (num, places) => String(num).padStart(places, '0')

function toDecimalTime(hour, minute, second) {
    const percentOfDay = (hour / HOURS_IN_DAY) +
                        (minute / MINUTES_IN_DAY) +
                        (second / SECONDS_IN_DAY)

    const importantDigits = Math.trunc(percentOfDay * 100000)
    const digitString = zeroPad(importantDigits, 6)
    const dHour = parseInt(digitString.slice(0, 2), 10)
    const dMinute = parseInt(digitString.slice(2, 4), 10)
    const dSecond = parseInt(digitString.slice(4, 6), 10)
    
    
    return [dHour, dMinute, dSecond]
}

const run = Runner(toDecimalTime)

console.log('Public:')
run([0, 0, 0], [0, 0, 0], 'Midnight.')
run([12, 0, 0], [5, 0, 0], 'Noon.')
run([3, 30, 30], [1, 46, 18], 'Three thirty.')
run([17, 39, 41], [7, 35, 89], '5:39:41 PM')

console.log('\nPrivate: ')
run([23, 59, 59], [9, 99, 98], 'One second before midnight.')
run([0, 0, 1], [0, 0, 1], 'One second after midnight.')
run([0, 0, 9], [0, 0, 10], 'When the seconds diverge.')
run([09, 00, 23], [3, 75, 26], 'Random.')
run([10, 25, 52], [4, 34, 62], 'Random.')
run([12, 40, 15], [5, 27, 95], 'Random.')
run([13, 45, 37], [5, 73, 34], 'Random.')
run([15, 15, 48], [6, 35, 97], 'Random.')