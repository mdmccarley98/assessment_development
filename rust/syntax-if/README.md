# Rust Syntax If Expressions

## Item ID
rust-syntax-if

## Claim
1. Understand the core syntax of the language itself.


## Claim Behavior (evidence)
* [The Rust Programming Language ch3.5 Control Flow](https://doc.rust-lang.org/stable/book/ch03-05-control-flow.html#if-expressions) - docs.rust-lang.org


## Content Target
if expressions


## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem

You're working on a gardening app that uses AI to see if there are green plants in the garden.

Which one of the following are NOT valid rust?

## Code Snippet (optional)


## Answer Key

```rust
    let green_plants = 1;
    if green_plants {
        println!("There are green plants.");
    }
```

## Distractors

### 1.
```rust
    let green_plants = true;
    if green_plants {
        println!("There are green plants.");
    }
```

### 2.
```rust
    let green_plants = true;
    if green_plants == true {
        println!("There are green plants.");
    }
```

### 3.
```rust
    let green_plants = 1;
    if green_plants >= 1 {
        println!("There are green plants.");
    }
```

## Common errors, misconceptions, or irrelevant information (optional):
Rust does not use "truthy" logic.  Types need to be explicitly converted to a `bool` type in an `if` expression.

`1` is an integer type, not a boolean, when `green_plants` is `1` then it fails with the following error:
```
error[E0308]: mismatched types
  --> src/main.rs:12:8
   |
12 |     if green_plants {
   |        ^^^^^^^^^^^^ expected `bool`, found integer
```

When `green_plants` is `true` then `if green_plants == true` compiles successfully.  Clippy however issues a warning for this:
```
warning: equality checks against true are unnecessary
  --> src/main.rs:26:8
   |
26 |     if green_plants == true {
   |        ^^^^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `green_plants`
   |
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

