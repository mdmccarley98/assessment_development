# Rust std::Result

## Item ID
1409

## Claim
4: Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
The Rust Programming Language ch. 9.2
"Recoverable Errors with Result"
https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html

The Rust Programming Language ch. 9.3
"To `panic!` or Not to `panic!`"
https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html

std::result::Result
https://doc.rust-lang.org/std/result/enum.Result.html


## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem

Someone on your team was writing the Markdown export feature for a todo app.  They just went on vacation, and the lead developer is not happy with the work they delivered below.  

The lead says the code "crashes all over the place, hides the issue from the calling function, and panics unrecoverably."  They needed an expert so they called you in to fix it.

Which function will you deliver?

## Code Snippet (optional)
```rust
fn export_todo(filename: &str, todo_list: &[&str], done_list: &[&str]) {
    let mut file = match File::create(filename) {
        Err(e) => panic!(e),
        Ok(f) => f,
    };
    match file.write_all(b"# To Do List\n") {
        Err(e) => panic!(e),
        Ok(()) => (),
    }
    match file.write_all(b"## Next\n") {
        Err(e) => panic!(e),
        Ok(()) => (),
    }
    for item in todo_list.iter() {
        match file.write_all(format!("- [ ] {}\n", item).as_bytes()) {
            Err(e) => panic!(e),
            Ok(()) => (),
        }
    }
    match file.write_all(b"## Done\n") {
        Err(e) => panic!(e),
        Ok(()) => (),
    }
    for item in done_list.iter() {
        match file.write_all(format!("- [x] {}\n", item).as_bytes()) {
            Err(e) => panic!(e),
            Ok(()) => (),
        }
    }
}
```

## Answer Key

```rust
fn export_todo(filename: &str, todo_list: &[&str], done_list: &[&str]) -> io::Result<()> {
    let mut file = File::create(filename)?;
    file.write_all(b"# To Do List\n")?;
    file.write_all(b"## Next\n")?;
    for item in todo_list.iter() {
        file.write_all(format!("- [ ] {}\n", item).as_bytes())?
    }
    file.write_all(b"## Done\n")?;
    for item in done_list.iter() {
        file.write_all(format!("- [x] {}\n", item).as_bytes())?
    }
    Ok(())
}
```

## Distractors

### 1.
```rust
fn export_todo(filename: &str, todo_list: &[&str], done_list: &[&str]) {
    if let Ok(file) = File::create(filename).as_mut() {
        if let Ok(()) = file.write_all(b"# To Do List\n") {
            if let Ok(()) = file.write_all(b"## Next\n") {
                for item in todo_list.iter() {
                    if let Ok(()) = file.write_all(format!("- [ ] {}\n", item).as_bytes()) {
                    } else {
                        panic!("error exporting todo");
                    }
                }
            } else {
                panic!("error exporting todo");
            }
            if let Ok(()) = file.write_all(b"## Done\n") {
                for item in done_list.iter() {
                    if let Ok(()) = file.write_all(format!("- [x] {}\n", item).as_bytes()) {
                    } else {
                        panic!("error exporting todo");
                    }
                }
            } else {
                panic!("error exporting todo");
            }
        } else {
            panic!("error exporting todo");
        }
    } else {
        panic!("error exporting todo");
    }
}
```

### 2.
```rust
fn export_todo(filename: &str, todo_list: &[&str], done_list: &[&str]) {
    let file_result = File::create(filename);
    if let Err(e) = file_result {
        panic!(e);
    }
    let mut file = file_result.unwrap();
    if let Err(e) = file.write_all(b"# To Do List\n") {
        panic!(e);
    }
    if let Err(e) = file.write_all(b"## Next\n")  {
        panic!(e);
    }
    for item in todo_list.iter() {
        if let Err(e) = file.write_all(format!("- [ ] {}\n", item).as_bytes()) {
            panic!(e);
        }
    }
    if let Err(e) = file.write_all(b"## Done\n")  {
        panic!(e);
    }
    for item in done_list.iter() {
        if let Err(e) = file.write_all(format!("- [x] {}\n", item).as_bytes()) {
            panic!(e);
        }
    }
}
```

### 3.
```rust
fn export_todo(filename: &str, todo_list: &[&str], done_list: &[&str]) {
    let mut file = File::create(filename).unwrap();
    file.write_all(b"# To Do List\n").unwrap();
    file.write_all(b"## Next\n").unwrap();
    for item in todo_list.iter() {
        file.write_all(format!("- [ ] {}\n", item).as_bytes()).unwrap()
    }
    file.write_all(b"## Done\n").unwrap();
    for item in done_list.iter() {
        file.write_all(format!("- [x] {}\n", item).as_bytes()).unwrap()
    }
}
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This code still panics.  And hides the error details from the calling function.

### 2.
This code still panics.  And hides the error details from the calling function.

### 3.
This is the most common pattern you will see.
`unwrap()` is in a lot of documentation because it's sometimes easier to write a short code snippet than including error handling.  But `unwrap()` still panics.
And hides the error details from the calling function.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)


### Original Author
