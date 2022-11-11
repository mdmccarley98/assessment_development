# Rust Syntax Tuple

## Item ID
1415

## Claim

Claim 1: Understand the core syntax of the language itself. 


## Claim Behavior (evidence)

The Rust Programming Language ch3.2
https://doc.rust-lang.org/stable/book/ch03-02-data-types.html


## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

You want to print the status of a request in the following format:
```
success: true, errors: 0, message: success
```
Which of the following is NOT valid Rust?

## Code Snippet (optional)


## Answer Key

```rust
    let result = [true, 0, "success"];
    println!("success: {}, errors: {}, message: {}", result[0], result[1], result[2]);
```

## Distractors

### 1.

```rust
    let result = (true, 0, "success");
    println!("success: {}, errors: {}, message: {}", result.0, result.1, result.2);
```

### 2.

```rust
   let result: (bool, i32, &str) = (true, 0, "success");
   println!("success: {}, errors: {}, message: {}", result.0, result.1, result.2);
```


### 3.

```rust
    let result = (true, 0, "success");
    let (success, errors, message) = result;
    println!("success: {}, errors: {}, message: {}", success, errors, message);
```


## Common errors, misconceptions, or irrelevant information (optional):

Tuples and destructuring of tuples are a feature of Rust.
Tuples can contain different values.  And like an array, tuples are not extendable.

Tuples can contain multiple different data types, but arrays can only contain one data type.
```
error[E0308]: mismatched types
 --> src/main.rs:4:25
  |
4 |     let result = [true, 0, "success"];
  |                         ^ expected `bool`, found integer
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
