# Rust Domain Sale Price

## Item
rust-domain-sale-price


## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.


## Claim Behavior (evidence)
- [The Rust Language ch06.01 - Defining an Enum](https://doc.rust-lang.org/stable/book/ch06-01-defining-an-enum.html) - docs.rust-lang.org/stable/book

- [Rust by Example - Enums](https://doc.rust-lang.org/rust-by-example/custom_types/enum.html) - docs.rust-lang.org/rust-by-example

> the ‘state’ can carry context implicitly in the enum as part of it’s tuple definition
> - [bluejekyll blog - Rust and the most elegant FSM](https://bluejekyll.github.io/blog/fsm/rust/2015/08/13/rust-and-the-most-elegant-fsm.html) - bluejekyll.github.io/blog


## Content Target
enum


## Cognitive Model
Comprehend


## Item Type
Multiple Choice


## Stem

You are working on an app for a "pre-owned" car dealership.

There is a `Price` struct below that has logic for figuring out the price of a car using a `subtotal` function.

There are three cars whose price is initialized using this code:
```rust
let new_car = Price::new(15000);
let old_car = Price::new(5000)
    .sale_off(750)
    .retail()
    .sale_off(500);
let used_car = Price::new(7000)
    .sale_percent(0.2);
```

What are the subtotals for the new, old, and used cars?


## Code Snippet (optional)

```rust
enum Price {
    Retail(u32),
    SaleOff { normal: u32, minus: u32 },
    SalePercent { normal: u32, percent: f32 },
}

impl Price {
    fn new(retail: u32) -> Self {
        Price::Retail(retail)
    }
    fn retail(self) -> Self {
        Price::Retail(self.normal())
    }
    fn sale_off(self, minus: u32) -> Self {
        let normal = self.normal();
        Price::SaleOff { normal, minus }
    }
    fn sale_percent(self, percent: f32) -> Self {
        let normal = self.normal();
        Price::SalePercent { normal, percent }
    }
    fn normal(&self) -> u32 {
        match self {
            Price::Retail(normal) => *normal,
            Price::SaleOff { normal, .. } => *normal,
            Price::SalePercent { normal, .. } => *normal,
        }
    }
    fn subtotal(&self) -> u32 {
        match self {
            Price::Retail(normal) => *normal,
            Price::SaleOff { normal, minus } => *normal - *minus,
            Price::SalePercent { normal, percent } => (*normal as f32 * (1.0 - percent)).round() as u32,
        }
    }
}
```

## Answer Key

* New: 15000
* Old: 4500
* Used: 5600


## Distractors

### 1.
* New: 15000
* Old: 3750
* Used: 7000

### 2.
* New: 15000
* Old: 4500
* Used: 1400

### 3.
* New: 15000
* Old: 3750
* Used: 5600


## Common errors, misconceptions, or irrelevant information (optional):

Enums are a great way to make a finite state machine, because each state can hold only the values that apply to it.

In this example, `normal` is in every state, but the `minus` and `percent` fields are only in one of the states.  When transitioning from `SaleOff` to `Retail` the `minus` field is dropped automatically, and can't be referenced accidentally.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
