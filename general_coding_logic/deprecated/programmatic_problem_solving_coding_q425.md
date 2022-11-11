# programmatic_problem_solving

## Item ID
q425

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
Select the line of code that completes the function

## Code Snippet (optional)
```swift
// Function that picks all the odd numbers from an array
// and stores the result in a new array
func pickOddNumbers(_ arr: [Int]) -> [Int] {
    var result: [Int] = []
    for num in arr {
        // MISSING LINE
        result.append(num)
    }
    return result
}

```

## Answer Key
guard num % 2 == 1 else { continue }

## Distractors

### 1.
if num % 2 != 0  { continue }

### 2.
guard num \u0026 1 == 0 else { continue }

### 3.
guard num \u003e\u003e 1 == num / 2 else { continue }

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

