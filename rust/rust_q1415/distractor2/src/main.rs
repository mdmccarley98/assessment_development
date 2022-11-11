// Copyright (C) 2020, Triplebyte
/// correct rust syntax:

fn main() {
    let result: (bool, i32, &str) = (true, 0, "success");
    println!("success: {}, errors: {}, message: {}", result.0, result.1, result.2);
}
