# Unmodifiable Collections

## Item ID
1584

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
- [unmodifiableList()](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#unmodifiableList-java.util.List-) - Oracle

## Content Target
Unmodifiable Collections

## Cognitive Model
* Comprehend


## Item Type
Multiple Choice

## Stem
What is the output of the following program?

## Code Snippet
```java
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}

public class Example {
    public static void main(String[] args) {
        List<Person> normalList = Arrays.asList(new Person("Alice"), new Person("Bob"));
        List<Person> unmodifiableList = Collections.unmodifiableList(normalList);

        System.out.println("normalList: " + normalList.toString());

        try {
            unmodifiableList.get(1).setName("Charlie");
            System.out.println("normalList after name change: " + normalList.toString());
            
            unmodifiableList.remove(1);
            System.out.println("normalList after remove: " + normalList.toString());

        } catch (UnsupportedOperationException e) {
            System.out.println("Caught Exception!");
        }
    }
}
```

## Answer Key
```
normalList: [Alice, Bob]
normalList after name change: [Alice, Charlie]
Caught Exception!
```

## Distractors
### 1.
```
Caught Exception!
```

### 2.
```
normalList: [Alice, Bob]
normalList after name change: [Alice, Bob]
Caught Exception!
```

### 3.
Compile error: Attempt to modify and unmodifiable collection.


## Common errors, misconceptions, or irrelevant information (optional):

* The "unmodifiable" wrappers for collections only provide protection at runtime.
* Unmodifiable collections are views of the underlying collection.
* Unmodifiable wrappers do not protect elements of the underlying collection from being modified.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
