# Rust Containers Vec

## Item ID
1390

## Claim
Claim 2: Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
The Rust Programming Language ch.8.1
"Storing Lists of Values with Vectors"
https://doc.rust-lang.org/stable/book/ch08-01-vectors.html

std::vec https://doc.rust-lang.org/std/macro.vec.html

## Cognitive Model


## Item Type
Multiple Choice

## Stem
You are looking at some old rust code from when you were learning rust.

Now you want to refactor all those pushes into just one line of code.
It should be an immutable value of the same type.

## Code Snippet

```rust
    let mut the_numbers = Vec::new();
    the_numbers.push(4);
    the_numbers.push(8);
    the_numbers.push(15);
    the_numbers.push(16);
    the_numbers.push(23);
    the_numbers.push(42);

    println!("total: {}", &the_numbers.iter().sum::<i32>());
```

## Answer Key

```rust
    let the_numbers = vec![4, 8, 15, 16, 23, 42];
```

## Distractors

### 1.
```rust
    let the_numbers = Vec { 4, 8, 15, 16, 23, 42 };
```

### 2.

```rust
    let the_numbers = Vec::new( [4, 8, 15, 16, 23, 42] );
```

### 3.
```rust
    let the_numbers = Vec( 4, 8, 15, 16, 23, 42 );
```



## Common errors, misconceptions, or irrelevant information (optional):

### 1.
```
error: expected identifier, found `4`
 --> src/main.rs:4:29
  |
4 |     let the_numbers = Vec { 4, 8, 15, 16, 23, 42 };
  |                       ---   ^ expected identifier
  |                       |
  |                       while parsing this struct
```

### 2.
Vec::new takes no arguments.
```
error[E0061]: this function takes 0 arguments but 1 argument was supplied
 --> src/main.rs:4:27
  |
4 |     let mut the_numbers = Vec::new([4, 8, 15, 16, 23, 42]);
  |                           ^^^^^^^^ ---------------------- supplied 1 argument
  |                           |
  |                           expected 0 arguments
```

### 3.
```
error[E0423]: expected function, tuple struct or tuple variant, found struct `Vec`
 --> src/main.rs:4:23
  |
4 |     let the_numbers = Vec( 4, 8, 15, 16, 23, 42 );
  |                       ^^^ did you mean `Vec { /* fields */ }`?
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-15