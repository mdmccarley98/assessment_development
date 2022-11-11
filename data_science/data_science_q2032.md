# Evaluation Random Walk Drift

## Item ID
2032

## Claim
3

## Threshold Probabilities
[0.3, 0.4, 0.5, 0.55]

## Claim Behavior (evidence)
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

If your model is correct, which of the following is the best forecast for y(t + 1)?

## Code Snippet (optional)

## Answer Key
y(t + 1) = y(t) + (y(t) - y(0)) / t

## Distractors
### 1.
y(t + 1) = y(t)

### 2.
y(t + 1) = y(t) + t

### 3.
y(t + 1) = y(t) + y(t) - y(t - 1)

## Common errors, misconceptions, or irrelevant information:
Distractor 1 would be a forecast for a random walk without drift. 
Distractor 3 is a noisy estimator for the drift compared to the true answer, which averages out the noise.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
