const Runner = require('../../_runners/runner.js')

function largestClearing(rowOfBoulders, days) {
    const results = new Array(rowOfBoulders.length).fill(0)

    for (let i = 0; i < rowOfBoulders.length; i++) {
        const char = rowOfBoulders.charAt(i)
        let localDays = days

        for (let j = i; localDays >= 0 && j < rowOfBoulders.length; j++) {
            if (rowOfBoulders.charAt(j) === 'X') {
                if (localDays > 0) localDays--
                else break
            }

            results[i]++
        }
    }

    return results.indexOf(Math.max(...results))
}

const run = Runner(largestClearing)

console.log('Public: ')
run(['___', 3], 0, 'No boulders to clear.')
run(['XX_', 1], 1, 'Would remove middle boulder.')
run(['XX_X_X_X_X', 3], 2, 'Clearing starts with an opening.')
run(['XXXX_X_XX_', 2], 3, 'Clearing starts with a boulder.')


console.log('\nPrivate: ')
run(['_X_', 1], 0, 'Clears entire wall.')
run(['_______X', 1], 0, 'Clears entire wall, bigger.')
run(['X_X', 0], 1, 'Zero days just finds the index of largest opening.')
run(['XXXXXXX', 1], 0, 'Completely obstructed.')
run(['XXXXXXX', 8], 0, 'Days longer than wall.')
run(['XXXXX_X', 2], 3, 'Clears two before existing opening.')
run(['_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXX_XXXXXX', 50], 42, 'Large example.')

