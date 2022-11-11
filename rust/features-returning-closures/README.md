# Rust Features Returning Closures

## Item ID
rust-features-returning-closures

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [Rust by Example - Closures Output Parameters](https://doc.rust-lang.org/stable/rust-by-example/fn/closures/output_parameters.html) - doc.rust-lang.org
- [The Rust Programming Language - ch19.5 advanced functions and closures](https://doc.rust-lang.org/book/ch19-05-advanced-functions-and-closures.html) - doc.rust-lang.org

## Content Target
Closures
dyn

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

Writing a function that returns a function can be tricky.

Lets say you want a function generator, that creates functions that always adds `n` to the next variable.
```rust
let add_five = add_n(5);
```
Now calling `add_five(10)` results in `15`.

Which of the following will NOT work and why?

## Code Snippet (optional)


## Answer Key

Return types must be sized.

```rust
fn add_n(n: i32) -> dyn Fn(i32) -> i32 {
    move |x| x + n
}
```

## Distractors

### 1.

Unexpected syntax `dyn`.

```rust
fn add_n(n: i32) -> Box<dyn Fn(i32) -> i32> {
    Box::new(move |x| x + n)
}
```

### 2.

The inner closure was moved.

```rust
fn add_n<'a>(n: i32) -> impl Fn(i32) -> i32 {
    move |x| x + n
}
```

### 3.

The inner closure is executed inside add_n and cannot be executed more than once.

```rust
fn add_n<'a>(n: i32) -> impl FnOnce(i32) -> i32 {
    move |x| x + n
}
```

## Common errors, misconceptions, or irrelevant information (optional):

Return types must be `Sized`.

An anonymous closure's type is not known at compile time, so they need to be in a `Box<dyn ...>`,
or they need to defined by `impl Trait` such as `impl FnOnce`, `impl Fn`, or `impl FnMut`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

