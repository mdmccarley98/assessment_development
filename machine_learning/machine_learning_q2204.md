#


## Item ID
2204

## Claim

8

## Claim Behavior (evidence)


> Suppose for the first N items, the probability of choosing any of the N elements is equal — 1/N. When you process the item N+1, the probability of it being chosen is 1/(N+1), which is by definition above. The probability of choosing any previous item was 1/N, and with N/(N+1) probability of staying that way - (1/N) * (N /(N+1)) = 1/(N+1). Each of the N+1 items now has 1/(N+1) of being chosen.

--[Choosing Random Elements](http://web.archive.org/web/20141026071430/http://propersubset.com:80/2010/04/choosing-random-elements.html)

## Content Target

Streaming Algorithms

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

The following function should accept an array and return an item chosen uniformly at random.

Using the function `randint(a)` which returns returns a random integer between `0` inclusive and `a`, inclusive, complete the function by filling in the missing expression. 


## Code Snippet (optional)

```python
def choose(array):
    result = None
    i = 0
    for item in array:
        if EXPRESSION: # fill in the missing expression here
            result = item
        i += 1
    return result
```


## Answer Key

```randint(i) == 0```

## Distractors
### 1.

```randint(i) > 0```

### 2.

```randint(i - 1) > 0```

### 3.

```randint(i) < i```


## Common errors, misconceptions, or irrelevant information:

Full analysis is unnecessary - on the last iteration where i == N - 1, randint(i) has a 1/N chance of keeping the last item. None of the distractors have this property.

While the code is executable Python code, it is intended to be readable as pseudocode so R users can follow (not using generators, enumerate, anything Numpy specific etc).

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

