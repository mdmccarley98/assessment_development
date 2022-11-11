# Rust Libraries libc

## Item ID
1402

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages.


## Claim Behavior (evidence)
Rust libc docs
https://github.com/rust-lang/libc

man gethostname
https://linux.die.net/man/2/gethostname

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You want to get the hostname of the computer.  But function isn't available in rust's std library.

Describe what happens in this code that uses the rust library `libc`.

## Code Snippet
```rust
use libc::{c_char, gethostname};
use std::ffi::CStr;

fn main() {
    let hostname = unsafe {
        let mut buffer = [0u8 as c_char; 2048];
        if 0 == gethostname(buffer.as_mut_ptr(), 2048) {
            Ok(CStr::from_ptr(buffer.as_ptr()).to_string_lossy().into_owned())
        } else {
            Err("Error getting host name.")
        }
    };
    match hostname {
        Ok(hostname) => println!("The hostname is {}", hostname),
        Err(message) => println!("{}", message),
    }
}
```

## Answer Key

* An unsafe block is created to unlock access to raw pointers and unsafe functions.
* If `gethostname` returns 0 the buffer is converted into a rust string using std::ffi::CStr.
* `hostname` is set to a `Result<String, &str>` with either the hostname or an error message.

## Distractors

### 1.
* An unsafe block is created to unlock access to create byte arrays.
* If `gethostname` fails the buffer is recovered from a lost string using std::ffi::CStr.
* `hostname` is set to a `Result<String, &str>` with either the hostname or an error message.

### 2.
* An unsafe block is created to unlock access to raw pointers and unsafe functions.
* If `gethostname` returns 0 the buffer is converted into a rust string using std::ffi::CStr.
* `hostname` is set to a `Result<CStr, &str>` with either the hostname or an error message.

### 3.
* An unsafe block is created to unlock access to create byte arrays.
* If `gethostname` fails the buffer is recovered from a lost string using std::ffi::CStr.
* `hostname` is set to a `Result<CStr, &str>` with either the hostname or an error message.


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
* `unsafe` is not required to create byte arrays, you can do that outside `unsafe`.
* Returning 0 means success for the `gethostname` function.
* `to_string_lossy()` does not mean "lost string"

### 2.
* the `hostname` is a `Result<String, &str>` not `Result<CStr, &str>`, `to_string_lossy().into_owned()` converted it.

### 3.
* `unsafe` is not required to create byte arrays, you can do that outside `unsafe`.
* Returning 0 means success for the `gethostname` function.
* the `hostname` is a `Result<String, &str>` not `Result<CStr, &str>`, `to_string_lossy().into_owned()` converted it.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-18