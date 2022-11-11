// Copyright (C) 2020 Triplebyte

import java.util.Objects;

public class Example {
    public final String name;

    Example(String name) {
        this.name = name;
    }

    public static int remainder(int numerator, int denominator) {
        return numerator % denominator;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Example example = (Example) o;
        return Objects.equals(name, example.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
