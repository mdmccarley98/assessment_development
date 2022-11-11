# 4: weak let


## Item ID
1835

## Claim
-   Claim/PI 4: The candidate is well-versed in native iOS development, along with both the underlying theory and practical application of Objective-C/Swift and of the iOS platform itself. They understand iOS data persistence methods, memory management, and performance profiling and troubleshooting, and they are comfortable using a range of UI development tools to create a responsive UI. They may not know all the details of advanced performance optimizations, but can clearly articulate tradeoffs between different libraries and tools. They display the ability to translate theoretical knowledge into practical solutions that are close to optimal.


## Claim Behavior (evidence)

> What’s the difference between unowned and weak? A weak reference is always optional and automatically becomes nil when the referenced object goes away.
That’s why you must define weak properties as optional var types for your code to compile: The property needs to change.
https://www.raywenderlich.com/966538-arc-and-memory-management-in-swift

XCode 12.4
> main.swift:14:11: 'weak' must be a mutable variable, because it may change at runtime


## Content Target
* swift
* weak


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Why does the `thing` variable have an issue?


## Code Snippet (optional)
```swift
class Thing {}

class Example
{
	weak let thing:Thing?
	init()
	{
		thing = Thing()
	}
}
```


## Answer Key
A `let` is immutable, and `weak` references can change at runtime.


## Distractors
### 1.
`thing` needs to be non-optional: `weak let thing:Thing`


### 2.
`thing` needs to be an implicitly unwrapped optional: `weak let thing:Thing!`


### 3.
`let` increases the retain count of a `weak` variable by 1.


## Common errors, misconceptions, or irrelevant information:
1. still doesn't compile
2. still doesn't compile
3. `let` and `weak` do not work together

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

