# Rust Std Debug Trait

## Item ID
rust-std-debug-trait

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
- [Rust by Example - print debug](https://doc.rust-lang.org/stable/rust-by-example/hello/print/print_debug.html) - doc.rust-lang.org
- [std::fmt::Debug](https://doc.rust-lang.org/std/fmt/trait.Debug.html) - doc.rust-lang.org

## Content Target
std::fmt::Debug

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You're writing a messaging app with the following struct:
```rust
#[derive(Debug)]
struct Message {
    body: String
}
```

What does the `#[derive(Debug)]` macro do?

## Code Snippet (optional)


## Answer Key

Allows you to print a `Message` using `{:?}`.

## Distractors

### 1.

Allows you to watch a variable of `Message` type in the debugger.

### 2.

Allows breakpoints to be set when a `Message` is constructed.

### 3.

Enforces type safety on `Message` to make sure there are zero possible bugs with this type.


## Common errors, misconceptions, or irrelevant information (optional):

You can't print this `Message` type with `println!("{}", message)`.  
The `Debug` trait allows it to be pretty printed with `{:#?}` or printed with `{:?}`.

```rust
println!("{:?}", Message{ body: "hi".to_string() });
```
```
Message { body: "hi" }
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

