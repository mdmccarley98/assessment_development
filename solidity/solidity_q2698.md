# Solidity - Write to Arbitrary Storage Location

## Item ID
2698

## Claim
2

## Claim Behavior (evidence)
https://swcregistry.io/docs/SWC-124

https://github.com/SmartContractSecurity/SWC-registry

## Content Target
Write to Arbitrary Storage Location

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
A customer's smart contract should be altered to ensure that writes to one data structure cannot inadvertently overwrite entries of another. Four lines are missing in the code. Choose the option that correctly completes those missing four lines.

## Code Snippet (optional)
```solidity
pragma solidity 0.8.1;

contract Xyx {
    uint[] private bonusCodes;
    // missing line 1 __________________________

    constructor() public {
        bonusCodes = new uint[](0);
        owner = msg.sender;
    }

    // missing line 2 ___________________________
    }

    function PushBonusCode(uint c) public {
        bonusCodes.push(c);
    }

    function PopBonusCode() public {
        // missing line 3 ________________________
        bonusCodes.length--;
    }

    function UpdateBonusCodeAt(uint idx, uint c) public {
        // missing line 4 _________________________
        bonusCodes[idx] = c;
    }

    function Destroy() public {
        require(msg.sender == owner);
        selfdestruct(msg.sender);
    }
}
// swcregistry.io: MIT licence
```

## Answer Key
```solidity
address private owner; // completes missing line 1
function () public payable { // completes missing line 2
require(0 < bonusCodes.length); // completes missing line 3
require(idx < bonusCodes.length); // completes missing line 4
```

## Distractors
### 1.
```solidity
uint address private owner; // completes missing line 1
function () public view { // completes missing line 2
require(0 <= bonusCodes.length); // completes missing line 3
require(idx < bonusCodes.length); // completes missing line 4
```

### 2.
```solidity
address private owner; // completes missing line 1
function () public payable (bool) { // completes missing line 2
require(0 < bonusCodes.length); // completes missing line 3
require(idx < bonusCodes.length); // completes missing line 4
```

### 3.
```solidity
address private owner; // completes missing line 1
function () public payable { // completes missing line 2
require(0 < bonusCodes.length); // completes missing line 3
require(idx <= bonusCodes.length); // completes missing line 4
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
