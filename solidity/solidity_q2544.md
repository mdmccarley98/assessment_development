# Contract in address

## Item ID
2544

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/dhedge/dhedge-token-solidity/blob/master/contracts/AdminUpgradeabilityProxy.sol

Lines 134-135;

## Content Target
Contract in address

## Cognitive Model
Comprehension

## Item Type
Multiple choice

## Stem
What is the purpose of this function?

## Code Snippet (optional)
```solidity
function isContract(address account) internal view returns (bool) {
    uint256 size;
    assembly {
        size := extcodesize(account)
    }
    return size > 0;
}
```

## Answer Key
This function returns whether the target address is a contract. There is no better way to check if there is a contract in an address than to check the size of the code at that address.

## Distractors
### 1.
This function returns no meaningful result since there is no way to check if there is a contract in an address.

### 2.
The function returns the hash of the address.

### 3.
The function returns if the address is the owner or deployer of the contract.

## Common errors, misconceptions, or irrelevant information:
1. The size in uint256 is an inaccurate way to check if there is a contract in an address.
2. The only result that can be returned in uint256 in relation to an address is its hash.
3. The function returns the relation of the address to a particular contract.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
