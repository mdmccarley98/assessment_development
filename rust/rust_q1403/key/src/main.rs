// Copyright (C) 2020, Triplebyte

fn main() -> Result<(), rand_distr::NormalError> {
    use rand::Rng;
    use rand_distr::Normal;

    let mut rng = rand::thread_rng();
    let normal = Normal::new(0.0, 0.5)?;
    let x = rng.sample(normal);
    let y = rng.gen_range(1, 7);
    println!("{}, {}", x, y);

    Ok(())
}
