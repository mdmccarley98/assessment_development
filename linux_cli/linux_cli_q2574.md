# Linux CLI 1: mkdir

## Item ID
2574

## Claim
Claim 1

## Claim Behavior (evidence)
> -p, --parents: no error if existing, make parent directories as needed

- [manpage](https://man7.org/linux/man-pages/man1/mkdir.1.html)

## Content Target
Scripting

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
You are scripting the installation of an application that requires the folder structure seen below. Which command(s) is best suited to handle this?

## Code Snippet (optional)
```
/opt
|---- myApp
      |---- current
            |---- bin
```

## Answer Key
`mkdir -p /opt/myApp/current/bin`

## Distractors
### 1.
```
mkdir /opt/
mkdir /opt/myApp/
mkdir /opt/myApp/current/
mkdir /opt/myApp/current/bin
```

### 2.
```
cd /opt/
mkdir myApp
mkdir current
mkdir bin
```

### 3.
`mkdir -F /opt/myApp/current/bin`

## Common errors, misconceptions, or irrelevant information:
1. This will fail since /opt/ exists already.
2. This will create the folders within /opt/ only and not provided the structure requested.
3. -F does not do anything and the command will fail.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
