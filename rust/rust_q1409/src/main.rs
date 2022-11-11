// Copyright (C) 2020, Triplebyte

use std::fs::File;
use std::io::Write;

fn main() {
    let todo_list = ["take out trash", "wash dishes", "play games"];
    let done_list = ["wrote code"];

    export_todo("todo.md", &todo_list, &done_list);
}

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