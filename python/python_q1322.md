# Python Libraries numpy matmul

## Item ID
1322

## Claim

Claim 5

## Claim Behavior (evidence)

* [numpy.dot()](https://numpy.org/doc/stable/reference/generated/numpy.dot.html?highlight=dot#numpy.dot)
* [numpy.matmul()](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)
* [Alternatives to np.matmul()](https://likegeeks.com/numpy-matrix-multiplication/#Alternatives-to-npmatmul)

## Content Target
`numpy`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem
In numpy, what is the difference between using `*`, `@`, `numpy.matmul()`, and `numpy.dot()` on two numpy arrays?

## Code Snippet (optional)

## Answer Key

* `*` is element-wise multiplication
* `@` and `matmul()` are matrix multiplication
* `dot()` is the dot product

## Distractors 
### 1.
* `*`, `@`, `matmul()`, and `dot()` are all matrix multiplication

### 2.
* `*` is element-wise multiplication
* `@`, `matmul()`, and `dot()` are matrix multiplication

### 3.

* `*` is element-wise multiplication
* `matmul()` is matrix multiplication
* `@` and `dot()` are the dot product


## Common errors, misconceptions, or irrelevant information (optional)

## Content Review

- Accuracy: 👎
    * fixed typo "mulitplication" -> "multiplication"
    * `dot()` is the dot product, which is not the same for a 3D matrix as `np.matmul()`
        * see: https://likegeeks.com/numpy-matrix-multiplication/#Alternatives-to-npmatmul
        * or numpy.dot: https://numpy.org/doc/stable/reference/generated/numpy.dot.html?highlight=dot#numpy.dot
        "If a is an N-D array and b is an M-D array (where M>=2), it is a sum product over the last axis of a and the second-to-last axis of b"
    * fixed key and distractors to test on this updated knowledge 👆😅
    * fixed evidence link, was to python's io package
- Alignment: ✅

* tested with numpy==1.19.2