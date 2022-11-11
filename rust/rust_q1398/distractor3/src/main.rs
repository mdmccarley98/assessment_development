fn first_word<'a>(sentence: &str, separator: &str) -> &'a str {
    let word = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}

fn main() {
    let sentence = "The first word of this sentence is";
    println!("{}: {}", sentence, first_word(sentence, " "));
}
