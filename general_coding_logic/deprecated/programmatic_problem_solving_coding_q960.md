# programmatic_problem_solving

## Item ID
q960

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
Fill in the missing line of code.

## Code Snippet (optional)
```go
func unique(values []string) []string {
    result := []string{}
    seen := map[string]bool{}
    for _, value := range values {
        if !seen[value] {
            result = append(result, value)
        }
        // (Fill in the missing line here)
    }
    return result
}

// unique([]string{"a", "b", "a"}) = [a b]
```

## Answer Key
`seen[value] = true`

## Distractors

### 1.
`seen[value] += 1`

### 2.
`append(seen, value)`

### 3.
`result[len(result)-1] = value`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

