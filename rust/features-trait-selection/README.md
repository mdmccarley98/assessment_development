# Rust Features Trait Selection

## Item ID
features-trait-selection

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [Rust by Example - Disambiguating Overlapping Traits](https://doc.rust-lang.org/rust-by-example/trait/disambiguating.html) - doc.rust-lang.org

## Content Target
traits

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You're writing a macro playback system for your app, you want to be able to simulate clicks, as well as detect clicks from a real user when recording their mouse clicks.

You have the following traits and implementation:

```rust
trait MouseEventGenerator {
    fn click(&self);
}

trait OnMouseEvent {
    fn click(&self);
}

struct MouseSimulator;

impl MouseEventGenerator for MouseSimulator {
    fn click(&self) {
        println!("telling the system to simulate a mouse click");
    }
}

impl OnMouseEvent for MouseSimulator {
    fn click(&self) {
        println!("reacting to real mouse click");
    }
}
```

Unfortunately both traits have identical click function signatures.
How do you call the click function for `MouseEventGenerator` on a `MouseSimulator` type?

```rust
fn main() {
    let simulator = MouseSimulator;
    simulator.click();
}

error[E0034]: multiple applicable items in scope
  --> src/main.rs:28:15
   |
28 |     simulator.click();
   |               ^^^^^ multiple `click` found
   |
```


## Code Snippet (optional)


## Answer Key

```rust
MouseEventGenerator::click(&simulator);
```

## Distractors

### 1.
```rust
let mouseEventGenerator = (MouseEventGenerator)simulator;
mouseEventGenerator.click();
```

### 2.
```rust
simulator.click<MouseEventGenerator>();
```

### 3.
```rust
simulator<MouseEventGenerator>.click();
```


## Common errors, misconceptions, or irrelevant information (optional):

The first argument to `click` is a `self`, so with a fully-qualified function name `MouseEventGenerator::click` you can pass `simulator` as the first argument.

If it only implemented one of the traits, then you could just call `simulator.click()`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

