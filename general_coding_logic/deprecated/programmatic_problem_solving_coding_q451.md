# programmatic_problem_solving

## Item ID
q451

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
Select the line of code that completes the function

## Code Snippet (optional)
```java
// Method that picks all the odd numbers from an array
// and stores the result in a new array
List<Integer> pickOddNumbers(List<Integer> arr) {
    List<Integer> result = new ArrayList<Integer>();
    for (int num : arr) {
        // MISSING LINE
        result.add(num);
    }
    return result;
}
```

## Answer Key
if (num % 2 == 0) { continue; }

## Distractors

### 1.
if (num % 2 != 0)  { continue; }

### 2.
if ((num \u0026 1) \u003e 0) { continue; }

### 3.
if ((num \u003e\u003e 1) == num / 2) { continue; }

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

