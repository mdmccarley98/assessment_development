# Jar Entry Point

## Item ID
1590

## Claim
Claim 3: coding_tasks

## Claim Behavior (evidence)

* [Providing Constructors for Your Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html) - Oracle
* [Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html) - Oracle

## Content Target
Constructors

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
The following `Parent` class initializes a member variable with a constructor. Which `Child` class correctly extends `Parent`?


## Code Snippet (optional)
```java
public class Parent {
    private String id;

    public Parent(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}
```

## Answer Key
```java
class Child extends Parent {
    public Child(String id) {
        super(id);
    }
}
```


## Distractors

### 1.
```java
public class Child extends Parent {
    public Child(String id) {
        super.id = id;
    }
}
```

### 2.
```java
public class Child extends Parent {

}
```

### 3.
```java
public class Child extends Parent {
    private String id;

    public Child(String id) {
        super();
        this.id = id;
    }
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* The member variable, `id`, is `private`. So subclasses, like `Child`, do not have direct access.
* The default constructor is undefined for any class that defines a custom constructor. This forces subclasses to define a constructor a that must call the defined super-class constructor.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)