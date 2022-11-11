// Copyright (C) 2020 Triplebyte

class Item {
    int price;

    Item(int price) {
        this.price = price;
    }

    int getPrice() {
        return price;
    }

    void setPrice(int price) {
        this.price = price;
    }

}

public class Example {
    public static void main(String[] args) {

        int currentDiscount = 1;

        Item sunglasses = new Item(200);

        applyItemDiscount(sunglasses, currentDiscount);
        applyItemDiscount(sunglasses, currentDiscount);

        System.out.println("Current Discount: $" + currentDiscount);
        System.out.println("Sunglasses price: $" + sunglasses.getPrice());

    }

    public static void applyItemDiscount(Item item, int discount) {
        discount = discount + 1;
        int price = item.getPrice() - discount;
        item.setPrice(price);
    }
}
