# Reentrancy attack

## Item ID
2405

## Claim
Claim 2

## Target Level
5

## Claim Behavior (evidence)
https://dev.to/kamilpolak/reentrancy-attack-in-solidity-smart-contract-4kni

https://cryptomarketpool.com/reentrancy-attack-in-a-solidity-smart-contract/


## Content Target
Reentrancy attack 

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
A reentrancy attack involves two smart contracts. A DeFi contract "A" that contains harmful code and an untrusted attacker's contract "B".

The DeFi contract "A" calls a function in contract "B". Then contract "B" calls back into contract "A" while contract "A" is still processing. Contract "B"'s fallback function is used to call back into contract "A" to exploit the orders of operation in a poorly written function that is tracking balances.

A security auditor advises the DeFi protocol to change the following function:

Before the change:
```
function()
    checkbalance
    sendfunds
    updatebalance
```

After the change:
```
function()
    checkbalance
    updatebalance
    sendfunds
```

What is the correct reasoning that explains this approach?

## Code Snippet (optional)

## Answer Key
The change will prevent another contract’s fallback function from calling into it while processing and before updating the balance.

## Distractors
### 1.
Nothing will change inside the function. The only reasoning behind this approach is that the code looks cleaner.

### 2.
No user will ever be able to withdraw funds from this contract again, making it thus very secure to attacks.

### 3.
The change will prevent another contract’s fallback function from calling into it after processing and after updating the balance.

## Common errors, misconceptions, or irrelevant information:
- Common misconception: Nowadays the reentrancy attack is happening quite rarely, due to the fact that it is one of the oldest attack approaches.
- Correct: 
  - Albeit it is one of the oldest attack approaches, there have been numerous cases in the last two years:
    - Uniswap/Lendf.Me hacks (April 2020) – $25 mln, attacked by a hacker using a reentrancy.
    - CREAM FINANCE hack (August 2021) – $18.8 mln, reentrancy vulnerability allowed the exploiter for the second borrow.
    - Siren protocol hack (September 2021) – $3.5 mln, AMM pools were exploited through reentrancy attack.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
