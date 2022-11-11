// Copyright (C) 2020, Triplebyte
/// should fail

fn main() {
    let numbers = "01234";
    log(&numbers[1:4]);
}

/// Logging function used in each example.
fn log(message: &str) {
    println!("{}", message);
}
