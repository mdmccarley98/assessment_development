# GCL: Comparing strings

## Item ID
2818

## Claim
Claim 3

## Claim Behavior (evidence)


## Target Level
Level 3

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
This code snippet prompts the user for an input and should:

<ul>
    <li>- print how many close parentheses are not paired by an open parenthesis</li>
    <li>- print how many open parentheses are not paired by a close parenthesis</li>
    <li>- print that all parentheses are closed, if all close parentheses are paired by an open parenthesis</li>
    <li>- print "no parenthesis found" if no parentheses are found</li>
</ul>

<br>
However, this code has some bugs and does not do what it should.
<br><br>
Choose the answer option that says a FALSE statement about this code.

## Code Snippet (optional)
```javascript
const checkParenthesis = (input) => {
  let count = 0;

  for (let c of input) {
    if (c === '(') {
      count++;
    }

    else if (c === ')') {
      count--;
    }

    else {
      console.log("No ( or ) found");
      return
    }
  }
  if (count > 0) {
    console.log(count + " open parenthesis not closed");
  }
  else if (count < 0) {
    console.log(Math.abs(count) + " closed parentheses are loose");
  }
  else {
    console.log("All parentheses closed");
  }
}

const input = prompt();
checkParenthesis(input);
```

## Answer Key
This program correctly handles all inputs besides the empty string input.

## Distractors

### 1.
An empty string input will output `All parentheses closed`.

### 2.
`No ( or ) found` can be printed even when the input contains parentheses.

### 3.
The input `(((())))` will return `All parentheses closed`.

## Common errors, misconceptions, or irrelevant information:
All distractors are TRUE statements about the code.
Answer key is FALSE because `))))((((` is not well handled by this code snippet. It will output `All parenthesis closed`, but by the desired output described above
this is not correct.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

