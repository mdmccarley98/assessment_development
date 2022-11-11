# Java Features References

## Item ID
1427

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Java is Pass-by-Value
http://www.javadude.com/articles/passbyvalue.htm

Java Spec 8.4.1 Formal Parameters
https://docs.oracle.com/javase/specs/jls/se11/html/jls-8.html#jls-8.4.1

Is Java "pass-by-reference" or "pass-by-value"
https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice


## Stem
You are helping a clothing store write an app.  They sell sunglasses, hats, and shirts.

They have a function that discounts the price of an item.
They want you to explain why their Java code is behaving the way it is.

What does the following code print to the screen?


## Code Snippet
```java
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
```


## Answer Key
```
Current Discount: $1
Sunglasses price: $196
```


## Distractors

### 1.
```
Current Discount: $1
Sunglasses price: $198
```


### 2.
```
Current Discount: $3
Sunglasses price: $195
```


### 3.
```
Current Discount: $1
Sunglasses price: $200
```


## Common errors, misconceptions, or irrelevant information (optional):

* Inside `applyByDiscount`, the argument named `item` refers to the same object that `sunglasses` refers to.
* The int value `discount` is a copy of `currentDiscount`.
* `currentDiscount` never changes, it is just copied twice.

1. `currentDiscount` is `1`
2. `sunglasses` have a price of `200`
3. `applyDiscount` makes a copy of `currentDiscount` named `discount`
    1. `discount` is incremented by 1 to the value `2`, this does not affect `currentDiscount`
    2. `item` points to the same place as `sunglasses`, its price set from `200` to `198`, which changes the Item pointed to by `sunglasses`
4. `applyDiscount` makes a copy of `currentDiscount` (which is still `1`) named `discount`
    1. `discount` is incremented by 1 to the value `2`, this does not affect `currentDiscount`
    2. `item` points to the same place as `sunglasses`, its price set from `198` to `196`, which changes the Item pointed to by `sunglasses`


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

