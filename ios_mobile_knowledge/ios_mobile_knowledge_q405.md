# mobile_knowledge

## Item ID
q405

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
ios

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which statement about the following code is true?

## Code Snippet (optional)
```objectivec
// Automatic reference counting is disabled
NSString* a = [[NSString alloc] initWithUTF8String:"Hello"];
NSString* b = [a retain];
NSString* c = [b copy];
[a release];
[a release];
[c release];
```

## Answer Key
The string `a` is deallocated immediately after the 2nd call to `[a release]`

## Distractors

### 1.
Three different string instances are created and then deallocated, although all three contain the text “Hello”.

### 2.
A segfault occurs when the second `[a release]` is executed, as `a` has already been released.

### 3.
Releasing the same object twice is fine. However,  this code leaks memory because `b` is never released.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

