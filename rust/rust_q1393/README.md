# Rust Domain Mod

## Item ID
1393

## Claim
Claim 6: Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.


## Claim Behavior (evidence)
The Rust Programming Language ch7.3
"Paths for Referring to an item in the Module Tree"
https://doc.rust-lang.org/stable/book/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html

Rust by Example 10.5, Modules, File hierarchy
https://doc.rust-lang.org/rust-by-example/mod/split.html

## Cognitive Model
* Recall
* Use

## Item Type
Multiple Choice

## Stem
You're writing an app to remind you to eat fruit.

It contains two files `main.rs` and `selector/fruit.rs`:

```rust
// main.rs
use crate::selector::select_fruit;

fn main() {
    println!("I should eat {}.", select_fruit());
}
```
```rust
// selector/fruit.rs
mod selector;

fn select_fruit() -> String {
    String::from("an Apple")
}
```

However the compiler shows an error:

```
error[E0432]: unresolved import `crate::selector`
 --> src/main.rs:1:12
  |
1 | use crate::selector::select_fruit;
  |            ^^^^^^^^ maybe a missing crate `selector`?
```

How can you fix this error?

## Code Snippet (optional)


## Answer Key

```rust
// main.rs
mod selector;
use crate::selector::select_fruit;

fn main() {
    println!("I should eat {}.", select_fruit());
}
```
```rust
// selector/mod.rs
pub fn select_fruit() -> String {
    String::from("an Apple")
}
```


## Distractors

### 1.
```rust
// main.rs
mod selector;
use crate::selector::select_fruit;

fn main() {
    println!("I should eat {}.", select_fruit());
}
```
```rust
// selector/fruit.rs
fn select_fruit() -> String {
    String::from("an Apple")
}
```

### 2.
```rust
// main.rs
pub mod selector;
use crate::selector::select_fruit;

fn main() {
    println!("I should eat {}.", select_fruit());
}
```
```rust
// selector/mod.rs
fn select_fruit() -> String {
    String::from("an Apple")
}
```

### 3.
```rust
// main.rs
use crate::selector::select_fruit;

fn main() {
    println!("I should eat {}.", select_fruit());
}
```
```rust
// selector/mod.rs
pub mod selector;
fn select_fruit() -> String {
    String::from("an Apple")
}
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
The selector folder needs a file called "mod.rs" but the file is called "fruit.rs".
And the function needs to be exported publicly.
```
error[E0583]: file not found for module `selector`
 --> src/main.rs:2:1
  |
2 | mod selector;
  | ^^^^^^^^^^^^^
  |
  = help: to create the module `selector`, create file "src/selector.rs"

error[E0432]: unresolved import `crate::selector::select_fruit`
 --> src/main.rs:3:5
  |
3 | use crate::selector::select_fruit;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ no `select_fruit` in `selector`
```

### 2.
`pub mod` exports the module itself as public, it doesn't make the functions in that module public.
```
error[E0603]: function `select_fruit` is private
 --> src/main.rs:3:22
  |
3 | use crate::selector::select_fruit;
  |                      ^^^^^^^^^^^^ private function
```

### 3.
`pub mod` exports the module itself as public, it doesn't make the functions in that module public.
And the `mod` keyword needs to be used in the parent, not in the module itself.
```
error[E0432]: unresolved import `crate::selector`
 --> src/main.rs:2:12
  |
2 | use crate::selector::select_fruit;
  |            ^^^^^^^^ maybe a missing crate `selector`?
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-18
