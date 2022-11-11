# Linux CLI - AWK FIELD SEPARATOR

## Item ID
2695

## Claim
Claim 1

## Target Skill Level
3

## Claim Behavior (evidence)
>Each field in the input record may be referenced by its position, $1, $2, and so on. $0 is the whole record. Fields need not be referenced by constants
>https://linux.die.net/man/1/awk

## Content Target
Scripting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You were given the following list of people with first names, last names, and personal IDs. However, the order is not correct. It should have been in the reverse order: personal IDs, last names, and first names. Which command will fix this?

## Code Snippet (optional)
```
# cat peopleList.txt
Robert Jordan 45
Marie Richardson 14
Pradeep Dilip 88
Albert Wing 11
Francisca Caamano 68
```

## Answer Key
`cat peopleList.txt | awk '{print $3" "$2" "$1}'`

## Distractors
### 1.
`cat peopleList.txt | sed -r 's/\S+//3'`

### 2.
`rev peopleList.txt`

### 3.
`cat peopleList.txt | cut -f3,2,1,1,2,3`

## Common errors, misconceptions, or irrelevant information:
Awk command will use whitespace to separate columns and assign variables to each field whitespace separated regardless of the lenght of whitespace
1. This command will delete the third value, instead of putting it on the first column.
2. the rev command reverse the order of all bytes as a mirror, resulting 45 in 54, 14 in 41 and so on.
3. This command has no effect

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
