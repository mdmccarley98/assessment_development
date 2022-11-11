// Copyright (C) 2020 Triplebyte

abstract class Tree {
    abstract String getName();
    public void grow() {
        System.out.println(getName() + " is growing.");
    }
}

class Elm extends Tree {
    String getName() {
        return "Elm";
    }
}

public class Example {
    public static void main(String[] args) {
        Elm tree = new Elm();
        tree.grow();
    }
}
