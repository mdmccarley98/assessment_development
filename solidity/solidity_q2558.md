# Simple Smart Contract

## Item ID
2558

## Claim
Claim 1

## Claim Behavior (evidence)
https://docs.soliditylang.org/en/v0.6.1/introduction-to-smart-contracts.html#a-simple-smart-contract

## Content Target
Simple Smart Contract

## Cognitive Model
Comprehend

## Item Type
Multiple Choice 

## Stem
Below you will find a simple smart contract. Which of the listed definitions does NOT apply to this smart contract?

## Code Snippet (optional)
```solidity
pragma solidity >=0.4.0 <0.7.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
// soliditylang.org: GPL-3.0 License
```

## Answer Key
The contract defines stored contract deployer and owner `address` data.

## Distractors
### 1.
The first line tells you that the source code is written for Solidity version 0.4.0, or a newer version of the language up to, but not including version 0.7.0.

### 2.
The line `uint storedData;` declares a state variable called `storedData` of type `uint` (unsigned integer of 256 bits).

### 3.
The contract defines the functions `set` and `get` that can be used to modify or retrieve the variable's value.

## Common errors, misconceptions, or irrelevant information:
### Common errors
Storing ```address``` related data has to be declared properly.

Different Types of Address:
Ethereum addresses are the same than postal address: they represent the intended recipient for a message.
The address in the payment portion of an Ethereum transaction is the same as the beneficiary account in a bank transfer (Wood and Antonopoulos, 2018).

Externally Owned Accounts (EOA) : controlled by their private key.
The private key enable private control over access to any ether in the account and over any authentication the account needs when using smart contracts. 
They are the unique piece of information needed to create digital signatures, required to sign transactions to spend any funds in the account.

Contracts Accounts (Smart Contracts) : controlled by their code.
Unlike EOAs, there are no public or private keys associated with a smart contracts. 
Smart contracts are not backed by a private key, but by their inherent code. We can say that they “own themselves”.
Each contract’s address is derived from the contract creation transaction, as a function of the originating account and nonce. 
The Ethereum address of a contract can be used in a transaction as the recipient, sending funds to the contract or calling one of the contract’s functions.

What is (technically) an Ethereum Address?
Hash functions are the key element to create addresses. Ethereum uses the keccak-256 hash function to generate them.
In Ethereum and Solidity, an address if of 20 byte value size (160 bits or 40 hex characters). It corresponds to the last 20 bytes of the Keccak-256 hash of the public key. An address is always pre-fixed with 0x as it is represented in hexadecimal format (base 16 notation) (defined explicitly).

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
