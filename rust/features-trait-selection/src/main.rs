// Copyright (C) 2020, Triplebyte

trait MouseEventGenerator {
    fn click(&self);
}

trait OnMouseEvent {
    fn click(&self);
}

struct MouseSimulator;

impl MouseEventGenerator for MouseSimulator {
    fn click(&self) {
        println!("telling the system to simulate a mouse click");
    }
}

impl OnMouseEvent for MouseSimulator {
    fn click(&self) {
        println!("reacting to real mouse click");
    }
}

fn main() {
    let simulator = MouseSimulator;
    MouseEventGenerator::click(&simulator);

    // let mouseEventGenerator = (MouseEventGenerator)simulator;
    // mouseEventGenerator.click();

    // simulator.click<MouseEventGenerator>();

    // simulator<MouseEventGenerator>.click();
}
