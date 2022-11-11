# Rust std::Option

## Item ID
1407

## Claim
4: Be able to use common components of the language’s standard library.


## Claim Behavior (evidence)
std::Option
https://doc.rust-lang.org/std/option/enum.Option.html

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
`Option` and `Result` mapping are commonly used in rust.
What is the output this puzzle?

## Code Snippet (optional)
```rust
    let a = Some("a");
    let b = Some("b");
    let c = Some("c");
    let d = Some("d");
    let a_or_d = a.unwrap_or(d.unwrap());
    let default_not = || b.iter().next();
    let c_mapped = |_| Some(&a_or_d);
    let result = c.map_or_else(default_not, c_mapped).unwrap();
    println!("{}", result);
```

## Answer Key
```
a
```

## Distractors

### 1.
```
b
```

### 2.
```
thread 'main' panicked at 'called `Option::unwrap()` on a `None` value', src/main.rs:13:7
```

### 3.
```
d
```

## Common errors, misconceptions, or irrelevant information (optional):


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
