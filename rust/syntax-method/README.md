# Rust Syntax Methods

## Item ID
rust-syntax-methods

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)

- [Rust builder pattern with types](https://dev.to/mindflavor/rust-builder-pattern-with-types-3chf) - dev.to mindflavor Francesco Cogno
- [The Rust Programming Language Ch5.3 Method Syntax](https://doc.rust-lang.org/stable/book/ch05-03-method-syntax.html) - doc.rust-lang.org
- [Rust 1.15.1 &mut self builder pattern](https://doc.rust-lang.org/1.15.1/book/method-syntax.html#builder-pattern)

## Content Target
method syntax

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem

You're writing a web server.  You want to be able to configure the host, port, and verbosity externally so you create the `Config` structure below.
However, the following code does not compile. This error is produced:

```
error[E0382]: borrow of moved value: `config`
  --> src/main.rs:26:34
   |
23 |     let config = Config::localhost();
   |         ------ move occurs because `config` has type `Config`, which does not implement the `Copy` trait
24 |     config.verbose(true);
   |            ------------- `config` moved due to this method call
25 |     println!("Server {}:{}", config.host, config.port);
26 |     println!("Verbose Mode: {}", config.verbose_mode);
   |                                  ^^^^^^^^^^^^^^^^^^^ value borrowed here after move
```

What do you need to do to make the code compile and print `Verbose Mode: true`?

## Code Snippet

```rust
struct Config {
    verbose_mode: bool,
    host: String,
    port: u16,
}

impl Config {
    fn localhost() -> Config {
        Config {
            verbose_mode: false,
            host: String::from("localhost"),
            port: 8080,
        }
    }
    fn verbose(self, is_verbose: bool) -> Config {
        Config { verbose_mode: is_verbose, ..self }
    }
}

fn main() {
    let config = Config::localhost();
    config.verbose(true);
    println!("Server {}:{}", config.host, config.port);
    println!("Verbose Mode: {}", config.verbose_mode);
}
```

## Answer Key

Call `verbose()` using a builder pattern:
```rust
    let config = Config::localhost().verbose(true);
```

## Distractors

### 1.
Derive the `Copy` trait.
```rust
#[derive(Copy)]
struct Config {
    verbose_mode: bool,
    host: String,
    port: u16,
}
```

### 2.
Make `config` mutable.
```rust
    let mut config = Config::localhost();
    config.verbose(true);
```

### 3.
Put `config` in it's own block expression:
```rust
    let config = {
        let config = Config::localhost();
        config.verbose(true);
        config
    };
```


## Common errors, misconceptions, or irrelevant information (optional):

The key concept here is that `fn verbose(self, is_verbose: bool) -> Config` is
using a "move" of `self`, not a `&self` borrow, and not a `&mut self` mutable borrow.

### 1.
Just deriving `Copy` does not work.  

First `String` does not implement `Copy`.  However, even after changing host's type from `String` to `&str` and adding lifetimes.  This code still does not work.

`fn verbose(self, is_verbose: bool) -> Config` moves `self`, which makes a copy.  But `config.verbose(true);` throws the copy away.  And `config` still points to the original.  The code prints:
```
Verbose Mode: false
```

### 2.
Making `config` mutable does not help, because `verbose(self, ...)` still moves `self`, it doesn't mutate `&mut self`.

We still get the same error:
```
error[E0382]: borrow of moved value: `config`
  --> src/main.rs:26:34
   |
23 |     let mut config = Config::localhost();
   |         ---------- move occurs because `config` has type `Config`, which does not implement the `Copy` trait
24 |     config.verbose(true);
   |            ------------- `config` moved due to this method call
25 |     println!("Server {}:{}", config.host, config.port);
26 |     println!("Verbose Mode: {}", config.verbose_mode);
   |                                  ^^^^^^^^^^^^^^^^^^^ value borrowed here after move
```

### 3.
Putting `config` in it's own block expression does not help.  `verbose(self, ...)` still moves `self`, it doesn't mutate `&mut self`.

We still get the same error, but now at a different location:
```
error[E0382]: use of moved value: `config`
  --> src/main.rs:26:9
   |
24 |         let config = Config::localhost();
   |             ------ move occurs because `config` has type `Config`, which does not implement the `Copy` trait
25 |         config.verbose(true);
   |                ------------- `config` moved due to this method call
26 |         config
   |         ^^^^^^ value used here after move
   |
note: this function consumes the receiver `self` by taking ownership of it, which moves `config`
  --> src/main.rs:17:16
   |
17 |     fn verbose(self, is_verbose: bool) -> Config {
   |                ^^^^
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

