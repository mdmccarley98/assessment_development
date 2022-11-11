# Linux CLI 3: CHMOD

## Item ID
2106

## Claim
Claim 3

## Threshold Probabilities
[0.20, 0.30, 0.60, 0.80]

## Claim Behavior (evidence)
> The operator + causes the selected file mode bits to be added to the existing file mode bits of each file; - causes them to be removed; and = causes them to be added and causes unmentioned bits to be removed except that a directory's unmentioned set user and group ID bits are not affected. 
> ...
> A numeric mode is from one to four octal digits (0-7), derived by adding up the bits with values 4, 2, and 1. Omitted digits are assumed to be leading zeros. The first digit selects the set user ID (4) and set group ID (2) and restricted deletion or sticky (1) attributes. The second digit selects permissions for the user who owns the file: read (4), write (2), and execute (1); the third selects permissions for other users in the file's group, with the same values; and the fourth for other users not in the file's group, with the same values. 
>
> -- https://linux.die.net/man/1/chmod

## Content Target
File Systems

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
You have created a new script that your user has ownership over but it returns the following error when you try to run `./myScript`:

```
./myScript: Permission denied
```

The permissions on the file are:
```
-rw-r--r--
```

How can you fix this error for your user?

## Code Snippet (optional)

## Answer Key
chmod 760 myScript

## Distractors
### 1.
chmod 100 myScript

### 2.
chmod -x myScript

### 3.
chown user:user myScript

## Common errors, misconceptions, or irrelevant information:
Newer linux users have a hard time understanding and setting file permissions.
1. While chmod 100 will provide executable permissions, the user will not have read or write.
2. chmod -x will remove executable permissions for the owner, group and everyone.
3. chown will only change ownership not file permissions.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
