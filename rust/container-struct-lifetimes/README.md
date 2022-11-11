# Rust Container Struct Lifetimes

## Item ID
rust-container-struct-lifetimes


## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.


## Claim Behavior (evidence)
> Listing 10-25: A struct that holds a reference, so its definition needs a lifetime annotation
- [The Rust Programming Language - ch10.3 Lifetime Annotations in Struct Definitions](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotations-in-struct-definitions) - doc.rust-lang.org/book

## Content Target
* struct
* lifetimes

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

You are writing a book reader.  You want to store information about each chapter in a structure.  

You also just want to load the book into memory only once, and use slices to reference the chapter's contents in the main book string.

Which struct will make the code snippet work?

## Code Snippet (optional)

```rust
fn main() -> std::io::Result<()> {
    let book = std::fs::read_to_string("../book.txt")?;
    let chapter_1 = Chapter { number: 1, contents: &book[16..28] };
    let chapter_2 = Chapter { number: 2, contents: &book[40..52] };
    for ch in &[chapter_1, chapter_2] {
        println!("{}: {}", ch.number, ch.contents);
    }
    Ok(())
}
```

book.txt:
```
Book
Chapter 1: I saw a car.
Chapter 2: It was blue.
```


## Answer Key
```rust
struct Chapter<'a> {
    number: u32,
    contents: &'a str,
}
```

## Distractors

### 1.
```rust
struct Chapter {
    number: u32,
    contents: &str,
}
```

### 2.
```rust
struct Chapter {
    number: u32,
    contents: &'static str,
}
```


### 3.
```rust
struct Chapter {
    number: u32,
    contents: String,
}
```



## Common errors, misconceptions, or irrelevant information:

* A lifetime must be specified, because the struct takes a reference to a string, instead of copying the string.
* You can't use static lifetime, the contents of the file aren't loaded at compile time.
* A `String` is not the same type as a `&str`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

