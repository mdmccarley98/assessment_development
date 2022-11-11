fn first_word<'a>(sentence: &'a str, separator: &'a str) -> &'a str {
    let word: &'a str = sentence
        .split(separator)
        .next()
        .unwrap();
    word
}

fn main() {
    let sentence = "The first word of this sentence is";
    println!("{}: {}", sentence, first_word(sentence, " "));
}
