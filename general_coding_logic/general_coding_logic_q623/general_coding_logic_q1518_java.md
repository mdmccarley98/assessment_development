# programmatic_problem_solving

## Item ID
1518

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
The following code implements a random sample of items in a single pass.  Fill in the missing line of code.

## Code Snippet (optional)
```java
public ArrayList<String> sample(ArrayList<String> items, int n)
{
    Random random = new Random();
    ArrayList<String> result = new ArrayList<>();
    for (int i = 0; i < items.size(); i++) {
        if (i < n) {
            result.add(items.get(i));
        } else {
            int j = random.nextInt(i + 1); // from 0 to i inclusive
            if (j < n) {
                // MISSING CODE
            }
        }
    }
    return result;
}
```

## Answer Key
```java
                result.set(j, items.get(i));
```

## Distractors

### 1.
```java
                result.set(i, items.get(i));
```

### 2.
```java
                result.add(items.get(i));
```

### 3.
```java
                result.remove(j);
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

