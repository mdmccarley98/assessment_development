# Java Features Lambda

## Item ID
1429

## Claim
Claim 1: core_language

## Claim Behavior (evidence)
Java SE 8: Lambda Quick Start
https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html

Lambda Expressions in Java 8
https://www.geeksforgeeks.org/lambda-expressions-java-8/

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
You are creating an information page with "ok" and "cancel" buttons on it.

Now use Java lambda expressions to create an `InformationPage` object instance.
Then call `simulateActivity()` so that it prints the following to the console.
```
ok
cancel
```

## Code Snippet
```java
interface ButtonClick {
    void click(String buttonName);
}

class InformationPage {
    ButtonClick okClicked;
    ButtonClick cancelClicked;
    InformationPage(ButtonClick okClicked, ButtonClick cancelClicked) {
        this.okClicked = okClicked;
        this.cancelClicked = cancelClicked;
    }
    void simulateActivity() {
        okClicked.click("ok");
        cancelClicked.click("cancel");
    }
}
```

## Answer Key
```java
class Example {
    public static void main(String[] args){
        ButtonClick onOk = name -> System.out.println(name);
        ButtonClick onCancel = name -> System.out.println(name);
        InformationPage page = new InformationPage(onOk, onCancel);
        page.simulateActivity();
    }
}
```

## Distractors
### 1.
```java
class Example {
    public static void main(String[] args){
        ButtonClick onOk = new ButtonClick() {
            @Override
            public void click(String buttonName) {
                System.out.println(buttonName);
            }
        };
        ButtonClick onCancel = new ButtonClick() {
            @Override
            public void click(String buttonName) {
                System.out.println(buttonName);
            }
        };
        InformationPage page = new InformationPage(onOk, onCancel);
        page.simulateActivity();
    }
}
```

### 2.
```java
class Example {
    public static void main(String[] args){
        ButtonClick onOk = System.out.println(buttonName);
        ButtonClick onCancel = System.out.println(buttonName);
        InformationPage page = new InformationPage(onOk, onCancel);
        page.simulateActivity();
    }
}
```

### 3.
```java
class Example {
    public static void main(String[] args){
        ButtonClick onOk = name => System.out.println(name);
        ButtonClick onCancel = name => System.out.println(name);
        InformationPage page = new InformationPage(onOk, onCancel);
        page.simulateActivity();
    }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This uses the old syntax, not Java lambda functions.

### 2.
This is a "method reference" not strictly a Java lambda function.
`buttonName` is not defined.
However the following alternate would compile:
```java
ButtonClick onOk = System.out.println;
ButtonClick onCancel = System.out.println;
```

### 3.
Java uses the arrow operator `->` to separate the arguments from the body of a function in a lambda expression.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

