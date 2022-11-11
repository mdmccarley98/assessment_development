# Address Payable 

## Item ID
2551

## Claim
Claim 1

## Claim Behavior (evidence)
https://jeancvllr.medium.com/solidity-tutorial-all-about-addresses-ffcdf7efc4e7

https://blog.finxter.com/what-is-payable-in-solidity/

## Content Target
Address Payable

## Cognitive Model
Recall

## Item Type
Multiple choice

## Stem
Which method does NOT become available for an `address` after being defined as `payable` in Solidity?

## Code Snippet (optional)

## Answer Key
`.emit()`

## Distractors
### 1.
`.transfer()`

### 2.
`.send()`

### 3.
`.call()`

## Common errors, misconceptions, or irrelevant information:
Common errors:

`emit` is part of an `event` like in the example below:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;
// This contract keeps all Ether sent to it with no way
// to get it back.
contract Sink {
    event Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
