# Go Syntax New

## Item ID
go-syntax-new

## Claim
1. Understand the core syntax of the language itself.


## Claim Behavior (evidence)
> Since the memory returned by new is zeroed, it's helpful to arrange when designing your data structures that the zero value of each type can be used without further initialization.
- [Effective Go - Allocation with New](https://golang.org/doc/effective_go.html#allocation_new) - golang.org

## Content Target
new

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You are writing an app that loads a binary image file.  The file has a header portion that is always 20 float32s long.

When you create a new image what is the value of `img.header[15]`?


## Code Snippet (optional)
```golang
type image struct {
	header [20]float32
}

func main() {
	img := new(image)
	v := img.header[15]
	fmt.Printf("%f\n", v)
}
```


## Answer Key

0.000000

## Distractors

### 1.

A random float value depending on what was in that memory address before it was allocated.

### 2.

syntax error: invalid array index 20

### 3.

invalid array index 15 (out of bounds)

## Common errors, misconceptions, or irrelevant information:

When using `new`, go will initialize all the fields in a struct with a zero value.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

