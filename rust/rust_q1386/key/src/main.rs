// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;

fn main() {
    let word = "internationalization";
    let mut letter_count = HashMap::new();

    for letter in word.chars() {
        let count = letter_count.entry(letter).or_insert(0);
        *count += 1;
    }

    for (letter, count) in &letter_count {
        println!("{}: {}", letter, count);
    }
}
