# programmatic_problem_solving

## Item ID
65

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
Select the line of code that completes the function

## Code Snippet (optional)
```ruby
# function recursively reverses a string 
def recursive_string_reverse(string)
  if string.length <= 1
    return string
  end
    
  first_char = string[0]
  last_chars = string[1..string.length]
  # MISSING LINE
end

```

## Answer Key
`return recursive_string_reverse(last_chars).concat(first_char)`

## Distractors

### 1.
`return recursive_string_reverse(last_chars)`

### 2.
`return first_char.concat(recursive_string_reverse(last_chars))`

### 3.
`return last_chars + first_char`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

