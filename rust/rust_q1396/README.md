# Rust Features Borrowing

## Item ID
1396

## Claim
Claim 3: Candidates understand distinguishing features of the language.


## Claim Behavior (evidence)
The Rust Programming Language ch4.2
https://doc.rust-lang.org/stable/book/ch04-02-references-and-borrowing.html

## Cognitive Model


## Item Type
Multiple Choice

## Stem
You're writing a grocery list app.  Why does the following code fail to compile?

## Code Snippet

```rust
    let mut favorite_foods = vec!["potato", "tomato"];

    let mut healthy_foods = &mut favorite_foods;
    healthy_foods.push("carrot");

    let mut grocery_list = &mut favorite_foods;
    grocery_list.push("cookies");

    println!("Healthy Foods:");
    for food in healthy_foods {
        println!("{}", food);
    }

    println!("Grocery List:");
    for food in grocery_list {
        println!("{}", food);
    }
```

## Answer Key

`favorite_foods` is mutably borrowed twice.

## Distractors

### 1.

`healthy_foods` does not need to be mutable.

### 2.

`favorite_foods` does not need to be mutable.

### 3.

`favorite_foods` is already mutable.


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This is the first warning the compiler prints.  It's not the first error, and it's incorrect.  `healthy_foods` needs to be mutable to push "carrot" on it.

### 2.
Ideally, a copy or clone of `favorite_foods` should be created for at least one of the other lists. If that were the case, then `favorite_foods` would not need to be mutable.
However this code does not create a copy.  The question is about the compiler error, not the solution.

### 3.
If `grocery_list` did not exist, then it's possible that you would only need one `mut` associated with `favorite_foods`.
However because `favorite_foods` is used twice, you need to borrow it with `&` or `&mut` otherwise it's considered a `move`.
If the code used `favorite_foods.clone()`, then `.clone()` uses an "implicit borrow" in the function, so it does not need an explicit `&` reference.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-15