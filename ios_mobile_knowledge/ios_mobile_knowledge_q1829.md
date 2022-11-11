# IOS: weak self


## Item ID
1829

## Claim
-   Claim/PI 3: The candidate is comfortable with native iOS development and Objective-C or Swift. They understand how to use common UI development tools and display a solid foundation in performance profiling and troubleshooting. They show markers of real-world app design experience, but lack the advanced knowledge necessary to fix very subtle bugs or squeeze out maximum performance. They are likely able to build simple iOS apps on their own, but may make a few design errors.


## Claim Behavior (evidence)

> It should typically be used when you don't want an object to stick around until the closure is performed, or if the closure is retained for an unknown amount of time which is often the case for network requests.
https://www.donnywals.com/when-to-use-weak-self-and-why/

> For example, let’s say self is a view controller, and there is a closure with a reference to self that didn’t use weak self . In that case, even if the view controller is dismissed or popped off the navigation stack, it will stay alive and not be released from memory. You now have a view controller taking up memory, and that can have view/rendering code triggered, even though it’s no longer in the view hierarchy. This can cause exception crashes, memory crashes (if this happens dozens of times, and your memory starts filling up with zombie view controllers), and other unexpected behaviors.
https://www.quora.com/What-does-weak-self-mean-in-a-Swift-Closure?share=1

## Content Target
* references
* asynchronous blocks


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
What is a common use for `weak self`?


## Code Snippet (optional)



## Answer Key
To prevent crashes and memory leaks when dismissing a view controller before a network call has finished.


## Distractors
### 1.
To make sure network calls don't happen on the main thread.


### 2.
To build views procedurally instead of via xibs.


### 3.
To switch from strong typing to dynamic typing.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

