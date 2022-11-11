# Solidity - Flash Loan Reentrancy

## Item ID
2693

## Claim
2

## Claim Behavior (evidence)
https://rekt.news/fei-rari-rekt/

## Content Target
Flash loan reentrancy

## Cognitive Model
Comprehend

## Item Type
Multiple Choice 

## Stem
You have been tasked to identify in which cases a flash loan can be used to exploit a smart contract and drain funds. The attacker's steps are:
- 1. Flash loans a certain amount 'x', which he deposits as collateral for an amount'  y'.
- 2. The deposited collateral is subsequently used to borrow an amount 'z' via the `borrow()` function.
- 3. If the `borrow()` function does not follow the check-effect-interaction pattern, it will send funds to the attacker's contract before updating the attacker's actual borrow records.
- 4. ???
- 5. The attacker repays the flash loan and transfers the funds to their own address.

Choose the option that correctly describes the attacker's fourth step in the process to drain funds in a solidity smart contract?

## Code Snippet (optional)

## Answer Key
With the attacker's borrow record not being up to date, the attacker can make a reentrant call to `exitmarket()` in the fallback function, enabling him to withdraw all his collateral.

## Distractors
### 1.
With the attacker's borrow record not being up to date, the attacker can make a reentrant call to `finalizeloan()` in the fallback function, enabling him to withdraw all his collateral.

### 2.
With the attacker's borrow record not being up to date, the attacker can make a reentrant call to `exit()` in the fallback function, enabling him to withdraw all his collateral.

### 3.
With the attacker's borrow record not being up to date, the attacker can make a reentrant call to `loancycle()` in the fallback function, enabling him to withdraw all his collateral.

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
