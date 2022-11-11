# Rust std::process

## Item ID
1408

## Claim
4: Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
Rust by Example, Pipes
https://doc.rust-lang.org/rust-by-example/std_misc/process/pipe.html

std::process
https://doc.rust-lang.org/std/process/index.html

## Cognitive Model
* Understand

## Item Type
Multiple Choice

## Stem
What does the following program do?

## Code Snippet (optional)
```rust
    let mut echo = Command::new("echo")
        .arg("one two three")
        .stdout(Stdio::piped())
        .spawn()?;
    let wc = Command::new("wc")
        .arg("-w")
        .stdin(Stdio::piped())
        .stdout(Stdio::inherit())
        .spawn()?;

    let mut wc_in = &mut wc.stdin.ok_or_else(|| Error::from(ErrorKind::BrokenPipe))?;
    let echo_out = echo.stdout.as_mut().ok_or_else(|| Error::from(ErrorKind::BrokenPipe))?;
    io::copy(echo_out, &mut wc_in)?;
```

## Answer Key

1. Starts `echo`.
2. Pipes `wc`'s stdout to the program's stdout.
3. Copies `echo`'s stdout into `wc`'s stdin.

## Distractors

### 1.
1. Pipes `echo`'s stdout to the program's stdin.
2. Pipes the program's stdin into `wc`.
3. Copies `echo`'s stdout into `wc`'s stdin.

### 2.
1. Pipes the program's stdin into `echo`.
2. Pipes `wc`'s stdout to the program's stdin.
3. Copies `echo`'s stdout into `wc`'s stdin.

### 3.
1. Starts `echo`.
2. Starts `wc`.
3. Copies `echo`'s stdout into `wc`'s stdin.
4. Nothing is printed to the console.

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This program does nothing with it's own stdin.
To have the `echo` or `wc` command take the program's stdin it would need `.stdin(Stdio::inherit())`.
This program only configures stdout to inherit.

### 2.
This program does nothing with it's own stdin.
To have the `echo` or `wc` command take the program's stdin it would need `.stdin(Stdio::inherit())`.
This program only configures stdout to inherit.

### 3.
`.stdout(Stdio::inherit())` will pipe the command's output to the program stdout, printing it to the console.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author

Robert Wallis - 2020-09-17
