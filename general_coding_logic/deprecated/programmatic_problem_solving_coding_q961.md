# programmatic_problem_solving

## Item ID
q961

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Fill in the missing line of code.

## Code Snippet (optional)
```ruby
def groupby(values, &block)
  # (Fill in the missing line here)
  for value in values do
    groups[block.call(value)].push(value)
  end
  groups
end

# groupby(1..3) {|i| i % 2} == {1=>[1, 3], 0=>[2]}
```

## Answer Key
`groups = Hash.new { |hash, key| hash[key] = [] }`

## Distractors

### 1.
`groups = Hash.new []`

### 2.
`groups = Hash.new`

### 3.
`default = []; groups = Hash.new { |hash, key| hash[key] = default }`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

