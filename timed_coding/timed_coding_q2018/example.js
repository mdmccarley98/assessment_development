const Runner = require('../../_runners/runner.js')

// Count vehicles over traffic sensor
function count_vehicles(times, threshold) {
    const groups = times.reduce((groups, current) => {
        if (groups.length === 0) {
            return [current]
        }
        const lastEntry = groups[groups.length - 1]
        if (current - lastEntry > threshold) {
            return [...groups, current]
        } 
        
        return groups
    }, [])

    return groups.length
}

const run = Runner(count_vehicles)

// public
run([[0, 2, 15, 16, 60, 64], 5], expected=3, 'Basic case.')
run([[0, 4, 8], 4], expected=2, 'Would fail if they check the time since previous, instead of time since first in group.')
run([[0, 1], 1], expected=1, 'Small, two-axel.')
run([[0, 1, 5, 6, 9, 11], 0], expected=6, 'Zero threshold, counts every record.')

// private
run([[1, 5, 10], 5], expected=2, 'Two groups.')
run([[], 10], expected=0, 'Empty array.')
run([[0, 3, 3, 3, 7], 3], expected=2, 'Duplicates.')
run([[0], 5], expected=1, 'Unicycle.')