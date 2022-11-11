# Rust Features Trait Bounds

## Item ID
1400

## Claim
Claim 3: Candidates understand distinguishing features of the
language

## Claim Behavior (evidence)
The Rust Programming Language ch.10.2 "Traits"
https://doc.rust-lang.org/book/ch10-02-traits.html

## Cognitive Model
* Recall

## Item Type
* Multiple Choice

## Stem
You're writing a function that needs to communicate with objects that
implement both the `Speak` and `Listen` traits.

Which of the following is NOT equivalent to the trait bounds below.

## Code Snippet
```rust
fn communicate<T: Speak + Listen>(thing: &T) {
    // ...
}
```

## Answer Key
```rust
fn communicate(thing: &(Speak + Listen))
{
    // ...
}
```

## Distractors

### 1.
```rust
fn communicate(thing: &(impl Speak + Listen)) {
    // ...
}
```

### 2.
```rust
fn communicate<T>(thing: &T)
    where T: Speak + Listen
{
    // ...
}
```

### 3.
```rust
fn communicate<T>(thing: &T)
    where T: Speak,
          T: Listen
{
    // ...
}
```

## Common errors, misconceptions, or irrelevant information (optional):

There are lots of ways to express trait bounds.  This one that resembles C# also works:
```rust
fn communicate<T>(thing: &T)
    where T: Speak, Listen
{
    // ...
}
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
