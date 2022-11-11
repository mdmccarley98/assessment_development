# programmatic_problem_solving

## Item ID
1492

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Threshold Probabilities
[.50, .65, .85, .95]

## Item Type
Multiple Choice

## Stem
The following code attempts to detect whether an array contains positive and negative numbers in a single pass.  Which test input would reveal a bug by producing incorrect output?

## Code Snippet (optional)
```cpp
std::tuple<bool, bool> has_pos_neg(const std::vector<int>& nums){
    bool has_pos = false;
    bool has_neg = false;
    for (const auto& num : nums) {
        has_pos = num > 0;
        has_neg = num < 0;
    }
    return std::make_tuple(has_pos, has_neg);
}
```

## Answer Key
`{-1, 0, 1}`

## Distractors

### 1.
`{}`

### 2.
`{0, 1, 2}`

### 3.
`{0, -1, -2}`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

