// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;

fn main() {
    let word = "internationalization";
    let mut letter_count = HashMap::new();

    for letter in word.chars() {
        if let Some(count) = letter_count.get(&letter) {
            letter_count.insert(letter, count + 1);
        } else {
            letter_count.insert(letter, 1);
        }
    }

    for (letter, count) in &letter_count {
        println!("{}: {}", letter, count);
    }
}
