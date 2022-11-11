# Go Containers Slice Expansion

## Item ID
go-containers-slice-expansion

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.


## Claim Behavior (evidence)

> Slices hold references to an underlying array, and if you assign one slice to another, both refer to the same array. 
- [Effective Go - Slices](https://golang.org/doc/effective_go.html#slices) - golang.org

> Sometimes it's necessary to allocate a 2D slice, a situation that can arise when processing scan lines of pixels, for instance. There are two ways to achieve this. One is to allocate each slice independently; the other is to allocate a single array and point the individual slices into it. Which to use depends on your application. If the slices might grow or shrink, they should be allocated independently to avoid overwriting the next line; if not, it can be more efficient to construct the object with a single allocation.
- [Effective Go - Two Dimensional Slices](https://golang.org/doc/effective_go.html#two_dimensional_slices) - golang.org

## Content Target
slices
append

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You're working on a graphics library that uses 2D matrices.  Sometimes it's easier to use a flat one dimensional array, and sometimes it's easier to use an array of arrays to refer to the values in the matrix.

`flat` is a one dimensional array initialized with 9 values.

`twoDimensional` is a two dimensional array made from slices of the flat array.

What is the value of `flat` after this code is executed?


## Code Snippet (optional)
```golang
	flat := [9]int{
		1, 2, 3,
		4, 5, 6,
		7, 8, 9,
	}
	col1 := flat[0:3]
	col2 := flat[3:6]
	col3 := flat[6:9]
	twoDimensional := [][]int{col1, col2, col3}

	twoDimensional[0][2] = 11
	col2 = append(col2, 10)

    fmt.Println(flat)
```

## Answer Key

* [1 2 11 4 5 6 10 8 9]

## Distractors

### 1.
* [1 2 3 4 5 6 7 8 9]

### 2.
* [1 2 11 4 5 6 7 8 9]

### 3.
* [1 2 11 4 5 6 10 7 8 9]

## Common errors, misconceptions, or irrelevant information:

Slices refer to the same memory that they are taking a slice of.  When `append` is called on `col2`, it will expand the slice into existing memory for `flat`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

