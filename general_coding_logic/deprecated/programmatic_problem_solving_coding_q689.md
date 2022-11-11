# programmatic_problem_solving

## Item ID
q689

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
The below code implements the sieve of Eratosthenes algorithm for finding prime numbers.  What's wrong with it?

## Code Snippet (optional)
```ruby
primes = Enumerator.new do |y|
  ints = (2..Float::INFINITY).lazy
  loop do
    prime = ints.next
    y << prime
    ints = ints.select { |i| i % prime > 0 }
  end
end
```

## Answer Key
It eventually raises a stack overflow error

## Distractors

### 1.
It never terminates when called

### 2.
It only sieves even numbers

### 3.
It doesn't output the first prime number

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

