# lang_javascript_16#

## Item ID
1341

## Claim
Claim 2: Manipulate Container Objects

## Claim Behavior (evidence)


## Content Target
`Class Methods`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
Which of the two options will successfully log the varieties in the Apple class?

## Code Snippet

```javascript
    class Apple {
        constructor() {
            this.type = 'apples'
            this.varieties = ['Granny Smith', 'Fuji', 'Pink Lady'];
        };
        logVarieties(callback) {
            // Option 1
            this.varieties.forEach(el => console.log(`We have ${el} ${this.type}.`));
            // Option 2
            this.varieties.forEach(function(el) {
                console.log(`We have ${el} ${this.type}.`)
            });
        };
    }

    const apple = new Apple();
    apple.logVarieties();
```

## Answer Key
Option 1 only

## Distractors

### 1.
Option 2 only

### 2.
Option 1 and Option 2

### 3.
Neither option

## Common errors, misconceptions, or irrelevant information (optional):
Arrow functions do not have a this context so option 1 will run, while option 2 will not.

---

