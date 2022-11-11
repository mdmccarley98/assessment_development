// Copyright (C) 2020 Triplebyte

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ExampleTestDistractor3 {
    @Test
    void remainder() {
        assertSame(1, Example.remainder(6, 5));
        assertSame(5, Example.remainder(5, 6));
        assertSame(0, Example.remainder(5, 5));
        assertSame(-1, Example.remainder(-6, 5));
        assertSame(1, Example.remainder(6, -5));
        assertSame(-1, Example.remainder(-6, -5));
        assertSame(0, Example.remainder(0, 5));
        assertThrows(ArithmeticException.class, () -> Example.remainder(6, 0));
        assertThrows(ArithmeticException.class, () -> Example.remainder(0, 0));
    }

    @Test
    void equality() {
        assertSame(new Example("Java"), new Example("Java"));
        assertNotSame(new Example("Java"), new Example("C#"));
        assertSame(new Example(null), new Example(null));
        assertNotSame(new Example("Java"), new Example(null));
        assertNotSame(new Example(null), new Example("Java"));
    }
}