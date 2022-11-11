// Copyright (C) 2020 Triplebyte
enum Price {
    Retail(u32),
    SaleOff { normal: u32, minus: u32 },
    SalePercent { normal: u32, percent: f32 },
}

impl Price {
    fn new(retail: u32) -> Self {
        Price::Retail(retail)
    }
    fn retail(self) -> Self {
        Price::Retail(self.normal())
    }
    fn sale_off(self, minus: u32) -> Self {
        let normal = self.normal();
        Price::SaleOff { normal, minus }
    }
    fn sale_percent(self, percent: f32) -> Self {
        let normal = self.normal();
        Price::SalePercent { normal, percent }
    }
    fn normal(&self) -> u32 {
        match self {
            Price::Retail(normal) => *normal,
            Price::SaleOff { normal, .. } => *normal,
            Price::SalePercent { normal, .. } => *normal,
        }
    }
    fn subtotal(&self) -> u32 {
        match self {
            Price::Retail(normal) => *normal,
            Price::SaleOff { normal, minus } => *normal - *minus,
            Price::SalePercent { normal, percent } => (*normal as f32 * (1.0 - percent)).round() as u32,
        }
    }
}

fn main() {
    let new_car = Price::new(15000);
    let old_car = Price::new(5000)
        .sale_off(750)
        .retail()
        .sale_off(500);
    let used_car = Price::new(7000)
        .sale_percent(0.2);

    println!("New: {}", new_car.subtotal());
    println!("Old: {}", old_car.subtotal());
    println!("Used: {}", used_car.subtotal());
}
