# Computer Science: Tail Call Optimization

## Item ID
cs-tail-call

## Claim
Computer Science

## Claim Behavior (evidence)
- [Tail Call](https://en.wikipedia.org/wiki/Tail_call)

## Content Target
Recursion

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem

Many compilers implement *Tail Call Optimization*.  One example is GCC when compiling with the "-O2" flag.

Assuming that the following C code is compiled to use *Tail Call Optimization*, which implementation of `int fib(int n)` will cause a stack overflow error for sufficiently large values of `n`?

## Code Snippet (optional)


## Answer Key

```
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

## Distractors

### 1.

```
int fib(int n) {
    int i, prev1 = 0, prev2 = 1, next = 0;

    for (i = 1; i <= n; ++i) {
        next = prev1 + prev2;
        prev1 = prev2;
        prev2 = next;
    }

    return prev1;
}
```


### 2. 

```
int fib_recurse(int n, int prev1, int prev2) {
    if (n == 0) return prev1;
    if (n == 1) return prev2;

    return fib_recurse(n - 1, prev2, prev1 + prev2);
}

int fib(int n) {
    return fib_recurse(n, 0, 1);
}
```


### 3.

```
int fib(int n) {
    int prev1 = 0, prev2 = 1, next = 0, count = 0;

    while (count < n) {
        prev1 = prev2;
        prev2 = next;
        next = prev1 + prev2;
        count++;
    }

    return next;
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* Looping control structures, like `for` and `while`, do not add to the call stack. So they will never lead to a stack overflow error.
* A common error that developers may run into when developing a useful recursive algorithm is to overlook the order of operations within the last line of the function.
* Provided that a compiler supports it, a developer can take advantage of *Tail Call Optimization* by making a recursive call as the last operation executed in a function.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
