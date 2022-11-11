# low_level_systems_understanding

## Item ID
q1131

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code returns whether an array contains positive numbers. Fill in the missing line of code.

## Code Snippet (optional)
```plain
fn has_pos(nums: &[i32]) -> bool {
    let mut result = false;
    for num in nums.iter() {
        # (Fill in the missing line here)
    }
    return result;
}
```

## Answer Key
`result |= *num \u003e 0;`

## Distractors

### 1.
`result += *num \u003e 0;`

### 2.
`result |= num \u003e 0;`

### 3.
`result += num \u003e 0;`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

