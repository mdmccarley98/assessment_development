# programmatic_problem_solving

## Item ID
q707

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The below code iteratively calculates a running median using two heaps.  Assume there is a `heap` type which returns the smallest item at index `0`, with methods `push`, `pop`, and `pushpop` (atomically `push` then `pop`).  Fill in the missing line of code.

## Code Snippet (optional)
```python
def medians(nums):
    low, high = heap(), heap()
    for num in nums:
        if len(high) > len(low):
            low.push(-high.pushpop(num))
            yield (-low[0] + high[0]) / 2
        else:
            # (Fill in the missing line here)
            yield high[0]
```

## Answer Key
`high.push(-low.pushpop(-num))`

## Distractors

### 1.
`high.push(low.pop())`

### 2.
`low.push(high.pop())`

### 3.
`high.push(low.pushpop(num))`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

