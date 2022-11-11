# Java Syntax Inheritance

## Item ID
1419

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Java and Multiple Inheritance
https://www.geeksforgeeks.org/java-and-multiple-inheritance/

## Cognitive Model
* Recall
* Comprehend

## Item Type
Multiple Choice

## Stem
You are writing a `Transmitter` class.  The `Transmitter` class needs to have the functionality of both a `Reader` and a `Writer`.

What errors are in this program?

## Code Snippet
```java
class Reader {
    String read() {
        return "TODO: read real data";
    }
}

class Writer {
    void write(String message) {
        System.out.println(message);
    }
}

class Transmitter extends Reader, Writer {
    public void readAndWrite() {
        write(read());
    }
}
```

## Answer Key
`Transmitter` can NOT extend both `Reader` and `Writer`.

## Distractors

### 1.
`Transmitter` can NOT call `read()` or `write()` because they are NOT marked `public`.

### 2.
The definition of `Transmitter` should be formatted like this:
```
class Transmitter: public Reader, public Writer
```

### 3.
This code snippet has no errors.  `new Transmitter().readAndWrite();` will print `TODO: read real data`.

## Common errors, misconceptions, or irrelevant information (optional):
The `Transmitter` class can contain both classes as member variables, and use encapsulation to access either.
```java
class Transmitter {
    Reader reader = new Reader();
    Writer writer = new Writer();
    public void readAndWrite() {
        writer.write(reader.read());
    }
}
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

