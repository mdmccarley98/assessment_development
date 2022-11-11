# Rust Domain Box<T>

## Item ID
1391

## Claim

Claim 6: Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.


## Claim Behavior (evidence)

The Rust Programming Language - ch 15.1 - Using Box
https://doc.rust-lang.org/stable/book/ch15-01-box.html


## Cognitive Model

* Comprehend
* Use


## Item Type

Multiple choice


## Stem

You want to store the boss of every employee in a company using a strongly typed `enum`.
Which code snippet works?


## Code Snippet (optional)

## Answer Key

```rust
enum Staff {
    CEO,
    Employee { boss: Box<Staff> },
}
```


## Distractors

### 1. Use a self-referencing type.

```rust
enum Staff {
    CEO,
    Employee { boss: Staff },
}
```


### 2. Use a two different types that reference each-other.

```rust
struct Employee {
    boss: Staff
}
enum Staff {
    CEO,
    RegularEmployee(Employee),
}
```

### 3. Use an Option<T>.

```rust
enum Staff {
    CEO,
    Employee { boss: Option<Staff> }
}
```

### 4. Use a `struct` not an `enum`.

```rust
struct Staff {
    boss: Option<Staff>
}
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1. Use a self-referencing type.

The compiler cannot determine the size of the Staff enum
if it's an Employee, because an Employee could have an
infinite number of bosses.  If you try to compile the code you get:

```
error[E0072]: recursive type `Staff` has infinite size
 --> containers-box/src/main.rs:4:1
  |
4 | enum Staff {
  | ^^^^^^^^^^ recursive type has infinite size
5 |     CEO,
6 |     Employee { boss: Staff },
  |                ----------- recursive without indirection
  |
  = help: insert indirection (e.g., a `Box`, `Rc`, or `&`) at some point to make `Staff` representable

error[E0391]: cycle detected when computing drop-check constraints for `Staff`
 --> containers-box/src/main.rs:4:1
  |
4 | enum Staff {
  | ^^^^^^^^^^
  |
  = note: ...which again requires computing drop-check constraints for `Staff`, completing the cycle
  = note: cycle used when computing dropck types for `Canonical { max_universe: U0, variables: [], value: ParamEnvAnd { param_env: ParamEnv { caller_bounds: [], reveal: UserFacing, def_id: None }, value: Staff } }`
```

### 2. Use a two different types that reference each-other.

Now you have two problems.  Both the Employee and
Staff types are flagged by the compiler as having infinite size.

```rust
error[E0072]: recursive type `Employee` has infinite size
  --> containers-box/src/main.rs:34:1
   |
34 | struct Employee {
   | ^^^^^^^^^^^^^^^ recursive type has infinite size
35 |     boss: Staff
   |     ----------- recursive without indirection
   |
   = help: insert indirection (e.g., a `Box`, `Rc`, or `&`) at some point to make `Employee` representable

error[E0072]: recursive type `Staff` has infinite size
  --> containers-box/src/main.rs:38:1
   |
38 | enum Staff {
   | ^^^^^^^^^^ recursive type has infinite size
39 |     CEO,
40 |     RegularEmployee(Employee),
   |                     -------- recursive without indirection
   |
   = help: insert indirection (e.g., a `Box`, `Rc`, or `&`) at some point to make `Staff` representable

error[E0391]: cycle detected when computing drop-check constraints for `Staff`
  --> containers-box/src/main.rs:38:1
   |
38 | enum Staff {
   | ^^^^^^^^^^
   |
note: ...which requires computing drop-check constraints for `Employee`...
  --> containers-box/src/main.rs:34:1
   |
34 | struct Employee {
   | ^^^^^^^^^^^^^^^
   = note: ...which again requires computing drop-check constraints for `Staff`, completing the cycle
   = note: cycle used when computing dropck types for `Canonical { max_universe: U0, variables: [], value: ParamEnvAnd { param_env: ParamEnv { caller_bounds: [], reveal: UserFacing, def_id: None }, value: Staff } }`
```

### 3. Use an `Option<T>`

Using an `Option<T>` might seem like the right thing to do
because the recursion can stop at a `None`.  But
an `Option` is a just another type like any
one you could have written.  The compiler
still cannot calculate the size for an infinite
loop of `Some(Staff)`.

```
error[E0072]: recursive type `Staff` has infinite size
 --> src/main.rs:6:1
  |
6 | enum Staff {
  | ^^^^^^^^^^ recursive type has infinite size
7 |     CEO,
8 |     Employee { boss: Option<Staff> }
  |                ------------------- recursive without indirection
  |
  = help: insert indirection (e.g., a `Box`, `Rc`, or `&`) at some point to make `Staff` representable
```

### 4. Use a `struct` not an `enum`.

Sometimes we want to give up on using `enums`
and just use something that is familiar
in other languages like a `struct`.
However it does not matter if it's a `struct`
or an `enum` the compiler still cannot
calculate the size it will take.
It could be an infinite number of bosses with
more bosses.

```
error[E0072]: recursive type `Staff` has infinite size
 --> src/main.rs:6:1
  |
6 | struct Staff {
  | ^^^^^^^^^^^^ recursive type has infinite size
7 |     boss: Option<Staff>
  |     ------------------- recursive without indirection
  |
  = help: insert indirection (e.g., a `Box`, `Rc`, or `&`) at some point to make `Staff` representable
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis 2020-09-11
