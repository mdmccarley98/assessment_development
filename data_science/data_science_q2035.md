# Evaluation Random Walk K Steps

## Item ID
2035

## Claim
3

## Threshold Probabilities
[0.25, 0.4, 0.5, 0.6]

## Claim Behavior (evidence)
> The error that the model makes in a k-step-ahead forecast is the sum of k independently and identically distributed random variables, because the model continues to make the same prediction while the variable takes k random steps. Because the variance of a sum of independent random variables is the sum of the variances, it follows that the variance of the k-step-ahead forecast error is larger than that of the one-period-ahead forecast by a factor of k. And because the standard deviation of the forecast error is the square root of its variance, it follows that the standard error of a k-step-ahead forecast is larger than that of the 1-step-ahead forecast by a factor of square-root-of-k. This is the so-called "square root of time" rule for the errors of random walk forecasts, and it explains the sideways-parabola shape of the confidence bands for long-term forecasts: that's the shape of the graph of Y=SQRT(X).

[Random walk model](https://people.duke.edu/~rnau/411rand.htm)

## Content Target
Evaluation of Business Value

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You have analyzed weekly prices for a stock and determined that they are well described by a random walk with a drift d and Gaussian noise N:

y(t) = y(t-1) + d + N(0, σ²)

You compute the standard error of your forecast for y(t + 1) to be $0.10. What is the standard error of your forecast for y(t + 16)?

## Code Snippet (optional)

## Answer Key
$0.40

## Distractors
### 1.
$0.10

### 2.
$0.20

### 3.
$1.60

## Common errors, misconceptions, or irrelevant information:
$0.10 * sqrt(16) = $0.40

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
