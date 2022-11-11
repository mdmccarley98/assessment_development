# Integer overflow and underflow

## Item ID
2542

## Claim
Claim 1

## Claim Behavior (evidence)
"Fundamentals of Smart Contract Security";

by Richard Ma, Jan Gorzny, Edward Zulkoski;

Momentum Press Engineering;

New York;

2019;

Pages 53 - 56;

https://blockgeeks.com/guides/underflow-attacks-smart-contracts/

https://medium.com/haloblock/unit-underflows-and-overflows-ethereum-solidity-vulnerability-39a39355c422


## Content Target
Integer overflows and underflows

## Cognitive Model
Recall

## Item Type
Multiple choice

## Stem
How can an integer overflow or underflow be avoided?

## Code Snippet (optional)

## Answer Key
The best way of avoiding integer underflows and overflows is to check that the results of arithmetic operations are valid. If, for example, two uints x and y are added together, the result x + y should be greater or equal to x. If an overflow occurs, the property is violated.

## Distractors
### 1.
The best way of avoiding integer underflows and overflows is by writing your own functions.

### 2.
Integer underflows and overflows can only be avoided by using automated tools for smart contract analysis.

### 3.
An overflow is unlikely to happen since a number in Solidity can not get incremented above its maximum value. 

## Common errors, misconceptions, or irrelevant information:
Common errors:
1. Some developers write their own functions to prevent integer underflows and overflows instead of using OpenZeppelin's battle-tested SafeMath.sol which has been in use since 2017. The effect of doing is often quite the opposite.

2. Automated tools for smart contract analysis often report false positives and do not distinguish between a false positive and a real issue.

3. A number in Solidity can get incremented above its maximum value.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
