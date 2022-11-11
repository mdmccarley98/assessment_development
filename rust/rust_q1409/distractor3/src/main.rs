// Copyright (C) 2020, Triplebyte

use std::fs::File;
use std::io::Write;

fn main() {
    let todo_list = ["take out trash", "wash dishes", "play games"];
    let done_list = ["wrote code"];

    export_todo("todo.md", &todo_list, &done_list);
}

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
