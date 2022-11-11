# iOS: Dynamic Binding


## Item ID
1833

## Claim
-   Claim/PI 4: The candidate is well-versed in native iOS development, along with both the underlying theory and practical application of Objective-C/Swift and of the iOS platform itself. They understand iOS data persistence methods, memory management, and performance profiling and troubleshooting, and they are comfortable using a range of UI development tools to create a responsive UI. They may not know all the details of advanced performance optimizations, but can clearly articulate tradeoffs between different libraries and tools. They display the ability to translate theoretical knowledge into practical solutions that are close to optimal.


## Claim Behavior (evidence)

> ## `respondsToSelector:`
> Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.  
> ...  
> The application is responsible for determining whether a NO response should be considered an error.
> https://developer.apple.com/documentation/objectivec/1418956-nsobject/1418583-respondstoselector

> Check if a method exists in Objective-C
> https://stackoverflow.com/a/2732882/92584

## Content Target
* objc
* dynamic binding
* selectors


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
What happens if you call the `run` method on `example`?


## Code Snippet (optional)
```objc
id example = something;
[example run];
```


## Answer Key
It might throw "unrecognized selector sent to instance" so you should check if it exists first:
```objc
if ([example respondsToSelector:@selector(run)]) {
   [example run];
}
```


## Distractors
### 1.
Dynamic Binding determines at runtime if `example` has `run` and calls the method, or does nothing.


### 2.
`objc_object` does not implement `run` so this code will throw "unrecognized selector sent to instance".


### 3.
`NSObject` does not implement `run` so this code will throw "unrecognized selector sent to instance".


## Common errors, misconceptions, or irrelevant information:
If the object implements `forwardInvocation` then it might return false to `respondsToSelector`.  So the approach in the answer will still prevent crashes, but won't prevent false negatives for objects that could respond to a selector programmatically.

1. it will crash if the object doesn't implement the method
2. an `id` is an `objc_object` however, if `something` does implement `run` then it will successfully execute the method.
2. an `id` isn't an `NSObject`, and if `something` does implement `run` then it will successfully execute the method.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

