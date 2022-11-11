// Copyright (C) 2020, Triplebyte

struct Rental {
    rate: u32,
    days: u32,
    half_off: bool,
}

impl Rental {
    fn subtotal(&self) -> u32 {
        let subtotal = self.rate * self.days;
        if self.half_off {
            return subtotal / 2;
        }
        subtotal
    }
}

fn main() {
    let days = 10;
    let saw = Rental { days, rate: 15, half_off: false };
    let drill = Rental { rate: 10, .. saw };
    let trailer = Rental { half_off: true, .. drill };

    let mut grand_total = 0;
    for rental in [saw, drill, trailer].iter() {
        grand_total += rental.subtotal();
    }
    println!("grand total: ${}", grand_total);
}
