# Rust Libraries regex and lazy_static

## Item ID
rust-libraries-regex-lazystatic

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
- [Crate regex - Example: Avoid compiling the same regex in a loop](https://docs.rs/regex/1.4.1/regex/#example-avoid-compiling-the-same-regex-in-a-loop) - docs.rs/regex

## Content Target
The `regex` crate
The `lazy_static` crate

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem

Why would you want to use the `regex` library with the `lazy_static` library?


## Code Snippet (optional)


## Answer Key

To avoid compiling the same regex multiple times.

## Distractors

### 1.

To test if a string is a valid email only once in a login form on a website.

### 2.

To match a regex only if it is needed, instead of before it is needed.

### 3.

To lazily match a static string using regular expressions.


## Common errors, misconceptions, or irrelevant information (optional):

`lazy_static` allows statics to be created at runtime.
Regular expressions need to be compiled before being evaluated.
A compiled regular expression can and should be used multiple times without recompiling.

`lazy_static` lets you compile a regex one time inside the function where you need it,
and when that function is called multiple times, it will only compile the regular expression once.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

