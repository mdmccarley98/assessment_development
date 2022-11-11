# Rust Libraries Log

## Item ID
rust-libraries-log

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
- [Crate log](https://docs.rs/log/0.4.11/log/index.html) - docs.rs/log

## Content Target
The `log` crate

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

You are setting up logging using the popular `log` crate by implementing it
directly instead of using one of the popular wrappers around `log`.

```rust
use log::{log, Level, LevelFilter, Metadata, Record, SetLoggerError};

struct Logger;
static LOGGER: Logger = Logger;

impl log::Log for Logger {
    fn enabled(&self, metadata: &Metadata) -> bool {
        metadata.level() <= Level::Info
    }
    fn log(&self, record: &Record) {
        if self.enabled(record.metadata()) {
            println!("{} - {}", record.level(), record.args());
        }
    }
    fn flush(&self) {}
}

fn main() -> Result<(), SetLoggerError> {

    log::set_logger(&LOGGER)
        .map(|_| log::set_max_level(LevelFilter::Warn))?;
    
    // ...
}
```

Now what is printed when you run the following rust code?

```rust
    println!("Example");
    log!(Level::Info, "apples");
    log::warn!("bananas");
```

## Answer Key

```
Example
WARN - bananas
```


## Distractors

### 1.
```
Example
INFO - apples
WARN - bananas
```

### 2.
```
Example
bananas
```

### 3.
```
Example
```

## Common errors, misconceptions, or irrelevant information (optional):

Setting the max level includes logs of that level.
The `println` line in `Logger::log` will format with the level first.

There are many wrappers around `log` that make it easier or nicer to use,
for example `env_logger`, `pretty_env_logger`, and `log4rs`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

