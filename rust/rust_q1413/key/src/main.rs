// Copyright (C) 2020, Triplebyte
/// correct rust syntax:

fn main() {
    let numbers = "01234";
    log(&numbers[1..4]);
}

/// Logging function used in each example.
fn log(message: &str) {
    println!("{}", message);
}
