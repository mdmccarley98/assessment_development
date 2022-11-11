# programmatic_problem_solving

## Item ID
1525

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
The below function attempts to format an integer, using commas as a thousands separator.  Which test case would fail, indicating a bug?

## Code Snippet (optional)
```ruby
def format(num, sep=',')
  parts = []
  while num > 0
    num, mod = num.divmod(1000)
    formatted = mod.to_s.rjust(3, '0')
    parts << formatted
  end

  result = parts.reverse.join(sep)
  if result == ''
    return '0'
  end

  result
end
```

## Answer Key
`assert format(1000) == '1,000'`

## Distractors

### 1.
`assert format(0) == '0'`

### 2.
`assert format(100) == '100'`

### 3.
`assert format(100000) == '100,000'`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

