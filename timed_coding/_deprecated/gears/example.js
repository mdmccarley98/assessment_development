
function gear_train(gears, turns) {
    const parsed = gears.split(',').map(gear => {
        return gear.split('-')
    })

    const meaningful = parsed.flat().slice(1, -1)
    
    const ratio = meaningful.reduce((accum, current, index, array) => {
        if (index % 2 === 0) {
            return accum * (current / array[index + 1])
        }
        return accum
    }, 1)

    return Math.trunc(turns * ratio)
}

const cases = [
    ['0-14,42-14,28-0', 6, 1],  // public 1
    ['0-10,5-10,5-10,5-0', 1, 8], // public 2
    ['0-10,10-0', 1, 1], // public 3
    ['0-100,5-100,100-5,100-0', 10, 10], // public 4
    ['0-10,20-10,10-0', 1, 0], // public 5

    ['0-14,42-14,28-0', 3, 0],  // private 1
    ['0-14,42-28,14-0', 3, 2],  // private 2
    ['0-8,16-9,3-0', 1, 1], // private 3
    ['0-8,16-9,3-10,15-0', 1, 1],  // private 4
    ['0-93,16-48,26-31,92-32,46-57,68-0', 2, 4] // private 5
]

cases.forEach(([gears, turns, expected]) => {
    console.log(`gears: ${gears}; turns: ${turns}; expected: ${expected}; output: ${gear_train(gears, turns)}`)
})