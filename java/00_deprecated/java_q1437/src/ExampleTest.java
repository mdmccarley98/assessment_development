// Copyright (C) 2020 Triplebyte

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ExampleTest {
    @Test
    void remainder() {
        assertEquals(1, Example.remainder(6, 5));
        assertEquals(5, Example.remainder(5, 6));
        assertEquals(0, Example.remainder(5, 5));
        assertEquals(-1, Example.remainder(-6, 5));
        assertEquals(1, Example.remainder(6, -5));
        assertEquals(-1, Example.remainder(-6, -5));
        assertEquals(0, Example.remainder(0, 5));
        assertThrows(java.lang.ArithmeticException.class, () -> Example.remainder(6, 0));
        assertThrows(java.lang.ArithmeticException.class, () -> Example.remainder(0, 0));
    }

    @Test
    void equality() {
        assertEquals(new Example("Java"), new Example("Java"));
        assertNotEquals(new Example("Java"), new Example("C#"));
        assertEquals(new Example(null), new Example(null));
        assertNotEquals(new Example("Java"), new Example(null));
        assertNotEquals(new Example(null), new Example("Java"));
    }
}