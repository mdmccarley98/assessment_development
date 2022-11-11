// Copyright (C) 2020, Triplebyte

use std::fs::File;
use std::io::Write;

fn main() {
    let todo_list = ["take out trash", "wash dishes", "play games"];
    let done_list = ["wrote code"];

    export_todo("todo.md", &todo_list, &done_list);
}

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
