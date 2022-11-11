# OpenZeppelin library

## Item ID
2408

## Claim
Claim 3

## Target Level
2

## Claim Behavior (evidence)
https://docs.openzeppelin.com/contracts/4.x/

## Content Target
OpenZeppelin library

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
In the code below, why would a developer choose to import the OpenZeppelin ERC721.sol into his MyNFT contract?

## Code Snippet (optional)
```
// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor() ERC721("MyNFT", "MNFT") {
    }
}
// openzeppelin.com: MIT License
```

## Answer Key
OpenZeppelin is a library for secure smart contract development, and it offers implementations of standards like ERC20 and ERC721, a flexible role-based permissioning scheme, and reusable Solidity components to build custom contracts and complex decentralized systems.

## Distractors
### 1.
OpenZeppelin is a library for secure smart contract development, and it offers implementations of standards like EOS, a flexible role-based permissioning scheme, and reusable EOS components to build custom contracts and complex decentralized systems.

### 2.
OpenZeppelin is a library for secure smart contract development, and it offers implementations of standards like Bitcoin Core, a flexible role-based permissioning scheme, and reusable Bitcoin Core components to build custom contracts and complex decentralized systems.

### 3.
OpenZeppelin is a library for secure smart contract development, and it offers implementations of standards like Ripple, a flexible role-based permissioning scheme, and reusable XRP components to build custom contracts and complex decentralized systems.

## Common errors, misconceptions, or irrelevant information:
Irrelevant information: OpenZeppelin was created by Damian Brener.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
