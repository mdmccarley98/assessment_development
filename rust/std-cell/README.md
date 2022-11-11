# Rust std cell

## Item ID
rust-std-cell

## Claim
4. Be able to use common components of the language’s standard library.


## Claim Behavior (evidence)
- [The Rust Programming Language ch15.5 RefCell and the Interior Mutability Pattern](https://doc.rust-lang.org/book/ch15-05-interior-mutability.html) - doc.rust-lang.org
- [std::cell](https://doc.rust-lang.org/std/cell/index.html) - doc.rust-lang.org


## Content Target
std::cell::RefCell
multi-threading


## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
`RefCells` are used for interior mutability.

What does the following rust code do?

## Code Snippet (optional)
```rust
let list = RefCell::new(Vec::new());

let mut ref_mut_list: RefMut<_> = list.borrow_mut();
ref_mut_list.push(4);
ref_mut_list.push(8);
ref_mut_list.push(15);

let sum = list.borrow().iter().sum::<i32>();

assert!(sum == 27, "sum = {}", sum);
```


## Answer Key

Panics with the following error, because `ref_mut_list` has not released it's borrow by the time the second borrow happens.
```
thread 'stem' panicked at 'already mutably borrowed: BorrowError'
```

## Distractors

### 1.
The program is successful.  Sum is equal to 27.

### 2.
Fails to compile, because `list` is borrowing an iterator but it's already borrowed by `ref_mut_list`.
```
error[E0502]: cannot borrow `list` as immutable because it is also borrowed as mutable
```

### 3.
Fails to compile, because `list` is not mutable, so you cannot call `borrow_mut()` on it.
```
error[E0596]: cannot borrow `list` as mutable, as it is not declared as mutable
```

## Common errors, misconceptions, or irrelevant information (optional):

`Cell` and `RefCell` are designed to give mutable access to the inner (interior) value.
But with this power, the developer is now responsible for the mutability of the value.

This could will run by simply putting all the `ref_mut_list` statements in their own scope, so that by the time the code needs to borrow for an iterator, it has already released it's mutable borrow.

```rust
let list = RefCell::new(Vec::new());
{
    let mut ref_mut_list: RefMut<_> = list.borrow_mut();
    ref_mut_list.push(4);
    ref_mut_list.push(8);
    ref_mut_list.push(15);
}
let sum = list.borrow().iter().sum::<i32>();
assert!(sum == 26, "sum = {}", sum);
```


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

