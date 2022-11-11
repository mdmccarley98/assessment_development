#


## Item ID
2196

## Claim

8

## Claim Behavior (evidence)

[Welford's online algorithm](https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Welford's_online_algorithm)

## Content Target

Streaming Algorithms

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

The following function should accept an array of floating point values, and compute the sample variance in a numerically stable way.

Complete the function by filling in the missing expression.


## Code Snippet (optional)

```python
def sample_variance(array):
    mean = 0 # Running mean
    sum_sq_dist = 0 # Running sum of squared differences from the mean
    i = 0
    for item in array:
        delta = item - mean
        mean += delta / (i + 1)
        sum_sq_dist += EXPRESSION # fill in the missing expression here
        i += 1
    return sum_sq_dist / i
```


## Answer Key

```delta * (item - mean)```

## Distractors
### 1.

```delta * delta```
### 2.

```(item - mean) * (mean - item)```        

### 3.

```delta ** 2 / (i + 1)```


## Common errors, misconceptions, or irrelevant information:

Consider the first iteration. Since mean starts at 0, we expect `delta = item`, `mean = item`, and `sum_sq_dist = 0`. 

Distractor 1 results in `sum_sq_dist = item**2`.
Distractor 2 is ok on the first iteration but will accumulate negative numbers on future iterations.
Distractor 3 performs scaling, but the scaling is already done at the end. 

While the code is executable Python code, it is intended to be readable as pseudocode so R users can follow (not using generators, enumerate, anything Numpy specific etc).

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

