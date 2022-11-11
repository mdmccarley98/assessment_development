# programmatic_problem_solving

## Item ID
q92

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
You have been asked to perform a code review. You notice a new function that is written to merge two sorted lists and return one combined sorted list.

What potential problems, if any, do you notice?

## Code Snippet (optional)
```ruby
# take two sorted lists, and return
# both combined in sorted order
def merge_two_sorted_lists(sorted_list_1, sorted_list_2)
  result = []
  if sorted_list_1[0] < sorted_list_2[0]
      result += sorted_list_1
  end
  result += sorted_list_2
  return result
end
```

## Answer Key
This function will not return a sorted combination of both lists.

## Distractors
### 1.
This assumes the lists are sorted high to low, not low to high.

### 2.
This will break if there are negative values in the lists.

### 3.
This looks good. There are no errors.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

