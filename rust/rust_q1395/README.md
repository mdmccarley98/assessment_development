# Rust Domain tests

## Item ID
1395

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language's core features.

## Claim Behavior (evidence)
The Rust Programming Language ch.11.2 Controlling How Tests Are Run, "Filtering to Run Multiple Tests"
https://doc.rust-lang.org/stable/book/ch11-02-running-tests.html#filtering-to-run-multiple-tests

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You're working on a well tested project that has many tests.
Instead of running the entire test suite you just want to run the tests you're working on.
You are working on the `red()` and `test_red()` functions below.

How do you run only the `test_red` test?

## Code Snippet

```rust
pub fn green_feature() -> bool {
    true
}

pub fn red_feature() -> bool {
    panic!("this failed");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_green() {
        assert_eq!(true, green_feature());
    }

    #[test]
    fn test_red() {
        assert_eq!(true, red_feature());
    }
}
```

## Answer Key

```
cargo test test_red
```

## Distractors

### 1.
```
rustc --test src/main.rs test_red
```

### 2.
```
rustc --test src/main.rs --ignore test_green
```

### 3.
```
cargo test --ignore test_green
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
`rustc --test` builds a test suite, but does not run the test.
And the filter needs to be an argument to the test suite program `rustc` creates, not `rustc` itself.

### 2.
`rustc --test` builds a test suite, but does not run the test.
And the filter needs to be an argument to the test suite program `rustc` creates, not `rustc` itself.
Also `--ignore` isn't an argument on either the test suite or `rustc`.

### 3.
`--ignore` is not an argument on the test suite.
Also if `--ignore` existed it would run more tests than needed, for example a `test_blue()` not shown here.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
