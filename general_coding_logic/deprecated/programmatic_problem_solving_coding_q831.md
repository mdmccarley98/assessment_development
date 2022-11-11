# programmatic_problem_solving

## Item ID
q831

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
The following code attempts to check whether parentheses are properly balanced. Which test input would return the wrong result?

## Code Snippet (optional)
```ruby
def balanced(chars)
  count = 0
  for char in chars.each_char do
    if char == '('
      count += 1
    elsif char == ')'
      count -= 1
    end
  end
  return count == 0
end
```

## Answer Key
`\

## Distractors

### 1.
`

### 2.
`\

### 3.
`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

