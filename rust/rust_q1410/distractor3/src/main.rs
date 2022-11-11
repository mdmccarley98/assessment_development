// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;
use std::thread;

fn main() {

    use std::sync::{Arc, Mutex};

    let hash_map = Arc::new(Mutex::new(HashMap::new()));

    for i in 1..=3 {
        let arc_map = hash_map.clone();
        thread::spawn(move || {
            let result = i * 7;
            arc_map.lock().unwrap().insert(i, result);
        });
    }

    for (i, number) in &(*hash_map.lock().unwrap()) {
        println!("{} * 7 = {}", i, number);
    }
}
