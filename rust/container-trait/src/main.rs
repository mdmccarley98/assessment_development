// Copyright (C) 2020, Triplebyte

use std::ops::{Mul, Sub};

trait Flyer {
    fn take_off(&mut self);
    fn land(&mut self);
}

#[derive(Copy, Clone)]
struct Quad(f32, f32, f32, f32);

impl Quad {
    fn avg(&self) -> f32 {
        (self.0 + self.1 + self.2 + self.3) / 4.0
    }
}

impl Mul<f32> for Quad {
    type Output = Self;

    fn mul(self, rhs: f32) -> Self {
        Quad(self.0 * rhs, self.1 * rhs, self.2 * rhs, self.3 * rhs)
    }
}

impl Sub<Quad> for Quad {
    type Output = Self;
    fn sub(self, rhs: Quad) -> Self {
        Quad(
            self.0 - rhs.0,
            self.1 - rhs.1,
            self.2 - rhs.2,
            self.3 - rhs.3,
        )
    }
}

struct Drone {
    prop_power: Quad,
    buoyant_power: Quad,
    altitude: f32,
}

impl Drone {
    fn start(&mut self) {
        self.prop_power = self.buoyant_power;
    }
    fn ascend(&mut self) {
        self.prop_power = self.buoyant_power * 2.0;
    }
    fn descend(&mut self) {
        self.prop_power = self.buoyant_power * 0.7;
    }
    fn calculate_physics(&mut self) {
        self.altitude += (self.prop_power - self.buoyant_power).avg();
        if self.altitude < 0.0 {
            self.altitude = 0.0
        }
    }
}

impl Flyer for Drone {
    fn take_off(&mut self) {
        self.start();
        self.ascend();
    }
    fn land(&mut self) {
        self.descend();
    }
}

fn main() {
    let mut drone = Drone {
        prop_power: Quad(0.0, 0.0, 0.0, 0.0),
        buoyant_power: Quad(0.3, 0.3, 0.3, 0.3),
        altitude: 0.0,
    };
    println!("take off");
    drone.take_off();
    drone.calculate_physics();
    drone.calculate_physics();
    drone.calculate_physics();
    println!("altitude: {}", drone.altitude);

    println!("prop_power: {}, {}, {}, {}", drone.prop_power.0, drone.prop_power.1, drone.prop_power.2, drone.prop_power.3);
    let mut down_count = 0;
    println!("land");
    drone.land();
    println!("prop_power: {}, {}, {}, {}", drone.prop_power.0, drone.prop_power.1, drone.prop_power.2, drone.prop_power.3);
    while drone.altitude > 0.0 {
        drone.calculate_physics();
        println!("landing altitude: {}", drone.altitude);
        down_count += 1;
    }
    println!("power down");
    println!("altitude: {}", drone.altitude);
    println!("prop_power: {}, {}, {}, {}", drone.prop_power.0, drone.prop_power.1, drone.prop_power.2, drone.prop_power.3);
    println!("down count {}", down_count);
}
