# Rust Domain Photo Link new

## Item ID
rust-domain-photo-link-new

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
- [The Rust Programming Language ch17.03 OO Design Patterns - Creating a New Instance](https://doc.rust-lang.org/book/ch17-03-oo-design-patterns.html#defining-post-and-creating-a-new-instance-in-the-draft-state) - doc-rust-lang.org/book

## Content Target
constructing objects with an optional, but idiomatic, `new` function

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

You're making an image link sharing app.  So you create a `PhotoLink` struct:

```rust
struct PhotoLink {
    photo_url: String,
    link_url: String,
    width: u32,
    height: u32,
}
```

Now you want to make a "`new`" function for `PhotoLink` so you can call it like this:
```rust
let link = PhotoLink::new("https://example.com/images/test.jpg", "https://example.com/test", 1280, 720);
```

Choose the correct function:


## Code Snippet (optional)


## Answer Key

```rust
impl PhotoLink {
    fn new(photo_url: &str, link_url:&str, width: u32, height: u32) -> Self {
        PhotoLink {
            photo_url: String::from(photo_url),
            link_url: String::from(link_url),
            width: width,
            height: height,
        }
    }
}
```

## Distractors

### 1.
```rust
impl PhotoLink {
    fn new(self, photo_url: &str, link_url:&str, width: u32, height: u32) -> Self {
        self.photo_url = String::from(photo_url);
        self.link_url = String::from(link_url);
        self.width = width;
        self.height = height;
        self
    }
}
```

### 2.
```rust
impl PhotoLink {
    fn PhotoLink(photo_url: &str, link_url:&str, width: u32, height: u32) {
        self.photo_url = photo_url;
        self.link_url = link_url;
        self.width = width;
        self.height = height;
    }
}
```

### 3.
```rust
impl PhotoLink {
    fn new(self, photo_url: &str, link_url:&str, width: u32, height: u32) -> Self {
        PhotoLink {
            photo_url: photo_url,
            link_url: link_url,
            width: width,
            height: height,
        }
    }
}
```



## Common errors, misconceptions, or irrelevant information (optional):

You don't have to create a `new` function, and in this case it might be easier to create the structures
directly.  `new` functions are idiomatic use of rust, but not required by the language.

Don't include `self` as an argument, otherwise you'll have to create a `PhotoLink` object first, which requires setting the member values anyway, so you'd have to set them twice.

Passing a string by reference can be helpful, because you might need the url in the calling function to download the image or some other reason, instead of consuming the string, or making the caller use `String::from()`


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

