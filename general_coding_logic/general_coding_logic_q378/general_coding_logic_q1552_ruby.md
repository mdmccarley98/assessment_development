# programmatic_problem_solving

## Item ID
1552

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with the following code?

## Code Snippet (optional)
```ruby
def find_first_position(arr, fn)
  pos = false

  arr.each_with_index do |row, i|
    row.each_with_index do |cell, j|
      if fn.call(cell)
        pos = [i, j]
        break
      end
    end
  end

  pos
end
```

## Answer Key
This code will return a position for which `fn` is truthy, but might not return the *first* occurrence.

## Distractors

### 1.
This code only works for square arrays.

### 2.
This code will return the *last* position for which `fn` is truthy.

### 3.
`j` is going to be returned incorrectly. It will always be the length of the row.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

