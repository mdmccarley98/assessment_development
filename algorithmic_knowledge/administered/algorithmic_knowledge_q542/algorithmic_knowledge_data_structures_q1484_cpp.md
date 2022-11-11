# algorithmic_knowledge

## Item ID
1484

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
```cpp
class Q
{
    S a;
    S b;

public:

    void enqueue(int n)
    {
        a.push(n);
    }

    int dequeue()
    {
        if (b.size() == 0) 
        {
            while (a.size() > 0) 
            {
                b.push(a.pop());
            }
        }
        return b.pop();
    }
};
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
