# programmatic_problem_solving

## Item ID
q548

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
Which characters get printed to the console?

## Code Snippet (optional)
```swift
let serialQueue = DispatchQueue(label: "com.triplebyte.serial.queue")
let semaphore = DispatchSemaphore(value: 0)

serialQueue.async(execute: {
  print("A")
  serialQueue.async {
    print("B")
    semaphore.signal()
  }
  serialQueue.async {
    print("C")
  }
  semaphore.wait()
  print("D")
})
```

## Answer Key
A

## Distractors

### 1.
A,B

### 2.
A,B,C

### 3.
A,B,C,D

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

