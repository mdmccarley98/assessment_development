# Rust Features Return Map/Filter

## Item ID
rust-features-return-map-iter

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
- [Rust by Example - impl Trait](https://doc.rust-lang.org/rust-by-example/trait/impl_trait.html) - doc.rust-lang.org
- [Extract Chain of Iterator Calls to a Helper Function](https://stackoverflow.com/questions/47204707/extract-chain-of-iterator-calls-to-a-helper-function) - stackoverflow.com
- [The Rust Programming Language - ch19.03 Advanced Traits](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html) - doc.rust-lang.org

## Content Target
impl Trait

## Cognitive Model
* Use


## Item Type
Multiple Choice

## Stem

You have a working filter and map.  The filter keeps only even numbers.  And the map multiplies them by 2.  You want to put it into a function so it can be used in other places in the code.

So you create a function like so:
```rust
fn even_double(numbers: &[u32]) -> Map<Filter<Iter<u32>, fn(&&u32) -> bool>, fn(&u32) -> u32> {
    numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
}
```

But this isn't working very well:
```
error[E0308]: mismatched types
  --> src/main.rs:9:5
   |
9  | /     numbers
10 | |         .iter()
11 | |         .filter(|&x| x % 2 == 0)
12 | |         .map(|x| x * 2)
   | |_______________________^ expected fn pointer, found closure
   |
   = note: expected struct `Map<Filter<std::slice::Iter<'_, _>, for<'r, 's> fn(&'r &'s u32) -> bool>, for<'r> fn(&'r u32) -> u32>`
              found struct `Map<Filter<std::slice::Iter<'_, _>, [closure@src/main.rs:11:17: 11:32]>, [closure@src/main.rs:12:14: 12:23]>`
```

How can you fix `even_double`?

## Code Snippet (optional)


## Answer Key

```rust
fn even_double(numbers: &[u32]) -> impl Iterator<Item=u32> + '_ {
    numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
}
```

## Distractors

### 1.
```rust
fn even_double(numbers: &[u32]) -> Box<dyn Fn(&u32)->u32> {
    Box::new(
        numbers
            .iter()
            .filter(|&x| x % 2 == 0)
            .map(|x| x * 2)
    )
}
```

### 2.
```rust
fn even_double(numbers: &[u32]) -> impl Fn(&u32)->u32 {
    numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
}
```

### 3.
```rust
fn even(x: &&u32) -> bool {
    *x % 2 == 0
}
fn double(x: &u32) -> u32 {
    x * 2
}
fn even_double(numbers: &[u32]) -> Map<Filter<Iter<u32>, fn(&&u32) -> bool>, fn(&u32) -> u32> {
    numbers
        .iter()
        .filter(even)
        .map(double)
}
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
`filter(...).map(...)` is an iterator, and can't be returned as a function.

### 2.
`filter(...).map(...)` is an iterator, and can't be returned as a function.

### 3.
Pulling the functions out into named functions produces this cryptic message:

```rust
error[E0308]: mismatched types
  --> src/main.rs:15:5
   |
15 | /     numbers
16 | |         .iter()
17 | |         .filter(even)
18 | |         .map(double)
   | |____________________^ expected fn pointer, found fn item
   |
   = note: expected struct `Map<Filter<std::slice::Iter<'_, _>, for<'r, 's> fn(&'r &'s u32) -> _>, for<'r> fn(&'r u32) -> _>`
              found struct `Map<Filter<std::slice::Iter<'_, _>, for<'r, 's> fn(&'r &'s u32) -> _ {even}>, for<'r> fn(&'r u32) -> _ {double}>`
```

So to change the function item to a function pointer you'd also have to use `even as _`:

```rust
fn even_double(numbers: &[u32]) -> Map<Filter<Iter<u32>, fn(&&u32) -> bool>, fn(&u32) -> u32> {
    numbers
        .iter()
        .filter(even as _)
        .map(double as _)
}
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

