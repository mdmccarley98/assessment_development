// Copyright (C) 2020 Triplebyte

import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        String[] shapes = {"square", "circle", "triangle"};

        // key
        Arrays.sort(shapes);

        // distractor 3
        //        for (int i = 0; i < shapes.length; i++) {
        //            shapes[i] = shapes[(i + 1) % shapes.length];
        //        }

        for (String shape : shapes) {
            System.out.println(shape);
        }
    }
}
