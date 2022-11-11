# Solidity - Short Address Attack

## Item ID
2718

## Claim
2

## Claim Behavior (evidence)
https://medium.com/cryptronics/ethereum-smart-contract-security-73b0ede73fa8

https://blog.sigmaprime.io/solidity-security.html#short-address

## Content Target
Short Address Attack

## Cognitive Model
Comprehend

## Item Type
Multiple Choice 

## Stem
When analyzing ERC20 token transfers and similar contracts, it is known that byte code can be of any size. In the case of the Ethereum Virtual Machine (EVM), the missing trailing bytes are filled with 0s.
<br><br>
This behavior opens up the door for a specific attack pattern: finding an address with a hex representation ending in various 0s and leaving out these trailing 0s in a withdrawal request. This becomes an issue when third-party applications do not validate inputs.
<br><br>
What is this attack pattern called?

## Code Snippet (optional)

## Answer Key
Short Address Attack

## Distractors
### 1.
Reentrancy attack

### 2.
Delegatecall attack

### 3.
Race conditions attack

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
