// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;

fn main() {
    let word = "internationalization";
    let mut letter_count: HashMap<char, u32> = HashMap::new();

    for letter in word.chars() {
        if letter_count.contains_key(&letter) {
            letter_count[&letter] = letter_count[&letter] + 1;
        } else {
            letter_count[&letter] = 1;
        }
    }

    for (letter, count) in &letter_count {
        println!("{}: {}", letter, count);
    }
}
