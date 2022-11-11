# lang_javascript_01#

## Item ID
1326

## Claim
Claim 3: Distinguishing Features of Language 

## Claim Behavior (evidence)


## Content Target
` Async Programming / Promises`

## Cognitive Model


## Item Type
Multiple Choice

## Stem
Function apiCall takes 50ms to asynchronously return the string 'b'. In what order do these letters log to the console?

## Code Snippet

```javascript
    async function apiCall() {
        return new Promise(resolve => {
            setTimeout(() => {resolve('b')}, 50);
    });
    };

    async function logger() {
        setTimeout(() => console.log('a'), 10);
        console.log(await apiCall());
        console.log('c');
    };
    logger();

```

## Answer Key

```
'a', 'b', 'c'
```

## Distractors

### 1.
```
'c', 'b', 'a'
```

### 2.

```
'a', 'c', 'b'
```

### 3.
```
'c', 'a', 'b'
```

## Common errors, misconceptions, or irrelevant information (optional):

Programmers may forget that await statements block function execution. setTimeout functions are not blocking, but are still asynchronous.

---