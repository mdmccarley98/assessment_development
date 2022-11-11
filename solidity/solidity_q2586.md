# Error handling

## Item ID
2586

## Claim
1

## Claim Behavior (evidence)
https://docs.soliditylang.org/en/v0.8.12/control-structures.html#order-of-evaluation-of-expressions

## Content Target
Error handling

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
The function below has a bug. Choose the option that correctly identifies and fixes the bug.

## Code Snippet (optional)
```solidity
// SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

contract stadiumSeats {
    function checkSeatnumber(uint _input) public pure returns(string memory){
        assert(_input <= 100, "Valid VIP seat number");
        return "Your seat number is under 100 and thus VIP";
    }
}
```

## Answer Key
```solidity
assert(_input <= 100, "Valid VIP seat number");
```

should be changed to:
```solidity
require(_input <= 100, "Valid VIP seat number");
```

## Distractors
### 1.
```solidity
function checkSeatnumber(uint _input) public pure returns(string memory)
```

should be changed to:
```solidity
function checkSeatnumber(int _input) private pure bool(string)
```

### 2.
```solidity
return "Your seat number is under 100 and thus VIP";
```

should be changed to:
```solidity
reverts "Your seat number is under 100 and thus VIP";
```

### 3.
```solidity
assert(_input <= 100, "Valid VIP seat number");
```

should be changed to:
```solidity
require(_input <= 100 "Valid VIP seat number");
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
