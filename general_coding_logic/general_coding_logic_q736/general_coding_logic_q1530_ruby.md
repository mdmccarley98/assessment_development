# programmatic_problem_solving

## Item ID
1530

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
What does the following code output?

## Code Snippet (optional)
```ruby
q = Queue.new

(1..3).each do |d|
  Thread.new do |env|
    sleep d
    q << d
  end
end

puts q.pop
```

## Answer Key
`1`

## Distractors

### 1.
`3`

### 2.
`[3, 2, 1]`

### 3.
`[1, 2, 3]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

