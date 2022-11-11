// Copyright (C) 2020, Triplebyte

const PHI:f32 = 1.61803398874989484820458683436563811772;

fn main() {
    println!("{}", phi_me(233.0));
}

fn phi_me(x: f32) -> f32 {
    phi_me_distractor_2(x)
}

// fn phi_me_key(x: f32) -> f32 {
//     PHI * x;
// }

// fn phi_me_distractor_1(x: f32) -> f32 {
//     PHI * x
// }

fn phi_me_distractor_2(x: f32) -> f32 {
    return PHI * x;
}

// fn phi_me_distractor_3(x: f32) -> f32 {
//     return PHI * x
// }
