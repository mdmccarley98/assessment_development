# Rust Features Lifetimes

## Item ID
1398

## Claim
Claim 3: Candidates understand distinguishing features of the language.


## Claim Behavior (evidence)
The Rust Programming Book ch. 10.3
https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem

You're writing a function that returns the first word of a sentence.
But the compiler returns an error.
Some lifetimes can be elided, and others must be specified.

What lifetimes need to be specified in the function below?

## Code Snippet (optional)
```rust
fn first_word(sentence: &str, separator: &str) -> &str {
    let word = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}
```

```
error[E0106]: missing lifetime specifier
 --> src/main.rs:1:51
  |
1 | fn first_word(sentence: &str, separator: &str) -> &str {
  |                         ----             ----     ^ expected named lifetime parameter
  |
  = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `sentence` or `separator`
help: consider introducing a named lifetime parameter
```

## Answer Key

```rust
fn first_word<'a>(sentence: &'a str, separator: &str) -> &'a str {
    let word = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}
```

## Distractors

# 1.
```rust
fn first_word(sentence: &'a str, separator: &'a str) -> &'a str {
    let word = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}
```

# 2.
```rust
fn first_word<'a>(sentence: &'a str, separator: &'a str) -> &'a str {
    let word: &'a str = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}
```

# 3.
```rust
fn first_word<'a>(sentence: &str, separator: &str) -> &'a str {
    let word = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}
```


## Common errors, misconceptions, or irrelevant information (optional):

### key
Only the declaration of the lifetime `<'a>`, the lifetime on `sentence`, and the return need to be specified.
The function returns a slice of the `sentence`, not of `separator`.

### 1.
The lifetime declaration `<'a>` is missing.  And the lifetime on `separator` is unnecessary.
When looking at the error message these three places are mentioned.
The error messages won't write your program for you, but they are still very helpful.

### 2.
Too many lifetimes are used.  This code compiles and runs.  However the extra lifetime on `word` is unnecessary and elided, just like it's type is elided.  The returned word does not reference memory in `separator` so it's lifetime does not need to be specified.
Is the function going to return a slice of `separator`?  No, it will only return a slice of `sentence`.

### 3.
A lifetime is declared, and it's specified on the return value, but which parameter owns the lifetime is missing.  The compiler still doesn't know if
it comes from `sentence` or from `separator`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
