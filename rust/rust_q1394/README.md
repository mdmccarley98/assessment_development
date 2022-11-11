# Rust Domain String

## Item ID
1394

## Claim

(6) Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features


## Claim Behavior (evidence)

Definition of String type:
https://doc.rust-lang.org/std/string/struct.String.html

Non-authoritative article about when to use `String` vs `&str`
https://blog.thoughtram.io/string-vs-str-in-rust/


## Cognitive Model

Use - can use or apply knowledge in complex task; perform a task


## Item Type

Multiple Choice


## Stem

You're writing a program that both
greets and shows the schedule for a person.

How can you pass a string to these functions?

## Code Snippet (optional)


## Answer Key

```rust
fn main() {
    let name: &str = "Smith";
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: &str) {
    println!("Hello {}.", name);
}

fn show_schedule(name: &str) {
    println!("{}'s schedule is: A, B, C", name);
}
```

## Distractors

### 1.
```rust
fn main() {
    let name: &str = "Smith";
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: String) {
    println!("Hello {}.", name);
}

fn show_schedule(name: String) {
    println!("{}'s schedule is: A, B, C", name);
}
```

### 2.
```rust
fn main() {
    let name: String = "Smith".to_string();
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: &str) {
    println!("Hello {}.", name);
}

fn show_schedule(name: &str) {
    println!("{}'s schedule is: A, B, C", name);
}
```

### 3.
```rust
fn main() {
    let name: String = String::from("Smith");
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: String) {
    println!("Hello {}.", name);
}

fn show_schedule(name: String) {
    println!("{}'s schedule is: A, B, C", name);
}
```

### 4.
```rust
fn main() {
    let name: String = "Smith".to_string();
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: String) {
    println!("Hello {}.", name);
}

fn show_schedule(name: String) {
    println!("{}'s schedule is: A, B, C", name);
}
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
A double quoted string's type is `&str` not `String`.
The `String` type is a "value type".  It's
better in this case to pass strings by reference
instead of by value.

```
error[E0308]: mismatched types
 --> src/main.rs:5:18
  |
5 |     greet_person(name);
  |                  ^^^^
  |                  |
  |                  expected struct `std::string::String`, found `&str`
  |                  help: try using a conversion method: `name.to_string()`

error[E0308]: mismatched types
 --> src/main.rs:6:19
  |
6 |     show_schedule(name);
  |                   ^^^^
  |                   |
  |                   expected struct `std::string::String`, found `&str`
  |                   help: try using a conversion method: `name.to_string()`
  ```

### 2.
`let name = "Smith".to_string();` has a type of `String` not `&str`.
But the functions take a reference.
It would work by not calling `.to_string()` because a 
double quoted string's type is already `&str`.

```
error[E0308]: mismatched types
 --> src/main.rs:5:18
  |
5 |     greet_person(name);
  |                  ^^^^
  |                  |
  |                  expected `&str`, found struct `std::string::String`
  |                  help: consider borrowing here: `&name`

error[E0308]: mismatched types
 --> src/main.rs:6:19
  |
6 |     show_schedule(name);
  |                   ^^^^
  |                   |
  |                   expected `&str`, found struct `std::string::String`
  |                   help: consider borrowing here: `&name`
```

### 3.
This would seem like it works.  The type of `name` is `String` and 
both functions take a `String`.  However the value doesn't pass
the borrow checker, it has been moved after use.
It's better in this case to pass strings by reference
instead of by value by using `&str`.

```
error[E0382]: use of moved value: `name`
 --> src/main.rs:6:19
  |
4 |     let name: String = String::from("Smith");
  |         ---- move occurs because `name` has type `std::string::String`, which does not implement the `Copy` trait
5 |     greet_person(name);
  |                  ---- value moved here
6 |     show_schedule(name);
  |                   ^^^^ value used here after move
  ```

### 4.
This would seem like it works.  The type of `name` is `String` and 
both functions take a `String`.  However the value doesn't pass
the borrow checker, it has been moved after use.
It's better in this case to pass strings by reference
instead of by value by using `&str`.

```
error[E0382]: use of moved value: `name`
 --> src/main.rs:6:19
  |
4 |     let name: String = "Smith".to_string();
  |         ---- move occurs because `name` has type `std::string::String`, which does not implement the `Copy` trait
5 |     greet_person(name);
  |                  ---- value moved here
6 |     show_schedule(name);
  |                   ^^^^ value used here after move
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-11