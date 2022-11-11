# programmatic_problem_solving

## Item ID
q969

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
What does the following code output, if the sort method is stable?

## Code Snippet (optional)
```ruby
User = Struct.new(:age, :name)
users = [User.new(20, "Alice"), User.new(10, "Bob"), User.new(20, "Charlie")]
print users.sort_by { |user| [-user.age] }.map { |user| user.name }
```

## Answer Key
`["Alice", "Charlie", "Bob"]`

## Distractors

### 1.
`["Charlie", "Alice", "Bob"]`

### 2.
`["Alice", "Bob", "Charlie"]`

### 3.
`["Bob", "Alice", "Charlie"]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

