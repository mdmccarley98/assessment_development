// Copyright (C) 2020 Triplebyte

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ExampleTestDistractor1 {

    Example subject;

    void beforeEach() {
        subject = new Example("Java");
    }

    void remainder() {
        assert(1 == subject.remainder(6, 5));
        assert(1 == subject.remainder(6, 5));
        assert(5 == subject.remainder(5, 6));
        assert(0 == subject.remainder(5, 5));
        assert(-1 == subject.remainder(-6, 5));
        assert(1 == subject.remainder(6, -5));
        assert(-1 == subject.remainder(-6, -5));
        assert(0 == subject.remainder(0, 5));
        try {
            subject.remainder(6, 0);
            subject.remainder(0, 0);
        } catch (ArithmeticException ex) {
            assert(true);
        }
    }

    void equality() {
        assert(subject == new Example("Java"));
        assert(subject != new Example("C#"));
        assert(new Example(null) == new Example(null));
        assert(subject != new Example(null));
        assert(new Example(null) != subject);
    }
}