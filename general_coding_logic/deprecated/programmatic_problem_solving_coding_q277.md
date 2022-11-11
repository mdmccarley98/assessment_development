# programmatic_problem_solving

## Item ID
q277

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which statement about the runTest() function is most accurate?

## Code Snippet (optional)
```swift
var number = 0

func test() {
    for i in 1 ... 10 {
        // Starts a new thread with a block
        Thread.init() {
            number += i
        }.start()
    }
    print(number)
}

func runTest() {
    for i in 1 ... 10 {
        number = 0
        test()
    }
}
```

## Answer Key
It prints out ten unpredictable values that are either positive or 0.

## Distractors

### 1.
It prints out ten unpredictable positive values.

### 2.
It prints out \

### 3.
 ten times.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

