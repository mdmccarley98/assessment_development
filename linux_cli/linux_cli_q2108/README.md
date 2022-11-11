# Linux CLI 1: Bash Parameter Expansion

## Item ID
2108

## Claim
Claim 1

## Threshold Probabilities
[0.10, 0.20, 0.50, 0.70]

## Claim Behavior (evidence)
> *${parameter:=word}*
> 
> If parameter is unset or null, the expansion of word is assigned to parameter.
> The value of parameter is then substituted. Positional parameters and special parameters may not be assigned to in this way.
>
> *${parameter^^pattern}*
>
> The ‘^’ operator converts lowercase letters matching pattern to uppercase; the
> ‘,’ operator converts matching uppercase letters to lowercase. The ‘^^’ and ‘,,’
> expansions convert each matched character in the expanded value;
>
> *${parameter/pattern/string}*
>
> The pattern is expanded to produce a pattern just as in filename expansion.
> Parameter is expanded and the longest match of pattern against its value is replaced with string.
>
> -- https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html

```
for v in 3 4 5; do
docker run -v "$PWD:/mnt" "bash:$v"
  bash example.bash
done
ID: void
ID: void
ID: void
```

## Content Target
Scripting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
What is the output of the bash code below?

## Code Snippet (optional)
```bash
#!/usr/bin/env bash

_var_one=”Id;”
_changed_var_two=”${_var_two:=void}”
_combined=”${_var_one^^} ${_changed_var_two/'void'/$_var_two}”
_output=”${_combined/';'/':'}”
echo ”${_output}”
```

## Answer Key
```
ID: void
```

## Distractors
### 1.
```
id: 
```

### 2.
```
line 4: ${_var_two:=void}: bad substitution
ID: 
```

### 3.
```
""""
```

## Common errors, misconceptions, or irrelevant information:
1. Incorrect since _var_one is set to all caps with `^^` and it is missing the 'void' substitution.
2. Incorrect since this is valid and will not throw an error.
3. This is partial output if the user copied and pasted the code from the markdown including the intentional unicode.

Running this on older versions of bash on MacOS will also throw errors.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
