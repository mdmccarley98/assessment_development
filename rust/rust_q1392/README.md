# Rust Domain Cargo

## Item ID
1392

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language’s core features.

## Claim Behavior (evidence)
The Cargo Book 2.4 Dependencies
https://doc.rust-lang.org/cargo/guide/dependencies.html

The Cargo Book 4.4.2 Package Commands, cargo install
https://doc.rust-lang.org/cargo/commands/cargo-install.html

## Cognitive Model
* Recall
* Use

## Item Type
Multiple Choice

## Stem
You want to use the `rand_core` library in your project.
How do you use `cargo` to set it up?

## Code Snippet (optional)


## Answer Key

* Add `rand_core` to your Cargo.toml.
```toml
[dependencies]
rand_core = "0.5"
```
* Run `cargo fetch` to download and install the crate.

## Distractors

### 1.
* Run `cargo install rand_core` to download and install the crate.

### 2.
* Run `cargo install --save-prod rand_core` to download the crate and save rand_core to your Cargo.toml's dependencies section.

### 3.
* Run `cargo vendor rand_core` to download and install the crate.


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
Many package managers work like this.  But the `cargo install` command is to install a binary rust crate as an executable, not a crate to use as a library.
```
error: specified package `rand_core v0.5.1` has no binaries
```

### 2.
This is the way other language's package managers work, specifically JavaScript's `npm`, but `cargo` does not work like this.

### 3.
This will create a folder called `rand_core` where all the packages in the Cargo.toml will be "vendored".  It won't install `rand_core`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-18