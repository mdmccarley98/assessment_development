// Copyright (C) 2020, Triplebyte

trait Speak {
    fn speak(&self) -> String;
}

trait Listen {
    fn listen(&self, message: &str);
}

struct Robot;
impl Speak for Robot {
    fn speak(&self) -> String {
        String::from("Beep Boop.")
    }
}
impl Listen for Robot {
    fn listen(&self, message: &str) {
        println!("command: \"{}\" accepted", message);
    }
}

struct Cat;
impl Speak for Cat {
    fn speak(&self) -> String {
        String::from("Meow.")
    }
}
impl Listen for Cat {
    fn listen(&self, _message: &str) {
        println!("meow");
    }
}

fn communicate(thing: &(Speak + Listen))
{
    println!("it said: {}", thing.speak());
    thing.listen("stop doing that");
}

fn main() {
    communicate(&Robot {});
    communicate(&Cat {});
}
