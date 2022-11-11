// Copyright (C) 2020 Triplebyte

class Item {
    String description = "Item";
    boolean isOnSale = true;

    public String getDescription() {
        return description;
    }

    public String getOnSale() {
        if (isOnSale) {
            return ", is ON SALE";
        }
        return "";
    }

    public String toString() {
        return getDescription() + getOnSale();
    }
}

class Computer extends Item {
    Computer(String computerDescription) {
        description = computerDescription;
    }

    public String getDescription() {
        return "PC: " + super.getDescription();
    }
}

public class Example {
    public static void main(String[] args) {
        Item item = new Computer("gamer elite");
        System.out.println(item);
    }
}
