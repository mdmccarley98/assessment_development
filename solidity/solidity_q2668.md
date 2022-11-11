# Solidity - Pool from Factory

## Item ID
2668

## Claim
Claim 3

## Claim Behavior (evidence)
https://etherscan.io/address/0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9#code

BasePoolFactory.sol

Lines: 45 - 50

## Content Target
Pool from Factory

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
Choose the option that correctly completes the incomplete line in the following `isPoolFromFactory` function:

## Code Snippet (optional)
```solidity
function isPoolFromFactory(address pool) external view returns (bool) {
    return _isPoolFromFactory__________;
}
```

## Answer Key
```solidity
function isPoolFromFactory(address pool) external view returns (bool) {
    return _isPoolFromFactory[pool];
}
```

## Distractors
### 1.
```solidity
function isPoolFromFactory(address pool) external view returns (bool) {
    return _isPoolFromFactory[address];
}
```

### 2.
```solidity
function isPoolFromFactory(address pool) external view returns (bool) {
    return _isPoolFromFactory[address pool];
}
```

### 3.
```solidity
function isPoolFromFactory(address pool) external view returns (bool) {
    return _isPoolFromFactory(pool);
}
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
