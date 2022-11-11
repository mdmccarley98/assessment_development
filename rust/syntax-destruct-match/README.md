# Rust Syntax Destructure Matching

## Item ID
rust-syntax-destruct-match

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)
- [Rust by Example, match destructuring structures](https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring/destructure_structures.html) - doc.rust-lang.org
- [The Rust Programming Langauge - ch6.2 match](https://doc.rust-lang.org/book/ch06-02-match.html) - doc.rust-lang.org

## Content Target
destructuring in a match

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You are working on a app that will keep track of the battery level of only red toys.
When a toy is red, you want it to print "Red minimum: {}" and the first of the `battery_range` tuple values.

Which option finds red toys and prints the minimum battery range?

## Code Snippet (optional)
```rust
enum Color {
    Red,
    Green,
}

struct Toy {
    color: Color,
    battery_range: (i32, i32),
    battery: i32,
}
```

## Answer Key
```
    match toy {
        Toy { color: Color::Red, battery_range: (min, _), .. } => println!("Red minmum: {}", min),
        _ => println!("Something Else"),
    }
```

## Distractors

### 1.
```
    switch toy {
        case: Toy { color: Color::Red } => println!("Red minmum: {}", toy.battery_range.0),
        _ => println!("Something Else"),
    }
```

### 2.
```
    match toy.color {
        Color::Red: {
            println!("Red minmum: {}", toy.battery_range.0);
            break;
        }
        default: {
            println!("Something Else");
            break;
        }
    }
```

### 3.
```
    switch toy.color {
        Color::Red => println!("Red minmum: {}", toy.battery_range.0),
        _ => println!("Something Else"),
    }
```

## Common errors, misconceptions, or irrelevant information (optional):

Doing a deep destructure of a type during a match could be useful if you have nested matches to flatten them out.

But in this case matching directly on `toy.color` is more straight-forward.
```rust
    match toy.color {
        Color::Red => println!("Red minmum: {}", toy.battery_range.0),
        _ => println!("Something Else"),
    }
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

