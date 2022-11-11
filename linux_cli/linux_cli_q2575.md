# Linux CLI 3: tail

## Item ID
2575

## Claim
Claim 3

## Threshold Probabilities

## Claim Behavior (evidence)
>       -f, --follow[={name|descriptor}]
              output appended data as the file grows;

> https://man7.org/linux/man-pages/man1/tail.1.html

## Content Target
Scripting

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
You would like to watch an application's log file in the console as the logs are written. What command would you use to accomplish this?

## Code Snippet (optional)

## Answer Key
`tail -f /var/log/my_application_log`

## Distractors
### 1.
`watch -n 0 /var/log/my_application_log`

### 2.
`cat /var/log/my_application_log`

### 3.
`vim /var/log/my_application_log`

## Common errors, misconceptions, or irrelevant information:
1. `watch` will execute the command that follows every `n` seconds. This command would throw an error since the log file is not executable.
2. `cat` will just display the contents of the file and it will not be shown in real time as the log is being written.
3. `vim` will open the file in the text editor and it will not be updated in real time.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
