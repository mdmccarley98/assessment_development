# Jar Entry Point

## Item ID
1586

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language’s core features

## Claim Behavior (evidence)

* [Setting an Application's Entry Point](https://docs.oracle.com/javase/tutorial/deployment/jar/appman.html) - Oracle

## Content Target
Application Packaging

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Java applications are often packaged and delivered as *JAR* files. For the following command, how does Java know where to begin execution?


## Code Snippet (optional)
`java -jar Example.jar`

## Answer Key
JAR files must contain a Manifest.txt file that specifies the entry point, such as:
`Main-Class: org.example.MyClass`


## Distractors

### 1.
Java executes the `main()` method, and there can only be one `main()` method per JAR file.

### 2.
Java would not be able to execute this application, because the entry point must always be specified on the command line.

### 3.
Java starts the execution with the first class on the classpath.


## Common errors, misconceptions, or irrelevant information (optional):

* JAR files can have any number of classes with `main()` methods.
* Typically, applications that are bundled as JAR files specify the entry point in the JAR Manifest.
* It is possible to start an application at an entry-point that is different than the one specified by the JAR Manifest.
* Java libraries distributed as JAR files typically do not specify an entry-point.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)