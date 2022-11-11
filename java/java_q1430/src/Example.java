// Copyright (C) 2020 Triplebyte

interface Duck {
    void quack();
}

class Mallard implements Duck {
    public void quack() { System.out.println("Mallards quack"); }
}

abstract class Anatidae implements Duck {
}

class Swan extends Anatidae {
    public void quack() { System.out.println("Swans quack"); }
}

class DuckNoiseGenerator {
    public void quack() { System.out.println("Generators caw"); }
}

public class Example {
    public static void main(String[] args) {
        Object[] birds = new Object[]{
                new Mallard(),
                new Swan(),
                new DuckNoiseGenerator()
        };
        for (Object bird: birds) {
            if (bird instanceof Duck) {
                ((Duck) bird).quack();
            }
        }
    }
}
