// Copyright (C) 2020, Triplebyte
/// should fail (to run)

fn main() {
    let numbers = "123";
    log(&numbers[0..4]);
}

/// Logging function used in each example.
fn log(message: &str) {
    println!("{}", message);
}
