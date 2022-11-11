# Balancer Vault

## Item ID
2669

## Item 
2669

## Claim
Claim 3

## Claim Behavior (evidence)
https://docs.balancer.fi/products/the-vault

https://etherscan.io/txs?a=0xBA12222222228d8Ba445958a75a0704d566BF2C8

## Content Target
Balancer Vault

## Cognitive Model
Comprehension

## Item Type
Multiple Choice 

## Stem
The Vault is the core of Balancer, which is a smart contract that holds and manages all tokens in each Balancer pool. Which of the following definitions does NOT apply to Balancer Vaults?

## Code Snippet (optional)

## Answer Key
The unique Vault system makes gas saving possible by conducting all processes directly without interacting with the Vault smart contract.

## Distractors
### 1.
A unique, gas-saving feature is that users can hold Internal Balances in the Vault and execute trades to/from these balances.

### 2.
While the consolidated liquidity in the Vault does not change price impact on a per-pool basis, it does enable Balancer Protocol to leverage that combined liquidity by offering Flash Loans.

### 3.
The Vault smart contract interacts with an Authorizer smart contract.

## Common errors, misconceptions, or irrelevant information:
Common errors: High gas consumption of the Vault.

The Vault performs operations actually in a very gas-efficient way. 

Balancer's advantage here is that all the tokens are stored in the same contract, The Vault. 
This powerful difference allows for far greater swap efficiency. 
Instead of transferring tokens on each step of a multi-hop trade, The Vault simply keeps internal records of which pool is holding what, 
transferring tokens only at the input and output step. 

This reduction in token transfers ultimately saves a considerable amount of gas.

Nevertheless, there are almost 14000 transaction conducted weekly by interacting with the Vault.sol contract on BalancerV2.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
