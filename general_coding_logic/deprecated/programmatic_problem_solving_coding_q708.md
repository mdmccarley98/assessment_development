# programmatic_problem_solving

## Item ID
q708

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Below are two different implementations of a `factorial` function.  Which statement is true of *only* the second version?

## Code Snippet (optional)
```plain
fun factorial(n: Int): Long {
    return if (n == 1) 1 else n * factorial(n - 1)
}

 fun factorial(n: Int, r: Long = 1L): Long {
    return if (n == 1) r else factorial(n - 1, r * n)
}
```

## Answer Key
The compiler can optimize it to prevent stack overflows.

## Distractors

### 1.
It may result in integer overflows.

### 2.
It only supports positive integers.

### 3.
It is recursive.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

