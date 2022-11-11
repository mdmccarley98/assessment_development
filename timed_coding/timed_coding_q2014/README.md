# Encode Value to DNA Sequence

## Item ID
2014

## Claim
2

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Encode Value to DNA Sequence

## Category
Debugging

## Stem
DNA consists of an ordered sequence of nucleotides denoted by the characters "A", "C", "G", and "T". If these characters are understood as the digits 0, 1, 2, and 3, respectively, then any DNA sequence represents a number encoded in base 4. 

Write a function that takes a number in base 10, `num`, and converts it into a string representing its encoding in DNA. 

For example, 19 in base 10 is 103 in base 4, so the result should be "CAT".

Constraints:
* 0 <= num <= 10000

## Function Name
`to_DNA`

## Argument Details ("arg_name" : default_input)
{
    "num" : "19"
}

## Return Example ("return_example" : return_value)
"return_example" : "CAT"

## Time to Complete
450s

## Public Test Cases (Seen by Candidate)
### 1.
[0], "A"

### 2.
[10], "GG"

### 3.
[19], "CAT"

### 4.
[9156], "GATTACA"

## Private Test Cases (NOT Seen by Candidate)
### 1.
[301], "CAGTC"

### 2.
[676], "GGGCA"

### 3.
[119], "CTCT"

### 4.
[917], "TGCCC"

### 5.
[195], "TAAT"

### 6.
[600], "GCCGA"


## Method Stubs
```
{
  "c": "// return a null terminated malloced string\nchar* to_DNA(int num) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static String to_DNA(int num) {\n        $CURSOR\n    }\n}",
  "c++": "// return a std::string\nstring to_DNA(int num) {\n  $CURSOR\n}",
  "php": "function to_DNA($num) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static String to_DNA(int num) {\n        $CURSOR\n    }\n}",
  "ruby": "def to_DNA(num)\n  nil$CURSOR\nend",
  "swift": "func to_DNA(num: Int) -> String {\n  $CURSOR\n}",
  "golang": "func to_DNA(num int) string {\n    $CURSOR\n}",
  "haskell": "to_DNA :: Int -> String\nto_DNA num = undefined$CURSOR",
  "python2": "def to_DNA(num):\n    pass$CURSOR",
  "python3": "def to_DNA(num):\n    pass$CURSOR",
  "javascript": "function to_DNA(num) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
1

### 2.
Ten.

### 3.
Random number, 19.

### 4.
Larger value.

## Private Test Cases
### 1.
Random number, 301.

### 2.
Random number, 676.

### 3.
Random number, 119.

### 4.
Random number, 917.

### 5.
Random number, 195.

### 6.
Random number, 600.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
