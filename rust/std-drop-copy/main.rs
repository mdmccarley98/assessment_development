#[derive(Copy, Clone)]
struct Meters(f32);

fn main() {
    let height = Meters(1.6);
    drop(height);
    println!("height: {}", height.0);
}