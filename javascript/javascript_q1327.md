# lang_javascript_02#

## Item ID
1327

## Claim
Claim 1: Using Core Syntax

## Claim Behavior (evidence)


## Content Target
`String Immutability`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
How can the runtime performance of this function be improved?

## Code Snippet

```javascript
    function reverseStr(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    }

```

## Answer Key

Split the string into an array of single characters. Reverse the array and join it back into a string.

## Distractors

### 1.
Use pointers at the first and last index of the string. Swap the characters at each pointer and increment the pointers inward and repeat until complete.

### 2.
Process the string recursively, building the reversedString letter by letter.

### 3.
The runtime performance of this function is already optimized

## Common errors, misconceptions, or irrelevant information (optional):

Strings are immutable. You cannot swap letters, and it is time intensive to build a string character by character.

---