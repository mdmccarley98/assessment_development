const Runner = require('../../_runners/runner.js')

function histogram(values, numBins) {
    const sorted = values.sort((a, b) => a - b)
                        .map(value => Math.round(value * 100))
    const first = sorted[0]
    const last = sorted[sorted.length - 1]
    const diff = last - first
    const bucketSize = diff / numBins

    let bins = new Array(numBins).fill(0)
    let activeBin = 0

    sorted.forEach(current => {
        while (current > (first + ((activeBin + 1) * bucketSize))) activeBin++

        bins[activeBin]++
    })

    return bins
}

const run = Runner(histogram)

console.log('Public:')
run([[1, 2, 3, 4, 5], 2], [3, 2], 'Simple case.')
run([[-2, -1, 0, 1, 2], 2], [3, 2], 'Negative numbers. Might fail if bin boundaries are not as specified.')
run([[-2.66, 5.11, -1.44, -1.68, 1.39, 5.29, 0.18, 2.41, 1.68, -1.33], 3], [4, 4, 2], 'Two decimal places. Might overshoot array index if there is a floating-point error.') 
run([[-26.295, 4.083, -21.568, -18.17, -17.947, -16.452, -24.836, -2.151, -29.042, -9.562, -13.107, -5.483, -4.298, -20.995], 3], [6, 4, 4], 'Three decimal places.')
run([[], 0], [], 'Empty array of values.')
run([[1], 1], [1], 'Just one value.')

console.log('\nPrivate:')
run([[0.96, 0.65, -2.43, 0.88, -1.46, 0.97, 1.6, -2.75, -2.46, 0.98, 1.75, 0.73, 4.21, -0.56, -0.24, 2.6, 0.1, -0.97, 1.36, 1.22, 3.73, 0.58, -3.29, 2.82, 0.37, 3.82, -1.79, -3.2, 2.96, 0.41, 1.01, 4.26, 4.81, 0.13, 1.05, 1.41, 4.05, 0.23, -4.15, 3.54, -2.95, 1.82, 0.79, 2.32, 2.92, 1.57, -0.22, -0.37, -0.19, 2.76], 5], [7,3,21,12,7], 'Random, normal distribution.')
run([[-3, -3, -5, -2, 0, 3, 2, -5, -8, 12, 0, -2, -7, 1, -3], 3], [9, 5, 1], 'Random.  Whole numbers.')
run([[-6.5, -7, -8.2, -0.5, 2.1, 9.3, 3.8, -3.3, -10.9, 8.8], 2], [5, 5], 'Random.  One decimal.')