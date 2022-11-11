# low_level_systems_understanding

## Item ID
q579

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What's the value of a when this code is done running?

## Code Snippet (optional)
```ruby
a = [1, 2, 3]
Process.fork do
  a.push(4)
  a.push(5)
end
a.push(4)
```

## Answer Key
`a` has been cloned, it contains `[1, 2, 3, 4]` and `[1, 2, 3, 4, 5]`

## Distractors

### 1.
`[1, 2, 3, 4]`

### 2.
`[1, 2, 3, 4, 5]`

### 3.
`a` has been cloned, it contains `[1, 2, 3, 4]` and `[1, 2, 3]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

