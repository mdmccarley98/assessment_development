# Node.js - Error Handling with Async/Await

## Item ID
2738

## Claim
Claim 1

## Target Level
Level 2

## Threshold Probabilities
[0.50, 0.60, 0.80, 0.95]

## Claim Behavior (evidence)
> - [Node - Process](https://nodejs.org/api/process.html)

## Content Target
Node async error handling

## Cognitive Model
- Comprehend
- Use

## Item Type
Multiple Choice

## Stem
Suppose you have a Node.js backend server that stores key-value pairs in a DynamoDB NoSQL database. Assuming the call to the `writeDynamoRow` function throws an error, what would the output of this code be?

## Code Snippet

```javascript
const writeDynamoRow = async ({ item, tableName }) => {
    /* Call DynamoDB to add the item to the table */
    throw new Error('Error writing row');
}

const addProduct = async (product) => {
    try {
        await writeDynamoRow({ item: product, tableName: 'products' });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        console.log('Performing database cleanup...');
    }
}

const addProductToCart = async (product) => {
    const result = await addProduct(product);

    if (result) {
        console.log('Product added.');
    } else {
        console.log('Product not added!');
    }
}

addProductToCart({});
```

## Answer Key
```
Error: Error writing row
[stack trace]
Performing database cleanup...
Product not added!
```

## Distractors
### 1.
```
Error: Error writing row
[stack trace]
Product not added!
```

### 2.
```
Product not added!
Performing database cleanup...
Error: Error writing row
[stack trace]
```

### 3.
```
Error: Error writing row
[stack trace]
Product not added!
Performing database cleanup...
```

## Common errors, misconceptions, or irrelevant information (optional):
Here `try..catch` & `async/await` work as expected; the `await` keyword will first await the returned promise of `writeDynamoRow()` and when that promise rejects, the error will be propagated to the `catch` block, then the `finally` block, and then the `addProduct()` function will return.
- The `finally` block always executes, regardless of whether the `catch` block executes (i.e. whether an error has been caught).
- The `finally` block executes _before_ the enclosing function can return (i.e. before the `return` statement inside the `catch` block is executed).

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
