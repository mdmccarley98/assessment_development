// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;
use std::thread;

fn main() {
    let mut hash_map: HashMap<u32, u32> = HashMap::new();

    for i in 1..=3 {
        let mut result = 0;
        thread::spawn(move || {
            result = i * 7;
        });
        hash_map.insert(i, result);
    }

    for (i, number) in &hash_map {
        println!("{} * 7 = {}", i, number);
    }
}
