// Copyright (C) 2020, Triplebyte

struct Task {
    hours: f32
}
impl Task {
    fn add_hours(&mut self, hours: f32) {
        self.hours += hours
    }
}

fn main() {
    let mut task = Task { hours: 0.0 };
    task.add_hours(1.5);
    println!("{}", task.hours);
}
