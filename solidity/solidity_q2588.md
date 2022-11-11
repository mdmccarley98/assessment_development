# OpenZeppelin Contract Upgrades

## Item ID
2588

## Claim
3

## Claim Behavior (evidence)
https://docs.openzeppelin.com/upgrades-plugins/1.x/

https://docs.openzeppelin.com/learn/upgrading-smart-contracts?pref=hardhat#whats-in-an-upgrade

https://docs.openzeppelin.com/upgrades-plugins/1.x/writing-upgradeable

## Content Target
OpenZeppelin Contract Upgrades

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
You have been tasked to add features to the upgradeable `NewCarConfigurator` smart contract. The list of the to-be-added features is:
- A.) Change `uint256 private serialnumber;` to `string private serialnumber;`
- B.) Change the order and put `string private equipment;` before `string private color;`
- C.) Remove  `uint256 private horsepower;`

Will there be any issues when compiling?

## Code Snippet (optional)
```solidity
// SPDX-Licence-Identifier: MIT

pragma solidity 0.8.10;

contract NewCarConfigurator {
    uint256 private serialnumber;
    uint256 private horsepower;
    string private color;
    string private equipment;
}
```

## Answer Key
Yes, since all of the to-be-added features are not compliant with smart contract upgradeability procedures and may lead to unintended issues.

## Distractors
### 1.
No, since `uint256` will be changed to `string` during the smart contract upgrade process.

### 2.
Yes, since changing order as listed under B.) may lead to unintended issues of the upgraded contract.

### 3.
Yes, removing `uint256 private horsepower;` as listed under C.) may lead to unintended issues.

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
