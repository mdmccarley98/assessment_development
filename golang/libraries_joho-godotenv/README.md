# Go Libraries joho/godotenv

## Item ID
go-libraries-joho-godotenv

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)

> Existing envs take precedence of envs that are loaded later.  
> -- [github.com/joho/godotenv](https://github.com/joho/godotenv)

## Content Target
* package github.com/joho/godotenv

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

You are using the "joho/godotenv" package to process environment variables.

There is a `.env` file with the following contents:
```
VAL=.env file
```

You run your app with the following command:
```
VAL=command go run main.go
```

What is the value of `os.Getenv("VAL")`?

## Code Snippet (optional)


## Answer Key

```
command
```

## Distractors

### 1.
```
.env file
```

### 2.
```
command go run main.go
```

### 3.

The value is an empty string.


## Common errors, misconceptions, or irrelevant information:

The package "joho/godotenv" overwrites the `os` package's environment variable.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

