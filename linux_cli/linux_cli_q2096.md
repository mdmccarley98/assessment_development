# Linux CLI 3: mount

## Item ID
2096

## Claim
Claim 3

## Threshold Probabilities
[0.05, 0.20, 0.50, 0.70]

## Claim Behavior (evidence)
> The mounted-on directory need not be empty, although it must exist.
> Any files in it, however, will be inaccessible by name while the
> filesystem is mounted.
> -- https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/mnt.html

## Content Target
File Systems

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The `/opt/temp/companyFiles` directory contains the following files:

```
existingFile.txt
existingScript.sh
```

An administrative user ran a script that executes the following mount command:
```
mount -F -t tmpfs -o size=16gb swap /opt/temp
```

What happens to the files in `/opt/temp/companyFiles`?

## Code Snippet (optional)

## Answer Key
The files still exist but will not be accessible until `swap` is unmounted.

## Distractors
### 1.
The files have been deleted from the file system.

### 2.
The parent directory has been deleted and replaced.

### 3.
The files have been copied to a temporary file system.

## Common errors, misconceptions, or irrelevant information:
1. The files still exist. The mount is on top of the parent directory.
2. The parent directory still exists and has not been deleted.
3. The files have not been copied.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
