# Rust Containers Mut Loop

## Item ID
1388

## Claim
Claim 2: Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
The Rust Programming Language ch.8.1
"Storing Lists of Values with Vectors" >
"Iterating over a Vector"
https://doc.rust-lang.org/stable/book/ch08-01-vectors.html#iterating-over-the-values-in-a-vector


## Cognitive Model


## Item Type
Multiple Choice

## Stem
You're writing a storefront program, and after the order has been
completed you want to mark all the items as complete.
The items are a `&mut Vec<Item>` but the code has an error.

How can you modify an item in a `Vec` inside a loop?

## Code Snippet

```rust
    for item in items {
        item.is_ordered = true;
    }
```

```
error[E0594]: cannot assign to `item.is_ordered`, as `item` is not declared as mutable
 --> src/main.rs:8:9
  |
7 |     for item in items {
  |         ---- help: consider changing this to be mutable: `mut item`
8 |         item.is_ordered = true;
  |         ^^^^^^^^^^^^^^^^^^^^^^ cannot assign
```

## Answer Key

```rust
    for item in &mut items {
        item.is_ordered = true;
    }
```

## Distractors

### 1.

```rust
    for mut item in items {
        item.is_ordered = true;
    }
```

### 2.

```rust
    for mut item in &items {
        item.is_ordered = true;
    }
```

### 3.

```rust
    for &mut item in items {
        item.is_ordered = true;
    }
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
The container should have been `mut` borrowed.
The compiler suggestion to use `mut item` doesn't fix the problem,
and instead generates a new error:
```
error[E0382]: borrow of moved value: `items`
  --> src/main.rs:11:12
   |
5  |     let mut items: Vec<Item> = setup();
   |         --------- move occurs because `items` has type `std::vec::Vec<Item>`, which does not implement the `Copy` trait
6  | 
7  |     for mut item in items {
   |                     -----
   |                     |
   |                     value moved here
   |                     help: consider borrowing to avoid moving into the for loop: `&items`
...
11 |     finish(&items);
   |            ^^^^^^ value borrowed here after move
```

### 2.
The container should have been `mut` borrowed.
But this answer only makes a mutable item.
```
error[E0594]: cannot assign to `item.is_ordered` which is behind a `&` reference
 --> src/main.rs:8:9
  |
7 |     for mut item in &items {
  |                     ------ this iterator yields `&` references
8 |         item.is_ordered = true;
  |         ^^^^^^^^^^^^^^^^^^^^^^ `item` is a `&` reference, so the data it refers to cannot be written
```

### 3.
This is not valid rust.
The container should have been `mut` borrowed.
```
error[E0308]: mismatched types
 --> src/main.rs:7:9
  |
7 |     for &mut item in items {
  |         ^^^^^^^^^    ----- this expression has type `Item`
  |         |
  |         expected struct `Item`, found `&mut _`
  |
  = note:         expected struct `Item`
          found mutable reference `&mut _`
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

2020-09-15 - Robert Wallis