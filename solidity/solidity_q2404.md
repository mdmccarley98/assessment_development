# Function Default Visibility

## Item ID
2404

## Claim
Claim 2

## Target Level
1

## Claim Behavior (evidence)
https://swcregistry.io/docs/SWC-100

https://github.com/sigp/solidity-security-blog#visibility

## Content Target
Function Default Visibility

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
The contract shown below is designed to act as an address-guessing bounty game. To win the balance of the contract, a user must generate an Ethereum address whose last eight hex characters are 0. Once obtained, they can call the `withdrawProfits()` function to get their bounty. The visibility of the functions has not been specified. Besides, the `_sendProfits()` function visibility is not set, and thus any address can call this function to steal the bounty.

Which function visibility type is specified by default?

## Code Snippet (optional)
```
pragma solidity 0.8.0;

contract HashForProfit {

    function withdrawProfits() {
        // Winner if the last 8 hex characters of the address are 0. 
        require(uint32(msg.sender) == 0);
        _sendProfits();
     }

     function _sendProfits() {
         msg.sender.transfer(this.balance);
     }
}
// swcregistry.io: MIT License
// github.com/sigp/solidity-security-blog#visibility: CC BY 4.0 License
```

## Answer Key
Functions that do not have a function visibility type specified are `public`  by default.

## Distractors
### 1.
Functions that do not have a function visibility type specified are `internal`  by default.

### 2.
Functions that do not have a function visibility type specified are `private` by default.

### 3.
Functions that do not have a function visibility type specified are `private`  and `internal` by default. 

## Common errors, misconceptions, or irrelevant information:
Common errors: Not setting the function visibility type makes the contract only accessible internally. 

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
