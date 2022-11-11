// Copyright (C) 2020 Triplebyte

import java.util.ArrayList;

public class Example {
    public static void main(String[] args) {
        ArrayList<Object> dataSets = new ArrayList<>();
        for (int i = 0; i < 16; i++) {
            System.out.format("Adding 1gb total %s\n", (i + 1));
            int gigabyte = 1 << 30;
            byte[] data = new byte[gigabyte];
            dataSets.add(data);
        }
        System.out.println("Success " + dataSets.size() + "gb");
    }
}
