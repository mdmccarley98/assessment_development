# programmatic_problem_solving

## Item ID
q706

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider sort routines which allow passing a custom comparison function, as well as a custom sort key function (also known as a Schwartzian transform).  Which scenario can't be accomplished with a single sort key function?

## Code Snippet (optional)
```ruby
sort { |obj1, obj2| ... }  # ternary comparison function
sort_by { |obj| ... }  # sort key function
```

## Answer Key
Compound sort by descending `rank` and ascending `name`.

## Distractors

### 1.
Compound sort by ascending `rank` and ascending `name`.

### 2.
Compound sort by descending `rank` and descending `name`.

### 3.
None; sort keys can implement any comparison.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

