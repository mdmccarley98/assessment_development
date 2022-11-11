# Timed Coding - Parsing Sentences

## Item ID
2020

## Claim
Claim 4

## Claim Behavior (evidence)
NA

## Content Target
Debugging

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Parsing Complete Sentences

## Category
Debugging

## Stem
Write a function that (1) takes a string of two complete sentences separated by a single whitespace and (2) returns the first alphanumeric character of the second sentence. 

Relevant considerations: 
- A complete sentence can start with: 
  - a capital letter or digit;
  - a single or double quotation mark, followed by a capital letter or digit; or
  - an open parentheses (`(`), followed by a capital letter or digit.

- A complete sentence can end with:
  - a punctuation mark (defined as one of the characters `?`, `!`, or `.`);
  - a closed parenthesis (`)`) preceded by a punctuation mark; or
  - a single or double quotation mark preceded by a punctuation mark.

## Function Name
`first_letter_second_sentence`

## Argument Details ("arg_name" : default_input)
{
    "two_sentences" : "In it lay a marble. Tom’s astonishment was bound-less!"
}

## Return Example ("return_example" : return_value)
"return_example" : "T"


## Time to Complete
450s

## Public Test Cases (Seen by Candidate)
### 1.
["In it lay a marble. Tom’s astonishment was bound-less!"], "T"

### 2.
["What country does he come from? Of what family is he, and where is his estate?"], "O"

### 3.
['To be a leap year, the year number must be divisible by four — except for end-of-century years, which must be divisible by 400. 2020, 2024, and 2028 are all leap years.'], '2'

### 4. 
["\"This is indeed a mystery,\" I remarked. \"What do you imagine that it means?\""], "W"

### 5. 
["\"Is that from Dr. Jekyll, sir?\" inquired the clerk. \"I thought I knew the writing. Anything private, Mr. Utterson?\""], "I"

### 6.
["\"And did the man whom you pursued travel in the same fashion?\" \"Yes.\""], "Y"

### 7.
["\"Alas!\" said she. \"How shall I ever again believe in human goodness?\""], "H"

### 8.
["\"Get along with ye,\" said she to the man, \"or I’ll be combing ye!\" \"Come on, Queequeg,\" said I, \"all right. There’s Mrs. Hussey.\""], "C"

### 9.
["\"What’s that about Cods, ma’am?\" said I, with much politeness. \"Clam or Cod?\" she repeated."], "C"

### 10.
["She said the last words out loud, and the little thing grunted in reply (it had left off sneezing by this time). \"Don’t grunt,\" said Alice \"that’s not at all a proper way of expressing yourself.\""], "D"

## Private Test Cases (NOT Seen by Candidate)
### 1.
["Two other passengers, besides the one, were plodding up the hill by the side of the mail. All three were wrapped to the cheekbones and over the ears, and wore jack-boots."], "A"

### 2.
["What was the meaning of this concourse? It was Commencement day."], "I"

### 3. 
["Good heavens! It is enough to drive me mad."], "I"

### 4. 
["\"Not I!\" said the Lory hastily. \"I thought you did,\" said the Mouse."], "I"

### 5.
["Mrs. Dilber was next. Sheets and towels, a little wearing apparel, two old-fashioned silver teaspoons, a pair of sugar-tongs, and a few boots."], "S"

### 6.
["Alas! How short-sighted is man?"], "H"

### 7.
['More than once during World War II, Jack Kennedy courageously rescued enlisted men under his command. (Many officers were beloved by their subordinates and committed unrecognized heroic actions.)'], 'M'


## Method Stubs
```
{
  "c": "// return a null terminated malloced string\nchar* first_letter_second_sentence(char* input_string) {\n  $CURSOR\n}",
  "c++": "// return a heap allocated std::string\nstring first_letter_second_sentence(string input_string) {\n  $CURSOR\n}",
  "golang": "func first_letter_second_sentence(input_string string) string {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static String first_letter_second_sentence(String input_string) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static String first_letter_second_sentence(String input_string) {\n        $CURSOR\n    }\n}",
  "swift": "func first_letter_second_sentence(input_string: String) -> String {\n  $CURSOR\n}",
  "haskell": "first_letter_second_sentence :: String -> String\nfirst_letter_second_sentence input_string = undefined$CURSOR",
  "php": "function first_letter_second_sentence($input_string) {\n  $CURSOR\n}",
  "ruby": "def first_letter_second_sentence(input_string)\n  nil$CURSOR\nend",
  "python2": "def first_letter_second_sentence(input_string):\n    pass$CURSOR",
  "python3": "def first_letter_second_sentence(input_string):\n    pass$CURSOR",
  "javascript": "function first_letter_second_sentence(input_string) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Period.

### 2. 
Question mark.

### 3. 
Sentence starts with a digit.

### 4. 
Sentence starts with a quote.

### 5.
Punctuation mark in title.

### 6. 
First sentence quoted question. Second, quoted response.

### 7.
Exclamation mark inside quotes of first sentence.

### 8.
Multiple quoted segments in both sentences.

### 9.
Quoted beginnings of both second sentences.

### 10.
Parenthesis at end of first sentence.

## Private Test Cases
### 1.
Period.

### 2.
Question mark.

### 3.
Exclamation mark.

### 4.
Quote at beginning of second sentence.

### 5.
Punctuation in title.

### 6. 
Exclamation Mark

### 7.
Parentheses at start of second sentence.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
