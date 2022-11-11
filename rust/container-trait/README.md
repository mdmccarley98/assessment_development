# Rust Containers Traits

## Item ID
rust-container-trait

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
- [Rust by Example - Operator Overloading](https://doc.rust-lang.org/rust-by-example/trait/ops.html) - doc.rust-lang.org
- [core::ops - Sub and Mul](https://doc.rust-lang.org/core/ops/index.html) - doc.rust-lang.org

## Content Target
traits and overriding operators


## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem

You're writing a controller for a quadcopter drone.
First you want to make a simulator in rust before you have it actually control a drone.

The `Flyer` trait allows `take_off` and `land` actions.

The `Quad` struct is a tuple with 4 floats, to represent 4 propellers on a quadcopter.
0.0 means the propellor is off, and higher numbers make the propellor spin faster, providing more lift.

The `Drone` struct has 3 member values.
* `prop_power` is a Quad representing how much power is currently applied to the 4 propellors.
* `buoyant_power` is a Quad representing how much power is needed to make the quad copter hover in the air without ascending or descending.
* `altitude` is how far off the ground the quadcopter is currently.  1.0 means the quadcopter is 1 meter in the air.

The `calculate_physics` function simulates physics, poorly for now, but later you'll make it better.

For the first simulation, the quadcopter will have an altitude of 0.0, with no prop power, and with a buoyant power of 0.3 on all four rotors.

Using the snippets below, what is the altitude of the quadcopter after taking off, and calculating physics 3 times.

```rust
    let mut drone = Drone {
        prop_power: Quad(0.0, 0.0, 0.0, 0.0),
        buoyant_power: Quad(0.3, 0.3, 0.3, 0.3),
        altitude: 0.0,
    };
    drone.take_off();
    drone.calculate_physics();
    drone.calculate_physics();
    drone.calculate_physics();
```

## Code Snippet
```rust
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
```

## Answer Key

* 0.9

```
prop_power - buoyant_power * 3

(0.6 - 0.3) * 3 == 0.9
```

## Distractors

### 1.

This program is not valid rust, there is a compilation error.

### 2.

* 0.0

```
prop_power - buoyant_power * 3

(0.3 - 0.3) * 3 == 0.0
```

### 3.

* 3.6

```
prop_power - buoyant_power * 3

((0.6 + 0.6 + 0.6 + 0.6) - (0.3 + 0.3 + 0.3 + 0.3) * 3 == 3.6

(2.4 - 1.2) * 3 == 3.6
```


## Common errors, misconceptions, or irrelevant information (optional):
The `std::ops::*` traits allow you to override operators.

`Quad.avg()` adds the values in the quad, and then divides them by 4.  Since all the props have the same values in our example, the value of one of them will be equal to the average.

`take_off` calls both `start` and `ascend` setting the power to 0.3 * 2.0, or 0.6, on all four elements.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

