# Rust Container Methods

## Item ID
rust-container-methods

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
- [The Rust Programming Language - ch6.3 method syntax](https://doc.rust-lang.org/book/ch05-03-method-syntax.html) - doc.rust-lang.org
- [The Rust Programming Language - ch17.3 OO Design Patterns](https://doc.rust-lang.org/book/ch17-03-oo-design-patterns.html) - doc.rust-lang.org

## Content Target
methods

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You're writing an app to keep track time spent on various tasks.
You need to store the number of hours a task took, and you want a method to add more hours to the task.

How do you create a structure/class and add methods to it in rust?


## Code Snippet (optional)


## Answer Key
```rust
struct Task {
    hours: f32
}
impl Task {
    fn add_hours(&mut self, hours: f32) {
        self.hours += hours
    }
}
```

## Distractors

### 1.
```rust
struct Task {
    hours: f32;

    fn add_hours(self, hours: f32) {
        self.hours += hours
    }
}
```

### 2.
```rust
struct Task {
    hours: f32;

    fn add_hours(&mut self, hours: f32) {
        self.hours += hours
    }
}
```

### 3.
```rust
struct Task {
    hours: f32
}
impl Task {
    fn add_hours(self, hours: f32) {
        self.hours += hours
    }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

In rust `impl` blocks are used to add functionality to a type.  A type can implement many different traits, and you can separate each trait implementation into a different `impl` block.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

