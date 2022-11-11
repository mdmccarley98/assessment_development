# Rust Features Move

## Item ID
1399

## Claim
Claim 3: Candidates understand distinguishing features of the language.

## Claim Behavior (evidence)
The Rust Programming Language ch.16 "Using Threads to Run Code Simultaneously" > "Using `move` closures with threads"
https://doc.rust-lang.org/book/ch16-01-threads.html#using-move-closures-with-threads

The Rust Programming Language ch.16 "Using Message Passing to Transfer Data Between Threads"
https://doc.rust-lang.org/book/ch16-02-message-passing.html?highlight=passing,messages#using-message-passing-to-transfer-data-between-threads

The Rust Programming Language ch.13.1
https://doc.rust-lang.org/book/ch13-01-closures.html

## Cognitive Model


## Item Type


## Stem
You have a program to show the best vacation spots.  It has multiple threads so eventually the API team will update the list separately from the UX team.
How does `move` help us write better code in this code snippet?

## Code Snippet
```rust
    let mut vacation_spots = vec!["New York City", "Yosemite", "Monterey"];

    let handle = thread::spawn( move || {
        for spot in vacation_spots {
            println!("{}", spot);
        }
    });

    vacation_spots.remove(1);

    handle.join().unwrap();
```

## Answer Key

The value `vacation_spots` was moved and then mutated in another thread.  This helps us prevent race conditions.

## Distractors

### 1.
The closure is moved.  This helps us make sure the closure used only once.

### 2.
Without the `move` keyword, the `join().unwrap()` would always panic.  This helps us write code that does not panic.

### 3.
Without the `move` keyword, the compiler wouldn't know the thread might use `vacation_spots` after it was mutated.  This helps us prevent borrowing after moving values.

## Common errors, misconceptions, or irrelevant information (optional):

### key
Threads should communicate by passing messages.  Rust's move semantics help prevent code reading values while they are being modified. 

### 1.
The `move` keyword in front of a closure doesn't move the closure, it moves the values in the closure.
> If you want to force the closure to take ownership of the values it uses in the environment, you can use the `move` keyword before the parameter list. This technique is mostly useful when passing a closure to a new thread to move the data so it’s owned by the new thread.
> - https://doc.rust-lang.org/book/ch13-01-closures.html

### 2.
The `move` keyword is evaluated at compile time, `unwrap()` is evaluated at runtime.  Moving values is not related to panic.

### 3.
Removing the `move` keyword will turn it from explicitly moving the values, to implicitly moving the values.
The code compiles the same, and the compiler returns the same error regardless of if the `move` keyword is present.

With the `move` keyword:
```
error[E0382]: borrow of moved value: `vacation_spots`
  --> src/main.rs:14:5
   |
6  |     let mut vacation_spots = vec!["New York City", "Yosemite", "Monterey"];
   |         ------------------ move occurs because `vacation_spots` has type `std::vec::Vec<&str>`, which does not implement the `Copy` trait
7  | 
8  |     let handle = thread::spawn( move || {
   |                                 ------- value moved into closure here
9  |         for spot in vacation_spots {
   |                     -------------- variable moved due to use in closure
...
14 |     vacation_spots.remove(1);
   |     ^^^^^^^^^^^^^^ value borrowed here after move
```

Without the `move` keyword:
```
error[E0382]: borrow of moved value: `vacation_spots`
  --> src/main.rs:14:5
   |
6  |     let mut vacation_spots = vec!["New York City", "Yosemite", "Monterey"];
   |         ------------------ move occurs because `vacation_spots` has type `std::vec::Vec<&str>`, which does not implement the `Copy` trait
7  | 
8  |     let handle = thread::spawn(|| {
   |                                -- value moved into closure here
9  |         for spot in vacation_spots {
   |                     -------------- variable moved due to use in closure
...
14 |     vacation_spots.remove(1);
   |     ^^^^^^^^^^^^^^ value borrowed here after move
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
