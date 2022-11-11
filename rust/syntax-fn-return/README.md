# Rust Syntax Return

## Item ID
rust-syntax-fn-return

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)

* [The Rust Programming Langauge Ch3.3 Functions with Return Values](https://doc.rust-lang.org/stable/book/ch03-03-how-functions-work.html#functions-with-return-values) - doc.rust-lang.org

## Content Target
Function Return Values

## Cognitive Model
Understanding

## Item Type
Multiple Choice

## Stem

You are writing a design app that uses the golden ratio 1 to 1.618..., also known as phi.

Which of the following functions does NOT return 377.00192... when used with the following snippet?


## Code Snippet (optional)
```rust
const PHI:f32 = 1.61803398874989484820458683436563811772;

fn main() {
    println!("{}", phi_me(233.0));
}
```

## Answer Key
```rust
fn phi_me(x: f32) -> f32 {
    PHI * x;
}
```


## Distractors
### 1.
```rust
fn phi_me(x: f32) -> f32 {
    PHI * x
}
```


### 2.
```rust
fn phi_me(x: f32) -> f32 {
    return PHI * x;
}
```


### 3.
```rust
fn phi_me(x: f32) -> f32 {
    return PHI * x
}
```

## Common errors, misconceptions, or irrelevant information (optional):

Rust is strict about the use of `;` to separate statements and expressions.

If a function returns `void` then the final statement can end with `;`, just like in the `main` function.  But `phi_me` returns an `f32`, so it must end with an expression that returns an `f32`.  When there is no explicit `return` then the last expression is the return value.

`PHI * x;` is two expressions separated by a `;`, `PHI * x` and an implicit `()` which is the "unit" primitive.  The unit primitive is not an `f32` type, so we get the following error:

```
error[E0308]: mismatched types
  --> src/main.rs:13:26
   |
13 | fn phi_me(x: f32) -> f32 {
   |    ------            ^^^ expected `f32`, found `()`
   |    |
   |    implicitly returns `()` as its body has no tail or `return` expression
14 |     PHI * x;
   |            - help: consider removing this semicolon
```

`return PHI * x;` does not produce an error, because the value is returned first.  The last expression after the `;` which is an implicit unit `()` is unreachable.  Clippy however flags a warning that it as a "needless return", and suggests just `PHI * x`

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

