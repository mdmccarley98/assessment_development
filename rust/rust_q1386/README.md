# Rust Container HashMap

## Item ID
1386

## Claim
Claim 2: Be able to manipulate the language’s container objects in whatever form they take.


## Claim Behavior (evidence)

The Rust Programming Language ch. 8.3 
Storing Keys with Associated Values in Hash Maps
https://doc.rust-lang.org/stable/book/ch08-03-hash-maps.html

std::collections::HashMap
https://doc.rust-lang.org/std/collections/struct.HashMap.html

Rust By Example: HashMap
https://doc.rust-lang.org/rust-by-example/std/hash.html

## Cognitive Model


## Item Type
Multiple Choice

## Stem

You want to count the letters in a word.
Choose the best option.

## Code Snippet

```rust
    let word = "internationalization";
    let mut letter_count = HashMap::new();

    ???

    for (letter, count) in &letter_count {
        println!("{}: {}", letter, count);
    }
```

## Answer Key

```rust
    for letter in word.chars() {
        let count = letter_count.entry(letter).or_insert(0);
        *count += 1;
    }
```

## Distractors

### 1.

```rust
    for letter in word.chars() {
        match &mut letter_count.get(&letter) {
            Some(count) => *count += 1,
            _ => {letter_count.insert(letter, 1);},
        }
    }
```

### 2.

```rust
    for letter in word.chars() {
        if let Some(count) = letter_count.get(&letter) {
            letter_count.insert(letter, count + 1);
        } else {
            letter_count.insert(letter, 1);
        }
    }
```

### 3.

```rust
    for letter in word.chars() {
        if letter_count.contains_key(&letter) {
            letter_count[&letter] = letter_count[&letter] + 1;
        } else {
            letter_count[&letter] = 1;
        }
    }
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.

This is an intuitive guess, but updating a value inside an `Option` isn't the right way.
```
error[E0368]: binary assignment operation `+=` cannot be applied to type `&_`
  --> src/main.rs:11:28
   |
11 |             Some(count) => *count += 1,
   |                            ------^^^^^
   |                            |
   |                            cannot use `+=` on type `&_`
```

### 2.

This code compiles and runs, but suffers from a mutable borrow of the map, followed by a
mutation of the map when `insert()` is called.
Rust warns that this will be an error in future versions of rust.
```
warning: cannot borrow `letter_count` as mutable because it is also borrowed as immutable
  --> src/main.rs:11:13
   |
10 |         if let Some(count) = letter_count.get(&letter) {
   |                              ------------ immutable borrow occurs here
11 |             letter_count.insert(letter, count + 1);
   |             ^^^^^^^^^^^^                ----- immutable borrow later used here
   |             |
   |             mutable borrow occurs here
   |
   = note: `#[warn(mutable_borrow_reservation_conflict)]` on by default
   = warning: this borrowing pattern was not meant to be accepted, and may become a hard error in the future
   = note: for more information, see issue #59159 <https://github.com/rust-lang/rust/issues/59159>
```

### 3.

HashMap does not implement `IndexMut` so you can't assign to it like in other languages.
```
error[E0594]: cannot assign to data in an index of `std::collections::HashMap<char, u32>`
  --> src/main.rs:11:13
   |
11 |             letter_count[&letter] = letter_count[&letter] + 1;
   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ cannot assign
   |
   = help: trait `IndexMut` is required to modify indexed content, but it is not implemented for `std::collections::HashMap<char, u32>`

error[E0594]: cannot assign to data in an index of `std::collections::HashMap<char, u32>`
  --> src/main.rs:13:13
   |
13 |             letter_count[&letter] = 1;
   |             ^^^^^^^^^^^^^^^^^^^^^^^^^ cannot assign
   |
   = help: trait `IndexMut` is required to modify indexed content, but it is not implemented for `std::collections::HashMap<char, u32>`
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-15
