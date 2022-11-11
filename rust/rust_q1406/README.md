# Rust std::format

## Item ID
1406

## Claim
4: Be able to use common components of the language’s standard library.


## Claim Behavior (evidence)
std::fmt
https://doc.rust-lang.org/std/fmt/index.html

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
You have a program with the following values defined:
```rust
    let apple = "apple";
    let orange = "orange";
    let strawberry = "strawberry";
```

Which formatting arguments print this to the console?
```
apple orange strawberry
```

## Code Snippet (optional)


## Answer Key
```rust
    println!("{a} {1} {0}", strawberry, orange, a=apple);
```

## Distractors

### 1.
```rust
    println!("{3} {2} {1}", strawberry, orange, a=apple);
```

### 2.
```rust
    println!("{:2} {:1} {:0}", strawberry, orange, apple);
```

### 3.
```rust
    println!("{0:} {1:} {2:}", strawberry, orange, apple);
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
```
error: invalid reference to positional argument 3 (there are 3 arguments)
 --> src/main.rs:7:15
  |
7 |     println!("{3} {2} {1}", strawberry, orange, a=apple);
  |               ^^^
  |
```

### 2.
The output is
```
strawberry orange apple
```
`{:2}` takes the first param, and makes sure it takes at least 2 characters.

### 3.
The formatting arguments are in the right format, but in the wrong order.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
