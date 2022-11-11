# mobile_knowledge

## Item ID
q290

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
ios

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you would like to generate getter and setter methods for the data property in an Objective C class, and would like them to have behavior equivalent to the following. What attributes should the property have?

## Code Snippet (optional)
```objectivec
@implementation SomeClass {
   NSArray *_data;
}
- (NSArray*)data {
    return _data;
}
- (void)setData: (NSArray*)newValue {
    _data = [newValue copy];
}
@end
```

## Answer Key
copy, nonatomic and readwrite

## Distractors

### 1.
assign, copy, atomic, and readwrite

### 2.
copy, atomic and readwrite

### 3.
strong, copy, nonatomic and readwrite

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

