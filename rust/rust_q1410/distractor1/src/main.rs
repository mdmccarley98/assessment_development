// Copyright (C) 2020, Triplebyte

use std::collections::HashMap;
use std::thread;

fn main() {
    let mutex = std::sync::Mutex::new(HashMap::new());
    let mut handles = vec![];

    for i in 1..=3 {
        let handle = thread::spawn(move || {
            let result = i * 7;
            mutex.lock().unwrap().insert(i, result);
        });
        handles.push(handle);
    }

    for child in handles {
        let _ = child.join();
    }

    let hash_map = mutex.lock().unwrap();
    for (i, number) in &(*hash_map) {
        println!("{} * 7 = {}", i, number);
    }
}
