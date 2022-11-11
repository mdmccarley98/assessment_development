# Python Libraries numpy shape

## Item ID
1323

## Claim

Claim 5

## Claim Behavior (evidence)

[Source](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html). Shape of numpy array

## Content Target
`numpy`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem
What is the `array.shape[0]` equal to for the 2 dimensional array below?

## Code Snippet (optional)

```python
import numpy as np
array = np.array([[-1, 0],[2, 6],[3, 4]])
```

## Answer Key

```
3
```

## Distractors 
### 1.

```
2
```

### 2.

```
[-1, 0]
```

### 3.

```
-1
```


## Common errors, misconceptions, or irrelevant information (optional)
`array.shape` returns a tuple of (# of rows, # of columns)

## Content Review

- Accuracy: ✅
- Alignment: ✅
    * I think it's unlikely that [0] would be mistaken for the second element
      * changed distractor 2 from `6` to `[-1, 0]` to test if they know what `shape` means
      * changed distractor 3 from `4` to `-1` to test if they know what `shape` means

* fixed `<code>` formatting to ` ```python `

* tested with `numpy==1.19.2`
