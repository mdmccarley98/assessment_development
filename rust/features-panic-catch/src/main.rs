// Copyright (C) 2020, Triplebyte

use std::panic;

fn main() {
    let result = panic::catch_unwind(|| {
        let val: Option<bool> = None;
        let is_true: bool = val.unwrap();
        println!("{}", is_true);
    });
    println!("Error caught? {}", result.is_err());
}

fn nope() {
    let block = {
        let val: Option<bool> = None;
        let is_true: bool = val.unwrap();
        println!("{}", is_true);
    };
    match block {
        Some(err) => println!("Error caught: {}", err)
    }
}
