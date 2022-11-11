# programmatic_problem_solving

## Item ID
1508

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
The below code implements the `quickselect` algorithm for finding the kth smallest element in an unordered list.  Fill in the missing line of code.

## Code Snippet (optional)
```ruby
def select(values, k)
  pivot = values.sample
  low = Array.new
  high = Array.new

  values.each do |value|
    if value < pivot
      low << value
    elsif value > pivot
      high << value
    end
  end

  if k < low.length
    return select(low, k)
  end
  # MISSING LINE
  if k < 0
    return pivot
  end
  select(high, k)
end
```

## Answer Key
`k += high.length - values.length`

## Distractors

### 1.
`k -= values.length`

### 2.
`k -= low.length`

### 3.
`k = values.length - high.length - low.length`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

