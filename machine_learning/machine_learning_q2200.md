#


## Item ID
2200

## Claim

8

## Claim Behavior (evidence)

[Reservoir Sampling](https://en.wikipedia.org/wiki/Reservoir_sampling)

## Content Target

Streaming Algorithms

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

The following function should accept an array of values, and return a sample of `r` items, chosen uniformly at random and without replacement.

Using the function `randrange(a)` which returns returns a random integer between `0` inclusive and `a` exclusive, complete the function by filling in the missing expression. 


## Code Snippet (optional)

```python
def sample(array, r):
    result = []
    i = 0
    for item in array:
        if i < r:
            result.append(item)
        else:            
            index_to_overwrite = EXPRESSION # fill in the missing expression here
            if index_to_overwrite < r:
                result[index_to_overwrite] = item
        i += 1
    return result
```


## Answer Key

```randrange(i + 1)```

## Distractors
### 1.

```randrange(r)```

### 2.

```randrange(i)```

### 3.

```randrange(r + 1)```


## Common errors, misconceptions, or irrelevant information:

Full analysis is unnecessary - the last item should be included in the sample with probability `r / N`. 

The randrange thus needs to produce a value in the range `[0..N)` and `N` is equal to `i + 1` on the last iteration.

While the code is executable Python code, it is intended to be readable as pseudocode so R users can follow (not using generators, enumerate, anything Numpy specific etc).

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

