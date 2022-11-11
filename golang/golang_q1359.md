## Item ID
1359

## Claim 1

Candidate can understand the core syntax of the language itself

## Claim Behavior (evidence)

range - https://tour.golang.org/moretypes/16

## Cognitive Model

- Recall

## Item Type

Multiple Choice

## Stem

What's the expected output from running the main function?

## Code Snippet (optional)

```go
func main() {
	list := []int{3,2,1}
	for a, b := range list {
		fmt.Print(b)
	}
}
```

## Answer Key

- a declared but not used

## Distractors

- 012
- 321
- 123

## Common errors, misconceptions, or relevant information (optional)

- unused values need to be skipped by assigning to `_`
- ranging over a slice can return two values: index and a copy of the element at that index.
  In this case, it's confusing as to which a and b are assigned to

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
