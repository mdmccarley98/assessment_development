// Copyright (C) 2020 Triplebyte

import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        String[] seasons = { "spring", "summer", "fall", "winter" };
        // distractor 1: String[] seasons = String[]("spring", "summer", "fall", "winter");
        // distractor 2: String[] seasons = String("spring", "summer", "fall", "winter");
        // distractor 3: String[] seasons = Arrays.asList("spring", "summer", "fall", "winter");
        System.out.println(Arrays.toString(seasons));
    }
}
