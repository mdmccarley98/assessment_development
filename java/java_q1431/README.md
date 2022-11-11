# Java Features Enum

## Item ID
1431

## Claim
Claim 1: core_language


## Claim Behavior (evidence)
Enum Types
https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html

Enums in Java
https://www.javatpoint.com/enum-in-java


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice


## Stem
You are writing a game where people choose to be on one of three teams: rock, paper, or scissors.
Each team has an advantage over the others.
So you write the game logic (below) using an `enum`.

Now you want to list all the possibilities to make sure the logic works.

Which code enumerates over Teams and prints the results of every possible combination of two teams in `winsAgainst()`?

## Code Snippet
```java
enum Team {
    ROCK,
    PAPER,
    SCISSORS;

    Boolean winsAgainst(Team opponent) {
        switch (this) {
            case ROCK:
                switch (opponent) {
                    case ROCK: return null;
                    case PAPER: return false;
                    case SCISSORS: return true;
                }
            case PAPER:
                switch (opponent) {
                    case ROCK: return true;
                    case PAPER: return null;
                    case SCISSORS: return false;
                }
            case SCISSORS:
                switch (opponent) {
                    case ROCK: return false;
                    case PAPER: return true;
                    case SCISSORS: return null;
                }
        }
        return null;
    }
}
```

## Answer Key
```
for (Team a : Team.values()) {
    for (Team b : Team.values()) {
        System.out.println(a + " wins against " + b + ": " + a.winsAgainst(b));
    }
}
```


## Distractors
### 1.
```
Arrays.stream(Team.values()).forEach((a, b) -> {
    System.out.println(a + " wins against " + b + ": " + a.winsAgainst(b));
});
```


### 2.
```
for (Team a : Team) {
    for (Team b : Team) {
        System.out.println(a + " wins against " + b + ": " + a.winsAgainst(b));
    }
}
```


### 3.
```
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.println(Team[i] + " wins against " + Team[j] + ": " + Team[i].winsAgainst(Team[j]));
    }
}
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This is a stream of just one Team `a`, but the lambda is expecting two teams, `a` and `b`.

### 2.
Java can't iterate over the type directly.
The code is missing the function `Team.values()` on the type, which will return an array of Teams.

### 3.
Java can't access a case of an enum using square brackets.
Also this code is brittle, and would need to change the hardcoded `3` if the game added more teams like DYNAMITE or LIZARD.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

