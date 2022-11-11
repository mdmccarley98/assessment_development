// main.rs
mod selector;
use crate::selector::select_fruit;

fn main() {
    println!("I should eat {}.", select_fruit());
}
