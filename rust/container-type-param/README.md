# Rust Container Type Parameters

## Item ID
rust-container-type-param

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
- [Rust by Example - generics - associated items](https://doc.rust-lang.org/stable/rust-by-example/generics/assoc_items/types.html) - doc.rust-lang.org
- [The Rust Programming Language - ch19.3 Advanced Traits](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#default-generic-type-parameters-and-operator-overloading) - doc.rust-lang.org

## Content Target
generics
associated types

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You are writing a `Counter` trait for a `count` function and you want to use generics to allow it to be applied to multiple types that need counting.
The `count` function has an `Input` type in the arguments, and an `Output` type for the return value.

For starters, you implement `Counter` for `&str` to count the number of characters in a string.  It sets the `Input` type to a `char` and the `Output` type to a `usize`.

The `count` function is used like this:
```rust
let input = 'i';
let value = "mississippi";
let total = value.count(input);
println!("There are {} {} in {}", total, input, value);
```
```
There are 4 i in mississippi
```

Which of the following will not compile?

## Answer Key

```rust
trait Counter<Input=Self, Output=usize> {
    fn count(&self, input: Input) -> Output;
}

impl Counter for &str {
    type Input = char;
    fn count(&self, input: char) -> usize {
        self.chars().filter(|&x| x == input).count()
    }
}
```

## Distractors

### 1.
```rust
trait Counter {
    type Input;
    type Output;
    fn count(&self, input: Self::Input) -> Self::Output;
}

impl Counter for &str {
    type Input = char;
    type Output = usize;
    fn count(&self, input: char) -> usize {
        self.chars().filter(|&x| x == input).count()
    }
}
```

### 2.
```rust
trait Counter<Input, Output> {
    fn count(&self, input: Input) -> Output;
}

impl Counter<char, usize> for &str {
    fn count(&self, input: char) -> usize {
        self.chars().filter(|&x| x == input).count()
    }
}
```

### 3.
```rust
trait Counter<Input=Self, Output=usize> {
    fn count(&self, input: Input) -> Output;
}

impl Counter<char> for &str {
    fn count(&self, input: char) -> usize {
        self.chars().filter(|&x| x == input).count()
    }
}
```


## Common errors, misconceptions, or irrelevant information (optional):

Associated types and type parameters use different syntax.
If a trait uses a type parameter, then the implementation should specify a type parameter.
If a trait uses an associated type, then the implementation should specify an associated type.

If the trait uses a type parameter `T`, then the implementation must also use a type parameter, not an associated type:

```rust
trait A<T> {}
impl A<char> for i32 {} // correct
impl A for i32 {
    type T = char; // incorrect
}

trait B {
    type T;
}
impl B for i32 {
    type T = char; // correct
}
impl B<char> for i32 {} // incorrect
```

```rust
error[E0437]: type `T` is not a member of trait `A`
 --> example.rs:4:5
  |
4 |     type T = char; // incorrect
  |     ^^^^^^^^^^^^^^ not a member of trait `A`

error[E0107]: wrong number of type arguments: expected 1, found 0
 --> example.rs:3:6
  |
3 | impl A for i32 {
  |      ^ expected 1 type argument

error[E0107]: wrong number of type arguments: expected 0, found 1
  --> example.rs:13:8
   |
13 | impl B<char> for i32 {} // incorrect
   |        ^^^^ unexpected type argument
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

