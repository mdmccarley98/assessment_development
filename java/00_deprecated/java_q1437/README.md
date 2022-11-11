# Java Libraries JUnit

## Item ID
1437

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages.


## Claim Behavior (evidence)
JUnit5 User Guide
https://junit.org/junit5/docs/current/user-guide/

Assertions
https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/Assertions.html

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Writing tests are an important part of Java development in production.

Choose which option uses JUnit the best to test the `Example` class below.

## Code Snippet
```java
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
```

## Answer Key
```java
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
```

## Distractors
### 1.
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ExampleTest {

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
```

### 2.
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ExampleTestDistractor2 {

    Example subject;

    @BeforeEach
    void beforeEach() {
        subject = new Example("Java");
    }

    @Test
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

    @Test
    void equality() {
        assert(subject == new Example("Java"));
        assert(subject != new Example("C#"));
        assert(new Example(null) == new Example(null));
        assert(subject != new Example(null));
        assert(new Example(null) != subject);
    }
}
```

### 3.
```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ExampleTest {
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
```


## Common errors, misconceptions, or irrelevant information (optional):

* Make sure tests have the `@Test` annotation, or they won't run.
* `assert(a == b)` hides information if they fail.  But `assertEquals(a, b)` takes an expected and actual value.  So if it fails then JUnit will print:
```
Expected :a
Actual   :b
``` 
* `assertSame` compares if the objects are the same instance of an object, just like `==`.
* `assertEquals` compares the contents of different objects, just like `a.equals(b)`
* Using a test subject is often useful, especially if the object is difficult to create.  
But be careful if a subject changes internal state and it's not initialized properly between tests.  
In this example the class is very simple and probably doesn't need single test subject member variable.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

