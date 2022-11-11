# Rust Features Panic Catching

## Item ID
rust-features-panic-catch

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [The Rust Programming Language ch9.3 - To panic or Not to panic](https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html) - doc.rust-lang.org

## Content Target
panic

## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem

Rust has a `Result` type for errors.  However some library developers may use `.unwrap()` instead of returning a result.

```rust
    let val: Option<bool> = None;
    let is_true: bool = val.unwrap(); // PANIC!
    println!("{}", is_true);
```

Imagine you are using a library, and the library panics, but you want to catch the error.  How do you do this in rust?


## Code Snippet (optional)


## Answer Key

```
    let result = panic::catch_unwind(|| {
        let val: Option<bool> = None;
        let is_true: bool = val.unwrap();
        println!("{}", is_true);
    });
    println!("Error caught? {}", result.is_err());
```

## Distractors

### 1.
```
    try {
        let val: Option<bool> = None;
        let is_true: bool = val.unwrap();
        println!("{}", is_true);
    } catch (Result<_> result) {
        println!("Error caught? {}", result.is_err());
    }
```

### 2.
```
    let block = {
        let val: Option<bool> = None;
        let is_true: bool = val.unwrap();
        println!("{}", is_true);
    };
    match block {
        Some(err) => println!("Error caught: {}", err)
    }
```

### 3.
```
    unsafe {
        let val: Option<bool> = None;
        let is_true: bool = val.unwrap();
        println!("{}", is_true);
    } catch err {
        println!("Error caught: {}", err)
    }
```


## Common errors, misconceptions, or irrelevant information (optional):

There's a section in The Rust Programming language book about whether or not you should write code that uses panic:
[To `panic!` or Not to `panic!`](https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html)

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

