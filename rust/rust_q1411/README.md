# Rust Syntax Characters

## Item ID
1411

## Claim
Claim 1: Candidate can understand the core syntax of the language itself

## Claim Behavior (evidence)

Definition of String type:
https://doc.rust-lang.org/std/string/struct.String.html

## Cognitive Model

Recall

## Item Type
Multiple Choice

## Stem
How can you store the name of someone named Jessie?

## Code Snippet (optional)


## Answer Key

```rust
let name = "Jessie";
```


## Distractors

1. 
```rust
let name = 'Jessie';
```

2.
```rust
let name = String("Jessie");
```

3.
```rust
let name = &str("Jessie");
```

## Common errors, misconceptions, or irrelevant information (optional):

### key
Any of these constructors work:

```rust
let name: &str = "Jessie";
let name: String = String::from("Jessie");
let name: String = "Jessie".to_string();
```

### 1.

Strings are double quoted, not single quoted.
```
error: character literal may only contain one codepoint
 --> key/src/main.rs:4:16
  |
4 |     let name = 'Jessie';
  |                ^^^^^^^^
  |
help: if you meant to write a `str` literal, use double quotes
  |
4 |     let name = "Jessie";
  |                ^^^^^^^^
```

### 2. 

There is no 'default constructor' for the String type like in C++.
```
error[E0423]: expected function, tuple struct or tuple variant, found struct `std::string::String`
 --> src/main.rs:4:16
  |
4 |     let name = std::string::String("Jessie");
  |                ^^^^^^^^^^^^^^^^^^^ did you mean `std::string::String { /* fields */ }`?

error: aborting due to previous error
```

Even the above error from the compiler is misleading.  
Either of these constructors work:

```rust
let name = "Jessie";
let name = String::from("Jessie");
```

### 3.

There is no need to type `&str` in front of a string.

```
error[E0423]: expected function, found builtin type `str`
 --> src/main.rs:4:17
  |
4 |     let name = &str("Jessie");
  |                 ^^^ not a function
```

Either of these constructors work:

```rust
let name = "Jessie";
let name = String::from("Jessie");
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
