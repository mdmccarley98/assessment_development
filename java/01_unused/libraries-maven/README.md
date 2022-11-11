# Maven

## Item ID
java-libraries-maven

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages

## Claim Behavior (evidence)

* [Maven](https://maven.apache.org/) - Apache 
* [Introduction to the Dependency Mechanism](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html) - Apache


## Content Target
Frameworks

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You are setting up a project that is managed by Maven. You will need some logging facilities. So you want to add Log4j to your Maven-managed dependencies. How do you do it?


## Code Snippet (optional)


## Answer Key
Add the desired dependencies to the "dependencies" section of the `pom.xml` project configuration file.

```xml
<dependencies>
    <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-api</artifactId>
        <version>2.13.3</version>
    </dependency>
    <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-core</artifactId>
        <version>2.13.3</version>
    </dependency>
</dependencies>
```

## Distractors

### 1.
Install log4j into the Maven virtual environment with the following command:

```
mvn-env i --save log4j
```

### 2.
Add the desired dependencies to the "dependencies" section of the `dependencies.xml` file.

```xml
<dependencies>
    <dependency org="org.apache.logging.log4j" name="log4j-api" rev="2.13.3"/>
    <dependency org="org.apache.logging.log4j" name="log4j-core" rev="2.13.3"/>
</dependencies>
```

### 3.
Download the Log4j artifact JAR files and move them to the project's `lib` directory. They will be automatically added to your Maven dependencies during the next Maven lifecycle.


## Common errors, misconceptions, or irrelevant information (optional):

* There is a way of adding dependencies from the `mvn` command line, but it is a lengthy command and not the recommended approach.
* All Maven configuration information, including that for dependency management, is kept in the `pom.xml` project configuratio file.
* Maven projects, by default, do not use a `lib` directory. However it is common practice for projects that are using manual dependency management to have a `lib` directory to hold third-party dependencies.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
