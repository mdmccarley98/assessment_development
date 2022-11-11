// Copyright (C) 2020, Triplebyte

trait Counter<Input, Output> {
    fn count(&self, input: Input) -> Output;
}

impl Counter<char, usize> for &str {
    fn count(&self, input: char) -> usize {
        self.chars().filter(|&x| x == input).count()
    }
}

fn main() {
    let input = 'i';
    let value = "mississippi";
    println!("There are {} {} in {}", value.count(input), input, value);
}
