# programmatic_problem_solving

## Item ID
q766

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
What does the following code output?

## Code Snippet (optional)
```go
type St struct {
    Name string
}

func main() {
    a := []St{St{"a"}}
    b := &a[0]
    c := *b
    b.Name = "b"
    c.Name = "c"
    fmt.Println(a)
}
```

## Answer Key
`[{b}]`

## Distractors

### 1.
`[{a}]`

### 2.
`[{c}]`

### 3.
`[{bc}]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

