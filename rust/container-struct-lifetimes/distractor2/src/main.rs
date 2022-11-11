// Copyright (C) 2020, Triplebyte

struct Chapter {
    number: u32,
    contents: &'static str,
}

fn main() -> std::io::Result<()> {
    let book = std::fs::read_to_string("../book.txt")?;
    let chapter_1 = Chapter { number: 1, contents: &book[16..28] };
    let chapter_2 = Chapter { number: 2, contents: &book[40..52] };
    for ch in &[chapter_1, chapter_2] {
        println!("{}: {}", ch.number, ch.contents);
    }
    Ok(())
}
