# programmatic_problem_solving

## Item ID
q634

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code snippet outputs a random choice from a set of characters, but is weighted to output the character “a” 50% of the time.  Fill in the missing line of code.

## Code Snippet (optional)
```ruby
# (Fill in the missing line here)
choices = []
chars.each { |key, value| choices += [key] * value }
puts choices.sample
```

## Answer Key
`chars = { "a" => 2, "b" => 1, "c" => 1 }`

## Distractors

### 1.
`chars = { "a" => 0.5, "b" => 0.25, "c" => 0.25 }`

### 2.
`chars = ["a", "b", "c"]`

### 3.
`chars = “abc”`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

