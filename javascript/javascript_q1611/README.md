# Map, Filter, Reduce

## Item ID
1611

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language's core features

## Claim Behavior (evidence)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - mozilla.org 
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - mozilla.org 
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) - mozilla.org 

## Content Target
Functional Operations

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are trying to discover the best recipe for brewing coffee. Below is an array of trials with ratings.  `water` and `coffee` are both measures of the mass of the water and coffee used, respectively.  `rating` is a score of how much you liked that brew.  The ratio of the coffee to water is important, and it is calculated simply as `coffee / water`.

```javascript
const trials = [
    { water: 250, coffee: 15, temp: 96, rating: 4.5 },
    { water: 240, coffee: 14, temp: 98, rating: 3.7 },
    { water: 247, coffee: 14.5, temp: 94, rating: 4.2 },
    { water: 261, coffee: 16, temp: 99, rating: 3.4 },
    { water: 250, coffee: 13.5, temp: 93, rating: 2.7 },
    { water: 255, coffee: 17, temp: 94.5, rating: 3.1 }
]
```

Choose the implementation of `calcAverageRating()` that calculates the average rating for trials within a range of ratios. The range is provided by the `isRatioInRange` predicate.

```javascript
const isRatioInRange = ratio => ratio >= 0.055 && ratio <= 0.06

const averageRating = calcAverageRating(trials, isRatioInRange)
```

## Answer Key
```javascript
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
```

## Distractors
### 1.
```javascript
function calcAverageRating(trials, isRatioInRange) {
    return trials.map(trial => (
        trial.coffee / trial.water
    ))
    .filter(isRatioInRange)
    .reduce((accum, current, index, array) => (
        accum + (current / array.length)
    ), 0)
}
```

### 2.
```javascript
function calcAverageRating(trials, isRatioInRange) {
    const ratingSum = trials.map(trial => ({
        ...trial,
        ratio: trial.coffee / trial.water
    }))
    .filter(({ ratio }) => isRatioInRange(ratio))
    .reduce((accum, trial) => (
        accum + trial.rating
    ), 0)

    return ratingSum / trials.length
}
```

### 3.
```javascript
function calcAverageRating(trials, isRatioInRange) {
    return trials.map(trial => {
        return {
            ...trial,
            ratio: trial.coffee / trial.water
        }
    })
    .filter(({ ratio }) => {
        return isRatioInRange(ratio)
    })
    .reduce((accum, {rating}, index, array) => {
        return rating / array.length
    }, 0)
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* Necessary information must not be lost in the chain of operations.
* Filter changes the number of items to include in the average.  So the length of the original array is not valid for calculating the average.
* Reducers work by accumulating values.  So a reducer that does not reference the accumulator does not make sense.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

