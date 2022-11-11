# Rust Features Slice

## Item ID
rust-features-mut-slice

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [The Rust Programming Language ch4.3 Slices](https://doc.rust-lang.org/stable/book/ch04-03-slices.html) - doc.rust-lang.org

## Content Target
slices

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

What are the values of `slice_first` and `original_first`?

## Code Snippet
```rust
let mut original = [3, 2, 1];
let slice = &mut original[0..1];
slice[0] = 5;
let slice_first: i32 = slice[0];
let original_first: i32 = original[0];
```

## Answer Key
* `slice_first` == `5`
* `original_first` == `5`

## Distractors

### 1.
* `slice_first` == `5`
* `original_first` == `3`

### 2.
```
error[E0503]: cannot use `original` because it was mutably borrowed
```

### 3.
```
error: unexpected token: `..`
```


## Common errors, misconceptions, or irrelevant information (optional):

A slice points to the same memory as the original, it doesn't make a copy of the range.

A slice can be thought of as just two values, the location in memory, and the size of the array.
A slice of an array of 1 million items from the beginning to the middle of the array would only take 2 values, not 500,000 items.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

