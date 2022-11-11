# Shifting Letters

## Item ID
programmatic-problem-solving-letter-shift

## Claim
Claim #2: Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

*  

## Content Target
Programmatic Problem Solving

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem
This is an implementation of a Caesar Cipher in Javascript. Choose the code that will decipher `cipheredText`.


## Code Snippet (optional)

```
const OFFSET_TO_LETTERS = 97
const NUM_LETTERS = 26

function caesarCipher(text, shift) {
    if (!Number.isInteger(shift) || shift < 0) 
        throw new Error('Shift must be greater than zero.')
  
    const charShift = charCode => (
        ((charCode - OFFSET_TO_LETTERS + shift) % NUM_LETTERS) + OFFSET_TO_LETTERS
    )

    return String.fromCharCode(
        ...text
            .split('')
            .map(c => c.charCodeAt())
            .map(charShift)
    )
}

let cipheredText = caesarCipher('triplebyte', 10)

```

## Answer Key

```
let result = caesarCipher(cipheredText, 16)
```

## Distractors

### 1.
```
let result = caesarCipher(cipheredText, 25)
```

### 2.
```
let result = caesarCipher(cipheredText, 15)
```

### 3.
```
let result = caesarCipher(cipheredText)
```


## Common errors, misconceptions, or irrelevant information (optional):

* The challenging part of this exercise is that the developer likely never knows the value of `charCode`. The developer has to reason about the arithmetic, rather than just performing the arithmetic.
* The modulo operator is commonly used for looping around a sequence of numbers.
* The offset of 97 is just where lowercase letters start in UTF-16.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
