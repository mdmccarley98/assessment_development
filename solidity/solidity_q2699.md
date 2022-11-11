# Solidity - Wrong Constructor

## Item ID
2699

## Claim
2

## Claim Behavior (evidence)
https://github.com/SmartContractSecurity/SWC-registry

https://swcregistry.io/docs/SWC-118

## Content Target
Wrong constructor

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You have been tasked to complete a contract that has two lines missing. Choose the answer that best completes the missing lines.

## Code Snippet (optional)
```solidity
pragma solidity 0.4.24;

contract Xvc{
    address private owner;

    modifier onlyowner {
        require(msg.sender==owner);
        _;
    }

    // missing line 1 _____________
        public
    {
        owner = msg.sender;
    }

    function () payable {}

    function withdraw()
        public
        onlyowner
    {
       // missing line 2 ___________
    }
}
// trailofbits.com: Apache License 2.0
```

## Answer Key
```solidity
constructor() // completes missing line 1

owner.transfer(this.balance); // completes missing line 2
```

## Distractors

### 1.
```solidity
function() // completes missing line 1

owner.transfer(this.balance); // completes missing line 2
```

### 2.
```solidity
constructor() // completes missing line 1

address.transfer(this.balance); // completes missing line 2
```

### 3.
```solidity
function() // completes missing line 1

owner.transfer(balance); // completes missing line 2
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
