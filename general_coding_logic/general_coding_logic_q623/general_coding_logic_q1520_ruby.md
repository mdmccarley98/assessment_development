# programmatic_problem_solving

## Item ID
1520

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
The following code implements a random sample of items in a single pass.  Fill in the missing line of code.

## Code Snippet (optional)
```ruby
def sample(items, n)
  result = Array.new

  items.each_with_index do |item, i|
    if i < n
      result.push(item)
    else
      j = rand(0..i)
      if j < n
        # MISSING LINE
      end
    end
  end

  result
end
```

## Answer Key
`result[j] = item`

## Distractors

### 1.
`result[i] = item`

### 2.
`result.push(item)`

### 3.
`result.delete_at(j)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
