# Enums

## Item ID
2581

## Claim
1

## Claim Behavior (evidence)
https://docs.soliditylang.org/en/v0.8.12/types.html#enums


## Content Target
Enums

## Cognitive Model
Comprehend

## Item Type
Multiple Choice 

## Stem
You started writing a contract for choosing delivery trucks used by your company to deliver goods. The company operates 275 trucks to make deliveries all across the country. The contract below has an incomplete enum. As the next step, you plan to list all the trucks in the enum. Will there be issues when compiling the contract?

## Code Snippet (optional)
```solidity
// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

contract Delivery {
    enum TruckChoices { Truck1, Truck2, Truck3, Truck4 // the developer will fill in the missing trucks _________________________ }
}
```

## Answer Key
Yes, since enums cannot have more than 256 members.

## Distractors
### 1.
Yes, since enums can only have binary choices.

### 2.
Yes, since enums can only have less than 128 members.

### 3.
There will be no issues compiling this contract since enums can have unlimited members.

## Common errors, misconceptions, or irrelevant information:
Common errors:
Enums cannot have more than 256 members.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
