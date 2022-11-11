# Serialization

## Item ID
1596

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)

* [Interface Serializable](https://docs.oracle.com/javase/10/docs/api/java/io/Serializable.html) - Oracle

## Content Target
Serialization

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Writing an object instance to a byte stream is called "serialization". How do you enable serialization for the following `FullName` class?


## Code Snippet (optional)
```java
class FullName {
    private String firstName;
    private String lastName;

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public FullName(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }
}
```

## Answer Key
The class should implement the `Serializable` interface and also define a `serialVersionUID`.

```java
public class FullName implements Serializable {
    private static final long serialVersionUID = 1L;
    private String firstName;
    private String lastName;

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public FullName(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }
}
```


## Distractors

### 1.
Add the `@Serializable` annotation to the class and specify a `versionUID`.

```java
@Serializable(versionUID=1L)
class FullName {
    private String firstName;
    private String lastName;

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public FullName(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }
}
```

### 2.
Inherit serialization by extending the SerializableObject class and overriding the `getSerialVersionUID()` method. 

```java
class FullName extends SerializableObject {
    private String firstName;
    private String lastName;

    @Override
    public Long getSerialVersionUID() {
        return 1L;
    }

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public FullName(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }
}
```

### 3.
In newer versions of Java, simply adding getters will enable serialization.

```java
class FullName {
    private String firstName;
    private String lastName;

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public FullName(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }
}
```


## Common errors, misconceptions, or irrelevant information (optional):

* Serialization requires extending the Serializabe interface.
* The `serialVersionUID` is used in deserialization to ensure that a serialized object instance is compatible with the class definition available.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)