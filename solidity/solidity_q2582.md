# Array Members

## Item ID
2582

## Claim
1

## Claim Behavior (evidence)
https://docs.soliditylang.org/en/v0.8.12/types.html#enums

## Content Target
Array Members

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
A fellow developer has been tasked with creating a contract to store the daily attendance of the production facility's workers by their ID number. The contract has a line missing. Please fill in the missing line.

## Code Snippet (optional)
```solidity
// SPDX-Licence-Identifier: MIT

pragma solidity 0.8.10;

contract ProductionFacility {
    uint[] workers;

    function addWorker (uint _worker) public {
        // Fill in the missing line _______________________________
    }

    function getWorker (uint _index) public view returns(uint){
        return workers[_index];
    }

    function getWorkers () public view returns(uint [] memory){
        return workers;
    }
}
```

## Answer Key
```solidity
workers.push(_worker);
```

Dynamic storage arrays and `bytes` (not `string`) have a member function called `push(x)` that you can use to append a given element at the end of the array.

## Distractors
### 1.
```solidity
workers.push();
```

Dynamic storage arrays and `bytes` (not `string`) have a member function called `push()` that you can use to append a given element at the end of the array.

### 2.
```solidity
workers.push(_addworker);
```

Dynamic storage arrays and `bytes` (not `string`) have a member function called `push(addx)` that you can use to append a given element at the end of the array.

### 3.
```solidity
workers.push(push_worker);
```

Dynamic storage arrays and `bytes` (not `string`) have a member function called `push(push_x)` that you can use to append a given element at the end of the array.

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
