// Copyright (C) 2020, Triplebyte

use std::fs::File;
use std::io::Write;

fn main() {
    let todo_list = ["take out trash", "wash dishes", "play games"];
    let done_list = ["wrote code"];

    export_todo("todo.md", &todo_list, &done_list);
}

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
