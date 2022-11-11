# Rust Libraries clap

## Item ID
rust-libraries-clap

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
- [Crate clap](https://docs.rs/clap/2.33.3/clap/) - docs.rs/clap
- [Note, only flags can have multiple occurrences](https://github.com/clap-rs/clap/blob/v2.33.1/examples/01b_quick_example.rs#L76) - github.com/clap-rs/clap

## Content Target
* The clap crate

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

You are writing a program for a forestry service to keep track of the number of animals in the forest.

The program is executed from the command line, so you use clap library and make this configuration:
```rust
    let matches = App::new("Animal Counter")
        .version("0.1")
        .about("record the number of animals found in the forest")
        .arg(Arg::with_name("bees")
            .short("b")
            .long("bees")
            .value_name("BEES"))
        .arg(Arg::with_name("bears")
            .value_name("BEARS")
            .multiple(true)
            .index(1))
        .get_matches();
    let bees = matches.value_of("bees").unwrap_or("none");
    let bears = matches.value_of("bears").unwrap_or("none");
```

The program is executed with the following command:
```
animal-counter -b 24 3 7
```

What are the values of `bees` and `bears`?


## Code Snippet (optional)


## Answer Key

* bees: "24"
* bears: "3"


## Distractors

### 1
* bees: "24"
* bears: "24"

### 2
* bees: "24"
* bears: "10"

### 3
The values are not assigned, instead an error is displayed:
```
error: Found argument '7' which wasn't expected, or isn't valid in this context
```


## Common errors, misconceptions, or irrelevant information (optional):

The index is the number of an unmatched argument, 1 means the first unmatched argument.
When multiple is turned on, `.value_of()` only returns the first result, it is meant for flags not values like it was used here.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

