# Rust Syntax Closure

## Item ID
rust-syntax-closure

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)
- [Rust by Example - fn closures capture](https://doc.rust-lang.org/stable/rust-by-example/fn/closures/capture.html) - doc.rust-lang.org
- [The Rust Programming Language ch13.1 closures](https://doc.rust-lang.org/book/ch13-01-closures.html) - doc.rust-lang.org

## Content Target
Closure Capturing

## Cognitive Model
Understanding

## Item Type
Multiple choice

## Stem

Reasoning about how values are borrowed in closures is an important part of reading a rust program.
The following program tries to increment the value `updated` three times.  
Two times in a closure that captures the value `updated`, and one time outside the closure.

Which of the following rust programs compile successfully?

## Code Snippet (optional)


## Answer Key

```rust
    let mut updated = 0;
    let mut inc = || {
        updated += 1;
    };
    inc();
    inc();
    updated += 1;
```

## Distractors

### 1.
```rust
    let mut updated = 0;
    let inc = || {
        updated += 1;
    };
    inc();
    inc();
    updated += 1;
```

### 2.
```rust
    let mut updated = 0;
    let mut inc = || {
        updated += 1;
    };
    updated += 1;
    inc();
    inc();
```

### 3.
```rust
    let mut updated = 0;
    let inc = || {
        updated += 1;
    };
    updated += 1;
    inc();
    inc();
```

## Common errors, misconceptions, or irrelevant information (optional):

The key ideas here are that the closure captures a mutable value, so the closure needs to be mutable to mutate it's state.
And the borrow-checker will make sure all uses of the the captured value are finished before allowing another borrow with `updated += 1` outside the closure.

### 1.
```
error[E0596]: cannot borrow `inc` as mutable, as it is not declared as mutable
 --> src/main.rs:8:5
  |
5 |     let inc = || {
  |         --- help: consider changing this to be mutable: `mut inc`
...
8 |     inc();
  |     ^^^ cannot borrow as mutable
```

### 2.
```
error[E0503]: cannot use `updated` because it was mutably borrowed
 --> src/main.rs:8:5
  |
5 |     let mut inc = || {
  |                   -- borrow of `updated` occurs here
6 |         updated += 1;
  |         ------- borrow occurs due to use of `updated` in closure
7 |     };
8 |     updated += 1;
  |     ^^^^^^^^^^^^ use of borrowed `updated`
9 |     inc();
  |     --- borrow later used here
```

### 3.
```
error[E0503]: cannot use `updated` because it was mutably borrowed
 --> src/main.rs:8:5
  |
5 |     let inc = || {
  |               -- borrow of `updated` occurs here
6 |         updated += 1;
  |         ------- borrow occurs due to use of `updated` in closure
7 |     };
8 |     updated += 1;
  |     ^^^^^^^^^^^^ use of borrowed `updated`
9 |     inc();
  |     --- borrow later used here
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

