# Go Data-Structures make

## Item ID
go-data-structures-make

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
> `make([]int, 10, 100)` allocates an array of 100 ints and then creates a slice structure with length 10 and a capacity of 100 pointing at the first 10 elements of the array.
> - [Effective Go - Allocation with Make](https://golang.org/doc/effective_go.html#allocation_make) - golang.org

## Content Target
* make
* slices
* arrays

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

What is the value of `arr` after the following snippet?

## Code Snippet (optional)
```golang
arr := make([]int, 3, 5)
```

## Answer Key
```
[0 0 0]
```

## Distractors
### 1.
```
[5 5 5]
```
### 2.
```
[0 0 0 0 0]
```
### 3.
```
[[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]]
```


## Common errors, misconceptions, or irrelevant information:

Make takes three arguments, the type, the number of items in the returned slice, and the capacity of the slice's backing array.
The capacity argument is optional and isn't the length of the returned slice.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

