# mobile_knowledge

## Item ID
q296

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
What will be the result when the following code is run?

## Code Snippet (optional)
```objectivec
- (void)viewDidLoad {
    [super viewDidLoad];

    NSLog(@"1");
    dispatch_sync(dispatch_get_main_queue(), ^{
        NSLog(@"2");
    });
    NSLog(@"3");
}
```

## Answer Key
Print 1 and hang

## Distractors

### 1.
Print 1, 2 and then hang

### 2.
Print 1, 3, 2

### 3.
Print 1, 2, 3

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

