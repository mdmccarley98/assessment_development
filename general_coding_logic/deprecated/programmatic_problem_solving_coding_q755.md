# programmatic_problem_solving

## Item ID
q755

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Assume there is a dynamic array type, with `len` and `cap` functions to get its current length and total capacity.  What is the most likely output of the below code?

## Code Snippet (optional)
```go
func main() {
    a := []int{}
    for i := 0; i < 1000; i++ {
        a = append(a, i)
    }
    fmt.Println(len(a), cap(a))
}
```

## Answer Key
`1000 1024`

## Distractors

### 1.
`1000 1000`

### 2.
`1000 0`

### 3.
`0 1000`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

