# Linux CLI 1: `ls -l`

## Item ID
2111

## Claim
Claim 1

## Threshold Probabilities
[0.20, 0.40, 0.60, 0.80]

## Claim Behavior (evidence)
On a linux system run `ls -l` in the [example](./example) folder in this directory with the README.md.

## Content Target
Scripting

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The following is the contents of the current directory:

```
./.clips
./.clips/clip1.dat
./module
./module/lib.rs
./triplebyte.rs
./.config.ini
```

What is printed when we issue the command `ls -l` ?

## Code Snippet (optional)

## Answer Key
```
total 4
drwxrwxr-x 2 example example 4096 May 31 11:16 module
-rw-rw-r-- 1 example example    0 May 31 11:08 triplebyte.rs
```

## Distractors
### 1.
```
total 16
drwxrwxr-x 4 example example 4096 May 31 11:09 .
drwxrwxr-x 3 example example 4096 May 31 11:08 ..
drwxrwxr-x 2 example example 4096 May 31 11:16 .clips
-rw-rw-r-- 1 example example    0 May 31 11:08 .config.ini
drwxrwxr-x 2 example example 4096 May 31 11:16 module
-rw-rw-r-- 1 example example    0 May 31 11:08 triplebyte.rs
```

### 2.
```
.  ..  .clips  .config.ini  module  triplebyte.rs
```

### 3.
```
.:
total 16
drwxrwxr-x 4 example example 4096 May 31 11:09 .
drwxrwxr-x 3 example example 4096 May 31 11:08 ..
drwxrwxr-x 2 example example 4096 May 31 11:16 .clips
-rw-rw-r-- 1 example example    0 May 31 11:08 .config.ini
drwxrwxr-x 2 example example 4096 May 31 11:16 module
-rw-rw-r-- 1 example example    0 May 31 11:08 triplebyte.rs

./.clips:
total 8
drwxrwxr-x 2 example example 4096 May 31 11:16 .
drwxrwxr-x 4 example example 4096 May 31 11:09 ..
-rw-rw-r-- 1 example example    0 May 31 11:16 clip1.dat

./module:
total 8
drwxrwxr-x 2 example example 4096 May 31 11:16 .
drwxrwxr-x 4 example example 4096 May 31 11:09 ..
-rw-rw-r-- 1 example example    0 May 31 11:16 lib.rs
```

## Common errors, misconceptions, or irrelevant information:
Files that start with `.` are hidden by default.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
