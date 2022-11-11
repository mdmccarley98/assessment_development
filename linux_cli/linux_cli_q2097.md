# Linux CLI 1: hardlink

## Item ID
2097

## Claim
Claim 1

## Threshold Probabilities
[0.05, 0.20, 0.40, 0.60]

## Claim Behavior (evidence)
> How to create hard links in Linux
>
> You can use the ln command in order to create a hard link:
>
>     ln target_file link_name
>
> This will create a hard link named link_name to the target_file. You’ll see that link_name looks like a regular file and its attributes are the same as the target file.
> 
> If you use the ls -li command (the -i option shows the inode number), you’ll see that its link count is 2. The link count is after the file permission field.
> 
>     134195 -rw-r--r-- 2 abhishek abhishek        0 Jul 17 19:49  target_file
>     134195 -rw-r--r-- 2 abhishek abhishek        0 Jul 17 19:49  link_target_file
>
> Both have the same inode number 134195, obviously.
> 
> -- https://linuxhandbook.com/hard-link/

## Content Target
- File Systems
- Scripting

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The files `a.txt` and `b.txt` are hard linked. Which command will show you that this is correct?

## Code Snippet (optional)

## Answer Key
```bash
ls -i
```

## Distractors
### 1.
```bash
ls -l
```

### 2.
```bash
sudo ifconfig en0 down && ls -l
```

### 3.
```bash
sudo ls -l
```

## Common errors, misconceptions, or irrelevant information:
1. `-l` will show symbolic links, but not hard links
2. hard links have nothing to do with the network
3. same as 1, but running with a superuser does not change the output of `ls`

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
