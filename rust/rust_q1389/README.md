# Rust Container String

## Item ID
1389

## Claim
Claim 2: Be able to manipulate the language’s container objects in whatever form they take.


## Claim Behavior (evidence)
The Rust Programming Language ch. 8.2 Methods for Iterating Over Strings
https://doc.rust-lang.org/stable/book/ch08-02-strings.html

## Cognitive Model


## Item Type
Multiple Choice

## Stem
You are writing some language analysis program.
How do you loop through all the letters in a string?

## Code Snippet

```rust
fn main() {
    let nice_to_meet_you = "很高興認識你";
    let you = '你';
    let mut letters = 0;
    let mut you_position = -1;

    ??? {
        if letter == you {
            you_position = i as i32;
        }
        letters += 1;
    }
    println!("{} has {} letters, and you is at position {}", nice_to_meet_you, letters, you_position + 1);
}
```
```
很高興認識你 has 6 letters, and you is at position 6
```

## Answer Key

```rust
for (i, letter) in nice_to_meet_you.chars().enumerate()
```

## Distractors

### 1.

```rust
for letter in nice_to_meet_you
```

### 2.

```rust
for (i, letter) in nice_to_meet_you.bytes().enumerate()
```

### 3.

```rust
for (i, letter) in nice_to_meet_you.enumerate()
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1. The most basic example is missing .enumerate()
```rust
letter in nice_to_meet_you
```
Both the index `i` and `letter` need to be created, so the simplest answer would not work.


### 2. Enumerating by bytes is not valid in Unicode
```rust
(i, letter) in nice_to_meet_you.bytes().enumerate()
```
This will not work, because Unicode strings consist of grapheme clusters,
so a character in a string is not one 8 bit byte like it is in many other languages.
In other languages it would panic, but in this case it has the wrong counts:
```
很高興認識你 has 18 letters, and you is at position 0
```

### 3. Enumerating without bytes() or chars() does not compile.
Rust does not know if you wanted to look at the bytes in a string or the characters in a string.
So strings do not implement Iterator.
```rust
(i, letter) in nice_to_meet_you.enumerate()
```
```
error[E0599]: no method named `enumerate` found for reference `&str` in the current scope
 --> src/main.rs:8:41
  |
8 |     for (i, letter) in nice_to_meet_you.enumerate() {
  |                                         ^^^^^^^^^ method not found in `&str`
  |
  = note: the method `enumerate` exists but the following trait bounds were not satisfied:
          `&str: std::iter::Iterator`
          which is required by `&mut &str: std::iter::Iterator`
          `str: std::iter::Iterator`
          which is required by `&mut str: std::iter::Iterator`
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-15