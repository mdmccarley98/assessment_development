# Java Containers `HashMap<K, V>`

## Item ID
1435

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Class HashMap<K, V>
https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html

HashMap in Java with Examples
https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/?ref=lbp


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice

## Stem
You're writing an inventory app for a local grocery store.  You want to use a HashMap to count the number of fruits available.

What does the following program print on the screen?


## Code Snippet
```java
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

class Example {
    public static void main(String[] args){
        Map<String, Integer> fruitCounts = new LinkedHashMap<>();
        fruitCounts.put("apple", 1);
        fruitCounts.put("orange", 1);
        fruitCounts.put("apple", 1);

        ArrayList<String> fruitList = new ArrayList<>();
        fruitList.add("apple");
        fruitList.add("orange");
        fruitList.add("apple");

        System.out.println("fruit counts:");
        for (Map.Entry<String, Integer> item : fruitCounts.entrySet()) {
            System.out.println(item.getKey() + ": " + item.getValue());
        }

        System.out.println("\nfruit list:");
        for (String item : fruitList) {
            System.out.println(item);
        }
    }
}
```

## Answer Key
```
fruit counts:
orange: 1
apple: 1

fruit list:
apple
orange
apple
```


## Distractors

### 1.
```
fruit counts:
orange: 1
apple: 2

fruit list:
apple
orange
apple
```

### 2.
```
fruit counts:
orange: 1
apple: 1

fruit list:
apple
orange
```

### 3.
```
fruit counts:
orange: 1
apple: 2

fruit list:
apple
orange
```


## Common errors, misconceptions, or irrelevant information (optional):
`HashMap.put()` will replace the key `"apple"` with a new value of `1`, it won't automatically add the previous count.
An `ArrayList` can have duplicate values.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

