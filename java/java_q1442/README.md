# Java - Domain Heap

## Item ID
1442

## Claim
Claim 3: coding_tasks


## Claim Behavior (evidence)

* Tuning the Java Runtime System https://docs.oracle.com/cd/E26576_01/doc.312/e24936/tuning-java.htm#GSPTG00206
* https://stackoverflow.com/questions/6945098/allocating-byte-array-to-get-4-billion-bits

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
The following program fails on my server with 64gb of RAM:
```java
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
```

```
Adding 1gb total 1
Adding 1gb total 2
Adding 1gb total 3
Adding 1gb total 4
Adding 1gb total 5
Adding 1gb total 6
Adding 1gb total 7
Adding 1gb total 8
Adding 1gb total 9
Adding 1gb total 10
Adding 1gb total 11
Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
        at Example.main(Example.java:11)
```

How do I make it complete all 16 gigabytes without running out of space?

## Code Snippet

## Answer Key
* `java -Xms20g -Xmx20g Example`

## Distractors

### 1.
* `java -Xms16g -Xmx16g Example`

### 2.
* `java Example -Xms20g -Xmx20g`

### 3.
* `java Example -Xms16384m -Xmx16384m`

## Common errors, misconceptions, or irrelevant information (optional):
* The `-Xms` and `-Xmx` values must be put before the name.
* You can't just allocate 16gb, the program needs a bit more than that for everything else besides the `data` and `dataSets`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
