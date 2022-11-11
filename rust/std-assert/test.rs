struct CameraState {
    registered: i32,
}
impl CameraState {
    fn calculate_total(&self) -> i32 {
        2
    }
}

#[test]
fn example() {
    let camera = CameraState { registered: 1 };
    let registered = camera.registered;
    let total = camera.calculate_total();
    assert!(registered == 2, "registered = {}, total = {}", registered, 1);
}

#[test]
fn key() {
    let camera = CameraState { registered: 1 };
    let registered = camera.registered;
    let total = camera.calculate_total();
    assert!(registered == total, "registered = {}, total = {}", registered, total);
}

#[test]
fn distractor1() {
    let camera = CameraState { registered: 1 };
    let registered = camera.registered;
    let total = camera.calculate_total();
    assert!(registered == total, "registered = {}, total = {}", registered, 1);
}

#[test]
fn distractor2() {
    let camera = CameraState { registered: 1 };
    let registered = camera.registered;
    let total = camera.calculate_total();
    assert!(registered == 1, "registered = {}, total = {}", registered, 1);
}

#[test]
fn distractor3() {
    let camera = CameraState { registered: 1 };
    let registered = camera.registered;
    let total = camera.calculate_total();
    assert!(registered == 2, "registered = {}, total = {}", registered, total);
}
