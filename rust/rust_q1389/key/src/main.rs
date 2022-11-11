// Copyright (C) 2020, Triplebyte

fn main() {
    let nice_to_meet_you = "很高興認識你";
    let you = '你';
    let mut letters = 0;
    let mut you_position = -1;
    for (i, letter) in nice_to_meet_you.chars().enumerate() {
        if letter == you {
            you_position = i as i32;
        }
        letters += 1;
    }
    println!("{} has {} letters, and you is at position {}", nice_to_meet_you, letters, you_position + 1);
}
