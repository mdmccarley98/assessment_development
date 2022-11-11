// Copyright (C) 2020 Triplebyte

import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        int[] numbers = new int[] { 2, 4, 5 };

        int result = Arrays.stream(numbers)
                .filter(x -> x % 2 == 0)
                .map(x -> x * 2)
                .sum();

        System.out.println("Result: " + result);
        assert(result == 12);
    }
}

