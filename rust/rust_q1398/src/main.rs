fn first_word(sentence: &str, separator: &str) -> &str {
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
