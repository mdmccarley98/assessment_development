# programmatic_problem_solving

## Item ID
1523

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
What is the value of the variable `names` after the following code runs?

## Code Snippet (optional)
```ruby
def delete_blank_items(items)
  items.each_with_index do |item, i|
    if item.length == 0
      # remove 1 element at index i
      # modifies array in place
      items.delete_at(i)
    end
  end
end

names = ['Rachel', '', 'Meghana', '', '', 'Tim']
delete_blank_items(names)
```

## Answer Key
`["Rachel", "Meghana", "", "Tim"]`

## Distractors

### 1.
`["Rachel", "", "Meghana", "", "", "Tim"]`

### 2.
`["Rachel", "", "Meghana", "", "Tim"]`

### 3.
`["Rachel", "Meghana", "Tim"]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

