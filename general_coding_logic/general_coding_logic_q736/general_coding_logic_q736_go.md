# programmatic_problem_solving

## Item ID
736

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What does the following code output?

## Code Snippet (optional)
```go
func main() {
    ch := make(chan int)
    for _, d := range []int{3, 2, 1} {
        go func(d int) {
            time.Sleep(time.Duration(d) * time.Second)
            ch <- d
        }(d)
    }
    fmt.Println(<-ch)
}
```

## Answer Key
`1`

## Distractors

### 1.
`3`

### 2.
`[3 2 1]`

### 3.
`[1 2 3]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

