// Copyright (C) 2020, Triplebyte

use std::fs::File;
use std::io::{self, Write};

fn main() -> io::Result<()> {
    let todo_list = ["take out trash", "wash dishes", "play games"];
    let done_list = ["wrote code"];

    export_todo("todo.md", &todo_list, &done_list)
}

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
