# Rust Libraries tokio

## Item ID
1405

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages.


## Claim Behavior (evidence)
tokio::main docs
https://docs.rs/tokio/0.2.22/tokio/attr.main.html

tokio.rs - Tutorial - Hello Tokio - Async `main` function
https://tokio.rs/tokio/tutorial/hello-tokio

## Cognitive Model
* Recall
* Use

## Item Type
Multiple Choice

## Stem
The `tokio` library has many helpful features for asynchronous programming.

* What does the `#[tokio::main]` macro do?
* Do you need to use it to use `tokio`?

## Code Snippet (optional)


## Answer Key
* `#[tokio::main]` puts the main function in a runtime with an asynchronous task scheduler and starts the runtime.
* It is NOT required, you can configure a runtime manually.

## Distractors

### 1.
* `#[tokio::main]` puts the main function in a runtime with an asynchronous task scheduler and starts the runtime.
* It is required, `tokio` features need to use the runtime created by `#[tokio::main]`.

### 2.
* `#[tokio::main]` creates a locking mutex and attaches it inside the tokio semaphore.
* It is NOT required, you can configure a runtime manually.

### 3.
* `#[tokio::main]` creates a locking mutex and attaches it inside the tokio semaphore.
* It is required, `tokio` features need to use the runtime created by `#[tokio::main]`.


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
`#[tokio::main]` creates a default runtime, you can configure a different runtime yourself.

### 2.
Using a mutex or semaphore is irrelevant to what `#[tokio::main]` does.

### 3.
`#[tokio::main]` creates a default runtime, you can configure a different runtime yourself.
Using a mutex or semaphore is irrelevant to what `#[tokio::main]` does.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis 2020-09-18