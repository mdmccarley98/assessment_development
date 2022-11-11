# Rust Libraries rand

## Item ID
1403

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages.


## Claim Behavior (evidence)
The Rust Rand Book - Getting Started:
https://rust-random.github.io/book/guide-start.html

rand_distr::Normal
https://rust-random.github.io/rand/rand_distr/struct.Normal.html


## Cognitive Model
* Understand

## Item Type
Multiple Choice

## Stem
The `rand` crate is one of the most popular crates on crates.io.

What is `x` and what is `y` in the code snippet below?

## Code Snippet (optional)
```rust
use rand::Rng;
use rand_distr::Normal;

let mut rng = rand::thread_rng();
let normal = Normal::new(0.0, 0.5)?;
let x = rng.sample(normal);
let y = rng.gen_range(1, 7);
```
```toml
# Cargo.toml
[dependencies]
rand = "0.7"
rand_distr = "0.3"
```

## Answer Key
* `x` is a floating-point number in the Normal distribution.
* `y` is an integer between 1 and 6 including 1 and 6, like a dice roll.

## Distractors

### 1.
* `x` is a sampler that generates numbers in the normal distribution.
* `y` is a sampler that generates numbers from 1 to 6, like a dice roll.

### 2.
* `x` is a sampler that generates numbers in the normal distribution.
* `y` is an integer between 1 and 6 including 1 and 6, like a dice roll.

### 3.
* `x` is a floating-point number in the Normal distribution.
* `y` is a sampler that generates numbers from 1 to 6, like a dice roll.


## Common errors, misconceptions, or irrelevant information (optional):
Both `sample()` and `gen_range()` produce numbers, not samplers.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis 2020-09-18