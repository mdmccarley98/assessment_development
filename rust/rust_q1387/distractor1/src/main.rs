// Copyright (C) 2020, Triplebyte

fn main() {
    let numbers = [1, 3, 6];

    let result: u32 = numbers
        .iter()
        .map(|x| x * 2)
        .filter(|x| x % 2 == 0)
        .sum();

    assert_eq!(result, 12);
    println!("{}", result);
}
