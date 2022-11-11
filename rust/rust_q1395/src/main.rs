// Copyright (C) 2020, Triplebyte

fn main() {
    assert!(false, "should have used: cargo test");
}

pub fn green() -> bool {
    true
}

pub fn red() -> bool {
    panic!("this failed");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_green() {
        assert_eq!(true, green());
    }

    #[test]
    fn test_red() {
        assert_eq!(true, red());
    }
}