// Copyright (C) 2020, Triplebyte
/// should fail

fn main() {
    let numbers = "1234";
    log(numbers[..3]);
}

/// Logging function used in each example.
fn log(message: &str) {
    println!("{}", message);
}
