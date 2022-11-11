# ERC3156

## Item ID
2569

## Claim
1

## Claim Behavior (evidence)
https://eips.ethereum.org/EIPS/eip-3156

## Content Target
ERC3156

## Cognitive Model
Recall

## Item Type
Multiple Choice 

## Stem
Which of the following descriptions is NOT true for the ERC3156 Flash Loan standard?

## Code Snippet (optional)

## Answer Key
The `flashLoan` function can optionally include a callback to the `onFlashLoan` function in a `IERC3156FlashBorrower` contract.

## Distractors
### 1.
The ERC3156 specifies interfaces for lenders to accept flash loan requests and for borrowers to control the transaction within the lender execution temporarily.

### 2.
A flash lending feature integrates two smart contracts using a callback pattern. These are called the LENDER and the RECEIVER.

### 3.
The `maxFlashLoan` function must return the maximum loan possible for `token`. If a `token` is not currently supported, `maxFlashLoan` must return 0 instead of reverting.

## Common errors, misconceptions, or irrelevant information:
Common errors:
The `flashLoan` function MUST include a callback to the `onFlashLoan` function in a `IERC3156FlashBorrower` contract.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
