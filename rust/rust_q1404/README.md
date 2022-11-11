# Rust Libraries Serde

## Item ID
1404

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages.

## Claim Behavior (evidence)
serde_json docs
https://github.com/serde-rs/json/blob/master/README.md

serde derive docs
https://serde.rs/derive.html

## Cognitive Model
* Recall

## Item Type
Multiple Choice

## Stem

You have a digital thermometer outside with an API that produces JSON like the following:
```json
{
    "time": "2020-09-17T20:49+07:00",
    "temperature": 28,
    "unit": "c"
}
```
How can you use serde to deserialize the JSON and print the temperature like this.
```rust
println!("It's {}°{} outside.", reading.temperature, reading.unit);
```

## Code Snippet (optional)


## Answer Key
```toml
# Cargo.toml
[dependencies]
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```
```rust
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize)]
struct Reading {
    time: String,
    temperature: i32,
    unit: String
}

let reading: Reading = serde_json::from_str(json_string)?;
```

## Distractors

### 1.
```toml
# Cargo.toml
[dependencies]
serde = "1.0"
```
```rust
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize)]
struct Reading {
    time: String,
    temperature: i32,
    unit: String
}

let reading: Reading = serde::from_str(json_string)?;
```

### 2.
```toml
# Cargo.toml
[dependencies]
serde = "1.0.57"
```
```rust
struct Reading {
    time: String,
    temperature: i32,
    unit: String
}

let reading: Reading = serde::Deserialize<Reading>(json_string)?;
```

### 3.
```toml
# Cargo.toml
[dependencies]
serde_json = "1.0.57"
```
```rust
struct Reading {
    time: String,
    temperature: i32,
    unit: String
}

let reading: Reading = serde_json::deserialize(json_string)?;
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
`serde` has separate packages for deserializers, and 
the dependencies need to be set up specifically to support derive.
```
error: cannot find derive macro `Deserialize` in this scope
  --> src/main.rs:13:14
   |
13 |     #[derive(Deserialize, Serialize)]
   |              ^^^^^^^^^^^

error: cannot find derive macro `Serialize` in this scope
  --> src/main.rs:13:27
   |
13 |     #[derive(Deserialize, Serialize)]
   |                           ^^^^^^^^^

error[E0425]: cannot find function `from_str` in crate `serde`
  --> src/main.rs:20:35
   |
20 |     let reading: Reading = serde::from_str(json_string)?;
   |                                   ^^^^^^^^ not found in `serde`
```

### 2.
This is not the API for serde.

### 3.
This is not the API for serde.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
