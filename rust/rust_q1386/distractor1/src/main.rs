// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;

fn main() {
    let word = "internationalization";
    let mut letter_count = HashMap::new();

    for letter in word.chars() {
        match &mut letter_count.get(&letter) {
            Some(count) => *count += 1,
            _ => {letter_count.insert(letter, 1);},
        }
    }

    for (letter, count) in &letter_count {
        println!("{}: {}", letter, count);
    }
}
