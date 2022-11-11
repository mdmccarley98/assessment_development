# programmatic_problem_solving

## Item ID
q575

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
What does this code do?

## Code Snippet (optional)
```c
jmp_buf buf;
void compute(int n) {
  if (setjmp(buf) == 0) {
    printf("%d\n", n);
    n -= 1;
    longjmp(buf, 1);
    return;
  }

  printf("%d\n", n);
}
```

## Answer Key
Print `n`, then `n`

## Distractors

### 1.
Print `n`, then `n - 1`.

### 2.
Print an infinite number of `n`.

### 3.
Print `n`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

