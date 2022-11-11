// Copyright (C) 2020 Triplebyte
class Car {
    private String carSound = "beep";

    public void setSound(String newCarSound) {
        this.carSound = newCarSound;
    }

    public String speak() {
        return carSound;
    }
}

public class Example {
    public static void main(String[] args) {
        Car sedan = new Car();
        sedan.setSound("vroom");
        System.out.println(sedan.speak());
    }
}
