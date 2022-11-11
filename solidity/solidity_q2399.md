# Event 

## Item ID
2399

## Claim
Claim 1

## Target Level
2

## Claim Behavior (evidence)
Events

https://solidity-by-example.org/events/

“Mastering Ethereum – Implement advanced blockchain applications using Ethereum-supported tools, services and protocols”; author: Merunas Grincalaitis; Packt Publishing; 2019; page: 39-40;

## Content Target
Events

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
Events are a special type of function. Their purpose is to log data on the blockchain and for actions that you want to retrieve at a later date. In the contract below an event is declared. Choose the answer that describes what should replace `________` on lines 11, 12, and 13.

## Code Snippet (optional)
```solidity
pragma solidity ^0.8.10;

contract GreetingEvent {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        ________ Log(msg.sender, "Hello Triplebyte!");  // fill in the missing to complete the event
        ________ Log(msg.sender, "Have a nice day.");   // fill in the missing to complete the event
        ________ AnotherLog();  // fill in the missing to complete the event
    }
}
// solidity-by-example.org: MIT License
```

## Answer Key
`emit` is used to emit the event inside the function.

## Distractors
### 1.
`emitting` is used to emit the event inside the function.

### 2.
`emitted` is used to emit the event inside the function.

### 3.
`transmit` is used to emit the event inside the function.

## Common errors, misconceptions, or irrelevant information:
- Common error: the definition of the event contains the name of the event and not the parameters you want to save when you trigger the event. 
  - Correct: the definition also has to include the parameters.
- Common misconception: you can add an attribute indexed to up to as many parameters as you like. 
  - Correct: you can only add an attribute indexed to up to three parameters.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
