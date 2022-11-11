# programmatic_problem_solving

## Item ID
1512

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the line of code that completes the function

## Code Snippet (optional)
```java
  // function recursively reverses a string 
  public static String recursiveStringReverse(String string) {
    if (string.length() <= 1) {
      return string;
    }

    String firstCharacter = string.substring(0, 1);
    String lastCharacters = string.substring(1);

    // MISSING LINE
  }
```

## Answer Key
```java
    return recursiveStringReverse(lastCharacters) + firstCharacter;
```

## Distractors

### 1.
```java
    return recursiveStringReverse(lastCharacters);
```

### 2.
```java
    return firstCharacter + recursiveStringReverse(lastCharacters);
```

### 3.
```java
    return lastCharacters + firstCharacter;
```


## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

