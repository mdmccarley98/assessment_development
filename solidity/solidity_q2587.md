# Upgradeable smart contracts

## Item ID
2587

## Claim
3

## Claim Behavior (evidence)
https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/tree/v3.3.0/contracts/token/ERC20

https://docs.openzeppelin.com/learn/upgrading-smart-contracts#:~:text=Smart%20contracts%20deployed%20using%20OpenZeppelin,you%20may%20find%20in%20production.

## Content Target
Upgradeable smart contracts

## Cognitive Model
Comprehension

## Item Type
Multiple Choice 

## Stem
You have been tasked with writing a smart contract that can be upgraded to modify its code while preserving its address, state, and balance. How do you proceed?

## Code Snippet (optional)

## Answer Key
To plan for the event that the smart contract's code might be modified in the future, I will write an upgradeable contract and deploy it using the deployProxy.

## Distractors
### 1.
If the smart contract's code needs to be modified in the future, I will write a new smart contract. Then I will deploy it, transfer the balance, and forward all transactions from the old address to the new, keeping the old address in use.

### 2.
To plan for the event that the smart contract's code might be modified in the future, I will write a contract with an invoke snippet function, which enables me to change parts of an already deployed contract later.

### 3.
To plan for the event that the smart contract's code might be modified, I will write both a deployProxy contract and an upgradeable contract that I might alter in the future.

## Common errors, misconceptions, or irrelevant information:
The most reliabe process of writing secure upgradeable contracts is by using the OpenZeppelin Upgrades Plugin which includes the deployProxy.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
