# Rust Syntax Slice

## Item ID
1413

## Claim

Claim 1: Candidate can understand the core syntax of the language itself


## Claim Behavior (evidence)

The Rust Programming Language - ch. 4.3
https://doc.rust-lang.org/book/ch04-03-slices.html


## Cognitive Model

Recall
Comprehend

## Item Type

Multiple Choice

## Stem

There is a logging function called log that takes
a `message: &str` argument.
You need to use this function to print "123".
Which of the following methods work?

## Code Snippet

```rust
/// Logging function used in each example.
fn log(message: &str) {
    println!("{}", message);
}
```

## Answer Key

```rust
    let numbers = "01234";
    log(&numbers[1..4]);
```

## Distractors

### 1.
```rust
    let numbers = "1234";
    log(numbers[..3]);
```

### 2.
```rust
    let numbers = "01234";
    log(&numbers[1:4]);
```

### 3.
```rust
    let numbers = "123";
    log(&numbers[0..4]);
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
The range in the slice is correct.  But the return
type of the slice should be a reference to match the log function.
```
error[E0308]: mismatched types
 --> src/main.rs:6:9
  |
6 |     log(numbers[..3]);
  |         ^^^^^^^^^^^^
  |         |
  |         expected `&str`, found `str`
  |         help: consider borrowing here: `&numbers[..3]`
```

### 2.
This fails to compile.  Rust slices can be created with ranges, this is not how to write a range in rust.
```
error: expected type, found `4`
 --> src/main.rs:6:20
  |
6 |     log(&numbers[1:4]);
  |                   -^ expected type
  |                   |
  |                   tried to parse a type due to this
```

### 3.
This compiles, but fails at runtime, the string is only 3 characters long, and the slice wanted 4 characters.
```
thread 'main' panicked at 'byte index 4 is out of bounds of `123`'
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
