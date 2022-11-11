# programmatic_problem_solving

## Item ID
q291

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What would be the result of running the following code?

## Code Snippet (optional)
```swift
struct SomeStruct {
    var name: String
}

class SomeClass {
    var data : SomeStruct
    init(data: SomeStruct) {
        self.data = data
    }
}

var data = SomeStruct(name: "A")
var obj = SomeClass(data: data)
var objCopy = obj

data.name = "B"
print(obj.data.name)

objCopy.data.name = "C"
print(obj.data.name)
```

## Answer Key
It prints A, C

## Distractors

### 1.
It prints B, C

### 2.
It prints A, A

### 3.
It prints B, B

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

