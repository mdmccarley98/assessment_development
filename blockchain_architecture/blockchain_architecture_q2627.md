# Blockchain Architecture - zk-SNARK

## Item ID
2627

## Claim
Claim 2

## Claim Behavior (evidence)
Zcash

https://z.cash/technology/zksnarks/

## Content Target
Blockchain Fundamentals

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
A Zero-Knowledge Succinct Non-Interactive Argument of Knowledge (zk-SNARK) is a cryptographic proof that allows one party to prove it possesses certain information without revealing that information. Zcash uses zk-SNARKs to verify that the conditions for a valid transaction have been met without exposing any crucial information about the addresses or values involved. Which of the following is NOT a high probability using this proof?

## Code Snippet (optional)

## Answer Key (Correct Answer)
It is infeasible for the nullifier of an input note to collide with the nullifier of another note.

## Distractors
### 1.
The private spending keys of the input notes are cryptographically linked to a signature over the entire transaction so that the transaction cannot be altered by a party who did not know these private keys.

### 2.
The input values add up to the output values for each shielded transfer.

### 3.
The sender demonstrates that they have the private spending keys of the input notes, granting them the power to spend.

## Common errors, misconceptions, or irrelevant information:
Common misconceptions: That zk-SNARKs reveal no knowledge or “zero knowledge” to the receiver or anyone else about the sender or the sender’s transaction. They reveal the minimum knowledge required to complete the transaction with a high confidence that fraud is not occurring.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
