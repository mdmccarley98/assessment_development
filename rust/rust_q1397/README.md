# Rust Features Generics

## Item ID
1397

## Claim
Claim 3: Candidates understand distinguishing features of the language.


## Claim Behavior (evidence)
The Rust Programming Language ch.10 "Generic Data Types"
https://doc.rust-lang.org/book/ch10-01-syntax.html

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
A new rust developer is working on a construction program to calculate window sizes.
They are trying to learn generics but they don't understand
why the `side_window` produced the following error.

How can they fix this issue in this snippet using generics?

## Code Snippet
```rust
    struct Window<T> {
        width: T,
        height: T,
        price: T,
    }

    let main_window = Window {
        width: 10,
        height: 4,
        price: 350,
    };

    let side_window = Window {
        width: 3.5,
        height: 4.0,
        price: 200,
    };
```

```
error[E0308]: mismatched types
  --> src/main.rs:20:16
   |
20 |         price: 200,
   |                ^^^ expected floating-point number, found integer
```

## Answer Key
Change the `Window`.  The dimensions and price should have different types.
```rust
    struct Window<T, U> {
        width: T,
        height: T,
        price: U,
    }
```

## Distractors

### 1.
Change the `side_window` width and height to integers, so all the fields have the same type:
```rust
    let main_window = Window {
        width: 10,
        height: 4,
        price: 350,
    };

    let side_window = Window {
        width: 3,
        height: 4,
        price: 200,
    };
```

### 2.
Change the `main_window` width and height to floating-point numbers, so that `main_window` and `side_window` have the same type:
```rust
    let main_window = Window {
        width: 10.0,
        height: 4.0,
        price: 350,
    };

    let side_window = Window {
        width: 3.5,
        height: 4.0,
        price: 200,
    };
```

### 3.
Change the `Window`.  Each field needs a different type.
```rust
    struct Window<T, U, V> {
        width: T,
        height: U,
        price: V,
    }
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This technically compiles, but it destroys the information in the width.
Now windows can no longer be 3.5 wide, and the data has to be rounded up to 4 or down to 3.

### 2.
Although both the `main_window` and `side_window` now share the same type, now neither of them can be a `Window` because the `price` is still an integer.

### 3.
This solves the issue too much, and the reasoning is incorrect.
Each field does not need to be a different type, fields can share a generic type parameter.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
