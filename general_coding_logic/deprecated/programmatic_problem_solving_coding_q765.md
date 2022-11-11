# programmatic_problem_solving

## Item ID
q765

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
The following code checks for whether brackets are properly balanced and nested, such as in JSON text. Fill in the missing line of code

## Code Snippet (optional)
```ruby
def balanced(chars, left="{[", right="}]")
  braces = []
  for char in chars.each_char do
    if left.include? char
      braces.push(char)
    elsif right.include? char
      # (Fill in the missing line here)
    end
  end
  return braces.empty?
end
```

## Answer Key
`return false if braces.pop() != left[right.index(char)]`

## Distractors

### 1.
`braces.push(char)`

### 2.
`braces.pop(right.index(char))`

### 3.
`return true if braces[-1] != char]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

