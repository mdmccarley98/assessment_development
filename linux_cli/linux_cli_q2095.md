# Linux CLI 3: niceness

## Item ID
2095

## Claim
Claim 3

## Threshold Probabilities
[0.05, 0.20, 0.50, 0.70]

## Claim Behavior (evidence)
> NI  --  Nice Value
> The nice value of the task.  A negative nice value means
> higher priority, whereas a positive nice value means lower
> priority.  Zero in this field simply means priority will not
> be adjusted in determining a task's dispatch-ability.
> -- https://man7.org/linux/man-pages/man1/top.1.html

## Content Target
Troubleshooting

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Which of the following processes takes priority on this system?

```
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   27 root      21   1   23032   1368   1192 S   0.0   0.0   0:00.00 longRunner
   28 root      20   0   23032   1380   1204 S   0.0   0.0   0:00.00 longRunner2
   29 root      35  15   23032   1384   1208 S   0.0   0.0   0:00.00 longRunner3
   30 root      30  10   23032   1380   1200 S   0.0   0.0   0:00.00 longRunner4
```

## Code Snippet (optional)

## Answer Key
PID 28 - longRunner2

## Distractors
### 1.
PID 27 - longRunner

### 2.
PID 29 - longRunner3

### 3.
PID 30 - longRunner4

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
