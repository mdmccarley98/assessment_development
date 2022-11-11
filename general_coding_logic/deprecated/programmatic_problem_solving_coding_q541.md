# programmatic_problem_solving

## Item ID
q541

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What's wrong with this code?

## Code Snippet (optional)
```objectivec
#import "MySingleton.h"
@implementation MySingleton
+ (id)sharedInstance {
    static MySingleton *sharedMySingleton = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedMySingleton = [[self alloc] init];
    });
    return sharedMySingleton;
}
@end

```

## Answer Key
Nothing; this code works properly.

## Distractors

### 1.
It doesn't check to see if sharedMySingleton was already initialized.

### 2.
onceToken is used without being initialized.

### 3.
sharedInstance should be an instance method.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

