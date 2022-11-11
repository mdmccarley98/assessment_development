// Copyright (C) 2020, Triplebyte

trait Counter {
    type Input;
    type Output;
    fn count(&self, input: Self::Input) -> Self::Output;
}

impl Counter for &str {
    type Input = char;
    type Output = usize;
    fn count(&self, input: char) -> usize {
        self.chars().filter(|&x| x == input).count()
    }
}

fn main() {
    let input = 'i';
    let value = "mississippi";
    println!("There are {} {} in {}", value.count(input), input, value);
}
