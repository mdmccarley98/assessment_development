# Rust Domain Macro Expressions

## Item ID
rust-domain-macro-expressions

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
- [Rust by Example 17.1.2 macro_rules! Syntax Overload](https://doc.rust-lang.org/stable/rust-by-example/macros/overload.html) - doc.rust-lang.org/stable/rust-by-example
- [Rust by Example 17.3 macro_rules! DSL (Domain Specific Languages)](https://doc.rust-lang.org/stable/rust-by-example/macros/dsl.html) - doc.rust-lang.org/stable/rust-by-example
- [The Little Book of Rust Macros - Captures and Expansions](https://danielkeep.github.io/tlborm/book/mbe-min-captures-and-expansion-redux.html) - danielkeep.github.io/tlborm/book
- [runnable example](https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=8411cd4922f080b38ef656156e3b7bca) play.rust-lang.org

## Content Target
macro_rules!

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Macros are powerful tool in rust.

There is a macro named "one" that has the following pattern inside:
```rust
($example:expr) => {
    format!("{}: {}", stringify!($example), $example)
};
```

And there is another macro "two" that has the following pattern inside:
```rust
(<$example:ident $a:ident=($b:expr) />) => {
    format!("{} {}: {}", stringify!($example), stringify!($a), $b)
};
```

What happens when they are used like this?

```rust
println!(
    "one: {}",
    one!(7 * 6)
);
println!(
    "two: {}", two!(
        <button onclick=(126/3) />
    )
);
```

## Code Snippet (optional)


## Answer Key

```
one: 7 * 6: 42
two: button onclick: 42
```

## Distractors

### 1.
This code does not compile.  You can't use HTML-like tags in rust code.

### 2.
```
one: 7 * 6: 7 * 6
two: button onclick: 126/3
```

### 3.
```
one: 7 * 6: 7 * 6
two: two two: 126/3
```

## Common errors, misconceptions, or irrelevant information (optional):

This is perfectly valid rust code.

Here's a complete code listing if you want to try it out:
https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=8411cd4922f080b38ef656156e3b7bca


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
