
const trials = [
    { water: 250, coffee: 15, temp: 96, rating: 4.5 },
    { water: 240, coffee: 14, temp: 98, rating: 3.7 },
    { water: 247, coffee: 14.5, temp: 94, rating: 4.2 },
    { water: 261, coffee: 16, temp: 99, rating: 3.4 },
    { water: 250, coffee: 13.5, temp: 93, rating: 2.7 },
    { water: 255, coffee: 17, temp: 94.5, rating: 3.1 }
]

const isRatioInRange = ratio => ratio >= 0.055 && ratio <= 0.06

// Q: Find average rating when the ratio is between 0.055 and 0.06, inclusive.

// Answer
function calcAverageRating(trials, isRatioInRange) {
    return trials.map(trial => ({
        ...trial,
        ratio: trial.coffee / trial.water
    }))
    .filter(({ ratio }) => isRatioInRange(ratio))
    .reduce((accum, {rating}, _, array) => (
        accum + (rating / array.length)
    ), 0)
}

// D1: Average of ratios, rating information is lost
// function calcAverageRating(trials, isRatioInRange) {
//     return trials.map(trial => (
//         trial.coffee / trial.water
//     ))
//     .filter(isRatioInRange)
//     .reduce((accum, current, index, array) => (
//         accum + (current / array.length)
//     ), 0)
// }

// D2: Using original array length, not valid after the filter
// function calcAverageRating(trials, isRatioInRange) {
//     const ratingSum = trials.map(trial => ({
//         ...trial,
//         ratio: trial.coffee / trial.water
//     }))
//     .filter(({ ratio }) => isRatioInRange(ratio))
//     .reduce((accum, trial) => (
//         accum + trial.rating
//     ), 0)

//     return ratingSum / trials.length
// }

// D3: Misusing Reduce
// function calcAverageRating(trials, isRatioInRange) {
//     return trials.map(trial => {
//         return {
//             ...trial,
//             ratio: trial.coffee / trial.water
//         }
//     })
//     .filter(({ ratio }) => {
//         return isRatioInRange(ratio)
//     })
//     .reduce((accum, {rating}, index, array) => {
//         return rating / array.length
//     }, 0)
// }

const averageRating = calcAverageRating(trials, isRatioInRange)

console.log(averageRating.toFixed(2))
