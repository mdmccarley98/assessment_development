// Copyright (C) 2020 Triplebyte

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Example {
    public static void main(String[] args){
        HashMap<String, Integer> fruitCounts = new HashMap<>();
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
