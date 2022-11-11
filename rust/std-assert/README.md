# Rust Std Assert

## Item ID
rust-std-assert

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
- [std::assert macro](https://doc.rust-lang.org/std/macro.assert.html) - doc.rust-lang.org

## Content Target
std::assert

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

You are writing a video conferencing app.  
There is a `CameraState` type with a `calculate_total` function that returns `2`.

One of the tests is failing:

```rust
let camera = CameraState { registered: 1 };
let registered = camera.registered;
let total = camera.calculate_total();
assert!(registered == 2, "registered = {}, total = {}", registered, 1);
```

That prints the following:

```
failures:

---- example stdout ----
thread 'example' panicked at 'registered = 1, total = 1', test.rs:15:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

The test fails *as expected* because `registered` is 1, but `calculate_total()` returns 2.
But the text it is printing is wrong.

How should the `assert` part of the test be changed to make this test print the correct information?

## Code Snippet (optional)


## Answer Key

```rust
assert!(registered == total, "registered = {}, total = {}", registered, total);
```

## Distractors

### 1.
```rust
assert!(registered == total, "registered = {}, total = {}", registered, 1);
```

### 2.
```rust
assert!(registered == 1, "registered = {}, total = {}", registered, 1);
```

### 2.
```rust
assert!(registered == 2, "registered = {}, total = {}", registered, total);
```

### 3.


## Common errors, misconceptions, or irrelevant information (optional):


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

