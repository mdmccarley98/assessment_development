## Item ID
2585

## Salted contract creations-create2

## Claim
1

## Claim Behavior (evidence)
https://docs.openzeppelin.com/cli/2.8/deploying-with-create2#create2-from-the-cli

https://docs.soliditylang.org/en/v0.8.12/control-structures.html#creating-contracts-via-new

## Content Target
Salted contract creations-create2

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
You are tasked with creating a new contract without using the incrementing factory contract's nonce. For the `new_address` creation, you are using this code:

```solidity
new_address = hash(0xFF, old_address, salt, ABI)
```

The code contains two bugs. Choose the option that correctly identifies and fixes the bugs.

## Code Snippet (optional)

## Answer Key
```solidity
new_address = hash(0xFF, old_address, salt, ABI)
```

should be changed to:
```solidity
new_address = hash(0xFF, sender, salt, bytecode)
```

## Distractors
### 1.
```solidity
new_address = hash(0xFF, old_address, salt, ABI)
```

should be changed to:
```solidity
new_address = hash(0xFF, old_address, salt, bytecode)
```

### 2.
```solidity
new_address = hash(0xFF, old_address, salt, ABI)
```

should be changed to:
```solidity
new_address = hash(0xFF, sender, salt, ABI)
```

### 3.
```solidity
new_address = hash(0xFF, old_address, salt, ABI)
```

should be changed to:
```solidity
new_address = hash(bytecode, old_address, salt, ABI)
```

## Common errors, misconceptions, or irrelevant information:
Common errors:

This approach is called `CREATE2` :
- sender - it is the address of the sender
- bytecode - this is the bytecode of the contract that is going to be deployed
- 0xFF  is used to prevent unnecessary collisions with `CREATE` .

Whereas when using `CREATE` the address of the new contract is computed as a function of the sender´s address and a nonce.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
