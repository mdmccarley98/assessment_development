// Copyright (C) 2020 Triplebyte

import java.util.Arrays;

public class Distractor2 {
    public static void main(String[] args) {
        int[] numbers = new int[] { 2, 4, 5 };

        final int[] results = new int[1];
        Arrays.stream(numbers)
                .filter(x -> x % 2 == 0)
                .map(x -> x * 2)
                .forEach(x -> results[0] = x);
        int result = results[0];

        System.out.println("Result: " + result);
        assert(result == 12);

    }
}

