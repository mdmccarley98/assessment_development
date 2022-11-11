# Rust Syntax Struct

## Item ID
1414

## Claim
Claim 1: Candidate can understand the core syntax of the language itself


## Claim Behavior (evidence)
The Rust Programming Language ch. 5.1: https://doc.rust-lang.org/book/ch05-01-defining-structs.html
The Rust Reference, Struct expressions: https://doc.rust-lang.org/reference/expressions/struct-expr.html


## Cognitive Model
* Recall
* Comprehend


## Item Type
Multiple Choice


## Stem
Your friend that runs a tool rental company needs a program to calculate customer orders.
What is the grand total printed by this program?


## Code Snippet

```rust
struct Rental {
    rate: u32,
    days: u32,
    half_off: bool,
}

impl Rental {
    fn subtotal(&self) -> u32 {
        let subtotal = self.rate * self.days;
        if self.half_off {
            return subtotal / 2;
        }
        subtotal
    }
}

fn main() {
    let days = 10;
    let saw = Rental { days, rate: 15, half_off: false };
    let drill = Rental { rate: 10, .. saw };
    let trailer = Rental { half_off: true, .. drill };

    let mut grand_total = 0;
    for rental in [saw, drill, trailer].iter() {
        grand_total += rental.subtotal();
    }
    println!("grand total: ${}", grand_total);
}
```

## Answer Key

grand total: $300

## Distractors

### 1.

grand total: $150

### 2.

grand total: $125

### 3.

This is not valid rust code.

## Common errors, misconceptions, or irrelevant information (optional):

You can initialize struct fields in any order.
Rust supports a functional "update syntax" like `.. other`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-14