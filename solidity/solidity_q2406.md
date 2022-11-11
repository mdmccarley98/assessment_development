# Signature Replay Attack

## Item ID
2406

## Claim
Claim 2

## Target Level
4

## Claim Behavior (evidence)
https://swcregistry.io/docs/SWC-121

## Content Target
Missing Protection against Signature Replay Attacks

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
It is sometimes necessary to perform signature verification in smart contracts to achieve better usability or save gas costs. A secure implementation needs to protect against Signature Replay Attacks by, for example, keeping track of all processed message hashes and only allowing new message hashes to be processed. A malicious user could attack a contract without such a control and get a message hash sent by another user processed multiple times. **To protect against Signature Replay Attacks which of the following recommendations should NOT be considered?**

## Code Snippet (optional)

## Answer Key
The user who interacts with the smart contract has to use a multisig wallet to receive all message hashes from the smart contract and combine them into a new hash.

## Distractors
### 1.
Store every message hash that the smart contract has processed. When new messages are received, check against the existing ones and only proceed with the business logic if it's a new message hash.

### 2.
Include the address of the contract that processes the message, ensuring that the message can only be used in a single contract.

### 3.
Do not generate the message hash, including the signature. The `ecrecover` function is susceptible to signature malleability.

## Common errors, misconceptions, or irrelevant information:
Common error: The ```ecrecover``` function is not susceptible to signature malleability.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
