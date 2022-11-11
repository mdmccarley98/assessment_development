# algorithmic_knowledge

## Item ID
1487

## Claim
2: data_structures

## Target Skill Level
3

## Claim Behavior (evidence)
NA

## Content Target
Stacks, Queues

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What do the classes S and Q do (assume S is defined elsewhere)?

## Code Snippet (optional)
```ruby
class Q
  def initialize()
    @a = S.new
    @b = S.new
  end

  def enqueue(item)
    @a.push(item)
  end

  def dequeue()
    if @b.length == 0
      while @a.length > 0
        @b.push(@a.pop)
      end
    end

    @b.pop
  end
end
```

## Answer Key
S is a stack, and Q is a queue. Its enqueue operation runs in constant time, and its dequeue operation runs in amortized constant time.

## Distractors

### 1.
S is a sorted list, and Q is a priority queue with two levels of priority. Its enqueue operation runs in constant time, and its dequeue operation runs in amortized constant time.

### 2.
S is a stack, and Q is a queue. Its enqueue operation runs in constant time, and its dequeue operation runs in linear time.

### 3.
S is a stack, and Q is a priority queue with two levels of priority. Its enqueue operation runs in constant time, and its dequeue operation runs in linear time.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
