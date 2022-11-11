# Rust std::sync

## Item ID
1410

## Claim
4: Be able to use common components of the language’s standard library.


## Claim Behavior (evidence)
The Rust Programming Language ch.16.2
Using Message Passing to Transfer Data Between Threads
https://doc.rust-lang.org/book/ch16-02-message-passing.html

std::sync::Mutex
https://doc.rust-lang.org/std/sync/struct.Mutex.html

std::sync::mpsc
https://doc.rust-lang.org/std/sync/mpsc/

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem

You have some data that needs to be processed multi-threaded.
However when trying to save the data into a HashMap the compiler throws an error saying `hash_map` was moved.

How do you synchronize and get data out of threads?

## Code Snippet (optional)
```rust
    let mut hash_map: HashMap<u32, u32> = HashMap::new();

    for i in 1..=3 {
        thread::spawn(move || {
            let result = i * 7;
            hash_map.insert(i, result);
        });
    }

    for (i, number) in &hash_map {
        println!("{} * 7 = {}", i, number);
    }
```
```
error[E0382]: use of moved value: `hash_map`
  --> src/main.rs:10:23
   |
8  |     let mut hash_map: HashMap<u32, u32> = HashMap::new();
   |         ------------ move occurs because `hash_map` has type `std::collections::HashMap<u32, u32>`, which does not implement the `Copy` trait
9  |     for i in 1..=3 {
10 |         thread::spawn(move || {
   |                       ^^^^^^^ value moved into closure here, in previous iteration of loop
11 |             let result = i * 7;
12 |             hash_map.insert(i, result);
   |             -------- use occurs due to use in closure
```

## Answer Key

```rust
    let thread_count = 3;
    let (tx, rx) = std::sync::mpsc::channel();

    for i in 1..=thread_count {
        let tx = tx.clone();
        thread::spawn(move || {
            let result = i * 7;
            let _ = tx.send((i, result));
        });
    }

    for _ in 1..=thread_count {
        let (i, number) = rx.recv().unwrap();
        println!("{} * 7 = {}", i, number);
    }
```

## Distractors

### 1.
```rust
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
```

### 2.
```rust
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
```

### 3.
```rust
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
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This still moves the mutex into the thread, so it can't be accessed when trying to get
the HashMap out in the main thread.
But joining the threads is the right direction.
```
error[E0382]: use of moved value: `mutex`
  --> src/main.rs:11:36
   |
8  |     let mutex = std::sync::Mutex::new(HashMap::new());
   |         ----- move occurs because `mutex` has type `std::sync::Mutex<std::collections::HashMap<i32, i32>>`, which does not implement the `Copy` trait
...
11 |         let handle = thread::spawn(move || {
   |                                    ^^^^^^^ value moved into closure here, in previous iteration of loop
12 |             let result = i * 7;
13 |             mutex.lock().unwrap().insert(i, result);
   |             ----- use occurs due to use in closure
```

### 2.
This compiles, but result is always stored as 0.
A local copy of result is moved into the thread, that local copy is modified and then thrown away.
The original result of 0 is then stored in the hash_map.
```
2 * 7 = 0
3 * 7 = 0
1 * 7 = 0
```

### 3.
This is very unreliable.  After running this ten times, two of the ten times it got all three numbers, once it only processed #1, and the other six times there was no data in the hashmap so it ended immediately.
The threads need to be joined to make this answer work.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
