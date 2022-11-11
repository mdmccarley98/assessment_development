// Copyright (C) 2020, Triplebyte

fn main() {
    let nice_to_meet_you = "很高興認識你";
    let you = '你';
    let mut letters = 0;
    let mut you_position = -1;
    for letter in nice_to_meet_you {
        if letter == you as u8 {
            you_position = i;
        }
        letters += 1;
    }
    println!("{} has {} letters, and you is at position {}", nice_to_meet_you, letters, you_position + 1);
}
