# Go Syntax Named Results

## Item ID
go-syntax-named-results

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)
- [Effective Go - Named Results](https://golang.org/doc/effective_go.html#named-results) - golang.org

## Content Target
function named results

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Write a function declaration named `isOne` that returns an `error` if its parameter named `n` is not the integer `1`.

Choose the correct function declaration.

## Code Snippet (optional)
```golang
/* your declaration goes here */ {
	if n != 1 {
		err = errors.New("n is not one")
	}
	return err
}
```

## Answer Key

```golang
func isOne(n int) (err error)
```

## Distractors

### 1.
```golang
func isOne(n int) error
```

### 2.
```golang
func isOne(n int) err error
```

### 3.
```golang
func isOne(n int) err
```

## Common errors, misconceptions, or irrelevant information:

When you use a single named return value, you must put it in parentheses.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

