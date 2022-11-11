# Rust Std Drop Copy

## Item ID
rust-std-drop-copy

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)

- [std::mem::drop - types implementing Copy are unaffected by drop](https://doc.rust-lang.org/std/mem/fn.drop.html) - doc.rust-lang.org
- [std::ops::Drop](https://doc.rust-lang.org/std/ops/trait.Drop.html) - doc.rust-lang.org
- [The Rust Programming Language ch10.8 Destructors](https://doc.rust-lang.org/reference/destructors.html) - doc.rust-lang.org

## Content Target
* drop
* Copy

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The following program uses the `drop` function.

What is printed if you compile and/or run the program and why?


## Code Snippet (optional)

```rust
#[derive(Copy, Clone)]
struct Meters(f32);

fn main() {
    let height = Meters(1.6);
    drop(height);
    println!("height: {}", height.0);
}
```

## Answer Key

* `height: 1.6` because `Meters` is unaffected by drop.

## Distractors

### 1.

* `height: 1.6` because drop is deferred until the scope ends.

### 2.

It prints the following error, because `height` is moved when it is dropped.
```
error[E0382]: borrow of moved value: `height`
```

### 3.

* `height: 0.0` because 0.0 is the default value of an `f32`, and `height` was dropped.


## Common errors, misconceptions, or irrelevant information (optional):

`drop` is meant to be used for types that implement the `Drop` trait.  For example reference counting to decrease the number of references.

`drop` normally moves the item, but deriving `Copy` negates this move.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

