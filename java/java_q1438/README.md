# Java Domain javac

## Item ID
1438

## Claim
Claim 3: coding_tasks


## Claim Behavior (evidence)
Common Problems (and Their Solutions)
https://docs.oracle.com/javase/tutorial/getStarted/problems/

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
Sometimes an IDE isn't configured correctly, or you need to compile and run Java on a system where you don't have a GUI, and only a terminal.

You have a java project with one file `src\Example.java`
```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

The code can be compiled successfully with:
```
javac src/Example.java
```
It creates a file in the `src` folder `src/Example.class`

Running `java Example` produces the following error:
```
Error: Could not find or load main class Example
```

How do you run the example using the program `java`?

## Code Snippet


## Answer Key
```
java -classpath src Example
```

## Distractors

### 1.
```
java src/Example.class Example
```

### 2.
```
cd src
java Example.class
```

### 3.
```
cd src
java
```


## Common errors, misconceptions, or irrelevant information (optional):
The `java` command line takes a class name as an input, not a filename.
The class name is `Example`.

The "class path" needs to be correct too.  By default `java` will look
for `.class` files in the current directory, but `Example.class` is not in the current directory,
it is in the `src` folder.

You don't have to run java in the same folder as the `.class` files.
The class path can be set with the environment variable `CLASSPATH`.
It can also be set with the `-classpath` or `-cp` arguments.

Both of these command lines might work:
```
CLASSPATH=src java Example
```
or
```
java -classpath src Example
```
The second one works no matter how your shell sets an environment variable.  I.e. it even works on Windows.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

