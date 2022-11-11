// Copyright (C) 2020, Triplebyte

fn main() {
    let mut original = [3, 2, 1];
    let slice = &mut original[0..1];
    slice[0] = 5;
    let slice_first: i32 = slice[0];
    let original_first: i32 = original[0];
    println!("original: {:?}, slice: {:?}", original_first, slice_first);
}
