# programmatic_problem_solving

## Item ID
71

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
# function calls a method on each element 
# of an array and stores the result in a new array
def map(array, method)
  result_array = []

  array.each do |element|
    # Call the method on the object
    value = element.send(method)
    # MISSING LINE
  end

  return result_array
end
```

## Answer Key
`result_array.push(value)`

## Distractors

### 1.
`break`

### 2.
`value.push(array)`

### 3.
`value.send(method)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

