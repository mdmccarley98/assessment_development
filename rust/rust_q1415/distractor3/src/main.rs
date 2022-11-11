// Copyright (C) 2020, Triplebyte

fn main() {
    let result = (true, 0, "success");
    let (success, errors, message) = result;
    println!("success: {}, errors: {}, message: {}", success, errors, message);
}
