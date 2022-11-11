const Runner = require('../../_runners/runner.js')

function vowelsToFront(inputString) {
    const {vowels, consonants} = inputString.split('').reduce((accum, current) => {
        let addTo = 'consonants'
        if ('AaEeIiOoUu'.includes(current)) {
            addTo = 'vowels'
        }

        return {
            ...accum,
            [addTo]: [...accum[addTo], current]
        }
    }, { vowels: [], consonants: []})

    return [...vowels, ...consonants].join('')
}

const run = Runner(vowelsToFront)

console.log('Public: ')

run(['abcde'], 'aebcd', 'Simple case.')
run(['aebcdae'], 'aeaebcd', 'Shifted to beginning in order, not sorted.')
run(['AbCde'], 'AebCd', 'Capitalization preserved.')
run([''], '', 'Empty string.')

console.log('\nPrivate: ')

run(['grtHHBklJvexrKUIaDAT'], 'eUIaAgrtHHBklJvxrKDT', 'Random: grtHHBklJvexrKUIaDAT')
run(['NUXqDWBJQoJSYETEcKPG'], 'UoEENXqDWBJQJSYTcKPG', 'Random: NUXqDWBJQoJSYETEcKPG')
run(['yVkEbDiMEBOZwBmLaHii'], 'EiEOaiiyVkbDMBZwBmLH', 'Random: yVkEbDiMEBOZwBmLaHii')
run(['gbDAhlnnIVxEwGVxkItc'], 'AIEIgbDhlnnVxwGVxktc', 'Random: gbDAhlnnIVxEwGVxkItc')
run(['ZPlHGUZtvInfVnZxWrST'], 'UIZPlHGZtvnfVnZxWrST', 'Random: ZPlHGUZtvInfVnZxWrST')