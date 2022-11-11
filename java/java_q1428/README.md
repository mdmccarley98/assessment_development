# Java Features @Override

## Item ID
1428

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Overriding and Hiding Methods
https://docs.oracle.com/javase/tutorial/java/IandI/override.html

> When do you use Java's `@Override` annotation and why?
> https://stackoverflow.com/questions/94361/when-do-you-use-javas-override-annotation-and-why

> Do I need to put `@Override` annotation when I implement an interface (not override an abstract class)?
> https://stackoverflow.com/questions/5506373/override-annotation


## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
A project you are working on has a `Reader` interface with a `read` function like this:
```java
interface Reader {
    String read();
}
```

Someone implemented the `StringReader` version of a `Reader` like this:

```java
class StringReader implements Reader {
    String source;

    StringReader(String source) {
        this.source = source;
    }

    public String read() {
        return source;
    }
}
```

Later in time they changed the API for `Reader` from `read` to `getContents`:

```java
interface Reader {
    String getContents();
}
```

And they noticed the `getContents` function was missing from `StringReader` so they added it:

```java
class StringReader implements Reader {
    String source;
    StringReader(String source) {
        this.source = source;
    }

    public String read() {
        return source;
    }

    public String getContents() {
        return source;
    }
}
```

If they had used `@Override` in the original `Reader`, how would that have helped?

## Code Snippet


## Answer Key
`@Override` on the `StringReader.read` function would produce a compile-time error with the new `Reader` interface.

## Distractors

### 1.
`@Override` on the `StringReader.read` function would produce a warning with the new `Reader` interface.

### 2.
`@Override` on the `StringReader.getContents` function would produce a compile-time error with the new `Reader` interface.

### 3.
`@Override` on the `StringReader.getContents` function would produce a warning with the new `Reader` interface. 

## Common errors, misconceptions, or irrelevant information (optional):

`@Override` is not required by the compiler, but it is useful specifically for this case.
If `@Override` had been used on the `read` function in the original code,
then after the `Reader` changed
the java compiler would have failed with the following helpful error:
```
error: method does not override or implement a method from a supertype
    @Override
    ^
```
Meaning `read` does not override a method on `Reader`.
This error indicates that we should rename our function instead of writing a new function.

Often error messages from the compiler help us write better code.
Adding annotations like `@Override` give the compiler extra information about our intentions,
and the compiler gives back to us using warnings and errors.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

