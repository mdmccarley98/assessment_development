# programmatic_problem_solving

## Item ID
1545

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
What does the following code do?

## Code Snippet (optional)
```ruby
def _(func, items)
  i = 0

  items.each do |item|
    if func.call(item)
      items[i] = item
      i += 1
    end
  end
  
  items.slice!(i .. -1)
  return
end
```

## Answer Key
Filter a sequence in-place for items which satisfy a predicate

## Distractors

### 1.
Remove items which satisfy a predicate

### 2.
Partition the items around a pivot value

### 3.
Return sorted items

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

