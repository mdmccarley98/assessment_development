# Rust Container Copy Trait

## Item ID
rust-container-copy

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
- [The Rust Programming Language - appx.3 Derivable Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html?highlight=Copy#clone-and-copy-for-duplicating-values) - doc.rust-lang.org
- [std::marker::Copy](https://doc.rust-lang.org/std/marker/trait.Copy.html) - doc.rust-lang.org

## Content Target
Copy trait

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You are writing a doorbell camera app that will tell you how many friends, family, or strangers are currently at the front door.

```rust
struct Doorbell {
    family: i8,
    friends: i8,
    strangers: i8,
}

fn main() {
    let original = Doorbell { family: 0, friends: 0, strangers: 0 };
    let now = detect_people(original);

    println!("friends original: {}, now: {}", original.friends, now.friends);
}

fn detect_people(doorbell: Doorbell) -> Doorbell {
    Doorbell {
        family: doorbell.family,
        friends: doorbell.friends + 1,
        strangers: doorbell.strangers,
    }
}
```

This code has the following error:

```rust
  --> src/main.rs:13:47
   |
10 |     let original = Doorbell { family: 0, friends: 0, strangers: 0 };
   |         -------- move occurs because `original` has type `Doorbell`, which does not implement the `Copy` trait
11 |     let now = detect_people(original);
   |                             -------- value moved here
12 | 
13 |     println!("friends original: {}, now: {}", original.friends, now.friends);
   |                                               ^^^^^^^^^^^^^^^^ value borrowed here after move
```

Which of the following solutions will NOT work.

## Code Snippet


## Answer Key

Make `Doorbell` derive from `Copy`.

```rust
#[derive(Copy)]
struct Doorbell
```

## Distractors

### 1.

Make `Doorbell` derive from both `Copy` and `Clone`.

```rust
#[derive(Copy, Clone)]
struct Doorbell
```

### 2.

Pass `original` by reference.

```rust
let now = detect_people(&original);
```

And change the signature of `detect_people` to use a reference.

```rust
fn detect_people(doorbell: &Doorbell) -> Doorbell
```

### 3.

Make `Doorbell` derive from `Clone`.

```rust
#[derive(Clone)]
struct Doorbell
```

And make a clone of `original`.

```rust
let now = detect_people(original.clone());
```

## Common errors, misconceptions, or irrelevant information (optional):

The `Copy` trait can only be applied to types that also implement the `Clone` trait:

```rust
error[E0277]: the trait bound `Doorbell: Clone` is not satisfied
   --> src/main.rs:3:10
    |
3   | #[derive(Copy)]
    |          ^^^^ the trait `Clone` is not implemented for `Doorbell`
    | 
   ::: /home/robert/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/marker.rs:382:17
    |
382 | pub trait Copy: Clone {
    |                 ----- required by this bound in `Copy`
    |
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

