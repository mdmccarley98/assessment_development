# Full Audit Checklist

## Item ID
2594

## Claim
Claim 2

## Target Level
4

## Claim Behavior (evidence)
https://peckshield.com/

https://github.com/peckshield/publications/blob/master/PeckShield-Audit-Report-88mphv3-v1.0.pdf

## Content Target
Full Audit Checklist

## Cognitive Model
Recall

## Item Type
Multiple choice

## Stem
You have been given an *incomplete* audit checklist, which consists of the following:
- 1. Basic Coding Bugs
    - 1a. Constructor Mismatch
    - 1b. Ownership Takeover
    - 1c. Redundant Fallback Function
    - 1d. Send Instead Of Transfer
    - 1e. Costly Loop
    - 1f. (Unsafe) Use Of Untrusted Libraries
    - 1g. (Unsafe) Use Of Predictable Variables
- 2. Semantic Consistency Checks
- 3. Advanced DeFi Scrutiny
    - 3a. Business Logics Review
    - 3b. Functionality Checks
    - 3c. Authentication Management
    - 3d. Holistic Risk Management
- 4. Additional Recommendations
    - 4a. Avoiding Use of Variadic Byte Array
    - 4b. Using Fixed Compiler Version
    - 4c. Making Visibility Level Explicit
    - 4d. Making Type Inference Explicit
    - 4e. Adhering To Function Declaration Strictly

Which of the options below should NOT be added to this audit checklist?

## Code Snippet (optional)

## Answer Key
- 1. Blockchain pen test
- 2. Solidity DDOS check
- 3. Ethereum domain injection
- 4. EVM consistency pen test
- 5. Node arbitrage
- 6. EVM SafeMath

## Distractors
### 1.
- 1. Overflows & Underflows
- 2. Reentrancy
- 3. Money-Giving Bug
- 4. Blackhole
- 5. Unauthorized Self-Destruct
- 6. Deprecated Uses

### 2.
- 1. Access Control & Authorization
- 2. Oracle Security
- 3. Digital Asset Escrow
- 4. Kill-Switch Mechanism
- 5. ERC20 Idiosyncrasies Handling
- 6. Transaction Ordering Dependence

### 3.
- 1. Operation Trails & Event Generation
- 2. Frontend-Contract Integration
- 3. Deployment Consistency
- 4. Revert DoS
- 5. Unchecked External Call
- 6. Gasless Send

## Common errors, misconceptions, or irrelevant information:
- Common misconception:
    - A full audit check list  is always final and complete and can be taken as a waterproof approach to mitigate ALL vulnerabilities.
- Correct:
    - Peckshield and Halborn Security audited MonoX.
    - https://docs.monox.finance/library/audits
    - Nevertheless, this exploit happened just a couple of months after the last audit:
    - https://arstechnica.com/information-technology/2021/12/hackers-drain-31-million-from-cryptocurrency-service-monox-finance/

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
