#


## Item ID
2193

## Claim

8

## Claim Behavior (evidence)

[Moving average](https://en.wikipedia.org/wiki/Moving_average)

## Content Target

Streaming Algorithms

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

The following function should accept an array of floating point values and compute the moving average (aka rolling average) over the specified window size.

For example, after passing `[2, 4, 6, 8, 10]` and a window_size of `3`, the output array should be `[2, 3, 4, 6, 8]`.

Complete the function by filling in the missing expression.

## Code Snippet (optional)

```python
def rolling(array, output_array, window_size):
    total = 0.0
    buffer = zeros(window_size) # An array of length window_size filled with zeros
    i = 0
    for x in array:
        total += x
        if i >= window_size:
            # fill in the missing line here
        buffer[i % window_size] = x        
        output_array[i] = total / (i+1 if i < window_size else window_size)
        i += 1
```


## Answer Key

```total -= buffer[i % window]```

## Distractors
### 1.

```total -= buffer[i - window + 1]```
### 2.

```total -= buffer[i - window]```        

### 3.

```total -= buffer[window - (i % window)]```


## Common errors, misconceptions, or irrelevant information:

Distractor 1 goes out of range.
Distractor 2 also goes out of range, though in Python since negative list indexes are allowed it appears to work until i reaches -(window+1).
Distractor 3 stays in range but computes garbage.

While the code is executable Python code, it is intended to be readable as pseudocode so R users can follow (not using generators, enumerate, anything Numpy specific etc).

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

