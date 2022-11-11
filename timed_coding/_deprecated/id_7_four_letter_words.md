## Item ID
7

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Four letter words

## Category
Debugging

## Stem
Write a function which takes a sentence and returns the number of four letter words it contains. Don't worry about handling punctuation.

## Function Name
four_letter_words

## Argument Details and Return Example
```
{
  "arguments": {
    "sentence": "string"
  },
  "return_example": 3
}
```

## Time to Complete
240

## Public Test Cases (Seen by Candidate)
```
[
  [
    "This sentence is fine",
    2
  ],
  [
    "So is this one",
    1
  ],
  [
    "Hello",
    0
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    "",
    0
  ],
  [
    "kasjdhfjasdfjahfdkjahsdfjhsdfhsdhgashfksadhfhsdfjsdfasdjlf",
    0
  ],
  [
    "boat",
    1
  ],
  [
    "boat boat boat boat boat boat boat boat boat boat boat boat boat boat boat boat boat boat boat boat",
    20
  ],
  [
    "abcd abcde a c cc ccc eeee ",
    2
  ],
  [
    "        ",
    0
  ],
  [
    " a       ",
    0
  ],
  [
    " aaaa       ",
    1
  ]
]
```

## Method Stubs
```
{
  "c": "int four_letter_words(char *sentence) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int four_letter_words(string sentence) {\n        $CURSOR\n    }\n}",
  "c++": "int four_letter_words(string sentence) {\n  $CURSOR\n}",
  "php": "function four_letter_words($sentence) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int four_letter_words(String sentence) {\n        $CURSOR\n    }\n}",
  "ruby": "def four_letter_words(sentence)\n  nil$CURSOR\nend",
  "swift": "func four_letter_words(sentence: String) -> Int {\n  $CURSOR\n}",
  "golang": "func four_letter_words(sentence string) int {\n    $CURSOR\n}",
  "haskell": "four_letter_words :: String -> Int\nfour_letter_words sentence = undefined$CURSOR",
  "python2": "def four_letter_words(sentence):\n    pass$CURSOR",
  "python3": "def four_letter_words(sentence):\n    pass$CURSOR",
  "javascript": "function four_letter_words(sentence) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.


### 2.


### 3.

## Private Test Cases
### 1.


### 2.


### 3.


### 4.


### 5.


### 6.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
