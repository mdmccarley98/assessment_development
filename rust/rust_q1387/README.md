# Rust Containers Iterator

## Item ID
1387

## Claim
Claim 2: Be able to manipulate the language’s container objects in whatever form they take.


## Claim Behavior (evidence)
The Rust Programming Language ch.13.2 "Processing a Series of Items with Iterators"
https://doc.rust-lang.org/book/ch13-02-iterators.html?highlight=iter#creating-our-own-iterators-with-the-iterator-trait

std::iter::Iterator function reference https://doc.rust-lang.org/std/iter/trait.Iterator.html

## Cognitive Model


## Item Type
Multiple Choice

## Stem
The Iterator trait is a powerful way to work with containers.
Which of the following snippets sets result to the number 12.

## Code Snippet (optional)
```rust
    let numbers = [1, 3, 6];

    // ???

    assert_eq!(result, 12);
```

## Answer Key
```rust
    let result: u32 = numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
        .sum();
```

## Distractors

### 1.
```rust
    let result: u32 = numbers
        .iter()
        .map(|x| x * 2)
        .filter(|x| x % 2 == 0)
        .sum();
```

### 2.
```rust
    let result: u32 = numbers
        .iter()
        .skip(1)
        .take(1)
        .map(|x| x * 2)
        .sum();
```

### 3.
```rust
    let result: u32 = numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .flat_map(|x| x * 2)
        .sum();
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
The result of mapping then filtering, is that all the numbers are doubled in the map, and then they are all even, so they all pass the filter.  The result is 20 instead of 12.

### 2.
Skip and take do different things.  Skip ignores an item in the collection, and take makes a new iterator with only `n` elements.
1 is skipped.  Then 2 is taken into a new iterator ignoring the final 6.  And finally 2 is doubled, so the result is 6.

### 3.
`map` and `flat_map` take different inputs.  
`flat_map` takes iterators as an input and returns an iterator.
`map` takes values as an input and returns an iterator.
The numbers are not iterators, so using flat_map will not compile.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
