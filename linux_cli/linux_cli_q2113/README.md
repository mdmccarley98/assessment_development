# Linux CLI 1: Environment

## Item ID
2113

## Claim
Claim 1

## Threshold Probabilities
[0.20, 0.30, 0.55, 0.75]

## Claim Behavior (evidence)
```
bash-3.2$ unset VAL
bash-3.2$ VAL=apple
bash-3.2$ ./example
VAL is ""
bash-3.2$ export VAL=orange
bash-3.2$ ./example
VAL is "orange"
bash-3.2$ VAL=pear ./example
VAL is "pear"
```

## Content Target
Scripting


## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
`./example` is a program that prints "VAL is" and then the contents of `VAL`. When running the following lines in a bash terminal, what is the output?

## Code Snippet (optional)
```bash
unset VAL
VAL=apple
./example
export VAL=orange
./example
VAL=pear ./example
```

## Answer Key
```
VAL is ""
VAL is "orange"
VAL is "pear"
```

## Distractors
### 1.
```
VAL is "apple"
VAL is "orange"
VAL is "pear"
```

### 2.
```
VAL is ""
VAL is "orange"
VAL is "orange"
```

### 3.
```
VAL is "apple"
VAL is "orange"
VAL is "orange"
```

## Common errors, misconceptions, or irrelevant information:
Same thing happens in `zsh`.

* `apple` is set in a temporary variable, which goes away
* `orange` exports the temporary into the environment
* `pear` is set in a temporary variable and then used in the `./example` command

If you use `echo` instead of the example program like this:
```bash
VAL=pear echo $VAL
```
The previous value of `$VAL` is substitued in the command string, before executing `VAL=pear`, which was `orange`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
