# List Implementations

## Item ID
1581

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
- [Interface List<E>](https://docs.oracle.com/javase/10/docs/api/java/util/List.html) - Oracle

## Content Target
List Implementations

## Cognitive Model
* Comprehend

## Item Type
Multiple Choice

## Stem
Like all collection implementations, different implementations of `List` have very different performance profiles depending on how the list is used.

In the program below the lists have many calls to `add()` but no calls go `get()`.  For simplicity, time is used to messure performance.  So shorter times are faster execution.

What is the output of the program?

## Code Snippet
```java
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

public class Example {

    public static long timeAdds(List<Integer> nums) {
        long startTime = System.nanoTime();

        Random rand = new Random();
        for (int i = 0; i < 10000; i++) {
            nums.add(rand.nextInt());
        }

        long endTime = System.nanoTime();

        return endTime - startTime;
    }

    public static void main(String[] args) {
        SortedMap<Long, String> results = new TreeMap<>();
        results.put(timeAdds(new ArrayList<>()), "ArrayList");
        results.put(timeAdds(new LinkedList<>()), "LinkedList");
        results.put(timeAdds(new CopyOnWriteArrayList<>()), "CopyOnWriteArrayList");

        System.out.println(results.values());
    }
}
```

## Answer Key
```
[LinkedList, ArrayList, CopyOnWriteArrayList]
```

## Distractors
### 1.
```
[ArrayList, LinkedList, CopyOnWriteArrayList]
```

### 2.
```
[CopyOnWriteArrayList, ArrayList, LinkedList]
```

### 3.
```
[LinkedList, CopyOnWriteArrayList, ArrayList]
```

## Common errors, misconceptions, or irrelevant information (optional):

* ArrayList is the best choice when thread-safety doesn't matter and random access needs to be fast.
* LinkedList is the best choice when thread-safety doesn't matter and there will be many modifications to the list.
* CopyOnWriteArrayList is thread-safe, but will perform very poorly when there are going to be many write operations.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

